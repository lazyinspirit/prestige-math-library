// Default/stage writes only this research directory. ONLY ROOT may invoke apply.
import {readFileSync,writeFileSync,existsSync,mkdirSync,renameSync,realpathSync} from 'node:fs';
import {resolve,join,relative,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {isDeepStrictEqual as equal} from 'node:util';
import {itemHashGuard} from '../../../tools/physics-support/item-hash.mjs';
import {statementHash} from '../../../tools/physics-support/step5-statement.mjs';
import {readLibraryItems,validateFrontier} from '../../../tools/physics-support/step5-rounds.mjs';
import {ownerFindingRequest} from '../../../tools/physics-support/step5-owner-finding-queue.mjs';

const RUN='fluid-dynamics-all-47-2026-10-23', own=dirname(fileURLToPath(import.meta.url));
const root=resolve(own,'../..'), work=join(root,'research',RUN+'-step5-v2');
const statePath=join(root,'.physics-autopilot',RUN,'state.json');
const ledgerPath=join(root,'research/defect-ledger.jsonl');
const pointerPath=join(work,'owner-finding-queue-request.json');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const raw=p=>hash(readFileSync(p));
const rel=p=>relative(root,p);
const need=(ok,why)=>{if(!ok)throw Error(why)};
const ref=p=>({path:rel(p),sha256:raw(p)});
const ownPath=name=>join(own,name);
const writeNew=(p,value)=>writeFileSync(p,typeof value==='string'||Buffer.isBuffer(value)?value:JSON.stringify(value,null,2)+'\n',{flag:'wx'});
const local=p=>join(root,'research',RUN+'-'+p);
const kin=local('owner-step4-kinematics'), per=local('owner-step4-periodic-analysis'), kinetic=local('owner-step4-kinetic');
const subjects=[
 {id:'pthm-fd-continuous-source-local-balances',unit:'9',lane:'1',mode:'owner-discovery',owner:'/root/fluid_step4_kinematics',raw:'e90c7e572e83a89c00c3494af475f36b4cdee54b3ab6acc4471636cfd52856ce',severity:'fatal',subclass:'missing-hypothesis',location:'statement',suffix:'continuous-source-material-velocity',discovery:join(kin,'scientific-resolution.json'),science:[join(kin,'scientific-resolution.json'),join(kin,'FINAL-REPORT.md'),join(kin,'material-interface-consumer-review.json'),join(work,'step5-v2-initial-r1-u9.json')],proposal:[join(kin,'pthm-fd-continuous-source-local-balances.diff'),join(kin,'proposed/items/pthm-fd-continuous-source-local-balances.md')],finding:'The Statement permits u independent of the material motion chi, but Proof 1.1 and 3.2-3.3 use transport with u as its velocity. The original scientific owner gives an actual smooth static-motion countermodel satisfying the displayed balances but violating the claimed local PDEs.',scope:'Supply the explicit same-motion relation u(t,chi(t,a))=partial_t chi(t,a), independently check the preserved full balance conclusions and all affected uses, supplier before consumers. Do not invent empirical validity.'},
 {id:'pthm-fd-local-boltzmann-h-balance',unit:'26',lane:'2',mode:'native-referral',severity:'fatal',subclass:'invalid-inference',location:'proof-step',suffix:'local-h-sectionwise-equation',science:[join(kinetic,'scientific-review.md')],proposal:[join(kinetic,'proposed/pthm-fd-local-boltzmann-h-balance.md')],raw:'0286d7ada795ca5ebc2cc988d26989bae19dfb258f77fbb9004b0d53f4148679',finding:'The adopted kinetic equation is product-almost-everywhere, but Proof 2.1 substitutes it on every fixed time-space section to conclude a pointwise local H balance. Product-a.e. equality does not supply every section, as explicitly referred by completed native unit 26.',scope:'Resolve the distinct sectionwise equation inference while preserving the pointwise conclusion. Preserve and separately reconcile the original S_f objection as false_positive. The entropy item is a downstream use requiring normal inventory/maintenance, not a second canonical finding or queue entry. Do not make optional S_f changes solely to overturn the false-positive objection.'},
 {id:'thm-fd-smooth-periodic-incompressible-ivp',unit:'18',lane:'3',mode:'owner-discovery',owner:'/root/fluid_step4_periodic_analysis',raw:'d9b8d2d51ff8a7cea61e446a3e962e2207bd6e4f1b5559fcafd7d2eba9e1a931',severity:'fatal',subclass:'missing-choice-scope',location:'proof-step',suffix:'periodic-canonical-extraction',discovery:join(per,'review.md'),science:[join(per,'review.md'),join(per,'proposal-manifest.json')],proposal:[],finding:'A1 licenses an unspecified nested dependent extraction in Proof 5.1 from Countable Choice merely because the coordinate-time index set is countable. Proof 6.1 then uses that unconstructed diagonal. Native unit 18 explicitly refers this same defect.',scope:'Use only the canonical scalar extraction, specified index-map recursion, uniform convergence argument and corrected analytic choice attribution from the original scientific proposal. Preserve the complete Statement and existing choice strength. No optional quantitative Statement enrichment, lifespan rewrite, or unrelated proof change.'},
 {id:'lem-fd-transport-and-density',unit:'2',lane:'3',mode:'owner-discovery',owner:'/root/fluid_step4_kinematics',raw:'1535375a15bed0a1e52dce8dc71910d33e4f83b08241703f1779f3cf5e1f056b',severity:'nonfatal',subclass:'citation-misattributed',location:'facts-block',suffix:'transport-f1-local-conventions',discovery:join(kin,'scientific-resolution.json'),science:[join(kin,'scientific-resolution.json'),join(kin,'FINAL-REPORT.md')],proposal:[join(kin,'lem-fd-transport-and-density.diff'),join(kin,'proposed/items/lem-fd-transport-and-density.md')],finding:'Facts F1 attributes generic local chart fields to def-fd-smooth-motion although that supplier requires a normalized regular C1 reference body. The lemma defines these fields itself and establishes inverse regularity with F2; this is an independent nonfatal citation-scope defect.',scope:'Repair only F1/local-definition attribution and necessary owning citation metadata; preserve the complete Statement and analytic conclusions. Copy/reconcile the original determinant F4 tuple as false_positive and never perform its unnecessary F4 rewrite. The separately reported Proof 7.1 interval-domain referral is outside this four-entry queue.'}
];
subjects.push(...read(ownPath('extra-subjects.json')));
const secondary={subject:'lem-fd-transport-and-density',defect_id:RUN+'-owner-precollection-transport-interval-domain',finding:'Proof 7.1 establishes its derivative bound only on a smaller time neighborhood but invokes F9 on int T, which need not be contained there.',scope:'Restrict the F9 application to a smaller open interval V containing [t,t+k], contained in int T and the finite-subcover time neighborhood. Preserve Statement and F4. Give concrete native repair_notes/ledger_updates evidence for this separate row; Root independently verifies its closure because the queue API authenticates only the primary typed F1 resolution.',native_evidence:rel(join(work,'step5-v2-initial-r1-u2.json'))};
subjects.find(s=>s.id===secondary.subject).scope+=' Also resolve the separately recorded Proof 7.1 interval-domain referral by the exact smaller-open-V restriction. Report that secondary finding in concrete repair_notes/ledger_updates, not an extra root_finding_resolutions row; Root separately verifies closure.';
function stateGuard({drained}){
 const bytes=readFileSync(statePath),s=JSON.parse(bytes);
 need(s.run===RUN&&s.stage==='5.1-adjudicate'&&s.paused===true&&!s.finishedAt&&!s.stages?.['5.1-adjudicate']?.doneAt,'Require exact paused unfinished initial adjudication');
 const active=Object.entries(s.dispatches??{}).filter(([,v])=>v.startedAt&&!v.endedAt);
 if(drained)need(active.length===0,'Native writers are still active: '+active.map(([k])=>k));
 need(!existsSync(join(root,'.physics-autopilot/step5-shared-write.lock')),'Shared writer lock exists');
 for(const n of ['initial-1-collected.json','certification-impact-initial-1.json'])need(!existsSync(join(work,n)),'Immutable parent/certificate already exists: '+n);
 if(existsSync(join(work,'certification.json'))){const c=read(join(work,'certification.json'));need(c.phase!=='impact-initial'||c.round!==1,'Round already certified');}
 need(!existsSync(pointerPath),'Owner queue pointer already exists; refuse overwrite');
 return {bytes,active};
}
function validateNative(s,pack){
 const label='step5-v2-initial-r1-u'+s.unit,p=join(work,label+'.json'),out=read(p);
 const dispatchPath=local('dispatch/alpha-adjudicate-'+label+'.result.json'),d=read(dispatchPath);
 need(out.run===RUN&&out.phase==='initial'&&out.round===1&&String(out.unit)===s.unit&&out.input_sha256===hash(JSON.stringify(pack)),'Wrong original native outcome '+s.id);
 need(d.ok===true&&d.run===RUN&&d.role==='alpha-adjudicate'&&d.label===label&&d.model==='gpt-6.1-sol'&&d.provider_effort==='high'&&equal(d.covers,[s.unit])&&Number.isFinite(Date.parse(d.ended_at)),'Native identity/completion mismatch '+s.id);
 const task=join(work,label+'.task.md');need(readFileSync(task,'utf8').includes(join(work,'initial-1.json')),'Native task does not bind original pack');
 const assigned=pack.assignments[s.unit].filter(x=>x.id===s.id);need(assigned.length<2,'Repeated assignment');
 if(assigned.length){const tuple=assigned[0];need(pack.rejected.filter(x=>equal(x,tuple)).length===1,'Exact tuple absent from frozen rejected set');const ds=out.decisions.filter(x=>x.id===s.id&&x.model===tuple.model&&x.context_sha256===tuple.context_sha256);need(ds.length===1&&ds[0].outcome==='false_positive','Expected authentic original false_positive');return {p,task,dispatchPath,tuple,decision:ds[0]};}
 need(s.mode==='owner-discovery'||out.downstream?.includes(s.id),'Unassigned native-referral lacks an exact native downstream referral');return {p,task,dispatchPath};
}
function collect(){
 const pack=read(join(work,'initial-1.json')),frontier=read(join(work,'frontier.json'));validateFrontier(frontier);
 need(pack.run===RUN&&pack.phase==='initial'&&pack.round===1&&pack.version===2&&pack.repair_scope==='frontier','Wrong frozen original pack');
 const rows=readFileSync(ledgerPath,'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
 const graph=readLibraryItems(root);
 const bindings={};const bind=p=>{bindings[rel(p)]=raw(p);return ref(p)};
 bind(join(work,'initial-1.json'));bind(join(work,'frontier.json'));bind(fileURLToPath(import.meta.url));bind(ownPath('extra-subjects.json'));bind(ownPath('scientific-discoveries.json'));for(const n of ['step5-owner-finding-queue.mjs','defect-ledger.mjs','item-hash.mjs','step5-statement.mjs','step5-rounds.mjs','models.mjs'])bind(join(root,'tools/physics-support',n));
 const data=subjects.map(s=>{
  const path=join(root,'items',s.id+'.md'),b=readFileSync(path);need(hash(b)===s.raw,'Target changed: '+s.id);
  need(frontier.ids.includes(s.id),'Target outside frozen original frontier');
  const defect_id=RUN+'-owner-precollection-'+s.suffix;need(!rows.some(x=>x.defect_id===defect_id),'Finding ID already exists');
  const open=rows.filter(x=>x.run===RUN&&x.subject===s.id&&x.caught_by_role==='owner'&&x.caught_at_stage==='5-adjudicate'&&x.disposition==='open');need(open.length===0,'Existing OPEN owner finding on target needs Root reconciliation: '+s.id);
  const n=validateNative(s,pack);[n.p,n.task,n.dispatchPath,...s.science,...s.proposal].forEach(bind);if(s.discovery)bind(s.discovery);
  const consumers=graph.filter(x=>x.deps.includes(s.id)||x.references.includes(s.id)).map(x=>x.id);
  return {...s,source_path:rel(path),before_raw_sha256:hash(b),before_content_sha256:itemHashGuard(b.toString()),before_statement_sha256:statementHash(b.toString()),native: {outcome:bind(n.p),task:bind(n.task),dispatch:bind(n.dispatchPath),...(n.tuple?{original_tuple:n.tuple,original_decision:n.decision}:{})},defect_id,affected_consumers:consumers};
 });
 return {data,bindings};
}
function stage(){
 stateGuard({drained:false});const {data,bindings}=collect();const snapshot=stateGuard({drained:false});
 const archive=ownPath('staged-preimages');mkdirSync(archive,{recursive:true});
 for(const s of data)writeNew(join(archive,s.id+'.md'),readFileSync(join(root,s.source_path)));
 writeNew(join(archive,'state.json'),snapshot.bytes);writeNew(join(archive,'defect-ledger.jsonl'),readFileSync(ledgerPath));
 // Extract ONLY preexisting owner A1/compactness proposal hunks, no new science.
 const id=subjects[2].id,original=readFileSync(join(root,'items',id+'.md'),'utf8'),proposed=readFileSync(join(per,'proposed',id+'.md'),'utf8');
 const beforeA=original.match(/^\[A1\].*$/m)?.[0],afterA=proposed.match(/^\[A1\].*$/m)?.[0];
 const before5=original.slice(original.indexOf('\n5.1 ')+1,original.indexOf('\n7.1 '));
 const after5=proposed.slice(proposed.indexOf('\n5.1 ')+1,proposed.indexOf('\n7.1 '));
 need(beforeA&&afterA&&before5.startsWith('5.1 ')&&after5.includes('\n5.3 '),'Missing canonical extraction proposal');
 const scoped=ownPath('scoped-periodic-extraction-proposal.json');writeNew(scoped,{run:RUN,kind:'root-scope-projection-draft',scientific_author:'/root/fluid_step4_periodic_analysis',prepared_by:'/root/fluid_step4_statistics',original_proposal:ref(join(per,'proposed',id+'.md')),original_final_discovery:ref(join(per,'review.md')),scope:data[2].scope,exact_replacements:[{before:beforeA,after:afterA},{before:before5,after:after5}],statement_change_authorized:false});
 bindings[rel(scoped)]=raw(scoped);bindings[rel(join(per,'proposed',id+'.md'))]=raw(join(per,'proposed',id+'.md'));data[2].proposal=[scoped];
 const plan={version:1,run:RUN,kind:'unapplied-root-only-owner-finding-queue-plan',prepared_by:'/root/fluid_step4_statistics',root_publication:false,native_review:false,native_transition:false,phase:'initial',round:1,observed_active_dispatches:snapshot.active.map(([k])=>k),bindings,entries:data,secondary_finding:secondary,scope_note:'12 unique subjects; 13 separate OPEN canonical rows. Secondary transport closure remains Root-owned and is not API-authenticated.'};
 writeNew(ownPath('stage-plan.json'),plan);console.log(JSON.stringify({plan:rel(ownPath('stage-plan.json')),sha256:raw(ownPath('stage-plan.json')),active:plan.observed_active_dispatches,apply_executed:false},null,2));
}
function apply(){
 const argv=process.argv.slice(2),opt=k=>argv[argv.indexOf(k)+1];
 need(argv.includes('--reviewer')&&opt('--reviewer')==='/root','Only explicit Root publication is authorized');
 const planPath=ownPath('stage-plan.json');need(argv.includes('--approve-plan-sha256')&&opt('--approve-plan-sha256')===raw(planPath),'Root must approve the exact staged plan hash');
 const plan=read(planPath);need(plan.run===RUN&&plan.entries.length===subjects.length,'Wrong staged plan');
 for(const [p,h]of Object.entries(plan.bindings))need(raw(join(root,p))===h,'Bound original evidence changed: '+p);
 const snapshot=stateGuard({drained:true});const fresh=collect();
 for(let i=0;i<subjects.length;i++){const a=plan.entries[i],b=fresh.data[i];need(a.id===b.id&&a.before_raw_sha256===b.before_raw_sha256&&a.before_content_sha256===b.before_content_sha256&&a.before_statement_sha256===b.before_statement_sha256&&equal(a.native,b.native)&&equal(a.affected_consumers,b.affected_consumers),'Staged subject/native/context changed: '+a.id);}
 const stamp=new Date().toISOString(),tag=stamp.replace(/[^0-9]/g,''),application=ownPath('application-'+tag);mkdirSync(application);
 writeNew(join(application,'state-before.json'),snapshot.bytes);writeNew(join(application,'ledger-before.jsonl'),readFileSync(ledgerPath));
 const rows=[],entries=[];
 for(const s of plan.entries){
  const before=join(application,s.id+'-before.md');writeNew(before,readFileSync(join(root,s.source_path)));
  const scopePath=join(application,s.id+'-root-scope.json');writeNew(scopePath,{version:1,run:RUN,published_by:'/root',prepared_by:'/root/fluid_step4_statistics',subject:s.id,scope:s.scope,source_write_authority:'native correction lane only',original_false_positive_preserved:!!s.native.original_tuple,duplicate_entropy_finding_forbidden:s.id==='pthm-fd-local-boltzmann-h-balance'});
  let discovery;
  if(s.mode==='owner-discovery'){
   const dp=join(application,s.id+'-root-published-discovery.json');writeNew(dp,{version:1,run:RUN,scientific_owner:s.owner,published_by:'/root',publication_kind:'root-publication-of-original-scientific-discovery',published_at:stamp,root_wrapper_author:'/root',original_final_discovery:ref(s.discovery),original_science:s.science.map(ref),note:'The named scientific owner authored the exact original evidence, not this Root publication wrapper. This wrapper creates no native review, tuple, source repair or gate authority.'});discovery=ref(dp);
  }
  const evidence=[...s.science.map(ref),s.native.outcome];
  if(s.id===secondary.subject){const second={defect_id:secondary.defect_id,run:RUN,at:stamp,class:'accuracy',subclass:'invalid-inference',severity:'nonfatal',location:'proof-step',subject:s.id,caught_at_stage:'5-adjudicate',caught_by_role:'owner',disposition:'open',item_sha256:s.before_content_sha256,description:secondary.finding,correction:secondary.scope,affected_consumers:s.affected_consumers,evidence:[{path:secondary.native_evidence,sha256:raw(join(root,secondary.native_evidence)),note:'Actual native u2 distinct Proof 7.1 referral. Root independently confirms it; no typed queue closure is fabricated.'}]};const sr=join(application,s.id+'-secondary-open-row.json');writeNew(sr,second);rows.push(second);evidence.push(ref(sr));}

  const row={defect_id:s.defect_id,run:RUN,at:stamp,class:'accuracy',subclass:s.subclass,severity:s.severity,location:s.location,subject:s.id,caught_at_stage:'5-adjudicate',caught_by_role:'owner',disposition:'open',item_sha256:s.before_content_sha256,description:s.finding,correction:s.scope,affected_consumers:s.affected_consumers,evidence:evidence.map(x=>({...x,note:'Exact original scientific/native evidence; Root confirms the distinct current finding.'}))};
  const rp=join(application,s.id+'-open-owner-row.json');writeNew(rp,row);rows.push(row);
  entries.push({subject:s.id,owner_lane:s.lane,mode:s.mode,root_finding:{defect_id:s.defect_id,record:ref(rp)},before_source:ref(before),before_content_sha256:s.before_content_sha256,before_statement_sha256:s.before_statement_sha256,native_outcome:s.native.outcome,science:[...evidence,...(discovery?[discovery]:[])],proposals:[...s.proposal.map(ref),ref(scopePath)],...(discovery?{discovery,scientific_owner:s.owner}:{}),...(s.native.original_tuple?{original_tuple:s.native.original_tuple}:{})});
 }
 const rowsPath=join(application,'open-owner-rows.json');writeNew(rowsPath,rows);
 const request={version:1,run:RUN,reviewer:'/root',phase:'initial',round:1,entries,root_application:{state_before:ref(join(application,'state-before.json')),approved_plan:ref(planPath),applied_at:stamp}};
 const requestPath=join(work,'owner-finding-queue-'+tag+'.json');need(!existsSync(requestPath),'Immutable request already exists');
 // Final paused/drained recheck before the ONLY canonical mutation.
 const last=stateGuard({drained:true});need(last.bytes.equals(snapshot.bytes),'State changed during preparation');
 const result=spawnSync(process.execPath,[join(root,'tools/physics-support/defect-ledger.mjs'),'append','--file',rowsPath],{cwd:root,encoding:'utf8'});
 writeNew(join(application,'native-ledger-append.json'),{command:[process.execPath,'tools/physics-support/defect-ledger.mjs','append','--file',rel(rowsPath)],status:result.status,stdout:result.stdout,stderr:result.stderr});
 need(result.status===0,'Canonical native append failed; stop and inspect preserved application evidence');
 writeNew(requestPath,request);writeNew(pointerPath,{version:1,run:RUN,state_dir:'.physics-autopilot/'+RUN,request:ref(requestPath)});
 // Actual API validation occurs ONLY after Root's real append/advertisement.
 // No temporary ledger/pointer, invented row, or fake validation authority.
 const items=readLibraryItems(root),current={},statements={};
 for(const s of plan.entries){const t=readFileSync(join(root,s.source_path),'utf8');current[s.id]=itemHashGuard(t);statements[s.id]=statementHash(t);}
 try{const context=ownerFindingRequest(root,RUN,'initial',1,{items,current,statements,dir:work});need(context&&context.subjects.length===subjects.length,'Queue API did not authenticate all planned subjects');writeNew(join(application,'post-advertisement-authentication.json'),{validated:true,request:ref(requestPath),pointer:ref(pointerPath),subjects:context.subjects,assignments:context.assignments,native_transition:false,canonical_closure:false});console.log('ROOT queue advertised and authenticated. Root must inspect and resume native lanes; no transition/gate was executed.');}
 catch(error){writeNew(join(application,'post-advertisement-authentication-failed.json'),{validated:false,error:String(error),note:'Canonical append and advertisement are preserved. No rollback, native transition or closure was attempted. Root must resolve this actual failure before resuming.'});throw error;}
}
need(realpathSync(process.cwd())===realpathSync(root),'Run only from the physics workspace');
if(process.argv.includes('--apply'))apply();else stage();
