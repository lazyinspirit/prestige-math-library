// Root join of released current semantic proposals; no production writes or acceptance stamps.
import{readFileSync,writeFileSync,existsSync}from'node:fs';import{createHash}from'node:crypto';import{readItem}from'../tools/physics-support/physics-content.mjs';import{itemHashGuard}from'../tools/physics-support/item-hash.mjs';import{splitFrontmatter,numberedProofSteps}from'../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-root-adoption`,out=`${base}/contracts`,read=p=>JSON.parse(readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex');if(!process.argv.includes('--all-boundary-proposals-released'))throw Error('Require actual release of all eight proposal writers');
const maps=read(`${base}/numbering/receipt.json`).rows,metadata=read(`${base}/final-source-metadata/receipt.json`).changes,prose=read(`${base}/incidental-prose/receipt.json`).rows,compat=read(`research/${run}-owner-step2-focal-smooth-successor/worksheet6-successor-compatibility.json`),entries=new Map(),guards=[],rebindings=[];
function refs(s,map){return s.replace(/\b(?:steps?|Proof|Verification)\s*\d+\.\d+(?:(?:\s*[,;–—-]\s*|\s+(?:and|through|to)\s+)\d+\.\d+)*/gi,c=>c.replace(/\d+\.\d+/g,n=>map[n]??n));}
function rewrite(v,map,k=''){if(Array.isArray(v))return v.map(x=>rewrite(x,map,k));if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,rewrite(x,map,k)]));if(typeof v==='string'){if(['argument_steps','own_step_references'].includes(k)&&map[v])return map[v];return refs(v,map);}return v;}
for(let n=1;n<=8;n++){
 const path=`research/${run}-owner-step2-boundary-proposal-${n}/proposal.json`,doc=read(path),task=read(`${out}/boundary-task-${n}.json`),rows=doc.items??Object.fromEntries(Object.entries(doc.boundaries).map(([id,boundaries])=>[id,{...doc.reviews[id],boundaries,source_raw_sha256:doc.source_hashes[id]}]));
 if(doc.run!==run||Object.keys(rows).length!==task.items.length||task.items.some(r=>!rows[r.id]))throw Error('Proposal scope differs '+n);guards.push({path,sha256:sha(readFileSync(path))});
 for(const[id,original]of Object.entries(rows)){
  if(entries.has(id))throw Error('Overlapping worksheet subject '+id);let row=structuredClone(original),hash=row.source_raw_sha256??row.source_raw_sha256_as_read??row.sourceRawSha256,current=readItem(`items/${id}.md`),currentHash=sha(current.raw),mapping={};
  if(id===compat.id){if(hash!==compat.worksheetSourceRawSha256)throw Error('Focal review preimage differs');row.boundaries=compat.boundaries;hash=compat.successorSourceRawSha256;rebindings.push({id,basis:'Exact same-owner smooth successor compatibility, unchanged Statement and own-step map',evidence:`research/${run}-owner-step2-focal-smooth-successor/worksheet6-successor-compatibility.json`});}
  if(hash!==currentHash){const m=maps.find(r=>r.path===`items/${id}.md`&&r.before_sha256===hash&&r.after_sha256===currentHash),f=metadata.find(r=>r.path===`items/${id}.md`&&r.before_sha256===hash&&r.after_sha256===currentHash),p=prose.find(r=>r.path===`items/${id}.md`&&r.before_sha256===hash&&r.after_sha256===currentHash);
   if(m){mapping=m.mapping;row.boundaries=rewrite(row.boundaries,mapping);rebindings.push({id,basis:'Exact root content-preserving canonical paragraph map',mapping});}
   else if(f)rebindings.push({id,basis:'Root source metadata only; body hash preserved',body_sha256:f.body_sha256});
   else if(p)rebindings.push({id,basis:'Exact root incidental explanatory-prose correction; public/Facts/numbered paragraphs unchanged'});
   else throw Error('Unreviewed current source differs '+id+' '+hash+' '+currentHash);
  }
  if(!Array.isArray(row.boundaries)||row.boundaries.length!==8||new Set(row.boundaries.map(b=>b.case)).size!==8||row.boundaries.some(b=>b.template_review))throw Error('Invalid semantic rows '+id);
  entries.set(id,{proposal:path,source_hash:currentHash,boundaries:row.boundaries,semantic_review:row});
 }
}
if(entries.size!==314)throw Error('Unexpected semantic scope');
// Root resolves three residual prose locators against actual current paragraphs.
const corrections={
 'cex-emg-fx-neutral-no-amplification':{
  one:'The Statement and A1/A2 fix the lowest spherical harmonic ell=0 with normalized constant Y. Steps 2.1 through 4.1 construct and normalize this actual mode to unit incoming amplitude; step 5.1 has T nonzero.',
  endpoints:'Statement assumes omega>0 and 0<|Q|<M. Fact F3 gives omega_H=omega for e=0. Steps 2.1, 3.1 and 4.1 establish both infinite-end asymptotics; step 5.1 gives strictly less than unit reflection, without a zero-frequency or extremal-threshold claim.',
  'nonempty-choice':'Steps 2.1 and 4.1 explicitly construct the neutral spherical mode by its convergent Volterra series, prove a nonzero and normalize u=u_minus/a; no arbitrary family of scattering solutions is selected.'},
 'def-csm-frontier-latent-gibbs-observation':{zero:'The observation density in the Definition may vanish at points or events. Step 3.1 uses only nonnegative measurable densities and total integral one; no positive pointwise likelihood or posterior division is asserted.'},
 'ex-qsmx-toric-defect-pair':{one:'For a one-edge primal path, step 2.1 gives its two odd endpoint vertices; for a one-edge dual path, step 2.2 gives its two odd endpoint faces. Steps 3.1 and 4.1 compute the corresponding exact energy increases.'}
};
for(const[id,byCase]of Object.entries(corrections))for(const b of entries.get(id).boundaries)if(byCase[b.case])b.evidence=byCase[b.case];
for(const[id,row]of entries)for(const b of row.boundaries){
 if(b.status==='checked'&&!/\d+\.\d+|statement|definition|example|counterexample/i.test(b.evidence??'')){
  const kind=readItem(`items/${id}.md`).kind,heading=kind==='definition'||kind==='algorithm'?'Definition':kind==='example'?'Example':kind==='counterexample'||kind==='false-statement'?'Counterexample statement':'Public statement';
  b.evidence=`${heading} and its supplied argument: ${b.evidence}`;
 }
}

