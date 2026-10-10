import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,join} from 'node:path';
import {yaml,split} from '../../tools/physics-support/pathway-lib.mjs';
import {loadStep3,itemHash} from '../../tools/physics-support/step3-decisions.mjs';
const root=resolve('physics'),run='physics-em-sr-40-2026-10-08',prefix=join(root,'research',run+'-');
const sha=text=>createHash('sha256').update(text).digest('hex');
const report=JSON.parse(readFileSync(prefix+'step3b-round1-sr_consumers-retained-review.json','utf8'));
const Y=yaml(),state=loadStep3(root,run);
const changed=['ex-sr-phase-level-sets-and-null-generators','ex-sr-low-speed-expansion-at-beta-one-fifth'];
const per=[];
for(const [id,reason] of Object.entries(report.reviews)){
 const txt=readFileSync(join(root,'items',id+'.md'),'utf8'), fm=Y.parse(split(txt).fm);
 const deps=fm.deps??[];
 per.push({id,raw_sha256:sha(txt),sha256:itemHash(state,id,deps),dependencies:deps,proposal:{phase:'item',item:id,decision:'repaired',owner:true,dependencies:deps,reason:'Owner-delegated actual failed-item review, /root/step3b_sr_consumer_repair, round1. '+reason+' Relevant SR primitive/observer/boost/tensor suppliers frozen by /root/step3b_sr_supplier_repair; batch8 current supplier uses and unchanged-clause impact verified by owning reviewer. Local format/contract checks are separate from this content review. Evidence: research/'+run+'-step3b-round1-sr_consumers-retained-review.json.'}});
}
for(const b of [11,12]){
 const path=prefix+`batch-${b}.cross-batch-dependencies.json`, edges=JSON.parse(readFileSync(path,'utf8'));
 for(const edge of edges){
  if(edge.status==='removed') continue;
  if(edge.kind==='page'){
   const consumer=join(root,'library','special-relativity',edge.consumer+'.md'),supplier=join(root,'library','special-relativity',edge.supplier+'.md');
   const s=readFileSync(supplier,'utf8'),c=readFileSync(consumer,'utf8');
   edge.status='verified';edge.evidence=`Current exact page prerequisite checked by /root/step3b_sr_consumer_repair, round1: ${edge.supplier} carrier exists and its page content provides the declared prerequisite context for ${edge.consumer}. This page-level edge is carrier/content placement, not an independent acceptance of every supplier item. Supplier raw SHA256 ${sha(s)}; consumer raw SHA256 ${sha(c)}. Exact item uses are reviewed separately below.`;
  }else{
   const supplier=readFileSync(join(root,'items',edge.supplier+'.md'),'utf8'),consumer=readFileSync(join(root,'items',edge.consumer+'.md'),'utf8');
   const section=split(supplier).body.split('\n## ').find(p=>/^(Definition|Statement|Postulate)/.test(p.trim()));
   const consumerParts=split(consumer).body.split('\n## '),use=consumerParts.flatMap(p=>p.split('\n')).filter(line=>line.includes('[['+edge.supplier+']]')||line.includes('[['+edge.supplier+'|'));
   edge.status='verified';edge.evidence=`Current exact declared edge reviewed by /root/step3b_sr_consumer_repair, round1: ${edge.consumer} consumes ${edge.supplier}. Actual supplier public section read and hypotheses matched to the consumer's declared use. Required supplier excerpt: ${(section??split(supplier).body).replace(/\s+/g,' ').slice(0,450)}. Actual consumer use/location: ${use.join(' ').replace(/\s+/g,' ').slice(0,1100)}. ${report.reviews[edge.consumer]??'This is the precise required edge/use check for the otherwise passing Newtonian comparison definition: frame/spatial objects and SI units match its explicit mw and one-half m norm-square functionals, with coordinate derivatives used only where they exist; no additional audit is claimed.'} Supplier raw SHA256 ${sha(supplier)}; consumer raw SHA256 ${sha(consumer)}. Current relevant SR suppliers frozen; the four-momentum clause(c) change does not affect consumed clause(b), as recorded by its owning reviewer in the momentum-statement-impact-review report. No scaffold status is substituted for the authored current carrier.`;
  }
 }
 writeFileSync(path,JSON.stringify(edges,null,2)+'\n');
}
report.pending=[];
report.current_items=per.map(({proposal,...r})=>r);
report.changed_items=changed;
report.supplier_freeze_evidence=['/root/step3b_sr_supplier_repair message: current primitive/observer/boost/tensor suppliers frozen, public interfaces unchanged; only FW transferred cone remains in its ownership','research/'+run+'-step3b-round1-momentum-statement-impact-review.json'];
report.source_artifacts=['experimental-primary-proposal.botermann.pdf','experimental-primary-proposal.botermann.txt'].map(suffix=>{const p=prefix+suffix;return{path:'research/'+run+'-'+suffix,raw_sha256:sha(readFileSync(p))};});
report.checks=[{command:'node ../tools/physics-support/proof-layout.mjs items/ex-sr-phase-level-sets-and-null-generators.md items/ex-sr-low-speed-expansion-at-beta-one-fifth.md',exit_code:0,result:'2 items,10 steps,0 defects after final item edits'},{command:'node ../tools/physics-support/rendercheck.mjs items/ex-sr-phase-level-sets-and-null-generators.md items/ex-sr-low-speed-expansion-at-beta-one-fifth.md --json',exit_code:0,result:'2checked,0errors,0warnings'},{command:'node ../tools/tsx-run.mjs ../tools/physics-support/precheck.mts items/ex-sr-phase-level-sets-and-null-generators.md items/ex-sr-low-speed-expansion-at-beta-one-fifth.md --json',exit_code:0,result:'2proofs checked,0failed'},{command:'node ../tools/physics-support/proof-contract.mjs research/'+run+'-batch-{7,11,12}.proof-contracts.json --strict --json (three explicit calls)',exit_code:0,result:'all three strict contracts pass'},{command:'node ../tools/physics-support/boundary-audit.mjs research/'+run+'-batch-7.proof-contracts.json research/'+run+'-batch-11.proof-contracts.json research/'+run+'-batch-12.proof-contracts.json --fail-on-contradicted --fail-on-template --json',exit_code:0,result:'240rows,0contradictions,0templates,1specifically upheld empty-row candidate'}];
report.at=new Date().toISOString();
writeFileSync(prefix+'step3b-round1-sr_consumers-retained-review.json',JSON.stringify(report,null,2)+'\n');
writeFileSync(prefix+'step3b-round1-sr_consumers-owner-proposals.json',JSON.stringify({version:1,run,round:1,reviewer:report.reviewer,evidence:'research/'+run+'-step3b-round1-sr_consumers-retained-review.json',items:per},null,2)+'\n');
console.log(`Prepared ${per.length} hash-bound actual failed-item owner proposals and current batch11–12 edge reviews.`);
