import fs from 'node:fs';
const run='physics-td-qft-rpm-62-2026-10-14',label='step5-v2-impact-initial-r1-u2';
const reportPath=`research/${run}-step5-v2/${label}.json`;
const report=JSON.parse(fs.readFileSync(reportPath));
const path='research/defect-ledger.jsonl';const text=fs.readFileSync(path,'utf8');const rows=text.split(/\r?\n/).filter(Boolean).map(JSON.parse);
const repairs=[
 {subject:'ex-td-first-law-sign-convention',batch:'1',severity:'nonfatal',location:'Verification Given',subclass:'missing-hypothesis',correction:'The sign-convention verification applies the core-only first-law balance; its Given now supplies P in P_cl(s), equilibrium endpoints and the cited energy exclusions. The Example and algebra are unchanged.'},
 {subject:'ex-td-local-equilibrium-profile',batch:'16',severity:'fatal',location:'Example; Facts F2/A1; Verification 2.1',subclass:'undefined-equilibrium-criterion',correction:'After the supplier required an explicit comparison-cell equilibrium criterion, the old identity-label target was insufficient. Supplied X=(0,infinity) x R, finite entropy log(e)-y^2, energy constraint C=e=c(a)=a, B_a=X, and unique constrained maximizer q(a)=(a,0), verified by the entropy difference y^2. The original temperature field, domains and nonempirical scope are preserved.'},
 {subject:'pthm-td-stable-tempered-free-cube-grand-pressure',batch:'21',severity:'nonfatal',location:'Proof 1.1',subclass:'missing-regularity-verification',correction:'Completed the omitted all-radius lower-regularity check: two-particle stability bounds every nonzero potential below by -2 Bhat; a finite constant also covers zero and the near interval. The nonincreasing integrable far-tail envelope completes a lower/upper regular envelope. The Statement and all pressure identities are unchanged.'}
];
const appended=[];
for(const repair of repairs){const defect_id=`${run}-${label}-${repair.subject}`;if(rows.some(r=>r.defect_id===defect_id))continue;
 const review=report.reviews.find(r=>r.id===repair.subject);if(!review||review.disposition!=='repaired')throw Error(`missing guarded repair ${repair.subject}`);
 const row={defect_id,run,at:new Date().toISOString(),class:'accuracy',...repair,group:`batch-${repair.batch}`,caught_at_stage:'step5-impact-initial-r1-u2',caught_by_role:'alpha-repair',disposition:'fixed',post_sha256:review.post_sha256,evidence:[{path:reportPath,note:'Current scoped owner repair and review; self-check only, no independent judgment or certification.'}],independent_review:false};
 fs.appendFileSync(path,(fs.readFileSync(path,'utf8').endsWith('\n')?'':'\n')+JSON.stringify(row)+'\n');appended.push(defect_id);
}
report.repair_notes.ledger_updates={path,appended,preserve_historical_rows:true,no_judge_tuple_or_stamp_written:true};fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({appended},null,2));
