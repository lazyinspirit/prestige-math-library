// Root adoption of genuinely collected native decisions and repair evidence.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-step5-v2`;
const proposal=`research/${run}-owner-step5-initial-ledger-proposal`;
const queue=`research/${run}-owner-step5-combined-referral-queue`;
const out=`research/${run}-owner-step5-collected-finding-adoption`;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n',{flag:'wx'});
const need=(v,m)=>{if(!v)throw Error(m);};
const state=read(`.physics-autopilot/${run}/state.json`);
need(state.paused===true&&Object.values(state.dispatches).every(d=>d.endedAt)&&!fs.existsSync(`.physics-autopilot/${run}/controller.lock`),'not paused/stopped/drained');
need(!fs.existsSync(out),'preserve prior adoption');
const parentPath=dir+'/initial-1-collected.json',parent=read(parentPath);
need(parent.errors.length===0&&parent.inventory_missing.length===0&&parent.decisions.length===150&&parent.native_owner_finding_decisions.length===14,'native collection incomplete');
const actual=fs.readFileSync(`research/${run}-judge-adjudications.jsonl`,'utf8').trim().split('\n').map(JSON.parse);
const proposed=fs.readFileSync(proposal+'/canonical-candidates.jsonl','utf8').trim().split('\n').map(JSON.parse);
const reports=new Map(['1','2','3'].map(unit=>[unit,read(`${dir}/step5-v2-owner-finding-correction-initial-r1-u${unit}.json`)]));
const now=new Date().toISOString(),rows=[];
for(const candidate of proposed){
 const ref=candidate.adjudication_ref[0];
 const matches=actual.filter(v=>v.id===ref.id&&v.model===ref.model&&v.context_sha256===ref.context_sha256&&v.item_sha256===ref.item_sha256&&v.step5_round===ref.step5_round&&v.step5_phase===ref.step5_phase);
 need(matches.length===1&&matches[0].outcome===(candidate.severity==='fatal'?'confirmed_fatal':'confirmed_nonfatal'),'missing actual collected tuple '+candidate.subject);
 need(hash(candidate.native_report_ref.path)===candidate.native_report_ref.sha256,'native report changed');
 const reviewed=parent.reviews.find(v=>v.id===candidate.subject);
 need(reviewed&&reviewed.post_sha256===itemHashGuard(fs.readFileSync(`items/${candidate.subject}.md`,'utf8')),'source no longer matches collected review '+candidate.subject);
 rows.push({...candidate,normalization_owner:'/root',normalization_adopted_at:now,native_dispatch_role:'alpha-adjudicate',
  taxonomy_adoption:'Root adopts the visibly proposed canonical taxonomy from the exact native reason. No new scientific audit, confidence or original source reading is asserted.',
  collected_evidence:{path:parentPath,sha256:hash(parentPath)},reviewed_content_sha256:reviewed.post_sha256,
  same_issue_review:candidate.subject&&['lem-csm-frontier-finite-chain-martingale','def-csm-frontier-boltzmann-grad-scaling','def-qftx-euclidean-limit-data','post-tgrx-free-collapse-scattering'].includes(candidate.subject)
   ?{path:proposal+'/same-issue-review/adoption-proposal.json',sha256:hash(proposal+'/same-issue-review/adoption-proposal.json')}:undefined});
}
const open=read(queue+'/open-rows.json');
const entries=read(dir+'/owner-finding-queue-initial-r1-20261022-referrals-v2.json').entries;
for(const original of open){
 const entry=entries.find(v=>v.subject===original.subject);need(entry,'missing native owner '+original.subject);
 const report=reports.get(entry.owner_lane),review=report.reviews.find(v=>v.id===original.subject);
 const resolution=report.root_finding_resolutions.find(v=>v.subjects.includes(original.subject));
 need(review?.disposition==='repaired'&&resolution?.status==='fixed'&&resolution.uncertain===false,'repair not actually resolved');
 need(review.post_sha256===itemHashGuard(fs.readFileSync(`items/${original.subject}.md`,'utf8')),'repaired current source drift');
 if(original.defect_id.endsWith('combined-module-detail'))need(/module|Hom/.test(resolution.reason),'secondary module fix not evidenced');
 if(original.defect_id.endsWith('hawking-locator'))need(/locator/.test(resolution.reason),'secondary locator fix not evidenced');
 rows.push({...original,defect_id:original.defect_id+'-closed-native-initial-r1',at:now,disposition:'fixed',supersedes:[original.defect_id],
  correction:original.correction+' Actual native resolution: '+resolution.reason,
  evidence:[...original.evidence,{path:parentPath,note:'Actual successful native initial collection; original observations and separate ownership retained.'},{path:`${dir}/step5-v2-owner-finding-correction-initial-r1-u${entry.owner_lane}.json`,note:'Actual completed current source/context review and specific repair resolution, including the separate secondary defect where applicable.'}],
  reviewed_content_sha256:review.post_sha256,root_adopted_at:now,native_acceptance_kind:'Collected native current repair; no new original judge tuple or independent audit'});
}
need(rows.length===120,'unexpected closure inventory');
fs.mkdirSync(out);write(out+'/rows.json',rows);
write(out+'/receipt.json',{run,at:now,initial_confirmed_rows:104,original_fatal:37,original_nonfatal:67,owner_finding_successors:16,
  preserved_original_open_rows:16,source_writes:false,ledger_append_pending:true,parent:{path:parentPath,sha256:hash(parentPath)},
  taxonomy_reading:'Root reviewed the canonical subject/subclass inventory and exact reported causes, the four focused same-issue reviews, native collected tuple identities, current reviewed-source guards and specific owner resolutions. Source science and consumer reading remain attributed to their actual native/scientific owners.'});
console.log(JSON.stringify({prepared:rows.length,initial_collected_decisions:104,append_only_owner_closures:16,source_writes:false}));
