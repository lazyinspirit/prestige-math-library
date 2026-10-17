// Exact historical manifest bytes; current routing is checked by each caller.
import {createHash} from 'node:crypto';
import {readFileSync,lstatSync,existsSync} from 'node:fs';
import {resolve,relative,isAbsolute} from 'node:path';
import {verifyCertification} from './step5-workflow.mjs';
const sha=x=>createHash('sha256').update(x).digest('hex');
const assert=(x,m)=>{if(!x)throw Error(`Step-3 manifest history: ${m}`);};
function bytes(root,p) {
  assert(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\'),'invalid relative path');
  const full=resolve(root,p),rel=relative(resolve(root),full);
  assert(rel&&!rel.startsWith('..')&&!isAbsolute(rel),'escaping path');
  let cursor=resolve(root);for(const part of rel.split('/')){cursor=resolve(cursor,part);assert(!lstatSync(cursor).isSymbolicLink(),'symlink path');}
  assert(lstatSync(full).isFile(),'nonregular carrier');return readFileSync(full);
}
const json=(root,p)=>JSON.parse(bytes(root,p));
function ref(root,r){assert(r&&/^[a-f0-9]{64}$/.test(r.sha256??''),'missing reference');const b=bytes(root,r.path);assert(sha(b)===r.sha256,`changed ${r.path}`);return b;}
function certifiedArchive(root,run,r) {
  const dir=`research/${run}-step5-v2`,archive=`${dir}/supporting-metadata/${r.sha256}.json`;
  const archived=ref(root,{path:archive,sha256:r.sha256});
  const certificate=verifyCertification(root,run,{allowMissing:false});
  assert(['impact-initial','impact-repeat','gate'].includes(certificate.phase)
    &&Number.isSafeInteger(certificate.round)&&certificate.round>0,'historical manifest lacks native certification');
  const frozen=json(root,`${dir}/certification-${certificate.phase}-${certificate.round}.json`);
  assert(JSON.stringify(frozen)===JSON.stringify(certificate),'historical manifest certificate has no exact frozen receipt');
  const binding=(evidence,path)=>Object.entries(evidence??{}).find(([p])=>resolve(root,p)===resolve(root,path))?.[1];
  assert(binding(certificate.evidence,archive)===r.sha256,'manifest archive is not certified');
  let native=false;
  for(const [path,hash] of Object.entries(certificate.evidence??{})) {
    const local=relative(resolve(root),resolve(root,path));
    if(!new RegExp(`^${dir}/(?:impact-initial|impact-repeat|gate)-[1-9]\\d*-collected\\.json$`).test(local))continue;
    const collected=JSON.parse(ref(root,{path:local,sha256:hash}));
    if(binding(collected.evidence,archive)!==r.sha256)continue;
    assert(collected.version===2&&collected.run===run&&['impact-initial','impact-repeat','gate'].includes(collected.phase)
      &&Number.isSafeInteger(collected.round)&&collected.round>0
      &&local===`${dir}/${collected.phase}-${collected.round}-collected.json`,'invalid historical native collection');
    const packPath=`${dir}/${collected.phase}-${collected.round}.json`;
    const pack=JSON.parse(ref(root,{path:packPath,sha256:binding(collected.evidence,packPath)}));
    assert(pack.run===run&&pack.phase===collected.phase&&pack.round===collected.round
      &&Array.isArray(pack.units)&&pack.units.length>0,'invalid historical owner pack');
    for(const unit of pack.units) {
      const label=`step5-v2-${pack.phase}-r${pack.round}-u${unit}`,reportPath=`${dir}/${label}.json`;
      const report=JSON.parse(ref(root,{path:reportPath,sha256:binding(collected.evidence,reportPath)}));
      const resultPath=`research/${run}-dispatch/alpha-repair-${label}.result.json`;
      const result=JSON.parse(ref(root,{path:resultPath,sha256:binding(collected.evidence,resultPath)}));
      assert(report.run===run&&report.phase===pack.phase&&report.round===pack.round&&String(report.unit)===String(unit)
        &&report.input_sha256===sha(JSON.stringify(pack))&&result.run===run&&result.role==='alpha-repair'
        &&result.label===label&&result.ok===true&&result.exit_code===0&&result.timed_out!==true,
        'historical manifest lacks successful native owners');
    }
    native=true;break;
  }
  assert(native,'manifest archive lacks a certified successful native collection');
  return archived;
}
function ownerArchive(root,run,r,route) {
  if(route.kind!=='downstream-consumer')return null;
  const path=`research/${run}-step3-owner-manifest-continuities.json`;
  if(!existsSync(resolve(root,path)))return null;
  const doc=json(root,path);
  assert(doc.version===1&&doc.kind==='owner-step3-historical-manifest-continuity'&&doc.run===run
    &&doc.authorized_by==='owner'&&doc.owner_identity==='/root'&&doc.historical_only===true
    &&doc.native_coverage_adopted===false&&Number.isFinite(Date.parse(doc.recorded_at))
    &&typeof doc.reason==='string'&&doc.reason.trim().length>=80&&Array.isArray(doc.entries),'invalid owner continuity authority');
  const matches=doc.entries.filter(e=>e.original?.path===r.path&&e.route_registry?.path===route.registry
    &&e.route_index===route.index&&e.field===route.field);
  if(!matches.length)return null;
  assert(matches.length===1,'duplicate owner manifest continuity');const e=matches[0];
  assert(e.original.sha256===r.sha256&&e.archive?.path.startsWith(`research/${run}-`)
    &&e.archive.sha256===r.sha256&&e.preimage_origin?.path.startsWith(`research/${run}-`)
    &&e.preimage_origin.sha256===r.sha256&&typeof e.reason==='string'&&e.reason.trim().length>=80,'wrong owner manifest preimage');
  const archived=ref(root,e.archive);assert(ref(root,e.preimage_origin).equals(archived),'original owner capture differs');
  assert(e.origin_receipt?.path.startsWith(`research/${run}-`),'wrong owner provenance path');
  const origin=JSON.parse(ref(root,e.origin_receipt));
  assert(origin.run===run&&origin.authorized_by==='owner'&&origin.owner_identity==='/root'
    &&origin.native_coverage_adopted===false&&origin.bindings?.[r.path]===r.sha256
    &&Date.parse(origin.recorded_at)<=Date.parse(doc.recorded_at),'owner provenance lacks original manifest binding');
  assert(doc.closure?.path===`research/${run}-step3-closure.json`
    &&doc.native_close_result?.path===`research/${run}-dispatch/tool-step3-close.result.json`,'wrong original close evidence');
  const closure=JSON.parse(ref(root,doc.closure)),result=JSON.parse(ref(root,doc.native_close_result));
  assert(closure.version===3&&closure.basis==='dependency-ordered-step3a'&&closure.run===run&&closure.status==='closed'
    &&closure.artifacts?.[r.path]===r.sha256&&closure.artifacts?.[route.registry]===e.route_registry.sha256
    &&result.run===run&&result.role==='tool'&&result.label==='step3-close'&&result.ok===true
    &&Date.parse(result.ended_at)>=Date.parse(closure.closed_at)&&Date.parse(doc.recorded_at)>=Date.parse(result.ended_at),
    'owner continuity lacks genuine original frozen closure');
  const registry=JSON.parse(ref(root,e.route_registry)),original=registry.routes?.[route.index]?.[route.field];
  assert(registry.run===run&&original?.path===r.path&&original.sha256===r.sha256,'changed original route reference');
  assert(doc.creation_state?.path.startsWith(`research/${run}-`),'invalid owner creation snapshot');
  const state=JSON.parse(ref(root,doc.creation_state)),failure=state.stageFailures?.[doc.failure_stage];
  assert(state.run===run&&state.stage==='5.9-repair'&&state.paused===true
    &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt))
    &&['5.8-gate','5.10-gate'].includes(doc.failure_stage)&&failure?.id==='defect-ledger'
    &&failure.ok===false&&Number.isInteger(failure.code)&&failure.code!==0&&doc.failure_sha256===sha(JSON.stringify(failure))
    &&String(failure.output).includes(`downstream consumer route: changed ${r.path}`),
    'owner continuity lacks the exact paused drained native downstream-manifest failure');
  return archived;
}
export function historicalStep3Manifest(root,run,batch,r,route) {
  assert(/^[a-zA-Z0-9_-]+$/.test(run)&&/^[1-9]\d*$/.test(String(batch))
    &&r?.path===`research/${run}-batch-${batch}.pages.json`&&/^[a-f0-9]{64}$/.test(r.sha256??''),'wrong manifest reference');
  const current=bytes(root,r.path);
  if(sha(current)===r.sha256)return {historical:current,current,archived:false};
  assert(route&&Number.isSafeInteger(route.index)&&route.index>=0&&['manifest','consumer_manifest'].includes(route.field)
    &&['required-page','downstream-consumer'].includes(route.kind)
    &&route.registry===`research/${run}-step3-owner-${route.kind}-routes.json`,
    'invalid historical route identity');
  const historical=ownerArchive(root,run,r,route)??certifiedArchive(root,run,r);
  return {historical,current,archived:true};
}
