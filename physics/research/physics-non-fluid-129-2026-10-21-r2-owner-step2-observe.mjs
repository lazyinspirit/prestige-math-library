// Read-only live comparison. Output is observation, never certification.
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {splitFrontmatter,factParagraphs} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2';
const baseline=`research/${run}-owner-step2-baseline`;
const read=p=>JSON.parse(readFileSync(p));
const sha=b=>createHash('sha256').update(b).digest('hex');
const rows=read(`${baseline}/receipt.json`).rows;
const changes=[];
for(const row of rows){
  const before=readFileSync(`${baseline}/${row.path}`),now=readFileSync(row.path);
  if(sha(before)!==row.sha256)throw Error('Baseline changed '+row.path);
  if(before.equals(now))continue;
  const a=splitFrontmatter(before.toString()),b=splitFrontmatter(now.toString());
  const old=readItem(`${baseline}/${row.path}`),current=readItem(row.path);
  const fields=['deps','dependency_roles','physical_scope','provenance','sources','verification','dependency_level'];
  changes.push({path:row.path,id:current.id,before:row.sha256,now:sha(now),body_changed:a.body!==b.body,frontmatter_changed:a.fm!==b.fm,metadata_changes:Object.fromEntries(fields.filter(k=>JSON.stringify(old[k])!==JSON.stringify(current[k])).map(k=>[k,{before:old[k],now:current[k]}]))});
}
const manifests=readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'));
const items=new Set(manifests.flatMap(n=>read(`research/${n}`).flatMap(p=>p.items.map(i=>i.id))));
const helpers=['def-emg-fx-continuous-compact-top-form-integral','lem-nrqmx-continuous-simplex-integrals'].map(id=>({id,exists:existsSync(`items/${id}.md`),adopted:items.has(id)}));
const missing_fact_declarations=[];
for(const id of [...items,...helpers.filter(h=>h.exists&&!h.adopted).map(h=>h.id),'thm-qsm-finite-gibbs-variational']){
 const item=readItem(`items/${id}.md`),declared=new Set([...(item.deps??[]),...(item.justified_by??[]),...(item.forward_refs??[])]);
 for(const fact of factParagraphs(item.body).values())for(const supplier of fact.links)if(!declared.has(supplier))missing_fact_declarations.push({id,fact:fact.label,supplier});
}
const state=read(`.physics-autopilot/${run}/state.json`);
console.log(JSON.stringify({at:new Date().toISOString(),purpose:'Live observation; writers may change inputs; no acceptance or certification',stage:state.stage,paused:state.paused,active:Object.values(state.dispatches).filter(d=>!d.endedAt).length,manifest_items:items.size,helpers,counts:{changed:changes.length,bodies:changes.filter(c=>c.body_changed).length,frontmatter:changes.filter(c=>c.frontmatter_changed).length},missing_fact_declarations,changes},null,2));
