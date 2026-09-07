# Step 8 adjudication — group **b**, run `frontier-33`

You are the group Alpha for batches **2**, **12**: 2 A/B pair(s), 4 page(s), 77 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `dual-spaces-adjoint-operators-and-annihilators` | A | functional-analysis | 288.059 | `the-baire-principles-of-functional-analysis-examples` |
| 2 | `dual-spaces-adjoint-operators-and-annihilators-examples` | B | functional-analysis | 288.06 | `dual-spaces-adjoint-operators-and-annihilators`, `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 12 | `maximum-principles-harnack-and-liouville-in-rn` | A | pde | 458.005 | `harmonic-functions-and-mean-values-in-rn-examples` |
| 12 | `maximum-principles-harnack-and-liouville-in-rn-examples` | B | pde | 458.006 | `maximum-principles-harnack-and-liouville-in-rn` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dual-spaces-adjoint-operators-and-annihilators` — Dual Spaces Adjoint Operators and Annihilators (31 item(s))

- `rem-continuous-dual-completeness-and-pairing` · remark — The continuous dual, its completeness, and evaluation
- `def-annihilator-and-preannihilator` · definition — Annihilator notation and the preannihilator
- `lem-annihilators-are-closed-subspaces` · lemma — Annihilators and preannihilators are norm closed
- `thm-dual-of-a-quotient-is-the-annihilator` · theorem — The dual of a quotient is its annihilator
- `thm-dual-of-a-closed-subspace-is-a-dual-quotient` · theorem — The dual of a closed subspace is a dual quotient
- `cor-distance-to-annihilator-is-restriction-norm` · corollary — Distance to an annihilator is the restriction norm
- `def-transpose-of-a-bounded-operator` · definition — The transpose of a bounded operator
- `lem-transpose-is-bounded-and-has-the-same-norm` · lemma — The transpose is bounded with the same norm
- `lem-transpose-reverses-composition` · lemma — Transposition reverses composition
- `lem-elementary-kernel-range-annihilator-identities` · lemma — Elementary kernel and range annihilator identities
- `cor-dense-range-iff-transpose-is-injective` · corollary — Dense range is equivalent to injectivity of the transpose
- `def-canonical-map-into-the-bidual` · definition — The canonical evaluation map into the bidual
- `thm-canonical-bidual-map-is-an-isometry` · theorem — The canonical bidual map is an isometry
- `cor-distance-to-subspace-by-annihilating-functionals` · corollary — Distance to a closed subspace via unit annihilators
- `lem-canonical-map-is-natural` · lemma — The canonical map is natural
- `def-reflexive-banach-space` · definition — Reflexivity is surjectivity of the canonical map
- `lem-transpose-range-membership-by-domination` · lemma — Membership in the transpose range by an operator estimate
- `lem-closed-range-iff-quotient-estimate` · lemma — Closed range is equivalent to a quotient estimate
- `lem-transpose-lower-bound-gives-image-ball-density` · lemma — A lower bound for the transpose forces a dense image of a ball
- `thm-surjective-iff-transpose-is-bounded-below` · theorem — Surjectivity is equivalent to a lower bound for the transpose
- `thm-banach-closed-range-theorem` · theorem — Banach closed-range theorem
- `thm-bounded-below-iff-transpose-is-surjective` · theorem — Bounded below is equivalent to surjectivity of the transpose
- `cor-transpose-preserves-invertibility` · corollary — Invertibility and the inverse of the transpose
- `lem-finite-truncations-are-dense-in-c0-and-ell-one` · lemma — Finite truncations approximate null and summable sequences
- `thm-dual-of-c0-is-ell-one` · theorem — The continuous dual of c0 is ell-one
- `thm-complex-dual-of-ell-one-is-ell-infinity` · theorem — The complex continuous dual of ell-one is ell-infinity
- `rem-lp-duality-in-abstract-language` · remark — The published Lp duality theorem in abstract notation
- `def-weak-star-topology` · definition — The weak-star topology from finite evaluations
- `lem-finite-evaluations-separate-from-a-dual-subspace` · lemma — Finite evaluations separate a functional from a dual subspace
- `thm-bipolar-closure-for-linear-subspaces` · theorem — Double annihilators give norm and weak-star closures
- `thm-kernel-range-annihilator-identities` · theorem — Kernel-range identities and the weak-star closure of the transpose range

### `dual-spaces-adjoint-operators-and-annihilators-examples` — Dual Spaces Adjoint Operators and Annihilators — Examples (10 item(s))

- `ex-coordinate-functionals-on-classical-sequence-spaces` · example — Coordinate functionals on sequence spaces
- `ex-adjoint-of-the-right-and-left-shifts` · example — Transposes of the right and left shifts
- `ex-evaluation-functionals-and-point-masses` · example — Evaluation functionals and point masses
- `ex-annihilator-of-a-coordinate-subspace` · example — The annihilator of a coordinate subspace
- `ex-dual-of-a-finite-dimensional-space` · example — Finite-dimensional duals and matrix transposes
- `cex-dual-functor-is-not-covariant` · counterexample — The dual construction reverses arrows
- `cex-canonical-bidual-map-need-not-be-surjective` · counterexample — The canonical bidual map of c0 misses the constant sequence
- `cex-transpose-range-need-not-be-norm-dense` · counterexample — The transpose of an injective map need not have norm-dense range
- `cex-injective-transpose-does-not-imply-surjectivity` · counterexample — Injective transpose does not imply surjectivity
- `rem-riesz-representation-name-split` · remark — Two different Riesz representation theorems

