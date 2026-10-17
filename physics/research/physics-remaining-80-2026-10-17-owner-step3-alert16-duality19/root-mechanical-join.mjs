import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {splitFrontmatter,sourceSectionText} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const root=resolve('physics'),run='physics-remaining-80-2026-10-17',dir=`research/${run}-owner-step3-alert16-duality19`,R=x=>resolve(root,x),changes=[];
const sha=x=>createHash('sha256').update(x).digest('hex');
const state=JSON.parse(readFileSync(R(`.physics-autopilot/${run}/state.json`)));
if(Object.values(state.dispatches).some(d=>!d.endedAt&&d.covers?.some(x=>['19','72'].includes(x))))throw Error('owned writer live');
function item(id){const x=splitFrontmatter(readFileSync(R(`items/${id}.md`),'utf8'));return {...x,meta:yaml().parse(x.fm)};}
function edit(path,fn){const old=readFileSync(R(path)),doc=JSON.parse(old);fn(doc);const out=JSON.stringify(doc,null,2)+'\n';if(out!==old.toString()){const a=R(`${dir}/root-before-adoption/${path.split('/').at(-1)}`);writeFileSync(a,old,{flag:'wx'});writeFileSync(R(path),out);changes.push({path,before:sha(old),after:sha(out)});}}
edit(`research/${run}-batch-19.pages.json`,doc=>{const p=(Array.isArray(doc)?doc:doc.pages).find(p=>p.items.some(i=>i.id==='pthm-emg-source-test-backreaction-scope'));const row=p.items.find(i=>i.id==='pthm-emg-source-test-backreaction-scope'),x=item(row.id);row.deps=x.meta.deps;row.dependency_roles=x.meta.dependency_roles;});
edit(`research/${run}-batch-72.proof-contracts.json`,doc=>{const c=doc.contracts['pthm-tgr-static-constant-density-star'].citations[1];if(c.source!=='thm-tgr-constant-density-star-verified'||c.source_section!=='Statement')throw Error('unexpected quote');c.quote=sourceSectionText(item(c.source).body,'Statement').trim();});
const pages=new Map();for(const p of (await import('node:fs')).readdirSync(R('library'),{recursive:true})){if(!p.endsWith('.md'))continue;const x=splitFrontmatter(readFileSync(R(`library/${p}`),'utf8')),m=yaml().parse(x.fm);pages.set(m.page,m);}
const doc=JSON.parse(readFileSync(R(`research/${run}-batch-19.pages.json`))),p=doc.find(p=>p.id==='emg-mp03'),queue=[...p.requires],seen=new Set();while(queue.length){const x=queue.shift();if(seen.has(x))continue;seen.add(x);const m=pages.get(x);if(m)queue.push(...(m.requires??[]));}if(!seen.has('emg-mg01'))throw Error('new Hodge supplier page not reachable');
writeFileSync(R(`${dir}/root-mechanical-join.json`),JSON.stringify({at:new Date().toISOString(),changes,hodge_page_reachable:true,pages:[...seen],scope:'Source-owned dependency/role manifest join and exact reviewed supplier quote only; no mathematical source or acceptance stamp change.'},null,2)+'\n');console.log(JSON.stringify({changes,hodge_page_reachable:true}));
