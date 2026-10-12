import {readFileSync,writeFileSync,mkdirSync,copyFileSync,symlinkSync,existsSync} from 'node:fs';
import {resolve,basename} from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../../tools/item-hash.mjs';
import {numberedProofSteps,splitFrontmatter,sourceSectionText} from '../../../../tools/facts-block.mjs';
const P='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/boundary-template-partition-03';
const R=P+'/repaired-source'; const rootid='lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage';
const hash=x=>createHash('sha256').update(x).digest('hex');
const items=JSON.parse(readFileSync(R+'/item-operations.json','utf8'));
const proposals=new Map(items.operations.map(o=>[o.id,readFileSync(o.proposal_path,'utf8')]));
const nativeCases=JSON.parse(readFileSync(P+'/operations.json','utf8'));
const inv=JSON.parse(readFileSync('research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/boundary-template-inventory/partition-03.json','utf8'));
const contractFiles=[...new Set(inv.items.flatMap(i=>i.rows.flatMap(r=>r.batch_locations.map(l=>l.path))))];
// Direct quote consumers in batch25 also need the changed supplier interface.
contractFiles.push('research/frontier-44-special-representation-examples-28-batch-25.proof-contracts.json');
const docs=new Map(contractFiles.map(f=>[f,JSON.parse(readFileSync(f,'utf8'))]));
const fieldOps=[];
const statement=sourceSectionText(splitFrontmatter(proposals.get(rootid)).body,'Statement');
for(const [file,d]of docs){for(const [id,c]of Object.entries(d.contracts)){for(let n=0;n<(c.citations??[]).length;n++){if(c.citations[n].source===rootid){fieldOps.push({id,file,contract_raw_sha256:hash(readFileSync(file)),pointer:`/contracts/${id}/citations/${n}/quote`,before:c.citations[n].quote,after:statement,source_proposal_path:R+'/proposed-items/'+rootid+'.md',reason:'Refresh exact Statement quotation to repaired nonzero-cell linkage and explicit empty-support convention; original attribution and all other citation fields retained.'});c.citations[n].quote=statement;}}}}
const sourceFile='research/frontier-44-special-representation-examples-28-batch-24.proof-contracts.json';
const sourceContract=docs.get(sourceFile).contracts[rootid];
const steps=numberedProofSteps(splitFrontmatter(proposals.get(rootid)).body);
const deriv=steps.map(s=>{const inputs=[...s.inputs];const known=new Set(inputs.map(x=>x.replace(/^step\s+/,'')));for(const t of s.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)){const v=t[1]??t[2];if(!known.has(v)){known.add(v);inputs.push(/^\d/.test(v)?'step '+v:v);}}return{id:'step-'+s.id.replace('.','-'),claim:s.claim,step:s.id,inputs};});
fieldOps.push({id:rootid,file:sourceFile,contract_raw_sha256:hash(readFileSync(sourceFile)),pointer:`/contracts/${rootid}/derivations`,before:sourceContract.derivations,after:deriv,reason:'Exact current repaired proof clauses and inputs; same head/purity/corner conclusions with explicit zero-cell support handling.'});sourceContract.derivations=deriv;
const allCases=nativeCases.operations.map(o=>structuredClone(o));
for(const o of allCases){if(proposals.has(o.id)){o.after.template_review.item_sha256=itemHashGuard(proposals.get(o.id));o.required_source_proposal_path=R+'/proposed-items/'+o.id+'.md';o.required_source_proposal_raw_sha256=hash(proposals.get(o.id));}}
const held=inv.items.find(i=>i.id===rootid).rows.find(r=>r.case==='empty');
const loc=held.batch_locations[0];
const reason='The repaired Statement explicitly permits an empty cellular index set: its cell module, Gram matrix and form quotient are zero. Step 1.2 assigns that zero cell empty block support and no simple factors before the nonzero tensor-purity argument. Step 4.1 makes its corner-sum contribution zero; step 5.1 removes it from the nonzero-cell support graph, so a vacuous path never identifies two unsupported cells with a common block.';
const after={...loc.before_row,case:'empty',status:'checked',evidence:reason};delete after.reason;
after.template_review={upheld:true,by:'/root/boundary_metadata_b',reason,item_sha256:itemHashGuard(proposals.get(rootid)),row_sha256:hash(JSON.stringify({case:'empty',status:'checked',text:reason}))};
allCases.push({id:rootid,case:'empty',batch_contract:loc.path,contract_raw_sha256:loc.contract_raw_sha256,pointer:loc.pointer,before:loc.before_row,after,current_item_path:held.current_item_path,current_item_raw_sha256:held.current_item_raw_sha256,current_item_guard_sha256:held.current_item_guard_sha256,operation:'replace-row',required_source_proposal_path:R+'/proposed-items/'+rootid+'.md',required_source_proposal_raw_sha256:hash(proposals.get(rootid)),prior_verdict_history_preserved:true});
for(const o of allCases){let n=docs.get(o.batch_contract);const bits=o.pointer.split('/').slice(1);for(const b of bits.slice(0,-1))n=n[b];n[bits.at(-1)]=o.after;}
writeFileSync(R+'/complete-boundary-operations.json',JSON.stringify({...nativeCases,assessed_rows:56,proposed_rows:56,held_rows:0,operations:allCases,requires_source_and_two_facts_consumer_repairs:true},null,2)+'\n');
const manifest='research/frontier-44-special-representation-examples-28-batch-24.pages.json';const pages=JSON.parse(readFileSync(manifest,'utf8'));const before=pages[0].items[8].statement;
const ms=before.replace('Two cell modules share a block exactly when they are linked by a finite chain of cell modules','Two nonzero cell modules share a block exactly when they are linked by a finite chain of nonzero cell modules')+' Empty cellular index sets give zero cells with no simple factors and empty block support; these contribute zero to the corner identity and do not enter the nonzero-cell linkage graph.';
const manifestOp={file:manifest,raw_sha256:hash(readFileSync(manifest)),pointer:'/0/items/8/statement',before,after:ms};
writeFileSync(R+'/contract-and-manifest-operations.json',JSON.stringify({version:1,run:items.run,subject:rootid,field_operations:fieldOps,manifest_operations:[manifestOp],consumer_Statement_Definition_changes:false,guard_reconciliation_required:'Root must refresh all affected template-review item hashes and source quotations in collectively integrated metadata; other partitions retain row ownership.'},null,2)+'\n');
const mirror=R+'/pure-check-mirror';for(const path of [mirror+'/tools',mirror+'/items',mirror+'/contracts'])mkdirSync(path,{recursive:true});
for(const name of ['proof-contract.mjs','facts-block.mjs','frontmatter-list.mjs'])copyFileSync('tools/'+name,mirror+'/tools/'+name);
for(const [file,d]of docs){for(const[id,c]of Object.entries(d.contracts)){for(const k of [id,...(c.citations??[]).map(x=>x.source)]){const f=mirror+'/items/'+k+'.md';if(existsSync(f))continue;if(proposals.has(k))writeFileSync(f,proposals.get(k));else if(existsSync('items/'+k+'.md'))symlinkSync(resolve('items/'+k+'.md'),f);}}writeFileSync(mirror+'/contracts/'+basename(file),JSON.stringify(d,null,2)+'\n');}
const chosen=[rootid,...fieldOps.map(o=>o.id)];
const checks=[];
for(const[file,d]of docs){const ids=[...new Set(chosen.filter(id=>d.contracts[id]))];if(!ids.length)continue;const args=['tools/proof-contract.mjs',resolve(mirror+'/contracts/'+basename(file)),'--items',ids.join(','),'--strict','--json'];const r=spawnSync('node',args,{cwd:resolve(mirror),encoding:'utf8'});checks.push({command:['node',...args],exit_code:r.status,stdout:r.stdout,stderr:r.stderr});}
for(const args of [['tools/tsx-run.mjs','tools/precheck.mts',...items.operations.map(o=>o.proposal_path),'--json'],['tools/rendercheck.mjs',...items.operations.map(o=>o.proposal_path),'--json'],['tools/proof-layout.mjs',...items.operations.map(o=>o.proposal_path)]]){const r=spawnSync('node',args,{encoding:'utf8'});checks.push({command:['node',...args],exit_code:r.status,stdout:r.stdout,stderr:r.stderr});}
writeFileSync(R+'/pure-check-results.json',JSON.stringify(checks,null,2)+'\n');console.log(JSON.stringify({quote_and_derivation_ops:fieldOps.length,templates:allCases.length,checks:checks.map(c=>({exit:c.exit_code,out:c.stdout.slice(-90)}))}));
