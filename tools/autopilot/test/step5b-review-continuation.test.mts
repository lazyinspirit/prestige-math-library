import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { Executor as MathExecutor } from '../src/executor.mts';
import { State as MathState, statePath as mathStatePath } from '../src/state.mts';
import { Reporter as MathReporter } from '../src/reporter.mts';
import { makeExecAdapter as mathAdapter } from '../src/adapters/exec.mts';
import { Executor as PhysicsExecutor } from '../../physics-autopilot/src/executor.mts';
import { State as PhysicsState, statePath as physicsStatePath } from '../../physics-autopilot/src/state.mts';
import { Reporter as PhysicsReporter } from '../../physics-autopilot/src/reporter.mts';
import { makeExecAdapter as physicsAdapter } from '../../physics-autopilot/src/adapters/exec.mts';
import { withStep5bReviewContinuation } from '../stages/step5b-review-continuation.mts';
import { step5bReviewCoverage } from '../../step5b-review-coverage.mjs';
import { itemHashGuard, itemSurfaceHash } from '../../item-hash.mjs';

const engines = [
  { name: 'math', Executor: MathExecutor, State: MathState, statePath: mathStatePath, Reporter: MathReporter, adapter: mathAdapter, physics: false },
  { name: 'physics', Executor: PhysicsExecutor, State: PhysicsState, statePath: physicsStatePath, Reporter: PhysicsReporter, adapter: physicsAdapter, physics: true },
];
const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const sha = (x: string) => createHash('sha256').update(x).digest('hex');
const canonical = (x: any): any => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hashValue = (x: any) => sha(JSON.stringify(canonical(x)));
const TOOLS = join(import.meta.dirname, '../..');

