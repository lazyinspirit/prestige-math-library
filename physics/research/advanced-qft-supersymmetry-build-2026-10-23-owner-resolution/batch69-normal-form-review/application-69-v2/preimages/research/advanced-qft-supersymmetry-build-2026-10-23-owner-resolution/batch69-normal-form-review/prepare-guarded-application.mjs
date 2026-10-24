import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
const YAML=createRequire(import.meta.url)('yaml');
import { fileURLToPath } from 'node:url';
const self=fileURLToPath(import.meta.url), owner=path.dirname(self);
const repo=path.resolve(owner,'../../..');
process.chdir(repo);
const parser='tools/physics-support/facts-block.mjs';
const {factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter,SOURCE_SECTIONS}=await import(path.join(repo,parser));
const RUN='advanced-qft-supersymmetry-build-2026-10-23';
const proposalPath=path.join(owner,'guarded-metadata-proposal.json');
const PROPOSAL_SHA='5691b352ab30e5e5a23c19eb5a678e23965dc45dc0db2d127eed1d336a68c211';
const digest=b=>crypto.createHash('sha256').update(b).digest('hex');
const sha=p=>digest(fs.readFileSync(p));
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,v);};
const json=v=>JSON.stringify(v,null,2)+'\n';
const rel=p=>path.relative(repo,p);
const fail=s=>{throw Error(s);};
const unique=a=>[...new Set(a)];
const itemPath=id=>fs.existsSync(`items/${id}.md`)?`items/${id}.md`:`../items/${id}.md`;
const item=id=>{const p=itemPath(id), text=fs.readFileSync(p,'utf8'),{fm,body}=splitFrontmatter(text);return {p,text,body,fm:YAML.parse(fm)};};
function quoted(id){const x=item(id);for(const section of SOURCE_SECTIONS){const t=sourceSectionText(x.body,section)?.trim();if(t)return {section,text:t,p:x.p};}fail(`No exact citable section: ${id}`);}
function regenerate(id,base){
 const x=item(id), facts=[...factParagraphs(x.body).values()], steps=numberedProofSteps(x.body);
 if(!steps.length)return {...base,citations:[],derivations:[]};
 const citations=[];
 for(const f of facts)for(const source of unique(f.links)){
  const q=quoted(source);
  const uses=steps.filter(s=>new RegExp(`\\b${f.label}\\b`).test(s.text)).map(s=>s.id);
  citations.push({fact:f.label,source,source_section:q.section,quote:q.text,uses});
 }
 const derivations=steps.map(s=>{
  const inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));
  for(const t of s.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)){
   const tok=t[1]??t[2];if(!have.has(tok)){inputs.push(/^\d/.test(tok)?`step ${tok}`:tok);have.add(tok);}
  }
  return {id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs};
 });
 return {...base,citations,derivations};
}
function barrier(){
 const statePath=`.physics-autopilot/${RUN}/state.json`,s=read(statePath);
 if(s.run!==RUN||s.paused!==true)fail('Native run must actually be paused');
 const active=[];
 function scan(obj,prefix){if(!obj||typeof obj!=='object')return;
  if(obj.startedAt&&!obj.endedAt&&(obj.attempts??obj.attempt??1)>0)active.push(prefix);
  for(const [k,v]of Object.entries(obj))if(v&&typeof v==='object')scan(v,`${prefix}/${k}`);
 }
 scan(s.dispatches,'dispatches');scan(s.nativeRefreshes,'nativeRefreshes');
 if(active.length)fail(`Native writers not drained: ${active.join(', ')}`);
 return {path:statePath,sha256:sha(statePath),paused:true,active_dispatches:[]};
}
function checkGuards(guards){for(const g of guards){if(!fs.existsSync(g.path)||sha(g.path)!==g.sha256)fail(`Guard changed; fresh unique-version preparation required: ${g.path}`);}}
const argv=process.argv.slice(2),cmd=argv[0];
const opt=(n,d)=>{const i=argv.indexOf(n);return i<0?d:argv[i+1];};
const pkg=opt('--package','69'),version=opt('--version',null);
if(!['69','old60'].includes(pkg)||!version||!/^[a-zA-Z0-9-]+$/.test(version))fail('Use prepare|verify|apply --package 69|old60 --version UNIQUE_VERSION [--receipt ROOT_RECEIPT]');
const pack=path.join(owner,`application-${pkg}-${version}`),manifestPath=path.join(pack,'manifest.json');
if(cmd==='prepare'){
 if(fs.existsSync(pack))fail('Version already exists; never overwrite an existing preparation');
 if(sha(proposalPath)!==PROPOSAL_SHA)fail('Original proposal changed; owner must review a new tool/proposal rather than relax this guard');
 const proposal=read(proposalPath),guards=new Map(),inputs={};
 const guard=p=>{if(!guards.has(p)){guards.set(p,{path:p,sha256:sha(p)});inputs[p]=fs.readFileSync(p);}};
 guard(rel(self));guard(rel(proposalPath));guard(parser);
 for(const g of proposal.source_guards){if(sha(g.path)!==g.current_sha256)fail(`Reviewed source changed: ${g.path}`);guard(g.path);}
 const targets=new Map(),canonicalDifferences=[];
 const stage=(p,text)=>{guard(p);targets.set(p,text);};
 const basePrefix=`research/${RUN}-batch-`;
 if(pkg==='69'){
  // Keep every original proposal guard; this package never adopts a changed69 baseline.
  for(const g of proposal.shared_guards){if(sha(g.path)!==g.sha256)fail(`Original69guard changed: ${g.path}`);guard(g.path);}
  const pagesPath=`${basePrefix}69.pages.json`,contractsPath=`${basePrefix}69.proof-contracts.json`,crossPath=`${basePrefix}69.cross-batch-dependencies.json`;
  const pages=read(pagesPath),contracts=read(contractsPath),cross=read(crossPath);
  for(const mirror of proposal.batch69_inventory_mirrors){
   const row=pages.flatMap(p=>p.items).find(x=>x.id===mirror.id);if(!row)fail(`Missing exact69row ${mirror.id}`);
   Object.assign(row,mirror.fields,{statement:mirror.statement});
   contracts.contracts[mirror.id]=regenerate(mirror.id,proposal.batch69_contract_replacements[mirror.id]);
  }
  // Reconcile retained semantic boundary/finite-check pointers explicitly; the canonical
  // parser supplies proof entries, but cannot infer the old-to-new phase correspondence.
  const mainContract=contracts.contracts['thm-qftx-positive-real-adhm-monad-normal-form'];
  const boundaryEvidence={zero:'Steps 2.1 and 7.2 retain k=0 and the framed flat W summand.',degenerate:'Step 2.1 proves positivity on the flat and reduced orthogonal summands.',endpoints:'Step 4.1 treats infinity; 6.1 treats projective ranks; 6.2 treats rotations; 1.2 and 7.3 treat the exact first-order reduction/base-change range.','iff-forward':'Step 5.2 maps each normalized framed chain isomorphism to exactly one U(V) element.','iff-reverse':'Step 5.2 constructs a normalized framed chain isomorphism for each g in U(V).'};
  for(const b of mainContract.boundaries??[])if(boundaryEvidence[b.case])b.evidence=boundaryEvidence[b.case];
  const finiteEvidence={'Raw moment coefficients':'Steps 4.2 and 5.1 expand coefficient blocks and derive both moment maps.','Rotation chain maps':'Step 6.2 substitutes coordinates and verifies both chain squares.','Nilpotent normalization':'Step 6.3 directly multiplies T^dagger(I+epsilon K)T=I.'};
  for(const c of mainContract.finite_checks??[])if(finiteEvidence[c.name])c.evidence=finiteEvidence[c.name];
  const positiveId='lem-qftx-positive-real-monad-internal-positivity';
  const originalRisk=read(contractsPath).contracts[positiveId].risk_review;
  contracts.contracts[positiveId].risk_review={...originalRisk,owner_addendum:{reviewer:'/root/index_heat_kernel_repair',notes:proposal.batch69_contract_replacements[positiveId].risk_review,acceptance:false}};
  // Update exact existing citation entries only; do not generate extra definitions from proof uses.
  for(const [id,c]of Object.entries(contracts.contracts))for(const cit of c.citations??[]){
   if(proposal.source_guards.some(g=>g.path===`items/${cit.source}.md`)){
    const q=quoted(cit.source);cit.source_section=q.section;cit.quote=q.text;
   }
  }
  const a=pages.find(p=>p.kind==='A');a.requires=unique([...a.requires,...proposal.page_requires_add_if_absent]);
  const actualPage=`library/quantum-field-theory-mathematics/${a.id}.md`,raw=fs.readFileSync(actualPage,'utf8'),split=splitFrontmatter(raw),front=YAML.parse(split.fm);
  front.requires=unique([...(front.requires??[]),...proposal.page_requires_add_if_absent]);
  const expected=pages.filter(p=>p.kind==='A').flatMap(p=>p.items.map(x=>x.id));
  if(JSON.stringify(front.items)!==JSON.stringify(expected))fail('Actual69page inventory differs; no implicit reauthoring');
  stage(actualPage,'---\n'+YAML.stringify(front)+'---\n'+split.body);
  for(const supplier of proposal.page_requires_add_if_absent){
   if(!cross.some(r=>r.kind==='page'&&r.consumer===a.id&&r.supplier===supplier))cross.push({kind:'page',consumer:a.id,supplier,status:'verified',evidence:'Owner reviewed exact imported structural supplier interfaces; see batch69-normal-form-review/report.md and guarded source hashes. This is interface reconciliation, not a native acceptance/readiness record.'});
  }
  for(const mirror of proposal.batch69_inventory_mirrors){
   const original=read(path.join(owner,'preimages',pagesPath)).flatMap(p=>p.items).find(x=>x.id===mirror.id);
   for(const supplier of mirror.fields.deps.filter(d=>!(original.deps??[]).includes(d))){
    if(pages.flatMap(p=>p.items).some(x=>x.id===supplier))continue; // same-page edge, no cross-row
    if(!cross.some(r=>r.kind==='item'&&r.consumer===mirror.id&&r.supplier===supplier))cross.push({kind:'item',consumer:mirror.id,supplier,status:'verified',evidence:`Exact existing supplier used by current ${mirror.id}; source ${itemPath(supplier)} SHA256 ${sha(itemPath(supplier))}. Canonical Facts parser limits contract entries to actual declared Facts. No readiness conclusion is encoded.`});
   }
  }
  stage(pagesPath,json(pages));stage(contractsPath,json(contracts));stage(crossPath,json(cross));
  // Read canonical69 scope only for the handoff; ordinary Step2 transcription owns all writes.
  const canonicalPath='research/plan-spec.json',cp=read(canonicalPath);
  for(const page of pages){const old=cp.pages.find(p=>p.id===page.id);canonicalDifferences.push({page:page.id,canonical_item_ids:(old?.items??[]).map(x=>x.id),native_item_ids:page.items.map(x=>x.id),canonical_requires:old?.requires,native_candidate_requires:page.requires,native_step2_owns_transcription:true});}
 }else{
  // Separate optional consumer package. Each explicitly prepared unique version snapshots
  // its then-current60 metadata; original proposal guards remain in its provenance.
  const pagesPath=`${basePrefix}60.pages.json`,contractsPath=`${basePrefix}60.proof-contracts.json`;
  const pages=read(pagesPath),contracts=read(contractsPath),add=proposal.old60_source_explanation_proposals[0].proposed_addition;
  for(const g of proposal.old60_source_guards){if(sha(g.path)!==g.sha256)fail(`Old60source changed; a new scientific source proposal is required: ${g.path}`);guard(g.path);}
  const edited=new Map();
  for(const edit of proposal.old60_source_explanation_proposals){
   const x=item(edit.item),facts=factParagraphs(x.body),label=edit.item.startsWith('lem-')?'A1':'A5',entry=facts.get(label);
   if(!entry)fail(`Missing exact ${edit.item}/${label}`);
   const replacement=entry.text.trim()+` ${add}`;
   const body=x.body.replace(entry.text,entry.text.replace(entry.text.trim(),replacement));
   if(body===x.body)fail('Exact consumer Fact replacement failed');
   edited.set(edit.item,{...x,body,text:x.text.replace(x.body,body)});
   stage(x.p,edited.get(edit.item).text);
   const row=pages.flatMap(p=>p.items).find(i=>i.id===edit.item);if(!row)fail('Old60inventory row missing');
   // Statements and dependency arrays remain unchanged; only source-qualified Facts change.
  }
  // Parse candidate Facts with canonical parser while supplier quotations come from actual sources.
  for(const [id,x]of edited){
   const facts=[...factParagraphs(x.body).values()],st=numberedProofSteps(x.body),c=contracts.contracts[id];
   c.citations=facts.flatMap(f=>unique(f.links).map(source=>{const q=quoted(source);return {fact:f.label,source,source_section:q.section,quote:q.text,uses:st.filter(s=>new RegExp(`\\b${f.label}\\b`).test(s.text)).map(s=>s.id)};}));
  }
  for(const c of Object.values(contracts.contracts))for(const cit of c.citations??[]){if(proposal.source_guards.some(g=>g.path===`items/${cit.source}.md`)){const q=quoted(cit.source);cit.source_section=q.section;cit.quote=q.text;}}
  stage(contractsPath,json(contracts));guard(pagesPath);
 }
 // Bind all exact supplier quotes and all eleven69 sources. Guarding imported sources does not mutate them.
 for(const p of read(`research/${RUN}-batch-69.pages.json`))for(const row of p.items)guard(`items/${row.id}.md`);
 for(const [target,text]of targets)if(target.endsWith('.proof-contracts.json'))for(const c of Object.values(JSON.parse(text).contracts))for(const cit of c.citations??[])guard(itemPath(cit.source));
 fs.mkdirSync(pack,{recursive:false});
 for(const [p,b]of Object.entries(inputs))write(path.join(pack,'preimages',p.replace(/^\.\.\//,'imported-root/')),b);
 const writes=[];
 for(const [p,text]of targets){const candidate=path.join(pack,'candidate',p);write(candidate,text);writes.push({path:p,before_sha256:guards.get(p).sha256,after_sha256:sha(candidate),candidate:rel(candidate)});}
 const facts={};for(const id of proposal.batch69_inventory_mirrors.map(x=>x.id)){const x=item(id);facts[id]=[...factParagraphs(x.body).values()];}
 write(path.join(pack,'canonical-facts.json'),json(facts));
 write(path.join(pack,'canonical-step2-handoff.json'),json({canonical_untouched:true,differences:canonicalDifferences}));
 const manifest={version:1,package:pkg,unique_version:version,run:RUN,prepared_at:new Date().toISOString(),original_proposal_sha256:PROPOSAL_SHA,original_proposal_guards_preserved:proposal.shared_guards,original_old60_guards_preserved:proposal.old60_source_guards,original_old60_contract_guard_preserved:proposal.old60_contract_guard,guards:[...guards.values()],writes,no_state_readiness_nativehistory_or_canonical_plan_writes:true,apply_barrier:'actual state.paused=true and no started/unended native dispatch or refresh; root receipt additionally binds all external writers drained',root_receipt_fields:{approved_by:'/root',prepared_manifest_sha256:'sha256 of this exact manifest',run:RUN,all_external_writers_drained:true,apply_package:pkg}};
 write(manifestPath,json(manifest));
 console.log(json({prepared:rel(pack),manifest_sha256:sha(manifestPath),writes:writes.map(x=>x.path),applied:false}));
}else if(['verify','apply'].includes(cmd)){
 const m=read(manifestPath);if(m.run!==RUN||m.package!==pkg||m.unique_version!==version)fail('Manifest package mismatch');
 const allowed=pkg==='69'?new Set([`library/quantum-field-theory-mathematics/qftx-positive-real-linear-monad-normal-forms.md`,`research/${RUN}-batch-69.pages.json`,`research/${RUN}-batch-69.proof-contracts.json`,`research/${RUN}-batch-69.cross-batch-dependencies.json`]):new Set(['items/lem-qftx-adhm-real-monad-normalization-and-charge.md','items/thm-qftx-zero-fi-regular-adhm-asd-correspondence.md',`research/${RUN}-batch-60.proof-contracts.json`]);
 for(const w of m.writes)if(!allowed.has(w.path)||!path.resolve(w.candidate).startsWith(path.join(pack,'candidate')+path.sep))fail('Write outside exact package allowlist');
 checkGuards(m.guards);
 for(const w of m.writes){if(sha(w.candidate)!==w.after_sha256)fail(`Candidate changed: ${w.candidate}`);if(sha(w.path)!==w.before_sha256)fail(`Target changed: ${w.path}`);if(/(^|\/)(state|coverage|notes|plan-spec|.*step1).*\.json$/.test(w.path)||w.path.includes('.physics-autopilot'))fail('Forbidden target');}
 if(cmd==='verify'){console.log(json({guards_valid:true,package:pkg,applied:false,barrier_checked:false}));}
 else{
  const receiptPath=opt('--receipt',null);if(!receiptPath)fail('Root receipt required');const r=read(receiptPath);
  if(r.approved_by!=='/root'||r.prepared_manifest_sha256!==sha(manifestPath)||r.run!==RUN||r.all_external_writers_drained!==true||r.apply_package!==pkg)fail('Root receipt mismatch');
  const observation=barrier();checkGuards(m.guards);
  // Every production preimage is already archived by prepare. Stage writes beside targets,
  // then recheck all inputs and the actual barrier before replacing any target.
  const staged=[];
  try{
   for(const w of m.writes){const tmp=`${w.path}.owner69-${version}.tmp`;if(fs.existsSync(tmp))fail('Staging collision');fs.writeFileSync(tmp,fs.readFileSync(w.candidate),{flag:'wx'});staged.push([tmp,w.path]);}
   checkGuards(m.guards);barrier();for(const [tmp,target]of staged)fs.renameSync(tmp,target);
  }finally{for(const [tmp]of staged)if(fs.existsSync(tmp))fs.unlinkSync(tmp);}
  write(path.join(pack,'application-audit.json'),json({applied_at:new Date().toISOString(),root_receipt_path:receiptPath,root_receipt_sha256:sha(receiptPath),observed_native_barrier:observation,writes:m.writes.map(w=>({path:w.path,sha256:sha(w.path)})),no_readiness_or_native_history_writes:true}));
  console.log(json({applied:true,package:pkg,writes:m.writes.map(w=>w.path)}));
 }
}else fail('Unknown command');
