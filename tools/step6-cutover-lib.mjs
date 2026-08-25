import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join, resolve } from 'node:path';

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const exactUniqueSet = (actual, expected) => Array.isArray(actual)
  && new Set(actual.map(String)).size === actual.length
  && actual.length === expected.length
  && expected.every((value) => actual.map(String).includes(String(value)));

function pathsFor(options) {
  const root = resolve(options.root);
  const run = options.run;
  const stateDirArg = options.stateDir ?? '.autopilot';
  const stateDir = isAbsolute(stateDirArg) ? stateDirArg : resolve(root, stateDirArg);
  return {
    root,
    run,
    statePath: join(stateDir, 'state.json'),
    receiptPath: resolve(root, options.receiptPath ?? `research/${run}-step6-cutover.json`),
    dispatchDir: resolve(root, options.dispatchDir ?? `research/${run}-dispatch`),
  };
}

const loadJson = (path) => {
  if (!existsSync(path)) return null;
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch { return null; }
};

function completedLegacyStep6(paths, state) {
  const required = ['6a-read', '6b-adjudicate', '6c-cross', '7-scope'];
  if (!state || state.run !== paths.run) return { ok: false, reason: 'state is missing or belongs to another run' };
  const missing = required.filter((id) => !state.stages?.[id]?.gatesPassedAt);
  if (missing.length) return { ok: false, reason: `gate-complete evidence missing for ${missing.join(', ')}` };
  const research = join(paths.root, 'research');
  const batches = existsSync(research) ? readdirSync(research)
    .map((name) => new RegExp(`^${paths.run}-batch-(\\d+)\\.pages\\.json$`).exec(name)?.[1])
    .filter(Boolean).sort((a, b) => Number(a) - Number(b)) : [];
  const assignment = loadJson(join(research, `${paths.run}-alpha-groups.json`));
  const groups = (Array.isArray(assignment) ? assignment : assignment?.groups ?? [])
    .map((group) => ({ label: String(group.label), covers: (group.covers ?? []).map(String) }));
  if (!batches.length || !groups.length) return { ok: false, reason: 'batch manifests or Alpha group assignment are missing' };
  const covered = groups.flatMap((group) => group.covers);
  if (new Set(covered).size !== covered.length || covered.length !== batches.length
    || !batches.every((batch) => covered.includes(batch))) {
    return { ok: false, reason: 'Alpha groups do not exactly partition the legacy batches' };
  }
  const evidence = [
    ...batches.flatMap((batch) => [
      join(research, `${paths.run}-reader-${batch}.md`),
      join(paths.dispatchDir, `reader-reader-${batch}.result.json`),
    ]),
    ...groups.flatMap((group) => [
      join(research, `${paths.run}-alpha-${group.label}-6b.md`),
      join(paths.dispatchDir, `alpha-6b-${group.label}.result.json`),
    ]),
    join(research, `${paths.run}-alpha-6c.md`),
    join(paths.dispatchDir, 'alpha-6c-lead.result.json'),
  ].sort();
  const absent = evidence.filter((path) => !existsSync(path));
  if (absent.length) return { ok: false, reason: `legacy Step-6 evidence missing: ${absent.join(', ')}` };
  for (const batch of batches) {
    const result = loadJson(join(paths.dispatchDir, `reader-reader-${batch}.result.json`));
    if (result?.ok !== true || !exactUniqueSet(result.covers, [batch])) {
      return { ok: false, reason: `legacy reader result for batch ${batch} is not successful exact coverage` };
    }
  }
  for (const group of groups) {
    const result = loadJson(join(paths.dispatchDir, `alpha-6b-${group.label}.result.json`));
    if (result?.ok !== true || !exactUniqueSet(result.covers, group.covers)) {
      return { ok: false, reason: `legacy Alpha result for group ${group.label} is not successful exact coverage` };
    }
  }
  const lead = loadJson(join(paths.dispatchDir, 'alpha-6c-lead.result.json'));
  if (lead?.ok !== true || !exactUniqueSet(lead.covers, ['all'])) {
    return { ok: false, reason: 'legacy lead-Alpha result is not successful exact coverage' };
  }
  return { ok: true, required, evidence };
}

