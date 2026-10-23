// ROOT-ONLY reviewed integration. Agent may run --stage only. Never issue live
// receipts/approvals or invoke stamps, validators, controllers or subprocesses.
import {readFileSync,writeFileSync,appendFileSync,mkdirSync,existsSync,copyFileSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';import {fileURLToPath} from 'node:url';import {resolve,join,relative} from 'node:path';
import {itemHashGuard} from '../../../tools/physics-support/item-hash.mjs';
import {recordedMaintenanceToDeferred} from '../../../tools/physics-support/step3-escalations.mjs';
const HERE=fileURLToPath(new URL('.',import.meta.url)),ROOT=resolve(HERE,'../../..');
const RUN='fluid-dynamics-all-47-2026-10-23',SUBJECT='def-fd-quantity-and-frame-conventions';
const args=process.argv.slice(2),mode=args[0];
const opt=n=>{const i=args.indexOf(n);return i<0?null:args[i+1];};
if(!['--stage','--apply','--materialize-context'].includes(mode))throw Error('Use --stage, --apply --plan PATH --plan-sha256 HASH --writers-drained, or --materialize-context --plan PATH.');
const sha=b=>createHash('sha256').update(b).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hashValue=x=>sha(JSON.stringify(canonical(x))??'undefined');
const clone=x=>JSON.parse(JSON.stringify(x)),same=(a,b)=>hashValue(a)===hashValue(b);
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const file=p=>{assert(typeof p==='string'&&!p.startsWith('/')&&!p.split('/').includes('..'),'Unsafe repository path');return join(ROOT,p);};
const bytes=p=>readFileSync(file(p)),text=p=>bytes(p).toString(),json=p=>JSON.parse(text(p));
const rel=p=>relative(ROOT,p),local=p=>rel(join(HERE,p));
const native=b=>`research/${RUN}-alpha-batch-${b}-3a-decisions.json`;
const ledgerPath='research/defect-ledger.jsonl',maintenancePath='research/published-consumer-supplier-ledger.md';
const oldReadiness=`${RUN}-3a-batch-4-historical-supplier-readiness`,oldBurgers=`${RUN}-3a-batch-23-published-11`;
const extraBurgers=`${RUN}-3a-batch-23-published-burgers-initial-support`;
const rowsNow=()=>text(ledgerPath).split(/\r?\n/).filter(Boolean).map(JSON.parse);
const findRow=(rows,id)=>{const found=rows.filter(x=>x.defect_id===id);assert(found.length===1,`Need one actual row: ${id}`);return found[0];};
const activeRows=rows=>{const superseded=new Set(rows.flatMap(x=>x.supersedes??[]));return rows.filter(x=>!superseded.has(x.defect_id));};
const gateShape=d=>{assert(d.route==='gate'&&d.obligation===`gate:${d.defect_ids[0]}`&&d.defect_ids.length===1,'Exact supplemental gate ownership');};
function literalContext(entry){
 const supplier=text(`items/${entry.supplier_id}.md`),consumer=text(`items/${entry.consumer_id}.md`);
 assert(supplier.includes(entry.used_clause),'Published used clause no longer literal');
 assert(entry.premise_quotes.length>0&&entry.premise_quotes.every(q=>consumer.includes(q)),'Consumer premise quote no longer literal');
 assert(supplier.includes('u_L\\varepsilon')&&supplier.includes('u_R\\varepsilon'),'Original published support estimate changed: review instead of guessing');
 assert(consumer.includes('The Burgers flux is $C^2$')&&consumer.includes('[F1] [[thm-fd-convex-scalar-riemann]]'),'Actual independent owned shock construction changed');
 return{supplier,consumer};
}
function stripDerived(d){const after=clone(d);delete after.subject_sha256;delete after.context_evidence;delete after.context_receipt_sha256;return after;}
function stage(){
 const dir=join(HERE,'root-integration-staging',new Date().toISOString().replaceAll(':','-'));
 mkdirSync(dir,{recursive:true});const guards=new Map(),documents=new Map(),changes=[];
 const guard=p=>{if(!guards.has(p))guards.set(p,{path:p,raw_sha256:sha(bytes(p))});};
 const getDoc=b=>{const p=native(b);if(!documents.has(p)){guard(p);documents.set(p,{before:json(p),after:json(p)});}return documents.get(p);};
 const edit=patch=>{
  const o=patch.before.obligation,b=Number(o.split(':')[1]),doc=getDoc(b),index=doc.after.decisions.findIndex(d=>d.obligation===o);
  assert(index>=0&&same(doc.after.decisions[index],patch.before),`Frozen decision preimage changed: ${o}`);
  const after=stripDerived(patch.proposed_after??patch.after);
  assert(after.id===patch.before.id&&after.route===(['refuter:40:1','refuter:44:1'].includes(o)?'flagged':patch.before.route),'Unexpected subject/route mutation');
  for(const k of ['observed_source','observed_sha256','producer_carrier_at_split','producer_pre_snapshot','observation_basis','dependency_path'])
   assert(same(after[k]??null,patch.before[k]??null),`Frozen observation mutation: ${o}/${k}`);
  doc.after.decisions[index]=after;changes.push({batch:b,obligation:o});
 };
 // Guard the frozen packages and the actual already-adopted private predicates.
 const ordinary=local('ordinary-native-patches.final.json');guard(ordinary);const ordinaryPatches=json(ordinary);assert(ordinaryPatches.length===11,'Expected exact ordinary11');
 for(const p of ordinaryPatches)edit(p);
 const readiness=local('readiness4/native-patches.proposed.json');guard(readiness);for(const p of json(readiness))edit(p);
 const contextDecision=local('burgers-context/native-context-decision.proposed.json');guard(contextDecision);edit(json(contextDecision));
 const gatePath=local('kinetic-supplemental-gate.final.json');guard(gatePath);const gate=stripDerived(json(gatePath));gateShape(gate);
 const kdoc=getDoc(25);assert(!kdoc.after.decisions.some(x=>x.obligation===gate.obligation),'Kinetic gate already exists; inspect idempotence manually');
 assert(json(`research/${RUN}-batch-25.pages.json`).flatMap(p=>p.items).some(x=>x.id===gate.id),'Kinetic source not owned by batch25');
 assert(text(`items/${gate.id}.md`).includes('without a velocity cutoff'),'Current full-velocity source premise absent');
 const sourceStatement=text(`items/${gate.id}.md`).split('## Statement\n')[1].split('\n## Statement references')[0].trim();
 const kineticQuote=json(`research/${RUN}-batch-26.proof-contracts.json`).contracts['pthm-fd-boltzmann-entropy'].citations.find(x=>x.fact==='F1'&&x.source===gate.id);
 assert(kineticQuote&&kineticQuote.quote.trim()===sourceStatement,'Actual kinetic consumer exact F1 source quote is stale; root must integrate scientific quote first');
 kdoc.after.decisions.push(gate);changes.push({batch:25,obligation:gate.obligation});
 const rowPaths=[local('proposed-reader23-ledger-rows.json'),local('readiness4/canonical-readiness-row.proposed.json'),local('burgers-context/primary-deferred-row.proposed.json')];
 rowPaths.forEach(guard);const appendRows=[...json(rowPaths[0]),json(rowPaths[1]),json(rowPaths[2])];assert(appendRows.length===4,'Expected exact four append-only rows');
 const rows=rowsNow(),active=activeRows(rows),allIds=new Set(rows.map(x=>x.defect_id));
 assert(appendRows.every(x=>x.run===RUN&&!allIds.has(x.defect_id)),'Proposed row already present or wrong run; never duplicate append');
 for(const id of[oldReadiness,oldBurgers])assert(active.some(x=>x.defect_id===id),`Canonical predecessor no longer active: ${id}`);
 for(const item of['prop-fd-viscous-entropy-passage','thm-fd-convex-scalar-riemann'])
  assert(!active.some(x=>x.run===RUN&&x.subject===item),'A repair row for reader23 source already exists; do not duplicate one defect');
 const readyRow=appendRows.find(x=>x.supersedes?.includes(oldReadiness)),deferred=appendRows.find(x=>x.supersedes?.includes(oldBurgers));
 assert(readyRow.supersedes.length===1&&readyRow.severity==='nonfatal'&&readyRow.disposition==='fixed','Readiness must supersede one cause only');
 assert(deferred.supersedes.length===1&&deferred.disposition==='deferred','Published maintenance must be deferred, not repaired');
 assert(findRow(rows,extraBurgers).disposition==='nonfatal-recorded','Independent published support alert must stay nonfatal-recorded');
 assert(findRow(rows,gate.defect_ids[0]).disposition==='fixed','Kinetic row is not the actual fixed cause');
 const receiptPath=local('burgers-context/external-context-receipt.DRAFT.json');guard(receiptPath);const context=json(receiptPath),entry=context.contexts[0];literalContext(entry);
 assert(context.reviewed_by===null,'Draft context unexpectedly claims root issuance');
 assert(recordedMaintenanceToDeferred(entry,findRow(rows,oldBurgers),deferred,{run:RUN,decisionPath:native(23),obligation:'reader:23:11',hashValue}),'Root-reviewed exact maintenance transition guard rejected actual rows');
 const appendixPath=local('burgers-context/maintenance-ledger-append.proposed.txt');guard(appendixPath);const appendix=text(appendixPath);
 assert(appendix.includes(entry.maintenance.quote)&&!text(maintenancePath).includes(entry.maintenance.quote),'Maintenance append already applied or not exact');
 guard(ledgerPath);guard(maintenancePath);
 // Immutable sources/reports/scopes/snapshots: preserve exact original bytes.
 const diagnosis=json(local('routing-diagnosis-and-proposals.json'));guard(local('routing-diagnosis-and-proposals.json'));
 for(const g of diagnosis.guard_preimages){
  if([ledgerPath,maintenancePath].includes(g.path)||g.path.includes('-3a-decisions.json'))continue;
  assert(sha(bytes(g.path))===g.raw_sha256_preimage,`Scientific/immutable preimage changed: ${g.path}`);guard(g.path);
 }
 for(const p of['tools/physics-support/step3-shared-causal-repair.mjs','tools/physics-support/step3-escalations.mjs'])guard(p);
 assert(text('tools/physics-support/step3-shared-causal-repair.mjs').includes('single-historical-readiness-reference'),'Reviewed readiness4 guard not adopted');
 assert(text('tools/physics-support/step3-escalations.mjs').includes('maintenance_disposition_transitions'),'Reviewed existing-context transition not adopted');
 for(const ref of entry.review.evidence_refs){assert(sha(bytes(ref.path))===ref.sha256,'Actual Burgers review evidence changed');guard(ref.path);}
 const docs=[...documents].map(([path,d])=>({path,before_raw_sha256:sha(bytes(path)),after:d.after}));
 const plan={version:1,run:RUN,status:'DRAFT staging only; root must review and execute',at:new Date().toISOString(),guards:[...guards.values()],appendRows,docs,maintenanceAppend:appendix,
  changes,contextTemplatePath:receiptPath,derivedStampsRemovedOnlyForChangedDecisions:true,
  liveApprovalOrReceiptWrites:[],rootPhases:['Review --stage output and its plan raw digest.','Root-only --apply with exact plan digest and drained-writers assertion.','--materialize-context produces an UNAPPROVED candidate only. Root issues actual external context receipt/pointer BEFORE native context stamping.','Root stamps ALL changed/current native decisions; then use root-refresh-causal-receipts.mjs for actual3/12+readiness issuance, preserving old receipts.','Root refreshes generated ledger view and recertification; only then actual full battery.']};
 const pp=join(dir,'plan.json');writeFileSync(pp,JSON.stringify(plan,null,2)+'\n');
 console.log(JSON.stringify({mode:'STAGED ONLY; no live mutation',plan:rel(pp),plan_sha256:sha(readFileSync(pp)),rows:appendRows.length,changed_decisions:changes.length,changed_native_files:docs.length},null,2));
}
function loadPlan(){const p=opt('--plan');assert(p,'--plan is required');const b=bytes(p),plan=JSON.parse(b);assert(plan.run===RUN&&plan.version===1,'Wrong plan');return{path:p,plan,raw:b};}
function apply(){
 const{path,plan,raw}=loadPlan();assert(args.includes('--writers-drained'),'Root must independently assert --writers-drained');
 assert(opt('--plan-sha256')===sha(raw),'Reviewed plan digest mismatch');
 assert(!existsSync(join(ROOT,`.physics-autopilot/${RUN}/controller.lock`)),'Controller lock exists');
 assert(!existsSync(file(`${ledgerPath}.append-lock`)),'Native ledger append lock exists');
 for(const g of plan.guards)assert(sha(bytes(g.path))===g.raw_sha256,`Plan guard stale: ${g.path}; review/restage, never refresh silently`);
 const archive=join(HERE,'root-apply-archives',new Date().toISOString().replaceAll(':','-'));mkdirSync(archive,{recursive:true});
 // Archive EVERY mutation preimage and plan before the first live write.
 for(const p of[ledgerPath,maintenancePath,...plan.docs.map(x=>x.path)])copyFileSync(file(p),join(archive,p.replaceAll('/','__')));
 copyFileSync(file(path),join(archive,'reviewed-plan.json'));const log={run:RUN,started_at:new Date().toISOString(),operations:[]};
 const record=x=>{log.operations.push(x);writeFileSync(join(archive,'apply-log.json'),JSON.stringify(log,null,2)+'\n');};record({phase:'all-preimages-archived',plan_sha256:sha(raw)});
 // Prepare all rewritten native JSONs before touching the ledger. A failure
 // after append is recovered from this journal, never by blind re-execution.
 const temps=plan.docs.map(d=>{const p=`${d.path}.routing-tmp-${process.pid}`;writeFileSync(file(p),JSON.stringify(d.after,null,2)+'\n');return{temp:p,path:d.path};});
 const ledgerText=text(ledgerPath);appendFileSync(file(ledgerPath),(ledgerText.endsWith('\n')?'':'\n')+plan.appendRows.map(x=>JSON.stringify(x)).join('\n')+'\n');record({phase:'append-only-ledger-rows',ids:plan.appendRows.map(x=>x.defect_id)});
 for(const t of temps){renameSync(file(t.temp),file(t.path));record({phase:'native-decision-adoption',path:t.path});}
 appendFileSync(file(maintenancePath),plan.maintenanceAppend);record({phase:'published-open-maintenance-appended'});
 record({phase:'complete-unstamped',live_receipt_approvals_issued:false,ended_at:new Date().toISOString()});
 console.log(JSON.stringify({mode:'ROOT APPLIED bookkeeping only; no stamps/live approvals',archive:rel(archive),next:plan.rootPhases.slice(2)},null,2));
}
function materialize(){
 const{path,plan}=loadPlan(),rows=rowsNow(),receipt=clone(json(plan.contextTemplatePath)),entry=receipt.contexts[0];
 const{supplier,consumer}=literalContext(entry);
 const primary=findRow(rows,entry.maintenance.defect_id),prior=findRow(rows,oldBurgers),extra=findRow(rows,extraBurgers);
 assert(primary.disposition==='deferred'&&primary.supersedes?.includes(oldBurgers),'Deferred successor has not actually been applied');
 assert(extra.disposition==='nonfatal-recorded'&&text(maintenancePath).includes(entry.maintenance.quote),'Exact retained published maintenance not actually present');
 const scope=json(`research/${RUN}-step3-scope-23.json`),finding=scope.reader_findings.find(x=>x.obligation==='reader:23:11');
 entry.finding_sha256=hashValue(finding);entry.supplier_math_sha256=itemHashGuard(supplier);entry.consumer_math_sha256=itemHashGuard(consumer);
 assert(entry.supplier_math_sha256===finding.pre_sha256,'Published canonical source changed from the genuine frozen observation');
 entry.maintenance_disposition_transitions[0].prior_row_sha256=hashValue(prior);
 assert(recordedMaintenanceToDeferred(entry,prior,primary,{run:RUN,decisionPath:native(23),obligation:'reader:23:11',hashValue}),'Actual retained transition invalid');
 entry.reviewed_maintenance_findings[0].ledger_row_sha256=hashValue(extra);
 for(const r of entry.review.evidence_refs)assert(sha(bytes(r.path))===r.sha256,'Scientific evidence stale');
 receipt.reviewed_by=null;receipt.status='CURRENT MATERIALIZED CANDIDATE ONLY. Root must review/issue live receipt and native pointer/seal. This script grants no approval.';
 const output=join(HERE,'root-integration-staging',`materialized-context-${new Date().toISOString().replaceAll(':','-')}.json`);
 writeFileSync(output,JSON.stringify(receipt,null,2)+'\n');
 console.log(JSON.stringify({mode:'UNAPPROVED receipt candidate only',output:rel(output),plan:path,root_only_next:'Root issues actual external receipt and exact native23 pointer, then native stamps ALL. Root refreshes causal3/12+readiness receipt AFTER stamps using its separate root-refresh-causal-receipts.mjs. No live receipt or approval was written.'},null,2));
}
if(mode==='--stage')stage();else if(mode==='--apply')apply();else materialize();
