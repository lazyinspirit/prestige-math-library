// Prepared ROOT-ONLY, not executed by preparer. Mirrors seven applied sources only.
import * as fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const run='numerical-optimization-dynamics-2026-10-16';
const base=path.dirname(fileURLToPath(import.meta.url));
const read=p=>fs.readFileSync(p),assert=(v,m)=>{if(!v)throw Error(m);};
const arg=process.argv.indexOf('--authorization');
assert(arg>=0&&process.argv[arg+1],'Explicit root authorization required.');
const ap=process.argv[arg+1],auth=JSON.parse(read(ap));
const pp=path.relative(process.cwd(),path.join(base,'edits.json'));
assert(auth.run===run&&auth.authorized_by==='root'&&auth.action==='apply-exact-b65-seven-contract-mirrors'
 &&auth.all_native_and_owner_workers_drained===true&&auth.approved_plan===pp&&auth.approved_array_edits===9,
 'Root must approve this exact plan at an actual drained boundary.');
const planRaw=read(pp),plan=JSON.parse(planRaw);
const boundary=()=>{
 const s=JSON.parse(read(`.autopilot/${run}/state.json`));
 assert(s.run===run&&s.paused===true&&/^2-/.test(s.stage),'Run must be paused at Step2.');
 assert(Object.values(s.dispatches??{}).every(d=>!d.startedAt||d.endedAt),'Native workers not drained.');
};
const sources=()=>{
 for(const g of plan.source_guards)assert(read(g.file).equals(read(g.archive)),`Final source drift: ${g.file}`);
 for(const g of plan.section_guards){
  const text=read(g.file).toString(),heading=`## ${g.section}`;
  assert(text.includes(heading)&&text.slice(text.indexOf(heading)+heading.length).split(/^## /m)[0].trim()===g.exact_section,
   `New supplier Statement changed: ${g.file}`);
 }
};
boundary();sources();assert(plan.edits.length===9,'Unexpected prepared edit count.');
const allowed=new Set(plan.source_guards.map(g=>path.basename(g.file,'.md')));
const before=new Map(),after=new Map();
for(const e of plan.edits){
 assert([`research/${run}-batch-36.proof-contracts.json`,`research/${run}-batch-65.proof-contracts.json`].includes(e.file),'Outside metadata target.');
 const [key,id,field]=e.pointer;
 assert(key==='contracts'&&allowed.has(id)&&['derivations','citations'].includes(field),'Outside field scope.');
 if(!before.has(e.file)){const b=read(e.file);before.set(e.file,b);after.set(e.file,JSON.parse(b));}
 const data=after.get(e.file);
 assert(JSON.stringify(data.contracts[id][field])===JSON.stringify(e.before),`Target field drift: ${e.file}/${id}/${field}`);
 data.contracts[id][field]=e.after;
}
const out=auth.output_directory;
assert(typeof out==='string'&&out.startsWith(`research/${run}-`)&&!out.includes('..')&&!fs.existsSync(out),'Fresh output required.');
fs.mkdirSync(out);const put=(name,b)=>fs.writeFileSync(path.join(out,name),b,{flag:'wx'});
put('authorization.json',read(ap));put('exact-approved-plan.json',planRaw);
const journal=[];
for(const [file,b] of before){
 boundary();sources();assert(read(file).equals(b),`Concurrent metadata edit: ${file}`);
 const a=Buffer.from(JSON.stringify(after.get(file),null,2)+'\n'),stem=path.basename(file);
 put(stem+'.actual-before',b);put(stem+'.after',a);
 assert(read(file).equals(b),'Concurrent metadata write.');fs.writeFileSync(file,a);
 assert(read(file).equals(a),'Unexpected written metadata.');
 journal.push({at:new Date().toISOString(),file,edits:plan.edits.filter(e=>e.file===file)});
 fs.writeFileSync(path.join(out,'journal.json'),JSON.stringify(journal,null,2)+'\n');
}
put('completion.json',JSON.stringify({run,at:new Date().toISOString(),kind:'actual-seven-source-contract-mirrors-applied',changed_paths:[...before.keys()],array_edits:9,limits:'Pending three shared Definitions remain excluded; no source/stamp/manifest/level/check/gate/hash recertification or acceptance supplied.'},null,2)+'\n');
