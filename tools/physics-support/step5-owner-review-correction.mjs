// A malformed native review stamp is corrected by a fresh read-only native
// review, never by editing the historical report or guessing a digest.
import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { itemHashGuard } from './item-hash.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';

const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const digest=value=>hash(JSON.stringify(value));
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const need=(ok,why)=>{if(!ok)throw Error('native review correction: '+why);};
const sha=value=>/^[a-f0-9]{64}$/.test(value??'');
const reason=value=>typeof value==='string'&&value.trim().length>=40;
const evidence=row=>row&&reason(row.reason)&&row.uncertain===false&&Array.isArray(row.source_urls)
  &&row.source_urls.every(url=>typeof url==='string'&&/^https:\/\//.test(url))&&(row.source_urls.length>0||row.familiar===true);
const dir=(root,run)=>join(root,'research',run+'-step5-v2');
export const reviewCorrectionPhase='review-correction-initial';
export const reviewCorrectionProgressPath=(root,run)=>join(dir(root,run),reviewCorrectionPhase+'-1-progress.json');
const label='step5-v2-'+reviewCorrectionPhase+'-r1-u1';
const artifact=(root,run,suffix)=>join(dir(root,run),label+suffix);
function binder(root,run,inputs){
  const research=realpathSync(join(root,'research'));
  return ref=>{
    need(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&sha(ref.sha256),'invalid evidence reference');
    const path=resolve(root,ref.path),rel=relative(research,realpathSync(path));
    need(!isAbsolute(rel)&&!rel.startsWith('..')&&rel.startsWith(run+'-'),'evidence escapes run-local research');
    need(hash(readFileSync(path))===ref.sha256,'bound evidence changed: '+ref.path);inputs[path]=ref.sha256;return path;
  };
}
export function reviewCorrectionSources(root){
  const paths=[];
  const visit=path=>{if(!existsSync(path))return;for(const entry of readdirSync(path,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
    need(!entry.isSymbolicLink(),'source symlink is not a regular carrier');const child=join(path,entry.name);
    if(entry.isDirectory())visit(child);else if(entry.isFile()&&entry.name.endsWith('.md'))paths.push(child);
  }};
  visit(join(root,'items'));visit(join(root,'library'));
  return Object.fromEntries(paths.sort().map(path=>[relative(root,path),hash(readFileSync(path))]));
}
export function reviewCorrectionProtected(root,run){
  const paths=readdirSync(dir(root,run)).filter(name=>!name.startsWith(reviewCorrectionPhase+'-')&&!name.startsWith('step5-v2-'+reviewCorrectionPhase+'-')
    &&(name.endsWith('.json')||name.endsWith('.task.md'))).map(name=>join(dir(root,run),name));
  for(const name of readdirSync(join(root,'research')))if(name.startsWith(run+'-batch-')&&/^[1-9][0-9]*\.(?:pages|proof-contracts)\.json$/.test(name.slice((run+'-batch-').length)))paths.push(join(root,'research',name));
  for(const name of ['defect-ledger.jsonl',run+'-judge.jsonl',run+'-adjudications.jsonl']){const path=join(root,'research',name);if(existsSync(path))paths.push(path);}
  return Object.fromEntries(paths.sort().map(path=>[relative(root,path),hash(readFileSync(path))]));
}
export function reviewCorrectionRequest(root,run,phase,round){
  if(phase!=='initial'||round!==1)return null;
  root=resolve(root);const workflow=dir(root,run),pointerPath=join(workflow,'owner-review-correction-request.json');
  if(!existsSync(pointerPath))return null;
  const pointer=read(pointerPath),inputs={},bound=binder(root,run,inputs);
  need(pointer.version===1&&pointer.run===run&&(!pointer.state_dir||pointer.state_dir==='.physics-autopilot/'+run),'invalid root advertisement');
  const requestPath=bound(pointer.request),request=read(requestPath);
  need(dirname(requestPath)===workflow&&/^owner-review-correction-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))&&requestPath!==pointerPath,'request is not immutable workflow evidence');
  need(request.version===1&&request.run===run&&request.reviewer==='/root'&&request.phase==='initial'&&request.round===1
    &&typeof request.subject==='string'&&/^[1-9][0-9]*$/.test(request.original_unit??''),'invalid exact root review request');
  const state=read(join(root,'.physics-autopilot',run,'state.json'));
  need(state.run===run&&state.stage==='5.1-adjudicate'&&!state.finishedAt&&!state.stages?.['5.1-adjudicate']?.doneAt,'outside initial live pre-collection stage');
  need(state.dispatches&&typeof state.dispatches==='object'&&!Array.isArray(state.dispatches)&&Object.values(state.dispatches).every(row=>row&&(!row.startedAt||row.endedAt)),'native writers have not drained');
  need(!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'shared metadata writer active');
  need(!existsSync(join(workflow,'initial-1-collected.json'))&&!existsSync(join(workflow,'certification-impact-initial-1.json')),'parent collection or certification is immutable');
  if(existsSync(join(workflow,'certification.json'))){const cert=read(join(workflow,'certification.json'));need(cert.phase!=='impact-initial'||cert.round!==1,'initial round is already certified');}
  const retain=path=>bound({path:relative(root,path),sha256:hash(readFileSync(path))});
  const frontierPath=retain(join(workflow,'frontier.json')),frontier=read(frontierPath);validateFrontier(frontier);
  need(frontier.run===run&&frontier.batches.find(row=>row.id===request.original_unit)?.items.includes(request.subject),'subject is not in its frozen original batch');
  const packPath=bound(request.original_pack),reportPath=bound(request.original_report),taskPath=bound(request.original_task),dispatchPath=bound(request.original_dispatch);
  const originalLabel='step5-v2-initial-r1-u'+request.original_unit;
  need(packPath===join(workflow,'initial-1.json')&&reportPath===join(workflow,originalLabel+'.json')&&taskPath===join(workflow,originalLabel+'.task.md')
    &&dispatchPath===join(root,'research',run+'-dispatch','alpha-adjudicate-'+originalLabel+'.result.json'),'wrong original native artifacts');
  const pack=read(packPath),report=read(reportPath),dispatch=read(dispatchPath),id=request.subject;
  need(pack.version===2&&pack.run===run&&pack.phase==='initial'&&pack.round===1&&pack.repair_scope==='frontier'
    &&report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===request.original_unit
    &&report.input_sha256===digest(pack)&&readFileSync(taskPath,'utf8').includes(packPath),'original report/task is not about its frozen pack');
  need(dispatch.ok===true&&dispatch.run===run&&dispatch.role==='alpha-adjudicate'&&dispatch.label===originalLabel&&dispatch.model===MODELS.sol61.id
    &&dispatch.provider_effort==='high'&&equal(dispatch.covers,[request.original_unit])&&typeof dispatch.ended_at==='string'&&!Number.isNaN(Date.parse(dispatch.ended_at)),'original referrer lacks completed native authority');
  const tuples=pack.assignments?.[request.original_unit]?.filter(row=>row.id===id)??[];
  need(tuples.length===1&&equal(tuples[0],request.original_tuple)&&request.original_tuple.keep===false
    &&pack.rejected?.filter(row=>equal(row,request.original_tuple)).length===1,'not the actual original rejected tuple');
  const decisions=report.decisions?.filter(row=>row.id===id)??[],reviews=report.reviews?.filter(row=>row.id===id)??[];
  need(decisions.length===1&&decisions[0].outcome==='false_positive'&&evidence(decisions[0])&&decisions[0].model===request.original_tuple.model
    &&decisions[0].context_sha256===request.original_tuple.context_sha256,'original false-positive decision must remain exact');
  need(reviews.length===1&&equal(reviews[0],request.original_review)&&reviews[0].disposition==='unaffected'&&evidence(reviews[0])
    &&/^[a-f0-9]{65}$/.test(reviews[0].review_context_sha256??''),'only an exact 65-hex malformed unaffected review stamp is eligible');
  const sourcePath=join(root,'items',id+'.md'),beforePath=bound(request.before_source),before=readFileSync(beforePath),source=readFileSync(sourcePath);
  need(sha(request.before_content_sha256)&&sha(request.before_raw_sha256)&&hash(before)===request.before_raw_sha256&&source.equals(before)
    &&itemHashGuard(before.toString('utf8'))===request.before_content_sha256&&pack.before?.[id]===request.before_content_sha256
    &&reviews[0].post_sha256===request.before_content_sha256,'source changed or original unchanged review guard differs');
  const ownerPackPath=join(workflow,'owner-finding-correction-initial-1.json');
  if(existsSync(ownerPackPath)){const ownerPack=read(retain(ownerPackPath));need(ownerPack.before?.[id]===request.before_content_sha256&&!Object.values(ownerPack.assignments??{}).flat().includes(id),'subject overlaps a source-repair correction');}
  const diagnosis=read(bound(request.diagnosis));
  need(diagnosis.run===run&&diagnosis.reviewer==='/root'&&diagnosis.subject===id&&diagnosis.original_report===relative(root,reportPath)
    &&equal(diagnosis.original_review,request.original_review)&&diagnosis.source_repair_required===false&&diagnosis.requires_fresh_native_review===true
    &&diagnosis.original_report_edited===false&&diagnosis.before_content_sha256===request.before_content_sha256,'missing genuine exact review-transcription diagnosis');
  const records=read(bound(request.runtime_finding?.record)),record=Array.isArray(records)&&records.length===1?records[0]:records;
  need(record?.run===run&&record.subject===id&&record.defect_id===request.runtime_finding.defect_id&&record.class==='breaking-runtime'
    &&record.subclass==='prompt-transcription'&&record.caught_by_role==='owner'&&record.disposition==='open','not the exact OPEN runtime transcription finding');
  const ledgerBeforePath=bound(request.ledger_before),ledgerBefore=readFileSync(ledgerBeforePath,'utf8'),ledger=readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8');
  need(ledgerBefore.endsWith('\n')&&ledger.startsWith(ledgerBefore),'canonical ledger does not retain its exact genuine prefix');
  const added=ledger.slice(ledgerBefore.length).split(/\r?\n/).filter(Boolean).map(JSON.parse);
  need(added.length===1&&equal(added[0],record)&&!ledgerBefore.split(/\r?\n/).filter(Boolean).map(JSON.parse).some(row=>row.defect_id===record.defect_id
    ||(Array.isArray(row.supersedes)?row.supersedes.includes(record.defect_id):row.supersedes===record.defect_id)),'canonical ledger is not precisely the prefix plus this one runtime row');
  return {request:{path:requestPath,sha256:pointer.request.sha256},payload:request,evidence:inputs,record,ledger_before_sha256:request.ledger_before.sha256};
}

