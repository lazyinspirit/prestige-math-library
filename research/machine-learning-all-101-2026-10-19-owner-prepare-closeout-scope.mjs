// Root metadata operation, invoked only at the real final Step5 owner hold.
// No content edits, workflow transitions, gate acceptance or Git mutations.
import fs from 'node:fs';
import path from 'node:path';
import {yaml} from '../tools/pathway-lib.mjs';
import {runScope,sha256,splitFrontmatter} from '../tools/step6-lib.mjs';
import {git,textGit,regularPath} from '../tools/run-commit-scope.mjs';
import {planDocument,validatePlanProjection,composePlanProjection} from '../tools/step6-plan-projection.mjs';
import {fragmentRecords,validateFragment,composeFragment} from '../tools/step6-ledger-fragment.mjs';

const root=process.cwd(),run='machine-learning-all-101-2026-10-19';
const need=(ok,why)=>{if(!ok)throw Error('owner closeout scope: '+why);};
need(process.argv.includes('--apply'),'requires explicit --apply at the final drained Step5 hold');
const inputs=new Map(),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const capture=p=>{regularPath(root,p);const text=read(p);if(inputs.has(p))need(inputs.get(p)===text,'input changed: '+p);else inputs.set(p,text);return text;};
const parsed=p=>JSON.parse(capture(p));
const statePath=`.autopilot/${run}/state.json`,requestPath=`.autopilot/${run}/owner-gate-request.json`;
// Runtime paths are read directly; regularPath intentionally excludes runtime.
const stateText=read(statePath),state=JSON.parse(stateText),requestText=read(requestPath),request=JSON.parse(requestText);
need(state.run===run&&state.paused===true&&!state.finishedAt&&['5.8-gate','5.10-gate'].includes(state.stage),'not the actual final Step5 paused hold');
need(!state.stages[state.stage].gatesPassedAt&&!state.stages[state.stage].doneAt,'final Step5 battery already passed');
need(Object.values(state.dispatches).every(x=>!x.startedAt||x.endedAt),'native writer remains');
need(request.run===run&&request.group===state.stage&&request.stages.length===1&&request.stages[0]===state.stage,'wrong actual owner gate request');
need(!Object.entries(state.stages).some(([id,s])=>id.startsWith('6-')&&s.enteredAt),'Step6 already entered');
const authorityPlan=`research/${run}-step6-plan-projection.json`,authorityLedger=`research/${run}-step6-published-ledger-fragment.json`,policyPath=`research/${run}-closeout-scope.json`,auditPath=`research/${run}-owner-closeout-scope-application.json`;
for(const p of [authorityPlan,authorityLedger,policyPath,auditPath])need(!fs.existsSync(p),'refuse overwriting existing authority: '+p);
const authorization='Owner-directed continuous supervision under CLAUDE8/9: commit only the complete101-pair machine-learning run, its genuine published-repair history and exact selected plan rows; preserve foreign HEAD/index/working content. No publication or push.';
const scope=runScope(run,root);need(scope.pages.length===202&&scope.items.length>=1285,'original202-page frontier not preserved');
const originalFrontier=parsed(`research/${run}-step5-v2/frontier.json`),currentItemIds=new Set(scope.items.map(x=>x.id));
need(originalFrontier.ids.length===1285&&originalFrontier.ids.every(id=>currentItemIds.has(id)),'original1285-item frontier not preserved');
const ids=new Set([...scope.pages,...scope.items].map(x=>x.id));
const claimsPath=`research/${run}-step3-published-claims.jsonl`,claims=capture(claimsPath).split(/\r?\n/).filter(Boolean).map(JSON.parse),receiptByMarker=new Map();
need(claims.length===264&&new Set(claims.map(x=>x.id)).size===264,'published claim inventory changed; inspect before authorizing');
const visitReceipt=(p,expectedId)=>{
 need(p.startsWith(`research/${run}-`),'foreign receipt path');const raw=capture(p),receipt=JSON.parse(raw);
 need(receipt.version===1&&receipt.kind==='recorded-local-published-repair'&&receipt.run===run&&receipt.id===expectedId&&ids.has(receipt.id),'not genuine owned repair history');
 const prior=receiptByMarker.get(receipt.ledger_marker);need(!prior||prior.sha256===sha256(raw),'ambiguous historical repair marker');
 if(!prior)receiptByMarker.set(receipt.ledger_marker,{path:p,sha256:sha256(raw)});
 // A predecessor from another run remains that run's historical context.
 if(receipt.previous_repair?.path.startsWith(`research/${run}-`)){const previous=receipt.previous_repair;need(sha256(capture(previous.path))===previous.sha256,'previous repair changed');visitReceipt(previous.path,expectedId);}
};
for(const claim of claims){
 need(claim.version===1&&claim.run===run,'foreign ownership claim');ids.add(claim.id);
 const source=capture(`items/${claim.id}.md`),fm=yaml().parse(splitFrontmatter(source).frontmatter);
 need(fm.status==='published'&&typeof fm.verification?.repair==='string','published claim needs explicit native repair receipt');visitReceipt(fm.verification.repair,claim.id);
}
const planPath='research/plan-spec.json',ledgerPath='research/published-consumer-supplier-ledger.md';
const workingPlan=capture(planPath),workingLedger=capture(ledgerPath),head=textGit(root,['rev-parse','HEAD']);
need(textGit(root,['branch','--show-current'])==='main','not main');
const indexPlanOid=textGit(root,['rev-parse',':'+planPath]),indexLedgerOid=textGit(root,['rev-parse',':'+ledgerPath]);
const originalPlan=git(root,['show',head+':'+planPath]).toString('utf8'),indexPlan=git(root,['cat-file','blob',indexPlanOid]).toString('utf8');
const originalLedger=git(root,['show',head+':'+ledgerPath]).toString('utf8'),indexLedger=git(root,['cat-file','blob',indexLedgerOid]).toString('utf8');
const currentDoc=planDocument(workingPlan),selected=new Set(scope.pages.map(x=>x.id)),pageIds=currentDoc.rows.filter(x=>selected.has(x.id)).map(x=>x.id);
need(pageIds.length===202&&new Set(pageIds).size===202,'selected plan identity inventory');
const ownedRows=text=>planDocument(text).rows.filter(x=>selected.has(x.id)).map(({id,raw})=>({id,raw}));
const manifests=fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort().map(n=>'research/'+n);
need(manifests.length===101,'manifest inventory changed');
const scopeEvidence=[scope.ledger,...manifests].map(p=>({path:p,sha256:sha256(capture(p))}));
const planSpec={version:1,kind:'plan-page-replacement-projection',run,path:planPath,authorized_by:'owner',authorization,original_head:head,original_index_blob:indexPlanOid,page_ids:pageIds,base_head_owned_rows:ownedRows(originalPlan),base_index_owned_rows:ownedRows(indexPlan),target_owned_rows:ownedRows(workingPlan),evidence:scopeEvidence};
validatePlanProjection(planSpec,run,scope.pages,workingPlan,originalPlan,indexPlan,root,{additionalPaths:[]});
composePlanProjection(originalPlan,planSpec,'head');composePlanProjection(indexPlan,planSpec,'index');
const ledgerMode={version:2,kind:'published-local-repair-marker-additions'},records=fragmentRecords(workingLedger,run,ids,ledgerMode).filter(x=>x.owned);
need(records.length===receiptByMarker.size&&records.every(x=>receiptByMarker.has(x.marker)),'repair block/receipt inventory differs');
need(fragmentRecords(originalLedger,run,ids,ledgerMode).every(x=>!x.owned)&&fragmentRecords(indexLedger,run,ids,ledgerMode).every(x=>!x.owned),'original marker projections are not absent');
const refs=records.map(x=>({marker:x.marker,...receiptByMarker.get(x.marker)}));
const ledgerSpec={...ledgerMode,run,path:ledgerPath,authorized_by:'owner',authorization,base_owned_records:[],target_owned_records:records.map(x=>x.text),evidence:refs.map(({path,sha256})=>({path,sha256})),record_receipts:refs};
validateFragment(ledgerSpec,run,ids,workingLedger,{root});composeFragment(originalLedger,ledgerSpec,run,ids);composeFragment(indexLedger,ledgerSpec,run,ids);
const planBytes=JSON.stringify(planSpec,null,2)+'\n',ledgerBytes=JSON.stringify(ledgerSpec,null,2)+'\n';
const policy={version:1,run,authorized_by:'owner',authorization,additional_paths:[],shared_fragments:[{path:ledgerPath,authority:authorityLedger,sha256:sha256(ledgerBytes)}],plan_projection:{path:planPath,authority:authorityPlan,sha256:sha256(planBytes)}};
for(const [p,text] of inputs)need(read(p)===text,'input changed during preparation: '+p);
need(read(statePath)===stateText&&read(requestPath)===requestText,'paused boundary changed');
need(textGit(root,['rev-parse','HEAD'])===head&&textGit(root,['rev-parse',':'+planPath])===indexPlanOid&&textGit(root,['rev-parse',':'+ledgerPath])===indexLedgerOid,'Git bases changed during preparation');
fs.writeFileSync(authorityPlan,planBytes,{flag:'wx'});fs.writeFileSync(authorityLedger,ledgerBytes,{flag:'wx'});fs.writeFileSync(policyPath,JSON.stringify(policy,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(auditPath,JSON.stringify({version:1,run,at:new Date().toISOString(),actual_stage:state.stage,owner_gate_request:request.id,original_head:head,selected_pages:202,selected_items:scope.items.length,published_claims:claims.length,repair_marker_blocks:records.length,plan_authority_sha256:sha256(planBytes),ledger_authority_sha256:sha256(ledgerBytes),source_writes:0,git_mutations:0,coverage_granted:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({policy:policyPath,selected_pages:202,selected_items:scope.items.length,published_claims:claims.length,repair_marker_blocks:records.length,source_writes:0,git_mutations:0}));
