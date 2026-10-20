import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { inspectStatement } from '../../statement-first.mjs';
import { checkStatementFrontier } from '../../statement-first-check.mjs';
import { isFreshStatementRun, readStatementPolicy, writeStatementPolicy } from '../../statement-first-policy.mjs';
import { statementFirstStages } from '../src/statement-first.mts';

const kinds = {definition:'Definition', algorithm:'Definition', theorem:'Statement', lemma:'Statement', proposition:'Statement', corollary:'Statement', example:'Example', counterexample:'Statement refuted', 'false-statement':'Statement', remark:'Remark', 'open-problem':'Open problem', postulate:'Postulate', 'physics-theorem':'Statement', 'thought-experiment':'Statement', experiment:'Observations'};
test('every mathematical/physical item class has uninterrupted statements and individual following links', async () => {
  for (const [kind, heading] of Object.entries(kinds)) {
    const ref = heading === 'Statement refuted' ? 'Statement' : heading;
    assert.deepEqual(await inspectStatement('id', kind, `## ${heading}\n\nA precise claim.\n\n## ${ref} references\n\n[[def-space|Spaces]]\n\n[source](https://example.org)\n`), [], kind);
    for (const link of ['[[def-space|Spaces]]', '[source](https://example.org)', '<https://example.org>', '<a href="https://example.org">source</a>', '[source][ref]\n\n[ref]: https://example.org'])
      assert.ok((await inspectStatement('id', kind, `## ${heading}\n\nA ${link}.\n`)).some(x => x.includes('contains hyperlinks')), kind + link);
  }
  for (const refs of ['[[def-space]] [[def-other]]', '[[def-space]]\n[[def-other]]', '- [[def-space]]', '[[def-space]]\ncontinued label'])
    assert.ok((await inspectStatement('id','theorem',`## Statement\n\nClaim.\n\n## Statement references\n\n${refs}\n`)).length, refs);
  assert.ok((await inspectStatement('id','theorem','## Statement\n\nClaim.\n\n## Proof\n\nArgument.\n\n## Statement references\n\n[[def-space]]\n')).length);
  assert.deepEqual(await inspectStatement('id','theorem','## Statement\n\nClaim with $[0,1]$ and `[[literal]]`.\n\n## Proof\n\nUse [[lem-supplier]].\n'), []);
});

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(),'statement-first-'));
  t.after(() => rmSync(root, {recursive:true,force:true}));
  mkdirSync(join(root,'research')); mkdirSync(join(root,'items')); mkdirSync(join(root,'briefs'));
  return root;
}
test('frontier checker covers published and draft subjects, rejects empty/missing inputs, leaves suppliers untouched', async t => {
  const root=fixture(t), run='check'; writeStatementPolicy(root,run,'math');
  const manifest=join(root,'research',`${run}-batch-1.pages.json`);
  writeFileSync(manifest,JSON.stringify([{id:'page',items:[{id:'ex-one'},{id:'lem-two'}]}]));
  const item=(id:string,kind:string,status:string,body:string) => `---\nid: ${id}\nkind: ${kind}\nstatus: ${status}\n---\n${body}`;
  writeFileSync(join(root,'items/ex-one.md'),item('ex-one','example','published','## Example\n\nA [[def-outside]] example.\n'));
  writeFileSync(join(root,'items/lem-two.md'),item('lem-two','lemma','draft','## Statement\n\nA lemma.\n'));
  const external=join(root,'items/def-outside.md'); writeFileSync(external,'unrelated malformed supplier');
  const result=await checkStatementFrontier(root,run,'math');
  assert.equal(result.items,2); assert.equal(result.errors.length,1); assert.match(result.errors[0],/ex-one/);
  assert.match(readFileSync(join(root,'items/ex-one.md'),'utf8'),/status: published/);
  assert.equal(readFileSync(external,'utf8'),'unrelated malformed supplier');
  writeFileSync(manifest,'[]'); await assert.rejects(checkStatementFrontier(root,run,'math'),/Empty/);
});
test('fresh-run policy does not retrofit an existing namespace or state', t => {
  const root=fixture(t), state=join(root,'state');
  assert.equal(isFreshStatementRun(root,'new',state),true);
  assert.equal(readStatementPolicy(root,'legacy','math'),null);
  writeFileSync(join(root,'research/legacy-batch-1.pages.json'),'[]');
  assert.equal(isFreshStatementRun(root,'legacy',state),false);
  mkdirSync(state); writeFileSync(join(state,'state.json'),'{}');
  assert.equal(isFreshStatementRun(root,'new',state),false);
  writeStatementPolicy(root,'new','physics');
  assert.throws(()=>readStatementPolicy(root,'new','math'),/Invalid/);
});
test('composition keeps native stages/models/gates/counters and decorates primary, refresh, and repair dispatches', async t => {
  const root=fixture(t), ctx:any={repo:root,run:'new'}; writeStatementPolicy(root,ctx.run,'physics');
  writeFileSync(join(root,'briefs/author.md'),'Original instructions.');
  const plan:any={role:'beta',brief:'briefs/author.md',label:'author',job:'author',task:'task.md',profile:'original'};
  const original:any={id:'1-scaffold',label:'author',pattern:/native/,modelProfile:'original',maxAttempts:2,maxFixRounds:1,
    plan:()=>[plan],refreshPlan:()=>plan,gates:()=>[{id:'native',argv:['node','native.mjs']}],
    onGateFailure:({executor,stage}:any)=>executor.start(stage,plan)};
  const final:any={id:'6-finalize-v3',terminalTransaction:{validatedStage:'final'},pattern:/final/,plan:()=>[plan]};
  const result=statementFirstStages(ctx,[original,final],'physics');
  for (const id of ['1-drift','1-drift-apply','1-baseline','1-append-drift-1','1-append-apply-1'])
    assert.deepEqual(statementFirstStages(ctx,[{...original,id}], 'physics')[0].gates!(ctx).map(g=>g.id), ['native']);
  assert.equal(result.length,2); assert.equal(result[0].modelProfile,original.modelProfile);
  assert.equal(result[0].maxAttempts,2); assert.equal(result[0].maxFixRounds,1);
  assert.deepEqual(result[0].gates!(ctx).map(g=>g.id),['native','statement-first']);
  assert.equal(original.gates(ctx).length,1); assert.equal(result[1].terminalTransaction,final.terminalTransaction); assert.equal(result[1].gates,undefined);
  const decorated=result[0].plan!(ctx,['1'])[0];
  assert.equal(decorated.profile,'original'); assert.equal(decorated.task,'task.md');
  assert.match(readFileSync(join(root,decorated.brief as string),'utf8'),/Uninterrupted statements/);
  assert.doesNotMatch(readFileSync(join(root,decorated.brief as string),'utf8'), /<([a-z]+)>/);
  assert.equal(result[0].refreshPlan!(ctx,'1',{} as any).brief,decorated.brief);
  let repaired:any;
  await result[0].onGateFailure!({ctx,stage:result[0],executor:{start:(_:any,p:any)=>{repaired=p;}},failure:{} as any,round:1});
  assert.equal(repaired.brief,decorated.brief);
  assert.throws(()=>statementFirstStages({...ctx,run:'legacy'},[original],'physics'),/fresh planned policy/);
});