// The page's protected historical ledger may evolve by exactly this separately
// authenticated runtime finding. No other appended row or old-byte edit fits.
export function reviewCorrectionLedgerAppend(root,run,expected){
  const context=reviewCorrectionRequest(root,run,'initial',1);
  return context!==null&&context.ledger_before_sha256===expected;
}
export function reviewCorrectionCompletion(root,run,context,currentReview){
  const inputs={...context.evidence},bound=binder(root,run,inputs),progressPath=reviewCorrectionProgressPath(root,run),progress=read(progressPath);
  need(progress.version===1&&progress.run===run&&equal(progress.request,context.request),'review progress differs from frozen authority');
  for(const [path,value]of Object.entries(progress.evidence??{}))bound({path:relative(root,path),sha256:value});
  for(const [path,value]of Object.entries(context.evidence))need(progress.evidence?.[path]===value,'progress omits original authority');
  const packPath=join(dir(root,run),reviewCorrectionPhase+'-1.json'),taskPath=artifact(root,run,'.task.md');
  need(sha(progress.evidence[packPath])&&sha(progress.evidence[taskPath]),'review pack/task are not frozen');
  const pack=read(packPath),reportPath=artifact(root,run,'.json'),report=read(reportPath),request=context.payload;
  need(pack.version===1&&pack.run===run&&pack.phase===reviewCorrectionPhase&&pack.round===1&&pack.repair_scope==='read-only-one-malformed-review'
    &&equal(pack.request,context.request)&&equal(pack.payload,request),'wrong frozen read-only assignment');
  need(equal(pack.before_sources,reviewCorrectionSources(root)),'source changed during read-only review correction');
  const protectedNow=reviewCorrectionProtected(root,run),prefix=relative(root,dir(root,run))+'/';
  need(Object.entries(pack.before_protected).every(([path,value])=>protectedNow[path]===value)
    &&equal(Object.keys(protectedNow).filter(path=>!path.startsWith(prefix)),Object.keys(pack.before_protected).filter(path=>!path.startsWith(prefix))),
    'original evidence, tuples, ledger or owning metadata changed during read-only review');
  need(report.version===1&&report.run===run&&report.phase===reviewCorrectionPhase&&report.round===1&&String(report.unit)==='1'&&report.input_sha256===digest(pack)
    &&Array.isArray(report.reviews)&&report.reviews.length===1&&['decisions','created_items','downstream'].every(field=>Array.isArray(report[field])&&report[field].length===0),'read-only child cannot author ordinary decisions, sources or prerequisites');
  const review=report.reviews[0];
  need(review.id===request.subject&&review.disposition==='unaffected'&&evidence(review)&&sha(review.review_context_sha256)
    &&review.post_sha256===request.before_content_sha256&&review.post_sha256===currentReview?.post_sha256
    &&review.review_context_sha256===currentReview?.review_context_sha256,'missing actual fresh unchanged-source native review');
  const resolutions=report.root_finding_resolutions;
  need(Array.isArray(resolutions)&&resolutions.length===1&&resolutions[0].defect_id===context.record.defect_id&&resolutions[0].status==='fixed'
    &&equal(resolutions[0].subjects,[request.subject])&&evidence(resolutions[0]),'missing typed runtime finding resolution');
  const dispatchPath=join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json'),dispatch=read(dispatchPath);
  need(dispatch.ok===true&&dispatch.run===run&&dispatch.role==='alpha-repair'&&dispatch.label===label&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort==='high'
    &&equal(dispatch.covers,[reviewCorrectionPhase+':1'])&&typeof dispatch.ended_at==='string'&&!Number.isNaN(Date.parse(dispatch.ended_at)),'read-only child lacks completed native Sol high authority');
  const supporting=report.supporting_evidence??{};need(supporting&&typeof supporting==='object'&&!Array.isArray(supporting),'invalid supporting evidence');
  for(const [path,value]of Object.entries(supporting))bound({path:relative(root,isAbsolute(path)?path:resolve(root,path)),sha256:value});
  for(const path of [progressPath,reportPath,dispatchPath])bound({path:relative(root,path),sha256:hash(readFileSync(path))});
  return {version:1,run,phase:reviewCorrectionPhase,round:1,request:context.request,subject:request.subject,original_unit:request.original_unit,
    original_review:request.original_review,original_tuple:request.original_tuple,native_review:review,
    effective_review:{...request.original_review,review_context_sha256:review.review_context_sha256},
    root_finding_resolution:resolutions[0],evidence:inputs,source_changes:[],tuple_changes:[],field:'review_context_sha256'};
}
export function verifyReviewCorrectionReplay(root,run,parent){
  const completion=parent.native_review_correction;if(!completion)return;
  const path=join(dir(root,run),reviewCorrectionPhase+'-1-collected.json'),packPath=join(dir(root,run),reviewCorrectionPhase+'-1.json');
  need(parent.evidence?.[path]===hash(readFileSync(path))&&equal(read(path),completion)
    &&parent.evidence[packPath]===hash(readFileSync(packPath)),'parent lost its genuine immutable review correction');
  const requestPath=completion.request.path;need(parent.evidence[requestPath]===completion.request.sha256
    &&hash(readFileSync(requestPath))===completion.request.sha256,'parent lost its exact original review request');
  const request=read(requestPath),recordPath=resolve(root,request.runtime_finding.record.path);
  need(parent.evidence[recordPath]===request.runtime_finding.record.sha256&&hash(readFileSync(recordPath))===request.runtime_finding.record.sha256,'parent lost its original runtime finding');
  const data=read(recordPath),record=Array.isArray(data)&&data.length===1?data[0]:data;
  const rows=readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
    .filter(row=>row.defect_id===record.defect_id);
  need(rows.length===1&&equal(rows[0],record),'original runtime finding history was removed, duplicated or rewritten');
  const state=read(join(root,'.physics-autopilot',run,'state.json'));need(state.run===run,'wrong replay state');
  if(state.stage==='5.1-adjudicate'&&!state.stages?.['5.1-adjudicate']?.doneAt)
    need(equal(read(packPath).before_sources,reviewCorrectionSources(root)),'current source changed after read-only review-parent collection');
}
