// One original-context metadata successor. No arbitrary source replacement or acceptance.
import { existsSync, readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { appendHash as hash, boundAppendFile } from '../../physics-support/frontier-append-evidence.mjs';
import { parseFrontmatter } from '../../physics-support/content-policy-lib.mjs';
import { splitFrontmatter } from '../../physics-support/facts-block.mjs';

export const PBW_ITEM = 'lem-cft-virasoro-verma-pbw-basis';
const DEP = 'def-cft-virasoro-verma-module';
export const PBW_PATH = `items/${PBW_ITEM}.md`;
export const pbwRoleRepairPath = run => `research/${run}-append-1-pbw-role-repair.json`;
const fail = why => { throw Error(`physics append PBW role repair: ${why}`); };
export function pbwRepairBytes(root, path) {
  const absolute = resolve(root, path);
  if (!absolute.startsWith(resolve(root) + '/') || realpathSync(absolute) !== absolute || !lstatSync(absolute).isFile()) fail('unsafe or symlinked evidence');
  const bytes = readFileSync(absolute);
  if (!Buffer.from(bytes.toString('utf8')).equals(bytes)) fail('evidence must preserve exact UTF-8 bytes');
  return bytes;
}
function text(bytes) {
  const value = bytes.toString('utf8');
  if (!Buffer.from(value).equals(bytes)) fail('non-UTF8 source/evidence');
  return value;
}
export function pbwRolePostimage(before, run) {
  const raw = text(before), { fm } = splitFrontmatter(raw), item = parseFrontmatter(fm);
  if (item.id !== PBW_ITEM || item.kind !== 'lemma' || item.status !== 'draft' || item.domain !== 'mathematics'
      || item.library !== 'mathematics' || item.origin !== 'pipeline' || item.pipeline_run !== run
      || !Array.isArray(item.deps) || item.deps.filter(id => id === DEP).length !== 1
      || item.dependency_roles?.[DEP] !== 'formulation-prerequisite') fail('wrong original item or dependency identity');
  const line = `  ${DEP}: formulation-prerequisite`;
  const roles = /^dependency_roles:\n((?:[ \t]+[^\n]*(?:\n|$))*)/m.exec(fm);
  if (!roles || roles[1].split('\n').filter(s => s === line).length !== 1 || fm.split('\n').filter(s => s === line).length !== 1
      || raw.split('\n').filter(s => s === line).length !== 1) fail('exact unique dependency-role line required');
  return Buffer.from(raw.split('\n').map(value => value === line ? `  ${DEP}: mathematical-premise` : value).join('\n'));
}
function baseline(root, entry) {
  if (entry.number !== 1) fail('only the first append original-context defect is supported');
  const refs = entry.protectedItems?.filter(ref => ref.path === PBW_PATH) ?? [];
  if (refs.length !== 1 || !refs[0].archive || refs[0].archive.sha256 !== refs[0].sha256) fail('unique protected original source required');
  const ref = refs[0], before = pbwRepairBytes(root, ref.archive.path);
  boundAppendFile(root, ref.archive);
  if (hash(before) !== ref.sha256) fail('original protected source/archive mismatch');
  const prepared = `${entry.archive}/prepared.json`, preparedBytes = pbwRepairBytes(root, prepared);
  if (JSON.stringify(JSON.parse(text(preparedBytes))) !== JSON.stringify(entry)) fail('append entry differs from immutable preparation');
  const manifests = entry.oldManifests.filter(row => row.path === `research/${entry.run}-batch-9.pages.json`);
  if (manifests.length !== 1) fail('original batch-9 ownership missing');
  const manifest = manifests[0]; boundAppendFile(root, manifest.archive);
  if (manifest.archive.sha256 !== manifest.sha256 || hash(pbwRepairBytes(root, manifest.path)) !== manifest.sha256) fail('original batch-9 manifest changed');
  const pages = JSON.parse(text(pbwRepairBytes(root, manifest.archive.path)));
  const owners = pages.flatMap(p => (p.items ?? []).map(i => typeof i === 'string' ? i : i.id)).filter(id => id === PBW_ITEM);
  if (owners.length !== 1) fail('ambiguous original item ownership');
  const nativePath = `research/${entry.run}-dispatch/beta-batch-9.result.json`;
  const native = entry.protectedNative.filter(row => row.path === nativePath);
  if (native.length !== 1 || !native[0].archive || native[0].sha256 !== native[0].archive.sha256) fail('original native author missing');
  boundAppendFile(root, native[0].archive);
  const result = JSON.parse(text(pbwRepairBytes(root, native[0].archive.path)));
  if (result.run !== entry.run || result.role !== 'beta' || result.label !== 'batch-9' || result.ok !== true || result.exit_code !== 0
      || result.timed_out === true || result.written_by === 'autopilot' || !Number.isInteger(result.attempt) || result.attempt < 1
      || JSON.stringify(result.covers) !== JSON.stringify(['9']) || !Number.isFinite(Date.parse(result.started_at))
      || !Number.isFinite(Date.parse(result.ended_at)) || Date.parse(result.ended_at) < Date.parse(result.started_at)) fail('genuine successful original native author required');
  const attempt = entry.protectedNative.filter(row => row.path === nativePath.replace('.result.json', `.attempt-${result.attempt}.result.json`));
  const prompt = entry.protectedNative.filter(row => row.path === nativePath.replace('.result.json', `.attempt-${result.attempt}.prompt.md`));
  if (attempt.length !== 1 || attempt[0].sha256 !== native[0].sha256 || !attempt[0].archive
      || prompt.length !== 1 || !prompt[0].archive) fail('immutable original author result/prompt required');
  for (const evidence of [native[0], attempt[0], prompt[0]]) {
    boundAppendFile(root, evidence.archive);
    if (evidence.sha256 !== evidence.archive.sha256 || hash(pbwRepairBytes(root, evidence.path)) !== evidence.sha256) fail('original author evidence changed');
  }
  if (!text(pbwRepairBytes(root, prompt[0].archive.path)).trim()) fail('empty original author prompt');
  const stateBefore = pbwRepairBytes(root, `${entry.archive}/state.before.json`);
  if (hash(stateBefore) !== entry.stateBeforeSha256) fail('original native state archive changed');
  const originalRow = JSON.parse(text(stateBefore)).dispatches?.['1-scaffold:batch-9'];
  if (originalRow?.role !== 'beta' || originalRow.label !== 'batch-9' || originalRow.stage !== '1-scaffold'
      || originalRow.lastExitOk !== true || originalRow.attempt !== result.attempt || originalRow.attempts !== result.attempt
      || JSON.stringify(originalRow.covers) !== JSON.stringify(['9']) || !Number.isFinite(Date.parse(originalRow.startedAt))
      || !Number.isFinite(Date.parse(originalRow.endedAt)) || Date.parse(originalRow.startedAt) > Date.parse(result.started_at)
      || Date.parse(originalRow.endedAt) < Date.parse(result.ended_at)) fail('original completed native author row required');
  return { ref, before, after: pbwRolePostimage(before, entry.run), prepared: { path: prepared, sha256: hash(preparedBytes) },
    original_manifest: manifest, native_author: native[0], native_attempt: attempt[0], native_prompt: prompt[0] };
}
function failedGate(root, entry, stateRaw, eventsRaw) {
  const state = JSON.parse(stateRaw), stage = '1-append-drift-1';
  if (state.version !== 1 || state.run !== entry.run || state.stage !== stage || state.paused !== true || state.finishedAt
      || !Number.isFinite(Date.parse(state.stages?.[stage]?.enteredAt)) || state.stages?.[stage]?.doneAt || state.stages?.[stage]?.gatesPassedAt) fail('paused unfinished native append-drift-1 boundary required');
  if (!eventsRaw.endsWith('\n')) fail('incomplete native event history');
  const events = eventsRaw.trimEnd().split('\n').map(line => JSON.parse(line));
  const failures = events.map((event, i) => ({ event, i })).filter(({ event }) => event.type === 'gate' && event.id === 'append-planned-physics'
    && event.ok === false && event.code === 1 && event.output?.includes(`ERROR mathematical-role [${PBW_ITEM}]: mathematical deps must be mathematical-premise`));
  const failure = failures.at(-1);
  if (!failure || !Number.isFinite(Date.parse(failure.event.at)) || Date.parse(failure.event.at) < Date.parse(entry.at)) fail('actual current-append mathematical-role gate failure required');
  const prefix = events.slice(0, failure.i), start = prefix.findLast(event => event.type === 'gates');
  if (!Number.isFinite(Date.parse(start?.at)) || Date.parse(start.at) < Date.parse(entry.at) || start?.message !== `${stage}: running 3 gate(s)` || !events.slice(failure.i + 1).some(event => event.type === 'blocked'
      && event.stage === stage && event.gate === failure.event.id)) fail('failed gate lacks matching native append-stage battery/block');
  return { stage, event_index: failure.i, event: failure.event, state_sha256: hash(stateRaw), state_raw: stateRaw,
    events_sha256: hash(eventsRaw), events_prefix: eventsRaw };
}
function validateRequest(request, b, run) {
  if (request.version !== 1 || request.run !== run || request.generation !== 1 || request.reviewer !== '/root'
      || request.writers_drained !== true || JSON.stringify(request.writer_scopes) !== '[]'
      || typeof request.reason !== 'string' || request.reason.trim().length < 40
      || typeof request.mathematical_use !== 'string' || request.mathematical_use.trim().length < 60
      || !request.mathematical_use.includes(DEP)) fail('actual scoped Root reason, mathematical-use review and drained attestation required');
  if (request.before_sha256 !== hash(b.before) || request.after_sha256 !== hash(b.after)) fail('request does not bind exact computed before/after');
}
export function preparePbwRoleAuthorization(root, entry, request, stateRaw, eventsRaw) {
  const b = baseline(root, entry);
  validateRequest(request, b, entry.run);
  if (!pbwRepairBytes(root, PBW_PATH).equals(b.before)) fail('authorization requires unchanged protected preimage');
  const failure = failedGate(root, entry, stateRaw, eventsRaw);
  return { version: 1, kind: 'exact-append-pbw-dependency-role-successor', run: entry.run, generation: 1,
    authorized_by: '/root', authorized_at: new Date().toISOString(), request,
    entry: b.prepared, protected_ref: b.ref, original_manifest: b.original_manifest,
    native_author: b.native_author, native_attempt: b.native_attempt, native_prompt: b.native_prompt,
    before: { sha256: hash(b.before), raw: text(b.before) }, after: { sha256: hash(b.after), raw: text(b.after) },
    failed_gate: failure, mathematical_acceptance: false, coverage_credit: false };
}
export function authenticatePbwRoleSuccessor(root, entry, ref) {
  if (ref.path !== PBW_PATH) return false;
  const path = pbwRoleRepairPath(entry.run);
  if (!existsSync(join(root, path))) return false;
  const raw = pbwRepairBytes(root, path);
  if (text(pbwRepairBytes(root, path + '.sha256')).trim() !== hash(raw)) fail('immutable role authorization changed');
  const receipt = JSON.parse(text(raw)), b = baseline(root, entry);
  if (receipt.version !== 1 || receipt.kind !== 'exact-append-pbw-dependency-role-successor' || receipt.run !== entry.run
      || receipt.generation !== 1 || receipt.authorized_by !== '/root' || receipt.mathematical_acceptance !== false || receipt.coverage_credit !== false
      || !Number.isFinite(Date.parse(receipt.authorized_at)) || Date.parse(receipt.authorized_at) < Date.parse(receipt.failed_gate?.event?.at)
      || JSON.stringify(receipt.entry) !== JSON.stringify(b.prepared) || JSON.stringify(receipt.protected_ref) !== JSON.stringify(b.ref)
      || ref.sha256 !== b.ref.sha256 || JSON.stringify(receipt.original_manifest) !== JSON.stringify(b.original_manifest)
      || JSON.stringify(receipt.native_author) !== JSON.stringify(b.native_author) || JSON.stringify(receipt.native_attempt) !== JSON.stringify(b.native_attempt)
      || JSON.stringify(receipt.native_prompt) !== JSON.stringify(b.native_prompt)
      || receipt.before?.raw !== text(b.before) || receipt.before?.sha256 !== hash(b.before)
      || receipt.after?.raw !== text(b.after) || receipt.after?.sha256 !== hash(b.after)) fail('role successor differs from exact original baseline/computed postimage');
  const failure = failedGate(root, entry, receipt.failed_gate.state_raw, receipt.failed_gate.events_prefix);
  if (JSON.stringify(failure) !== JSON.stringify(receipt.failed_gate)
      || !text(pbwRepairBytes(root, join(entry.stateDir, 'events.jsonl'))).startsWith(failure.events_prefix)) fail('historical failed-gate evidence changed');
  validateRequest(receipt.request, b, entry.run);
  if (!pbwRepairBytes(root, PBW_PATH).equals(b.after)) fail('current source is not the exact authorized role-only postimage');
  return true;
}
