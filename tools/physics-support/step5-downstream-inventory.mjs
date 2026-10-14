// Explicit root completion of missing topology, never scientific review or edit
// permission. Without an exact current supplement the normal inventory gate fails.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path,'utf8'));
const need = (ok,message) => { if(!ok)throw Error('downstream inventory: '+message); };
const sha = value => /^[a-f0-9]{64}$/.test(value??'');
const sorted = xs => [...xs].sort();
const equal = (a,b) => JSON.stringify(a)===JSON.stringify(b);
const edges = rows => rows.map(row=>({id:row.id,published:row.published===true,
  suppliers:sorted(row.suppliers??[]),paths:(row.paths??[]).map(path=>[...path]).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)))}))
  .sort((a,b)=>a.id.localeCompare(b.id));

export function ownerDownstreamInventory(root,run,phase,round,{pack,restated,required,missing,reported,current,statements,frontier}) {
  const dir=join(root,'research',run+'-step5-v2'),pointerPath=join(dir,'owner-downstream-inventory.json');
  if(!existsSync(pointerPath))return null;
  need(['initial','repeat'].includes(phase),'only original adjudication inventory is eligible');
  const pointer=read(pointerPath),evidence={},research=realpathSync(join(root,'research'));
  need(pointer.version===1&&pointer.run===run,'invalid advertisement');
  const bound=ref=>{
    need(ref&&typeof ref.path==='string'&&!isAbsolute(ref.path)&&sha(ref.sha256),'invalid evidence reference');
    const file=resolve(root,ref.path),rel=relative(research,realpathSync(file));
    need(!isAbsolute(rel)&&!rel.startsWith('..')&&rel.startsWith(run+'-'),'evidence is not run-local');
    need(hash(readFileSync(file))===ref.sha256,'evidence changed: '+ref.path);
    evidence[file]=ref.sha256;return file;
  };
  const supplementPath=bound(pointer.supplement),supplement=read(supplementPath);
  need(resolve(supplementPath,'..')===resolve(dir)
    &&/^downstream-inventory-[a-zA-Z0-9._-]+\.json$/.test(basename(supplementPath)),'supplement must be immutable workflow evidence');
  need(supplement.version===1&&supplement.run===run&&supplement.phase===phase&&supplement.round===round
    &&supplement.reviewer==='/root'&&supplement.authority==='routing-only'
    &&supplement.scientific_review===false&&supplement.source_edit_authority===false,'wrong identity or authority');
  const diagnosisPath=bound(supplement.diagnosis),diagnosis=read(diagnosisPath);
  need(diagnosis.version===1&&diagnosis.run===run&&diagnosis.phase===phase&&diagnosis.round===round,'wrong diagnosis');
  need(bound(diagnosis.original_pack)===join(dir,phase+'-'+round+'.json'),'wrong original pack');
  need(Array.isArray(diagnosis.reports)&&diagnosis.reports.length===pack.units.length,'missing original reports');
  const expected=pack.units.map(unit=>join(dir,'step5-v2-'+phase+'-r'+round+'-u'+unit+'.json'));
  const originals=diagnosis.reports.map(bound);
  need(new Set(originals).size===expected.length&&equal(sorted(originals),sorted(expected)),'original report selection differs');
  need(equal(sorted(diagnosis.restated??[]),sorted(restated))&&diagnosis.required_count===required.length
    &&diagnosis.reported_count===reported.length,'current interface or inventory selection differs');
  need(Array.isArray(diagnosis.missing)&&Array.isArray(supplement.additions)&&missing.length>0
    &&new Set(supplement.additions.map(row=>row.id)).size===missing.length
    &&equal(edges(diagnosis.missing),edges(missing))&&equal(edges(supplement.additions),edges(missing)),
    'supplement must equal the complete actual missing direct-edge inventory');
  for(const row of missing)need(frontier.has(row.id)&&row.published!==true
    &&row.suppliers.length>0&&row.suppliers.every(id=>restated.includes(id))
    &&row.paths.every(path=>path.length===2&&path[1]===row.id&&row.suppliers.includes(path[0])),
    'nonfrontier or nonlocal topology target');
  const guards=diagnosis.source_guards??{},consumers=diagnosis.consumer_guards??{};
  need(equal(sorted(Object.keys(guards)),sorted(restated)),'source guards do not cover exact restated interfaces');
  for(const id of new Set([...restated,...missing.map(row=>row.id)])){
    const guard=guards[id]??consumers[id];
    need(guard&&sha(guard.content_sha256)&&sha(guard.statement_sha256)&&sha(guard.raw_sha256)
      &&guard.content_sha256===current[id]&&guard.statement_sha256===statements[id]
      &&guard.raw_sha256===hash(readFileSync(join(root,'items',id+'.md'))),'stale source or consumer guard: '+id);
  }
  const diagnostic='missing downstream inventory: '+missing[0].id,failure=read(bound(supplement.failure_evidence));
  need(Array.isArray(failure)&&failure.some(row=>row.type==='gate'&&row.id==='step5-wave-evidence'
    &&row.ok===false&&Number.isInteger(row.code)&&row.code!==0&&row.why===diagnostic
    &&typeof row.output==='string'&&row.output.trim()===diagnostic),'missing actual inventory gate failure');
  for(const ref of supplement.supporting_evidence??[])bound(ref);
  const stateDir=resolve(root,pointer.state_dir??'.physics-autopilot/'+run);
  need(relative(root,stateDir).startsWith('.physics-autopilot/')&&basename(stateDir)===run,'wrong state directory');
  const state=read(join(stateDir,'state.json')),stage=phase==='initial'?'5.1-adjudicate':'5.5-adjudicate';
  need(state.run===run&&state.stage===stage&&!state.finishedAt&&!state.stages?.[stage]?.doneAt
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||row.endedAt),'wrong native stage or active writer');
  need(!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'shared metadata writer');
  const frontierPath=join(dir,'frontier.json');evidence[frontierPath]=hash(readFileSync(frontierPath));
  return {ids:missing.map(row=>row.id),evidence,attribution:{
    reviewer:'/root',authority:'routing-only',supplement:{path:supplementPath,sha256:pointer.supplement.sha256},
    diagnosis:supplement.diagnosis,additions:edges(missing),scientific_review:false,source_edit_authority:false,
    reviews_added:0,decisions_added:0}};
}
