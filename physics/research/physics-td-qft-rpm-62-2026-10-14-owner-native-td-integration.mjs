// Root integrates the released TD supplier/consumer and actual-failure packet.
import {readFileSync,writeFileSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {splitFrontmatter,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',base=`research/${run}-owner-native-gate-td-round-1`;
const read=p=>JSON.parse(readFileSync(p,'utf8')),hash=x=>createHash('sha256').update(x).digest('hex');
const handoff=read(`${base}/FINAL-HANDOFF.json`),snapshot=loadStep1Record(process.cwd(),run);
for(const[id,sha]of Object.entries(handoff.source_current_raw_sha256))if(hash(readFileSync(`items/${id}.md`))!==sha)throw Error(`Changed released source ${id}`);
const newItem=read(`${base}/${handoff.new_supplier_inventory}`),prose=read(`${base}/${handoff.page18_context}`),docs=new Map(),mfs=new Map(),writes=new Map();
const mf=batch=>{const p=`research/${run}-batch-${batch}.pages.json`;if(!mfs.has(p))mfs.set(p,read(p));return mfs.get(p)};
const contract=batch=>{const p=`research/${run}-batch-${batch}.proof-contracts.json`;if(!docs.has(p))docs.set(p,read(p));return docs.get(p)};
const page=snapshot.pages.find(p=>p.id===newItem.approved_home);
if(!page||page.kind!=='A'||snapshot.items.has(newItem.id)||newItem.item.status!=='draft')throw Error('New supplier ownership invalid');
const row={...newItem.item};delete row.raw_sha256;
const targetPage=mf(page.batch).find(p=>p.id===page.id),index=targetPage.items.findIndex(i=>i.id===newItem.insert_before);
if(index<0)throw Error('Missing approved placement');targetPage.items.splice(index,0,row);
const home=new Map([...snapshot.items].map(([id,x])=>[id,x.page.batch]));home.set(newItem.id,page.batch);
const metadata=read(`${base}/${handoff.source_metadata}`);
for(const[id,data]of Object.entries(metadata)){
 if(data.raw_sha256!==handoff.source_current_raw_sha256[id])throw Error(`Metadata not released ${id}`);
 const item=mf(home.get(id)).flatMap(p=>p.items).find(i=>i.id===id);if(!item)throw Error(`Missing metadata owner ${id}`);
 for(const key of ['kind','title','domain','library','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','generation','justified_by','forward_refs','dependency_level','proof_strategy','statement'])if(data[key]!==undefined)item[key]=data[key];
}
const replacements={};
for(const file of [handoff.contracts,handoff.all_actual_td_boundaries])for(const[id,c]of Object.entries(read(`${base}/${file}`).contracts))replacements[id]={...replacements[id],...c};
for(const[id,data]of Object.entries(read(`${base}/${handoff.finite_smoke}`)))replacements[id]={...replacements[id],finite_smoke:data.proposed_finite_smoke,manual_model_obligations:data.manual_model_obligations};
const normalize=s=>String(s).replace(/\s+/g,' ').trim();
for(const[id,c]of Object.entries(replacements)){
 const batch=home.get(id);if(!batch)throw Error(`Missing contract owner ${id}`);
 const doc=contract(batch),next={...doc.contracts[id],...c};
 for(const citation of next.citations??[]){const section=sourceSectionText(splitFrontmatter(readFileSync(`items/${citation.source}.md`,'utf8')).body,citation.source_section);if(!section||!normalize(section).includes(normalize(citation.quote)))throw Error(`Stale quote ${id}/${citation.fact}/${citation.source}`);}
 doc.contracts[id]=next;if(!doc.scope.includes(id))doc.scope.push(id);
}
for(const p of read(`${base}/${handoff.coverage}`)){
 if(JSON.stringify(read(p.path))!==JSON.stringify(p.original))throw Error(`Coverage preimage changed ${p.path}`);
 writes.set(p.path,JSON.stringify(p.proposed,null,2)+'\n');
}
const history=read(`${base}/${handoff.inactive_thess_url}`);
if(hash(readFileSync(history.file))!==history.original_raw_sha256)throw Error('Thess history preimage changed');
writes.set(history.file,JSON.stringify(history.proposed_coverage,null,2)+'\n');
const pagePath=prose.home_path,rawPage=readFileSync(pagePath,'utf8');
if(!rawPage.includes(prose.old_exact_text)||rawPage.includes(`\n  - ${newItem.id}\n`))throw Error('Page preimage changed');
const placement=`\n  - ${newItem.insert_before}\n`;if(!rawPage.includes(placement))throw Error('Page inventory placement absent');
writes.set(pagePath,rawPage.replace(placement,`\n  - ${newItem.id}`+placement).replace(prose.old_exact_text,prose.replacement_exact_text));
const planPath='research/plan-spec.json',plan=read(planPath);
for(const[p,rows]of mfs){writes.set(p,JSON.stringify(rows,null,2)+'\n');for(const page of rows){const planned=plan.pages.find(p=>p.id===page.id);if(!planned)throw Error(`Missing canonical page ${page.id}`);planned.items=page.items.map(i=>({...i}));planned.requires=page.requires;}}
for(const[p,doc]of docs)writes.set(p,JSON.stringify(doc,null,2)+'\n');writes.set(planPath,JSON.stringify(plan,null,2)+'\n');
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive=`research/${run}-owner-native-td-integration/${stamp}`;mkdirSync(archive,{recursive:true});const records=[];
for(const[p,txt]of writes){const before=readFileSync(p);writeFileSync(`${archive}/${p.replaceAll('/','__')}.before`,before);records.push({path:p,before_sha256:hash(before),after_sha256:hash(txt)});}
for(const[p,txt]of writes){writeFileSync(`${p}.tmp`,txt);renameSync(`${p}.tmp`,p);}
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),handoff:`${base}/FINAL-HANDOFF.json`,handoff_sha256:hash(readFileSync(`${base}/FINAL-HANDOFF.json`)),sources_mirrored:Object.keys(metadata).length,new_supplier:newItem.id,new_home:page.id,contracts:Object.keys(replacements).length,coverage_batches:[5,8,7],writes:records,native_gate_authorization:false},null,2)+'\n');
console.log(JSON.stringify({sources:Object.keys(metadata).length,contracts:Object.keys(replacements).length,new_supplier:newItem.id,writes:writes.size,receipt:`${archive}/receipt.json`}));
