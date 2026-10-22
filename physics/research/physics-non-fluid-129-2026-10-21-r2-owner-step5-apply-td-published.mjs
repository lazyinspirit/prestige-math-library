// Root application of the same scientific owner's reviewed local corrections.
// Run from physics only, after the native paused writer set has drained.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/physics-support/published-repair-policy.mjs';
import {publishedMaintenance} from '../../tools/physics-support/step5-published-maintenance.mjs';

const run='physics-non-fluid-129-2026-10-21-r2';
const science=`research/${run}-owner-step5-td-published-maintenance`;
const dir=`${science}/root-application`;
const stateDir=`.physics-autopilot/${run}`;
const group='td-published-maintenance';
const sha=x=>createHash('sha256').update(x).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const need=(ok,why)=>{if(!ok)throw Error(why);};
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n',{flag:'wx'});
const ref=p=>({path:p,sha256:sha(fs.readFileSync(p))});
const state=read(`${stateDir}/state.json`);
need(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&!state.finishedAt,'wrong paused native boundary');
need(Object.values(state.dispatches).every(d=>!d.startedAt||d.endedAt),'native writer active');
need(!fs.existsSync(`${stateDir}/controller.lock`),'controller still running');
need(!fs.existsSync('.physics-autopilot/step5-shared-write.lock'),'shared writer active');
need(!fs.existsSync(dir),'application already exists; inspect rather than overwrite');
const evidence=read(`${science}/evidence.json`);
for(const row of evidence.source_guards)need(sha(fs.readFileSync(row.path))===row.raw_sha256,`science source changed: ${row.id}`);
const index=read(`${science}/proposals/index.json`);
const ids=['cex-td-noncompact-phase-mixture-no-attained-maximum','pthm-td-intensive-coexistence-conditions','pthm-td-clapeyron-local'];
const originals=new Map();
const pack=read(`research/${run}-step5-v2/initial-1.json`);
const assigned=new Set(Object.values(pack.assignments).flat().map(r=>typeof r==='string'?r:r.id));
for(const id of ids){
  const row=index.entries.find(r=>r.id===id),text=fs.readFileSync(row.canonical_path,'utf8');
  need(!assigned.has(id)&&itemHashGuard(text)===pack.before[id],`not original unassigned carrier: ${id}`);
  need(sha(text)===row.before_raw_sha256&&sha(fs.readFileSync(row.proposal_path))===row.proposal_raw_sha256,`proposal guard failed: ${id}`);
  originals.set(id,text);
}
fs.mkdirSync(dir,{recursive:true});
fs.mkdirSync(`${dir}/before`);fs.mkdirSync(`${dir}/checks`);
write(`${dir}/drained-state.json`,fs.readFileSync(`${stateDir}/state.json`,'utf8'));
write(`${dir}/root-review.json`,{run,reviewer:'/root',at:new Date().toISOString(),scientific_owner:'/root/td_published_maintenance',
  scope:ids,reading:'Root read the three complete proposed sources and surgical diffs, the scientific report and integration analysis. Supplier and all affected direct/indirect/nonlogical consumer review is the named scientific owner\'s actual work, not a claim of root reading all 31 carriers.',
  decision:'Adopt the two-sided accumulation formulation and quotient proof, explicit coordinatewise barycenter convention, and necessary direct Clapeyron clarification. Preserve the two false positives unchanged.',
  no_native_adjudication:true,no_new_publication:true,source_reading_limits:'No new external full-text retrieval by root; local arguments and actual same-owner evidence only.'});
