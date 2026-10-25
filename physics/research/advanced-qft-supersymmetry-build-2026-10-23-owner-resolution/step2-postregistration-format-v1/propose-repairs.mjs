// Root prospective replacements. No content/metadata/control mutation.
import fs from 'node:fs';import crypto from 'node:crypto';
import{yaml}from'../../../../tools/physics-support/pathway-lib.mjs';
import{splitFrontmatter,sectionText}from'../../../../tools/physics-support/facts-block.mjs';
const run='advanced-qft-supersymmetry-build-2026-10-23',dir=`research/${run}-owner-resolution/step2-postregistration-format-v1`,sha=s=>crypto.createHash('sha256').update(s).digest('hex'),findings=JSON.parse(fs.readFileSync(`${dir}/confirmed-defects-and-proposed-repairs.json`)),sources=new Map();
const once=(s,a,b)=>{if(s.split(a).length!==2)throw Error('Nonunique replacement: '+a);return s.replace(a,()=>b);};
const tags=(s,label,add)=>s.replace(new RegExp('^'+label.replace('.','\\.')+' [^\\n]+$','m'),line=>line.replace(/\[([^\]\n]+)\](\s*∎)?$/,(_,old,end='')=>'['+[...new Set([...old.split(/,\s*/),...add])].join(', ')+']'+end));
for(const r of findings.findings){const before=fs.readFileSync(r.path,'utf8');if(sha(before)!==r.before_sha256)throw Error('Changed '+r.id);let after=before;const{fm}=splitFrontmatter(before),meta=yaml().parse(fm);let editMeta=false;
if(r.id==='op-aqft-fusion-two-category-anomaly-classification')after=once(after,'## Status references','## Sources');
if(r.id==='thm-qftx-strong-coupling-wilson-area-law')after=tags(after,'3.1',['F7']);
if(r.id==='thm-adhm-fixed-point-instanton-count')after=once(after,'[[def-axiom-of-choice]]\n[F6]','[[def-axiom-of-choice]]\n\n[F6]');
if(r.id==='lem-qftx-p2-beilinson-diagonal-and-framed-vanishing'){
 const old=after.match(/^\[F10\] [^\n]+$/m)[0];after=once(after,old,'[F10] Assume AC. For a quasi-compact separated scheme with a finite ordered affine open cover, the ordered Čech complex of a quasi-coherent sheaf computes derived sheaf cohomology. For every affine scheme $U=\\operatorname{Spec}A$, the three standard charts of $\\mathbb P^2_U$ and all their finite intersections are affine, so quasi-coherent cohomology vanishes above degree two. For a general base $S$, apply this computation on affine open subsets of $S$ and on affine target opens for the relative diagonal pushforward. The restriction-compatible complexes give the relative constructions by sheaf gluing. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]');
 after=once(after,'7.1 Let $S,\\mathcal E,\\Phi,\\mathcal G_i$ satisfy the family hypotheses in the Statement.','7.1 Let $S,\\mathcal E,\\Phi,\\mathcal G_i$ satisfy the family hypotheses in the Statement. Work locally on affine open subsets of $S$ and, for the diagonal pushforward, on affine opens of its target. On each such open, [F10] supplies the standard three-chart Čech computation. Restrictions commute with its differentials and the diagonal maps, so these local constructions agree on overlaps and glue.');after=tags(after,'7.1',['F10']);
}
if(r.id==='thm-qftx-framed-p2-monad-adhm-correspondence'){
 const id='thm-cech-computes-qc-cohomology-separated-scheme-affine-cover';meta.deps.push(id);meta.dependency_roles[id]='mathematical-premise';editMeta=true;
 after=once(after,'\n## Proof\n','\n[F10] Assume AC. On $\\mathbb P^2_A$ for an affine base $\\operatorname{Spec}A$, the three standard affine charts and their affine intersections form an acyclic cover for every quasi-coherent sheaf. Its ordered Čech complex computes sheaf cohomology and has no terms above degree two. This applies to $A=\\mathbb C$ and $A=\\mathbb C[\\epsilon]/(\\epsilon^2)$. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]\n\n## Proof\n');after=once(after,'steps 1.2–6.2','steps 1.2, 2.3 and 3.2');
}
if(r.id==='ex-qftx-euclidean-trivial-vacuum-sector'){
 after=once(after,'$F_A=dA+\\tfrac12[A\\wedge A].','$F_A=dA+\\tfrac12[A\\wedge A]$.');meta.deps.push('def-qftx-instanton-number-and-asd-sector','post-qftx-euclidean-yang-mills-model');meta.dependency_roles['def-qftx-instanton-number-and-asd-sector']='formulation-prerequisite';meta.dependency_roles['post-qftx-euclidean-yang-mills-model']='physical-assumption';editMeta=true;after=tags(after,'2.1',['F5']);
}
if(r.id==='ex-qftx-bpst-instanton-formal-sector-weight'){after=tags(after,'2.1',['A2']);after=tags(after,'2.2',['A2']);}
if(r.id==='def-qftx-instanton-equivariant-partition-series'){after=once(after,'$-\\widetilde m.','$-\\widetilde m$.');after=tags(after,'1.1',['F3','F4']);}
if(['lem-qftx-periodic-su2-product-kernel-and-center-line-sign','def-aqft-noninvertible-defect-fusion','op-qftx-clay-4d-yang-mills-existence-mass-gap','def-qftx-susy-vacuum-moduli-data'].includes(r.id))after=after.replace(/\$\$([\s\S]*?)\$\$/g,(all,inner)=>inner.trim().includes('\n')?'$$'+inner.trim().replace(/\s*\n\s*/g,' ')+'$$':all);
if(r.id==='def-aqft-lsz-amplitude-data')after=once(after,'\\mathbb C[[j_1,\\ldots,j_{n_0}]]','\\mathbb C[\\![j_1,\\ldots,j_{n_0}]\\!]');
if(editMeta){const body=splitFrontmatter(after).body;after='---\n'+yaml().stringify(meta)+'---\n'+body;}
if(after===before)throw Error('No change '+r.id);sources.set(r.id,{after,before_sha256:sha(before),after_sha256:sha(after),path:r.path});
}
const changes=[];
for(const path of ['research/plan-spec.json',...Array.from({length:71},(_,i)=>`research/${run}-batch-${i+1}.pages.json`)]){const d=JSON.parse(fs.readFileSync(path)),pages=Array.isArray(d)?d:d.pages;for(let p=0;p<pages.length;p++)for(let i=0;i<(pages[p].items??[]).length;i++){const item=pages[p].items[i],s=sources.get(item.id);if(!s)continue;const{fm,body}=splitFrontmatter(s.after),m=yaml().parse(fm),head={definition:'Definition',example:'Example','open-problem':'Open problem'}[m.kind]??'Statement';for(const field of ['deps','dependency_roles','statement']){const value=field==='statement'?sectionText(body,head).trim():m[field];if(JSON.stringify(item[field])!==JSON.stringify(value))changes.push({path,pointer:`${Array.isArray(d)?'':'/pages'}/${p}/items/${i}/${field}`,before_sha256:sha(JSON.stringify(item[field]===undefined?{present:false}:{present:true,value:item[field]})),after_sha256:sha(JSON.stringify(value===undefined?{present:false}:{present:true,value})),item:item.id,field,value});}}}
fs.writeFileSync(`${dir}/prospective-repairs.json`,JSON.stringify({run,source_writes:false,sources:[...sources].map(([id,{after,...r}])=>({id,...r})),metadata_changes:changes},null,2)+'\n');console.log(JSON.stringify({sources:sources.size,pointers:changes.length,source_writes:false}));
export{sources,changes};
