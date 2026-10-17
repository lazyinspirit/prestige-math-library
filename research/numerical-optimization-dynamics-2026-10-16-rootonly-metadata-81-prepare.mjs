import fs from 'node:fs';import path from 'node:path';import{splitFrontmatter,sourceSectionText,numberedProofSteps}from '../tools/facts-block.mjs';
const R='numerical-optimization-dynamics-2026-10-16',dir=`research/${R}-rootonly-metadata-81-data`,roots=['def-phi-functions-by-everywhere-convergent-series','lem-phi-series-converges-absolutely','thm-phi-recurrence-and-augmented-matrix-actions'];
if(fs.existsSync(dir))throw Error('Preview exists');for(const d of ['before','proposed','sources'])fs.mkdirSync(`${dir}/${d}`,{recursive:true});
const cache=new Map(),guards=new Set(),changes=[];function source(id){const p=`items/${id}.md`;if(!cache.has(p))cache.set(p,fs.readFileSync(p));guards.add(p);return cache.get(p).toString();}
function set(o,k,v,locus){if(JSON.stringify(o[k])!==JSON.stringify(v)){changes.push({locus,before:o[k],after:v});o[k]=v;}}
function setBoundary(c,name,value,locus){const i=c.boundaries.findIndex(b=>b.case===name);if(i<0)throw Error('Missing boundary');const old=c.boundaries[i];if(JSON.stringify(old)!==JSON.stringify(value)){changes.push({locus:`${locus}/boundaries/${i}`,before:old,after:value});c.boundaries[i]=value;}}
const outputs=[];
for(const batch of [81,94]){
 const p=`research/${R}-batch-${batch}.proof-contracts.json`,raw=fs.readFileSync(p),doc=JSON.parse(raw);
 for(const[id,c]of Object.entries(doc.contracts)){
  const locus=`${p}#/contracts/${id}`;
  if(roots.includes(id)){
   const steps=new Map(numberedProofSteps(splitFrontmatter(source(id)).body).map(s=>[s.id,s]));
   for(const field of ['derivations','routine_steps'])for(const[i,d]of(c[field]??[]).entries()){
    const s=steps.get(d.step);if(!s)continue;set(d,'claim',s.claim,`${locus}/${field}/${i}/claim`);if(JSON.stringify([...d.inputs].sort())!==JSON.stringify([...s.inputs].sort()))set(d,'inputs',s.inputs,`${locus}/${field}/${i}/inputs`);
   }
   if(id===roots[0]){
    setBoundary(c,'empty',{case:'empty',status:'checked',evidence:'Definition: For n=0, I_0 is the unique empty matrix; every power and partial sum is that matrix, and phi_k(0_0x0)=I_0/k!=0_0x0 including k=0.'},locus);
    const zero=c.boundaries.find(a=>a.case==='zero');set(zero,'evidence','Definition: scalar zero gives 1/k!; positive-size zero matrices have only the j=0 term possibly nonzero, and at size0 every term is the empty matrix, yielding I_n/k! in every size.',`${locus}/boundaries/1/evidence`);
    const ep=c.boundaries.find(a=>a.case==='endpoints');set(ep,'evidence','Definition: k=0 and every integer k>=0 are included; the matrix domain states n>=0, with I_0 the unique empty matrix.',`${locus}/boundaries/4/evidence`);
   }else if(id===roots[1]){
    setBoundary(c,'empty',{case:'empty',status:'checked',evidence:'step 1.2: for n=0 every term has norm0, the series is absolutely convergent, and every partial sum is the unique empty matrix; step 2.1 retains this direct convergence case.'},locus);
    const z=c.boundaries.find(a=>a.case==='zero');set(z,'evidence','step 3.1 evaluates scalar zero, positive-size zero matrices and the empty matrix directly, using step 1.2 for the empty case.',`${locus}/boundaries/1/evidence`);
    const one=c.boundaries.find(a=>a.case==='one');set(one,'evidence','step 1.2 retains the positive-size norm majorant, including n=1; the Statement now includes every finite n>=0.',`${locus}/boundaries/2/evidence`);
   }else{
    setBoundary(c,'empty',{case:'empty',status:'checked',evidence:'step 1.2: at n=0 the recurrence is equality of the unique empty matrix with itself. step 2.1: B_k=J_k and the extracted first zero entries and phi_k(X)w are both the empty vector.'},locus);
   }
  }
  for(const[i,a]of c.citations.entries())if(roots.includes(a.source)||(id===roots[1]&&a.fact==='F1'&&a.source==='def-operator-norm-on-a-finite-dimensional-inner-product-space')){
   const q=sourceSectionText(splitFrontmatter(source(a.source)).body,a.source_section)?.trim();if(!q)throw Error('Missing source section');set(a,'quote',q,`${locus}/citations/${i}/quote`);
  }
 }
 const out=Buffer.from(JSON.stringify(doc,null,2)+'\n');if(!raw.equals(out))outputs.push({p,raw,out});
}
for(const o of outputs){fs.writeFileSync(`${dir}/before/${path.basename(o.p)}`,o.raw);fs.writeFileSync(`${dir}/proposed/${path.basename(o.p)}`,o.out);}
for(const p of guards)fs.writeFileSync(`${dir}/sources/${path.basename(p)}`,cache.get(p));
fs.writeFileSync(`${dir}/preview.json`,JSON.stringify({run:R,purpose:'ROOTONLY mirrors for the root-approved restoration of zero-sized phi functions; no proof or native acceptance',files:outputs.map(o=>o.p),changes,source_guards:[...guards].sort(),note:'Only changed-root derivations/inputs, current changed-root supplier quotes (including cross-batch94 consumers), norm-zero fact supplier excerpt, and stale zero-dimension boundary worksheets. Existing manifest summaries already promise all finite square matrices and need no change. No dependencies, levels, risk, verdict, verification, or native history modified.'},null,2)+'\n');
console.log(JSON.stringify({files:outputs.map(o=>o.p),change_count:changes.length,changes:changes.map(c=>c.locus)},null,2));
