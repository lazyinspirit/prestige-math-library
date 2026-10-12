import { existsSync, readFileSync, readdirSync, statSync, realpathSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, join, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const outdir=resolve(root,'research/'+run+'-owner-one-time-exhausted-exception-20261011/exception_ground_corner_constructor');
const {loadStep3,itemHash,itemInputPaths,isMinimalItemReceipt}=await import(pathToFileURL(join(root,'tools/step3-decisions.mjs')));
const {authorResultAllowed}=await import(pathToFileURL(join(root,'tools/auditor-created-items.mjs')));
const {loadStep3OwnerCreation}=await import(pathToFileURL(join(root,'tools/step3-owner-creation.mjs')));
const sha=x=>createHash('sha256').update(x).digest('hex'),rel=x=>x.startsWith(root+sep)?x.slice(root.length+1):x;
const bytesCache=new Map(),jsonCache=new Map(),statCache=new Map();
const bytes=p=>{p=resolve(root,p);if(!bytesCache.has(p))bytesCache.set(p,readFileSync(p));return bytesCache.get(p);};
const read=p=>{p=resolve(root,p);if(!jsonCache.has(p))jsonCache.set(p,JSON.parse(bytes(p)));return jsonCache.get(p);};
const stat=p=>{p=resolve(root,p);if(!statCache.has(p))statCache.set(p,statSync(p));return statCache.get(p);};
const seal=p=>({path:rel(resolve(root,p)),raw_sha256:sha(bytes(p))});
const snapshotPath='research/'+run+'-owner-supervision-recovery-20261011/final-frontier-mechanical-decision-snapshot.json';
const snapshot=read(snapshotPath),baselinePath='research/'+run+'-step3-auditor-baseline.json',baseline=read(baselinePath);
const priorPath='research/'+run+'-step3-auditor-certifications.json',prior=existsSync(priorPath)?read(priorPath):null;
const s=loadStep3(root,run); // One cached native context; no calls to writers or certifiers.
const originals=new Set(baseline.items.map(x=>x.id)),preexisting=new Set(baseline.existing_item_files),priorById=new Map((prior?.items??[]).map(x=>[x.id,x]));
const dispatch=join(root,'research',run+'-dispatch'),authors=[];
for(const f of readdirSync(dispatch).filter(f=>/^alpha-high-.*\.result\.json$/.test(f)&&!f.includes('.attempt-'))){
 try{const p=join(dispatch,f),row=read(p);if(row.run===run&&authorResultAllowed(3,row)&&Date.parse(row.started_at)<=Date.parse(row.ended_at))authors.push({...row,evidence:seal(p)});}catch{}
}
const authorCompact=a=>a?{label:a.label,started_at:a.started_at,ended_at:a.ended_at,covers:a.covers,author_artifacts_ok:a.author_artifacts?.ok===true,evidence:a.evidence}:null;
function assignedNativeDraft(a,id,page,ownWrittenAt){
 if(ownWrittenAt>Date.parse(a.started_at)||a.author_artifacts?.ok!==true||typeof a.prompt!=='string')return null;
 const p=resolve(root,a.prompt);if(!existsSync(p)||!realpathSync(p).startsWith(realpathSync(dispatch)+sep)||stat(p).mtimeMs>Date.parse(a.started_at))return null;
 const lines=bytes(p).toString().split('\n');
 return lines.includes('run: '+run)&&lines.includes('label: '+a.label)&&lines.some(l=>/^\d+\. /.test(l.trim())&&l.trim().replace(/^\d+\. /,'')===id+' ('+page+')')?seal(p):null;
}
function coveringAuthors(value){const pair=[...s.pairs].find(([,pages])=>pages.some(p=>p.id===value.page.id))?.[0];const batch=String(value.page.batch);return {pair,batch,rows:authors.filter(a=>a.label.startsWith('step3b-pair-')?Boolean(pair&&a.label.startsWith('step3b-pair-'+pair+'-')&&a.covers.includes(pair)):a.covers.map(String).includes(batch)).sort((a,b)=>Date.parse(a.ended_at)-Date.parse(b.ended_at))};}
const selected=snapshot.work.filter(x=>x.reason.endsWith('current item bookkeeping receipt required')),rows=[];
for(const requested of selected){
 const {id}=requested,value=s.items.get(id);if(!value){rows.push({...requested,eligibility:'pending-unknown-current-manifest'});continue;}
 const deps=[...new Set([...(value.item.deps??[]),...(value.item.justified_by??[]),...(value.item.forward_refs??[])])].sort();
 const hash=itemHash(s,id,deps),own='items/'+id+'.md',cov=coveringAuthors(value),latest=cov.rows.at(-1);
 const common={id,page:value.page.id,batch:cov.batch,pair:cov.pair,snapshot_reason:requested.reason,current_input_sha256:hash,item_file:seal(own),item_mtime:new Date(stat(own).mtimeMs).toISOString(),latest_covering_native_author:authorCompact(latest)};
 const decisions=[];
 for(const owner of [true,false]){const path='research/'+run+'-step3b-'+(owner?'owner':'review')+'-'+id+'.json';if(existsSync(path)){const r=read(path);decisions.push({owner,version:r.version,decision:r.decision,at:r.at,current_hash_matches:r.sha256===hash,minimal_v2_valid:isMinimalItemReceipt(r),evidence:seal(path)});}}
 common.present_bookkeeping=decisions;
 if(originals.has(id)){rows.push({...common,origin_class:'immutable-baseline-original',eligibility:'ordinary-current-bookkeeping-only',baseline_entry:baseline.items.find(x=>x.id===id),creation_certificate_required:false,late_own_edit_does_not_reclassify_origin:true});continue;}
 if(preexisting.has(id)){rows.push({...common,origin_class:'preexisting-file',eligibility:'pending-preexisting-addition-route',creation_certificate_required:false});continue;}
 const ownerPath='research/'+run+'-step3-owner-creation-'+id+'.json';if(existsSync(ownerPath)){let valid,error;try{valid=!!loadStep3OwnerCreation(root,run,id,s);}catch(e){error=e.message;}rows.push({...common,origin_class:'registered-owner-creation',eligibility:valid?'ordinary-current-owner-bookkeeping-required':'pending-invalid-owner-creation',origin_valid:valid??false,error,creation_evidence:seal(ownerPath)});continue;}
 const ownWrittenAt=stat(own).mtimeMs;
 const paths=itemInputPaths(s,id,deps).filter(p=>!/-batch-\d+\.pages\.json$/.test(p));
 const late=latest?paths.filter(p=>stat(p).mtimeMs>Date.parse(latest.ended_at)).map(p=>({path:rel(p),mtime:new Date(stat(p).mtimeMs).toISOString(),is_own_item:resolve(p)===resolve(own)})):[];
 const ownCandidates=cov.rows.map(a=>{const ordinary=ownWrittenAt>=Date.parse(a.started_at)&&ownWrittenAt<=Date.parse(a.ended_at),adopted=ordinary?null:assignedNativeDraft(a,id,value.page.id,ownWrittenAt);return ordinary||adopted?{author:authorCompact(a),mode:ordinary?'native-own-file-write-window':'exact-prompt-unchanged-draft-adoption',prompt:adopted}:null;}).filter(Boolean);
 const priorRow=priorById.get(id);
 // Current full-window authoring follows the exact native code; no mathematical verdict is synthesized.
 const fullWindow=latest&&paths.every(p=>stat(p).mtimeMs<=Date.parse(latest.ended_at));
 const origin=priorRow?'existing-native-certification-row':ownCandidates.length?'native-own-window-or-exact-adoption':fullWindow?'latest-full-proof-input-window':'not-established';
 const eligibility=priorRow?'pending-authentication-of-prior-native-certification':fullWindow?'eligible-for-native-creation-check-after-current-bookkeeping':ownCandidates.length?'eligible-origin-late-supplier-inputs-needs-current-owner-or-review-recertification':'pending-no-authenticated-native-own-origin';
 rows.push({...common,origin_class:'postbaseline-addition',eligibility,origin_basis:origin,prior_native_row:priorRow??null,latest_full_proof_input_window:!!fullWindow,own_file_candidates:ownCandidates,late_proof_input_paths:late,late_own_item:late.some(x=>x.is_own_item),late_supplier_only:late.length>0&&!late.some(x=>x.is_own_item),creation_certificate_required:true});
}
const counts={requested:rows.length,origin_classes:{},eligibility:{}};for(const r of rows){counts.origin_classes[r.origin_class??'unknown']=(counts.origin_classes[r.origin_class??'unknown']??0)+1;counts.eligibility[r.eligibility]=(counts.eligibility[r.eligibility]??0)+1;}
const packet={version:1,run,author:'/root/exception_ground_corner_constructor',recorded_at:new Date().toISOString(),task:'read-only-final-frontier-provenance-eligibility',source_snapshot:seal(snapshotPath),immutable_baseline:seal(baselinePath),baseline_semantic_sha256:sha(JSON.stringify(baseline)),prior_native_certification:prior?seal(priorPath):{path:priorPath,present:false},native_author_results_count:authors.length,counts,scope_excluded:{changed_input_decision_rows:snapshot.work.filter(x=>!x.reason.endsWith('current item bookkeeping receipt required')).length,reason:'Root assigned the 233 missing-bookkeeping rows; other 52 remain separate current owner decisions'},rows,limitations:['Mtime/write-window evidence is mechanical creation provenance, not a mathematical audit','No native certification file or bookkeeping receipt was written','One cached context was used; root must load fresh stable context after final metadata writes','Absence of a prior canonical certification is recorded, not replaced by an inferred historical certificate','All 226 baseline original identities remain original despite late own proof edits'],cache_counts:{native_items:s.items.size,dependency_nodes:s.cache.size,file_stats:statCache.size,hashed_input_rows:rows.length}};
writeFileSync(join(outdir,'final-provenance-eligibility.json'),JSON.stringify(packet,null,2)+'\n');
console.log(JSON.stringify({counts,additions:rows.filter(x=>x.origin_class==='postbaseline-addition').map(x=>({id:x.id,eligibility:x.eligibility,late_own_item:x.late_own_item,late_paths:x.late_proof_input_paths.length,own_candidates:x.own_file_candidates.length})),cache_counts:packet.cache_counts},null,2));