export function inspectLegacyStep6Cutover(options) {
  const paths = pathsFor(options);
  const state = loadJson(paths.statePath);
  const receipt = loadJson(paths.receiptPath);
  const completed = completedLegacyStep6(paths, state);
  const errors = [];
  if (!receipt) errors.push('cutover receipt is missing or invalid');
  else if (receipt.version !== 1 || receipt.run !== paths.run || receipt.mode !== 'legacy-step6-complete') {
    errors.push('wrong receipt version, run, or mode');
  }
  if (!completed.ok) errors.push(completed.reason);
  if (receipt) {
    const expectedStages = completed.ok ? completed.required : ['6a-read', '6b-adjudicate', '6c-cross', '7-scope'];
    const stages = Array.isArray(receipt.completed_stages) ? receipt.completed_stages : [];
    if (stages.length !== expectedStages.length || !expectedStages.every((id) => stages.includes(id))) {
      errors.push('completed_stages does not exactly name the required legacy boundary');
    }
    const gateKeys = Object.keys(receipt.gates_passed_at ?? {});
    if (gateKeys.length !== expectedStages.length || !expectedStages.every((id) => gateKeys.includes(id))) {
      errors.push('gates_passed_at does not exactly cover completed_stages');
    }
    for (const id of expectedStages) {
      if (receipt.gates_passed_at?.[id] !== state?.stages?.[id]?.gatesPassedAt) {
        errors.push(`${id}: durable gate timestamp no longer matches the receipt`);
      }
    }
    const relative = (path) => path.startsWith(`${paths.root}/`) ? path.slice(paths.root.length + 1) : path;
    const expectedEvidence = completed.ok ? completed.evidence.map(relative) : [];
    const evidence = receipt.evidence_sha256 ?? {};
    const evidenceKeys = Object.keys(evidence);
    if (evidenceKeys.length !== expectedEvidence.length || !expectedEvidence.every((path) => evidenceKeys.includes(path))) {
      errors.push('evidence_sha256 does not exactly cover every required reader and Alpha artifact');
    }
    for (const [path, expected] of Object.entries(evidence)) {
      if (!/^[a-f0-9]{64}$/.test(String(expected))) errors.push(`${path}: cutover evidence hash is malformed`);
      const full = resolve(paths.root, path);
      if (!existsSync(full)) errors.push(`${path}: cutover evidence is missing`);
      else if (sha256(readFileSync(full)) !== expected) errors.push(`${path}: cutover evidence changed`);
    }
  }
  return { ok: errors.length === 0, errors, paths, state, receipt, completed };
}

export function prepareLegacyStep6Cutover(options) {
  const paths = pathsFor(options);
  if (existsSync(paths.receiptPath)) return inspectLegacyStep6Cutover(options);
  const state = loadJson(paths.statePath);
  if (state?.paused !== true) return {
    ok: false, errors: ['run must be durably paused before preparing a Step-6 cutover receipt'],
    paths, state, receipt: null, completed: { ok: false, reason: 'run is not paused' },
  };
  const completed = completedLegacyStep6(paths, state);
  if (!completed.ok) return { ok: false, errors: [completed.reason], paths, state, receipt: null, completed };
  const relative = (path) => path.startsWith(`${paths.root}/`) ? path.slice(paths.root.length + 1) : path;
  const receipt = {
    version: 1,
    run: paths.run,
    mode: 'legacy-step6-complete',
    completed_stages: completed.required,
    gates_passed_at: Object.fromEntries(completed.required.map((id) => [id, state.stages[id].gatesPassedAt])),
    evidence_sha256: Object.fromEntries(completed.evidence.map((path) => [relative(path), sha256(readFileSync(path))])),
    at: new Date().toISOString(),
  };
  writeFileSync(paths.receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
  return inspectLegacyStep6Cutover(options);
}
