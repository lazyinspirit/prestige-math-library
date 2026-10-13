// Seal an actual fresh dependency-ordered metadata pass and renderer check.
// This records formatting/metadata currency only, never mathematical review.
import {readFileSync, readdirSync, writeFileSync, renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {basename} from 'node:path';
const run='physics-cm-qm-gr-79-2026-10-11';
const stateDir=`.physics-autopilot/${run}`;
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const assert=(condition,message)=>{if(!condition)throw Error(message);};
assert(process.argv.includes('--owners-drained'),'Actual outside-writer drain required');
const request=read(`${stateDir}/owner-gate-request.json`);
assert(!request.consumedAt,'Attempt already consumed');
const state=read(`${stateDir}/state.json`);
assert(!Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt),'Native writers active');
const base=`research/${run}-root-metadata-pass`;
const candidates=readdirSync(base).filter(name=>{
  try{return read(`${base}/${name}/report.json`).subjects.length===1551;}catch{return false;}
}).sort();
const dir=`${base}/${candidates.at(-1)}`;
const report=read(`${dir}/report.json`), layout=read(`${dir}/proof-layout.json`);
assert(Date.parse(report.started_at)>=Date.parse(request.createdAt),'Metadata pass predates attempt');
assert(report.changes.length===0,'Reconciled carriers need a new current native request before sealing');
assert(layout.items.length===1551&&!layout.errors.length&&layout.steps>0,'Missing complete actual layout pass');
const layouts=new Map(layout.items.map(item=>[basename(item.file,'.md'),item]));
const manifests=new Map(readdirSync('research').filter(name=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))
  .flatMap(name=>read(`research/${name}`).flatMap(page=>page.items)).map(item=>[item.id,item]));
for(const input of report.inputs)assert(sha(readFileSync(input.path))===input.sha256,`Metadata input changed: ${input.path}`);
for(const input of request.snapshot.inputs){
  let digest=null;
  try{digest=sha(readFileSync(input.path));}catch(error){if(error.code!=='ENOENT')throw error;}
  assert(digest===input.sha256,`Native snapshot input changed: ${input.path}`);
}
const items=request.snapshot.items.map(item=>{
  assert(layouts.has(item.id)&&!layouts.get(item.id).errors.length,`Missing actual layout result: ${item.id}`);
  assert(sha(readFileSync(`items/${item.id}.md`))===item.carrierSha256,`Source changed: ${item.id}`);
  assert(manifests.has(item.id)&&sha(JSON.stringify(manifests.get(item.id)))===item.manifestSha256,`Manifest changed: ${item.id}`);
  return {...item,verdict:'format-metadata-pass',
    formatting:{verdict:'pass',evidence:`Actual scanProofFiles renderer API checked current headings and applicable proof-step structure with zero errors; ${dir}/proof-layout.json.`},
    metadata:{verdict:'pass',evidence:`Current parsed identity, kind, domain, public-claim and dependency mirrors, dependency levels and parser-derived citation/derivation caches reconciled in a dependency-ordered pass without source-body changes; ${dir}/report.json.`}};
});
assert(items.length===1551,'Unexpected frontier; inspect its current native scope before adapting this helper');
const receipt={version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,
  snapshotSha256:request.snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],
  reviewStartedAt:report.started_at,reviewedAt:new Date().toISOString(),items};
const temp=`${stateDir}/owner-gate-receipt.json.root.tmp`;
writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');
renameSync(temp,`${stateDir}/owner-gate-receipt.json`);
console.log(JSON.stringify({attempt:request.attempt,subjects:items.length,steps:layout.steps,evidence:dir}));