const all={version:1,scope:[],contracts:{}},batchFiles=[];
for(let batch=1;batch<=129;batch++){
 const doc=read(`${out}/batch-${batch}.proposal.json`);
 for(const[id,entry]of Object.entries(doc.contracts)){
  const proposed=entries.get(id);if(proposed)entry.boundaries=proposed.boundaries;
  const s=readItem(`items/${id}.md`);
  for(const b of entry.boundaries??[]){if(b.template_review&&b.template_review.item_sha256!==itemHashGuard(s.raw)){b.historical_template_review=b.template_review;delete b.template_review;}}
  if(proposed)entry.current_boundary_worksheet={proposal:proposed.proposal,source_sha256:proposed.source_hash,qualification:'Released complete current source/eight-case semantic worksheet; root transcribed exact current rows. No independent acceptance or finite computation asserted.'};
 }
 const path=`${out}/batch-${batch}.joined.json`;writeFileSync(path,JSON.stringify(doc,null,2)+'\n');batchFiles.push(path);all.scope.push(...doc.scope);Object.assign(all.contracts,doc.contracts);
}
writeFileSync(`${out}/merged.joined.json`,JSON.stringify(all,null,2)+'\n');writeFileSync(`${out}/boundary-join.json`,JSON.stringify({at:new Date().toISOString(),items:entries.size,rows:entries.size*8,proposal_guards:guards,rebindings,scope:all.scope.length,batch_files:batchFiles,entries:Object.fromEntries(entries),scientific_acceptance:false,production_edits:false},null,2)+'\n');console.log(JSON.stringify({items:entries.size,scope:all.scope.length,rebindings:rebindings.length}));
