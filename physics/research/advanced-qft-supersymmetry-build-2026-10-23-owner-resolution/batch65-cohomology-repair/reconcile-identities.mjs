#!/usr/bin/env node
// Prepare by default. Production mutation requires the explicit apply verb,
// current input guards, native drain, and a root coordination receipt.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath,pathToFileURL} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../../..');
const RUN='advanced-qft-supersymmetry-build-2026-10-23';
const statePath=path.join(root,'.physics-autopilot',RUN,'state.json');
const {SOURCE_SECTIONS,factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter}=await import(pathToFileURL(path.join(root,'tools/physics-support/facts-block.mjs')));
const {parseFrontmatter}=await import(pathToFileURL(path.join(root,'tools/physics-support/content-policy-lib.mjs')));
const mapping={
 'thm-qftx-gaga-local-coherent-acyclicity':'thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity',
 'ex-qftx-gaga-point-quotient-coherent-acyclicity':'ex-qftx-gaga-analytic-point-sheaf-acyclicity',
 'ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity':'ex-qftx-gaga-analytic-hyperplane-quotient',
};
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=x=>JSON.stringify(x,null,2)+'\n';
const assert=(p,m)=>{if(!p)throw Error(m);};
const replace=s=>Object.entries(mapping).reduce((s,[a,b])=>s.split(a).join(b),s);
const walk=p=>fs.readdirSync(path.join(root,p),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const mode=process.argv[2]??'prepare';
const stage=path.join(here,process.argv[3]??'reconciliation-v1');
assert(stage.startsWith(here+path.sep),'stage must be inside evidence directory');
const manifestPath=path.join(stage,'manifest.json');
function collisionCheck(){
 const ids=new Set([...Object.keys(mapping),...Object.values(mapping)]);
 for(const [a,b] of Object.entries(mapping))assert(!fs.existsSync(path.join(root,'items',b+'.md')),'canonical target already exists: '+b);
 for(const p of fs.readdirSync(path.join(root,'items')).filter(p=>p.endsWith('.md'))){
  const text=fs.readFileSync(path.join(root,'items',p),'utf8'), fm=splitFrontmatter(text).fm;
  // Read identity fields only; an unrelated malformed bibliography is not parsed.
  const id=fm.match(/^id:\s*["']?([^\s"']+)/m)?.[1];
  if(ids.has(id))assert(p===id+'.md' && Object.hasOwn(mapping,id),'ID collision: '+p+' -> '+id);
  const aliasBlock=fm.match(/^aliases:\s*(\[[^\n]*\]|(?:\n[ \t]+[^\n]*)*)/m)?.[1]??'';
  for(const target of ids)assert(!new RegExp('(^|[^a-z0-9-])'+target+'([^a-z0-9-]|$)').test(aliasBlock),'alias collision: '+p+' -> '+target);
 }
}
if(mode==='prepare'){
 assert(!fs.existsSync(manifestPath),'prepared manifest already exists; use a new stage name to refresh changed inputs');
 collisionCheck();
 const proposal=new Map(),guards=new Map(),deletes=[];
 function bind(p){const s=read(p);guards.set(p,sha(s));return s;}
 function put(p,s){proposal.set(p,s);}
 const nativePath=`research/${RUN}-batch-65.pages.json`;
 const native=JSON.parse(bind(nativePath));
 const sourceIds=native.flatMap(p=>p.items.map(i=>typeof i==='string'?i:i.id));
 assert(sourceIds.length===6,'expected six actual batch65 sources');
 const overlay=new Map();
 for(const id of sourceIds){
  const p=`items/${id}.md`;let s=bind(p);const mapped=mapping[id]??id;
  if(mapping[id]){
   s=replace(s).replace(/^aliases:\s*\[\]/m,`aliases: [${id}]`);
   assert(s.includes(`aliases: [${id}]`),'expected empty aliases on '+id);
   deletes.push(p);
  }
  if(id==='ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity'){
   assert(s.includes('nonempty coordinate polydisc centered at $0$'),'hyperplane public scope guard changed');
   s=s.replace('nonempty coordinate polydisc centered at $0$','nonempty coordinate polydisc containing $0$');
   assert(s.includes('a coordinate polydisc $D\\subseteq W\\subset\\mathbb C^N$ centered at $0$'),'hyperplane Given scope guard changed');
   s=s.replace('a coordinate polydisc $D\\subseteq W\\subset\\mathbb C^N$ centered at $0$','a coordinate polydisc $D\\subseteq W\\subset\\mathbb C^N$ containing $0$');
  }
  overlay.set(mapped,s);if(mapping[id])put(`items/${mapped}.md`,s);
 }
 // Restrict discovery to actual production sources/pages and current-run active
 // manifest/contract/cross files. Never visit dispatches, reports or histories.
 const activeResearch=fs.readdirSync(path.join(root,'research')).filter(n=>new RegExp('^'+RUN+'-batch-\\d+\\.(pages|proof-contracts|cross-batch-dependencies)\\.json$').test(n)).map(n=>'research/'+n);
 for(const p of [...walk('items'),...walk('library'),...activeResearch]){
  if(deletes.includes(p)||!p.endsWith('.md')&&!p.endsWith('.json'))continue;
  const s=read(p), t=replace(s);if(s!==t){bind(p);put(p,t);}
 }
 // Sync only the two relevant canonical rows and native65 rows to current
 // source metadata/claims, retaining approved extra row fields where present.
 const currentNative=JSON.parse(replace(JSON.stringify(native)));
 const claimHeadings=['Statement','Definition','Example'];
 function refreshItem(row){
  const id=typeof row==='string'?row:row.id, md=overlay.get(id);assert(md,'missing source overlay '+id);
  const {fm,body}=splitFrontmatter(md),meta=parseFrontmatter(fm);
  let statement;for(const h of claimHeadings){const t=sourceSectionText(body,h)?.trim();if(t){statement=t;break;}}
  assert(statement,'no public claim '+id);
  const out={...(typeof row==='string'?{}:row)};
  for(const k of ['id','kind','title','deps','dependency_roles','dependency_level','domain','library','physical_scope','provenance','sources','proof_strategy','aliases'])if(meta[k]!==undefined)out[k]=meta[k];
  out.statement=statement;if(out.reference!==undefined)out.reference=`items/${id}.md#${meta.kind==='example'?'Example':'Statement'}`;
  return out;
 }
 for(const p of currentNative)p.items=p.items.map(refreshItem);
 put(nativePath,json(currentNative));
 const planPath='research/plan-spec.json',plan=JSON.parse(bind(planPath));
 for(const np of currentNative){
  const cp=plan.pages.find(p=>p.id===np.id);assert(cp,'missing canonical page '+np.id);
  const old=new Map(cp.items.map(i=>[typeof i==='string'?i:i.id,i]));
  cp.items=np.items.map(i=>refreshItem({...old.get(i.id),...i,reference:`items/${i.id}.md#${i.kind==='example'?'Example':'Statement'}`}));
 }
 put(planPath,json(plan));
 // Regenerate canonical citation/derivation fields with the SAME shared Facts
 // and numbered-step parser as regen-contract-entries.mjs, resolving staged
 // renamed suppliers through overlay. Preserve every other field, especially
 // boundaries and routine_steps, exactly after identity mapping.
 const contractPath=`research/${RUN}-batch-65.proof-contracts.json`;
 const oldContracts=JSON.parse(bind(contractPath)),contracts=JSON.parse(replace(JSON.stringify(oldContracts)));
 const statementOf=id=>{
  let md=overlay.get(id);if(!md){const p=`items/${id}.md`;md=bind(p);}
  const {body}=splitFrontmatter(md);
  for(const section of SOURCE_SECTIONS){const text=sourceSectionText(body,section)?.trim();if(text)return {section,text};}
  throw Error('supplier lacks citable section '+id);
 };
 for(const [id,md]of overlay){
  const c=contracts.contracts[id];assert(c,'missing contract '+id);
  const {body}=splitFrontmatter(md),facts=[...factParagraphs(body).values()],steps=numberedProofSteps(body).map(s=>{
   const tokens=new Set();for(const t of s.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g))tokens.add(t[1]??t[2]);return {...s,tokens};
  });assert(facts.length&&steps.length,'empty parsed contract '+id);
  const citations=[];
  for(const f of facts)for(const src of new Set(f.links)){const st=statementOf(src);citations.push({fact:f.label,source:src,source_section:st.section,quote:st.text,uses:steps.filter(s=>s.tokens.has(f.label)).map(s=>s.id)});}
  c.citations=citations;c.derivations=steps.map(s=>{const inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));for(const t of s.tokens)if(!have.has(t))inputs.push(/^\d/.test(t)?`step ${t}`:t);return {id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs};});
  const oldId=Object.keys(mapping).find(k=>mapping[k]===id)??id;
  assert(JSON.stringify(c.boundaries)===JSON.stringify(oldContracts.contracts[oldId].boundaries),'boundaries changed '+id);
  assert(JSON.stringify(c.routine_steps)===JSON.stringify(oldContracts.contracts[oldId].routine_steps),'routine steps changed '+id);
 }
 put(contractPath,json(contracts));
 fs.mkdirSync(stage,{recursive:true});const changes=[];
 for(const [p,hash]of guards){const q=path.join(stage,'preimages',p);fs.mkdirSync(path.dirname(q),{recursive:true});fs.copyFileSync(path.join(root,p),q);assert(sha(fs.readFileSync(q))===hash,'preimage changed while preparing '+p);}
 for(const [p,s]of proposal){const q=path.join(stage,'candidate',p);fs.mkdirSync(path.dirname(q),{recursive:true});fs.writeFileSync(q,s);changes.push({path:p,before_sha256:guards.get(p)??null,after_sha256:sha(s)});}
 for(const p of deletes)changes.push({path:p,before_sha256:guards.get(p),delete:true});
 const manifest={version:1,run:RUN,prepared_only:true,canonical_mapping:mapping,guards:Object.fromEntries(guards),changes,preserve_native_history:true,no_readiness_or_state_writes:true,parser_inputs:['tools/physics-support/facts-block.mjs','tools/physics-support/content-policy-lib.mjs'].map(p=>({path:p,sha256:sha(read(p))})),apply_requires_root_receipt:{approved_by:'/root',production_id_integration:true,all_writers_drained:true,transitions_paused:true,prepared_manifest_sha256:'SHA256 of this manifest'}};
 fs.writeFileSync(manifestPath,json(manifest));console.log(json({stage,changed_paths:changes.map(c=>c.path),guarded_inputs:guards.size,applied:false}));
}else if(mode==='check'||mode==='apply'){
 const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
 for(const [p,hash]of Object.entries(manifest.guards))assert(sha(read(p))===hash,'production input changed: '+p);
 for(const p of manifest.parser_inputs)assert(sha(read(p.path))===p.sha256,'canonical parser changed: '+p.path);
 collisionCheck();
 for(const c of manifest.changes){if(c.before_sha256===null)assert(!fs.existsSync(path.join(root,c.path)),'new target exists '+c.path);if(!c.delete)assert(sha(fs.readFileSync(path.join(stage,'candidate',c.path)))===c.after_sha256,'candidate changed '+c.path);}
 if(mode==='check'){console.log('All production guards and candidate hashes match; no production mutation.');process.exit(0);}
 const receiptPath=process.argv[4];assert(receiptPath,'apply requires root coordination receipt path');const receipt=JSON.parse(fs.readFileSync(path.resolve(root,receiptPath),'utf8'));
 for(const [k,v]of Object.entries({approved_by:'/root',production_id_integration:true,all_writers_drained:true,transitions_paused:true}))assert(receipt[k]===v,'missing root coordination '+k);
 assert(receipt.prepared_manifest_sha256===sha(fs.readFileSync(manifestPath)),'root receipt does not bind manifest');
 const state=JSON.parse(fs.readFileSync(statePath,'utf8'));assert(state.paused===true,'native transitions not paused');
 const pending=Object.entries(state.dispatches??{}).filter(([,d])=>d.startedAt&&!d.endedAt);assert(!pending.length,'native dispatches not drained: '+pending.map(([k])=>k));
 assert(!(state.nativeRefreshes??[]).some(d=>d.startedAt&&!d.completedAt),'native refresh writer not drained');
 // Root coordination excludes outside writers. Check every input before any
 // production write; stage temporary siblings, then rename synchronously with
 // rollback on ordinary filesystem errors. Native state is never written.
 const applied=[];
 try{
  for(const c of manifest.changes){if(c.delete)continue;const dst=path.join(root,c.path),tmp=dst+'.batch65-reconcile-new';assert(!fs.existsSync(tmp),'temporary sibling exists '+tmp);fs.writeFileSync(tmp,fs.readFileSync(path.join(stage,'candidate',c.path)));fs.renameSync(tmp,dst);applied.push(c);}
  for(const c of manifest.changes.filter(c=>c.delete)){fs.unlinkSync(path.join(root,c.path));applied.push(c);}
 }catch(e){for(const c of applied.reverse()){const dst=path.join(root,c.path);if(c.before_sha256===null)fs.rmSync(dst,{force:true});else fs.copyFileSync(path.join(stage,'preimages',c.path),dst);}throw e;}
 fs.writeFileSync(path.join(stage,'application-receipt.json'),json({run:RUN,root_receipt:receiptPath,manifest_sha256:sha(fs.readFileSync(manifestPath)),changes:manifest.changes,no_readiness_or_state_writes:true}));console.log('Applied root-coordinated guarded reconciliation; no readiness/state updates.');
}else throw Error('usage: reconcile-identities.mjs prepare|check|apply [stage-name] [root-receipt]');
