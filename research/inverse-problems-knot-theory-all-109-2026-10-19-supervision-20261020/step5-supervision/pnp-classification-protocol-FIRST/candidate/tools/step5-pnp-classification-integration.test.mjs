import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createPnpMigrationFixture} from './step5-pnp-classification-migration.test.mjs';
import {PNP_RUN as run,PNP_OLD as old,PNP_CURRENT as current,PNP_CONSUMERS as consumers,loadPnpClassificationMigration} from './step5-pnp-classification-migration.mjs';
import {validateReports} from './step5-workflow.mjs';
import {itemHashGuard} from './item-hash.mjs';
test('native report validation retains actual nonfataldecision and oldphysicalreview while licensing only exact rootidentitydelta',()=>{
 const f=createPnpMigrationFixture();try{
  const h=f.install(),reports=f.pack.units.map(unit=>f.get(`${f.d}/step5-v2-repeat-r1-u${unit}.json`));
  const now={...f.pack.before,[current]:itemHashGuard(f.after)};delete now[old];for(const id of consumers)now[id]=itemHashGuard(readFileSync(join(f.root,'items',`${id}.md`),'utf8'));
  assert.ok(validateReports(f.pack,reports,now,{root:f.root}).errors.some(e=>e.includes(old)));
  const result=validateReports(f.pack,reports,now,{root:f.root,classificationMigration:h});assert.deepEqual(result.errors,[]);assert.equal(result.decisions.length,36);assert.equal(result.decisions.find(d=>d.id===old).outcome,'confirmed_nonfatal');assert.equal(result.reviews.find(r=>r.id===old).post_sha256,h.before_guard);assert.equal(result.reviews.some(r=>r.id===current),false);
  assert.throws(()=>validateReports(f.pack,reports,now,{root:f.root,classificationMigration:{...h}}),/guarded/);
  assert.throws(()=>validateReports(f.pack,reports,{...now,[current]:'f'.repeat(64)},{root:f.root,classificationMigration:h}),/guarded/);
  assert.equal(loadPnpClassificationMigration(f.root,run,{current:true}).targets.length,5);
 }finally{f.cleanup();}
});
