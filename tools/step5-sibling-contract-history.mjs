// Exact native sibling metadata history; no current mathematical acceptance.
import { sol61Effort } from './math-workflow-effort.mjs';
import {existsSync,readFileSync,writeFileSync,readdirSync,lstatSync,realpathSync,mkdirSync} from 'node:fs';
import {resolve,join,relative,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
import {sourceSectionText,splitFrontmatter,numberedProofSteps} from './facts-block.mjs';
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
  if(row.version===2)return validateRecoveredSiblingHistory(root,run,row);
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
      &&result.runner==='codex'&&result.model==='gpt-6.1-sol'&&result.provider_effort===sol61Effort(root,result.run)
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
  if(payload.version===2)return recordRecoveredSiblingHistory(root,run,payload);
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

// This recovered-byte mode authenticates one real historical handoff. It grants
// no current metadata, source review, execution or certification credit.
const recoveredRun='inverse-problems-knot-theory-all-109-2026-10-19';
const recoveredMode='exact-first-impact-six-recovered-preimages';
const recoveredPaths=new Map([
 ['45',[
  ['lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability','citations',2,'quote'],
  ['thm-ip-calderon-logarithmic-l2-stability','citations',1,'quote'],
  ['lem-ip-calderon-rough-alessandrini-and-quotient-norm','citations',0,'quote']]],
 ['48', [['prop-ip-finite-unrolling-does-not-imply-regularization-convergence','citations',0,'quote']]],
 ['73',[
  ['lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','citations',0,'quote'],
  ['lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','citations',4,'quote'],
  ['lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy','derivations',0,'claim'],
  ['lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy','citations',0,'quote'],
  ['lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy','citations',1,'quote']]],
 ['75',[
  ['thm-levine-algebraic-concordance-surjection-proof','citations',11,'quote'],
  ['thm-levine-algebraic-concordance-surjection-proof','citations',14,'source'],
  ['thm-levine-algebraic-concordance-surjection-proof','citations',14,'source_section'],
  ['thm-levine-algebraic-concordance-surjection-proof','citations',14,'quote']]],
 ['91', [['lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes','citations',1,'quote']]],
 ['99', [['thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope','citations',7,'quote']]],
].map(([batch,paths])=>[`research/${recoveredRun}-batch-${batch}.proof-contracts.json`,paths.map(p=>['contracts',...p])]));
const normalized=x=>String(x??'').replace(/\s+/g,' ').trim();
const slotValue=(object,path)=>path.reduce((value,key)=>value?.[key],object);
const setSlotValue=(object,path,value)=>{let target=object;for(const key of path.slice(0,-1)){need(target?.[key]!==undefined,'missing finite metadata path');target=target[key];}target[path.at(-1)]=value;};
function recoveredState(state,run){
 need(state.run===run&&state.stage==='5.2-impact'&&state.paused===true&&drained(state)
  &&(state.stageRounds?.['5.2-impact']??1)===1,'requires actual manually paused drained first impact boundary');
}
function recoveredNative(root,run,unit,bound,state){
 const phase='impact-initial',label=`step5-v2-${phase}-r1-u${unit}`,rp=relative(root,join(dir(root,run),`${label}.json`));
 const dp=`research/${run}-dispatch/alpha-repair-${label}.result.json`,raw=bound(dp),result=JSON.parse(raw),report=JSON.parse(bound(rp));
 need(Number.isSafeInteger(result.attempt)&&result.attempt>0,'invalid original native attempt');
 const stem=dp.replace(/\.result\.json$/,`.attempt-${result.attempt}`),prompt=bound(stem+'.prompt.md'),log=bound(stem+'.log');
 const observed=state.dispatches?.[`5.2-impact:${label}`];
 need(result.run===run&&result.role==='alpha-repair'&&result.label===label&&same(result.covers,[unit])
  &&result.runner==='codex'&&result.model==='gpt-6.1-sol'&&result.provider_effort===sol61Effort(root,run)
  &&result.ok===true&&result.exit_code===0&&result.process_exit_code===0&&result.timed_out===false
  &&result.terminal_summary?.task_completed===true&&result.terminal_summary.task_aborted===false
  &&result.terminal_summary.final_response_present===true&&result.terminal_summary.error_events===0
  &&result.evidence_tag===`.attempt-${result.attempt}`&&raw===bound(stem+'.result.json')
  &&typeof result.session_id==='string'&&result.session_id.length>0
  &&resolve(root,result.session_home??'')===resolve(root,'.autopilot',run,'step5-reader-owner-sessions',`u${unit}`)
  &&resolve(root,result.prompt??'')===resolve(root,stem+'.prompt.md')&&resolve(root,result.log??'')===resolve(root,stem+'.log')
  &&observed?.stage==='5.2-impact'&&observed.role===result.role&&observed.label===label
  &&observed.attempt===result.attempt&&observed.lastExitOk===true&&same(observed.covers,[unit])
  &&Number.isFinite(Date.parse(result.started_at))&&Number.isFinite(Date.parse(result.ended_at))
  &&Date.parse(observed.startedAt)<=Date.parse(result.started_at)&&Date.parse(result.started_at)<=Date.parse(result.ended_at)
  &&Date.parse(result.ended_at)<=Date.parse(observed.endedAt),'not genuine retained original native execution');
 need(prompt.includes(`run: ${run}\nrole: alpha-repair\nlabel: ${label}\ncovers: ${unit}\noutput: ${rp}\n`)
  &&prompt.includes(`input_sha256:"${report.input_sha256}"`)&&log.includes('\nexec\n')
  &&log.match(/^session id:\s*(\S+)\s*$/m)?.[1]===result.session_id
  &&log.includes('model: gpt-6.1-sol\n')&&log.includes(`reasoning effort: ${sol61Effort(root,run)}\n`), 'original prompt/log/session identity differs');
 const end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);need(start>=0&&end>start,'missing actual native final');
 const final=log.slice(start+7,end).trim();let output;try{output=JSON.parse(final);}catch{}
 if(output)need(output.run===run&&output.phase===phase&&output.round===1&&String(output.unit)===unit
  &&output.input_sha256===report.input_sha256&&Object.entries(output).every(([k,v])=>same(report[k],v)),'structured final differs from original report');
 else need([...final.matchAll(/\[[^\]\n]+\]\(([^)\n]+)\)/g)].some(m=>resolve(root,m[1])===resolve(root,rp)), 'native prose final lacks exact original report link');
 need(report.run===run&&report.phase===phase&&report.round===1&&String(report.unit)===unit,'wrong original report');
 return {report,result,log};
}
function validateRecoveredSiblingHistory(root,run,row,{virtual=null,current=false}={}){
 root=resolve(root);const {sha256,...payload}=row;
 need(run===recoveredRun&&row.version===2&&row.kind==='owner-native-recovered-sibling-contract-history'
  &&row.mode===recoveredMode&&sha256===sha(payload)&&row.run===run&&row.phase==='impact-initial'&&row.round===1
  &&row.origin_repo_root===root&&row.owner_identity==='/root'&&row.authorized_by==='owner'
  &&row.historical_only===true&&row.current_review_granted===false&&row.native_execution_coverage_adopted===false
  &&row.original_report_rewritten===false&&row.current_snapshot_origin==='owner-recording-not-native-support-pins'
  &&typeof row.reason==='string'&&row.reason.trim().length>=80&&Number.isFinite(Date.parse(row.recorded_at))
  &&Date.parse(row.recorded_at)<=Date.now(),'invalid exact recovered-history envelope');
 const bound=file=>{
  const p=resolve(root,file),key=relative(root,p);need(p.startsWith(resolve(root,'research')+'/'),'outside research recovered evidence');
  const bytes=virtual?.get(p)??(()=>{need(lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
   &&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/'),'nonregular recovered evidence');return readFileSync(p,'utf8');})();
  need(row.bindings?.[key]===sha(bytes),'changed/missing recovered binding: '+file);return bytes;
 };
 for(const file of Object.keys(row.bindings??{}))bound(file);
 const state=JSON.parse(bound(row.creation_state));recoveredState(state,run);
 const pack=JSON.parse(bound(relative(root,join(dir(root,run),'impact-initial-1.json'))));
 need(pack.run===run&&pack.phase==='impact-initial'&&pack.round===1&&pack.repair_scope==='frontier'
  &&same(pack.units,['1','2','3'])&&same(Object.keys(pack.assignments).sort(),['1','2','3'])
  &&pack.assignments['1'].length===128&&pack.assignments['3'].length===126,'wrong exact original owner pack');
 const origin=recoveredNative(root,run,'1',bound,state),successor=recoveredNative(root,run,'3',bound,state);
 need(origin.report.input_sha256===sha(pack)&&successor.report.input_sha256===sha(pack)
  &&origin.report.reviews.length===128&&same(origin.report.reviews.map(r=>r.id).sort(),pack.assignments['1'].slice().sort())
  &&successor.report.reviews.length===125&&same(successor.report.reviews.map(r=>r.id).sort(),pack.assignments['3']
   .filter(id=>id!=='lem-kontsevich-configuration-integral-convergence-needle-estimates').slice().sort())
  &&same(origin.report.decisions,[])&&same(successor.report.decisions,[])
  &&same(origin.report.created_items,[])&&same(successor.report.created_items,[])
  &&Date.parse(origin.result.ended_at)<=Date.parse(successor.result.ended_at)
  &&Date.parse(successor.result.ended_at)<=Date.parse(row.recorded_at),'wrong ordered original sibling evidence');
 need(Array.isArray(row.carriers)&&same(row.carriers.map(c=>c.path).sort(),[...recoveredPaths.keys()].sort()),'requires exactly all six recovered carriers');
 need(Object.keys(successor.report.supporting_evidence??{}).length===2
  &&Object.keys(successor.report.supporting_evidence).every(p=>!recoveredPaths.has(p)), 'do not manufacture successor supporting pins');
 const loggedWrites=successor.log.split('\n').flatMap(line=>{try{const v=JSON.parse(line);return v.files===31&&Array.isArray(v.paths)?v.paths:[];}catch{return [];}});
 need([...recoveredPaths.keys()].every(p=>loggedWrites.includes(p)),'missing actual native sibling write output');
 const seenSources=new Set();
 for(const c of row.carriers){
  const beforeBytes=bound(c.archive),afterBytes=bound(c.current_archive),before=JSON.parse(beforeBytes),after=JSON.parse(afterBytes);
  need(c.origin_unit==='1'&&c.successor_unit==='3'&&sha(beforeBytes)===c.original_sha256
   &&sha(afterBytes)===c.current_sha256&&origin.report.supporting_evidence?.[c.path]===c.original_sha256
   &&c.original_sha256!==c.current_sha256,'recovered bytes do not match exact original native pin');
  if(current)need(readFileSync(resolve(root,c.path),'utf8')===afterBytes,'current carrier changed during recording');
  const copy=structuredClone(before),deltas=[],paths=recoveredPaths.get(c.path);
  for(const path of paths){const old=slotValue(before,path),next=slotValue(after,path);need(old!==undefined&&next!==undefined&&!same(old,next),'missing exact finite metadata delta');
   const id=path[1];need(pack.assignments['3'].includes(id)&&!pack.assignments['1'].includes(id),'metadata delta is not an actual sibling assignment');
   const review=successor.report.reviews.filter(r=>r.id===id),source=bound(row.source_archives?.[id]);
   need(review.length===1&&review[0].uncertain===false&&['repaired','unaffected'].includes(review[0].disposition)
    &&itemHashGuard(source)===review[0].post_sha256,'changed contract lacks actual sibling source review');
   if(current)need(readFileSync(join(root,'items',id+'.md'),'utf8')===source,'source changed during recording');seenSources.add(id);
   if(path[2]==='citations'){
    const citation=after.contracts[id].citations[path[3]],supplier=bound(row.supplier_archives?.[citation.source]);
    const section=sourceSectionText(splitFrontmatter(supplier).body,citation.source_section);
    need(section&&normalized(section).includes(normalized(citation.quote))&&normalized(citation.quote),'after quote does not match captured current supplier section');
    if(current)need(readFileSync(join(root,'items',citation.source+'.md'),'utf8')===supplier,'quoted supplier changed during recording');
   }else{
    const step=numberedProofSteps(splitFrontmatter(source).body).find(s=>s.id===after.contracts[id].derivations[path[3]].step);
    need(step&&normalized(step.claim)===normalized(next),'after derivation is not actual sibling proof step');
   }
   setSlotValue(copy,path,next);deltas.push({path,before:old,after:next});
  }
  need(same(copy,after)&&same(deltas,c.metadata_deltas),'nonfinite or unbound metadata/envelope delta');
 }
 need(same([...seenSources].sort(),Object.keys(row.source_archives??{}).sort()),'extra/missing sibling source archive');
 return row;
}
function recordRecoveredSiblingHistory(root,run,payload,{dryRun=false}={}){
 root=resolve(root);need(run===recoveredRun&&same(Object.keys(payload).sort(),['version','mode','reason','carriers'].sort())
  &&payload.version===2&&payload.mode===recoveredMode,'invalid recovered-history recorder request');
 const statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8');recoveredState(JSON.parse(stateBytes),run);
 const target=marker(root,run,'impact-initial',1);need(!existsSync(target)
  &&!existsSync(join(dir(root,run),'impact-initial-1-collected.json'))
  &&!existsSync(join(dir(root,run),'impact-initial-pass-2-1.json')),'already recorded/collected/continued');
 const virtual=new Map(),bindings={},base=join(dir(root,run),'recovered-sibling-contract-history');
 const bind=file=>{const p=resolve(root,file);bindings[relative(root,p)]=sha(readFileSync(p,'utf8'));};
 const store=(name,text)=>{const p=join(base,name);virtual.set(p,text);bindings[relative(root,p)]=sha(text);return relative(root,p);};
 const creation_state=store('creation-state.json',stateBytes),pack=relative(root,join(dir(root,run),'impact-initial-1.json'));bind(pack);
 const reports={};
 for(const unit of ['1','3']){
  const label=`step5-v2-impact-initial-r1-u${unit}`,rp=relative(root,join(dir(root,run),`${label}.json`)),dp=`research/${run}-dispatch/alpha-repair-${label}.result.json`,n=read(resolve(root,dp));reports[unit]=read(resolve(root,rp));
  for(const p of [rp,dp,dp.replace(/\.result\.json$/,`.attempt-${n.attempt}.result.json`),n.prompt,n.log])bind(p);
 }
 const sources={},suppliers={},carriers=[];
 need(Array.isArray(payload.carriers)&&same(payload.carriers.map(c=>c.path).sort(),[...recoveredPaths.keys()].sort()),'exact six carrier request required');
 for(const c of payload.carriers){
  need(same(Object.keys(c).sort(),['path','archive','current_archive'].sort()),'unknown recovered carrier request field');
  bind(c.archive);bind(c.current_archive);const after=read(resolve(root,c.current_archive)),deltas=[];
  const before=read(resolve(root,c.archive));
  for(const path of recoveredPaths.get(c.path)){
   const id=path[1];sources[id]??=store('sources/'+id+'.md',readFileSync(join(root,'items',id+'.md'),'utf8'));
   if(path[2]==='citations'){const source=after.contracts[id].citations[path[3]].source;suppliers[source]??=store('suppliers/'+source+'.md',readFileSync(join(root,'items',source+'.md'),'utf8'));}
   deltas.push({path,before:slotValue(before,path),after:slotValue(after,path)});
  }
  carriers.push({...c,origin_unit:'1',successor_unit:'3',original_sha256:sha(readFileSync(resolve(root,c.archive),'utf8')),
   current_sha256:sha(readFileSync(resolve(root,c.current_archive),'utf8')),metadata_deltas:deltas});
 }
 const body={version:2,kind:'owner-native-recovered-sibling-contract-history',mode:recoveredMode,run,phase:'impact-initial',round:1,
  origin_repo_root:root,owner_identity:'/root',authorized_by:'owner',historical_only:true,current_review_granted:false,
  native_execution_coverage_adopted:false,original_report_rewritten:false,current_snapshot_origin:'owner-recording-not-native-support-pins',
  reason:payload.reason,recorded_at:new Date().toISOString(),creation_state,bindings,source_archives:sources,supplier_archives:suppliers,carriers};
 const row={...body,sha256:sha(body)};validateRecoveredSiblingHistory(root,run,row,{virtual,current:true});
 need(readFileSync(statePath,'utf8')===stateBytes,'actual manual owner pause changed');
 if(dryRun)return {dry_run:true,path:target,carriers:carriers.length,metadata_deltas:carriers.reduce((n,c)=>n+c.metadata_deltas.length,0),historical_only:true,current_review_granted:false};
 for(const [path,text]of virtual){mkdirSync(dirname(path),{recursive:true});if(existsSync(path))need(readFileSync(path,'utf8')===text,'immutable recovered archive conflict');else writeFileSync(path,text,{flag:'wx'});}
 writeFileSync(target,JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:target,carriers:carriers.length,historical_only:true,current_review_granted:false};
}
export function previewRecoveredSiblingContractHistory(root,run,payload){return recordRecoveredSiblingHistory(root,run,payload,{dryRun:true});}
