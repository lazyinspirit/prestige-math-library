// Generates review artifacts below this directory only. Never applies a row,
// writes a live receipt, marks reviewed_by=root or stamps native hashes.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,join,relative} from 'node:path';
import {digest,hashObject,decisionCore} from './shared-causal-repair.draft.mjs';
const HERE=fileURLToPath(new URL('.',import.meta.url)),ROOT=resolve(HERE,'../../../..');
const run='fluid-dynamics-all-47-2026-10-23',subject='def-fd-quantity-and-frame-conventions';
const read=p=>readFileSync(join(ROOT,p));const json=p=>JSON.parse(read(p));
const clone=x=>JSON.parse(JSON.stringify(x));const prefix=`research/${run}-`;
const input={};const guard=p=>{const b=read(p);input[p]=b.toString();return {path:p,sha256:digest(b)};};
const primaryId=`${run}-3a-batch-3-initial-time-domain`,duplicateId=`${run}-3a-batch-12-consumer-initial-time-exposure`;
const rows=read('research/defect-ledger.jsonl').toString().split('\n').filter(Boolean).map(JSON.parse);
const originals=[primaryId,duplicateId].map(id=>rows.find(x=>x.defect_id===id));
if(originals.some(x=>!x))throw Error('Actual already-appended original row missing');
const mergedId=`${run}-3a-owner-merged-initial-time-domain`;
const primaryPath=`${prefix}alpha-batch-3-3a-decisions.json`,aliasPath=`${prefix}alpha-batch-12-3a-decisions.json`;
const originalPrimary=json(primaryPath),originalAlias=json(aliasPath);
const pd=clone(originalPrimary),ad=clone(originalAlias);
const primary=pd.decisions.find(x=>x.obligation===`touched:3:${subject}`);
const aliases=ad.decisions.filter(x=>['reader:12:1','refuter:12:1'].includes(x.obligation));
primary.defect_ids=primary.defect_ids.map(x=>x===primaryId?mergedId:x);
const reason='The producer repair and both consumer observations concern exactly the same original missing0-in-I hypothesis for chi(0,a)=a, not independent defects. The accepted source3 repair and actual consumer review discharge that one causal omission; original observations, labels and raw/triple fingerprints remain unchanged.';
for(const a of aliases){
 a.defect_ids=[mergedId];a.same_defect_as=primary.obligation;a.same_defect_evidence=reason;
 a.owner_resolution=[a.owner_resolution,'Root causal reconciliation proposed: '+reason+
   ' Earlier separate-exposure wording remains historical evidence only and is superseded by this one-cause ownership determination.'].filter(Boolean).join('\n\n');
 a.evidence+='\n\nProposed final one-cause ledger reconciliation: '+reason;
}
primary.owner_resolution=[primary.owner_resolution,'Root causal reconciliation proposed: '+reason].filter(Boolean).join('\n\n');
const merged=clone(originals[0]);merged.defect_id=mergedId;merged.supersedes=[primaryId,duplicateId];merged.at=new Date().toISOString();
merged.correction=reason+' The two prior rows remain append-only history. The consumer-exposure row is a duplicate ownership record, not a distinct cause.';
merged.adjudication_ref=[{path:primaryPath,obligation:primary.obligation},...aliases.map(x=>({path:aliasPath,obligation:x.obligation})),
  ...originals.flatMap(x=>x.adjudication_ref??[])].filter((x,i,a)=>a.findIndex(y=>y.path===x.path&&y.obligation===x.obligation)===i);
