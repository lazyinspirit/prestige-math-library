// Defect-ledger rows for group Alpha b's 6b adjudication (batches 4, 5, 6).
// One row per DEFECT, keyed to the reader's stable finding id, plus the two
// defects Alpha found itself. Written in the same act as the dispositions.
import { writeFileSync } from 'node:fs';

const AT = '2026-08-17';
const base = (n, extra) => ({
  defect_id: `frontier-15-B${n}`,
  run: 'frontier-15',
  at: AT,
  class: 'accuracy',
  caught_at_stage: '6a-read',
  caught_by_role: 'reader',
  introduced_at_stage: '5-author',
  introduced_by_role: 'beta',
  source: 'alpha-b-6b',
  ...extra,
});

const R = [];
let n = 0;
const row = (extra) => R.push(base(++n, extra));

// ---------------- batch 4 (reader 4) ----------------
row({
  subclass: 'false-or-overstrong-statement', severity: 'fatal', location: 'statement', batch: '4',
  subject: 'thm-transfinite-description-of-generated-sigma-algebras',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The transfinite recursion seeded E_0 := E and its successor stage took only complements of, and countable unions of sequences from, the previous stage. With E empty there is no sequence into E_0, so every stage stayed empty and the displayed union was empty, while sigma_X(empty) is {empty, X}. The Statement was therefore false at the empty generator, and the contract carried a checked empty-family row asserting the opposite. Repaired by seeding E_0 := E union {empty}; Alpha re-instantiated E empty and X empty against the current text and both now evaluate correctly.',
  prevention: { kind: 'mechanical', ref: 'boundary-audit.mjs flags template rows but cannot evaluate a recursion at its empty seed; the catcher here was a human read of the empty case' },
  adjudication_ref: ['reader-4 R4-1', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/thm-transfinite-description-of-generated-sigma-algebras.md', anchor: 'Statement, E_0' }],
});
row({
  subclass: 'citation-misattributed', severity: 'fatal', location: 'facts-block', batch: '4',
  subject: 'thm-transfinite-description-of-generated-sigma-algebras [L4]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: '[L4] attributed the existence and leastness of the generated sigma-algebra to def-generated-sigma-algebra, which only fixes notation and explicitly defers both to thm-generated-sigma-algebra-exists-and-is-minimal. Steps 2.1 and 3.1 were therefore unlicensed. Repaired by redirecting [L4] and adding the theorem to deps.',
  prevention: { kind: 'mechanical', ref: 'citecheck.mjs checks elementary moves have a home; a definition cited for an existence claim is the same class one level up' },
  adjudication_ref: ['reader-4 R4-2', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/thm-transfinite-description-of-generated-sigma-algebras.md', anchor: '[L4]' }],
});
row({
  subclass: 'citation-inflated', severity: 'fatal', location: 'facts-block', batch: '4',
  subject: 'thm-cardinality-bound-for-generated-sigma-algebras [L2]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The restatement asserted cardinal exponentiation is monotone in the exponent without the source clause\'s nonzero-base proviso. lem-cardinal-arithmetic-basic-laws clause (e) reads "mu^kappa <= mu^lambda provided mu != 0", and the proviso is real: 0^0 = 1 while 0^1 = 0. Repaired to the exact clause. Alpha re-checked every other cardinal-arithmetic input of this proof against its source.',
  prevention: { kind: 'mechanical', ref: 'citation-fidelity.mjs compares the contract quote to the source, not the item\'s [L#] prose to the quote — this class needs the second comparison' },
  adjudication_ref: ['reader-4 R4-3', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/thm-cardinality-bound-for-generated-sigma-algebras.md', anchor: '[L2]' }],
});
row({
  subclass: 'citation-misattributed', severity: 'fatal', location: 'facts-block', batch: '4',
  subject: 'thm-cardinality-of-the-borel-sigma-algebra-on-rn [L7]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: '[L7] claimed def-axiom-of-choice makes every cardinal and cardinal exponent available. That item defines choice functions and the product form of AC only; it contains neither the well-ordering theorem nor cardinal exponentiation, so step 1.2 used a claim absent from its cited input. Repaired to cite thm-well-ordering-theorem and def-cardinal-arithmetic.',
  prevention: { kind: 'brief', ref: 'the citation-fidelity rule: a definition may not be cited for the theorem that makes its notation meaningful' },
  adjudication_ref: ['reader-4 R4-4', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/thm-cardinality-of-the-borel-sigma-algebra-on-rn.md', anchor: '[L7]' }],
});
row({
  subclass: 'missing-hypothesis', severity: 'fatal', location: 'statement', batch: '4',
  subject: 'rem-the-borel-hierarchy-never-stabilizes (and its consumer fs-the-borel-hierarchy-closes-after-two-steps)',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The Statement and the external_dependency.exact_statement quantified over "every countable ordinal alpha < omega_1", which includes alpha = 0, extending Marker Corollary 2.38 to an undefined Sigma^0_0 level — Marker Definition 2.4 starts the hierarchy at Sigma^0_1 and gives the recursive clause for alpha > 1. An overbroad restatement of an external, not-proved-here source is the worst place for one. Repaired to 1 <= alpha < omega_1 in the Remark, its external record, and the [L1] of its consumer.',
  prevention: { kind: 'process', ref: 'proved_here:false items need their exact_statement checked against the source text, not against the source title' },
  adjudication_ref: ['reader-4 R4-6', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/rem-the-borel-hierarchy-never-stabilizes.md', anchor: 'external_dependency.exact_statement' }],
});
for (const [id, subj, note] of [
  ['R4-5', 'thm-seven-generators-of-the-borel-sigma-algebra-on-r [L3]', 'Rational density was cited through lem-q-and-irrationals-dense-r, whose Statement formulates density by closure rather than the between-points property [L3] used. The closure formulation does license it by the standard characterisation, so the gap is inside the 30-second rule; redirected to lem-rat-embeds-dense, which states the clause directly.'],
  ['R4-7', 'lem-open-subsets-of-r-are-countable-unions-of-rational-intervals step 1.1', 'Countability of a subfamily of a countable basis was inferred from the basis theorem alone; lem-subset-of-countable supplies the missing one-line input and was added.'],
  ['R4-8', 'thm-seven-generators-of-the-borel-sigma-algebra-on-r step 2.1', 'Rational-indexed unions were called countable without citing the countability of Q; thm-rationals-countable added.'],
  ['R4-9', 'thm-cardinality-of-the-borel-sigma-algebra-on-rn step 1.1', 'The rational-box basis does not by itself count finite endpoint tuples; thm-hessenberg recorded as [L8], and the repaired step also supplies an explicit injection witnessing that the box family is infinite.'],
  ['R4-10', 'thm-sigma-algebra-generated-by-a-countable-partition step 2.1', 'A definition (def-countable) was cited where a subset theorem was needed; lem-subset-of-countable added.'],
  ['R4-11', 'thm-infinite-sigma-algebra-has-continuum-many-members step 1.1', 'The union of countably many finite ranges was called countable with no licensing input; thm-countable-union-of-countable added under the declared AC_omega hypothesis.'],
  ['R4-12', 'thm-cardinality-bound-for-generated-sigma-algebras steps 1.2 and 2.1', 'The stagewise choice of injections and the countability of a limit-stage predecessor set were used but omitted from the step tags, though the facts existed as [L5] and [L6]; tags and contract derivations corrected.'],
]) {
  row({
    subclass: id === 'R4-5' ? 'citation-misattributed' : 'citation-missing', severity: 'polish', location: id === 'R4-5' ? 'facts-block' : 'proof-step', batch: '4',
    subject: subj, disposition: 'fixed', repair_cost: 'inline-fix', subclass_note: note,
    prevention: { kind: 'mechanical', ref: 'citecheck.mjs is the detector for this class and did not fire; the elementary moves involved are below its recognised set' },
    adjudication_ref: [`reader-4 ${id}`, 'Alpha-b 6b: confirmed nonfatal (30-second rule), repair accepted'],
    evidence: [{ path: 'research/frontier-15-reader-4.md', anchor: id }],
  });
}
row({
  subclass: 'citation-corrupted', severity: 'polish', location: 'contract-row', batch: '4',
  subject: 'research/frontier-15-batch-4.proof-contracts.json boundary evidence',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'Two checked empty-case evidence strings carried a vertical-tab control character where \\varnothing was intended, and several other checked rows had lost the backslash from \\kappa, \\ge, \\le, \\mathrm and \\varnothing. The associated proofs were unaffected, but the recorded evidence was unreadable. Repaired.',
  prevention: { kind: 'mechanical', ref: 'a control-character scan over contract strings would catch this class outright' },
  adjudication_ref: ['reader-4 R4-13', 'Alpha-b 6b: confirmed nonfatal, repair accepted'],
  evidence: [{ path: 'research/frontier-15-batch-4.proof-contracts.json', anchor: 'boundary evidence' }],
});

// ---------------- batch 5 (reader 5) ----------------
row({
  subclass: 'false-or-overstrong-statement', severity: 'fatal', location: 'remark', batch: '5',
  subject: 'rem-circle-quotient-model-agrees-with-published-examples',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The Remark asserted that two published examples use the projection p(x) = [x]. Both use q for R -> R/Z, and in ex-circle-as-r-mod-z p denotes the projection of [0,1] onto the endpoint-glued quotient, so the symbol-level agreement claim was false of both items it named. Repaired to the symbol-independent facts (same identification, canonical projection x -> [x], quotient topology), each of which Alpha re-checked against both published items. Remark prose is where falsehoods hide, and this is that class.',
  prevention: { kind: 'process', ref: 'read Remarks with a numbered step\'s suspicion; a cross-page agreement claim must be checked against the other page, not remembered' },
  adjudication_ref: ['reader-5 R5-1', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/rem-circle-quotient-model-agrees-with-published-examples.md', anchor: 'prose' }],
});
for (const [id, subj, note] of [
  ['R5-2', 'lem-circle-loops-of-equal-degree-are-path-homotopic [L2]', 'The straight-line-homotopy fact was restated without lem-straight-line-homotopies-are-continuous\'s opening "Let n >= 1", presenting the result over a wider domain than the source licenses. The application is at n = 1, so nothing downstream was wrong, but the Fact as written was an inflated restatement. Repaired to the exact hypotheses.'],
  ['R5-3', 'thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle [L4]', 'Componentwise continuity was restated without the source\'s m >= 1, metric domain (X,d_X), subspace A and codomain R^m. Applied at m = 2, so the use was valid, but the Fact asserted a materially wider theorem. Repaired to clause 1 in full.'],
  ['R5-4', 'cor-geometric-unit-circle-has-fundamental-group-z [L3]', 'The Fact restated only the identity and composition equations for induced maps, while step 1.1 also infers that h_* and (h^{-1})_* are group homomorphisms — a separate clause of thm-induced-fundamental-group-map-functoriality. The inference required an omitted clause of the cited dependency. Repaired by expanding [L3] to carry the well-defined-group-homomorphism clause.'],
]) {
  row({
    subclass: id === 'R5-4' ? 'invalid-inference' : 'citation-inflated', severity: 'fatal', location: 'facts-block', batch: '5',
    subject: subj, disposition: 'fixed', repair_cost: 'inline-fix', subclass_note: note,
    prevention: { kind: 'mechanical', ref: 'the missing detector is [L#]-prose against the contract quote; citation-fidelity checks quote against source only' },
    adjudication_ref: [`reader-5 ${id}`, 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
    evidence: [{ path: 'research/frontier-15-reader-5.md', anchor: id }],
  });
}
for (const [id, subj, note] of [
  ['R5-5', 'lem-open-quotient-arcs-in-real-line-mod-integers, boundary row zero', 'The evidence treated every length-zero interval convention as a singleton. At a = b the closed interval is a singleton and the open and two half-open variants are empty. The theorem is true in all four cases and the proof handles both, so only the recorded disposition was wrong. Rewritten to record the four cases separately.'],
  ['R5-6', 'lem-lifts-of-circle-loop-concatenation-and-reversal, boundary row degenerate', 'The evidence claimed concatenation with a constant loop literally reduces to the other lift; under the half-interval parametrisation it has a constant half and a reparametrised half, and only the endpoint formula reduces. Corrected.'],
  ['R5-7', 'cex-unit-length-interval-need-not-embed-in-real-line-mod-integers, boundary row nonempty-choice', 'The row anchored the choice of the [0,1) representative at step 2.1; it is made at step 1.1, which is the surjectivity argument. Anchor corrected.'],
  ['R5-8', 'ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop, boundary row zero', 'The row credited step 2.1 with the endpoint-fixed check; step 2.1 only compares degrees and step 3.1 evaluates the homotopy at both endpoints. Anchor corrected.'],
  ['R5-9', 'ex-a-surjective-circle-loop-of-degree-zero, boundary rows iff-forward/iff-reverse', 'The contract assigned step 4.1 to the wrong direction of the nullhomotopic-iff-degree-zero criterion relative to the cited Statement\'s textual order. Directions swapped, with iff-forward marked not applicable to this proof.'],
  ['R5-10', 'ex-trigonometric-circle-loops-have-their-integer-degrees, boundary row endpoints', 'The rationale credited step 1.1 with a periodicity endpoint check the step does not perform; the actual justification is the dictionary sending the common endpoint [0] = [n] to (1,0). Replaced.'],
]) {
  row({
    subclass: 'false-boundary-disposition', severity: 'nonfatal', location: 'contract-row', batch: '5',
    subject: subj, disposition: 'fixed', repair_cost: 'inline-fix', subclass_note: note,
    prevention: { kind: 'mechanical', ref: 'boundary-audit.mjs --fail-on-contradicted catches template clusters and contradicted rows, not an anchor pointing at the wrong true step' },
    adjudication_ref: [`reader-5 ${id}`, 'Alpha-b 6b: confirmed nonfatal, repair accepted'],
    evidence: [{ path: 'research/frontier-15-batch-5.proof-contracts.json', anchor: id }],
  });
}
row({
  subclass: 'undefined-notation', severity: 'polish', location: 'proof-step', batch: '5',
  subject: 'prop-real-line-mod-integers-is-hausdorff step 1.1',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The second class was written as the literal text "eta" in math mode rather than \\eta, while the Given names the classes \\xi and \\eta. Corrected.',
  prevention: { kind: 'mechanical', ref: 'rendercheck parses the math but a bare word in math mode is valid KaTeX, so it renders as upright text rather than failing' },
  adjudication_ref: ['reader-5 R5-11', 'Alpha-b 6b: confirmed polish, repair accepted'],
  evidence: [{ path: 'items/prop-real-line-mod-integers-is-hausdorff.md', anchor: 'step 1.1' }],
});
for (const [id, subj, note] of [
  ['R5-12', 'lem-lifts-of-circle-loop-concatenation-and-reversal steps 1.1 and 1.2', 'Continuity of the affine reparametrisations of the supplied lifts is compressed into [L6], whose displayed Fact restates only the algebra of real-valued continuous functions; the composition with t -> 2t, t -> 2t-1 and t -> 1-t is implicit. Recorded only.'],
  ['R5-13', 'ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop step 3.1', 'Postcomposition of a continuous K with the continuous projection is not explicitly invoked. Recorded only.'],
  ['R5-14', 'fs-every-continuous-self-map-of-the-circle-is-nullhomotopic steps 1.1 to 3.1', 'Three elementary continuity bridges are left implicit: reversing the time variable, taking the final-time slice, and composing with omega_1. Recorded only.'],
]) {
  row({
    subclass: 'citation-missing', severity: 'polish', location: 'proof-step', batch: '5',
    subject: subj, disposition: 'nonfatal-recorded', repair_cost: 'none', subclass_note: note + ' Alpha agrees these are inside the 30-second rule: each is an immediate restriction or composition of continuous maps and no hypothesis changes.',
    prevention: { kind: 'none', ref: 'repairing every implicit composition-of-continuous-maps step would inflate proofs without adding evidence' },
    adjudication_ref: [`reader-5 ${id}`, 'Alpha-b 6b: confirmed polish, recorded not repaired'],
    evidence: [{ path: 'research/frontier-15-reader-5.md', anchor: id }],
  });
}

// ---------------- batch 6 (reader 6) ----------------
row({
  subclass: 'false-or-overstrong-title', severity: 'fatal', location: 'title', batch: '6',
  subject: 'ex-goursat-triangle-integral-of-z-squared',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'The title said the integral "vanishes edge by edge" while the verification computes the three edge integrals as 1/3, (-i-1)/3 and i/3 — none of them zero, only their sum. A title with a literal reading contradicted by its own construction, and the step-7 judges read Statements and cannot see it. Retitled to the sum claim, in the item and the manifest row. Alpha recomputed all three values from the primitive z^3/3.',
  prevention: { kind: 'brief', ref: 'the reader and refuter briefs both require the title to be checked against what was actually proved, every time' },
  adjudication_ref: ['reader-6 R6-1', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/ex-goursat-triangle-integral-of-z-squared.md', anchor: 'title' }],
});
row({
  subclass: 'citation-inflated', severity: 'fatal', location: 'facts-block', batch: '6',
  subject: 'ex-goursat-four-triangle-boundary-cancellation [L1]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: '[L1] said the cited lemma "lists the four oriented boundaries and cancels every oppositely directed interior pair". The lemma\'s Statement does neither — it states the four-integral equality; the lists and the cancellation live in its proof. Step 2.1 cited a Statement for content it does not state. Repaired to the exact equality, with the cancellation now derived in the example\'s own step. Alpha independently expanded all twelve directed edges to confirm the underlying lemma.',
  prevention: { kind: 'brief', ref: 'never substitute a description of what a result is for; state the cited proposition itself' },
  adjudication_ref: ['reader-6 R6-2', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/ex-goursat-four-triangle-boundary-cancellation.md', anchor: '[L1]' }],
});
for (const [id, subj, note] of [
  ['R6-3', 'ex-cauchy-integral-formula-exponential-over-z-minus-one [L2]', 'The Cauchy circle formula was paraphrased as applying whenever a function is holomorphic "on a disc containing a positively oriented circle and its interior". The cited Statement is narrower and explicit: f holomorphic on D(a,R), 0 < r < R, |z-a| < r, contour a + r exp(it). The concrete application satisfies them; the written citation dropped them. Repaired to the exact hypotheses.'],
  ['R6-4', 'ex-cauchy-integral-formula-cosine-third-order-pole [L1]', 'The higher-derivative circle formula was preceded only by "For a holomorphic f", erasing the disc, radius, interior point and index hypotheses the cited theorem carries. Repaired to the smallest faithful restatement carrying all of them.'],
]) {
  row({
    subclass: 'citation-inflated', severity: 'fatal', location: 'facts-block', batch: '6',
    subject: subj, disposition: 'fixed', repair_cost: 'inline-fix', subclass_note: note + ' Alpha recomputed the example\'s value independently and it is unchanged.',
    prevention: { kind: 'mechanical', ref: 'the missing detector is [L#]-prose against the contract quote' },
    adjudication_ref: [`reader-6 ${id}`, 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
    evidence: [{ path: 'research/frontier-15-reader-6.md', anchor: id }],
  });
}
row({
  subclass: 'citation-missing', severity: 'fatal', location: 'facts-block', batch: '6',
  subject: 'cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral [L3]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: '[L3] attributed the representation z = r exp(i theta) to thm-polar-form-with-unique-principal-argument, whose Statement gives z = r(cos theta + i sin theta). Passing to exponential notation needs Euler\'s identity, which neither [L3] nor step 1.2 cited — a load-bearing step with no home. Repaired by adding the published cor-complex-exponential-cartesian-form-modulus-and-eulers-identity to deps, [L3] and the contract, and updating the manifest row.',
  prevention: { kind: 'mechanical', ref: 'depcheck\'s cited-not-in-deps catches a cited-but-undeclared edge; an uncited notation change has no detector' },
  adjudication_ref: ['reader-6 R6-5', 'Alpha-b 6b: confirmed fatal, repair audited and accepted'],
  evidence: [{ path: 'items/cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral.md', anchor: '[L3]' }],
});
row({
  subclass: 'other', subclass_note_required: true, severity: 'nonfatal', location: 'contract-row', batch: '6',
  subject: 'research/frontier-15-batch-6.proof-contracts.json, all 23 risk_review blocks',
  disposition: 'fixed', repair_cost: 'inline-fix',
  caught_by_role: 'reader',
  subclass_note: 'Every proof-bearing contract in batch 6 carried a prefilled risk_review with status "completed" and reviewer beta-author-batch-6. risk_review is Alpha\'s step-6 disposition after the additional refuter reading, and a step-5 author cannot pre-attest another role\'s record. Because nearly every item in the batch routes high or critical, these blocks stood to satisfy the reviewed gate before Alpha did the work. Reader 6 removed all 23; Alpha confirms the removal was correct and has now written the genuine dispositions. Note the removed blocks used "completed", which risk-report --require-reviewed does not accept anyway — they would have failed the gate as well as being unauthorised.',
  prevention: { kind: 'mechanical', ref: 'risk-report.mjs could reject any risk_review whose reviewer is a beta-* label outright, rather than only checking status and non-emptiness' },
  adjudication_ref: ['reader-6 R6-6', 'Alpha-b 6b: confirmed nonfatal, removal accepted, genuine dispositions written'],
  evidence: [{ path: 'research/frontier-15-batch-6.proof-contracts.json', anchor: 'risk_review' }],
});
for (const [id, subj, note] of [
  ['R6-7', 'lem-goursat-nested-triangle-selection, boundary rows empty/one/endpoints', 'The empty row pointed at step 3.1 though nonemptiness is proved at 1.2; the one row pointed at 2.1 though the n = 0 base formulas are at 3.1; and endpoints was marked not_applicable although step 1.2 uses the closed square [0,1]^2 and separately handles s = 0. Anchors corrected and endpoints changed to checked.'],
  ['R6-8', 'lem-differentiating-cauchy-integrals, boundary row empty', 'The row asserted that z_0 in V is given and marked the empty case inapplicable, but the Statement permits V to be empty, where holomorphy and the derivative identity are vacuously true; only the nonempty case fixes z_0. This is the not_applicable-hides-a-case pattern. Changed to checked with the split recorded.'],
  ['R6-9', 'cor-cauchy-theorem-star-shaped-domain and thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain, boundary rows', 'Constant-contour and endpoint handling were attributed to [L2] and [L3], which are definitions of a primitive; the closed-contour result is [L4] in both items. Re-anchored.'],
  ['R6-10', 'fs-every-continuous-function-on-a-convex-domain-has-a-primitive, boundary row endpoints', 'The row cited [L2] (the convex-set definition) and [L3] (the z^{-1} circle integral) for endpoint equality of the given parametrisation; neither establishes it. Replaced by the direct check gamma(0) = gamma(2 pi).'],
]) {
  row({
    subclass: 'false-boundary-disposition', severity: 'nonfatal', location: 'contract-row', batch: '6',
    subject: subj, disposition: 'fixed', repair_cost: 'inline-fix', subclass_note: note,
    prevention: { kind: 'mechanical', ref: 'boundary-audit.mjs does not verify that a row\'s anchor is the step that actually performs the check' },
    adjudication_ref: [`reader-6 ${id}`, 'Alpha-b 6b: confirmed nonfatal, repair accepted'],
    evidence: [{ path: 'research/frontier-15-batch-6.proof-contracts.json', anchor: id }],
  });
}
row({
  subclass: 'false-boundary-disposition', severity: 'polish', location: 'contract-row', batch: '6',
  subject: 'batch-6 contract, nine items with stale boundary anchors (grouped finding)',
  disposition: 'fixed', repair_cost: 'inline-fix',
  subclass_note: 'A grouped polish finding over thm-goursat-triangle-theorem, cor-goursat-rectangle-theorem, thm-goursat-theorem-one-exceptional-point, thm-cauchy-integral-formula-circle, the two Cauchy-formula examples, the annulus counterexample and cex-connected-domain-need-not-be-star-shaped: in each the disposition\'s mathematical conclusion was right but its evidence named a later step or the wrong local fact. Every anchor replaced by the Statement, step and fact that performs the check. Kept as one row because it is one defect class found in one pass, per the one-row-per-defect rule applied to a grouped finding the reader did not split.',
  prevention: { kind: 'mechanical', ref: 'same gap as R6-7 to R6-10: anchors are not verified against the step content' },
  adjudication_ref: ['reader-6 R6-11', 'Alpha-b 6b: confirmed polish, repair accepted'],
  evidence: [{ path: 'research/frontier-15-batch-6.proof-contracts.json', anchor: 'R6-11' }],
});

// ---------------- Alpha's own findings ----------------
row({
  subclass: 'citation-inflated', severity: 'nonfatal', location: 'facts-block', batch: '4',
  subject: 'thm-dynkin-pi-lambda [L1] and [L2]',
  disposition: 'fixed', repair_cost: 'inline-fix',
  caught_at_stage: '6b-adjudicate', caught_by_role: 'group-alpha', should_have_caught: '6a-read',
  subclass_note: 'Both facts said "finite intersections" where both cited Statements say "binary intersections": lem-generated-lambda-system-closed-under-intersections concludes binary closure, and lem-lambda-system-with-finite-intersections-is-sigma assumes it. [L1] therefore inflated its source and [L2] narrowed its own, and the two deviations happened to cancel, so the proof was sound throughout. Nonfatal by the 30-second rule (binary to finite is a one-line induction), but repaired at step 6 because it is exactly what the step-7 judges read and it costs nothing now. The stored contract quotes were already the exact source text, which is why citation-fidelity stayed green: it compares quote to source, never [L#] prose to quote.',
  prevention: { kind: 'mechanical', ref: 'a detector comparing each item\'s [L#] prose against its contract quote would close this whole class — it is the same gap behind R4-3, R5-2, R5-3, R6-3 and R6-4' },
  adjudication_ref: ['Alpha-b 6b: found and repaired by Alpha'],
  evidence: [{ path: 'items/thm-dynkin-pi-lambda.md', anchor: '[L1], [L2]' }],
});
row({
  subclass: 'citation-missing', severity: 'nonfatal', location: 'proof-step', batch: '4',
  subject: 'fs-every-subset-of-r-is-borel step 1.2',
  disposition: 'fixed', repair_cost: 'rewrite',
  caught_at_stage: '6b-adjudicate', caught_by_role: 'group-alpha', should_have_caught: '6a-read',
  subclass_note: 'The refutation asserted "c = |R|" with no cited home. [L1] defines c as |P(N)|, so the continuum identity |R| = |P(N)| is load-bearing: without it the assumption P(R) = B(R) yields no contradiction with Cantor. Nonfatal under the 30-second rule — the fact is standard and published — but the library rule is that a load-bearing dependency is established by published content, and it was not declared. The first repair cited ex-the-cardinality-of-the-continuum and depcheck rejected it as b-leaf-content: the only item stating the identity outright lives on a B/examples page and may not be a load-bearing target. Re-routed through the Cantor set instead: |C| = |{0,1}^N| = 2^{aleph_0} = |P(N)| = c from thm-cantor-set-ternary-description and thm-cardinal-power-set-and-cantor, both on A pages, then P(C) subset P(R) collides with Cantor. Item, manifest deps, contract citations, derivations and boundary anchors updated together; precheck restratified the proof (old 1.3 -> 2.1, old 2.1 -> 3.1).',
  prevention: { kind: 'mechanical', ref: 'depcheck\'s b-leaf-content rule is what forced the honest route; the missing detector is for an unattributed cardinality identity inside a proof step' },
  adjudication_ref: ['Alpha-b 6b: found and repaired by Alpha'],
  evidence: [{ path: 'items/fs-every-subset-of-r-is-borel.md', anchor: 'step 1.2' }],
});

for (const r of R) delete r.subclass_note_required;
writeFileSync('research/frontier-15-refuters-b/alpha-b-6b-ledger-rows.json', JSON.stringify(R, null, 2) + '\n');
console.log('rows:', R.length);
