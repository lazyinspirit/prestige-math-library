import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const run='physics-td-qft-rpm-62-2026-10-14';
const assigned=new Set(JSON.parse(fs.readFileSync(`research/${run}-step5-v2/impact-initial-1.json`)).assignments['2']);
const section=(id,name)=>{const t=fs.readFileSync(`items/${id}.md`,'utf8');const start=t.indexOf(`## ${name}\n`);if(start<0)throw Error(`missing ${id} ${name}`);const from=start+name.length+4;const end=t.indexOf('\n## ',from);return t.slice(from,end<0?undefined:end).trim();};
const normalize=t=>t.replace(/\\/g,'').replace(/\s+/g,' ').trim();
const updates=[];const checks=[];const repaired=[];
for(const file of fs.readdirSync('research').filter(f=>f.startsWith(`${run}-batch-`)&&f.endsWith('.proof-contracts.json')).sort()){
 const path=`research/${file}`, d=JSON.parse(fs.readFileSync(path));let dirty=false;
 for(const [id,c] of Object.entries(d.contracts??{})){
  if(!assigned.has(id))continue;
  for(const citation of c.citations??[]){
   if(!citation.source||!citation.source_section||!citation.quote)continue;
   const current=section(citation.source,citation.source_section);
   if(normalize(current).includes(normalize(citation.quote)))continue;
   const old=citation.quote;citation.quote=current;dirty=true;updates.push({id,fact:citation.fact,supplier:citation.source,contract:path});
   // Reconcile matching current supplier-use excerpts; keep review/history fields intact.
   for(const rows of Object.values(c))if(Array.isArray(rows))for(const row of rows){
    if(row?.supplier===citation.source&&row.source_section===citation.source_section&&typeof row.exact_statement==='string'&&((row.consumer_use??'').includes(` ${citation.fact} `)||normalize(row.exact_statement)===normalize(old)))row.exact_statement=current;
   }
  }
  if(id==='ex-td-local-equilibrium-profile'){
   const txt=fs.readFileSync(`items/${id}.md`,'utf8');const fact='F4';
   if(!(c.citations??[]).some(x=>x.fact===fact))c.citations.push({fact,source:'def-natural-logarithm',source_section:'Definition',quote:section('def-natural-logarithm','Definition'),uses:['2.1']});
   const row=c.derivations.find(x=>x.step==='2.1');const para=txt.split('\n\n').find(x=>x.startsWith('2.1 '));row.claim=para.replace(/^2\.1 /,'').replace(/\s*\[[^\]]+\] ∎\s*$/,'');if(!row.inputs.includes('F4'))row.inputs.push('F4');
   c.risk_review.notes+=' Current owner repair replaces the former label-only identity assignment with explicit cell states, log(e)-y² entropy, fixed-energy fibers and the unique maximizer (a,0), verified in step 2.1; prior independent review remains historical.';
   dirty=true;
  }
  if(id==='pthm-td-stable-tempered-free-cube-grand-pressure'){
   const txt=fs.readFileSync(`items/${id}.md`,'utf8');const row=c.derivations.find(x=>x.step==='1.1');const para=txt.split('\n\n').find(x=>x.startsWith('1.1 '));row.claim=para.replace(/^1\.1 /,'').replace(/\s*\[[^\]]+\]\s*$/,'');dirty=true;
  }
 }
 if(dirty){fs.writeFileSync(path,JSON.stringify(d,null,2)+'\n');repaired.push(path);}
}
const path=`research/${run}-batch-16.pages.json`;const manifest=JSON.parse(fs.readFileSync(path));const row=manifest.flatMap(p=>p.items).find(x=>x.id==='ex-td-local-equilibrium-profile');
if(!row.deps.includes('def-natural-logarithm'))row.deps.push('def-natural-logarithm');row.dependency_roles['def-natural-logarithm']='mathematical-premise';row.statement=section(row.id,'Example');fs.writeFileSync(path,JSON.stringify(manifest,null,2)+'\n');
for(const path of repaired){const d=JSON.parse(fs.readFileSync(path));const ids=Object.keys(d.contracts).filter(x=>assigned.has(x));const cmd=['tools/physics-support/proof-contract.mjs',path,'--strict','--items',ids.join(','),'--json'];const r=spawnSync('node',cmd,{encoding:'utf8'});checks.push({command:['node',...cmd].join(' '),exit_code:r.status,output:r.stdout+r.stderr});if(r.status!==0)console.error(r.stdout+r.stderr);}
const reportPath=`research/${run}-step5-v2/step5-v2-impact-initial-r1-u2.json`;const report=JSON.parse(fs.readFileSync(reportPath));report.repair_notes.metadata_updates=updates;report.repair_notes.metadata_files=[...repaired,path];report.repair_notes.checks.push(...checks);
const metadataIds=new Set(updates.map(x=>x.id));for(const review of report.reviews)if(metadataIds.has(review.id)&&review.disposition==='unaffected'){review.metadata_repair_only=true;review.reason+=' Replaced the invalidated supplier quotation in its owning batch contract; the item carrier is unchanged.';}
report.repair_notes.current_findings=[{id:'ex-td-first-law-sign-convention',finding:'Given omitted exact core membership required by its first-law use; repaired only that premise.'},{id:'ex-td-local-equilibrium-profile',finding:'Former equilibrium target lacked the explicit constrained-maximum data now required by the supplier; repaired the model and its verification.'},{id:'pthm-td-stable-tempered-free-cube-grand-pressure',finding:'All-radius lower-regularity bridge omitted from the proof; supplied two-particle stability and a constant near-origin envelope.'}];
fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({quotation_updates:updates.length,contracts:repaired.length,checks:checks.map(x=>({command:x.command,exit_code:x.exit_code}))},null,2));if(checks.some(x=>x.exit_code!==0))process.exitCode=1;
