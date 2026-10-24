// Prepare/merge reviewable metadata candidates only. Never writes production.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath,pathToFileURL}from'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../../..'),RUN='advanced-qft-supersymmetry-build-2026-10-23';
const {SOURCE_SECTIONS,factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter}=await import(pathToFileURL(path.join(root,'tools/physics-support/facts-block.mjs')));
const {parseFrontmatter}=await import(pathToFileURL(path.join(root,'tools/physics-support/content-policy-lib.mjs')));
const assert=(x,m)=>{if(!x)throw Error(m);},sha=x=>crypto.createHash('sha256').update(x).digest('hex'),json=x=>JSON.stringify(x,null,2)+'\n',read=p=>fs.readFileSync(path.join(root,p),'utf8');
const stage=path.resolve(here,'../batch65-cohomology-repair/reconciliation-v3'),manifestPath=path.join(stage,'manifest.json'),manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
assert(!fs.existsSync(path.join(stage,'application-receipt.json')),'already applied');
const nativePath=`research/${RUN}-batch-66.pages.json`,contractPath=`research/${RUN}-batch-66.proof-contracts.json`,oldNative=JSON.parse(read(nativePath)),oldContracts=JSON.parse(read(contractPath)),proposal=JSON.parse(fs.readFileSync(path.join(here,'metadata-contract-update-proposal-v3.json'),'utf8'));
assert(sha(read(contractPath))===proposal.current_contract_sha256,'contract changed since proposal');
const guards=new Map(),bind=p=>{const s=read(p);guards.set(p,sha(s));return s;};bind(nativePath);bind(contractPath);
const mdById=new Map();for(const p of oldNative)for(const row of p.items){const id=typeof row==='string'?row:row.id;mdById.set(id,bind(`items/${id}.md`));}
function source(id){if(mdById.has(id))return mdById.get(id);const staged=path.join(stage,'candidate/items',id+'.md');if(fs.existsSync(staged))return fs.readFileSync(staged,'utf8');return bind(`items/${id}.md`);}
function statement(id){const{body}=splitFrontmatter(source(id));for(const section of SOURCE_SECTIONS){const text=sourceSectionText(body,section)?.trim();if(text)return{section,text};}throw Error('no source claim '+id);}
const native=JSON.parse(JSON.stringify(oldNative)),contracts=JSON.parse(JSON.stringify(oldContracts));
for(const p of native)for(let k=0;k<p.items.length;k++){
 const old=p.items[k],id=typeof old==='string'?old:old.id,md=mdById.get(id),{fm,body}=splitFrontmatter(md),meta=parseFrontmatter(fm),row={...(typeof old==='string'?{}:old)};
 for(const key of['id','kind','title','deps','dependency_roles','justified_by','aliases','dependency_level','domain','library','physical_scope','provenance','sources','proof_strategy'])if(meta[key]!==undefined)row[key]=meta[key];
 const st=statement(id);row.statement=st.text;row.reference=`items/${id}.md#${st.section}`;p.items[k]=row;
 const facts=[...factParagraphs(body).values()],steps=numberedProofSteps(body).map(s=>{const tokens=new Set();for(const t of s.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g))tokens.add(t[1]??t[2]);return{...s,tokens};});
 const c=contracts.contracts[id];assert(c,'missing contract '+id);const citations=[];
 for(const f of facts)for(const src of new Set(f.links)){const q=statement(src);citations.push({fact:f.label,source:src,source_section:q.section,quote:q.text,uses:steps.filter(s=>s.tokens.has(f.label)).map(s=>s.id)});}
 c.citations=citations;c.derivations=steps.map(s=>{const inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));for(const t of s.tokens)if(!have.has(t))inputs.push(/^\d/.test(t)?`step ${t}`:t);return{id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs};});
 const bp=proposal.row_updates.find(r=>r.row.id===id);assert(bp&&bp.source_raw_sha256===sha(md),'source guard changed '+id);assert(JSON.stringify(c.boundaries.map(r=>[r.case,r.status]))===JSON.stringify(bp.boundaries.map(r=>[r.case,r.status])),'case/status change '+id);c.boundaries=bp.boundaries;
 assert(JSON.stringify(c.routine_steps)===JSON.stringify(bp.routine_steps),'routine steps change '+id);
}
// Approved canonical rows remain untouched; native Step2 owns transcription.
bind('research/plan-spec.json');
const candidate=new Map([[nativePath,json(native)],[contractPath,json(contracts)]]);

// Keep a concrete standalone66 proposal as well as the combined review set.
const standalone=path.join(here,'guarded-metadata-candidate-v3');fs.mkdirSync(standalone,{recursive:true});
for(const[p,s]of candidate){const dst=path.join(standalone,p);fs.mkdirSync(path.dirname(dst),{recursive:true});fs.writeFileSync(dst,s);}
const boundProposal=path.relative(root,path.join(here,'metadata-contract-update-proposal-v3.json'));bind(boundProposal);
for(const[p,hash]of guards){if(manifest.guards[p]!==undefined)assert(manifest.guards[p]===hash,'input moved since65 prepare '+p);else{manifest.guards[p]=hash;const q=path.join(stage,'preimages',p);fs.mkdirSync(path.dirname(q),{recursive:true});fs.copyFileSync(path.join(root,p),q);}}
for(const[p,s]of candidate){const q=path.join(stage,'candidate',p);fs.mkdirSync(path.dirname(q),{recursive:true});if(fs.existsSync(q)){const archive=path.join(here,'pre-merge65-candidates-v3',p);fs.mkdirSync(path.dirname(archive),{recursive:true});assert(!fs.existsSync(archive),'merge already prepared');fs.copyFileSync(q,archive);}fs.writeFileSync(q,s);let change=manifest.changes.find(c=>c.path===p&&!c.delete);if(change)change.after_sha256=sha(s);else manifest.changes.push({path:p,before_sha256:manifest.guards[p],after_sha256:sha(s)});}
manifest.owner_metadata_addenda={batch66:'research/'+RUN+'-owner-resolution/batch66-cohomology-repair/metadata-contract-update-proposal-v3.json',coverage65:'research/'+RUN+'-owner-resolution/batch65-cohomology-repair/coverage-owner-corrections.proposal.json'};
manifest.canonical_plan_read_only=true;manifest.canonical_transcription_owner='native Step2';assert(!manifest.changes.some(c=>c.path==='research/plan-spec.json'),'canonical plan write forbidden');
manifest.root_global_level_recomputation_required=true;manifest.levels_are_not_recertified=true;
fs.writeFileSync(manifestPath,json(manifest));fs.writeFileSync(path.join(here,'guarded-metadata-candidate-v3.json'),json({prepared_only:true,production_writes:false,contracts_regenerated:14,numbered_steps:[...mdById.values()].reduce((n,s)=>n+numberedProofSteps(splitFrontmatter(s).body).length,0),boundary_case_status_rows_preserved:true,routine_steps_preserved:true,current_source_and_context_guards:Object.fromEntries(guards),combined65_stage:path.relative(root,stage),combined_manifest_sha256:sha(fs.readFileSync(manifestPath)),root_global_level_recomputation_required:true}));
console.log(json({production_writes:false,contracts:14,combined_changes:manifest.changes.length,combined_guards:Object.keys(manifest.guards).length,combined_manifest_sha256:sha(fs.readFileSync(manifestPath))}));
