// Historical construction admission is not a perpetual freeze of native Step-2 work.
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {prerequisiteRepairProtocol} from './step2-prerequisite-repairs.mjs';
import {runPages} from './item-dependency-levels.mjs';

export function nativePrerequisiteLifecycle(root,run,entry){
  const p=prerequisiteRepairProtocol(),state=p.json(root,`${entry.state_dir}/state.json`),stage=`2-prerequisite-construct-${entry.number}`,closed=state.stages?.[stage];
  if(!closed?.doneAt&&!closed?.gatesPassedAt)return null;
  if(state.stage!== '2-scope-review'||state.stages?.['2-scope-review']?.doneAt)return null;
  p.assert(state.run===run&&p.same(state.stages?.['1-scaffold'],entry.original_step1)&&closed.doneAt&&closed.gatesPassedAt&&Date.parse(closed.doneAt)>=Date.parse(closed.gatesPassedAt),'incomplete native construction closure');
  const eventText=p.raw(root,`${entry.state_dir}/events.jsonl`),lines=eventText.split('\n'),events=[];
  for(const [index,line] of lines.entries())if(line){try{events.push(JSON.parse(line));}catch(error){if(index!==lines.length-1||eventText.endsWith('\n'))throw error;}}
  const clear=events.findLastIndex(row=>row.type==='stage-clear'&&row.message?.startsWith(`${stage} cleared `)&&Date.parse(row.at)>=Date.parse(closed.doneAt));
  p.assert(clear>=0,'native construction stage-clear evidence missing');
  const green=events.findLastIndex((row,index)=>index<clear&&row.type==='gates-ok'&&row.message===`${stage}: all gates green`&&Date.parse(row.at)<=Date.parse(closed.gatesPassedAt));
  const authorized=events.findLastIndex((row,index)=>index<green&&row.type==='owner-gate-authorized'&&row.ok===true);
  p.assert(green>=0&&authorized>=0,'native successful construction battery missing');
  const attempt=events[authorized].attempt;p.assert(/^[a-f0-9-]+$/.test(attempt??''),'invalid native admission attempt');
  const historyPath=`${entry.state_dir}/owner-gate-history/${attempt}.json`,history=p.json(root,historyPath),{request,receipt}=history,snapshot=request?.snapshot;
  const {sha256,...body}=snapshot??{};
  p.assert(request?.version===2&&request.attempt===attempt&&request.consumedAt&&snapshot.run===run&&resolve(snapshot.repo)===resolve(root)&&p.same(snapshot.stages,[stage])&&p.hash(JSON.stringify(body))===sha256,'construction owner history snapshot invalid');
  const frontier=runPages(root,run).filter(page=>Object.hasOwn(entry.manifest_sha256,`research/${run}-batch-${page.batch}.pages.json`)),sorted=value=>[...value].sort();
  p.assert(snapshot.recertificationScope==='formatting-metadata-only'&&snapshot.scopeKind==='items'&&snapshot.items?.length>0&&snapshot.pages?.length>0&&snapshot.inputs?.length>0&&p.same(sorted(snapshot.items.map(row=>row.id)),sorted(frontier.flatMap(page=>page.items.map(item=>item.id))))&&p.same(sorted(snapshot.pages),sorted(frontier.map(page=>page.id))),'construction history frontier incomplete');
  p.assert(receipt?.version===2&&receipt.attempt===attempt&&receipt.snapshotSha256===sha256&&receipt.writersDrained===true&&p.same(receipt.writerScopes,[])&&receipt.reviewer?.trim()&&receipt.recertificationScope==='formatting-metadata-only','construction owner receipt invalid');
  p.assert(receipt.items?.length===snapshot.items?.length&&snapshot.items.every((item,index)=>{
    const row=receipt.items[index];return row.id===item.id&&row.carrierSha256===item.carrierSha256&&row.manifestSha256===item.manifestSha256&&row.verdict==='format-metadata-pass'&&['formatting','metadata'].every(key=>row[key]?.verdict==='pass'&&row[key].evidence?.trim());
  }),'construction owner source checks incomplete');
  const battery=snapshot.battery,results=events.slice(authorized+1,green).filter(row=>row.type==='gate');
  p.assert(Array.isArray(battery)&&battery.some(row=>row.id==='supplemental-construction')&&p.same(results.map(row=>row.id),battery.map(row=>row.id))&&battery.every((gate,index)=>gate.required===false||results[index].ok===true&&results[index].code===0),'construction gate history incomplete/failed');
  p.assert(Date.parse(request.createdAt)<=Date.parse(receipt.reviewStartedAt)&&Date.parse(receipt.reviewStartedAt)<=Date.parse(receipt.reviewedAt)&&Date.parse(receipt.reviewedAt)<=Date.parse(request.consumedAt)&&Date.parse(request.consumedAt)<=Date.parse(events[authorized].at),'construction history times invalid');
  const inputs=new Map(snapshot.inputs.map(row=>[resolve(root,row.path),row.sha256])),pages=runPages(root,run),cached=new Map();
  const atAdmission=path=>{const value=inputs.get(resolve(root,path));p.assert(typeof value==='string',`construction history did not bind ${path}`);return value;};
  const bind=path=>p.assert(p.digest(root,path)===atAdmission(path),`immutable construction admission changed ${path}`);
  const owns=path=>{
    if(cached.has(path))return cached.get(path);
    const page=pages.find(page=>entry.batches.includes(page.batch)&&(page.items.some(item=>path===`items/${item.id}.md`)||path===`library/${page.category}/${page.id}.md`));
    if(!page){cached.set(path,false);return false;}
    const batch=page.batch,dir=`research/${run}-scope-review/batch-${batch}`,loop=p.json(root,`${dir}/state.json`),inputPath=`${dir}/repair-1.input.json`;
    if(p.absent(root,inputPath)){cached.set(path,false);return false;}
    const input=p.json(root,inputPath),label=`scope-repair-${batch}-1`,dispatch=state.dispatches?.[`2-scope-review:${label}`],review=state.dispatches?.[`2-scope-review:scope-review-${batch}-0`];
    const ownedPages=pages.filter(row=>row.batch===batch),items=ownedPages.flatMap(row=>row.items.map(item=>item.id)),pageIds=ownedPages.map(row=>row.id),files=[...items.map(id=>`items/${id}.md`),...ownedPages.map(row=>`library/${row.category}/${row.id}.md`)];
    const sorted=value=>[...value].sort();
    p.assert(loop.run===run&&loop.batch===batch&&loop.reviews?.some(row=>row.round===0&&row.decision==='repair')&&input.phase==='repair'&&input.round===1&&input.simple_loop===true&&input.role==='scope-repairer'&&input.label===label&&p.same(sorted(input.inventory.items),sorted(items))&&p.same(sorted(input.inventory.pages),sorted(pageIds))&&p.same(sorted(input.write_files),sorted(files)),'invalid native follow-on repair ownership');
    p.assert(dispatch?.stage==='2-scope-review'&&dispatch.role==='scope-repairer'&&dispatch.label===label&&p.same(dispatch.covers,[batch])&&dispatch.attempt>=1&&Date.parse(dispatch.startedAt)>Date.parse(closed.doneAt)&&review?.stage==='2-scope-review'&&review.role==='scope-reviewer'&&review.label===`scope-review-${batch}-0`&&p.same(review.covers,[batch])&&review.endedAt&&review.lastExitOk===true&&Date.parse(review.startedAt)>Date.parse(closed.doneAt)&&Date.parse(review.endedAt)<=Date.parse(dispatch.startedAt),'native follow-on dispatch lineage missing');
    const reviewResult=p.json(root,`research/${run}-dispatch/scope-reviewer-scope-review-${batch}-0.result.json`),reviewReport=p.json(root,`${dir}/review-0.json`);
    p.assert(reviewResult.run===run&&reviewResult.role==='scope-reviewer'&&reviewResult.label===`scope-review-${batch}-0`&&reviewResult.attempt===review.attempt&&reviewResult.ok===true&&reviewResult.exit_code===0&&p.same(reviewResult.covers,[batch])&&reviewReport.run===run&&reviewReport.batch===batch&&reviewReport.round===0&&reviewReport.decision==='repair'&&p.same(sorted(reviewReport.reviewed_items),sorted(items))&&p.same(sorted(reviewReport.reviewed_pages),sorted(pageIds)),'native follow-on review lineage invalid');
    if(dispatch.endedAt){
      const result=p.json(root,`research/${run}-dispatch/scope-repairer-${label}.result.json`),report=p.json(root,`${dir}/repair-1.json`);
      p.assert(dispatch.lastExitOk===true&&result.run===run&&result.role==='scope-repairer'&&result.label===label&&result.attempt===dispatch.attempt&&result.ok===true&&result.exit_code===0&&!result.timed_out&&p.same(result.covers,[batch])&&report.run===run&&report.batch===batch&&report.round===1&&['accept','escalate'].includes(report.decision)&&p.same(sorted(report.reviewed_items),sorted(items))&&p.same(sorted(report.reviewed_pages),sorted(pageIds)),'native follow-on repair result invalid');
    }
    const collected=loop.repairs?.find(row=>row.round===1);
    if(collected){
      const owner=loop.owner_resolution;
      if(collected.source_sha256?.[path]!==p.digest(root,path))p.assert(loop.phase==='accepted'&&owner?.reviewer==='/root'&&owner.previous_phase==='held'&&owner.decision==='accept'&&owner.run===run&&owner.batch===batch&&owner.repair_count===loop.repairs.length&&owner.review_count===loop.reviews.length&&owner.reason?.trim()&&owner.path?.startsWith(`${dir}/owner-`)&&p.same(p.json(root,owner.path),owner)&&p.same(Object.keys(owner.source_sha256??{}).sort(),sorted(files))&&owner.source_sha256[path]===p.digest(root,path),'collected native repair source changed without exact owner resolution');
    }
    else p.assert(loop.phase==='repair'&&p.same(loop.prepared,input),'native repair assignment is no longer current');
    cached.set(path,true);return true;
  };
  // Only immutable history is bindable input; mutable state/events are read for lineage.
  return {historyPath,atAdmission,bind,owns,fingerprint:p.hash(JSON.stringify({stage,closed,attempt,sha256,authorization:events[authorized],results,green:events[green],clear:events[clear]}))};
}

