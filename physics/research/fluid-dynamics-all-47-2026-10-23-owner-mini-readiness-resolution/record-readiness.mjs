import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {recordStep1,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {loadStep1Record,itemHash} from '../../tools/physics-support/frontier-snapshot.mjs';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-mini-readiness-resolution`,root=process.cwd();
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
const review=read(`${base}/review.json`),before=read(`${base}/before.json`),out=`${base}/application.json`;
if(existsSync(out))throw Error('Readiness application already recorded');
if(review.run!==run||review.batch!=='28'||review.round!==1||!review.root_readiness_recording_recommended||review.source_changes_required||review.genuine_unresolved_issues.length)throw Error('Unresolved or wrong review');
const state=read(`.physics-autopilot/${run}/state.json`),native=state.dispatches['1-scaffold:batch-28'];
if(!native?.endedAt||native.lastExitOk!==true)throw Error('Batch28 native writer not drained');
function noRelevantWriter(){for(const pid of readdirSync('/proc').filter(x=>/^\d+$/.test(x))){let args;try{args=readFileSync(`/proc/${pid}/cmdline`,'utf8').split('\0');}catch{continue;}
if(args.some(x=>x.endsWith('/dispatch.mjs'))&&args.includes('--run')&&args[args.indexOf('--run')+1]===run&&args.includes('--label')&&/^batch-28(?:$|-)/.test(args[args.indexOf('--label')+1]))throw Error('Batch28 process still live');}}
noRelevantWriter();for(const row of before.files)if(sha(readFileSync(row.path))!==row.sha256||sha(readFileSync(row.archive))!==row.sha256)throw Error('Batch28 archive/current evidence changed '+row.path);
const manifest=read(`research/${run}-batch-28.pages.json`),ids=manifest.flatMap(p=>p.items.map(i=>i.id));
if(ids.length!==5||new Set(ids).size!==5||JSON.stringify([...ids].sort())!==JSON.stringify([...review.root_recording_order].sort()))throw Error('Wrong reviewed item frontier');
const receipt=read('research/math-imports.json'),pins=new Map(receipt.files.map(x=>[x.path,x]));const imported=[];
for(const id of review.imported_supplier_identity.examined_ids){const path=`items/${id}.md`,pin=pins.get(path);if(!pin)throw Error('Missing imported supplier '+id);const local=readFileSync(path),original=readFileSync(join(receipt.source_root,pin.source_path??path));
if(sha(local)!==pin.sha256||!local.equals(original)||readItem(join(receipt.source_root,pin.source_path??path)).status!=='published')throw Error('Changed imported supplier '+id);imported.push({id,path,sha256:pin.sha256});}
const snapshot=loadStep1Record(root,run),recommendations=new Map(review.items.map(x=>[x.id,x]));
for(const id of review.root_recording_order){const recommendation=recommendations.get(id),old=read(`research/${run}-step1-${id}.json`);if(recommendation?.decision!=='ready'||old.decision!=='escalated'||itemHash(snapshot,id,recommendation.examined_dependency_ids)!==old.sha256)throw Error('Readiness inputs changed or unresolved '+id);}
const application={version:1,run,batch:28,round:1,owner:'/root',at:new Date().toISOString(),decision:'resolve historical external-readiness-only holds using genuine native author evidence and delegated focused interface review',review:{path:`${base}/review.json`,sha256:sha(readFileSync(`${base}/review.json`))},before:{path:`${base}/before.json`,sha256:sha(readFileSync(`${base}/before.json`))},imported_suppliers:imported,records:[],source_carriers_changed:false,original_mathematics_changed:false,import_pins_changed:false,proof_audit_created:false,gate_pass_created:false};
try{for(const id of review.root_recording_order){noRelevantWriter();const recommendation=recommendations.get(id);const row=recordStep1(root,{run,item:id,decision:'ready',owner:true,dependencies:recommendation.examined_dependency_ids,reason:`Root resolves the historical outside-run readiness-only hold under research/${run}-owner-fourier-resolution/external-readiness-scope.json. Genuine native author proof/source reading remains attributed to that author; delegated focused review ${base}/review.json found no current interface defect. ${recommendation.reason}`});
const current=step1Decision(loadStep1Record(root,run),id);if(!current.closed)throw Error('New readiness not current '+id);application.records.push({id,path:`research/${run}-step1-${id}.json`,sha256:sha(readFileSync(`research/${run}-step1-${id}.json`)),content_input_sha256:row.sha256,current:true});}
for(const id of review.root_recording_order)if(!step1Decision(loadStep1Record(root,run),id).closed)throw Error('Readiness changed after recording '+id);
for(const evidence of before.files.filter(x=>!x.path.includes('-step1-')))if(sha(readFileSync(evidence.path))!==evidence.sha256)throw Error('Authored evidence changed during recording '+evidence.path);application.complete=true;
}catch(error){application.complete=false;application.error=error.message;writeFileSync(out,JSON.stringify(application,null,2)+'\n');throw error;}
writeFileSync(out,JSON.stringify(application,null,2)+'\n');console.log(JSON.stringify({batch:28,current_ready:application.records.length,source_changes:0,gates_attempted:0}));
