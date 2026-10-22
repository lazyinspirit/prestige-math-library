import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {syncBuiltinESMExports} from 'node:module';
import {createPnpMigrationFixture} from './step5-pnp-classification-migration.test.mjs';
import {PNP_RUN as run,PNP_OLD as old,loadPnpClassificationMigration} from './step5-pnp-classification-migration.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
function largePackFixture(){
 const f=createPnpMigrationFixture();
 for(const id of f.ids)f.pack.before[id]??=sha(id);
 for(let index=0,count=Object.keys(f.pack.before).length;count<39041;index++,count++)f.pack.before[`ex-pnp-performance-actual-sized-history-fixture-${index}`]=sha(String(index));
 f.pack.before_statements={...f.pack.before};f.pack.version=2;f.pack.adjudicationSchemaVersion=1;
 const digest=sha(f.pack);f.put(`${f.d}/repeat-1.json`,f.pack);
 for(const unit of f.pack.units){const path=`${f.d}/step5-v2-repeat-r1-u${unit}.json`,report=f.get(path);report.input_sha256=digest;f.put(path,report);}
 const native=f.get(`research/${run}-dispatch/alpha-adjudicate-step5-v2-repeat-r1-u49.result.json`),report=f.get(`${f.d}/step5-v2-repeat-r1-u49.json`);
 f.put(native.prompt,`run: ${run}\nunit:"49"\noutput: ${f.d}/step5-v2-repeat-r1-u49.json\ninput_sha256:"${digest}"`);f.put(native.log,`\ncodex\n${JSON.stringify(report)}\ntokens used\n10\n`);
 const math=f.get(f.request.root_math_review);math.native49_binding.raw_sha256=sha(fs.readFileSync(join(f.root,f.d,'step5-v2-repeat-r1-u49.json'),'utf8'));f.put(f.request.root_math_review,math);
 return f;
}
test('one pack digest per validation preserves every bound read and all109 current report checks on39041-entry snapshots',()=>{
 const f=largePackFixture(),originalStringify=JSON.stringify,originalRead=fs.readFileSync;
 try{
  const bytes=Buffer.byteLength(JSON.stringify(f.pack));assert.ok(bytes>9_000_000&&bytes<11_000_000,`actual-sized pack bytes ${bytes}`);f.install();
  let packSerializations=0;const reads=new Map();
  JSON.stringify=function(value,...args){if(value?.run===run&&value?.phase==='repeat'&&value?.assignments&&value?.units?.length===109&&value?.before)packSerializations++;return originalStringify(value,...args);};
  fs.readFileSync=function(path,...args){reads.set(String(path),(reads.get(String(path))??0)+1);return originalRead(path,...args);};syncBuiltinESMExports();
  const loaded=loadPnpClassificationMigration(f.root,run,{current:true});
  assert.equal(packSerializations,1);assert.equal(loaded.pack.units.length,109);assert.equal(Object.keys(loaded.pack.before).length,39041);
  for(const path of Object.keys(loaded.bindings))assert.ok(reads.get(join(f.root,path))>=1,`bound input was not read ${path}`);
  for(const unit of f.pack.units)assert.ok(reads.get(join(f.root,f.d,`step5-v2-repeat-r1-u${unit}.json`))>=2,`historical report not rebound+rechecked ${unit}`);
 }finally{JSON.stringify=originalStringify;fs.readFileSync=originalRead;syncBuiltinESMExports();f.cleanup();}
});
test('a previous successful load grants no cached trust to changed pack, late109th report or current alias',()=>{
 for(const change of ['pack','lastreport','alias']){const f=largePackFixture();try{f.install();assert.ok(loadPnpClassificationMigration(f.root,run,{current:true}));if(change==='pack')f.put(`${f.d}/repeat-1.json`,{...f.pack,round:2});if(change==='lastreport')f.put(`${f.d}/step5-v2-repeat-r1-u${f.pack.units.at(-1)}.json`,{});if(change==='alias')f.put('items/ex-new-alias-collision.md',`---\nid: ex-new-alias-collision\naliases: [${old}]\n---\n`);assert.throws(()=>loadPnpClassificationMigration(f.root,run,{current:true}),undefined,change);}finally{f.cleanup();}}
});
