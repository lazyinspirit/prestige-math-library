import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,mkdirSync,readdirSync,symlinkSync,unlinkSync,copyFileSync,rmSync} from 'node:fs';
import {resolve,join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {historicalMetadataRow} from './defect-ledger-historical-metadata.mjs';
const repo=process.cwd(),candidate=join(repo,'tools'),parent=join(repo,'research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/ledger-schema99-normalization');
const rows=readFileSync(join(parent,'original-selected-rows.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
const expected=readFileSync(join(parent,'normal-form-selected-rows.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
const mapping=JSON.parse(readFileSync(join(parent,'mapping.root-pinned.json')));
const allLedger=readFileSync(join(repo,'research/defect-ledger.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
const run='inverse-problems-knot-theory-all-109-2026-10-19';
function fixture(t){
 const root=mkdtempSync(join(tmpdir(),'ledger-pinned-'));t.after(()=>rmSync(root,{recursive:true,force:true}));mkdirSync(join(root,'tools'));mkdirSync(join(root,'research'));
 for(const name of readdirSync(join(repo,'tools')))symlinkSync(join(repo,'tools',name),join(root,'tools',name));
 for(const name of ['defect-ledger.mjs','defect-ledger-historical-metadata.mjs']){unlinkSync(join(root,'tools',name));copyFileSync(join(candidate,name),join(root,'tools',name));}
 const ledger=join(root,'research/selected.jsonl'),put=rs=>writeFileSync(ledger,rs.map(x=>JSON.stringify(x)).join('\n')+'\n');
 const cli=(...args)=>spawnSync(process.execPath,[join(root,'tools/defect-ledger.mjs'),...args,'--ledger',ledger],{cwd:repo,encoding:'utf8'});
 return{root,ledger,put,cli};
}
for(const [i,row]of rows.entries())test('exact root-pinned original projects only approved metadata: '+row.defect_id,()=>{
 const raw=JSON.stringify(row),result=historicalMetadataRow(row);assert.deepEqual(result,expected[i]);assert.equal(JSON.stringify(row),raw);assert.notEqual(result,row);
 const fields=Object.keys(mapping.records.find(x=>x.defect_id===row.defect_id).fields);
 assert.deepEqual(Object.keys(row).filter(k=>JSON.stringify(row[k])!==JSON.stringify(result[k])).sort(),fields.sort());
 for(const k of Object.keys(row).filter(k=>!fields.includes(k)))assert.deepEqual(result[k],row[k]);
});
test('all nine exact historical rows validate as ten read-only interpretations; raw ledger untouched',t=>{
 const f=fixture(t);f.put(rows);const before=readFileSync(f.ledger);const result=f.cli('validate','--run',run);assert.equal(result.status,0,result.stderr+result.stdout);assert.match(result.stdout,/9 defect row\(s\) checked, 0 error/);assert.deepEqual(readFileSync(f.ledger),before);
});
for(const [name,mutate]of Object.entries({
 'unpinned32cost':r=>{r.defect_id+='-new'},
 'changed evidence':r=>{r.evidence[0].note+=' changed'},
 'changed location':r=>{r.location='unknown-location'},
 'unexpected field':r=>{r.unexpected_metadata='new'},
 'new run':r=>{r.run='new-run'},
 'new ID':r=>{r.defect_id='new-defect'},
 'changed before-field interpretation':r=>{r.repair_cost='repair-with-unspecified-review'},
 'changed severity':r=>{r.severity='nonfatal'},
}))test('changed row remains unchanged and strict validator rejects '+name,t=>{
 const f=fixture(t),row=structuredClone(rows[3]);mutate(row);const before=structuredClone(row);assert.equal(historicalMetadataRow(row),row);assert.deepEqual(row,before);f.put([row]);const result=f.cli('validate');assert.notEqual(result.status,0,result.stdout+result.stderr);
});
test('same row with reordered keys has different JSON.stringify pin and remains strict',t=>{
 const row=Object.fromEntries(Object.entries(rows[3]).reverse());assert.equal(historicalMetadataRow(row),row);const f=fixture(t);f.put([row]);assert.notEqual(f.cli('validate').status,0);
});
test('new appends never receive historical projection even for exact pinned original',t=>{
 const f=fixture(t);writeFileSync(f.ledger,'');const incoming=join(f.root,'new-rows.json');writeFileSync(incoming,JSON.stringify(rows));const result=f.cli('append','--file',incoming,'--no-render');assert.notEqual(result.status,0);assert.match(result.stderr,/nothing appended/);assert.equal(readFileSync(f.ledger,'utf8'),'');
});
test('missing or incorrect source pin does not project original',t=>{
 const f=fixture(t),p=join(f.root,'tools/defect-ledger-historical-metadata.mjs'),source=readFileSync(p,'utf8'),pin=mapping.records[3].object_sha256;
 for(const replacement of ['PENDING_ROOT_PIN','a'.repeat(64)]){writeFileSync(p,source.replace(pin,replacement));f.put([rows[3]]);assert.notEqual(f.cli('validate').status,0);}
});
test('unknown already-valid current metadata and existing ML exact pin preserve compatibility',t=>{
 const good={...expected[3],defect_id:'new-valid-row'};assert.equal(historicalMetadataRow(good),good);const f=fixture(t);f.put([good]);assert.equal(f.cli('validate').status,0);
 const ml=allLedger.find(r=>r.defect_id==='ml101-b11-3a-dimension-radius-borel-hypothesis');assert.ok(ml);const projected=historicalMetadataRow(ml);assert.notEqual(projected,ml);assert.equal(projected.location,'statement');assert.equal(projected.subclass,'missing-hypothesis');f.put([ml]);const result=f.cli('validate','--run',ml.run);assert.equal(result.status,0,result.stderr+result.stdout);
 const changed=structuredClone(ml);changed.reason=(changed.reason??'')+' changed';assert.equal(historicalMetadataRow(changed),changed);
});
