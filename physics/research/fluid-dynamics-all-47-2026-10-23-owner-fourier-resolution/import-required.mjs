import {readFileSync,writeFileSync,existsSync,mkdirSync,chmodSync,renameSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-fourier-resolution`,root=process.cwd();
const hash=b=>createHash('sha256').update(b).digest('hex');
const receiptPath='research/math-imports.json',receiptRaw=readFileSync(receiptPath),receipt=JSON.parse(receiptRaw),source=receipt.source_root;
const pins=new Map(receipt.files.map(r=>[r.path,r]));
const seeds=['conservative-finite-volume-weak-limits','energy-stable-incompressible-navier-stokes-discretization','global-sensitivity-anova-and-sobol-estimation','invariant-domain-and-entropy-stable-conservative-schemes','mixed-finite-elements-and-stokes-stability'];
const sourcePlan=JSON.parse(readFileSync(join(source,'research/plan-spec.json'))),pages=new Map(sourcePlan.pages.map(p=>[p.id,p]));
const pending=new Map(),seenPages=new Set(),seenItems=new Set(),absentSourceCategories=new Set();
function include(path){
 const from=join(source,path),raw=readFileSync(from),sha256=hash(raw);
 if(pins.has(path)) {if(hash(readFileSync(path))!==pins.get(path).sha256)throw Error('Existing pin altered '+path);return;}
 if(existsSync(path))throw Error('Unpinned existing destination '+path);
 let meta;try{meta=readItem(from);}catch(error){throw Error(`Invalid required source ${path}: ${error.message}`);}
 if(!path.endsWith('/_category.md')&&meta.status!=='published')throw Error('Unpublished supplier '+path);
 if(meta.domain==='physics'||['postulate','physics-theorem','experiment','thought-experiment'].includes(meta.kind))throw Error('Physical source '+path);
 pending.set(path,{path,sha256,raw});
}
function item(id){
 if(seenItems.has(id))return;seenItems.add(id);
 const path=`items/${id}.md`;
 if(pins.has(path)){if(hash(readFileSync(path))!==pins.get(path).sha256)throw Error('Existing pin altered '+path);return;}
 include(path);const meta=readItem(join(source,path));
 for(const home of sourcePlan.pages.filter(p=>(p.items??[]).some(row=>(typeof row==='string'?row:row.id)===id)))page(home.id);
 for(const key of ['deps','justified_by','forward_refs','external_refs'])for(const dep of meta[key]??[])item(dep);
 for(const dep of Object.values(meta.relations??{}).flat())item(dep);
}
function page(id){
 if(seenPages.has(id))return;seenPages.add(id);
 const p=pages.get(id);if(!p)throw Error('Missing source page '+id);
 const path=`library/${p.category}/${id}.md`;
 if(!existsSync(path))include(path);
 const categoryPath=`library/${p.category}/_category.md`;
 if(existsSync(join(source,categoryPath)))include(categoryPath);else absentSourceCategories.add(categoryPath);
 const meta=readItem(join(source,path));
 for(const prerequisite of new Set([...(meta.requires??[]),...(meta.prerequisites??[])]))page(prerequisite);
}
for(const id of seeds)page(id);
const suppliers=JSON.parse(readFileSync('research/scaffold-refresh-2026-10-18/fluid-dynamics/supplier-map.json')).external_item_suppliers;
for(const supplier of suppliers)if(supplier.status==='published'&&existsSync(join(source,`items/${supplier.id}.md`)))item(supplier.id);
const rows=[...pending.values()].sort((a,b)=>a.path.localeCompare(b.path));
const report={version:1,run,operation:'add-only exact published prerequisite snapshots',seeds,pages_examined:[...seenPages],items_examined:seenItems.size,absent_source_categories:[...absentSourceCategories],additions:rows.map(({raw,...r})=>r),existing_pins_changed:false,originals_modified:false};
if(!process.argv.includes('--apply')){console.log(JSON.stringify(report,null,2));process.exit(0);}
const state=JSON.parse(readFileSync(`.physics-autopilot/${run}/state.json`));
if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Controller or native worker not drained');
if(!readFileSync(receiptPath).equals(receiptRaw))throw Error('Import receipt changed');
const phase=process.argv.includes('--closure')?'-closure':'';
const archive=`${base}/before-imports${phase}`;if(existsSync(archive))throw Error('Archive exists');mkdirSync(archive,{recursive:true});
for(const path of [receiptPath,'.gitignore'])writeFileSync(join(archive,path.split('/').at(-1)),readFileSync(path));
for(const r of rows)if(hash(readFileSync(join(source,r.path)))!==r.sha256||existsSync(r.path))throw Error('Changed import input '+r.path);
for(const r of rows){mkdirSync(dirname(r.path),{recursive:true});writeFileSync(r.path,r.raw,{flag:'wx'});chmodSync(r.path,0o444);receipt.files.push({path:r.path,sha256:r.sha256});}
const temp=receiptPath+'.'+process.pid+'.tmp';writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,receiptPath);
let ignore=readFileSync('.gitignore','utf8'),end='# END mathematical imports';if(ignore.split(end).length!==2)throw Error('Ignore marker ambiguity');ignore=ignore.replace(end,rows.map(r=>'/'+r.path+'\n').join('')+end);writeFileSync('.gitignore',ignore);
report.applied_at=new Date().toISOString();writeFileSync(`${base}/imports-application${phase}.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({added:rows.length,pages:rows.filter(r=>r.path.startsWith('library/')).length}));
