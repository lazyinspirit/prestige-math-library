// Explicit historical page-manifest bytes after genuine native owner repair.
// This is used only by collected/certification history; ordinary evidence
// intake stays strict. No scientific/source/proof input gets an alias.
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync, renameSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { itemHashGuard } from './item-hash.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { sectionText, splitFrontmatter } from './facts-block.mjs';
import { frontierGateScope } from './frontier-gate-scope.mjs';
import { MODELS } from './models.mjs';
const raw=bytes=>createHash('sha256').update(bytes).digest('hex');
const digest=value=>raw(JSON.stringify(value));
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const check=(ok,why)=>{if(!ok)throw Error('Step 5 historical manifest: '+why);};
const sha=value=>/^[a-f0-9]{64}$/.test(value??'');
const explanation=value=>typeof value==='string'&&value.trim().length>=40;
const evidence=row=>row&&explanation(row.reason)&&row.uncertain===false&&Array.isArray(row.source_urls)
  &&row.source_urls.every(url=>/^https:\/\//.test(url))&&(row.familiar===true||row.source_urls.length>0);
const fileHash=path=>raw(readFileSync(path));
const valueAt=(doc,path)=>path.split('/').slice(1).reduce((value,key)=>value?.[key],doc);
function differences(a,b,path=''){
  if(equal(a,b))return [];
  if(a&&b&&typeof a==='object'&&typeof b==='object'&&Array.isArray(a)===Array.isArray(b))
    return [...new Set([...Object.keys(a),...Object.keys(b)])].flatMap(key=>differences(a[key],b[key],path+'/'+key));
  return [path];
}
function publicText(source){
  const body=splitFrontmatter(source).body;
  const sections=['Statement','Definition','Example','Counterexample','Postulate'].map(heading=>sectionText(body,heading).trim()).filter(Boolean);
  check(sections.length===1,'carrier must have one canonical public statement section');return sections[0];
}

export function historicalManifestEvidence(root,run,input){
  root=resolve(root);
  const normalized=Object.fromEntries(Object.entries(input??{}).map(([path,value])=>[resolve(root,path),value]));
  const stale=Object.entries(normalized).filter(([path,value])=>!existsSync(path)||fileHash(path)!==value);
  const empty={evidence:normalized,additions:{},transitions:[]};
  if(!stale.length)return empty;
  const dir=join(root,'research',run+'-step5-v2'),pointerPath=join(dir,'owner-historical-manifest-request.json');
  if(!existsSync(pointerPath))return empty;
  const pointer=read(pointerPath),additions={};
  check(pointer.version===1&&pointer.run===run,'invalid Root advertisement');
  const bind=(ref,gate=false)=>{
    check(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&sha(ref.sha256),'invalid raw evidence reference');
    const path=resolve(root,ref.path),rel=relative(root,path);
    check(!isAbsolute(rel)&&!rel.startsWith('..')&&realpathSync(path)===path
      &&(gate?rel.startsWith('.physics-autopilot/'+run+'/owner-gate-history/')&&basename(path).endsWith('.json')
        :rel.startsWith('research/'+run+'-')),'binding escapes its exact native evidence scope');
    check(fileHash(path)===ref.sha256,'bound evidence changed: '+ref.path);additions[path]=ref.sha256;return path;
  };
  const requestPath=bind(pointer.request),request=read(requestPath);
  check(dirname(requestPath)===dir&&/^owner-historical-manifest-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))&&requestPath!==pointerPath,'binding must be immutable workflow evidence');
  check(request.version===1&&request.run===run&&request.reviewer==='/root'&&/^[1-9][0-9]*$/.test(request.batch??'')
    &&typeof request.subject==='string'&&request.manifest_path==='research/'+run+'-batch-'+request.batch+'.pages.json'
    &&/^\/\d+\/items\/\d+\/statement$/.test(request.json_pointer??'')&&Array.isArray(request.transitions)&&request.transitions.length>0,'invalid exact historical manifest binding');
  const manifest=resolve(root,request.manifest_path);
  if(!stale.some(([path])=>path===manifest))return empty;
  if(request.previous_binding){
    const previous=read(bind(request.previous_binding));
    check(previous.version===1&&previous.run===run&&previous.reviewer==='/root'&&request.transitions.length>previous.transitions?.length
      &&equal(request.transitions.slice(0,previous.transitions.length),previous.transitions),'historical transition prefix changed');
    for(const key of ['manifest_path','batch','subject','json_pointer','initial_parent','page_receipt','page_report'])
      check(equal(request[key],previous[key]),'original historical binding changed: '+key);
  }
  const archive=new Map();
  for(const transition of request.transitions)for(const ref of [transition.before_manifest,transition.after_manifest]){
    const path=bind(ref);archive.set(ref.sha256,path);
  }
  const strictHistory=map=>{
    for(const [path,value]of Object.entries(map??{})){
      const absolute=resolve(root,path);
      check(existsSync(absolute)&&(fileHash(absolute)===value||absolute===manifest&&archive.has(value)), 'non-historical evidence changed: '+path);
    }
  };
  const parentPath=bind(request.initial_parent),pagePath=bind(request.page_receipt),pageReportPath=bind(request.page_report);
  check(parentPath===join(dir,'initial-1-collected.json')&&pagePath===join(dir,'page-correction-initial-1-collected.json')
    &&pageReportPath===join(dir,'step5-v2-page-correction-initial-r1-u1.json'),'wrong original page evidence');
  const parent=read(parentPath),page=read(pagePath),pageReport=read(pageReportPath),first=request.transitions[0];
  const lookup=(map,path)=>map?.[path]??map?.[relative(root,path)];
  check(parent.run===run&&parent.phase==='initial'&&parent.round===1&&page.run===run&&page.phase==='page-correction-initial'&&page.round===1
    &&parent.native_page_correction?.subject===page.subject&&equal(parent.native_page_correction.page_review,page.page_review)
    &&lookup(parent.evidence,pagePath)===request.page_receipt.sha256&&lookup(page.evidence,pageReportPath)===request.page_report.sha256
    &&lookup(parent.evidence,manifest)===first.before_manifest.sha256&&lookup(page.evidence,manifest)===first.before_manifest.sha256
    &&lookup(pageReport.supporting_evidence,manifest)===first.before_manifest.sha256,'original parent/page evidence lacks this exact historical manifest guard');
  const pagePackPath=join(dir,'page-correction-initial-1.json'),pagePack=read(pagePackPath);
  check(lookup(page.evidence,pagePackPath)===fileHash(pagePackPath)&&pagePack.payload?.batch===request.batch
    &&pagePack.payload.subject===page.subject&&pageReport.input_sha256===digest(pagePack),'historical manifest belongs to another page owner');
  additions[pagePackPath]=fileHash(pagePackPath);strictHistory(parent.evidence);strictHistory(page.evidence);
  const frontierPath=join(dir,'frontier.json'),frontier=read(frontierPath);validateFrontier(frontier);
  check(frontier.run===run&&frontier.batches.find(row=>row.id===request.batch)?.items.includes(request.subject),'consumer is not in its original frozen batch');
  additions[frontierPath]=fileHash(frontierPath);
  check(first.before_source.sha256===pagePack.before_sources?.['items/'+request.subject+'.md'],'old source raw archive differs from the actual page snapshot');
  let priorManifest=null,priorSource=null,latestAfter=null;
  for(const [index,transition]of request.transitions.entries()){
    check(['impact-initial','impact-repeat','gate'].includes(transition.phase)&&Number.isInteger(transition.round)&&transition.round>0
      &&(index>0||transition.phase==='impact-initial'&&transition.round===1),'wrong native transition phase');
    const beforePath=bind(transition.before_manifest),afterPath=bind(transition.after_manifest),before=read(beforePath),after=read(afterPath);
    check(!priorManifest||priorManifest===transition.before_manifest.sha256,'manifest transition chain has a gap');
    const pointer=request.json_pointer,rowPointer=pointer.replace(/\/statement$/,''),oldRow=valueAt(before,rowPointer),newRow=valueAt(after,rowPointer);
    check(equal(differences(before,after),[pointer])&&oldRow?.id===request.subject&&newRow?.id===request.subject,'manifest change is not exactly the owned statement mirror');
    const beforeSourcePath=bind(transition.before_source),afterSourcePath=bind(transition.after_source);
    const beforeSource=readFileSync(beforeSourcePath,'utf8'),afterSource=readFileSync(afterSourcePath,'utf8');
    check(!priorSource||priorSource===transition.before_source.sha256,'source transition chain has a gap');
    check(oldRow.statement.trim()===publicText(beforeSource)&&newRow.statement.trim()===publicText(afterSource),'manifest statement differs from genuine source bytes');
    const beforeGuard=itemHashGuard(beforeSource),afterGuard=itemHashGuard(afterSource);
    check(beforeGuard!==afterGuard,'native source repair did not actually change the item');
    const progressPath=bind(transition.impact_progress),closedPath=bind(transition.impact_closed),progress=read(progressPath),closed=read(closedPath);
    check(progressPath===join(dir,transition.phase+'-'+transition.round+'-progress.json')&&progress.version===2&&progress.run===run
      &&progress.phase===transition.phase&&progress.round===transition.round&&progress.complete===true
      &&resolve(root,progress.closed_receipt?.path??'')===closedPath&&progress.closed_receipt.sha256===transition.impact_closed.sha256
      &&Array.isArray(progress.passes)&&progress.passes.includes(progress.activePhase)
      &&closed.version===2&&closed.run===run&&closed.phase===transition.phase&&closed.round===transition.round&&Array.isArray(closed.errors)&&closed.errors.length===0
      &&closed.post?.[request.subject]===afterGuard,'native owner wave lacks authentic completed closure');
    strictHistory(closed.evidence);
    const native=(refs,repair)=>{
      const packPath=bind(refs.pack),reportPath=bind(refs.report),taskPath=bind(refs.task),dispatchPath=bind(refs.dispatch);
      const pack=read(packPath),report=read(reportPath),dispatch=read(dispatchPath),unit=String(report.unit);
      const phase=report.phase,label='step5-v2-'+phase+'-r'+transition.round+'-u'+unit;
      check(progress.passes.includes(phase)&&packPath===join(dir,phase+'-'+transition.round+'.json')&&reportPath===join(dir,label+'.json')
        &&taskPath===join(dir,label+'.task.md')&&dispatchPath===join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json')
        &&pack.version===2&&pack.run===run&&pack.phase===phase&&pack.round===transition.round&&report.run===run&&report.round===transition.round
        &&report.input_sha256===digest(pack)&&readFileSync(taskPath,'utf8').includes(packPath)
        &&pack.assignments?.[unit]?.includes(request.subject)&&lookup(closed.evidence,packPath)===refs.pack.sha256
        &&lookup(closed.evidence,reportPath)===refs.report.sha256&&lookup(closed.evidence,dispatchPath)===refs.dispatch.sha256,'repair/review is not bound to its native owner assignment');
      check(dispatch.ok===true&&dispatch.run===run&&dispatch.role==='alpha-repair'&&dispatch.label===label&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort==='high'
        &&equal(dispatch.covers,[phase===transition.phase?unit:phase+':'+unit])&&typeof dispatch.ended_at==='string'&&!Number.isNaN(Date.parse(dispatch.ended_at)),'owner lacks completed native Sol high authority');
      const reviews=report.reviews?.filter(row=>row.id===request.subject)??[];
      check(reviews.length===1&&evidence(reviews[0])&&reviews[0].post_sha256===afterGuard&&sha(reviews[0].review_context_sha256),'missing exact native post-source review');
      if(repair){
        const notes=Array.isArray(report.repair_notes)?report.repair_notes:[report.repair_notes];
        check(pack.before?.[request.subject]===beforeGuard&&reviews[0].disposition==='repaired'
          &&notes.some(note=>note?.metadata_updates?.some(row=>row.id===request.subject&&row.changes?.some(text=>/owning.*(?:Statement|Example|Definition).*mirror/i.test(text)))),
          'manifest mirror lacks an actual assigned native repair');
      }
      return reviews[0];
    };
    native(transition.repair,true);const review=native(transition.final_review,false);
    check(closed.reviews?.filter(row=>row.id===request.subject&&equal(row,review)).length===1,'final owner review is not the closed current review');
    const gatePath=bind(transition.owner_gate,true),gate=read(gatePath),requestGate=gate.request,receipt=gate.receipt,snapshot=requestGate?.snapshot;
    const {sha256,...body}=snapshot??{};
    const stage=transition.phase==='impact-initial'?'5.2-impact':transition.phase==='impact-repeat'?'5.6-impact':'5.9-repair';
    check(requestGate?.version===2&&basename(gatePath)===requestGate.attempt+'.json'&&sha256===digest(body)&&snapshot.run===run&&snapshot.repo===root
      &&equal(snapshot.stages,[stage])&&snapshot.scopeKind==='items'&&snapshot.recertificationScope==='formatting-metadata-only'
      &&receipt?.version===2&&receipt.attempt===requestGate.attempt&&receipt.snapshotSha256===sha256&&receipt.reviewer==='/root'
      &&receipt.recertificationScope==='formatting-metadata-only'&&receipt.writersDrained===true&&Array.isArray(receipt.writerScopes)&&receipt.writerScopes.length===0,'missing consumed native owner metadata gate');
    const times=[requestGate.createdAt,receipt.reviewStartedAt,receipt.reviewedAt,requestGate.consumedAt].map(Date.parse);
    check(times.every(Number.isFinite)&&times.every((time,i)=>i===0||time>=times[i-1])&&times.at(-1)<=Date.now(),'invalid consumed metadata gate times');
    check(Array.isArray(snapshot.items)&&new Set(snapshot.items.map(row=>row.id)).size===snapshot.items.length&&Array.isArray(receipt.items)&&receipt.items.length===snapshot.items.length
      &&frontier.ids.every(id=>snapshot.items.some(row=>row.id===id)),'incomplete historical owner metadata scope');
    for(const [i,item]of snapshot.items.entries()){
      const row=receipt.items[i];check(row?.id===item.id&&row.carrierSha256===item.carrierSha256&&row.manifestSha256===item.manifestSha256
        &&row.verdict==='format-metadata-pass'&&['formatting','metadata'].every(key=>row[key]?.verdict==='pass'&&typeof row[key].evidence==='string'&&row[key].evidence.trim()),'incomplete genuine owner metadata checks');
    }
    check(snapshot.inputs?.some(row=>resolve(root,row.path)===manifest&&row.sha256===transition.after_manifest.sha256)
      &&snapshot.items.some(row=>row.id===request.subject&&row.carrierSha256===transition.after_source.sha256),'native current manifest/source is not gate-bound');
    latestAfter=after;priorManifest=transition.after_manifest.sha256;priorSource=transition.after_source.sha256;
  }
  check(fileHash(manifest)===priorManifest&&publicText(readFileSync(join(root,'items',request.subject+'.md'),'utf8'))===valueAt(latestAfter,request.json_pointer),
    'live manifest lacks its genuine native transition or current source mirror');
  // Historical gates authenticate their actual immutable wave. They do not
  // freeze unrelated current items to that old wave; certification separately
  // checks the current wave's full gate and ordinary source/review guards.
  const additionsResult={...additions,[manifest]:priorManifest},transitions=[];
  for(const path of Object.keys(input??{}))if(resolve(root,path)===manifest)additionsResult[path]=priorManifest;
  for(const [path,before]of stale)if(path===manifest){
    check(archive.has(before),'historical raw manifest preimage is absent');
    normalized[path]=priorManifest;
    transitions.push({kind:'historical-page-manifest',path,before_sha256:before,after_sha256:priorManifest,
      archive:{path:archive.get(before),sha256:before},binding:{path:requestPath,sha256:pointer.request.sha256}});
  }
  return {evidence:{...normalized,...additionsResult},additions:additionsResult,transitions};
}

