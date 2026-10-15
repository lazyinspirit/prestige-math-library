import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {splitFrontmatter,sectionText} from '../../../../tools/facts-block.mjs';
import {sourceIdenticalAcceptanceContinuity} from '../../../../tools/step3-owner-source-identical-continuity.mjs';
const run='hopf-hecke-unfinished-15-2026-10-15';
const base=`research/${run}-owner/step3-routing-reconciliation/batches2-5-7`;
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const sha=x=>createHash('sha256').update(x).digest('hex');const hash=x=>sha(JSON.stringify(canon(x))??'undefined');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));const ref=p=>({path:p,sha256:sha(fs.readFileSync(p))});
const archives=[];
function archive(p){let dst=base+'/archive/'+p;fs.mkdirSync(path.dirname(dst),{recursive:true});if(fs.existsSync(dst)&&sha(fs.readFileSync(dst))!==sha(fs.readFileSync(p)))throw Error('Archive conflict '+p);fs.copyFileSync(p,dst);archives.push({original:ref(p),archive:ref(dst)});return ref(dst);}
const wanted=new Set(['lem-hh-every-comodule-element-lies-in-a-finite-subcomodule','thm-hh-comodules-and-rational-dual-modules','thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities','thm-hh-hopf-maschke-integral-averaging','thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective']);
const entries=[],observations=[],checks=[],manifestOps=[];
const view=path.resolve(base+'/validation-view');fs.mkdirSync(view+'/research',{recursive:true});
for(const name of fs.readdirSync('.'))if(name!=='research'&&!fs.existsSync(view+'/'+name))fs.symlinkSync(path.resolve(name),view+'/'+name);
for(const name of fs.readdirSync('research'))if(!fs.existsSync(view+'/research/'+name))fs.symlinkSync(path.resolve('research/'+name),view+'/research/'+name);

for(const b of ['2','5','7']){
 const decisionPath=`research/${run}-alpha-batch-${b}-3a-decisions.json`,doc=read(decisionPath),accepted=archive(decisionPath);
 for(const p of [`research/${run}-alpha-batch-${b}-3a.md`,`research/${run}-alpha-batch-${b}-3a-order.task.md`,`research/${run}-dispatch/alpha-3a-batch-${b}.result.json`,`research/${run}-dispatch/alpha-3a-batch-${b}.attempt-1.result.json`,`research/${run}-step3-hash-${b}-pre.json`,`research/${run}-step3-hash-${b}-post.json`,`research/${run}-reader-${b}.md`,`research/${run}-dispatch/reader-reader-${b}.result.json`,`research/${run}-reader-findings-${b}.json`,`research/${run}-step3-scope-${b}.json`,`research/${run}-batch-${b}.pages.json`,`research/${run}-batch-${b}.proof-contracts.json`])archive(p);
 const before=read(`research/${run}-step3-hash-${b}-post.json`).hashes,pre=read(`research/${run}-step3-hash-${b}-pre.json`).hashes;
 const manifest=read(`research/${run}-batch-${b}.pages.json`),pages=Array.isArray(manifest)?manifest:manifest.pages,contracts=read(`research/${run}-batch-${b}.proof-contracts.json`).contracts;
 for(const decision of doc.decisions.filter(d=>wanted.has(d.id))){
  const id=decision.id;archive(`items/${id}.md`);
  const page=pages.find(p=>p.items.some(i=>i.id===id)),row=page.items.find(i=>i.id===id);
  const statement=sectionText(splitFrontmatter(fs.readFileSync(`items/${id}.md`,'utf8')).body,'Statement').trim();
  if(row.statement!==statement){manifestOps.push({target_path:`research/${run}-batch-${b}.pages.json`,guard:ref(`research/${run}-batch-${b}.pages.json`),op:'replace_item_field',page_id:page.id,item_id:id,field:'statement',before:row.statement,value:statement});row.statement=statement;}
  const viewManifest=view+`/research/${run}-batch-${b}.pages.json`;if(fs.lstatSync(viewManifest).isSymbolicLink())fs.unlinkSync(viewManifest);fs.writeFileSync(viewManifest,JSON.stringify(manifest,null,2)+'\n');
  const current={item_sha256:sha(fs.readFileSync(`items/${id}.md`)),contract_sha256:hash(contracts[id]??null),manifest_sha256:hash({...row,__step4_page_id:page.id})};
  if(current.item_sha256!==before[id].item_sha256)throw Error('Source not identical '+id);
  const target={obligation:decision.obligation,id,batch:b,route:'touched',added:false};
  const entry={version:1,policy:'step3-source-identical-acceptance-continuity-v1',run,id,obligation:decision.obligation,post_reader_carrier_sha256:hash(before[id]),target_sha256:hash(target),current_carrier_sha256:hash(current),historical_manifest_delta_unknown:true,independent_execution_coverage_adopted:false,post_reader_snapshot:ref(`research/${run}-step3-hash-${b}-post.json`),native_result:ref(`research/${run}-dispatch/alpha-3a-batch-${b}.result.json`),native_report:ref(`research/${run}-alpha-batch-${b}-3a.md`),native_assignment:ref(`research/${run}-alpha-batch-${b}-3a-order.task.md`),accepted_decision_archive:accepted,accepted_decision_sha256:hash(decision)};
  const valid=sourceIdenticalAcceptanceContinuity(view,run,decision,target,before[id],current,entry);if(!valid)throw Error('Continuity validation failed '+id);
  entries.push(entry);observations.push({id,batch:b,pre_reader:pre[id],post_reader:before[id],current,source_identical:true,current_contract_differs:current.contract_sha256!==before[id].contract_sha256,current_manifest_differs:current.manifest_sha256!==before[id].manifest_sha256,defect_ids_already_owned:decision.defect_ids,accepted_decision_unchanged:true,validator_pass:true});
  const result=spawnSync(process.execPath,['tools/proof-contract.mjs',`research/${run}-batch-${b}.proof-contracts.json`,'--strict','--items',id,'--json'],{encoding:'utf8'});checks.push({id,command:`node tools/proof-contract.mjs research/${run}-batch-${b}.proof-contracts.json --strict --items ${id} --json`,exit_code:result.status,stdout:result.stdout,stderr:result.stderr});if(result.status!==0)throw Error('Contract failed');
 }
}
const ownerPath=`research/${run}-step3-owner-repair-evidence.json`;
const ops={version:1,run,policy:'guarded-granular-owner-evidence-proposal',target_path:ownerPath,target_guard:fs.existsSync(ownerPath)?ref(ownerPath):{exists:false},create_document_if_absent:{version:1,run},operations:entries.map(value=>({op:'append_unique',path:'/source_identical_acceptance_continuities',unique_key:'obligation',value})),manifest_operations:manifestOps,decision_operations:[],ledger_operations:[],reason:'All five immutable reader-post sources equal current raw source bytes; only current contract carriers differ. Preserve genuine native accepted_repair verdicts and their existing defect references. Ledger-unowned is derivative of invalid decisions, not missing row ownership.'};
for(const [name,obj] of Object.entries({'operations.proposed.json':ops,'observations.json':observations,'checks.json':checks,'archive-inventory.json':archives}))fs.writeFileSync(base+'/'+name,JSON.stringify(obj,null,2)+'\n');
console.log(JSON.stringify({entries:entries.length,all_validated:true,observations},null,2));
