// Root-executable metadata transcription. --prepare writes only this research directory.
// --apply --writers-drained performs guarded shared mutations after root confirms drain.
import fs from 'node:fs';
import path from 'node:path';
import {yaml,split,REPO} from '../../tools/physics-support/pathway-lib.mjs';
import {SOURCE_SECTIONS,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const RUN='physics-td-qft-rpm-62-2026-10-14';
const OUT=`research/${RUN}-reconcile-td-frontier-metadata`;
const PAYLOAD=`${OUT}/root-current-transcription-payload.json`;
const read=p=>fs.readFileSync(path.join(REPO,p),'utf8');
const load=p=>JSON.parse(read(p));
const fail=s=>{throw Error(s)};
const equal=(a,b)=>JSON.stringify(sort(a))===JSON.stringify(sort(b));
function sort(x){return Array.isArray(x)?x.map(sort):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,sort(x[k])])):x;}
const args=process.argv.slice(2);
if(args.includes('--prepare')===args.includes('--apply'))fail('Choose exactly --prepare or --apply --writers-drained.');
if(args.includes('--apply')){
 if(!args.includes('--writers-drained'))fail('Root must explicitly confirm --writers-drained.');
 const payload=load(PAYLOAD);
 if(payload.run!==RUN||payload.expected.items!==686||payload.expected.pages!==128)fail('Wrong payload scope.');
 // All guards are exact byte preimages, deliberately without source hashing.
 for(const input of payload.guards)if(read(input.path)!==input.before)fail(`Changed input: ${input.path}; prepare again after root reconciles currency.`);
 for(const w of payload.writes)if(read(w.path)!==w.before)fail(`Changed write preimage: ${w.path}`);
 const stamp=new Date().toISOString().replace(/[:.]/g,'-');
 const archive=`${OUT}/root-applied-${stamp}`;
 fs.mkdirSync(path.join(REPO,archive),{recursive:true});
 const pending=[];
 for(const [i,w]of payload.writes.entries()){
  fs.writeFileSync(path.join(REPO,archive,`${i}.before`),w.before,{flag:'wx'});
  fs.writeFileSync(path.join(REPO,archive,`${i}.after`),w.after,{flag:'wx'});
  const tmp=path.join(REPO,`${w.path}.root-transcription-${stamp}.tmp`);
  fs.writeFileSync(tmp,w.after,{flag:'wx'});pending.push({tmp,target:path.join(REPO,w.path)});
 }
 // Finish staging and recheck every guard before committing any file.
 for(const input of payload.guards)if(read(input.path)!==input.before)fail(`Input changed while staging: ${input.path}`);
 const receipt={version:1,run:RUN,operation:'root-source-manifest-plan-metadata-transcription',scope:'metadata-only',writersDrained:true,appliedAt:new Date().toISOString(),expected:payload.expected,files:payload.writes.map((w,i)=>({path:w.path,before_file:`${archive}/${i}.before`,after_file:`${archive}/${i}.after`})),source_item_writes:[],page_bodies_preserved:true,dependency_levels:'Not recomputed; root current numeric helper is the next required step.',scientific_review:false,rehash:false,recertification:false,native_gate:false,software_tests:false,mandatory_layout_item_paths:payload.all_item_paths,root_must_bind_currency:true};
 fs.writeFileSync(path.join(REPO,archive,'staged-receipt.json'),JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
 for(const p of pending)fs.renameSync(p.tmp,p.target);
 fs.renameSync(path.join(REPO,archive,'staged-receipt.json'),path.join(REPO,archive,'receipt.json'));
 console.log(JSON.stringify({archive,changed_files:payload.writes.length,...payload.expected,next:'Root numeric dependency-level reconciliation, final explicit item-layout paths, root rehash/recertification.'},null,2));
 process.exit(0);
}
const Y=yaml(),guards=new Map(),writes=new Map();
const guarded=p=>{const s=read(p);guards.set(p,s);return s};
const parsed=p=>JSON.parse(guarded(p));
const qftPacket=`research/${RUN}-owner-frontier-declaration-reconciliation`;
const evidencePaths=[`${OUT}/root-patch-proposal.json`,`${qftPacket}/guarded-root-proposals.json`,`${qftPacket}/parked-qft44-page-proposal.json`,`research/${RUN}-owner-step2-batches12-17-round1/final-receipt.json`];
for(const p of evidencePaths)guarded(p);
const releaseDirs=['qed45-47','qft38','qft43','rpm23-28','batch33','batch49','batch50','batch59','batch61'];
for(const d of releaseDirs)guarded(`research/${RUN}-owner-scope-review-${d}-round-1/final-release.json`);
const qed=load(`research/${RUN}-owner-scope-review-qed45-47-round-1/final-release.json`);
if(qed.source_write_released!==true||qed.sources_frozen!==true)fail('QED final release is not frozen/released.');
for(const k of ['source_guards','metadata_proposals','contract_replacements','consumer_currency','release_before_guards'])if(qed[k])guarded(qed[k]);
const td=load(`research/${RUN}-owner-step2-batches12-17-round1/final-receipt.json`);
if(td.source_write_release!==true)fail('TD scientific packet not released.');
const importPath='research/math-imports.json',imports=parsed(importPath),importSet=new Set(imports.files.map(f=>f.path));
const planPath='research/plan-spec.json',plan=parsed(planPath),docs=[],allPages=[];
for(let b=1;b<=64;b++){
 const file=`research/${RUN}-batch-${b}.pages.json`,doc=parsed(file);
 if(!Array.isArray(doc)||doc.length!==2)fail(`Not an A/B pair: ${file}`);
 docs.push({file,doc});allPages.push(...doc);
}
if(allPages.length!==128)fail('Expected 128 native pages.');
const nativeCount=allPages.reduce((n,p)=>n+p.items.length,0);
if(nativeCount!==685)fail(`Expected 685 pre-insertion native items, got ${nativeCount}; root must reconcile before preparing.`);
const pageMap=new Map(allPages.map(p=>[p.id,p]));
const originalInventories=new Map(allPages.map(p=>[p.id,p.items.map(i=>i.id)]));
const nativeIds=new Set(allPages.flatMap(p=>p.items.map(i=>i.id)));
if(nativeIds.size!==685)fail('Duplicate native inventory item.');
const NEW='lem-tdmath-diagonal-model-hilbert-and-domain';
if(nativeIds.has(NEW))fail('New11 already native-owned; do not reinsert.');
const eleven=pageMap.get('td-math-ensembles-and-limits');
const newItem={id:NEW,reference:`research/${RUN}-owner-step2-batches12-17-round1/new11-inventory-proposal.json`,design_state:'Established local prerequisite authored and released; independent review pending.',inventory_expansion_required:false,strategy:`proof_strategy: direct; complete argument is in items/${NEW}.md; root integrates the released proof contract.`,dependency_level:1};
const dpos=eleven.items.findIndex(i=>i.id==='def-tdmath-diagonal-operator-model');
if(dpos<0||eleven.items[dpos+1]?.id!=='lem-tdmath-diagonal-self-adjointness')fail('New11 approved insertion anchors changed.');
eleven.items.splice(dpos+1,0,newItem);
function reciprocal(ids){const supplier='lem-tdmath-reciprocal-naturals-tend-zero',consumer='lem-tdmath-spectator-cancellation';if(ids.filter(x=>x===supplier).length!==1||ids.filter(x=>x===consumer).length!==1)fail('Reciprocal order anchors changed.');const result=ids.filter(x=>x!==supplier);result.splice(result.indexOf(consumer),0,supplier);return result;}
const three=pageMap.get('td-math-ordered-composition'),threeRows=new Map(three.items.map(i=>[i.id,i]));three.items=reciprocal(three.items.map(i=>i.id)).map(id=>threeRows.get(id));
const whitelist=['kind','title','domain','library','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','generation','justified_by','forward_refs','proof_strategy'];
const fieldChanges=[],missingLegal=[],classificationFallback=[];
for(const page of allPages)for(const row of page.items){
 const p=`items/${row.id}.md`;
 if(importSet.has(p))fail(`Imported item in local native inventory: ${row.id}`);
 const src=guarded(p),parts=split(src),fm=Y.parse(parts.fm);
 if(row.status!==undefined&&row.status!=='draft')fail(`Native manifest row is not draft: ${row.id}`);
 if(fm.id!==row.id||fm.status!=='draft')fail(`Identity/status is not local draft: ${row.id}`);
 const fields=[];
 for(const k of whitelist){
  let value=fm[k];
  if(k==='library'&&value===undefined){value=page.library;classificationFallback.push(row.id);}
  if(value!==undefined){if(!equal(row[k],value)){row[k]=structuredClone(value);fields.push(k);}}
  else if(Object.hasOwn(row,k)){delete row[k];fields.push(k);}
 }
 let publicSection=null;
 for(const heading of SOURCE_SECTIONS){const value=sourceSectionText(parts.body,heading)?.trim();if(value){publicSection={heading,value};break;}}
 if(publicSection){if(row.statement!==publicSection.value){row.statement=publicSection.value;fields.push('statement');}}
 else missingLegal.push({id:row.id,kind:fm.kind,disposition:'No legal shared SOURCE_SECTIONS found; preserve existing statement instead of inventing one.'});
 if(fields.length)fieldChanges.push({id:row.id,page:page.id,fields});
}
const reqAdd={
 'td-math-ensembles-and-limits':['the-complex-exponential-and-eulers-formula','measurable-functions-and-simple-approximation'],
 'td-math-mixture-dynamics-and-shells':['complex-differentiability-and-cauchy-riemann'],
 'td-math-convex-contact-and-mixing':['jacobi-fields-conjugate-points-and-the-cut-locus']
};
const exactQft=['qft-f01','qft-mf04','qft-mf02','qft-mf03'];
pageMap.get('qft-f04').requires=exactQft;
for(const [id,ids]of Object.entries(reqAdd))for(const r of ids)if(!pageMap.get(id).requires.includes(r))pageMap.get(id).requires.push(r);
// Exact published context descriptor: inventory/status comes from existing imported source.
const jacobi='jacobi-fields-conjugate-points-and-the-cut-locus',jpath=`library/differential-geometry/${jacobi}.md`;
const jfm=Y.parse(split(guarded(jpath)).fm);
if(!importSet.has(jpath)||jfm.page!==jacobi||jfm.status!=='published')fail('Jacobi imported published context unavailable.');
if(!plan.pages.some(p=>p.id===jacobi)){
 const first=plan.pages.findIndex(p=>p.order>0);
 plan.pages.splice(first<0?plan.pages.length:first,0,{id:jacobi,title:jfm.title,kind:'P',category:'differential-geometry',library:'mathematics',requires:[],items:[],order:0});
}
const pageEdits=[];
function headerEdit(page,field,value){
 const p=`library/${page.category}/${page.id}.md`;
 const before=guards.get(p)??guarded(p),current=writes.get(p)??before,parts=split(current);
 const doc=Y.parseDocument(parts.fm,{uniqueKeys:true});if(doc.errors.length)fail(`Bad normative YAML page ${p}`);
 if(doc.get('page')!==page.id||doc.get('status')!=='draft')fail(`Page identity/status changed: ${p}`);
 if(field==='items'&&!equal(doc.toJS().items,originalInventories.get(page.id)))fail(`Approved page inventory differs from native preimage: ${p}`);
 if(equal(doc.toJS()[field],value))return;
 doc.set(field,value);
 const start=current.indexOf(parts.fm),next=current.slice(0,start)+doc.toString().trimEnd()+current.slice(start+parts.fm.length);
 if(split(next).body!==parts.body)fail(`Page body changed: ${p}`);
 const fm=Y.parse(split(next).fm);if(!equal(fm[field],value))fail(`Page header write mismatch ${p}`);
 writes.set(p,next);pageEdits.push({path:p,field});
}
// All other page bodies, inventories and UI prose remain untouched.
headerEdit(eleven,'items',eleven.items.map(i=>i.id));headerEdit(three,'items',three.items.map(i=>i.id));
const six=pageMap.get('td-math-convex-contact-and-mixing');headerEdit(six,'requires',six.requires);
headerEdit(pageMap.get('qft-f04'),'requires',exactQft);
const mg=pageMap.get('qft-mg01'),approvedSeven=['fundamental-solutions-newtonian-potentials-and-green-functions','orthonormal-bases-parseval-and-fourier-series','qft-mf04','em-primitives-and-postulates','em-potentials-and-gauge','em-retarded-fields-and-radiation','homology-axioms-degree-and-classical-applications'];
if(!equal(mg.requires,approvedSeven)||!equal(plan.pages.find(p=>p.id==='qft-mg01')?.requires,approvedSeven))fail('QFTMG01 approved seven current MF/plan contexts changed.');
headerEdit(mg,'requires',approvedSeven);
for(const edge of [['td-math-nonsmooth-equilibrium','td-math-ordered-composition'],['td-math-mixture-dynamics-and-shells','td-math-ensembles-and-limits'],['td-math-spatial-measure-and-information','td-math-ensembles-and-limits']])if(!pageMap.get(edge[0]).requires.includes(edge[1]))fail(`Approved context absent: ${edge}`);
for(const page of allPages){
 const target=plan.pages.find(p=>p.id===page.id);if(!target||target.kind!==page.kind||target.category!==page.category)fail(`Missing/mismatched approved plan page ${page.id}`);
 // Ordinary native transcription restores current inventories including empty historical plan inventories.
 // Retain canonical-only unknown page fields and canonical-only item fields for matching IDs.
 const oldItems=new Map((target.items??[]).map(i=>[i.id,i]));
 target.items=page.items.map(i=>{
  const old=oldItems.get(i.id)??{},merged={...old,...structuredClone(i)};
  // Exact absence for source-owned whitelist metadata must propagate to canonical rows.
  for(const field of whitelist)if(!Object.hasOwn(i,field))delete merged[field];
  return merged;
 });
 target.requires=structuredClone(page.requires);
}
for(const {file,doc}of docs){const after=JSON.stringify(doc,null,2)+'\n';if(after!==guards.get(file))writes.set(file,after);}
const planAfter=JSON.stringify(plan,null,2)+'\n';if(planAfter!==guards.get(planPath))writes.set(planPath,planAfter);
const allItemPaths=allPages.flatMap(p=>p.items.map(i=>`items/${i.id}.md`));
if(allItemPaths.length!==686||new Set(allItemPaths).size!==686)fail('Result does not contain 686 unique item subjects.');
const report={version:1,run:RUN,preparedAt:new Date().toISOString(),expected:{items:686,pages:128,added_p_context:jacobi},guards:[...guards].map(([p,before])=>({path:p,before})),writes:[...writes].map(([p,after])=>({path:p,before:guards.get(p),after})),all_item_paths:allItemPaths,field_changes:fieldChanges,missing_legal_public_sections:missingLegal,library_classification_fallback_ids:classificationFallback,page_header_edits:pageEdits,source_item_writes:[],source_hashes_computed:false,levels_not_recomputed:true};
fs.writeFileSync(path.join(REPO,PAYLOAD),JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(path.join(REPO,OUT,'root-current-transcription-summary.json'),JSON.stringify({run:RUN,expected:report.expected,changed_files:report.writes.map(w=>w.path),field_changes:fieldChanges,missing_legal_public_sections:missingLegal,library_classification_fallback_ids:classificationFallback,page_header_edits:pageEdits,source_item_writes:[],levels_not_recomputed:true},null,2)+'\n');
fs.writeFileSync(path.join(REPO,OUT,'root-mandatory-layout-item-paths.txt'),allItemPaths.join('\n')+'\n');
console.log(JSON.stringify({payload:PAYLOAD,...report.expected,changed_files:report.writes.length,field_change_items:fieldChanges.length,missing_legal_public_sections:missingLegal,library_fallback_count:classificationFallback.length,shared_writes:false},null,2));
