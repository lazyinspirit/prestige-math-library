// A genuine open root finding can request another native scientific owner pass.
// This is neither a formatting waiver nor outside authorship or certification.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { itemHashGuard } from './item-hash.mjs';

const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const need=(ok,message)=>{if(!ok)throw Error('scientific repair: '+message);};
const sha=value=>/^[a-f0-9]{64}$/.test(value??'');
const canonical=value=>Array.isArray(value)?value.map(canonical):value&&typeof value==='object'
  ?Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonical(value[key])])):value;
const equal=(a,b)=>JSON.stringify(canonical(a))===JSON.stringify(canonical(b));
const sorted=xs=>[...xs].sort();
const evidenceRow=row=>row&&typeof row.reason==='string'&&row.reason.trim().length>=40&&row.uncertain===false
  &&Array.isArray(row.source_urls)&&row.source_urls.every(url=>typeof url==='string'&&/^https:\/\//.test(url))
  &&(row.source_urls.length>0||row.familiar===true);

export function ownerScientificRepair(root,run,phase,round,progress,current,items,frontier) {
  const dir=join(root,'research',run+'-step5-v2'),pointerPath=join(dir,'owner-scientific-repair-request.json');
  if(!existsSync(pointerPath))return null;
  const pointer=read(pointerPath),evidence={},research=realpathSync(join(root,'research'));
  need(pointer.version===1&&pointer.run===run,'invalid advertisement');
  const bound=ref=>{
    need(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&sha(ref.sha256),'invalid evidence reference');
    const path=resolve(root,ref.path),rel=relative(research,realpathSync(path));
    need(!isAbsolute(rel)&&!rel.startsWith('..')&&rel.startsWith(run+'-'),'evidence is not run-local');
    need(hash(readFileSync(path))===ref.sha256,'evidence changed: '+ref.path);
    evidence[path]=ref.sha256;return path;
  };
  const requestPath=bound(pointer.request),request=read(requestPath);
  need(resolve(requestPath,'..')===resolve(dir)&&/^owner-scientific-repair-[a-zA-Z0-9._-]+\.json$/.test(basename(requestPath))
    &&basename(requestPath)!=='owner-scientific-repair-request.json','request must be immutable workflow evidence');
  const recorded=(progress.scientific_repairs??[]).find(row=>row.request.path===requestPath);
  if(recorded){need(recorded.request.sha256===pointer.request.sha256,'recorded request changed');return null;}
  if(request.phase!==phase||request.round!==round){
    const prior=join(dir,request.phase+'-'+request.round+'-progress.json');
    need(existsSync(prior)&&read(prior).scientific_repairs?.some(row=>row.request.path===requestPath
      &&row.request.sha256===pointer.request.sha256),'request targets another unconsumed phase');return null;
  }
  need(request.version===1&&request.run===run&&request.reviewer==='/root'
    &&['impact-initial','impact-repeat'].includes(phase)&&Number.isInteger(round)&&round>0,'invalid root scientific request');
  need(progress.version===2&&progress.run===run&&progress.phase===phase&&progress.round===round&&!progress.activeMaintenance,'wrong owner wave');
  need(Array.isArray(request.subjects)&&request.subjects.length===2&&new Set(request.subjects).size===2
    &&typeof request.supplier==='string'&&typeof request.consumer==='string'&&request.supplier!==request.consumer
    &&equal(sorted(request.subjects),sorted([request.supplier,request.consumer]))
    &&request.subjects.every(id=>frontier.has(id)),'request must name the exact coupled frontier pair');
  const graph=new Map(items.map(row=>[row.id,row]));
  need(graph.get(request.supplier)?.deps.includes(request.consumer)
    &&[...(graph.get(request.consumer)?.deps??[]),...(graph.get(request.consumer)?.references??[])].includes(request.supplier),
    'missing actual coupled definition/supplier interface');
  const recordData=read(bound(request.root_finding?.record)),record=Array.isArray(recordData)&&recordData.length===1?recordData[0]:recordData;
  need(record?.run===run&&record.defect_id===request.root_finding.defect_id&&record.disposition==='open'
    &&record.subject===request.consumer,'root finding is not the bound open consumer defect');
  const ledgerRows=readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8')
    .split(/\r?\n/).filter(Boolean).map(line=>JSON.parse(line));
  const exactRows=ledgerRows.filter(row=>row.defect_id===record.defect_id);
  const superseded=ledgerRows.some(row=>Array.isArray(row.supersedes)
    ?row.supersedes.includes(record.defect_id):row.supersedes===record.defect_id);
  need(exactRows.length===1&&equal(exactRows[0],record)&&!superseded,
    'canonical root finding is absent, duplicated, changed or superseded');
  const outcomePath=bound(request.native_outcome),outcome=read(outcomePath);
  need(outcome.run===run&&outcome.round===round&&String(outcome.unit)==='1'&&progress.passes.includes(outcome.phase)
    &&outcomePath===join(dir,'step5-v2-'+outcome.phase+'-r'+round+'-u1.json'),'wrong actual native outcome');
  const collectedPath=join(dir,outcome.phase+'-'+round+'-collected.json');
  need(existsSync(collectedPath)&&read(collectedPath).evidence?.[outcomePath]===request.native_outcome.sha256,
    'native outcome lacks completed authenticated collection');
  evidence[collectedPath]=hash(readFileSync(collectedPath));
  need(outcome.reviews?.some(row=>row.id===request.supplier&&row.post_sha256===current[request.supplier]&&evidenceRow(row)),
    'native partial scientific outcome does not match the current supplier');
  need(Array.isArray(request.targets)&&request.targets.length===2
    &&equal(sorted(request.targets.map(row=>row.id)),sorted(request.subjects)),'wrong exact target guards');
  for(const target of request.targets){
    const before=bound(target.before_source),source=join(root,'items',target.id+'.md'),text=readFileSync(source,'utf8');
    need(sha(target.before_content_sha256)&&sha(target.before_raw_sha256)&&sha(target.before_statement_sha256)
      &&target.before_content_sha256===current[target.id]
      &&target.before_statement_sha256===graph.get(target.id)?.statement_sha256
      &&target.before_raw_sha256===hash(readFileSync(source))
      &&itemHashGuard(readFileSync(before,'utf8'))===target.before_content_sha256
      &&readFileSync(before,'utf8')===text,'stale preserved target: '+target.id);
  }
  need(Array.isArray(request.evidence)&&request.evidence.length>0&&Array.isArray(request.proposals)&&request.proposals.length>0
    &&typeof request.reason==='string'&&request.reason.trim().length>=40,'missing science/proposal evidence');
  request.evidence.forEach(bound);request.proposals.forEach(bound);
  const stateDir=resolve(root,pointer.state_dir??'.physics-autopilot/'+run);
  need(relative(root,stateDir).startsWith('.physics-autopilot/')&&basename(stateDir)===run,'wrong state directory');
  const state=read(join(stateDir,'state.json')),stage=phase==='impact-initial'?'5.2-impact':'5.6-impact';
  need(state.run===run&&state.stage===stage&&!state.finishedAt&&!state.stages?.[stage]?.doneAt
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||row.endedAt),'wrong stage or active writer');
  need(!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'shared metadata writer');
  need(!existsSync(join(dir,'certification-'+phase+'-'+round+'.json')),'wave already certified');
  const latestCertificate=join(dir,'certification.json');
  if(existsSync(latestCertificate)){const cert=read(latestCertificate);need(cert.phase!==phase||cert.round!==round,'wave already certified');}
  return {request:{path:requestPath,sha256:pointer.request.sha256},payload:request,evidence,
    subjects:[request.supplier,request.consumer]};
}

