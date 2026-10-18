import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17';
const base=`research/${run}-owner-planning-integration`;
const path=`research/${run}-batch-71.pages.json`;
const before=readFileSync(path,'utf8'), pages=JSON.parse(before);
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(Object.values(state.dispatches).some(x=>x.stage==='1-scaffold'&&x.covers.includes('71')&&!x.endedAt))throw Error('71 writer live');
if(pages.length!==2||pages[0].items.length!==23||pages[1].items.length!==5)throw Error('original inventory guard');
const dirs=[`research/${run}-ROOT-hjb-alexandrov-supplier-cycle1/proposed-items`,`research/${run}-ROOT-hjb-sums-supplier-cycle1/proposed/items`,`research/${run}-ROOT-hjb-comparison-supplier-cycle1/proposed/items`];
const sha=x=>createHash('sha256').update(x).digest('hex');
const proposals=dirs.flatMap(dir=>readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>{const p=`${dir}/${f}`,raw=readFileSync(p,'utf8');const m=yaml().parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);return {path:p,raw_sha256:sha(raw),metadata:m};}));
if(proposals.length!==11||new Set(proposals.map(x=>x.metadata.id)).size!==11)throw Error('new inventory guard');
const all=new Map();
for(const f of readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)))for(const page of JSON.parse(readFileSync(`research/${f}`,'utf8')))for(const item of page.items){if(all.has(item.id))throw Error('duplicate existing ID');all.set(item.id,item);}
for(const {metadata:m} of proposals){if(all.has(m.id)||existsSync(`items/${m.id}.md`))throw Error(`not genuinely missing: ${m.id}`);if(!Array.isArray(m.deps))throw Error('deps missing');all.set(m.id,m);}
const levels=new Map(),busy=new Set();
function level(id){if(levels.has(id))return levels.get(id);if(busy.has(id))throw Error('dependency cycle '+id);busy.add(id);const deps=all.get(id).deps??[];for(const d of deps)if(!all.has(d)&&!existsSync(`items/${d}.md`))throw Error('missing undeclared external supplier '+d);const internal=deps.filter(d=>all.has(d));const result=internal.length?1+Math.max(...internal.map(level)):0;busy.delete(id);levels.set(id,result);return result;}
for(const id of all.keys())level(id);
const newRows=proposals.map(({metadata:m})=>({id:m.id,kind:m.kind,title:m.title,deps:m.deps,dependency_level:level(m.id),strategy:'Author the complete local argument from the assigned ROOT HJB first-cycle packet; preserve its exact assumptions and proved prerequisite interfaces.'})).sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));
pages[0].items.push(...newRows);pages[0].items.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));
const backup=`${base}/batch71-before-prerequisite-inventory.json`,receipt=`${base}/hjb-combined-prerequisite-inventory.json`;
if(existsSync(backup)||existsSync(receipt))throw Error('already integrated');
if(readFileSync(path,'utf8')!==before)throw Error('concurrent manifest change');
writeFileSync(backup,before,{flag:'wx'});
writeFileSync(path,JSON.stringify(pages,null,2)+'\n');
writeFileSync(receipt,JSON.stringify({run,at:new Date().toISOString(),original_pairs_retained:71,original_batch71_items_retained:28,added:newRows,proposals:proposals.map(({metadata:m,...x})=>({...x,id:m.id,deps:m.deps})),page_counts:pages.map(p=>({id:p.id,items:p.items.length,actually_present:existsSync(`library/${p.category}/${p.id}.md`)})),all_proposed_item_edges_acyclic:true,canonical_new_proofs_written:false,mathematical_acceptance_claimed:false,native_gates_owed:true},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({new_items:newRows.map(x=>[x.id,x.dependency_level]),A:pages[0].items.length,B:pages[1].items.length,total_frontier:all.size}));
