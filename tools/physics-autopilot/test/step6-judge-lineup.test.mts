import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { originalJudgeLineup } from '../../physics-support/original-judge-lineup.mjs';
import { JUDGE_LINEUPS } from '../../physics-support/models.mjs';
import { prepareFinal } from '../../step6-finalize.mjs';
import { stages } from '../stages/mathlib.mts';

const hash = (bytes: any) => createHash('sha256').update(bytes).digest('hex');
function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'physics-step6-lineup-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research/demo-step5-v2'); mkdirSync(dir, { recursive: true });
  const ctx: any = { repo: root, run: 'demo', config: {} };
  const save = (file: string, row: any) => writeFileSync(file, JSON.stringify(row));
  const verdictPath = join(dir, 'step4-verdicts.json'), packPath = join(dir, 'initial-1.json');
  function freeze(models: string[], relativeBinding = false) {
    save(verdictPath, models.map((model, i) => ({ id: `item-${i}`, model, keep: true })));
    save(packPath, { version: 2, run: 'demo', phase: 'initial', round: 1, judge_model: models[0],
      input_evidence: { [relativeBinding ? relative(root, verdictPath) : verdictPath]: hash(readFileSync(verdictPath)) } });
  }
  return { root, dir, ctx, save, freeze, verdictPath, packPath };
}

test('authenticated original singleton lineup survives later worker/default changes, including legacy lanes', t => {
  const f = fixture(t);
  assert.equal(originalJudgeLineup(f.ctx), 'luna');
  for (const [name, models] of Object.entries(JUDGE_LINEUPS)) for (const relativeBinding of [false, true]) {
    f.freeze([...models], relativeBinding);
    assert.equal(originalJudgeLineup(f.ctx), name);
  }
});

test('incomplete, stale, forged, malformed, mixed and unknown frozen lineage fail closed', t => {
  const f = fixture(t), luna = JUDGE_LINEUPS.luna[0];
  f.save(join(f.dir, 'frontier.json'), {});
  assert.throws(() => originalJudgeLineup(f.ctx), /incomplete frozen/);
  f.freeze([luna]); unlinkSync(f.packPath);
  assert.throws(() => originalJudgeLineup(f.ctx), /missing initial frozen pack/);
  f.freeze([luna]); writeFileSync(f.verdictPath, readFileSync(f.verdictPath, 'utf8') + '\n');
  assert.throws(() => originalJudgeLineup(f.ctx), /not bound/);
  for (const patch of [{ run: 'foreign' }, { phase: 'repeat' }, { round: 2 }, { version: 1 }, { input_evidence: {} }]) {
    f.freeze([luna]); f.save(f.packPath, { ...JSON.parse(readFileSync(f.packPath, 'utf8')), ...patch });
    assert.throws(() => originalJudgeLineup(f.ctx), /not bound/);
  }
  for (const models of [[luna, JUDGE_LINEUPS.sol61[0]], ['unknown-model']]) {
    f.freeze(models); assert.throws(() => originalJudgeLineup(f.ctx), /mixed, unknown/);
  }
  f.freeze([luna]); f.save(f.packPath, { ...JSON.parse(readFileSync(f.packPath, 'utf8')), judge_model: JUDGE_LINEUPS.sol61[0] });
  assert.throws(() => originalJudgeLineup(f.ctx), /inconsistent frozen model/);
  f.freeze([]); assert.throws(() => originalJudgeLineup(f.ctx), /malformed frozen/);
});

// Intercept only fixture subprocesses: preparation stops at stamping, before
// metadata/rendering or evidence writes. This checks the actual invocation.
test('physics final preparation and all final judge gates select the same authenticated lane; math inherits its existing env', async t => {
  const f = fixture(t);
  f.save(join(f.root, 'research/demo-batch-1.pages.json'), [{ id: 'page-a', items: [{ id: 'item-a' }] }]);
  for (const dir of ['.physics-autopilot/demo', '.autopilot/demo']) {
    mkdirSync(join(f.root, dir), { recursive: true }); f.save(join(f.root, dir, 'state.json'), { run: 'demo', dispatches: {} });
  }
  const original = childProcess.spawnSync, calls: any[] = [];
  childProcess.spawnSync = ((command: any, args: any[], options: any) => {
    assert.equal(options.cwd, f.root); calls.push({ command, args, options });
    return { status: args[0].endsWith('/apply-judge-stamps.mjs') ? 1 : 0, stdout: '', stderr: 'fixture stamp boundary' };
  }) as any;
  syncBuiltinESMExports();
  try {
    for (const name of ['luna', 'sol', 'sol61']) {
      f.freeze([...JUDGE_LINEUPS[name]]); calls.length = 0;
      await assert.rejects(prepareFinal(f.root, 'demo', { physics: true }), /fixture stamp boundary/);
      const invocation = calls.at(-1);
      assert.equal(invocation.options.env.JUDGE_LINEUP, name);
      assert.ok(invocation.args.includes('--apply')); assert.ok(invocation.args.includes('--exclude-published'));
      const gates = stages.find(stage => stage.id === '6-final-validation-v3')!.gates(f.ctx);
      const judgeGates = gates.filter((gate: any) => ['judge-stamps', 'judge-closure', 'level-coverage'].includes(gate.id));
      assert.equal(judgeGates.length, 3);
      for (const gate of judgeGates) assert.deepEqual(gate.argv.slice(0, 3), ['env', `JUDGE_LINEUP=${name}`, 'node']);
      assert.ok(judgeGates.find((gate: any) => gate.id === 'judge-stamps').argv.includes('--verify'));
    }
    calls.length = 0;
    await assert.rejects(prepareFinal(f.root, 'demo'), /fixture stamp boundary/);
    assert.equal(calls.at(-1).options.env.JUDGE_LINEUP, process.env.JUDGE_LINEUP);
    assert.ok(calls.at(-1).args.includes('--step5-run'));
    f.freeze(['unknown-model']); calls.length = 0;
    await assert.rejects(prepareFinal(f.root, 'demo', { physics: true }), /mixed, unknown/);
    assert.equal(calls.length, 0, 'invalid lineage fails before any preparation command');
  } finally { childProcess.spawnSync = original; syncBuiltinESMExports(); }
});
