// Root-only inactive reconciliation of the six exact reviewed original files.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync,chmodSync,renameSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {originalImportPath,verifyMathematicsImports} from '../tools/physics-support/physics-imports.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2';
const archive=`research/${run}-owner-final-import-reconciliation`,stateDir=`.physics-autopilot/${run}`;
const reportPath=`research/${run}-owner-final-home-drift/report.json`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!process.argv.includes('--outside-writers-drained'))throw Error('Root must verify every adopted production writer is held or drained');
if(existsSync(archive))throw Error('Existing application: inspect preserved journal before continuing');
const inactive=()=>{if(existsSync(`${stateDir}/controller.lock`)||Object.values(read(`${stateDir}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native controller or writers active');};
inactive();
if(sha(readFileSync(reportPath))!=='d2ff2c2224974e2d4dad84218685abd27034aacbbc5c6cb85c9c7f84beface6e')throw Error('Reviewed report changed');
const report=read(reportPath),receiptPath='research/math-imports.json',beforeReceipt=readFileSync(receiptPath),receipt=JSON.parse(beforeReceipt);
const changes=report.smallest_required_reconciliation;
if(report.run!==run||changes.length!==6||changes.filter(c=>c.pin_sha256===null).length!==2)throw Error('Unexpected exact import scope');
for(const row of report.source_use_bindings)if(sha(readFileSync(row.path))!==row.sha256)throw Error('Reviewed consumer changed '+row.path);
for(const row of report.unchanged_item_interfaces){const path=`items/${row.id}.md`,pin=receipt.files.find(p=>p.path===path);if(!pin||sha(readFileSync(path))!==row.local_sha256||sha(readFileSync(originalImportPath(receipt,pin)))!==row.original_sha256||row.local_sha256!==row.original_sha256)throw Error('Reviewed unchanged supplier changed '+path);}
const prepared=changes.map(row=>{
 const pin=receipt.files.find(p=>p.path===row.path);
 if(row.pin_sha256===null){if(pin||existsSync(row.path))throw Error('New page already exists '+row.path);}
 else if(!pin||pin.sha256!==row.pin_sha256||sha(readFileSync(row.path))!==row.pin_sha256)throw Error('Pinned preimage changed '+row.path);
 const source=originalImportPath(receipt,pin??{path:row.path}),bytes=readFileSync(source);
 if(sha(bytes)!==row.current_sha256||readItem(source).status!=='published')throw Error('Reviewed published original changed '+row.path);
 return {...row,source,bytes};
});
// New source homes are absent before reconciliation, so the native scope checker
// correctly rejects the old snapshot. Its passing result is required AFTER the
// exact reviewed migration; the diagnostic is never described as a native pass.
if(!process.argv.includes('--apply')){console.log(JSON.stringify({inactive:true,changes:prepared.map(({bytes,...row})=>row)}));process.exit(0);}
mkdirSync(archive);
const preserve=(path,label=path)=>{if(!existsSync(path))return;const target=join(archive,'before',label);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,readFileSync(path));};
preserve(receiptPath);preserve(reportPath);preserve('research/plan-spec.json');
for(const name of ['state.json','owner-gate-request.json','owner-gate-receipt.json'])preserve(`${stateDir}/${name}`,`state/${name}`);
for(const name of readdirSync('research'))if(name.startsWith(`${run}-step1-`)&&name.endsWith('.json'))preserve(`research/${name}`);
for(const row of prepared){preserve(row.path);const dest=join(archive,'current-original',row.path);mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,row.bytes);}
inactive();if(sha(readFileSync(receiptPath))!==sha(beforeReceipt))throw Error('Concurrent import receipt change');
for(const row of prepared)if(sha(readFileSync(row.source))!==row.current_sha256||(row.pin_sha256!==null&&sha(readFileSync(row.path))!==row.pin_sha256))throw Error('Concurrent source change '+row.path);
const result={run,at:new Date().toISOString(),operation:'inactive exact reviewed source reconciliation',changes:prepared.map(({bytes,...row})=>row),original_mathematics_modified:false,readiness_refreshed:false,native_gate_attempted:false,verification:{passed:false,pending:true}};
writeFileSync(`${archive}/receipt.json`,JSON.stringify(result,null,2)+'\n');
for(const row of prepared){mkdirSync(dirname(row.path),{recursive:true});if(existsSync(row.path))chmodSync(row.path,0o644);writeFileSync(row.path,row.bytes);chmodSync(row.path,0o444);const pin=receipt.files.find(p=>p.path===row.path);if(pin)pin.sha256=row.current_sha256;else receipt.files.push({path:row.path,sha256:row.current_sha256});}
const temp=`${receiptPath}.${process.pid}.tmp`;writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,receiptPath);
try{const count=verifyMathematicsImports(root,{run,planning:true});result.verification={passed:true,local_pins:count,required_originals_checked:true};}
catch(error){result.verification={passed:false,error:error.message};writeFileSync(`${archive}/receipt.json`,JSON.stringify(result,null,2)+'\n');throw error;}
inactive();writeFileSync(`${archive}/receipt.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({reconciled:prepared.length,verification:result.verification,readiness_refreshed:false}));
