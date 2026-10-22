import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {ownerReviewedFindingAlias as candidate} from '../../../tools/physics-support/step3-owner-finding-alias.mjs';
import {ownerReviewedFindingAlias as before} from './step3-owner-finding-alias.before.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)),physics=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',group='batch-106';
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=v=>sha(JSON.stringify(canonical(v))??'undefined');
const read=p=>fs.readFileSync(path.join(physics,p));
const scope=JSON.parse(read(`research/${run}-step3-scope-106.json`));
let count=0;const results=[];
function fixture(){
 const root=fs.mkdtempSync(path.join(here,'fixture-'));
 const write=(p,b)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),b);};
 const copy=p=>write(p,read(p));
 const primary=structuredClone(scope.reader_findings.find(f=>f.obligation==='reader:106:1'));
 const alias=structuredClone(scope.refuter_findings.find(f=>f.obligation==='refuter:106:1'));
 const inputs={};const binding=p=>({path:p,sha256:inputs[p]=sha(fs.readFileSync(path.join(root,p)))});
 const bindCopy=p=>{copy(p);return binding(p)};
 const sourcePath='library/quantum-statistical-mechanics/qsmx-integrable-transfer.md';copy(sourcePath);inputs[sourcePath]=sha(fs.readFileSync(path.join(root,sourcePath)));
 const archivePath=`research/${run}-fixture-page-before.md`;write(archivePath,read(`research/${run}-owner-step2-baseline/${sourcePath}`));
 const ownerPath=`research/${run}-fixture-page-science.json`;
 const owner={run,group,classification_approved:true,one_underlying_issue:true,canonical_defect_id:'pnf129-r2-b106-page-shift-scalar',obligations:['reader:106:1','refuter:106:1'],original_labels_preserved:{'reader:106:1':primary.defect,'refuter:106:1':alias.defect},original_severities_preserved:{'reader:106:1':primary.severity,'refuter:106:1':alias.severity},current_source_guard:{path:sourcePath,sha256:inputs[sourcePath]},observed_raw_page_archive:binding(archivePath),rationale:'TEST FIXTURE ONLY: the two supplied native findings report the same missing scalar in one exact original page sentence. This does not constitute a production root approval or source acceptance.'};
 write(ownerPath,JSON.stringify(owner));
 const text=fs.readFileSync(path.join(root,sourcePath),'utf8');
 const entry={kind:'same-page-carrier-classification',group,subject:primary.id,consumer_id:null,primary_obligation:'reader:106:1',alias_obligation:'refuter:106:1',primary_defect:primary.defect,alias_defect:alias.defect,primary_finding_sha256:hash(primary),alias_finding_sha256:hash(alias),original_defect_id:owner.canonical_defect_id,scientific_owner_receipt:binding(ownerPath),frozen_scope_guard:bindCopy(`research/${run}-step3-scope-106.json`),frozen_file_guards:[bindCopy(`research/${run}-reader-findings-106.json`),bindCopy(`research/${run}-refute-106.json`)],observed_snapshot:'pre',observed_snapshot_guard:bindCopy(`research/${run}-step3-hash-106-pre.json`),observed_raw_archive:binding(archivePath),page_manifest_guard:bindCopy(`research/${run}-batch-106.pages.json`),current_source:owner.current_source_guard,reviewed_source_excerpts:[text.slice(text.indexOf('This page treats'),text.indexOf('This page treats')+180),text.slice(text.indexOf('transfer matrix is'),text.indexOf('transfer matrix is')+190)]};
 const receipt={version:1,run,reviewed_by:'root',inputs,aliases:[entry]};
 const prior={obligation:'reader:106:1',id:primary.id,route:'reader',verdict:'confirmed_fatal',target:primary};
 const decision={obligation:'refuter:106:1',id:alias.id,route:'flagged',verdict:'confirmed_fatal',same_defect_as:'reader:106:1',same_defect_evidence:'Test shared actual page fault.'};
 const seal=()=>{const b=Buffer.from(JSON.stringify(receipt));write(`research/${run}-step3-owner-same-defect-aliases.json`,b);decision.same_defect_receipt_sha256=sha(b)};
 return{root,write,binding,entry,receipt,prior,decision,primary,alias,owner,ownerPath,seal};
}
function test(name,mutate,expected,oldExpected){
 const f=fixture();try{mutate?.(f);f.seal();const actual=candidate(f.root,run,group,f.prior,f.decision,f.alias,hash);assert.equal(actual,expected,name);if(oldExpected!==undefined)assert.equal(before(f.root,run,group,f.prior,f.decision,f.alias,hash),oldExpected,name+' baseline');results.push({name,pass:true});count++;}finally{fs.rmSync(f.root,{recursive:true,force:true})}
}
test('actual106page classification passes candidate and fails item-only baseline',null,true,false);
test('absent versus null consumer bindings are treated as the same absent page consumer',f=>{delete f.entry.consumer_id},true);
test('different nonempty consumer is rejected',f=>{f.entry.consumer_id='another-consumer'},false);
test('different decision route is rejected',f=>{f.decision.route='reader'},false);
test('different current verdict is rejected',f=>{f.decision.verdict='confirmed_nonfatal'},false);
test('unrelated subject is rejected',f=>{f.entry.subject='another-page'},false);
test('stale current raw page is rejected',f=>{f.write(f.entry.current_source.path,'changed page')},false);
test('arbitrary library path is rejected even if freshly hash-bound',f=>{const q='library/elsewhere/'+f.primary.id+'.md';f.write(q,fs.readFileSync(path.join(f.root,f.entry.current_source.path)));f.entry.current_source=f.binding(q)},false);
test('fake item carrier is rejected',f=>{f.primary.observed_source={item_sha256:'a'.repeat(64)};f.entry.primary_finding_sha256=hash(f.primary)},false);
test('different observed page fingerprint is rejected',f=>{f.alias.observed_sha256='b'.repeat(64);f.entry.alias_finding_sha256=hash(f.alias)},false);
test('stale frozen reader report is rejected',f=>{f.write(f.entry.frozen_file_guards[0].path,'{}')},false);
test('stale frozen refuter report is rejected',f=>{f.write(f.entry.frozen_file_guards[1].path,'{}')},false);
test('stale frozen scope is rejected',f=>{f.write(f.entry.frozen_scope_guard.path,'{}')},false);
test('snapshot fingerprint cannot be substituted',f=>{const q=f.entry.observed_snapshot_guard.path;const x=JSON.parse(fs.readFileSync(path.join(f.root,q)));x.page_hashes[f.primary.id].manifest_sha256='c'.repeat(64);f.write(q,JSON.stringify(x));f.entry.observed_snapshot_guard=f.binding(q)},false);
test('different raw archive cannot be substituted',f=>{const q=f.entry.observed_raw_archive.path;f.write(q,'different original page');f.entry.observed_raw_archive=f.binding(q)},false);
test('page inventory must own the target',f=>{const q=f.entry.page_manifest_guard.path;f.write(q,'[]');f.entry.page_manifest_guard=f.binding(q)},false);
test('science receipt must affirm one actual issue',f=>{f.owner.one_underlying_issue=false;f.write(f.ownerPath,JSON.stringify(f.owner));f.entry.scientific_owner_receipt=f.binding(f.ownerPath)},false);
test('science receipt must preserve original severity labels',f=>{f.owner.original_severities_preserved['reader:106:1']='fatal';f.write(f.ownerPath,JSON.stringify(f.owner));f.entry.scientific_owner_receipt=f.binding(f.ownerPath)},false);
test('science receipt must preserve original defect labels',f=>{f.owner.original_labels_preserved['reader:106:1']='false-claim';f.write(f.ownerPath,JSON.stringify(f.owner));f.entry.scientific_owner_receipt=f.binding(f.ownerPath)},false);
test('root receipt authority is required',f=>{f.receipt.reviewed_by='some-agent'},false);
test('actual reviewed source excerpts are required',f=>{f.entry.reviewed_source_excerpts=['invented'.repeat(20),'unrelated'.repeat(20)]},false);
test('existing item classification branch behavior is preserved',f=>{
 const item='fixture-item',raw='Fixture item current source paragraph with more than eighty characters, expressly test-only and without any production acceptance.\n'.repeat(3);const p='items/'+item+'.md';f.write(p,raw);const sh=sha(raw);f.receipt.inputs[p]=sh;
 for(const [finding,ob,defect] of [[f.primary,'reader:106:1','ill-formed'],[f.alias,'refuter:106:1','undefined-notation']]){finding.id=item;finding.consumer_id=undefined;finding.observed_sha256='d'.repeat(64);finding.observed_source={item_sha256:sh,snapshot:'post'};finding.defect=defect;finding.severity='nonfatal'}
 f.prior.id=item;f.prior.verdict='confirmed_nonfatal';f.decision.id=item;f.decision.verdict='confirmed_nonfatal';f.entry.kind='same-source-classification';f.entry.subject=item;delete f.entry.consumer_id;f.entry.primary_defect=f.primary.defect;f.entry.alias_defect=f.alias.defect;f.entry.primary_finding_sha256=hash(f.primary);f.entry.alias_finding_sha256=hash(f.alias);f.entry.current_source={path:p,sha256:sh};f.entry.reviewed_source_excerpts=[raw.slice(0,100),raw.slice(10,130)];f.owner.current_source_guard={path:p,sha256:sh};f.owner.original_labels_preserved={'reader:106:1':f.primary.defect,'refuter:106:1':f.alias.defect};f.write(f.ownerPath,JSON.stringify(f.owner));f.entry.scientific_owner_receipt=f.binding(f.ownerPath);
},true,true);
fs.writeFileSync(path.join(here,'post-install-test-results.json'),JSON.stringify({tests:count,failed:0,results,note:'Isolated fixtures only; root approval fields are test data, not production attestations.'},null,2)+'\n');
console.log(`${count} focused page-alias/item-regression tests passed`);
