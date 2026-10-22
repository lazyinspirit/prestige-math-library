import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync,rmSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
import {runScope} from './step6-lib.mjs';
import {scopedReadinessTree} from './step6-scoped-tree.mjs';
import {preflightStep6} from './step6-commit.mjs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {createOriginalSlotFixture} from './step5-original-slot-reclassification.test.mjs';
import {createPnpMigrationFixture} from './step5-pnp-classification-migration.test.mjs';
import {collect,prepareImpact,prepareAdjudication,closeEmptyAdjudication,certify,judge,verifyCertification,verifyWave,reviewContextHashes} from './step5-workflow.mjs';
import {PNP_RUN as run,PNP_OLD as old,PNP_CURRENT as current,PNP_CONSUMERS as consumers,pnpSourceCandidate,recordPnpClassificationMigration,loadPnpClassificationMigration,licensedPnpReplacement} from './step5-pnp-classification-migration.mjs';
import {projectedOriginalIds} from './step5-original-slot-reclassification.mjs';
import {itemHashGuard,itemHashJudge} from './item-hash.mjs';
import {step6OwnedInputs} from './step6-owned-inputs.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const put=(root,p,v)=>{const path=join(root,p);mkdirSync(dirname(path),{recursive:true});writeFileSync(path,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');return path;};
const get=(root,p)=>JSON.parse(readFileSync(join(root,p),'utf8'));
test('composed originalslot lifecycle preserves original1472/109/344/331/36/679 histories and requires fresh native algorithm/consumer certification',()=>{
 const sample=createPnpMigrationFixture(),extras={[old]:sample.before};for(const id of consumers)extras[id]=`---\nid: ${id}\nkind: example\nstatus: draft\ndeps: [${old}]\n---\n\n## Example\n\nThe procedure [[${old}]] is used here.\n`;
 for(let i=0;i<333;i++)extras[`ex-zzbridge-${i}`]=`---\nid: ex-zzbridge-${i}\nkind: example\nstatus: draft\ndeps: [op-ip-honest-coverage-over-ill-posed-truth-classes]\n---\n\n## Example\n\nThe original question is used here.\n`;
 const f=createOriginalSlotFixture({fullBaseline:true,extraSources:extras,initialRepairCount:330}),root=f.root,d=`research/${run}-step5-v2`,home='plug-and-play-mmse-regularization';sample.cleanup();
 const contextHasher=(root,ids)=>new Map(ids.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,`items/${id}.md`),'utf8')),context_sha256:sha('fixture judge context:'+id)}]));
 const native=(pack,unit,{adjudicate=false}={})=>{
  const phase=pack.phase,label=`step5-v2-${phase}-r${pack.round}-u${unit}`,reportPath=`${d}/${label}.json`,assigned=pack.assignments[unit].map(r=>typeof r==='string'?r:r.id),contexts=reviewContextHashes(root,assigned,{run});
  const report={run,phase,round:pack.round,unit,input_sha256:sha(pack),decisions:adjudicate?pack.assignments[unit].map(r=>({...r,outcome:r.id===old?'confirmed_nonfatal':'false_positive',reason:'The exact assigned classification and current hypotheses were independently checked for this routing fixture.',uncertain:false,source_urls:[],familiar:true})):[],reviews:assigned.map(id=>({id,...contexts[id],disposition:'unaffected',reason:'Actually checked the complete current carrier and all required supplier interfaces for this routing fixture.',uncertain:false,source_urls:[],familiar:true})),created_items:[],downstream:[]};
  if(assigned.includes(old)&&adjudicate)report.repair_notes={status:'blocked_by_reclassification_scope',repair_complete:false,mathematical_uncertainty:false,report:reportPath};
  put(root,reportPath,report);const role=adjudicate?'alpha-adjudicate':'alpha-repair',base=`research/${run}-dispatch/${role}-${label}`,receipt={run,role,label,covers:[unit],ok:true,model:'gpt-6.1-sol',provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',started_at:'2026-10-21T22:00:00Z',ended_at:'2026-10-21T22:01:00Z',exit_code:0,process_exit_code:0,timed_out:false,prompt:join(root,base+'.attempt-1.prompt.md'),log:join(root,base+'.attempt-1.log'),terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0}};
  put(root,base+'.result.json',receipt);put(root,base+'.attempt-1.result.json',receipt);writeFileSync(receipt.prompt,`run: ${run}\noutput: ${reportPath}\nunit:"${unit}" input_sha256:"${sha(pack)}"\n`);writeFileSync(receipt.log,`native routing fixture\ncodex\n${JSON.stringify(report)}\ntokens used\n1000\n`);return {stage:'5.5-adjudicate',role,label,covers:[unit],attempt:1,startedAt:receipt.started_at,endedAt:receipt.ended_at,lastExitOk:true};
 };
 const cwd=process.cwd();process.chdir(root);
 try{
  f.install();collect(root,run,'initial',1);const first=prepareImpact(root,run,'impact-initial',1);for(const unit of first.units)native(first,unit);
  const prior=certify(root,run,'impact-initial',1,{contextHasher});assert.equal(prior.items.length,679);assert.equal(prior.changed.length,331);
  const rejected=new Set([old,...prior.changed.filter(id=>id!==old).slice(0,35)]);
  const firstJudge=judge(root,run,1,{contextHasher,runSweep:({ids,ledger})=>{const rows=ids.map(id=>({id,model:'gpt-6.1-sol',keep:!rejected.has(id),...contextHasher(root,[id]).get(id)}));writeFileSync(ledger,rows.map(JSON.stringify).join('\n')+'\n');return {status:0};}});assert.equal(firstJudge.verdicts.length,331);
  const repeat=prepareAdjudication(root,run,'repeat',1);assert.equal(repeat.rejected.length,36);const dispatches={};for(const unit of repeat.units){if(repeat.assignments[unit].length)dispatches[unit]=native(repeat,unit,{adjudicate:true});else {closeEmptyAdjudication(root,run,'repeat',1,unit,sha(repeat));const label=`step5-v2-empty-repeat-r1-u${unit}`;put(root,`research/${run}-dispatch/tool-${label}.result.json`,{role:'tool',label,run,covers:[unit],ok:true,written_by:'autopilot',ended_at:'2026-10-21T22:01:00Z'});}}
  put(root,`.autopilot/${run}/state.json`,{run,stage:'5.5-adjudicate',paused:true,dispatches});put(root,`.autopilot/${run}/owner-gate-request.json`,{version:1,run,id:'actual-fixture-native5.5hold',group:'5.5-adjudicate',stages:['5.5-adjudicate'],at:'2026-10-21T22:02:00Z'});
  const before=readFileSync(join(root,`items/${old}.md`),'utf8'),after=pnpSourceCandidate(before),entry={before_source_file:'research/pnp-source-before.md',current_source_file:'research/pnp-source-after.md',before_raw_sha256:sha(before),after_raw_sha256:sha(after)};put(root,entry.before_source_file,before);put(root,entry.current_source_file,after);
  const carriers=[],add=(path,a,b)=>{const i=carriers.length,before_file=`research/pnp-${i}-before`,current_file=`research/pnp-${i}-after`;put(root,path,a);put(root,before_file,a);put(root,current_file,b);carriers.push({path,before_file,current_file});};
  for(const id of consumers){const a=readFileSync(join(root,`items/${id}.md`),'utf8');add(`items/${id}.md`,a,a.replaceAll(old,current));}
  add(`library/inverse-problems/${home}.md`,`---\npage: ${home}\nitems: [${old}, ${consumers.join(', ')}]\n---\n`,`---\npage: ${home}\nitems: [${current}, ${consumers.join(', ')}]\n---\n`);
  add(`research/${run}-batch-49.pages.json`,[{id:home,category:'inverse-problems',items:[{id:old,kind:'definition'},...consumers.map(id=>({id,kind:'example',deps:[old]}))]}],[{id:home,category:'inverse-problems',items:[{id:current,kind:'algorithm'},...consumers.map(id=>({id,kind:'example',deps:[current]}))]}]);
  add(`research/${run}-batch-49.proof-contracts.json`,{version:1,scope:[old],contracts:{[old]:{}}},{version:1,scope:[current],contracts:{[current]:{}}});
  for(const path of [`research/${run}-proof-contracts.json`,'research/plan-spec.json']){const a=get(root,path);if(path.endsWith('plan-spec.json'))a.pages.push({id:home,items:[{id:old,kind:'definition'}]});else {a.scope.push(old);a.contracts[old]={};}const b=JSON.parse(JSON.stringify(a).replaceAll(old,current));if(path.endsWith('plan-spec.json'))b.pages.find(p=>p.id===home).items[0].kind='algorithm';add(path,a,b);}
  // Real u95-style native support includes the GLOBAL merged carrier.
  const merged=`research/${run}-proof-contracts.json`,supportGlobal=get(root,`${d}/step5-v2-repeat-r1-u49.json`);
  supportGlobal.supporting_evidence={[join(root,merged)]:sha(readFileSync(join(root,merged),'utf8'))};put(root,`${d}/step5-v2-repeat-r1-u49.json`,supportGlobal);
  const report=get(root,`${d}/step5-v2-repeat-r1-u49.json`),math='research/pnp-math.json',review='research/pnp-acceptance.json';put(root,math,{run,native_credit_claimed:false,new_prerequisites:[],native49_binding:{outcome:'confirmed_nonfatal',raw_sha256:sha(readFileSync(join(root,d,'step5-v2-repeat-r1-u49.json'),'utf8'))},classification:{minimal_migration:{old_id:old,new_id:current}},consumer_inventory:{current_direct:consumers}});
  put(root,review,{accepted:true,reviewer_identity:'/root/independent',current_review_granted:false,native_execution_coverage_adopted:false,before_source_sha256:sha(before),after_source_sha256:sha(after),carrier_bindings:carriers.map(c=>({path:c.path,before_sha256:sha(readFileSync(join(root,c.before_file),'utf8')),after_sha256:sha(readFileSync(join(root,c.current_file),'utf8'))}))});
  const request={version:1,kind:'owner-pnp-classification-migration',run,owner_identity:'/root',repairer_identity:'/root',original_id:old,current_id:current,batch:'49',home_page:home,current_review_granted:false,native_execution_coverage_adopted:false,historical_only:true,original_outcome:'confirmed_nonfatal',entry,carriers,root_math_review:math,independent_review:review,consumer_ids:consumers};put(root,'research/pnp-request.json',request);
  const historical=readFileSync(join(root,d,'certification-impact-initial-1.json'),'utf8');rmSync(join(root,`items/${old}.md`));put(root,`items/${current}.md`,after);for(const c of carriers)put(root,c.path,readFileSync(join(root,c.current_file),'utf8'));recordPnpClassificationMigration(root,run,'research/pnp-request.json');
  assert.equal(projectedOriginalIds(root,run,f.frontier.ids).length,1472);assert.equal(licensedPnpReplacement(root,run,old,current,prior),false);
  const result=collect(root,run,'repeat',1);assert.equal(result.decisions.length,36);assert.equal(result.decisions.find(r=>r.id===old).outcome,'confirmed_nonfatal');assert.equal(result.reviews.some(r=>r.id===old||r.id===current),false);assert.equal(result.historical_pnp_classification_reviews[0].post_sha256,report.reviews[0].post_sha256);
  assert.equal(Object.hasOwn(result.evidence,merged),false,'new collections freeze global support');
  const oldMergedHash=sha(readFileSync(join(root,carriers.find(c=>c.path===merged).before_file),'utf8'));
  // Preserve a pre-fix frozen receipt exactly, including its historical live pin.
  const legacy={...result,evidence:{...result.evidence,[merged]:oldMergedHash}};put(root,`${d}/repeat-1-collected.json`,legacy);
  const frozenLegacy=readFileSync(join(root,d,'repeat-1-collected.json'),'utf8');
  const pack=prepareImpact(root,run,'impact-repeat',1),lane=pack.units.find(u=>pack.assignments[u].includes(current));assert.ok([current,...consumers].every(id=>pack.assignments[lane].includes(id)));for(const unit of pack.units)native(pack,unit);
  assert.equal(pack.input_evidence[merged],oldMergedHash);const frozenPack=readFileSync(join(root,d,'impact-repeat-1.json'),'utf8');
  const cert=certify(root,run,'impact-repeat',1,{contextHasher});assert.equal(readFileSync(join(root,d,'repeat-1-collected.json'),'utf8'),frozenLegacy);assert.equal(readFileSync(join(root,d,'impact-repeat-1.json'),'utf8'),frozenPack);assert.equal(Object.hasOwn(cert.evidence,merged),false);assert.ok(licensedPnpReplacement(root,run,old,current,cert));assert.ok(cert.items.some(r=>r.id==='ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion'));assert.ok(!cert.items.some(r=>r.id===old));verifyCertification(root,run,{current:true});const cachedCert=certify(root,run,'impact-repeat',1,{contextHasher});assert.equal(cachedCert.sha256,cert.sha256);assert.equal(Object.hasOwn(get(root,`${d}/impact-repeat-1-collected.json`).evidence,merged),false);assert.equal(Object.hasOwn(get(root,`${d}/impact-repeat-1-closed.json`).evidence,merged),false);assert.equal(readFileSync(join(root,d,'certification-impact-initial-1.json'),'utf8'),historical);
  // Run the real deterministic merger over the two fixture-native batch carriers.
  const mergedBefore=readFileSync(join(root,merged),'utf8');execFileSync(process.execPath,[fileURLToPath(new URL('./merge-proof-contracts.mjs',import.meta.url)),'--level',run,merged,`research/${run}-batch-21.proof-contracts.json`,`research/${run}-batch-49.proof-contracts.json`],{cwd:root});assert.notEqual(readFileSync(join(root,merged),'utf8'),mergedBefore);
  assert.equal(verifyCertification(root,run,{current:true}).sha256,cert.sha256);assert.equal(verifyWave(root,run,{contextHasher}).sha256,cert.sha256);assert.equal(certify(root,run,'impact-repeat',1,{contextHasher}).sha256,cert.sha256);assert.deepEqual(collect(root,run,'impact-repeat',1).errors,[]);assert.equal(readFileSync(join(root,d,'repeat-1-collected.json'),'utf8'),frozenLegacy);assert.equal(readFileSync(join(root,d,'impact-repeat-1.json'),'utf8'),frozenPack);
  assert.throws(()=>judge(root,run,1,{contextHasher}),/pre-migration|certification/);
  const second=judge(root,run,2,{contextHasher,runSweep:({ids,ledger})=>{writeFileSync(ledger,readFileSync(ledger,'utf8')+ids.map(id=>JSON.stringify({id,model:'gpt-6.1-sol',keep:true,...contextHasher(root,[id]).get(id)})).join('\n')+'\n');return {status:0};}});assert.ok(second.verdicts.some(r=>r.id===current));
  const h=loadPnpClassificationMigration(root,run,{current:true});assert.equal(h.targets.length,5);
  // Focused Step6 packaging/preimage exercise; no final gate/publication credit.
  put(root,`research/${run}-scope-ledger.json`,{pages:[{id:f.request.home_page,batch:'21'},{id:home,batch:'49'}]});put(root,'research/defect-ledger.jsonl','');put(root,'research/published-consumer-supplier-ledger.md','');
  const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim(),object=text=>execFileSync('git',['hash-object','-w','--stdin'],{cwd:root,input:text,encoding:'utf8'}).trim();
  git('init','-b','main');git('config','user.name','Fixture');git('config','user.email','fixture@example.invalid');
  const oldExample='op-ip-honest-coverage-over-ill-posed-truth-classes';git('update-index','--add','--cacheinfo',`100644,${object(f.before)},items/${oldExample}.md`);git('update-index','--add','--cacheinfo',`100644,${object(before)},items/${old}.md`);git('add','research/plan-spec.json');git('commit','-qm','synthetic exact historical carrier preimages');
  const owned=step6OwnedInputs(run,root),scope=runScope(run,root);assert.ok(owned.includes(`items/${old}.md`)&&owned.includes(`items/${current}.md`)&&owned.includes(`items/${oldExample}.md`));assert.ok(!scope.items.some(row=>row.id===old||row.id===oldExample));
  const tree=scopedReadinessTree(run,root,{scope,includeRows:true,ownedPaths:owned});assert.ok(tree.protected_tree_projections.includes(`items/${old}.md#original-slot-deletion`));assert.ok(tree.protected_tree_projections.includes(`items/${oldExample}.md#original-slot-deletion`));
  assert.ok(preflightStep6(root,run).localPaths.includes(`items/${old}.md`));git('update-index','--cacheinfo',`100644,${object('unlicensed old source')},items/${old}.md`);assert.throws(()=>preflightStep6(root,run),/Git preimage/);

 }finally{process.chdir(cwd);f.cleanup();}
});
