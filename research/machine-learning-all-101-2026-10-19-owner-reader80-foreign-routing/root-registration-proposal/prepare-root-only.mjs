// ROOT-only proposal preparation. Never writes the live registry or any carrier.
import {readFileSync,writeFileSync,mkdirSync,lstatSync,readdirSync,existsSync} from 'node:fs';
import {resolve,relative,isAbsolute,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const root=resolve(process.cwd()),here=dirname(fileURLToPath(import.meta.url));
const cfg=JSON.parse(readFileSync(resolve(here,'inputs.json'),'utf8')),run=cfg.run;
const {split,yaml}=await import(pathToFileURL(resolve(root,'tools/pathway-lib.mjs')));
const hash=b=>createHash('sha256').update(b).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const objectHash=x=>hash(JSON.stringify(canonical(x)));
const need=(x,m)=>{if(!x)throw Error(m);};
function bytes(p){need(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\'),'bad path');const full=resolve(root,p),rel=relative(root,full);need(rel&&!rel.startsWith('..')&&!isAbsolute(rel),'escape');let at=root;for(const part of rel.split('/')){at=resolve(at,part);need(!lstatSync(at).isSymbolicLink(),'symlink '+p);}need(lstatSync(full).isFile(),'nonregular '+p);return readFileSync(full);}
const json=p=>JSON.parse(bytes(p));const front=p=>yaml().parse(split(bytes(p).toString()).fm);
const input=new Map();for(const g of cfg.guards){const b=bytes(g.path);need(hash(b)===g.sha256,'stale input '+g.path);input.set(g.path,b);}
const ref=p=>({path:p,sha256:hash(bytes(p))});
const manifests=readdirSync(resolve(root,'research')).filter(n=>new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(n));
const homes=id=>manifests.flatMap(n=>{const d=json('research/'+n);return(Array.isArray(d)?d:d.pages??[]).filter(p=>(p.items??[]).some(x=>(typeof x==='string'?x:x.id)===id)).map(p=>({batch:n.match(/-batch-(\d+)\.pages/)[1],page:p.id}));});
const findingsPath=`research/${run}-reader-findings-80.json`,reportPath=`research/${run}-reader-80.md`,findings=json(findingsPath),report=bytes(reportPath).toString();
const nativePath=`research/${run}-dispatch/reader-reader-80.attempt-1.result.json`,promptPath=nativePath.replace('.result.json','.prompt.md'),native=json(nativePath);
need(native.run===run&&native.role==='reader'&&native.label==='reader-80'&&native.ok===true&&native.attempt===1&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out!==true&&native.covers.length===1&&native.covers[0]==='80','not genuine native reader80');
need(objectHash(JSON.parse(native.tail))===objectHash(findings)&&native.prompt.endsWith('/'+promptPath),'native findings/prompt mismatch');
const preimageIndex=json(`research/${run}-owner-step3-authenticated-preimages/index.json`);
const emitted=new Map(),out=cfg.output_base;
const archive=(name,p)=>{const target=out+'/archives/'+name,b=bytes(p);emitted.set(target,b);return {path:target,sha256:hash(b)};};
const emit=(name,d)=>{const path=out+'/'+name,b=Buffer.from(JSON.stringify(d,null,2)+'\n');emitted.set(path,b);return {path,sha256:hash(b)};};
const archivedFindings=archive('reader-findings-80.json',findingsPath),archivedReport=archive('reader-80.md',reportPath);
const at=cfg.registration_at,routes=[],evidence=[];need(Number.isFinite(Date.parse(at))&&Date.parse(at)>=Date.parse(native.ended_at),'invalid bound registration time');
for(const c of cfg.cases){
 const f=findings.findings[c.index-1],n=c.batch,id=c.id,consumer=c.consumer_id;
 need(f.id===id&&f.consumer_id===consumer&&f.subject_type==='in-run-dependency'&&f.observed_source.snapshot==='current','wrong original finding');
 need(report.includes(id)&&report.includes(consumer)&&report.includes(f.observed_source.item_sha256),'report lacks original identities');
 for(const [which,wanted]of [[id,n],[consumer,n]]){const hh=homes(which);need(hh.length===1&&hh[0].batch===wanted,'ambiguous/wrong home '+which);need(front('items/'+which+'.md').status==='draft','not current draft '+which);}
 const op=json(`research/${run}-step3-hash-80-pre.json`),oq=json(`research/${run}-step3-hash-80-post.json`);
 need([op,oq].every(s=>!s.manifest.includes(id)&&!s.manifest.includes(consumer)),'invented batch80 ownership');
 const pp=json(`research/${run}-step3-hash-${n}-pre.json`),pq=json(`research/${run}-step3-hash-${n}-post.json`);
 for(const s of [pp,pq])need(s.manifest.includes(id)&&['item_sha256','contract_sha256','manifest_sha256'].every(k=>/^[a-f0-9]{64}$/.test(s.hashes[id]?.[k])),'bad producer snapshot');
 need(hash(bytes(c.observed_source))===f.observed_source.item_sha256&&[pp,pq].some(s=>s.hashes[id].item_sha256===f.observed_source.item_sha256),'observed original source mismatch');
 const consumerPre=pp.hashes[consumer];need(consumerPre&&['item_sha256','contract_sha256','manifest_sha256'].every(k=>/^[a-f0-9]{64}$/.test(consumerPre[k]))&&hash(bytes(c.original_consumer))===consumerPre.item_sha256,'wrong original full consumer');
 need(preimageIndex.sources_pages.some(x=>x.id===consumer&&x.archive===c.original_consumer&&x.matches_native_preimage===true&&x.expected_pre_raw_sha256===consumerPre.item_sha256&&x.captured_raw_sha256===consumerPre.item_sha256),'consumer archive not authenticated preimage');
 for(const p of [c.original_consumer,'items/'+consumer+'.md']){const fm=front(p);need(Array.isArray(fm[c.edge_kind])&&fm[c.edge_kind].includes(id)&&['deps','justified_by'].filter(k=>Array.isArray(fm[k])&&fm[k].includes(id)).length===1,'wrong typed consumer relation');}
 const app=json(c.application),before=hash(bytes(c.repair_before)),after=hash(bytes('items/'+id+'.md'));
 need(app.run===run&&app.owner_identity==='/root'&&app.native_finding_unchanged===true&&app.native_acceptance_claimed===false&&before!==after&&app.files.filter(x=>x.path==='items/'+id+'.md'&&x.before_sha256===before&&x.after_sha256===after).length===1,'wrong actual application');
 const currentConsumerHash=hash(bytes('items/'+consumer+'.md')),ownerReport=json(c.review_report);
 if(n==='81')need(ownerReport.consumer_dispositions.some(x=>x.id===consumer&&x.source_raw_sha256===currentConsumerHash&&x.actual_full_current_source_read===true),'owner81 actual consumer reading not bound');
 else {const ds=json(c.consumer_dispositions),d=ds.find(x=>x.id===consumer);need(d&&d.read_scope.includes('Full actual current source read')&&hash(bytes(d.source_guard.before_path))===currentConsumerHash,'owner90 actual consumer reading not bound');}
 const observed_source=archive(id+'-observed.md',c.observed_source),source_before=archive(id+'-repair-before.md',c.repair_before),source_after=archive(id+'-repair-after.md','items/'+id+'.md'),original_consumer=archive(consumer+'-original.md',c.original_consumer),consumer_current=archive(consumer+'-current.md','items/'+consumer+'.md');
 const refs=[ref(c.application),ref(c.review_report),...(c.consumer_dispositions?[ref(c.consumer_dispositions)]:[])];
 const review={run,id,original_obligation:`reader:80:${c.index}`,original_edge_kind:c.edge_kind,current_edge_kind:c.edge_kind,consumer_id:consumer,consumer_source_sha256:currentConsumerHash,observed_source_sha256:observed_source.sha256,source_before_sha256:before,source_after_sha256:after,full_current_proof_read:true,consumer_checks_complete:true,native_acceptance_claimed:false,review_attribution:{mathematical_owner:c.owner,root_full_current_proof_read:'Explicit existing actual root application source_reading plus root instruction; not a new claim by packet preparer.',current_consumer_reading:c.owner,registration_preparer:'/root/terminal_handoff_recovery',preparer_mathematical_review_claimed:false,root_personal_typed_wrapper_approval:'PENDING; root must personally approve this prepared wrapper before registration'},evidence:`Existing same mathematical owner ${c.owner} performed the focused proof and actual consumer review documented in the hash-bound report/disposition packet. Root read the full current supplier proof before the genuine guarded source application and expressly retained the original reader80 finding. This wrapper attributes those existing reviews; its preparer claims no proof-reading or consumer-census credit. The actual foreign relation is ${c.edge_kind}, not an assigned batch80 dependency; original reader wording is preserved. Root personally approves this typed wrapper before activation.`,evidence_refs:refs};
 const owner_review=emit('owner-review-'+n+'.json',review);
 routes.push({version:1,policy:cfg.policy,run,owner_identity:'/root',reviewed:true,mathematical_acceptance:false,edit_permission:false,assigned_consumer_coverage:false,home_coverage_owed:true,at,reason:`Root preserves genuine original reader80:${c.index} on source${n} and its named foreign consumer. Both lie outside the actual80 assignment. Actual source repair and same-owner consumer reading are independently evidenced; this route supplies only exact extra reading, not a fabricated batch80 edge, native acceptance or home coverage.`,scope_misattribution:'source-and-named-consumer-both-foreign-to-native-assignment',origin_batch:'80',producer_batch:n,consumer_batch:n,index:c.index,id,consumer_id:consumer,finding_sha256:objectHash(f),findings:archivedFindings,report:archivedReport,native_result:ref(nativePath),prompt:ref(promptPath),origin_pre:ref(`research/${run}-step3-hash-80-pre.json`),origin_post:ref(`research/${run}-step3-hash-80-post.json`),producer_pre:ref(`research/${run}-step3-hash-${n}-pre.json`),producer_post:ref(`research/${run}-step3-hash-${n}-post.json`),consumer_pre:ref(`research/${run}-step3-hash-${n}-pre.json`),observed_source,original_consumer,source_before,source_after,consumer_current,original_edge_kind:c.edge_kind,current_edge_kind:c.edge_kind,application:ref(c.application),owner_review});
 evidence.push({obligation:`reader:80:${c.index}`,home:n,source:id,consumer,edge_kind:c.edge_kind,observed:observed_source.sha256,repair_before:before,repair_after:after,current_consumer:currentConsumerHash,mathematical_owner:c.owner});
}
const prepared=emit('registry-proposed.json',{version:1,run,policy:cfg.policy,authorized_by:'owner',authorization:'Root-authorized preparation only: after personal approval of these typed attribution wrappers, register exact genuine reader80 foreign observations with their actual source and consumer homes. No assigned80 edge, independent native acceptance or home coverage is supplied.',proposal_activation:'PENDING ROOT PERSONAL WRAPPER APPROVAL AND EXPLICIT LIVE REGISTRY INSTALLATION',routes});
const summary={run,status:process.argv.includes('--prepare')?'prepared-proposal-only':'read-only-preflight',guard_count:cfg.guards.length,manifest_census:manifests.length,prepared_registry:prepared,rows:evidence,live_registry_written:false,source_written:false,native_controls_or_gates:false,root_personal_wrapper_approval_required:true};
if(process.argv.includes('--prepare')){
 for(const [path,b]of emitted){need(path.startsWith(out+'/'),'proposal output escape');const full=resolve(root,path);mkdirSync(dirname(full),{recursive:true});let at=root;for(const part of relative(root,full).split('/').slice(0,-1)){at=resolve(at,part);need(!lstatSync(at).isSymbolicLink(),'symlink output parent');}if(existsSync(full)){need(!lstatSync(full).isSymbolicLink()&&lstatSync(full).isFile(),'nonregular output');need(readFileSync(full).equals(b),'refuse overwriting different prepared bytes '+path);}else writeFileSync(full,b,{flag:'wx'});}
 writeFileSync(resolve(here,'preparation-report.json'),JSON.stringify(summary,null,2)+'\n');
}
console.log(JSON.stringify(summary,null,2));