export function historicalManifestPredecessor(root,run,phase){
  const stage=phase==='impact-initial'?'5.2-impact':phase==='impact-repeat'?'5.6-impact':'5.9-repair',historyDir=join(root,'.physics-autopilot',run,'owner-gate-history');
  const histories=readdirSync(historyDir).filter(name=>name.endsWith('.json')).map(name=>({path:join(historyDir,name),gate:read(join(historyDir,name))}))
    .filter(({gate})=>equal(gate.request?.snapshot?.stages,[stage])&&gate.request.consumedAt)
    .sort((a,b)=>Date.parse(b.gate.request.consumedAt)-Date.parse(a.gate.request.consumedAt));
  check(histories[0],'missing genuine predecessor owner gate');return {path:histories[0].path,sha256:fileHash(histories[0].path)};
}
const preparationPointer=(root,run,phase,round)=>join(root,'.physics-autopilot',run,`pre-certification-${phase}-${round}.json`);
export function recordHistoricalManifestPreparation(root,run,phase,round,{attempt,results,predecessor}){
  const stateDir=join(root,'.physics-autopilot',run),historyPath=join(stateDir,'owner-gate-history',attempt+'.json');
  check(fileHash(predecessor.path)===predecessor.sha256,'predecessor history changed during native preparation');
  const gate=read(historyPath),prior=read(predecessor.path);
  check(equal(gate.request.snapshot.battery,prior.request.snapshot.battery)
    &&Array.isArray(results)&&results.length===gate.request.snapshot.battery.length
    &&results.every((row,i)=>row.id===gate.request.snapshot.battery[i].id&&row.ok===true&&row.code===0&&!row.skipped),'fresh native check did not run the complete exact predecessor battery');
  const path=join(stateDir,`pre-certification-${phase}-${round}-${attempt}.json`),record={version:1,kind:'native-current-pre-certification-check',run,phase,round,
    createdAt:new Date().toISOString(),predecessor_history:predecessor,owner_gate:{path:historyPath,sha256:fileHash(historyPath)},results};
  const bytes=JSON.stringify(record,null,2)+'\n';
  if(existsSync(path))check(readFileSync(path,'utf8')===bytes,'immutable native preparation changed');else writeFileSync(path,bytes,{flag:'wx'});
  const pointer=preparationPointer(root,run,phase,round),temporary=pointer+'.'+process.pid+'.tmp';
  writeFileSync(temporary,JSON.stringify({version:1,run,phase,round,record:{path,sha256:fileHash(path)}},null,2)+'\n');renameSync(temporary,pointer);
  return {path,sha256:fileHash(path)};
}

