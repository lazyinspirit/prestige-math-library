import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,recordStep3,itemDecision} from '../tools/step3-decisions.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const sha=b=>createHash('sha256').update(b).digest('hex');
const dir=`research/${run}-owner-fock-six-final2-normal-registration-20261010T1630`;
mkdirSync(dir,{recursive:true});
const evidence=`research/${run}-owner-step3-degenerate-ariki-bindings-round1/sealed-independent-chunks/final-actual-fock-five-dictionary-focused-afterbinding.json`;
const doc=JSON.parse(readFileSync(evidence)),paths=[evidence];
const subjects=[...doc.subjects.map(x=>({id:x.id,path:x.canonical_path,sha256:x.canonical_sha256})),doc.dictionary];
for(const row of [...subjects,...doc.actual_selected_downstream_guards,doc.native16_current])if(sha(readFileSync(row.path))!==row.sha256)throw Error(`Stale reviewed actual guard ${row.path}`);
const snapshot=loadStep3(root,run),scopes=[],receipts=[];
const homes=[...new Set(subjects.map(x=>snapshot.items.get(x.id).page.id))];
for(const page of homes){
 const previous=`research/${run}-step3a-owner-${page}.json`;
 if(existsSync(previous))writeFileSync(`${dir}/scope-before-${page}.json`,readFileSync(previous));
 scopes.push(recordStep3(root,{run,phase:'scope',page,owner:true,decision:'proceed',reason:'Preserved approved inventory and rich claims with the original reviewer verified focused supplier repairs'},snapshot));
}
for(const row of subjects)receipts.push(recordStep3(root,{run,phase:'item',item:row.id,owner:true,decision:'repaired',defects:['final Fock supplier proof repair'],reason:'The original assigned reviewer verified the actual repaired supplier and the recorded affected interfaces while separate unresolved consumer escalations remain on hold'},snapshot));
const currentSnapshot=loadStep3(root,run),current=subjects.map(x=>({id:x.id,closed:itemDecision(currentSnapshot,x.id).closed}));
if(current.some(x=>!x.closed))throw Error('Normal current supplier decision failed');
writeFileSync(`${dir}/registration.json`,JSON.stringify({run,at:new Date().toISOString(),kind:'normal-owner-bookkeeping-not-independent-audit',evidence:paths.map(path=>({path,sha256:sha(readFileSync(path))})),subjects,scopes,receipts,current,gate_attempt:false,other_escalations_still_held:true,repair_histories_preserved:true,scope_boundary:'Five Fock supplier items and reciprocal dictionary and exact recorded interfaces only; does not close whole pending downstream proofs or changed-assumption cone'},null,2)+'\n');
console.log(`Normal current bookkeeping verified ${current.length}/${current.length} suppliers; all other holds preserved`);
