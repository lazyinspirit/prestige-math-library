import {readFileSync,writeFileSync,existsSync,readdirSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`;
const mf=`research/${run}-batch-41.pages.json`,before=readFileSync(mf,'utf8'),pages=JSON.parse(before);
const receipt=`${base}/pressure-cycle4-prerequisite-inventory.json`,archive=`${base}/pressure-cycle4-before-native-author`;
if(existsSync(receipt)||existsSync(archive))throw Error('Preserve existing integration');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(state.stage!=='1-scaffold'||Object.values(state.dispatches).some(d=>d.stage==='1-scaffold'&&d.covers?.includes('41')&&!d.endedAt))throw Error('Wrong stage or active batch41 writer');
if(pages.length!==2||pages[0].items.length!==19||pages[1].items.length!==5)throw Error('Original inventory guard');
const dir=`research/${run}-ROOT-mini-pressure-supplier-cycle4/proposed-items`,sha=s=>createHash('sha256').update(s).digest('hex');
const proposals=readdirSync(dir).filter(f=>f.endsWith('.md')&&f!=='INVENTORY.md').map(f=>{const path=`${dir}/${f}`,raw=readFileSync(path,'utf8'),m=yaml().parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);if(existsSync(`items/${m.id}.md`))throw Error('Not genuinely new '+m.id);return{path,raw_sha256:sha(raw),metadata:m};});
if(proposals.length!==5||proposals.filter(p=>p.metadata.kind==='counterexample').length!==1)throw Error('Stable five-item proposal guard');
const all=new Map();for(const f of readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)))for(const page of JSON.parse(readFileSync(`research/${f}`,'utf8')))for(const item of page.items){if(all.has(item.id))throw Error('Duplicate item');all.set(item.id,item);}
for(const{metadata:m}of proposals){if(all.has(m.id))throw Error('Already declared');all.set(m.id,m);}
const levels=new Map(),busy=new Set();function level(id){if(levels.has(id))return levels.get(id);if(busy.has(id))throw Error('Cycle '+id);busy.add(id);const ds=all.get(id).deps??[];for(const d of ds)if(!all.has(d)&&!existsSync(`items/${d}.md`))throw Error('Missing prerequisite '+d);const local=ds.filter(d=>all.has(d));const n=local.length?1+Math.max(...local.map(level)):0;busy.delete(id);levels.set(id,n);return n;}for(const id of all.keys())level(id);
const added=proposals.map(({metadata:m,path})=>({id:m.id,kind:m.kind,title:m.title,deps:m.deps,dependency_level:level(m.id),...(m.generation?{generation:m.generation}:{}),strategy:`Fully author the complete locally proved proposal at ${path}; preserve exact original domain, force, initial-data and mesh scope. The generated counterexample is contextual, never a logical supplier.`}));
for(const row of added)pages[row.kind==='counterexample'?1:0].items.push(row);
for(const page of pages){for(const row of page.items)row.dependency_level=level(row.id);page.items.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));}
for(const [id,row]of all)if((row.deps??[]).includes('cex-na-polyhedral-energy-ns-pressure-endpoint'))throw Error('Generated counterexample used as logical supplier '+id);
const paths=[mf,...['proof-contracts','coverage','cross-batch-dependencies'].map(x=>`research/${run}-batch-41.${x}.json`),...JSON.parse(before).flatMap(p=>p.items.map(i=>`items/${i.id}.md`)),...pages.map(p=>`library/${p.category}/${p.id}.md`)];
for(const path of paths){const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(path),{flag:'wx'});}
if(readFileSync(mf,'utf8')!==before)throw Error('Concurrent manifest change');
writeFileSync(`${mf}.owner-cycle4.tmp`,JSON.stringify(pages,null,2)+'\n',{flag:'wx'});renameSync(`${mf}.owner-cycle4.tmp`,mf);
writeFileSync(receipt,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),original_pairs_retained:71,original_batch_items_retained:24,added,proposals:proposals.map(({metadata:m,...p})=>({...p,id:m.id,deps:m.deps})),page_counts:pages.map(p=>({id:p.id,count:p.items.length})),archive,all_new_prerequisite_closure_present_and_owned_or_published:'cycle4-new-prerequisite-closure-inspection.json',acyclic:true,canonical_new_items_written:false,native_execution_or_acceptance_claimed:false,mathematical_disposition:'Exact-square generic-pressure refutation independently read; original smooth instantaneous pressure error remains held.',native_independent_reviews_and_gates_owed:true},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({added:added.map(i=>({id:i.id,level:i.dependency_level})),pages:pages.map(p=>({id:p.id,count:p.items.length})),total_declared_frontier_items:all.size}));
