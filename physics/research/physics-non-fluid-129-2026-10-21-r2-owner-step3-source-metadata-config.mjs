// Builds an explicit root proposal only; production application is separate.
import {readFileSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {factParagraphs} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',prefix=`research/${run}-owner-step3-`;
const sha=b=>createHash('sha256').update(b).digest('hex'),guards=new Map();
const read=p=>{const b=readFileSync(p);guards.set(p,sha(b));return JSON.parse(b);};
const importedPaths=new Set(read('research/math-imports.json').files.map(r=>r.path));
const prop=(d,f)=>read(`${prefix}${d}/${f}`),models=new Map(),bases=new Map(),reasons=new Map();
function model(id){if(!models.has(id)){const p=`items/${id}.md`,s=readItem(p);models.set(id,s);bases.set(id,s);guards.set(p,sha(s.raw));}return models.get(id);}
function note(id,reason){if(!reasons.has(id))reasons.set(id,[]);reasons.get(id).push(reason);}
function field(id,k,v,reason){const s=model(id);models.set(id,{...s,[k]:v});note(id,reason);}
function add(id,rows,reason){
 let s=model(id),deps=[...(s.deps??[])],roles={...(s.dependency_roles??{})};
 for(const r of rows){const dep=typeof r==='string'?r:r.id,role=typeof r==='string'?'mathematical-premise':r.role;
  if(!existsSync(`items/${dep}.md`))throw Error('Missing exact declared supplier '+dep);
  if(!deps.includes(dep))deps.push(dep);roles[dep]=role;
 }
 models.set(id,{...s,deps,dependency_roles:roles});note(id,reason);
}
function remove(id,dep,reason){const s=model(id),roles={...(s.dependency_roles??{})};delete roles[dep];models.set(id,{...s,deps:(s.deps??[]).filter(x=>x!==dep),dependency_roles:roles});note(id,reason);}
const ids=new Set(readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json')).flatMap(n=>read(`research/${n}`).flatMap(p=>p.items.map(i=>i.id))));
const helpers=['lem-qftx-global-microlocal-pullback','lem-qftx-microcausal-contraction-compatibility'];
for(const id of helpers)ids.add(id);
for(const id of ids){
 const s=model(id),declared=new Set([...(s.deps??[]),...(s.justified_by??[]),...(s.forward_refs??[])]);
 for(const f of factParagraphs(s.body).values())for(const dep of f.links)if(!declared.has(dep)){
  if(!existsSync(`items/${dep}.md`))throw Error(`Undeclared non-item link ${id}:${f.label} -> ${dep}`);
  const supplier=readItem(`items/${dep}.md`);guards.set(`items/${dep}.md`,sha(supplier.raw));
  if(!supplier.domain&&!importedPaths.has(`items/${dep}.md`))throw Error('Untyped non-import supplier '+dep);
  const role=supplier.domain==='mathematics'||!supplier.domain&&importedPaths.has(`items/${dep}.md`)?'mathematical-premise':supplier.kind==='postulate'?'physical-assumption':supplier.kind==='experiment'?'empirical-premise':['physics-theorem','thought-experiment'].includes(supplier.kind)?'physical-result':'formulation-prerequisite';
  add(id,[{id:dep,role}],`Declare exact existing ${f.label} supplier; no scientific body change`);declared.add(dep);
 }
}

add('post-tgrx-free-collapse-scattering',['def-qft-fock-and-test-spaces','lem-qft-fock-ccr-car','def-qft-involutive-algebra-state'],'Step3 exact second-variable-linear Fock/CCR and common unital star-algebra definitions; full suppliers read by root and scientific owner, no new choice premise');
add('def-emx-lorentz-star',['def-alternating-k-covectors'],'Step3 sealed same-owner Hodge proof explicit degree-zero alternating covectors; existing transitive premise made direct');
add('thm-qftx-positive-unbounded-spectral-calculus',['def-adjoint-of-a-densely-defined-unbounded-operator'],'Step3 actual adjoint criterion F6 and ambient-norm proof');
add('thm-qftx-wavefront-product',['lem-qftx-global-microlocal-pullback'],'Step3 same-owner complete local-to-global controlled pullback proof');
for(const id of ['lem-qftx-microcausal-star-product','prop-qftx-hadamard-wick-change'])add(id,['lem-qftx-microcausal-contraction-compatibility'],'Step3 exact singular-cross/smooth-self contraction compatibility');
add('def-qftx-joint-spectrum-input',['def-qft-involutive-algebra-state','thm-hilbert-adjoint-properties'],'Step3 inherited unital star operations, exact current formula/reference clarification; all7 actual consumers reviewed');
const chain='def-csm-frontier-finite-generator-chain';add(chain,['def-axiom-of-choice'],'Step3 conditional existence citation explicitly under AC; supplied model syntax remains separate');field(chain,'justified_by',[...new Set([...(model(chain).justified_by??[]),'lem-csm-frontier-finite-generator-chain-existence'])],'Step3 schema well-definedness link; never add reverse cyclic deps edge');
const fields=['deps','dependency_roles','justified_by'];
const operations=[];
for(const[id,s]of models){const old=bases.get(id),changed=Object.fromEntries(fields.filter(k=>JSON.stringify(old[k])!==JSON.stringify(s[k])).map(k=>[k,s[k]]));if(Object.keys(changed).length)operations.push({id,before_sha256:sha(old.raw),fields:changed,reason:[...new Set(reasons.get(id)??[])],evidence:'Current native Step3 plus actual same-owner released scientific evidence; declaration proposal only, no acceptance or body edits'});}
const out={run,at:new Date().toISOString(),status:'Explicit metadata proposal; not applied',operations,guards:[...guards].map(([path,sha256])=>({path,sha256}))};
const n=process.argv.indexOf('--out');if(n>=0){const p=process.argv[n+1];if(!p||existsSync(p))throw Error('Require unused output path');writeFileSync(p,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({operations:operations.length,guards:guards.size,out:p}));}else console.log(JSON.stringify(out,null,2));
