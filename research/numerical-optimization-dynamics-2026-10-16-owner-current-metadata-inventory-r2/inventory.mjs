// Research-only metadata inventory. No canonical mutations, hashes or validators.
import fs from 'node:fs';
import path from 'node:path';
import { splitFrontmatter, sourceSectionText, factParagraphs } from '../../tools/facts-block.mjs';
import { frontmatterList } from '../../tools/frontmatter-list.mjs';
const run = 'numerical-optimization-dynamics-2026-10-16';
const out = path.dirname(new URL(import.meta.url).pathname);
const norm = s => String(s ?? '').replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
const frozen = new Set([1,33,77]);
const inputFiles = new Map();
const load = p => {const raw=fs.readFileSync(p,'utf8');inputFiles.set(p,raw);return raw;};
const sourceCache = new Map();
function source(id){
 if(sourceCache.has(id))return sourceCache.get(id);
 const p=`items/${id}.md`;if(!fs.existsSync(p))return null;
 const raw=load(p);const {fm,body}=splitFrontmatter(raw);
 const row={path:p,raw,fm,body,kind:fm.match(/^kind:\s*(.+)$/m)?.[1].trim(),deps:frontmatterList(fm,'deps'),justified_by:frontmatterList(fm,'justified_by')};
 sourceCache.set(id,row);return row;
}
const manifestFiles=fs.readdirSync('research').filter(p=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(p)).sort((a,b)=>Number(a.match(/batch-(\d+)/)[1])-Number(b.match(/batch-(\d+)/)[1]));
const discrepancies=[],validQuotes=[],scopeIssues=[],operations=[];
const sameSet=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&new Set(a).size===a.length&&a.every(x=>b.includes(x));
const add = row=>{row.frozen_target=frozen.has(row.batch);discrepancies.push(row);if(!row.frozen_target&&row.after!==undefined)operations.push(row);};
for(const filename of manifestFiles){
 const batch=Number(filename.match(/batch-(\d+)/)[1]);const target=`research/${filename}`;const pages=JSON.parse(load(target));const ids=new Set();
 for(let pi=0;pi<pages.length;pi++){
  for(const field of ['items','examples'])for(let ii=0;ii<(pages[pi][field]??[]).length;ii++){
   const row=pages[pi][field][ii];const id=typeof row==='string'?row:row.id;ids.add(id);const s=source(id);
   if(!s){scopeIssues.push({batch,id,type:'source-missing'});continue;}
   if(typeof row!=='object'){scopeIssues.push({batch,id,type:'string-manifest-row-no-metadata-projection'});continue;}
   for(const key of ['kind','deps','justified_by']){
    const actual=s[key];const before=row[key];
    const same=key==='kind'?before===actual:sameSet(before??[],actual);
    if(same)continue;
    add({type:'manifest-source-projection',batch,id,target,path:[pi,field,ii,key],before_exists:Object.hasOwn(row,key),before:before??null,after:actual,source:s.path,source_field:key,row_guard:row,reason:`Actual source frontmatter ${key}; dependency order alone is treated as equivalent.`});
   }
  }
 }
 const cp=`research/${run}-batch-${batch}.proof-contracts.json`;
 if(!fs.existsSync(cp)){scopeIssues.push({batch,type:'contract-carrier-missing'});continue;}
 const contracts=JSON.parse(load(cp));
 for(const id of contracts.scope??[]){
  if(!ids.has(id))scopeIssues.push({batch,id,type:'contract-scope-item-not-in-current-manifest',frozen_target:frozen.has(batch)});
  const c=contracts.contracts?.[id];if(!c)continue;
  const consumer=source(id);const facts=consumer?factParagraphs(consumer.body):new Map();
  for(let i=0;i<(c.citations??[]).length;i++){
   const cite=c.citations[i];const supplier=source(cite.source);const section=supplier?sourceSectionText(supplier.body,cite.source_section):null;
   const row={type:'citation-quote',batch,id,target:cp,path:['contracts',id,'citations',i,'quote'],before_exists:Object.hasOwn(cite,'quote'),before:cite.quote??null,source:supplier?.path??`items/${cite.source}.md`,source_section:cite.source_section,citation_guard:cite,consumer_fact:facts.get(cite.fact)?.text??null,consumer_source:consumer?.path??null};
   if(section===null||!section.trim()){add({...row,reason:'Missing supplier or permitted named source section; no fallback section or replacement invented.',disposition:'open-source-section'});continue;}
   if(typeof cite.quote==='string'&&cite.quote.trim()&&norm(section).includes(norm(cite.quote))){validQuotes.push({batch,id,source: cite.source,source_section:cite.source_section,quote_kind:norm(section)===norm(cite.quote)?'whole-section':'valid-short-excerpt',target:cp,path:row.path});continue;}
   add({...row,current_source_section:section.trim(),reason:'The existing nonempty quote is not a whitespace-normalized substring of its actual named source section. Exact replacement requires row-specific review.',disposition:'needs-exact-replacement'});
  }
 }
}
const statePath=`.autopilot/${run}/state.json`;const state=JSON.parse(load(statePath));const active=Object.entries(state.dispatches??{}).filter(([,v])=>!v.endedAt).map(([key,v])=>({key,...v}));
const summary={run,status:'Research-only current observation; not a drain or acceptance receipt',scope:{manifest_files:manifestFiles.length,manifest_ids:[...new Set([...sourceCache.keys()])].length},frozen_target_batches:[...frozen],native_writer_observation:{state_path:statePath,root_named_active_batches:[14,96,105],unended_dispatches_at_observation:active,note:'No unended dispatch observed is not a drain receipt; root rechecks active/queued writers and field guards.'},counts:{discrepancies:discrepancies.length,projection_operations:operations.length,invalid_quote_rows:discrepancies.filter(x=>x.type==='citation-quote').length,valid_quotes:validQuotes.length,valid_short_quotes:validQuotes.filter(x=>x.quote_kind==='valid-short-excerpt').length,frozen_discrepancies:discrepancies.filter(x=>x.frozen_target).length,scope_issues:scopeIssues.length},discrepancies,operations,scope_issues:scopeIssues};
fs.writeFileSync(path.join(out,'initial-inventory.json'),JSON.stringify(summary,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(path.join(out,'valid-quote-noops.json'),JSON.stringify(validQuotes,null,2)+'\n',{flag:'wx'});
fs.mkdirSync(path.join(out,'observed-inputs'));
for(const [p,raw]of inputFiles){const dest=path.join(out,'observed-inputs',p);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,raw,{flag:'wx'});}
console.log(JSON.stringify(summary.counts));
