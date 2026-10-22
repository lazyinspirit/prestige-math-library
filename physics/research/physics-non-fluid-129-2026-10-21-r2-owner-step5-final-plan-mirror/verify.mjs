// Verification only. Read production, write only this research evidence directory.
import{readFileSync,writeFileSync,mkdirSync,readdirSync,copyFileSync,symlinkSync,existsSync}from'node:fs';
import{join,dirname,resolve,relative}from'node:path';
import{fileURLToPath}from'node:url';
import{createHash}from'node:crypto';
import{isDeepStrictEqual as equal}from'node:util';
import{spawnSync}from'node:child_process';
import{yaml,split}from'../../../tools/physics-support/pathway-lib.mjs';
import{itemHashGuard}from'../../../tools/physics-support/item-hash.mjs';
import{recordedPublishedRepair}from'../../../tools/physics-support/published-repair-policy.mjs';

const out=dirname(fileURLToPath(import.meta.url)),root=resolve(out,'../..'),run='physics-non-fluid-129-2026-10-21-r2';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const raw=path=>readFileSync(join(root,path));
const read=path=>JSON.parse(raw(path));
const save=(path,value)=>{mkdirSync(dirname(join(out,path)),{recursive:true});writeFileSync(join(out,path),JSON.stringify(value,null,2)+'\n');};
const need=(ok,message)=>{if(!ok)throw Error(message);};
const inputs={};
const bind=path=>{inputs[path]=hash(raw(path));return read(path);};
const planPath='research/plan-spec.json',plan=bind(planPath),byId=new Map(plan.pages.map((p,index)=>[p.id,{page:p,index}]));
const gateReportPath='research/'+run+'-step5-v2/step5-v2-gate-r1-u1.json',gateReport=bind(gateReportPath),notes=gateReport.repair_notes;
const gatePackPath='research/'+run+'-step5-v2/gate-1.json',gatePack=bind(gatePackPath),gateDiagnosticPath='research/'+run+'-step5-v2/step5-v2-gate-r1-u1.gate-diagnostics.json',gateDiagnostic=bind(gateDiagnosticPath);
need(gateReport.run===run&&gateReport.phase==='gate'&&gateReport.round===1&&gateReport.unit==='1'&&gateReport.input_sha256===hash(JSON.stringify(gatePack)),'wrong actual native metadata report');
need(equal(gatePack.assignments['1'],[])&&equal(gateDiagnostic,gatePack.gateAssignments['1'])&&gateDiagnostic.length===1&&gateDiagnostic[0].check==='splice-verify','wrong actual owner-held diagnostic');
for(const[path,expected]of Object.entries(gateReport.supporting_evidence))need(hash(raw(path))===expected,'actual native report support changed');
const gateDispatchPath='research/'+run+'-dispatch/alpha-repair-step5-v2-gate-r1-u1.result.json',gateDispatch=bind(gateDispatchPath);
need(gateDispatch.ok===true&&gateDispatch.run===run&&gateDispatch.role==='alpha-repair'&&gateDispatch.model==='gpt-6.1-sol'&&gateDispatch.provider_effort==='high'&&gateDispatch.label==='step5-v2-gate-r1-u1','wrong real native metadata worker identity');
const immutableDispatchPath=relative(root,gateDispatch.log).replace(/\.log$/,'.result.json');
need(equal(bind(immutableDispatchPath),gateDispatch),'stable and actual immutable dispatch differ');
need(inputs[planPath]===notes.plan.after_sha256,'current plan differs from actual native metadata result');
need(notes.pages_changed===63&&notes.item_objects_changed===82&&notes.metadata_repair_only===true&&notes.public_interface_changes.length===0,'wrong metadata-only delta count');
const changePages=new Map(notes.changes.map(row=>[row.page,row]));
const originalFailure=gateDiagnostic[0].failure;
need(originalFailure.ok===false&&originalFailure.output.includes('63 page(s)'),'missing genuine original read-only failure');
const originalPages=originalFailure.output.split('\n').filter(line=>line.startsWith('  ')).map(line=>{const m=/^  (\S+) \(([^)]+\.pages\.json)\): same ids, (\d+) item object\(s\) changed /.exec(line);need(m,'unknown original drift shape');return{page:m[1],manifest:'research/'+m[2],count:Number(m[3])};});
need(originalPages.length===63&&originalPages.every(row=>changePages.get(row.page)?.manifest===row.manifest&&changePages.get(row.page)?.items.length===row.count),'native repaired page/count selection differs from actual failed gate');
save('original-native-splice-failure.json',originalFailure);
const inventoryIds=plan.pages.flatMap(page=>page.items??[]).map(item=>typeof item==='string'?item:item.id);
need(new Set(inventoryIds).size===inventoryIds.length,'current plan duplicate item identity');
let unchangedNativeSources=0;
for(const id of gatePack.frontier_ids){const text=raw('items/'+id+'.md').toString('utf8');need(itemHashGuard(text)===gatePack.before[id],'substantive source changed since native gate assignment: '+id);unchangedNativeSources++;}

