import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
import {ownerReviewedFindingAlias as candidate} from '../page-alias-patch/step3-owner-finding-alias.candidate.mjs';
import {ownerReviewedFindingAlias as baseline} from '../page-alias-patch/step3-owner-finding-alias.before.mjs';
const out=path.dirname(fileURLToPath(import.meta.url)),root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',group='batch-106';const sha=b=>crypto.createHash('sha256').update(b).digest('hex');const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;const hash=v=>sha(JSON.stringify(canonical(v))??'undefined');
const proposal=JSON.parse(fs.readFileSync(path.join(out,'proposal.json'))),receiptRaw=fs.readFileSync(path.join(out,'canonical-alias-receipt.proposal.json')),receipt=JSON.parse(receiptRaw),patch=JSON.parse(fs.readFileSync(path.join(out,'decision-field-patch.proposal.json')));
assert.equal(sha(receiptRaw),proposal.proposed_receipt_raw_sha256);assert.equal(sha(fs.readFileSync(path.join(root,proposal.decision_guard.path))),proposal.decision_guard.sha256);
const fixture=fs.mkdtempSync(path.join(out,'exact-root-record-fixture-'));try{
 const write=(p,b)=>{const f=path.join(fixture,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,b)};
 for(const [p,h] of Object.entries(receipt.inputs)){const b=fs.readFileSync(path.join(root,p));assert.equal(sha(b),h,p);write(p,b)}
 write(proposal.intended_live_receipt_path,receiptRaw);
 const scope=JSON.parse(fs.readFileSync(path.join(root,receipt.aliases[0].frozen_scope_guard.path)));const prior={obligation:'reader:106:1',id:'qsmx-integrable-transfer',route:'reader',verdict:'confirmed_fatal',target:scope.reader_findings.find(f=>f.obligation==='reader:106:1')};const target=scope.refuter_findings.find(f=>f.obligation==='refuter:106:1');
 assert.equal(candidate(fixture,run,group,prior,patch.after,target,hash),true,'actual-root-record proposed receipt');assert.equal(baseline(fixture,run,group,prior,patch.after,target,hash),false,'baseline remains item-only');
 write(proposal.root_record.path,Buffer.from('changed root record'));assert.equal(candidate(fixture,run,group,prior,patch.after,target,hash),false,'root record must stay exactly bound');
 const report={run,result:'pass',checks:['All9actualreceiptinputguards current','Currentnative106decisionguard current','ExactproposedreceiptSHA equals decision same_defect_receipt_sha256','Isolated candidate accepts actualrootrecord/proposedreceipt/current106findings','Baseline item-only helper rejects sameactualpage receipt as expected','Candidate rejects fixture rootrecord mutation'],fixture_only:true,canonical_helper_edited:false,live_receipt_written:false,live_decision_edited:false};
 fs.writeFileSync(path.join(out,'preflight-result.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
}finally{fs.rmSync(fixture,{recursive:true,force:true})}
