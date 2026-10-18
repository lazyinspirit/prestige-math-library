import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pageLayout} from '../../page-layout.mjs';
import {writeStatementPolicy,policyPath} from '../../statement-first-policy.mjs';
import {compactStages} from '../src/page-layout.mts';
function fixture(t:any,domain:'math'|'physics') {
  const repo=mkdtempSync(join(tmpdir(),'compact-pages-'));
  t.after(()=>rmSync(repo,{recursive:true,force:true}));
  for(const p of ['research','briefs','library/category','items'])mkdirSync(join(repo,p),{recursive:true});
  writeStatementPolicy(repo,'new',domain);
  const rows=['one','two'].map(id=>({id,category:'category',items:[{id:`def-${id}`}]}));
  writeFileSync(join(repo,'research/new-batch-1.pages.json'),JSON.stringify(rows));
  const page=(id:string)=>`---\npage: ${id}\ntitle: Test\nstatus: published\n${domain==='physics'?'library: physics\n':''}items: [def-${id}]\nexamples: []\n# preserved comment\n---\n`;
  for(const row of rows)writeFileSync(join(repo,`library/category/${row.id}.md`),page(row.id));
  writeFileSync(join(repo,'library/category/_pathway.md'),'Keep pathway prose.');
  writeFileSync(join(repo,'items/def-one.md'),'Untouched item proof.');
  writeFileSync(join(repo,'briefs/author.md'),'Native author brief.');
  return {repo,run:'new'};
}
test('mechanical preparation covers both collections, preserves metadata/content boundary, is idempotent and rejects empty scopes',t=>{
  for(const domain of ['math','physics'] as const){
    const ctx=fixture(t,domain);
    assert.equal(pageLayout(ctx.repo,ctx.run,domain).errors.length,2);
    assert.equal(pageLayout(ctx.repo,ctx.run,domain,{prepare:true}).changed,2);
    assert.deepEqual(pageLayout(ctx.repo,ctx.run,domain),{pages:2,changed:0,errors:[]});
    assert.equal(pageLayout(ctx.repo,ctx.run,domain,{prepare:true}).changed,0);
    const text=readFileSync(join(ctx.repo,'library/category/one.md'),'utf8');
    assert.match(text,/status: published/);assert.match(text,/# preserved comment/);
    assert.match(text,/page_layout: compact-v1\n---\n$/);assert.doesNotMatch(text,/Summary/);
    assert.equal(readFileSync(join(ctx.repo,'items/def-one.md'),'utf8'),'Untouched item proof.');
    assert.equal(readFileSync(join(ctx.repo,'library/category/_pathway.md'),'utf8'),'Keep pathway prose.');
    writeFileSync(join(ctx.repo,'research/new-batch-1.pages.json'),'[]');
    assert.throws(()=>pageLayout(ctx.repo,ctx.run,domain,{prepare:true}),/Empty/);
  }
});
test('legacy policies cannot acquire layout changes and malformed pages fail before mutation',t=>{
  const ctx=fixture(t,'math');
  const file=join(ctx.repo,'library/category/one.md'),before=readFileSync(file,'utf8');
  writeFileSync(file,before+'Forbidden authored summary.\n');
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'math',{prepare:true}),/must not be authored/);
  assert.equal(readFileSync(file,'utf8'),before+'Forbidden authored summary.\n');
  writeFileSync(file,before);
  writeFileSync(join(ctx.repo,'library/category/two.md'),'Malformed.');
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'math',{prepare:true}),/frontmatter/);
  assert.equal(readFileSync(file,'utf8'),before);
  writeFileSync(policyPath(ctx.repo,ctx.run),JSON.stringify({version:1,run:ctx.run,domain:'math',standard:'statement-first-v1'}));
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'math',{prepare:true}),/freshly planned/);
  assert.throws(()=>compactStages(ctx,[],'math'),/fresh/);
});
test('native stages stay intact; preparation waits for authors and precedes gates, repair briefs retain policy',async t=>{
  const ctx=fixture(t,'physics');
  const plan:any={role:'beta',brief:'briefs/author.md',label:'author',job:'scaffolding'};
  const original:any={id:'1-scaffold',plan:()=>[plan],maxAttempts:2,gates:()=>[{id:'native',argv:['node','native']}],
    onGateFailure:({executor,stage}:any)=>executor.start(stage,plan)};
  const stage=compactStages(ctx,[original],'physics')[0];
  assert.equal(stage.maxAttempts,2);assert.deepEqual(stage.gates!(ctx).map(x=>x.id),['native','statement-first','page-layout']);
  const inflight=new Map([['author',{meta:{stage:'1-scaffold'}}]]);
  const executor:any={inflight,adoptedUnits:()=>new Set(),stageStatus:()=>({unitsDone:true})};
  await stage.onProgress!({ctx,stage,executor});
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  inflight.clear();await stage.onProgress!({ctx,stage,executor});
  assert.equal(pageLayout(ctx.repo,ctx.run,'physics').errors.length,0);
  const decorated=stage.plan!(ctx,['1'],1)[0];
  assert.match(readFileSync(join(ctx.repo,decorated.brief as string),'utf8'),/Do not generate, restore or repair page summaries/);
  let repair:any;
  await stage.onGateFailure!({ctx,stage,executor:{start:(_:any,p:any)=>{repair=p;}},failure:{} as any,round:1});
  assert.match(readFileSync(join(ctx.repo,repair.brief),'utf8'),/Page presentation/);
  for(const id of ['1-drift','1-drift-apply','1-baseline','1-append-drift-1'])
    assert.deepEqual(compactStages(ctx,[{...original,id}],'physics')[0].gates!(ctx).map(x=>x.id),['native']);
  assert.deepEqual(original.gates(ctx).map((x:any)=>x.id),['native']);
});
