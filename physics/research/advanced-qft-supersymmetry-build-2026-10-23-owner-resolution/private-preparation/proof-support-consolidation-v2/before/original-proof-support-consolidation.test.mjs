import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { originalPresentationChanges, validateOriginalPresentationReviews } from './original-presentation-maintenance.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const option = { version: 1, steps: ['2.2'] };
const before = `---\nid: thm-fixture\nkind: theorem\ntitle: A fixed theorem\nstatus: published\ndeps: []\n---\n\n## Statement\n\nA fixed conditional conclusion.\n\n## Facts & Assumptions\n\n[F2] A fixed premise.\n\n[F4] Another fixed premise.\n\n## Proof\n\n1.1 A fixed earlier step. [F2]\n\n2.2 By [F2], [F2, F4, step 1.1]\n\n$$ x=y, $$\n\nso the conclusion holds. [F2, F4]\n`;
const after = before.replace('[F2, F4, step 1.1]\n\n$$ x=y, $$\n\nso the conclusion holds. [F2, F4]', '$x=y$, so the conclusion holds. [F2, F4, step 1.1]');
const extract = (a=before,b=after,o=option) => originalPresentationChanges(Buffer.from(a),Buffer.from(b),o);
function reviewed() {
  const changes=extract(),evidence={path:'research/exact-fixture-review.json',sha256:sha('exact fixture evidence')};
  const explanation='Synthetic exact byte-bound support consolidation review only, preserving the same premise set and all surrounding scientific expressions; no real scientific acceptance.';
  const entry={presentation_version:2,proof_support_consolidation:structuredClone(option),pinned_sha256:sha(before),original_sha256:sha(after),changes,
    scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason:explanation,reading_limits:explanation},
    presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reason:explanation,reading_limits:explanation,evidence:[evidence]}))};
  return {changes,entry,validate:()=>validateOriginalPresentationReviews(entry,changes,{bind:()=>{throw Error('unexpected target');},localEvidence:e=>{assert.deepEqual(e,evidence);return Buffer.from('exact fixture evidence');}})};
}
test('exact per-step opt-in consolidates one actual prose cluster and preserves scientific tokens',()=>{
  assert.throws(()=>originalPresentationChanges(Buffer.from(before),Buffer.from(after)),/support/);
  const r=reviewed(),d=r.changes.deltas[0];assert.equal(d.kind,'proof-support-consolidation');assert.equal(d.label,'2.2');assert.deepEqual(d.support_consolidation.support_union,['F2','F4','step 1.1']);assert.equal(d.support_consolidation.removed_cluster.text,'[F2, F4, step 1.1]');assert.equal(d.support_consolidation.display_before,'$$ x=y, $$');assert.equal(d.support_consolidation.inline_after,'$x=y$,');assert.ok(r.validate());
});
for(const [name,edit] of [
 ['added support',s=>s.replace('[F2, F4, step 1.1]','[F2, F4, step 1.1, F9]')],
 ['lost support',s=>s.replace('[F2, F4, step 1.1]','[F2, step 1.1]')],
 ['duplicate support',s=>s.replace('[F2, F4, step 1.1]','[F2, F4, F4, step 1.1]')],
 ['changed formula',s=>s.replace('$x=y$','$x=z$')],
 ['changed prose',s=>s.replace('conclusion holds','stronger conclusion holds')],
 ['changed punctuation',s=>s.replace('$x=y$,','$x=y$;')],
 ['new QED',s=>s.replace('[F2, F4, step 1.1]\n','[F2, F4, step 1.1] ∎\n')],
 ['arbitrary QED macro',s=>s.replace('[F2, F4, step 1.1]\n','[F2, F4, step 1.1] \\qedsymbol\n')],
 ['changed step',s=>s.replace('2.2 By','2.3 By')],
]) test(`support consolidation rejects ${name}`,()=>assert.throws(()=>extract(before,edit(after)),/Invalid original presentation successor/));
for(const [name,edit] of [
 ['inline code',s=>s.replace('[F2, F4, step 1.1]\n\n$$','`[F2, F4, step 1.1]`\n\n$$')],
 ['fenced code',s=>s.replace('2.2 By [F2], ', '2.2 By [F2],\n```text\n').replace('so the conclusion holds.','```\nso the conclusion holds.')],
 ['wikilink',s=>s.replace('[F2, F4, step 1.1]\n\n$$','[[F2, F4, step 1.1]]\n\n$$')],
 ['math index',s=>s.replace('[F2, F4, step 1.1]\n\n$$','$a[F2, F4, step 1.1]$\n\n$$')],
 ['math delimiter around cluster',s=>s.replace('[F2, F4, step 1.1]\n\n$$','\\([F2, F4, step 1.1]\\)\n\n$$')],
 ['comment',s=>s.replace('[F2, F4, step 1.1]\n\n$$','<!--[F2, F4, step 1.1]-->\n\n$$')],
 ['two removed clusters',s=>s.replace('[F2, F4, step 1.1]\n\n$$','[F2, F4, step 1.1]\n\n$$ a=b, $$\n\n[F2, F4, step 1.1]\n\n$$')],
]) test(`support consolidation never mines ${name}`,()=>assert.throws(()=>extract(edit(before),after),/Invalid original presentation successor/));
test('protected math, code and wikilinks outside the moved display remain exact',()=>{
  for(const [old,newText]of [['$a_b$','$a_c$'],['`fixed text`','`changed text`'],['[[def-fixed]]','[[def-other]]'],['$\\text{a b}$','$\\text{ab}$']]){
    const a=before.replace('2.2 By','2.2 '+old+' By'),b=after.replace('2.2 By','2.2 '+newText+' By');assert.throws(()=>extract(a,b),/scientific tokens/);
  }
});
test('same terminal QED may remain, but marker deletion and replacement fail',()=>{
  const a=before.replace('holds. [F2, F4]\n','holds. [F2, F4] ∎\n'),b=after.replace('holds. [F2, F4, step 1.1]\n','holds. [F2, F4, step 1.1] ∎\n');assert.equal(extract(a,b).deltas[0].support_consolidation.qed,'∎');assert.throws(()=>extract(a,after),/QED/);assert.throws(()=>extract(a,b.replace('∎','\\qed')),/terminal support/);
});
test('cross-step support cannot replace the required removed same-step cluster',()=>{
 const a=before.replace('1.1 A fixed earlier step. [F2]','1.1 A fixed earlier step. [F2, F4, step 1.1]').replace('By [F2], [F2, F4, step 1.1]','By [F2],');const b=after.replace('1.1 A fixed earlier step. [F2]','1.1 A fixed earlier step. [F2, F4, step 1.1]');assert.throws(()=>extract(a,b),/pre-display/);
});
test('malformed, unknown, duplicate and unused opt-ins fail closed',()=>{
 for(const o of [null,{}, {version:2,steps:['2.2']},{version:1,steps:[]},{version:1,steps:['2.2','2.2']},{version:1,steps:['2.3']},{version:1,steps:['2.2','1.1']},{version:1,steps:['2.2'],extra:true}])assert.throws(()=>extract(before,after,o));
 assert.throws(()=>extract(before,before,option),/unused/);
});
test('new support delta needs exact entry opt-in and every hash-bound substantive review',()=>{
 for(const mutate of [r=>delete r.entry.proof_support_consolidation,r=>r.entry.proof_support_consolidation={version:1,steps:['1.1']},r=>r.entry.presentation_reviews=[],r=>r.entry.presentation_reviews[0].delta_sha256='0'.repeat(64),r=>r.entry.presentation_reviews[0].evidence=[],r=>r.entry.scientific_review.new_premises=true,r=>r.entry.original_sha256='0'.repeat(64)]){const r=reviewed();mutate(r);assert.throws(r.validate);}
});
test('Statement, Facts, dependency and scientific metadata mutations stay rejected',()=>{
 for(const edit of [s=>s.replace('A fixed conditional conclusion.','A stronger conclusion.'),s=>s.replace('[F4] Another fixed premise.','[F4] A new premise.'),s=>s.replace('deps: []','deps: [def-new]')])assert.throws(()=>extract(before,edit(after)),/scientific/);
});