### `maximum-principles-harnack-and-liouville-in-rn` — Maximum Principles Harnack and Liouville in Rn (26 item(s))

- `def-subharmonic-and-superharmonic-functions-in-rn` · definition — Subharmonic and superharmonic functions in rn
- `lem-strict-subharmonic-perturbation` · lemma — Strict subharmonic perturbation
- `thm-weak-maximum-principle-for-the-laplacian` · theorem — Weak maximum principle for the laplacian
- `cor-weak-minimum-principle-for-the-laplacian` · corollary — Weak minimum principle for the laplacian
- `thm-comparison-principle-for-classical-subharmonic-functions` · theorem — Comparison principle for classical subharmonic functions
- `lem-classical-subharmonic-mean-value-inequalities` · lemma — Classical subharmonic mean value inequalities
- `thm-strong-maximum-principle-for-classical-subharmonic-functions` · theorem — Strong maximum principle for classical subharmonic functions
- `thm-strong-maximum-principle-for-harmonic-functions` · theorem — Strong maximum principle for harmonic functions
- `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes` · corollary — Nonnegative harmonic function with an interior zero vanishes
- `cor-uniqueness-for-the-classical-dirichlet-problem` · corollary — Uniqueness for the classical dirichlet problem
- `cor-poisson-supremum-estimate-from-a-quadratic-barrier` · corollary — Poisson supremum estimate from a quadratic barrier
- `def-interior-sphere-condition-and-sphere-normal` · definition — Interior sphere condition and sphere normal
- `lem-interior-sphere-barrier-for-the-laplacian` · lemma — Interior sphere barrier for the laplacian
- `thm-hopf-boundary-point-lemma-for-the-laplacian` · theorem — Hopf boundary point lemma for the laplacian
- `thm-harnack-inequality-on-a-ball` · theorem — Harnack inequality on a ball
- `lem-finite-harnack-chain-on-a-compact-connected-subset` · lemma — Finite harnack chain on a compact connected subset
- `cor-harnack-inequality-on-compact-subsets` · corollary — Harnack inequality on compact subsets
- `thm-harnack-convergence-principle` · theorem — Harnack convergence principle
- `lem-smooth-sphere-data-have-a-harmonic-replacement` · lemma — Smooth sphere data have a harmonic replacement
- `lem-derivative-estimate-proof-of-one-sided-harmonic-liouville` · lemma — Derivative estimate proof of one sided harmonic liouville
- `thm-liouville-theorem-for-bounded-harmonic-functions` · theorem — Liouville theorem for bounded harmonic functions
- `cor-positive-entire-harmonic-functions-are-constant` · corollary — Positive entire harmonic functions are constant
- `cor-entire-harmonic-functions-with-bounded-gradient-are-affine` · corollary — Entire harmonic functions with bounded gradient are affine
- `cor-removable-singularity-for-bounded-harmonic-functions` · corollary — Removable singularity for bounded harmonic functions
- `thm-maximum-principle-with-limsup-control-at-infinity` · theorem — Maximum principle with limsup control at infinity
- `rem-maximum-principles-need-domain-and-boundary-hypotheses` · remark — Maximum principles need domain and boundary hypotheses

### `maximum-principles-harnack-and-liouville-in-rn-examples` — Maximum Principles Harnack and Liouville in Rn — Examples (10 item(s))

- `ex-harmonic-function-attaining-only-boundary-extrema` · example — Harmonic function attaining only boundary extrema
- `ex-harnack-constant-from-the-poisson-kernel-ratio` · example — Harnack constant from the poisson kernel ratio
- `cex-maximum-principle-fails-for-superharmonic-maxima` · counterexample — Maximum principle fails for superharmonic maxima
- `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity` · counterexample — Weak maximum principle needs boundedness or control at infinity
- `cex-hopf-lemma-needs-a-boundary-geometry-hypothesis` · counterexample — Hopf lemma needs a boundary geometry hypothesis
- `cex-liouville-needs-one-sided-boundedness` · counterexample — Liouville needs one sided boundedness
- `cex-unbounded-punctured-harmonic-singularity-is-not-removable` · counterexample — Unbounded punctured harmonic singularity is not removable
- `cex-strong-maximum-principle-needs-connectedness` · counterexample — Strong maximum principle needs connectedness
- `cex-hopf-conclusion-needs-a-strict-nonconstant-extremum` · counterexample — Hopf conclusion needs a strict nonconstant extremum
- `ex-subharmonic-quartic-and-harmonic-saddle` · example — Subharmonic quartic and harmonic saddle

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-33`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
