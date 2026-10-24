import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { originalPresentationChanges, validateOriginalPresentationReviews } from './original-presentation-maintenance.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const reason = 'Synthetic fixture review of this exact byte-bound delta and unchanged mathematical hypotheses, with no actual scientific approval or native permission.';
const limits = 'Synthetic fixtures only: no real source reading, authority, consumer approval, import adoption, publication or native acceptance is conferred by these tests.';
function fixture({kind='theorem', title='A C^1 assertion', primary, extra=''}={}) {
  primary ??= kind==='definition'?'Definition':'Statement';
  const before=`---\nid: ${kind==='definition'?'def':'thm'}-fixture\nkind: ${kind}\ntitle: ${title}\nstatus: published\ndeps: [def-target]\nprovenance: {statement: literature-derived, proof: ${kind==='definition'?'not-applicable':'ai-altered'}}\nverification: {audited: 2026-09-30, precheck: pass}\n---\n\n## ${primary}\n\nThe given object is [[def-target]].\n\n${kind==='definition'?'': '## Facts & Assumptions\n\n**Given:** The object.\n\n[F1] The target [[def-target]] gives the identity.\n\n## Proof\n\n**Proof technique:** direct.\n\n1.1 The identity follows. [F1, given]\n'}${extra}`;
  const after=before.replace('verification: {audited: 2026-09-30, precheck: pass}',`verification: {repair: research/demo-repair.json, precheck: ${kind==='definition'?'n/a':'pass'}}`);
  return {before,after};
}
function reviewed(before,after) {
  const changes=originalPresentationChanges(Buffer.from(before),Buffer.from(after));
  const target=Buffer.from('---\nid: def-target\nkind: definition\nstatus: published\ntitle: Target\n---\n## Definition\nExact fixture target.\n');
  const targetPin={path:'items/def-target.md',sha256:sha(target)}, evidence={path:'research/demo-root-review.json',sha256:sha('fixture evidence')};
  const entry={presentation_version:2,pinned_sha256:sha(before),original_sha256:sha(after),changes,
    scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason,reading_limits:limits},
    presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason,reading_limits:limits,evidence:[evidence],...(d.target?{pinned_target:targetPin}:{})}))};
  const context={receipt:{files:[targetPin]},scope:{importedItems:new Set(['def-target']),paths:new Set([targetPin.path])},
    bind:(p,h)=>{assert.equal(p,targetPin.path);assert.equal(h,targetPin.sha256);return target;},
    localEvidence:ref=>{assert.deepEqual(ref,evidence);return Buffer.from('fixture evidence');}};
  return {entry,changes,context,validate:()=>validateOriginalPresentationReviews(entry,changes,context)};
}
test('title pairs are exact reviewed data, never inferred semantic approval',()=>{
  const f=fixture(),after=f.after.replace('A C^1 assertion','A completely differently spelled assertion');
  const r=reviewed(f.before,after);assert.equal(r.changes.title.after,'A completely differently spelled assertion');assert.ok(r.validate());
  r.entry.presentation_reviews=[];assert.throws(r.validate,/delta reviews/);
});
test('Statement and Given/Fact labels preserve exact targets and require individual pinned evidence',()=>{
  const f=fixture(),after=f.after.replaceAll('[[def-target]]','[[def-target|A $C^1$ target]]');
  const r=reviewed(f.before,after);assert.equal(r.changes.deltas.length,2);assert.equal(r.changes.review_classification.statements,'reference-labels-only');assert.equal(r.changes.review_classification.facts,'reference-labels-only');assert.ok(r.validate());
  r.entry.scientific_review.statements='identical';assert.throws(r.validate,/classification/);r.entry.scientific_review.statements='reference-labels-only';
  delete r.entry.presentation_reviews[0].pinned_target;assert.throws(r.validate,/reference target/);
});
test('explicit bracket-escaping Definition label is represented without changing its target',()=>{
  const f=fixture({kind:'definition'}),before=f.before.replace('[[def-target]]',String.raw`[[def-target|$R[\pi]$]]`),after=f.after.replace('[[def-target]]',String.raw`[[def-target|$R\lbrack\pi\rbrack$]]`);
  const r=reviewed(before,after);assert.equal(r.changes.deltas[0].target,'def-target');assert.ok(r.validate());
});
test('Definition separator and final derived TikZ Remarks need separate exact reviews',()=>{
  const f=fixture({kind:'definition'}),after=f.after+'\n## Remarks\n\nThis diagram restates the supplied definition.\n\n```tikzcd\nA \\arrow[r] & A\n```\n';
  const r=reviewed(f.before,after);assert.deepEqual(r.changes.deltas.map(d=>d.kind),['separator-whitespace','derived-exposition']);assert.equal(r.changes.review_classification.statements,'separator-only');assert.ok(r.validate());
  r.entry.presentation_reviews.pop();assert.throws(r.validate,/delta reviews/);
});
test('existing extra section bytes are protected; exact final append separator is explicit',()=>{
  const f=fixture({extra:'\n## Statement references\n\n[[def-target]]\n\n## Source notes\n\nA fixed exact source paragraph.\n'});
  const after=f.after+'\n## Remarks\n\nDerived exposition only.\n```tikzcd\nA \\arrow[r] & A\n```\n';
  const r=reviewed(f.before,after);assert.equal(r.changes.deltas[0].kind,'section-separator-whitespace');assert.ok(r.validate());
  assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(after.replace('fixed exact source','changed source'))),/preserved Source notes/);
});
for(const heading of ['Well-definedness','Well-formedness','Proof'])test(`Definition ${heading} suffix is protected`,()=>{
  const f=fixture({kind:'definition',extra:`\n**${heading}.** The construction agrees on overlaps.\n`});
  assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(f.after.replace('agrees on overlaps','does something else'))),/well-definedness/);
});
test('only deletion of reviewed flattened quotation markers in a named Fact is allowed',()=>{
  const f=fixture(),before=f.before.replace('[F1] The target [[def-target]] gives the identity.','[F1] The axiom is stated. > Every family has a choice function > (def-choice-function). [[def-target]]'),after=f.after.replace('[F1] The target [[def-target]] gives the identity.','[F1] The axiom is stated. Every family has a choice function (def-choice-function). [[def-target]]');
  const r=reviewed(before,after);assert.deepEqual(r.changes.deltas.map(d=>d.kind),['stray-blockquote-deletion','stray-blockquote-deletion']);assert.equal(r.changes.review_classification.facts,'quotation-only');assert.ok(r.validate());
  r.entry.scientific_review.facts='identical';assert.throws(r.validate,/classification/);
});
for(const expression of ['x > y','$x > y$','5 > 3','A > B','`statement. > Every family`'])test(`stray quote deletion rejects comparison/code: ${expression}`,()=>{
  const f=fixture(),a=f.before.replace('The target [[def-target]] gives the identity.',`${expression}. [[def-target]]`),b=f.after.replace('The target [[def-target]] gives the identity.',`${expression.replace('> ','')}. [[def-target]]`);
  assert.throws(()=>originalPresentationChanges(Buffer.from(a),Buffer.from(b)),/Facts text/);
});
test('proof-step presentation retains numbered sequence/support and needs an exact review',()=>{
  const f=fixture(),after=f.after.replace('The identity follows.','The unchanged identity follows by the same reflexive relation.');
  const r=reviewed(f.before,after);assert.equal(r.changes.steps.length,1);assert.ok(r.validate());
  r.entry.presentation_reviews[0].delta_sha256='0'.repeat(64);assert.throws(r.validate,/unreviewed V2 delta/);
  assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(after.replace('[F1, given]','[F2, given]'))),/support/);
  assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(after.replace('1.1 ','2.1 '))),/sequence/);
});
for(const [name,edit]of [
 ['mathematical Statement',s=>s.replace('The given object is','A different asserted property is')],
 ['reference target',s=>s.replace('[[def-target]]','[[def-other]]')],
 ['Fact sentence',s=>s.replace('gives the identity','requires a new mathematical premise')],
 ['new scientific section',s=>s+'\n## New theorem\nNew conclusion.\n'],
 ['deleted section',s=>s.replace('## Facts & Assumptions','## Unrelated section')],
 ['scientific dependency',s=>s.replace('deps: [def-target]','deps: [def-other]')],
 ['source bibliography',s=>s.replace('provenance:','sources: {references: [new-source]}\nprovenance:')],
 ['provenance',s=>s.replace('literature-derived','ai-altered')],
 ['kind',s=>s.replace('kind: theorem','kind: definition')],
])test(`extractor rejects ${name} change`,()=>{const f=fixture();assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(edit(f.after))),/Invalid original presentation successor/);});
test('V2 rejects wrong source hashes, missing evidence, fabricated classification and unbound targets',()=>{
  const f=fixture(),after=f.after.replaceAll('[[def-target]]','[[def-target|Target]]');
  for(const mutate of [r=>r.entry.pinned_sha256='0'.repeat(64),r=>r.entry.presentation_reviews[0].evidence=[],r=>r.entry.scientific_review.new_results=true,r=>r.entry.changes={...r.changes,title:null,extra:true},r=>r.context.scope.paths.clear()]){
    const r=reviewed(f.before,after);mutate(r);assert.throws(r.validate);
  }
});
test('existing Remarks cannot be rewritten and new Remarks must contain the explicit TikZ exposition',()=>{
  const f=fixture({extra:'\n## Remarks\nA fixed mathematical qualification.\n'});
  assert.throws(()=>originalPresentationChanges(Buffer.from(f.before),Buffer.from(f.after.replace('fixed mathematical','different'))),/preserved Remarks/);
  const g=fixture();assert.throws(()=>originalPresentationChanges(Buffer.from(g.before),Buffer.from(g.after+'\n## Remarks\nJust a new claim.\n')),/TikZ/);
});

