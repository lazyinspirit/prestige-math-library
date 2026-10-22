import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pageLayout} from '../../physics-support/page-layout.mjs';
import {pageLayout as sharedPageLayout} from '../../page-layout.mjs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {writeStatementPolicy,policyPath} from '../../statement-first-policy.mjs';
import {compactStages} from '../src/page-layout.mts';
function fixture(t:any,domain:'physics' = 'physics') {
  const repo=mkdtempSync(join(tmpdir(),'compact-pages-'));
  t.after(()=>rmSync(repo,{recursive:true,force:true}));
  for(const p of ['research','briefs','library/category','items'])mkdirSync(join(repo,p),{recursive:true});
  writeStatementPolicy(repo,'new',domain);
  const rows=['one','two'].map(id=>({id,category:'category',library:id==='one'?'mathematics':'physics',items:[{id:`def-${id}`}]}));
  writeFileSync(join(repo,'research/new-batch-1.pages.json'),JSON.stringify(rows));
  writeFileSync(join(repo,'research/math-imports.json'),JSON.stringify({version:1,files:[]}));
  const page=(id:string)=>`---\npage: ${id}\ntitle: Test\nstatus: published\nlibrary: ${id==='one'?'mathematics':'physics'}\nitems: [def-${id}]\nexamples: []\n# preserved comment\n---\n`;
  for(const row of rows)writeFileSync(join(repo,`library/category/${row.id}.md`),page(row.id));
  writeFileSync(join(repo,'library/category/_pathway.md'),'Keep pathway prose.');
  writeFileSync(join(repo,'items/def-one.md'),'Untouched item proof.');
  writeFileSync(join(repo,'briefs/author.md'),'Native author brief.');
  return {repo,run:'new'};
}
test('mechanical preparation accepts mixed authored libraries, preserves metadata/content boundary, is idempotent and rejects empty scopes',t=>{
  for(const domain of ['physics'] as const){
    const ctx=fixture(t,domain);
    assert.throws(()=>sharedPageLayout(ctx.repo,ctx.run,domain,{prepare:true}),/identity\/domain\/status/);
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
  const ctx=fixture(t,'physics');
  const file=join(ctx.repo,'library/category/one.md'),before=readFileSync(file,'utf8');
  writeFileSync(file,before+'Forbidden authored summary.\n');
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/must not be authored/);
  assert.equal(readFileSync(file,'utf8'),before+'Forbidden authored summary.\n');
  writeFileSync(file,before);
  writeFileSync(join(ctx.repo,'library/category/two.md'),'Malformed.');
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/frontmatter/);
  assert.equal(readFileSync(file,'utf8'),before);
  writeFileSync(policyPath(ctx.repo,ctx.run),JSON.stringify({version:1,run:ctx.run,domain:'physics',standard:'statement-first-v1'}));
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/freshly planned/);
  assert.throws(()=>compactStages(ctx,[],'physics'),/fresh/);
});
test('native stages stay intact; preparation waits for authors and precedes gates, repair briefs retain policy',async t=>{
  const ctx=fixture(t,'physics');
  const plan:any={role:'beta',brief:'briefs/author.md',label:'author',job:'scaffolding'};
  const original:any={id:'1-scaffold',plan:()=>[plan],refreshPlan:()=>plan,maxAttempts:2,gates:()=>[{id:'native',argv:['node','native']}],
    onGateFailure:({executor,stage}:any)=>executor.start(stage,plan)};
  const stage=compactStages(ctx,[original],'physics')[0];
  assert.equal(stage.maxAttempts,2);
  assert.equal(stage.gates!(ctx).at(-1)!.argv[1],'tools/physics-support/page-layout.mjs');assert.deepEqual(stage.gates!(ctx).map(x=>x.id),['native','statement-first','page-layout']);
  const inflight=new Map([['author',{meta:{stage:'1-scaffold'}}]]);
  const executor:any={inflight,adoptedUnits:()=>new Set(),stageStatus:()=>({unitsDone:true})};
  await stage.onProgress!({ctx,stage,executor});
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  inflight.clear();
  for(const guard of [
    {...executor,adoptedUnits:()=>new Set(['adopted'])},
    {...executor,stageStatus:()=>({unitsDone:false})},
  ]) {
    await stage.onProgress!({ctx,stage,executor:guard});
    assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  }
  await stage.onProgress!({ctx:{...ctx,doctor:true},stage,executor});
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  await stage.onProgress!({ctx,stage,executor});
  assert.equal(pageLayout(ctx.repo,ctx.run,'physics').errors.length,0);
  const decorated=stage.plan!(ctx,['1'],1)[0];
  assert.match(readFileSync(join(ctx.repo,decorated.brief as string),'utf8'),/Do not generate, restore or repair page summaries/);
  const refreshed=stage.refreshPlan!(ctx,'1',{} as any);
  assert.match(readFileSync(join(ctx.repo,refreshed.brief as string),'utf8'),/Page presentation/);
  assert.deepEqual(stage.gates!(ctx).at(-1)!.liveness,{pattern:'page-layout: (\\d+) page',min:1,unit:'frontier pages'});
  let repair:any;
  await stage.onGateFailure!({ctx,stage,executor:{start:(_:any,p:any)=>{repair=p;}},failure:{} as any,round:1});
  assert.match(readFileSync(join(ctx.repo,repair.brief),'utf8'),/Page presentation/);
  for(const id of ['1-drift','1-drift-apply','1-baseline','1-append-drift-1'])
    assert.deepEqual(compactStages(ctx,[{...original,id}],'physics')[0].gates!(ctx).map(x=>x.id),['native']);
  assert.deepEqual(original.gates(ctx).map((x:any)=>x.id),['native']);
});

