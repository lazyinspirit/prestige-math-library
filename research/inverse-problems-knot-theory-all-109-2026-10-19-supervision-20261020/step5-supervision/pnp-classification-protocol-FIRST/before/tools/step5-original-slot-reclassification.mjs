// One original obligation, two explicitly separated historical/current IDs.
// This receipt grants no execution, review, authorship or judgment credit.
import {createHash} from 'node:crypto';
import {existsSync,readFileSync,readdirSync,mkdirSync,writeFileSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join,relative,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {yaml,split} from './pathway-lib.mjs';
import {itemHashGuard,itemHashJudge} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {frontmatterList} from './frontmatter-list.mjs';
import {dependencyLevels} from './item-dependency-levels.mjs';

export const ORIGINAL_SLOT_RUN='inverse-problems-knot-theory-all-109-2026-10-19';
export const ORIGINAL_SLOT_ID='op-ip-honest-coverage-over-ill-posed-truth-classes';
export const CURRENT_SLOT_ID='ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(v,m)=>{if(!v)throw Error('Step 5 original-slot reclassification: '+m);};
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const authenticated=new WeakSet();
const stable=x=>Array.isArray(x)?x.map(stable):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,stable(x[k])])):x;
function findRecord(node,id){if(Array.isArray(node))return node.flatMap(n=>findRecord(n,id));if(!node||typeof node!=='object')return [];return [...(node.id===id?[node]:[]),...Object.values(node).flatMap(n=>findRecord(n,id))];}
function recordSpan(text,id){
 const pattern=new RegExp('"id"\\s*:\\s*"'+id+'"','g'),matches=[...text.matchAll(pattern)];need(matches.length===1,'plan identity must be unique');
 const target=matches[0].index,stack=[];let quoted=false,escaped=false,start=-1;
 for(let i=0;i<text.length;i++){
  const c=text[i];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue;}
  if(c==='"'){quoted=true;continue;}
  if(c==='{'){stack.push(i);if(i<target)start=i;}
  if(i===target-1)start=stack.at(-1);
  if(c==='}'){const popped=stack.pop();if(popped===start&&i>target)return {start,end:i+1,record:JSON.parse(text.slice(start,i+1))};}
 }
 throw Error('Step 5 original-slot reclassification: invalid plan record envelope');
}
const dir=(root,run)=>join(resolve(root),'research',`${run}-step5-v2`);
export const originalSlotReclassificationPath=(root,run)=>join(dir(root,run),'original-slot-reclassification.json');
export const originalSlotLevelCorrectionPath=(root,run)=>join(dir(root,run),'original-slot-level-correction.json');
const archiveDir=(root,run)=>join(dir(root,run),'original-slot-reclassification');
function regular(root,path){
 const p=resolve(root,path),research=resolve(root,'research');
 need(p.startsWith(research+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
  &&realpathSync(p).startsWith(realpathSync(research)+'/'),'evidence must be a regular research file: '+path);return p;
}
function section(text,name){
 const body=split(text).body,rows=[...body.matchAll(/^##[ \t]+([^\r\n]+)\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm)].filter(m=>m[1]===name);
 need(rows.length===1,'missing/duplicate '+name+' section');return rows[0][2].trim();
}
export function affirmativeOriginalQuestion(text){
 const question=section(text,'Open problem');
 need(question.split('Does there exist a single graph-measurable').length===2&&question.endsWith('\\eta?$$'),'unexpected original question grammar');
 return question.replace('Does there exist a single graph-measurable','There exists a single graph-measurable').replace(/\\eta\?\$\$$/,()=> '\\eta.$$');
}
function carrier(text,id){const parsed=split(text);need(parsed.fm,'missing source frontmatter');const fm=yaml().parse(parsed.fm);need(fm.id===id,'source ID mismatch');return fm;}
function currentCarrier(text,affirmative){
 const fm=carrier(text,CURRENT_SLOT_ID);
 need(fm.kind==='example'&&fm.status==='draft'&&fm.pipeline_run===ORIGINAL_SLOT_RUN
  &&fm.generation?.role==='example'&&fm.provenance?.statement==='ai-generated'&&fm.provenance?.proof==='ai-generated',
  'current carrier must be a truthful draft generated example');
 need(section(text,'Example')===affirmative,'current Example changed the original question beyond affirmative grammar');
 const body=split(text).body,proof=section(text,/^## Verification$/m.test(body)?'Verification':'Proof');
 need(/^\d+\.\d+[ \t]+/m.test(proof),'current example lacks a numbered proof/verification');
 need(!/^##[ \t]+(?:Open problem|Status)[ \t]*$/m.test(split(text).body),'current example retains open-problem-only sections');
 const aliases=fm.aliases??[];need(Array.isArray(aliases)&&aliases.every(id=>id===ORIGINAL_SLOT_ID)&&aliases.length<=1,'unsupported current alias');return fm;
}
function frontierCheck(f,pack,baseline){
 const {sha256,...payload}=f;
 need(f.version===1&&f.run===ORIGINAL_SLOT_RUN&&sha256===sha(payload)&&f.ids?.length===1472
  &&new Set(f.ids).size===1472&&f.ids.includes(ORIGINAL_SLOT_ID)&&!f.ids.includes(CURRENT_SLOT_ID)
  &&f.batches.filter(b=>b.items.includes(ORIGINAL_SLOT_ID)).length===1
  &&f.batches.find(b=>b.items.includes(ORIGINAL_SLOT_ID)).id==='21','wrong original frontier');
 need(pack.run===f.run&&pack.phase==='initial'&&pack.round===1&&pack.repair_scope==='frontier'
  &&same(pack.frontier_ids,f.ids)&&pack.rejected?.length===344
  &&Object.values(pack.assignments).flat().length===344
  &&same(Object.keys(baseline).sort(),Object.keys(pack.before).sort())
  &&f.ids.every(id=>baseline[id]===pack.before[id]),'original baseline/344 native tuples changed');
 need(same(pack.rejected.slice().sort((a,b)=>sha(a).localeCompare(sha(b))),Object.values(pack.assignments).flat().sort((a,b)=>sha(a).localeCompare(sha(b)))),
  'original rejected tuple assignments changed');
 need(f.batches.length===109&&pack.units.length===109&&new Set(pack.units).size===109
  &&same([...pack.units].sort(),f.batches.map(b=>b.id).sort())
  &&pack.units.filter(u=>pack.assignments[u]?.length===0).length===22,'original 109 units/22 mechanical assignments changed');
 for(const b of f.batches)need(pack.assignments[b.id].every(r=>b.items.includes(r.id)),'original tuple moved to another batch');
}
function beforeImpact(root,run){
 const d=dir(root,run),dispatch=join(root,'research',`${run}-dispatch`);
 need(!existsSync(join(d,'initial-1-collected.json'))&&!existsSync(join(d,'impact-initial-1.json'))
  &&!readdirSync(dispatch).some(n=>/^alpha-repair-step5-v2-impact-initial/.test(n)),
  'recording/preview requires uncollected initial hold before first impact');
}
function applicationCollisions(root){
 const old=join(root,'items',`${ORIGINAL_SLOT_ID}.md`),current=join(root,'items',`${CURRENT_SLOT_ID}.md`);
 need(!(existsSync(old)&&existsSync(current)),'new canonical source already exists before replacement');
 for(const name of readdirSync(join(root,'items')).filter(n=>n.endsWith('.md')&&n!==`${CURRENT_SLOT_ID}.md`)){
  const text=readFileSync(join(root,'items',name),'utf8'),aliases=frontmatterList(split(text).fm,'aliases');
  need(!aliases.includes(CURRENT_SLOT_ID)&&!aliases.includes(ORIGINAL_SLOT_ID),'collision with another navigation alias');
 }
 let owners=0;
 for(const name of readdirSync(join(root,'research')).filter(n=>n.startsWith(ORIGINAL_SLOT_RUN+'-batch-')&&n.endsWith('.pages.json'))){
  for(const page of read(join(root,'research',name)))for(const item of page.items??[]){
   if(item.id===ORIGINAL_SLOT_ID||item.id===CURRENT_SLOT_ID){owners++;need(name===`${ORIGINAL_SLOT_RUN}-batch-21.pages.json`,'another current manifest claims original/current slot');}
  }
 }
 need(owners===1,'ambiguous current original-slot ownership');
}
function boundary(state,request){
 need(state.run===ORIGINAL_SLOT_RUN&&state.stage==='5.1-adjudicate'&&state.paused===true
  &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt))
  &&request.version===1&&request.run===state.run&&request.group===state.stage
  &&same(request.stages,[state.stage])&&typeof request.id==='string'&&request.id.length>0&&date(request.at),
  'requires actual paused/drained 5.1 state and matching native owner request');
}
function finalSummary(log,reportPath,report,{original=false}={}){
 const end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);
 need(start>=0&&end>start,'missing genuine native final log segment');const text=log.slice(start+7,end).trim();
 let output;try{output=JSON.parse(text);}catch{}
 if(output){
  need(output.run===report.run&&output.phase===report.phase&&output.round===report.round&&String(output.unit)===String(report.unit)
   &&output.input_sha256===report.input_sha256,'native final summary identity differs');
  if(original){
   need(output.repair_notes?.report===reportPath&&output.repair_notes?.status==='blocked_by_reclassification_scope'
    &&output.repair_notes?.repair_complete===false&&same(output.created_items,[]),'native final lacks actual detailed report/blocker reference');
   for(const type of ['decisions','reviews']){
    const fields=type==='decisions'?['id','model','context_sha256','outcome','defect_type']:['id','disposition','post_sha256','review_context_sha256'];
    const actual=report[type].filter(r=>r.id===ORIGINAL_SLOT_ID),summarized=(output[type]??[]).filter(r=>r.id===ORIGINAL_SLOT_ID);
    need(actual.length===1&&summarized.length===1&&fields.every(k=>same(actual[0][k],summarized[0][k])),
     'native final/detailed original classification or physical review differs');
   }
  }else if(output.reviews){
   for(const row of output.reviews.filter(r=>r.id===CURRENT_SLOT_ID)){
    const detailed=report.reviews.filter(r=>r.id===CURRENT_SLOT_ID);need(detailed.length===1
     &&['id','post_sha256','review_context_sha256','disposition'].every(k=>same(row[k],detailed[0][k])),'current native summary review differs');
   }
  }
 }else need(text.includes(reportPath),'native prose final lacks exact detailed report reference');
 return sha(text);
}
function validate(root,run,row,{current=false,virtual=new Map(),receiptBytes=null}={}){
 root=resolve(root);const {sha256,...payload}=row;
 need(run===ORIGINAL_SLOT_RUN&&row.version===1&&row.kind==='owner-original-slot-reclassification'
  &&row.run===run&&row.authorized_by==='owner'&&row.owner_identity==='/root'
  &&row.original_id===ORIGINAL_SLOT_ID&&row.current_id===CURRENT_SLOT_ID&&row.batch==='21'
  &&row.historical_only===true&&row.current_review_granted===false&&row.native_execution_coverage_adopted===false
  &&row.authorship_credit_granted===false&&row.judgment_credit_granted===false
  &&typeof row.reason==='string'&&row.reason.trim().length>=80&&date(row.recorded_at)
  &&typeof row.repairer_identity==='string'&&/^\/root(?:\/\S+)?$/.test(row.repairer_identity)
  &&sha256===sha(payload),'invalid bounded envelope');
 const evidence={},readBytes=new Map(),bytes=file=>{
  const p=resolve(root,file);need(Object.hasOwn(row.bindings??{},relative(root,p)),'unbound evidence '+file);
  if(readBytes.has(p))return readBytes.get(p);
  if(!virtual.has(p))regular(root,p);
  const text=virtual.get(p)??readFileSync(p,'utf8');need(sha(text)===row.bindings[relative(root,p)],'stale evidence '+file);
  evidence[p]=sha(text);readBytes.set(p,text);return text;
 },bound=file=>JSON.parse(bytes(file));
 need(row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings),'missing bindings');
 for(const file of Object.keys(row.bindings))bytes(file);
 const frontier=bound(relative(root,join(dir(root,run),'frontier.json'))),baseline=bound(relative(root,join(dir(root,run),'baseline.json')));
 const pack=bound(relative(root,join(dir(root,run),'initial-1.json'))),verdicts=bound(relative(root,join(dir(root,run),'step4-verdicts.json')));
 frontierCheck(frontier,pack,baseline);
 need(same(verdicts.filter(v=>v.keep===false),pack.rejected),'original Step 4 rejected tuples changed');
 const packSha=sha(pack),state=bound(row.creation_state),request=bound(row.owner_gate_request);boundary(state,request);
 need(request.id===row.owner_gate_request_id&&Date.parse(request.at)<=Date.parse(row.recorded_at),'creation hold differs');
 // Every old native handoff stays exact, including its successful attempt and prompt.
 for(const unit of pack.units){
  const label=`step5-v2-initial-r1-u${unit}`,reportPath=relative(root,join(dir(root,run),`${label}.json`));
  const report=bound(reportPath),empty=report.completion==='mechanical-zero-work';
  const nativeLabel=empty?`step5-v2-empty-initial-r1-u${unit}`:label,role=empty?'tool':'alpha-adjudicate';
  const dispatchPath=relative(root,join(root,'research',`${run}-dispatch`,`${role}-${nativeLabel}.result.json`)),native=bound(dispatchPath);
  const nativeState=Object.values(state.dispatches??{}).filter(d=>d.stage==='5.1-adjudicate'&&d.label===nativeLabel&&d.role===role);
  need(nativeState.length===1&&same(nativeState[0].covers,[unit])&&nativeState[0].lastExitOk===true
   &&date(nativeState[0].startedAt)&&date(nativeState[0].endedAt)&&Date.parse(nativeState[0].endedAt)<=Date.parse(request.at)
   &&date(native.ended_at)&&Date.parse(native.ended_at)<=Date.parse(nativeState[0].endedAt),'native state does not authenticate completed handoff '+unit);
  need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit&&report.input_sha256===packSha
   &&native.ok===true&&native.run===run&&native.role===role&&native.label===nativeLabel&&same(native.covers,[unit]),'invalid original handoff '+unit);
  if(empty){
   need(pack.assignments[unit].length===0&&report.written_by==='step5-workflow'&&report.mathematical_review===false
    &&['decisions','reviews','created_items','downstream','ledger_updates','gate_resolutions'].every(k=>same(report[k],[]))
    &&native.written_by==='autopilot','invalid mechanical zero-work history '+unit);continue;
  }
  need(native.process_exit_code===0&&native.exit_code===0&&native.timed_out===false
   &&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false
   &&native.terminal_summary?.final_response_present===true&&native.terminal_summary?.error_events===0
   &&native.provider_effort==='high'
   &&native.model==='gpt-6.1-sol'&&same(native.covers,[unit])&&Number.isSafeInteger(native.attempt)&&native.attempt>0
   &&native.attempt===nativeState[0].attempt&&native.evidence_tag===`.attempt-${native.attempt}`,'invalid original native handoff '+unit);
  need(bytes(dispatchPath)===bytes(dispatchPath.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`)),
   'original immutable attempt changed '+unit);
  need(typeof native.prompt==='string'&&resolve(root,native.prompt)===resolve(root,dispatchPath.replace(/\.result\.json$/,`.attempt-${native.attempt}.prompt.md`)),
   'original prompt identity changed '+unit);
  const prompt=bytes(native.prompt);need(prompt.includes(`run: ${run}`)&&prompt.includes(`unit:"${unit}"`)
   &&prompt.includes(`input_sha256:"${packSha}"`),'original prompt headers changed '+unit);
  if(unit==='21'){
   const logPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${native.attempt}.log`);
   need(resolve(root,native.log??'')===resolve(root,logPath)&&prompt.includes(`output: ${reportPath}`),'original native log/output identity differs');
   const summaryHash=finalSummary(bytes(logPath),reportPath,report,{original:true});
   need(row.native_final_summary_sha256===summaryHash&&row.report_observation_limit==='root-current-detailed-report-capture; immutable-native-final-summary-only',
    'missing truthful separate final-summary/report capture boundary');
  }
 }
 const report=bound(relative(root,join(dir(root,run),'step5-v2-initial-r1-u21.json'))),assigned=pack.assignments['21'].filter(v=>v.id===ORIGINAL_SLOT_ID);
 const decisions=report.decisions.filter(v=>v.id===ORIGINAL_SLOT_ID),reviews=report.reviews.filter(v=>v.id===ORIGINAL_SLOT_ID);
 need(assigned.length===1&&decisions.length===1&&decisions[0].outcome==='confirmed_fatal'
  &&decisions[0].model===assigned[0].model&&decisions[0].context_sha256===assigned[0].context_sha256
  &&reviews.length===1&&reviews[0].disposition==='repaired'&&same(report.created_items,[])
  &&report.repair_notes?.status==='blocked_by_reclassification_scope'&&report.repair_notes?.repair_complete===false,
  'not the original u21 fatal/reclassification blocker');
 const original=bytes(row.entry.original_source_file),before=bytes(row.entry.before_source_file),after=bytes(row.entry.current_source_file);
 const originalFm=carrier(original,ORIGINAL_SLOT_ID),beforeFm=carrier(before,ORIGINAL_SLOT_ID);
 need(originalFm.kind==='open-problem'&&beforeFm.kind==='open-problem'&&originalFm.status==='draft'&&beforeFm.status==='draft'
  &&itemHashGuard(original)===baseline[ORIGINAL_SLOT_ID]&&itemHashGuard(before)===reviews[0].post_sha256
  &&section(original,'Open problem')===section(before,'Open problem'),'original/source-post question or guard changed');
 const affirmative=affirmativeOriginalQuestion(original),afterFm=currentCarrier(after,affirmative);
 for(const [field,actual]of Object.entries({before_raw_sha256:sha(before),after_raw_sha256:sha(after),original_raw_sha256:sha(original),before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),before_statement_sha256:statementHash(before),after_statement_sha256:statementHash(after)}))
  need(row.entry[field]===actual,'source transition binding differs: '+field);
 const expectedMetadata=[`research/${run}-batch-21.pages.json`,`research/${run}-batch-21.proof-contracts.json`,
  `research/${run}-proof-contracts.json`,'research/plan-spec.json',`library/inverse-problems/${row.home_page}.md`];
 need(Array.isArray(row.metadata_carriers)&&same(row.metadata_carriers.map(c=>c.path).sort(),expectedMetadata.sort()),'exact owning manifest, proof contract and page required');
 const metadata=new Map();
 for(const c of row.metadata_carriers){
  const old=bytes(c.before_file),next=bytes(c.current_file);need(old!==next,'unchanged migration metadata');metadata.set(c.path,c);
  if(c.path.endsWith('.pages.json')){
   const a=JSON.parse(old),b=JSON.parse(next),inventory=x=>x.map(p=>[p.id,p.items.map(i=>i.id)]);
   need(same(inventory(a).map(([id,ids])=>[id,ids.map(i=>i===ORIGINAL_SLOT_ID?CURRENT_SLOT_ID:i)]),inventory(b)),
    'manifest changes original ownership or unrelated inventory');
   const beforePage=a.filter(p=>p.items.some(i=>i.id===ORIGINAL_SLOT_ID)),afterPage=b.filter(p=>p.items.some(i=>i.id===CURRENT_SLOT_ID));
   need(beforePage.length===1&&afterPage.length===1&&beforePage[0].id===row.home_page&&afterPage[0].id===row.home_page,'same home required');
   const copy=structuredClone(a),p=copy.find(p=>p.id===row.home_page),index=p.items.findIndex(i=>i.id===ORIGINAL_SLOT_ID),replacement=afterPage[0].items[index];
   for(const field of ['kind','title','deps','justified_by','dependency_level'])if(Object.hasOwn(replacement,field)||Object.hasOwn(afterFm,field))
    need(same(replacement[field],afterFm[field]),'current manifest/source mirror differs '+field);
   need(replacement.kind==='example'&&replacement.statement===affirmative,'current manifest kind/Example body mirror');p.items[index]=replacement;need(same(copy,b),'unrelated manifest edits');
  }else if(c.path.startsWith('library/')){
   need(old.split(ORIGINAL_SLOT_ID).length===2&&next===old.replace(ORIGINAL_SLOT_ID,CURRENT_SLOT_ID),'owning page may only replace one inventory ID');
  }else if(c.path.endsWith('proof-contracts.json')){
   const a=JSON.parse(old),b=JSON.parse(next),copy=structuredClone(a);
   need(a.contracts?.[ORIGINAL_SLOT_ID]&&b.contracts?.[CURRENT_SLOT_ID]&&!b.contracts[ORIGINAL_SLOT_ID]
    &&Array.isArray(a.scope)&&a.scope.includes(ORIGINAL_SLOT_ID)&&!a.scope.includes(CURRENT_SLOT_ID)
    &&!b.contracts[CURRENT_SLOT_ID].open_problem_review,'proved example requires ordinary replacement proof contract');
   copy.scope=copy.scope.map(id=>id===ORIGINAL_SLOT_ID?CURRENT_SLOT_ID:id);
   // Map insertion order is editorial; compare stable objects for this keyed move.
   delete copy.contracts[ORIGINAL_SLOT_ID];copy.contracts[CURRENT_SLOT_ID]=b.contracts[CURRENT_SLOT_ID];
   need(sha(stable(copy))===sha(stable(b)),'unrelated proof-contract changes');
  }else{
   // plan-spec is large. Inspect only the sole changed JSON item record and
   // compare the untouched byte prefixes/suffixes, without parsing the corpus.
   const a=recordSpan(old,ORIGINAL_SLOT_ID),b=recordSpan(next,CURRENT_SLOT_ID);
   need(b.record.kind==='example'&&b.record.statement===affirmative&&!new RegExp('"id"\\s*:\\s*"'+ORIGINAL_SLOT_ID+'"').test(next)
    &&old.slice(0,a.start)===next.slice(0,b.start)&&old.slice(a.end)===next.slice(b.end),
    'unrelated plan registry changes');
  }
 }
 const review=bound(row.root_math_review),consumers=bound(row.consumer_dispositions);
 need(review.run===run&&review.original_id===ORIGINAL_SLOT_ID&&review.current_id===CURRENT_SLOT_ID
  &&review.reviewer===row.repairer_identity&&review.original_question_preserved===true&&review.native_execution_coverage_adopted===false
  &&typeof review.reading_limits==='string'&&review.reading_limits.length>=20
  &&consumers.run===run&&consumers.reviewer===row.repairer_identity&&consumers.original_id===ORIGINAL_SLOT_ID
  &&consumers.current_id===CURRENT_SLOT_ID&&Array.isArray(consumers.items)&&consumers.full_affected_scope_checked===true
  &&consumers.native_execution_coverage_adopted===false,'missing separately attributed mathematics/consumer direction');
 if(current){
  need(!existsSync(join(root,'items',`${ORIGINAL_SLOT_ID}.md`)),'old canonical source still exists');
  currentCarrier(readFileSync(join(root,'items',`${CURRENT_SLOT_ID}.md`),'utf8'),affirmative);
  // Current metadata may receive genuine later repairs; its ownership cannot migrate again.
  const pages=read(join(root,`research/${run}-batch-21.pages.json`));
  need(pages.filter(p=>p.id===row.home_page&&p.items.some(i=>i.id===CURRENT_SLOT_ID&&i.kind==='example')).length===1
   &&!pages.some(p=>p.items.some(i=>i.id===ORIGINAL_SLOT_ID)),'current original-slot home changed');
 }
 const path=originalSlotReclassificationPath(root,run);if(receiptBytes)evidence[path]=sha(receiptBytes);
 const loaded={root,run,row,entry:row.entry,path,evidence,metadata,original_id:ORIGINAL_SLOT_ID,current_id:CURRENT_SLOT_ID,
  before_guard:row.entry.before_guard,after_guard:row.entry.after_guard,before_raw_sha256:row.entry.before_raw_sha256,
  original_raw_sha256:row.entry.original_raw_sha256,after_raw_sha256:row.entry.after_raw_sha256,
  allowed_original_raw_sha256:[row.entry.original_raw_sha256,row.entry.before_raw_sha256],
  historical_source:before,historical_review:reviews[0],original_source:original,affirmative,frontier,pack};
 authenticated.add(loaded);return loaded;
}
export function loadOriginalSlotReclassification(root,run,{current=false}={}){
 const path=originalSlotReclassificationPath(root,run);if(!existsSync(path))return null;
 const bytes=readFileSync(path,'utf8'),history=validate(root,run,JSON.parse(bytes),{current,receiptBytes:bytes});
 const levelPath=originalSlotLevelCorrectionPath(root,run);
 if(existsSync(levelPath)){
  const text=readFileSync(levelPath,'utf8');history.level_correction=validateLevelCorrection(history,JSON.parse(text),{receiptBytes:text});
  Object.assign(history.evidence,history.level_correction.evidence);
 }
 return history;
}
export function projectedOriginalIds(root,run,frontierIds){
 const history=loadOriginalSlotReclassification(root,run,{current:true});
 if(!history)return [...frontierIds];
 need(same([...frontierIds].sort(),history.frontier.ids.slice().sort()),'projection must name the exact original frontier');
 const projected=frontierIds.map(id=>id===ORIGINAL_SLOT_ID?CURRENT_SLOT_ID:id);
 need(projected.length===1472&&new Set(projected).size===1472,'nonbijective original-slot projection');return projected;
}
export function originalSlotView(root,run,{frontier=null}={}){
 const ids=Array.isArray(frontier)?frontier:frontier?.ids??read(join(dir(root,run),'frontier.json')).ids;
 const currentIds=projectedOriginalIds(root,run,ids),history=loadOriginalSlotReclassification(root,run,{current:true});
 const originalToCurrent=Object.fromEntries(ids.map((id,i)=>[id,currentIds[i]])),currentToOriginal=Object.fromEntries(currentIds.map((id,i)=>[id,ids[i]]));
 return {originalIds:[...ids],currentIds,originalToCurrent,currentToOriginal,
  currentId:id=>originalToCurrent[id]??id,originalId:id=>currentToOriginal[id]??id,
  currentOwner:id=>history?.frontier.batches.find(b=>b.items.includes(currentToOriginal[id]??id))?.id,
  transitionForOriginal:id=>history&&id===ORIGINAL_SLOT_ID?history:null,evidence:history?.evidence??{},history};
}
export function historicalInitialSource(history,id){return authenticated.has(history)&&id===ORIGINAL_SLOT_ID?history.historical_source:null;}
export function isOriginalSlotReclassification(history,pack,now){
 return authenticated.has(history)&&same(history.pack,pack)&&pack.phase==='initial'&&pack.round===1
  &&!Object.hasOwn(now,ORIGINAL_SLOT_ID)&&now[CURRENT_SLOT_ID]===(history.level_correction?.after_guard??history.after_guard);
}
export function supportingReclassificationHistory(history,path,expected){
 if(!history?.root||!history?.run)return null;const loaded=loadOriginalSlotReclassification(history.root,history.run);if(!loaded)return null;
 const c=loaded.metadata.get(relative(resolve(history.root),resolve(history.root,path)));
 if(c&&sha(readFileSync(resolve(history.root,c.before_file),'utf8'))===expected)
  return {archive:resolve(history.root,c.before_file),marker:loaded.path,evidence:loaded.evidence};
 return supportingOriginalSlotLevelHistory(history,path,expected,{loaded});
}
// The first actual preparation found the migrated label 4 should be 1. This
// separate immutable correction never changes the migration or native history.
function validateLevelCorrection(history,row,{virtual=new Map(),receiptBytes=null}={}){
 const {root,run}=history,{sha256,...payload}=row;
 need(row.version===1&&row.kind==='owner-original-slot-computed-level-correction'&&row.run===run
  &&row.owner_identity==='/root'&&row.original_id===ORIGINAL_SLOT_ID&&row.current_id===CURRENT_SLOT_ID
  &&row.before_level===4&&row.after_level===1&&row.historical_only===true&&row.current_review_granted===false
  &&row.native_execution_coverage_adopted===false&&date(row.recorded_at)&&sha256===sha(payload)
  &&row.migration.path===relative(root,history.path)&&row.migration.sha256===history.evidence[history.path],
  'invalid exact computed-level followup');
 const evidence={},bytes=file=>{
  const p=resolve(root,file),expected=row.bindings?.[relative(root,p)];need(/^[a-f0-9]{64}$/.test(expected??''),'unbound level archive');
  if(!virtual.has(p))regular(root,p);const text=virtual.get(p)??readFileSync(p,'utf8');need(sha(text)===expected,'stale level archive '+file);
  evidence[p]=expected;return text;
 },bound=file=>JSON.parse(bytes(file));
 for(const file of Object.keys(row.bindings??{}))bytes(file);
 const state=bound(row.creation_state),request=bound(row.owner_gate_request);boundary(state,request);
 need(Date.parse(request.at)<=Date.parse(row.recorded_at),'level correction predates creation hold');
 const snapshot=bound(row.manifest_snapshot),pages=[];
 need(Array.isArray(snapshot)&&snapshot.length>0&&new Set(snapshot.map(r=>r.path)).size===snapshot.length,'invalid level manifest snapshot');
 for(const carrier of snapshot){
  const match=new RegExp(`^research/${run}-batch-(\\d+)\\.pages\\.json$`).exec(carrier.path);
  need(match&&typeof carrier.raw==='string'&&sha(carrier.raw)===carrier.raw_sha256,'invalid level graph carrier');
  const rows=JSON.parse(carrier.raw);need(Array.isArray(rows),'invalid level graph pages');pages.push(...rows.map(p=>({...p,batch:match[1]})));
 }
 const expected=history.frontier.ids.map(id=>id===ORIGINAL_SLOT_ID?CURRENT_SLOT_ID:id).sort(),ids=pages.flatMap(p=>p.items.map(i=>i.id));
 need(ids.length===1472&&new Set(ids).size===1472&&same(ids.slice().sort(),expected),'level graph must be the exact1472 current original slots');
 const graph=dependencyLevels(pages,{validateLabels:false});need(graph.errors.length===0&&graph.levels.get(CURRENT_SLOT_ID)===1,
  'level correction is not the computed current-frontier level1');
 const source=bytes(row.source_file),before=readFileSync(resolve(root,history.entry.current_source_file),'utf8');
 const matches=[...before.matchAll(/^dependency_level:[ \t]*4[ \t]*$/gm)];need(matches.length===1,'migration source must have one level4 scalar');
 need(source===before.replace(/^dependency_level:[ \t]*4[ \t]*$/m,line=>line.replace('4','1'))
  &&row.before_guard===history.after_guard&&row.after_guard===itemHashGuard(source),
  'level followup changed source beyond the exact4-to1 label');
 const sourceFm=currentCarrier(source,history.affirmative),manifestPath=`research/${run}-batch-21.pages.json`,planPath='research/plan-spec.json';
 need(Array.isArray(row.metadata_carriers)&&same(row.metadata_carriers.map(c=>c.path).sort(),[manifestPath,planPath].sort()),
  'level correction has unsupported metadata carriers');
 for(const c of row.metadata_carriers){
  const original=history.metadata.get(c.path);need(original,'level carrier absent from immutable migration');
  const old=readFileSync(resolve(root,original.current_file),'utf8'),next=bytes(c.file);
  need(c.before_raw_sha256===sha(old),'level metadata preimage differs from migration afterarchive');
  if(c.path===manifestPath){
   const a=JSON.parse(old),b=JSON.parse(next),target=a.flatMap(p=>p.items).filter(i=>i.id===CURRENT_SLOT_ID);
   need(target.length===1&&target[0].dependency_level===4,'level manifest original identity');target[0].dependency_level=1;
   need(same(a,b),'level followup changed other manifest content');
   const current=graph.items.get(CURRENT_SLOT_ID)?.item;
   need(same(current,b.flatMap(p=>p.items).find(i=>i.id===CURRENT_SLOT_ID))&&same(current.deps,sourceFm.deps),
    'computed graph/source/manifest disagree');
   const captured=snapshot.find(r=>r.path===c.path);need(captured?.raw===next,'level graph lacks exact corrected manifest');
  }else{
   const a=recordSpan(old,CURRENT_SLOT_ID),b=recordSpan(next,CURRENT_SLOT_ID);
   need(a.record.dependency_level===4,'level plan original label');a.record.dependency_level=1;
   need(same(stable(a.record),stable(b.record))&&old.slice(0,a.start)===next.slice(0,b.start)&&old.slice(a.end)===next.slice(b.end),
    'level followup changed other plan content');
  }
 }
 const path=originalSlotLevelCorrectionPath(root,run);if(receiptBytes)evidence[path]=sha(receiptBytes);
 return {row,path,evidence,after_guard:row.after_guard,source_file:row.source_file};
}
export function supportingOriginalSlotLevelHistory(context,path,expected,{loaded=null}={}){
 if(!context?.root||!context?.run)return null;
 const history=loaded??loadOriginalSlotReclassification(context.root,context.run);if(!history?.level_correction)return null;
 const relativePath=relative(resolve(context.root),resolve(context.root,path));
 if(!history.level_correction.row.metadata_carriers.some(c=>c.path===relativePath))return null;
 const carrier=history.metadata.get(relativePath),archive=resolve(context.root,carrier.current_file);
 return sha(readFileSync(archive,'utf8'))===expected?{archive,marker:history.level_correction.path,evidence:history.evidence}:null;
}
export function recordOriginalSlotLevelCorrection(root,run){
 root=resolve(root);need(run===ORIGINAL_SLOT_RUN,'unsupported level-correction run');beforeImpact(root,run);
 const target=originalSlotLevelCorrectionPath(root,run);need(!existsSync(target),'level correction already recorded');
 const history=loadOriginalSlotReclassification(root,run,{current:true});need(history,'original migration receipt required');
 const statePath=join(root,'.autopilot',run,'state.json'),requestPath=join(root,'.autopilot',run,'owner-gate-request.json');
 const state=readFileSync(statePath,'utf8'),request=readFileSync(requestPath,'utf8');boundary(JSON.parse(state),JSON.parse(request));
 const base=join(archiveDir(root,run),'computed-level'),virtual=new Map(),archive=(name,bytes)=>{
  const file=join(base,name);virtual.set(file,bytes);return relative(root,file);
 };
 const sourcePath=join(root,'items',`${CURRENT_SLOT_ID}.md`),source=readFileSync(sourcePath,'utf8');
 const manifestFiles=readdirSync(join(root,'research')).filter(name=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name)).sort();
 const snapshot=manifestFiles.map(name=>{const path=`research/${name}`,raw=readFileSync(join(root,path),'utf8');return {path,raw,raw_sha256:sha(raw)};});
 const metadata_carriers=[`research/${run}-batch-21.pages.json`,'research/plan-spec.json'].map((path,index)=>{
  const before=history.metadata.get(path);return {path,before_raw_sha256:sha(readFileSync(resolve(root,before.current_file),'utf8')),
   file:archive(`metadata-${index}.json`,readFileSync(resolve(root,path),'utf8'))};
 });
 const row={version:1,kind:'owner-original-slot-computed-level-correction',run,owner_identity:'/root',original_id:ORIGINAL_SLOT_ID,current_id:CURRENT_SLOT_ID,
  before_level:4,after_level:1,historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,recorded_at:new Date().toISOString(),
  migration:{path:relative(root,history.path),sha256:history.evidence[history.path]},before_guard:history.after_guard,after_guard:itemHashGuard(source),
  source_file:archive('source.md',source),metadata_carriers,manifest_snapshot:archive('manifest-snapshot.json',JSON.stringify(snapshot)+'\n'),
  creation_state:archive('creation-state.json',state),owner_gate_request:archive('native-owner-request.json',request),
  bindings:Object.fromEntries([...virtual].map(([path,text])=>[relative(root,path),sha(text)]))};row.sha256=sha(row);
 validateLevelCorrection(history,row,{virtual});
 need(readFileSync(statePath,'utf8')===state&&readFileSync(requestPath,'utf8')===request&&readFileSync(sourcePath,'utf8')===source,'level recording boundary changed');
 for(const s of snapshot)need(readFileSync(join(root,s.path),'utf8')===s.raw,'level manifest graph changed during recording');
 for(const c of metadata_carriers)need(readFileSync(resolve(root,c.path),'utf8')===virtual.get(resolve(root,c.file)),'level metadata changed during recording');
 for(const [file,text]of virtual){mkdirSync(dirname(file),{recursive:true});need(!existsSync(file),'level archive already exists');writeFileSync(file,text,{flag:'wx'});}
 writeFileSync(target,JSON.stringify(row,null,2)+'\n',{flag:'wx'});
 return {path:target,before_level:4,after_level:1,current_review_granted:false,native_execution_coverage_adopted:false};
}
export function licensedOriginalSlotReplacement(root,run,oldId,newId,certificate){
 const history=loadOriginalSlotReclassification(root,run,{current:true});if(!history||oldId!==history.original_id||newId!==history.current_id)return false;
 const current=readFileSync(join(root,'items',`${newId}.md`),'utf8'),rows=certificate?.items?.filter(r=>r.id===newId)??[];
 return rows.length===1&&rows[0].guard_sha256===itemHashGuard(current)
  &&rows[0].item_sha256===itemHashJudge(current)&&/^[a-f0-9]{64}$/.test(rows[0].context_sha256??'')
  &&!certificate.items.some(r=>r.id===oldId)&&!(certificate.creations??[]).some(r=>r.id===newId)
  &&Object.entries(history.evidence).every(([p,h])=>certificate.evidence?.[p]===h)
  &&Boolean(originalSlotCurrentReview(root,run,certificate,{current:true}));
}
// A root transition or old u21 review can never satisfy this current native duty.
function currentReviewContext(root){
 const source=readFileSync(join(root,'items',`${CURRENT_SLOT_ID}.md`),'utf8'),fm=carrier(source,CURRENT_SLOT_ID);
 const suppliers=[...new Set([...(fm.deps??[]),...(fm.justified_by??[]),...(fm.forward_refs??[]),...(fm.external_refs??[]),
  ...[...split(source).body.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1])].map(id=>id===ORIGINAL_SLOT_ID?CURRENT_SLOT_ID:id))]
  .filter(id=>id!==CURRENT_SLOT_ID).sort();
 return sha({version:3,item:[CURRENT_SLOT_ID,itemHashGuard(source)],suppliers:suppliers.map(id=>{
  const p=join(root,'items',`${id}.md`);need(existsSync(p),'current example supplier is missing: '+id);return [id,statementHash(readFileSync(p,'utf8'))];
 })});
}
export function originalSlotCurrentReview(root,run,certificate,{current=false}={}){
 const history=loadOriginalSlotReclassification(root,run,{current:true});if(!history)return null;
 const item=certificate?.items?.find(row=>row.id===CURRENT_SLOT_ID);if(!item)return null;
 const context=current?currentReviewContext(root):null;
 const bound=p=>certificate.evidence?.[p]===sha(readFileSync(p,'utf8'));
 for(const path of Object.keys(certificate.evidence??{})){
  const match=/\/step5-v2-((?:impact-initial|impact-repeat|gate)(?:-pass-\d+)?)-r(\d+)-u(\d+)\.json$/.exec(path);if(!match)continue;
  need(bound(path),'native current review report changed');const report=read(path),phase=match[1],round=Number(match[2]),unit=match[3];
  const review=report.reviews?.find(row=>row.id===CURRENT_SLOT_ID&&row.post_sha256===item.guard_sha256);
  if(!review||(current&&review.review_context_sha256!==context))continue;
  const packPath=join(dir(root,run),`${phase}-${round}.json`),pack=read(packPath);
  need(bound(packPath)&&report.run===run&&report.phase===phase&&report.round===round&&String(report.unit)===unit
   &&report.input_sha256===sha(pack)&&pack.assignments[unit]?.includes(CURRENT_SLOT_ID)
   &&['repaired','unaffected'].includes(review.disposition)&&review.uncertain===false
   &&/^[a-f0-9]{64}$/.test(review.review_context_sha256??''),'missing current assigned example proof review');
  const label=`step5-v2-${phase}-r${round}-u${unit}`,dispatch=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`),native=read(dispatch);
  need(bound(dispatch)&&native.run===run&&native.role==='alpha-repair'&&native.label===label&&native.ok===true
   &&native.model==='gpt-6.1-sol'&&native.provider_effort==='high'&&native.exit_code===0&&native.process_exit_code===0
   &&native.timed_out===false&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false
   &&native.terminal_summary?.final_response_present===true&&native.terminal_summary?.error_events===0
   &&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.evidence_tag===`.attempt-${native.attempt}`
   &&same(native.covers,[phase.includes('-pass-')?`${phase}:${unit}`:unit]),'current example lacks genuine native owner execution');
  need(readFileSync(dispatch,'utf8')===readFileSync(dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`),'utf8'),
   'current example native immutable attempt changed');
  const prompt=resolve(root,native.prompt??''),log=resolve(root,native.log??'');
  need(bound(prompt)&&bound(log)&&prompt===dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.prompt.md`)
   &&log===dispatch.replace(/\.result\.json$/,`.attempt-${native.attempt}.log`),'current example lacks bound actual prompt/final log');
  const promptText=readFileSync(prompt,'utf8');need(promptText.includes(`run: ${run}`)
   &&promptText.includes(`output: ${relative(root,path)}`)&&promptText.includes(`input_sha256:"${sha(pack)}"`),'current example prompt identity differs');
  finalSummary(readFileSync(log,'utf8'),relative(root,path),report);
  return review;
 }
 return null;
}
function prepare(root,run,requestFile){
 root=resolve(root);need(run===ORIGINAL_SLOT_RUN,'unsupported run');beforeImpact(root,run);
 applicationCollisions(root);
 const statePath=join(root,'.autopilot',run,'state.json'),ownerPath=join(root,'.autopilot',run,'owner-gate-request.json');
 const stateBytes=readFileSync(statePath,'utf8'),ownerBytes=readFileSync(ownerPath,'utf8');boundary(JSON.parse(stateBytes),JSON.parse(ownerBytes));
 const requestPath=regular(root,requestFile),requestBytes=readFileSync(requestPath,'utf8'),request=JSON.parse(requestBytes);
 need(!request.creation_state&&!request.owner_gate_request&&!request.bindings&&!request.sha256,'owner may not supply synthetic creation/bindings');
 const base=archiveDir(root,run),virtual=new Map(),pin=(path,text)=>{virtual.set(resolve(path),text);return relative(root,path);};
 const row={...request,creation_state:pin(join(base,'creation-state.json'),stateBytes),
  owner_gate_request:pin(join(base,'native-owner-request.json'),ownerBytes),owner_gate_request_id:JSON.parse(ownerBytes).id,
  owner_request_file:pin(join(base,'owner-request.json'),requestBytes),bindings:{}};
 const inputs=[join(dir(root,run),'frontier.json'),join(dir(root,run),'baseline.json'),join(dir(root,run),'step4-verdicts.json'),join(dir(root,run),'initial-1.json')];
 const pack=read(inputs.at(-1));
 for(const unit of pack.units){const label=`step5-v2-initial-r1-u${unit}`,report=join(dir(root,run),`${label}.json`),empty=read(report).completion==='mechanical-zero-work';
  const d=join(root,'research',`${run}-dispatch`,empty?`tool-step5-v2-empty-initial-r1-u${unit}.result.json`:`alpha-adjudicate-${label}.result.json`),n=read(d);
  inputs.push(report,d);if(!empty)inputs.push(d.replace(/\.result\.json$/,`.attempt-${n.attempt}.result.json`),resolve(root,n.prompt));
  if(unit==='21'){
   const log=readFileSync(resolve(root,n.log),'utf8');inputs.push(resolve(root,n.log));
   row.native_final_summary_sha256=finalSummary(log,relative(root,report),read(report),{original:true});
   row.report_observation_limit='root-current-detailed-report-capture; immutable-native-final-summary-only';
  }
 }
 inputs.push(...['original_source_file','before_source_file','current_source_file'].map(k=>resolve(root,row.entry[k])),
  ...row.metadata_carriers.flatMap(c=>[resolve(root,c.before_file),resolve(root,c.current_file)]),resolve(root,row.root_math_review),resolve(root,row.consumer_dispositions));
 for(const p of inputs){regular(root,p);row.bindings[relative(root,p)]=sha(readFileSync(p,'utf8'));}
 for(const [p,text]of virtual)row.bindings[relative(root,p)]=sha(text);
 row.sha256=sha(row);const loaded=validate(root,run,row,{virtual});
 return {root,run,row,loaded,virtual,statePath,stateBytes,ownerPath,ownerBytes};
}
export function previewOriginalSlotReclassification(root,run,requestFile){
 const p=prepare(root,run,requestFile);return {row:p.row,original_id:ORIGINAL_SLOT_ID,current_id:CURRENT_SLOT_ID,
  source_changes_required:true,current_review_granted:false,native_execution_coverage_adopted:false};
}
export function recordOriginalSlotReclassification(root,run,requestFile){
 const p=prepare(root,run,requestFile),target=originalSlotReclassificationPath(p.root,run);
 need(!existsSync(target),'receipt already recorded');validate(p.root,run,p.row,{current:true,virtual:p.virtual});
 applicationCollisions(p.root);
 for(const c of p.row.metadata_carriers)need(readFileSync(resolve(p.root,c.path),'utf8')===readFileSync(resolve(p.root,c.current_file),'utf8'),'live metadata is not exact integration archive '+c.path);
 need(readFileSync(join(p.root,'items',`${CURRENT_SLOT_ID}.md`),'utf8')===readFileSync(resolve(p.root,p.row.entry.current_source_file),'utf8'),'live source not exact integration archive');
 need(readFileSync(p.statePath,'utf8')===p.stateBytes&&readFileSync(p.ownerPath,'utf8')===p.ownerBytes,'creation boundary changed');
 for(const [file,hash]of Object.entries(p.row.bindings))need(sha(p.virtual.get(resolve(p.root,file))??readFileSync(resolve(p.root,file),'utf8'))===hash,'input changed during recording');
 for(const [file,text]of p.virtual){mkdirSync(dirname(file),{recursive:true});if(existsSync(file))need(readFileSync(file,'utf8')===text,'immutable creation archive conflict');else writeFileSync(file,text,{flag:'wx'});}
 writeFileSync(target,JSON.stringify(p.row,null,2)+'\n',{flag:'wx'});
 return {path:target,original_id:ORIGINAL_SLOT_ID,current_id:CURRENT_SLOT_ID,current_review_granted:false,native_execution_coverage_adopted:false};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const args=process.argv.slice(2),opt=n=>{const i=args.indexOf(n);return i<0?undefined:args[i+1];};need(['preview','record','record-level-correction','check'].includes(args[0]),'expected preview|record|record-level-correction|check');
  const root=resolve(opt('--root')??process.cwd()),run=opt('--run');
  const result=args[0]==='check'?loadOriginalSlotReclassification(root,run,{current:true}):args[0]==='preview'?previewOriginalSlotReclassification(root,run,opt('--authorization')):args[0]==='record-level-correction'?recordOriginalSlotLevelCorrection(root,run):recordOriginalSlotReclassification(root,run,opt('--authorization'));
  console.log(JSON.stringify(args[0]==='check'?{present:Boolean(result),original_id:result?.original_id,current_id:result?.current_id,current_review_granted:false}:result,null,2));
 }catch(error){console.error(error.message);process.exitCode=1;}
}
