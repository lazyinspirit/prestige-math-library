import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,recordStep3,itemDecision} from '../tools/step3-decisions.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const sha=b=>createHash('sha256').update(b).digest('hex');
const dir=`research/${run}-owner-affine-form-degree-three-normal-registration-20261010T1640`;
mkdirSync(dir,{recursive:true});
const base=`research/${run}-owner-step3-kashiwara-supplier-binding-round1/affine-normalized-weight-form-first1`;
const paths=[`${base}/final-actual-affine-form-and-consumer-sufficiency-first1.json`,`${base}/metadata-only-producer-guard-refresh-after-final-source-seal.json`];
const seal=JSON.parse(readFileSync(paths[0])),doc=JSON.parse(readFileSync(paths[1]));
const ids=['def-cyclic-affine-type-a-cartan-datum','def-nondegenerate-root-of-unity-level-one-hecke-regime','lem-degree-and-codegree-of-standard-tableaux'];
const subjects=ids.map(id=>{const row=id===ids[0]?doc.source:doc.canonical_consumer_guards.find(x=>x.id===id); if(!row)throw Error(`Missing reviewed ${id}`);return {id,path:row.path,sha256:row.sha256};});
for(const row of [...subjects,...doc.canonical_consumer_guards,...doc.planned_context_guards,...doc.native_home_guards])if(sha(readFileSync(row.path))!==row.sha256)throw Error(`Stale actual guard ${row.path}`);
if(sha(readFileSync(paths[0]))!==doc.immutable_prior_seal.sha256)throw Error('Prior seal changed');
const snapshot=loadStep3(root,run),scopes=[],receipts=[];
const homes=[...new Set(subjects.map(x=>snapshot.items.get(x.id).page.id))];
for(const page of homes){
 const previous=`research/${run}-step3a-owner-${page}.json`;
 if(existsSync(previous))writeFileSync(`${dir}/scope-before-${page}.json`,readFileSync(previous));
 scopes.push(recordStep3(root,{run,phase:'scope',page,owner:true,decision:'proceed',reason:'Preserved approved inventory and rich claims with the original reviewer verified focused supplier repairs'},snapshot));
}
for(const row of subjects)receipts.push(recordStep3(root,{run,phase:'item',item:row.id,owner:true,decision:'repaired',defects:['normalized affine form and degree supplier repair'],reason:'The original assigned reviewer verified the actual repaired supplier and the recorded affected interfaces while separate unresolved consumer escalations remain on hold'},snapshot));
const currentSnapshot=loadStep3(root,run),current=subjects.map(x=>({id:x.id,closed:itemDecision(currentSnapshot,x.id).closed}));
if(current.some(x=>!x.closed))throw Error('Normal current supplier decision failed');
writeFileSync(`${dir}/registration.json`,JSON.stringify({run,at:new Date().toISOString(),kind:'normal-owner-bookkeeping-not-independent-audit',evidence:paths.map(path=>({path,sha256:sha(readFileSync(path))})),subjects,scopes,receipts,current,gate_attempt:false,other_escalations_still_held:true,repair_histories_preserved:true,scope_boundary:'Three affine/degree supplier items and exact recorded interfaces only; does not close whole pending downstream proofs or changed-assumption cone'},null,2)+'\n');
console.log(`Normal current bookkeeping verified ${current.length}/${current.length} suppliers; all other holds preserved`);