test('literal terminal old QED macro becomes explicit reviewed final-step delta',()=>{
  const f=fixture(),before=f.before.replace('[F1, given]\n','[F1, given] \\qed \n'),after=f.after.replace('[F1, given]\n','[F1, given] ∎\n');
  const r=reviewed(before,after);assert.equal(r.changes.deltas.length,1);const d=r.changes.deltas[0];assert.equal(d.kind,'proof-terminal-qed');assert.equal(d.terminal_qed.before_marker,'\\qed');assert.equal(d.terminal_qed.after_marker,'∎');assert.equal(d.terminal_qed.before_suffix,' \\qed \n');assert.ok(r.validate());
  r.entry.presentation_reviews=[];assert.throws(r.validate,/delta reviews/);
});
test('terminal QED shape cannot mask proof math or support changes',()=>{
  const f=fixture(),before=f.before.replace('[F1, given]\n','[F1, given] \\qed\n'),after=f.after.replace('[F1, given]\n','[F1, given] ∎\n');
  for(const changed of [after.replace('The identity follows.','The identity is false.'),after.replace('[F1, given]','[F2, given]')])assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(changed)),/terminal QED repair changed proof text/);
});
test('terminal QED does not admit new hypotheses or interfaces',()=>{
  const f=fixture(),before=f.before.replace('[F1, given]\n','[F1, given] \\qed\n'),after=f.after.replace('[F1, given]\n','[F1, given] ∎\n');
  for(const changed of [after.replace('**Given:** The object.','**Given:** An extra hypothesis.'),after.replace('The given object is','A stronger object is')])assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(changed)),/scientific/);
});
test('nonterminal QED repair and arbitrary old macro markers fail',()=>{
  const f=fixture();
  for(const marker of ['\\qedsymbol','\\square','\\foo','\\\\qed']){const before=f.before.replace('[F1, given]\n',`[F1, given] ${marker}\n`),after=f.after.replace('[F1, given]\n','[F1, given] ∎\n');assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(after)),/support|terminal QED/);}
  const before=f.before.replace('[F1, given]\n','[F1, given] \\qed\n\n2.1 A final independent step. [F1]\n'),after=f.after.replace('[F1, given]\n','[F1, given] ∎\n\n2.1 A final independent step. [F1]\n');assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(after)),/support/);
});
test('new terminal QED requires literal final Unicode square, not deletion or arbitrary new macro',()=>{
 const f=fixture(),before=f.before.replace('[F1, given]\n','[F1, given] \\qed\n');for(const marker of ['', '\\qedsymbol','\\square','∎ extra']){const after=f.after.replace('[F1, given]\n',`[F1, given] ${marker}\n`);assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(after)),/support/);}
});
