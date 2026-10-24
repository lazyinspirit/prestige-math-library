// Reconcile naturally authored new items only; grants no source-edit permission.
import {prerequisiteRepairProtocol,repairPublicSection,repairValueDigest,repairPaths} from './step2-prerequisite-repairs.mjs';
import {runPages,dependencyLevels} from './item-dependency-levels.mjs';
import {checkBatchDependencyLevels} from './batch-dependency-levels.mjs';
import {readItem} from './physics-content.mjs';
import {consumers} from './batch-scope-review.mjs';
import {nativePrerequisiteLifecycle} from './step2-prerequisite-lifecycle.mjs';

export const authoredMetadataPath=(run,number)=>{repairPaths(run,number);return `research/${run}-prerequisite-${number}-authored-metadata.json`;};
const fields=new Set(['statement','sources','title','deps','dependency_roles','proof_strategy','provenance']);
function selection(root,path,pointer,commit){
  const p=prerequisiteRepairProtocol();p.assert(/^\/(?:pages\/)?\d+\/items\/\d+\/[a-z_]+$/.test(pointer??''),'invalid authored metadata pointer');
  const doc=commit?JSON.parse(p.gitSource(root,commit,path)):p.json(root,path),parts=pointer.slice(1).split('/'),field=parts.pop();p.assert(fields.has(field),'unsupported authored metadata field');
  let row=doc;for(const part of parts){p.assert(row&&Object.hasOwn(row,part),'missing authored metadata parent');row=row[part];}return {row,field,value:row[field]};
}
function nativeResult(root,run,entry,batch){
  const p=prerequisiteRepairProtocol(),stage=`2-prerequisite-construct-${entry.number}`,label=`prerequisite-${entry.number}-batch-${batch}`,state=p.json(root,`${entry.state_dir}/state.json`);
  const dispatch=state.dispatches?.[`${stage}:${label}`],path=`research/${run}-dispatch/beta-${label}.result.json`,result=p.json(root,path);
  p.assert(dispatch?.stage===stage&&dispatch.role==='beta'&&dispatch.label===label&&p.same(dispatch.covers,[batch])&&dispatch.startedAt&&dispatch.endedAt&&dispatch.lastExitOk===true,'successful ended native supplemental dispatch required');
  p.assert(result.run===run&&result.role==='beta'&&result.label===label&&p.same(result.covers,[batch])&&result.attempt===dispatch.attempt&&result.ok===true&&result.exit_code===0&&!result.timed_out&&result.ended_at&&(!result.stage||result.stage===stage),'successful matching native supplemental result required');
  return {path,sha256:p.digest(root,path),dispatch};
}
function validate(root,run,entry,req,{replay=false,lifecycle=null}={}){
  const p=prerequisiteRepairProtocol(),pages=runPages(root,run),owned=new Map(pages.filter(page=>entry.batches.includes(page.batch)).flatMap(page=>page.items.map(item=>[item.id,{item,page}])));
  p.assert(Array.isArray(req.items)&&req.items.length&&new Set(req.items).size===req.items.length&&req.items.every(id=>entry.items.includes(id)&&owned.has(id)),'only declared supplemental item IDs may be reconciled');
  const ids=new Set(req.items),levels=dependencyLevels(pages);p.assert(!levels.errors.length,levels.errors.join('; '));
  const metadataPaths=['research/plan-spec.json',...Object.keys(entry.manifest_sha256)],baseline=req.base_commit;
  p.assert(Array.isArray(req.metadata_changes)&&req.metadata_changes.length,'exact authored metadata pointers required');
  const unique=new Set();
  for(const change of req.metadata_changes){
    const key=`${change.path}#${change.pointer}`;p.assert(!unique.has(key)&&metadataPaths.includes(change.path),'duplicate/unowned authored metadata pointer');unique.add(key);
    const before=selection(root,change.path,change.pointer,baseline),after=selection(root,change.path,change.pointer),source=readItem(p.file(root,`items/${before.row.id}.md`));
    const expected=after.field==='statement'?repairPublicSection(source.raw):source[after.field];
    const publicMirror=repairValueDigest(after.value)!==change.after_sha256&&after.field==='statement'&&lifecycle?.accepted(`items/${before.row.id}.md`)&&p.same(after.value,expected)&&repairValueDigest(p.admittedStatement(root,baseline,before.row.id,lifecycle))===change.after_sha256;
    p.assert(ids.has(before.row.id)&&after.row.id===before.row.id&&repairValueDigest(before.value)===change.before_sha256&&(repairValueDigest(after.value)===change.after_sha256||publicMirror)&&(p.same(after.value,expected)||lifecycle?.owns(`items/${before.row.id}.md`)),'authored pointer must exactly mirror current selected source');
  }
  for(const path of metadataPaths){
    const beforeRaw=p.gitSource(root,baseline,path),before=JSON.parse(beforeRaw),after=p.json(root,path);
    if(entry.manifest_sha256[path])p.assert(p.hash(beforeRaw)===entry.manifest_sha256[path],'authored metadata baseline differs from immutable generation');
    const normalize=value=>{
      const clone=structuredClone(value),list=Array.isArray(clone)?clone:clone.pages;
      for(const page of list)for(const item of page.items??[])if(owned.has(item.id))delete item.dependency_level;
      for(const change of req.metadata_changes.filter(row=>row.path===path)){
        const parts=change.pointer.slice(1).split('/'),field=parts.pop();let row=clone;for(const part of parts){p.assert(row&&Object.hasOwn(row,part),'authored pointer structure changed');row=row[part];}delete row[field];
      }return clone;
    };
    // During later old-source repairs, only that separately checked overlay owns old rows.
    if(!replay)p.assert(p.same(normalize(before),normalize(after)),'authored adoption changed inventory, original rows or public scope metadata');
  }
  p.assert(Array.isArray(req.reviews)&&req.reviews.length===ids.size&&new Set(req.reviews.map(row=>row.id)).size===ids.size,'exact authored source reviews required');
  const graph=p.currentGraph(root);
  for(const review of req.reviews){
    const sourcePath=`items/${review.id}.md`,native=()=>lifecycle?.owns(sourcePath);
    p.assert(ids.has(review.id)&&review.scope_preserved===true&&p.text(review.scientific_review)&&p.text(review.reference_review)&&(review.source_sha256===p.digest(root,sourcePath)||lifecycle&&review.source_sha256===lifecycle.atAdmission(sourcePath)&&native()),'actual current full-scope and reference review required');
    const declared=owned.get(review.id).item,source=readItem(p.file(root,`items/${review.id}.md`));
    p.assert(source.id===review.id&&source.kind===declared.kind&&source.domain===declared.domain&&source.library===declared.library&&source.status==='draft'&&(!source.pipeline_run||source.pipeline_run===run),'authored identity/domain/library/status changed');
    const affected=consumers(root,[review.id],[],graph).map(row=>row.id).sort();
    const reviewed=review.consumer_checks?.map(row=>row.id).sort();
    const exact=Array.isArray(review.consumer_checks)&&(p.same(reviewed,affected)||lifecycle&&affected.every(id=>reviewed.includes(id)||lifecycle.owns(`items/${id}.md`))&&reviewed.every(id=>affected.includes(id)||native()));
    p.assert(exact&&review.consumer_checks.every(row=>['accept','unaffected'].includes(row.decision)&&p.text(row.reason)&&(row.sha256===p.digest(root,`items/${row.id}.md`)||lifecycle&&row.sha256===lifecycle.atAdmission(`items/${row.id}.md`)&&lifecycle.owns(`items/${row.id}.md`))),'authored same-owner consumer checks incomplete/stale');
    p.assert((p.same(source.deps,declared.deps)||native())&&declared.dependency_level===levels.levels.get(review.id),'authored deps/levels do not match source');
  }
  if(!replay)checkBatchDependencyLevels(root,run);
  return {pages,owned};
}
export function adoptAuthoredMetadata(root,run,stateDir,requestPath,{scan,validate:validateNative}={}){
  const p=prerequisiteRepairProtocol(),req=p.request(root,run,requestPath),entry=p.entryAt(root,run,req.generation),path=authoredMetadataPath(run,entry.number);
  const stateHash=p.boundary(root,run,stateDir,scan,entry);
  p.assert(p.absent(root,path)&&p.absent(root,repairPaths(run,entry.number).authorization),'adopt new-author metadata before original repair authorization');
  for(const [file,sha] of Object.entries(entry.protected_sources))p.assert(p.digest(root,file)===sha,'new-author adoption cannot license old-source edits');
  const {pages,owned}=validate(root,run,entry,req),batches=[...new Set(req.items.map(id=>owned.get(id).page.batch))],results=batches.map(batch=>nativeResult(root,run,entry,batch));
  p.assert(typeof validateNative==='function','native new-subject validators required');
  const subjects=pages.filter(page=>entry.batches.includes(page.batch));
  validateNative({pages:subjects.map(page=>page.id),items:subjects.flatMap(page=>page.items.map(item=>item.id))});
  const manifests=Object.fromEntries(entry.batches.map(batch=>{const file=`research/${run}-batch-${batch}.pages.json`;return [file,p.digest(root,file)];}));
  const value={version:1,run,generation:entry.number,reviewer:'/root',request:{path:requestPath,sha256:p.digest(root,requestPath)},evidence:req.evidence,results,manifests,plan_sha256:p.digest(root,'research/plan-spec.json'),scientific_acceptance:false};
  p.assert(p.boundary(root,run,stateDir,scan,entry)===stateHash,'boundary changed during authored metadata adoption');
  p.ref(root,run,value.request);results.forEach(row=>p.ref(root,run,row));p.writeOnce(root,path,value);return value;
}
export function checkedAuthoredMetadata(root,run,entry){
  const p=prerequisiteRepairProtocol(),path=authoredMetadataPath(run,entry.number);if(p.absent(root,path))return {manifests:{}};
  const row=p.json(root,path);p.assert(row.version===1&&row.run===run&&row.generation===entry.number&&row.reviewer==='/root'&&row.scientific_acceptance===false,'invalid authored metadata receipt');
  p.ref(root,run,row.request);row.evidence.forEach(ref=>p.ref(root,run,ref));
  const lifecycle=nativePrerequisiteLifecycle(root,run,entry);
  if(lifecycle)for(const file of [path,row.request.path,...row.evidence.map(ref=>ref.path),...row.results.map(ref=>ref.path)])lifecycle.bind(file);
  const req=p.json(root,row.request.path),validated=validate(root,run,entry,req,{replay:true,lifecycle});
  if(p.absent(root,repairPaths(run,entry.number).authorization))p.assert(p.digest(root,'research/plan-spec.json')===row.plan_sha256,'authored canonical plan changed before original repair admission');
  for(const result of row.results){p.ref(root,run,result);const batch=result.dispatch.covers[0];p.assert(p.same(nativeResult(root,run,entry,batch),result),'native authored result/dispatch changed');}
  p.assert(p.same(row.results.map(row=>row.dispatch.covers[0]).sort(),[...new Set(req.items.map(id=>validated.owned.get(id).page.batch))].sort()),'authored receipt native batch ownership incomplete');
  p.assert(p.same(Object.keys(row.manifests).sort(),entry.batches.map(batch=>`research/${run}-batch-${batch}.pages.json`).sort()),'authored receipt cannot override original manifests');
  return row;
}
export function authoredMetadataReviewInputs(root,run,number){
  const p=prerequisiteRepairProtocol(),path=authoredMetadataPath(run,number),inputs=[path];if(p.absent(root,path))return inputs;
  const row=p.json(root,path),req=p.json(root,row.request.path);return [...inputs,row.request.path,...row.evidence.map(ref=>ref.path),...row.results.map(ref=>ref.path),...req.items.map(id=>`items/${id}.md`),...req.reviews.flatMap(review=>review.consumer_checks.map(row=>`items/${row.id}.md`))];
}