export function validateCurrentHistoricalManifestGate(root,run,phase,round){
  root=resolve(root);const stage=phase==='impact-initial'?'5.2-impact':phase==='impact-repeat'?'5.6-impact':'5.9-repair';
  const certifyStage=phase==='impact-initial'?'5.3-certify':phase==='impact-repeat'?'5.7-certify':stage;
  check(['impact-initial','impact-repeat','gate'].includes(phase)&&Number.isInteger(round)&&round>0,'wrong current certification phase');
  const stateDir=join(root,'.physics-autopilot',run),state=read(join(stateDir,'state.json'));
  check(state.run===run&&state.stage===certifyStage&&!state.finishedAt&&(phase==='gate'||state.stages?.[stage]?.gatesPassedAt)
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||row.endedAt||row.role==='tool'&&row.stage===state.stage),'current certification stage/gate or writer guard failed');
  const pointer=preparationPointer(root,run,phase,round);let prepared=null,preparationEvidence={};
  let selected;
  if(existsSync(pointer)){
    const p=read(pointer);check(p.version===1&&p.run===run&&p.phase===phase&&p.round===round&&sha(p.record?.sha256)
      &&dirname(p.record.path)===stateDir&&basename(p.record.path).startsWith(`pre-certification-${phase}-${round}-`)
      &&fileHash(p.record.path)===p.record.sha256,'invalid native preparation pointer');
    prepared=read(p.record.path);
    check(prepared.version===1&&prepared.kind==='native-current-pre-certification-check'&&prepared.run===run&&prepared.phase===phase&&prepared.round===round
      &&dirname(prepared.owner_gate.path)===join(stateDir,'owner-gate-history')&&fileHash(prepared.owner_gate.path)===prepared.owner_gate.sha256
      &&dirname(prepared.predecessor_history.path)===join(stateDir,'owner-gate-history')&&fileHash(prepared.predecessor_history.path)===prepared.predecessor_history.sha256,'native preparation evidence changed');
    selected={path:prepared.owner_gate.path,gate:read(prepared.owner_gate.path)};
    const prior=read(prepared.predecessor_history.path);
    check(equal(prior.request.snapshot.stages,[stage])&&equal(selected.gate.request.snapshot.battery,prior.request.snapshot.battery)
      &&Array.isArray(prepared.results)&&prepared.results.length===prior.request.snapshot.battery.length
      &&prepared.results.every((row,i)=>row.id===prior.request.snapshot.battery[i].id&&row.ok===true&&row.code===0&&!row.skipped),'native preparation omitted or failed a predecessor gate');
    preparationEvidence={[p.record.path]:p.record.sha256,[prepared.predecessor_history.path]:prepared.predecessor_history.sha256};
  }else{const prior=historicalManifestPredecessor(root,run,phase);selected={path:prior.path,gate:read(prior.path)};}
  check(realpathSync(selected.path)===selected.path,'missing current consumed owner gate');
  const {request,receipt}=selected.gate,snapshot=request.snapshot,{sha256,...body}=snapshot;
  check(request.version===2&&basename(selected.path)===request.attempt+'.json'&&sha256===digest(body)&&snapshot.run===run&&snapshot.repo===root
    &&equal(snapshot.stages,[prepared?certifyStage:stage])&&snapshot.scopeKind==='items'&&snapshot.recertificationScope==='formatting-metadata-only'&&receipt?.version===2&&receipt.attempt===request.attempt
    &&receipt.snapshotSha256===sha256&&receipt.reviewer==='/root'&&receipt.recertificationScope==='formatting-metadata-only'
    &&receipt.writersDrained===true&&Array.isArray(receipt.writerScopes)&&receipt.writerScopes.length===0,'invalid current consumed owner gate');
  const times=[request.createdAt,receipt.reviewStartedAt,receipt.reviewedAt,request.consumedAt].map(Date.parse);
  check(times.every(Number.isFinite)&&times.every((time,i)=>i===0||time>=times[i-1])&&times.at(-1)<=Date.now(),'invalid current owner check times');
  if(prepared)check(times.at(-1)>=Date.parse(state.stages[certifyStage]?.enteredAt)&&Date.parse(prepared.createdAt)>=times.at(-1),'fresh check belongs to another certification join');
  else if(phase!=='gate')check(times.at(-1)>=Date.parse(state.stages[stage].enteredAt)&&times.at(-1)<=Date.parse(state.stages[stage].gatesPassedAt),'current owner gate belongs to another wave');
  const frontier=read(join(root,'research',run+'-step5-v2','frontier.json'));validateFrontier(frontier);
  const scope=new Set([...frontier.ids,...frontierGateScope({repo:root,run}).items]);
  check(Array.isArray(snapshot.items)&&snapshot.items.length===scope.size&&new Set(snapshot.items.map(row=>row.id)).size===scope.size
    &&snapshot.items.every(row=>scope.has(row.id))&&Array.isArray(receipt.items)&&receipt.items.length===snapshot.items.length,'current metadata gate does not cover the actual frontier');
  for(const [index,item]of snapshot.items.entries()){
    const row=receipt.items[index];check(row?.id===item.id&&row.carrierSha256===item.carrierSha256&&row.manifestSha256===item.manifestSha256&&row.verdict==='format-metadata-pass'
      &&['formatting','metadata'].every(key=>row[key]?.verdict==='pass'&&typeof row[key].evidence==='string'&&row[key].evidence.trim())
      &&fileHash(join(root,'items',item.id+'.md'))===item.carrierSha256,'current gated item/check changed: '+item.id);
  }
  for(const row of snapshot.inputs??[]){
    const path=resolve(root,row.path);
    check(row.sha256===null?!existsSync(path):existsSync(path)&&fileHash(path)===row.sha256,'current metadata gate input changed: '+row.path);
  }
  return {...preparationEvidence,[selected.path]:fileHash(selected.path)};
}
