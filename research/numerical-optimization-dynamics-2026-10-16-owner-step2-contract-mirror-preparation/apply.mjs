// Root-only, prepared but NOT executed by its preparer. No checks or source writes.
import * as fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const base=path.dirname(fileURLToPath(import.meta.url));
const run='numerical-optimization-dynamics-2026-10-16';
const root=process.cwd();
const read=p=>fs.readFileSync(path.resolve(root,p));
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const assert=(v,m)=>{if(!v)throw Error(m);};
const at=process.argv.indexOf('--authorization');
assert(at>=0 && process.argv[at+1],'Explicit root authorization JSON required.');
const authorizationPath=process.argv[at+1],auth=JSON.parse(read(authorizationPath));
assert(auth.version===1 && auth.run===run && auth.authorized_by==='root'
 && auth.action==='apply-exact-step2-contract-mirrors' && auth.all_native_and_owner_workers_drained===true,
 'Missing root authority or actual owner/native worker drain.');
const planRaw=fs.readFileSync(path.join(base,'edits.json')),plan=JSON.parse(planRaw);
assert(auth.approved_plan===path.relative(root,path.join(base,'edits.json')) && auth.approved_field_count===11,
 'Root must approve this exact reviewable plan and all eleven fields.');
assert(plan.edits.length===11 && plan.run===run,'Unexpected prepared plan scope.');
function boundary(){
 const s=JSON.parse(read(`.autopilot/${run}/state.json`));
 assert(s.run===run && s.paused===true && /^2-/.test(s.stage),'Run must be paused at Step2.');
 assert(Object.values(s.dispatches??{}).every(d=>!d.startedAt || d.endedAt),'Native workers are not drained.');
}
boundary();
for(const guard of [...plan.source_guards,...plan.metadata_guards]){
 assert(read(guard.path).equals(read(guard.exact_before_file)),`Actual input changed since preparation: ${guard.path}`);
}
const allowed=new Set([4,5,18].map(b=>`research/${run}-batch-${b}.proof-contracts.json`));
const outputs=new Map();
for(const file of allowed)outputs.set(file,JSON.parse(read(file)));
for(const edit of plan.edits){
 assert(allowed.has(edit.file),'Unapproved metadata file.');
 const [contracts,id,section,index,field]=edit.pointer;
 assert(contracts==='contracts' && Number.isInteger(index) && index>=0
  && ((section==='derivations' && ['claim','inputs'].includes(field))
    || (section==='citations' && field==='uses')
    || (id==='alg-richardson-stationary-iteration' && section==='boundaries' && field==='evidence')),
  'Unapproved contract field; no quotations, declarations, scope, stamps or manifests may change.');
 let parent=outputs.get(edit.file);
 for(const key of edit.pointer.slice(0,-1)){assert(parent && key in parent,'Unknown JSON pointer.');parent=parent[key];}
 assert(eq(parent[field],edit.before),`Old field no longer matches: ${edit.file}:${edit.pointer.join('/')}`);
 parent[field]=edit.after;
}
const output=auth.output_directory;
assert(typeof output==='string' && output.startsWith(`research/${run}-`) && !output.includes('..')
 && !fs.existsSync(output),'Fresh durable research output directory required.');
fs.mkdirSync(output);
fs.writeFileSync(path.join(output,'authorization.json'),read(authorizationPath),{flag:'wx'});
fs.writeFileSync(path.join(output,'exact-approved-plan.json'),planRaw,{flag:'wx'});
for(const file of plan.completion_references){
 fs.writeFileSync(path.join(output,path.basename(path.dirname(file))+'-'+path.basename(file)),read(file),{flag:'wx'});
}
const journal=[];
for(const guard of plan.metadata_guards){
 boundary();
 // Every source and metadata guard is checked again before each write. Already
 // changed metadata files are compared with their exact expected output instead.
 for(const g of plan.source_guards)assert(read(g.path).equals(read(g.exact_before_file)),`Source changed: ${g.path}`);
 const before=read(guard.path);assert(before.equals(read(guard.exact_before_file)),`Metadata changed: ${guard.path}`);
 const after=Buffer.from(JSON.stringify(outputs.get(guard.path),null,2)+'\n');
 const stem=path.basename(guard.path);
 fs.writeFileSync(path.join(output,stem+'.before'),before,{flag:'wx'});
 fs.writeFileSync(path.join(output,stem+'.after'),after,{flag:'wx'});
 assert(read(guard.path).equals(before),'Concurrent metadata edit.');
 fs.writeFileSync(guard.path,after);
 assert(read(guard.path).equals(after),'Metadata write differs.');
 journal.push({at:new Date().toISOString(),path:guard.path,field_edits:plan.edits.filter(e=>e.file===guard.path)});
 fs.writeFileSync(path.join(output,'journal.json'),JSON.stringify(journal,null,2)+'\n');
}
fs.writeFileSync(path.join(output,'completion.json'),JSON.stringify({run,kind:'exact-step2-contract-field-mirrors-applied',at:new Date().toISOString(),changed_paths:[...allowed],field_count:plan.edits.length,source_changed:false,limits:'Metadata mirrors only; no check execution, hash recertification, gates, runtime writes, native acceptance or publication evidence.'},null,2)+'\n',{flag:'wx'});
