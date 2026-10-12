import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {yaml} from '../../../tools/pathway-lib.mjs';
import {loadStep3,itemHash,itemDecision,itemInputPaths} from '../../../tools/step3-decisions.mjs';
const root=process.cwd(),run='frontier-44-special-representation-examples-28';
const out=path.dirname(new URL(import.meta.url).pathname);
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const read=p=>fs.readFileSync(p,'utf8');
const ids=['lem-degree-and-codegree-of-standard-tableaux','def-nondegenerate-root-of-unity-level-one-hecke-regime'];
const mp=`research/${run}-batch-25.pages.json`, original=read(mp), manifest=JSON.parse(original);
const context=loadStep3(root,run), comparisons=[];
fs.mkdirSync(path.join(out,'before'),{recursive:true}); fs.mkdirSync(path.join(out,'proposed'),{recursive:true});
fs.writeFileSync(path.join(out,'before',path.basename(mp)),original);
for(const id of ids){
 const file=`items/${id}.md`,text=read(file),fm=yaml().parse(text.match(/^---\n([\s\S]*?)\n---/)[1]);
 const header=fm.kind==='definition'?'Definition':'Statement';
 const statement=text.split(`## ${header}\n\n`)[1].split('\n## ')[0].trim();
 const strategy='## Facts & Assumptions'+text.split('## Facts & Assumptions')[1];
 const item=manifest.flatMap(p=>p.items).find(i=>i.id===id);
 const prior=JSON.parse(JSON.stringify(item));
 const replacements={statement,strategy,provenance:fm.provenance,sources:fm.sources};
 if(id.startsWith('def-'))replacements.axiom_use='None: a parameter and convention definition with finite convention checks; no choice principle is used.';
 const changes=[];for(const [k,v]of Object.entries(replacements)){if(JSON.stringify(item[k])!==JSON.stringify(v)){changes.push(k);item[k]=v;}}
 comparisons.push({id,item_path:file,raw_sha256:hash(text),deps_equal:JSON.stringify(prior.deps)===JSON.stringify(fm.deps),dependency_level_equal:prior.dependency_level===fm.dependency_level,changed_manifest_fields:changes,mathematical_item_edit:false,current_input_sha256:itemHash(context,id),current_bookkeeping:itemDecision(context,id),statement_raw_sha256:hash(statement),strategy_raw_sha256:hash(strategy),prior_manifest_object_sha256:hash(JSON.stringify(prior)),proposed_manifest_object_sha256:hash(JSON.stringify(item))});
 fs.writeFileSync(path.join(out,'before',`${id}.md`),text);
}
const proposed=JSON.stringify(manifest,null,2)+'\n';fs.writeFileSync(path.join(out,'proposed',path.basename(mp)),proposed);
const guards=new Set([mp,'CLAUDE.md','README.md','SCHEMA.md','WORKFLOW.md']);
for(const id of ids)for(const p of itemInputPaths(context,id))guards.add(path.relative(root,p));
const receipts=[`research/${run}-owner-step3-degenerate-ariki-bindings-round1/sealed-independent-chunks/degree-independent-current-source-verdict.json`,`research/${run}-owner-step3-degenerate-ariki-bindings-round1/root-degree-current-first1-integration/integration.json`,`research/${run}-owner-step3-kashiwara-supplier-binding-round1/affine-normalized-weight-form-first1/final-actual-affine-form-and-consumer-sufficiency-first1.json`,`research/${run}-owner-step3-kashiwara-supplier-binding-round1/affine-normalized-weight-form-first1/metadata-only-producer-guard-refresh-after-final-source-seal.json`,`research/${run}-owner-affine-form-degree-three-normal-registration-20261010T1640/registration.json`];
for(const p of receipts)guards.add(p);
const evidence={version:1,run,preparer:'/root/klr_degree_regime_metadata_preparer',objective:'Prepare metadata-only mirror successor and current raw guards for lead-owned degree/regime review',recorded_at:new Date().toISOString(),proposal:{target:mp,before_raw_sha256:hash(original),path:path.relative(root,path.join(out,'proposed',path.basename(mp))),proposed_raw_sha256:hash(proposed),changed_ids:ids,unchanged_other_objects:manifest.every((p,i)=>p.items.every((it,k)=>ids.includes(it.id)||JSON.stringify(it)===JSON.stringify(JSON.parse(original)[i].items[k]))),item_inventory_preserved:true},comparisons,raw_guards:[...guards].sort().map(p=>({path:p,sha256:hash(fs.readFileSync(p))})),historical_receipts:receipts,acceptance:false,math_review:false,repair_round_consumed:false,history:'All original counts, maximum-two histories, attributions and receipts remain untouched; this helper neither inherits prior mathematical authorship nor accepts uses.',limitations:['Full batch25 proposal must be merged with disjoint concurrent proposals by root; raw guard must still match before application','Exact copied claim mirrors change scopeHash mechanically and require normal owner scope/current-input refresh after integration','Native item hashes include transitive supplier mathematical bodies and manifest metadata, so a changed-input flag alone does not identify a proof defect','Prior focused receipts retain their historical reviewer attribution; present equality verifies guards only']};
fs.writeFileSync(path.join(out,'proposal-and-current-guards.json'),JSON.stringify(evidence,null,2)+'\n');
console.log(JSON.stringify({proposal:evidence.proposal,comparisons:comparisons.map(({id,raw_sha256,changed_manifest_fields,current_input_sha256,current_bookkeeping})=>({id,raw_sha256,changed_manifest_fields,current_input_sha256,closed:current_bookkeeping.closed,reason:current_bookkeeping.reason})),guard_count:evidence.raw_guards.length},null,2));
