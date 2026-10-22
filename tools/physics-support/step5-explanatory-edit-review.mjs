// Explicitly authorized, already-applied Remarks edits get actual fresh native
// review. This never licenses source editing or invents an original judge tuple.
import {existsSync,readFileSync,writeFileSync,readdirSync,realpathSync} from 'node:fs';
import {join,resolve,relative,isAbsolute,basename} from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as equal} from 'node:util';
import {itemHashGuard} from './item-hash.mjs';
import {validateFrontier} from './step5-rounds.mjs';
import {MODELS} from './models.mjs';

const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const digest=value=>hash(JSON.stringify(value));
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const need=(ok,why)=>{if(!ok)throw Error('explanatory edit review: '+why);};
const reason=value=>typeof value==='string'&&value.trim().length>=40;
const sha=value=>/^[a-f0-9]{64}$/.test(value??'');
const evidence=row=>row&&reason(row.reason)&&row.uncertain===false&&Array.isArray(row.source_urls)
  &&row.source_urls.every(url=>typeof url==='string'&&/^https:\/\//.test(url))&&(row.source_urls.length>0||row.familiar===true);
const authenticated=new WeakSet();
export const explanatoryReviewPhase='explanatory-review-initial';
const directory=(root,run)=>join(root,'research',run+'-step5-v2');
const label='step5-v2-'+explanatoryReviewPhase+'-r1-u1';
const artifact=(root,run,suffix)=>join(directory(root,run),label+suffix);
export const explanatoryReviewProgressPath=(root,run)=>join(directory(root,run),explanatoryReviewPhase+'-1-progress.json');
export const isExplanatoryReviewCompletion=value=>value!==null&&typeof value==='object'&&authenticated.has(value);
const immutable=(path,value)=>{const bytes=JSON.stringify(value,null,2)+'\n';if(existsSync(path))need(readFileSync(path,'utf8')===bytes,'immutable artifact differs: '+path);else writeFileSync(path,bytes,{flag:'wx'});};
function binder(root,run,inputs){
 const research=realpathSync(join(root,'research'));
 return ref=>{
  need(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&sha(ref.sha256),'invalid evidence reference');
  const file=resolve(root,ref.path),rel=relative(research,realpathSync(file));
  need(!isAbsolute(rel)&&!rel.startsWith('..')&&rel.startsWith(run+'-'),'evidence escapes run-local research');
  need(hash(readFileSync(file))===ref.sha256,'bound evidence changed: '+ref.path);inputs[file]=ref.sha256;return file;
 };
}
/** Exact non-Remarks prefix and TikZ suffix preserve definitions, claims,
 * physical qualifications, proofs, dependencies, metadata and diagram bytes.
 * No new heading, fence or wikilink can hide inside the explanatory prose. */
export function remarksOnly(before,current){
 const split=text=>{
  need((text.match(/^## Remarks\s*$/gm)??[]).length===1,'requires one exact Remarks section');
  const match=/^([\s\S]*?\n## Remarks\n\n)([\s\S]*?)(\n```tikz\n[\s\S]*)$/.exec(text);
  need(match&&!/^[ \t]{0,3}#{1,6}(?:[ \t]|$)|^[ \t]*(?:`{3,}|~{3,})|\[\[|\][ \t]*(?:\(|\[)|^[ \t]*\[[^\]\n]+\]:|<https?:\/\//m.test(match[2]),'requires plain explanation before the existing TikZ diagram');
  return match;
 };
 const a=split(before),b=split(current);
 need(a[1]===b[1]&&a[3]===b[3]&&a[2]!==b[2],'only existing Remarks explanatory prose may change');
}
function guards(root,run){
 const dir=directory(root,run),paths=readdirSync(dir).filter(name=>!name.startsWith(explanatoryReviewPhase+'-')&&!name.startsWith('step5-v2-'+explanatoryReviewPhase+'-')
  &&(name.endsWith('.json')||name.endsWith('.task.md'))).map(name=>join(dir,name));
 const research=join(root,'research');
 for(const name of readdirSync(research))if(name.startsWith(run+'-batch-')&&/^[1-9][0-9]*\.(?:pages|proof-contracts)\.json$/.test(name.slice((run+'-batch-').length)))paths.push(join(research,name));
 for(const name of ['defect-ledger.jsonl',run+'-judge.jsonl',run+'-judge-adjudications.jsonl',run+'-proof-contracts.json',run+'-pages.json']){const path=join(research,name);if(existsSync(path))paths.push(path);}
 return Object.fromEntries(paths.sort().map(path=>[relative(root,path),hash(readFileSync(path))]));
}
export function explanatoryReviewRequest(root,run,{verificationRefresh=false}={}){
 root=resolve(root);const dir=directory(root,run),pointerPath=join(dir,'owner-explanatory-edit-review-request.json');
 if(!existsSync(pointerPath))return null;
 const pointer=read(pointerPath),inputs={},bound=binder(root,run,inputs);
 need(pointer.version===1&&pointer.run===run,'invalid explicit root advertisement');
 const requestPath=bound(pointer.request),request=read(requestPath);
 need(resolve(requestPath,'..')===resolve(dir)&&/^owner-explanatory-edit-review-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
  &&requestPath!==pointerPath,'request must be immutable workflow evidence');
 need(request.version===1&&request.run===run&&request.phase==='initial'&&request.round===1&&request.reviewer==='/root'
  &&request.kind==='user-authorized-preapplied-remarks-edit'&&request.source_edit_authority===false
  &&request.native_execution_coverage_adopted===false&&reason(request.reason)
  &&Array.isArray(request.entries)&&request.entries.length>0,'invalid user-side-edit review authority');
 bound(request.user_authorization);
 const frontierPath=join(dir,'frontier.json'),frontier=read(frontierPath);validateFrontier(frontier);need(frontier.run===run,'wrong frozen frontier');
 const packPath=join(dir,'initial-1.json'),pack=read(packPath),baselinePath=join(root,'research',run+'-step5-auditor-baseline.json'),baseline=read(baselinePath);
 need(baseline.version===1&&baseline.run===run&&pack.run===run&&pack.phase==='initial'&&pack.round===1&&pack.repair_scope==='frontier'
  &&equal(pack.frontier_ids,frontier.ids),'wrong immutable original pack');
 const assigned=new Set(Object.values(pack.assignments).flat().map(row=>row.id)),seen=new Set();
 const importsPath=join(root,'research/math-imports.json'),imports=new Set(existsSync(importsPath)?read(importsPath).files.map(row=>row.path):[]);
 for(const entry of request.entries){
  const id=entry.id;
  need(typeof id==='string'&&frontier.ids.includes(id)&&!assigned.has(id)&&!seen.has(id)&&!imports.has('items/'+id+'.md'),
   'subject must be unique, unassigned, local and inside frozen frontier');seen.add(id);
  const before=readFileSync(bound(entry.before_source),'utf8'),current=readFileSync(bound(entry.current_source),'utf8');
  need(/^id:\s*["']?([^\n"']+)["']?\s*$/m.exec(before)?.[1]===id&&/^status:\s*draft\s*$/m.test(before)
   &&baseline.item_carriers?.[id]?.item_file_sha256===hash(before)&&baseline.item_carriers[id].guard_sha256===pack.before[id]
   &&itemHashGuard(before)===pack.before[id]&&itemHashGuard(current)!==pack.before[id]
   &&(verificationRefresh?itemHashGuard(readFileSync(join(root,'items',id+'.md'),'utf8'))===itemHashGuard(current)
    :readFileSync(join(root,'items',id+'.md'),'utf8')===current),'wrong authenticated before/current draft carrier');
  remarksOnly(before,current);
 }
 for(const path of [frontierPath,packPath,baselinePath,pointerPath])inputs[path]=hash(readFileSync(path));
 return {request:{path:requestPath,sha256:pointer.request.sha256},payload:request,evidence:inputs};
}
function stageDrained(root,run){
 const state=read(join(root,'.physics-autopilot',run,'state.json'));
 need(state.run===run&&state.stage==='5.1-adjudicate'&&!state.finishedAt&&!state.stages?.['5.1-adjudicate']?.doneAt,'outside unfinished initial stage');
 need(state.dispatches&&typeof state.dispatches==='object'&&!Array.isArray(state.dispatches)
  &&Object.values(state.dispatches).every(row=>row&&(!row.startedAt||row.endedAt)),'native source writers have not drained');
 need(!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'shared metadata writer active');
}
export function prepareExplanatoryReview(root,run,phase,round){
 if(phase!=='initial'||round!==1)return null;
 const sealed=existsSync(join(directory(root,run),explanatoryReviewPhase+'-1-collected.json'));
 const context=explanatoryReviewRequest(root,run,{verificationRefresh:sealed});if(!context)return null;
 stageDrained(root,run);const dir=directory(root,run),progressPath=explanatoryReviewProgressPath(root,run);
 need(!existsSync(join(dir,'initial-1-collected.json'))&&!existsSync(join(dir,'certification-impact-initial-1.json')),'parent collection/certification already immutable');
 if(existsSync(progressPath)){const prior=read(progressPath);need(equal(prior.request,context.request),'review request changed');return prior;}
 const ids=context.payload.entries.map(row=>row.id),pack={version:1,run,phase:explanatoryReviewPhase,round:1,unit:'1',
  repair_scope:'read-only-user-side-edit-adoption',request:context.request,payload:context.payload,before_protected:guards(root,run)};
 const packPath=join(dir,explanatoryReviewPhase+'-1.json'),taskPath=artifact(root,run,'.task.md');
 immutable(packPath,pack);
 const task=[
  '# Fresh native review of an explicitly authorized user explanatory edit',
  'Read CLAUDE.md, WORKFLOW.md and '+packPath+'. Native phase '+explanatoryReviewPhase+', round1, unit1.',
  'READ ONLY. Assigned current sources: '+ids.join(', ')+'. The user already changed these Remarks explanations. Do not revert or edit any source, diagram, metadata, contract, original pack/report, ledger, tool or state.',
  'Authenticate the preserved original and exact current sources. Their complete non-Remarks prefix and TikZ suffix must be byte-identical. Examine the changed explanations mathematically, their consistency with the actual definition/example and diagram, and the actual current suppliers. Retain rich claims, empirical qualifications and rigorous definitions. Verify actual current context. Reuse genuine completed proof review only with attribution; an unchanged diagram-independent proof is not an authoring task.',
  'Run the focused precheck/rendercheck/proof-layout as appropriate for these exact source paths; record actual results as structured checks. No software tests or broader corpus checks. Report unresolved uncertainty or required source repairs; this read-only continuation cannot provide them.',
  'Return JSON {version:1,run:"'+run+'",phase:"'+explanatoryReviewPhase+'",round:1,unit:"1",input_sha256:"'+digest(pack)+'",decisions:[],created_items:[],downstream:[],reviews:[...],adoptions:[...],supporting_evidence:{},checks:[...]}.',
  'One reviews row per assigned ID: {id,disposition:"unaffected",post_sha256,review_context_sha256,reason,uncertain:false,source_urls:[],familiar:true}. After actual review obtain current stamps from node tools/physics-support/step5-workflow.mjs review-contexts --run '+run+' --items '+ids.join(',')+'. Never fabricate source reading or hashes.',
  'One adoptions row per assigned ID: {id,disposition:"adopted",origin:"user-authorized-side-edit",reason,uncertain:false,source_urls:[],familiar:true}. Every reason must contain at least40characters of specific actual checks. Bind every immutable research evidence file actually read by raw SHA256 in supporting_evidence. No original judge tuple, adjudication, native authorship, independent acceptance, certificate or gate waiver is claimed.',
  ''
 ].join('\n');
 if(existsSync(taskPath))need(readFileSync(taskPath,'utf8')===task,'immutable native task changed');else writeFileSync(taskPath,task,{flag:'wx'});
 const evidence={...context.evidence,[packPath]:hash(readFileSync(packPath)),[taskPath]:hash(readFileSync(taskPath))};
 const progress={version:1,run,phase:'initial',round:1,correction_phase:explanatoryReviewPhase,request:context.request,subjects:ids,evidence};
 immutable(progressPath,progress);return progress;
}
export function explanatoryReviewCompletion(root,run,currentReviews){
 const sealedPath=join(directory(root,run),explanatoryReviewPhase+'-1-collected.json');
 if(existsSync(sealedPath)){
  const saved=read(sealedPath),{sha256,...payload}=saved,context=explanatoryReviewRequest(root,run,{verificationRefresh:true});
  need(sha256===digest(payload),'sealed native review payload changed');
  need(saved.run===run&&saved.phase===explanatoryReviewPhase&&saved.round===1&&equal(saved.request,context.request),'wrong sealed native review');
  for(const [path,expected]of Object.entries(saved.evidence))need(hash(readFileSync(path))===expected,'sealed native review evidence changed: '+path);
  const reportPath=artifact(root,run,'.json'),report=read(reportPath),ids=context.payload.entries.map(row=>row.id).sort();
  need(equal(Object.keys(saved.guards).sort(),ids)&&equal(saved.reviews,report.reviews)&&equal(saved.adoptions,report.adoptions)
    &&saved.evidence[reportPath]===hash(readFileSync(reportPath)),'sealed receipt lost exact actual native reviews or target guards');
  for(const entry of context.payload.entries){const expected=itemHashGuard(readFileSync(resolve(root,entry.current_source.path),'utf8'));
    need(saved.guards[entry.id]===expected&&itemHashGuard(readFileSync(join(root,'items',entry.id+'.md'),'utf8'))===expected,'adopted source changed: '+entry.id);}

  // The review was actually current when sealed. Later supplier changes retain
  // its genuine old context; ordinary impact closure must requeue stale rows.
  const result=Object.freeze({...saved,guards:Object.freeze(saved.guards),reviews:Object.freeze(saved.reviews.map(Object.freeze))});
  authenticated.add(result);return result;
 }
 const progressPath=explanatoryReviewProgressPath(root,run);if(!existsSync(progressPath))return null;
 const reportPath=artifact(root,run,'.json'),dispatchPath=join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json');
 if(!existsSync(reportPath)||!existsSync(dispatchPath))return null;
 const context=explanatoryReviewRequest(root,run),progress=read(progressPath),inputs={...context.evidence},bound=binder(root,run,inputs);
 need(equal(progress.request,context.request),'frozen authority changed');
 for(const [path,expected]of Object.entries(progress.evidence))bound({path:relative(root,path),sha256:expected});
 const packPath=join(directory(root,run),explanatoryReviewPhase+'-1.json'),pack=read(packPath),report=read(reportPath),ids=context.payload.entries.map(row=>row.id);
 need(pack.run===run&&pack.phase===explanatoryReviewPhase&&pack.round===1&&pack.unit==='1'
  &&pack.repair_scope==='read-only-user-side-edit-adoption'&&equal(pack.request,context.request)&&equal(pack.payload,context.payload),'wrong read-only native pack');
 const currentProtected=guards(root,run);
 need(equal(currentProtected,pack.before_protected),'protected original reports, metadata inventory or ledger changed during review');
 need(report.version===1&&report.run===run&&report.phase===explanatoryReviewPhase&&report.round===1&&String(report.unit)==='1'
  &&report.input_sha256===digest(pack)&&['decisions','created_items','downstream'].every(field=>Array.isArray(report[field])&&report[field].length===0)
  &&Array.isArray(report.reviews)&&report.reviews.length===ids.length&&Array.isArray(report.adoptions)&&report.adoptions.length===ids.length,
  'read-only child cannot edit, adjudicate, author or omit a target');
 const reviews=[],guardsNow={};
 for(const id of ids){
  const rows=report.reviews.filter(row=>row.id===id),adoptions=report.adoptions.filter(row=>row.id===id),now=currentReviews[id];
  need(rows.length===1&&rows[0].disposition==='unaffected'&&evidence(rows[0])&&sha(rows[0].review_context_sha256)
   &&rows[0].post_sha256===now?.post_sha256&&rows[0].review_context_sha256===now?.review_context_sha256,
   'missing actual current native source/context review: '+id);
  need(adoptions.length===1&&adoptions[0].disposition==='adopted'&&adoptions[0].origin==='user-authorized-side-edit'&&evidence(adoptions[0]),'missing truthful external-edit adoption: '+id);
  guardsNow[id]=now.post_sha256;reviews.push(Object.freeze({...rows[0]}));
 }
 const dispatch=read(dispatchPath);
 need(dispatch.ok===true&&dispatch.run===run&&dispatch.role==='alpha-repair'&&dispatch.label===label&&dispatch.model===MODELS.sol61.id
  &&dispatch.provider_effort==='high'&&equal(dispatch.covers,[explanatoryReviewPhase+':1'])
  &&typeof dispatch.ended_at==='string'&&!Number.isNaN(Date.parse(dispatch.ended_at)),'fresh review lacks completed native Sol6.1high authority');
 const supporting=report.supporting_evidence??{};need(supporting&&typeof supporting==='object'&&!Array.isArray(supporting),'invalid supporting evidence');
 for(const [path,expected]of Object.entries(supporting))bound({path:relative(root,isAbsolute(path)?path:resolve(root,path)),sha256:expected});
 for(const path of [progressPath,reportPath,dispatchPath])bound({path:relative(root,path),sha256:hash(readFileSync(path))});
 const result=Object.freeze({version:1,run,phase:explanatoryReviewPhase,round:1,request:context.request,
  reviews:Object.freeze(reviews),adoptions:report.adoptions,guards:Object.freeze(guardsNow),evidence:Object.freeze(inputs),
  attribution:'Fresh native current review of Root-authorized user Remarks edits; no original adjudication or native source authorship'});
 authenticated.add(result);return result;
}
export function verifyExplanatoryReviewReplay(root,run,parent){
 const completion=parent.native_explanatory_edit_review;if(!completion)return;
 const path=join(directory(root,run),explanatoryReviewPhase+'-1-collected.json');
 need(parent.evidence?.[path]===hash(readFileSync(path))&&equal(read(path),completion),'parent lost exact native explanatory review');
 for(const [path,expected]of Object.entries(completion.evidence))need(parent.evidence[path]===expected&&hash(readFileSync(path))===expected,'native explanatory review evidence changed');
}
