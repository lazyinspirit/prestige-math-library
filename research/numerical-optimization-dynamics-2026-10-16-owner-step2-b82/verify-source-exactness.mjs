// Read-only evidence comparison, not a native validator, audit, or gate.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root=process.cwd();
const {splitFrontmatter,numberedProofSteps,sourceSectionText,factParagraphs}=await import(pathToFileURL(path.join(root,'tools/facts-block.mjs')));
const {frontmatterList}=await import(pathToFileURL(path.join(root,'tools/frontmatter-list.mjs')));
const args=process.argv.slice(2),arg=k=>args[args.indexOf(k)+1];
if(!args.includes('--proposal-dir')||!args.includes('--report'))throw Error('Require --proposal-dir DIR --report NEW_REPORT.json');
const dir=arg('--proposal-dir'),report=arg('--report');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),norm=s=>String(s??'').replace(/\s+/g,' ').trim(),sameSet=(a,b)=>JSON.stringify([...new Set(a)].sort())===JSON.stringify([...new Set(b)].sort());
const run='numerical-optimization-dynamics-2026-10-16',errors=[],stats={manifests:0,manifest_items:0,contracts:0,steps:0,quotes:0,quotes_61:0},supplier61_checks=[];
const source=id=>{const raw=fs.readFileSync(path.join(root,'items',`${id}.md`),'utf8');return {raw,...splitFrontmatter(raw)}};
const manifestIds=new Map();
for(const batch of ['82','99']){
 const manifest=read(path.join(dir,`${run}-batch-${batch}.pages.json`)),ids=[];
 stats.manifests++;
 for(const pg of manifest){
  const file=path.join(root,'library',pg.category,`${pg.id}.md`);const page=splitFrontmatter(fs.readFileSync(file,'utf8'));
  const declared=[...(pg.items??[]),...(pg.examples??[])].map(x=>typeof x==='string'?x:x.id),actual=[...frontmatterList(page.fm,'items'),...frontmatterList(page.fm,'examples')];
  if(!sameSet(declared,actual))errors.push({type:'page-inventory',batch,page:pg.id,proposed:declared,actual});
  for(const it of [...(pg.items??[]),...(pg.examples??[])]){
   const id=typeof it==='string'?it:it.id;ids.push(id);stats.manifest_items++;const s=source(id),deps=frontmatterList(s.fm,'deps');
   if(typeof it==='object'&&!sameSet(it.deps??[],deps))errors.push({type:'manifest-deps',batch,id,proposed:it.deps??[],actual:deps});
   const actualId=s.fm.match(/^id:\s*(.+)$/m)?.[1]?.replace(/^['"]|['"]$/g,'');if(actualId!==id)errors.push({type:'source-id',id,actual:actualId});
  }
 }
 manifestIds.set(batch,ids);
 const doc=read(path.join(dir,`${run}-batch-${batch}.proof-contracts.json`));if(!sameSet(doc.scope,ids))errors.push({type:'contract-scope',batch,proposed:doc.scope,manifest:ids});
 for(const id of doc.scope){
  const c=doc.contracts[id];if(!c){errors.push({type:'missing-contract',batch,id});continue;}stats.contracts++;
  const s=source(id),steps=numberedProofSteps(s.body),mapped=new Map([...(c.derivations??[]),...(c.routine_steps??[])].map(x=>[x.step,x]));
  for(const step of steps){stats.steps++;const d=mapped.get(step.id);if(!d)errors.push({type:'missing-step',batch,id,step:step.id});else{
   if(d.claim!==step.claim)errors.push({type:'proof-paragraph',batch,id,step:step.id,proposed_claim:d.claim,actual_claim:step.claim});
   if(!sameSet(d.inputs??[],step.inputs))errors.push({type:'proof-tags',batch,id,step:step.id,proposed:d.inputs,actual:step.inputs});
  }}
  for(const d of mapped.values())if(!steps.some(x=>x.id===d.step))errors.push({type:'extra-step',batch,id,step:d.step});
  const facts=factParagraphs(s.body);
  for(const [label,fact] of facts)for(const supplier of fact.links)if(!(c.citations??[]).some(q=>q.fact===label&&q.source===supplier))errors.push({type:'missing-fact-citation',batch,id,fact:label,supplier});
  for(const q of c.citations??[]){
   stats.quotes++;const supplier=source(q.source),section=sourceSectionText(supplier.body,q.source_section);if(section===null||!section.includes(q.quote))errors.push({type:'supplier-quote',batch,id,fact:q.fact,supplier:q.source,section:q.source_section,quote:q.quote});
   if(!facts.get(q.fact)?.links.includes(q.source))errors.push({type:'fact-link',batch,id,fact:q.fact,supplier:q.source});
   const uses=steps.filter(x=>new RegExp(`\\b${q.fact}\\b`).test(x.text)).map(x=>x.id);if(!sameSet(q.uses??[],uses))errors.push({type:'citation-uses',batch,id,fact:q.fact,supplier:q.source,proposed:q.uses,actual:uses});
   if(['alg-near-orthonormal-hermitian-eigenvalue-certifier','thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness','alg-uniform-interval-linear-residual-certifier','thm-uniform-interval-linear-residual-certifier-soundness'].includes(q.source)){stats.quotes_61++;supplier61_checks.push({consumer:id,fact:q.fact,supplier:q.source,section:q.source_section,exact_current_section_contains_quote:section?.includes(q.quote)??false,quote:q.quote});}
  }
 }
}
const coverage=read(path.join(dir,`${run}-batch-82.coverage.json`));
const canonicalCoverage=read(`research/${run}-batch-82.coverage.json`);
for(const pg of coverage.pages){const actual=canonicalCoverage.pages.find(x=>x.page===pg.page);if(JSON.stringify(pg.sources??[])!==JSON.stringify(actual?.sources??[]))errors.push({type:'unexpected-source-reading-fetch-metadata-change',page:pg.page});}
const newids=['lem-tensor-product-moment-functional-equals-product-measure-integral','thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace'];
for(const id of newids){
 const rows=coverage.pages.flatMap(pg=>(pg.canonical??[]).map(row=>({page:pg.page,...row}))).filter(row=>row.item===id);if(rows.length!==1||!norm(rows[0].support).includes('No new external reading')&& !norm(rows[0].support).includes('New local'))errors.push({type:'new-coverage-honesty',id,rows});
 if(!manifestIds.get('82').includes(id))errors.push({type:'newitem-not-in-manifest',id});
}
const out={version:1,run,at:new Date().toISOString(),mode:'read-only source-exactness evidence comparison; NOT native gate or mathematical acceptance',proposal_dir:dir,stats,supplier61_checks,source_reading_fetch_metadata_unchanged:!errors.some(x=>x.type==='unexpected-source-reading-fetch-metadata-change'),errors,error_count:errors.length,coverage_note:'New rows identify local composition, not source reading. Existing source/read/fetch metadata is not newly certified.'};
fs.writeFileSync(report,JSON.stringify(out,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({report,stats,error_count:errors.length,error_types:[...new Set(errors.map(x=>x.type))]}));