merged.evidence=originals.flatMap(x=>x.evidence??[]).filter((x,i,a)=>a.findIndex(y=>y.path===x.path&&y.note===x.note)===i);
mkdirSync(join(HERE,'preimages'),{recursive:true});
for(const [p,name] of [[primaryPath,'primary-current-decisions.json'],[aliasPath,'consumer-current-decisions.json']])writeFileSync(join(HERE,'preimages',name),read(p));
const scopes=[3,12].map(b=>json(`${prefix}step3-scope-${b}.json`));
const ownerReports=[`${prefix}owner-step3-escalations/source3/round1-final-scientific-resolution.json`,`${prefix}owner-step3-escalations/source3/local-momentum-context-final-freshness.json`];
const originalGuards=originals.map((r,i)=>{
 const p=relative(ROOT,join(HERE,'preimages',`original-ledger-row-${i}.json`));writeFileSync(join(ROOT,p),JSON.stringify(r,null,2)+'\n');return guard(p);
});
// For tests, candidate decisions occupy an in-memory virtual filesystem at the
// real paths. The corresponding live files are NEVER changed.
input[primaryPath]=JSON.stringify(pd);input[aliasPath]=JSON.stringify(ad);
const aliasEntries=aliases.map(a=>{
 const f=[...scopes[1].reader_findings,...scopes[1].refuter_findings].find(x=>x.obligation===a.obligation);
 return {batch:'12',obligation:a.obligation,route:a.route,consumer_id:a.consumer_id,
   frozen_finding_sha256:hashObject(f),decision_core_sha256:hashObject(decisionCore(a))};
});
const currentContract=json(`${prefix}batch-3.proof-contracts.json`).contracts?.[subject]??null;
const pages=json(`${prefix}batch-3.pages.json`);let m;
for(const page of pages)for(const item of page.items??[])if(item.id===subject)m={...item,__step4_page_id:page.id};
const currentCarrier={item_sha256:digest(read(`items/${subject}.md`)),contract_sha256:hashObject(currentContract),manifest_sha256:hashObject(m)};
const scientific=ownerReports.map(guard);
const immutable=[];for(const b of [3,12]){
 for(const p of [`${prefix}reader-findings-${b}.json`,`${prefix}refute-${b}.json`,`${prefix}step3-hash-${b}-pre.json`,`${prefix}step3-hash-${b}-post.json`])immutable.push(guard(p));
}
const causalPath=relative(ROOT,join(HERE,'causal-repair-receipt.DRAFT.json'));
const causal={version:1,run,accepted_by:null,subject,one_actual_defect:true,merged_original_ids:[primaryId,duplicateId],primary_obligation:primary.obligation,alias_obligations:aliases.map(x=>x.obligation),same_literal_fault:reason,
  status:'DRAFT; root must independently accept this exact causal merge. Not a live receipt.'};
writeFileSync(join(ROOT,causalPath),JSON.stringify(causal,null,2)+'\n');
const e={canonical_defect_id:mergedId,subject,canonical_row_sha256:null,merged_original_ids:[primaryId,duplicateId],one_actual_defect:true,causal_statement:reason,
 original_ledger_row_guards:originalGuards,
 primary:{batch:'3',obligation:primary.obligation,route:'touched',scope_guard:guard(`${prefix}step3-scope-3.json`),decision_guard:{path:primaryPath,sha256:null},decision_core_sha256:null},
 aliases:aliasEntries.map(x=>({...x,decision_core_sha256:null})),consumer_scope_guard:guard(`${prefix}step3-scope-12.json`),immutable_guards:immutable,
 causal_repair_receipt:{path:causalPath,sha256:null},final_scientific_reports:scientific,current_carrier_sha256:null};
const draftReceipt={version:1,run,reviewed_by:null,kind:'cross-group-shared-causal-repair',repairs:[e],status:'DRAFT; no root approval or native seal generated'};
const tests={run,subject,merged,primary,aliases,currentCarrier,input,entryTemplate:e,causalTemplate:causal};
writeFileSync(join(HERE,'test-inputs.actual-records.json'),JSON.stringify(tests,null,2)+'\n');
writeFileSync(join(HERE,'merged-ledger-row.proposed.json'),JSON.stringify(merged,null,2)+'\n');
writeFileSync(join(HERE,'native-decision-patches.proposed.json'),JSON.stringify({primary:{before:originalPrimary.decisions.find(x=>x.obligation===primary.obligation),after:primary},aliases:aliases.map(a=>({before:originalAlias.decisions.find(x=>x.obligation===a.obligation),after:a})),root_only_remaining:'Root must add authenticated receipt SHA pointers and native current stamps after reviewing the merge; draft adds none.'},null,2)+'\n');
writeFileSync(join(HERE,'cross-group-receipt.DRAFT.json'),JSON.stringify(draftReceipt,null,2)+'\n');
console.log('Draft-only evidence, preimages, merged row and exact three decision patches written locally; no live writes or seals.');
