// Work admission only: immutable native reports and ordinary current reviews retain their roles.
import {existsSync,readFileSync,readdirSync,lstatSync,realpathSync,mkdirSync,writeFileSync} from 'node:fs';
import {join,resolve,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {validateFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {MODELS} from './models.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const need=(x,m)=>{if(!x)throw Error(`Step 5 initial scope finding: ${m}`);};
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const drained=s=>Object.values(s.dispatches??{}).every(x=>!x.startedAt||Boolean(x.endedAt));
const read=p=>JSON.parse(readFileSync(p,'utf8'));
export const initialScopeFindingPath=(root,run)=>join(root,'research',`${run}-step5-initial-scope-findings.json`);
export function checkFrozenInitialScopeFindingInput(root,run,pack) {
  const p=initialScopeFindingPath(root,run),bound=pack.input_evidence?.[p];
  need(existsSync(p)?lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()&&bound===hash(readFileSync(p,'utf8')):!bound,'registry added, removed or changed after first impact freeze');
}
function validate(root,run,row,{requireCollection=true,virtual=new Map()}={}) {
  const dir=join(root,'research',`${run}-step5-v2`),dispatchDir=join(root,'research',`${run}-dispatch`);
  need(!existsSync(join(dir,'impact-initial-1.json'))&&!readdirSync(dispatchDir).some(x=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(x)), 'first impact pack or execution already exists');
  need(row.version===1&&row.kind==='owner-confirmed-native-initial-scope-findings'&&row.run===run
    &&row.authorized_by==='owner'&&row.owner_identity==='/root'&&row.native_coverage_adopted===false
    &&date(row.recorded_at)&&row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings), 'invalid explicit owner envelope');
  const evidence={};
  const bytes=file=>{
    const p=resolve(root,file);need(p.startsWith(resolve(root,'research')+'/'),'evidence must be inside research');
    if(virtual.has(p))return virtual.get(p);
    need(existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/'),`nonregular/outside evidence: ${file}`);
    return readFileSync(p,'utf8');
  };
  for(const [file,expected]of Object.entries(row.bindings)){
    const p=resolve(root,file);need(/^[a-f0-9]{64}$/.test(expected)&&hash(bytes(p))===expected,`stale binding: ${file}`);evidence[p]=expected;
  }
  const boundText=file=>{const p=resolve(root,file);need(Object.hasOwn(evidence,p),`missing binding: ${file}`);return bytes(p);};
  const bound=file=>JSON.parse(boundText(file));
  const creation=row.creation,archiveDir=join(dir,'initial-scope-findings');
  need(creation?.state_file===relative(root,join(archiveDir,'creation-state.json'))
    &&creation.request_file===relative(root,join(archiveDir,'owner-request.json')),'wrong creation archive paths');
  const created=bound(creation.state_file),request=bound(creation.request_file);
  const {creation:ignored,bindings:ignoredBindings,...payload}=row,{bindings:requestBindings,...requestPayload}=request;
  need(same(payload,requestPayload)&&same(Object.entries(requestBindings??{}).sort(),Object.entries(row.bindings)
    .filter(([p])=>![creation.state_file,creation.request_file].includes(p)).sort())
    &&created.run===run&&created.stage==='5.1-adjudicate'&&created.paused===true&&drained(created), 'creation is not an exact paused/drained 5.1 owner request');
  const state=read(join(root,'.autopilot',run,'state.json'));
  need(state.run===run&&drained(state)&&((state.stage==='5.1-adjudicate'&&state.paused===true)||state.stage==='5.2-impact'), 'requires drained 5.2 or read-only paused/drained 5.1 validation');
  const frontier=bound(join(dir,'frontier.json'));validateFrontier(frontier);
  const baseline=bound(join(dir,'baseline.json')),verdicts=bound(join(dir,'step4-verdicts.json')),initialPath=join(dir,'initial-1.json'),initial=bound(initialPath);
  need(frontier.run===run&&row.original_count===frontier.ids.length&&Array.isArray(verdicts)
    &&initial.run===run&&initial.phase==='initial'&&initial.round===1&&initial.adjudicationSchemaVersion===1
    &&same(initial.frontier_ids,frontier.ids)&&initial.units.length===frontier.batches.length
    &&new Set(initial.units).size===initial.units.length&&frontier.batches.every(x=>initial.units.includes(x.id)), 'wrong immutable initial inventory');
  need(Array.isArray(row.entries)&&row.entries.length>0&&row.entries.length<=frontier.ids.length,'empty/invalid request inventory');
  const origins=new Map(),nativeFiles=[];
  for(const unit of initial.units){
    const label=`step5-v2-initial-r1-u${unit}`,reportPath=join(dir,`${label}.json`),report=bound(reportPath),empty=report.completion==='mechanical-zero-work';
    const dispatchPath=join(dispatchDir,`${empty?'tool-step5-v2-empty-initial-r1-u'+unit:'alpha-adjudicate-'+label}.result.json`),result=bound(dispatchPath);
    nativeFiles.push(reportPath,dispatchPath);
    need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit
      &&report.input_sha256===hash(initial)&&result.run===run&&result.ok===true&&same(result.covers,[unit]),`wrong native initial report/result: ${unit}`);
    if(empty){
      need(result.role==='tool'&&result.written_by==='autopilot'&&result.label===`step5-v2-empty-initial-r1-u${unit}`
        &&report.mathematical_review===false&&initial.assignments[unit]?.length===0
        &&['reviews','decisions','created_items','downstream','ledger_updates'].every(k=>same(report[k],[])), 'invalid mechanical zero-work origin');continue;
    }
    need(result.role==='alpha-adjudicate'&&result.label===label&&result.runner==='codex'&&result.model===MODELS.sol61.id
      &&result.provider_effort==='high'&&Number.isSafeInteger(result.attempt)&&result.attempt>0
      &&result.evidence_tag===`.attempt-${result.attempt}`&&date(result.started_at)&&date(result.ended_at)
      &&Date.parse(result.started_at)<=Date.parse(result.ended_at)&&result.process_exit_code===0&&result.exit_code===0
      &&result.timed_out===false&&result.terminal_summary?.task_completed===true&&result.terminal_summary.task_aborted===false
      &&result.terminal_summary.final_response_present===true&&result.terminal_summary.error_events===0, 'not a completed original Sol 6.1 high execution');
    const stem=join(dispatchDir,`alpha-adjudicate-${label}.attempt-${result.attempt}`);
    need(boundText(dispatchPath)===boundText(`${stem}.result.json`)&&resolve(root,result.log??'')===`${stem}.log`
      &&resolve(root,result.prompt??'')===`${stem}.prompt.md`, 'stable/immutable execution identity differs');
    // Every original report/result is preserved; only admitted units need source/output authentication.
    origins.set(unit,{report,result,reportPath});
    if(!row.entries.some(entry=>entry.unit===unit))continue;
    const prompt=boundText(`${stem}.prompt.md`),log=boundText(`${stem}.log`),end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);
    need(start>=0&&end>start&&prompt.includes(`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: ${unit}\noutput: ${relative(root,reportPath)}\n`)
      &&prompt.includes(`input_sha256:"${hash(initial)}"`), 'native prompt/output identity missing');
    const output=JSON.parse(log.slice(start+7,end).trim());
    need(output.run===run&&output.phase==='initial'&&output.round===1&&String(output.unit)===unit
      &&output.input_sha256===hash(initial),'wrong original final output identity');
    origins.set(unit,{report,result,output,log,reportPath});
  }
  if(requireCollection){
    const p=join(dir,'initial-1-collected.json'),text=bytes(p),collection=JSON.parse(text);
    need(collection.run===run&&collection.phase==='initial'&&collection.round===1&&same(collection.errors,[])
      &&collection.evidence?.[initialPath]===evidence[initialPath]
      &&nativeFiles.every(p=>collection.evidence?.[p]===evidence[p]), 'actual initial collection does not bind every original native handoff');
    evidence[p]=hash(text);
  }
  const manifests=readdirSync(join(root,'research')).filter(n=>n.startsWith(`${run}-batch-`)&&/^\d+\.pages\.json$/.test(n.slice(`${run}-batch-`.length))).map(n=>[n,bound(join(root,'research',n))]);
  const seen=new Set();
  for(const entry of row.entries){
    const {id,batch,unit,open_finding_index:index,owner_review:review}=entry,origin=origins.get(unit),finding=origin?.report.ledger_updates?.[index];
    need(/^[a-z0-9-]+$/.test(id)&&!seen.has(id)&&frontier.ids.includes(id)
      &&frontier.batches.filter(b=>b.items.includes(id)).length===1&&frontier.batches.find(b=>b.id===batch)?.items.includes(id), 'outside/duplicate/wrong original owner');seen.add(id);
    const owners=manifests.flatMap(([name,pages])=>{need(Array.isArray(pages),'bad manifest');return pages.flatMap(p=>(p.items??[]).filter(v=>v.id===id).map(()=>name));});
    need(same(owners,[`${run}-batch-${batch}.pages.json`]),'current manifest owner is not unique');
    need(origin&&Number.isSafeInteger(index)&&index>=0&&same(finding,entry.finding)
      &&finding.ledger==='canonical-defect-ledger'&&finding.action==='record-open-finding'&&finding.id===id
      &&['fatal','nonfatal'].includes(finding.severity)&&finding.uncertain===false
      &&(!Object.hasOwn(finding,'status')||finding.status==='open')&&entry.route==='frontier-owner'
      &&['frontier-owner','Owner / owning frontier lane; item outside this assignment.','Owner / owning frontier lane; item outside this assignment, not separate outside-frontier maintenance.'].includes(finding.route)
      &&typeof finding.reason==='string'&&finding.reason.trim().length>=40, 'not the exact original frontier-owner open finding');
    const summary=origin.output.ledger_updates?.[entry.output_finding_index];
    need(Number.isSafeInteger(entry.output_finding_index)&&entry.output_finding_index>=0&&same(summary,entry.output_finding)
      &&summary.id===id&&summary.ledger===finding.ledger&&summary.action===finding.action&&summary.uncertain===false
      &&summary.route===finding.route, 'original final output does not identify this separate native finding');
    const source=join(root,'items',`${id}.md`);need(lstatSync(source).isFile()&&!lstatSync(source).isSymbolicLink(),'nonregular source');
    const text=readFileSync(source,'utf8');
    need(/^status:\s*draft\s*$/m.test(text)&&text.match(/^id:\s*(\S+)\s*$/m)?.[1]===id
      &&typeof baseline[id]==='string'&&initial.before[id]===baseline[id]&&itemHashGuard(text)===entry.current_guard_sha256, 'not a current draft original frontier carrier');
    const observation=entry.source_read,record=observation?.native_log_record,match=typeof record==='string'?/\n succeeded in \d+ms:\n/.exec(record):null;
    need(match&&record.startsWith('exec\n')&&record.slice(0,match.index).includes(`items/${id}.md`)
      &&origin.log.includes(record)&&typeof observation.source_excerpt==='string'&&observation.source_excerpt.length>=20
      &&record.slice(match.index+match[0].length).includes(observation.source_excerpt)&&text.includes(observation.source_excerpt), 'missing actual successful native source-read observation/current continuity');
    need(review?.reviewed_by==='root'&&review.confirmed_defect===true&&date(review.reviewed_at)
      &&Date.parse(review.reviewed_at)>=Date.parse(origin.result.ended_at)&&Date.parse(review.reviewed_at)<=Date.parse(row.recorded_at)
      &&typeof review.reason==='string'&&review.reason.trim().length>=40&&boundText(review.evidence_file).trim().length>=80, 'missing individual dated root confirmation');
    const edits=review.proposed_edits??[];need(Array.isArray(edits)&&edits.length<=1000,'invalid literal edits');
    for(const edit of edits)need(typeof edit.source_excerpt==='string'&&edit.source_excerpt.length>0&&text.split(edit.source_excerpt).length===2
      &&typeof edit.proposed_replacement==='string'&&edit.proposed_replacement!==edit.source_excerpt,'stale or ambiguous exact proposed edit');
    need(edits.length>0||(review.candidate_patch_file&&boundText(review.candidate_patch_file).trim().length>=40),'exact literal edit or bound patch required');
  }
  return {entries:row.entries,evidence};
}
export function loadInitialScopeFindings(root,run,{requireCollection=true}={}) {
  const path=initialScopeFindingPath(root,run);if(!existsSync(path))return null;
  need(lstatSync(path).isFile()&&!lstatSync(path).isSymbolicLink(),'registry must be a regular nonsymlink file');
  const admission=validate(root,run,read(path),{requireCollection});admission.evidence[path]=hash(readFileSync(path,'utf8'));return admission;
}
export function recordInitialScopeFindings(root,run,requestFile) {
  const target=initialScopeFindingPath(root,run),statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8'),state=JSON.parse(stateBytes);
  need(!existsSync(target)&&state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&drained(state), 'creation requires a fresh paused/drained 5.1 boundary');
  const requestPath=resolve(root,requestFile);need(requestPath.startsWith(resolve(root,'research')+'/')&&lstatSync(requestPath).isFile()&&!lstatSync(requestPath).isSymbolicLink(),'request must be a regular research file');
  const requestBytes=readFileSync(requestPath,'utf8'),request=JSON.parse(requestBytes),dir=join(root,'research',`${run}-step5-v2`,'initial-scope-findings');
  need(!Object.hasOwn(request,'creation')&&date(request.recorded_at)&&Date.parse(request.recorded_at)<=Date.now(), 'request cannot supply creation evidence or a future date');
  const creation={state_file:relative(root,join(dir,'creation-state.json')),request_file:relative(root,join(dir,'owner-request.json'))};
  const virtual=new Map([[resolve(root,creation.state_file),stateBytes],[resolve(root,creation.request_file),requestBytes]]);
  const row={...request,creation,bindings:{...request.bindings,...Object.fromEntries([...virtual].map(([p,text])=>[relative(root,p),hash(text)]))}};
  validate(root,run,row,{requireCollection:false,virtual});
  need(readFileSync(statePath,'utf8')===stateBytes&&!existsSync(target), 'creation boundary changed during validation');
  mkdirSync(dir,{recursive:true});
  for(const [p,text]of virtual){if(existsSync(p))need(readFileSync(p,'utf8')===text,'immutable creation archive conflict');else writeFileSync(p,text,{flag:'wx'});}
  writeFileSync(target,JSON.stringify(row,null,2)+'\n',{flag:'wx'});
  return {path:target,ids:row.entries.map(x=>x.id),native_coverage_adopted:false,mathematical_review:false};
}
