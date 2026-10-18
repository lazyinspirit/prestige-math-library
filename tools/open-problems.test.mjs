import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { APP_DIR } from './paths.mjs';
import { openProblemErrors, openProblemReviewErrors } from './content-policy-lib.mjs';
import { validatePhysicsContent } from './physics-support/physics-content.mjs';
import { mathematicalItems } from '../galaxy/math-boundary.mjs';
import { JUDGE_LINEUPS, DEFAULT_LINEUP } from './models.mjs';
import { statementHash } from './step5-statement.mjs';
const tools = fileURLToPath(new URL('.', import.meta.url));
const source = { provenance: { statement: 'literature-derived', proof: 'not-applicable' }, sources: { references: [{ title: 'Problem formulation', url: 'https://example.org/problem' }] } };
const problem = { id: 'op-question', kind: 'open-problem', status: 'draft', domain: 'mathematics', deps: [], aliases: ['question-alias'], ...source };
const body = '## Open problem\n\nDoes the stated property hold?\n\n## Status\n\nUnresolved; no proof is established.\n';
const markdown = row => `---\nid: ${row.id}\nkind: ${row.kind}\ntitle: Fixture\nstatus: ${row.status ?? 'draft'}\ndomain: mathematics\ndeps: ${JSON.stringify(row.deps ?? [])}\njustified_by: ${JSON.stringify(row.justified_by ?? [])}\naliases: ${JSON.stringify(row.aliases ?? [])}\nprovenance:\n  statement: literature-derived\n  proof: ${row.kind === 'open-problem' ? 'not-applicable' : 'not-supplied'}\nsources:\n  references:\n    - title: Problem formulation\n      url: https://example.org/problem\n---\n${row.kind === 'open-problem' ? body : '## Statement\n\nA fixture result.\n'}${row.extra ?? ''}`;
function fixture(t, physics = false) {
  const root = mkdtempSync(join(tmpdir(), 'open-problems-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  for (const dir of ['tools', 'items', 'library/test', 'research']) mkdirSync(join(root,dir),{recursive:true});
  const sourceTools = physics ? join(tools,'physics-support') : tools;
  for (const name of ['depcheck.mjs','extcheck.mjs','content-policy.mjs','content-policy-lib.mjs','paths.mjs','facts-block.mjs','frontmatter-list.mjs','item-scope.mjs','published-repair-policy.mjs','item-hash.mjs', ...(!physics ? ['physics-math-context-history.mjs','physics-math-context-import.mjs','pathway-lib.mjs'] : [])]) copyFileSync(join(sourceTools,name),join(root,'tools',name));
  writeFileSync(join(root,'research/b-leaf-legacy-allowlist.json'),JSON.stringify({version:1,edges:[]}));
  const pages = [{id:'questions',kind:'A',category:'test',library:'mathematics',order:1,companion:'questions-examples',requires:[],items:[problem]},{id:'questions-examples',kind:'B',category:'test',library:'mathematics',order:2,companion:'questions',requires:['questions'],items:[]}];
  writeFileSync(join(root,'research/plan-spec.json'),JSON.stringify({pages}));
  writeFileSync(join(root,'research/batch.pages.json'),JSON.stringify(pages));
  writeFileSync(join(root,'items/op-question.md'),markdown(problem));
  writeFileSync(join(root,'library/test/questions.md'),'---\npage: questions\nstatus: draft\nitems: [op-question]\nexamples: []\n---\n');
  if (!physics) copyFileSync(join(tools, 'published-repair-adoption.mjs'), join(root, 'tools/published-repair-adoption.mjs'));
  if (physics) {
    for (const name of ['published-repair-adoption.mjs','published-repair-policy.mjs','physics-math-context-history.mjs','physics-math-context-import.mjs','pathway-lib.mjs','paths.mjs','item-hash.mjs']) copyFileSync(join(tools,name),join(root,name));
    copyFileSync(join(sourceTools,'run-manifest-pages.mjs'),join(root,'tools/run-manifest-pages.mjs'));
  }
  const env = {...process.env,PRESTIGE_APP_DIR:APP_DIR,PHYSICS_REPO:root};
  const run = (name,args=[])=>spawnSync(process.execPath,[join(root,'tools',name),...args,'--json'],{cwd:root,env,encoding:'utf8'});
  return {root, pages, run, env, write: row=>writeFileSync(join(root,`items/${row.id}.md`),markdown(row)), plan:()=>spawnSync(process.execPath,[join(sourceTools,'validate-plan.mjs'),join(root,'research/plan-spec.json'),'--repo',root],{cwd:root,env,encoding:'utf8'})};
}
test('open problems require source/status review and reject claimed proofs or proof stamps',()=>{
  assert.deepEqual(openProblemErrors(problem,body),[]);
  assert.ok(openProblemErrors({...problem,verification:{audited:'2026-10-12'}},body).some(e=>e.code==='open-problem-proof-stamp'));
  assert.ok(openProblemErrors({...problem,provenance:{...source.provenance,proof:'not-supplied'}},body).some(e=>e.code==='open-problem-provenance'));
  assert.ok(openProblemErrors(problem,body+'\n## Proof\nClaimed solution.\n').some(e=>e.code==='open-problem-proof'));
  assert.ok(openProblemErrors({...problem,status:'published'},body).some(e=>e.code==='open-problem-publication'));
  assert.deepEqual(openProblemErrors({...problem,status:'published',verification:{sources_checked:{date:'2026-10-12',scope:'Formulation and unresolved status',by:'Fixture reviewer'}}},body),[]);
  assert.ok(openProblemReviewErrors({}).length);
  assert.deepEqual(openProblemReviewErrors({open_problem_review:Object.fromEntries(['formulation','status','sources'].map(key=>[key,{verdict:'pass',evidence:'Concrete source review.'}]))}),[]);
});
for (const physics of [false,true]) {
  const label = physics ? 'physics' : 'mathematics';
  test(`${label}: open-problem prefix, source record and planning are accepted`,t=>{
    const f=fixture(t,physics);for(const name of ['depcheck.mjs','extcheck.mjs']) {const r=f.run(name);assert.equal(r.status,0,r.stdout+r.stderr);}
    const r=f.plan();assert.equal(r.status,0,r.stdout+r.stderr);
    const policy=f.run('content-policy.mjs',['research/batch.pages.json']);assert.equal(policy.status,0,policy.stdout+policy.stderr);
  });
  test(`${label}: direct, aliased, discharge and indirect open suppliers fail closed`,t=>{
    const f=fixture(t,physics);
    for(const raw of ['op-question','question-alias']) {
      f.write({id:'lem-consumer',kind:'lemma',deps:[raw]});let r=JSON.parse(f.run('depcheck.mjs').stdout);assert.ok(r.errors.some(e=>e.code==='open-problem-dependency'));
      f.write({id:'lem-consumer',kind:'lemma',justified_by:[raw]});r=JSON.parse(f.run('depcheck.mjs').stdout);assert.ok(r.errors.some(e=>e.code==='open-problem-dependency'));
    }
    f.write({id:'lem-consumer',kind:'lemma',deps:['question-alias']});f.write({id:'thm-indirect',kind:'theorem',deps:['lem-consumer']});
    writeFileSync(join(f.root,'selection.json'),JSON.stringify(['thm-indirect']));
    const r=JSON.parse(f.run('depcheck.mjs',['--items-file','selection.json']).stdout);assert.ok(r.errors.some(e=>e.code==='open-problem-dependency'));
  });
  test(`${label}: pre-authoring manifests cannot depend on planned open questions`,t=>{
    const f=fixture(t,physics);rmSync(join(f.root,'items/op-question.md'));
    f.pages[0].items.push({id:'thm-consumer',kind:'theorem',domain:'mathematics',deps:['op-question'],dependency_roles:{'op-question':'mathematical-premise'}});
    writeFileSync(join(f.root,'research/batch.pages.json'),JSON.stringify(f.pages));writeFileSync(join(f.root,'research/plan-spec.json'),JSON.stringify({pages:f.pages}));
    const r=JSON.parse(f.run('content-policy.mjs',['research/batch.pages.json','--manifest-only']).stdout);assert.ok(r.errors.some(e=>e.code==='open-problem-dependency'));
    assert.notEqual(f.plan().status,0);
  });
  test(`${label}: contextual Remarks links are allowed, proof/fact links are rejected`,t=>{
    const f=fixture(t,physics);f.write({id:'thm-context',kind:'theorem',extra:'\n## Remarks\n\nThe question [[question-alias]] remains open.\n'});
    assert.equal(f.run('extcheck.mjs').status,0);
    f.write({id:'thm-context',kind:'theorem',extra:'\n## Proof\n\nFirst a step.\n\nThen use [[question-alias]] as a premise.\n'});
    const r=JSON.parse(f.run('extcheck.mjs').stdout);assert.ok(r.errors.some(e=>e.code==='open-problem-proof-use'));
  });
}
test('physics domains accept mathematical and physical open questions, but no proof consumer',()=>{
 const physical={...problem,id:'op-physical',aliases:[],domain:'physics',physical_scope:'Specified model',body};
 const mathematical={...problem,body};
 assert.deepEqual(validatePhysicsContent({items:[mathematical,physical]}),[]);
 const consumer={id:'pthm-result',kind:'physics-theorem',domain:'physics',physical_scope:'Specified model',deps:['question-alias'],dependency_roles:{'question-alias':'mathematical-premise'},body:'## Statement\nConditional result.\n',provenance:{statement:'literature-derived',proof:'literature-derived'},sources:source.sources};
 assert.ok(validatePhysicsContent({items:[mathematical,consumer]}).some(e=>e.code==='open-problem-dependency'));
});
test('mathematical views retain questions but exclude invalid consumers and their chains',()=>{
 const rows=[{id:'op-question',kind:'open-problem',aliases:['q']},{id:'thm-bad',kind:'theorem',deps:['q']},{id:'cor-bad',kind:'corollary',deps:['thm-bad']},{id:'rem-context',kind:'remark',forwardRefs:['op-question']}];
 assert.deepEqual(mathematicalItems(rows).map(r=>r.id),['op-question','rem-context']);
});
test('question formulation and status are public interfaces; source-only changes are not',()=>{
 const before=markdown(problem);assert.notEqual(statementHash(before),statementHash(before.replace('Unresolved','Resolved')));assert.notEqual(statementHash(before),statementHash(before.replace('stated property','another property')));assert.equal(statementHash(before),statementHash(before.replace('https://example.org/problem','https://example.org/new-source')));
});

for (const physics of [false, true]) {
  test(`${physics ? 'physics' : 'mathematics'}: proof stamping skips questions and rejects existing proof stamps`, t => {
    const f = fixture(t, physics);
    // Synthetic ledger rows exercise class handling only, not proof acceptance.
    const ledger = join(f.root, 'research/synthetic-ledger.jsonl');
    writeFileSync(ledger, JUDGE_LINEUPS[DEFAULT_LINEUP].map(model => JSON.stringify({ model, id: 'op-question', keep: true })).join('\n') + '\n');
    const script = join(tools, physics ? 'physics-support/apply-judge-stamps.mjs' : 'apply-judge-stamps.mjs');
    const run = mode => spawnSync(process.execPath, [script, '--ledger', ledger, '--items', 'op-question', mode], { cwd: f.root, env: { ...f.env, JUDGE_LINEUP: DEFAULT_LINEUP }, encoding: 'utf8' });
    const before = readFileSync(join(f.root, 'items/op-question.md'), 'utf8');
    for (const mode of ['--apply', '--verify']) {
      const result = run(mode);
      assert.equal(result.status, 0, result.stdout + result.stderr);
      assert.equal(readFileSync(join(f.root, 'items/op-question.md'), 'utf8'), before);
    }
    writeFileSync(join(f.root, 'items/op-question.md'), before.replace('sources:', 'verification:\n  judge: {verdict: pass}\nsources:'));
    assert.notEqual(run('--verify').status, 0);
  });
}

for (const physics of [false, true]) {
  test(`${physics ? 'physics' : 'mathematics'}: valid YAML comments cannot hide an outside question supplier`, t => {
    const f = fixture(t, physics);
    writeFileSync(join(f.root, 'items/op-question.md'), markdown(problem).replace('kind: open-problem', "kind: 'open-problem' # unresolved question"));
    f.write({ id: 'thm-consumer', kind: 'theorem', deps: ['question-alias'], extra: '\n## Proof\n\nUse [[question-alias]].\n' });
    writeFileSync(join(f.root, 'selection.json'), JSON.stringify(['thm-consumer']));
    for (const name of ['depcheck.mjs', 'extcheck.mjs']) {
      const result = f.run(name, ['--items-file', 'selection.json']);
      assert.notEqual(result.status, 0, result.stdout + result.stderr);
      assert.ok(JSON.parse(result.stdout).errors.some(e => e.code === (name === 'depcheck.mjs' ? 'open-problem-dependency' : 'open-problem-proof-use')));
    }
  });
}
