import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const out=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(out,'../..');
const relative=p=>path.relative(root,p);
const {itemHashGuard,itemSurfaceHash}=await import(pathToFileURL(path.resolve(root,'tools/physics-support/item-hash.mjs')).href);
const sha=b=>createHash('sha256').update(b).digest('hex');
const ref=p=>({path:relative(p),sha256:sha(fs.readFileSync(p))});
const write=(name,o)=>fs.writeFileSync(path.join(out,name),JSON.stringify(o,null,2)+'\n');
const run='physics-non-fluid-129-2026-10-21-r2', scientific_owner='/root/step5_qsm_referrals';
const archive=JSON.parse(fs.readFileSync(path.join(out,'preimages.json')));
const guards=[];
for(const [source,a] of Object.entries(archive.files)){
 const before=fs.readFileSync(path.join(root,a.path));
 if(sha(before)!==a.raw_sha256)throw Error('Archive guard failed '+source);
 const current=fs.readFileSync(path.join(root,source));
 if(!current.equals(before))throw Error('Current archived input changed '+source);
 guards.push({source,preimage:ref(path.join(root,a.path)),current_raw_sha256:sha(current),unchanged:true,...(source.startsWith('items/')?{canonical_content_sha256:itemHashGuard(before.toString()),interface_sha256:itemSurfaceHash(before.toString())}:{})});
}
write('guards.json',{version:1,run,scientific_owner,canonical_hash_definition:'tools/physics-support/item-hash.mjs:itemHashGuard, excluding entire verification block; interface: itemSurfaceHash',checked_at:new Date().toISOString(),inputs:guards});
const proposals=[];
for(const id of ['thm-qsmx-schmidt-mps-error','def-qsmx-spin-weight-and-hall-realization']){
 const source='items/'+id+'.md';
 const beforePath=path.join(out,'preimages',source),candidatePath=path.join(out,'candidates',id+'.md'),patchPath=path.join(out,'diffs',id+'.patch');
 const before=fs.readFileSync(beforePath,'utf8'),after=fs.readFileSync(candidatePath,'utf8');
 const excerpts=[];
 if(id.startsWith('thm-'))for(const step of ['1.1','2.1','3.1']){
   const old=before.split('\n\n').find(x=>x.startsWith(step+' ')), replacement=after.split('\n\n').find(x=>x.startsWith(step+' '));
   if(!old||!replacement||before.split(old).length!==2||after.split(replacement).length!==2)throw Error('Nonunique proof excerpt');
   excerpts.push({location:'Proof '+step,old,replacement});
 }else{
   const old=before.match(/where \$g\^L_[\s\S]*?Thus the twist is part of the multiplication\./)[0];
   const replacement=after.match(/where \$g\^L_[\s\S]*?Thus the twist is part of the multiplication\./)[0];
   if(before.split(old).length!==2||after.split(replacement).length!==2)throw Error('Nonunique Hall excerpt');
   excerpts.push({location:'Definition, Hall product coefficient paragraph',old,replacement});
 }
 let reconstructed=before;for(const e of excerpts)reconstructed=reconstructed.replace(e.old,e.replacement);
 if(reconstructed!==after)throw Error('Candidate differs outside excerpts '+id);
 const result=spawnSync('git',['apply','--check','--directory=physics',path.relative(path.dirname(root),patchPath)],{cwd:path.dirname(root),encoding:'utf8'});
 if(result.status!==0)throw Error('Patch check failed '+result.stderr);
 proposals.push({id,source,scientific_owner,applied:false,preimage:ref(beforePath),before_raw_sha256:sha(before),before_content_sha256:itemHashGuard(before),before_interface_sha256:itemSurfaceHash(before),candidate:ref(candidatePath),after_raw_sha256:sha(after),after_content_sha256:itemHashGuard(after),after_interface_sha256:itemSurfaceHash(after),public_interface_changed:itemSurfaceHash(before)!==itemSurfaceHash(after),patch:ref(patchPath),exact_edits:excerpts,patch_applicability:{command:['git','apply','--check','--directory=physics',path.relative(path.dirname(root),patchPath)],cwd:path.dirname(root),exit_code:result.status,stdout:result.stdout,stderr:result.stderr,checked_at:new Date().toISOString()},source_application:'Unapplied: root routes to the existing native owner queue; all raw/canonical guards must be rechecked before native application.'});
}
write('proposal-index.json',{version:1,run,phase:'initial',round:1,outside_cycle:1,scientific_owner,native_review:false,native_adjudication:false,independent_review:false,recertification:false,source_writes:false,proposals,context_guards:ref(path.join(out,'guards.json')),consumer_evidence:ref(path.join(out,'consumer-scan.json')),scientific_report:ref(path.join(out,'report.md')),finite_checks:ref(path.join(out,'finite-checks.json')),mechanical_checks:[1,2,3].map(n=>ref(path.join(out,`check-${n}.json`)))});
const native=(u)=>ref(path.join(out,'preimages/research',run+'-step5-v2',`step5-v2-initial-r1-u${u}.json`));
write('findings.json',{version:1,run,scientific_owner,outside_cycle:1,native_review:false,native_adjudication:false,independent_review:false,source_writes:false,findings:[{id:'thm-qsmx-schmidt-mps-error',native_report:native(103),native_referral_defect_id:run+'-step5-u103-error-proof-embedding',classification:'actual-unresolved-proof-type-gap',location:['Proof 1.1','Proof 2.1','Proof 3.1'],reason:'Compressed remainders in changing S_k tensor right-factor spaces are identified with full-chain projected vectors and subtracted without embeddings. Current algorithm instruction 3 has already repaired its own output identification; this theorem proof still needs U_k/W_k embeddings, terminal contraction identification and isometric discarded-norm preservation.',public_statement_changed:false,rich_claims_preserved:['exact N-1 SVD count','exact current-sweep squared error equality','finite MPS rank and entropy bound'],minimal_repair:'Proof steps 1.1, 2.1, 3.1 only, as the guarded candidate.',consumer_disposition:'Sole actual algorithm item consumer; no further current theorem item consumers. Both MPS pages remain unaffected.'},{id:'def-qsmx-spin-weight-and-hall-realization',native_report:native(108),classification:'actual-unresolved-Hall-count-ambiguity',location:['Definition Hall product coefficient'],reason:'The sequence-count equivalent omits quotienting the source and quotient labels with the middle L fixed. In F3 one-dimensional endpoints and two-dimensional L give four image subspaces but sixteen labelled sequences.',public_definition_changed:true,minimal_repair:'Preserve the sequence equivalence by explicitly quotienting Aut(N) and Aut(M), retaining the middle L pointwise and the unquotiented a_N a_M multiplicity.',consumer_disposition:'Same scientific owner checked all three direct/indirect consumers: exchange theorem, KLR theorem, and categorification counterexample. Their exact spin, polynomial, Ringel-image and no-Hamiltonian uses are unchanged; no source repair is needed. Both Hall pages remain unaffected.'}],previously_resolved_context:[{id:'alg-qsmx-schmidt-mps-truncation',classification:'native-u103-already-repaired',reason:'Current instruction 3 returns an explicit full physical-basis contraction, not the compressed terminal array; adopted exactly in the theorem proposal.'}],separate_native_history:[{id:'thm-qsmx-klr-character-specialization',native_report:native(108),classification:'u108-original-tuple-false-positive-is-separate',qualification:'No fresh native adjudication or independent KLR source audit claimed here.'}],consumer_report:ref(path.join(out,'report.md')),proposal_index:ref(path.join(out,'proposal-index.json')),unresolved:'Proposals are unapplied. Root must route genuine native source repair/review, maintain current metadata, reconcile findings, and perform required current-context closure and recertification.'});
const inputs={};for(const name of ['preimages.json','guards.json','proposal-index.json','findings.json','report.md','consumer-scan.json','import-pin-checks.json','finite-checks.json','check-1.json','check-2.json','check-3.json','prepare.py','verify.py','seal.mjs'])inputs[relative(path.join(out,name))]=sha(fs.readFileSync(path.join(out,name)));
write('evidence.json',{version:1,run,scientific_owner,sealed_at:new Date().toISOString(),qualification:'Focused research proposal/evidence only; no source application, independent/native review, native acceptance, transition or recertification.',inputs});
console.log(JSON.stringify({proposals:proposals.map(p=>({id:p.id,raw:p.before_raw_sha256,canonical:p.before_content_sha256,interface_changed:p.public_interface_changed,patch_check:p.patch_applicability.exit_code})),unchanged_source_inputs:guards.length}));
