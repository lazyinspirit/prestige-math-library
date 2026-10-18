// Historical derived-cache transition after an actual native Step 5.8 battery.
// This never supplies a source review or a missing worker metadata preimage.
import {readFileSync,writeFileSync,existsSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {frontmatterList} from './frontmatter-list.mjs';
import {itemHashGuard} from './item-hash.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(v,m)=>{if(!v)throw Error('Step 5 gate aggregation history: '+m);};
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const drained=s=>Object.values(s.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt));
const dir=(root,run)=>join(root,'research',`${run}-step5-v2`);
const marker=(root,run)=>join(dir(root,run),'gate-1-owner-aggregation-history.json');
const cache=run=>`research/${run}-proof-contracts.json`;
function regular(root,path){
  const p=resolve(root,path),base=realpathSync(join(root,'research'))+'/';
  need(p.startsWith(resolve(root,'research')+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()&&realpathSync(p).startsWith(base),'nonregular/outside research archive');return p;
}
function aggregate(run,contracts){
  const scope=[],rows={};
  for(const text of contracts){const d=JSON.parse(text);need(d.version===1&&Array.isArray(d.scope)&&d.contracts&&typeof d.contracts==='object','invalid batch contract');
    need(Object.keys(d.contracts).every(id=>d.scope.includes(id)),'out-of-scope contract');
    for(const id of d.scope){need(!scope.includes(id),'duplicate aggregate ID');scope.push(id);if(d.contracts[id]!=null)rows[id]=d.contracts[id];}}
  return JSON.stringify({version:1,level:run,scope,contracts:rows},null,2)+'\n';
}
export function validateGateAggregationHistory(root,run,row,{current=false}={}){
  const {sha256,...body}=row;
  need(row.version===1&&row.kind==='owner-gate-aggregation-history'&&row.run===run&&row.root===resolve(root)&&sha256===hash(body)
    &&row.owner_identity==='/root'&&row.historical_only===true&&row.current_review_granted===false
    &&row.missing_preimage_claimed===false&&row.round===1&&typeof row.reason==='string'&&row.reason.trim().length>=80,'invalid historical envelope');
  const evidence={};
  const bound=path=>{const p=regular(root,path),bytes=readFileSync(p,'utf8');need(row.bindings?.[relative(root,p)]===hash(bytes),'changed/missing binding: '+path);evidence[p]=hash(bytes);return bytes;};
  for(const p of Object.keys(row.bindings??{}))bound(p);
  const capture=JSON.parse(bound(row.before_capture)),app=JSON.parse(bound(row.application));
  const state=JSON.parse(bound(row.creation_state)),request=JSON.parse(bound(row.creation_request));
  need(capture.run===run&&capture.stage==='5.9-repair'&&capture.paused===true&&app.run===run
    &&app.before_capture===row.before_capture&&app.performed_by==='/root'&&app.original_certificates_reports_and_native_state_preserved===true
    &&app.review_or_native_coverage_granted===false&&app.foreign_index_or_head_written===false,'unbound owner application');
  need(state.run===run&&state.stage==='5.9-repair'&&state.paused===true&&drained(state)
    &&request.run===run&&request.group==='5.8-gate'&&Array.isArray(request.stages)&&request.stages.includes('5.8-gate')
    &&Date.parse(request.at)<=Date.parse(app.applied_at)&&Date.parse(app.applied_at)<=Date.parse(app.completed_at)
    &&Date.parse(app.completed_at)<=Date.parse(row.recorded_at)&&Date.parse(row.recorded_at)<=Date.now(),'wrong boundary/chronology');
  const files=new Map(capture.files.map(f=>[f.path,f]));need(files.size===capture.files.length,'duplicate before file');
  const before=path=>{const f=files.get(path);need(f,'missing before archive: '+path);const bytes=bound(f.archive);need(hash(bytes)===f.sha256,'bad before bytes');return bytes;};
  const certPath=`research/${run}-step5-v2/certification.json`,certificate=JSON.parse(before(certPath)),{sha256:certHash,...certBody}=certificate;
  need(certificate.version===2&&certificate.run===run&&certificate.phase==='impact-repeat'&&certHash===hash(certBody)
    &&same(certificate.evidence,capture.prior_cert_evidence)&&before(certPath)===before(`research/${run}-step5-v2/certification-${certificate.phase}-${certificate.round}.json`),'prior certificate changed');
  const tool=JSON.parse(bound(row.certificate_tool));
  need(tool.role==='tool'&&tool.run===run&&tool.label===`step5-v2-certify-impact-repeat-r${certificate.round}-all`&&same(tool.covers,['all'])&&tool.ok===true&&tool.written_by==='autopilot'
    &&Date.parse(certificate.at)<=Date.parse(tool.ended_at),'missing genuine native certification tool result');
  need(readFileSync(resolve(root,`research/${run}-step5-v2/certification-${certificate.phase}-${certificate.round}.json`),'utf8')===before(certPath),'immutable native certificate differs from owner archive');
  const original=certificate.evidence[cache(run)];need(/^[a-f0-9]{64}$/.test(original??'')&&row.original_sha256===original,'missing exact prior cache pin');
  const prep=JSON.parse(bound(row.battery_preparation));
  need(prep.run===run&&prep.native_execution_coverage===false&&prep.mathematical_review_claimed===false
    &&prep.guards?.some(g=>g.path===cache(run)&&g.raw_sha256===original),'missing actual pre-battery old cache guard');
  const events=JSON.parse(bound(capture.native_gate_events)),liveEvents=readFileSync(join(root,'.autopilot',run,'events.jsonl'),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
  const actualEventHashes=new Set(liveEvents.map(hash));
  need(events.length>=22&&events.every(e=>actualEventHashes.has(hash(e))),'events are not actual native battery history');
  const merges=events.filter(e=>e.id==='merge-contracts');need(merges.length===1,'ambiguous native merge');const merge=merges[0];
  need(merge.type==='gate-advisory'&&merge.code===0&&merge.ok===true&&merge.why==='exit 0'
    &&merge.output===`merge-proof-contracts: wrote ${cache(run)} with ${JSON.parse(before(cache(run))).scope.length} scoped item(s) from 81 batch contract(s)\n`
    &&Date.parse(certificate.at)<=Date.parse(prep.at)&&Date.parse(tool.ended_at)<=Date.parse(prep.at)&&Date.parse(prep.at)<=Date.parse(merge.at)
    &&Date.parse(merge.at)<=Date.parse(capture.captured_at)&&Date.parse(capture.captured_at)<=Date.parse(app.applied_at)
    &&events.some(e=>e.type==='gates'&&e.stage==='5.8-gate'||e.type==='gates'&&String(e.message??'').includes('5.8'))
    &&events.some(e=>e.type==='stage-route'&&JSON.stringify(e).includes('5.9')),'missing successful native merge chain');
  const frontier=JSON.parse(bound(row.frontier));const {sha256:frontierHash,...frontierBody}=frontier;
  need(frontier.run===run&&frontierHash===hash(frontierBody)&&frontier.batches.length===81,'wrong frozen frontier');
  const batches=frontier.batches.map(b=>String(b.id)).sort((a,b)=>Number(a)-Number(b));
  need(new Set(batches).size===81&&batches.every((b,i)=>b===String(i+1)),'wrong batch graph');
  const vectors=new Map(app.current_vectors.map(f=>[f.path,f]));need(vectors.size===app.current_vectors.length,'duplicate current vector');
  const after=path=>{const f=vectors.get(path);need(f,'missing current archive');const bytes=bound(f.after_archive);need(hash(bytes)===f.after_sha256&&f.before_sha256===files.get(path)?.sha256,'bad current binding');if(current)need(readFileSync(resolve(root,path),'utf8')===bytes,'current input changed: '+path);return bytes;};
  const contracts=batches.map(b=>`research/${run}-batch-${b}.proof-contracts.json`);
  const pages=batches.map(b=>`research/${run}-batch-${b}.pages.json`);
  const sourceIds=new Set(capture.sources.map(s=>s.id));
  need(capture.sources.length===capture.items&&sourceIds.size===capture.items&&capture.items===prep.selected_count
    &&capture.pages===162,'invalid source vector');
  // Full source identities come from the actual prepared rows, not verdicts.
  const prepIds=prep.items.map(x=>typeof x==='string'?x:x.id);
  need(same([...sourceIds].sort(),prepIds.sort())&&frontier.ids.every(id=>sourceIds.has(id)),'unbound source scope');
  const expected=[...contracts,...pages,...capture.sources.map(s=>s.path),cache(run)];
  need(vectors.size===expected.length&&expected.every(p=>vectors.has(p)),'incomplete current graph');
  for(const p of expected){before(p);after(p);}
  need(aggregate(run,contracts.map(before))===before(cache(run))&&hash(before(cache(run)))!==original,'native cache is not exact 81-input aggregation transition');
  need(aggregate(run,contracts.map(after))===after(cache(run))&&app.actual_merged_cache.exit_code===0
    &&app.actual_merged_cache.before_sha256===hash(before(cache(run)))&&app.actual_merged_cache.after_sha256===hash(after(cache(run)))
    &&same(app.actual_merged_cache.command,['node','tools/merge-proof-contracts.mjs','--level',run,cache(run),...contracts]),'owner merge is not deterministic actual aggregation');
  for(const ref of app.approved_proposals??[])need(hash(bound(ref.path))===ref.sha256,'changed approved proposal');
  const proposal=JSON.parse(bound(app.approved_proposals[0].path)),ops=JSON.parse(bound(app.approved_proposals[1].path));
  need(proposal.run===run&&proposal.before_capture===row.before_capture&&Array.isArray(ops),'unbound literal operations');
  const changed=new Set(app.files.map(f=>f.path));need(changed.size===app.files.length,'duplicate changed carrier');
  const sourceOps=ops.filter(o=>o.kind==='scientific-source');need(sourceOps.length===1&&sourceOps[0].id===app.source_id
    &&sourceOps[0].path===`items/${app.source_id}.md`&&/^status: draft$/m.test(sourceOps[0].before)&&/^status: draft$/m.test(sourceOps[0].after),'not one explicit draft scientific repair');
  const source=sourceOps[0];need(before(source.path)===source.before&&after(source.path)===source.after,'source repair is not exact literal approved delta');
  const required=new Set([source.id]),dependencies=new Map();
  for(const s of capture.sources){const bytes=after(s.path);need(s.raw_sha256===hash(before(s.path))&&s.guard_sha256===itemHashGuard(before(s.path)),'before source guard differs');need(itemHashGuard(bytes)===vectors.get(s.path).guard_sha256,'source guard differs');
    dependencies.set(s.id,frontmatterList(bytes,'deps'));
    if(s.id!==source.id)need(before(s.path)===bytes,'undeclared scientific source change');}
  let expanded=true;while(expanded){expanded=false;for(const [id,deps]of dependencies)if(!required.has(id)&&deps.some(d=>required.has(d))){required.add(id);expanded=true;}}
  need(same([...required].sort(),row.current_review_targets),'current source/consumer review floor changed');
  for(const path of [...contracts,...pages]){
    const document=JSON.parse(before(path));
    const selected=ops.filter(o=>(o.contract_path??o.file??(typeof o.path==='string'?o.path:null))===path);
    for(const op of selected){
      if(op.kind==='actual-focused-boundary-review'){
        const rows=document.contracts?.[op.id]?.boundaries;need(Array.isArray(rows)&&typeof op.review_evidence==='string'&&op.review_evidence.trim().length>=40,'invalid individual boundary evidence');
        const originalRows=JSON.parse(before(path)).contracts[op.id]?.boundaries;
        need(originalRows?.filter(r=>same(r,op.before)).length===1&&op.before.case===op.after.case,'original boundary identity changed');
        const indices=rows.flatMap((r,i)=>(same(r,op.before)||(op.id===source.id&&same(r,op.after)))?[i]:[]);
        need(indices.length===1,'unbound source/boundary overlap');
        const sourceRow=capture.sources.find(s=>s.id===op.id);need(sourceRow&&op.item_sha256===itemHashGuard(after(sourceRow.path)),'boundary source guard differs');
        const review=op.after.template_review;if(review)need(review.upheld===true&&review.item_sha256===op.item_sha256&&typeof review.by==='string'&&review.by.startsWith('/root/')&&review.reason?.trim().length>=40&&review.row_sha256===hash({case:op.after.case,status:op.after.status,text:op.after.reason??op.after.evidence??''}),'invalid individual boundary attestation');
        rows[indices[0]]=op.after;
      }else if(op.kind==='risk-or-citation-metadata'){
        const p=op.path;need(Array.isArray(p)&&p[0]==='contracts'&&((p.length===3&&p[2]==='risk_review')||(p.length===5&&p[2]==='citations'&&Number.isInteger(p[3])&&p[4]==='uses')),'non-metadata risk/citation operation');
        let target=document;for(const k of p.slice(0,-1)){need(target[k]!==undefined,'missing literal path');target=target[k];}const k=p.at(-1);need(same(target[k]??null,op.before),'old literal metadata differs');target[k]=op.value;
      }else if(op.kind==='source-repair-contract'){
        need([source.id,...required].includes(op.id),'unrelated source repair contract');
        if(op.pointer){const p=op.pointer.slice(1).split('/');need(p[0]==='contracts'&&p[1]===op.id&&p[2]==='citations'&&p.length===4,'untyped consumer contract edit');let target=document;for(const k of p.slice(0,-1))target=target[k];need(same(target[p.at(-1)],op.before),'bad old consumer quote');target[p.at(-1)]=op.after;
        }else{need(op.id===source.id&&same(document.contracts[op.id],op.before),'bad old source contract');document.contracts[op.id]=op.after;}
      }else if(op.kind==='source-manifest-mirror'){
        need(op.id===source.id&&Array.isArray(document),'unrelated source manifest edit');const rows=document.find(p=>p.id===op.page_id)?.items;need(Array.isArray(rows),'missing source manifest home');const i=rows.findIndex(r=>r.id===op.id);need(i>=0&&same(rows[i],op.before),'bad old source mirror');rows[i]=op.after;
      }else need(false,'untyped carrier operation');
    }
    need(same(document,JSON.parse(after(path))),'unlicensed metadata/foreign residual: '+path);
  }
  need(app.files.every(f=>changed.has(f.path)&&hash(before(f.path))===f.before_sha256&&hash(after(f.path))===f.after_sha256)
    &&expected.filter(p=>p!==cache(run)&&before(p)!==after(p)).every(p=>changed.has(p)),'application file inventory differs');
  const target=marker(root,run);if(existsSync(target))evidence[target]=hash(readFileSync(target,'utf8'));
  return {row,evidence,targets:[...required].sort(),original,cache:cache(run),current_sha256:hash(after(cache(run)))};
}
export function loadGateAggregationHistory(root,run){const p=marker(root,run);return existsSync(p)?validateGateAggregationHistory(root,run,read(p)):null;}
export function gateAggregationEvidenceReference(history,path,expected){
  if(!history?.root||!history?.run||resolve(history.root,path)!==resolve(history.root,cache(history.run)))return null;
  const value=loadGateAggregationHistory(history.root,history.run);return value&&value.original===expected?value:null;
}
export function recordGateAggregationHistory(root,run,payload){
  const statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8'),live=JSON.parse(stateBytes);
  need(live.run===run&&live.stage==='5.9-repair'&&live.paused===true&&drained(live),'recording requires actual paused drained 5.9');
  const body={...payload,recorded_at:new Date().toISOString()},row={...body,sha256:hash(body)},value=validateGateAggregationHistory(root,run,row,{current:true});
  need(readFileSync(resolve(root,row.creation_state),'utf8')===stateBytes&&readFileSync(resolve(root,row.creation_request),'utf8')===readFileSync(join(root,'.autopilot',run,'owner-gate-request.json'),'utf8'),'not exact actual creation boundary');
  need(!existsSync(join(dir(root,run),'gate-1.json'))&&!existsSync(join(dir(root,run),'gate-1-collected.json'))&&!existsSync(marker(root,run)),'gate recovery already started');
  need(readFileSync(statePath,'utf8')===stateBytes,'recording boundary changed');writeFileSync(marker(root,run),JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:marker(root,run),historical_only:true,current_review_granted:false,current_review_targets:value.targets};
}
