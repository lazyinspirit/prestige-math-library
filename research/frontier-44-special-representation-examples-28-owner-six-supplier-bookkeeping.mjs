import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,recordStep3,itemDecision} from '../tools/step3-decisions.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const sha=b=>createHash('sha256').update(b).digest('hex');
const dir=`research/${run}-owner-six-supplier-bookkeeping-20261010T1525`;
mkdirSync(dir,{recursive:true});
const paths=[`research/${run}-owner-step3-degenerate-ariki-bindings-round1/sealed-independent-chunks/final-actual-four-supplier-focused-afterbinding.json`,`research/${run}-owner-step3-cellular-branching-bindings-round1/signature-empty-first1/final-actual-signature-two-suppliers-and-twelve-consumer-boundaries.json`];
const documents=paths.map(p=>JSON.parse(readFileSync(p)));
const subjects=[...documents[0].subjects.map(x=>({id:x.id,path:x.path,sha256:x.sha256})),...documents[1].suppliers.map(x=>({id:x.id,path:x.path,sha256:x.actual_sha256}))];
for(const row of subjects)if(sha(readFileSync(row.path))!==row.sha256)throw Error(`Stale reviewed subject ${row.id}`);
for(const row of [...documents[0].actual_raw_guards,...documents[1].actual_twelve_use_bindings.map(x=>({path:x.path,sha256:x.actual_sha256})),{path:documents[1].native22.path,sha256:documents[1].native22.actual_sha256}])if(sha(readFileSync(row.path))!==row.sha256)throw Error(`Stale actual guard ${row.path}`);
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
writeFileSync(`${dir}/registration.json`,JSON.stringify({run,at:new Date().toISOString(),kind:'normal-owner-bookkeeping-not-independent-audit',evidence:paths.map(path=>({path,sha256:sha(readFileSync(path))})),subjects,scopes,receipts,current,gate_attempt:false,other_escalations_still_held:true,repair_histories_preserved:true,scope_boundary:'Six own supplier items and exact recorded interfaces only; does not close whole pending downstream proofs or changed-assumption cone'},null,2)+'\n');
console.log(`Normal current bookkeeping verified ${current.length}/${current.length} suppliers; all other holds preserved`);