for (const engine of engines) {
  for (const advances of [true, false]) test(`${engine.name}: partial exit0 ${advances ? 'continues then gates only complete coverage' : 'with no progress holds without another call'}`, async () => {
    const repo = mkdtempSync(join(tmpdir(), 'step5b-continuation-')), run = 'review-test', dispatchDir = join(repo, 'dispatch');
    mkdirSync(dispatchDir); mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'briefs/tasks'), { recursive: true });
    writeFileSync(join(repo, 'briefs/tasks/alpha-5b-edges.md'), 'Original live review task.');
    writeFileSync(join(repo, 'briefs/tasks/alpha-5b-unfinished-review.md'), 'Continue missing work only.');
    const progressPath = join(repo, 'progress.json'), gatesPath = join(repo, 'gates.log');
    const partial = { complete: false, progress: 'a'.repeat(64), pending: [{ kind: 'edge', from: 'lem-a', to: 'lem-b' }], errors: [], counts: { completed: 1 }, why: 'one actual review remains' };
    writeFileSync(progressPath, JSON.stringify(partial));
    const script = join(repo, 'agent.mjs');
    writeFileSync(script, `import{writeFileSync}from'node:fs';const a=process.argv.slice(2),get=k=>a[a.indexOf('--'+k)+1];${advances ? `writeFileSync(${JSON.stringify(progressPath)},JSON.stringify({complete:true,progress:'b',pending:[],errors:[],counts:{completed:2},why:'all current review complete'}));` : ''}writeFileSync(${JSON.stringify(dispatchDir)}+'/alpha-'+get('label')+'.result.json',JSON.stringify({role:'alpha',run:get('run'),label:get('label'),covers:['all'],ok:true}));`);
    writeFileSync(join(dispatchDir, 'alpha-5b-lead.result.json'), JSON.stringify({ role: 'alpha', run, label: '5b-lead', covers: ['all'], ok: true }));
    writeFileSync(join(repo, 'research', run + '-alpha-5b.md'), 'Historical genuine partial review.');
    writeFileSync(join(repo, 'research', run + '-5b-verdicts.jsonl'), 'Historical reviewed row.');
    const gateScript = join(repo, 'gate.mjs'); writeFileSync(gateScript, `import{appendFileSync}from'node:fs';appendFileSync(${JSON.stringify(gatesPath)},'gate\\n');`);
    const original: any = { id: '5b-cross', label: 'review', units: () => ['all'], pattern: /^alpha-5b-[a-z-]+\.result\.json$/, concurrency: 1,
      artifacts: () => [`research/${run}-alpha-5b.md`, `research/${run}-5b-verdicts.jsonl`],
      plan: () => [{ role: 'alpha', label: '5b-lead', job: 'audit', covers: ['all'], task: 'briefs/tasks/alpha-5b-edges.md', argv: ['node', script, '--run', '{run}', '--label', '{label}'] }],
      gates: () => [{ id: 'closure', argv: ['node', gateScript] }] };
    const stage = withStep5bReviewContinuation(original, { physics: engine.physics, inspect: () => JSON.parse(readFileSync(progressPath, 'utf8')) });
    const config: any = { repo, run, stateDir: join(repo, 'state'), dispatchDir, argv: [], concurrency: 1, dispatchStaggerMs: 0, gateFailurePolicy: 'owner', maxAttempts: 2 };
    const state = new engine.State(engine.statePath(config.stateDir)).init(run);
    const reporter = new engine.Reporter({ dir: config.stateDir, intervalMs: 10 ** 9, sink: () => {} });
    const executor = new engine.Executor({ config, stages: [stage], state, reporter, adapter: engine.adapter(config) });
    try {
      assert.equal(executor.stageStatus(stage).unitsDone, false, 'process success is not a review verdict');
      assert.equal(executor.unitsComplete(stage).size, 0);
      assert.equal(existsSync(gatesPath), false);
      for (let tick = 0; tick < 25; tick++) {
        const status = await executor.tick();
        if (status === 'done' || status === 'blocked') break;
        await pause(40);
      }
      const starts = Object.values(state.data.dispatches) as any[];
      assert.equal(starts.length, 1, JSON.stringify(state.data.blockers));
      assert.match(starts[0].label, /^5b-review-/);
      assert.equal(readFileSync(join(dispatchDir, 'alpha-5b-lead.result.json'), 'utf8'), JSON.stringify({ role: 'alpha', run, label: '5b-lead', covers: ['all'], ok: true }));
      if (advances) { assert.equal(executor.stageStatus(stage).done, true); assert.equal(readFileSync(gatesPath, 'utf8'), 'gate\n'); }
      else { assert.equal(existsSync(gatesPath), false); assert.ok(state.data.blockers.some((r: any) => /no further.*progress/.test(r.message))); }
    } finally { rmSync(repo, { recursive: true, force: true }); }
  });

  test(`${engine.name}: stale current review evidence holds instead of launching review or gates`, () => {
    const repo = mkdtempSync(join(tmpdir(), 'step5b-stale-')), dispatchDir = join(repo, 'dispatch'); mkdirSync(dispatchDir);
    writeFileSync(join(dispatchDir, 'alpha-5b-lead.result.json'), JSON.stringify({ run: 'run', role: 'alpha', covers: ['all'], ok: true }));
    const stage = withStep5bReviewContinuation({ id: '5b-cross', pattern: /^alpha-5b-[a-z-]+\.result\.json$/ }, { inspect: () => ({ complete: false, errors: [{ code: 'edge-verdict-stale', message: 'supplier changed' }] }) });
    try { assert.throws(() => stage.onProgress({ ctx: { repo, run: 'run', dispatchDir }, stage, executor: { inflight: new Map(), adoptedUnits: () => new Set(), start: () => assert.fail('must not launch stale review') } }), /edge-verdict-stale/); }
    finally { rmSync(repo, { recursive: true, force: true }); }
  });

  test(`${engine.name}: canonical coverage preserves current reviews, detects pending impact and stale hashes`, () => {
    const repo = mkdtempSync(join(tmpdir(), 'step5b-real-')), run = 'run';
    mkdirSync(join(repo, 'items')); mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'library'));
    const put = (p: string, d: any) => writeFileSync(join(repo, p), typeof d === 'string' ? d : JSON.stringify(d));
    const itemData: any[] = [{ id: 'lem-a', kind: 'lemma', title: 'A', deps: [], forward_refs: ['thm-b'] }, { id: 'thm-b', kind: 'theorem', title: 'B', deps: ['lem-a'] }];
    const texts = ['---\nid: lem-a\nstatus: draft\ndeps: []\nforward_refs: [thm-b]\n---\n## Statement\nA.\n## Remarks\nNonessential later orientation: [[thm-b]].\n', '---\nid: thm-b\nstatus: draft\ndeps: [lem-a]\n---\n## Statement\nB uses [[lem-a]].\n'];
    const surfaces = Object.fromEntries(itemData.map((r, i) => [r.id, itemSurfaceHash(texts[i]).slice(0, 16)]));
    const plannedPages: any[] = [];
    for (let i = 0; i < 2; i++) {
      put(`items/${itemData[i].id}.md`, texts[i]);
      const page = { id: `page-${i}`, category: 'test', kind: 'A', order: i + 1, requires: [], items: [itemData[i]] };
      plannedPages.push(page);
      put(`research/${run}-batch-${i + 1}.pages.json`, [page]);
      const { items, ...metadata } = page;
      put(`research/${run}-step5-hash-${i + 1}-post-5a.json`, { version: 2, run, batch: String(i + 1), label: 'post-5a', manifest: [itemData[i].id], hashes: { [itemData[i].id]: { item_sha256: sha(texts[i]), contract_sha256: hashValue(null), manifest_sha256: hashValue({ ...itemData[i], __step6_page_id: page.id }) } }, page_manifest: [page.id], page_hashes: { [page.id]: { file_sha256: null, manifest_sha256: hashValue(metadata), item_order: [itemData[i].id] } } });
    }
    put('research/plan-spec.json', { pages: plannedPages });
    const forwardEvidence = 'This exact nonessential Remarks link points to the already authored later page.';
    mkdirSync(join(repo, 'research/nested'));
    put('research/nested/forward-review.md', forwardEvidence);
    put(`research/${run}-alpha-groups.json`, [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]);
    const tools = join(TOOLS, engine.physics ? 'physics-support' : '');
    const listed = spawnSync('node', [join(tools, 'cross-group-edges.mjs'), 'list', '--root', repo, '--run', run], { encoding: 'utf8' }); assert.equal(listed.status, 0, listed.stderr);
    const work = JSON.parse(readFileSync(join(repo, `research/${run}-cross-group-edges.json`), 'utf8'));
    const edge = work.edges[0];
    const verdict = { kind: 'edge', ...edge, verdict: 'accurate', note: 'Read the actual precise premise and citing use.', defect_ids: [] };
    const forward = { kind: 'forward', ...work.forwards[0], decision: 'orientation-reviewed', note: 'Exact Remarks-only nonessential link to an authored later page.', defect_ids: [], target_sha256: sha(texts[1]), evidence: 'research/nested/forward-review.md', evidence_sha256: sha(forwardEvidence) };
    put(`research/${run}-5b-verdicts.jsonl`, JSON.stringify(verdict) + '\n' + JSON.stringify(forward) + '\n');
    const beforeSurfaces = { ...surfaces, 'lem-a': 'old' };
    put(`research/${run}-touches.json`, { snapshots: [{ label: 'pre-author', hashes: {}, surfaces: beforeSurfaces }, { label: 'post-5a', hashes: Object.fromEntries(itemData.map((r, i) => [r.id, itemHashGuard(texts[i]).slice(0, 16)])), surfaces }] });
    const impact: any = { version: 1, reviewer: 'actual reviewer', scope: 'direct-boundary', changed_interfaces: ['lem-a'], required_review: ['thm-b'], dispositions: [{ id: 'thm-b', status: 'pending', notes: '' }] };
    put(`research/${run}-impact.json`, impact);
    put(`research/${run}-impact-5b.json`, { version: 1, reviewer: 'actual reviewer', scope: 'direct-boundary', changed_interfaces: [], required_review: [], dispositions: [] });
    try {
      const originalVerdicts = readFileSync(join(repo, `research/${run}-5b-verdicts.jsonl`), 'utf8');
      const partial = step5bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(partial.complete, false); assert.equal(partial.errors.length, 0); assert.equal(partial.pending.length, 1); assert.equal(partial.pending[0].kind, 'impact');
      impact.dispositions = [{id:'thm-b',status:'still-licensed',notes:'A generic note with no current hashes is not a review.'}];
      put(`research/${run}-impact.json`, impact);
      const omitted = step5bReviewCoverage({repo,run,physics:engine.physics});
      assert.equal(omitted.complete,false); assert.ok(omitted.errors.some((e:any)=>e.code==='impact-review-evidence-incomplete'));
      impact.dispositions = [{ id: 'thm-b', status: 'still-licensed', notes: 'Current supplier A licenses precisely the declared B premise.', carrier_raw_sha256: sha(texts[1]), supplier_uses: [{ supplier: 'lem-a', supplier_raw_sha256: sha(texts[0]), consumed_clause: 'A.', use_locations: [{section:'Statement',line:7}] }] }];
      put(`research/${run}-impact.json`, impact);
      assert.equal(step5bReviewCoverage({ repo, run, physics: engine.physics }).complete, true);
      assert.equal(readFileSync(join(repo, `research/${run}-5b-verdicts.jsonl`), 'utf8'), originalVerdicts);
      put('research/nested/forward-review.md', forwardEvidence + '\nAn appended checkpoint changes evidence bytes.');
      const evidenceChanged = step5bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(evidenceChanged.complete, false);
      assert.ok(evidenceChanged.errors.some((e: any) => e.code === 'forward-orientation-evidence-stale'));
      put('research/nested/forward-review.md', forwardEvidence);
      put('items/lem-a.md', texts[0] + '\nChanged source claim.\n');
      const stale = step5bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(stale.complete, false); assert.ok(stale.errors.some((e: any) => e.code === 'edge-verdict-stale'));
      assert.ok(stale.errors.some((e: any) => e.code === 'impact-supplier-stale'));
    } finally { rmSync(repo, { recursive: true, force: true }); }
  });
}

