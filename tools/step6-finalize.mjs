#!/usr/bin/env node
// Native serial preparation -> complete gate barrier -> report -> commit.
// Importing this module never runs the CLI or grants native coverage.
import { existsSync, lstatSync, readFileSync, writeFileSync, realpathSync, openSync, readSync, closeSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { atomicJSON, checkMetadataAndRender, digest, gateInventory, preparedPath, readJSON,
  sourceState, stateDirectory, registerStateDirectory, statFingerprint, validatePrepared } from './step6-prepared.mjs';
import { commitStep6 } from './step6-commit.mjs';
import { makeSummaryResponse, renderSummaryReport, step6Telemetry } from './step6-summary.mjs';
import { writeRenderingQuality } from './rendering-quality.mjs';

const TOOL_ROOT = dirname(fileURLToPath(import.meta.url));
const VALIDATED_STAGE = '6-final-validation-v3';
const memo = new Map();
const eventMemo = new Map();
function failedBatteryGeneration(root, run, physics) {
  const file = join(stateDirectory(root, run, physics), 'events.jsonl');
  const size = lstatSync(file).size, cached = eventMemo.get(file);
  if (cached?.size === size) return cached.failure;
  const offset = cached && size >= cached.size ? cached.size : 0;
  const bytes = Buffer.alloc(size - offset), fd = openSync(file, 'r');
  try {
    let read = 0;
    while (read < bytes.length) {
      const n = readSync(fd, bytes, read, bytes.length - read, offset + read);
      if (!n) throw Error('Native events changed during preparation');
      read += n;
    }
  } finally { closeSync(fd); }
  const lines = ((offset ? cached.pending : '') + bytes.toString('utf8')).split('\n');
  const pending = lines.pop();
  const rows = lines.filter(Boolean).map(line => JSON.parse(line));
  let active = offset ? cached.active : false, failure = offset ? cached.failure : null;
  for (const row of rows) {
    if (row.type === 'gates') active = row.message?.startsWith(VALIDATED_STAGE + ': running ');
    if (active && (row.type === 'gate' || row.type === 'gate-advisory') && row.ok !== true) failure = row.at + ':' + row.id;
    if (active && row.type === 'gates-ok') active = false;
  }
  eventMemo.set(file, { size, failure, active, pending }); return failure;
}
const resultLimit = 16 * 1024 * 1024;
function invoke(root, tool, args, { physics = false, commands = [], env = {} } = {}) {
  const absolute = join(TOOL_ROOT, physics ? 'physics-support' : '', tool);
  const startedAt = new Date().toISOString();
  const result = spawnSync(process.execPath, [absolute, ...args], { cwd: root, encoding: 'utf8',
    env: { ...process.env, ...(physics ? { PHYSICS_REPO: root } : {}), ...env }, maxBuffer: resultLimit, timeout: 900_000 });
  const evidence = { argv: [...(Object.keys(env).length ? ['env', ...Object.entries(env).map(([key, value]) => `${key}=${value}`)] : []), 'node', (physics ? 'tools/physics-support/' : 'tools/') + tool, ...args],
    startedAt, endedAt: new Date().toISOString(), code: result.status,
    stdout: result.stdout ?? '', stderr: result.stderr ?? '', error: result.error?.message ?? null };
  commands.push(evidence);
  if (result.error || result.status !== 0) throw Error(`${tool}: ${result.error?.message ?? result.stderr ?? result.stdout}`);
  return evidence;
}
function state(root, run, physics) {
  const value = readJSON(join(stateDirectory(root, run, physics), 'state.json'));
  if (value.run !== run) throw Error('Foreign native state');
  return value;
}
function drained(value, { allowFinalize = false } = {}) {
  for (const [key, dispatch] of Object.entries(value.dispatches ?? {})) {
    if (!dispatch.startedAt || dispatch.endedAt) continue;
    if (allowFinalize && key === '6-finalize-v3:step6-finalize-v3'
      && dispatch.role === 'tool' && dispatch.label === 'step6-finalize-v3') continue;
    throw Error(`Live native writer/dispatch: ${key}`);
  }
}
function seedNeeded(root, run) {
  const file = join(root, 'research', `${run}-pathway-closure.json`);
  if (!existsSync(file)) return true;
  const closure = readJSON(file), placement = readJSON(join(root, 'research', `${run}-pathway.json`));
  const key = row => [String(row.category), String(row.part), [...new Set(row.gained ?? [])].map(String).sort()];
  const normalize = rows => rows.map(key).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  return closure.run !== run || !Array.isArray(closure.briefs)
    || JSON.stringify(normalize(closure.briefs)) !== JSON.stringify(normalize(placement.briefsToRevisit ?? []));
}
export function prepareStep6(root, run, { physics = false } = {}) {
  const commands = [];
  invoke(root, 'defect-ledger.mjs', ['render'], { physics, commands });
  invoke(root, 'touchlog.mjs', ['snap', `research/${run}-touches.json`, 'pre-closeout-v3', '--step6-run', run, '--idempotent'], { physics, commands });
  invoke(root, 'pathway-sync.mjs', ['--run', run], { physics, commands });
  // Keep genuine completed prose obligations when the actual placement scope
  // still owes exactly them; never force a vacuous rewrite on a quiet reload.
  if (seedNeeded(root, run)) invoke(root, 'pathway-closure.mjs', ['seed', '--run', run], { physics, commands });
  const receipt = { version: 1, run, physics, kind: 'actual-step6-mechanical-preparation', at: new Date().toISOString(), commands };
  atomicJSON(join(stateDirectory(root, run, physics), 'step6-mechanical-preparation.json'), receipt);
  return receipt;
}
export async function prepareFinal(root, run, { physics = false } = {}) {
  const commands = [];
  const s = state(root, run, physics);
  // The current preparation tool itself is the only permitted active dispatch.
  for (const [key, dispatch] of Object.entries(s.dispatches ?? {})) {
    if (dispatch.startedAt && !dispatch.endedAt && key !== `${VALIDATED_STAGE}:step6-prepare-final-v3`)
      throw Error(`Preparation requires other native writers drained: ${key}`);
  }
  const prefix = physics ? './physics-support/' : './';
  // Bind physics stamps to the same frozen lineage as closure and coverage.
  // The mathematics caller keeps its existing configured environment.
  const judgeEnv = physics ? { JUDGE_LINEUP:
    (await import(prefix + 'original-judge-lineup.mjs')).originalJudgeLineup({ repo: root, run }) } : {};
  const { runPages } = await import(prefix + 'item-dependency-levels.mjs');
  const pages = runPages(root, run), batches = [...new Set(pages.map(page => String(page.batch)))];
  const currency = physics ? await import('./physics-support/step6-currency-repair.mjs') : null;
  const judged = currency?.beginStep6CurrencyRepair(root,run);
  invoke(root, 'defect-ledger.mjs', ['render'], { physics, commands });
  invoke(root, 'apply-judge-stamps.mjs', ['--ledger', `research/${run}-judge.jsonl`, '--exclude-published',
    ...(!physics ? ['--step5-run', run] : []), '--manifests', batches.map(batch => `research/${run}-batch-${batch}.pages.json`).join(','),
    '--terminal-resolutions', `research/${run}-step5-terminal-resolutions.jsonl`, '--run', run,
    '--auditor-certifications', `research/${run}-step7-auditor-certifications.json`, '--apply', '--report', `research/${run}-judge-stamps.json`], {
      physics, commands, env: {...judgeEnv,...(judged?.status==='judged'?{PRESTIGE_STEP6_CURRENCY_STAMP:judged.sha256}:{})} });
  currency?.finishStep6CurrencyRepair(root,run);
  let actual;
  try{actual=await checkMetadataAndRender(root,run,{physics});}
  catch(error){
    if(judged&&/Invalid original (?:maintenance|rendering successor): (?:changed|unbound) input .*items\//.test(String(error?.message)))
      throw Error(`Root raw-consumer authority rebind required after native stamping; genuine judgments remain in research/${run}-step6-currency-authority.json. ${error.message}`);
    throw error;
  }
  atomicJSON(join(root, 'research', `${run}-proof-layout.json`), actual.layoutReceipt);
  writeRenderingQuality(root, run, actual.renderingQuality);
  invoke(root, 'publication-ready.mjs', ['--run', run, '--write'], { physics, commands });
  invoke(root, 'step6-report.mjs', ['evidence', '--run', run], { physics, commands });
  invoke(root, 'step6-report.mjs', ['snapshot', '--run', run], { physics, commands });
  const source = sourceState(root, run, { physics });
  const cert = { version: 1, kind: 'actual-step6-format-metadata-preparation', run, physics,
    startedAt: actual.startedAt, reviewedAt: actual.reviewedAt, completedAt: new Date().toISOString(),
    mathematical_review: false, gate_pass_created: false,
    metadata: actual.metadata, formatting: actual.formatting, source,
    renderingQuality: { fingerprint: actual.renderingQuality.fingerprint, errors: actual.renderingQuality.errors.length,
      warnings: actual.renderingQuality.warnings.length, files: actual.renderingQuality.files.length },
    repairRound: s.stages?.[VALIDATED_STAGE]?.fixRounds ?? 0, commands };
  atomicJSON(preparedPath(root, run, physics), cert);
  return cert;
}

export async function prepareFinalIfChanged({ ctx, executor, stage, physics = false }) {
  if (ctx.doctor || stage.id !== VALIDATED_STAGE || executor.state.paused
    || executor.inflight.size || executor.liveDispatchLabels().length
    || !executor.stageStatus(stage, ctx).unitsDone || executor.state.data.stages[stage.id]?.gatesPassedAt) return;
  const root = ctx.repo, run = ctx.run, key = `${root}\0${run}\0${physics}`;
  registerStateDirectory(root, run, { physics, stateDir: ctx.config?.stateDir ?? ctx.stateDir });
  const path = preparedPath(root, run, physics);
  let cert = readJSON(path);
  const round = executor.state.data.stages[stage.id]?.fixRounds ?? 0;
  const failedBattery = failedBatteryGeneration(root, run, physics);
  const stamp = statFingerprint(root, cert.source.physicalPaths);
  const cached = memo.get(key);
  // A quiet tick performs no subprocess, content hashing or renderer scan.
  if (cached?.stamp === stamp && cached.round === round && cached.failedBattery === failedBattery
    && cached.version === executor.stateVersion) return;
  const current = sourceState(root, run, { physics });
  if (cert.source.sha256 !== current.sha256 || cert.repairRound !== round
    || failedBattery && cert.afterFailedBattery !== failedBattery) {
    cert = await prepareFinal(root, run, { physics });
    executor.reporter.event('step6-prepared', { stage: stage.id, run,
      prepared_sha256: digest(JSON.stringify(cert)), source_sha256: cert.source.sha256,
      mathematical_review: false, gate_pass_created: false });
  }
  cert.afterFailedBattery = failedBattery;
  const gates = gateInventory(stage.gates(ctx));
  cert.gates = gates; cert.gateInventorySha256 = digest(JSON.stringify(gates));
  cert.validationStage = stage.id;
  atomicJSON(path, cert);
  memo.set(key, { stamp: statFingerprint(root, cert.source.physicalPaths), round, failedBattery, version: executor.stateVersion });
}

function nativeFinalBattery(root, run, cert, { physics = false } = {}) {
  const s = state(root, run, physics), predecessor = s.stages?.[VALIDATED_STAGE];
  if (s.stage !== '6-finalize-v3' || s.finishedAt || !predecessor?.doneAt || !predecessor.gatesPassedAt
    || predecessor.skipped || predecessor.routedTo || predecessor.routedOutcome === 'failed'
    || Date.parse(predecessor.gatesPassedAt) < Date.parse(cert.completedAt)
    || Date.parse(predecessor.doneAt) < Date.parse(predecessor.gatesPassedAt))
    throw Error('Final transaction requires actual immediately preceding completed native final validation');
  drained(s, { allowFinalize: true });
  if (cert.validationStage !== VALIDATED_STAGE || !Array.isArray(cert.gates) || !cert.gates.length
    || cert.gates.some(gate => gate.required !== true)
    || cert.gateInventorySha256 !== digest(JSON.stringify(cert.gates)))
    throw Error('Prepared certificate lacks the real final gate inventory');
  const events = readFileSync(join(stateDirectory(root, run, physics), 'events.jsonl'), 'utf8')
    .split('\n').filter(Boolean).map(line => JSON.parse(line));
  const message = `${VALIDATED_STAGE}: running ${cert.gates.length} gate(s)`;
  let at = -1;
  for (let i = 0; i < events.length; i++) if (events[i].type === 'gates' && events[i].message === message) at = i;
  if (at < 0 || Date.parse(events[at].at) < Date.parse(cert.completedAt)) throw Error('No actual current native final gate battery');
  const tail = events.slice(at + 1);
  const results = tail.filter(row => row.type === 'gate');
  const green = tail.findIndex(row => row.type === 'gates-ok' && row.message === `${VALIDATED_STAGE}: all gates green`);
  const clear = tail.findIndex(row => row.type === 'stage-clear' && row.message?.startsWith(`${VALIDATED_STAGE} cleared —`));
  if (green < 0 || clear <= green || results.length !== cert.gates.length
    || results.some((row, i) => row.id !== cert.gates[i].id || row.ok !== true || row.skipped)
    || tail.slice(0, green).filter(row => row.type === 'gate').length !== cert.gates.length
    || tail.some(row => row.type === 'gate-advisory' || row.type === 'blocked' && row.stage === VALIDATED_STAGE))
    throw Error('Native final battery is incomplete, failed, skipped or stale');
  const dispatches = Object.entries(s.dispatches ?? {}).filter(([key]) => key.startsWith(VALIDATED_STAGE + ':'));
  const preparedDispatch = dispatches.find(([key]) => key === `${VALIDATED_STAGE}:step6-prepare-final-v3`)?.[1];
  if (!preparedDispatch?.endedAt || preparedDispatch.lastExitOk !== true)
    throw Error('No actual successful native final preparation dispatch');
  return { state: s, native: { stage: VALIDATED_STAGE, enteredAt: predecessor.enteredAt,
    gatesPassedAt: predecessor.gatesPassedAt, doneAt: predecessor.doneAt,
    gate_inventory_sha256: cert.gateInventorySha256, gate_results_sha256: digest(JSON.stringify(results)),
    gates: results.map(row => ({ id: row.id, ok: row.ok, at: row.at, checked: row.checked ?? null })) } };
}
export async function finalizeStep6(root, run, { physics = false, finalReceipt, validatedStage = VALIDATED_STAGE } = {}) {
  if (validatedStage !== VALIDATED_STAGE || finalReceipt !== `research/${run}-dispatch/tool-step6-finalize-v3.result.json`)
    throw Error('Final transaction requires the exact native stage and final receipt');
  const cert = validatePrepared(root, run, { physics });
  const { native } = nativeFinalBattery(root, run, cert, { physics });
  // The planned-summary gate already validated this deterministic response
  // function on this exact source/evidence. Present its actual output directly;
  // do not launch the legacy reporter's redundant evidence/ledger checks here.
  const productsStartedAt = new Date().toISOString();
  const evidence = readJSON(join(root, 'research', `${run}-step6-evidence.json`));
  const readiness = readJSON(join(root, 'research', `${run}-publication-readiness.json`));
  const response = makeSummaryResponse(evidence, run, { physics });
  if (response.readiness_verdict !== readiness.verdict)
    throw Error('Final response disagrees with validated readiness');
  const responseFile = join(root, 'research', `${run}-step6-report.response.json`);
  const reportFile = join(root, 'research', `${run}-step6-report.md`);
  atomicJSON(responseFile, response);
  const schemaAssertion = invoke(root, 'step6-report.mjs', ['check-response', '--run', run], { physics });
  const report = renderSummaryReport({ run, evidence, response,
    telemetry: step6Telemetry(root, run, { stateDir: relative(root, stateDirectory(root, run, physics)) }) });
  if (!report.trim()) throw Error('Final rendered report is empty');
  writeFileSync(reportFile, report);
  const products = { kind: 'actual-final-report-file-writes', startedAt: productsStartedAt, completedAt: new Date().toISOString(),
    response_sha256: digest(readFileSync(responseFile)), report_sha256: digest(readFileSync(reportFile)), schema_assertion: schemaAssertion };
  if (sourceState(root, run, { physics }).sha256 !== cert.source.sha256)
    throw Error('Validated source changed while generating final report');
  nativeFinalBattery(root, run, cert, { physics });
  return commitStep6(root, run, { physics, finalReceipt,
    assertValidated: () => {
      if (sourceState(root, run, { physics }).sha256 !== cert.source.sha256)
        throw Error('Validated frontier/context changed before commit');
      nativeFinalBattery(root, run, cert, { physics });
    },
    receipt: { prepared_fingerprint: cert.source.sha256, preparation_sha256: digest(JSON.stringify(cert)),
      native_final_validation: native, final_report_products: products } });
}

export async function runStep6CLI({ physics = false, root } = {}) {
  const args = process.argv.slice(2), value = flag => { const i = args.indexOf(flag); return i < 0 ? undefined : args[i + 1]; };
  const run = value('--run');
  if (!run || !/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run)) throw Error('--run is required');
  if (!root) root = (await import(physics ? './physics-support/paths.mjs' : './paths.mjs')).REPO;
  const mode = args[0];
  const result = mode === 'prepare' ? prepareStep6(root, run, { physics })
    : mode === 'prepare-final' ? await prepareFinal(root, run, { physics })
    : await finalizeStep6(root, run, { physics, finalReceipt: value('--final-receipt'), validatedStage: value('--validated-stage') });
  console.log(JSON.stringify({ run, physics, kind: result.kind ?? mode, ok: true }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  try { await runStep6CLI(); } catch (error) { console.error(`step6-finalize: ${error.message}`); process.exitCode = 1; }
}
