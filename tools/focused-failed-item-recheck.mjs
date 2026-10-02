#!/usr/bin/env node
// Recheck only item subjects already named by a recorded failed gate. This
// helper never stamps autopilot state or claims a whole-stage gate pass.
//
//   node tools/focused-failed-item-recheck.mjs --evidence FILE [--repo DIR]
//
// Evidence is an operator-built projection of native gate records:
// {
//   "version": 1, "run": "...",
//   "gates": {
//     "depcheck": {"complete": true, "failed_subjects": ["lem-x"]},
//     "precheck": {"complete": false, "failed_subjects": ["thm-y"]}
//   },
//   "retained_pass_inputs": {
//     "depcheck": [{"id":"lem-z","inputs":[{"path":"items/lem-z.md","sha256":"..."}]}]
//   }
// }
// Incomplete historical diagnostics may name only known subjects; those exact
// subjects can be checked, while the result remains explicitly focused/incomplete.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export const FOCUSED_GATES = ['depcheck', 'fwdcheck', 'precheck', 'rendercheck'];
const ID_RE = /^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

function itemPath(repo, id) { return join(repo, 'items', `${id}.md`); }
function validIds(ids, label) {
  if (!Array.isArray(ids) || ids.some(id => typeof id !== 'string' || !ID_RE.test(id)))
    throw new Error(`${label} must be an array of canonical item IDs`);
  if (new Set(ids).size !== ids.length) throw new Error(`${label} contains duplicate IDs`);
  return [...ids].sort();
}

function verifyRetainedPassInputs(repo, retainedPassInputs = {}, failedByGate = {}) {
  const retained = {}, invalidated = {};
  for (const gate of FOCUSED_GATES) {
    const rows = retainedPassInputs[gate] ?? [];
    if (!Array.isArray(rows)) throw new Error(`${gate}: retained_pass_inputs must be an array`);
    retained[gate] = [];
    invalidated[gate] = [];
    const failed = new Set(failedByGate[gate] ?? []);
    for (const row of rows) {
      if (!ID_RE.test(row?.id ?? '') || !Array.isArray(row.inputs) || row.inputs.length === 0)
        throw new Error(`${gate}: malformed retained-pass input for ${row?.id ?? '(unknown)'}`);
      if (failed.has(row.id)) throw new Error(`${gate}/${row.id}: evidence marks the same subject both passed and failed`);
      const mismatches = [];
      for (const input of row.inputs) {
        if (typeof input?.path !== 'string' || !/^[a-f0-9]{64}$/.test(input.sha256 ?? ''))
          throw new Error(`${gate}/${row.id}: malformed input hash`);
        const path = resolve(repo, input.path);
        if (!path.startsWith(`${resolve(repo)}/`) || !existsSync(path)) {
          mismatches.push({ path: input.path, expected: input.sha256, actual: null });
          continue;
        }
        const actual = hash(readFileSync(path));
        if (actual !== input.sha256) mismatches.push({ path: input.path, expected: input.sha256, actual });
      }
      if (mismatches.length) invalidated[gate].push({ id: row.id, mismatches });
      else retained[gate].push(row.id);
    }
    retained[gate].sort();
    invalidated[gate].sort((a, b) => a.id.localeCompare(b.id));
  }
  return { retained, invalidated };
}

export function focusedCommands(repo, gate, ids, selectionFile) {
  if (!FOCUSED_GATES.includes(gate)) throw new Error(`unsupported focused gate ${gate}`);
  const sorted = validIds(ids, `${gate} failed_subjects`);
  if (!sorted.length) return null;
  if (gate === 'depcheck') return [process.execPath, join(repo, 'tools/depcheck.mjs'), '--items-file', selectionFile, '--json'];
  if (gate === 'fwdcheck') return [process.execPath, join(repo, 'tools/fwdcheck.mjs'), '--items-file', selectionFile, '--json'];
  const files = sorted.map(id => itemPath(repo, id));
  if (gate === 'precheck') return [process.execPath, join(repo, 'tools/tsx-run.mjs'), join(repo, 'tools/precheck.mts'), ...files, '--json'];
  return [process.execPath, join(repo, 'tools/rendercheck.mjs'), ...files, '--json'];
}

function spawnCapture(command, args, cwd) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '';
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', code => resolvePromise({ code, stdout, stderr }));
  });
}

