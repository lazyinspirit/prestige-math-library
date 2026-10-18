import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {yaml} from '../../tools/pathway-lib.mjs';
import {splitFrontmatter,sourceSectionText} from '../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/gaussian-cycle3-final-before`;
if(existsSync(archive))throw Error('already integrated');
const changed=new Set(JSON.parse(readFileSync(`research/${run}-ROOT-gaussian-planning-cycle3/explicit-cc-clarification-inventory.json`,'utf8')).edited_carriers);
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(Object.values(state.dispatches).some(d=>d.stage==='1-scaffold'&&d.covers.some(x=>['11','17'].includes(x))&&!d.endedAt))throw Error('subject native writer live');
const before=p=>{const dest=`${archive}/${p}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(p),{flag:'wx'});};
for(const id of changed)before(`items/${id}.md`);
const direct=['thm-gaussian-rangefinder-expected-spectral-error','thm-gaussian-power-rangefinder-expected-error','ex-gaussian-rangefinder-exact-on-rank-k-matrices'];
for(const id of direct){const p=`items/${id}.md`,text=readFileSync(p,'utf8'),{fm}=splitFrontmatter(text),m=yaml().parse(fm);if(!m.deps.includes('def-countable-choice')){if(!/^deps: \[[^\n]*\]$/m.test(text))throw Error('unexpected deps syntax '+id);writeFileSync(p,text.replace(/^deps: \[([^\n]*)\]$/m,(_,deps)=>`deps: [${deps}, def-countable-choice]`));}}
const mirrors=[];
for(const batch of [11,17]){const p=`research/${run}-batch-${batch}.pages.json`;before(p);const pages=JSON.parse(readFileSync(p,'utf8'));for(const page of pages)for(const item of page.items)if(changed.has(item.id)){const{fm,body}=splitFrontmatter(readFileSync(`items/${item.id}.md`,'utf8'));item.deps=yaml().parse(fm).deps;item.statement=sourceSectionText(body,item.kind==='example'?'Example':'Statement').trim();mirrors.push(item.id);}writeFileSync(p,JSON.stringify(pages,null,2)+'\n');}
const regenerated=[];
for(let batch=1;batch<=71;batch++){const p=`research/${run}-batch-${batch}.proof-contracts.json`;if(!existsSync(p))continue;const c=JSON.parse(readFileSync(p,'utf8')),ids=Object.keys(c.contracts).filter(id=>changed.has(id)||(c.contracts[id].citations??[]).some(x=>changed.has(x.source)));if(!ids.length)continue;before(p);const child=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',p,...ids],{encoding:'utf8'});if(child.status!==0)throw Error(child.stderr||child.stdout);regenerated.push({batch,ids,output:child.stdout});}
writeFileSync(`${base}/gaussian-cycle3-final-metadata-integration.json`,JSON.stringify({run,at:new Date().toISOString(),archive,mirrors,direct_cc_deps_added:direct,regenerated,holds_preserved:['thm-gaussian-rangefinder-expected-spectral-error','thm-gaussian-power-rangefinder-expected-error'],proof_or_gate_acceptance:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({mirrors,regenerated}));
