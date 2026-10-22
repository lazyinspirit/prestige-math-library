import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep1Record,itemInputPaths,itemHash} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1,step1Decision} from '../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-bondi-coefficient`,ids=['lem-gr-fx-bondi-mass-coefficient','prop-gr-fx-bondi-mass-loss','ex-gr-fx05-1','ex-gr-fx05-2'];
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
const report=read(`${dir}/report.json`),archive=`${dir}/readiness-before-owner`;
if(existsSync(archive))throw Error('Owner application already started; inspect before retry');
for(const row of report.repair.exact_preimages_and_current_hashes){if(sha(readFileSync(row.path))!==row.current_sha256||sha(readFileSync(row.before_path))!==row.before_sha256)throw Error('Repair binding changed '+row.path);}
if(!report.repair.statement_byte_identical||!report.repair.consumer_bodies_byte_identical)throw Error('Unexpected public interface change');
const state=()=>read(`.physics-autopilot/${run}/state.json`);
const s=loadStep1Record(root,run),ownerPaths=new Map(s.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch]));
const records=ids.map(id=>{const d=step1Decision(s,id);if(d.row?.decision!=='escalated')throw Error('Unexpected previous disposition '+id);return {id,old:d.row};});
const closureOwners=new Set(),guardPaths=new Set();
for(const {id,old}of records)for(const path of itemInputPaths(s,id,old.dependencies)){guardPaths.add(path);if(ownerPaths.has(path))closureOwners.add(ownerPaths.get(path));}
const assertDrained=()=>{for(const batch of closureOwners){const d=state().dispatches[`1-scaffold:batch-${batch}`];if(!d?.endedAt||!d.lastExitOk)throw Error('A relevant native source writer is active '+batch);}};
assertDrained();
const guard=new Map([...guardPaths].map(path=>[path,sha(readFileSync(path))]));
const verify=()=>{assertDrained();for(const [path,hash]of guard)if(sha(readFileSync(path))!==hash)throw Error('Relevant source changed '+relative(root,path));};
mkdirSync(archive);
for(const {id}of records)writeFileSync(`${archive}/${id}.json`,readFileSync(`research/${run}-step1-${id}.json`));
const rows=[];
// Use the ordinary per-item operation: this is a drained local dependency
// closure while unrelated native authors run, not a global drained bulk join.
for(const {id,old}of records){verify();rows.push(recordStep1(root,{run,item:id,owner:true,decision:'ready',dependencies:old.dependencies,reason:`Owner resolved the exact local Bondi coefficient proof gap after the native batch33 writer finished. The same repair owner supplied the complete determinant-trace, radial constraint and exhaustive Ricci contraction, corrected the internal sign, and checked all three actual consumers. Root read the derivation, checked its leading-order structure, verified exact report/source/preimage bindings and current drained dependency owners, and adopted this Step1 repair. Public statements and all consumer bodies are unchanged. Actual checks and limits: ${dir}/report.json. Prior escalations are preserved. This is local authoring readiness, not native full-frontier gate coverage or independent review acceptance.`}));verify();}
const fresh=loadStep1Record(root,run),current=ids.map(id=>({id,...step1Decision(fresh,id)}));
if(current.some(r=>!r.closed))throw Error('Current local readiness did not close');
writeFileSync(`${dir}/owner-readiness-application.json`,JSON.stringify({run,at:new Date().toISOString(),owner:'/root',operation:'native per-item recordStep1, owner:true',local_source_owners_drained:[...closureOwners],unrelated_native_authors_continue:true,report_sha256:sha(readFileSync(`${dir}/report.json`)),guarded_paths:[...guard].map(([path,sha256])=>({path:relative(root,path),sha256})),records:rows.map(r=>({item:r.item,sha256:r.sha256})),full_run_gate_attempted:false},null,2)+'\n');
console.log(JSON.stringify({closed:ids,drainedBatches:[...closureOwners],guardedPaths:guard.size}));
