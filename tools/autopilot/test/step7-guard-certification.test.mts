import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { itemHashGuard, itemHashJudge, shortHash } from '../../item-hash.mjs';
import { freezeFrontier } from '../../step7-rounds.mjs';
import { digest } from '../../step7-workflow.mjs';

const repo = join(import.meta.dirname, '..', '..', '..');
const text = (id: string, body: string) => `---\nid: ${id}\ntitle: Demo\nstatus: published\ndeps: []\n---\n\n${body}\n`;
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step7-central-guard-'));
  const dir = join(root, 'research', 'demo-step7-v2');
  mkdirSync(dir, { recursive: true }); mkdirSync(join(root, 'items'));
  const write = (path: string, value: any) => {
    if (path.endsWith('/certification.json')) {
      const { sha256, ...payload } = value;
      value = { ...payload, sha256: digest(payload) };
    }
    writeFileSync(path, JSON.stringify(value));
  };
  const ids = ['a', 'published-consumer'];
  const baseline = Object.fromEntries(ids.map(id => [id, itemHashGuard(text(id, 'Before.'))]));
  for (const id of ids) writeFileSync(join(root, 'items', `${id}.md`), text(id, 'A repaired argument with its supplier correctly used.'));
  write(join(dir, 'frontier.json'), freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['a'] }] }));
  write(join(dir, 'baseline.json'), baseline);
  const report = join(dir, 'report.json');
  write(report, { reviewed: ids, uncertain: false });
  const threshold = join(dir, 'threshold-1.json');
  write(threshold, { round: 1, originalCount: 1, fatalIds: [], fatalCount: 0, belowThreshold: true, errors: [] });
  const cert = { version: 2, run: 'demo', phase: 'impact-repeat', round: 1, latest_adjudication_round: 1, changed: ids,
    items: ids.map(id => ({ id, guard_sha256: itemHashGuard(readFileSync(join(root, 'items', `${id}.md`), 'utf8')),
      item_sha256: itemHashJudge(readFileSync(join(root, 'items', `${id}.md`), 'utf8')),
      context_sha256: 'c'.repeat(64), reason: 'Reviewed the repaired item and checked every relevant dependency.' })),
    evidence: { [report]: digest(readFileSync(report, 'utf8')), [threshold]: digest(readFileSync(threshold, 'utf8')) } };
  mkdirSync(join(root, 'tools'));
  // A model-free context-hash subprocess fixture. Guard-hash comparisons still
  // read the actual fixture item files and detect edits after certification.
  writeFileSync(join(root, 'tools', 'judge.mts'), `console.log(${JSON.stringify(JSON.stringify({ contexts: Object.fromEntries(cert.items.map(row => [row.id, { item_sha256: row.item_sha256, context_sha256: row.context_sha256 }])) }))});`);
  write(join(dir, 'certification.json'), cert);
  write(join(root, 'touches.json'), { snapshots: [{ label: 'pre-step7', hashes: Object.fromEntries(ids.map(id => [id, shortHash(baseline[id])])) }] });
  write(join(root, 'scope.json'), { run: 'demo', by_item: { a: '1' } });
  const guard = () => spawnSync('node', ['tools/step7-guard.mjs', '--touches', join(root, 'touches.json'),
    '--baseline', 'pre-step7', '--scope', join(root, 'scope.json'), '--items-dir', join(root, 'items'),
    '--workflow-root', root, '--judge-ledger', join(root, 'deliberately-absent-judge.jsonl'),
    '--adjudications', join(root, 'deliberately-absent-adjudications.jsonl'),
    '--terminal-resolutions', join(root, 'deliberately-absent-terminal.jsonl'), '--json'], { cwd: repo, encoding: 'utf8' });
  return { root, dir, write, cert, guard };
}

test('centralized guard licenses the published frontier item and excludes the outside consumer', () => {
  const fx = fixture(), result = fx.guard();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.summary.licensed_by_centralized_certification, 1);
  assert.deepEqual(output.excluded.changed, ['published-consumer']);
  assert.equal(output.summary.frontier_changed, 1);
});

