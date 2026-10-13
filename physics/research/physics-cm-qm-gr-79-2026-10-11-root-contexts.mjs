import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
import {externalContextReceipt} from '../tools/physics-support/step3-escalations.mjs';
import {splitFrontmatter,sourceSectionText} from '../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',root=process.cwd();
const read=p=>JSON.parse(readFileSync(p,'utf8')),sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=v=>sha(JSON.stringify(canonical(v)));
const path=`research/${run}-step3-owner-external-context.json`,receipt=read(path);
writeFileSync(`research/${run}-root-context-receipt.before.json`,readFileSync(path));
const scope=read(`research/${run}-step3-scope-66.json`),finding=scope.reader_findings.find(r=>r.obligation==='reader:66:1');
const supplier=finding.id,consumer=finding.consumer_id;
const s=readFileSync(`items/${supplier}.md`,'utf8'),c=readFileSync(`items/${consumer}.md`,'utf8');
const evidence=[`research/${run}-root-tensor-context-review.json`,`research/${run}-owner-escalation-investigations/gr-tensor-tt-resolution.md`,`research/${run}-owner-escalation-investigations/gr-tensor-native-yaml-consumer-review-supplement.json`];
const maintenance=readFileSync('research/published-consumer-supplier-ledger.md','utf8').split('\n').find(line=>line.startsWith('Evidence: the chart convention J='));
if(!maintenance)throw Error('Missing exact retained tensor maintenance quote');
const entry={obligation:'reader:66:1',group:'batch-66',supplier_id:supplier,consumer_id:consumer,finding_sha256:hash(finding),supplier_math_sha256:itemHashGuard(s),consumer_math_sha256:itemHashGuard(c),
 used_clause:sourceSectionText(splitFrontmatter(s).body,'Statement').trim(),premise_quotes:[sourceSectionText(splitFrontmatter(c).body,'Definition').trim()],
 review:{completed:true,confidence:1,verdict:'sound_under_explicit_consumer_premises',prerequisites:'supplied',
 evidence:'Root independently read the entire imported theorem, actual cocycle proof, tensor definitions, owned consumer and complete new local construction; upper J and lower inverse J factors follow from multilinear evaluation, identity/composition from C_y C_x inverse cancellation, the countable restricted chart cover from explicit AC omega, and quotient transport from the supplied sound cocycle theorem; component smoothness exactly characterizes sections in these charts, including empty and scalar cases; the owned four-manifold therefore has the entire required bundle structure independently of the defective imported proof, while the original mathematics maintenance remains open',
 evidence_refs:evidence.map(path=>({path,sha256:sha(readFileSync(path))}))},
 maintenance:{path:'research/published-consumer-supplier-ledger.md',disposition:'open',defect_id:`${run}-owner-tensor-transition-original-maintenance-open`,quote:maintenance}};
if(receipt.contexts.some(e=>e.obligation===entry.obligation))throw Error('Tensor context already registered');
receipt.contexts.push(entry);receipt.reviewed_at=new Date().toISOString();
for(const e of receipt.contexts){
 e.supplier_math_sha256=itemHashGuard(readFileSync(`items/${e.supplier_id}.md`,'utf8'));
 e.consumer_math_sha256=itemHashGuard(readFileSync(`items/${e.consumer_id}.md`,'utf8'));
}
writeFileSync(path,JSON.stringify(receipt,null,2)+'\n');
const digest=sha(readFileSync(path));
for(const e of receipt.contexts){
 const decisionPath=`research/${run}-alpha-${e.group}-3a-decisions.json`,doc=read(decisionPath),row=doc.decisions.find(r=>r.obligation===e.obligation);
 writeFileSync(`research/${run}-root-context-${e.group}-decisions.before.json`,readFileSync(decisionPath));
 if(e.obligation==='reader:66:1')Object.assign(row,{verdict:'context_accepted',repair_confidence:1,defect_ids:[],evidence:entry.review.evidence});
 row.context_receipt_sha256=digest;writeFileSync(decisionPath,JSON.stringify(doc,null,2)+'\n');
 const result=externalContextReceipt(root,run,row,null,e.group);if(!result.valid)throw Error(result.error);
 row.context_evidence=result.seal;row.subject_sha256=hash({item_sha256:sha(readFileSync(`items/${row.id}.md`)),context_evidence:result.seal});
 writeFileSync(decisionPath,JSON.stringify(doc,null,2)+'\n');
 console.log(e.obligation,'exact local context valid; original maintenance remains OPEN');
}
