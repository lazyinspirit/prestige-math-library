// Root closes only genuine completed native findings, never source authority.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',root=process.cwd(),dir=`research/${run}-step5-v2`;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const args=process.argv.slice(2),td=args[args.indexOf('--td-confirmation')+1];
if(!args.includes('--td-confirmation')||!td?.startsWith(`research/${run}-owner-step4-td-round1/`))throw Error('Exact completed TD owner confirmation required');
const state=read(`.physics-autopilot/${run}/state.json`);
if(!state.paused||state.stage!=='5.5-adjudicate'||!state.stages?.['5.5-adjudicate']?.ownerFindingCollectionPausedAt
 ||Object.values(state.dispatches).some(row=>row.startedAt&&!row.endedAt))throw Error('Native collection handoff is not drained and paused');
const parentPath=`${dir}/repeat-1-collected.json`,parent=read(parentPath),queue=read(`${dir}/owner-finding-queue-repeat-1.json`),scope=read(`${dir}/owner-adjudication-scientific-repair-tetrad-1.json`);
if(parent.run!==run||parent.phase!=='repeat'||parent.round!==1||parent.errors?.length||!parent.native_owner_finding_corrections||parent.native_scientific_corrections?.length!==1)throw Error('Missing actual authenticated native parent correction receipt');
const originals=[...queue.entries.map(entry=>({subject:entry.subject,defect_id:entry.root_finding.defect_id})),{subject:scope.subject,defect_id:scope.root_finding.defect_id}];
const resolutions=[...parent.native_owner_finding_corrections.completion.root_finding_resolutions,parent.native_scientific_corrections[0].root_finding_resolution];
const rows=fs.readFileSync('research/defect-ledger.jsonl','utf8').trim().split('\n').map(JSON.parse),now=new Date().toISOString(),fixed=[],checks=[];
const tetradConfirmation=`research/${run}-owner-step4-rpm-round1/supplement-28-completed-tetrad-child-confirmation/same-owner-final-tetrad-comparison.json`;
const confirmations=[td,`research/${run}-owner-step4-rpm-round1/supplement-27-completed-native-lane2-confirmation/same-owner-final-scientific-confirmation.json`,`research/${run}-owner-step5-qft-emg-coordination-round1/observation-25-native-empirical-choice-final-confirmation/scientific-native-final-confirmation.json`];
confirmations.push(tetradConfirmation);
for(const file of confirmations)if(!fs.existsSync(file))throw Error('Missing original scientific owner confirmation '+file);
for(const {subject,defect_id}of originals){
 const matches=rows.filter(row=>row.defect_id===defect_id),resolution=resolutions.filter(row=>row.defect_id===defect_id);
 if(matches.length!==1||matches[0].disposition!=='open'||rows.some(row=>row.supersedes?.includes(defect_id))||resolution.length!==1||resolution[0].status!=='fixed'||JSON.stringify(resolution[0].subjects)!==JSON.stringify([subject])||resolution[0].uncertain!==false)throw Error('Finding lacks exact current native resolution '+subject);
 const current=itemHashGuard(fs.readFileSync(`items/${subject}.md`,'utf8')),review=parent.reviews.filter(row=>row.id===subject);
 if(review.length!==1||review[0].post_sha256!==current||parent.post[subject]!==current||review[0].uncertain!==false)throw Error('Native resolved Source is not exact current '+subject);
 checks.push({subject,defect_id,current_content_sha256:current,native_review_context_sha256:review[0].review_context_sha256});
 const old=matches[0];fixed.push({...old,defect_id:defect_id+'-native-current-resolved',at:now,disposition:'fixed',supersedes:[defect_id],
  correction:resolution[0].reason+' Actual native controller collection authenticated this distinct repair and its exact current review; original reports, decisions and tuples remain immutable. This closure is not certification or publication.',
  evidence:[...(old.evidence??[]),{path:parentPath,note:'Genuine controller-collected native correction with exact current Source/context, explicit root resolution and immutable original history.'},...[subject===scope.subject?tetradConfirmation:subject.includes('-rpm-')?confirmations[1]:subject==='def-tdmath-periodized-empirical-field'?confirmations[2]:td].map(p=>({path:p,note:'Original scientific owner final changed-seam confirmation; unchanged proof evidence reused, no independent repeated proof audit.'}))]});
}
const verification={run,at:now,parent:{path:parentPath,sha256:sha(parentPath)},checks,original_owner_confirmations:confirmations.map(p=>({path:p,sha256:sha(p)})),authority:'Native collected current contexts; Root checks10 exact Source guards, no claim of independent unaffected proof review or additional whole-graph context computation.'};
const output=`research/${run}-owner-ten-native-current-fixed.rows.json`,verify=`research/${run}-owner-ten-native-current-currency.json`;
for(const [p,value]of[[output,fixed],[verify,verification]]){if(fs.existsSync(p))throw Error('Immutable root closure artifact exists '+p);fs.writeFileSync(p,JSON.stringify(value,null,2)+'\n',{flag:'wx'});}
console.log(JSON.stringify({proposed_fixed:fixed.length,rows:output,verification:verify}));
