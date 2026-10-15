import fs from 'node:fs';import crypto from 'node:crypto';import {splitFrontmatter,factParagraphs,numberedProofSteps,sourceSectionText} from '../../../../tools/facts-block.mjs';
const run='hopf-hecke-unfinished-15-2026-10-15',out=`research/${run}-owner/step2-gate-escalation/contracts-1-5`,inventory=JSON.parse(fs.readFileSync(`${out}/inventory.json`));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');const norm=s=>s.replace(/\s+/g,' ').trim();const guards=new Map();
function readSource(id){const p=`items/${id}.md`;guards.set(p,{path:p,raw_sha256:hash(p)});return splitFrontmatter(fs.readFileSync(p,'utf8')).body;}
function tokens(text,steps){let t=new Set();for(const m of text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)){if(m[2])t.add(m[2]);else if(/^steps?\s/i.test(m[0])||steps.some(s=>s.id===m[1]))t.add(m[1]);}return [...t];}
function fallbackQuote(source,section,body,fact){const t=sourceSectionText(body,section).trim();
 if(source==='prop-functoriality-of-module-tensor-products')return t;
 if(source==='thm-universal-property-of-free-modules')return t;
 if(source==='def-hh-coalgebra-and-coalgebra-map'){
  if(fact.text.includes('maps preserve'))return t;
  return t.slice(t.indexOf('such that'),t.indexOf('Here $')).trim();
 }
 if(source==='def-quotient-module'||source==='thm-quotient-module-laws'||source==='cor-a-linear-subspace-has-a-complement'||source==='lem-hh-finite-spanning-list-contains-a-basis'||source==='cor-independent-set-is-no-larger-than-a-finite-spanning-set'||source==='def-hh-group-like-and-primitive-elements')return t;
 if(source==='def-linear-combination-and-span')return t.slice(t.indexOf('Let $S \\subseteq V$')).trim();
 if(source==='def-dimension'){
  if(fact.text.includes('infinite-dimensional'))return t.slice(t.indexOf('$V$ is **infinite-dimensional'),t.indexOf('**The zero space.**')).trim();
  return t.slice(0,t.indexOf('**This is well defined.**')).trim();
 }
 throw new Error(`Unreviewed quote for ${source}`);
}
const all=[];for(let b=1;b<=5;b++){let file=`research/${run}-batch-${b}.proof-contracts.json`,doc=JSON.parse(fs.readFileSync(file));all.push({b,file,before:doc,after:structuredClone(doc)});}
const mapping=[];
for(const rec of inventory){let obj=all.find(x=>x.b===rec.b),entry=obj.after.contracts[rec.id],old=structuredClone(entry),body=readSource(rec.id),facts=[...factParagraphs(body).values()],steps=numberedProofSteps(body);let citations=[];
 for(const f of facts)for(const source of [...new Set(f.links)]){
  let sourcebody=readSource(source),existing=old.citations.filter(c=>c.source===source);let prior=existing.find(c=>norm(sourceSectionText(sourcebody,c.source_section)??'').includes(norm(c.quote)));let section=prior?.source_section??['Statement','Definition','Example','Statement refuted','Remark'].find(s=>sourceSectionText(sourcebody,s));let quote=prior?.quote??fallbackQuote(source,section,sourcebody,f);let uses=steps.filter(s=>tokens(s.text,steps).includes(f.label)).map(s=>s.id);if(!uses.length)throw new Error(`${rec.id} ${f.label} has no genuine use`);if(!norm(sourceSectionText(sourcebody,section)).includes(norm(quote)))throw new Error('quote mismatch');citations.push({fact:f.label,source,source_section:section,quote,uses});
 }
 entry.citations=citations;
 // Preserve short accurate existing claim summaries; refresh old source-text claims and structurally changed claims from the exact current proof.
 const special=new Set(['thm-hh-comodules-and-rational-dual-modules','lem-hh-group-and-polynomial-hopf-algebras-exist','lem-hh-commutative-or-cocommutative-antipode-is-involutive','ex-hh-tensor-product-hopf-algebra','thm-hh-bialgebra-module-tensor-coherence']);
 let existing=[...(old.derivations??[]),...(old.routine_steps??[])],used=new Set();let derivations=[];
 for(let idx=0;idx<steps.length;idx++){let s=steps[idx],prev=existing.find(e=>e.step===s.id&&!used.has(e.id));if(prev)used.add(prev.id);let claim=prev?.claim??s.claim;
  if(special.has(rec.id)||rec.id==='ex-hh-counital-coideal-quotient-of-comatrix-coalgebra'&&s.id==='2.1'||typeof claim==='string'&&claim.length>300)claim=s.claim;
  let inputs=[...s.inputs];for(const t of tokens(s.text,steps))if(!inputs.includes(t)&&!inputs.includes(`step ${t}`))inputs.push(/^\d+\.\d+$/.test(t)?`step ${t}`:t);
  derivations.push({...(prev??{}),id:prev?.id??`current-${s.id.replace('.','-')}`,step:s.id,claim,inputs});
 }
 entry.derivations=derivations;entry.routine_steps=[];
 mapping.push({batch:rec.b,item:rec.id,source_raw_sha256:hash(`items/${rec.id}.md`),facts:facts.map(f=>({fact:f.label,sources:f.links})),steps:steps.map(s=>({step:s.id,inputs:tokens(s.text,steps)})),scope:'Read current proof and matched actual current supplier clauses. Citation uses and derivation inputs record actual current labels/steps, not a new proof verdict. Boundaries/finite fields unchanged.'});
}
fs.mkdirSync(`${out}/before`,{recursive:true});fs.mkdirSync(`${out}/local-proposals`,{recursive:true});
function ptr(k){return String(k).replace(/~/g,'~0').replace(/\//g,'~1');}
function diff(a,b,p=''){let ops=[];if(JSON.stringify(a)===JSON.stringify(b))return ops;if(Array.isArray(a)&&Array.isArray(b)){for(let i=0;i<Math.min(a.length,b.length);i++)ops.push(...diff(a[i],b[i],p+'/'+i));for(let i=a.length-1;i>=b.length;i--)ops.push({op:'test',path:p+'/'+i,value:a[i]},{op:'remove',path:p+'/'+i});for(let i=a.length;i<b.length;i++)ops.push({op:'add',path:p+'/-',value:b[i]});return ops;}if(a&&b&&typeof a==='object'&&typeof b==='object'&&!Array.isArray(a)&&!Array.isArray(b)){for(const k of Object.keys(a))if(!(k in b))ops.push({op:'test',path:p+'/'+ptr(k),value:a[k]},{op:'remove',path:p+'/'+ptr(k)});for(const k of Object.keys(b))ops.push(...(k in a?diff(a[k],b[k],p+'/'+ptr(k)):[{op:'add',path:p+'/'+ptr(k),value:b[k]}]));return ops;}return[{op:'test',path:p,value:a},{op:'replace',path:p,value:b}];}
let proposals=[];
for(const x of all){let name=x.file.split('/').at(-1),before=`${out}/before/${name}`,local=`${out}/local-proposals/${name}`;fs.copyFileSync(x.file,before);fs.writeFileSync(local,JSON.stringify(x.after,null,2)+'\n');let ops=diff(x.before,x.after);for(const op of ops)if(/\/boundaries(?:\/|$)|\/finite(?:_|-)?(?:smoke|checks?)(?:\/|$)/.test(op.path))throw new Error(`Forbidden field ${op.path}`);let patch=`${out}/batch-${x.b}.operations.json`;fs.writeFileSync(patch,JSON.stringify(ops,null,2)+'\n');proposals.push({batch:x.b,target:x.file,before_file:before,before_raw_sha256:hash(x.file),operations_file:patch,operations_sha256:hash(patch),operation_count:ops.length,local_validation_projection:local,local_projection_sha256:hash(local),integration:'Apply granular operations only after their JSON test preimages and current source guards match. Whole-file hash is archival; unrelated boundary-agent changes are allowed if these exact owned-path tests remain true. Do not copy whole local validation projection to live file.'});}
fs.writeFileSync(`${out}/source-read-guards.json`,JSON.stringify([...guards.values()],null,2)+'\n');fs.writeFileSync(`${out}/proof-reading-map.json`,JSON.stringify(mapping,null,2)+'\n');fs.writeFileSync(`${out}/patch-manifest.json`,JSON.stringify({version:1,run,cycle:1,kind:'granular-proposed-citation-derivation-reconciliation',proposals,source_guards:`${out}/source-read-guards.json`,protected_fields:['boundaries','finite_smoke','finite_checks'],live_changes:false,native_coverage_or_gate_claimed:false},null,2)+'\n');console.log(JSON.stringify({subjects:inventory.length,supplier_and_subject_sources:guards.size,operations:proposals.map(x=>[x.batch,x.operation_count])}));
