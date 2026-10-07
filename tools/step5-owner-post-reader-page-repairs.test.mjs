import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { captureOwnerPageBefore, recordOwnerPageRepair, validateOwnerPageAuthority,
  loadOwnerPageRepairs, ownerPageFindingRepair, ownerPageRepairHash } from './step5-owner-post-reader-page-repairs.mjs';
const hash = x => createHash('sha256').update(x).digest('hex');
function fixture() {
  const root=mkdtempSync(join(tmpdir(),'owner-page-route-'));
  for(const p of ['research','research/r-dispatch','library','library/test'])mkdirSync(join(root,p),{recursive:true});
  const write=(p,x)=>writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x,null,2));
  const add=(batch='1',page='p')=>{
    const pagePath=`library/test/${page}.md`, before='First false claim. Second false claim.\n';write(pagePath,before);
    const metadata={id:page,category:'test',kind:'B'};write(`research/r-batch-${batch}.pages.json`,[{...metadata,items:[]}]);
    const carrier={file_sha256:hash(before),manifest_sha256:ownerPageRepairHash(metadata),item_order:[]};
    write(`research/r-step5-hash-${batch}-pre.json`,{version:2,run:'r',batch,label:'pre',page_manifest:[page],page_hashes:{[page]:carrier}});
    write(`research/r-dispatch/reader-reader-${batch}.attempt-1.result.json`,{run:'r',role:'reader',label:`reader-${batch}`,ok:true,exit_code:0,process_exit_code:0,ended_at:'2020-01-01T00:00:00Z'});
    write(`research/r-reader-${batch}.md`,`Native reader r ${page} records two unresolved page claims.\n`);
    write(`research/r-reader-findings-${batch}.json`,{batch,coverage_note:'Actual native fixture read.',findings:[1,2].map(i=>({id:page,subject_type:'page',location:`claim${i}`,defect:'false-claim',severity:'fatal',evidence:'Exact original source defect.'}))});
    const capturePath=captureOwnerPageBefore(root,'r',batch,page,{ownerIdentity:'/root'});
    const c=JSON.parse(readFileSync(join(root,capturePath))), after='First corrected claim. Second corrected claim.\n';write(pagePath,after);
    const reviewPath=`research/review-${batch}.md`;write(reviewPath,`r ${page} ${hash(before)} ${hash(after)} Genuine fixture owner reviewed exact two changes.`);
    const entry={version:1,policy:'owner-step5-post-reader-page-repair-v1',run:'r',batch,page,owner_identity:'/root',
      at:new Date().toISOString(),capture:{path:capturePath,sha256:hash(readFileSync(join(root,capturePath)))},
      current_path:pagePath,after_raw_sha256:hash(after),reviewed:true,
      reason:'The delegated owner independently checked the exact two current page corrections against the native source findings and preserved their original evidence.',
      original_owner_artifact:{path:reviewPath,sha256:hash(readFileSync(join(root,reviewPath)))},
      review:{path:reviewPath,sha256:hash(readFileSync(join(root,reviewPath)))},
      edits:[{before:'First false claim.',after:'First corrected claim.'},{before:'Second false claim.',after:'Second corrected claim.'}]};
    const evidencePath=`research/evidence-${batch}.json`;write(evidencePath,entry);
    return {batch,page,entry,c,evidencePath,write,root};
  };
  return {root,write,add,close:()=>rmSync(root,{recursive:true,force:true})};
}
test('page registration preserves original artifacts and both exact finding identities; separate entries do not alter old bindings',()=>{
  const f=fixture();try{
    const a=f.add();const original=readFileSync(join(f.root,'research/r-reader-findings-1.json'));
    const pre=readFileSync(join(f.root,'research/r-step5-hash-1-pre.json'));
    recordOwnerPageRepair(f.root,'r',a.evidencePath);const first=loadOwnerPageRepairs(f.root,'r','1');
    assert.equal(first.length,1);assert.equal(first[0].capture_value.findings.length,2);
    assert.ok(ownerPageFindingRepair(first,'1',{id:'p',subject_type:'page',obligation:'reader:1:2'}));
    assert.equal(ownerPageFindingRepair(first,'1',{id:'p',subject_type:'in-flight-item',obligation:'reader:1:2'}),undefined);
    const b=f.add('2','q');recordOwnerPageRepair(f.root,'r',b.evidencePath);
    assert.deepEqual(loadOwnerPageRepairs(f.root,'r','1')[0].binding,first[0].binding);
    assert.deepEqual(readFileSync(join(f.root,'research/r-reader-findings-1.json')),original);
    assert.deepEqual(readFileSync(join(f.root,'research/r-step5-hash-1-pre.json')),pre);
    assert.throws(()=>recordOwnerPageRepair(f.root,'r',a.evidencePath),/EEXIST/);
  }finally{f.close();}
});
for(const [name,mutate] of [
 ['wrong run',a=>a.entry.run='other'],['wrong batch',a=>a.entry.batch='2'],['wrong page',a=>a.entry.page='q'],
 ['non-root owner',a=>a.entry.owner_identity='/root/child'],['no owner review',a=>a.entry.reviewed=false],
 ['short reason',a=>a.entry.reason='short'],['wrong after hash',a=>a.entry.after_raw_sha256='0'.repeat(64)],
 ['ambiguous edits',a=>a.entry.edits=[{before:'claim.',after:'correction.'}]],
 ['missing actual edit',a=>a.entry.edits.pop()],
 ['changed original evidence',a=>a.write(a.entry.original_owner_artifact.path,'tampered report')],
 ['changed native finding',a=>a.write('research/r-reader-findings-1.json',{batch:'1',findings:[]})],
 ['changed native report',a=>a.write('research/r-reader-1.md','changed')],
 ['failed reader',a=>a.write('research/r-dispatch/reader-reader-1.attempt-1.result.json',{run:'r',ok:false})],
 ['changed before bytes',a=>{chmodSync(join(a.root,a.c.before_archive.path),0o644);a.write(a.c.before_archive.path,'tampered');}],
 ['changed immutable pre',a=>a.write('research/r-step5-hash-1-pre.json',{})],
 ['changed current page',a=>a.write(a.entry.current_path,'unrelated edit')],
 ['changed manifest',a=>a.write('research/r-batch-1.pages.json',[{id:'p',category:'test',kind:'A',items:[]}])],
])test(`page authority fails closed: ${name}`,()=>{const f=fixture();try{const a=f.add();mutate(a);assert.throws(()=>validateOwnerPageAuthority(f.root,'r',a.entry));}finally{f.close();}});
test('a page already changed by the reader cannot use the default immutable-pre capture guard',()=>{
 const f=fixture();try{
  const a=f.add();assert.throws(()=>captureOwnerPageBefore(f.root,'r','1','p',{ownerIdentity:'/root'}),/before bytes do not match/);
 }finally{f.close();}
});
test('initial capture rejects an item-kind finding and missing/failed reader',()=>{
 for(const mode of ['item','missing','failed']){
  const f=fixture();try{
   const a=f.add();const page='q';
   // A new page home is required; alter only disposable fixture metadata.
   f.write('library/test/q.md','q');f.write('research/r-batch-2.pages.json',[{id:page,category:'test',items:[]}]);
   const metadata={id:page,category:'test'};f.write('research/r-step5-hash-2-pre.json',{version:2,run:'r',batch:'2',label:'pre',page_manifest:[page],page_hashes:{q:{file_sha256:hash('q'),manifest_sha256:ownerPageRepairHash(metadata),item_order:[]}}});
   f.write('research/r-reader-2.md','reader q');f.write('research/r-reader-findings-2.json',{batch:'2',findings:[{id:page,subject_type:mode==='item'?'in-flight-item':'page'}]});
   if(mode!=='missing')f.write('research/r-dispatch/reader-reader-2.attempt-1.result.json',{run:'r',role:'reader',label:'reader-2',ok:mode!=='failed',exit_code:0,process_exit_code:0,ended_at:'2020-01-01T00:00:00Z'});
   assert.throws(()=>captureOwnerPageBefore(f.root,'r','2',page,{ownerIdentity:'/root'}));
  }finally{f.close();}
 }
});

