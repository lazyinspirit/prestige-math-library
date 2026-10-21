// Owner confirmation admits work; only genuine native workers and judges supply coverage.
import { sol61Effort } from './math-workflow-effort.mjs';
import {supportingOriginalSlotLevelHistory} from './step5-original-slot-reclassification.mjs';
import {existsSync,readFileSync,readdirSync,lstatSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {validateFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {MODELS} from './models.mjs';
import {validateProofCompanion} from './step5-proof-companion.mjs';
import {reportingOwnerHome,reportingSessionOptions} from './step5-reporting-owner-recovery.mjs';
const hash=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const need=(yes,message)=>{if(!yes)throw Error(`Step 5 reader concern: ${message}`);};
const date=value=>typeof value==='string'&&Number.isFinite(Date.parse(value));
export const readerConcernPath=(root,run)=>join(root,'research',`${run}-step5-reader-concern-admissions.json`);

/** Existing frozen packs cannot acquire an admission after dispatch. */
export function checkFrozenReaderConcernInput(root,run,pack) {
  const path=readerConcernPath(root,run),bound=pack.input_evidence?.[path];
  need(existsSync(path)?bound===hash(readFileSync(path,'utf8')):!bound,
    'admission added, removed or changed after impact pack freeze');
}

/** Read-only, fail-closed admission validation. No source, verdict or state writes.
 * Initial native collection is required only when preparing the future 5.2 pack.
 */
export function loadReaderConcerns(root,run,{requireCollection=true}={}) {
  const path=readerConcernPath(root,run);if(!existsSync(path))return null;
  const row=read(path),dir=join(root,'research',`${run}-step5-v2`),dispatchDir=join(root,'research',`${run}-dispatch`);
  need(!existsSync(join(dir,'impact-initial-1.json')),'first impact pack is already frozen');
  need(!readdirSync(dispatchDir).some(name=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(name)),
    'impact owner execution has already started');
  need([1,2,3].includes(row.version)&&row.kind==='owner-confirmed-step4-reader-concerns'&&row.run===run
    &&row.authorized_by==='owner'&&row.owner_identity==='/root'&&row.native_coverage_adopted===false
    &&date(row.recorded_at)&&row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings),
    'invalid owner authority or admission envelope');
  const evidence={[path]:hash(readFileSync(path,'utf8'))},historical=new Map(),continuityEvidence={};
  for(const [file,expected]of Object.entries(row.bindings)){
    const p=resolve(root,file);
    need(p.startsWith(resolve(root,'research')+'/')&&/^[a-f0-9]{64}$/.test(expected)
      &&existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      ,`stale or invalid binding: ${file}`);
    if(hash(readFileSync(p,'utf8'))!==expected){
      const continuity=supportingOriginalSlotLevelHistory({root,run},p,expected);
      if(continuity){historical.set(p,continuity.archive);Object.assign(continuityEvidence,continuity.evidence);}
    }
    need(hash(readFileSync(historical.get(p)??p,'utf8'))===expected,`stale or invalid binding: ${file}`);
    evidence[p]=expected;
  }
  const bound=file=>{need(Object.hasOwn(evidence,resolve(file)),`missing binding: ${file}`);return read(historical.get(resolve(file))??file);};
  const frontier=bound(join(dir,'frontier.json'));validateFrontier(frontier);
  const baseline=bound(join(dir,'baseline.json')),verdicts=bound(join(dir,'step4-verdicts.json'));
  const initialPath=join(dir,'initial-1.json'),initial=bound(initialPath);
  need(frontier.run===run&&row.original_count===frontier.ids.length&&initial.run===run&&initial.phase==='initial'
    &&initial.round===1&&initial.adjudicationSchemaVersion===1&&Array.isArray(initial.rejected)
    &&Array.isArray(row.entries)&&row.entries.length>0&&row.entries.length<=frontier.ids.length,
    'wrong frozen inventory or initial pack');
  // Bind all genuine initial handoffs, including unchanged mechanical zero-work units.
  for(const unit of initial.units){
    const label=`step5-v2-initial-r1-u${unit}`,reportPath=join(dir,`${label}.json`),report=bound(reportPath);
    need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit
      &&report.input_sha256===hash(initial),'initial native report mismatch');
    const mechanical=report.completion==='mechanical-zero-work';
    const dispatch=bound(join(dispatchDir,`${mechanical?'tool-step5-v2-empty-initial-r1-u'+unit:'alpha-adjudicate-'+label}.result.json`));
    need(dispatch.run===run&&dispatch.ok===true&&JSON.stringify(dispatch.covers)===JSON.stringify([unit])
      &&dispatch.label===(mechanical?`step5-v2-empty-initial-r1-u${unit}`:label)
      &&(mechanical?dispatch.role==='tool'&&dispatch.written_by==='autopilot'&&report.mathematical_review===false
        &&initial.assignments[unit]?.length===0&&['reviews','decisions','created_items','downstream'].every(key=>Array.isArray(report[key])&&report[key].length===0)
        :dispatch.role==='alpha-adjudicate'&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run)),
      'initial native completion is missing or invalid');
  }
  if(requireCollection){
    const collectedPath=join(dir,'initial-1-collected.json'),collected=read(collectedPath);
    need(collected.run===run&&collected.phase==='initial'&&collected.round===1&&collected.errors?.length===0
      &&collected.evidence?.[initialPath]===hash(readFileSync(initialPath,'utf8')),'missing exact initial native collection');
    for(const [file,expected]of Object.entries(collected.evidence??{})){
      need(existsSync(file)&&hash(readFileSync(file,'utf8'))===expected,`stale initial collection evidence: ${file}`);
      evidence[file]=expected;
    }
    evidence[collectedPath]=hash(readFileSync(collectedPath,'utf8'));
  }
  const state=read(join(root,'.autopilot',run,'state.json'));
  need(state.run===run&&((state.stage==='5.1-adjudicate'&&state.paused===true)||state.stage==='5.2-impact')
    &&Object.values(state.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt)),
    'requires drained initial workers before first impact dispatch');
  // V2 is an explicit typed-source opt-in. V1 retains its original own-batch
  // concern path and its exact checks below.
  if(row.version>=2){
    // Creation authority belongs to the real paused 5.1 hold. Native planning
    // later runs in drained, unpaused 5.2; it authenticates that creation rather
    // than claiming another pause occurred at the planning boundary.
    const creation=row.creation_state,requestRef=row.owner_gate_request;
    need(creation&&typeof creation.file==='string'&&date(creation.captured_at)
      &&requestRef&&typeof requestRef.file==='string'&&typeof requestRef.id==='string'
      &&requestRef.id.length>0,'missing v2 paused-creation archives');
    const creationPath=resolve(root,creation.file),requestPath=resolve(root,requestRef.file);
    const created=bound(creationPath),request=bound(requestPath);
    need(created.run===run&&created.stage==='5.1-adjudicate'&&created.paused===true
      &&Object.values(created.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt))
      &&request.version===1&&request.run===run&&request.id===requestRef.id
      &&request.group==='5.1-adjudicate'
      &&JSON.stringify(request.stages)===JSON.stringify(['5.1-adjudicate'])&&date(request.at),
      'v2 creation must archive the actual paused, drained native 5.1 owner hold');
    const captured=Date.parse(creation.captured_at),recorded=Date.parse(row.recorded_at);
    need(Date.parse(request.at)<=captured&&captured<=recorded,
      'v2 owner capture and recording must follow the native creation request');
    need(Array.isArray(initial.units)&&initial.units.length>0
      &&new Set(initial.units).size===initial.units.length,'invalid v2 initial unit inventory');
    for(const unit of initial.units){
      const label=`step5-v2-initial-r1-u${unit}`,report=bound(join(dir,`${label}.json`));
      const mechanical=report.completion==='mechanical-zero-work';
      const dispatchLabel=mechanical?`step5-v2-empty-initial-r1-u${unit}`:label;
      const native=bound(join(dispatchDir,`${mechanical?'tool-':'alpha-adjudicate-'}${dispatchLabel}.result.json`));
      const observed=created.dispatches?.[`5.1-adjudicate:${dispatchLabel}`];
      need(observed?.stage==='5.1-adjudicate'&&observed.role===native.role
        &&observed.label===native.label&&observed.lastExitOk===true
        &&JSON.stringify(observed.covers)===JSON.stringify([unit])
        &&JSON.stringify(native.covers)===JSON.stringify(observed.covers)
        &&date(observed.startedAt)&&date(observed.endedAt)&&date(native.ended_at)
        &&Date.parse(observed.startedAt)<=Date.parse(native.ended_at)
        &&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)
        &&Date.parse(observed.endedAt)<=Date.parse(request.at),
        'v2 creation archive lacks a matching successful actual initial unit');
      if(!mechanical){
        need(Number.isSafeInteger(native.attempt)&&native.attempt>0
          &&observed.attempt===native.attempt&&native.evidence_tag===`.attempt-${native.attempt}`
          &&date(native.started_at)&&Date.parse(observed.startedAt)<=Date.parse(native.started_at)
          &&Date.parse(native.started_at)<=Date.parse(native.ended_at)
          &&native.process_exit_code===0&&native.exit_code===0&&native.timed_out===false
          &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
          &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0,
          'incomplete v2 initial native execution');
        const attempt=bound(join(dispatchDir,`alpha-adjudicate-${label}.attempt-${native.attempt}.result.json`));
        need(hash(native)===hash(attempt),'v2 initial stable result differs from immutable attempt');
      }
    }
    // The common guard above still requires a paused/drained live 5.1 state or
    // a drained live 5.2 state. Only actual 5.2 preparation may use the latter.
    need(state.stage==='5.1-adjudicate'||requireCollection===true,
      'v2 read-only admission validation requires the paused native 5.1 hold');
  }
  if(row.version===3)need(JSON.stringify(initial.frontier_ids)===JSON.stringify(frontier.ids)
    &&initial.units.length===frontier.batches.length&&frontier.batches.every(b=>initial.units.includes(b.id)),
    'v3 requires complete original frozen handoff inventory');
  const ids=new Set(),entries=[];
  for(const entry of row.entries){
    const {id,batch,concern_index,owner_review:review}=entry;
    need(typeof id==='string'&&typeof batch==='string'&&!ids.has(id)&&frontier.ids.includes(id)
      &&frontier.batches.filter(value=>value.items.includes(id)).length===1
      &&frontier.batches.find(value=>value.id===batch)?.items.includes(id), 'duplicate, outside or wrong owning batch');
    ids.add(id);
    const manifest=bound(join(root,'research',`${run}-batch-${batch}.pages.json`));
    need(Array.isArray(manifest)&&manifest.flatMap(page=>page.items??[]).filter(value=>value.id===id).length===1,
      'current owning manifest mismatch');
    const v2=row.version>=2,alert=v2&&entry.source_kind==='alert',companion=row.version===3&&entry.source_kind==='proof-companion';
    const readerBatch=v2?entry.reader_batch:batch;
    if(v2){
      need((['concern','alert'].includes(entry.source_kind)||companion)&&typeof readerBatch==='string'
        &&frontier.batches.some(value=>value.id===readerBatch)
        &&(alert?readerBatch!==batch:readerBatch===batch), 'invalid v2 reader source identity');
      need(!companion||(!Object.hasOwn(entry,'concern')&&!Object.hasOwn(entry,'concern_index')),'companion cannot invent an original finding');
      need(alert?!Object.hasOwn(entry,'concern')&&!Object.hasOwn(entry,'concern_index')
        :!Object.hasOwn(entry,'alert')&&!Object.hasOwn(entry,'alert_index'), 'ambiguous v2 finding fields');
      // A frozen owner alone is insufficient if current manifests duplicate it.
      const prefix=`${run}-batch-`,owners=[];
      for(const name of readdirSync(join(root,'research')).filter(name=>name.startsWith(prefix)
        &&/^\d+\.pages\.json$/.test(name.slice(prefix.length)))){
        const rows=bound(join(root,'research',name));
        need(Array.isArray(rows),'invalid current run manifest');
        for(const page of rows)for(const value of page.items??[])if(value.id===id)
          owners.push(name.slice(prefix.length).split('.')[0]);
      }
      need(owners.length===1&&owners[0]===batch,'v2 current manifest ownership is not unique');
    }
    const digestPath=join(root,'research',`${run}-batch-${readerBatch}-step5-context.json`),document=bound(digestPath);
    const readerPath=join(dispatchDir,`alpha-batch-read-${readerBatch}.result.json`),reader=bound(readerPath);
    need(reader.run===run&&reader.role==='alpha-batch-read'&&reader.label===readerBatch&&reader.ok===true
      &&reader.model===MODELS.sol61.id&&reader.provider_effort==='medium'&&Number.isSafeInteger(reader.attempt)&&reader.attempt>0
      &&reader.evidence_tag===`.attempt-${reader.attempt}`&&JSON.stringify(reader.covers)===JSON.stringify([readerBatch]),
      'not a genuine successful Step-4 reader');
    const stem=join(dispatchDir,`alpha-batch-read-${readerBatch}.attempt-${reader.attempt}`);
    const attempt=bound(`${stem}.result.json`),output=bound(`${stem}.last-message.json`);
    need(hash(reader)===hash(attempt)&&hash(document)===hash(output)&&document.batches?.includes(readerBatch),
      'original structured reader output mismatch');
    if(alert){
      need(Number.isSafeInteger(entry.alert_index)&&entry.alert_index>=0
        &&document.alerts?.[entry.alert_index]?.item===id
        &&hash(document.alerts[entry.alert_index])===hash(entry.alert)
        &&typeof entry.alert.finding==='string'&&entry.alert.finding.trim().length>0,
        'original structured cross-batch alert mismatch');
    }else if(!companion) need(document.items_read?.includes(id)&&Number.isSafeInteger(concern_index)&&concern_index>=0
      &&document.concerns?.[concern_index]?.id===id&&hash(document.concerns[concern_index])===hash(entry.concern),
      'original structured reader concern mismatch');
    if(v2)need(date(reader.started_at)&&date(reader.ended_at)
      &&Date.parse(reader.started_at)<=Date.parse(reader.ended_at)
      &&reader.process_exit_code===0&&reader.exit_code===0&&reader.timed_out===false
      &&reader.terminal_summary?.task_completed===true&&reader.terminal_summary.task_aborted===false
      &&reader.terminal_summary.final_response_present===true&&reader.terminal_summary.error_events===0,
      'incomplete v2 native reader execution');
    const text=readFileSync(join(root,'items',`${id}.md`),'utf8');
    need(/^status:\s*["\']?(?:draft|published)["\']?\s*$/m.test(text)&&entry.before_guard_sha256===baseline[id]
      &&initial.before[id]===baseline[id]&&itemHashGuard(text)===baseline[id]
      &&!initial.rejected.some(value=>value.id===id)
      &&verdicts.some(value=>value.id===id&&value.model===MODELS.luna.id&&value.keep===true),
      'requires unchanged draft original accepted Luna item');
    if(alert){
      const observation=entry.source_observation,continuity=entry.source_continuity;
      need(observation&&continuity&&typeof observation.command_output_prefix==='string'
        &&typeof observation.source_excerpt==='string'&&observation.source_excerpt.length>=20
        &&typeof continuity.source_file==='string','missing actual cross-batch source observation');
      const boundText=file=>{const p=resolve(root,file);need(Object.hasOwn(evidence,p),`missing binding: ${file}`);return readFileSync(p,'utf8');};
      const original=boundText(continuity.source_file),logPath=`${stem}.log`,promptPath=`${stem}.prompt.md`;
      need(resolve(root,reader.log??'')===logPath&&resolve(root,reader.prompt??'')===promptPath,
        'wrong original reader log or prompt');
      const log=boundText(logPath),prompt=boundText(promptPath),prefix=observation.command_output_prefix;
      // Narrow route: a successful original cat read whose full returned carrier
      // is actually in the native log, rather than inferred items_read coverage.
      need(prefix.startsWith(`exec\n/bin/bash -lc "cat items/${id}.md`)
        &&/\n succeeded in \d+ms:\n$/.test(prefix)&&log.includes(prefix+original.trimEnd())
        &&prompt.includes('run: '+run+'\nrole: alpha-batch-read')&&prompt.includes('batch **'+readerBatch+'**, run'),
        'missing literal successful source read in original native dispatch');
      const excerpt=observation.source_excerpt;
      need(original.includes(excerpt)&&text.includes(excerpt)
        &&[["'","'"],['"','"'],['“','”'],['‘','’']].some(([a,b])=>entry.alert.finding.includes(a+excerpt+b)),
        'alert must retain its original literal source quotation');
      const snapshotRelative=`research/${run}-step3-hash-${batch}-post-3a.json`;
      const snapshotPath=join(root,snapshotRelative),snapshot=bound(snapshotPath);
      const closure=bound(join(root,'research',`${run}-step3-closure.json`));
      need(snapshot.version===2&&snapshot.run===run&&snapshot.batch===batch&&snapshot.label==='post-3a'
        &&snapshot.manifest?.filter(value=>value===id).length===1
        &&snapshot.hashes?.[id]?.item_sha256===hash(original)
        &&itemHashGuard(original)===baseline[id]
        &&closure.version===3&&closure.basis==='dependency-ordered-step3a'
        &&closure.run===run&&closure.status==='closed'&&date(closure.closed_at)
        &&Date.parse(closure.closed_at)<=Date.parse(reader.started_at)
        &&closure.artifacts?.[snapshotRelative]===evidence[snapshotPath]
        &&closure.final_item_hashes?.[id]===baseline[id],
        'cross-batch source lacks exact frozen Step-3-to-current continuity');
    }
    if(companion)validateProofCompanion({root,run,row,entry,text,initial,baseline,evidence,document,reader,need});
    need(review?.reviewed_by==='root'&&(companion?review.necessary_related_work===true:review.confirmed_defect===true)&&date(review.reviewed_at)
      &&Date.parse(review.reviewed_at)>=Date.parse(reader.ended_at)
      &&typeof review.reason==='string'&&review.reason.trim().length>=40
      &&typeof review.evidence_file==='string','missing actual individual root confirmation');
    const edits=review.proposed_edits??(review.source_excerpt?[review]:[]);
    need(Array.isArray(edits)&&edits.length<=1000,'invalid proposed edit instructions');
    for(const edit of edits)need(typeof edit.source_excerpt==='string'&&edit.source_excerpt.length>0
      &&text.split(edit.source_excerpt).length===2&&typeof edit.proposed_replacement==='string'
      &&edit.proposed_replacement!==edit.source_excerpt,'stale or ambiguous proposed source excerpt');
    const patch=review.candidate_patch_file?resolve(root,review.candidate_patch_file):null;
    need(edits.length>0||(patch&&Object.hasOwn(evidence,patch)&&readFileSync(patch,'utf8').trim().length>=40),
      'missing exact proposed edits or bound candidate patch');
    const ownerEvidence=resolve(root,review.evidence_file);
    need(Object.hasOwn(evidence,ownerEvidence)&&readFileSync(ownerEvidence,'utf8').trim().length>=80,
      'missing bound root review evidence');
    entries.push({...entry,...(v2?{source_kind:entry.source_kind,reader_batch:readerBatch}:{}),digest_path:digestPath});
  }
  return {path,entries,evidence:{...continuityEvidence,...evidence}};
}