test('outside additions remain observed exclusions without a frontier creation-provenance gate', () => {
  const fx=fixture(),id='lem-new-prerequisite';
  const body=`---\nid: ${id}\nkind: lemma\nstatus: draft\ndeps: []\n---\n\nA complete proof of the genuinely missing prerequisite.\n`;
  writeFileSync(join(fx.root,'items',`${id}.md`),body);
  fx.write(join(fx.root,'research','demo-batch-1.pages.json'),[{id:'page',items:[{id:'a'},{id}]}]);
  fx.write(join(fx.root,'research','demo-batch-1.proof-contracts.json'),{contracts:{[id]:{risk:'medium'}}});
  const item={id,guard_sha256:itemHashGuard(body),item_sha256:itemHashJudge(body),context_sha256:'c'.repeat(64),reason:'Reviewed the new proof and every dependency in its exact context.'};
  const cert={...fx.cert,changed:[...fx.cert.changed,id],items:[...fx.cert.items,item],creations:[{id,kind:'lemma',home_page:'page',batch:'1',consumers:['a'],author_result:'alpha-adjudicate-step7-v2-initial-r1-u1.result.json',reason:'This exact lemma is required by the repaired proof and no existing result supplies it.',uncertain:false,source_urls:[],familiar:true}]};
  writeFileSync(join(fx.root,'tools','judge.mts'),`console.log(${JSON.stringify(JSON.stringify({contexts:Object.fromEntries(cert.items.map((row:any)=>[row.id,{item_sha256:row.item_sha256,context_sha256:row.context_sha256}]))}))});`);
  fx.write(join(fx.dir,'certification.json'),cert);
  let result=fx.guard();assert.equal(result.status,0,result.stdout+result.stderr);
  fx.write(join(fx.dir,'certification.json'),{...cert,creations:[]});
  result=fx.guard();assert.equal(result.status,0,result.stdout+result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).excluded.created,[id]);
  fx.write(join(fx.dir,'certification.json'),fx.cert);
  result=fx.guard();assert.equal(result.status,0,result.stdout+result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).excluded.created,[id]);
});

test('centralized guard preserves the exact original touchlog baseline and frontier', () => {
  const fx = fixture();
  fx.write(join(fx.root, 'scope.json'), { run: 'demo', by_item: { a: '1', extra: '1' } });
  let result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /frozen original frontier/);
  fx.write(join(fx.root, 'scope.json'), { run: 'demo', by_item: { a: '1' } });
  const baseline = JSON.parse(readFileSync(join(fx.dir, 'baseline.json'), 'utf8')); baseline.a = 'a'.repeat(64);
  fx.write(join(fx.dir, 'baseline.json'), baseline);
  result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /original touchlog baseline/);
});

test('a missing centralized certificate cannot fall back to historical licence paths', () => {
  const fx = fixture();
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, items: [] });
  const result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /uncovered Step 7 repair/);
});

test('initial-wave certification cannot terminal-close Step7', () => {
  const fx = fixture(); fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, phase: 'impact-initial' });
  const result = fx.guard(); assert.equal(result.status, 1);
  assert.match(result.stdout, /completed repeat-round certification|not completed its Terra\/adjudication cycle/);
});

test('stale outside carriers are excluded but immutable source evidence remains mandatory', () => {
  const fx = fixture();
  writeFileSync(join(fx.root, 'items', 'published-consumer.md'), text('published-consumer', 'Changed after certification.'));
  let result = fx.guard(); assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).excluded.changed, ['published-consumer']);
  writeFileSync(join(fx.root, 'items', 'published-consumer.md'), text('published-consumer', 'A repaired argument with its supplier correctly used.'));
  fx.write(join(fx.dir, 'report.json'), { reviewed: [] });
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /evidence changed/);
});

test('mixed stale frontier and outside edits retain the frontier failure and outside evidence', () => {
  const fx = fixture();
  for (const id of ['a', 'published-consumer']) writeFileSync(join(fx.root, 'items', `${id}.md`), text(id, 'Changed after certification.'));
  const result = fx.guard(), output = JSON.parse(result.stdout);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /stale Step 7 certification a/);
  assert.deepEqual(output.excluded.changed, ['published-consumer']);
  assert.equal(output.summary.frontier_changed, 1);
});

test('outside changed items require no certificate row while frontier coverage remains mandatory', () => {
  const fx = fixture();
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, items: fx.cert.items.filter(row => row.id === 'a') });
  let result = fx.guard();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).excluded.changed, ['published-consumer']);
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, items: fx.cert.items.filter(row => row.id !== 'a') });
  result = fx.guard();
  assert.equal(result.status, 1);
  assert.match(result.stdout, /uncovered Step 7 repair a/);
});

test('deletion integrity remains global for an outside consumer', () => {
  const fx = fixture();
  unlinkSync(join(fx.root, 'items', 'published-consumer.md'));
  const result = fx.guard(), output = JSON.parse(result.stdout);
  assert.equal(result.status, 1);
  assert.ok(output.errors.some((row:any) => row.code === 'step7-deletion' && row.id === 'published-consumer'));
});

test('v2 evidence loss fails closed and cannot invoke the legacy licence fallback', () => {
  const fx = fixture(); unlinkSync(join(fx.dir, 'certification.json'));
  let result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /certification missing/);
  fx.write(join(fx.dir, 'certification.json'), fx.cert); unlinkSync(join(fx.dir, 'frontier.json'));
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /frontier.json/);
});

test('final closure requires a bound threshold and fresh supplier contexts', () => {
  const fx = fixture();
  const threshold = join(fx.dir, 'threshold-1.json');
  const evidence = { ...fx.cert.evidence }; delete evidence[threshold];
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, evidence });
  let result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /missing bound fatal threshold/);
  fx.write(join(fx.dir, 'certification.json'), fx.cert);
  const contextTool = join(fx.root, 'tools', 'judge.mts');
  writeFileSync(contextTool, readFileSync(contextTool, 'utf8').replaceAll('c'.repeat(64), 'd'.repeat(64)));
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /stale Step 7 certification context/);
});