/** Bind stable native lineage, never whole driver state or mutable event files. */
export function prerequisiteLifecycleBinding(root,run){
  const p=prerequisiteRepairProtocol(),registry=`research/${run}-step2-prerequisites.json`;if(p.absent(root,registry))return null;
  const inputs=[registry,...['step2-prerequisite-lifecycle.mjs','step2-authored-metadata.mjs','step2-prerequisite-repairs.mjs','batch-scope-review.mjs'].map(name=>fileURLToPath(new URL(name,import.meta.url)))],epochs=[];
  for(const entry of p.json(root,registry).generations){
    const life=nativePrerequisiteLifecycle(root,run,entry);if(!life)continue;
    inputs.push(life.historyPath);const state=p.json(root,`${entry.state_dir}/state.json`),ownership=[];
    for(const batch of entry.batches){
      const dir=`research/${run}-scope-review/batch-${batch}`,input=`${dir}/repair-1.input.json`;
      if(p.absent(root,input))continue;
      const loop=p.json(root,`${dir}/state.json`),label=`scope-repair-${batch}-1`;
      ownership.push({batch,dispatch:state.dispatches?.[`2-scope-review:${label}`]??null,review:state.dispatches?.[`2-scope-review:scope-review-${batch}-0`]??null,collected:loop.repairs?.find(row=>row.round===1)?.source_sha256??null,owner:loop.owner_resolution??null});
      if(loop.owner_resolution?.path)inputs.push(loop.owner_resolution.path);
      for(const path of [input,`${dir}/repair-1.task.md`,`${dir}/review-0.json`,`${dir}/repair-1.json`,`research/${run}-dispatch/scope-reviewer-scope-review-${batch}-0.result.json`,`research/${run}-dispatch/scope-repairer-${label}.result.json`])inputs.push(path);
    }
    epochs.push({fingerprint:life.fingerprint,ownership});
    for(const suffix of ['authored-metadata','owner-repair-authorization','owner-repair-completion']){
      const path=`research/${run}-prerequisite-${entry.number}-${suffix}.json`;inputs.push(path);
      if(!p.absent(root,path)){const row=p.json(root,path);inputs.push(row.request.path,...(row.evidence??[]).map(ref=>ref.path));}
    }
  }
  return epochs.length?{fingerprint:p.hash(JSON.stringify(epochs)),inputs:[...new Set(inputs)]}:null;
}