for (const engine of engines) test(`${engine.name}: real stage factory opts in only Step5b`, async () => {
  const module = engine.physics ? await import('../../physics-autopilot/stages/mathlib.step5.mts') : await import('../stages/mathlib.step5.mts');
  const stages = module.step5Stages({ resultPattern: (role: string, label: string) => new RegExp('^'+role+'-'+label+'\\.result\\.json$') });
  assert.equal(typeof stages.find((s: any) => s.id === '5b-cross').reviewCoverage, 'function');
  assert.ok(stages.filter((s: any) => s.id !== '5b-cross').every((s: any) => !s.reviewCoverage));
});

for (const engine of engines) test(`${engine.name}: changed pending metadata cannot replace completed-obligation progress`, () => {
  const repo = mkdtempSync(join(tmpdir(), 'step5b-count-')), dispatchDir = join(repo, 'dispatch'); mkdirSync(dispatchDir);
  mkdirSync(join(repo, 'research')); writeFileSync(join(repo, 'research/checkpoint.md'), 'immutable task');
  writeFileSync(join(dispatchDir, 'alpha-5b-lead.result.json'), JSON.stringify({run:'run',role:'alpha',covers:['all'],ok:true}));
  const stage = withStep5bReviewContinuation({id:'5b-cross',pattern:/^alpha-5b-[a-z-]+\.result\.json$/}, {inspect:()=>({complete:false,progress:'changed-order-and-metadata',errors:[],counts:{completed:1},why:'same actual completed count'})});
  const executor:any={inflight:new Map(),adoptedUnits:()=>new Set(),state:{data:{dispatches:{prior:{stage:'5b-cross',label:'5b-review-aaaaaaaaaaaaaaaa',startedAt:new Date().toISOString(),lastExitOk:true,reviewCheckpoint:{completed:1,task:'research/checkpoint.md',taskSha256:sha('immutable task')}}}}},start:()=>assert.fail('must not dispatch')};
  try{assert.throws(()=>stage.onProgress({ctx:{repo,run:'run',dispatchDir},stage,executor}),/completed-obligation progress/);}finally{rmSync(repo,{recursive:true,force:true});}
});
for (const engine of engines) test(`${engine.name}: queued or adopted review writers defer inspection and continuation`, () => {
  const stage = withStep5bReviewContinuation({id:'5b-cross',pattern:/^alpha-5b-[a-z-]+\.result\.json$/}, {inspect:()=>assert.fail('cannot inspect while writer active')});
  for(const adopted of [false,true]) stage.onProgress({ctx:{},stage,executor:{inflight:adopted?new Map():new Map([['queued',{meta:{stage:'5b-cross'}}]]),adoptedUnits:()=>adopted?new Set(['all']):new Set()}});
});
