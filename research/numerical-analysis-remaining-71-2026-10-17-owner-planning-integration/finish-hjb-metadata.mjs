import{readFileSync,writeFileSync,mkdirSync,existsSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{splitFrontmatter,sourceSectionText}from'../../tools/facts-block.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/hjb-final-before`,file=ext=>`research/${run}-batch-71.${ext}.json`;
if(existsSync(archive))throw Error('already integrated');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));if(Object.values(state.dispatches).some(d=>d.stage==='1-scaffold'&&!d.endedAt))throw Error('native author live');
for(const lane of['alexandrov','sums','comparison'])if(!existsSync(`research/${run}-ROOT-hjb-${lane}-supplier-cycle2/REPORT.md`))throw Error('final report missing');
const pages=JSON.parse(readFileSync(file('pages'),'utf8')),ids=pages.flatMap(p=>p.items.map(i=>i.id));
for(const p of [...['pages','proof-contracts','coverage','cross-batch-dependencies'].map(file),...ids.map(id=>`items/${id}.md`),...pages.map(p=>`library/${p.category}/${p.id}.md`)]){const dest=`${archive}/${p}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(p),{flag:'wx'});}
const model='items/def-na-periodic-diagonal-controlled-diffusion-hjb-problem.md',a=`library/${pages[0].category}/${pages[0].id}.md`;
const edits=[
 [model,'Those new arguments remain subject to the assigned sequential reviews and have\nnot received independent acceptance.','Those new arguments remain subject to the native independent reviews and gates\nand have not received workflow acceptance.'],
 [a,'All proofs are draft authoring and still require the assigned sequential reviews.','All proofs remain draft authoring; native independent reviews and gates remain required.']
];
for(const[p,old,replacement]of edits){const text=readFileSync(p,'utf8');if(!text.includes(old))throw Error('editorial guard failed '+p);writeFileSync(p,text.replace(old,replacement));}
const comparison='thm-na-periodic-diagonal-hjb-second-order-comparison',mirrors=[];
for(const p of pages)for(const item of p.items){const{fm,body}=splitFrontmatter(readFileSync(`items/${item.id}.md`,'utf8')),m=yaml().parse(fm);if(JSON.stringify(item.deps)!==JSON.stringify(m.deps))throw Error('unexpected dependency mismatch '+item.id);if(item.id===comparison){item.statement=sourceSectionText(body,'Statement').trim();mirrors.push(item.id);}}
writeFileSync(file('pages'),JSON.stringify(pages,null,2)+'\n');
const idsToRegen=['thm-na-rademacher-euclidean',comparison,'thm-na-diagonal-diffusion-hjb-scheme-convergence'];
const child=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',file('proof-contracts'),...idsToRegen],{encoding:'utf8'});if(child.status!==0)throw Error(child.stderr||child.stdout);
writeFileSync(`${base}/hjb-final-metadata-integration.json`,JSON.stringify({run,at:new Date().toISOString(),archive,statement_mirrors:mirrors,regenerated_contracts:idsToRegen,regeneration_output:child.stdout,root_editorial_only:edits.map(([path])=>path),model_definition_unchanged:true,original_conditional_source_unchanged:true,full_scope_retained:true,native_acceptance_claimed:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({mirrors,regenerated:idsToRegen}));
