// Read-only current authored frontier prerequisite metadata collection.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {split,yaml} from '../../tools/physics-support/pathway-lib.mjs';
import {runPages} from '../../tools/physics-support/item-dependency-levels.mjs';
const run='physics-em-sr-40-2026-10-08', repo=path.resolve('physics');
const plan=JSON.parse(fs.readFileSync(path.join(repo,'research/plan-spec.json'),'utf8'));
const imports=JSON.parse(fs.readFileSync(path.join(repo,'research/math-imports.json'),'utf8'));
const pins=new Map(imports.files.map(x=>[x.path,x.sha256]));
const pages=runPages(repo,run), owned=new Set(pages.flatMap(p=>p.items.map(i=>i.id)));
const home=new Map(), published=new Map();
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
 const file=path.join(dir,entry.name);
 if(entry.isDirectory()){walk(file);continue;}
 if(!entry.name.endsWith('.md')||entry.name.startsWith('_'))continue;
 const raw=fs.readFileSync(file), fm=yaml().parse(split(raw.toString()).fm);
 if(!fm?.page)continue;
 const rel=path.relative(repo,file), pin=pins.get(rel);
 if(pin&&fm.status==='published')published.set(fm.page,{file:rel,sha256:crypto.createHash('sha256').update(raw).digest('hex'),pin,fm});
 for(const id of [...(fm.items??[]),...(fm.examples??[])])if(!home.has(id))home.set(id,fm.page);
}}
walk(path.join(repo,'library'));
const planIds=new Set(plan.pages.map(p=>p.id)), missing=new Map(), uses=[];
for(const page of pages)for(const row of page.items){
 const file=path.join(repo,'items',`${row.id}.md`), fm=yaml().parse(split(fs.readFileSync(file,'utf8')).fm);
 for(const dep of [...(fm.deps??[]),...(fm.justified_by??[])]){
  if(owned.has(dep))continue;
  const supplierHome=home.get(dep);
  if(!supplierHome)throw Error(`Missing authored supplier home ${row.id} -> ${dep}`);
  uses.push({page:page.id,batch:page.batch,consumer:row.id,supplier:dep,home:supplierHome});
  if(!planIds.has(supplierHome)){
   const bound=published.get(supplierHome);
   if(!bound||bound.sha256!==bound.pin)throw Error(`Unpinned/unpublished home ${supplierHome}`);
   missing.set(supplierHome,{id:supplierHome,title:bound.fm.title,kind:'P',category:bound.file.split('/')[1],library:'mathematics',requires:[],items:[],order:0,file:bound.file,sha256:bound.sha256});
  }
 }
}
const result={run,scope:'Read-only metadata resolution; no mathematical acceptance',missingPublishedHomes:[...missing.values()],uses};
fs.writeFileSync(path.join(repo,'research',`${run}-step3b-current-external-home-proposal.json`),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({pages:pages.length,owned:owned.size,externalEdges:uses.length,missingPublishedHomes:[...missing.keys()]}));
