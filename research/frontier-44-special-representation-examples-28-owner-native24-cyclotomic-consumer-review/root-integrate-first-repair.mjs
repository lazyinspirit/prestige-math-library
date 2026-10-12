import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {runPages,dependencyLevels} from '../../tools/item-dependency-levels.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const dir=`research/${run}-owner-native24-cyclotomic-consumer-review`;
const sha=b=>createHash('sha256').update(b).digest('hex');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const proposal=read(`${dir}/sealed-first-repair-proposal.json`);
const candidateRaw=readFileSync(proposal.candidate.path);
if(sha(candidateRaw)!==proposal.candidate.sha256)throw Error('Candidate changed');
const guards=read(proposal.input_guards.path);
if(sha(readFileSync(proposal.input_guards.path))!==proposal.input_guards.sha256)throw Error('Guard manifest changed');
for(const g of guards.guards){const actual=existsSync(g.path)?sha(readFileSync(g.path)):null;if(actual!==g.sha256)throw Error(`Input drift: ${g.path}`);}
const manifest=`research/${run}-batch-24.pages.json`,coverage=`research/${run}-batch-24.coverage.json`,planPath='research/plan-spec.json';
const old=read(manifest),pages=JSON.parse(candidateRaw),plan=read(planPath);
const original=new Map(old.flatMap(p=>p.items.map(i=>[i.id,{item:i,page:p.id}])));
for(const [id,b] of original){const p=pages.find(p=>p.items.some(i=>i.id===id));const i=p?.items.find(i=>i.id===id);if(!i||p.id!==b.page||i.kind!==b.item.kind||i.title!==b.item.title)throw Error(`Original identity changed: ${id}`);}
if(pages.flatMap(p=>p.items).length!==47)throw Error('Inventory mismatch');
for(const p of pages)for(const i of p.items)for(const key of ['research_only','registration_status','contract_sha256','proof_body_sha256'])delete i[key];
const needed='cores-quotients-and-blocks-of-symmetric-groups';
if(!pages[0].requires.includes(needed))pages[0].requires.push(needed);
for(const p of pages){const canonical=plan.pages.find(x=>x.id===p.id);if(!canonical)throw Error(`Missing plan page ${p.id}`);if(canonical.order!==p.order)throw Error('Page order drift');canonical.requires=[...p.requires];}
const all=runPages(root,run).filter(p=>p.batch!=='24').concat(pages.map(p=>({...p,batch:'24'})));
const graph=dependencyLevels(all,{validateLabels:false});
const structural=graph.errors.filter(e=>!e.startsWith('ariki-categorification-and-graded-decomposition-numbers'));
if(structural.length)throw Error(structural.join('\n'));
const otherDrift=[...graph.items].filter(([id,{item,page}])=>page.batch!=='24'&&item.dependency_level!==graph.levels.get(id));
if(otherDrift.length)throw Error(`Other levels changed: ${otherDrift.map(x=>x[0])}`);
for(const p of pages){for(const i of p.items)i.dependency_level=graph.levels.get(i.id);p.items.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));}
const cov=read(coverage);
for(const p of pages){const c=cov.pages.find(c=>c.page===p.id);if(!c)throw Error(`Missing coverage ${p.id}`);c.canonical??=[];for(const i of p.items)if(!original.has(i.id))c.canonical.push({name:i.title,disposition:'included',item:i.id});}
const archive=`${dir}/root-first-repair-integration`;mkdirSync(archive);
const outputs=[manifest,coverage,planPath];const before=[];
for(const p of outputs){const raw=readFileSync(p);const out=`${archive}/${p.split('/').pop()}.before`;writeFileSync(out,raw,{flag:'wx'});before.push({path:p,sha256:sha(raw),before_file:out});}
const serialize=x=>JSON.stringify(x,null,2)+'\n';
writeFileSync(manifest,serialize(pages));writeFileSync(coverage,serialize(cov));writeFileSync(planPath,serialize(plan));
const mutable=new Set(outputs);
for(const g of guards.guards)if(!mutable.has(g.path)){const actual=existsSync(g.path)?sha(readFileSync(g.path)):null;if(actual!==g.sha256)throw Error(`Postwrite input drift: ${g.path}`);}
const receipt={version:1,run,at:new Date().toISOString(),action:'guarded-native24-first-coherent-repair-integration',stable_scope:proposal.stable_scope,repair_round:1,maximum_rounds:2,reviewer:proposal.reviewer,candidate:proposal.candidate,before,after:outputs.map(path=>({path,sha256:sha(readFileSync(path))})),mechanical_changes:['Removed research-packet-only metadata fields','Recomputed exact run dependency levels and sorted native24 items','Added actual native21 prerequisite to A-page metadata and matching plan page','Added33 local helper dispositions to optional canonical coverage list'],subjects:pages.flatMap(p=>p.items.map(i=>({id:i.id,page:p.id,dependency_level:i.dependency_level}))),unchanged_nonoutput_guards:guards.guards.length-guards.guards.filter(g=>mutable.has(g.path)).length,native_readiness_written:false,gate_attempt:false,canonical_item_files_edited:false,same_reviewer_final_afterbinding_required:true};
writeFileSync(`${archive}/registration.json`,serialize(receipt),{flag:'wx'});
console.log(JSON.stringify({subjects:47,pages:2,before:before.map(x=>x.path),receipt:`${archive}/registration.json`,ready:false}));