/** Native plan options for the actual same reviewer, never just a lane label. */
export function readerConcernSession(root,run,phase,round,unit) {
  const packPath=join(root,'research',`${run}-step5-v2`,`${phase}-${round}.json`);
  if(!existsSync(packPath))return {};
  const pack=read(packPath),owners=pack.reader_review_owners??pack.reader_concern_owners??{};
  const reporting=reportingSessionOptions(root,run,pack,unit);if(reporting)return reporting;
  if(['impact-repeat','gate'].includes(pack.basePhase??phase)&&pack.units?.includes(unit))return {sessionHome:reportingOwnerHome(root,run,pack.basePhase??phase,round,unit)};
  if(!(pack.assignments?.[unit]??[]).some(id=>owners[id]===unit))return {};
  const sessionHome=resolve(root,'.autopilot',run,'step5-reader-owner-sessions',`u${unit}`);
  if(phase==='impact-initial'&&round===1)return {sessionHome};
  const binding=pack.reader_owner_sessions?.[unit];
  need(binding&&pack.input_evidence?.[binding.result]===binding.sha256
    &&hash(readFileSync(binding.result,'utf8'))===binding.sha256,'missing exact prior owner session result');
  const result=read(binding.result);
  need(result.run===run&&result.role==='alpha-repair'&&result.ok===true&&result.model===MODELS.sol61.id
    &&result.provider_effort===sol61Effort(root,result.run)&&typeof result.session_home==='string'
    &&resolve(root,result.session_home)===sessionHome
    &&typeof result.session_id==='string'&&result.session_id.length>0&&result.session_id===binding.session_id,
    'cannot resume the genuine prior owner reviewer');
  return {sessionHome,resumeSession:result.session_id};
}
