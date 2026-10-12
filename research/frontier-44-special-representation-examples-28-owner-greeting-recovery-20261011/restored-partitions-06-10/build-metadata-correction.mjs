import fs from 'node:fs';
import{createHash}from'node:crypto';
import{itemHashGuard}from'../../../tools/item-hash.mjs';
import{numberedProofSteps,splitFrontmatter}from'../../../tools/facts-block.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const dir=base+'/restored-partitions-06-10';
const raw=p=>fs.readFileSync(p,'utf8'),read=p=>JSON.parse(raw(p)),h=s=>createHash('sha256').update(s).digest('hex');
const owned=new Set(Array.from({length:5},(_,i)=>read(`${base}/boundary-template-inventory/partition-${String(i+6).padStart(2,'0')}.json`).item_ids).flat());
const errors=raw(base+'/restored-root-integration/proof-contract-errors.txt').split('\n').map(l=>l.match(/^ERROR (.*?) \[(.*?)\]: (.*)$/)).filter(m=>m&&owned.has(m[2]));
const origin=dir+'/metadata-correction-packet.json';
const packet={version:1,run:'frontier-44-special-representation-examples-28',by:'/root/restore_boundary_06_10',recorded_at:new Date().toISOString(),scope:'Typed boundary worksheet field repair and real source anchors only; no new mathematical review round.',source_operations:[],json_operations:[],coverage:[],holds:[],no_canonical_writes:true,no_gate_attempt:true};
const prefixes={
 'def-the-type-a-finite-w-algebra-and-whittaker-category/degenerate':'Definition: ',
 'def-the-type-a-finite-w-algebra-and-whittaker-category/zero':'Definition: ',
 'def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules/endpoints':'Definition, Multipartitions and Murphy data and Types paragraphs: ',
 'lem-degenerate-affine-hecke-ordered-monomials-form-a-basis/one':'Statement and operator construction in Proof step 1.1: ',
 'lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis/zero':'Proof step 3.1: ',
 'lem-cyclotomic-klr-block-satisfies-the-hecke-relations/nonempty-choice':'Proof step 5.1: '
};
for(const e of errors){const [,code,id,message]=e;if(!code.startsWith('boundary'))continue;
 const name=message.split(' ')[0];
 const inventory=Array.from({length:5},(_,i)=>read(`${base}/boundary-template-inventory/partition-${String(i+6).padStart(2,'0')}.json`)).flatMap(i=>i.items).find(i=>i.id===id);
 const home=inventory.manifest_homes[0];
 const path=`research/${packet.run}-batch-${home.batch}.proof-contracts.json`;
 const doc=read(path),index=doc.contracts[id].boundaries.findIndex(r=>r.case===name),before=doc.contracts[id].boundaries[index],after=structuredClone(before);
 let text=before.status==='checked'?(before.evidence??before.reason):(before.reason??before.evidence);
 if(typeof text!=='string'||!text.trim())throw Error('No inspected explanation '+id+'/'+name);
 const prefix=prefixes[id+'/'+name];
 if(prefix&&!text.startsWith(prefix))text=prefix+text;
 text=text.replace('Proposed proof step 1.1','Proof step 1.1');
 if(after.status==='checked'){after.evidence=text;delete after.reason;}else{after.reason=text;delete after.evidence;}
 if(after.template_review){after.template_review.reason=text;after.template_review.item_sha256=itemHashGuard(raw('items/'+id+'.md'));after.template_review.row_sha256=h(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}));}
 const steps=new Set(numberedProofSteps(splitFrontmatter(raw('items/'+id+'.md')).body).map(s=>s.id));
 const references=[...text.matchAll(/(?:step\s+)?(\d+\.\d+)/g)].map(m=>m[1]);
 if(after.status==='checked'&&!references.length&&!/statement|definition|example|counterexample/i.test(text))throw Error('Anchor missing '+id+'/'+name);
 for(const step of references)if(!steps.has(step))throw Error('Actual step missing '+id+'/'+name+'/'+step);
 packet.json_operations.push({path,pointer:`/contracts/${id}/boundaries/${index}`,before,after,before_file_raw_sha256:h(raw(path)),proposal_origin:origin});
 packet.coverage.push({id,case:name,error:code,current_item_path:'items/'+id+'.md',current_item_raw_sha256:h(raw('items/'+id+'.md')),actual_anchor_steps:references,actual_source_anchor:prefix??'Retained exact inspected source-section or numbered-step reference',new_mathematical_verdict:false});
}
const tensorId='thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules';
const sourcePath='items/'+tensorId+'.md',sourceBefore=raw(sourcePath);
if(sourceBefore.split('$A1$').length!==2)throw Error('Integral-unit literal not unique');
const sourceAfter=sourceBefore.replace('$A1$',()=>'$A\\,1$');
fs.writeFileSync(dir+'/tensor-notation-before.md',sourceBefore);fs.writeFileSync(dir+'/tensor-notation-after.md',sourceAfter);
packet.source_operations.push({path:sourcePath,before_raw_sha256:h(sourceBefore),after_path:dir+'/tensor-notation-after.md',after_raw_sha256:h(sourceAfter),proposal_origin:origin,edit:{before:'$A1$',after:'$A\\,1$'},mathematics_unchanged:true,public_interface_unchanged:true});
const cpath=`research/${packet.run}-batch-8.proof-contracts.json`,contract=read(cpath).contracts[tensorId];
const dIndex=contract.derivations.findIndex(d=>d.step==='1.1'),dBefore=contract.derivations[dIndex],dAfter=structuredClone(dBefore);
if(!dAfter.claim.includes('$A1$'))throw Error('Derivation has no unit-ring literal');
dAfter.claim=dAfter.claim.replace('$A1$',()=>'$A\\,1$');
packet.json_operations.push({path:cpath,pointer:`/contracts/${tensorId}/derivations/${dIndex}`,before:dBefore,after:dAfter,before_file_raw_sha256:h(raw(cpath)),proposal_origin:origin});
for(let index=0;index<contract.boundaries.length;index++){
 const before=contract.boundaries[index];if(!before.template_review)continue;
 const pointer=`/contracts/${tensorId}/boundaries/${index}`,existing=packet.json_operations.find(o=>o.path===cpath&&o.pointer===pointer);
 const after=existing?.after??structuredClone(before);after.template_review.item_sha256=itemHashGuard(sourceAfter);
 if(!existing)packet.json_operations.push({path:cpath,pointer,before,after,before_file_raw_sha256:h(raw(cpath)),proposal_origin:origin});
}
packet.lexical_repair={id:tensorId,diagnostic:'d-1.1 omits A1, cited by1.1',classification:'NOTATION_ONLY_LEXICAL_FALSE_POSITIVE_RESOLVED',actual_source:'The printed math A1 denotes integral ring A multiplying unit1; root authorized explicit math spacing, with no invented assumption.',final_item_guard_sha256:itemHashGuard(sourceAfter),no_new_fact:true,no_checker_edit:true};
fs.writeFileSync(origin,JSON.stringify(packet,null,2)+'\n');console.log(JSON.stringify({operations:packet.json_operations.length,holds:packet.holds.length}));
