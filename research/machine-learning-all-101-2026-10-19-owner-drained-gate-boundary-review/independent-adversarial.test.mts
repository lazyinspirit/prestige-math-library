import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const base = process.env.REVIEW_CANDIDATE!;
const { Executor } = await import(pathToFileURL(join(base, 'tools/autopilot/src/executor.mts')).href);
const { ownerSupervisedCompactStages } = await import(pathToFileURL(join(base, 'tools/autopilot/stages/owner-supervised-compact.mts')).href);
const { holdBeforeBattery, recertify } = await import(pathToFileURL(join(base, 'tools/owner-gate-supervision.mjs')).href);
function stub() {
  return { state: { paused: false, data: { stages: {} }, addBlocker() {}, save() {} },
    inflight: new Map(), liveDispatchLabels: () => [], pendingRefreshes: () => [],
    stageStatus: () => ({unitsDone: true}), snapshot: () => ({}),
    reporter: { report() {}, notify() {} } };
}
test('a later group boundary pause prevents every earlier descriptor builder', async () => {
  let builders = 0, hooks = 0;
  const ex = stub();
  const group = ['first', 'last'].map(id => ({ id, gates: () => { builders++; throw Error('unexpected descriptor'); },
    beforeGates: async () => { hooks++; if (id === 'last') ex.state.paused = true; } }));
  assert.equal(await Executor.prototype.runGroupGates.call(ex, group.map(s => ({s, st: {}})), {}, group), 'working');
  assert.equal(hooks, 2); assert.equal(builders, 0);
});
test('async hook loss of actual unit completion prevents descriptor construction', async () => {
  const ex = stub(); let complete = true, builders = 0;
  ex.stageStatus = () => ({unitsDone: complete});
  const s = { id: 'first', gates: () => { builders++; throw Error('unexpected descriptor'); },
    beforeGates: async () => { await Promise.resolve(); complete = false; } };
  assert.equal(await Executor.prototype.runGroupGates.call(ex, [{s, st: {unitsDone: true}}], {}, [s]), 'working');
  assert.equal(builders, 0);
});
test('compact inherited boundary runs once and its input mutation invalidates fresh permission', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'independent-owner-boundary-')); t.after(() => rmSync(repo, {recursive:true, force:true}));
  const run = 'sample', stateDir = join(repo, '.autopilot', run); mkdirSync(stateDir, {recursive:true}); mkdirSync(join(repo, 'research'));
  const pages = [{id:'a', kind:'A', category:'math', companion:'a-examples', items:[]}, {id:'a-examples',kind:'B',category:'math',companion:'a',items:[]}];
  writeFileSync(join(repo,'research',`${run}-batch-1.pages.json`), JSON.stringify(pages));
  const plan = join(repo,'research','plan-spec.json'); writeFileSync(plan,JSON.stringify({pages}));
  let inherited = 0;
  const [stage] = ownerSupervisedCompactStages([{id:'1-drift', gates:()=>[{id:'native',argv:['true']}], beforeGates:async()=>{inherited++; writeFileSync(plan,readFileSync(plan,'utf8')+'\n');}}]);
  const ex = stub(); ex.state.data.run = run;
  ex.state.save = () => writeFileSync(join(stateDir,'state.json'), JSON.stringify({...ex.state.data,paused:ex.state.paused}));
  ex.pipelineGroup = () => [stage]; ex.stageStatus = () => ({unitsDone:true,gatesPassed:false});
  const ctx={repo,run,stateDir}; holdBeforeBattery({ctx,executor:ex,stage}); recertify(ctx,{resolveEscalations:true});
  ex.state.paused=false; await stage.beforeGates({ctx,executor:ex,stage});
  assert.equal(inherited,1); assert.equal(ex.state.paused,true);
});
