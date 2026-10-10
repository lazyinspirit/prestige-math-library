import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, copyFileSync, symlinkSync, existsSync, rmSync, chmodSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { spawn, spawnSync } from 'node:child_process';
import { migrateWorkflowPrefix, PREFIX_STAGES, SOURCE_REVISION, TARGET_REVISION } from '../src/workflow-prefix-migration.mts';
const root = resolve(import.meta.dirname, '../../..');
const hash = (b: string | Buffer) => createHash('sha256').update(b).digest('hex');
const body = (x: any) => JSON.stringify(x, null, 2) + '\n';
function fixture() {
  const repo = mkdtempSync(join(tmpdir(), 'prefix-migration-')), stateDir = join(repo, '.autopilot/demo');
  mkdirSync(stateDir, { recursive: true }); mkdirSync(join(repo, 'research/demo-dispatch'), { recursive: true });
  for (const p of ['tools/autopilot/stages/mathlib.mts', 'tools/autopilot/src/frontier-append.mts']) {
    mkdirSync(join(repo, p, '..'), { recursive: true }); copyFileSync(join(root, p), join(repo, p));
  }
  const gitDir = spawnSync('git', ['rev-parse', '--absolute-git-dir'], { cwd: root, encoding: 'utf8' }).stdout.trim();
  symlinkSync(gitDir, join(repo, '.git'));
  const stages: any = {}; for (const id of PREFIX_STAGES) stages[id] = { enteredAt: 'x', gatesPassedAt: id === '3-baseline' ? null : 'x', doneAt: id === '3b-author' ? null : 'x', fixRounds: 2 };
  const state: any = { version: 1, run: 'demo', workflowRevision: SOURCE_REVISION, paused: false, stage: '3b-author', stages, finishedAt: null, dispatches: {}, gateAttempts: { '1-scaffold:g': { stage: '1-scaffold', attempts: 2 } }, blockers: [{ stage: '3b-author', message: 'preserved' }], repairs: [{ round: 2, prior: 'genuine' }], pauseAfter: '3b-author' };
  state.stages['3-baseline'].doneAt = null;
  state.dispatches['3-baseline:snap-pre-author'] = { stage: '3-baseline', role: 'tool', label: 'snap-pre-author', covers: ['all'], endedAt: 'x', lastExitOk: true };
  writeFileSync(join(repo, 'research/demo-dispatch/tool-snap-pre-author.result.json'), body({ run: 'demo', role: 'tool', label: 'snap-pre-author', covers: ['all'], ok: true, ended_at: 'x', written_by: 'autopilot' }));
  writeFileSync(join(repo, 'research/demo-step3-auditor-baseline.json'), body({ version: 1, run: 'demo', items: [{ id: 'lem-demo' }] }));
  writeFileSync(join(repo, 'research/demo-touches.json'), body({ snapshots: [{ label: 'pre-author', at: 'x', hashes: { 'lem-demo': 'genuine' } }] }));
  writeFileSync(join(stateDir, 'state.json'), body(state)); writeFileSync(join(stateDir, 'control.json'), '{"command":"pause"}\n'); writeFileSync(join(stateDir, 'events.jsonl'), '');
  writeFileSync(join(repo, 'research/demo-step3b-owner-history.json'), body({ actual: 'history' }));
  writeFileSync(join(repo, 'research/demo-alpha-step8.task.md'), 'future plan only');
  const authorizationPath = join(repo, 'authorization.json');
  const authorize = () => writeFileSync(authorizationPath, body({ version: 1, run: 'demo', authorized_by: 'owner', authorization: 'Owner explicitly authorizes preserving this same run and all native history across this exact migration.', from_revision: SOURCE_REVISION, to_revision: TARGET_REVISION, authorized_stage: '3b-author', state_sha256: hash(readFileSync(join(stateDir, 'state.json'))) }));
  authorize();
  const save = () => { writeFileSync(join(stateDir, 'state.json'), body(state)); authorize(); };
  return { repo, stateDir, authorizationPath, state, save, authorize };
}
function migrate(f: ReturnType<typeof fixture>) { return migrateWorkflowPrefix({ ...f, run: 'demo' }); }
test('changes only revision and pause, authentic full preimage and history preserved; idempotent', () => {
  const f = fixture(), before = readFileSync(join(f.stateDir, 'state.json')), control = readFileSync(join(f.stateDir, 'control.json'));
  const history = readFileSync(join(f.repo, 'research/demo-step3b-owner-history.json'));
  const r = migrate(f), after = JSON.parse(readFileSync(join(f.stateDir, 'state.json'), 'utf8'));
  assert.deepEqual(after, { ...f.state, workflowRevision: TARGET_REVISION, paused: true });
  assert.deepEqual(readFileSync(join(r.archiveDir, 'state.json')), before);
  assert.deepEqual(readFileSync(join(r.archiveDir, 'control.json')), control);
  assert.deepEqual(readFileSync(join(f.stateDir, 'control.json')), control);
  assert.deepEqual(readFileSync(join(f.repo, 'research/demo-step3b-owner-history.json')), history);
  const receiptBytes = readFileSync(r.receiptPath);
  assert.equal(migrate(f).idempotent, true); assert.deepEqual(readFileSync(r.receiptPath), receiptBytes);
  chmodSync(join(r.archiveDir, 'control.json'), 0o644);
  writeFileSync(join(r.archiveDir, 'control.json'), '{}');
  assert.throws(() => migrate(f), /archive changed/);
});
test('rejects raw hash changes, unsupported revisions, incomplete prefix, and later-stage state', () => {
  for (const mutate of [
    (f: any) => { f.state.workflowRevision = 'other'; f.save(); },
    (f: any) => { delete f.state.stages['3a-scope'].doneAt; f.save(); },
    (f: any) => { f.state.stages['8-scope'] = {}; f.save(); },
    (f: any) => { f.state.gateAttempts.bad = { stage: '9-close-v2' }; f.save(); },
    (f: any) => { f.state.stage = '7-freeze'; f.save(); },
    (f: any) => { rmSync(join(f.repo, 'research/demo-step3-auditor-baseline.json')); },
    (f: any) => { writeFileSync(join(f.repo, 'research/demo-dispatch/tool-snap-pre-author.result.json'), body({ ok: false })); },
    (f: any) => { writeFileSync(join(f.stateDir, 'state.json'), body({ ...f.state, extra: true })); },
  ]) { const f = fixture(); mutate(f); assert.throws(() => migrate(f)); }
});
test('rejects authentic removed suffix artifacts, dispatch receipts and events even without suffix state', () => {
  const changes = [
    (f: any) => writeFileSync(join(f.repo, 'research/demo-step8-changes.json'), '{}'),
    (f: any) => writeFileSync(join(f.repo, 'research/demo-dispatch/tool-close-step9-v2.result.json'), body({ label: 'close-step9-v2' })),
    (f: any) => writeFileSync(join(f.stateDir, 'events.jsonl'), JSON.stringify({ stage: '8-scope', type: 'dispatch' }) + '\n'),
  ];
  for (const change of changes) { const f = fixture(); change(f); assert.throws(() => migrate(f), /suffix|prefix/); }
});
test('preserves terminal uncollected and proves never-launched reservations; rejects launched missing result', () => {
  const f = fixture(), d = { stage: '3b-author', role: 'alpha-high', label: 'pair-demo', startedAt: '2026-10-10T00:00:00Z', endedAt: null, attempt: 1, attempts: 1, lastExitOk: null };
  f.state.dispatches['3b-author:pair-demo'] = d; f.save();
  writeFileSync(join(f.stateDir, 'events.jsonl'), JSON.stringify({ type: 'dispatch', ...d, at: d.startedAt }) + '\n');
  const r = migrate(f); assert.deepEqual(JSON.parse(readFileSync(join(f.stateDir, 'state.json'), 'utf8')).dispatches, f.state.dispatches);
  assert.deepEqual(JSON.parse(readFileSync(r.receiptPath, 'utf8')).preserved_unlaunched_reservations, ['3b-author:pair-demo']);
  const launched = fixture(); launched.state.dispatches['3b-author:pair-demo'] = d; launched.save();
  writeFileSync(join(launched.stateDir, 'events.jsonl'), JSON.stringify({ type: 'dispatch', ...d, at: d.startedAt }) + '\n' + JSON.stringify({ type: 'exec', command: 'exec: node tools/dispatch.mjs --label pair-demo --run demo' }) + '\n');
  assert.throws(() => migrate(launched), /unresolved launched/);
  writeFileSync(join(launched.repo, 'research/demo-dispatch/alpha-high-pair-demo.result.json'), body({ run: 'demo', role: d.role, label: d.label, ended_at: '2026-10-10T00:01:00Z', exit_code: 0 }));
  assert.equal(migrate(launched).idempotent, false);
});
test('rejects live controller and discovers actual zero-coverage native tools independent of state', async () => {
  const f = fixture(); writeFileSync(join(f.stateDir, 'controller.lock'), body({ pid: process.pid, run: 'demo' }));
  assert.throws(() => migrate(f), /controller .* alive/); rmSync(join(f.stateDir, 'controller.lock'));
  mkdirSync(join(f.repo, 'tools'), { recursive: true }); writeFileSync(join(f.repo, 'tools/dispatch.mjs'), 'setInterval(() => {}, 1000);');
  const child = spawn(process.execPath, ['tools/dispatch.mjs', '--run', 'demo', '--covers', ''], { cwd: f.repo });
  try { await new Promise(r => child.once('spawn', r)); assert.throws(() => migrate(f), /active native writers/); }
  finally { child.kill(); await new Promise(r => child.once('exit', r)); }
});
test('rejects compatibility drift rather than weakening revision guard', () => {
  const f = fixture(), p = join(f.repo, 'tools/autopilot/stages/mathlib.mts');
  writeFileSync(p, readFileSync(p, 'utf8').replace("id: '3b-author'", "id: '3b-changed'"));
  assert.throws(() => migrate(f), /stage table changed/);
  const helper = fixture(), hp = join(helper.repo, 'tools/autopilot/stages/mathlib.mts');
  writeFileSync(hp, readFileSync(hp, 'utf8').replace('const STEP3_AUTHOR_PROFILE = DEEPSEEK_FLASH_MAX;', 'const STEP3_AUTHOR_PROFILE = LUNA_MAX;'));
  assert.throws(() => migrate(helper), /helper\/profile contracts/);
});