test('manifest/page classifications are mandatory, exact and validated before any write', t=>{
  for(const library of [undefined, 'math', 'physics']) {
    const ctx=fixture(t), file=join(ctx.repo,'library/category/two.md');
    const first=join(ctx.repo,'library/category/one.md'),before=readFileSync(first,'utf8');
    const manifest=join(ctx.repo,'research/new-batch-1.pages.json');
    const rows=JSON.parse(readFileSync(manifest,'utf8'));
    rows[1].library=library==='physics'?'mathematics':library;
    writeFileSync(manifest,JSON.stringify(rows));
    assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/Invalid/);
    assert.equal(readFileSync(first,'utf8'),before);
    assert.doesNotMatch(readFileSync(file,'utf8'),/page_layout/);
  }
  for(const library of ['', 'library: math\n', 'library: mathematics\n']) {
    const ctx=fixture(t), file=join(ctx.repo,'library/category/two.md');
    writeFileSync(file,readFileSync(file,'utf8').replace('library: physics\n',library));
    assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/identity\/domain\/status/);
    assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  }
});
test('imports, relocated imports, symlinks and outside paths never receive layout edits', t=>{
  for(const pinned of ['library/category/two.md','library/old-category/two.md']) {
    const ctx=fixture(t);
    writeFileSync(join(ctx.repo,'research/math-imports.json'),JSON.stringify({version:1,files:[{path:pinned}]}));
    assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/Imported page/);
    assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  }
  for(const outside of [false,true]) {
    const ctx=fixture(t), path=join(ctx.repo,'library/category/two.md');
    const target=join(ctx.repo,outside?'research/outside.md':'library/category/alias.md');
    const before=readFileSync(path,'utf8');
    writeFileSync(target,before);rmSync(path);symlinkSync(target,path);
    assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/regular local page/);
    assert.equal(readFileSync(target,'utf8'),before);
    assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  }
  const ctx=fixture(t), manifest=join(ctx.repo,'research/new-batch-1.pages.json');
  const rows=JSON.parse(readFileSync(manifest,'utf8'));rows[1].category='../research';
  writeFileSync(manifest,JSON.stringify(rows));
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/Invalid/);
});
test('check reports summaries even with compact flag; preparation never deletes them or edits unrelated pages', t=>{
  const ctx=fixture(t), file=join(ctx.repo,'library/category/two.md');
  const unrelated=join(ctx.repo,'library/category/unrelated.md');
  writeFileSync(unrelated,'Unrelated authored prose.');
  pageLayout(ctx.repo,ctx.run,'physics',{prepare:true});
  const before=readFileSync(file,'utf8')+'Forbidden summary.\n';writeFileSync(file,before);
  assert.match(pageLayout(ctx.repo,ctx.run,'physics').errors.join(' '),/body must be empty/);
  assert.throws(()=>pageLayout(ctx.repo,ctx.run,'physics',{prepare:true}),/must not be authored/);
  assert.equal(readFileSync(file,'utf8'),before);
  assert.equal(readFileSync(unrelated,'utf8'),'Unrelated authored prose.');
});

test('private CLI preserves check failure status and liveness without writing pages', t=>{
  const ctx=fixture(t), cli=fileURLToPath(new URL('../../physics-support/page-layout.mjs',import.meta.url));
  const checked=spawnSync(process.execPath,[cli,'check','--run',ctx.run,'--domain','physics'],{cwd:ctx.repo,encoding:'utf8'});
  assert.equal(checked.status,1);assert.match(checked.stdout,/page-layout: 2 page\(s\) checked; 0 changed; 2 defect/);
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  pageLayout(ctx.repo,ctx.run,'physics',{prepare:true});
  const clean=spawnSync(process.execPath,[cli,'check','--run',ctx.run,'--domain','physics'],{cwd:ctx.repo,encoding:'utf8'});
  assert.equal(clean.status,0);assert.match(clean.stdout,/2 page\(s\) checked; 0 changed; 0 defect/);
});

test('private CLI executes through the physics tools directory symlink', t=>{
  const ctx=fixture(t);
  const tools=fileURLToPath(new URL('../../',import.meta.url));
  symlinkSync(tools,join(ctx.repo,'tools'),'dir');
  const cli='tools/physics-support/page-layout.mjs';
  const invoke=(command:string)=>spawnSync(process.execPath,[cli,command,'--run',ctx.run,'--domain','physics'],{cwd:ctx.repo,encoding:'utf8'});
  const checked=invoke('check');
  assert.equal(checked.status,1);assert.match(checked.stdout,/page-layout: 2 page\(s\) checked; 0 changed; 2 defect/);
  assert.match(checked.stderr,/ERROR page-layout:/);
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout/);
  const prepared=invoke('prepare');
  assert.equal(prepared.status,0);assert.match(prepared.stdout,/page-layout: 2 page\(s\) checked; 2 changed; 0 defect/);
  assert.match(readFileSync(join(ctx.repo,'library/category/one.md'),'utf8'),/page_layout: compact-v1/);
  const clean=invoke('check');
  assert.equal(clean.status,0);assert.match(clean.stdout,/page-layout: 2 page\(s\) checked; 0 changed; 0 defect/);
});
