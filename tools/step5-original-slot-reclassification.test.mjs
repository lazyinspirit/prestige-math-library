import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {itemHashGuard,itemHashJudge} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {ORIGINAL_SLOT_RUN as RUN,ORIGINAL_SLOT_ID as OLD,CURRENT_SLOT_ID as NEW,affirmativeOriginalQuestion,previewOriginalSlotReclassification,recordOriginalSlotReclassification,recordOriginalSlotLevelCorrection,loadOriginalSlotReclassification,projectedOriginalIds,originalSlotView,historicalInitialSource,isOriginalSlotReclassification,licensedOriginalSlotReplacement,originalSlotCurrentReview,supportingReclassificationHistory,supportingOriginalSlotLevelHistory} from './step5-original-slot-reclassification.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const put=(root,p,x)=>{const full=resolve(root,p);mkdirSync(dirname(full),{recursive:true});writeFileSync(full,typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return full;};
const get=p=>JSON.parse(readFileSync(p,'utf8'));
// Reusable real-loader fixture. Importing this file does not register its tests.
export function createOriginalSlotFixture({fullBaseline=false,migrationLevel=null}={}){
 const root=mkdtempSync(join(tmpdir(),'step5-original-slot-')),run=RUN,d=`research/${run}-step5-v2`,home='credible-sets-and-frequency-coverage-in-inverse-problems';
 const old=`---\nid: ${OLD}\nkind: open-problem\nstatus: draft\npipeline_run: ${run}\ndeps: []\n---\n\n## Open problem\n\nFix all original model constants and selector branches. Does there exist a single graph-measurable rule with every uniform coverage and no-log diameter target \\eta?$$\n\n## Status\n\nOriginally unresolved.\n`;
 const before=old.replace('Originally unresolved.','Affirmative construction; classification repair remains blocked.');
 const example=old.split('## Open problem\n\n')[1].split('\n\n## Status')[0].replace('Does there exist','There exists').replace('\\eta?$$',()=> '\\eta.$$');
 const fixtureDeps=migrationLevel===null?[]:['ex-original-slot-fixture-0'];
 const current=`---\nid: ${NEW}\nkind: example\ntitle: Exact coverage example\nstatus: draft\npipeline_run: ${run}\n${migrationLevel===null?'':`dependency_level: ${migrationLevel}\n`}deps: [${fixtureDeps.join(', ')}]\njustified_by: []\naliases: [${OLD}]\nprovenance: {statement: ai-generated, proof: ai-generated}\ngeneration: {role: example}\n---\n\n## Example\n\n${example}\n\n## Verification\n\n**Given:** The exact original question.\n\n1.1 The actual finite construction verifies the question. [given, construct] ∎\n`;
 const ids=[...Array.from({length:1471},(_,i)=>`ex-original-slot-fixture-${i}`),OLD].sort();
 const nonemptyUnits=Array.from({length:87},(_,i)=>String(i+1)).filter(id=>id!=='21'),ordinaryIds=ids.filter(id=>id!==OLD);
 const batches=Array.from({length:109},(_,i)=>({id:String(i+1),items:i===20?[OLD]:ordinaryIds.filter((_,index)=>
  (index<343?nonemptyUnits[index%nonemptyUnits.length]:'1')===String(i+1))}));
 const frontier=freezeFrontier({run,batches}),baseline={};
 for(const id of ids){const text=id===OLD?old:`---\nid: ${id}\nkind: example\nstatus: draft\ndeps: []\n---\n\n## Example\n\nA fixed original example.\n`;baseline[id]=itemHashGuard(text);put(root,`items/${id}.md`,text);}
 put(root,`items/${OLD}.md`,before);
 if(fullBaseline)for(let i=ids.length;i<39041;i++)baseline[`ex-outside-original-slot-baseline-${i}`]=sha(`outside original context ${i}`);
 const rejection=id=>({id,model:'gpt-6-luna',context_sha256:sha('context:'+id),item_sha256:baseline[id],keep:false});
 const rejected=[...ids.filter(id=>id!==OLD).slice(0,343),OLD].map(rejection),assignments=Object.fromEntries(batches.map(b=>[b.id,rejected.filter(r=>b.items.includes(r.id))]));
 const verdicts=ids.map(id=>rejected.find(r=>r.id===id)??{...rejection(id),keep:true});
 const verdictPath=put(root,`${d}/step4-verdicts.json`,verdicts);
 const pack={version:2,adjudicationSchemaVersion:1,judge_model:'gpt-6-luna',input_evidence:{[verdictPath]:sha(readFileSync(verdictPath,'utf8'))},run,phase:'initial',round:1,repair_scope:'frontier',frontier_ids:frontier.ids,units:frontier.batches.map(b=>b.id),assignments,rejected,before:baseline,before_statements:Object.fromEntries(ids.map(id=>[id,statementHash(id===OLD?old:readFileSync(join(root,`items/${id}.md`),'utf8'))]))};
 const actualRejected=verdicts.filter(v=>v.keep===false);pack.rejected=actualRejected;
 for(const [name,v]of [['frontier',frontier],['baseline',baseline],['initial-1',pack],['step4-verdicts',verdicts]])put(root,`${d}/${name}.json`,v);
 const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{}};const reports=[];
 for(const unit of pack.units){
  const assigned=assignments[unit],label=`step5-v2-initial-r1-u${unit}`,empty=!assigned.length;
  const decision=r=>({...r,outcome:r.id===OLD?'confirmed_fatal':'false_positive',...(r.id===OLD?{defect_type:'other'}:{}),reason:'The complete actual assigned argument was checked with its suppliers and exact original targets.',uncertain:false,source_urls:[],familiar:true});
  const reviews=assigned.map(r=>({id:r.id,disposition:r.id===OLD?'repaired':'unaffected',post_sha256:r.id===OLD?itemHashGuard(before):baseline[r.id],review_context_sha256:sha({version:3,item:[r.id,r.id===OLD?itemHashGuard(before):baseline[r.id]],suppliers:[]}),reason:'Checked the complete original question, exact supplier use and all quantified targets without narrowing.',uncertain:false,source_urls:[],familiar:true}));
  const report={run,phase:'initial',round:1,unit,input_sha256:sha(pack),decisions:assigned.map(decision),reviews,created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[],...(empty?{completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false}:{})};
  if(unit==='21')report.repair_notes={status:'blocked_by_reclassification_scope',repair_complete:false,report:`${d}/${label}.json`};
  reports.push(report);put(root,`${d}/${label}.json`,report);
  const nativeLabel=empty?`step5-v2-empty-initial-r1-u${unit}`:label,role=empty?'tool':'alpha-adjudicate',base=`research/${run}-dispatch/${role}-${nativeLabel}`;
  const n={run,role,label:nativeLabel,covers:[unit],ok:true,ended_at:'2026-10-21T17:00:00Z',...(empty?{written_by:'autopilot'}:{runner:'codex',started_at:'2026-10-21T16:00:00Z',model:'gpt-6.1-sol',provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',prompt:join(root,base+'.attempt-1.prompt.md'),log:join(root,base+'.attempt-1.log'),process_exit_code:0,exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}})};
  put(root,base+'.result.json',n);if(!empty){put(root,base+'.attempt-1.result.json',n);put(root,base+'.attempt-1.prompt.md',`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: ${unit}\noutput: ${d}/${label}.json\nunit:"${unit}" input_sha256:"${sha(pack)}"\n`);put(root,n.log,`native execution\ncodex\n${JSON.stringify(report)}\ntokens used\n1000\n`);}
  state.dispatches[nativeLabel]={stage:'5.1-adjudicate',role,label:nativeLabel,covers:[unit],attempt:1,startedAt:'2026-10-21T16:00:00Z',endedAt:n.ended_at,lastExitOk:true};
 }
 put(root,`.autopilot/${run}/state.json`,state);put(root,`.autopilot/${run}/owner-gate-request.json`,{version:1,run,id:'original-slot-owner-hold',group:'5.1-adjudicate',stages:['5.1-adjudicate'],at:'2026-10-21T18:00:00Z'});
 const entry={original_source_file:`research/original-slot-original.md`,before_source_file:'research/original-slot-before.md',current_source_file:'research/original-slot-current.md',original_raw_sha256:sha(old),before_raw_sha256:sha(before),after_raw_sha256:sha(current),before_guard:itemHashGuard(before),after_guard:itemHashGuard(current),before_statement_sha256:statementHash(before),after_statement_sha256:statementHash(current)};
 put(root,entry.original_source_file,old);put(root,entry.before_source_file,before);put(root,entry.current_source_file,current);
 const beforeManifest=[{id:home,category:'inverse-problems',items:[{id:OLD,kind:'open-problem',title:'Open question',deps:[]}]}],afterManifest=[{id:home,category:'inverse-problems',items:[{id:NEW,kind:'example',title:'Exact coverage example',statement:example,deps:fixtureDeps,justified_by:[],...(migrationLevel===null?{}:{dependency_level:migrationLevel})}]}];
 const beforeContract={version:1,scope:[OLD],contracts:{[OLD]:{open_problem_review:{status:{verdict:'fail'}}}}},afterContract={version:1,scope:[NEW],contracts:{[NEW]:{
  citations:[],derivations:[{id:'fixture-construction',claim:'The synthetic example meets its fixed routing-fixture targets.',step:'1.1',inputs:['given','construct']}],routine_steps:[],
  boundaries:['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'].map(name=>({case:name,status:'checked',evidence:'The synthetic Example fixes all its targets; step 1.1 records their verification for this routing fixture.'}))
 }}};
 const page=`---\npage: ${home}\nitems: [${OLD}]\n---\n`;
 const metadata=[
  [`research/${run}-batch-21.pages.json`,beforeManifest,afterManifest],
  [`research/${run}-batch-21.proof-contracts.json`,beforeContract,afterContract],
  [`research/${run}-proof-contracts.json`,beforeContract,afterContract],
  ['research/plan-spec.json',{pages:[{id:home,items:[{id:OLD,kind:'open-problem'}]}]},{pages:[{id:home,items:[{id:NEW,kind:'example',statement:example,aliases:[OLD],...(migrationLevel===null?{}:{dependency_level:migrationLevel})}]}]}],
  [`library/inverse-problems/${home}.md`,page,page.replace(OLD,NEW)]
 ];
 const metadata_carriers=metadata.map(([path,a,b],i)=>{const before_file=`research/metadata-${i}-before.json`,current_file=`research/metadata-${i}-current.json`;put(root,path,a);put(root,before_file,a);put(root,current_file,b);return {path,before_file,current_file};});
 const root_math_review='research/root-original-slot-math.json',consumer_dispositions='research/root-original-slot-consumers.json';
 put(root,root_math_review,{run,original_id:OLD,current_id:NEW,reviewer:'/root',original_question_preserved:true,native_execution_coverage_adopted:false,reading_limits:'Focused current complete source and supplier review only; no native review credit.'});
 put(root,consumer_dispositions,{run,original_id:OLD,current_id:NEW,reviewer:'/root',items:[],full_affected_scope_checked:true,native_execution_coverage_adopted:false});
 const request={version:1,kind:'owner-original-slot-reclassification',run,authorized_by:'owner',owner_identity:'/root',original_id:OLD,current_id:NEW,batch:'21',home_page:home,repairer_identity:'/root',historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,authorship_credit_granted:false,judgment_credit_granted:false,recorded_at:'2026-10-21T18:01:00Z',reason:'Reclassify only the one original answered unrestricted question while retaining every hypothesis and all old native decisions and bytes.',entry,metadata_carriers,root_math_review,consumer_dispositions};
 const authorization=put(root,'research/original-slot-authorization.json',request);
 function install(){rmSync(join(root,`items/${OLD}.md`));put(root,`items/${NEW}.md`,current);for(const c of metadata_carriers)put(root,c.path,readFileSync(join(root,c.current_file),'utf8'));recordOriginalSlotReclassification(root,run,authorization);return loadOriginalSlotReclassification(root,run,{current:true});}
 function nativeCertificate(){
  const history=loadOriginalSlotReclassification(root,run,{current:true}),guard=itemHashGuard(readFileSync(join(root,`items/${NEW}.md`),'utf8')),phase='impact-initial',round=1,unit='1',label=`step5-v2-${phase}-r1-u1`;
  const packPath=put(root,`${d}/${phase}-1.json`,{run,phase,round,assignments:{'1':[NEW]},units:['1']}),ownerPack=get(packPath);
  const review={id:NEW,post_sha256:guard,disposition:'unaffected',review_context_sha256:sha({version:3,item:[NEW,guard],suppliers:[]}),uncertain:false,reason:'Actually reviewed the current example and full proof with all current suppliers.',source_urls:[],familiar:true};
  const reportPath=put(root,`${d}/${label}.json`,{run,phase,round,unit,input_sha256:sha(ownerPack),reviews:[review],decisions:[],created_items:[],downstream:[]});
  const base=`research/${run}-dispatch/alpha-repair-${label}`,native={run,role:'alpha-repair',label,covers:['1'],ok:true,model:'gpt-6.1-sol',provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',exit_code:0,process_exit_code:0,timed_out:false,prompt:join(root,base+'.attempt-1.prompt.md'),log:join(root,base+'.attempt-1.log'),terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}};
  const dispatch=put(root,base+'.result.json',native);put(root,base+'.attempt-1.result.json',native);
  put(root,native.prompt,`run: ${run}\noutput: ${d}/${label}.json\ninput_sha256:"${sha(ownerPack)}"\n`);
  put(root,native.log,`native execution\ncodex\n${JSON.stringify(get(reportPath))}\ntokens used\n1000\n`);
  const evidence={...history.evidence,...Object.fromEntries([packPath,reportPath,dispatch,native.prompt,native.log].map(p=>[p,sha(readFileSync(p,'utf8'))]))};
  const certificate={version:2,run,phase,round,items:[{id:NEW,guard_sha256:guard,item_sha256:itemHashJudge(readFileSync(join(root,`items/${NEW}.md`),'utf8')),context_sha256:sha('current judge context')}],creations:[],evidence,changed:[NEW]};certificate.sha256=sha(certificate);return {certificate,review,reportPath,dispatch,packPath};
 }
 return {root,run,frontier,pack,reports,authorization,request,old,before,current,entry,install,nativeCertificate,cleanup:()=>rmSync(root,{recursive:true,force:true})};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 test('affirmative grammar preserves both literal display-math dollars',()=>{const source='## Open problem\n\nDoes there exist a single graph-measurable rule \\eta?$$\n';assert.equal(affirmativeOriginalQuestion(source),'There exists a single graph-measurable rule \\eta.$$');assert.ok(affirmativeOriginalQuestion(source).endsWith('$$'));});
 test('no receipt leaves defaults and arbitrary alias substitutions unauthorized',()=>{const f=createOriginalSlotFixture();try{assert.equal(loadOriginalSlotReclassification(f.root,f.run),null);assert.deepEqual(projectedOriginalIds(f.root,f.run,f.frontier.ids),f.frontier.ids);assert.equal(licensedOriginalSlotReplacement(f.root,f.run,OLD,NEW,{}),false);}finally{f.cleanup();}});
 test('preview writes nothing; record preserves 1472 slots/344 tuples and historical-only old review',()=>{const f=createOriginalSlotFixture();try{const snapshot=readFileSync(join(f.root,`research/${f.run}-step5-v2/initial-1.json`),'utf8');const p=previewOriginalSlotReclassification(f.root,f.run,f.authorization);assert.equal(p.current_review_granted,false);assert.equal(existsSync(join(f.root,`research/${f.run}-step5-v2/original-slot-reclassification.json`)),false);const h=f.install(),v=originalSlotView(f.root,f.run,{frontier:f.frontier});assert.equal(v.currentIds.length,1472);assert.equal(v.currentIds.includes(OLD),false);assert.equal(v.currentIds.includes(NEW),true);assert.equal(v.originalId(NEW),OLD);assert.equal(historicalInitialSource(h,OLD),f.before);assert.equal(readFileSync(join(f.root,`research/${f.run}-step5-v2/initial-1.json`),'utf8'),snapshot);assert.equal(h.pack.rejected.length,344);assert.equal(isOriginalSlotReclassification(h,f.pack,{[NEW]:h.after_guard}),true);const carrier=f.request.metadata_carriers[0];assert.ok(supportingReclassificationHistory({root:f.root,run:f.run},join(f.root,carrier.path),sha(readFileSync(join(f.root,carrier.before_file),'utf8'))));}finally{f.cleanup();}});
 test('missing current source, revived old source, stale immutable native bytes and narrowed Example fail closed',()=>{for(const change of ['missing','revive','native','narrow']){const f=createOriginalSlotFixture();try{f.install();if(change==='missing')rmSync(join(f.root,`items/${NEW}.md`));if(change==='revive')put(f.root,`items/${OLD}.md`,f.before);if(change==='native')writeFileSync(join(f.root,`research/${f.run}-step5-v2/step5-v2-initial-r1-u21.json`),'{}');if(change==='narrow')writeFileSync(join(f.root,`items/${NEW}.md`),f.current.replace('every uniform coverage','restricted coverage'));assert.throws(()=>loadOriginalSlotReclassification(f.root,f.run,{current:true}));}finally{f.cleanup();}}});
 test('licensed deletion requires fresh native example proof review, not old Luna, creation or receipt alone',()=>{const f=createOriginalSlotFixture();try{f.install();const {certificate}=f.nativeCertificate();assert.ok(originalSlotCurrentReview(f.root,f.run,certificate));assert.equal(licensedOriginalSlotReplacement(f.root,f.run,OLD,NEW,certificate),true);const historical={...certificate,evidence:{...loadOriginalSlotReclassification(f.root,f.run).evidence}};assert.equal(licensedOriginalSlotReplacement(f.root,f.run,OLD,NEW,historical),false);assert.equal(licensedOriginalSlotReplacement(f.root,f.run,OLD,NEW,{...certificate,creations:[{id:NEW}]}),false);assert.equal(licensedOriginalSlotReplacement(f.root,f.run,'ex-other',NEW,certificate),false);writeFileSync(join(f.root,`items/${NEW}.md`),f.current+'\nA genuine later proof repair.\n');assert.equal(licensedOriginalSlotReplacement(f.root,f.run,OLD,NEW,certificate),false);assert.ok(loadOriginalSlotReclassification(f.root,f.run,{current:true}));}finally{f.cleanup();}});
 test('record rejects indentless alias collision at the actual application boundary',()=>{const f=createOriginalSlotFixture();try{put(f.root,'items/ex-collision.md',`---\nid: ex-collision\nkind: example\nstatus: draft\naliases:\n- ${OLD}\n---\n`);assert.throws(()=>f.install(),/collision/);}finally{f.cleanup();}});
 test('full 39041 baseline stays distinct from1472 original subjects and344 tuples',()=>{const f=createOriginalSlotFixture({fullBaseline:true});try{const before=readFileSync(join(f.root,`research/${f.run}-step5-v2/baseline.json`),'utf8');assert.equal(Object.keys(f.pack.before).length,39041);const h=f.install();assert.equal(h.frontier.ids.length,1472);assert.equal(h.pack.rejected.length,344);assert.equal(h.pack.units.length,109);assert.equal(h.pack.units.filter(u=>h.pack.assignments[u].length===0).length,22);assert.equal(readFileSync(join(f.root,`research/${f.run}-step5-v2/baseline.json`),'utf8'),before);}finally{f.cleanup();}});
 test('core collection, mandatory owner pack, certification and Sol cache preserve the original slot',async()=>{
  const f=createOriginalSlotFixture({fullBaseline:true});try{
   const {collect,prepareImpact,prepareAdjudication,closeEmptyAdjudication,certify,judge,verifyCertification,reviewContextHashes}=await import('./step5-workflow.mjs');
   f.install();const initial=collect(f.root,f.run,'initial',1);
   assert.equal(initial.decisions.filter(r=>r.outcome==='confirmed_fatal').length,1);
   assert.equal(initial.decisions.find(r=>r.id===OLD).outcome,'confirmed_fatal');
   assert.equal(initial.reviews.some(r=>r.id===OLD||r.id===NEW),false);
   assert.deepEqual(initial.original_slot_current_review_targets,[NEW]);
   assert.equal(initial.historical_original_slot_reviews[0].post_sha256,itemHashGuard(f.before));
   const guideReview=put(f.root,'research/owner-guidance-review.json',{reason:'Focused root proposals only; actual native proof review is owed.'});
   const outside=f.frontier.ids.find(id=>id!==OLD),guideEntry=id=>({id,proposal_source_guard_sha256:itemHashGuard(f.current),review_files:['research/owner-guidance-review.json'],reason:'Check the exact current literal proposal independently; no prior review credit.',proposed_edits:[{source_excerpt:'The actual finite construction',proposed_replacement:'The verified finite construction'}]});
   const guidePath=put(f.root,`research/${f.run}-step5-owner-repair-guidance.json`,{version:1,kind:'owner-native-repair-guidance',run:f.run,owner_identity:'/root',native_coverage_adopted:false,recorded_at:'2026-10-21T18:02:00Z',entries:[guideEntry(NEW),guideEntry(outside)],bindings:{'research/owner-guidance-review.json':sha(readFileSync(guideReview,'utf8'))}});
   const pack=prepareImpact(f.root,f.run,'impact-initial',1);assert.equal(Object.values(pack.assignments).flat().filter(id=>id===NEW).length,1);
   assert.equal(Object.values(pack.assignments).flat().includes(outside),false);assert.deepEqual(pack.owner_repair_guidance.entries.map(r=>r.id),[NEW]);assert.equal(pack.input_evidence[guidePath],sha(readFileSync(guidePath,'utf8')));assert.equal(pack.input_evidence[guideReview],sha(readFileSync(guideReview,'utf8')));
   assert.ok(readFileSync(join(f.root,`research/${f.run}-step5-v2/step5-v2-impact-initial-r1-u1.task.md`),'utf8').includes('ordinary proved-example proof-contract worksheet'));
   put(f.root,`items/${NEW}.md`,f.current+'\nAn unreviewed pre-dispatch proof change.\n');assert.throws(()=>prepareImpact(f.root,f.run,'impact-initial',1),/before its first native owner dispatch/);put(f.root,`items/${NEW}.md`,f.current);
   for(const unit of pack.units){
    const phase='impact-initial',label=`step5-v2-${phase}-r1-u${unit}`,reportPath=`research/${f.run}-step5-v2/${label}.json`;
    const contexts=reviewContextHashes(f.root,pack.assignments[unit],{run:f.run});
    const reviews=pack.assignments[unit].map(id=>({id,...contexts[id],disposition:'unaffected',reason:'Actually checked current example full verification and completed the ordinary proved-example contract and required checks.',uncertain:false,source_urls:[],familiar:true}));
    const report={run:f.run,phase,round:1,unit,input_sha256:sha(pack),decisions:[],reviews,created_items:[],downstream:[]};put(f.root,reportPath,report);
    const base=`research/${f.run}-dispatch/alpha-repair-${label}`,native={run:f.run,role:'alpha-repair',label,covers:[unit],ok:true,model:'gpt-6.1-sol',provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',exit_code:0,process_exit_code:0,timed_out:false,prompt:join(f.root,base+'.attempt-1.prompt.md'),log:join(f.root,base+'.attempt-1.log'),terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}};
    put(f.root,base+'.result.json',native);put(f.root,base+'.attempt-1.result.json',native);put(f.root,native.prompt,`run: ${f.run}\noutput: ${reportPath}\ninput_sha256:"${sha(pack)}"\n`);put(f.root,native.log,`native fixture execution\ncodex\n${JSON.stringify(report)}\ntokens used\n1000\n`);
   }
   const contextHasher=(root,ids)=>new Map(ids.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,`items/${id}.md`),'utf8')),context_sha256:sha('actual fixture judge context:'+id)}]));
   const cert=certify(f.root,f.run,'impact-initial',1,{contextHasher});assert.ok(cert.items.some(r=>r.id===NEW));assert.ok(!cert.items.some(r=>r.id===OLD));assert.equal(cert.creations.length,0);verifyCertification(f.root,f.run,{current:true});
   const result=judge(f.root,f.run,1,{contextHasher,runSweep:({ids,ledger})=>{const rows=ids.map(id=>({id,model:'gpt-6.1-sol',keep:true,...contextHasher(f.root,[id]).get(id)}));put(f.root,ledger,rows.map(JSON.stringify).join('\n')+'\n');return {status:0};}});assert.ok(result.verdicts.some(r=>r.id===NEW));
   assert.deepEqual(judge(f.root,f.run,1,{contextHasher}),result);
   const repeat=prepareAdjudication(f.root,f.run,'repeat',1);assert.equal(repeat.frontier_ids.includes(NEW),true);assert.equal(repeat.frontier_ids.includes(OLD),false);
   const zero=closeEmptyAdjudication(f.root,f.run,'repeat',1,'21',sha(repeat));assert.equal(zero.mathematical_review,false);assert.deepEqual(zero.reviews,[]);
   const judgePath=join(f.root,`research/${f.run}-step5-v2/judge-1.json`),bad=structuredClone(result);delete bad.verdicts.find(r=>r.id===NEW).keep;put(f.root,judgePath,bad);assert.throws(()=>judge(f.root,f.run,1,{contextHasher}),/genuine current/);put(f.root,judgePath,result);
   put(f.root,`research/${f.run}-judge.jsonl`,'');assert.throws(()=>judge(f.root,f.run,1,{contextHasher}),/genuine current/);
  }finally{f.cleanup();}
 });
 test('exact computed-level followup preserves immutable admissions and queues fresh current proof review',async()=>{
  const f=createOriginalSlotFixture({migrationLevel:4});try{
   const {recordInitialScopeFindings,loadInitialScopeFindings}=await import('./step5-initial-scope-findings.mjs');
   const {loadReaderConcerns}=await import('./step5-reader-concerns.mjs');
   const {collect,prepareImpact}=await import('./step5-workflow.mjs');
   const manifestPath=`research/${f.run}-batch-21.pages.json`,planPath='research/plan-spec.json',d=`research/${f.run}-step5-v2`;
   const ordinary=f.frontier.ids.filter(id=>id!==OLD),id=ordinary[500],source=readFileSync(join(f.root,`items/${id}.md`),'utf8');
   put(f.root,`research/${f.run}-batch-1.pages.json`,[{id:'other-originals',items:ordinary.map(id=>({id,deps:[]}))}]);
   const reportPath=join(f.root,`${d}/step5-v2-initial-r1-u21.json`),report=get(reportPath),native=get(join(f.root,`research/${f.run}-dispatch/alpha-adjudicate-step5-v2-initial-r1-u21.result.json`));
   const finding={id,ledger:'canonical-defect-ledger',action:'record-open-finding',severity:'nonfatal',uncertain:false,route:'frontier-owner',reason:'The unchanged original example needs an explicit coordinate label in its displayed local fixture statement.'};
   report.ledger_updates=[finding];put(f.root,reportPath,report);
   const nativeRecord=`exec\ncat items/${id}.md\n succeeded in 1ms:\n${source}\n`;
   put(f.root,native.log,`${nativeRecord}\ncodex\n${JSON.stringify(report)}\ntokens used\n1000\n`);
   const history=f.install(),migrationBytes=readFileSync(history.path,'utf8'),oldManifest=readFileSync(join(f.root,manifestPath),'utf8');
   const reviewFile=put(f.root,'research/level-scope-root-review.md','This is synthetic fixture root review evidence of the exact original local statement and its proposed label, never real mathematical acceptance or model execution coverage.');
   const entry={id,batch:'1',unit:'21',route:'frontier-owner',current_guard_sha256:itemHashGuard(source),open_finding_index:0,finding,output_finding_index:0,output_finding:finding,source_read:{native_log_record:nativeRecord,source_excerpt:'A fixed original example.'},owner_review:{reviewed_by:'root',confirmed_defect:true,reviewed_at:'2026-10-21T17:01:00Z',reason:'The root fixture actually checks the unchanged local statement and confirms the missing explicit coordinate convention.',evidence_file:'research/level-scope-root-review.md',proposed_edits:[{source_excerpt:'A fixed original example.',proposed_replacement:'A fixed original example with an explicit local label.'}]}};
   const bindings={...Object.fromEntries(Object.entries(history.evidence).map(([p,h])=>[p.slice(f.root.length+1),h])),[manifestPath]:sha(oldManifest),[`research/${f.run}-batch-1.pages.json`]:sha(readFileSync(join(f.root,`research/${f.run}-batch-1.pages.json`),'utf8')),'research/level-scope-root-review.md':sha(readFileSync(reviewFile,'utf8'))};
   const request={version:1,kind:'owner-confirmed-native-initial-scope-findings',run:f.run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,recorded_at:'2026-10-21T18:03:00Z',original_count:1472,bindings,entries:[entry]};put(f.root,'research/level-scope-request.json',request);
   recordInitialScopeFindings(f.root,f.run,'research/level-scope-request.json');
   const registry=join(f.root,`research/${f.run}-step5-initial-scope-findings.json`),registryBytes=readFileSync(registry,'utf8');assert.equal(loadInitialScopeFindings(f.root,f.run,{requireCollection:false}).entries.length,1);
   const readerIds=ordinary.slice(500,576),digest={batches:['1'],items_read:readerIds,concerns:readerIds.map(id=>({id,concern:'The exact unchanged local example sentence requires its explicit coordinate convention.',severity:'presentation'}))};
   const readerBase=`research/${f.run}-dispatch/alpha-batch-read-1`,digestPath=`research/${f.run}-batch-1-step5-context.json`;
   put(f.root,digestPath,digest);const reader={run:f.run,role:'alpha-batch-read',label:'1',covers:['1'],model:'gpt-6.1-sol',provider_effort:'medium',attempt:1,evidence_tag:'.attempt-1',ok:true,ended_at:'2026-10-21T16:30:00Z'};
   put(f.root,readerBase+'.result.json',reader);put(f.root,readerBase+'.attempt-1.result.json',reader);put(f.root,readerBase+'.attempt-1.last-message.json',digest);
   const readerBindings={...bindings,...Object.fromEntries([digestPath,readerBase+'.result.json',readerBase+'.attempt-1.result.json',readerBase+'.attempt-1.last-message.json'].map(p=>[p,sha(readFileSync(join(f.root,p),'utf8'))]))};
   const readerRegistry=put(f.root,`research/${f.run}-step5-reader-concern-admissions.json`,{version:1,kind:'owner-confirmed-step4-reader-concerns',run:f.run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,original_count:1472,recorded_at:'2026-10-21T18:03:00Z',bindings:readerBindings,entries:readerIds.map((id,index)=>({id,batch:'1',concern_index:index,concern:digest.concerns[index],before_guard_sha256:f.pack.before[id],owner_review:{reviewed_by:'root',confirmed_defect:true,reviewed_at:'2026-10-21T17:01:00Z',reason:'The root fixture independently confirms the exact unchanged local example sentence and its coordinate convention.',evidence_file:'research/level-scope-root-review.md',source_excerpt:'A fixed original example.',proposed_replacement:'A fixed original example with its explicit local coordinate convention.'}}))});
   const readerBytes=readFileSync(readerRegistry,'utf8');assert.equal(loadReaderConcerns(f.root,f.run,{requireCollection:false}).entries.length,76);
   const corrected=f.current.replace('dependency_level: 4','dependency_level: 1');put(f.root,`items/${NEW}.md`,corrected);
   const manifest=get(join(f.root,manifestPath));manifest[0].items[0].dependency_level=1;put(f.root,manifestPath,manifest);
   const plan=get(join(f.root,planPath));plan.pages[0].items[0].dependency_level=1;put(f.root,planPath,plan);
   assert.equal(isOriginalSlotReclassification(loadOriginalSlotReclassification(f.root,f.run),f.pack,{[NEW]:itemHashGuard(corrected)}),false);
   recordOriginalSlotLevelCorrection(f.root,f.run);
   const changed=loadOriginalSlotReclassification(f.root,f.run,{current:true});assert.equal(changed.level_correction.row.after_level,1);assert.equal(isOriginalSlotReclassification(changed,f.pack,{[NEW]:itemHashGuard(corrected)}),true);
   const continuity=supportingOriginalSlotLevelHistory({root:f.root,run:f.run},join(f.root,manifestPath),sha(oldManifest));assert.ok(continuity);assert.equal(readFileSync(continuity.archive,'utf8'),oldManifest);
   assert.equal(readFileSync(history.path,'utf8'),migrationBytes);assert.equal(readFileSync(registry,'utf8'),registryBytes);
   assert.equal(loadInitialScopeFindings(f.root,f.run,{requireCollection:false}).entries.length,1);
   assert.equal(loadReaderConcerns(f.root,f.run,{requireCollection:false}).entries.length,76);assert.equal(readFileSync(readerRegistry,'utf8'),readerBytes);
   const initial=collect(f.root,f.run,'initial',1);assert.equal(initial.post[NEW],itemHashGuard(corrected));assert.equal(initial.statement_events.find(e=>e.id===NEW).after_guard,itemHashGuard(corrected));assert.equal(initial.reviews.some(r=>r.id===NEW),false);
   const owner=prepareImpact(f.root,f.run,'impact-initial',1);assert.ok(Object.values(owner.assignments).flat().includes(NEW));assert.ok(Object.values(owner.assignments).flat().includes(id));assert.equal(owner.reader_concerns.length,76);assert.ok(owner.input_evidence[changed.level_correction.path]);
   const archivedManifest=join(f.root,`${d}/supporting-metadata/${sha(oldManifest)}.json`);assert.equal(readFileSync(archivedManifest,'utf8'),oldManifest);assert.equal(owner.input_evidence[archivedManifest],sha(oldManifest));assert.equal(readFileSync(readerRegistry,'utf8'),readerBytes);assert.equal(readFileSync(registry,'utf8'),registryBytes);
   put(f.root,`items/${NEW}.md`,corrected+'\nA later actual proof repair remains separately reviewable.\n');assert.ok(loadOriginalSlotReclassification(f.root,f.run,{current:true}));
   assert.equal(supportingOriginalSlotLevelHistory({root:f.root,run:f.run},join(f.root,manifestPath),'a'.repeat(64)),null);
  }finally{f.cleanup();}
 });
 test('computed-level recorder rejects every nonlabel or inconsistent mirror change',()=>{for(const defect of ['proof','wrong-level','manifest','plan']){const f=createOriginalSlotFixture({migrationLevel:4});try{f.install();const ordinary=f.frontier.ids.filter(id=>id!==OLD);put(f.root,`research/${f.run}-batch-1.pages.json`,[{id:'other-originals',items:ordinary.map(id=>({id,deps:[]}))}]);let corrected=f.current.replace('dependency_level: 4','dependency_level: 1');if(defect==='proof')corrected+='\nUnauthorized proof edit.\n';if(defect==='wrong-level')corrected=corrected.replace('dependency_level: 1','dependency_level: 2');put(f.root,`items/${NEW}.md`,corrected);const path=`research/${f.run}-batch-21.pages.json`,manifest=get(join(f.root,path));manifest[0].items[0].dependency_level=defect==='manifest'?2:1;put(f.root,path,manifest);const plan=get(join(f.root,'research/plan-spec.json'));plan.pages[0].items[0].dependency_level=1;if(defect==='plan')plan.pages[0].items[0].title='Unrelated title edit';put(f.root,'research/plan-spec.json',plan);assert.throws(()=>recordOriginalSlotLevelCorrection(f.root,f.run));}finally{f.cleanup();}}});
 test('recorder rejects running hold, pending native dispatch and modified original question',()=>{for(const change of ['running','pending','question']){const f=createOriginalSlotFixture();try{if(change==='question')writeFileSync(join(f.root,f.entry.current_source_file),f.current.replace('every uniform','some uniform'));else{const statePath=join(f.root,`.autopilot/${f.run}/state.json`),state=get(statePath);if(change==='running')state.paused=false;else state.dispatches.extra={startedAt:'2026-10-21T18:00:00Z'};put(f.root,statePath,state);}assert.throws(()=>previewOriginalSlotReclassification(f.root,f.run,f.authorization));}finally{f.cleanup();}}});
}
