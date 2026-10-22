// Prepare actual Root findings and a native repair request; no source writes.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
import {statementHash} from '../tools/physics-support/step5-statement.mjs';
const run='physics-non-fluid-129-2026-10-21-r2';
const out=`research/${run}-owner-step5-combined-referral-queue`;
const native=`research/${run}-step5-v2`;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const pathOf=v=>typeof v==='string'?v:v.path;
const ref=p=>({path:p,sha256:sha(p)});
const write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n',{flag:'wx'});
const need=(v,m)=>{if(!v)throw Error(m);};
const state=read(`.physics-autopilot/${run}/state.json`);
need(state.stage==='5.1-adjudicate'&&state.paused===true&&Object.values(state.dispatches).every(d=>d.endedAt),'not paused/drained');
need(!fs.existsSync(`.physics-autopilot/${run}/controller.lock`),'controller active');
need(fs.existsSync(`${native}/explanatory-review-initial-1-collected.json`),'diagram review not sealed');
need(!fs.existsSync(`${native}/initial-1-collected.json`),'initial parent already immutable');
need(!fs.existsSync(out),'preserve existing queue preparation');
const pack=read(`${native}/initial-1.json`),frontier=read(`${native}/frontier.json`);
const specs={
 'lem-qftx-wavefront-chart-invariance':['qft-referrals','1',58,'fatal','missing-choice-scope','statement'],
 'thm-qftx-wavefront-product':['qft-referrals','1',58,'fatal','missing-choice-scope','statement'],
 'thm-qftx-scalar-eg-induction':['qft-referrals','1',58,'fatal','citation-misattributed','facts-block'],
 'lem-gr-fx-null-focal-boundary-exclusion':['gr-referrals','2',29,'nonfatal','undefined-notation','statement'],
 'ex-gr-fx01-1':['gr-referrals','2',29,'nonfatal','missing-choice-scope','facts-block'],
 'prop-gr-fx-kerr-horizon-generator':['gr-referrals','2',35,'nonfatal','unlicensed-inference','proof-step'],
 'pthm-tgrx-noether-charge-decomposition':['noether-referral','2',117,'nonfatal','unlicensed-inference','proof-step'],
 'thm-qsmx-schmidt-mps-error':['qsm-referrals','3',103,'nonfatal','missing-map','proof-step'],
 'def-qsmx-spin-weight-and-hall-realization':['qsm-referrals','3',108,'fatal','false-or-overstrong-statement','definition'],
 'def-tgrx-exponential-ray-channel':['tgr-referrals','3',120,'nonfatal','citation-inaccurate','frontmatter'],
 'prop-tgrx-collapse-channel-spectrum':['tgr-referrals','3',120,'nonfatal','citation-inaccurate','frontmatter'],
 'pthm-tgrx-conditional-hawking-occupation':['tgr-referrals','3',120,'nonfatal','citation-inaccurate','frontmatter'],
 'rem-tgrx-three-black-hole-states':['tgr-referrals','3',120,'nonfatal','ill-formed','remark'],
 'op-tgrx-continuum-generalized-entropy':['tgr-referrals','3',121,'nonfatal','missing-hypothesis','definition'],
};
const sourceNotes={
 'pthm-tgrx-noether-charge-decomposition':'Proof 3.1 omits the arbitrary-generator-jet coefficient argument and explicit exterior primitive. The same scientific owner supplies this local proof detail without changing the public claim or prerequisites.',
};
const at=new Date().toISOString(),rows=[],entries=[];
fs.mkdirSync(out);fs.mkdirSync(out+'/records');
write(out+'/root-adoption.json',{version:1,run,at,reviewer:'/root',
  decision:'Adopt the named scientific owners\' concrete current findings and guarded proposals for fresh native authoring/review. Preserve the richest sound claims and all original native findings. These are separate owner discoveries, not invented judge tuples.',
  reading:'Root read the completed scientific reports, severity recommendations, selected exact proposal diffs and current defect descriptions. Full supplier and affected-consumer reading remains attributed to each actual scientific owner. No independent full audit of every carrier is claimed.',
  source_writes:false,native_acceptance:false,secondary_findings:'EG module instantiation and the black-hole remark source locator are separate nonfatal records; their closure requires actual final source and native repair evidence, not an extra original tuple.'});
