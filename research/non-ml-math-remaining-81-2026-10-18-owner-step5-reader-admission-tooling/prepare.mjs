// Isolated proposal generator. It never writes items/, native state, or canonical admissions.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root=process.cwd(),run='non-ml-math-remaining-81-2026-10-18';
const out=path.resolve(root,`research/${run}-owner-step5-reader-admission-tooling`);
const {itemHashGuard}=await import(pathToFileURL(path.join(root,'tools/item-hash.mjs')));
const {MODELS}=await import(pathToFileURL(path.join(root,'tools/models.mjs')));
const hash=x=>crypto.createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const abs=p=>path.resolve(root,p),rel=p=>path.relative(root,abs(p));
const txt=p=>fs.readFileSync(abs(p),'utf8'),read=p=>JSON.parse(txt(p)),exists=p=>fs.existsSync(abs(p));
const need=(b,m)=>{if(!b)throw Error(m);};
const write=(name,x)=>{const p=path.resolve(out,name);need(p.startsWith(out+'/'),'Output must remain isolated');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');};
const stamp=()=>new Date().toISOString();
// Smallest contiguous unique literal span yielding the actual packet carrier;
// expands shared context only for an insertion or an ambiguous repeated excerpt.
const literalEdit=(before,after)=>{
 let start=0;while(start<Math.min(before.length,after.length)&&before[start]===after[start])start++;
 let suffix=0;while(suffix<Math.min(before.length-start,after.length-start)&&before[before.length-1-suffix]===after[after.length-1-suffix])suffix++;
 let end=before.length-suffix,afterEnd=after.length-suffix;
 while(start===end||before.split(before.slice(start,end)).length!==2){
  if(start>0)start--;else if(end<before.length){end++;afterEnd++;}else throw Error('Cannot derive unique nonempty literal edit');
 }
 const edit={source_excerpt:before.slice(start,end),proposed_replacement:after.slice(start,afterEnd)};
 need(before.replace(edit.source_excerpt,()=>edit.proposed_replacement)===after,'Literal operation does not reproduce exact proposed carrier');
 return edit;
};
const bind=(bindings,p)=>{need(rel(p).startsWith('research/'),'Bindings must be real research files');need(exists(p),'Missing binding '+p);bindings[rel(p)]=hash(txt(p));};
const dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`,nativeDir=`.autopilot/${run}`;
const initial=read(`${dir}/initial-1.json`),frontier=read(`${dir}/frontier.json`),baseline=read(`${dir}/baseline.json`),verdicts=read(`${dir}/step4-verdicts.json`);
need(initial.run===run&&initial.phase==='initial'&&initial.round===1&&initial.adjudicationSchemaVersion===1,'Wrong initial native pack');
need(initial.units.length===81&&new Set(initial.units).size===81,'Expected exact81 native units');
need(!exists(`${dir}/impact-initial-1.json`),'First impact pack already frozen');
const resultFiles=fs.readdirSync(abs(dispatch));
need(!resultFiles.some(n=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(n)),'Impact execution already started');
const stateText=txt(`${nativeDir}/state.json`),state=JSON.parse(stateText),requestText=txt(`${nativeDir}/owner-gate-request.json`),request=JSON.parse(requestText);
need(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&Object.values(state.dispatches??{}).every(x=>!x.startedAt||x.endedAt),'Live initial state must actually be paused/drained');
need(request.version===1&&request.run===run&&request.group==='5.1-adjudicate'&&JSON.stringify(request.stages)===JSON.stringify(['5.1-adjudicate']),'Wrong actual owner hold request');
const bindings={};for(const name of ['frontier.json','baseline.json','step4-verdicts.json','initial-1.json'])bind(bindings,`${dir}/${name}`);
const handoffs=[];
for(const unit of initial.units){
 const label=`step5-v2-initial-r1-u${unit}`,reportPath=`${dir}/${label}.json`,report=read(reportPath),mechanical=report.completion==='mechanical-zero-work';
 need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit&&report.input_sha256===hash(initial),'Report mismatch '+unit);
 const dispatchLabel=mechanical?`step5-v2-empty-initial-r1-u${unit}`:label,resultPath=`${dispatch}/${mechanical?'tool-':'alpha-adjudicate-'}${dispatchLabel}.result.json`,native=read(resultPath);
 need(native.run===run&&native.ok===true&&native.label===dispatchLabel&&JSON.stringify(native.covers)===JSON.stringify([unit]),'Incomplete handoff '+unit);
 const observed=state.dispatches?.[`5.1-adjudicate:${dispatchLabel}`];
 need(observed?.stage==='5.1-adjudicate'&&observed.role===native.role&&observed.label===native.label&&observed.lastExitOk===true&&JSON.stringify(observed.covers)===JSON.stringify([unit]),'State handoff mismatch '+unit);
 need(Date.parse(observed.startedAt)<=Date.parse(native.ended_at)&&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)&&Date.parse(observed.endedAt)<=Date.parse(request.at),'Handoff does not precede actual hold '+unit);
 let attemptPath=null;
 if(mechanical)need(native.role==='tool'&&native.written_by==='autopilot'&&report.mathematical_review===false&&initial.assignments[unit]?.length===0&&['reviews','decisions','created_items','downstream'].every(k=>Array.isArray(report[k])&&!report[k].length),'Bad genuine zero-work '+unit);
 else{
  need(native.role==='alpha-adjudicate'&&native.model===MODELS.sol61.id&&native.provider_effort==='high'&&native.attempt>0&&observed.attempt===native.attempt&&native.evidence_tag===`.attempt-${native.attempt}`,'Wrong genuine worker '+unit);
  need(Date.parse(observed.startedAt)<=Date.parse(native.started_at)&&Date.parse(native.started_at)<=Date.parse(native.ended_at)&&native.process_exit_code===0&&native.exit_code===0&&native.timed_out===false&&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false&&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0,'Incomplete actual native execution '+unit);
  attemptPath=`${dispatch}/alpha-adjudicate-${label}.attempt-${native.attempt}.result.json`;need(hash(native)===hash(read(attemptPath)),'Stable/immutable attempt mismatch '+unit);bind(bindings,attemptPath);
 }
 bind(bindings,reportPath);bind(bindings,resultPath);handoffs.push({unit,mechanical,report_path:reportPath,report_raw_sha256:hash(txt(reportPath)),dispatch_path:resultPath,dispatch_raw_sha256:hash(txt(resultPath)),immutable_attempt_path:attemptPath,immutable_attempt_raw_sha256:attemptPath?hash(txt(attemptPath)):null,actual_state_dispatch_key:`5.1-adjudicate:${dispatchLabel}`,ended_at:native.ended_at});
}
// Every current manifest is required for unique owner validation by version2.
for(const name of fs.readdirSync(abs('research')).filter(n=>n.startsWith(run+'-batch-')&&/^\d+\.pages\.json$/.test(n.slice((run+'-batch-').length))))bind(bindings,'research/'+name);
const capture=stamp();need(Date.parse(request.at)<=Date.parse(capture),'Clock before request');
need(txt(`${nativeDir}/state.json`)===stateText&&txt(`${nativeDir}/owner-gate-request.json`)===requestText,'Native hold changed during observation');
// Preserve one truthful archived creation state/request; never silently replace their history.
for(const [name,value] of [['creation-state.json',stateText],['owner-gate-request.json',requestText]]){if(exists(path.join(out,name)))need(txt(path.join(out,name))===value,'Existing capture differs; use a new isolated evidence directory');else write(name,value);}
const capturePath=path.join(out,'capture.json');if(!exists(capturePath))write('capture.json',{captured_at:capture,source_state_path:`${nativeDir}/state.json`,source_request_path:`${nativeDir}/owner-gate-request.json`,state_raw_sha256:hash(stateText),request_raw_sha256:hash(requestText),method:'Exact native bytes copied while actual live state was paused/drained; rechecked byte equality after81 handoffs. No state synthesized.'});
const captured=read(capturePath).captured_at;bind(bindings,path.join(out,'creation-state.json'));bind(bindings,path.join(out,'owner-gate-request.json'));bind(bindings,capturePath);
const metadataHistoryFile=`${dir}/initial-1-owner-metadata-history.json`;
let finalMetadataBindingsReady=false;
if(exists(metadataHistoryFile)){
 const history=read(metadataHistoryFile);need(history.run===run&&history.version===2&&history.kind==='owner-initial-metadata-history'&&history.manifests.length===81,'Wrong final metadata history');
 for(const row of history.manifests){need(txt(row.path)===txt(row.archive),'Current manifest differs from actual final history '+row.path);bind(bindings,row.archive);}
 bind(bindings,metadataHistoryFile);finalMetadataBindingsReady=true;
}
write('initial-81-handoff-pointers.json',{run,observed_at:stamp(),count:handoffs.length,mechanical_zero_work:handoffs.filter(x=>x.mechanical).length,rows:handoffs});
const inventory=read(`research/${run}-owner-step5-original-finding-inventory/original-concern-alert-inventory.json`);
const packetSpecs=[];const add=(group,id,before,proposed,packet,extra={})=>packetSpecs.push({group,id,before_file:before,proposed_file:proposed,packet,...extra});
let group='kept-presentation-concerns',packet=`research/${run}-owner-step5-${group}/proposal.json`;
for(const x of read(packet).proposals)add(group,x.id,x.before_file,x.proposed_file,packet);
group='clifford-kept-concerns';packet=`research/${run}-owner-step5-${group}/operations.json`;
for(const x of read(packet).operations)if(x.id==='thm-real-complex-clifford-algebra-classification')add(group,x.id,x.before_file,x.proposed_file,packet);
// Both Fibonacci locator subjects are already genuine ordinary downstream targets.
const fibPacket=`research/${run}-owner-step5-fibonacci-locators/guarded-operations.json`,fibRoutes=[];
for(const x of read(fibPacket).operations)if(x.file.startsWith('items/')){
 const id=path.basename(x.file,'.md'),matches=[];
 for(const handoff of handoffs){const report=read(handoff.report_path);for(const [index,target] of report.downstream.entries())if((typeof target==='string'?target:target.id)===id)matches.push({unit:handoff.unit,report:handoff.report_path,report_raw_sha256:handoff.report_raw_sha256,pointer:'/downstream/'+index,exact_original_target:target,dispatch:handoff.dispatch_path,dispatch_raw_sha256:handoff.dispatch_raw_sha256,immutable_attempt:handoff.immutable_attempt_path,immutable_attempt_raw_sha256:handoff.immutable_attempt_raw_sha256});}
 need(matches.length>0,'Missing real ordinary Fibonacci target '+id);
 fibRoutes.push({id,route:'existing genuine ordinary initial downstream target; no extra reader admission',matches,owner_operations_packet:fibPacket,owner_work_instructions:`research/${run}-owner-step5-fibonacci-locators/focused-reader-work.json`,original_findings:`research/${run}-owner-step5-fibonacci-locators/original-native-findings.json`,collection:'Not yet produced; only actual successful native report downstream pointers authenticated, never collection coverage inferred.'});
}
write('fibonacci-existing-native-downstream.json',{run,targets:fibRoutes});
group='kept-information-concerns';packet=`research/${run}-owner-step5-${group}/source-operations.json`;
for(const x of read(packet))if(x.canonical.startsWith('items/'))add(group,path.basename(x.canonical,'.md'),x.before_file,x.proposal,packet);
group='kept-qc-geometry-concerns';packet=`research/${run}-owner-step5-${group}/source-operations.json`;
for(const x of read(packet).operations)add(group,x.id,x.before_file,x.proposed_file,packet,{packet_companion_block:x.id==='alg-qa-37-exhaustive-b6-block-pair-compiler',companion_itself:x.id==='thm-qa-37-exhaustive-b6-compiler-terminates'});
group='kept-tl-concerns';packet=`research/${run}-owner-step5-${group}/repair.json`;
for(const x of read(packet).source_operations)add(group,x.id,`research/${run}-owner-step5-${group}/${x.before}`,`research/${run}-owner-step5-${group}/${x.proposed}`,packet);
group='kept-algebra-concerns';packet=`research/${run}-owner-step5-${group}/literal-source-operations.json`;
for(const x of read(packet)){const id=path.basename(x.path,'.md');add(group,id,`research/${run}-owner-step5-${group}/before/items/${id}.md`,x.proposal,packet);}
// VOA/Hall completion is opt-in via an explicit isolated adapter list; do not infer completion from a working directory.
const supplementalPath=path.join(out,'completed-packets-extra.json');if(exists(supplementalPath))for(const x of read(supplementalPath))add(x.group,x.id,x.before_file,x.proposed_file,x.packet,x);
const candidates=[],blocked=[],readerCache=new Map();
function authenticateReader(batch){
 if(readerCache.has(batch))return readerCache.get(batch);
 const digest=`research/${run}-batch-${batch}-step5-context.json`,stable=`${dispatch}/alpha-batch-read-${batch}.result.json`,r=read(stable),stem=`${dispatch}/alpha-batch-read-${batch}.attempt-${r.attempt}`,attempt=stem+'.result.json',output=stem+'.last-message.json',d=read(digest);
 need(r.run===run&&r.role==='alpha-batch-read'&&r.label===batch&&r.ok===true&&r.model===MODELS.sol61.id&&r.provider_effort==='medium'&&Number.isSafeInteger(r.attempt)&&r.attempt>0&&r.evidence_tag===`.attempt-${r.attempt}`&&JSON.stringify(r.covers)===JSON.stringify([batch]),'Wrong genuine Step4 reader '+batch);
 need(hash(r)===hash(read(attempt))&&hash(d)===hash(read(output))&&d.batches?.includes(batch),'Original reader output mismatch '+batch);
 need(Date.parse(r.started_at)<=Date.parse(r.ended_at)&&r.process_exit_code===0&&r.exit_code===0&&r.timed_out===false&&r.terminal_summary?.task_completed===true&&r.terminal_summary.task_aborted===false&&r.terminal_summary.final_response_present===true&&r.terminal_summary.error_events===0,'Incomplete original reader execution '+batch);
 for(const p of [digest,stable,attempt,output])bind(bindings,p);
 const a={digest,stable,attempt,output,stem,r,d};readerCache.set(batch,a);return a;
}
for(const spec of packetSpecs){
 const problems=[];try{
  need(exists(spec.before_file)&&exists(spec.proposed_file),'Before/proposed packet carrier absent');
  const current=txt(`items/${spec.id}.md`),before=txt(spec.before_file),proposed=txt(spec.proposed_file);
  need(before!==proposed,'Packet is a no-op, not defect work');need(current===before,'Current full source differs from packet before');
  need(/^status:\s*draft\s*$/m.test(current),'Reader helper accepts draft originals only');
  need(frontier.ids.includes(spec.id),'Not original frontier');need(itemHashGuard(current)===baseline[spec.id]&&initial.before[spec.id]===baseline[spec.id],'Not unchanged original baseline');
  need(!initial.rejected.some(x=>x.id===spec.id),'Originally rejected: ordinary native route');need(verdicts.some(x=>x.id===spec.id&&x.model===MODELS.luna.id&&x.keep===true),'No genuine Luna keep');
  const owners=frontier.batches.filter(x=>x.items.includes(spec.id));need(owners.length===1,'Ambiguous frozen owner');const batch=owners[0].id;
  const currentOwners=fs.readdirSync(abs('research')).filter(n=>n.startsWith(run+'-batch-')&&/^\d+\.pages\.json$/.test(n.slice((run+'-batch-').length))).flatMap(n=>read('research/'+n).flatMap(p=>(p.items??[]).filter(x=>x.id===spec.id).map(()=>n.slice((run+'-batch-').length).split('.')[0])));need(currentOwners.length===1&&currentOwners[0]===batch,'Current unique owner mismatch');
  const observations=inventory.filter(x=>x.id===spec.id);const own=observations.find(x=>x.digest_pointer.startsWith('/concerns/')&&x.source_batch===batch);
  const original=own??observations.find(x=>x.digest_pointer.startsWith('/alerts/')&&x.source_batch!==batch);need(original,'No qualifying original own concern or cross-batch alert; retain separate native/related-work route');
  const a=authenticateReader(original.source_batch),sourceKind=original.digest_pointer.startsWith('/alerts/')?'alert':'concern',index=original.digest_index;
  const nativeObject=a.d[sourceKind==='alert'?'alerts':'concerns']?.[index];need(nativeObject&&hash(nativeObject)===hash(original.original_observation),'Exact original object mismatch');
  const entry={id:spec.id,batch,source_kind:sourceKind,reader_batch:original.source_batch,before_guard_sha256:baseline[spec.id]};entry[sourceKind+'_index']=index;entry[sourceKind]=nativeObject;
  if(sourceKind==='concern')need(a.d.items_read?.includes(spec.id)&&nativeObject.id===spec.id,'No actual owning-reader items_read membership');
  else{
   need(nativeObject.item===spec.id,'Alert target mismatch');
   const logPath=a.stem+'.log',promptPath=a.stem+'.prompt.md';need(abs(a.r.log??'')===abs(logPath)&&abs(a.r.prompt??'')===abs(promptPath),'Wrong genuine log/prompt pointers');
   const log=txt(logPath),prompt=txt(promptPath);need(prompt.includes('run: '+run+'\nrole: alpha-batch-read')&&prompt.includes('batch **'+original.source_batch+'**, run'),'Wrong original prompt');
   // Discover only a literal successful cat output prefix; never invent log_span, tool IDs or past reading.
   const escaped=spec.id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),pattern=new RegExp('exec\\n/bin/bash -lc "cat items/'+escaped+'\\.md[^\\n]*\\n succeeded in \\d+ms:\\n','g');
   const prefix=[...log.matchAll(pattern)].map(x=>x[0]).find(x=>log.includes(x+before.trimEnd()));need(prefix,'No supported full successful cat carrier in actual native log');
   const excerpts=[];for(const [l,r] of [["'","'"],['"','"'],['“','”'],['‘','’']]){let start=0;while((start=nativeObject.finding.indexOf(l,start))>=0){const end=nativeObject.finding.indexOf(r,start+l.length);if(end<0)break;const e=nativeObject.finding.slice(start+l.length,end);if(e.length>=20&&before.includes(e)&&current.includes(e))excerpts.push(e);start=end+r.length;}}
   need(excerpts.length,'No literal quoted original alert excerpt in archived/current carrier');
   const snapPath=`research/${run}-step3-hash-${batch}-post-3a.json`,snap=read(snapPath),closurePath=`research/${run}-step3-closure.json`,closure=read(closurePath);
   need(snap.version===2&&snap.run===run&&snap.batch===batch&&snap.label==='post-3a'&&snap.manifest.filter(x=>x===spec.id).length===1&&snap.hashes?.[spec.id]?.item_sha256===hash(before)&&itemHashGuard(before)===baseline[spec.id],'Source does not match exact post3a snapshot');
   need(closure.version===3&&closure.basis==='dependency-ordered-step3a'&&closure.run===run&&closure.status==='closed'&&Date.parse(closure.closed_at)<=Date.parse(a.r.started_at)&&closure.artifacts?.[snapPath]===hash(txt(snapPath))&&closure.final_item_hashes?.[spec.id]===baseline[spec.id],'No exact Step3-to-reader continuity');
   for(const p of [logPath,promptPath,snapPath,closurePath,spec.before_file])bind(bindings,p);
   entry.source_observation={command_output_prefix:prefix,source_excerpt:excerpts.sort((a,b)=>b.length-a.length)[0]};entry.source_continuity={source_file:spec.before_file};
  }
  for(const p of [spec.packet,spec.before_file,spec.proposed_file])bind(bindings,p);
  candidates.push({...spec,entry_without_owner_review:entry,original_source_pointer:original.digest_pointer,reader_result_path:a.stable,reader_ended_at:a.r.ended_at,current_raw_sha256:hash(current),proposed_raw_sha256:hash(proposed),proposed_edits:[literalEdit(before,proposed)],pending_root_individual_confirmation:true,release_block:spec.packet_companion_block?'Algorithm relocation requires genuine companion-related-work admission before release':null});
 }catch(e){blocked.push({...spec,block_reason:e.message});}
}
// Bind exact secondary work instructions and metadata mirrors, without applying them.
const supportNames={
 'kept-presentation-concerns':['proposal.json'],
 'clifford-kept-concerns':['contract-mirrors.json','consumer-dispositions.json'],
 'kept-information-concerns':['contract-operations.json','manifest-operations.json','coverage-operation.json','consumer-dispositions.json','integration-index.json'],
 'kept-qc-geometry-concerns':['metadata-operations.json','companion-related-work-obligation.json','consumer-dispositions.json'],
 'kept-tl-concerns':['metadata-operations.json','consumers/dispositions.json','repair.json'],
 'kept-algebra-concerns':['metadata-field-operations.json','same-owner-consumer-inventory.json'],
 'kept-voa-hall-concerns':['exact-integration-proposals.json','green-native-owner-handoff.json','additional-direct-consumer-dispositions.json','stability-definition-direct-consumer-dispositions.json','proposed/lem-finite-serre-word-form-and-classical-rank-bound.md']
};
const supporting=[];
for(const group of new Set(candidates.map(c=>c.group))){
 for(const name of supportNames[group]??[]){const file=`research/${run}-owner-step5-${group}/${name}`;need(exists(file),'Missing actual support workfile '+file);bind(bindings,file);supporting.push({group,file,raw_sha256:hash(txt(file)),role:'Exact existing owner work instruction or metadata/consumer mirror; no source preapply or reading attribution added'});}
}
write('supporting-workfiles.json',{run,files:supporting});
write('candidate-entry-proposals.json',{run,kind:'Mechanically qualified proposals only; no root scientific review is attributed',candidates,blocked,pending_packets:[{group:'kept-voa-hall-concerns',reason:exists(supplementalPath)?'Only explicit completed adapter rows above considered':'Working packet not marked complete; add exact completed adapter rows and rerun.'}],exclusions:['native repaired complex-spin item','DMC/MAC native outside helper handled separately','page/prose metadata operations are not item reader admissions']});
write('bindings-proposed.json',bindings);
// Read already-written root confirmations without inventing their scientific work or timestamps.
const confirmed=[],pending=[];
for(const c of candidates){
 const rootFiles=[`research/${run}-owner-step5-${c.group}/root-focused-review.json`,...(c.group==='kept-voa-hall-concerns'?[`research/${run}-owner-step5-${c.group}/root-green-focused-review.json`]:[])];
 let found=null;
 for(const rootFile of rootFiles){
  if(!exists(rootFile))continue;
  const doc=read(rootFile),rows=doc.individual_reviews??doc.entries??[];const index=rows.findIndex(x=>x.id===c.id);
  if(index>=0)found={rootFile,r:rows[index],pointer:'/'+(doc.individual_reviews?'individual_reviews':'entries')+'/'+index};
  else if(doc.reviewed_by==='root'&&doc.sources?.some(x=>x.id===c.id))found={rootFile,r:doc,pointer:''};
  if(found)break;
 }
 if(!found){pending.push({id:c.id,group:c.group,reason:'Actual individual or exact source-qualified root review not yet present'});continue;}
 const {rootFile,r,pointer}=found,qualifiedSource=r.sources?.find(x=>x.id===c.id);
 if(r.reviewed_by!=='root'||r.confirmed_defect!==true||Date.parse(r.reviewed_at)<Date.parse(c.reader_ended_at)||typeof r.reason!=='string'||r.reason.trim().length<40){pending.push({id:c.id,group:c.group,reason:'Individual root record missing or does not meet helper fields'});continue;}
 if((r.before_raw_sha256&&r.before_raw_sha256!==c.current_raw_sha256)||(r.proposal_raw_sha256&&r.proposal_raw_sha256!==c.proposed_raw_sha256)||(qualifiedSource?.proposed_raw_sha256&&qualifiedSource.proposed_raw_sha256!==c.proposed_raw_sha256)){pending.push({id:c.id,group:c.group,reason:'Actual root confirmation source/proposal guard differs'});continue;}
 confirmed.push({id:c.id,root_review_file:rootFile,root_review_pointer:pointer,exact_original_root_review:r,root_review_raw_sha256:hash(txt(rootFile)),source_qualified_id:qualifiedSource?.id??null});
}
write('root-confirmation-index.json',{run,confirmed,pending,note:'Original root-written records only. This generator performs no scientific review and assigns no root reading attribution.'});
write('root-selection.template.json',{run,all_reader_groups_scientifically_reviewed:pending.length===0,root_execution_authorized:false,entries:confirmed.map(({id,root_review_file,root_review_pointer})=>({id,root_review_file,root_review_pointer})),pending_ids:pending.map(x=>x.id),instructions:'Reader scientific confirmation completeness is computed only from actual root records. Root must resolve native release blocks and deliberately authorize execution in a separate selection file. No global escalation-closure claim is made.'});
write('root-selection.proposed.json',{run,kind:'Isolated exact-root-record selection proposal for root review; not an admission or execution authorization',scope:'The completed reader-science groups only; separate native findings, related-work release and creation/enrollment remain independent.',all_reader_groups_scientifically_reviewed:pending.length===0,root_execution_authorized:false,entries:confirmed.map(({id,root_review_file,root_review_pointer,root_review_raw_sha256})=>({id,root_review_file,root_review_pointer,root_review_raw_sha256,...(candidates.find(c=>c.id===id)?.release_block?{native_release_block:candidates.find(c=>c.id===id).release_block,related_work_admission_evidence_file:null}:{})})),pending_reader_ids:pending.map(x=>x.id),non_reader_routes:blocked.map(x=>({id:x.id,reason:x.block_reason})),supporting_workfiles_file:rel(path.join(out,'supporting-workfiles.json')),root_action:'Root reviews exact references, creates its actual authorized selection, and supplies genuine compiler related-work admission evidence before --confirmations assembly. No source edit or native validation is performed by this proposal.'});
// A companion proposal is separately typed; it never acquires a fabricated original concern.
const compilerDir=`research/${run}-owner-step5-actual-work-admission-requests/generated`;
const companionConfirmed=exists(`${compilerDir}/compiler-companion-entry.ROOT-CONFIRMED.json`);
const companionProposalFile=`${compilerDir}/compiler-companion-entry.${companionConfirmed?'ROOT-CONFIRMED':'INCOMPLETE'}.json`;
let companionProposal=null;
if(exists(companionProposalFile)){
 companionProposal=read(companionProposalFile);const e=companionProposal,r=e.related_work;
 need(e.source_kind==='proof-companion'&&!Object.hasOwn(e,'concern')&&!Object.hasOwn(e,'alert'),'Companion must have no fictional original reader object');
 const parent=candidates.find(c=>c.id===r.parent_id);need(parent&&parent.entry_without_owner_review.source_kind==='concern','Exact real parent concern absent');
 need(e.batch===parent.entry_without_owner_review.batch&&e.reader_batch===parent.entry_without_owner_review.reader_batch,'Companion owning reader mismatch');
 for(const [id,before,proposed]of [[e.id,r.before_file,r.proposed_file],[r.parent_id,r.parent_before_file,r.parent_proposed_file]]){
  need(txt(before)===txt(`items/${id}.md`)&&itemHashGuard(txt(before))===baseline[id]&&initial.before[id]===baseline[id],'Companion exact current source drift '+id);
  need(txt(before)!==txt(proposed),'Companion no-op '+id);bind(bindings,before);bind(bindings,proposed);
 }
 need(Object.values(initial.assignments).every(a=>a.every(x=>(typeof x==='string'?x:x.id)!==e.id)),'Companion already ordinary assigned work');
 bind(bindings,companionProposalFile);bind(bindings,e.owner_review.evidence_file);
 const adapterFile=`${compilerDir}/compiler-adapter.${companionConfirmed?'ROOT-CONFIRMED':'PROPOSAL'}.json`,adapter=read(adapterFile);bind(bindings,adapterFile);need(adapter.id===e.id&&adapter.parent_id===r.parent_id,'Companion adapter identity mismatch');
 const selection=read(path.join(out,'root-selection.proposed.json'));
 selection.proposed_admission_version=3;selection.proposed_entry_count=selection.entries.length+1;selection.non_reader_routes=selection.non_reader_routes.filter(x=>x.id!==e.id);
 selection.entries.push({id:e.id,source_kind:'proof-companion',proof_companion_entry_proposal_file:companionProposalFile,proof_companion_entry_file:companionConfirmed?companionProposalFile:null,root_scientific_read_evidence_file:e.owner_review.evidence_file,root_scientific_read_record_pointer:adapter.scientific_read_record_pointer,parent_scientific_read_record_pointer:adapter.parent_scientific_read_record_pointer,adapter_proposal_file:adapterFile,root_special_relocation_review_file:companionConfirmed?r.review_file:null,pending_actual_confirmation:companionConfirmed?[]:['necessary_related_work:true','same actual scientific_owner in parent and companion owner_review','actual special relocation/preservation root acknowledgment and timestamp','companion owner review timestamp at or after special confirmation']});
 selection.final_manifest_bindings_ready=finalMetadataBindingsReady;
 selection.root_action='Root completes the actual special relocation record and companion entry, supplies exact completed proof_companion_entry_file in its actual authorized selection, and refreshes manifest bindings after published metadata refresh. This 36-entry proposal is unbound and cannot be installed.';
 write('root-selection.proposed.json',selection);
 write('registry-v3.proposed.json',{run,version:3,kind:'Unbound incomplete registry proposal, not an admission',ordinary_reader_candidates:candidates.length,proof_companion_candidates:1,total_proposed_entries:candidates.length+1,actual_root_ordinary_confirmations:confirmed.length,companion_scientific_read_record:e.owner_review.evidence_file,companion_special_root_acknowledgment_ready:companionConfirmed,final_manifest_bindings_ready:finalMetadataBindingsReady,root_execution_authorized:false,ordinary_candidates_file:rel(path.join(out,'candidate-entry-proposals.json')),companion_proposal_file:companionProposalFile,original_findings_immutable:true});
 if(companionConfirmed){
  const special=read(r.review_file),parentFieldsFile=`${compilerDir}/compiler-parent-owner-fields.ROOT-CONFIRMED.json`,parentFields=read(parentFieldsFile);
  need(special.reviewed_by==='root'&&special.authorized_by==='owner'&&e.owner_review.necessary_related_work===true&&Date.parse(e.owner_review.reviewed_at)>=Date.parse(special.reviewed_at),'Genuine compiler special confirmation incomplete');
  need(parentFields.scientific_owner===special.scientific_owner&&e.owner_review.scientific_owner===special.scientific_owner,'Compiler scientific owners differ');
  for(const file of [r.review_file,parentFieldsFile,`${compilerDir}/compiler-bindings.ROOT-CONFIRMED.json`,`${compilerDir}/root-completion.CONFIRMED.json`])bind(bindings,file);
  const entries=confirmed.map(f=>{const c=candidates.find(x=>x.id===f.id),q=f.exact_original_root_review;return {...c.entry_without_owner_review,owner_review:{reviewed_by:q.reviewed_by,confirmed_defect:q.confirmed_defect,reviewed_at:q.reviewed_at,reason:q.reason,evidence_file:f.root_review_file,proposed_edits:c.proposed_edits}};});
  for(const f of confirmed)bind(bindings,f.root_review_file);
  const pe=entries.find(x=>x.id===r.parent_id);Object.assign(pe.owner_review,{scientific_owner:parentFields.scientific_owner,full_current_source_read:parentFields.full_current_source_read,source_raw_sha256:parentFields.source_raw_sha256});
  entries.push(e);need(entries.length===36&&new Set(entries.map(x=>x.id)).size===36,'Expected exact36 confirmed entry payload');
  write('root-confirmed-36-entry-proposal.json',{run,proposed_admission_version:3,kind:'Complete actual root-confirmed entry payload; uninstalled and awaiting root authorization/final metadata bindings',root_execution_authorized:false,final_manifest_bindings_ready:finalMetadataBindingsReady,observed_at:stamp(),entry_count:entries.length,entries,bindings,creation_state:{file:rel(path.join(out,'creation-state.json')),captured_at:captured},owner_gate_request:{file:rel(path.join(out,'owner-gate-request.json')),id:request.id},note:'All owner review facts are copied from actual root records. This is not a protocol admission envelope and has no fabricated authorization or final recording time. Current manifests are bound and readiness is checked against all81 actual final native metadata-history archives; root owns actual authorization, assembly and installation.'});
  selection.entries=selection.entries.map(x=>x.id===r.parent_id?{...x,native_release_block:null,related_work_admission_evidence_file:r.review_file,parent_owner_fields_file:parentFieldsFile}:x);
  selection.root_action='All36 actual root-confirmed entries are prepared in root-confirmed-36-entry-proposal.json. Final manifest readiness is derived from exact equality to all81 actual final native metadata-history archives. Root deliberately authorizes its actual selection, then assembles/installs; no canonical admission or native check has occurred.';
  write('root-selection.proposed.json',selection);
 }
 write('bindings-proposed.json',bindings);
}
const args=process.argv.slice(2),ci=args.indexOf('--confirmations');
if(ci>=0){
 const confirmationPath=args[ci+1];need(confirmationPath&&rel(confirmationPath).startsWith('research/'),'Supply actual research root selection');const selections=read(confirmationPath);need(selections.run===run&&selections.all_reader_groups_scientifically_reviewed===true&&selections.root_execution_authorized===true&&selections.final_manifest_bindings_ready===true&&Array.isArray(selections.entries),'Root must explicitly confirm reader scientific completion, current final manifest binding readiness and authorize this assembly; global escalation closure is not inferred');
 const selectedIds=new Set(selections.entries.map(x=>x.id));
 const exclusions=selections.excluded_candidates??[];
 for(const c of candidates)if(!selectedIds.has(c.id)){
  const exclusion=exclusions.find(x=>x.id===c.id);
  need(exclusion&&typeof exclusion.evidence_file==='string'&&typeof exclusion.reason==='string'&&exclusion.reason.trim().length>=40&&txt(exclusion.evidence_file).trim().length>=80,'Unresolved candidate cannot silently disappear: '+c.id);
  bind(bindings,exclusion.evidence_file);
 }
 const entries=[];
 for(const select of selections.entries){
  if(select.source_kind==='proof-companion'){
   need(select.proof_companion_entry_file,'Actual completed companion entry required');const e=read(select.proof_companion_entry_file),r=e.related_work,review=read(r.review_file);
   need(e.id===select.id&&e.source_kind==='proof-companion'&&e.owner_review?.necessary_related_work===true&&e.owner_review.reviewed_by==='root','Actual companion root acknowledgment missing');
   need(review.reviewed_by==='root'&&review.authorized_by==='owner'&&/^\/root\/[a-z0-9_]+$/.test(review.scientific_owner)&&Number.isFinite(Date.parse(review.reviewed_at))&&Date.parse(e.owner_review.reviewed_at)>=Date.parse(review.reviewed_at),'Actual special root confirmation/time missing');
   need(e.owner_review.scientific_owner===review.scientific_owner&&e.owner_review.full_current_source_read===true&&e.owner_review.source_raw_sha256===hash(txt(r.before_file)),'Actual companion owner/full current read guard missing');
   for(const file of [select.proof_companion_entry_file,r.parent_before_file,r.before_file,r.parent_proposed_file,r.proposed_file,r.review_file,e.owner_review.evidence_file])bind(bindings,file);
   need(txt(r.before_file)===txt(`items/${e.id}.md`)&&itemHashGuard(txt(r.before_file))===baseline[e.id],'Companion source changed');entries.push(e);continue;
  }
  const c=candidates.find(x=>x.id===select.id);need(c,'Unknown/unqualified target '+select.id);need(!c.release_block||selectedIds.has(companionProposal?.id),'Companion admission remains blocked '+select.id);
  need(typeof select.root_review_file==='string'&&typeof select.root_review_pointer==='string','Actual root evidence pointer required');
  let confirm=read(select.root_review_file);for(const key of select.root_review_pointer.split('/').slice(1))confirm=confirm[key.replace(/~1/g,'/').replace(/~0/g,'~')];
  need((confirm.id===select.id||confirm.sources?.some(x=>x.id===select.id))&&confirm.reviewed_by==='root'&&confirm.confirmed_defect===true&&Date.parse(confirm.reviewed_at)>=Date.parse(c.reader_ended_at)&&typeof confirm.reason==='string'&&confirm.reason.trim().length>=40&&txt(select.root_review_file).trim().length>=80,'Actual individual root scientific confirmation missing '+select.id);
  const qualifiedSource=confirm.sources?.find(x=>x.id===select.id);
  need((!confirm.before_raw_sha256||confirm.before_raw_sha256===c.current_raw_sha256)&&(!confirm.proposal_raw_sha256||confirm.proposal_raw_sha256===c.proposed_raw_sha256)&&(!qualifiedSource?.proposed_raw_sha256||qualifiedSource.proposed_raw_sha256===c.proposed_raw_sha256),'Root source/proposal review stale '+select.id);
  const owner_review={reviewed_by:confirm.reviewed_by,confirmed_defect:confirm.confirmed_defect,reviewed_at:confirm.reviewed_at,reason:confirm.reason,evidence_file:select.root_review_file,proposed_edits:c.proposed_edits};
  bind(bindings,select.root_review_file);if(select.related_work_admission_evidence_file)bind(bindings,select.related_work_admission_evidence_file);
  entries.push({...c.entry_without_owner_review,owner_review});
 }
 for(const e of entries.filter(x=>x.source_kind==='proof-companion')){
  const review=read(e.related_work.review_file),parent=entries.find(x=>x.id===e.related_work.parent_id);
  need(parent&&parent.source_kind==='concern'&&review.parent_before_raw_sha256===hash(txt(e.related_work.parent_before_file)),'Exact original parent missing');
  need(review.parent_full_source_read===true&&review.companion_full_source_read===true&&review.native_execution_coverage_adopted===false&&review.native_full_read_adopted===false,'Actual special full-source reading/coverage fields missing');
  Object.assign(parent.owner_review,{scientific_owner:review.scientific_owner,full_current_source_read:review.parent_full_source_read,source_raw_sha256:review.parent_before_raw_sha256});
 }
 need(entries.length>0&&new Set(entries.map(x=>x.id)).size===entries.length,'Empty/duplicate final selection');bind(bindings,confirmationPath);
 const envelope={version:entries.some(e=>e.source_kind==='proof-companion')?3:2,kind:'owner-confirmed-step4-reader-concerns',run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,original_count:frontier.ids.length,recorded_at:stamp(),creation_state:{file:rel(path.join(out,'creation-state.json')),captured_at:captured},owner_gate_request:{file:rel(path.join(out,'owner-gate-request.json')),id:request.id},entries,bindings};
 write('admission.proposed.json',envelope);console.log('Isolated admission.proposed.json assembled from exact original root confirmations. NOT installed or natively validated.');
}
console.log(JSON.stringify({handoffs:handoffs.length,existing_ordinary_fibonacci_targets:fibRoutes.length,qualified_proposals:candidates.length,proof_companion_proposal:companionProposal?1:0,total_proposed_registry_entries:candidates.length+(companionProposal?1:0),root_confirmed:confirmed.length,pending_root_reviews:pending.length,blocked:blocked.map(x=>({id:x.id,reason:x.block_reason})),root_selection_supplied:ci>=0},null,2));