/** Validate before any immutable pass receipt is created. Only unit 1 owns the
 * requested finding; other lanes retain their ordinary pending assignments. */
export function scientificRepairCompletion(pack,reports,current,matches) {
  const repair=pack.scientific_repair;if(!repair)return null;
  const request=repair.payload,report=reports.find(row=>String(row.unit)==='1');
  need(report&&equal(sorted(pack.assignments['1']),sorted(request.subjects)),'scientific pair lost its single native owner');
  for(const id of request.subjects){
    const review=report.reviews?.find(row=>row.id===id);
    need(current[id]!==pack.before[id]&&review?.disposition==='repaired'
      &&review.post_sha256===current[id]&&matches(review),'missing genuine changed-source current review: '+id);
  }
  const resolutions=report.root_finding_resolutions;
  need(Array.isArray(resolutions)&&resolutions.length===1&&resolutions[0].defect_id===request.root_finding.defect_id
    &&resolutions[0].status==='fixed'&&equal(sorted(resolutions[0].subjects??[]),sorted(request.subjects))
    &&evidenceRow(resolutions[0]),'missing explicit native resolution of the actual root finding');
  return {request:repair.request,subjects:request.subjects,root_finding_resolutions:resolutions,
    native_unit:'1',source_review:true,canonical_ledger_closure:false,recertification:false};
}
