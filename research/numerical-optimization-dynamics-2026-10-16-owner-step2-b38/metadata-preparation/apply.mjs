// ROOT-ONLY prepared utility: NOT executed by preparer.
import * as fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const base=path.dirname(fileURLToPath(import.meta.url));
const run='numerical-optimization-dynamics-2026-10-16';
const read=p=>fs.readFileSync(p),assert=(v,m)=>{if(!v)throw Error(m);};
const at=process.argv.indexOf('--authorization');
assert(at>=0 && process.argv[at+1],'Explicit root authorization JSON required.');
const ap=process.argv[at+1],auth=JSON.parse(read(ap));
assert(auth.run===run && auth.authorized_by==='root' && auth.action==='apply-exact-b38-native-contract-mirrors'
 && auth.all_native_and_owner_workers_drained===true,'Missing root review or writer drain.');
const pp=path.relative(process.cwd(),path.join(base,'edits.json'));
assert(auth.approved_plan===pp && auth.approved_array_edits===9,'Approve exact prepared plan, nine array edits.');
const planRaw=read(pp),plan=JSON.parse(planRaw);
const boundary=()=>{
 const s=JSON.parse(read(`.autopilot/${run}/state.json`));
 assert(s.paused===true && /^2-/.test(s.stage) && s.run===run,'Must be paused at Step2.');
 assert(Object.values(s.dispatches??{}).every(d=>!d.startedAt||d.endedAt),'Native dispatches not drained.');
};
boundary();
for(const g of plan.source_guards)assert(read(g.path).equals(read(g.archive)),`Source changed: ${g.path}`);
for(const g of plan.new_citation_section_guards){
 const text=read(g.path).toString();
 const heading=`## ${g.section}`;
 const section=text.slice(text.indexOf(heading)+heading.length).split(/^## /m)[0].trim();
 assert(text.includes(heading) && section===g.exact_section,`New supplier quote changed: ${g.path}`);
}
const old=read(plan.file);assert(old.equals(read(plan.metadata_before)),'Contract changed since preparation.');
const data=JSON.parse(old);
const allowed=new Set(plan.source_guards.map(g=>path.basename(g.path,'.md')));
assert(plan.edits.length===9,'Unexpected edit count.');
for(const e of plan.edits){
 const [key,id,field]=e.pointer;
 assert(key==='contracts' && allowed.has(id) && ['citations','derivations'].includes(field),'Unapproved field.');
 assert(JSON.stringify(data.contracts[id][field])===JSON.stringify(e.before),'Old field mismatch.');
 data.contracts[id][field]=e.after;
}
const out=auth.output_directory;
assert(typeof out==='string' && out.startsWith(`research/${run}-`) && !out.includes('..') && !fs.existsSync(out),'Fresh evidence output required.');
fs.mkdirSync(out);
const put=(name,bytes)=>fs.writeFileSync(path.join(out,name),bytes,{flag:'wx'});
put('authorization.json',read(ap));put('exact-plan.json',planRaw);put('actual-contract-before.json',old);
const after=Buffer.from(JSON.stringify(data,null,2)+'\n');put('proposed-contract-after.json',after);
boundary();for(const g of plan.source_guards)assert(read(g.path).equals(read(g.archive)),`Concurrent source edit: ${g.path}`);
assert(read(plan.file).equals(old),'Concurrent metadata edit.');
fs.writeFileSync(plan.file,after);assert(read(plan.file).equals(after),'Unexpected written bytes.');
put('completion.json',JSON.stringify({run,at:new Date().toISOString(),kind:'exact-native-b38-contract-mirrors-applied',changed_paths:[plan.file],array_edits:9,limits:'No source/stamp/manifest/plan/level/native-history edit, check execution, gate, hash recertification or mathematical acceptance.'},null,2)+'\n');
