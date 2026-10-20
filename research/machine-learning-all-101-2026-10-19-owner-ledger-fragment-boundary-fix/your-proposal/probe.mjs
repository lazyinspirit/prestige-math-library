// Read-only actual-input probe; writes only stdout. Never invokes the --apply helper.
import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';
import * as old from '../../../tools/step6-ledger-fragment.mjs';
import * as candidate from './tools/step6-ledger-fragment.mjs';
import {runScope,splitFrontmatter} from '../../../tools/step6-lib.mjs';import {yaml} from '../../../tools/pathway-lib.mjs';
const root=process.cwd(),run='machine-learning-all-101-2026-10-19',p='research/published-consumer-supplier-ledger.md',hash=x=>createHash('sha256').update(x).digest('hex'),read=p=>fs.readFileSync(p,'utf8');
const git=args=>execFileSync('git',args,{encoding:'utf8',maxBuffer:40e6}),head=git(['rev-parse','HEAD']).trim(),index=git(['rev-parse',':'+p]).trim();
const bases={head:git(['show',head+':'+p]),index:git(['cat-file','blob',index])},working=read(p),scope=runScope(run,root),ids=new Set([...scope.items,...scope.pages].map(x=>x.id));
const claims=read(`research/${run}-step3-published-claims.jsonl`).trim().split('\n').map(JSON.parse),receiptByMarker=new Map();
function visit(path){const raw=read(path),receipt=JSON.parse(raw),ref={path,sha256:hash(raw)};if(receiptByMarker.has(receipt.ledger_marker)){assert.equal(receiptByMarker.get(receipt.ledger_marker).sha256,ref.sha256);return;}receiptByMarker.set(receipt.ledger_marker,ref);if(receipt.previous_repair?.path.startsWith(`research/${run}-`)){assert.equal(hash(read(receipt.previous_repair.path)),receipt.previous_repair.sha256);visit(receipt.previous_repair.path);}}
for(const c of claims){ids.add(c.id);visit(yaml().parse(splitFrontmatter(read(`items/${c.id}.md`)).frontmatter).verification.repair);}
const mode={version:2,kind:'published-local-repair-marker-additions'},records=candidate.fragmentRecords(working,run,ids,mode).filter(r=>r.owned),refs=records.map(r=>({marker:r.marker,...receiptByMarker.get(r.marker)}));assert.equal(records.length,receiptByMarker.size);
const spec={...mode,run,path:p,authorized_by:'owner',authorization:'Read-only reproduction of existing genuine repair blocks; this in-memory fixture grants no commit authority.',base_owned_records:[],target_owned_records:records.map(r=>r.text),evidence:refs.map(({path,sha256})=>({path,sha256})),record_receipts:refs};
old.validateFragment(spec,run,ids,working,{root});candidate.validateFragment(spec,run,ids,working,{root});
const report={version:1,run,head,index_blob:index,working_sha256:hash(working),genuine_marker_blocks:records.length,published_claims:claims.length,receipt_validation:'both original and candidate pass',bases:{}};
for(const [name,base]of Object.entries(bases)){
 const prior=old.fragmentRecords(base,run,ids,mode);assert.equal(prior.filter(r=>r.owned).length,0);
 assert.throws(()=>old.composeFragment(base,spec,run,ids),/composition changed owned projection or foreign residual/);
 const result=candidate.composeFragment(base,spec,run,ids),before=candidate.fragmentRecords(base,run,ids,mode).filter(r=>!r.owned).map(r=>candidate.recordSignature(r.text)),after=candidate.fragmentRecords(result.text,run,ids,mode).filter(r=>!r.owned).map(r=>candidate.recordSignature(r.text));assert.deepEqual(after,before);
 assert.deepEqual(candidate.fragmentRecords(result.text,run,ids,mode).filter(r=>r.owned).map(r=>r.text),spec.target_owned_records);
 let restored=result.text;for(const ins of [...result.insertions].reverse())restored=restored.slice(0,ins.at)+restored.slice(ins.at+ins.text.length);assert.deepEqual(Buffer.from(restored),Buffer.from(base));
 assert.equal(candidate.composeFragment(result.text,spec,run,ids).already_integrated,true);
 report.bases[name]={base_sha256:hash(base),base_bytes:Buffer.byteLength(base),original_foreign_records:prior.length,candidate_foreign_records:before.length,original_phantom:prior.at(-1),result_sha256:hash(result.text),result_bytes:Buffer.byteLength(result.text),insertions:result.insertions.map(i=>({at:i.at,characters:i.text.length,bytes:Buffer.byteLength(i.text),sha256:hash(i.text)})),exact_inverse_bytes:true,foreign_residual_equal:true,owned_target_equal:true,idempotent:true,original_reproduced_failure:true};
}
assert.equal(read(p),working);assert.equal(git(['rev-parse','HEAD']).trim(),head);assert.equal(git(['rev-parse',':'+p]).trim(),index);
for(const suffix of ['step6-plan-projection.json','step6-published-ledger-fragment.json','closeout-scope.json','owner-closeout-scope-application.json'])assert.equal(fs.existsSync(`research/${run}-${suffix}`),false);
report.working_and_git_bases_unchanged=true;report.authorities_absent=true;report.native_state={paused:JSON.parse(read(`.autopilot/${run}/state.json`)).paused,stage:JSON.parse(read(`.autopilot/${run}/state.json`)).stage};console.log(JSON.stringify(report,null,2));
