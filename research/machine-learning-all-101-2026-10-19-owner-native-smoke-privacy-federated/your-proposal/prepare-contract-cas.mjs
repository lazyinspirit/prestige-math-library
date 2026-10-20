#!/usr/bin/env node
// Proposal-only metadata snapshots. No live source/contract/tool writes.
import{readFileSync,writeFileSync,mkdirSync}from'node:fs';import{join,dirname}from'node:path';import{splitFrontmatter,sectionText}from'../../../tools/facts-block.mjs';
const run='machine-learning-all-101-2026-10-19',base=`research/${run}-owner-native-smoke-privacy-federated/your-proposal`;
const spec={
 'ex-latent-confounding-mimics-anm-direction':['ml101-anm-latent-observational-density','ml101-anm-intervention-density-witness'],
 'ex-linear-gaussian-reversible-additive-noise-model':['ml101-anm-linear-gaussian-reverse','ml101-anm-linear-condition19'],
 'ex-identifiable-nonlinear-additive-noise-model':['ml101-anm-cubic-condition19'],
 'lem-laplace-product-density':['ml101-laplace-scalar-density'],
 'thm-laplace-mechanism-privacy':['ml101-laplace-unit-sensitivity-privacy'],
 'thm-exponential-mechanism-privacy-and-utility':['ml101-exponential-two-output-privacy-utility'],
 'lem-dp-pure-privacy-loss-kl-bound':['ml101-dp-two-point-kl-bound'],
 'lem-dp-approximate-kernel-purification':['ml101-dp-two-point-purification'],
 'thm-basic-adaptive-composition':['ml101-dp-basic-adaptive-composition'],
 'thm-advanced-adaptive-composition-standard-borel-outputs':['ml101-dp-advanced-zero-epsilon'],
 'ex-add-remove-noisy-count':['ml101-add-remove-count-sensitivity'],
 'ex-finite-range-private-selection':['ml101-finite-range-private-selection'],
 'ex-postprocessing-private-noisy-count':['ml101-private-count-threshold-postprocessing'],
 'ex-record-level-versus-client-level-adjacency':['ml101-record-client-adjacency'],
 'lem-finite-martingale-difference-sum-variance':['ml101-two-rademacher-martingale-variance'],
 'lem-uniform-client-sampling-moments':['ml101-uniform-client-sampling-moments'],
 'ex-local-versus-periodic-synchronization':['ml101-local-periodic-sync-witness'],
 'ex-client-data-locality-does-not-imply-dp':['ml101-local-data-does-not-imply-dp'],
 'ex-two-client-shifted-optima':['ml101-two-client-shifted-optima'],
 'ex-scaffold-control-correction':['ml101-scaffold-shifted-gradient-correction'],
};
const operations=[],copied=new Set();
function save(prefix,path,raw){const p=join(base,prefix,path);mkdirSync(dirname(p),{recursive:true});writeFileSync(p,raw);return p;}
for(const batch of [27,28,30]){const path=`research/${run}-batch-${batch}.proof-contracts.json`,raw=readFileSync(path,'utf8'),doc=JSON.parse(raw),candidate=structuredClone(doc);for(const[id,names]of Object.entries(spec)){if(!Object.hasOwn(doc.contracts,id))continue;const prior=doc.contracts[id].finite_smoke;if(!Array.isArray(prior)||prior.length!==names.length)throw Error('obligation inventory drift '+id);const source=`items/${id}.md`,sourceRaw=readFileSync(source,'utf8'),{body}=splitFrontmatter(sourceRaw),statement=(sectionText(body,'Statement')||sectionText(body,'Example')).trim();if(!statement)throw Error('no exact source assertion '+id);
 const next=prior.map((row,i)=>({...row,...(row.check?{original_check:row.check}:{}),check:names[i],fixture:names[i],asserts:statement}));candidate.contracts[id].finite_smoke=next;
 operations.push({path,json_pointer:`/contracts/${id}/finite_smoke`,id,expected_value:prior,replacement_value:next,source_path:source,source_raw_guard:save('sources',source,sourceRaw),contract_raw_guard:save('before',path,raw),scope:'Replace only finite_smoke array; preserve every original row metadata field except mechanically invalid check selector, whose original text is retained under original_check. Every unrelated contract key, risk/boundary/derivation/citation field and item source remains untouched.'});copied.add(id);}
 const protectedBefore=structuredClone(doc),protectedAfter=structuredClone(candidate);for(const id of Object.keys(spec)){if(protectedBefore.contracts[id]){delete protectedBefore.contracts[id].finite_smoke;delete protectedAfter.contracts[id].finite_smoke;}}
 if(JSON.stringify(protectedBefore)!==JSON.stringify(protectedAfter))throw Error('unrelated contract fields changed');save('candidates',path,JSON.stringify(candidate,null,2)+'\n');}
if(copied.size!==20||operations.reduce((n,o)=>n+o.expected_value.length,0)!==22)throw Error('not assigned22row scope');
writeFileSync(join(base,'operations.json'),JSON.stringify({version:1,run,agent:'/root/step2_margin53',proposal_only:true,assigned_batches:[27,28,30],array_field_operations:operations.length,retained_finite_obligations:22,operations,application:'Root only; require exact current source/contract raw guards, compare unique JSON pointer expected array, replace that field only. Register staged module callbacks in finite-smoke registry separately; no live registry/source/contract changes or gate credit supplied.'},null,2)+'\n');
console.log(JSON.stringify({contract_arrays:operations.length,finite_obligations:22,candidate_contract_files:3,live_changes:false}));