for(const[id,[group,lane,unit,severity,subclass,location]]of Object.entries(specs)){
 const b=`research/${run}-owner-step5-${group}`,index=read(b+'/proposal-index.json');
 let proposal,before,candidate,patch,discovery,findings;
 if(group==='noether-referral'){
  discovery=b+'/report.json';const report=read(discovery);proposal=report.proposal;
  before=`${b}/preimages/items/${id}.md`;candidate=proposal.candidate_path;patch=proposal.patch_path;findings=[];
 }else{
  discovery=b+'/findings.json';findings=read(discovery).findings.filter(f=>f.id===id);
  proposal=index.proposals.find(p=>p.id===id);need(proposal,'missing proposal '+id);
  before=pathOf(proposal.preimage??proposal.before_archive??proposal.before_file);
  candidate=pathOf(proposal.candidate??proposal.candidate_path??proposal.proposed_file);
  patch=pathOf(proposal.patch??proposal.patch_path);
 }
 const live=`items/${id}.md`,text=fs.readFileSync(live,'utf8');
 need(sha(before)===sha(live)&&itemHashGuard(text)===pack.before[id],'source/preimage drift '+id);
 need(/^status: draft$/m.test(text),'not a draft '+id);
 const batch=frontier.batches.find(b=>b.items.includes(id))?.id;need(batch,'outside frontier '+id);
 const reportPath=`${native}/step5-v2-initial-r1-u${unit}.json`;need(fs.existsSync(reportPath),'missing actual outcome');
 const scientificOwner=read(discovery).scientific_owner;need(scientificOwner&&scientificOwner===index.scientific_owner,'wrong actual scientific owner');
 const selected=findings.filter(f=>!(id==='thm-qftx-scalar-eg-induction'&&String(f.classification).includes('module'))&&!(id==='rem-tgrx-three-black-hole-states'&&String(f.classification).includes('presentation')));
 const correction=sourceNotes[id]??selected.map(f=>f.reason??f.defect??`${f.classification}: ${f.location}. ${f.minimal_prerequisite??''}`).join(' ');
 need(correction.length>=40,'missing concrete finding '+id);
 const defectId=`${run}-owner-step5-referral-${id}`;
 const record={defect_id:defectId,run,at,batch,group:`owner-lane-${lane}`,subject:id,class:'accuracy',subclass,severity,location,
  caught_at_stage:'5-adjudicate',caught_by_role:'owner',disposition:'open',correction,
  evidence:[{path:discovery,note:'Actual named scientific-owner current finding; no native acceptance claimed.'},{path:patch,note:'Guarded unapplied surgical proposal.'},{path:reportPath,note:'Preserved actual native referral/context, not a new original tuple.'}],
  scientific_owner:scientificOwner,native_stage:'5.1-adjudicate'};
 const recordPath=`${out}/records/${id}.json`;write(recordPath,record);rows.push(record);
 const science=[ref(discovery),ref(b+'/evidence.json'),ref(b+'/proposal-index.json'),ref(out+'/root-adoption.json')];
 for(const extra of [b+'/report.md',b+'/report.json',b+'/severity-classification.json'])if(fs.existsSync(extra)&&extra!==discovery)science.push(ref(extra));
 const entry={subject:id,owner_lane:lane,mode:'owner-discovery',scientific_owner:scientificOwner,discovery:ref(discovery),root_finding:{defect_id:defectId,record:ref(recordPath)},
  before_source:ref(before),before_content_sha256:itemHashGuard(text),before_statement_sha256:statementHash(text),science,
  proposals:[ref(candidate),ref(patch)],native_outcome:ref(reportPath)};
 const assigned=Object.values(pack.assignments).flat().filter(t=>t.id===id);
 need(assigned.length<=1,'ambiguous original tuple');if(assigned.length)entry.original_tuple=assigned[0];
 entries.push(entry);
}
for(const secondary of [
 {id:'thm-qftx-scalar-eg-induction',suffix:'combined-module-detail',group:'qft-referrals',subclass:'unlicensed-inference',location:'proof-step',correction:'Proof 6.1 needs the induced combined Lorentz action and finite local Hom-module instantiation. The current invariant W/H_F and balanced-label/cocycle interfaces supply the ingredients; the actual source proposal spells out this immediate proof detail.'},
 {id:'rem-tgrx-three-black-hole-states',suffix:'hawking-locator',group:'tgr-referrals',subclass:'citation-inaccurate',location:'frontmatter',correction:'The Hollands–Wald Hawking/state discussion locator is section 2.2(c), not 2.3(c). The same scientific owner actually retrieved and read the precise cited pages and prepared the separate locator correction.'},
]){
 const row={defect_id:`${run}-owner-step5-referral-${secondary.id}-${secondary.suffix}`,run,at,subject:secondary.id,class:'accuracy',subclass:secondary.subclass,severity:'nonfatal',location:secondary.location,caught_at_stage:'5-adjudicate',caught_by_role:'owner',disposition:'open',correction:secondary.correction,
  evidence:[{path:`research/${run}-owner-step5-${secondary.group}/findings.json`,note:'Distinct actual scientific finding; closure requires actual repaired source and native owner evidence.'}],native_stage:'5.1-adjudicate'};
 rows.push(row);write(`${out}/records/${secondary.id}-${secondary.suffix}.json`,row);
}
// Supplier-before-consumer ordering inside each independent native lane.
const depth=id=>Number(/^dependency_level:\s*(\d+)/m.exec(fs.readFileSync(`items/${id}.md`,'utf8'))?.[1]??0);
entries.sort((a,b)=>Number(a.owner_lane)-Number(b.owner_lane)||depth(a.subject)-depth(b.subject)||a.subject.localeCompare(b.subject));
write(out+'/open-rows.json',rows);
write(out+'/request.proposal.json',{version:1,run,phase:'initial',round:1,reviewer:'/root',entries});
write(out+'/preparation.json',{run,at,rows:rows.length,subjects:entries.length,fatal_primary_rows:rows.filter(r=>r.severity==='fatal').length,
  lanes:Object.fromEntries(['1','2','3'].map(l=>[l,entries.filter(e=>e.owner_lane===l).map(e=>e.subject)])),canonical_append_pending:true,native_advertisement_pending:true,source_writes:false});
console.log(JSON.stringify({prepared:entries.length,canonical_open_rows:rows.length,fatal:rows.filter(r=>r.severity==='fatal').length,canonical_append_pending:true,native_advertisement_pending:true}));
