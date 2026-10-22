// Owner-only exact page reimport. Never execute with a live controller or writer.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync,chmodSync,renameSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {originalImportPath,verifyMathematicsImports} from '../tools/physics-support/physics-imports.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',stateDir=join(root,'.physics-autopilot',run),archive=`research/${run}-owner-inactive-bockstein-reconciliation`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!process.argv.includes('--outside-writers-drained'))throw Error('Root must verify all adopted source writers have released their files');
if(existsSync(archive))throw Error('Prior application exists; inspect journal before continuing');
const assertInactive=()=>{if(existsSync(join(stateDir,'controller.lock')))throw Error('Controller still live');const s=read(join(stateDir,'state.json'));if(Object.values(s.dispatches).some(d=>!d.endedAt))throw Error('Native writers not drained');};
assertInactive();
const observationPath=`research/${run}-owner-ribbon-tqft-readiness/bockstein-placement-observation.json`,observation=read(observationPath),scanPath=`research/${run}-owner-drained-scan.json`,scan=read(scanPath);
if(scan.run!==run||scan.inactive!==true||scan.changes.length!==2||observation.pages.length!==2||scan.changes.some(c=>!observation.pages.some(p=>p.path===c.path&&p.current_original_sha256===c.current_sha256)))throw Error('Fresh required-import scan differs from the reviewed two-page reconciliation');
const receiptPath='research/math-imports.json',receiptBytes=readFileSync(receiptPath),receipt=JSON.parse(receiptBytes),changes=[];
const itemPin=receipt.files.find(p=>p.path===observation.item.path);
if(!itemPin||sha(readFileSync(itemPin.path))!==observation.item.local_sha256||sha(readFileSync(originalImportPath(receipt,itemPin)))!==observation.item.current_original_sha256||observation.item.local_sha256!==observation.item.current_original_sha256)throw Error('Bockstein item bytes changed; new review required');
for(const row of observation.pages){const pin=receipt.files.find(p=>p.path===row.path);if(!pin||pin.sha256!==row.local_sha256||sha(readFileSync(row.path))!==row.local_sha256)throw Error('Pinned page changed '+row.path);const original=originalImportPath(receipt,pin),bytes=readFileSync(original),source=readItem(original);if(sha(bytes)!==row.current_original_sha256||source.status!=='published')throw Error('Reviewed original changed '+row.path);changes.push({path:row.path,source:original,before_sha256:pin.sha256,after_sha256:sha(bytes),bytes});}
if(!process.argv.includes('--apply')){console.log(JSON.stringify({inactive:true,changes:changes.map(({bytes,...r})=>r)}));process.exit(0);}
mkdirSync(archive);
const preserve=(path,label=path)=>{if(!existsSync(path))return;const target=join(archive,'before',label);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,readFileSync(path));};
preserve(receiptPath);preserve(scanPath);preserve(observationPath);
for(const name of ['state.json','owner-gate-request.json','owner-gate-receipt.json'])preserve(join(stateDir,name),`state/${name}`);
for(const name of readdirSync('research'))if(name.startsWith(`${run}-step1-`)&&name.endsWith('.json'))preserve(join('research',name));
for(const row of changes){preserve(row.path);const target=join(archive,'current-original',row.path);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,row.bytes);}
assertInactive();if(sha(readFileSync(receiptPath))!==sha(receiptBytes))throw Error('Concurrent import receipt change');
for(const row of changes)if(sha(readFileSync(row.path))!==row.before_sha256||sha(readFileSync(row.source))!==row.after_sha256)throw Error('Concurrent page edit '+row.path);
for(const row of changes){chmodSync(row.path,0o644);writeFileSync(row.path,row.bytes);chmodSync(row.path,0o444);receipt.files.find(p=>p.path===row.path).sha256=row.after_sha256;}
const temp=`${receiptPath}.${process.pid}.tmp`;writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,receiptPath);
const report={run,at:new Date().toISOString(),operation:'owner inactive exact required-page reimport',observation_sha256:sha(readFileSync(observationPath)),fresh_required_scan_sha256:sha(readFileSync(scanPath)),changes:changes.map(({bytes,...row})=>row),item_bytes_unchanged:true,original_mathematics_modified:false,publication_modified:false,readiness_refreshed:false,native_gate_attempted:false,verification:{passed:false,pending:true}};
writeFileSync(`${archive}/receipt.json`,JSON.stringify(report,null,2)+'\n');
try{const count=verifyMathematicsImports(root,{run,planning:true});report.verification={passed:true,local_pins:count,required_originals_checked:true};}
catch(error){report.verification={passed:false,error:error.message};writeFileSync(`${archive}/receipt.json`,JSON.stringify(report,null,2)+'\n');throw error;}
assertInactive();writeFileSync(`${archive}/receipt.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({reconciled:2,verification:report.verification,readiness_refreshed:false}));
