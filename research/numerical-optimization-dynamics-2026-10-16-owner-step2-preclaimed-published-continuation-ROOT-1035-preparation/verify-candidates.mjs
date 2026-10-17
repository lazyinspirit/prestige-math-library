// Read-only verifier. Never imports or executes the continuation mutation utility.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {stripVerification} from '../../tools/item-hash.mjs';
import {verificationCandidate} from './verification-edit.mjs';
const run='numerical-optimization-dynamics-2026-10-16';
const directory=`research/${run}-owner-step2-preclaimed-published-continuation-ROOT-1035-preparation`;
const read=p=>fs.readFileSync(p),json=p=>JSON.parse(read(p));
const sha=b=>createHash('sha256').update(b).digest('hex');
const auth=json(`${directory}/root-authorization-template.json`),errors=[];
const check=(x,m)=>{if(!x)errors.push(m);};
const history=json(auth.prior_history_guards);
check(sha(read(auth.prior_history_guards))===auth.expected_prior_history_guards_sha256,'History guard inventory changed.');
for(const guard of history)check(sha(read(guard.path))===guard.sha256,'Changed prior history/current source/claim: '+guard.path);
check(sha(read('research/published-consumer-supplier-ledger.md'))===auth.expected_initial_ledger_raw_sha256,'Ledger changed.');
const journal=read(`${auth.prior_attempt}/journal.jsonl`).toString().trim().split('\n').map(JSON.parse);
const sealed=journal.filter(x=>x.event==='ordinary-preclaimed-local-repair-recorded');
check(sealed.length===15&&new Set(sealed.map(x=>x.id)).size===15,'Wrong prior sealed count.');
check(journal.at(-1).event==='stopped-with-exact-history','Original failure history missing.');
for(const row of sealed){
 check(read(`items/${row.id}.md`).equals(read(`${auth.prior_attempt}/${row.id}.final.md`)),row.id+': prior final source changed.');
 check(json(`${auth.prior_attempt}/${row.id}.policy.json`).ok===true,row.id+': original actual policy output not successful.');
}
const candidates=[];
for(const row of auth.items){
 const before=read(row.item),{final,start,end}=verificationCandidate(before.toString(),`${auth.output_directory}/${row.id}.repair.json`);
 check(sha(before)===row.expected_current_raw_sha256,row.id+': current raw source changed.');
 check(read(row.current_archive).equals(before),row.id+': original current archive changed.');
 check(sha(final)===row.expected_candidate_raw_sha256&&read(row.candidate_archive).equals(Buffer.from(final)),row.id+': candidate bytes changed.');
 check(stripVerification(final)===stripVerification(before.toString()),row.id+': stripped mathematics changed.');
 candidates.push({id:row.id,source:row.item,candidate:row.candidate_archive,verification_span:{start,end},strip_verification_exact:true,current_raw_sha256:sha(before),candidate_raw_sha256:sha(final)});
}
check(auth.items.length===7,'Wrong continuation target count.');
const report={checked_at:new Date().toISOString(),prior_sealed_receipts:sealed.length,remaining_candidates:candidates.length,total:sealed.length+candidates.length,prior_raw_history_guards:history.length,errors,candidates,limitations:'Read-only raw-source/history and candidate verification only. No source/ledger/claim/receipt/native write, precheck, renderer or proof-layout run; no mutation utility executed.'};
process.stdout.write(JSON.stringify(report,null,2)+'\n');
if(errors.length)process.exitCode=1;