test('statement-first retains mixed-case item identities and rejects invalid or repeated scope subjects', async t => {
  const root = fixture(t), run = 'case-check'; writeStatementPolicy(root, run, 'math');
  const ids = ['lem-hat-CF-genus-one-lens-space-order-three-rank-three',
    'lem-amenable-D-R-l2-dimension-estimate'];
  const manifest = join(root, 'research', `${run}-batch-1.pages.json`);
  const save = (items: any[]) => writeFileSync(manifest, JSON.stringify([{ id: 'page', items }]));
  for (const id of ids) writeFileSync(join(root, 'items', `${id}.md`),
    `---\nid: ${id}\nkind: lemma\nstatus: draft\n---\n## Statement\n\nA precise fixture lemma.\n`);
  save(ids.map(id => ({ id })));
  assert.deepEqual(await checkStatementFrontier(root, run, 'math'), { items: 2, errors: [] });
  for (const items of [[{ id: 'Lem-bad-prefix' }], [{ id: 'lem-invalid/path' }], [],
    [{ id: ids[0] }, { id: ids[0] }]]) {
    save(items);
    await assert.rejects(checkStatementFrontier(root, run, 'math'), /Invalid|Empty|Duplicate/);
  }
  save([{ id: ids[0] }]);
  writeFileSync(join(root, 'research', `${run}-batch-2.pages.json`),
    JSON.stringify([{ id: 'other-page', items: [{ id: ids[0] }] }]));
  await assert.rejects(checkStatementFrontier(root, run, 'math'), /Duplicate/);
});


test('wiki reference labels may contain math without splitting their link identity', async () => {
  const prefix = '## Statement\n\nA precise claim.\n\n## Statement references\n\n';
  for (const label of ['An $L^2$ bound', '$\\pi_1$ and $H_1$ comparison',
    'The $\\epsilon$ estimate and its $n$ parameters']) {
    assert.deepEqual(await inspectStatement('fixture', 'lemma',
      prefix + `[[lem-target|${label}]]\n`), [], label);
    const claim = await inspectStatement('fixture', 'lemma',
      `## Statement\n\nUse [[lem-target|${label}]].\n`);
    assert.ok(claim.some(error => error.includes('contains hyperlinks')), label);
  }
  assert.deepEqual(await inspectStatement('fixture', 'lemma', prefix
    + '[[lem-one|An $L^2$ bound]]\n\n[[lem-two|An $H_1$ bound]]\n'), []);
  for (const invalid of [
    '[[lem-target|An $L^2$\nbound]]', // one wiki link, illegally hard-wrapped
    '[[lem-one|An $L^2$ bound]] [[lem-two|Another $H_1$ bound]]',
    '[[lem-one|An $L^2$ bound]]\n[[lem-two|Another $H_1$ bound]]',
    '[[lem-one|An $L^2$ bound]]\n\nPlain text without a reference.',
    'This is $L^2$ prose, not a link.',
    '`[[lem-target|A code literal]]`',
    '$[[lem-target|A math literal]]$',
  ]) {
    assert.ok((await inspectStatement('fixture', 'lemma', prefix + invalid + '\n'))
      .some(error => error.includes('each reference must occupy')), invalid);
  }
  // Math and code containing wiki-looking text are still allowed in a claim.
  assert.deepEqual(await inspectStatement('fixture', 'lemma',
    '## Statement\n\nLiteral `$[[lem-code]]$` and $[[lem-math]]$ are notation.\n'), []);
  // A valid mathematical alias does not excuse misplaced reference sections.
  assert.ok((await inspectStatement('fixture', 'lemma',
    '## Statement\n\nClaim.\n\n## Proof\n\nArgument.\n\n## Statement references\n\n[[lem-target|An $L^2$ bound]]\n'))
    .some(error => error.includes('must immediately follow')));
});
