// Research-only explicit proposal assembly from the retained current inventory.
// No canonical writes, native check invocation, hashes or acceptance claims.
import fs from 'node:fs';
import path from 'node:path';
import { splitFrontmatter, sourceSectionText } from '../../tools/facts-block.mjs';
const D=path.dirname(new URL(import.meta.url).pathname);
const j=JSON.parse(fs.readFileSync(path.join(D,'initial-inventory.json'),'utf8'));
const norm=s=>String(s??'').replace(/\s+/g,' ').trim();
const observed=p=>path.join(D,'observed-inputs',p);
const guard=p=>({path:p,expected_full_bytes_file:observed(p),observation:'Exact bytes at inventory read; root must refresh after relevant writer drain, never force through drift.'});
const rowReasons={
 'thm-convex-kkt-sufficiency-and-normal-cone-certificate':'The old whole Statement omitted the now-explicit finite inequality count and feasible-set definition. Preserve the complete current KKT hypotheses/conclusion in the copied Statement.',
 'def-total-derivative-in-euclidean-space':'The old Definition used a punctured quotient as the definition. Current text starts from the normwise remainder estimate, names Df, and separately recovers the positive-dimensional quotient. Select exact source paragraphs supporting the named first-order-approximation fact; this metadata inventory does not review the underlying zero-dimensional repair.',
 'alg-csr-matrix-vector-product-with-validation':'The old whole Definition included a removed runtime justification. The current Definition still displays the same finite stored-entry loop used by F2; replace the obsolete complete copy with its current exact section.',
 'def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma':'The old whole Definition lacks the current explicit finite binary-format/precision/range specialization. Copy the actual current Definition, preserving the no-underflow success condition and operation-count conventions.',
 'thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases':'The old complete Statement lacks Pb nonzero in the collapsed unwanted-interval branch. Copy the current complete Statement; consumer F1 already distinguishes the relevant branches.',
 'def-outward-rounded-interval-and-ball-operations':'The invalid whole copy differs in its complex reciprocal branch, whereas this F1 concerns only real endpoint formulas. Quote the exact current real-interval paragraph with its operation/domain/formula/storage rules; no unrelated complex/ball text is required for this fact.',
 'lem-discrete-one-step-error-recurrence-bound':'This is the one still-stale quote in the prior 14-quote packet. Copy the actual current typed positive-base Statement, retaining both L branches.',
 'alg-implicit-stiff-time-stepper-with-consistent-starts':'The old whole procedure copy is stale, but this F3 only consumes the work log and its accuracy limitation. Quote the exact current Work record paragraph, without copying unrelated procedure/domain changes.',
 'lem-of-naturals-positive':'The existing short quotation ends the first bullet with a period, while the actual source uses a semicolon. Replace only that punctuation in the exact short excerpt; do not expand it.',
 'lem-parameter-ode-flow-tangent-on-common-tube':'The old whole Statement omits the current T=0 evaluation-only branch and T>0 variational-IVP qualification. Copy the actual current whole Statement; active/root-named writer exposure and the existing same-owner substantive disposition remain root obligations.',
 'def-real-frechet-derivative-on-real-and-complex-matrix-spaces':'The old Definition used a punctured matrix quotient. Select the actual current normwise-estimate and derivative-naming paragraphs for F5/F7, or the exact opening real-vector-space typing paragraph for the complex-as-real F2. No mathematical source repair or independent review is claimed.',
 'def-finite-product-chaos-input':'The old complete Definition used an unqualified support/product-space shorthand. Copy the current exact Definition with its full-mass restricted-measure convention and unchanged finite-degree/admissibility scope.',
 'def-chaos-orthonormal-tensor-basis':'The old complete Definition omits the inserted full-mass restriction/product-measure convention. Copy the actual complete Definition while retaining the finite-basis and no-density qualifications.'
};
const discarded=[];const frozen=[];const ops=[];
for(const r of j.discrepancies){
 if(r.type==='manifest-source-projection'&&JSON.stringify(r.before)===JSON.stringify(r.after)){
  discarded.push({...r,disposition:'exact-before-after-noop; initial duplicate-set comparison artifact'});continue;
 }
 if(r.frozen_target){frozen.push({...r,fullbyte_guards:[guard(r.target),guard(r.source)],disposition:'INVENTORY ONLY: whole manifests/contracts batches1,33,77 frozen; no operation proposed.'});continue;}
 const o={...r,pointer:'/'+r.path.map(k=>String(k).replace(/~/g,'~0').replace(/\//g,'~1')).join('/'),status:'DRAFT root review and after-drain refreshed guards required'};
 if(r.type==='citation-quote'){
  if(!r.current_source_section)throw Error('No permitted exact source section; leave open rather than invent fallback.');
  let after=r.current_source_section;
  const supplier=path.basename(r.source,'.md');
  if(supplier==='def-total-derivative-in-euclidean-space'){
   // Positive-dimensional quotient fact needs the equivalent-limit paragraph too.
   after=after.split('\n\nWhen $m=0$')[0];
   if(r.batch===29)after=after.split('\n\nFor $m\\ge1$')[0];
  }
  if(supplier==='def-real-frechet-derivative-on-real-and-complex-matrix-spaces'){
   after=r.id==='cor-finite-basis-energy-model-has-c1-response'?after.split('\nWe say that')[0]:after.split(' When the source matrix space')[0];
  }
  if(supplier==='def-outward-rounded-interval-and-ball-operations')after=after.split('\n\n')[0];
  if(supplier==='alg-implicit-stiff-time-stepper-with-consistent-starts')after=after.slice(after.indexOf('**Work record.**'));
  if(supplier==='lem-of-naturals-positive')after=r.before.replace(/\.$/,';');
  const raw=fs.readFileSync(observed(r.source),'utf8');const sec=sourceSectionText(splitFrontmatter(raw).body,r.source_section);
  if(!after.trim()||!norm(sec).includes(norm(after)))throw Error(`Proposed excerpt is not actual named-section text: ${r.id}`);
  o.after=after;o.reason=rowReasons[supplier];o.quote_policy='Existing invalid row only. All 8,624 already-valid quotes, including228 short excerpts, remain untouched.';
 }
 o.fullbyte_guards=[guard(r.target),guard(r.source),...(r.consumer_source&&r.consumer_source!==r.source?[guard(r.consumer_source)]:[])];
 const flagged=new Set();
 if([14,96,105].includes(r.batch))flagged.add(r.batch);
 const sm=path.basename(r.source,'.md');
 for(let n=1;n<=107;n++){
  const p=`research/numerical-optimization-dynamics-2026-10-16-batch-${n}.pages.json`;
  const raw=fs.readFileSync(observed(p),'utf8');
  if([14,96,105].includes(n)&&raw.includes(`"id": "${sm}"`))flagged.add(n);
 }
 o.writer_exposure={root_named_active_batches:[...flagged],observation:j.native_writer_observation,hold:'All rows remain drafts. Root rechecks active/queued writers and fresh exact field/full-byte guards before applying.'};
 o.preserve='Every other field: source_section, citation uses/reviews, native derivations/steps/scores/classifications, risk, smoke, interfaces and historical evidence. No optional manifest Statement projection.';
 ops.push(o);
}
const previousPath='research/numerical-optimization-dynamics-2026-10-16-owner-step3-current-metadata-proposal/inventory-and-operations.json';
const prior=JSON.parse(fs.readFileSync(previousPath,'utf8'));const comparison=[];
for(const r of prior.operations){
 const raw=fs.readFileSync(observed(r.target),'utf8');const doc=JSON.parse(raw);let v=doc,exists=true;
 for(let k of r.pointer.slice(1).split('/')){k=k.replace(/~1/g,'/').replace(/~0/g,'~');if(Array.isArray(v))k=Number(k);if(v===null||typeof v!=='object'||!Object.hasOwn(v,k)){exists=false;break;}v=v[k];}
 comparison.push({batch:r.batch,id:r.id,target:r.target,pointer:r.pointer,status:r.pointer.endsWith('/statement')?'EXCLUDED optional manifest Statement add/expansion':exists&&JSON.stringify(v)===JSON.stringify(r.after)?'ALREADY CURRENT; no operation':exists&&JSON.stringify(v)===JSON.stringify(r.before)?'STILL STALE; fresh row in this packet':'CHANGED; no replay of prior operation'});
}
const manifestIds=new Set();for(let b=1;b<=107;b++){for(const p of JSON.parse(fs.readFileSync(observed(`research/numerical-optimization-dynamics-2026-10-16-batch-${b}.pages.json`),'utf8')))for(const it of [...p.items??[],...p.examples??[]])manifestIds.add(typeof it==='string'?it:it.id);}
const final={run:j.run,status:'Research-only coordinate proposals. No application, native validation, hashing or mathematical acceptance.',parser_basis:'Actual tools/facts-block.mjs sourceSectionText and splitFrontmatter; tools/frontmatter-list.mjs for inline/block deps; native whitespace-normalized substring rule. Direct helper parsing, not a native gate run.',scope:{batches:107,manifest_item_ids:manifestIds.size,contract_quote_rows:j.counts.valid_quotes+j.counts.invalid_quote_rows},counts:{operations:ops.length,quote_operations:ops.filter(r=>r.type==='citation-quote').length,projection_operations:ops.filter(r=>r.type==='manifest-source-projection').length,frozen_discrepancies:frozen.length,identical_noops_discarded:discarded.length,valid_quotes_untouched:j.counts.valid_quotes,valid_short_quotes_untouched:j.counts.valid_short_quotes,scope_issues:j.scope_issues.length,optional_statement_operations:0},frozen_target_batches:[1,33,77],operations:ops,frozen_inventory:frozen,discarded_noops:discarded,previous_packet_comparison:comparison,scope_issues:j.scope_issues,native_writer_observation:j.native_writer_observation,guard_warning:'Full-byte guards are observation snapshots, not refreshed after-drain authorization. Root owns writer protection, source/native mathematical disposition and refreshed field guards; no executable apply utility is supplied.'};
fs.writeFileSync(path.join(D,'inventory-and-operations.json'),JSON.stringify(final,null,2)+'\n',{flag:'wx'});
const simple=ops.map((r,i)=>({index:i,batch:r.batch,id:r.id,type:r.type,target:r.target,pointer:r.pointer,source:r.source,source_section:r.source_section??null,before:r.before,after:r.after,before_exists:r.before_exists,frozen_target:false,root_named_writer_exposure:r.writer_exposure.root_named_active_batches}));
fs.writeFileSync(path.join(D,'concise-operations.json'),JSON.stringify(simple,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(final.counts));
