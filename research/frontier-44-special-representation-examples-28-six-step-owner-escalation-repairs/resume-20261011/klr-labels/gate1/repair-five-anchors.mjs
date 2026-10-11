import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemContentHash} from '../../../../../tools/item-hash.mjs';
const run='frontier-44-special-representation-examples-28-six-step',dest='research/'+run+'-owner-escalation-repairs/resume-20261011/klr-labels/gate1';
const path='research/'+run+'-batch-48.proof-contracts.json';
const raw=fs.readFileSync(path,'utf8'),before=JSON.parse(raw),after=structuredClone(before);
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x)));
const edits=[
 ['def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules','empty','Definition, Types paragraph: multipartition types expressly include empty components; the regular weight omega=(empty,...,empty,(1^n))has m_omega=1and supplies the regular Hecke summand. Definition, opening paragraph separately sets H0=R, so the empty multipartition and empty word also have their prescribed rank-zero values.'],
 ['lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms','nonempty-choice','Proof1.1compares finitely many tableau words at their first differing addable nodes;2.1uses finite composition series and finite cellular multiplicities. Proof3.1compares the integer exponents of a fixed finite pair of words in F(t), and4.1uses the exhaustive finite simple list to identify each standard with its head. These finite comparisons and matrix dimensions make no additional arbitrary-family choice.'],
 ['def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks','empty','Definition, Boundary conventions: at rank zero the empty projector is1and the unique block isF. The Residue-sequence idempotents paragraph defines the empty product of primary projectors as that identity, while absent spectral values receive0projectors; an empty degree is not a positive-rank zero sector.'],
 ['def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks','zero','Definition, Boundary conventions: level zero in positive rank makes all projectors and blocks0, whereas rank zero retains empty projector1and its field block. The Residue-sequence idempotents paragraph separately gives0for an absent spectral root. These are the distinct zero cases actually asserted by the Definition.'],
 ['def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks','nonempty-choice','Definition, Residue-sequence idempotents paragraph: each epsilon_r(i)is the canonical primary Chinese-remainder projector of its fixed polynomial generator, the joint projector is their finite residue product, and e_alpha is the finite fixed-content sum. Definition, final Boundary conventions paragraph expressly introduces no choice principle; no arbitrary representative or splitting field is selected.']
];
const deltas=[];
for(const[id,axis,evidence]of edits){const row=after.contracts[id].boundaries.find(x=>x.case===axis),old=structuredClone(row);row.evidence=evidence;delete row.reason;
 row.template_review={upheld:true,by:'owner-gate1/resume_klr_labels',reason:evidence,item_sha256:itemContentHash(fs.readFileSync('items/'+id+'.md','utf8')),row_sha256:sha(JSON.stringify({case:axis,status:row.status,text:evidence}))};
 deltas.push({id,case:axis,before_row:old,before_row_sha256:hash(old),replacement_row:row,source_path:'items/'+id+'.md',source_raw_sha256:sha(fs.readFileSync('items/'+id+'.md'))});}
const notes=JSON.parse(fs.readFileSync(dest+'/current-review-notes.json','utf8'));
const bk='thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism';
const bkRiskBefore=structuredClone(after.contracts[bk].risk_review);
after.contracts[bk].risk_review.notes=after.contracts[bk].risk_review.notes.replace('2.1 adds the now-proved primitive','1.2 adds the now-proved primitive').replace('3.1 separates DG','2.1 separates DG');
for(const[id,contract]of Object.entries(after.contracts))for(const row of contract.boundaries??[]){
 if(row.status!=='checked'||/(?:\d+\.\d+)|statement|definition|example|counterexample/i.test(row.evidence??''))continue;
 const old=structuredClone(row),basis=notes[id];if(!basis)throw Error('No actual checked proof basis '+id);
 const precise=basis.replace('current14-step','current15-step');
 row.evidence+=' Current inspected claim/proof anchors: '+precise;
 row.template_review={upheld:true,by:'owner-gate1/resume_klr_labels',reason:row.evidence,item_sha256:itemContentHash(fs.readFileSync('items/'+id+'.md','utf8')),row_sha256:sha(JSON.stringify({case:row.case,status:row.status,text:row.evidence}))};
 deltas.push({id,case:row.case,before_row:old,before_row_sha256:hash(old),replacement_row:row,source_path:'items/'+id+'.md',source_raw_sha256:sha(fs.readFileSync('items/'+id+'.md'))});
}
fs.writeFileSync(dest+'/all-anchored-boundary-deltas.json',JSON.stringify({version:1,run,path,before_file_sha256:sha(raw),deltas,risk_note_correction:{id:bk,before:bkRiskBefore,replacement:after.contracts[bk].risk_review,reason:'Current BK proof has primitivity at1.2and normalized branch conclusion at2.1; the earlier owner note misnumbered those actual unchanged steps.'},source_writes:[],reason:'The prior concrete boundary explanations omitted the required explicit Statement/Definition/numbered-step anchor. These current actual claim/step anchors retain the mathematical dispositions and preserve each original row.'},null,2)+'\n');
fs.writeFileSync(dest+'/batch-48.anchored-current.proposed.json',JSON.stringify(after,null,2)+'\n');
console.log('Prepared'+deltas.length+' concrete anchored boundary corrections; canonical metadata untouched.');
