import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/non-ml-math-remaining-81-2026-10-18-owner-step5-full-gate-boundary/shard-11-proposal';
const id='lem-pa36-p1-line-bundle-cohomology',path='items/'+id+'.md';
const before=fs.readFileSync(path,'utf8');
const edits=[
 ['deps:\n','deps:\n  - def-axiom-of-choice\n'],
 ['proof_strategy: direct\n','proof_strategy: direct\naxiom_use: The Axiom of Choice is inherited from derived sheaf cohomology and the affine-cover comparison used in both proof steps; the finite Laurent calculations make no additional choices.\n'],
 ['## Statement\n\n','## Statement\n\nAssume the Axiom of Choice, inherited from sheaf cohomology.\n\n'],
 ['**Given:** $\\mathbb P^1$ with the two standard affine charts, an integer\n$d$, the line-bundle transition $e_1=z^d e_0$, and sheaf cohomology.','**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), $\\mathbb P^1$\nwith the two standard affine charts, an integer $d$, the line-bundle\ntransition $e_1=z^d e_0$, and sheaf cohomology with the supplied injective\nresolution datum.'],
 ['[F1] The two-chart affine cover computes cohomology of a quasi-coherent\nsheaf on the separated scheme $\\mathbb P^1$','[F1] Under the assumed Axiom of Choice inherited from the definition of\nsheaf cohomology, the two-chart affine cover computes cohomology of a\nquasi-coherent sheaf on the separated scheme $\\mathbb P^1$']
];
let after=before;for(const [a,b]of edits){if(after.split(a).length!==2)throw Error('nonunique edit');after=after.replace(a,b)}
fs.writeFileSync(base+'/p1.before.md',before);fs.writeFileSync(base+'/p1.proposed.md',after);
const sourceOp={id,path,before,after,before_item_sha256:itemHashGuard(before),after_item_sha256:itemHashGuard(after),edits:edits.map(([source_excerpt,proposed_replacement])=>({source_excerpt,proposed_replacement})),reason:'Expose the already inherited AC assumption of the fixed derived-cohomology interface; preserve all degree ranges, dimensions, global-section and Laurent-basis claims unchanged.'};
const manifestPath='research/non-ml-math-remaining-81-2026-10-18-batch-67.pages.json';
const m=JSON.parse(fs.readFileSync(manifestPath));const page=m.find(p=>p.items.some(i=>i.id===id));const row=page.items.find(i=>i.id===id);const mr=structuredClone(row);mr.deps.unshift('def-axiom-of-choice');mr.statement='Assume the Axiom of Choice, inherited from sheaf cohomology.\n\n'+row.statement;
const manifestOp={path:manifestPath,page_id:page.id,id,before:row,after:mr};
const contractPath='research/non-ml-math-remaining-81-2026-10-18-batch-67.proof-contracts.json';const c=JSON.parse(fs.readFileSync(contractPath));
const oldOps=JSON.parse(fs.readFileSync(base+'/operations.json'));
const p1ops=oldOps.filter(o=>o.id===id).map(o=>{const p=structuredClone(o);p.item_sha256=itemHashGuard(after);p.after.template_review.item_sha256=itemHashGuard(after);p.requires_source_install=true;delete p.blocked;
if(p.case==='nonempty-choice'){
 p.after={case:p.case,status:'checked',evidence:'Statement and Facts & Assumptions explicitly assume inherited AC for derived sheaf cohomology and the affine-cover comparison in proof steps 1.1 and 2.1; all Laurent exponent calculations are finite and add no choice principle.'};
 const reason='The stated inherited Choice assumption supplies the injective-resolution cohomology interface and its affine-cover comparison. The two-chart kernel and Laurent quotient calculations themselves require no further selections.';
 const row_sha256=createHash('sha256').update(JSON.stringify({case:p.after.case,status:p.after.status,text:p.after.evidence})).digest('hex');
 p.after.template_review={upheld:true,by:'/root/math81_boundary_gate_11',reason,item_sha256:itemHashGuard(after),row_sha256};
 p.review_evidence='Read the full cohomology Definition and affine-cover theorem. Proposed carrier explicitly supplies their inherited AC in Statement, Given, F1 and deps. Rechecked both Laurent calculations; no arithmetic changes required.';
}return p});
const entryBefore=c.contracts[id];const entryAfter=structuredClone(entryBefore);for(const o of p1ops){const index=entryAfter.boundaries.findIndex(b=>b.case===o.case);entryAfter.boundaries[index]=o.after}
const consumers=[
 {id:'lem-pa36-relative-p1-singular-kernel',relationship:'direct',status:'draft',disposition:'sound-unchanged',reading:'Read entire Statement, Facts and proof 1.1–5.1. Statement explicitly assumes the flag setup including AC; def-axiom-of-choice is already a dependency. F3 uses only d=-1,0,1 computations, preserved verbatim by the supplier repair. Products/base-extension and evaluation retain the same vanishing inputs.'},
 {id:'lem-pa36-singular-parabolic-kernel',relationship:'direct',status:'draft',disposition:'sound-unchanged',reading:'Read entire Statement, Facts and proof 1.1–3.1. Its D_kappa and partial TDO setup are supplied by def-pa36-flag-tdo-and-module, whose Definition opens with inherited AC; the published complex flag definition explicitly assumes AC for every dependent item. F2 invokes the relative P1 classification under that same setup. The direct P1 dependency is context; no use of a choice-free claim occurs.'},
 {id:'thm-pa36-singular-parabolic-kernel-filtration',relationship:'indirect',status:'draft',disposition:'sound-unchanged',reading:'Read entire Statement, Facts and proof 1.1–3.1. Already depends explicitly on def-axiom-of-choice and the complex flag definition, whose convention assumes AC for every dependent item. F2 uses exactness/kernel membership from the singular parabolic lemma; exposing inherited AC in the Laurent supplier changes none of these inputs, the empty-root sequence case or filtration proof.'}
];
const citationBefore=c.contracts['lem-pa36-relative-p1-singular-kernel'].citations[3];if(citationBefore.source!==id)throw Error('citation moved');const citationAfter=structuredClone(citationBefore);citationAfter.quote='Assume the Axiom of Choice, inherited from sheaf cohomology.\n\n'+citationBefore.quote;
const proposal={run:'non-ml-math-remaining-81-2026-10-18',reviewer:'/root/math81_boundary_gate_11',cycle:1,source_operations:[sourceOp],manifest_operations:[manifestOp],contract_operations:[{path:contractPath,id,before:entryBefore,after:entryAfter},{path:contractPath,id:'lem-pa36-relative-p1-singular-kernel',pointer:'/contracts/lem-pa36-relative-p1-singular-kernel/citations/3',before:citationBefore,after:citationAfter}],consumers,consumer_discovery:'Enumerated every items/*.md frontmatter dependency or justified_by mention transitively from the supplier and separately all body mentions of the closure; found only these three descendants and no outside nonlogical mentions. Neither supplier nor descendants have aliases.',source_gap_resolved_in_proposal:true,canonical_source_changed:false,notes:'Statement requires the explicit axiom because statement-first complete hypotheses and the AC supplier Definition both require it where stated. A choice-free finite Cech computation alone does not supply the published derived-cohomology interface. Full mathematical conclusion retained; only inherited foundation exposed. All descendants already assume that foundation. Root owns install, current hashes, manifests and native recertification.'};
fs.writeFileSync(base+'/p1-repair-proposal.json',JSON.stringify(proposal,null,2)+'\n');fs.writeFileSync(base+'/p1-post-repair-operations.json',JSON.stringify(p1ops,null,2)+'\n');
console.log(JSON.stringify({before:sourceOp.before_item_sha256,after:sourceOp.after_item_sha256,consumers:consumers.map(x=>x.id),source_edits:edits.length,post_repair_rows:p1ops.length}));
