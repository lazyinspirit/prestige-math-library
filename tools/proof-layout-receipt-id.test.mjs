import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {proofLayoutScope,proofLayoutInputs,proofLayoutPath,verifyProofLayout} from './proof-layout-receipt.mjs';
const ids=['lem-hat-CF-genus-one-lens-space-order-three-rank-three','lem-amenable-D-R-l2-dimension-estimate'];
function fixture(t,subjects=ids){
 const root=mkdtempSync(join(tmpdir(),'layout-id-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const put=(path,raw)=>{mkdirSync(join(root,path,'..'),{recursive:true});writeFileSync(join(root,path),raw)};
 const json=(path,x)=>put(path,JSON.stringify(x));
 const manifest=rows=>json('research/demo-batch-1.pages.json',[{id:'page',items:rows}]);
 const page=rows=>put('library/test/page.md','---\npage: page\nitems: ['+rows.join(', ')+']\n---\n');
 json('research/demo-scope-ledger.json',{pages:[{id:'page',kind:'A',batch:'1'}]});
 json('research/demo-touches.json',{snapshots:[{hashes:{'op-retired':'historical','thm-foreign':'historical'}}]});
 for(const id of subjects)put(`items/${id}.md`,`---\nid: ${id}\nkind: lemma\nstatus: draft\n---\n## Proof\n\n1.1 Exact fixture row. [F1]\n`);
 manifest(subjects);page(subjects);
 return{root,put,json,page,manifest};
}
test('both actual mixed-case subjects retain exact identity and historical subjects stay excluded',t=>{
 const f=fixture(t),s=proofLayoutScope('demo',f.root);assert.deepEqual(s.files,ids.map(x=>'items/'+x+'.md').sort());assert.deepEqual(s.pages[0].items,[...ids].sort());
});
test('case-distinct IDs remain distinct owners and filenames',t=>{
 const pair=[ids[0],ids[0].toLowerCase()],f=fixture(t,pair);assert.equal(proofLayoutScope('demo',f.root).files.length,2);
 f.manifest([pair[0],pair[0]]);assert.throws(()=>proofLayoutScope('demo',f.root),/duplicate manifest ownership/);
});
for(const bad of ['lem--CF','lem-CF-','-lem-CF','Lem-CF','unknown-CF','lem-C_F','lem-C.F','lem-C/F','lem-ČF','lem-','lem CF','lem-CF\nother']){
 test('malformed or unknown kind is rejected: '+JSON.stringify(bad),t=>{const f=fixture(t);f.manifest([bad]);assert.throws(()=>proofLayoutScope('demo',f.root),/invalid item ID/)});
}
for(const prefix of ['alg','def','lem','thm','prop','cor','ex','cex','fs','rem','op']){
 test('canonical known kind accepts ASCII segments: '+prefix,t=>{const id=prefix+'-CF-9',f=fixture(t,[id]);assert.deepEqual(proofLayoutScope('demo',f.root).files,['items/'+id+'.md'])});
}
test('casing cannot silently resolve to a different current subject',t=>{
 const f=fixture(t);f.manifest([ids[0].toLowerCase(),ids[1]]);assert.throws(()=>proofLayoutScope('demo',f.root),/missing items/);
 f.put('items/'+ids[0].toLowerCase()+'.md','---\nid: '+ids[0].toLowerCase()+'\n---\n');assert.throws(()=>proofLayoutScope('demo',f.root),/absent from current run pages/);
});
test('page ownership, manifest absence and undeclared context remain strict',t=>{
 const f=fixture(t);f.page([ids[0]]);assert.throws(()=>proofLayoutScope('demo',f.root),/absent from current run pages/);
 f.page([...ids,'lem-context-CF']);f.put('items/lem-context-CF.md','---\nid: lem-context-CF\n---\n');assert.throws(()=>proofLayoutScope('demo',f.root),/ENOENT/);
});
test('mixed-case aliases require unique ownership and absent old canonical carrier',t=>{
 const f=fixture(t),path='items/'+ids[0]+'.md',bytes=readFileSync(join(f.root,path),'utf8');f.put(path,bytes.replace('kind: lemma','aliases: [lem-Old-CF]\nkind: lemma'));f.manifest(['lem-Old-CF',ids[1]]);
 assert.deepEqual(proofLayoutScope('demo',f.root).files,ids.map(x=>'items/'+x+'.md').sort());
 f.put('items/lem-Old-CF.md','---\nid: lem-Old-CF\n---\n');assert.throws(()=>proofLayoutScope('demo',f.root),/collides with a real item file/);
});
test('receipt verification binds exact mixed-case scope, bytes, manifests, dependencies and coverage',t=>{
 const f=fixture(t),current=proofLayoutInputs('demo',f.root),receipt={version:1,run:'demo',...current,steps:2,gates:{'proof-step-separation':'pass','proof-blue-tags':'pass'},items:current.scope.files.map(file=>({file,rows:[{sourceSteps:1}],errors:[]}))};
 const save=x=>writeFileSync(proofLayoutPath('demo',f.root),JSON.stringify(x));save(receipt);assert.deepEqual(verifyProofLayout('demo',f.root),receipt);
 const path=join(f.root,current.scope.files[0]),bytes=readFileSync(path);writeFileSync(path,Buffer.concat([bytes,Buffer.from('\nchanged')]));assert.throws(()=>verifyProofLayout('demo',f.root),/stale/);writeFileSync(path,bytes);
 f.manifest([...ids].reverse());assert.throws(()=>verifyProofLayout('demo',f.root),/stale/);f.manifest(ids);
 save({...receipt,dependencies:{...receipt.dependencies,bogus:'drift'}});assert.throws(()=>verifyProofLayout('demo',f.root),/stale/);
 save({...receipt,scope:{...receipt.scope,files:receipt.scope.files.map(x=>x.toLowerCase())}});assert.throws(()=>verifyProofLayout('demo',f.root),/stale/);
 save({...receipt,items:receipt.items.slice(1)});assert.throws(()=>verifyProofLayout('demo',f.root),/incomplete item coverage/);
 save({...receipt,steps:0});assert.throws(()=>verifyProofLayout('demo',f.root),/invalid or empty step coverage/);
 save({...receipt,gates:{...receipt.gates,'proof-blue-tags':'fail'}});assert.throws(()=>verifyProofLayout('demo',f.root),/has not passed/);
 save(receipt);assert.deepEqual(verifyProofLayout('demo',f.root),receipt);
});
