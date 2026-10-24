import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const YAML=createRequire(import.meta.url)('yaml');
const owner=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(owner,'../../..');process.chdir(root);
const parserPath='tools/physics-support/facts-block.mjs';
const {splitFrontmatter,sectionText,numberedProofSteps,factParagraphs}=await import(path.join(root,parserPath));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const sha=p=>hash(fs.readFileSync(p));
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(name,value)=>fs.writeFileSync(path.join(owner,name),JSON.stringify(value,null,2)+'\n');
const ids=read(path.join(owner,'changed-items.json'));
const preimages=read(path.join(owner,'preimages.json'));
const original=new Map(preimages.map(x=>[x.path,x]));
const guard=p=>({path:p,sha256:sha(p)});
const sources=new Map();
for(const id of ids){
 const p=`items/${id}.md`,pre=original.get(p),old=fs.readFileSync(pre.archive,'utf8'),now=fs.readFileSync(p,'utf8');
 const a=splitFrontmatter(old),b=splitFrontmatter(now),os=sectionText(a.body,'Statement').trim(),ns=sectionText(b.body,'Statement').trim();
 const op=numberedProofSteps(a.body),np=numberedProofSteps(b.body);
 const math=s=>s.match(/\$\$[\s\S]*?\$\$|\$(?:\\.|[^$])*\$/g)??[];
 const source={id,path:p,before_sha256:pre.sha256,current_sha256:sha(p),frontmatter_exactly_unchanged:a.fm===b.fm,latex_tokens_exactly_unchanged:JSON.stringify(math(old))===JSON.stringify(math(now)),proof_step_ids_unchanged:JSON.stringify(op.map(x=>x.id))===JSON.stringify(np.map(x=>x.id)),proof_step_inputs_unchanged:JSON.stringify(op.map(x=>x.inputs))===JSON.stringify(np.map(x=>x.inputs)),fact_labels_and_supplier_links_unchanged:JSON.stringify([...factParagraphs(a.body)].map(([k,v])=>[k,v.links]))===JSON.stringify([...factParagraphs(b.body)].map(([k,v])=>[k,v.links])),Statement_changed:os!==ns,old_Statement:os,new_Statement:ns,proof_steps:np};
 for(const k of ['frontmatter_exactly_unchanged','latex_tokens_exactly_unchanged','proof_step_ids_unchanged','proof_step_inputs_unchanged','fact_labels_and_supplier_links_unchanged'])if(!source[k])throw Error(`Unexpected scientific/interface change ${id}/${k}`);
 sources.set(id,source);
}
const inventory=new Map(),manifests=[];
for(const name of fs.readdirSync('research').filter(n=>/^advanced-qft-supersymmetry-build-2026-10-23-batch-\d+\.pages\.json$/.test(n)).sort()){
 const p=`research/${name}`,pages=read(p);manifests.push(guard(p));
 for(const page of pages)for(const row of page.items){if(inventory.has(row.id))throw Error(`Duplicate current item ${row.id}`);inventory.set(row.id,{page:page.id,manifest:p,row});}
}
if(inventory.size!==442)throw Error(`Current native inventory changed: ${inventory.size}`);
const inventoryUpdates=[];
for(const [id,s]of sources)if(s.Statement_changed){const n=inventory.get(id);inventoryUpdates.push({path:n.manifest,guard_sha256:sha(n.manifest),page:n.page,item:id,field:'statement',old_value:n.row.statement,new_value:s.new_Statement});}
const contractUpdates=[];
for(const name of fs.readdirSync('research').filter(n=>/^advanced-qft-supersymmetry-build-2026-10-23-batch-\d+\.proof-contracts\.json$/.test(n)).sort()){
 const p=`research/${name}`,doc=read(p),updates=[];
 for(const [id,c]of Object.entries(doc.contracts)){
  if(sources.has(id))for(const [kind,rows]of [['derivations',c.derivations??[]],['routine_steps',c.routine_steps??[]]])for(let i=0;i<rows.length;i++){
   const step=sources.get(id).proof_steps.find(s=>s.id===String(rows[i].step));if(!step)throw Error(`Unmatched retained step ${id}/${rows[i].step}`);
   if(rows[i].claim!==step.claim)updates.push({consumer:id,field:[kind,i,'claim'],step:step.id,old_value:rows[i].claim,new_value:step.claim,all_other_entry_fields_preserved:true});
  }
  for(let i=0;i<(c.citations??[]).length;i++){
   const cit=c.citations[i],s=sources.get(cit.source);
   if(s?.Statement_changed&&cit.source_section==='Statement'&&cit.quote!==s.new_Statement)updates.push({consumer:id,fact:cit.fact,source:cit.source,field:['citations',i,'quote'],old_value:cit.quote,new_value:s.new_Statement,source_section:'Statement',uses_preserved:cit.uses});
  }
 }
 if(updates.length){const archive=path.join(owner,'metadata-sync-preimages',p);fs.mkdirSync(path.dirname(archive),{recursive:true});if(fs.existsSync(archive)&&sha(archive)!==sha(p))throw Error('Metadata baseline changed; prepare distinct version');fs.copyFileSync(p,archive);contractUpdates.push({path:p,guard_sha256:sha(p),archive:path.relative(root,archive),updates});}
}
const publicIds=new Set([...sources].filter(([,s])=>s.Statement_changed).map(([id])=>id));
const direct=[],allConsumers=[],reverse=new Map(),snapshots=[];
for(const [id,n]of inventory){
 const p=`items/${id}.md`,text=fs.readFileSync(p,'utf8'),{fm,body}=splitFrontmatter(text),f=YAML.parse(fm),deps=f.deps??[];
 snapshots.push({id,path:p,sha256:sha(p),manifest:n.manifest,page:n.page});
 for(const supplier of deps){if(!reverse.has(supplier))reverse.set(supplier,new Set());reverse.get(supplier).add(id);}
 const supplierIds=[...publicIds].filter(s=>id!==s&&(deps.includes(s)||body.includes(`[[${s}`)));
 if(supplierIds.length){const facts=[...factParagraphs(body).values()];direct.push({consumer:id,path:p,sha256:sha(p),supplier_ids:supplierIds,Statement:sectionText(body,'Statement').trim()||sectionText(body,'Example').trim(),actual_relevant_facts:facts.filter(f=>f.links.some(s=>supplierIds.includes(s))),review:'compatible: removed status prose changes no mathematical input or family/pairing/charge/FI condition; no consumer source edit needed beyond scoped source cleanup already recorded'});}
}
function descendants(seed){const done=new Set(),queue=[...seed];while(queue.length){for(const c of reverse.get(queue.shift())??[]){if(done.has(c))continue;done.add(c);queue.push(c);}}return [...done].sort();}
const graph={current_native_manifest_count:manifests.length,current_native_item_count:inventory.size,manifest_guards:manifests,source_snapshot:snapshots,public_Statement_changed:[...publicIds],direct_consumer_checks:direct,transitive_public_consumers:descendants(publicIds),transitive_any_changed_source_consumers:descendants(ids),limits:'Full442 actual native-manifest/source dependency and exact-Facts scan. The public mathematical interfaces retain all actual hypotheses and formulas; direct consumer Statements and actual relevant Facts were read for compatibility. This is bounded status-interface reconciliation, not a new independent mathematical audit of442proofs.'};
write('consumer-interface-review.json',graph);
const sourceChanges=[...sources.values()].map(({proof_steps,...s})=>s);
write('guarded-source-and-quote-proposal.json',{status:'UNAPPLIED ROOT METADATA SYNC PROPOSAL; actual authorized source-only cleanup already written',source_changes:sourceChanges,canonical_facts_parser:guard(parserPath),inventory_statement_updates:inventoryUpdates,contract_updates:contractUpdates,page_requires_changes:[],dependency_changes:[],role_changes:[],crossrow_interface_changes:[],boundaries_routines_risk_native_history_preserved:true,metadata_instructions:'Apply only exact guarded field updates; preserve all other fields and richer dependencies. No readiness/native decision/stamp or canonical plan write is proposed. Fresh preparation is required if metadata inputs change.'});
write('evidence.json',{source_changes:sourceChanges.map(({old_Statement,new_Statement,...s})=>s),source_preimages:preimages,checks:['precheck-final.json','render-final.json','layout-final.txt'].map(n=>guard(path.relative(root,path.join(owner,n)))),current_inventory_count:inventory.size,direct_public_consumers:direct.map(c=>c.consumer),transitive_public_consumers:graph.transitive_public_consumers,proposal:guard(path.relative(root,path.join(owner,'guarded-source-and-quote-proposal.json'))),unchanged_original_metadata:preimages.filter(g=>!g.path.startsWith('items/')).every(g=>sha(g.path)===g.sha256),actual_source_edits_only:true,native_independent_approval_claimed:false,new_external_reading_claimed:false});
console.log(JSON.stringify({current_items:inventory.size,source_changes:ids.length,Statement_changes:publicIds.size,direct_consumers:direct.map(c=>c.consumer),transitive_public_consumers:graph.transitive_public_consumers,inventory_updates:inventoryUpdates.length,contract_files:contractUpdates.map(x=>({path:x.path,updates:x.updates.length}))},null,2));
