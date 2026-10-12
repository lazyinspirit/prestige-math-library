import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const out=base+'/restored-partitions-01-05';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
const owned=new Set();for(let i=1;i<=5;i++)for(const id of read(base+'/boundary-template-inventory/partition-0'+i+'.json').item_ids)owned.add(id);
const prefix={
 'def-root-height-completion-for-weightwise-quasi-r-intertwiners':{'*':'Definition, diagonal product, convolution multiplication and finite-tail action'},
 'lem-balanced-triple-linear-algebra-over-the-projective-line':{'*':'Statement, parts on tensor identifications and relative balancedness'},
 'lem-string-ideal-triples-are-balanced':{'*':'Proof step 1.1, descending zero-string base'},
 'thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique':{'*':'Proof steps 1.1 and 4.1, tensor-unit normalization and uniqueness'},
 'def-upper-global-basis-by-the-contravariant-form':{'*':'Definition, inverse Gram system and componentwise adjoint operators'},
 'thm-integral-triangular-decomposition-for-the-lusztig-form':{empty:'Proof step 1.1, free homogeneous components',zero:'Proof step 3.1, degree-zero toral factor'},
 'thm-quantum-highest-weight-modules-deform-the-classical-weight-character':{empty:'Proof steps 1.1 and 2.1, free weight lattices and base change',degenerate:'Proof step 2.1, unit-parameter fibre'},
 'lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize':{zero:'Statement, tensor degree zero; Proof steps 1.1 and 7.1',one:'Proof step 7.1, contraction normal form',degenerate:'Proof step 2.1, fixed-rank Jordan charts',endpoints:'Proof steps 1.2 and 8.1, Hartogs extension and nilpotence termination'},
 'thm-ordered-monomial-pbw-basis-for-the-shifted-yangian':{empty:'Statement, ordered monomial bases with the empty monomial',zero:'Proof steps 7.1 and 8.1, empty-row Jacobian and finite Hilbert product',one:'Proof step 3.2, single-column induction base',degenerate:'Proof steps 3.1 and 3.2, zero shift and empty rows',endpoints:'Statement, finite mode bounds; Proof step 11.2, upper-coefficient vanishing','iff-forward':'Proof step 9.1, defining relations and identification','iff-reverse':'Proof steps 9.1 and 10.1, full identification and quotient basis'},
 'lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient':{one:'Proof step 1.2, first-factor tensor formula',endpoints:'Proof steps 2.1 and 3.1, column flag and minimal polynomial'},
 'thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives':{empty:'Statement, exact functor and kernel; Proof step 5.1, projective copresentations',zero:'Proof step 9.2, zero-occupancy row projector; Statement, exact functor',one:'Proof steps 1.2 and 2.2, ground-column induction and cover comparison',degenerate:'Proof steps 1.2 and 9.2, ground-column construction and original-pyramid compression',endpoints:'Proof steps 9.2 and 11.1, stable enlargement and supporting central corner','nonempty-choice':'Statement, ambient Choice assumption; Proof steps 3.1 and 9.2, finite detector and row shifts'},
 'thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects':{zero:'Proof steps 1.1 and 7.1, regular tensor corner and projective evaluation',degenerate:'Proof step 5.1, original-pyramid descent',endpoints:'Proof steps 1.1 and 5.1, stable bound and supporting compression'},
 'ex-vust-double-centralizer-in-a-small-stable-range':{zero:'Example, single-column zero nilpotent',one:'Proof step 1.1, tensor degree one',endpoints:'Proof steps 1.2 and 3.1, tensor square and stable range'},
 'lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations':{zero:'Statement, ordinary semistandard basis; Proof steps 1.1 and 4.1, empty-tableau specialization',one:'Proof steps 1.1 and 1.2, one-box unit pivot',degenerate:'Proof steps 2.1 and 4.1, specialization and unit-valued pairing',endpoints:'Proof steps 1.2 and 4.1, finite straightening and filtrations','nonempty-choice':'Proof steps 3.1 and 6.1, finite support elimination; Statement, finite tableau indexing'},
 'def-affine-and-cyclotomic-type-a-hecke-algebras':{zero:'Definition, rank-zero convention and charged polynomial quotient',degenerate:'Definition, additive branch and residue-root polynomial'},
 'lem-hecke-intertwiners-produce-local-klr-generators':{zero:'Proof step 3.1, zero-sector inclusion',one:'Proof step 1.1, projector and dot relations',degenerate:'Proof steps 1.1 and 1.2, additive and multiplicative normalizations','nonempty-choice':'Proof step 2.1, unique presentation homomorphism'},
 'thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras':{empty:'Proof step 2.1, inverse composites including rank zero',one:'Proof steps 1.1 and 1.2, composites on projectors and dots'},
 'lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image':{one:'Statement, symmetric polynomial image; Proof step 1.2, polynomial centrality'},
 'lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage':{zero:'Proof step 3.1, rank-zero class','nonempty-choice':'Proof step 2.2, finite dominance descent','iff-forward':'Proof steps 2.1 and 3.1, Jantzen edges stay in blocks','iff-reverse':'Proof steps 2.2 and 3.1, shared factors give Jantzen connections'}
};
const errors=fs.readFileSync(base+'/restored-root-integration/proof-contract-errors.txt','utf8').split('\n').map(l=>/^ERROR (\S+) \[([^\]]+)\]: (\S+)/.exec(l)).filter(m=>m&&owned.has(m[2]));
const files=fs.readdirSync('research').filter(x=>/^frontier-44-special-representation-examples-28-batch-\d+\.proof-contracts\.json$/.test(x)).map(x=>'research/'+x);
const packet={version:1,run:'frontier-44-special-representation-examples-28',reviewer:'/root/restore_boundary_01_05',kind:'native-gate-metadata-anchor-corrections',source_operations:[],json_operations:[],holds:[],actual_anchor_inspections:[],original_failure_count:errors.length,mathematical_round_added:false};
for(const [_,code,id,name] of errors){
 const path=files.find(p=>read(p).contracts[id]);const doc=read(path);const index=doc.contracts[id].boundaries.findIndex(r=>r.case===name);const before=doc.contracts[id].boundaries[index];const after=structuredClone(before);
 const anchor=prefix[id]?.[name]??prefix[id]?.['*'];
 if(!anchor){packet.holds.push({id,case:name,reason:'No independently selected genuine source anchor'});continue;}
 const source='items/'+id+'.md',text=fs.readFileSync(source,'utf8');
 const steps=[...anchor.matchAll(/\d+\.\d+/g)].map(m=>m[0]);
 const actualSteps=steps.map(step=>text.split('\n\n').find(b=>b.startsWith(step+' ')));
 if(actualSteps.some(x=>!x)){packet.holds.push({id,case:name,reason:'Chosen source step absent'});continue;}
 const section=/Definition/.test(anchor)?'Definition':/Example/.test(anchor)?'Example':'Statement';
 const sectionText=text.split('## '+section+'\n')[1]?.split('\n## ')[0];
 if((/Definition|Example|Statement/.test(anchor))&&!sectionText){packet.holds.push({id,case:name,reason:'Chosen section absent'});continue;}
 after.evidence=anchor+': '+(before.evidence??before.reason);
 if(after.reason)delete after.reason;
 if(after.template_review)after.template_review.row_sha256=hash({case:after.case,status:after.status,text:after.evidence});
 const pointer='/contracts/'+id+'/boundaries/'+index;
 packet.json_operations.push({path,pointer,before,after,before_file_raw_sha256:sha(path),proposal_origin:out+'/native-gate-metadata-correction-packet.json'});
 packet.actual_anchor_inspections.push({id,case:name,anchor,source_path:source,source_raw_sha256:sha(source),source_itemHashGuard:itemHashGuard(text),step_excerpts:actualSteps.map(x=>x.slice(0,1000)),section_excerpt:sectionText?.slice(0,700),preserved_actual_case_evidence:before.evidence??before.reason,review_reason_unchanged:before.template_review?.reason===after.template_review?.reason,review_item_guard_unchanged:before.template_review?.item_sha256===after.template_review?.item_sha256,correction:'Add genuine source/step locator, keep case mathematics and attribution, refresh semantic row seal only.'});
}
fs.writeFileSync(out+'/native-gate-metadata-correction-packet.json',JSON.stringify(packet,null,2)+'\n');
console.log(JSON.stringify({owned_failures:errors.length,operations:packet.json_operations.length,holds:packet.holds}));