test('a later native page amendment keeps immutable repair history; after archive tampering fails',()=>{
 const f=fixture();try{
  const a=f.add();recordOwnerPageRepair(f.root,'r',a.evidencePath);
  const old=loadOwnerPageRepairs(f.root,'r','1')[0].binding;
  a.write(a.entry.current_path,'A further legitimate native page amendment.');
  assert.throws(()=>loadOwnerPageRepairs(f.root,'r','1'),/current after guard/);
  assert.deepEqual(loadOwnerPageRepairs(f.root,'r','1',{requireCurrent:false})[0].binding,old);
  const after=`research/r-step5-owner-page-1-p-after.md`;chmodSync(join(f.root,after),0o644);a.write(after,'tampered after archive');
  assert.throws(()=>loadOwnerPageRepairs(f.root,'r','1',{requireCurrent:false}),/after archive/);
 }finally{f.close();}
});
test('capture and record reject an active exact-batch Alpha writer',async()=>{
 const { spawn }=await import('node:child_process');const f=fixture();let child;
 try{
  const a=f.add();mkdirSync(join(f.root,'tools'));writeFileSync(join(f.root,'tools/dispatch.mjs'),'setInterval(()=>{},1000);');
  child=spawn(process.execPath,['tools/dispatch.mjs','--run','r','--label','5a-batch-1','--covers','1'],{cwd:f.root,stdio:'ignore'});
  await new Promise(resolve=>setTimeout(resolve,80));
  assert.throws(()=>recordOwnerPageRepair(f.root,'r',a.evidencePath),/writer still active/);
  assert.throws(()=>captureOwnerPageBefore(f.root,'r','1','p',{ownerIdentity:'/root'}),/writer still active/);
 }finally{if(child){child.kill();await new Promise(resolve=>child.once('exit',resolve));}f.close();}
});

test('recovered pre bytes cannot be mislabeled as a current capture after repair',()=>{
 const f=fixture();try{
  const a=f.add();assert.throws(()=>captureOwnerPageBefore(f.root,'r','1','p',{ownerIdentity:'/root',
    beforeFile:a.c.before_archive.path,provenance:'owner-captured-current'}),/claimed current capture/);
 }finally{f.close();}
});
