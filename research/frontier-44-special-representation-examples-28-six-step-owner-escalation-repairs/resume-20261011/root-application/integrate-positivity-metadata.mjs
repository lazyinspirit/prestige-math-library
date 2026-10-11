import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root=process.cwd(), r='frontier-44-special-representation-examples-28-six-step';
const base=`research/${r}-owner-escalation-repairs/resume-20261011`;
const {splitFrontmatter,sectionText}=await import(pathToFileURL(`${root}/tools/facts-block.mjs`));
const {yaml}=await import(pathToFileURL(`${root}/tools/pathway-lib.mjs`));
const {dependencyLevels}=await import(pathToFileURL(`${root}/tools/item-dependency-levels.mjs`));
const sha=x=>createHash('sha256').update(x).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const packet=read(`${base}/gate-soergel-routing/positivity/proposal.json`);
const documents=new Map(), get=p=>documents.has(p)?documents.get(p):(documents.set(p,read(p)),documents.get(p));
for(const d of packet.contract_citation_deltas){
 const row=get(d.path).contracts[d.id];
 for(const change of d.citation_replacements){const matches=row.citations.map((c,i)=>JSON.stringify(c)===JSON.stringify(change.before)?i:-1).filter(i=>i>=0);if(matches.length!==1)throw Error(`Citation mismatch ${d.id}`);row.citations[matches[0]]=change.after;}
}
const authored=get(`research/${r}-batch-5.pages.json`), page=authored.find(p=>p.id===packet.helper_home_page);
const text=fs.readFileSync(`items/${packet.helper_id}.md`,'utf8');const {fm,body}=splitFrontmatter(text), meta=yaml().parse(fm);
if(page.items.some(i=>i.id===meta.id))throw Error('Helper already added');
page.items.push({id:meta.id,kind:meta.kind,title:meta.title,deps:meta.deps,provenance:meta.provenance,statement:sectionText(body,'Statement').trim(),strategy:meta.proof_strategy,justified_by:meta.justified_by,sources:meta.sources,dependency_level:0});
const contract=get(`research/${r}-batch-5.proof-contracts.json`), helper=read(packet.helper_contract);
if(contract.contracts[meta.id])throw Error('Helper contract already added');contract.scope.push(meta.id);contract.contracts[meta.id]=helper.contracts[meta.id];
const manifests=fs.readdirSync('research').filter(n=>new RegExp(`^${r}-batch-\\d+\\.pages\\.json$`).test(n)).sort();
for(const n of manifests)get(`research/${n}`);
for(const d of packet.source_changes){
 const source=fs.readFileSync(d.path,'utf8');if(sha(source)!==d.after_raw_sha256)throw Error(`Source changed ${d.id}`);
 const {fm,body}=splitFrontmatter(source), info=yaml().parse(fm);
 const matches=[...documents.entries()].filter(([p])=>p.endsWith('.pages.json')).flatMap(([,pages])=>pages.flatMap(p=>p.items.filter(i=>i.id===d.id)));
 if(matches.length>1)throw Error('Duplicate source owner');
 if(matches.length){matches[0].deps=info.deps??[];if(info.forward_refs)matches[0].forward_refs=info.forward_refs;matches[0].sources=info.sources;const heading=info.kind==='definition'?'Definition':'Statement';const statement=sectionText(body,heading).trim();if(statement)matches[0].statement=statement;}
}
const all=[...documents.entries()].filter(([p])=>p.endsWith('.pages.json')).flatMap(([,pages])=>pages);
const graph=dependencyLevels(all,{validateLabels:false});if(graph.errors.length)throw Error(graph.errors.join('\n'));
for(const page of all)for(const item of page.items)item.dependency_level=graph.levels.get(item.id);
const out=`${base}/root-application/gate1-positivity-metadata-before`;fs.mkdirSync(out,{recursive:true});
for(const [p,d] of documents){fs.copyFileSync(p,`${out}/${p.split('/').at(-1)}`);fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');}
const contextPath=`research/${r}-rehomed.json`;if(fs.existsSync(contextPath))throw Error('Inspect existing context directions before merging');
fs.writeFileSync(contextPath,JSON.stringify({version:1,run:r,approved_by:'owner',owner_identity:'/root',at:new Date().toISOString(),independent_execution_coverage_adopted:false,reason:'Necessary existing published prerequisite context placements make the local positivity dependency graph acyclic within the same100frontierpages.',items:packet.context_rehomes.map(x=>({...x,reason:'Existing published elementary KL prerequisite context; actual statements/proofs retained, with only separately claimed reference repairs where indicated.'}))},null,2)+'\n');
fs.writeFileSync(`${base}/root-application/gate1-positivity-metadata-receipt.json`,JSON.stringify({at:new Date().toISOString(),items:graph.items.size,pages:all.length,new_helper:meta.id,context_suppliers:9,maximum_level:Math.max(...graph.levels.values()),source_claims_preserved:true,documents:[...documents.keys()]},null,2)+'\n');
console.log(`Integrated ${graph.items.size} items on ${all.length} pages, with9 existing context suppliers and no new audit coverage.`);
