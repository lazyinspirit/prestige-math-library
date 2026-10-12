import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';

const run='frontier-44-special-representation-examples-28';
const out=path.dirname(new URL(import.meta.url).pathname);
const apply=process.argv.includes('--apply');
const files=process.argv.slice(2).filter(x=>x!=='--apply');
if(files.length!==3)throw Error('Require exactly three explicitly reviewed integration packets');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const stable=new Map(),staged=new Map(),conflicts=[],origins=[];
function load(p){
  if(!stable.has(p)){const bytes=fs.readFileSync(p);stable.set(p,bytes);staged.set(p,bytes);}
  return stable.get(p);
}
function pointerKeys(pointer){
  if(typeof pointer!=='string'||!pointer.startsWith('/'))throw Error(`Invalid pointer ${pointer}`);
  return pointer.slice(1).split('/').map(x=>x.replace(/~1/g,'/').replace(/~0/g,'~'));
}
const packets=files.map(p=>({path:p,raw_sha256:hash(load(p)),data:JSON.parse(load(p))}));
for(const p of packets){
  if(p.data.run!==run||(p.data.holds??[]).length)throw Error(`Unresolved holds or wrong run ${p.path}`);
  for(const op of p.data.source_operations??[]){
    const before=load(op.path),after=load(op.after_path);
    if(hash(before)!==op.before_raw_sha256||hash(after)!==op.after_raw_sha256)throw Error(`Source drift ${op.path}`);
    if(!staged.get(op.path).equals(before)&&!staged.get(op.path).equals(after))throw Error(`Conflicting source proposals ${op.path}`);
    staged.set(op.path,after);origins.push({packet:p.path,kind:'source',...op});
  }
}
const operations=packets.flatMap(p=>(p.data.json_operations??[]).map(op=>({...op,packet:p.path})));
const failures=fs.readFileSync(path.join(out,'../restored-root-integration/proof-contract-errors.txt'),'utf8').split('\n').filter(line=>/^ERROR boundary-/.test(line));
const missing=failures.filter(line=>{
  const match=/^ERROR [^ ]+ \[([^\]]+)\]: ([a-z-]+)/.exec(line);
  if(!match)throw Error(`Cannot parse exact boundary diagnostic ${line}`);
  const [,id,axis]=match;
  return !operations.some(op=>op.pointer.startsWith(`/contracts/${id}/boundaries/`) && (op.after?.case===axis||op.before?.case===axis));
});
if(missing.length)throw Error(`Missing exact native failures: ${JSON.stringify(missing)}`);
const edited=new Map();
for(const op of operations){
  if(!op.before_file_raw_sha256)throw Error(`Missing file guard ${op.path} ${op.pointer}`);
  if(hash(load(op.path))!==op.before_file_raw_sha256)throw Error(`JSON carrier drift ${op.path}`);
  if(!edited.has(op.path))edited.set(op.path,JSON.parse(load(op.path)));
  const doc=edited.get(op.path),keys=pointerKeys(op.pointer);let parent=doc;
  for(const key of keys.slice(0,-1)){if(!Object.hasOwn(parent,key))throw Error(`Missing pointer ${op.path} ${op.pointer}`);parent=parent[key];}
  const key=keys.at(-1),current=parent[key];
  if(JSON.stringify(current)!==JSON.stringify(op.before)){
    if(JSON.stringify(current)===JSON.stringify(op.after))continue;
    conflicts.push({path:op.path,pointer:op.pointer,packet:op.packet,proposal_origin:op.proposal_origin,current,expected:op.before,proposed:op.after});continue;
  }
  parent[key]=op.after;origins.push({packet:op.packet,kind:'json',path:op.path,pointer:op.pointer,proposal_origin:op.proposal_origin});
}
for(const[p,d]of edited)staged.set(p,Buffer.from(JSON.stringify(d,null,2)+'\n'));
// A row's mathematical source seal must describe the actual final staged item.
for(const[p,d]of edited){
  for(const[id,c]of Object.entries(d.contracts??{})){
    const ip=`items/${id}.md`;if(!fs.existsSync(ip))continue;
    const text=(staged.get(ip)??load(ip)).toString();
    for(const row of c.boundaries??[]){
      const review=row.template_review;if(!review?.upheld)continue;
      const semantic=hash(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}));
      if(review.item_sha256!==itemHashGuard(text)||review.row_sha256!==semantic){
        conflicts.push({path:p,pointer:`${id}/boundaries/${row.case}`,kind:'stale-template-review',expected_item_guard:itemHashGuard(text),actual_item_guard:review.item_sha256,expected_row_guard:semantic,actual_row_guard:review.row_sha256});
      }
    }
  }
}
const changed=[...staged].filter(([p,b])=>!b.equals(stable.get(p))).map(([p,b])=>({path:p,before_raw_sha256:hash(stable.get(p)),after_raw_sha256:hash(b)}));
fs.mkdirSync(out,{recursive:true});
const report={version:1,run,at:new Date().toISOString(),packets:packets.map(({data,...p})=>p),changed,operations:origins,conflicts,applied:false};
fs.writeFileSync(path.join(out,'dry-run.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({changed:changed.length,operations:origins.length,conflicts:conflicts.length,apply}));
if(conflicts.length)process.exit(1);
if(!apply)process.exit(0);
if(fs.existsSync(path.join(out,'applied.json')))throw Error('Existing application receipt; inspect rather than overwrite');
const state=JSON.parse(fs.readFileSync(`.autopilot/${run}/state.json`));
if(state.run!==run||state.stage!=='3b-author'||!state.paused)throw Error('Require matching paused Step3b');
if(Object.values(state.dispatches).some(d=>d.status==='running'))throw Error('Native writers are still running');
for(const[p,b]of stable)if(!fs.readFileSync(p).equals(b))throw Error(`Midpass mutation ${p}`);
for(const row of changed){
  const archive=path.join(out,'before',row.path);fs.mkdirSync(path.dirname(archive),{recursive:true});
  fs.writeFileSync(archive,stable.get(row.path),{flag:'wx'});
}
for(const row of changed)fs.writeFileSync(row.path,staged.get(row.path));
report.applied=true;report.applied_at=new Date().toISOString();
fs.writeFileSync(path.join(out,'applied.json'),JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log('Integrated guarded sources and JSON fields; no engine state or gate receipts changed');