function command(argv,label){
  const checked_at=new Date().toISOString(),result=spawnSync(argv[0],argv.slice(1),{cwd:process.cwd(),encoding:'utf8',maxBuffer:16*1024*1024});
  const output=(result.stdout??'')+(result.stderr??'');
  const row={command:argv,exit_code:result.status,output,checked_at};write(`${dir}/checks/${label}.json`,row);
  need(result.status===0,`command failed: ${label}; see actual check record`);return row;
}
// Preserve original historical publication/audit evidence before any source edit.
for(const id of ids){write(`${dir}/before/${id}.md`,originals.get(id));command(['node','tools/physics-support/published-repairs.mjs','claim','--run',run,'--id',id,'--group',group,'--root','.'],`${id}-claim`);}
const entries=[],repairRows=[];
for(const id of ids){
  const proposal=index.entries.find(r=>r.id===id),receiptPath=`${dir}/${id}.receipt.json`;
  let text=fs.readFileSync(proposal.proposal_path,'utf8');
  text=text.replace(/^verification:[ \t]*\r?\n(?:[ \t]+[^\n]*\n?)*/m,`verification:\n  repair: "${receiptPath}"\n`);
  need(!/^  verified:/m.test(text)&&text.includes(`  repair: "${receiptPath}"`),'old current verification not replaced');
  fs.writeFileSync(`items/${id}.md`,text);
  const content=itemHashGuard(text);
  const local_checks={};
  for(const [tool,argv] of [
    ['precheck',['node','tools/physics-support/tsx-run.mjs','tools/physics-support/precheck.mts',`items/${id}.md`]],
    ['rendercheck',['node','tools/physics-support/rendercheck.mjs',`items/${id}.md`]],
    ['proof-layout',['node','tools/physics-support/proof-layout.mjs',`items/${id}.md`]]]){
    local_checks[tool]={...command(argv,`${id}-${tool}`),content_sha256:content};
  }
  need(itemHashGuard(fs.readFileSync(`items/${id}.md`,'utf8'))===content,'focused check changed content');
  const marker=`${run}:${id}`;
  const ledgerEvidence=`\n\n### ${id}: recorded local published correction\n\nRun: ${run}. Scientific owner: /root/td_published_maintenance; root application group: ${group}. Current canonical content SHA256: ${content}.\n\nThe genuine original published carrier, including historical verification/publication markers, is retained at ${dir}/before/${id}.md. This is a surgical local correction, not a new audit, publication, native adjudication or gate acceptance. The same owner reviewed the supplier arguments and all affected actual consumers; see ${science}/report.md and consumer-inventory.json. Root adoption and reading limits: ${dir}/root-review.json. Three actual focused checks are retained under ${dir}/checks/.\n\n`;
  fs.appendFileSync('research/published-consumer-supplier-ledger.md',`\n<!-- local-published-repair:${marker}:begin -->${ledgerEvidence}<!-- local-published-repair:${marker}:end -->\n`);
  const before=originals.get(id),receipt={version:1,kind:'recorded-local-published-repair',run,id,group,
    correction:id.startsWith('cex-')?'Define prescribed barycenter by finite coordinatewise first moments; the bounded concrete witness already satisfies these moments.':id.includes('intensive')?'Quantify arbitrarily small pure feasible transfers from both signs and prove derivative equality using their difference quotients.':'Discharge the clarified intensive supplier premise explicitly, preserving every slope and latent-heat conclusion.',
    recorded_at:new Date().toISOString(),content_sha256:content,before_file:`${dir}/before/${id}.md`,before_raw_sha256:sha(before),pre_sha256:itemHashGuard(before),ledger_marker:marker,ledger_sha256:sha(ledgerEvidence),local_checks,
    scientific_owner:'/root/td_published_maintenance',scientific_evidence:ref(`${science}/report.md`),root_review:ref(`${dir}/root-review.json`)};
  write(receiptPath,receipt);
  const policy=recordedPublishedRepair(process.cwd(),id,text,receiptPath);need(policy.ok,`${id}: ${policy.reason}`);
  entries.push({id,group,receipt:ref(receiptPath),scientific_evidence:[ref(`${science}/report.md`),ref(`${science}/evidence.json`),ref(`${science}/consumer-inventory.json`),ref(`${dir}/root-review.json`)]});
  repairRows.push({kind:'repaired',id,group,found_via:'step4-published-rejection-owner-science',found_at_stage:'5.1-adjudicate',receipt:receiptPath,pre_sha256:receipt.pre_sha256,post_sha256:content,scientific_owner:receipt.scientific_owner,native_adjudication:false});
}
write(`${dir}/repair-rows.json`,repairRows);
command(['node','tools/physics-support/published-repairs.mjs','append','--run',run,'--file',`${dir}/repair-rows.json`,'--root','.'],'append-published-rows');
const request={version:1,run,phase:'initial',round:1,reviewer:'/root',native_review:false,native_adjudication:false,
  reason:'Apply the same scientific owner\'s three necessary local published corrections with genuine original preimages, actual claims, current focused checks and consumer-use review; preserve all original native reports and draft tuple ownership.',
  drained_state:ref(`${dir}/drained-state.json`),entries};
write(`research/${run}-step5-v2/owner-published-maintenance.json`,request);
const current={...pack.before};for(const id of ids)current[id]=itemHashGuard(fs.readFileSync(`items/${id}.md`,'utf8'));
const validated=publishedMaintenance(process.cwd(),run,pack,current);
for(const row of index.entries.filter(r=>!ids.includes(r.id)))need(sha(fs.readFileSync(row.canonical_path))===row.before_raw_sha256,`optional source changed: ${row.id}`);
write(`${dir}/receipt.json`,{version:1,run,applied_at:new Date().toISOString(),actual_sources:ids,published_policy_passed:validated.repairs.map(r=>r.id),request:ref(`research/${run}-step5-v2/owner-published-maintenance.json`),native_pack_preserved:true,native_reports_unchanged:true,native_acceptance:false,metadata_join_pending:true});
console.log(JSON.stringify({applied:ids,policy:'three authentic local repairs validated',native_acceptance:false,metadata_join_pending:true}));
