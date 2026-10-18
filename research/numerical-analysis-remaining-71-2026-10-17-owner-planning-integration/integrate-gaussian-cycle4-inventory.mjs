import {readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17';
const base=`research/${run}-owner-planning-integration`;
const receipt=`${base}/gaussian-cycle4-prerequisite-inventory.json`;
const archive=`${base}/gaussian-cycle4-before-native-author`;
if(existsSync(receipt)||existsSync(archive))throw Error('Preserve existing integration evidence');
const mf=`research/${run}-batch-11.pages.json`, before=readFileSync(mf,'utf8'), pages=JSON.parse(before);
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(state.stage!=='1-scaffold'||Object.values(state.dispatches).some(d=>d.stage==='1-scaffold'&&d.covers?.includes('11')&&!d.endedAt))throw Error('Wrong stage or active batch writer');
if(pages.length!==2||pages.flatMap(p=>p.items).length!==19)throw Error('Original batch inventory guard');
const inventory=JSON.parse(readFileSync(`research/${run}-ROOT-gaussian-planning-cycle4/proposed-inventory.json`,'utf8'));
if(inventory.new_items.length!==2||inventory.new_pair_required!==false)throw Error('Proposal inventory guard');
const sha=s=>createHash('sha256').update(s).digest('hex');
const proposals=inventory.new_items.map(row=>{const raw=readFileSync(row.proposed_file,'utf8');const m=yaml().parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);if(m.id!==row.id||JSON.stringify(m.deps)!==JSON.stringify(row.deps)||existsSync(`items/${m.id}.md`))throw Error('Proposal identity or existing-item guard');return{...row,raw_sha256:sha(raw),metadata:m};});
const all=new Map();
for(const f of readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)))for(const p of JSON.parse(readFileSync(`research/${f}`,'utf8')))for(const row of p.items){if(all.has(row.id))throw Error('Duplicate declared item');all.set(row.id,row);}
for(const p of proposals){if(all.has(p.id))throw Error('Already declared');all.set(p.id,p.metadata);}
const theorem=pages.flatMap(p=>p.items).find(i=>i.id==='thm-gaussian-rangefinder-expected-spectral-error');
if(!theorem)throw Error('Base theorem missing');
const direct='lem-normalized-complex-rangefinder-direct-spectral-expectation';
theorem.deps=[...new Set([...theorem.deps,direct])];all.set(theorem.id,theorem);
const levels=new Map(),busy=new Set();
function level(id){if(levels.has(id))return levels.get(id);if(busy.has(id))throw Error('Cycle '+id);busy.add(id);const ds=all.get(id).deps??[];for(const d of ds)if(!all.has(d)&&!existsSync(`items/${d}.md`))throw Error('Missing prerequisite '+d);const local=ds.filter(d=>all.has(d));const n=local.length?1+Math.max(...local.map(level)):0;busy.delete(id);levels.set(id,n);return n;}
for(const id of all.keys())level(id);
const added=proposals.map(p=>({id:p.id,kind:p.kind,title:p.title,deps:p.deps,dependency_level:level(p.id),strategy:`Fully author the complete approved local proof from ${p.proposed_file}; preserve Countable Choice, all admissible parameters, exact field normalization and zero/rank-deficient cases.`}));
pages[0].items.push(...added);
for(const page of pages){for(const row of page.items)row.dependency_level=level(row.id);page.items.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));}
const paths=[mf,...['proof-contracts','coverage','cross-batch-dependencies'].map(x=>`research/${run}-batch-11.${x}.json`),...JSON.parse(before).flatMap(p=>p.items.map(i=>`items/${i.id}.md`)),...pages.map(p=>`library/${p.category}/${p.id}.md`)];
for(const path of paths){if(!existsSync(path))throw Error('Missing archive input '+path);const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(path),{flag:'wx'});}
if(readFileSync(mf,'utf8')!==before)throw Error('Concurrent manifest change');
writeFileSync(mf,JSON.stringify(pages,null,2)+'\n');
writeFileSync(receipt,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),original_pairs_retained:71,original_batch_items_retained:19,added,proposals:proposals.map(({metadata,...p})=>p),page_counts:pages.map(p=>({id:p.id,count:p.items.length})),archive,all_declared_prerequisites_present:true,acyclic:true,canonical_new_items_written:false,native_execution_or_acceptance_claimed:false,root_mathematical_reading:['both full typed proposals','complete planner PROOF.md','supplier independent rank-shift-proof-check.md'],native_independent_reviews_and_gates_owed:true},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({added:added.map(i=>({id:i.id,level:i.dependency_level})),pages:pages.map(p=>({id:p.id,count:p.items.length})),total_declared_frontier_items:all.size}));
