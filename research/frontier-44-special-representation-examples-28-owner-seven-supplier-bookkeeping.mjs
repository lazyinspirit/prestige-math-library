import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,recordStep3,itemDecision} from '../tools/step3-decisions.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const sha=b=>createHash('sha256').update(b).digest('hex');
const dir=`research/${run}-owner-seven-supplier-normal-registration-20261010T1710`;
mkdirSync(dir,{recursive:true});
const base=`research/${run}-owner-step3-degenerate-ariki-bindings-round1/sealed-independent-chunks`;
const paths=['final-actual-o-groth-bgg-focused-afterbinding.json','final-actual-three-producers-and-norm-current-integral-metadata-successor.json','final-actual-covariant-vust-deformed-focused-afterbinding-with-cone-holds.json','final-actual-integral-two-author-restorations-and-generator-uses.json'].map(x=>`${base}/${x}`);
const docs=paths.map(p=>JSON.parse(readFileSync(p)));
const subjects=[docs[0].subject,...docs[1].subjects,...docs[2].subjects.filter(x=>x.id!=='def-deformed-tensor-space-for-the-type-a-finite-w-algebra'),docs[3].subject];
if(subjects.length!==7)throw Error('Wrong explicit seven selection');
for(const row of [...subjects,...docs.flatMap(x=>x.raw_current_guards)])if(sha(readFileSync(row.path))!==row.sha256)throw Error(`Stale actual guard ${row.path}`);
const snapshot=loadStep3(root,run),scopes=[],receipts=[];
const homes=[...new Set(subjects.map(x=>snapshot.items.get(x.id).page.id))];
for(const page of homes){
 const previous=`research/${run}-step3a-owner-${page}.json`;
 if(existsSync(previous))writeFileSync(`${dir}/scope-before-${page}.json`,readFileSync(previous));
 scopes.push(recordStep3(root,{run,phase:'scope',page,owner:true,decision:'proceed',reason:'Preserved approved inventory and rich claims with the original reviewer verified focused supplier repairs'},snapshot));
}
for(const row of subjects)receipts.push(recordStep3(root,{run,phase:'item',item:row.id,owner:true,decision:'repaired',defects:['focused supplier proof repair'],reason:'The original assigned reviewer verified the actual repaired supplier and the recorded affected interfaces while separate unresolved consumer escalations remain on hold'},snapshot));
const currentSnapshot=loadStep3(root,run),current=subjects.map(x=>({id:x.id,closed:itemDecision(currentSnapshot,x.id).closed}));
if(current.some(x=>!x.closed))throw Error('Normal current supplier decision failed');
writeFileSync(`${dir}/registration.json`,JSON.stringify({run,at:new Date().toISOString(),kind:'normal-owner-bookkeeping-not-independent-audit',evidence:paths.map(path=>({path,sha256:sha(readFileSync(path))})),subjects,scopes,receipts,current,gate_attempt:false,other_escalations_still_held:true,repair_histories_preserved:true,scope_boundary:'Seven own supplier items excluding the pending Deformed Definition and exact recorded interfaces only; does not close whole pending downstream proofs or changed-assumption cone'},null,2)+'\n');
console.log(`Normal current bookkeeping verified ${current.length}/${current.length} suppliers; all other holds preserved`);
