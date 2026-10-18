import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,receipt=`${base}/step2-finite-obligation-integration.json`,archive=`${base}/step2-finite-contracts-before`;
if(existsSync(receipt))throw Error('Already integrated');
const inventory=JSON.parse(readFileSync(`${base}/step2-finite-obligations-inventory.json`)).rows;
const key=r=>JSON.stringify([Number(r.batch),r.id,r.index]);
const originals=new Map(inventory.map(r=>[key(r),r])),seen=new Set(),docs=new Map(),rows=[];
const normalize=s=>s.replace(/\s+/g,' ').trim();
for(const family of ['special','geometry','particle']){
 const path=`${base}/step2-finite-${family}-proposal.json`,proposal=JSON.parse(readFileSync(path));
 for(const row of proposal.rows){
  const k=key(row),old=originals.get(k);if(!old||seen.has(k))throw Error(`Unknown/duplicate obligation ${k}`);seen.add(k);
  const original=row.original_obligation??row.obligation;
  if(JSON.stringify(original)!==JSON.stringify(old.obligation))throw Error(`Original changed ${k}`);
  if(!normalize(readFileSync(`items/${row.id}.md`,'utf8')).includes(normalize(row.finite_smoke.asserts)))throw Error(`Stale source quote ${k}`);
  if(!docs.has(row.batch)){const p=`research/${run}-batch-${row.batch}.proof-contracts.json`,raw=readFileSync(p,'utf8');docs.set(row.batch,{path:p,raw,data:JSON.parse(raw)});}
  const entry=docs.get(row.batch).data.contracts[row.id];
  if(JSON.stringify(entry.finite_smoke[row.index])!==JSON.stringify(original))throw Error(`Current obligation changed ${k}`);
  entry.finite_smoke[row.index]=row.finite_smoke;
  rows.push({batch:row.batch,id:row.id,index:row.index,family,proposal:path,original_obligation:original,current_obligation:row.finite_smoke,limits:row.limitations??row.finite_limitations,rationale:row.preserved_obligation_rationale??row.original_obligation_preservation});
 }
}
if(seen.size!==93||seen.size!==originals.size)throw Error(`Missing obligations ${seen.size}/${originals.size}`);
const aggregator='tools/finite-smoke-numerical.mjs',before=readFileSync(aggregator,'utf8');
if(before.includes('numericalFrontierSpecialChecks'))throw Error('Registry already integrated');
const specs=[['Special','special'],['Geometry','geometry'],['Particle','particle']];
const imports=specs.map(([name,suffix])=>`import { numericalFrontier${name}Checks } from './finite-smoke-numerical-frontier71-${suffix}.mjs';`).join('\n');
const families=specs.map(([name])=>`  ['numericalFrontier${name}Checks', numericalFrontier${name}Checks],`).join('\n');
const after=before.replace('const families = [',()=>`${imports}\n\nconst families = [\n${families}`);
for(const d of docs.values())if(readFileSync(d.path,'utf8')!==d.raw)throw Error(`Concurrent change ${d.path}`);
mkdirSync(archive,{recursive:true});writeFileSync(`${archive}/finite-smoke-numerical.mjs`,before,{flag:'wx'});
for(const[batch,d]of docs){writeFileSync(`${archive}/batch-${batch}.json`,d.raw,{flag:'wx'});writeFileSync(d.path,JSON.stringify(d.data,null,2)+'\n');}
writeFileSync(aggregator,after);
writeFileSync(receipt,JSON.stringify({run,at:new Date().toISOString(),archive,original_obligations:93,installed_obligations:rows.length,native_gate_credit:false,software_tests_run:false,registry_modules:specs.map(([,suffix])=>`tools/finite-smoke-numerical-frontier71-${suffix}.mjs`),documentation:'tools/NUMERICAL-FRONTIER71-FINITE-SMOKE.md',rows},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({obligations:rows.length,items:new Set(rows.map(r=>r.id)).size,batches:docs.size,callbacks_not_executed:true}));