test('registered dynamic append generations preserve completed history; unknown append stage refused', () => {
  const f = fixture(), n = 1, archive = 'research/demo-frontier-append-1';
  writeFileSync(join(f.repo, 'research/demo-frontier-appends.json'), body({ version: 1, run: 'demo', appends: [{ number: n, run: 'demo', pairs: ['pair-demo'], batches: ['1'], report: 'research/demo-alpha-step1-append-1-drift.md', task: 'research/demo-alpha-step1-append-1-drift.task.md', archive, originalReport: archive + '/preimages/demo-alpha-step1-drift.md' }] }));
  for (const id of ['1-append-drift-1', '1-append-apply-1']) f.state.stages[id] = { enteredAt: 'x', gatesPassedAt: 'x', doneAt: 'x', fixRounds: 2 };
  f.save();
  const r = migrate(f), receipt = JSON.parse(readFileSync(r.receiptPath, 'utf8'));
  assert.deepEqual(receipt.verified_prefix.slice(0, 5), ['1-drift', '1-drift-apply', '1-append-drift-1', '1-append-apply-1', '1-scaffold']);
  assert.deepEqual(JSON.parse(readFileSync(join(f.stateDir, 'state.json'), 'utf8')).stages, f.state.stages);
  const bad = fixture(); bad.state.stages['1-append-drift-99'] = { doneAt: 'x' }; bad.save();
  assert.throws(() => migrate(bad), /outside verified prefix/);
});
test('rejects a suffix launch event even when no suffix state/result was collected', () => {
  const f = fixture();
  writeFileSync(join(f.stateDir, 'events.jsonl'), JSON.stringify({ type: 'exec', command: 'exec: node tools/dispatch.mjs --run demo --label receipts' }) + '\n');
  assert.throws(() => migrate(f), /suffix execution event/);
});
