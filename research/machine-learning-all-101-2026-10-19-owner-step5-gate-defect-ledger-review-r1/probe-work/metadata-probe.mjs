import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';import {historicalMetadataRow} from './candidate/tools/defect-ledger-historical-metadata.mjs';
const dir=path.dirname(new URL(import.meta.url).pathname),rows=JSON.parse(fs.readFileSync(path.join(dir,'schema-original-rows.json'),'utf8')),before=JSON.stringify(rows),projected=rows.map(historicalMetadataRow);
assert(projected.every((r,i)=>r!==rows[i]));assert.equal(JSON.stringify(rows),before);
for(let i=0;i<rows.length;i++){
 for(const key of Object.keys(rows[i]).filter(k=>!['location','subclass','evidence'].includes(k)))assert.deepEqual(projected[i][key],rows[i][key]);
 const changed={...rows[i],reason:'unbound change'};assert.equal(historicalMetadataRow(changed),changed);
 const foreign={...rows[i],run:'foreign'};assert.equal(historicalMetadataRow(foreign),foreign);
 if(rows[i].evidence)for(let j=0;j<rows[i].evidence.length;j++)for(const [k,v] of Object.entries(rows[i].evidence[j]))assert.deepEqual(projected[i].evidence[j][k],v);
}
const fixture=path.join(dir,'metadata-fixture');fs.mkdirSync(fixture,{recursive:true});const ledger=path.join(fixture,'ledger.jsonl');fs.writeFileSync(ledger,rows.map(JSON.stringify).join('\n')+'\n');
const tool=path.join(dir,'history-fixture/tools/defect-ledger.mjs');const result=spawnSync(process.execPath,[tool,'validate','--run',rows[0].run,'--ledger',ledger],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);assert(result.stdout.includes('0 error(s)'));
const additions=path.join(fixture,'attempted-append.json'),emptyLedger=path.join(fixture,'empty.jsonl');fs.writeFileSync(additions,JSON.stringify([rows[0]]));fs.writeFileSync(emptyLedger,'');const appended=spawnSync(process.execPath,[tool,'append','--file',additions,'--ledger',emptyLedger,'--no-render'],{encoding:'utf8'});assert.notEqual(appended.status,0);assert.equal(fs.readFileSync(emptyLedger,'utf8'),'');
console.log(JSON.stringify({ok:true,rows:rows.length,checks:['exact original metadata validates','original rows preserved','all other fields unchanged','all original evidence keys retained','changed row and foreign run get no projection','new append remains strict and writes nothing'],validate_stdout:result.stdout,append_stderr:appended.stderr},null,2));
