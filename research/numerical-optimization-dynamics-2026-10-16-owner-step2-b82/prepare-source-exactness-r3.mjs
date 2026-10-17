// Root-review proposal construction only. Never writes canonical metadata or invokes gates.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {pathToFileURL} from 'node:url';
const root=process.cwd(),run='numerical-optimization-dynamics-2026-10-16',base=`research/${run}-owner-step2-b82`,from=`${base}/metadata-integration-r2`,to=`${base}/metadata-integration-r3`;
const {splitFrontmatter,numberedProofSteps,factParagraphs,sourceSectionText}=await import(pathToFileURL(path.join(root,'tools/facts-block.mjs')));const {frontmatterList}=await import(pathToFileURL(path.join(root,'tools/frontmatter-list.mjs')));
if(fs.existsSync(to))throw Error('r3 already exists; preserve prior evidence');for(const d of ['before','proposed'])fs.mkdirSync(`${to}/${d}`,{recursive:true});
const read=f=>JSON.parse(fs.readFileSync(f,'utf8')),sha=b=>crypto.createHash('sha256').update(b).digest('hex'),norm=s=>String(s??'').replace(/\s+/g,' ').trim();const journal=read(`${from}/journal.json`),refresh=[],contexts=new Map();
function source(id){const p=`items/${id}.md`,raw=fs.readFileSync(p);contexts.set(p,sha(raw));return {...splitFrontmatter(raw.toString()),raw};}
for(const row of journal.rows){
 const proposed=read(row.proposed),file=path.basename(row.target),before=fs.readFileSync(row.target);fs.writeFileSync(`${to}/before/${file}`,before);
 if(file.endsWith('.pages.json')){
  for(const pg of proposed)for(const it of [...(pg.items??[]),...(pg.examples??[])])if(typeof it==='object'){
   const deps=frontmatterList(source(it.id).fm,'deps');if(JSON.stringify(it.deps)!==JSON.stringify(deps))refresh.push({kind:'manifest-deps',id:it.id});it.deps=deps;
  }
 }
 if(file.endsWith('.proof-contracts.json')){
  for(const id of proposed.scope){
   const c=proposed.contracts[id],s=source(id),steps=numberedProofSteps(s.body);if(!steps.length)continue;
   const derivations=steps.map(st=>({id:`step-${st.id.replace('.','-')}`,claim:st.claim,step:st.id,inputs:[...new Set(st.inputs)]}));
   if(JSON.stringify(c.derivations)!==JSON.stringify(derivations))refresh.push({kind:'full-proof-and-tags',id});c.derivations=derivations;c.routine_steps=[];
   const citations=[];
   for(const [fact,entry] of factParagraphs(s.body))for(const supplier of [...new Set(entry.links)]){
    const prior=(c.citations??[]).find(x=>x.fact===fact&&x.source===supplier),sup=source(supplier);let sec=prior?.source_section,quote=sec?sourceSectionText(sup.body,sec):null;
    if(!quote?.trim())for(const candidate of ['Statement','Statement refuted','Definition','Example','Remark']){const text=sourceSectionText(sup.body,candidate);if(text?.trim()){sec=candidate;quote=text;break;}}
    if(!quote?.trim())throw Error(`No actual allowed section for ${id}/${fact}/${supplier}`);
    const uses=steps.filter(st=>new RegExp(`\\b${fact}\\b`).test(st.text)).map(st=>st.id);if(!uses.length)throw Error(`Unused labelled supplier fact ${id}/${fact}/${supplier}: report rather than fabricate uses`);
    const q={fact,source:supplier,source_section:sec,quote:quote.trim(),uses};citations.push(q);
    if(!prior||norm(prior.quote)!==norm(q.quote)||JSON.stringify(prior.uses)!==JSON.stringify(uses))refresh.push({kind:'current-supplier-quote-or-use',id,fact,supplier,section:sec});
   }
   c.citations=citations;
  }
 }
 const bytes=Buffer.from(JSON.stringify(proposed,null,2)+'\n');fs.writeFileSync(`${to}/proposed/${file}`,bytes);row.before=`${to}/before/${file}`;row.before_sha256=sha(before);row.proposed=`${to}/proposed/${file}`;row.proposed_sha256=sha(bytes);
}
for(const c of journal.context_guards){const raw=fs.readFileSync(c.path);contexts.set(c.path,sha(raw));}
journal.context_guards=[...contexts].map(([p,h])=>({path:p,sha256:h}));journal.mode='ROOT-ONLY r3 source-exact metadata mirror; NOT APPLIED';journal.at=new Date().toISOString();journal.supersedes_for_application_only=`${from}/journal.json`;journal.refresh=refresh;journal.root_obligations.unshift('r3 refreshes mechanical mirrors of genuine native99 source repairs and actual current61 supplier sections. This records no new mathematical review, source reading or native acceptance; old r2 remains immutable history.');journal.execution=`python3 ${to}/apply-root-only.py --apply`;fs.writeFileSync(`${to}/journal.json`,JSON.stringify(journal,null,2)+'\n');fs.copyFileSync(`${from}/apply-root-only.py`,`${to}/apply-root-only.py`);
console.log(JSON.stringify({journal:`${to}/journal.json`,refresh_entries:refresh.length,source_guards:contexts.size,canonical_changes:0}));
