import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { statementHash } from './step5-statement.mjs';
import { consumers } from './batch-scope-review.mjs';
import { orderedItems } from './item-dependency-levels.mjs';
import { gateDiagnostics } from './step5-gate-diagnostics.mjs';
import { requiresOwningContract } from './autopilot/bin/complete-step5-item.mjs';
const toolDir = fileURLToPath(new URL('.', import.meta.url));
const algorithm = (id, deps = []) => `---\nid: ${id}\nkind: algorithm\ntitle: Fixture algorithm\nstatus: draft\ndomain: mathematics\ndeps: ${JSON.stringify(deps)}\njustified_by: []\nprovenance:\n  statement: literature-derived\n  proof: not-applicable\nsources:\n  references:\n    - title: Fixture source\n      url: https://example.org/algorithm\n---\n## Definition\n\nInput a natural number. ${deps.map(id => `Call [[${id}]] repeatedly.`).join(' ')}\n\n\x60\x60\x60text\nwhile input > 0:\n  input := input - 1\nreturn input\n\x60\x60\x60\n`;
function fixture(t) {
 const root = mkdtempSync(join(tmpdir(), 'algorithm-items-')); t.after(() => rmSync(root,{recursive:true,force:true}));
 for(const dir of ['tools','items','library/test','research'])mkdirSync(join(root,dir),{recursive:true});
 for(const file of ['depcheck.mjs','facts-block.mjs','frontmatter-list.mjs','item-scope.mjs','published-repair-adoption.mjs','published-repair-policy.mjs','physics-math-context-history.mjs','physics-math-context-import.mjs','pathway-lib.mjs','paths.mjs','item-hash.mjs'])copyFileSync(join(toolDir,file),join(root,'tools',file));

 writeFileSync(join(root,'research/b-leaf-legacy-allowlist.json'),JSON.stringify({version:1,edges:[]}));
 const rows=[{id:'alg-small',kind:'algorithm',deps:[],dependency_level:0},
  {id:'alg-composite',kind:'algorithm',deps:['alg-small'],dependency_level:1}];
 const pages=[{id:'algorithms',kind:'A',category:'test',order:1,companion:'algorithms-examples',requires:[],items:rows},
  {id:'algorithms-examples',kind:'B',category:'test',order:2,companion:'algorithms',requires:['algorithms'],items:[]}];
 const save=()=>{writeFileSync(join(root,'research/plan-spec.json'),JSON.stringify({pages}));
  writeFileSync(join(root,'library/test/algorithms.md'),'---\npage: algorithms\nstatus: draft\nitems: [alg-small, alg-composite]\nexamples: []\n---\n');};
 save(); for(const row of rows)writeFileSync(join(root,`items/${row.id}.md`),algorithm(row.id,row.deps));
 const depcheck=()=>spawnSync(process.execPath,['tools/depcheck.mjs','--json'],{cwd:root,encoding:'utf8',env:{...process.env,PHYSICS_REPO:root}});
 const plan=()=>{save();return spawnSync(process.execPath,[join(toolDir,'validate-plan.mjs'),'research/plan-spec.json','--repo',root],{cwd:root,encoding:'utf8',env:{...process.env,PHYSICS_REPO:root}});};
 return {root,rows,pages,save,depcheck,plan};
}
test('composed and looping algorithms pass normal planning and definition provenance checks', t=>{
 const f=fixture(t);let result=f.depcheck();assert.equal(result.status,0,result.stdout+result.stderr);
 result=f.plan();assert.equal(result.status,0,result.stdout+result.stderr);
 assert.deepEqual(orderedItems([f.pages[0]]).map(row=>[row.id,row.level]),[['alg-small',0],['alg-composite',1]]);
 assert.equal(requiresOwningContract(algorithm('alg-small'),true),false);
 assert.equal(requiresOwningContract(algorithm('alg-small')+'\n## Proof\nSupplied argument.\n',true),true);
});
test('algorithm prefixes, undeclared procedure calls and real prerequisite cycles remain checked',t=>{
 const f=fixture(t);f.rows[0].kind='lemma';assert.notEqual(f.plan().status,0);f.rows[0].kind='algorithm';
 writeFileSync(join(f.root,'items/alg-small.md'),algorithm('alg-small').replace('kind: algorithm','kind: lemma'));
 let result=JSON.parse(f.depcheck().stdout);assert.ok(result.errors.some(row=>row.code==='kind-prefix'));
 assert.ok(result.errors.some(row=>row.code==='provenance-proof-applicability'));
 writeFileSync(join(f.root,'items/alg-small.md'),algorithm('alg-small'));
 writeFileSync(join(f.root,'items/alg-composite.md'),algorithm('alg-composite').replace('Input a natural number.','Call [[alg-small]].'));
 assert.ok(JSON.parse(f.depcheck().stdout).warns.some(row=>row.code==='cited-not-in-deps'));
 f.rows[0].deps=['alg-composite'];writeFileSync(join(f.root,'items/alg-small.md'),algorithm('alg-small',['alg-composite']));
 writeFileSync(join(f.root,'items/alg-composite.md'),algorithm('alg-composite',['alg-small']));
 assert.notEqual(f.plan().status,0);assert.notEqual(f.depcheck().status,0);
});
test('algorithm Definition edits bind all indirect consumers; source-only changes do not restate it',t=>{
 const f=fixture(t);const before=algorithm('alg-small');
 const after=before.replace('input := input - 1','input := input - 2');
 assert.notEqual(statementHash(before),statementHash(after));
 assert.equal(statementHash(before),statementHash(before.replace('https://example.org/algorithm','https://example.org/archive')));
 writeFileSync(join(f.root,'items/lem-property.md'),'---\nid: lem-property\nkind: lemma\ndeps: [alg-composite]\n---\n## Statement\nA mathematical property.\n');
 assert.deepEqual(consumers(f.root,['alg-small']).map(row=>row.id),['alg-composite','lem-property']);
 const diagnostics=gateDiagnostics([{id:'proof-contract',ok:false,output:'ERROR citation-undeclared-dependency [alg-composite]: missing supplier'}],['alg-small','alg-composite']);
 assert.deepEqual(diagnostics[0].subjects,['alg-composite']);
});


test('algorithm well-definedness uses ordinary justified_by without creating a reverse dependency',t=>{
 const f=fixture(t);
 writeFileSync(join(f.root,'items/lem-well-defined.md'),'---\nid: lem-well-defined\nkind: lemma\nstatus: draft\ndeps: [alg-small]\n---\n## Statement\nThe procedure is well-defined.\n');
 writeFileSync(join(f.root,'items/alg-small.md'),algorithm('alg-small').replace('justified_by: []','justified_by: [lem-well-defined]'));
 const result=f.depcheck();assert.equal(result.status,0,result.stdout+result.stderr);
 assert.deepEqual(orderedItems([f.pages[0]]).map(row=>row.level),[0,1]);
});
