// Research outputs only. No canonical registry/state/native/source writes.
import {readFileSync,writeFileSync,existsSync,lstatSync} from 'node:fs';
import {resolve,relative,isAbsolute} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const run='inverse-problems-knot-theory-all-109-2026-10-19';
const repo=process.cwd(),dir=resolve(fileURLToPath(new URL('.',import.meta.url)));
const prefix=`research/${run}-supervision-20261020/step3-supervision/reader108-route`;
if(dir!==resolve(repo,prefix,'root-registration'))throw Error('run from repository root');
const need=(v,m)=>{if(!v)throw Error(m);},sha=b=>createHash('sha256').update(b).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined');
function bytes(p){
 need(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\')&&!p.split('/').some(x=>!x||x==='.'||x==='..'),'invalid path');
 const full=resolve(repo,p),r=relative(repo,full);need(r&&!r.startsWith('..')&&!isAbsolute(r),'escaping path');
 let at=repo;for(const part of r.split('/')){at=resolve(at,part);need(!lstatSync(at).isSymbolicLink(),'symlink input');}
 need(lstatSync(full).isFile(),'nonregular input');return readFileSync(full);
}
const json=p=>JSON.parse(bytes(p).toString());
const ref=p=>({path:p,sha256:sha(bytes(p))});
function bound(r){need(r&&r.path.startsWith(`research/${run}-`)&&sha(bytes(r.path))===r.sha256,'changed or non-run evidence: '+r?.path);return bytes(r.path);}
function output(name,value){
 need(/^[a-zA-Z0-9_.-]+$/.test(name),'invalid output name');const p=resolve(dir,name);
 if(existsSync(p))need(!lstatSync(p).isSymbolicLink()&&lstatSync(p).isFile(),'unsafe output');
 writeFileSync(p,JSON.stringify(value,null,2)+'\n');return ref(`${prefix}/root-registration/${name}`);
}
const args=process.argv.slice(2),complete=args.includes('--root-confirms-existing-native-capture');
const reviewAt=args.indexOf('--root-review'),reviewPath=reviewAt<0?null:args[reviewAt+1];
need(args.every((a,i)=>a==='--root-confirms-existing-native-capture'||a==='--root-review'||i===reviewAt+1&&reviewAt>=0),'unknown argument');
need(reviewAt<0||typeof reviewPath==='string'&&!reviewPath.startsWith('--'),'missing root review path');
need(complete===Boolean(reviewPath),'completion requires BOTH explicit root capture confirmation and actual --root-review path');
const e=json(`${prefix}/code-proposal/entry.pending-root.json`);
for(const k of ['findings','report','native_result','prompt','native_last_message','origin_pre','producer_pre','observed_source','actual_consumer'])bound(e[k]);
const findings=JSON.parse(bound(e.findings)),last=JSON.parse(bound(e.native_last_message)),native=JSON.parse(bound(e.native_result));
need(findings.findings?.length===7&&hash(findings)===hash(last),'not exact complete seven findings/last-message');
need(native.run===run&&native.role==='reader'&&native.label==='reader-108'&&native.attempt===1&&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false&&native.terminal_summary?.final_response_present===true&&typeof native.session_id==='string'&&native.session_id.trim()&&native.written_by!=='autopilot','invalid actual native completion');
let completeTail=false;try{completeTail=hash(JSON.parse(native.tail))===hash(findings);}catch{}
need(!completeTail&&typeof native.tail==='string'&&native.tail.length>0,'expected genuine clipped tail');
need(!Object.keys(native).some(k=>/last.?message|output.*(?:hash|digest|sha256)/i.test(k)),'unexpected native output binding; do not reuse this capture basis');
const original=findings.findings[3];
need(original.id===e.id&&original.consumer_id===e.consumer_id&&original.severity==='nonfatal'&&original.subject_type==='in-run-dependency'&&original.observed_source?.snapshot==='current'&&original.observed_source.item_sha256===e.observed_source.sha256&&hash(original)===e.finding_sha256,'original observation mismatch');
need(bytes(`research/${run}-reader-findings-108.json`).equals(bound(e.findings))&&bytes(`research/${run}-reader-108.md`).equals(bound(e.report)),'canonical native findings/report differ from genuine archives');
const analysis=json(`${prefix}/route-analysis.json`),graph=json(`${prefix}/observation-and-graph.json`);
const use=analysis.actual_existing_uses.find(x=>x.id===e.actual_consumer_id);
need(use?.exact_use&&bound(e.actual_consumer).toString().includes(use.exact_use),'retained algorithm-use quote no longer literal');
need(graph.actual_source_routes[e.actual_consumer_id]?.join('|')===[e.actual_consumer_id,e.id].join('|')&&graph.actual_source_routes[e.consumer_id]===null,'retained attribution graph changed');
const {split,yaml}=await import(pathToFileURL(resolve(repo,'tools/pathway-lib.mjs')).href);
const sourceFront=yaml().parse(split(bound(e.actual_consumer).toString()).fm);
const manifest=json(`research/${run}-batch-108.pages.json`),rows=(Array.isArray(manifest)?manifest:manifest.pages??[]).flatMap(p=>p.items??[]);
const actualRows=rows.filter(x=>typeof x==='object'&&x.id===e.actual_consumer_id);
need(actualRows.length===1&&Array.isArray(actualRows[0].deps)&&actualRows[0].deps.includes(e.id)&&Array.isArray(sourceFront.deps)&&sourceFront.deps.includes(e.id),'actual existing source/manifest direct algorithm edge absent');
const analysisRef=ref(`${prefix}/route-analysis.json`),graphRef=ref(`${prefix}/observation-and-graph.json`);
const binding={run,obligation:'reader:108:4',findings_count:7,complete_last_message_matches:true,native_tail_complete:false,native_output_digest_present:false,native_session_id:native.session_id,native_ended_at:native.ended_at,original_finding:original,refs:Object.fromEntries(['findings','report','native_result','prompt','native_last_message','origin_pre','producer_pre','observed_source','actual_consumer'].map(k=>[k,e[k]])),actual_use:{consumer_id:e.actual_consumer_id,used_clause_literal:use.exact_use,source_archive:e.actual_consumer,source_edge_kind:'deps',manifest:{path:`research/${run}-batch-108.pages.json`,item_id:e.actual_consumer_id,field:'deps'},report:analysisRef,report_pointer:'#/actual_existing_uses/0',graph:graphRef},limits:['Existing retained source-use packet only; this script performs no mathematical proof review or acceptance.','Observed source ref denotes the exact historical observation archive; no current producer source equality is inferred.','No canonical source, registry, native artifact, state, decision, receipt, stamp, control or gate is written.']};
output('artifact-bindings.json',binding);
const ownerTemplate=json(`${prefix}/code-proposal/owner-review.pending-root.json`);
Object.assign(ownerTemplate,{owner_identity:'PENDING_ROOT',completed:false,full_current_proof_read:false,affected_consumer_use_reviewed:false,recorded_at:'PENDING_ROOT_ACTUAL_READING_TIME',root_actual_reading:'PENDING_ROOT: record actual full supplier/consumer reading and adopted primary-review limits; this script cannot perform or attest it.',routing_authorization:'PENDING_ROOT: explicitly authorize only this same-assignment witness policy and reader:108:4; native acceptance and all ordinary obligations remain owed.',evidence_refs:[analysisRef,graphRef]});
const captureTemplate=json(`${prefix}/code-proposal/capture.pending-root.json`);
Object.assign(captureTemplate,{owner_identity:'PENDING_ROOT',at:'PENDING_ROOT_ACTUAL_CAPTURE_TIME',native_result_sha256:e.native_result.sha256,prompt_sha256:e.prompt.sha256,native_last_message_sha256:e.native_last_message.sha256,findings_sha256:e.findings.sha256,native_attempt:native.attempt,native_session_id:native.session_id});
let authorization='PENDING_ROOT_EXPLICIT_POLICY_AUTHORIZATION',captureRef,ownerRef;
if(complete){
 need(reviewPath.startsWith(`research/${run}-`),'root review must be own-run research evidence');
 const review=json(reviewPath),now=new Date().toISOString();
 need(review.owner_identity==='/root'&&review.completed===true&&review.full_current_proof_read===true&&review.affected_consumer_use_reviewed===true&&review.run===run&&review.obligation==='reader:108:4'&&review.native_consumer_id===e.consumer_id&&review.actual_consumer_id===e.actual_consumer_id&&review.source_sha256===e.observed_source.sha256&&review.consumer_sha256===e.actual_consumer.sha256&&review.actual_declared_edge==='deps'&&review.native_severity==='nonfatal'&&review.original_obligation_owed===true&&review.native_acceptance_claimed===false,'actual root full-reading/use review incomplete or mismatched');
 for(const k of ['root_actual_reading','evidence','routing_authorization'])need(typeof review[k]==='string'&&review[k].trim().length>=80&&!/PENDING_ROOT/.test(review[k]),'pending or missing root '+k);
 need(Number.isFinite(Date.parse(review.recorded_at))&&Date.parse(review.recorded_at)<=Date.parse(now)&&Date.parse(native.ended_at)<=Date.parse(now),'invalid root chronology');
 need(Array.isArray(review.evidence_refs)&&review.evidence_refs.some(x=>x.path===analysisRef.path&&x.sha256===analysisRef.sha256),'root review must adopt the exact retained source/use report');
 for(const r of review.evidence_refs)bound(r);
 need(sha(bytes(`items/${e.actual_consumer_id}.md`))===e.actual_consumer.sha256,'actual reviewed consumer changed; root must resolve current use before capture');
 const capture={...captureTemplate,owner_identity:'/root',at:now,evidence:'Root explicitly confirmed capture of the existing complete immutable attempt last-message and its equality to all seven original findings. This script checked exact actual result/prompt/session refs. The actual result tail remains clipped; this capture is not a native output-digest or full-tail attestation.'};
 captureRef=output('capture.ROOT.json',capture);ownerRef=ref(reviewPath);authorization=review.routing_authorization;
 Object.assign(e,{owner_identity:'/root',reviewed:true,at:now});
}else{
 ownerRef=output('owner-review.PENDING.json',ownerTemplate);captureRef=output('capture.PENDING.json',captureTemplate);
 Object.assign(e,{owner_identity:'PENDING_ROOT',reviewed:false,at:'PENDING_ROOT_REVIEW_DATE'});
}
Object.assign(e,{owner_review:ownerRef,capture:captureRef});
const canonical=`research/${run}-step3-owner-assigned-consumer-witnesses.json`;
let routes=[];
if(existsSync(resolve(repo,canonical))){const prior=json(canonical);need(prior.version===1&&prior.run===run&&prior.policy===e.policy&&prior.authorized_by==='owner'&&Array.isArray(prior.routes),'existing registry not compatible');need(!prior.routes.some(x=>x.origin_batch==='108'&&x.index===4),'actual route already registered; do not overwrite');routes=prior.routes;authorization=prior.authorization+'\n'+authorization;}
const registry={version:1,run,policy:e.policy,authorized_by:complete?'owner':'PENDING_ROOT',authorization,routes:[...routes,e]};
const ready=output(complete?'registry.ROOT-READY.json':'registry.PENDING.json',registry);
console.log(JSON.stringify({status:complete?'research-ready-for-root-manual-registration':'deliberately-invalid-pending-root-reading-and-capture',findings:7,registry_candidate:ready.path,canonical_registry_written:false,native_acceptance_claimed:false}));
