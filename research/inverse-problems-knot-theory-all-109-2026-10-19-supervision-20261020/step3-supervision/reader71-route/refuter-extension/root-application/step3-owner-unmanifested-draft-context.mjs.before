// Opt-in read-only context route. No helper writes a registry or grants ownership.
import { readFileSync, existsSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { requiredPageHash as hash } from './step3-owner-required-page-routes.mjs';
export const UNMANIFESTED_POLICY='owner-step3-unchanged-unmanifested-draft-context-v1';
const sha=x=>createHash('sha256').update(x).digest('hex');
const check=(x,m)=>{if(!x)throw Error(`unmanifested draft context: ${m}`);};
const validId=x=>typeof x==='string'&&/^[a-z][a-z0-9-]*$/.test(x);
const registry=run=>`research/${run}-step3-owner-unmanifested-draft-context.json`;
function bytes(root,p){
 check(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\')&&!p.split('/').some(x=>!x||x==='.'||x==='..'),'unsafe path');
 const full=resolve(root,p),rel=relative(resolve(root),full);check(rel&&!rel.startsWith('..')&&!isAbsolute(rel),'escaping path');
 let cursor=resolve(root);for(const part of rel.split('/')){cursor=resolve(cursor,part);check(!lstatSync(cursor).isSymbolicLink(),'symlink');}
 check(lstatSync(full).isFile(),'nonregular file');return readFileSync(full);
}
const parse=b=>JSON.parse(b.toString());
const fm=b=>yaml().parse(split(b.toString()).fm);
function ref(root,run,r){check(r&&typeof r.path==='string'&&r.path.startsWith(`research/${run}-`)&&/^[a-f0-9]{64}$/.test(r.sha256??''),'invalid evidence reference');const b=bytes(root,r.path);check(sha(b)===r.sha256,`changed evidence ${r.path}`);return b;}
function manifests(root,run){
 const homes=new Map();for(const name of readdirSync(resolve(root,'research'))){
  const match=name.match(new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`));if(!match)continue;
  const p=`research/${name}`,doc=parse(bytes(root,p));for(const page of Array.isArray(doc)?doc:doc.pages??[])for(const item of page.items??[]){const id=typeof item==='string'?item:item.id;if(!homes.has(id))homes.set(id,[]);homes.get(id).push({batch:match[1],path:p,item:typeof item==='string'?{id:item}:item});}
 }return homes;
}
const directEdge=(deps,id)=>Array.isArray(deps)&&validId(id)&&deps.every(validId)&&deps.includes(id);
function nativeEvidence(root,run,e){
 check(e.version===1&&e.run===run&&e.policy===UNMANIFESTED_POLICY&&e.owner_identity==='/root'&&e.reviewed===true&&e.mathematical_acceptance===false&&e.edit_permission===false&&e.coverage_adopted===false,'invalid authority');
 check(/^[1-9]\d*$/.test(e.batch??'')&&Number.isSafeInteger(e.index)&&e.index>0&&validId(e.id)&&validId(e.consumer_id)&&e.id!==e.consumer_id,'invalid identity');
 check(typeof e.reason==='string'&&e.reason.trim().length>=80&&Number.isFinite(Date.parse(e.at)),'missing reason/time');
 const report=parse(ref(root,run,e.findings)),native=parse(ref(root,run,e.native_result));ref(root,run,e.prompt);
 check(e.reader_report?.path===`research/${run}-reader-${e.batch}.md`,'reader report must be exact canonical native prose path');ref(root,run,e.reader_report);
 check(e.findings.path!==`research/${run}-reader-findings-${e.batch}.json`,'findings require immutable archive');
 check(e.native_result.path===`research/${run}-dispatch/reader-reader-${e.batch}.attempt-${native.attempt}.result.json`&&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.run===run&&native.role==='reader'&&native.label===`reader-${e.batch}`&&native.covers?.length===1&&String(native.covers[0])===e.batch&&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out!==true&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false,'not successful exact native attempt');
 check(e.prompt.path===e.native_result.path.replace(/\.result\.json$/,'.prompt.md')&&native.prompt?.endsWith('/'+e.prompt.path),'wrong prompt');
 check(Number.isFinite(Date.parse(native.ended_at))&&Date.parse(e.at)>=Date.parse(native.ended_at),'registration predates native completion');
 let tail;try{tail=JSON.parse(native.tail);}catch{check(false,'complete structured native tail required');}
 check(hash(tail)===hash(report)&&[e.batch,`${run}-batch-${e.batch}`].includes(String(report.batch)),'native report mismatch');
 const original=report.findings?.[e.index-1];
 check(original?.id===e.id&&original.consumer_id===e.consumer_id&&original.subject_type==='in-run-dependency'&&original.observed_source?.snapshot==='current'&&hash(original)===e.finding_sha256,'wrong original indexed finding');
 const source=ref(root,run,e.observed_source),s=fm(source);
 check(e.observed_source.sha256===original.observed_source.item_sha256&&s.id===e.id&&s.status==='draft'&&s.pipeline_run===run,'wrong exact observed draft archive');
 const consumer=ref(root,run,e.consumer_source),c=fm(consumer),manifest=parse(ref(root,run,e.consumer_manifest));
 const rows=(Array.isArray(manifest)?manifest:manifest.pages??[]).flatMap(p=>p.items??[]).filter(i=>(typeof i==='string'?i:i.id)===e.consumer_id);
 check(e.consumer_manifest.path===`research/${run}-batch-${e.batch}.pages.json`||e.consumer_manifest_original_path===`research/${run}-batch-${e.batch}.pages.json`,'wrong manifest origin');
 check(c.id===e.consumer_id&&c.status==='draft'&&c.pipeline_run===run&&directEdge(c.deps,e.id)&&rows.length===1&&typeof rows[0]==='object'&&directEdge(rows[0].deps,e.id),'missing archived direct source/manifest edge');
 return {original,source,consumer};
}
export function loadUnmanifestedDraftContexts(root,run,batch){
 check(/^[A-Za-z0-9_-]+$/.test(run??'')&&/^[1-9]\d*$/.test(String(batch)),'invalid run/batch');
 const p=registry(run);if(!existsSync(resolve(root,p)))return new Map();
 const doc=parse(bytes(root,p));check(doc.version===1&&doc.run===run&&doc.policy===UNMANIFESTED_POLICY&&doc.authorized_by==='owner'&&typeof doc.authorization==='string'&&doc.authorization.trim().length>=40&&Array.isArray(doc.contexts)&&doc.contexts.length,'invalid registry');
 const homes=manifests(root,run),out=new Map(),seen=new Set();
 for(const e of doc.contexts){
  const evidence=nativeEvidence(root,run,e),key=`reader:${e.batch}:${e.index}`;check(!seen.has(key),'duplicate obligation');seen.add(key);
  check((homes.get(e.id)??[]).length===0,'target acquired a manifest home');
  const own=homes.get(e.consumer_id)??[];check(own.length===1&&own[0].batch===e.batch&&directEdge(own[0].item.deps,e.id),'consumer must have unique actual owned direct manifest edge');
  const current=bytes(root,`items/${e.id}.md`),cfm=fm(current),consumer=bytes(root,`items/${e.consumer_id}.md`),cm=fm(consumer);
  check(cfm.id===e.id&&cfm.status==='draft'&&cfm.pipeline_run===run&&current.equals(evidence.source),'context source edited; ordinary owner repair required');
  check(cm.id===e.consumer_id&&cm.status==='draft'&&cm.pipeline_run===run&&directEdge(cm.deps,e.id),'current direct consumer edge removed');
  check(hash(parse(bytes(root,`research/${run}-reader-findings-${e.batch}.json`)))===hash(parse(ref(root,run,e.findings))),'canonical native findings rewritten');
  if(e.batch!==String(batch))continue;
  const binding={path:p,entry_sha256:hash(e)};
  const carrier={item_sha256:sha(current),context_guard_sha256:itemHashGuard(current.toString()),consumer_item_sha256:sha(consumer),consumer_manifest_sha256:hash(own[0].item),owner_unmanifested_draft_context:binding,unchanged_context:true};
  out.set(key,{entry:e,original:evidence.original,binding,carrier});
 }return out;
}
export function bindUnmanifestedDraftContext(root,run,batch,finding){
 const r=loadUnmanifestedDraftContexts(root,run,batch).get(finding.obligation);check(r,'missing authority');
 const {obligation,...original}=finding;check(hash(original)===hash(r.original),'changed native finding');
 return {...finding,subject_type:'unmanifested-draft-dependency',owner_unmanifested_draft_context:r.binding,observed_sha256:hash({item_sha256:r.entry.observed_source.sha256,owner_unmanifested_draft_context:r.binding}),observation_basis:'exact-observed-source; no producer carrier or manifested home'};
}
export function unmanifestedDraftCarrier(root,run,batch,finding){
 const r=loadUnmanifestedDraftContexts(root,run,batch).get(finding.obligation);check(r,'missing authority');
 const expected=bindUnmanifestedDraftContext(root,run,batch,{...r.original,obligation:finding.obligation});
 for(const k of ['subject_type','id','consumer_id','location','defect','evidence','severity','observed_source','owner_unmanifested_draft_context','observed_sha256','observation_basis'])check(hash(finding[k])===hash(expected[k]),`changed routed ${k}`);
 check(finding.producer_batch===undefined&&finding.producer_pre_snapshot===undefined,'fictitious producer');return r.carrier;
}
export const unmanifestedDraftVerdictAllowed=verdict=>['false_positive','confirmed_nonfatal','escalated'].includes(verdict);
export function unmanifestedDraftClosureEvidence(root,run){
 const p=registry(run);if(!existsSync(resolve(root,p)))return {};
 const doc=parse(bytes(root,p)),closurePath=`research/${run}-step3-closure.json`,closed=existsSync(resolve(root,closurePath))?parse(bytes(root,closurePath)):null;
 // Later verify authenticates frozen evidence, without rereading current source or ownership.
 if(!(closed?.version===3&&closed.run===run&&closed.status==='closed'&&closed.basis==='dependency-ordered-step3a')){
  check(Array.isArray(doc.contexts),'invalid context inventory');for(const b of new Set(doc.contexts.map(e=>e.batch)))loadUnmanifestedDraftContexts(root,run,b);
 }
 const out={[p]:sha(bytes(root,p))};for(const e of doc.contexts??[])for(const k of ['findings','native_result','prompt','reader_report','observed_source','consumer_source','consumer_manifest']){ref(root,run,e[k]);out[e[k].path]=e[k].sha256;}return out;
}
