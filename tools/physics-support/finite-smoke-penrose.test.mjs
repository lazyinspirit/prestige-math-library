import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { penroseChecks } from './finite-smoke-penrose.mjs';
const root=fileURLToPath(new URL('../../',import.meta.url));
const moduleSource=readFileSync(new URL('./finite-smoke-penrose.mjs',import.meta.url),'utf8');
const expected={
  'quadratic-curvature-polynomial':['a=0','b=0','c=0'],
  'unit-four-sphere-curvature-trace':12,
  'negative-twist-fibre-groups':{h0_o_minus_1:0,h1_o_minus_1:0,h0_o_minus_2:0,h1_o_minus_2:1},
  'flat-constant-section-coefficient':'2s',
  'trivial-rank-one-case':'s=0',
  'flat-ranks-zero-and-one':['H1=0','H1-dual=0'],
  'overlap-and-zero-class':['s_N=s_S','class=0'],
};
test('all seven Penrose obligations execute real bounded models and reject wrong expected values',()=>{
  for(const [name,value] of Object.entries(expected)) {
    assert.equal(penroseChecks[name]({expected:value}).ok,true,name);
    assert.equal(penroseChecks[name]({expected:'wrong-value'}).ok,false,name);
  }
  assert.deepEqual(penroseChecks['quadratic-curvature-polynomial']({}).details,{forms:729,evaluations:2916});
  assert.deepEqual(penroseChecks['negative-twist-fibre-groups']({}).details.surviving,[-1]);
  assert.equal(penroseChecks['trivial-rank-one-case']({}).details.modes,206);
  assert.equal(penroseChecks['overlap-and-zero-class']({}).details.exactModes,60);
});
test('mathematical sign, dimension, coefficient and transition mutations fail',async()=>{
  for(const [name,before,after]of [
    ['quadratic-curvature-polynomial','f[1]-f[4]===0','f[1]+f[4]===0'],
    ['unit-four-sphere-curvature-trace','scalar+=delta(b,b)*delta(a,a)-delta(a,b)*delta(b,a)','scalar+=(delta(b,b)*delta(a,a)-delta(a,b)*delta(b,a))/2'],
    ['negative-twist-fibre-groups','n<=-k','n<-k'],
    ['flat-constant-section-coefficient','const residual=-lap/4','const residual=-lap/3'],
    ['trivial-rank-one-case','j%2===0?1:-1','1'],
    ['flat-ranks-zero-and-one','const zeroRank=rank([],0)','const zeroRank=1'],
    ['overlap-and-zero-class','southCoefficient=-coefficient','southCoefficient=coefficient'],
  ]) {
    assert.ok(moduleSource.includes(before),name);
    const mutated=moduleSource.replaceAll(before,after);
    const module=await import(`data:text/javascript;base64,${Buffer.from(mutated).toString('base64')}`);
    assert.equal(module.penroseChecks[name]({expected:expected[name]}).ok,false,name);
  }
});
test('native CLI executes all seven current item assertions, enforces excerpts, expected values and selection',t=>{
  const directory=mkdtempSync(join(tmpdir(),'penrose-smoke-'));
  t.after(()=>rmSync(directory,{recursive:true,force:true}));
  // Use real item text as fixture assertions; no dependency on live run evidence.
  const ids=[
    'lem-qftx-coupled-penrose-positive-orientation-asd',
    'lem-qftx-coupled-penrose-round-sphere-curvature',
    'lem-qftx-coupled-penrose-fibre-dolbeault',
    'lem-qftx-coupled-penrose-operator-coefficient',
    'thm-qftx-coupled-penrose-vanishing',
    'ex-qftx-penrose-flat-summand-vanishing',
    'ex-qftx-penrose-global-injectivity-boundary',
  ];
  const contracts=Object.fromEntries(ids.map((id,i)=>[id,{finite_smoke:[{
    check:Object.keys(expected)[i], expected:Object.values(expected)[i],
    asserts:readFileSync(join(root,'physics/items',id+'.md'),'utf8').split(/\n## (?:Statement|Example)\n\n/)[1].split(/\n## /)[0].trim(),
  }]}]));
  const document={version:1,scope:ids,contracts};
  const path=join(directory,'contracts.json');
  const run=(selection=ids.join(','))=>{
    writeFileSync(path,JSON.stringify(document));
    const processResult=spawnSync(process.execPath,['tools/physics-support/finite-smoke.mjs',path,'--items',selection,'--json'],{cwd:root,encoding:'utf8'});
    assert.equal(processResult.stderr,'');
    return {status:processResult.status,...JSON.parse(processResult.stdout)};
  };
  const good=run();assert.equal(good.status,0);assert.equal(good.outcomes.length,7);
  contracts[ids[0]].finite_smoke[0].expected=['a=1','b=0','c=0'];
  assert.equal(run().errors[0].code,'finite-countermodel');
  contracts[ids[0]].finite_smoke[0].asserts='This assertion is absent from the item.';
  const absent=run();assert.equal(absent.errors[0].code,'smoke-assertion-mismatch');assert.equal(absent.outcomes.length,6);
  assert.equal(run('outside-frontier').errors[0].code,'selection-outside-scope');
});
