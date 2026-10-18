// Exact native sibling metadata history; no current mathematical acceptance.
import {existsSync,readFileSync,writeFileSync,readdirSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(v,m)=>{if(!v)throw Error('Step 5 sibling contract history: '+m);};
const phasePattern=/^(?:gate|impact-(?:initial|repeat)(?:-pass-(?:[2-9]|[1-9]\d+))?)$/;
const stageFor=phase=>phase==='gate'?'5.9-repair':phase.startsWith('impact-initial')?'5.2-impact':'5.6-impact';
const dir=(root,run)=>join(root,'research',`${run}-step5-v2`);
const marker=(root,run,phase,round)=>join(dir(root,run),`${phase}-${round}-owner-sibling-contract-history.json`);
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const drained=s=>Object.values(s.dispatches??{}).every(x=>!x.startedAt||Boolean(x.endedAt));
export function validateSiblingContractHistory(root,run,row,{sealed=false}={}){
  if(sealed)need(sealedOrigin(root,run,row,marker(root,run,row.phase,row.round)),'missing exact native collection/certification seal');
  const {sha256,...payload}=row;
  need(/^[a-z0-9][a-z0-9-]*$/.test(run)&&sha256===sha(payload)&&row.version===1
    &&typeof row.origin_repo_root==='string'&&resolve(row.origin_repo_root)===row.origin_repo_root
    &&row.kind==='owner-native-sibling-contract-history'&&row.run===run&&phasePattern.test(row.phase)
    &&Number.isSafeInteger(row.round)&&row.round>0&&row.owner_identity==='/root'&&row.authorized_by==='owner'
    &&row.historical_only===true&&row.current_review_granted===false&&row.native_execution_coverage_adopted===false
    &&typeof row.reason==='string'&&row.reason.trim().length>=80
    &&Number.isFinite(Date.parse(row.recorded_at))&&Date.parse(row.recorded_at)<=Date.now()&&Array.isArray(row.carriers)&&row.carriers.length>0,
    'invalid explicit historical envelope');
  const bound=file=>{
    const p=resolve(root,file),research=realpathSync(join(root,'research'))+'/';
    need(p.startsWith(resolve(root,'research')+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&realpathSync(p).startsWith(research),'nonregular/outside research evidence');
    const bytes=readFileSync(p,'utf8');need(row.bindings?.[relative(root,p)]===sha(bytes),'changed/missing exact binding: '+file);return bytes;
  };
  const operational=file=>new RegExp(`^research/${run}-dispatch/alpha-repair-step5-v2-${row.phase}-r${row.round}-u[1-9]\\d*\\.attempt-[1-9]\\d*\\.(?:log|prompt\\.md)$`).test(file);
  for(const file of Object.keys(row.bindings??{}))if(!sealed||!operational(file))bound(file);
  const state=JSON.parse(bound(row.creation_state));
  need(state.run===run&&state.stage===stageFor(row.phase)&&state.paused===true&&drained(state)
    &&(state.stageRounds?.[state.stage]??1)===row.round,
    'creation archive is not a paused drained own repair wave');
  const packPath=relative(root,join(dir(root,run),`${row.phase}-${row.round}.json`));
  const packBytes=bound(packPath),pack=JSON.parse(packBytes);
  need(pack.run===run&&pack.phase===row.phase&&pack.round===row.round&&Array.isArray(pack.units)
    &&new Set(pack.units).size===pack.units.length,'wrong native wave pack');
  const natives=new Map();
  const native=unit=>{
    if(natives.has(unit))return natives.get(unit);
    need(typeof unit==='string'&&pack.units.includes(unit)&&Array.isArray(pack.assignments?.[unit]),'unassigned native unit');
    const label=`step5-v2-${row.phase}-r${row.round}-u${unit}`;
    const report=JSON.parse(bound(relative(root,join(dir(root,run),`${label}.json`))));
    const dispatchBase=join('research',`${run}-dispatch`,`alpha-repair-${label}`);
    const stable=bound(`${dispatchBase}.result.json`),result=JSON.parse(stable);
    need(Number.isSafeInteger(result.attempt)&&result.attempt>0,'invalid native attempt');
    const stem=`${dispatchBase}.attempt-${result.attempt}`,immutable=bound(`${stem}.result.json`);
    const log=sealed?null:bound(`${stem}.log`),prompt=sealed?null:bound(`${stem}.prompt.md`);
    need([`${stem}.log`,`${stem}.prompt.md`].every(p=>/^[a-f0-9]{64}$/.test(row.bindings?.[p]??'')),'missing original operational hashes');
    need(stable===immutable&&result.evidence_tag===`.attempt-${result.attempt}`
      &&resolve(root,result.log??'')===resolve(row.origin_repo_root,`${stem}.log`)
      &&resolve(root,result.prompt??'')===resolve(row.origin_repo_root,`${stem}.prompt.md`)
      &&result.run===run&&result.role==='alpha-repair'&&result.label===label&&same(result.covers,[unit])
      &&result.runner==='codex'&&result.model==='gpt-6.1-sol'&&result.provider_effort==='high'
      &&result.ok===true&&result.exit_code===0&&result.process_exit_code===0&&result.timed_out===false
      &&result.terminal_summary?.task_completed===true&&result.terminal_summary.task_aborted===false
      &&result.terminal_summary.final_response_present===true&&result.terminal_summary.error_events===0
      &&Number.isFinite(Date.parse(result.started_at))&&Number.isFinite(Date.parse(result.ended_at))
      &&Date.parse(result.started_at)<=Date.parse(result.ended_at)&&Date.parse(result.ended_at)<=Date.parse(row.recorded_at)
      &&report.run===run&&report.phase===row.phase&&report.round===row.round&&String(report.unit)===unit
      &&report.input_sha256===sha(pack)
      &&(sealed||(prompt.includes(`run: ${run}\nrole: alpha-repair\nlabel: ${label}\ncovers: ${unit}\noutput: ${relative(root,join(dir(root,run),`${label}.json`))}\n`)
      &&prompt.includes(`input_sha256:"${sha(pack)}"`)&&log.includes('\nexec\n'))),
      'not the exact successful native sibling origin');
    const value={report,result,log};natives.set(unit,value);return value;
  };
  const seen=new Set();
  for(const carrier of row.carriers){
    need(new RegExp(`^research/${run}-batch-[1-9]\\d*\\.proof-contracts\\.json$`).test(carrier.path)
      &&!seen.has(carrier.path),'duplicate/noncontract carrier');seen.add(carrier.path);
    const oldBytes=bound(carrier.archive),afterBytes=bound(carrier.current_archive);
    need(sha(oldBytes)===carrier.original_sha256&&sha(afterBytes)===carrier.current_sha256,'archive hash mismatch');
    const before=JSON.parse(oldBytes),after=JSON.parse(afterBytes),live=sealed?null:read(resolve(root,carrier.path));
    const origin=native(carrier.origin_unit),successor=native(carrier.successor_unit);
    need(carrier.origin_unit!==carrier.successor_unit
      &&origin.report.supporting_evidence?.[carrier.path]===carrier.original_sha256
      &&successor.report.supporting_evidence?.[carrier.path]===carrier.current_sha256
      &&Date.parse(origin.result.ended_at)<=Date.parse(successor.result.ended_at),
      'missing ordered exact native supporting snapshots');
    const protectedIds=pack.assignments[carrier.origin_unit],siblings=pack.assignments[carrier.successor_unit];
    need(protectedIds.every(id=>!siblings.includes(id)),'overlapping native assignments');
    const unchangedSource=(unit,id)=>{
      need(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),'invalid assigned source ID');
      const n=native(unit),reviews=(n.report.reviews??[]).filter(r=>r.id===id);
      need(typeof carrier.source_archives?.[id]==='string','missing source archive');
      const source=bound(carrier.source_archives[id]);
      need(reviews.length===1&&reviews[0].uncertain===false&&reviews[0].disposition==='unaffected'
        &&reviews[0].metadata_repair_only===true&&reviews[0].post_sha256===pack.before[id]
        &&itemHashGuard(source)===pack.before[id]&&/^[a-f0-9]{64}$/.test(reviews[0].review_context_sha256??''),
        'source-changing or incomplete native metadata-only review');
      need(sealed||readFileSync(join(root,'items',`${id}.md`),'utf8')===source,
        'missing exact current source archive');
    };
    for(const id of protectedIds){unchangedSource(carrier.origin_unit,id);
      need(before.contracts?.[id]&&same(before.contracts[id],after.contracts?.[id])
        &&(sealed||same(before.contracts[id],live.contracts?.[id])),'origin reviewed contract changed');}
    const substituted=structuredClone(before),deltas=[];
    need(before.contracts&&after.contracts&&same(Object.keys(before.contracts),Object.keys(after.contracts)),
      'contract inventory changed');
    for(const [id,old]of Object.entries(before.contracts)){
      const next=after.contracts[id];if(same(old,next))continue;
      need(siblings.includes(id)&&!protectedIds.includes(id),'non-sibling contract changed');
      unchangedSource(carrier.successor_unit,id);
      if(!same(old.risk_review,next.risk_review)){
        need(!Object.hasOwn(old,'risk_review')&&next.risk_review?.status==='complete'
          &&same(Object.keys(next.risk_review).sort(),['notes','reviewer','status'])
          &&next.risk_review.reviewer===`step5-v2-${row.phase}-r${row.round}-u${carrier.successor_unit}`
          &&typeof next.risk_review.notes==='string'&&next.risk_review.notes.trim().length>=80,
          'not a native complete risk-review addition');
        substituted.contracts[id].risk_review=next.risk_review;deltas.push({id,field:'risk_review'});
      }
      if(!same(old.boundaries,next.boundaries)){
        need(Array.isArray(old.boundaries)&&Array.isArray(next.boundaries)&&old.boundaries.length===next.boundaries.length,
          'boundary inventory changed');
        for(let i=0;i<old.boundaries.length;i++)if(!same(old.boundaries[i],next.boundaries[i])){
          need(typeof old.boundaries[i].evidence==='string'&&typeof next.boundaries[i].evidence==='string'
            &&next.boundaries[i].evidence.trim().length>=40
            &&same({...old.boundaries[i],evidence:next.boundaries[i].evidence},next.boundaries[i]),
            'only existing boundary evidence text may change');
          substituted.contracts[id].boundaries[i].evidence=next.boundaries[i].evidence;
          deltas.push({id,field:`boundaries/${i}/evidence`});
        }
      }
    }
    need(deltas.length>0&&same(substituted,after)&&same(deltas,carrier.metadata_deltas),
      'unbound metadata/envelope delta');
  }
  return row;
}
function sealedOrigin(root,run,row,receiptPath){
  const currentPath=join(dir(root,run),'certification.json');
  if(!existsSync(currentPath))return false;
  const currentBytes=readFileSync(currentPath,'utf8'),cert=JSON.parse(currentBytes),{sha256,...payload}=cert;
  const frozen=join(dir(root,run),`certification-${cert.phase}-${cert.round}.json`);
  if(!existsSync(frozen)||readFileSync(frozen,'utf8')!==currentBytes)return false;
  const binding=(evidence,p)=>Object.entries(evidence??{}).find(([key])=>{
    const local=key.startsWith(row.origin_repo_root+'/')?key.slice(row.origin_repo_root.length+1):key;
    return local===relative(root,p);
  })?.[1];
  if(cert.version!==2||cert.run!==run||!Number.isFinite(Date.parse(cert.at))||Date.parse(cert.at)<Date.parse(row.recorded_at)||sha256!==sha(payload)||!phasePattern.test(cert.phase)||!Number.isSafeInteger(cert.round)||cert.round<1)return false;
  const collectedPath=join(dir(root,run),`${row.phase}-${row.round}-collected.json`);
  if(!existsSync(collectedPath))return false;
  const collectedBytes=readFileSync(collectedPath,'utf8'),collected=JSON.parse(collectedBytes);
  if(binding(cert.evidence,collectedPath)!==sha(collectedBytes)||collected.version!==2||!same(collected.errors,[])||collected.run!==run||collected.phase!==row.phase||collected.round!==row.round)return false;
  const receiptHash=sha(readFileSync(receiptPath,'utf8'));
  if(binding(cert.evidence,receiptPath)!==receiptHash||binding(collected.evidence,receiptPath)!==receiptHash)return false;
  for(const carrier of row.carriers){
    const archive=join(dir(root,run),'supporting-metadata',`${carrier.original_sha256}.json`);
    if(!existsSync(archive)||sha(readFileSync(archive,'utf8'))!==carrier.original_sha256
      ||binding(cert.evidence,archive)!==carrier.original_sha256||binding(collected.evidence,archive)!==carrier.original_sha256)return false;
  }
  for(const [file,hash]of Object.entries(row.bindings??{})){
    if(/\.attempt-[1-9]\d*\.(?:log|prompt\.md)$/.test(file))continue;
    const p=resolve(root,file);if(binding(cert.evidence,p)!==hash||binding(collected.evidence,p)!==hash)return false;
  }
  // No recursive certification verify: exact native retained metadata is
  // rechecked below; the genuine collection/certificate pins this receipt.
  return true;
}
export function supportingSiblingContractHistory(history,path,expected){
  if(!history?.root||!history?.run)return null;
  const {root,run}=history,candidates=[];
  for(const name of readdirSync(dir(root,run)).filter(n=>/^(?:gate|impact-(?:initial|repeat)(?:-pass-(?:[2-9]|[1-9]\d+))?)-[1-9]\d*-owner-sibling-contract-history\.json$/.test(n))){
    const p=join(dir(root,run),name),row=read(p);
    if(!row.carriers?.some(c=>resolve(root,c.path)===resolve(root,path)&&c.original_sha256===expected))continue;
    need(p===marker(root,run,row.phase,row.round),'receipt filename identity mismatch');
    validateSiblingContractHistory(root,run,row,{sealed:sealedOrigin(root,run,row,p)});
    const evidence=Object.fromEntries(Object.entries(row.bindings).filter(([file])=>!/\.attempt-[1-9]\d*\.(?:log|prompt\.md)$/.test(file)).map(([file,hash])=>[resolve(root,file),hash]));
    candidates.push({archive:resolve(root,row.carriers.find(c=>resolve(root,c.path)===resolve(root,path)&&c.original_sha256===expected).archive),marker:p,evidence});
  }
  need(candidates.length<=1,'ambiguous historical support');return candidates[0]??null;
}
export function recordSiblingContractHistory(root,run,payload){
  const statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8'),state=JSON.parse(stateBytes);
  need(state.run===run&&state.stage===stageFor(payload.phase)&&state.paused===true&&drained(state),
    'recording requires paused drained own repair wave');
  const row={...payload,sha256:sha(payload)};validateSiblingContractHistory(root,run,row);
  need(readFileSync(resolve(root,row.creation_state),'utf8')===stateBytes,'creation state is not the actual recording boundary');
  need(!existsSync(join(dir(root,run),`${row.phase}-${row.round}-collected.json`)),'native wave already collected');
  for(const carrier of row.carriers)need(readFileSync(resolve(root,carrier.path),'utf8')===readFileSync(resolve(root,carrier.current_archive),'utf8'),
    'current contract differs at recording');
  const target=marker(root,run,row.phase,row.round);need(!existsSync(target),'immutable history already exists');
  need(readFileSync(statePath,'utf8')===stateBytes,'recording boundary changed');
  writeFileSync(target,JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:target,historical_only:true,current_review_granted:false};
}
