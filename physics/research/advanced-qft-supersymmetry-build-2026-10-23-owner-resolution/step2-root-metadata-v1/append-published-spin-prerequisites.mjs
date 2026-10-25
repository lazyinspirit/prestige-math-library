// Root additive import: never write existing snapshots or original sources.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {readItem,PHYSICS_KINDS} from '../../../../tools/physics-support/physics-content.mjs';
const root=process.cwd(),math=path.dirname(root),run='advanced-qft-supersymmetry-build-2026-10-23';
const receiptPath=path.join(root,'research/math-imports.json'),digest=b=>crypto.createHash('sha256').update(b).digest('hex');
const raw=fs.readFileSync(receiptPath),receipt=JSON.parse(raw),oldRows=JSON.stringify(receipt.files);
if(path.resolve(receipt.source_root)!==math)throw Error('Unexpected original root');
const state=JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`));
if(!state.paused||state.stage!=='2-scope-review'||Object.values(state.dispatches).some(r=>r.startedAt&&!r.endedAt))throw Error('Paused drained Step2 required');
const head=execFileSync('git',['rev-parse','HEAD'],{cwd:math,encoding:'utf8'}).trim();
const pins=new Map(receipt.files.map(row=>[row.path,row]));
for(const row of receipt.files)if(digest(fs.readFileSync(path.join(root,row.path)))!==row.sha256)throw Error(`Altered prior pin ${row.path}`);
const seen=new Set(),additions=[];
function visit(id){
 if(seen.has(id))return;seen.add(id);
 const rel=`items/${id}.md`,dest=path.join(root,rel);
 if(fs.existsSync(dest)){if(!pins.has(rel))throw Error(`Prerequisite unexpectedly locally authored: ${id}`);return;}
 const file=path.join(math,rel),stat=fs.lstatSync(file);
 if(!stat.isFile()||stat.isSymbolicLink()||fs.realpathSync(file)!==file)throw Error('Nonregular original');
 const item=readItem(file),bytes=fs.readFileSync(file);
 if(item.id!==id||item.status!=='published'||item.domain==='physics'||PHYSICS_KINDS.has(item.kind))throw Error(`Ineligible original ${id}`);
 const committed=execFileSync('git',['show',`${head}:${rel}`],{cwd:math,maxBuffer:8*1024*1024});
 if(!committed.equals(bytes))throw Error(`Uncommitted source ${id}`);
 for(const dep of [...(item.deps??[]),...(item.justified_by??[])])visit(dep);
 additions.push({path:rel,sha256:digest(bytes),git_blob:execFileSync('git',['rev-parse',`${head}:${rel}`],{cwd:math,encoding:'utf8'}).trim(),page:item.page,bytes});
}
visit('thm-complex-spinc-thom-orientation');
if(additions.length!==17)throw Error(`Expected exact17 missing carriers, got ${additions.length}`);
const report={version:1,run,reviewer:'/root',operation:'additive published prerequisite closure; no existing pins changed',base_commit:head,prior_count:receipt.files.length,prior_receipt_sha256:digest(raw),additions:additions.map(({bytes,...row})=>row),existing_pin_bytes_verified:true,original_sources_unchanged:true,native_acceptance:false};
if(process.argv.includes('--write')){
 if(digest(fs.readFileSync(receiptPath))!==report.prior_receipt_sha256)throw Error('Receipt raced');
 for(const row of additions)fs.writeFileSync(path.join(root,row.path),row.bytes,{flag:'wx',mode:0o444});
 receipt.files.push(...additions.map(({path,sha256})=>({path,sha256})));
 if(JSON.stringify(receipt.files.slice(0,report.prior_count))!==oldRows)throw Error('Prior rows changed');
 const temp=receiptPath+'.append-current';fs.writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});fs.renameSync(temp,receiptPath);
 report.current_count=receipt.files.length;report.current_receipt_sha256=digest(fs.readFileSync(receiptPath));
 fs.writeFileSync(`research/${run}-owner-resolution/step2-root-metadata-v1/additive-spin-import.json`,JSON.stringify(report,null,2)+'\n');
}
console.log(JSON.stringify({...report,additions:report.additions.map(row=>row.path)},null,2));
