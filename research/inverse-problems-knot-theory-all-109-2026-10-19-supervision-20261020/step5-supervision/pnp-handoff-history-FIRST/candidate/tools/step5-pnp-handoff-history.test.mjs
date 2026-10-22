import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {createPnpMigrationFixture} from './step5-pnp-classification-migration.test.mjs';
import {PNP_RUN as run,materializePnpMergedHistoricalEvidence} from './step5-pnp-classification-migration.mjs';
const sha=x=>createHash('sha256').update(x).digest('hex');
test('inherited merged preimage materializes exact authenticated archive without changing inputs',()=>{
 const f=createPnpMigrationFixture();try{const h=f.install(),path=`research/${run}-proof-contracts.json`,c=h.carriers.find(c=>c.path===path),hash=sha(readFileSync(resolve(f.root,c.before_file))),input={[path]:hash},saved=JSON.stringify(input),out=materializePnpMergedHistoricalEvidence(f.root,run,input);
 assert.equal(JSON.stringify(input),saved);assert.equal(out[path],undefined);assert.equal(out[resolve(f.root,c.before_file)],hash);assert.equal(out[h.path],sha(readFileSync(h.path)));
 const live={[path]:sha(readFileSync(resolve(f.root,path)))};assert.deepEqual(materializePnpMergedHistoricalEvidence(f.root,run,live),live);
 }finally{f.cleanup();}
});
test('inherited merged history rejects unknown hash, archive alteration, evidence collision and missing receipt',()=>{
 for(const defect of ['unknown','archive','collision','receipt','current']){const f=createPnpMigrationFixture();try{const h=f.install(),path=`research/${run}-proof-contracts.json`,c=h.carriers.find(c=>c.path===path),input={[path]:sha(readFileSync(resolve(f.root,c.before_file)))};
 if(defect==='current')f.put(path,readFileSync(resolve(f.root,path),'utf8')+'\n');if(defect==='unknown')input[path]='0'.repeat(64);if(defect==='archive')f.put(c.before_file,readFileSync(resolve(f.root,c.before_file),'utf8')+'\n');if(defect==='collision')input[resolve(f.root,c.before_file)]='1'.repeat(64);if(defect==='receipt')f.put(`${f.d}/pnp-classification-migration.json`,'{}');assert.throws(()=>materializePnpMergedHistoricalEvidence(f.root,run,input));
 }finally{f.cleanup();}}
});
test('unrelated evidence and other run remain ordinary strict evidence',()=>{
 const f=createPnpMigrationFixture();try{f.install();const input={'research/unrelated.json':'0'.repeat(64)};assert.deepEqual(materializePnpMergedHistoricalEvidence(f.root,run,input),input);const path=`research/${run}-proof-contracts.json`;assert.deepEqual(materializePnpMergedHistoricalEvidence(f.root,'other',{[path]:'0'.repeat(64)}),{[path]:'0'.repeat(64)});}finally{f.cleanup();}
});
