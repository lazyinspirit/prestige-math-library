// Proposal-only preparation. Run only after final prerequisite repairs integrate.
import {readFileSync,writeFileSync,mkdirSync,lstatSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const run='hopf-hecke-unfinished-15-2026-10-15';
const base=`research/${run}-owner/authoring-battery-failure/drift-scope`;
const sha=b=>createHash('sha256').update(b).digest('hex');
const check=(ok,msg)=>{if(!ok)throw Error(msg)};
const arg=k=>process.argv[process.argv.indexOf(k)+1];
check(process.argv.includes('--owner-acceptance-evidence')&&process.argv.includes('--reason'),'Requires --owner-acceptance-evidence research/ACTUAL.json --reason ACTUAL_OWNER_ACCEPTANCE');
const proof=arg('--owner-acceptance-evidence'),reason=arg('--reason');
check(proof.startsWith('research/')&&reason?.trim(),'Missing actual owner scope acceptance');
const acceptance=JSON.parse(readFileSync(proof));
check(acceptance.run===run&&acceptance.owner===true&&acceptance.decision==='resolved','Input must be actual owner acceptance of final scope reconciliation, not native/LLM coverage');
const historicalPath=`${base}/archive/research/${run}-owner-drift-resolutions.json`;
const doc=JSON.parse(readFileSync(historicalPath));
const ledger=JSON.parse(readFileSync(`research/${run}-scope-ledger.json`));
const archivedLedger=JSON.parse(readFileSync(`${base}/archive/research/${run}-scope-ledger.json`));
check(JSON.stringify(ledger.pages)===JSON.stringify(archivedLedger.pages),'Selected inventory changed; this proposal does not authorize a changed frontier');
check(ledger.allow_in_run_dependencies===archivedLedger.allow_in_run_dependencies,'In-run dependency policy changed');
const spec=JSON.parse(readFileSync('research/plan-spec.json'));
const pages=new Map(spec.pages.map(p=>[p.id,p]));
const immutable=[doc.report,doc.original_report,doc.native_result,doc.native_prompt,doc.drift_evidence];
for(const link of immutable)check(sha(readFileSync(link.path))===link.sha256,`Original native guard changed: ${link.path}`);
check(readFileSync(doc.report.path).equals(readFileSync(doc.original_report.path)),'Original native report changed');
const proposal=`${base}/final-proposal`;mkdirSync(proposal,{recursive:true});
const evidenceLink={path:proof,sha256:sha(readFileSync(proof))};
for(const row of doc.resolutions){
 const old=JSON.parse(readFileSync(row.evidence.path));
 check(sha(readFileSync(row.evidence.path))===row.evidence.sha256,'Original owner wrapper changed before reconciliation; archive/review actual delta');
 check(sha(readFileSync(old.repair_evidence.path))===old.repair_evidence.sha256,'Original delegated repair changed');
 const affected=new Set(),queue=[row.page],comp=pages.get(row.page)?.companion??`${row.page}-examples`;
 if(pages.has(comp)){affected.add(comp);queue.push(comp)}
 while(queue.length){const supplier=queue.shift();for(const p of pages.values())if(p.requires?.includes(supplier)&&p.id!==row.page&&!affected.has(p.id)){affected.add(p.id);queue.push(p.id)}}
 check(JSON.stringify([...affected].sort())===JSON.stringify(row.consumers.map(x=>x.page).sort()),`Changed consumers require explicit owner dispositions: ${row.page}`);
 for(const source of row.sources){check(sha(readFileSync(source.original.path))===source.original.sha256,'Original complete source preimage changed');source.current_sha256=sha(readFileSync(source.path));check(source.current_sha256!==source.original.sha256,'Corrected source reverted/unchanged')}
 row.reason+=` Final planning-guard reconciliation: ${reason}`;
 row.consumers=row.consumers.map(c=>({...c,reason:`The final prerequisite closure retains the original repaired supplier route and full approved claims. Subsequent richer authored proofs remain within this same page/companion inventory; this is planning acceptance only. ${reason}`}));
 const owner={...old,reason:row.reason,sources:row.sources,consumers:row.consumers,scope_reconciliation:evidenceLink};
 const ownerPath=`${proposal}/owner-acceptance-${row.page}.json`;writeFileSync(ownerPath,JSON.stringify(owner,null,2)+'\n');row.evidence={path:ownerPath,sha256:sha(readFileSync(ownerPath))};
}
const {driftScopeHash}=await import(pathToFileURL(resolve('tools/drift-owner-resolutions.mjs')));
doc.scope_sha256=driftScopeHash(ledger,spec);doc.authorized_at=new Date().toISOString();doc.reason+=` Final planning-guard reconciliation: ${reason}`;
const path=`${proposal}/${run}-owner-drift-resolutions.json`;writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
console.log(JSON.stringify({proposal:path,sha256:sha(readFileSync(path)),scope_sha256:doc.scope_sha256,resolutions:doc.resolutions.map(r=>r.page),live_files_modified:false},null,2));