need(changePages.size===63&&Object.keys(notes.manifest_inputs).length===50,'wrong original current manifest selection');
for(const[path,expected]of Object.entries(notes.manifest_inputs))need(hash(raw(path))===expected,'owning manifest changed after actual native repair: '+path);
const logPath=relative(root,gateDispatch.log),log=raw(logPath).toString('utf8');inputs[logPath]=hash(raw(logPath));
const marker='@@ -0,0 +1,106 @@\n',start=log.indexOf(marker);need(start>=0,'actual mechanical script patch absent from genuine native attempt');
const lines=log.slice(start+marker.length).split('\n'),code=[];for(const line of lines){if(!line.startsWith('+'))break;code.push(line.slice(1));}
need(code.length===106,'complete actual mechanical script patch missing');
writeFileSync(join(out,'actual-native-mechanical-script.mjs'),code.join('\n')+'\n');
need(log.includes('scoped-metadata-update.mjs')&&log.includes('step5-shared-write-lock.mjs run --owner step5-v2-gate-r1-u1')&&log.includes(notes.plan.before_sha256)&&log.includes(notes.plan.after_sha256),'actual guarded lock execution evidence missing');
need(byId.size===plan.pages.length,'ambiguous plan page identity');
const certPath='research/'+run+'-step5-v2/certification.json',cert=bind(certPath),{sha256,...certPayload}=cert;
need(sha256===hash(JSON.stringify(certPayload)),'native certificate payload mismatch');
const thresholdPath='research/'+run+'-step5-v2/threshold-2.json',threshold=bind(thresholdPath);
need(threshold.fatalCount===0&&threshold.belowThreshold===true&&threshold.errors.length===0,'native threshold not clean');
const initialPath='research/'+run+'-step5-v2/initial-1-collected.json',initial=bind(initialPath);
const frontierPath='research/'+run+'-step5-v2/frontier.json',frontier=bind(frontierPath),owner=new Map(frontier.batches.flatMap(b=>b.items.map(id=>[id,b.id])));
const certRows=new Map(cert.items.map(row=>[row.id,row])),reports=[];
for(const[path,expected]of Object.entries(cert.evidence))if(path.includes('/'+run+'-step5-v2/')&&/^step5-v2-.*-r[0-9]+-u[^.]+\.json$/.test(path.split('/').at(-1))){
 const bytes=readFileSync(path);need(hash(bytes)===expected,'immutable native report changed: '+path);
 const data=JSON.parse(bytes);if(Array.isArray(data.reviews))reports.push({path:relative(root,path),sha256:expected,data});
}
const inventory=[],pageRows=[],fieldCounts={},basis={},sourceChecks=[];
const files=readdirSync(join(root,'research')).filter(n=>new RegExp('^'+run+'-batch-[1-9][0-9]*\\.pages\\.json$').test(n)).sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]));
need(files.length===129,'manifest selection differs from actual129batchfrontier');
const pageOwners=new Set();
for(const file of files){
 const path='research/'+file,manifest=bind(path),batch=file.match(/-batch-(\d+)/)[1];
 for(const[pageIndex,page]of manifest.entries()){
  need(!pageOwners.has(page.id),'duplicate owning manifest page: '+page.id);pageOwners.add(page.id);
  const target=byId.get(page.id);need(target,'manifest page absent from plan: '+page.id);
  need(equal(page.requires??[],target.page.requires??[]),'requires disagreement outside permitted item-mirror scope: '+page.id);
  const ids=page.items.map(item=>typeof item==='string'?item:item.id),oldIds=target.page.items.map(item=>typeof item==='string'?item:item.id);
  need(equal(ids,oldIds),'item identity/order changed: '+page.id);
  need(equal(page.items,target.page.items),'current plan/manifest item objects differ: '+page.id);
  const originalChange=changePages.get(page.id);if(!originalChange)continue;
  need(originalChange.manifest===path,'native report owning manifest mismatch');
  let count=0;
  for(const nativeChange of originalChange.items){
   const itemIndex=page.items.findIndex(row=>row.id===nativeChange.id),item=page.items[itemIndex];need(itemIndex>=0,'native repaired item absent from current inventory');
   const id=item.id;need(owner.get(id)===batch,'wrong frozen owning batch: '+id);
   const fields=nativeChange.fields;
   need(fields.every(key=>['physical_scope','statement','deps','dependency_roles','title','sources','strategy'].includes(key)),'unreviewed drift field: '+id);
   const sourcePath='items/'+id+'.md',bytes=raw(sourcePath),text=bytes.toString('utf8');inputs[sourcePath]=hash(bytes);
   const{fm,body}=split(text),meta=yaml().parse(fm);need(meta.id===id,'source identity mismatch');
   const sections=[...body.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
   for(const field of fields){
    fieldCounts[field]=(fieldCounts[field]??0)+1;
    let actual,comparison='exact-source';
    if(field==='statement')actual=sections.find(m=>['Statement','Definition','Example','Statement refuted','Open problem','Postulate','Remark','Remarks'].includes(m[1]))?.[2]?.trim();
    else if(field==='strategy'){actual=sections.find(m=>['Proof','Verification','Refutation','Counterexample'].includes(m[1]))?.[2]?.trim();comparison='exact-proof-section-text (manifest strategy carrier)';}
    else actual=meta[field];
    if(field==='deps'){need(equal([...item[field]].sort(),[...(actual??[])].sort()),'manifest/source dependency set mismatch: '+id);comparison='same-source-dependency-set (manifest order retained)';}
    else need(equal(['statement','strategy'].includes(field)?item[field].trim():item[field],actual),'manifest/source '+field+' mismatch: '+id);
    sourceChecks.push({id,field,comparison,ok:true});
   }
   const current=itemHashGuard(text),row=certRows.get(id);
   if(row){
    need(row.guard_sha256===current,'native certificate source guard mismatch: '+id);
    const native=reports.filter(r=>r.data.reviews.some(review=>review.id===id&&review.post_sha256===current));
    need(native.length>0,'missing actual current native review in certificate evidence: '+id);
    const latest=native.at(-1),review=latest.data.reviews.find(r=>r.id===id&&r.post_sha256===current);
    const label='step5-v2-'+latest.data.phase+'-r'+latest.data.round+'-u'+latest.data.unit;
    const role=['initial','repeat'].includes(latest.data.phase)?'alpha-adjudicate':'alpha-repair';
    const dispatchPath='research/'+run+'-dispatch/'+role+'-'+label+'.result.json',dispatch=bind(dispatchPath);
    need(dispatch.ok===true&&dispatch.run===run&&dispatch.role===role&&dispatch.label===label
      &&dispatch.model==='gpt-6.1-sol'&&dispatch.provider_effort==='high','wrong completed native review dispatch: '+id);
    inputs[latest.path]=latest.sha256;
    basis[id]={kind:'native-current-certified-source',certificate:certPath,certificate_phase:cert.phase,certificate_round:cert.round,
      source_content_sha256:current,review:{path:latest.path,sha256:latest.sha256,phase:latest.data.phase,round:latest.data.round,unit:latest.data.unit,disposition:review.disposition,review_context_sha256:review.review_context_sha256},dispatch:dispatchPath,
      limitation:'This records existing actual native review/certification; it grants no new scientific acceptance.'};
   }else{
    need(meta.status==='published','draft missing from current native certificate: '+id);
    const repairs=initial.published_local_repairs?.filter(row=>row.id===id)??[];need(repairs.length===1&&repairs[0].after_sha256===current,'missing authentic recorded published maintenance: '+id);
    const repair=repairs[0],receipt=bind(repair.receipt.path);need(inputs[repair.receipt.path]===repair.receipt.sha256,'published receipt changed');
    const policy=recordedPublishedRepair(root,id,text,meta.verification?.repair);need(policy.ok,policy.reason);
    basis[id]={kind:'recorded-local-published-repair',parent:initialPath,receipt:repair.receipt,source_content_sha256:current,
     limitation:'Published local repair exemption retained; no native item review/judgment or whole-item audit invented.'};
    for(const extra of [receipt.before_file,'research/'+run+'-step3-published-claims.jsonl','research/published-consumer-supplier-ledger.md'])inputs[extra]=hash(raw(extra));
   }
   inventory.push({batch,page:page.id,id,plan_json_pointer:'/pages/'+target.index+'/items/'+itemIndex,manifest_json_pointer:'/'+pageIndex+'/items/'+itemIndex,
     manifest:path,fields,changes:fields.map(field=>({field,current_manifest_and_plan_value:item[field],before_value:'Not present in preserved native report; no preimage invented.'}))});
   count++;
  }
  if(count)pageRows.push({batch,page:page.id,plan_page_index:target.index,changed_items:count,manifest:path});
 }
}
need(inventory.length===82&&pageRows.length===63,'actual initial drift changed: '+inventory.length+' items/'+pageRows.length+' pages; regenerate scoped diagnosis before proceeding');
// Read-only focused recheck through the unchanged actual native splice verifier.
const cli=resolve(root,'../tools/physics-support/splice-plan.mjs');
const result=spawnSync(process.execPath,[cli,'--run',run,'--verify'],{cwd:root,encoding:'utf8'});
const nativeVerify={command:['node','tools/physics-support/splice-plan.mjs','--run',run,'--verify'],exit_code:result.status,output:result.stdout+result.stderr};
need(nativeVerify.exit_code===0&&nativeVerify.output.includes('258 page(s) across 129 manifest(s)'),'current exact native splice verification failed');
for(const[path,expected]of Object.entries(inputs))need(hash(raw(path))===expected,'input mutated during preparation: '+path);
const verification={version:1,run,kind:'verification-of-actual-native-plan-item-mirror-repair',reviewer:'/root/published_maintenance_route',mode:'research-only verification, no plan writes',
 plan_path:planPath,before_plan_sha256:notes.plan.before_sha256,current_plan_sha256:inputs[planPath],
 current_frozen_frontier_sources_unchanged:unchangedNativeSources,counts:{total_plan_pages:plan.pages.length,scoped_manifest_pages:pageOwners.size,manifests:files.length,changed_pages:pageRows.length,changed_batches:Object.keys(notes.manifest_inputs).length,changed_items:inventory.length,changed_fields:sourceChecks.length,fields:fieldCounts},
 inputs,native_report:gateReportPath,native_dispatch:gateDispatchPath,native_pack:gatePackPath,native_verifier:nativeVerify,
 before_source_limit:'Native worker bound the original plan raw SHA256 and executed reviewed conservation assertions. No durable full before-plan bytes were found. No independent full before/after raw-byte diff is claimed and no preimage was reconstructed.',
 boundary:'Already repaired by actual native5.9u1 under shared lock. No duplicate proposal or application is needed. Root owns fresh recertification and complete native gates.',created_at:new Date().toISOString()};
save('verification.json',verification);save('diff-inventory.json',inventory);save('page-inventory.json',pageRows);save('native-basis.json',basis);save('source-mirror-checks.json',sourceChecks);save('native-check.json',nativeVerify);
console.log(JSON.stringify({counts:verification.counts,before:verification.before_plan_sha256,current:verification.current_plan_sha256,native_verify:nativeVerify.output.trim(),output:relative(root,out)},null,2));
