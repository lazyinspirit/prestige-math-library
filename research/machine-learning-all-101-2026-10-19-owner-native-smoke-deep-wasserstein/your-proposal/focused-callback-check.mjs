import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
import {deepWassersteinMLChecks as checks} from './proposed/tools/finite-smoke-deep-wasserstein-ml.mjs';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../../..'),ops=JSON.parse(fs.readFileSync(path.join(base,'root-integration-operations.json'))),coverage=JSON.parse(fs.readFileSync(path.join(base,'obligation-coverage.json'))),normal=s=>s.replace(/\s+/g,' ').trim(),sha=raw=>crypto.createHash('sha256').update(raw).digest('hex'),outcomes=[],errors=[];
if(Object.keys(checks).length!==14 || new Set(coverage.bindings.map(x=>x.check)).size!==14)errors.push('The original14 obligations do not map bijectively to14 callbacks');
for(const op of ops.finite_smoke_array_field_CAS){const current=JSON.parse(fs.readFileSync(path.join(root,op.file)));if(JSON.stringify(current.contracts[op.consumer].finite_smoke)!==JSON.stringify(op.expected))errors.push(`CAS preimage drift: ${op.consumer}`);if(op.expected.length!==op.replacement.length)errors.push(`obligation removed: ${op.consumer}`);}
let rejected=0;
for(const b of coverage.bindings){
 const raw=fs.readFileSync(path.join(root,b.source_path),'utf8');if(sha(raw)!==b.source_sha256||!normal(raw).includes(normal(b.exact_current_asserts)))errors.push(`source/assertion drift: ${b.id}`);
 for(const [key,value] of Object.entries(b.original_obligation))if(!['check','asserts'].includes(key)&&JSON.stringify(b.proposed_obligation[key])!==JSON.stringify(value))errors.push(`original field lost: ${b.id}.${key}`);
 if(b.original_obligation.check!==undefined&&b.proposed_obligation.original_check!==b.original_obligation.check)errors.push(`original check history missing: ${b.id}`);
 if(b.original_obligation.asserts!==undefined&&b.proposed_obligation.original_asserts!==b.original_obligation.asserts)errors.push(`original assertion history missing: ${b.id}`);
 const fn=checks[b.check],outcome=fn(b.proposed_obligation);outcomes.push({id:b.id,index:b.index,check:b.check,...outcome});if(!outcome.ok)errors.push(`finite computation failed: ${b.check}: ${outcome.summary}`);
 const invalid=[{...b.proposed_obligation,check:'ml101-invalid-selector'},{...b.proposed_obligation,fixture:'not-the-original-fixture'},{...b.proposed_obligation,horizon:999},{...b.proposed_obligation,unknown_parameter:NaN},null,[]];
 for(const key of ['dimension','particles','path_segments','max_support_points'])invalid.push({...b.proposed_obligation,[key]:-1});
 for(const fixture of invalid){const response=fn(fixture);if(response?.ok!==false)errors.push(`invalid selector accepted: ${b.check}`);else rejected++;}
}
const report={ok:errors.length===0,proposal_only:true,native_gate_credit:false,positive_callbacks:outcomes.length,invalid_selectors_rejected:rejected,errors,outcomes};fs.writeFileSync(path.join(base,'focused-callback-results.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({ok:report.ok,positive_callbacks:outcomes.length,invalid_selectors_rejected:rejected,errors},null,2));process.exitCode=errors.length?1:0;
