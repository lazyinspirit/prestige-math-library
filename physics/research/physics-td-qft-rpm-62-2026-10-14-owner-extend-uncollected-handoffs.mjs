import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
import {ownerRepairHandoffs} from '../../tools/physics-support/step5-owner-repair-handoffs.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',dir=`research/${run}-step5-v2`;
const read=p=>JSON.parse(fs.readFileSync(p)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const releases=process.argv.slice(2).map(p=>({path:p,value:read(p)}));
if(!releases.length)throw Error('Provide actual completed authorship releases');
const s=read(`.physics-autopilot/${run}/state.json`),registryPath=`${dir}/owner-repair-handoffs.json`,before=fs.readFileSync(registryPath),registry=JSON.parse(before);
if(!s.paused||Object.values(s.dispatches).some(x=>x.startedAt&&!x.endedAt)||fs.existsSync(`${dir}/impact-initial-1-collected.json`)||fs.existsSync(`${dir}/impact-initial-1-progress.json`))throw Error('Requires paused drained uncollected first-impact join');
for(const {value:r}of releases){
 if(r.run!==run||!r.authorship_complete||r.phase!=='impact-initial'||r.round!==1||!r.receipts?.length)throw Error('Wrong actual authorship release');
 for(const x of r.receipts){
  if(registry.repairs.some(y=>y.id===x.id&&y.phase===r.phase&&y.round===r.round))throw Error('Duplicate grant');
  if(sha(fs.readFileSync(x.receipt.path))!==x.receipt.sha256)throw Error('Receipt changed');
  registry.repairs.push({id:x.id,owner:r.owner,phase:r.phase,round:r.round,before_sha256:x.before_sha256,after_sha256:x.after_sha256,receipt:x.receipt});
 }
}
const current=Object.fromEntries(registry.repairs.map(x=>[x.id,itemHashGuard(fs.readFileSync(`items/${x.id}.md`,'utf8'))]));
const archive=`research/${run}-owner-uncollected-handoff-extension-${Date.now()}`;fs.mkdirSync(archive);fs.writeFileSync(`${archive}/registry.before.json`,before);
if(!fs.readFileSync(registryPath).equals(before))throw Error('Registry changed');
fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+'\n');
try{
 const intake=ownerRepairHandoffs(process.cwd(),`${process.cwd()}/${dir}`,read(`${dir}/impact-initial-1.json`),current);
 if(intake.repairs.length!==registry.repairs.length)throw Error('Incomplete native intake validation');
 const report={run,at:new Date().toISOString(),registry:registryPath,before_sha256:sha(before),after_sha256:sha(fs.readFileSync(registryPath)),actual_releases:releases.map(x=>({path:x.path,sha256:sha(fs.readFileSync(x.path))})),subjects:intake.repairs.map(x=>x.id),bound_refs:Object.keys(intake.evidence).length,native_intake_validator_passed:true,native_collection_performed:false,scientific_acceptance:false,recertification:false};
 fs.writeFileSync(`${archive}/verification.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({archive,...report}));
}catch(e){fs.renameSync(registryPath,`${archive}/registry.rejected.json`);fs.writeFileSync(registryPath,before);throw e;}