function itemIdFromPath(value, repo) {
  const text = String(value ?? '').replaceAll('\\', '/');
  const root = `${resolve(repo).replaceAll('\\', '/')}/`;
  const relative = text.startsWith(root) ? text.slice(root.length) : text;
  return /(?:^|\/)items\/([a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*)\.md$/.exec(relative)?.[1] ?? null;
}

function parseOutput(gate, run, repo, selected) {
  let data;
  try { data = JSON.parse(run.stdout); }
  catch { return { complete: false, remaining_item_failures: [], global_errors: [`${gate}: checker output was not JSON`], output_sha256: hash(run.stdout), exit_code: run.code }; }
  const failures = new Set(), global = [];
  if (gate === 'depcheck' || gate === 'fwdcheck') {
    if (!Array.isArray(data.errors)) return { complete: false, remaining_item_failures: [], global_errors: [`${gate}: JSON omitted errors`], output_sha256: hash(run.stdout), exit_code: run.code };
    const globalCodes = gate === 'depcheck'
      ? new Set(['item-cycle', 'page-cycle', 'page-item-missing', 'page-item-dup', 'draft-on-published-page', 'justification-backward', 'b-leaf-allowlist'])
      : new Set(['forward-cycle', 'stack-cycle', 'plan-order-broken', 'page-link-unresolved']);
    for (const row of data.errors) {
      const id = itemIdFromPath(row.msg, repo);
      if (id && selected.includes(id) && !globalCodes.has(row.code)) failures.add(id);
      else global.push({ code: row.code, message: row.msg });
    }
  } else if (gate === 'precheck') {
    if (!Array.isArray(data.results)) return { complete: false, remaining_item_failures: [], global_errors: ['precheck: JSON omitted results'], output_sha256: hash(run.stdout), exit_code: run.code };
    for (const row of data.results) if (['fail', 'repair'].includes(row.status)) failures.add(row.item_id);
  } else {
    if (!Array.isArray(data.errors)) return { complete: false, remaining_item_failures: [], global_errors: ['rendercheck: JSON omitted errors'], output_sha256: hash(run.stdout), exit_code: run.code };
    for (const row of data.errors) {
      const id = itemIdFromPath(row.file, repo);
      if (id && selected.includes(id)) failures.add(id);
      else global.push({ code: row.code, file: row.file, message: row.msg });
    }
  }
  return { complete: true, remaining_item_failures: [...failures].sort(), global_errors: global,
    output_sha256: hash(run.stdout), exit_code: run.code };
}

/** Run only exact failed subjects. Retained passes are verified from caller-supplied
 *  native evidence; changed inputs are reported as invalidated, never retained. */
export async function runFocusedFailedChecks({ repo, evidence, runner = spawnCapture } = {}) {
  repo = resolve(repo ?? process.cwd());
  if (evidence?.version !== 1 || typeof evidence.run !== 'string' || !evidence.gates || typeof evidence.gates !== 'object')
    throw new Error('evidence must be a version-1 native gate record with run and gates');
  const failures = {};
  const selected = new Set();
  const historicalCompleteness = {};
  for (const gate of FOCUSED_GATES) {
    const row = evidence.gates[gate];
    if (!row) continue;
    if (typeof row.complete !== 'boolean') throw new Error(`${gate}: record must state whether its historical subjects are complete`);
    const ids = validIds(row.failed_subjects ?? [], `${gate} failed_subjects`);
    for (const id of ids) {
      if (!existsSync(itemPath(repo, id))) throw new Error(`${gate}: failed subject is not a current item: ${id}`);
      selected.add(id);
    }
    failures[gate] = ids;
    historicalCompleteness[gate] = row.complete;
  }
  const failedByGate = Object.fromEntries(FOCUSED_GATES.map(gate => [gate, failures[gate] ?? []]));
  const passCheck = verifyRetainedPassInputs(repo, evidence.retained_pass_inputs ?? {}, failedByGate);
  if (!selected.size) return {
    version: 1, run: evidence.run, scope: 'focused-failed-items', native_gate_pass: false,
    selected: [], blocked: 'no exact failed item IDs were supplied', retained_passes: passCheck.retained,
    invalidated_passes: passCheck.invalidated, historical_completeness: historicalCompleteness, checks: {},
  };

  const result = { version: 1, run: evidence.run, scope: 'focused-failed-items', native_gate_pass: false,
    selected: [...selected].sort(), retained_passes: passCheck.retained, invalidated_passes: passCheck.invalidated,
    historical_completeness: historicalCompleteness, checks: {} };
  const temp = mkdtempSync(join(tmpdir(), 'focused-failed-item-recheck-'));
  try {
    for (const gate of FOCUSED_GATES) {
      const ids = failures[gate] ?? [];
      if (!ids.length) continue;
      const selectionFile = join(temp, `${gate}-items.json`);
      writeFileSync(selectionFile, JSON.stringify(ids, null, 2) + '\n');
      const command = focusedCommands(repo, gate, ids, selectionFile);
      const run = await runner(command[0], command.slice(1), repo);
      result.checks[gate] = { selected: ids, historical_complete: historicalCompleteness[gate], ...parseOutput(gate, run, repo, ids) };
    }
  } finally { rmSync(temp, { recursive: true, force: true }); }
  result.selected_checks_passed = Object.values(result.checks).every(row => row.complete && row.exit_code === 0
    && row.remaining_item_failures.length === 0 && row.global_errors.length === 0);
  result.selected_items_clear = result.selected_checks_passed
    && Object.values(result.checks).every(row => row.historical_complete === true);
  return result;
}

function readJson(path) {
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (error) { throw new Error(`cannot read evidence ${path}: ${error.message}`); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const argv = process.argv.slice(2);
    const get = key => { const i = argv.indexOf(`--${key}`); return i < 0 ? undefined : argv[i + 1]; };
    if (!get('evidence')) throw new Error('Usage: focused-failed-item-recheck.mjs --evidence FILE [--repo DIR] [--report FILE]');
    const repo = resolve(get('repo') ?? process.cwd());
    const result = await runFocusedFailedChecks({ repo, evidence: readJson(resolve(get('evidence'))) });
    const output = JSON.stringify(result, null, 2) + '\n';
    if (get('report')) writeFileSync(resolve(get('report')), output);
    process.stdout.write(output);
    process.exitCode = result.selected_items_clear ? 0 : 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
