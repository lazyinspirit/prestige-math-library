// Explicit initial published-successor history. No native mathematical coverage.
import { sol61Effort } from './math-workflow-effort.mjs';
import {readFileSync,writeFileSync,existsSync,mkdirSync,readdirSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {validateFrontier,readLibraryItems,discoverDownstream} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {recordedPublishedRepair} from './published-repair-policy.mjs';
import {MODELS} from './models.mjs';
import {hasCommittedPriorPublication} from './published-repair-adoption.mjs';
import {yaml,split} from './pathway-lib.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
// SCHEMA makes justified_by optional: absent and [] are the same empty edge set.
const emptyJustification=x=>x===undefined||(Array.isArray(x)&&x.length===0);
const sameMirror=(field,a,b)=>field==='justified_by'&&emptyJustification(a)&&emptyJustification(b)||same(a,b);
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const need=(v,m)=>{if(!v)throw Error('Step 5 initial published maintenance: '+m);};
const drained=s=>Object.values(s.dispatches??{}).every(v=>!v.startedAt||Boolean(v.endedAt));
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const authenticated=new WeakMap();
const publicSections=text=>[...split(text).body.matchAll(/^## (?:Statement|Definition|Example|Statement refuted|Open problem|Status)\r?\n([\s\S]*?)(?=^## |(?![\s\S]))/gm)].map(m=>m[0]);
export const initialPublishedMaintenancePath=(root,run)=>join(root,'research',`${run}-step5-v2`,'initial-1-owner-published-maintenance.json');
function beforeCollection(root,run){
 const dir=join(root,'research',`${run}-step5-v2`);
 need(!existsSync(join(dir,'initial-1-collected.json'))&&!existsSync(join(dir,'impact-initial-1.json'))
  &&!readdirSync(join(root,'research',`${run}-dispatch`)).some(n=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(n)),
  'initial collection or first impact already exists');
}
function carrier(text,id){
 const fm=yaml().parse(split(text).fm);
 need(fm&&fm.id===id&&typeof fm.kind==='string'&&fm.status==='published'&&fm.proved_here!==false
  &&typeof fm.title==='string'&&fm.title.trim()&&split(text).body.trim(),'not an exact published complete carrier');
 return fm;
}
function validate(root,run,row,{current=false,virtual=new Map()}={}){
 root=resolve(root);const dir=join(root,'research',`${run}-step5-v2`),dispatch=join(root,'research',`${run}-dispatch`);
 need(/^[a-zA-Z0-9_-]+$/.test(run)&&row.version===1&&row.kind==='owner-initial-published-maintenance'
  &&row.run===run&&row.phase==='initial'&&row.round===1&&row.authorized_by==='owner'&&row.owner_identity==='/root'
  &&row.historical_only===true&&row.current_review_granted===false&&row.native_execution_coverage_adopted===false
  &&date(row.recorded_at)&&typeof row.reason==='string'&&row.reason.trim().length>=80
  &&row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings),'invalid opt-in envelope');
 const evidence={};
 const bytes=file=>{
  need(typeof file==='string','missing evidence path');const p=resolve(root,file);
  need(p.startsWith(resolve(root,'research')+'/'),'evidence outside research');
  if(virtual.has(p))return virtual.get(p);
  need(existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
   &&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/'),'nonregular evidence: '+file);
  return readFileSync(p,'utf8');
 };
 for(const [file,expected]of Object.entries(row.bindings)){
  const p=resolve(root,file);need(!new RegExp(`^${run}-batch-\\d+\\.(?:pages|proof-contracts)\\.json$`).test(p.split('/').at(-1))
   &&p!==join(root,'research/published-consumer-supplier-ledger.md')&&p!==join(root,'research',`${run}-step3-published-claims.jsonl`),'bind archived shared metadata, not mutable canonical carriers');
  need(/^[a-f0-9]{64}$/.test(expected)&&hash(bytes(p))===expected,'stale binding: '+file);evidence[p]=expected;
 }
 const boundText=file=>{const p=resolve(root,file);need(Object.hasOwn(evidence,p),'missing binding: '+file);return bytes(p);};
 const bound=file=>JSON.parse(boundText(file));
 const archive=join(dir,'initial-published-maintenance'),c=row.creation;
 need(c?.state_file===relative(root,join(archive,'creation-state.json'))
  &&c.native_request_file===relative(root,join(archive,'native-owner-request.json'))
  &&c.owner_request_file===relative(root,join(archive,'owner-request.json')),'wrong creation archive paths');
 const created=bound(c.state_file),nativeRequest=bound(c.native_request_file),ownerRequest=bound(c.owner_request_file);
 const {creation:ignored,bindings:ignoredBindings,...payload}=row,{bindings:requestedBindings,...requestedPayload}=ownerRequest;
 need(same(payload,requestedPayload)&&same(Object.entries(requestedBindings??{}).sort(),Object.entries(row.bindings)
  .filter(([p])=>!Object.values(c).includes(p)).sort())
  &&created.run===run&&created.stage==='5.1-adjudicate'&&created.paused===true&&drained(created)
  &&nativeRequest.version===1&&nativeRequest.run===run&&nativeRequest.group==='5.1-adjudicate'
  &&same(nativeRequest.stages,['5.1-adjudicate'])&&typeof nativeRequest.id==='string'&&nativeRequest.id===row.owner_gate_request_id
  &&date(nativeRequest.at)&&Date.parse(nativeRequest.at)<=Date.parse(row.recorded_at),
  'not the exact paused/drained 5.1 creation and native owner request');
 const frontier=bound(join(dir,'frontier.json'));validateFrontier(frontier);
 const pack=bound(join(dir,'initial-1.json')),baseline=bound(join(dir,'baseline.json')),verdicts=bound(join(dir,'step4-verdicts.json'));
 need(pack.run===run&&pack.phase==='initial'&&pack.round===1&&pack.repair_scope==='frontier'&&pack.adjudicationSchemaVersion===1
  &&frontier.run===run&&same(pack.frontier_ids,frontier.ids)&&Array.isArray(verdicts)
  &&pack.units.length===frontier.batches.length&&new Set(pack.units).size===pack.units.length
  &&frontier.batches.every(b=>pack.units.includes(b.id))&&row.original_count===frontier.ids.length,
  'wrong immutable initial inventory');
 const assigned=new Set(Object.values(pack.assignments).flat().map(x=>typeof x==='string'?x:x.id));
 const nativeReports=[];
 for(const unit of pack.units){
  const label=`step5-v2-initial-r1-u${unit}`,rp=join(dir,`${label}.json`),report=bound(rp),empty=report.completion==='mechanical-zero-work';nativeReports.push(report);
  const dispatchLabel=empty?`step5-v2-empty-initial-r1-u${unit}`:label,role=empty?'tool':'alpha-adjudicate';
  const dp=join(dispatch,`${role}-${dispatchLabel}.result.json`),result=bound(dp);
  need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit&&report.input_sha256===hash(pack)
   &&result.run===run&&result.role===role&&result.label===dispatchLabel&&result.ok===true&&same(result.covers,[unit]),'wrong original handoff: '+unit);
  const observed=created.dispatches?.[`5.1-adjudicate:${dispatchLabel}`];
  need(observed?.lastExitOk===true&&observed.role===role&&same(observed.covers,[unit])&&date(observed.endedAt)
   &&Date.parse(observed.endedAt)<=Date.parse(nativeRequest.at),'creation lacks completed original unit: '+unit);
  if(empty){
   need(result.written_by==='autopilot'&&report.mathematical_review===false&&pack.assignments[unit]?.length===0
    &&['reviews','decisions','created_items','downstream','ledger_updates'].every(k=>same(report[k],[])),'invalid mechanical zero-work origin');continue;
  }
  need(result.runner==='codex'&&result.model===MODELS.sol61.id&&result.provider_effort===sol61Effort(root,result.run)
   &&Number.isSafeInteger(result.attempt)&&result.attempt>0&&result.attempt===observed.attempt
   &&result.evidence_tag===`.attempt-${result.attempt}`&&date(result.started_at)&&date(result.ended_at)
   &&Date.parse(result.started_at)<=Date.parse(result.ended_at)&&Date.parse(result.ended_at)<=Date.parse(observed.endedAt)
   &&result.process_exit_code===0&&result.exit_code===0&&result.timed_out===false
   &&result.terminal_summary?.task_completed===true&&result.terminal_summary.task_aborted===false
   &&result.terminal_summary.final_response_present===true&&result.terminal_summary.error_events===0,'not a genuine completed original Sol high unit');
  const stem=join(dispatch,`${role}-${label}.attempt-${result.attempt}`);
  need(boundText(dp)===boundText(`${stem}.result.json`)&&resolve(root,result.prompt??'')===`${stem}.prompt.md`
   &&resolve(root,result.log??'')===`${stem}.log`,'stable/immutable attempt identity differs');
  const prompt=boundText(`${stem}.prompt.md`),log=boundText(`${stem}.log`),end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);
  need(prompt.includes(`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: ${unit}\noutput: ${relative(root,rp)}\n`)
   &&prompt.includes(`input_sha256:"${hash(pack)}"`)&&start>=0&&end>start,'original prompt/final-output identity missing');
  const output=JSON.parse(log.slice(start+7,end).trim());
  need(output.run===run&&output.phase==='initial'&&output.round===1&&String(output.unit)===unit&&output.input_sha256===hash(pack),'wrong original final structured message');
 }
 need(Array.isArray(row.manifests)&&row.manifests.length===frontier.batches.length,'missing complete current manifest snapshots');
 const currentManifests=new Map();
 for(const m of row.manifests){
  need(new RegExp(`^research/${run}-batch-\\d+\\.pages\\.json$`).test(m.path)&&!currentManifests.has(m.path),'duplicate/noncanonical manifest snapshot');
  const raw=boundText(m.archive);need(hash(raw)===m.sha256,'manifest snapshot hash mismatch');
  if(current)need(readFileSync(resolve(root,m.path),'utf8')===raw,'live manifest differs from creation snapshot');
  currentManifests.set(m.path,JSON.parse(raw));
 }
 for(const batch of frontier.batches){
  const pages=currentManifests.get(`research/${run}-batch-${batch.id}.pages.json`);
  need(Array.isArray(pages)&&same(pages.flatMap(p=>(p.items??[]).map(i=>i.id)).sort(),[...batch.items].sort()),'current frontier ownership/inventory changed');
 }
 const claimsPath=`research/${run}-step3-published-claims.jsonl`,claimsBytes=boundText(row.claims_snapshot_file);
 const ledgerBytes=boundText(row.ledger_snapshot_file);
 if(current)need(readFileSync(resolve(root,claimsPath),'utf8')===claimsBytes
  &&readFileSync(join(root,'research/published-consumer-supplier-ledger.md'),'utf8')===ledgerBytes,'claim/ledger snapshot not captured from current creation boundary');
 const archivedClaims=claimsBytes.split(/\r?\n/).filter(Boolean).map(JSON.parse);
 const liveClaims=readFileSync(resolve(root,claimsPath),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
 need(Array.isArray(row.entries)&&row.entries.length>0&&row.entries.length<=Object.keys(pack.before).length,'empty/invalid published successors');
 const ids=new Set(),guards={},beforeSources=new Map(),afterSources=new Map(),consumerRows=new Map(),rootRepairs=new Map(),firstConsumers=[];
 for(const entry of row.entries){
  const id=entry.id;need(/^[a-z][a-z0-9-]*$/.test(id??'')&&!ids.has(id)&&pack.before[id]&&!assigned.has(id),'duplicate, new or natively assigned published item');ids.add(id);
  const before=boundText(entry.before_file),after=boundText(entry.current_file),old=carrier(before,id),now=carrier(after,id);
  need(['audited','verified','judge','sources_checked'].every(key=>now.verification?.[key]===undefined||same(now.verification[key],old.verification?.[key])),'published successor fabricates a new audit/judge/source-review stamp');
  need(old.kind===now.kind&&old.proved_here===now.proved_here&&itemHashGuard(before)===pack.before[id]
   &&baseline[id]===pack.before[id]&&statementHash(before)===pack.before_statements?.[id]
   &&itemHashGuard(after)!==pack.before[id],'wrong original before/baseline/interface or no mathematical successor');
  const first=entry.origin_kind==='first-recorded-consumer-repair';
  need(entry.origin_kind===undefined||['recorded-successor','first-recorded-consumer-repair'].includes(entry.origin_kind),'unknown published history kind');
  need(typeof now.verification?.repair==='string'&&entry.current_receipt?.path===now.verification.repair
   &&entry.current_receipt.sha256===hash(boundText(entry.current_receipt.path))
   &&recordedPublishedRepair(root,id,after,entry.current_receipt.path).ok,'current successor lacks a policy-valid recorded repair');
  const successor=bound(entry.current_receipt.path);
  const claimsForItem=archivedClaims.filter(c=>c.id===id),liveForItem=liveClaims.filter(c=>c.id===id);
  need(claimsForItem.length===1&&liveForItem.length===1&&same(claimsForItem[0],entry.original_claim)
   &&same(liveForItem[0],entry.original_claim)&&entry.original_claim.group===successor.group
   &&entry.original_claim.pre_sha256===successor.pre_sha256,'original published claim changed');
  let ledgerReceipts=[successor];
  if(first){
   const publication=entry.prior_publication,audit=old.verification?.audited;
   need(old.kind==='example'&&publicSections(before).length>0&&!old.verification?.repair&&!Object.hasOwn(entry,'prior_receipt')
    &&typeof audit==='string'&&date(audit)&&Date.parse(audit)<=Date.parse(entry.original_claim.claimed_at)
    &&same(publicSections(before),publicSections(after))&&old.title===now.title
    &&publication?.path===`items/${id}.md`&&publication.before_raw_sha256===hash(before)
    &&hasCommittedPriorPublication(root,id,before,publication.commit,entry.original_claim.claimed_at)
    &&successor.run===run&&successor.pre_sha256===pack.before[id]&&successor.before_file===entry.before_file
    &&successor.before_raw_sha256===hash(before)&&successor.prior_publication_commit===publication.commit
    &&same(successor.previous_publication,publication)&&successor.previous_repair===undefined,
    'first repair requires original audited Git publication, exact fresh claim and unchanged example interface');
   firstConsumers.push(entry);
  }else{
   need(typeof old.verification?.repair==='string'&&entry.prior_receipt?.path===old.verification.repair
    &&entry.prior_receipt.sha256===hash(boundText(entry.prior_receipt.path))
    &&recordedPublishedRepair(root,id,before,entry.prior_receipt.path).ok,'original carrier lacks its valid immutable prior recorded repair');
   const prior=bound(entry.prior_receipt.path);
   need(entry.current_receipt.path!==entry.prior_receipt.path&&successor.run===run&&prior.run===run
    &&successor.group===prior.group&&successor.pre_sha256===prior.pre_sha256
    &&same(successor.previous_repair,entry.prior_receipt)&&successor.ledger_marker!==prior.ledger_marker
    &&date(successor.recorded_at)&&Date.parse(successor.recorded_at)>=Date.parse(prior.recorded_at),
    'current repair does not retain exact previous receipt/claim/ledger lineage');
   ledgerReceipts.push(prior);
  }
  need(date(successor.recorded_at)&&Date.parse(successor.recorded_at)<=Date.parse(row.recorded_at),'repair recording after owner history');
  for(const receipt of ledgerReceipts){
   const start=`<!-- local-published-repair:${receipt.ledger_marker}:begin -->`,end=`<!-- local-published-repair:${receipt.ledger_marker}:end -->`;
   need(ledgerBytes.split(start).length===2&&ledgerBytes.split(end).length===2
    &&hash(ledgerBytes.split(start)[1].split(end)[0])===receipt.ledger_sha256,'ledger snapshot lacks exact immutable publication markers');
  }
  const repair=bound(entry.root_repair_file),consumers=bound(entry.consumer_dispositions_file);
  need(same(successor.owner_maintenance,{root_repair:{path:entry.root_repair_file,sha256:hash(boundText(entry.root_repair_file))},
   consumer_dispositions:{path:entry.consumer_dispositions_file,sha256:hash(boundText(entry.consumer_dispositions_file))}}),
   'current receipt does not bind actual root repair and consumer evidence');
  need(repair.version===1&&repair.run===run&&repair.id===id&&repair.authorized_by==='owner'&&repair.reviewed_by==='root'
   &&repair.confirmed_defect===true&&repair.native_execution_coverage_adopted===false&&date(repair.reviewed_at)
   &&Date.parse(repair.reviewed_at)<=Date.parse(successor.recorded_at)
   &&Object.values(successor.local_checks).every(check=>Date.parse(check.checked_at)>=Date.parse(repair.reviewed_at))&&repair.before_raw_sha256===hash(before)
   &&repair.current_raw_sha256===hash(after)&&typeof repair.reason==='string'&&repair.reason.trim().length>=80
   &&consumers.version===1&&consumers.run===run&&consumers.supplier===id&&consumers.reviewer===repair.repairer
   &&typeof repair.repairer==='string'&&/^\/root\/\S+$/.test(repair.repairer)&&consumers.full_affected_scope_checked===true
   &&consumers.native_execution_coverage_adopted===false&&Array.isArray(consumers.items)
   &&consumers.items.every(c=>typeof c.id==='string'&&['sound','repair-proposed','repaired'].includes(c.disposition)
    &&typeof c.affected_use==='string'&&c.affected_use.trim().length>=40&&typeof c.reason==='string'&&c.reason.trim().length>=40),
   'missing actual same-owner root repair/current consumer dispositions');
  // Both endpoints and root attribution remain immutable even if the native
  // owner later repairs a consumer. Only initial collection requires live bytes.
  if(current){const live=readFileSync(join(root,'items',`${id}.md`),'utf8');need(live===after&&itemHashGuard(live)===itemHashGuard(after)
   &&carrier(live,id).verification?.repair===entry.current_receipt.path,'current published successor changed');}
  guards[id]=itemHashGuard(after);beforeSources.set(id,old);afterSources.set(id,now);consumerRows.set(id,consumers.items);rootRepairs.set(id,repair);
 }
 for(const entry of firstConsumers){
  const relation=entry.consumer_of,supplier=row.entries.find(e=>e.id===relation?.supplier),before=boundText(entry.before_file),after=boundText(entry.current_file);
  const old=beforeSources.get(entry.id),now=afterSources.get(entry.id);
  const originalVerdicts=verdicts.filter(v=>v.id===relation?.supplier&&v.model===MODELS.luna.id&&v.keep===false);
  need(supplier&&supplier.origin_kind!=='first-recorded-consumer-repair'&&frontier.ids.includes(supplier.id)
   &&originalVerdicts.length===1&&same(relation.original_rejection,originalVerdicts[0])
   &&old.deps?.includes(supplier.id)&&now.deps?.includes(supplier.id)
   &&rootRepairs.get(entry.id).repairer===rootRepairs.get(supplier.id).repairer
   &&consumerRows.get(supplier.id).some(c=>c.id===entry.id&&['repair-proposed','repaired'].includes(c.disposition))
   &&typeof relation.affected_use==='string'&&relation.affected_use.length>=40&&before.includes(relation.affected_use)
   &&typeof relation.current_use==='string'&&relation.current_use.length>=40&&after.includes(relation.current_use)
   &&typeof relation.reason==='string'&&relation.reason.trim().length>=80,
   'first repair is not an unchanged-interface same-owner necessary consumer of an original selected published rejection');
 }
 if(current){
  const graph=readLibraryItems(root,{run}),oldGraph=graph.map(node=>{
   const old=beforeSources.get(node.id);if(!old)return node;
   const before=boundText(row.entries.find(entry=>entry.id===node.id).before_file),deps=[...new Set([...(old.deps??[]),...(old.justified_by??[])])];
   const links=[...split(before).body.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(match=>match[1]);
   return {...node,deps,aliases:old.aliases??[],references:[...new Set(links)].filter(id=>!deps.includes(id))};
  });
  for(const entry of row.entries)if(statementHash(boundText(entry.before_file))!==statementHash(boundText(entry.current_file))){
   const required=new Set([...discoverDownstream({items:graph,repairedIds:[entry.id]}),...discoverDownstream({items:oldGraph,repairedIds:[entry.id]})].map(row=>row.id));
   const dispositions=consumerRows.get(entry.id),seen=new Set(dispositions.map(row=>row.id));
   need(seen.size===dispositions.length&&[...required].every(id=>seen.has(id)),'root dispositions omit an old/current direct consumer');
  }
 }
 for(const pages of currentManifests.values())for(const page of pages)for(const item of page.items??[])if(ids.has(item.id)){
  const source=afterSources.get(item.id);
  for(const field of ['kind','title','deps','justified_by','dependency_level'])
   if(Object.hasOwn(item,field)||Object.hasOwn(source,field))need(sameMirror(field,item[field],source[field]),'current published manifest row is not a complete source mirror');
 }
 // Mirror only source-backed metadata changes for these exact published IDs.
 need(Array.isArray(row.metadata_carriers),'missing explicit metadata-carrier array');
 const metadata=new Map();
 for(const c of row.metadata_carriers){
  need(currentManifests.has(c.path)&&!metadata.has(c.path),'duplicate/nonmanifest metadata mirror');
  const before=bound(c.before_file),after=bound(c.current_file),copy=structuredClone(before);let count=0;
  need(same(after,currentManifests.get(c.path)),'current manifest is not its exact archived mirror');
  need(same(before.map(p=>[p.id,p.items.map(i=>i.id)]),after.map(p=>[p.id,p.items.map(i=>i.id)])),'metadata inventory/page identity changed');
  for(let p=0;p<copy.length;p++)for(let i=0;i<copy[p].items.length;i++){
   const old=copy[p].items[i],next=after[p].items[i];
   for(const field of ['title','deps','justified_by','dependency_level'])if(!same(old[field],next[field])){
    need(ids.has(old.id)&&sameMirror(field,old[field],beforeSources.get(old.id)[field])&&sameMirror(field,next[field],afterSources.get(old.id)[field]),'metadata change is not an exact old/current published-source mirror');
    old[field]=next[field];count++;
   }
  }
  need(count>0&&same(copy,after),'unsupported metadata change');metadata.set(c.path,c);
 }
 // Every published mathematical successor participates in the current snapshot;
 // all original native reports remain untouched, not replacement reviews.
 const result={ids,guards,evidence,entries:row.entries,metadata,pack_sha256:hash(pack)};
 authenticated.set(result,{pack_sha256:hash(pack),ids:[...ids].sort(),guards:{...guards}});return result;
}
export function isInitialPublishedMaintenance(value,pack,current){
 const basis=value&&authenticated.get(value);
 return Boolean(basis&&basis.pack_sha256===hash(pack)&&value.pack_sha256===basis.pack_sha256
  &&same([...value.ids].sort(),basis.ids)&&same(value.guards,basis.guards)&&pack.phase==='initial'&&pack.round===1
  &&basis.ids.every(id=>current[id]===basis.guards[id]));
}
export function loadInitialPublishedMaintenance(root,run,{current=false}={}){
 const path=initialPublishedMaintenancePath(root,run);if(!existsSync(path))return null;
 if(current){beforeCollection(root,run);const state=read(join(root,'.autopilot',run,'state.json'));
  need(state.run===run&&state.stage==='5.1-adjudicate'&&drained(state),'current collection requires drained initial stage');}
 const loaded=validate(root,run,read(path),{current});loaded.evidence[path]=hash(readFileSync(path,'utf8'));loaded.path=path;return loaded;
}
export function initialPublishedSupportingHistory(history,path,expected){
 if(!history?.root||!history?.run)return null;
 const loaded=loadInitialPublishedMaintenance(history.root,history.run);if(!loaded)return null;
 const relativePath=relative(history.root,path),carrier=loaded.metadata.get(relativePath);
 return carrier&&hash(readFileSync(resolve(history.root,carrier.before_file),'utf8'))===expected
  ?{archive:resolve(history.root,carrier.before_file),marker:loaded.path}:null;
}
export function recordInitialPublishedMaintenance(root,run,requestFile){
 root=resolve(root);const target=initialPublishedMaintenancePath(root,run),statePath=join(root,'.autopilot',run,'state.json');
 const nativePath=join(root,'.autopilot',run,'owner-gate-request.json'),stateBytes=readFileSync(statePath,'utf8'),nativeBytes=readFileSync(nativePath,'utf8');
 const state=JSON.parse(stateBytes);need(!existsSync(target)&&state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&drained(state),'recording requires fresh paused/drained initial hold');beforeCollection(root,run);
 const requestPath=resolve(root,requestFile);need(requestPath.startsWith(resolve(root,'research')+'/')&&lstatSync(requestPath).isFile()&&!lstatSync(requestPath).isSymbolicLink(),'owner request must be regular research');
 const requestBytes=readFileSync(requestPath,'utf8'),request=JSON.parse(requestBytes);need(!Object.hasOwn(request,'creation')&&date(request.recorded_at)&&Date.parse(request.recorded_at)<=Date.now(),'owner cannot supply creation state or future date');
 const dir=join(root,'research',`${run}-step5-v2`,'initial-published-maintenance');
 const creation={state_file:relative(root,join(dir,'creation-state.json')),native_request_file:relative(root,join(dir,'native-owner-request.json')),owner_request_file:relative(root,join(dir,'owner-request.json'))};
 const virtual=new Map([[resolve(root,creation.state_file),stateBytes],[resolve(root,creation.native_request_file),nativeBytes],[resolve(root,creation.owner_request_file),requestBytes]]);
 const row={...request,creation,bindings:{...request.bindings,...Object.fromEntries([...virtual].map(([p,text])=>[relative(root,p),hash(text)]))}};
 validate(root,run,row,{current:true,virtual});
 for(const [file,expected]of Object.entries(row.bindings)){const path=resolve(root,file);need(hash(virtual.has(path)?virtual.get(path):readFileSync(path,'utf8'))===expected,'bound input changed during recording');}
 for(const entry of row.entries)need(readFileSync(join(root,'items',`${entry.id}.md`),'utf8')===readFileSync(resolve(root,entry.current_file),'utf8'),'published source changed during recording');
 for(const manifest of row.manifests)need(readFileSync(resolve(root,manifest.path),'utf8')===readFileSync(resolve(root,manifest.archive),'utf8'),'manifest changed during recording');
 need(readFileSync(join(root,'research',`${run}-step3-published-claims.jsonl`),'utf8')===readFileSync(resolve(root,row.claims_snapshot_file),'utf8')
  &&readFileSync(join(root,'research/published-consumer-supplier-ledger.md'),'utf8')===readFileSync(resolve(root,row.ledger_snapshot_file),'utf8'),'claim/ledger changed during recording');
 need(readFileSync(statePath,'utf8')===stateBytes&&readFileSync(nativePath,'utf8')===nativeBytes&&!existsSync(target),'creation boundary changed');
 mkdirSync(dir,{recursive:true});for(const [p,text]of virtual){if(existsSync(p))need(readFileSync(p,'utf8')===text,'immutable creation archive conflict');else writeFileSync(p,text,{flag:'wx'});}
 writeFileSync(target,JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:target,ids:row.entries.map(e=>e.id),native_execution_coverage_adopted:false,current_review_granted:false};
}
