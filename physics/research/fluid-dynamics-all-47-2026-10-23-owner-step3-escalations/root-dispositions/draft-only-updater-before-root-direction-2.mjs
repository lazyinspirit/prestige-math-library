// Draft generator only. There is intentionally no apply mode or native writer.
import {readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {join, resolve, relative} from 'node:path';

const HERE=fileURLToPath(new URL('.',import.meta.url));
const ROOT=resolve(HERE,'../../..');
const OUT=join(HERE,'guarded-proposals');
const spec=JSON.parse(readFileSync(join(HERE,'guarded-update-spec.json'),'utf8'));
const sha=x=>createHash('sha256').update(x).digest('hex');
const body=b=>{
  const t=b.toString();const m=/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/.exec(t);
  return Buffer.from(m?t.slice(m[0].length):t);
};
const bytes=p=>readFileSync(join(ROOT,p));
const json=p=>JSON.parse(bytes(p));
const clone=x=>JSON.parse(JSON.stringify(x));
const flags=process.argv.slice(2);
if(flags.some(x=>x!=='--check'))throw Error('Only default draft generation and --check are supported. No apply mode exists.');
if(flags.includes('--check')){
  const guards=JSON.parse(readFileSync(join(OUT,'preimage-guards.json'),'utf8'));
  const changed=guards.inputs.filter(x=>!existsSync(join(ROOT,x.path))||sha(bytes(x.path))!==x.raw_sha256_guard)
    .map(x=>({...x,body_unchanged_when_raw_differs:x.body_sha256_guard&&existsSync(join(ROOT,x.path))
      ?sha(body(bytes(x.path)))===x.body_sha256_guard:null,
      disposition:'Root must review the actual difference. Raw guards are never silently refreshed after metadata/numeric integration.'}));
  console.log(JSON.stringify({mode:'read-only preimage comparison; no validator/gate/seal',changed},null,2));
  process.exit(changed.length?1:0);
}
if(existsSync(join(OUT,'proposal.json')))throw Error('Draft already exists. Preserve it; root may move the draft directory before regenerating after metadata changes.');
mkdirSync(join(OUT,'preimages'),{recursive:true});
mkdirSync(join(OUT,'candidate-native-files'),{recursive:true});
const inputs=new Map();
function guard(path,archive=false){
  if(inputs.has(path)&&!archive)return inputs.get(path);
  const b=bytes(path);const g={path,raw_sha256_guard:sha(b),guard_kind:'raw preimage only; never native content seal'};
  if(path.startsWith('items/')){
    const bb=body(b);g.body_sha256_guard=sha(bb);
    g.guard_kind='scientific body guard plus original raw metadata preimage; never native content seal';
    const name=path.replaceAll('/','__')+'.body.txt';writeFileSync(join(OUT,'preimages',name),bb);
    g.body_archive=relative(ROOT,join(OUT,'preimages',name));
  }
  if(archive){const name=path.replaceAll('/','__');copyFileSync(join(ROOT,path),join(OUT,'preimages',name));g.archive=relative(ROOT,join(OUT,'preimages',name));}
  inputs.set(path,g);return g;
}
const run=spec.run,at=new Date().toISOString();
const ledgerPath='research/defect-ledger.jsonl';guard(ledgerPath);
const rawLines=bytes(ledgerPath).toString().split('\n').filter(Boolean);
const allRows=rawLines.map(JSON.parse);
const runRows=allRows.filter(x=>x.run===run);
const superseded=new Set(runRows.flatMap(x=>x.supersedes??[]));
const active=new Map(runRows.filter(x=>!superseded.has(x.defect_id)).map(x=>[x.defect_id,x]));
const allIds=new Set(allRows.map(x=>x.defect_id));
const decisions=[],scopes=new Map(),documents=new Map();
for(let batch=1;batch<=47;batch++){
  const dp=`research/${run}-alpha-batch-${batch}-3a-decisions.json`;
  const sp=`research/${run}-step3-scope-${batch}.json`;
  guard(dp);guard(sp);const d=json(dp);documents.set(batch,{path:dp,before:d,after:clone(d)});scopes.set(batch,json(sp));
  for(const x of d.decisions)decisions.push({batch,decision:x});
  for(const name of ['reader-findings','refute']){const p=`research/${run}-${name}-${batch}.json`;if(existsSync(join(ROOT,p)))guard(p);}
  for(const label of ['pre','post','pre-3a','post-3a']){const p=`research/${run}-step3-hash-${batch}-${label}.json`;if(existsSync(join(ROOT,p)))guard(p);}
  for(const [role,unit] of [['reader','reader'],['refuter','refute'],['alpha-3a','batch']]){
    const p=`research/${run}-dispatch/${role}-${unit}-${batch}.result.json`;if(existsSync(join(ROOT,p)))guard(p);
  }
}
const issues=[],appendRows=[],patches=[],remap=new Map(),selectedIds=new Set();
for(const issue of spec.issues){
  for(const p of issue.reports){guard(p);json(p);}
  guard(`items/${issue.subject}.md`);
  const old=issue.old_id?active.get(issue.old_id):null;
  if(issue.old_id&&!old)throw Error(`Expected active row absent: ${issue.old_id}`);
  const id=issue.new_id??`${issue.old_id}-owner-resolution`;
  if(allIds.has(id))throw Error(`Proposed new id already exists: ${id}`);
  const selected=decisions.filter(({decision:d})=>issue.obligations
    ?issue.obligations.includes(d.obligation):issue.old_id&&d.defect_ids?.includes(issue.old_id));
  if(issue.obligations&&selected.length!==issue.obligations.length)throw Error(`Original obligation inventory changed: ${issue.key}`);
  const refs=selected.map(({batch,decision:d})=>({path:`research/${run}-alpha-batch-${batch}-3a-decisions.json`,obligation:d.obligation}));
  const row=old?clone(old):{defect_id:id,run,at,batch:String(issue.producer_batch),group:`batch-${issue.producer_batch}`,subject:issue.subject,class:'accuracy',subclass:issue.subclass,severity:issue.severity,location:issue.location,caught_at_stage:'3a-adjudicate',caught_by_role:'owner'};
  row.defect_id=id;row.at=at;row.disposition='fixed';row.repair_confidence=1;
  if(old){row.supersedes=[old.defect_id];delete row.metadata_correction;remap.set(old.defect_id,id);selectedIds.add(old.defect_id);}
  row.correction=issue.resolution;
  row.evidence=[...(old?.evidence??[]),...issue.reports.map(path=>({path,note:'Final scientific-owner repair evidence; proposed root disposition only, not accepted by this draft.'}))];
  row.adjudication_ref=[...(old?.adjudication_ref??[])];
  for(const ref of refs)if(!row.adjudication_ref.some(x=>x.path===ref.path&&x.obligation===ref.obligation))row.adjudication_ref.push(ref);
  appendRows.push(row);
  const item={key:issue.key,subject:issue.subject,old_defect_id:issue.old_id??null,proposed_defect_id:id,proposed_ledger_row:row,scientific_owner_reports:issue.reports,root_semantics_blocks:issue.blocks,root_accepted:false,decisions:[]};
  for(const {batch,decision:before} of selected){
    const scope=scopes.get(batch);const frozen=[...(scope.reader_findings??[]),...(scope.refuter_findings??[])].find(x=>x.obligation===before.obligation);
    const findingNote=frozen?`Original ${before.obligation}: type ${frozen.defect}, severity ${frozen.severity}, location ${JSON.stringify(frozen.location)}; observed carrier ${frozen.observed_sha256??'unbound'}, raw source ${frozen.observed_source?.item_sha256??'unbound'}. These immutable observations are preserved exactly.`:`Original ${before.obligation} is retained with its native routing and discovery evidence.`;
    const owner_resolution=[before.owner_resolution, findingNote,issue.resolution,`Scientific evidence: ${issue.reports.join('; ')}.`].filter(Boolean).join('\n\n');
    const after=clone(before);after.owner_resolution=owner_resolution;after.evidence=`${before.evidence}\n\nFinal scientific-owner resolution proposed for root review: ${issue.resolution}`;after.repair_confidence=1;
    after.defect_ids=after.defect_ids?.length?after.defect_ids.map(x=>x===issue.old_id?id:x):[id];
    if(before.verdict==='escalated')after.verdict=row.severity==='fatal'?'confirmed_fatal':'confirmed_nonfatal';
    // Do not select a terminal interpretation for the inconsistent native47 refuter.
    const unresolved=before.obligation==='refuter:47:1';
    if(unresolved){after.verdict='escalated';delete after.repair_confidence;}
    const patch={batch,obligation:before.obligation,id:before.id,before,proposed_after:after,original_frozen_finding:frozen??null,root_approval_required:true,terminal_interpretation_proposed:!unresolved,root_semantics_blocks:issue.blocks};
    item.decisions.push(patch);patches.push(patch);
    const doc=documents.get(batch);doc.after.decisions[doc.after.decisions.findIndex(x=>x.obligation===before.obligation)]=after;
  }
  // Add only the ordinary explicit same-finding pointer when the actual immutable
  // base guards match. No ownerReviewedFindingAlias receipt or seal is created.
  for(const patch of item.decisions){
    if(patch.proposed_after.route!=='flagged'||patch.proposed_after.same_defect_as)continue;
    const a=patch.original_frozen_finding;
    const prior=item.decisions.find(p=>p.batch===patch.batch&&p.proposed_after.route==='reader');
    const b=prior?.original_frozen_finding;
    if(!a||!b||patch.proposed_after.verdict!==prior.proposed_after.verdict)continue;
    const sameCarrier=Boolean(a.observed_sha256)&&a.observed_sha256===b.observed_sha256;
    const sameLocation=String(a.location??'').trim().toLowerCase()===String(b.location??'').trim().toLowerCase();
    if(a.defect===b.defect&&(sameCarrier||a.severity===b.severity&&sameLocation)){
      patch.proposed_after.same_defect_as=prior.obligation;
      patch.proposed_after.same_defect_evidence=`The immutable ${prior.obligation} and ${patch.obligation} records report the same ${issue.key} source fault. Their original types, severities, locations and fingerprints are retained; ${sameCarrier?'their observed combined carriers are identical':'their original type, severity and literal location agree'}. ${issue.resolution}`;
    }
  }
  issues.push(item);
}
// Substantive supersession is not taxonomy-only ID forwarding. Draft all other
// genuine current references as mechanical remaps so no original decision points
// at a substantively superseded inactive row. Root still reviews these separately.
const covered=new Set(patches.map(x=>x.obligation));const referenceOnly=[];
for(const {batch,decision:before} of decisions){
  if(covered.has(before.obligation)||!before.defect_ids?.some(x=>remap.has(x)))continue;
  const after=clone(before);after.defect_ids=after.defect_ids.map(x=>remap.get(x)??x);
  referenceOnly.push({batch,obligation:before.obligation,before,proposed_after:after,reason:'Reference-only remap to the proposed append-only substantive successor; no new scientific verdict.'});
  for(const id of after.defect_ids){
    const row=appendRows.find(x=>x.defect_id===id);
    const path=`research/${run}-alpha-batch-${batch}-3a-decisions.json`;
    if(row&&!row.adjudication_ref.some(x=>x.path===path&&x.obligation===before.obligation))
      row.adjudication_ref.push({path,obligation:before.obligation});
  }
  const d=documents.get(batch);d.after.decisions[d.after.decisions.findIndex(x=>x.obligation===before.obligation)]=after;
}
const changed=[];
for(const [batch,d] of documents){
  if(JSON.stringify(d.before)===JSON.stringify(d.after))continue;
  guard(d.path,true);changed.push(d.path);
  writeFileSync(join(OUT,'candidate-native-files',d.path.split('/').at(-1)),JSON.stringify(d.after,null,2)+'\n');
}
writeFileSync(join(OUT,'preimages','selected-ledger-original-lines.jsonl'),rawLines.filter(x=>selectedIds.has(JSON.parse(x).defect_id)).join('\n')+'\n');
const proposal={version:1,run,mode:'DRAFT ONLY: no original files changed; no acceptance, alias, seal, native state or gate write',created_at:at,coverage:{original_escalated_obligations:patches.filter(p=>p.before.verdict==='escalated').length,run_owned_maintenance_rows:issues.filter(i=>!spec.issues.find(x=>x.key===i.key).obligations).length,decision_candidates:patches.length,reference_only_remaps:referenceOnly.length,proposed_append_only_rows:appendRows.length},issues,reference_only_remaps:referenceOnly,candidate_native_files:changed,unresolved_root_semantics:issues.filter(x=>x.root_semantics_blocks.length).map(x=>({key:x.key,blocks:x.root_semantics_blocks})),cannot_claim_schema_gate_pass:'Enum-shaped native candidates and ledger rows only. Inconsistent refuter47 intentionally stays escalated. Missing sharing/ownership/root acceptance are blockers; no validator or closure gate was run.',root_apply_instructions:'Review archived preimages and raw guards. Resolve every semantic block first. Recompute current canonical/numeric/subject bindings through native tools after metadata integration; this helper does not produce any seal. Root alone may then append reviewed successor rows and adopt reviewed native decisions; never overwrite original observations/scopes/reports/receipts/snapshots.'};
writeFileSync(join(OUT,'proposal.json'),JSON.stringify(proposal,null,2)+'\n');
writeFileSync(join(OUT,'proposed-ledger-append.json'),JSON.stringify(appendRows,null,2)+'\n');
writeFileSync(join(OUT,'preimage-guards.json'),JSON.stringify({version:1,run,purpose:'Raw preimage guards only; not content/readiness/native seals',inputs:[...inputs.values()]},null,2)+'\n');
console.log(JSON.stringify({mode:'draft only; originals untouched',output:relative(ROOT,OUT),coverage:proposal.coverage,root_semantics:proposal.unresolved_root_semantics},null,2));
