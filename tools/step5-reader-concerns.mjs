// Owner confirmation admits work; only genuine native workers and judges supply coverage.
import {existsSync,readFileSync,readdirSync,lstatSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {validateFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {MODELS} from './models.mjs';
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
  need(row.version===1&&row.kind==='owner-confirmed-step4-reader-concerns'&&row.run===run
    &&row.authorized_by==='owner'&&row.owner_identity==='/root'&&row.native_coverage_adopted===false
    &&date(row.recorded_at)&&row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings),
    'invalid owner authority or admission envelope');
  const evidence={[path]:hash(readFileSync(path,'utf8'))};
  for(const [file,expected]of Object.entries(row.bindings)){
    const p=resolve(root,file);
    need(p.startsWith(resolve(root,'research')+'/')&&/^[a-f0-9]{64}$/.test(expected)
      &&existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&hash(readFileSync(p,'utf8'))===expected,`stale or invalid binding: ${file}`);
    evidence[p]=expected;
  }
  const bound=file=>{need(Object.hasOwn(evidence,resolve(file)),`missing binding: ${file}`);return read(file);};
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
        :dispatch.role==='alpha-adjudicate'&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort==='high'),
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
    const digestPath=join(root,'research',`${run}-batch-${batch}-step5-context.json`),document=bound(digestPath);
    const readerPath=join(dispatchDir,`alpha-batch-read-${batch}.result.json`),reader=bound(readerPath);
    need(reader.run===run&&reader.role==='alpha-batch-read'&&reader.label===batch&&reader.ok===true
      &&reader.model===MODELS.sol61.id&&reader.provider_effort==='medium'&&Number.isSafeInteger(reader.attempt)&&reader.attempt>0
      &&reader.evidence_tag===`.attempt-${reader.attempt}`&&JSON.stringify(reader.covers)===JSON.stringify([batch]),
      'not a genuine successful Step-4 reader');
    const stem=join(dispatchDir,`alpha-batch-read-${batch}.attempt-${reader.attempt}`);
    const attempt=bound(`${stem}.result.json`),output=bound(`${stem}.last-message.json`);
    need(hash(reader)===hash(attempt)&&hash(document)===hash(output)&&document.batches?.includes(batch)
      &&document.items_read?.includes(id)&&Number.isSafeInteger(concern_index)&&concern_index>=0
      &&document.concerns?.[concern_index]?.id===id&&hash(document.concerns[concern_index])===hash(entry.concern),
      'original structured reader concern mismatch');
    const text=readFileSync(join(root,'items',`${id}.md`),'utf8');
    need(/^status:\s*draft\s*$/m.test(text)&&entry.before_guard_sha256===baseline[id]
      &&initial.before[id]===baseline[id]&&itemHashGuard(text)===baseline[id]
      &&!initial.rejected.some(value=>value.id===id)
      &&verdicts.some(value=>value.id===id&&value.model===MODELS.luna.id&&value.keep===true),
      'requires unchanged draft original accepted Luna item');
    need(review?.reviewed_by==='root'&&review.confirmed_defect===true&&date(review.reviewed_at)
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
    entries.push({...entry,digest_path:digestPath});
  }
  return {path,entries,evidence};
}

/** Native plan options for the actual same reviewer, never just a lane label. */
export function readerConcernSession(root,run,phase,round,unit) {
  const packPath=join(root,'research',`${run}-step5-v2`,`${phase}-${round}.json`);
  if(!existsSync(packPath))return {};
  const pack=read(packPath),owners=pack.reader_review_owners??pack.reader_concern_owners??{};
  if(!(pack.assignments?.[unit]??[]).some(id=>owners[id]===unit))return {};
  const sessionHome=join(root,'.autopilot',run,'step5-reader-owner-sessions',`u${unit}`);
  if(phase==='impact-initial'&&round===1)return {sessionHome};
  const binding=pack.reader_owner_sessions?.[unit];
  need(binding&&pack.input_evidence?.[binding.result]===binding.sha256
    &&hash(readFileSync(binding.result,'utf8'))===binding.sha256,'missing exact prior owner session result');
  const result=read(binding.result);
  need(result.run===run&&result.role==='alpha-repair'&&result.ok===true&&result.model===MODELS.sol61.id
    &&result.provider_effort==='high'&&result.session_home===sessionHome
    &&typeof result.session_id==='string'&&result.session_id.length>0&&result.session_id===binding.session_id,
    'cannot resume the genuine prior owner reviewer');
  return {sessionHome,resumeSession:result.session_id};
}
