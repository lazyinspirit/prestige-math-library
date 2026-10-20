#!/usr/bin/env node
// Mechanical collector only. A seal binds existing reader evidence; it is not a review or gate.
import fs from 'node:fs';
import {numberedProofSteps,splitFrontmatter} from '../../../../tools/facts-block.mjs';
import path from 'node:path';
import {createHash, randomUUID} from 'node:crypto';
import {pathToFileURL} from 'node:url';
export const RUN = 'machine-learning-all-101-2026-10-19';
export const COLLECTOR_REVISION=2;
export const STANDARD_BOUNDARIES=['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'];
const PREFIX = `research/${RUN}-owner-boundary-`;
export const sha = x => createHash('sha256').update(x).digest('hex');
export const equal = (a,b) => canonical(a) === canonical(b);
export const canonical = x => JSON.stringify(x, (_,v) => v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])) : v);
export const rowHash = b => sha(JSON.stringify({case:b.case,status:b.status,text:b.reason ?? b.evidence ?? ''}));
const owned = new Set(['case','status','reason','evidence','reviewed','template_review']);
const clone = x => structuredClone(x);
function need(condition,message) {if (!condition) throw Error(message);}
export function mergeBoundary(before,after) {
  need(before && after && !Array.isArray(before) && !Array.isArray(after),'Boundary objects required');
  need(before.case === after.case,'Axis change prohibited');
  const result = clone(before);
  for (const k of owned) if (Object.hasOwn(after,k)) result[k]=clone(after[k]); else delete result[k];
  for (const [k,v] of Object.entries(after)) if (!owned.has(k)) {
    need(!Object.hasOwn(before,k) || equal(before[k],v),`Unsupported change of unknown boundary field ${k}`);
    result[k]=clone(v);
  }
  need(['checked','not_applicable'].includes(result.status),'Unsupported boundary status');
  need(typeof (result.reason ?? result.evidence)==='string' && (result.reason ?? result.evidence).trim(),'Missing disposition text');
  return result;
}
// Exact checked/not_applicable evidence mechanics from proof-contract.mjs validateBoundaries.
// Parser is the native shared implementation, not an approximation of proof section headings.
export function boundarySchemaErrors(boundary,source) {
  const steps=new Map(numberedProofSteps(splitFrontmatter(source).body).map(step=>[step.id,step]));
  const errors=[],add=(code,message)=>errors.push({code,message});
  if(!boundary||typeof boundary!=='object'||Array.isArray(boundary))return [{code:'boundary-entry-shape',message:'each boundary entry must be an object'}];
  const {case:name,status,evidence,reason}=boundary;
  if(!STANDARD_BOUNDARIES.includes(name)){add('boundary-case',`${name??'(missing)'} is not a standard boundary case`);return errors;}
  if(!['checked','not_applicable'].includes(status))add('boundary-status',`${name} must be checked or not_applicable`);
  if(status==='checked') {
    if(typeof evidence!=='string'||!evidence.trim())add('boundary-evidence',`${name} needs evidence`);
    else {
      const references=[...evidence.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)]
        .filter(m=>/^steps?\s/i.test(m[0])||steps.has(m[1])).map(m=>m[1]);
      if(!references.length&&!/statement|definition|example|counterexample/i.test(evidence))add('boundary-evidence-unanchored',`${name} evidence must name a step or statement`);
      for(const stepId of references)if(!steps.has(stepId))add('boundary-evidence-step-missing',`${name} names missing step ${stepId}`);
    }
  }
  if(status==='not_applicable'&&(typeof reason!=='string'||!reason.trim()))add('boundary-na-reason',`${name} needs a specific not_applicable reason`);
  return errors;
}
export function boundaryArraySchemaErrors(boundaries,source) {
  if(!Array.isArray(boundaries))return [{code:'boundary-shape',message:'`boundaries` must be an array'}];
  const seen=new Set(),errors=[];
  for(const b of boundaries){if(!b||typeof b!=='object'||Array.isArray(b)){errors.push({code:'boundary-entry-shape',message:'each boundary entry must be an object'});continue;}if(!STANDARD_BOUNDARIES.includes(b.case)){errors.push(...boundarySchemaErrors(b,source));continue;}if(seen.has(b.case))errors.push({code:'boundary-duplicate',message:`${b.case} is listed twice`});seen.add(b.case);errors.push(...boundarySchemaErrors(b,source));}
  for(const c of STANDARD_BOUNDARIES)if(!seen.has(c))errors.push({code:'boundary-missing',message:`${c} has no worksheet disposition`});return errors;
}
function group(n) {
  if(n<=17)return 'batches1-35'; if(n<=22)return 'batches18-35'; if(n<=26)return 'batches23-26';
  if(n<=30)return 'batches27-35'; if(n<=35)return 'batches31-35'; if(n===42)return 'batches39-42';
  if(n<=50)return 'batches36-70'; if([51,52,56].includes(n))return 'batches51-52-56';
  if(n<=70)return 'batches51-70'; if(n<=85)return 'batches71-101'; return 'batches86-101';
}
function walk(dir) {if(!fs.existsSync(dir))return []; return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=> e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
export function collect(repo,registryPath=null,selectionPath=null) {
  const abs = rel => {need(typeof rel==='string' && !path.isAbsolute(rel),'Expected repository-relative path'); const a=path.resolve(repo,rel);need(a.startsWith(path.resolve(repo)+path.sep),'Path escapes repo');return a;};
  const read = rel => fs.readFileSync(abs(rel));
  const json = rel => JSON.parse(read(rel));
  const exists = rel => typeof rel==='string' && fs.existsSync(abs(rel));
  const rel = p => path.relative(repo,p).split(path.sep).join('/');
  const invPath=`${PREFIX}audit-diagnosis/affected-by-batch.json`;
  const clusterPath=`${PREFIX}audit-diagnosis/template-clusters.json`;
  const inventory=json(invPath); const clusters=json(clusterPath);
  const errors=[],schemaErrors=[],missing=[],operations=[],inputs=new Map([[invPath,sha(read(invPath))],[clusterPath,sha(read(clusterPath))]]);
  const addInput=p=>{inputs.set(p,sha(read(p)));return p;};
  addInput('tools/facts-block.mjs');addInput('tools/proof-contract.mjs');addInput('tools/item-hash.mjs');addInput('tools/boundary-audit.mjs');addInput(rel(new URL(import.meta.url).pathname));
  const registry=registryPath?json(registryPath):{records:[]};
  const defaultSelections=rel(path.join(path.dirname(new URL(import.meta.url).pathname),'packet-selections.json'));
  selectionPath=selectionPath??(exists(defaultSelections)?defaultSelections:null);
  const selections=selectionPath?json(addInput(selectionPath)):{version:2,run:RUN,records:[]};
  need(selections.version===2&&selections.run===RUN&&Array.isArray(selections.records),'Invalid explicit V2 packet selection manifest');
  const receiptMatches=(d,source,digest)=>d.changes?.some(c=>c.path===source&&c.after_sha256===digest)||(d.after_sha256===digest&&(d.path===source||(!d.path&&d.proposal&&json(addInput(d.proposal)).path===source)));
  if(registryPath)addInput(registryPath);
  if(registryPath&&registry.authorized_by!=='/root')errors.push('Review registry must identify /root as authorizing actual assignments/records');
  if(registryPath && (registry.run!==RUN || registry.version!==1 || (!Array.isArray(registry.records)&&!Array.isArray(registry.assignments))))errors.push('Invalid review registry version/run/records');
  // Root-confirmed requirement exists independently of old packet actual_gaps.
  const clearance=(registry.required_clearances??[]).filter(c=>c.key==='particle-model-width-zero-52');
  try{need(clearance.length===1&&clearance[0].resolved===true,'Mandatory root clearance52 missing: actual width-zero Definition repair, all consumer checks, and refreshed owner bindings');
    const c=clearance[0],source='items/def-one-hidden-layer-particle-measure-model.md',receipt=json(addInput(c.receipt));
    need(typeof c.after_raw_sha256==='string'&&sha(read(source))===c.after_raw_sha256,'Clearance52 current source does not match root repair');
    need(receiptMatches(receipt,source,c.after_raw_sha256),'Clearance52 receipt lacks actual current source application');
    need(c.consumer_checks_complete===true&&c.owner_bindings_refreshed===true,'Clearance52 owner consumer checks/bindings still pending');
    need(Array.isArray(c.evidence)&&c.evidence.length>0,'Clearance52 needs genuine owner followup evidence');
    for(const e of c.evidence)need(typeof e.claim==='string'&&e.claim.length>=30&&read(addInput(e.path)).toString('utf8').includes(e.claim),'Clearance52 followup claim absent');
  }catch(e){errors.push(e.message);}
  const expected=new Map(); const itemIds=new Set();
  for(const b of inventory) for(const i of b.items) {
    need(!itemIds.has(i.id),`Duplicate inventory item ${i.id}`);itemIds.add(i.id);
    const axes=new Set([...i.template_rows??[],...i.contradicted??[]].map(x=>x.case));
    for(const axis of axes)expected.set(`${b.batch}/${i.id}/${axis}`,{batch:b.batch,id:i.id,axis,source:i.source,contract:b.contract,template:(i.template_rows??[]).some(x=>x.case===axis),contradicted:(i.contradicted??[]).some(x=>x.case===axis)});
  }
  need(itemIds.size===910,`Expected exactly 910 inventory items, found ${itemIds.size}`);
  const seen=new Set(), coveredItems=new Set(),packetReports=[],docs=new Map();
  const contract = p => {if(!docs.has(p)){const bytes=read(p);docs.set(p,{beforeBytes:bytes.toString('utf8'),doc:JSON.parse(bytes)});}return docs.get(p).doc;};
  const allFiles=walk(path.join(repo,'research')).filter(p=>p.includes('-owner-boundary-')&&p.includes('/your-proposal/'));
  for(const b of inventory) {
    const assignment=(registry.assignments??[]).filter(a=>a.batches?.includes(Number(b.batch)));
    if(assignment.length>1){errors.push(`Duplicate reader assignment batch ${b.batch}`);continue;}
    const selected=selections.records.filter(r=>r.batch===Number(b.batch));need(selected.length<=1,`Duplicate explicit packet selections ${b.batch}`);const selection=selected[0];
    const base=assignment[0]?.packet_directory??`${PREFIX}${group(b.batch)}/your-proposal`;
    let candidates=[`${base}/batch-${String(b.batch).padStart(2,'0')}.json`,`${base}/batch-${b.batch}.json`,`${base}/batch-${b.batch}/packet.json`,`${base}/batch-${b.batch}/boundary-object-ops.json`,`${base}/batch-${b.batch}/operations.json`].filter(exists);
    // Neural child may publish separately. Never silently choose among competing packets.
    if(b.batch>=11 && b.batch<=17) candidates.push(...allFiles.filter(p=>/neural|pde/.test(p)&&new RegExp(`/batch-0?${b.batch}(?:/packet)?\\.json$`).test(p)).map(rel));
    if(b.batch>=18&&b.batch<=22){const idx=exists(`${base}/packet-index-current-bindings.json`)?`${base}/packet-index-current-bindings.json`:`${base}/packet-index.json`;if(exists(idx)){const index=json(addInput(idx));candidates=index.packets.filter(x=>Number(x.batch)===Number(b.batch)).map(x=>x.path);}}
    if(b.batch>=23&&b.batch<=26)candidates=[`${base}/field-cas-${b.batch===26?'26':'23-24-25'}.json`].filter(exists);
    if([51,52,56].includes(b.batch))candidates=[`${base}/batch-${b.batch}/boundary-object-CAS.json`].filter(exists);
    if(selection){
      need(typeof selection.packet==='string'&&Number(selection.packet_revision)>=2,`Explicit immutable newer packet required ${b.batch}`);
      const authority=json(addInput(selection.index));
      need([selection.packet,path.posix.relative(path.posix.dirname(selection.index),selection.packet)].some(p=>JSON.stringify(authority).includes(JSON.stringify(p))),`Authority index does not name selected packet ${b.batch}`);
      candidates=[selection.packet];need(exists(selection.packet),`Selected packet not ready ${selection.packet}`);
      if(selection.raw_sha256)need(sha(read(selection.packet))===selection.raw_sha256,`Selected immutable packet hash differs ${b.batch}`);
    }else if([51,52,56].includes(b.batch)||b.batch>=86){
      const indexes=[`${base}/version-2/index.json`,`${base}/version-2/packet-index.json`].filter(exists);
      if(indexes.length!==1){missing.push({batch:b.batch,problem:indexes.length?'duplicate authoritative V2 indexes':'mandatory V2 packet not ready',candidates:indexes});continue;}
      const indexPath=addInput(indexes[0]),index=json(indexPath);need(index.version===2,`${indexPath}: explicit packet version2 required`);
      need(Array.isArray(index.batches),`${indexPath}: unsupported V2 index batches schema`);
      const entries=index.batches.filter(x=>Number(x.batch)===Number(b.batch));
      need(entries.length===1,`${indexPath}: missing/duplicate V2 batch ${b.batch}`);
      need(typeof entries[0].operations==='string',`${indexPath}: V2 operations path required`);
      candidates=[path.posix.join(path.posix.dirname(indexPath),entries[0].operations)];
      need(exists(candidates[0]),`${indexPath}: indexed operations missing`);
    }
    candidates=[...new Set(candidates)];
    if(candidates.length!==1) {missing.push({batch:b.batch,problem:candidates.length?'duplicate batch packets':'packet not ready',candidates});continue;}
    const packet=candidates[0], p=json(addInput(packet)), dir=path.posix.dirname(packet);
    let rows, schema;
    if(Array.isArray(p.field_operations)){schema='field-operations-array';rows=p.field_operations;}
    else if(Array.isArray(p.rows)){schema='rows-from-to'; rows=p.rows;}
    else if(Array.isArray(p.operations)){schema='operations';rows=p.operations;}
    else if(Array.isArray(p)){schema='field-operations';rows=p;}
    else {errors.push(`${packet}: unsupported packet schema`);continue;}
    if(!Array.isArray(p) && p.batch!==undefined && Number(p.batch)!==Number(b.batch)){errors.push(`${packet}: wrong batch`);continue;}
    for(const gap of [...p.actual_gaps??[],...p.distinct_mathematical_defects??[]]){const resolution=gap.resolution,receipt=resolution?.receipt??gap.application_receipt;
      if((resolution?.status==='resolved-by-actual-root-source-application'||gap.resolved===true)&&receipt){try{const d=json(addInput(receipt)),source=resolution?.source_path??`items/${gap.id}.md`,digest=resolution?.after_raw_sha256??gap.current_source_raw_sha256;need(typeof digest==='string'&&sha(read(source))===digest,'Resolved source no longer matches receipt binding');need(receiptMatches(d,source,digest),'Root receipt has no matching actual source application');continue;}catch(e){errors.push(`${packet}: ${e.message}`);continue;}}
      const digest=sha(canonical(gap)), resolutions=(registry.gap_resolutions??[]).filter(r=>r.packet===packet&&r.gap_sha256===digest&&r.resolved===true);try{need(resolutions.length===1,`Unresolved actual gap ${digest}`);need(Array.isArray(resolutions[0].evidence)&&resolutions[0].evidence.length>0,'Root gap resolution requires existing receipt');for(const e of resolutions[0].evidence)need(typeof e.claim==='string'&&e.claim.length>=30&&read(addInput(e.path)).toString('utf8').includes(e.claim),'Root gap-resolution evidence missing');}catch(e){errors.push(`${packet}: ${e.message}`);}}
    let records=(registry.records??[]).filter(r=>r.packet===packet);
    const itemList=[...new Set(rows.filter(o=>{const target=o.contract??o.target??o.file??(typeof o.path==='string'?o.path:null)??p.contract;return !target||target===b.contract;}).map(o=>o.id??o.item_id??o.item??o.consumer??o.contract_key??o.path?.[1]).filter(x=>typeof x==='string'))];
    if(!records.length&&assignment.length===1){
      let evidence=[],readItems=[],readRecords=[];const claimKeys=['review_scope','source_read_scope','source_read'];
      for(const k of claimKeys)if(typeof p[k]==='string'&&/full|entire/i.test(p[k])&&/read/i.test(p[k])){evidence.push({path:packet,claim:p[k]});readItems=itemList;}
      if(Array.isArray(p.reads)){readItems=p.reads.filter(r=>/full/i.test(r.reading)&&/source/i.test(r.reading)).map(r=>r.id);for(const r of p.reads)if(readItems.includes(r.id))evidence.push({path:packet,claim:r.reading});}
      if(Array.isArray(p.substantive_source_reads)){readItems=p.substantive_source_reads.filter(r=>r.full_current_source_read===true).map(r=>r.id);}
      for(const support of [...new Set([`${dir}/report.json`,`${dir}/dispositions.json`,`${dir}/source-guards.json`,...(selection?.support_dir?[`${selection.support_dir}/report.json`,`${selection.support_dir}/source-guards.json`]:[])])])if(exists(support)){const d=json(addInput(support));if(Array.isArray(d)){for(const r of d){const c=r.reading??r.read_scope;if(typeof c==='string'&&/full/i.test(c)&&/read|source/i.test(c)){evidence.push({path:support,claim:c});if(r.id)readItems.push(r.id);}}}else {if(Array.isArray(d.full_current_sources_read)&&typeof d.review_scope==='string'&&/full.*source.*read/i.test(d.review_scope)){evidence.push({path:support,claim:d.review_scope});readItems.push(...d.full_current_sources_read.map(s=>path.posix.basename(s,'.md')));}
      for(const k of ['source_review','source_reading'])if(typeof d[k]==='string'&&/full/i.test(d[k])&&/read/i.test(d[k])){evidence.push({path:support,claim:d[k]});readItems.push(...itemList);}}}
      for(const ledger of [...new Set([`${base}/source-read-ledger.json`,`${dir}/source-read-ledger.json`])])if(exists(ledger)){const l=json(addInput(ledger)),rr=Array.isArray(l)?l:l.records??l.items;need(Array.isArray(rr),`${ledger}: unsupported reading ledger`);for(const r of rr.filter(r=>Number(r.batch)===Number(b.batch))){need((r.author_identity??r.author??assignment[0].actual_assigned_reader)===assignment[0].actual_assigned_reader,`${ledger}: wrong actual reader`);need(r.full_source_read===true||/Full current.*source read/i.test(r.extent??''),`${ledger}: item not actually full-read`);const claim=r.attestation??r.read_basis??r.extent;need(typeof claim==='string'&&claim.length>=30,`${ledger}: missing actual reading claim`);const source=r.path??r.source_path??r.source,archiveRaw=r.archive??r.source_archive,archive=archiveRaw?.startsWith('research/')?archiveRaw:path.posix.join(base,archiveRaw??''),digest=r.current_sha256??r.source_raw_sha256??sha(read(archive));need(sha(read(source))===digest&&read(source).equals(read(addInput(archive))),`${ledger}: stale actual read archive/hash ${r.id}`);evidence.push({path:ledger,claim});readItems.push(r.id);readRecords.push({id:r.id,source,raw:digest,axes:r.flagged_axes??r.relevant_axes??r.axes});}}
      if(p.reviewed_by)need(p.reviewed_by===assignment[0].actual_assigned_reader,`${packet}: reviewer differs from root assignment`);
      if(p.reviewer)need(p.reviewer===assignment[0].actual_assigned_reader,`${packet}: reviewer differs from root assignment`);
      records=[{packet,reviewer:assignment[0].actual_assigned_reader,confirmed_full_source_read:evidence.length>0,items:[...new Set(readItems)],evidence,source_read_records:readRecords}];
    }
    let review=null;
    try {
      need(records.length===1,`Need exactly one root review registry record, got ${records.length}`);
      review=records[0];
      need(typeof review.reviewer==='string'&&/^\/root\/[\w/-]+$/.test(review.reviewer),'Actual canonical reader identity required');
      need(review.confirmed_full_source_read===true && Array.isArray(review.items),'Explicit confirmed full-source-read item list required');
      need(new Set(review.items).size===review.items.length,'Duplicate reviewed items');
      need(Array.isArray(review.evidence)&&review.evidence.length>0,'Existing read-claim evidence required');
      for(const e of review.evidence){need(typeof e.claim==='string'&&e.claim.trim().length>=30,'Exact read-claim quote required');need(read(addInput(e.path)).toString('utf8').includes(e.claim),`Read claim absent from ${e.path}`);}
    } catch(e){errors.push(`${packet}: ${e.message}`);review=null;}
    let sourceGuards=[];
    if(selection?.source_guards){sourceGuards=json(addInput(selection.source_guards));need(Array.isArray(sourceGuards),'Explicit source guards must be array');}
    else if(exists(`${dir}/source-guards.json`)){sourceGuards=json(addInput(`${dir}/source-guards.json`));need(Array.isArray(sourceGuards),'source-guards must be an array');}
    const packetKeys=[];
    for(const op of rows) try {
      const kind=op.operation??op.op;
      if(kind!==undefined)need(['compare-and-swap-boundary-object','compare-and-swap-json-field','compare-and-replace-boundary-object','replace-exact-boundary-object'].includes(kind),`Unsupported operation ${kind}`);
      if(op.field!==undefined)need(op.field==='boundaries',`Unsupported contract field ${op.field}`);
      const pointer=(op.pointer??op.json_pointer)?.split('/').slice(1).map(s=>s.replace(/~1/g,'/').replace(/~0/g,'~'));
      const arr=Array.isArray(op.path)?op.path:pointer;
      if(arr)need(arr.length===4&&arr[0]==='contracts'&&arr[2]==='boundaries',`Unsupported JSON pointer/path ${JSON.stringify(arr)}`);
      const id=op.id??op.item_id??op.item??op.consumer??op.contract_key??arr?.[1];
      const before=op.before??op.from??op.before_object??op.old??op.expected_value??op.expected;
      let after=op.after??op.to??op.new??op.replacement_value??op.replacement;
      const axis=op.axis??op.case??op.boundary_case??before?.case;
      const target=op.contract??op.target??op.file??(typeof op.path==='string'?op.path:null)??p.contract;
      if(Array.isArray(p.scope_batches)||selection?.filter_batches){const batches=p.scope_batches??selection.filter_batches;need(inventory.some(x=>batches.includes(x.batch)&&x.contract===target),`Unsupported out-of-scope multi-batch target ${target}`);if(target!==b.contract)continue;}
      const key=`${b.batch}/${id}/${axis}`;packetKeys.push(key);
      need(expected.has(key),`Unexpected/unowned axis ${key}`);need(!seen.has(key),`Duplicate axis ${key}`);seen.add(key);
      const exp=expected.get(key);
      need(target===exp.contract,`${key}: incorrect contract ${target}`);
      need(before?.case===axis,`${key}: before axis mismatch`);
      const doc=contract(target), entries=doc.contracts??doc;
      need(entries[id]&&Array.isArray(entries[id].boundaries),`${key}: missing live boundaries`);
      const matching=entries[id].boundaries.map((x,i)=>[x,i]).filter(([x])=>x.case===axis);
      need(matching.length===1,`${key}: missing/duplicate live axis`);
      const [current,index]=matching[0];
      const declared=op.boundary_index??op.index??op.index_at_snapshot??arr?.[3];
      if(declared!==undefined)need(Number(declared)===index,`${key}: stale boundary index`);
      need(equal(current,before),`${key}: before-boundary-object CAS mismatch`);
      if(op.fields){need(!after,'Mixed field and whole-object operations');after=clone(before);for(const f of op.fields){need(owned.has(f.field)&&f.field!=='case',`Unsupported field ${f.field}`);need(Object.hasOwn(before,f.field)===f.before_present,`Field presence CAS ${f.field}`);if(f.before_present)need(equal(before[f.field],f.before),`Field value CAS ${f.field}`);if(f.after_present===false)delete after[f.field];else {need(Object.hasOwn(f,'after'),`Missing after ${f.field}`);after[f.field]=clone(f.after);}}}
      after=mergeBoundary(before,after);
      const sg=sourceGuards.find(x=>x.id===id);
      const source=op.source??op.source_path??op.source_file??op.sourcefile??op.source_binding?.path??op.source_guard?.target??op.source_guard?.path??sg?.source??sg?.path??exp.source;
      need(source===exp.source,`${key}: source path differs from inventory`);
      let snapshot=op.source_archive??op.source_raw_guard??op.sourcebinding??sg?.current_archive??op.source_binding?.snapshot??op.source_guard?.before_path;
      if(!snapshot&&sg?.before)snapshot=path.posix.join(dir,sg.before);
      if(!snapshot) {
        const options=[`${dir}/source-bindings/${source}`,`${dir}/items/${id}.md`,`${dir}/sources/${id}.md`,`${dir}/sources/${source}`,`${dir}/before/${source}`].filter(exists);
        need(options.length<=1,`${key}: ambiguous source snapshot`);snapshot=options[0]??null;
      }
      const currentBytes=read(source);
      if(snapshot)need(currentBytes.equals(read(addInput(snapshot))),`${key}: current source differs from genuine archived snapshot`);
      const rowSchemaErrors=boundarySchemaErrors(after,currentBytes.toString('utf8'));
      if(rowSchemaErrors.length){schemaErrors.push(...rowSchemaErrors.map(e=>({...e,batch:b.batch,id,axis,packet,contract:target})));throw Error(`${key}: ${rowSchemaErrors.map(e=>e.code+': '+e.message).join('; ')}`);}
      const raw=sha(currentBytes);
      const declaredRaw=op.source_raw_sha256??op.source_sha256??op.source_binding?.raw_sha256??op.source_guard?.raw_sha256??sg?.sha256;
      need(snapshot||declaredRaw,`${key}: no exact source guard`);
      if(declaredRaw)need(raw===declaredRaw,`${key}: raw source hash mismatch`);
      need(review?.items.includes(id),`${key}: no explicit known full-source-read record`);
      const rr=review.source_read_records?.find(r=>r.id===id);if(rr)need(rr.source===source&&rr.raw===raw&&rr.axes?.includes(axis),`${key}: reading ledger does not bind actual axis/source`);
      const reason=after.template_review?.reason??op.brief_reason??op.reason??op.review_basis??after.reviewed?.reason??after.reason??after.evidence;
      need(typeof reason==='string'&&reason.trim().length>=40,`${key}: substantive actual review reason required`);
      // Hash binding is mechanical; registry identifies the already-completed review.
      operations.push({batch:b.batch,id,axis,contract:target,index,before:clone(before),after,source,snapshot,source_raw_sha256:raw,packet,reviewer:review.reviewer,read_evidence:review.evidence,review_reason:reason,template:exp.template,contradicted:exp.contradicted});
      coveredItems.add(id);
    } catch(e){errors.push(`${packet}: ${e.message}`);}
    packetReports.push({batch:b.batch,packet,schema,rows:rows.length,review_record:!!review,packet_keys:packetKeys});
  }
  const schemaItemChecks=[];
  for(const b of inventory)for(const i of b.items){
    const current=contract(b.contract),entry=(current.contracts??current)[i.id];
    if(!entry||!Array.isArray(entry.boundaries))continue;
    const projected=clone(entry.boundaries);for(const op of operations.filter(o=>o.batch===b.batch&&o.id===i.id))projected[op.index]=op.after;
    const issues=boundaryArraySchemaErrors(projected,read(i.source).toString('utf8'));
    schemaItemChecks.push({batch:b.batch,id:i.id,boundary_rows:projected.length,checked_rows:projected.filter(x=>x.status==='checked').length,issues:issues.length});
    for(const issue of issues){schemaErrors.push({...issue,batch:b.batch,id:i.id,contract:b.contract,scope:'complete-projected-boundary-array'});errors.push(`${b.contract}: ${i.id}: ${issue.code}: ${issue.message}`);}
  }
  for(const [key,e] of expected)if(!operations.some(o=>`${o.batch}/${o.id}/${o.axis}`===key))missing.push({key,problem:seen.has(key)?'operation rejected (see errors)':'missing flagged axis'});
  const extras=(registry.records??[]).filter(r=>!packetReports.some(p=>p.packet===r.packet)).map(r=>r.packet);
  if(extras.length)errors.push(`Review registry contains unknown/unused packets: ${extras.join(', ')}`);
  return {run:RUN,version:1,collector_revision:COLLECTOR_REVISION,schema_errors:schemaErrors,schema_item_checks:schemaItemChecks,ready:!errors.length&&!missing.length&&coveredItems.size===910,expected_items:910,expected_axes:expected.size,covered_items:coveredItems.size,accepted_axes:operations.length,missing,errors,packets:packetReports,inputs:[...inputs].map(([file,sha256])=>({file,sha256})),operations,contracts:[...docs].map(([file,{beforeBytes}])=>({file,raw_sha256:sha(beforeBytes)})),template_cluster_records:clusters.length,native_credit:false,review:false,gate:false};
}
function normalizeReason(text,id){let t=String(text??'').replace(/"[^"]*"/g,'<QUOTE>').replace(/“[^”]*”/g,'<QUOTE>').replace(/`[^`]*`/g,'<QUOTE>').replace(/\$[^$]*\$/g,'<MATH>');if(id)t=t.split(id).join('<ID>');for(const c of ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'])t=t.split(c).join('<CASE>');return t.toLowerCase().replace(/[^a-z<>]+/g,' ').trim();}
export async function bind(repo,plan,{prospectiveOnly=false}={}) {
  need(prospectiveOnly||plan.ready,'Incomplete plan cannot be sealed');
  const {itemHashGuard}=await import(pathToFileURL(path.join(repo,'tools/item-hash.mjs')));
  const result=clone(plan), reasons=new Map();
  for(const op of result.operations){const raw=fs.readFileSync(path.join(repo,op.source));need(sha(raw)===op.source_raw_sha256,'Source changed during binding');const digest=itemHashGuard(raw.toString('utf8'));
    if(op.template)op.after.template_review={...op.after.template_review,upheld:true,by:op.reviewer,reason:op.review_reason,item_sha256:digest,row_sha256:rowHash(op.after)};
    if(op.contradicted&&op.after.status==='not_applicable')op.after.reviewed={...op.after.reviewed,upheld:true,by:op.reviewer,reason:op.review_reason};
    if(op.template){const k=normalizeReason(op.review_reason,op.id);if(!reasons.has(k))reasons.set(k,new Set());reasons.get(k).add(op.id);}
  }
  if(!prospectiveOnly)for(const [reason,ids] of reasons)need(ids.size<3,`Review reason repeats across ${ids.size} items after boundary-audit normalization: ${reason}`);
  if(prospectiveOnly)result.prospective_only=true;return result;
}
// Parse spans, then replace only selected value bytes. All foreign bytes survive exactly.
export function replaceBoundarySpans(raw,operations) {
  const text=Buffer.isBuffer(raw)?raw.toString('utf8'):raw, doc=JSON.parse(text),spans=new Map();let i=0;
  const ws=()=>{while(/\s/.test(text[i]??'')&&i<text.length)i++;};
  const string=()=>{const start=i++;while(i<text.length){if(text[i]==='\\'){i+=2;continue;}if(text[i++]==='"')return JSON.parse(text.slice(start,i));}throw Error('Unclosed JSON string');};
  const value=p=>{ws();const start=i,c=text[i];
    if(c==='{'){i++;ws();if(text[i]!=='}')for(;;){need(text[i]==='"','JSON object key expected');const k=string();ws();need(text[i++]===':','JSON colon expected');value([...p,k]);ws();if(text[i]!==',')break;i++;ws();}need(text[i++]==='}','JSON object end expected');}
    else if(c==='['){i++;ws();let n=0;if(text[i]!==']')for(;;){value([...p,n++]);ws();if(text[i]!==',')break;i++;}need(text[i++]===']','JSON array end expected');}
    else if(c==='"')string();else {while(i<text.length&&!/[\s,}\]]/.test(text[i]))i++;need(i>start,'JSON value expected');}
    const k=JSON.stringify(p);need(!spans.has(k),'Duplicate JSON key/path');spans.set(k,{start,end:i});
  };value([]);ws();need(i===text.length,'Unexpected trailing JSON');
  const replacements=operations.map(op=>{const p=doc.contracts?['contracts',op.id,'boundaries',op.index]:[op.id,'boundaries',op.index],span=spans.get(JSON.stringify(p));need(span&&equal(JSON.parse(text.slice(span.start,span.end)),op.before),'Raw boundary span CAS failed');const lineStart=text.lastIndexOf('\n',span.start-1)+1,leading=text.slice(lineStart,span.start),indent=/^ *$/.test(leading)?leading:'';return {...span,replacement:JSON.stringify(op.after,null,2).replace(/\n/g,'\n'+indent)};}).sort((a,b)=>b.start-a.start);
  let result=text,last=text.length;for(const r of replacements){need(r.end<=last,'Duplicate/overlapping boundary spans');result=result.slice(0,r.start)+r.replacement+result.slice(r.end);last=r.start;}return result;
}
export async function prospectiveAnalysis(repo,plan) {
  const bound=await bind(repo,plan,{prospectiveOnly:true}),{itemHashGuard}=await import(pathToFileURL(path.join(repo,'tools/item-hash.mjs')));
  const ops=new Map(bound.operations.map(o=>[`${o.contract}/${o.id}/${o.axis}`,o])),rows=[],sourceHashes=new Map();
  const contextGuards=[],globalSchemaErrors=[];
  const files=fs.readdirSync(path.join(repo,'research')).filter(n=>new RegExp(`^${RUN}-batch-[0-9]+\\.proof-contracts\\.json$`).test(n)).map(n=>`research/${n}`);
  need(files.length===101,`Prospective global scope requires101 actual contracts, found ${files.length}`);
  for(const file of files){const bytes=fs.readFileSync(path.join(repo,file));contextGuards.push({file,sha256:sha(bytes)});const d=JSON.parse(bytes);for(const [id,e] of Object.entries(d.contracts??d))for(const old of e.boundaries??[]){const op=ops.get(`${file}/${id}/${old.case}`),b=op?.after??old;rows.push({file,batch:Number(/batch-(\d+)/.exec(file)[1]),id,case:b.case,status:b.status,reason:b.reason,evidence:b.evidence,text:b.reason??b.evidence??'',template_review:b.template_review,proposed:!!op,reader:op?.reviewer});}}
  for(const r of rows){const source=path.join(repo,'items',`${r.id}.md`);need(fs.existsSync(source),`Global projected source missing ${r.id}`);for(const issue of boundarySchemaErrors({case:r.case,status:r.status,reason:r.reason,evidence:r.evidence},fs.readFileSync(source,'utf8')))globalSchemaErrors.push({...issue,id:r.id,case:r.case,batch:r.batch,file:r.file});}
  const reasonGroups=new Map(),groups=new Map();
  for(const r of rows){const reason=r.template_review?.reason;if(typeof reason==='string'){const k=normalizeReason(reason,r.id);if(!reasonGroups.has(k))reasonGroups.set(k,[]);reasonGroups.get(k).push(r);}if(!['checked','not_applicable'].includes(r.status))continue;const k=`${r.status}|${normalizeReason(r.text,r.id)}`;if(k.endsWith('|'))continue;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(r);}
  const whyUnbound=r=>{const v=r.template_review,why=[];if(v?.upheld!==true)why.push('no upheld template review');if(typeof v?.by!=='string'||!v.by.trim())why.push('missing reviewer');if(typeof v?.reason!=='string'||v.reason.trim().length<40)why.push('missing substantive reason');const source=path.join(repo,'items',`${r.id}.md`);if(!sourceHashes.has(r.id))sourceHashes.set(r.id,fs.existsSync(source)?itemHashGuard(fs.readFileSync(source,'utf8')):null);if(v?.item_sha256!==sourceHashes.get(r.id)||sourceHashes.get(r.id)===null)why.push('item guard missing/stale');if(v?.row_sha256!==sha(JSON.stringify({case:r.case,status:r.status,text:r.text})))why.push('row hash missing/stale');if(new Set((reasonGroups.get(normalizeReason(v?.reason,r.id))??[]).map(x=>x.id)).size>=3)why.push('review reason reused across at least3 items');return why;};
  const templates=[...groups].filter(([,rs])=>new Set(rs.map(r=>r.id)).size>=3).map(([key,rs])=>({status:rs[0].status,normalised:key.slice(key.indexOf('|')+1),distinct_items:new Set(rs.map(r=>r.id)).size,members:rs.length,unbound_members:rs.filter(r=>whyUnbound(r).length).length,rows:rs.map(r=>({...r,unbound_reasons:whyUnbound(r)}))})).sort((a,b)=>b.members-a.members);
  const reviewReasonReuse=[...reasonGroups].filter(([,rs])=>new Set(rs.map(r=>r.id)).size>=3).map(([normalised,rs])=>({normalised,distinct_items:new Set(rs.map(r=>r.id)).size,rows:rs.map(r=>({batch:r.batch,id:r.id,case:r.case,reason:r.template_review.reason,by:r.template_review.by,proposed:r.proposed,reader:r.reader}))}));
  for(const id of sourceHashes.keys()){const file=`items/${id}.md`;if(fs.existsSync(path.join(repo,file)))contextGuards.push({file,sha256:sha(fs.readFileSync(path.join(repo,file)))});}
  return {version:1,run:RUN,prospective_only:true,collector_revision:COLLECTOR_REVISION,strict_boundary_schema_errors:globalSchemaErrors,context_guards:contextGuards,native_gate:false,mathematical_review:false,full_packet_coverage:plan.ready,packet_blockers:plan.errors,missing:plan.missing,contracts:files.length,rows:rows.length,proposed_rows:bound.operations.length,template_candidates:templates.length,remaining_unbound_template_groups:templates.filter(t=>t.unbound_members).length,review_reason_reuse_groups:reviewReasonReuse.length,templates,review_reason_reuse:reviewReasonReuse};
}
function exclusive(file,text){fs.mkdirSync(path.dirname(file),{recursive:true});const fd=fs.openSync(file,'wx');try{fs.writeFileSync(fd,text);fs.fsyncSync(fd);}finally{fs.closeSync(fd);}}
export function apply(repo,seal,authorization,sealBytes,archive) {
  need(seal.collector_revision===COLLECTOR_REVISION,'Only Revision2 collector seals may be applied by this driver');
  need(seal.sealed_for_root_apply===true&&seal.prospective_only!==true,'Apply requires the final root seal; prospective plans cannot be applied');
  need(authorization.actor==='/root'&&authorization.run===RUN&&authorization.action==='apply-boundary-field-cas'&&authorization.seal_sha256===sha(sealBytes),'Explicit root authorization does not bind exact seal');
  const original=JSON.parse(fs.readFileSync(path.join(repo,`${PREFIX}audit-diagnosis/affected-by-batch.json`)));
  const expected=new Set(original.flatMap(b=>b.items.flatMap(i=>[...new Set([...i.template_rows??[],...i.contradicted??[]].map(x=>x.case))].map(axis=>`${b.batch}/${i.id}/${axis}`))));
  const actual=seal.operations.map(o=>`${o.batch}/${o.id}/${o.axis}`);
  need(new Set(actual).size===actual.length&&actual.length===expected.size&&actual.every(k=>expected.has(k)),'Seal axis coverage missing/duplicate/unowned');
  need(seal.ready&&seal.expected_items===910&&seal.covered_items===910&&seal.operations.length===seal.expected_axes,'Incomplete seal');
  const files=new Map();
  for(const g of [...seal.inputs,...seal.contracts.map(c=>({file:c.file,sha256:c.raw_sha256}))])need(sha(fs.readFileSync(path.join(repo,g.file)))===g.sha256,`Input changed after sealing: ${g.file}`);
  for(const op of seal.operations){const source=fs.readFileSync(path.join(repo,op.source));need(!boundarySchemaErrors(op.after,source.toString('utf8')).length,`Strict boundary schema failed ${op.id}/${op.axis}`);need(sha(source)===op.source_raw_sha256&&(!op.snapshot||source.equals(fs.readFileSync(path.join(repo,op.snapshot)))),`Source CAS failed ${op.source}`);if(!files.has(op.contract)){const bytes=fs.readFileSync(path.join(repo,op.contract));files.set(op.contract,{before:bytes,doc:JSON.parse(bytes)});}const d=files.get(op.contract).doc,entry=(d.contracts??d)[op.id];need(equal(entry.boundaries[op.index],op.before),`Boundary CAS failed ${op.id}/${op.axis}`);entry.boundaries[op.index]=clone(op.after);}
  // Verify every non-boundary field, including whole foreign finite_smoke arrays.
  for(const [file,{before,doc}] of files){for(const id of new Set(seal.operations.filter(o=>o.contract===file).map(o=>o.id))){const entry=(doc.contracts??doc)[id];need(!boundaryArraySchemaErrors(entry.boundaries,fs.readFileSync(path.join(repo,seal.operations.find(o=>o.contract===file&&o.id===id).source),'utf8')).length,`Full projected boundary schema failed ${id}`);}}
  for(const {before,doc} of files.values()){const old=JSON.parse(before),a=clone(old),b=clone(doc);for(const x of Object.values(a.contracts??a))if(x&&typeof x==='object')delete x.boundaries;for(const x of Object.values(b.contracts??b))if(x&&typeof x==='object')delete x.boundaries;need(equal(a,b),'Foreign contract fields changed');}
  need(!fs.existsSync(archive),'Archive already exists; never overwrite historical evidence');fs.mkdirSync(archive,{recursive:true});
  exclusive(path.join(archive,'seal.json'),sealBytes);exclusive(path.join(archive,'root-authorization.json'),JSON.stringify(authorization,null,2)+'\n');
  const pending=[];
  for(const [file,{before,doc}] of files){exclusive(path.join(archive,'before',file),before);const target=path.join(repo,file),tmp=`${target}.boundary-root-${randomUUID()}.tmp`;const after=replaceBoundarySpans(before,seal.operations.filter(o=>o.contract===file));need(equal(JSON.parse(after),doc),'Raw span replacement differs from verified field CAS');exclusive(tmp,after);pending.push({file,target,tmp,before_sha256:sha(before),after_sha256:sha(after)});}
  exclusive(path.join(archive,'transaction.json'),JSON.stringify({run:RUN,native_credit:false,multi_file_atomic:false,files:pending},null,2)+'\n');
  // Per-file rename is atomic; multi-file atomicity is not claimed. Crash recovery uses transaction+before archives.
  for(const p of pending){need(sha(fs.readFileSync(p.target))===p.before_sha256,`Concurrent contract write ${p.file}`);fs.renameSync(p.tmp,p.target);}
  exclusive(path.join(archive,'completed.json'),JSON.stringify({files:pending.map(p=>({file:p.file,after_sha256:p.after_sha256})),native_credit:false,gate:false})+'\n');
}
async function main(){const args=process.argv.slice(2),command=args.shift()??'inspect';const option=(name,fallback=null)=>{const i=args.indexOf(`--${name}`);return i<0?fallback:args[i+1];};const repo=path.resolve(option('repo',process.cwd()));
  if(command==='analyze'){need(option('output'),'Prospective analysis output required');const result=await prospectiveAnalysis(repo,collect(repo,option('reviews'),option('selections')));exclusive(path.resolve(option('output')),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({...result,templates:undefined,review_reason_reuse:undefined,context_guards:undefined,missing:undefined,packet_blockers:undefined},null,2));return;}
  if(command==='inspect'||command==='seal'){let plan=collect(repo,option('reviews'),option('selections'));if(command==='seal'){need(option('reviews'),'Root review registry required');const analysis=await prospectiveAnalysis(repo,plan);need(analysis.remaining_unbound_template_groups===0&&analysis.review_reason_reuse_groups===0&&analysis.strict_boundary_schema_errors.length===0,'Prospective global normalization still has unbound/reused-review candidates');
      const inputs=new Map(plan.inputs.map(g=>[g.file,g.sha256]));for(const g of analysis.context_guards){need(!inputs.has(g.file)||inputs.get(g.file)===g.sha256,`Context changed during seal ${g.file}`);inputs.set(g.file,g.sha256);}plan.inputs=[...inputs].map(([file,sha256])=>({file,sha256}));
      plan.global_prospective={contracts:analysis.contracts,rows:analysis.rows,template_candidates:analysis.template_candidates,strict_boundary_schema_errors:0,remaining_unbound_template_groups:0,review_reason_reuse_groups:0,native_gate:false};
      plan=await bind(repo,plan);plan.sealed_for_root_apply=true;need(option('output'),'Seal output required');exclusive(path.resolve(option('output')),JSON.stringify(plan,null,2)+'\n');}else {const output=option('output');const summary={...plan,operations:undefined,inputs:undefined,contracts:undefined};if(output)exclusive(path.resolve(output),JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary,null,2));}return;}
  if(command==='apply'){need(option('seal')&&option('authorization')&&option('archive'),'Apply requires --seal --authorization --archive');const bytes=fs.readFileSync(option('seal'));apply(repo,JSON.parse(bytes),JSON.parse(fs.readFileSync(option('authorization'))),bytes,path.resolve(option('archive')));return;}throw Error(`Unsupported command ${command}`);
}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve(new URL(import.meta.url).pathname))main().catch(e=>{console.error(e.message);process.exitCode=1;});
