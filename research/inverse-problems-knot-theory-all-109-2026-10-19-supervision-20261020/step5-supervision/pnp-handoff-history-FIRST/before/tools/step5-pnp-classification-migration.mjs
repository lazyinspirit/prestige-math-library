// Exactly one owner-authorized native 5.5 identity repair. No generic rename API.
import {createHash} from 'node:crypto';
import {existsSync,readFileSync,readdirSync,lstatSync,realpathSync,mkdirSync,writeFileSync} from 'node:fs';
import {resolve,join,relative,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {split,yaml} from './pathway-lib.mjs';
import {itemHashGuard,itemHashJudge} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {frontmatterList} from './frontmatter-list.mjs';
export const PNP_RUN='inverse-problems-knot-theory-all-109-2026-10-19';
export const PNP_OLD='def-ip-pnp-ista-with-denoiser';
export const PNP_CURRENT='alg-ip-pnp-ista-with-denoiser';
export const PNP_CONSUMERS=['cex-ip-pnp-iterative-awgn-error-model','ex-ip-approximate-cnn-mmse-denoiser','rem-ip-arbitrary-denoiser-has-no-inherited-objective','thm-ip-exact-mmse-pnp-ista-stationarity'];
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(v,m)=>{if(!v)throw Error('Step 5 PnP classification migration: '+m);};
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const dir=(root,run)=>join(resolve(root),'research',`${run}-step5-v2`);
export const pnpClassificationMigrationPath=(root,run)=>join(dir(root,run),'pnp-classification-migration.json');
const authenticated=new WeakSet();
function regular(root,p){p=resolve(root,p);const research=resolve(root,'research');need(p.startsWith(research+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()&&realpathSync(p).startsWith(realpathSync(research)+'/'),'evidence must be a regular research file');return p;}
export function pnpSourceCandidate(before){
 need(before.startsWith(`---\nid: ${PNP_OLD}\nkind: definition\n`)&&!/^aliases:/m.test(split(before).fm),'unsupported old source header/aliases');
 return before.replace(`id: ${PNP_OLD}\nkind: definition\n`,`id: ${PNP_CURRENT}\nkind: algorithm\naliases: [${PNP_OLD}]\n`);
}
function nativeFinal(log,reportPath,report,{original=false}={}){
 const end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);need(start>=0&&end>start,'missing genuine native final log segment');const summary=log.slice(start+7,end).trim();let parsed;try{parsed=JSON.parse(summary);}catch{}
 if(parsed){need(parsed.run===report.run&&parsed.phase===report.phase&&parsed.round===report.round&&String(parsed.unit)===String(report.unit)&&parsed.input_sha256===report.input_sha256,'native final summary identity differs');for(const row of parsed.reviews??[])if([PNP_OLD,PNP_CURRENT,...PNP_CONSUMERS].includes(row.id))need(report.reviews?.some(r=>r.id===row.id&&r.post_sha256===row.post_sha256&&r.review_context_sha256===row.review_context_sha256&&r.disposition===row.disposition),'native final review differs from detailed report');}
 else need(!original&&summary.includes(reportPath),'native final lacks exact detailed report reference');
 if(original){
  need(parsed&&parsed.repair_notes?.status==='blocked_by_reclassification_scope'&&parsed.repair_notes?.repair_complete===false&&parsed.repair_notes?.mathematical_uncertainty===false&&parsed.repair_notes?.report===reportPath&&same(parsed.created_items,[]),'native49 final lacks actual unresolved blocker/report reference');
  for(const type of ['decisions','reviews']){const fields=type==='decisions'?['id','model','context_sha256','outcome']:['id','disposition','post_sha256','review_context_sha256'];need(parsed[type]?.length===1&&report[type]?.length===1&&fields.every(k=>same(parsed[type][0][k],report[type][0][k])),'native49 final decision/review differs');}
 }
 if(parsed&&!original)for(const row of report.reviews??[])if([PNP_CURRENT,...PNP_CONSUMERS].includes(row.id))need(parsed.reviews?.some(r=>r.id===row.id&&r.post_sha256===row.post_sha256&&r.review_context_sha256===row.review_context_sha256&&r.disposition===row.disposition),'native current final omits detailed current review');
 return summary;
}
function beforeNativeImpact(root,run){
 need(!readdirSync(dir(root,run)).some(n=>/^impact-repeat(?:-pass-\d+)?-1(?:\.json|-(?:closed|collected|progress)\.json)$/.test(n))&&!existsSync(join(dir(root,run),'repeat-1-collected.json')),'record only before any native5.6 pack/collection');
 const dispatch=join(root,'research',`${run}-dispatch`);need(!readdirSync(dispatch).some(n=>/^alpha-repair-step5-v2-impact-repeat(?:-pass-\d+)?-r1-u/.test(n)),'native5.6 dispatch evidence already exists');
}
function identityOwnership(root,{currentOnly=false}={}){
 const old=existsSync(join(root,'items',`${PNP_OLD}.md`)),current=existsSync(join(root,'items',`${PNP_CURRENT}.md`));
 need(old!==current&&(!currentOnly||current),'canonical identity collision/missing source');
 let owners=0;
 for(const name of readdirSync(join(root,'research')).filter(n=>new RegExp('^'+PNP_RUN+'-batch-\\d+\\.pages\\.json$').test(n)))for(const page of read(join(root,'research',name)))for(const row of page.items??[])if([PNP_OLD,PNP_CURRENT].includes(row.id)){
  owners++;need(name===`${PNP_RUN}-batch-49.pages.json`&&page.id==='plug-and-play-mmse-regularization'&&row.id===(current?PNP_CURRENT:PNP_OLD)&&row.kind===(current?'algorithm':'definition'),'original/current manifest ownership or home differs');
 }
 need(owners===1,'ambiguous/missing original/current manifest owner');
 for(const name of readdirSync(join(root,'items')).filter(n=>n.endsWith('.md'))){
  const fm=split(readFileSync(join(root,'items',name),'utf8')).fm??'',id=fm.match(/^id:[ \t]*["']?([^\r\n"']+)/m)?.[1]?.trim(),aliases=frontmatterList(fm,'aliases');
  if([PNP_OLD,PNP_CURRENT].includes(id))need(name===`${id}.md`,'canonical identity filename collision');
  if(name===`${PNP_CURRENT}.md`)need(same(aliases,[PNP_OLD]),'current source must retain exactly the navigation old alias');
  else need(!aliases.some(id=>[PNP_OLD,PNP_CURRENT].includes(id)),'original/current navigation alias collision');
 }
}
function boundary(state,request){
 need(state.run===PNP_RUN&&state.stage==='5.5-adjudicate'&&state.paused===true&&Object.values(state.dispatches??{}).every(d=>(!d.startedAt||Boolean(d.endedAt))&&!(d.stage==='5.6-impact'&&d.startedAt)),'requires actual paused/drained native 5.5');
 need(request.version===1&&request.run===PNP_RUN&&request.group===state.stage&&same(request.stages,[state.stage])&&typeof request.id==='string'&&request.id.length>0&&Number.isFinite(Date.parse(request.at)),'requires matching actual native owner request');
}
// Carrier deltas are reviewed finite proposals. A root approval cannot license
// extra source prose: supplier bytes and consumer replacements are mechanical.
function carriers(root,row,bytes){
 const metadata=new Map();need(Array.isArray(row.carriers)&&row.carriers.length===9,'missing finite metadata/consumer carrier inventory');
 const required=[...PNP_CONSUMERS.map(id=>`items/${id}.md`),`library/inverse-problems/plug-and-play-mmse-regularization.md`,`research/${PNP_RUN}-batch-49.pages.json`,`research/${PNP_RUN}-batch-49.proof-contracts.json`,`research/${PNP_RUN}-proof-contracts.json`,'research/plan-spec.json'];
 need(required.every(p=>row.carriers.some(c=>c.path===p))&&new Set(row.carriers.map(c=>c.path)).size===row.carriers.length,'missing/duplicate migration carriers');
 for(const c of row.carriers){
  need(required.includes(c.path),'unsupported carrier '+c.path);
  const before=bytes(c.before_file),after=bytes(c.current_file);need(before!==after&&before.includes(PNP_OLD),'empty carrier delta');
  if(c.path.startsWith('items/')||c.path.startsWith('library/'))need(after===before.replaceAll(PNP_OLD,PNP_CURRENT),'consumer/page must only retarget identity');
  else {
   const old=JSON.parse(before),next=JSON.parse(after);
   const definition=split(bytes(row.entry.before_source_file)).body.match(/^## Definition\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)?.[1]?.trim();
   const transform=(value,path=[])=>{
    if(Array.isArray(value))return value.map((v,i)=>transform(v,[...path,i]));
    if(value&&typeof value==='object'){
     const result={};for(const [key,v]of Object.entries(value)){
      const nextKey=key===PNP_OLD?PNP_CURRENT:key;
      if(key==='kind'&&value.id===PNP_OLD){need(v==='definition','old manifest kind differs');result[key]='algorithm';}
      else if(key==='quote'&&value.source===PNP_OLD&&path.includes('citations')){need(typeof v==='string'&&definition,'invalid supplier quote');result[key]=definition;}
      else result[nextKey]=transform(v,[...path,key]);
     }
     return result;
    }
    return typeof value==='string'?value.replaceAll(PNP_OLD,PNP_CURRENT):value;
   };
   need(same(transform(old),next),'metadata permits only identity/kind and exact unchanged Definition quote mirrors');
  }
  metadata.set(c.path,c);
 }
 const find=(v,id)=>Array.isArray(v)?v.flatMap(x=>find(x,id)):v&&typeof v==='object'?[...(v.id===id?[v]:[]),...Object.values(v).flatMap(x=>find(x,id))]:[];
 const plan=JSON.parse(bytes(metadata.get('research/plan-spec.json').current_file)),planned=find(plan,PNP_CURRENT);need(planned.length===1&&planned[0].kind==='algorithm'&&find(plan,PNP_OLD).length===0,'plan must contain one truthful current algorithm record');
 for(const path of [`research/${PNP_RUN}-batch-49.proof-contracts.json`,`research/${PNP_RUN}-proof-contracts.json`]){const contract=JSON.parse(bytes(metadata.get(path).current_file));need(contract.contracts?.[PNP_CURRENT]&&!contract.contracts?.[PNP_OLD]&&contract.scope?.includes(PNP_CURRENT)&&!contract.scope.includes(PNP_OLD),'current algorithm contract/scope missing');}
 const pages=JSON.parse(bytes(metadata.get(`research/${PNP_RUN}-batch-49.pages.json`).current_file));
 const inventory=pages.flatMap(p=>p.items??[]);need(inventory.filter(i=>i.id===PNP_CURRENT&&i.kind==='algorithm').length===1&&!inventory.some(i=>i.id===PNP_OLD),'current owning manifest identity/kind differs');
 return metadata;
}
function validate(root,run,row,{current=false,virtual=new Map(),receiptBytes=null}={}){
 root=resolve(root);const {sha256,...payload}=row;
 need(run===PNP_RUN&&row.version===1&&row.kind==='owner-pnp-classification-migration'&&row.run===run&&row.owner_identity==='/root'&&row.repairer_identity==='/root'&&row.original_id===PNP_OLD&&row.current_id===PNP_CURRENT&&row.batch==='49'&&row.home_page==='plug-and-play-mmse-regularization'&&Number.isFinite(Date.parse(row.recorded_at))&&row.current_review_granted===false&&row.native_execution_coverage_adopted===false&&row.historical_only===true&&row.original_outcome==='confirmed_nonfatal'&&sha256===sha(payload),'invalid bounded receipt');
 const evidence={},bytes=p=>{const absolute=resolve(root,p);need(Object.hasOwn(row.bindings??{},relative(root,absolute)),'unbound evidence '+p);if(!virtual.has(absolute))regular(root,absolute);const value=virtual.get(absolute)??readFileSync(absolute,'utf8');need(sha(value)===row.bindings[relative(root,absolute)],'stale evidence '+p);evidence[absolute]=sha(value);return value;},bound=p=>JSON.parse(bytes(p));
 for(const p of Object.keys(row.bindings??{}))bytes(p);
 const state=bound(row.creation_state),request=bound(row.owner_gate_request);boundary(state,request);need(request.id===row.owner_gate_request_id&&Date.parse(request.at)<=Date.parse(row.recorded_at),'owner request identity/time differs');
 const frontier=bound(`research/${run}-step5-v2/frontier.json`),pack=bound(`research/${run}-step5-v2/repeat-1.json`),report=bound(`research/${run}-step5-v2/step5-v2-repeat-r1-u49.json`),judge=bound(`research/${run}-step5-v2/judge-1.json`);
 const {sha256:frontierHash,...frontierPayload}=frontier;
 need(frontierHash===sha(frontierPayload)&&frontier.run===run&&frontier.ids.length===1472&&new Set(frontier.ids).size===1472&&frontier.batches.length===109&&frontier.batches.filter(b=>b.items.includes(PNP_OLD)).length===1&&frontier.batches.find(b=>b.items.includes(PNP_OLD)).id==='49','original1472/109/batch49 frontier differs');
 need(pack.run===run&&pack.phase==='repeat'&&pack.round===1&&pack.units.length===109&&pack.rejected.length===36&&Object.values(pack.assignments).flat().length===36&&pack.assignments['49'].filter(r=>r.id===PNP_OLD).length===1&&judge.verdicts.length===331&&judge.verdicts.filter(r=>r.keep===false).length===36,'original331/36 native judge/assignments differ');
 // This validated local pack is immutable for the remaining checks.
 const packSha=sha(pack);
 need(report.run===run&&report.phase==='repeat'&&report.round===1&&String(report.unit)==='49'&&report.input_sha256===packSha&&report.decisions.length===1&&report.decisions[0].id===PNP_OLD&&report.decisions[0].outcome==='confirmed_nonfatal'&&report.repair_notes?.status==='blocked_by_reclassification_scope'&&report.repair_notes?.repair_complete===false&&report.reviews.length===1&&report.reviews[0].id===PNP_OLD&&report.reviews[0].disposition==='unaffected'&&report.created_items.length===0,'original nonfatal unresolved native49 report differs');
 const before=bytes(row.entry.before_source_file),after=bytes(row.entry.current_source_file),fm=yaml().parse(split(before).fm);
 need(fm.id===PNP_OLD&&fm.kind==='definition'&&fm.status==='draft'&&fm.pipeline_run===run&&after===pnpSourceCandidate(before)&&itemHashGuard(before)===report.reviews[0].post_sha256&&itemHashGuard(before)===pack.before[PNP_OLD],'source body/metadata changed beyond exact id/kind/old alias');
 need(row.entry.before_raw_sha256===sha(before)&&row.entry.after_raw_sha256===sha(after),'source raw binding differs');
 const metadata=carriers(root,row,bytes);
 const review=bound(row.independent_review),math=bound(row.root_math_review);need(review.accepted===true&&review.reviewer_identity!=='/root'&&/^\/root\/[a-z0-9_-]+$/.test(review.reviewer_identity??'')&&review.current_review_granted===false&&review.native_execution_coverage_adopted===false&&same(review.carrier_bindings,row.carriers.map(c=>({path:c.path,before_sha256:sha(bytes(c.before_file)),after_sha256:sha(bytes(c.current_file))})))&&review.before_source_sha256===sha(before)&&review.after_source_sha256===sha(after),'independent acceptance must bind exact finite candidates without native credit');
 need(math?.run===run&&math.native_credit_claimed===false&&same(math.new_prerequisites,[])&&math.native49_binding?.outcome==='confirmed_nonfatal'&&math.native49_binding?.raw_sha256===sha(bytes(`research/${run}-step5-v2/step5-v2-repeat-r1-u49.json`))&&math.classification?.minimal_migration?.old_id===PNP_OLD&&math.classification?.minimal_migration?.new_id===PNP_CURRENT&&same([...(math.consumer_inventory?.current_direct??[])].sort(),[...PNP_CONSUMERS].sort())&&row.consumer_ids?.length===4&&same([...row.consumer_ids].sort(),[...PNP_CONSUMERS].sort()),'missing explicit math/consumer review');
 // The native execution, actual immutable attempt, prompt and final log remain
 // bound evidence. Root repair does not alter or adopt their physical review.
 const nativePath=`research/${run}-dispatch/alpha-adjudicate-step5-v2-repeat-r1-u49.result.json`,native=bound(nativePath),dispatch=Object.values(state.dispatches??{}).filter(d=>d.label==='step5-v2-repeat-r1-u49'&&d.stage==='5.5-adjudicate');
 need(native.ok===true&&native.run===run&&native.role==='alpha-adjudicate'&&native.label==='step5-v2-repeat-r1-u49'&&native.model==='gpt-6.1-sol'&&native.provider_effort==='high'&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false&&native.terminal_summary?.final_response_present===true&&native.terminal_summary?.error_events===0&&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.evidence_tag===`.attempt-${native.attempt}`&&same(native.covers,['49'])&&dispatch.length===1&&dispatch[0].role==='alpha-adjudicate'&&same(dispatch[0].covers,['49'])&&dispatch[0].lastExitOk===true&&dispatch[0].attempt===native.attempt&&[native.started_at,native.ended_at,dispatch[0].startedAt,dispatch[0].endedAt].every(d=>Number.isFinite(Date.parse(d)))&&Date.parse(native.started_at)<=Date.parse(native.ended_at)&&Date.parse(native.ended_at)<=Date.parse(dispatch[0].endedAt)&&Date.parse(dispatch[0].startedAt)<=Date.parse(native.started_at)&&Date.parse(dispatch[0].endedAt)<=Date.parse(request.at),'native49 successful execution not authenticated');
 need(bytes(nativePath)===bytes(nativePath.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`)),'immutable native49 attempt differs');
 need(resolve(root,native.prompt)===resolve(root,nativePath.replace(/\.result\.json$/,`.attempt-${native.attempt}.prompt.md`))&&resolve(root,native.log)===resolve(root,nativePath.replace(/\.result\.json$/,`.attempt-${native.attempt}.log`)),'native49 immutable prompt/log path differs');
 const prompt=bytes(native.prompt),log=bytes(native.log);nativeFinal(log,`research/${run}-step5-v2/step5-v2-repeat-r1-u49.json`,report,{original:true});need(prompt.includes(`run: ${run}`)&&prompt.includes('unit:"49"')&&prompt.includes(`output: research/${run}-step5-v2/step5-v2-repeat-r1-u49.json`)&&prompt.includes(`input_sha256:"${packSha}"`)&&log.includes('blocked_by_reclassification_scope')&&log.includes(PNP_OLD),'native49 prompt/log identity differs');
 const allDecisions=[];
 for(const unit of pack.units){
  const historical=bound(`research/${run}-step5-v2/step5-v2-repeat-r1-u${unit}.json`);
  need(historical.run===run&&historical.phase==='repeat'&&historical.round===1&&String(historical.unit)===unit&&historical.input_sha256===packSha&&Array.isArray(historical.decisions)&&same(historical.decisions.map(r=>[r.id,r.model,r.context_sha256]).sort(),pack.assignments[unit].map(r=>[r.id,r.model,r.context_sha256]).sort()),'native repeat decision inventory changed '+unit);
  allDecisions.push(...historical.decisions);
 }
 need(allDecisions.length===36,'original36 native decisions not preserved');
 const previous=bound(`research/${run}-step5-v2/certification-impact-initial-1.json`);need(previous.items.length===679&&previous.items.some(i=>i.id===PNP_OLD)&&previous.items.some(i=>i.id==='ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion'),'prior679 certificate/original batch21 migration absent');
 // Prefix preservation permits ordinary later native ledger append only.
 const ledgerBefore=bytes(row.judge_ledger_before);const liveLedger=readFileSync(join(root,'research',`${run}-judge.jsonl`),'utf8');need(liveLedger.startsWith(ledgerBefore),'original Luna/Sol judge ledger history changed');
 if(current){identityOwnership(root,{currentOnly:true});need(!existsSync(join(root,'items',`${PNP_OLD}.md`))&&existsSync(join(root,'items',`${PNP_CURRENT}.md`)),'old source revived or current source absent');const live=yaml().parse(split(readFileSync(join(root,'items',`${PNP_CURRENT}.md`),'utf8')).fm);need(live.id===PNP_CURRENT&&live.kind==='algorithm'&&live.aliases?.includes(PNP_OLD),'current canonical algorithm identity/alias differs');}
 const path=pnpClassificationMigrationPath(root,run);if(receiptBytes)evidence[path]=sha(receiptBytes);
 const loaded={...row,path,root,evidence,metadata,frontier,pack,historicalGuards:Object.fromEntries([...metadata.values()].filter(c=>c.path.startsWith('items/')).map(c=>[c.path.slice(6,-3),itemHashGuard(bytes(c.before_file))])),before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),historical_review:report.reviews[0],before_source:before,after_source:after,allowed_original_raw_sha256:[sha(before)],targets:[PNP_CURRENT,...PNP_CONSUMERS],prior_certificate:previous};authenticated.add(loaded);return loaded;
}
export function loadPnpClassificationMigration(root,run,{current=false}={}){const path=pnpClassificationMigrationPath(root,run);if(!existsSync(path))return null;const bytes=readFileSync(path,'utf8');return validate(root,run,JSON.parse(bytes),{current,receiptBytes:bytes});}
export function projectPnpOriginalIds(root,run,ids){const h=loadPnpClassificationMigration(root,run,{current:true});if(!h)return [...ids];const normalized=list=>list.map(id=>id==='op-ip-honest-coverage-over-ill-posed-truth-classes'?'ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion':id).sort();need(ids.length===1472&&same(normalized(ids),normalized(h.frontier.ids))&&ids.includes(PNP_OLD)&&!ids.includes(PNP_CURRENT),'projection requires exact original slots');const result=ids.map(id=>id===PNP_OLD?PNP_CURRENT:id);need(new Set(result).size===1472,'nonbijective projection');return result;}
export function supportingPnpClassificationHistory(context,path,expected){if(!context?.root||!context?.run)return null;const h=loadPnpClassificationMigration(context.root,context.run);if(!h)return null;const c=h.metadata.get(relative(resolve(context.root),resolve(context.root,path)));if(c&&sha(readFileSync(resolve(context.root,c.before_file),'utf8'))===expected)return {archive:resolve(context.root,c.before_file),marker:h.path,evidence:h.evidence};return null;}
export function isPnpClassificationMigration(h,pack,now){return authenticated.has(h)&&same(h.pack,pack)&&!Object.hasOwn(now,PNP_OLD)&&now[PNP_CURRENT]===h.after_guard;}
export function pnpHistoricalCertificate(h,certificate){return authenticated.has(h)&&same(h.prior_certificate,certificate);}
function currentReviewMatches(root,review){
 const text=readFileSync(join(root,'items',`${review.id}.md`),'utf8'),parts=split(text),fm=yaml().parse(parts.fm);
 const canonical=id=>id===PNP_OLD?PNP_CURRENT:id;
 const suppliers=[...new Set([...(fm.deps??[]),...(fm.justified_by??[]),...(fm.forward_refs??[]),...(fm.external_refs??[]),...[...parts.body.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1])].map(canonical))].filter(id=>id!==review.id).sort();
 const context=sha({version:3,item:[review.id,itemHashGuard(text)],suppliers:suppliers.map(id=>[id,statementHash(readFileSync(join(root,'items',`${id}.md`),'utf8'))])});
 return review.post_sha256===itemHashGuard(text)&&review.review_context_sha256===context;
}
export function pnpCurrentNativeReviews(root,run,certificate,{current=true,matchesReview=review=>!current||currentReviewMatches(root,review)}={}){
 const h=loadPnpClassificationMigration(root,run,{current:true});if(!h)return [];
 const found=new Map(),bound=p=>certificate.evidence?.[p]===sha(readFileSync(p,'utf8'));
 for(const path of Object.keys(certificate.evidence??{})){
  const match=/\/step5-v2-((?:impact-repeat|gate)(?:-pass-\d+)?)-r(\d+)-u(\d+)\.json$/.exec(path);if(!match)continue;
  need(bound(path),'current native report changed');const report=read(path),phase=match[1],round=Number(match[2]),unit=match[3],packPath=join(dir(root,run),`${phase}-${round}.json`),pack=read(packPath);
  const reviews=(report.reviews??[]).filter(r=>h.targets.includes(r.id)&&r.uncertain===false&&['repaired','unaffected'].includes(r.disposition)&&r.post_sha256===certificate.items?.find(i=>i.id===r.id)?.guard_sha256&&matchesReview(r));if(!reviews.length)continue;
  need(bound(packPath)&&report.run===run&&report.phase===phase&&report.round===round&&String(report.unit)===unit&&report.input_sha256===sha(pack)&&reviews.every(r=>pack.assignments[unit]?.includes(r.id)),'current reviews lack native assignments');
  const label=`step5-v2-${phase}-r${round}-u${unit}`,dispatch=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`),native=read(dispatch),attempt=dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`);
  need(bound(dispatch)&&bound(attempt)&&readFileSync(dispatch,'utf8')===readFileSync(attempt,'utf8')&&native.run===run&&native.role==='alpha-repair'&&native.label===label&&native.ok===true&&native.model==='gpt-6.1-sol'&&native.provider_effort==='high'&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false&&native.terminal_summary?.final_response_present===true&&native.terminal_summary?.error_events===0&&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.evidence_tag===`.attempt-${native.attempt}`&&same(native.covers,[phase.includes('-pass-')?`${phase}:${unit}`:unit]),'current reviews lack genuine native owner execution');
  const prompt=resolve(root,native.prompt??''),log=resolve(root,native.log??'');need(bound(prompt)&&bound(log)&&prompt===dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.prompt.md`)&&log===dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.log`),'current reviews lack actual prompt/final log');
  const promptText=readFileSync(prompt,'utf8'),logText=readFileSync(log,'utf8');nativeFinal(logText,relative(root,path),report);need(promptText.includes(`run: ${run}`)&&promptText.includes(`output: ${relative(root,path)}`)&&promptText.includes(`input_sha256:"${sha(pack)}"`),'current native prompt/log identity differs');
  for(const review of reviews)found.set(review.id,review);
 }
 return h.targets.every(id=>found.has(id))?[...found.values()]:[];
}
export function licensedPnpReplacement(root,run,oldId,newId,certificate,{matchesReview=review=>currentReviewMatches(root,review)}={}){
 const h=loadPnpClassificationMigration(root,run,{current:true});if(!h||oldId!==PNP_OLD||newId!==PNP_CURRENT)return false;
 const text=readFileSync(join(root,'items',`${PNP_CURRENT}.md`),'utf8'),rows=certificate?.items?.filter(r=>r.id===PNP_CURRENT)??[];
 return rows.length===1&&rows[0].guard_sha256===itemHashGuard(text)&&rows[0].item_sha256===itemHashJudge(text)&&!certificate.items.some(r=>r.id===PNP_OLD)&&!(certificate.creations??[]).some(r=>r.id===PNP_CURRENT)&&Object.entries(h.evidence).every(([p,v])=>certificate.evidence?.[p]===v)&&pnpCurrentNativeReviews(root,run,certificate,{matchesReview}).length===5;
}
function prepare(root,run,requestFile){
 root=resolve(root);need(run===PNP_RUN,'unsupported run');const statePath=join(root,'.autopilot',run,'state.json'),ownerPath=join(root,'.autopilot',run,'owner-gate-request.json'),stateBytes=readFileSync(statePath,'utf8'),ownerBytes=readFileSync(ownerPath,'utf8');boundary(JSON.parse(stateBytes),JSON.parse(ownerBytes));beforeNativeImpact(root,run);identityOwnership(root);
 need(!existsSync(join(dir(root,run),'repeat-1-collected.json'))&&!existsSync(join(dir(root,run),'impact-repeat-1.json')),'record only before native5.5 collection/5.6 assignment');
 const requestBytes=readFileSync(regular(root,requestFile),'utf8'),request=JSON.parse(requestBytes);need(!request.bindings&&!request.creation_state&&!request.owner_gate_request&&!request.sha256&&!request.recorded_at,'synthetic creation bindings forbidden');
 const base=join(dir(root,run),'pnp-classification-migration'),virtual=new Map(),pin=(name,text)=>{const p=join(base,name);virtual.set(p,text);return relative(root,p);};
 const row={...request,recorded_at:new Date().toISOString(),creation_state:pin('creation-state.json',stateBytes),owner_gate_request:pin('native-owner-request.json',ownerBytes),owner_gate_request_id:JSON.parse(ownerBytes).id,owner_request_file:pin('owner-request.json',requestBytes),judge_ledger_before:pin('judge-ledger-before.jsonl',readFileSync(join(root,'research',`${run}-judge.jsonl`),'utf8')),bindings:{}};
 const nativePath=`research/${run}-dispatch/alpha-adjudicate-step5-v2-repeat-r1-u49.result.json`,native=read(join(root,nativePath));
 const files=[...['frontier.json','baseline.json','step4-verdicts.json','initial-1.json','judge-1.json','repeat-1.json','step5-v2-repeat-r1-u49.json','certification-impact-initial-1.json','original-slot-reclassification.json'].map(n=>join(dir(root,run),n)),resolve(root,nativePath),resolve(root,nativePath.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`)),resolve(root,native.prompt),resolve(root,native.log),resolve(root,row.entry.before_source_file),resolve(root,row.entry.current_source_file),resolve(root,row.root_math_review),resolve(root,row.independent_review),...row.carriers.flatMap(c=>[resolve(root,c.before_file),resolve(root,c.current_file)])];
 if(existsSync(join(dir(root,run),'original-slot-level-correction.json')))files.push(join(dir(root,run),'original-slot-level-correction.json'));
 files.push(...read(join(dir(root,run),'repeat-1.json')).units.map(unit=>join(dir(root,run),`step5-v2-repeat-r1-u${unit}.json`)));
 for(const p of files){regular(root,p);row.bindings[relative(root,p)]=sha(readFileSync(p,'utf8'));}for(const [p,text]of virtual)row.bindings[relative(root,p)]=sha(text);row.sha256=sha(row);validate(root,run,row,{virtual});return {root,row,virtual,statePath,ownerPath,stateBytes,ownerBytes};
}
export function previewPnpClassificationMigration(root,run,requestFile){const p=prepare(root,run,requestFile);return {row:p.row,current_review_granted:false,native_execution_coverage_adopted:false};}
export function recordPnpClassificationMigration(root,run,requestFile){
 const p=prepare(root,run,requestFile),target=pnpClassificationMigrationPath(p.root,run);need(!existsSync(target),'receipt already exists');const h=validate(p.root,run,p.row,{virtual:p.virtual,current:true});
 need(readFileSync(join(p.root,'items',`${PNP_CURRENT}.md`),'utf8')===h.after_source,'actual source differs from accepted candidate');for(const c of p.row.carriers)need(readFileSync(resolve(p.root,c.path),'utf8')===readFileSync(resolve(p.root,c.current_file),'utf8'),'actual carrier differs '+c.path);
 for(const name of readdirSync(join(p.root,'items')).filter(n=>n.endsWith('.md')&&n!==`${PNP_CURRENT}.md`)){const text=readFileSync(join(p.root,'items',name),'utf8');need(!frontmatterList(split(text).fm,'aliases').some(id=>[PNP_OLD,PNP_CURRENT].includes(id)),'old/current alias collision');}
 beforeNativeImpact(p.root,run);identityOwnership(p.root,{currentOnly:true});
 for(const [file,hash]of Object.entries(p.row.bindings))need(sha(p.virtual.get(resolve(p.root,file))??readFileSync(resolve(p.root,file),'utf8'))===hash,'bound input changed during recording: '+file);
 need(readFileSync(join(p.root,'items',`${PNP_CURRENT}.md`),'utf8')===h.after_source,'actual source changed during recording');for(const c of p.row.carriers)need(readFileSync(resolve(p.root,c.path),'utf8')===readFileSync(resolve(p.root,c.current_file),'utf8'),'actual carrier changed during recording');
 need(readFileSync(p.statePath,'utf8')===p.stateBytes&&readFileSync(p.ownerPath,'utf8')===p.ownerBytes,'native boundary changed');for(const [file,text]of p.virtual){mkdirSync(dirname(file),{recursive:true});writeFileSync(file,text,{flag:'wx'});}writeFileSync(target,JSON.stringify(p.row,null,2)+'\n',{flag:'wx'});return {path:target,current_review_granted:false,native_execution_coverage_adopted:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{const args=process.argv.slice(2),opt=n=>args[args.indexOf(n)+1],root=resolve(args.includes('--root')?opt('--root'):process.cwd()),run=opt('--run');need(['preview','record','check'].includes(args[0]),'expected preview|record|check');const result=args[0]==='check'?{present:Boolean(loadPnpClassificationMigration(root,run,{current:true}))}:args[0]==='preview'?previewPnpClassificationMigration(root,run,opt('--authorization')):recordPnpClassificationMigration(root,run,opt('--authorization'));console.log(JSON.stringify(result,null,2));}catch(e){console.error(e.message);process.exitCode=1;}}
