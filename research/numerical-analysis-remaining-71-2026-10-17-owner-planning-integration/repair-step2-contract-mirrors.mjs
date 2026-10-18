// Exact root preparation findings: declare already-used suppliers, make existing
// premise uses explicit, and write L^2 as mathematics rather than a fact label.
import{readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync}from'node:fs';
import{numberedProofSteps,splitFrontmatter}from'../../tools/facts-block.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/step2-contract-source-before`,receipt=`${base}/step2-contract-source-repairs.json`;
if(exists(receipt)&&!process.argv.includes('--correct-display-format'))throw Error('Already repaired');
const tags={
 'ex-ewald-source-collision-field-singularity':{'1.1':['F1']},
 'lem-bessel-integral-representations-and-scaled-range':{'1.1':['F2']},
 'thm-analytic-strip-trapezoid-error':{'1.1':['F1']},
 'lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube':{'1.1':['F4']},
 'thm-bem-helmholtz-layer-jumps-match-laplace-jumps':{'1.1':['F91'],'2.1':['F90'],'3.1':['F90']},
};
const deps={
 'thm-certified-integer-order-bessel-enclosures':['lem-trigonometric-identities-machin-and-range-reduction'],
 'thm-na-star-shaped-bogovskii-bounded-right-inverse':['thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign'],
};
const notation=['lem-pe26-discrete-trace-schur-equivalence','lem-na-practical-dpg-fortin-p1-r3'];
const ids=[...new Set([...Object.keys(tags),...Object.keys(deps),...notation])],rows=[];
for(const id of ids){const path=`items/${id}.md`,dest=`${archive}/${path}`,raw=read(exists(dest)?dest:path,'utf8');mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});if(!exists(dest))write(dest,raw,{flag:'wx'});const interim=`${base}/step2-contract-source-intermediate/${path}`;if(process.argv.includes('--correct-display-format')&&!exists(interim)){mkdirSync(interim.slice(0,interim.lastIndexOf('/')),{recursive:true});write(interim,read(path),{flag:'wx'});}let text=raw;
 for(const[label,extra]of Object.entries(tags[id]??{})){const step=numberedProofSteps(splitFrontmatter(text).body).find(x=>x.id===label);if(!step||!step.inputs.length)throw Error('Step guard '+id);const token=`${step.id} ${step.text}`,qed=/∎\s*$/.test(step.text)?' ∎':'',next=`${step.id} ${step.claim} [${[...new Set([...step.inputs,...extra])].join(', ')}]${qed}`;if(!text.includes(token))throw Error('Exact row guard');text=text.replace(token,()=>next);}
 if(notation.includes(id)){const{body}=splitFrontmatter(text);if(!/\bL2\b/.test(body))throw Error('Notation guard');text=text.replace(/(^## (?:Proof|Verification|Refutation|Counterexample)[ \t]*\r?\n)([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm,(_,heading,proof)=>heading+proof.replace(/\bL2\b/g,'$L^2$'));}
 if(deps[id]){const{fm,body}=splitFrontmatter(text),doc=yaml().parseDocument(fm),meta=doc.toJSON();for(const d of deps[id]){if(!body.includes(`[[${d}]]`))throw Error('Dependency guard');}doc.set('deps',doc.createNode([...new Set([...meta.deps,...deps[id]])]));text=text.replace(/^---\r?\n[\s\S]*?\r?\n---/,()=>`---\n${doc.toString({lineWidth:0}).trimEnd()}\n---`);if(splitFrontmatter(text).body!==body)throw Error('Body changed by metadata');}
 write(path,text);rows.push({id,proof_input_tags:tags[id]??{},already_used_supplier_declarations:deps[id]??[],l_two_notation:notation.includes(id)});
}
write(receipt,JSON.stringify({version:1,run,at:new Date().toISOString(),archive,rows,original_statements_definitions_unchanged:true,display_delimiters_restored_from_exact_originals:process.argv.includes('--correct-display-format'),native_gate_credit:false},null,2)+'\n',process.argv.includes('--correct-display-format')?{}:{flag:'wx'});
console.log(JSON.stringify({sources:rows.length,supplier_declaration_or_lexical_repairs:2,mathematical_claim_changes:false}));
