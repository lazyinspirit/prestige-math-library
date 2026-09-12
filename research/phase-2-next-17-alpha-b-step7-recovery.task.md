# Step 7 adjudication — group **b**, run `phase-2-next-17`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 85 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `weak-and-weak-star-topologies` | A | functional-analysis | 288.061 | `locally-convex-spaces-and-continuous-separation`, `nets-and-filters` |
| 2 | `weak-and-weak-star-topologies-examples` | B | functional-analysis | 288.062 | `weak-and-weak-star-topologies` |
| 2 | `distributions-test-functions-and-differentiation` | A | functional-analysis | 288.093 | `order-zorn-and-the-axiom-of-choice`, `schwartz-space-and-the-plancherel-theorem`, `the-divergence-theorem-and-classical-stokes` |
| 2 | `distributions-test-functions-and-differentiation-examples` | B | functional-analysis | 288.094 | `distributions-test-functions-and-differentiation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-and-weak-star-topologies` — Weak and Weak Star Topologies (19 item(s))

- `def-weak-topology-on-a-normed-space` · definition — Weak topology on a normed space
- `lem-basic-weak-neighborhoods` · lemma — Basic weak neighborhoods
- `thm-weak-topology-is-hausdorff` · theorem — Weak topology is hausdorff
- `def-weak-convergence-of-nets-and-sequences` · definition — Weak convergence of nets and sequences
- `lem-basic-weak-star-neighborhoods` · lemma — Basic weak star neighborhoods
- `def-weak-star-convergence` · definition — Weak star convergence
- `thm-continuous-dual-of-a-weak-topology` · theorem — Continuous dual of a weak topology
- `thm-continuous-dual-of-a-weak-star-topology` · theorem — Continuous dual of a weak star topology
- `thm-norm-closed-convex-iff-weakly-closed` · theorem — Norm closed convex iff weakly closed
- `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball` · corollary — Weak closure of the unit sphere is the closed unit ball
- `thm-weakly-convergent-sequences-are-norm-bounded` · theorem — Weakly convergent sequences are norm bounded
- `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm` · corollary — Weak convergence implies lower semicontinuity of the norm
- `thm-weak-and-norm-topologies-agree-iff-finite-dimensional` · theorem — Weak and norm topologies agree iff finite dimensional
- `thm-infinite-dimensional-weak-topology-is-not-first-countable` · theorem — Infinite dimensional weak topology is not first countable
- `lem-annihilators-are-weak-and-weak-star-closed` · lemma — Annihilators are weak and weak star closed
- `thm-transpose-is-weak-to-weak-continuous` · theorem — Transpose is weak to weak continuous
- `thm-transpose-is-weak-star-to-weak-star-continuous` · theorem — Transpose is weak star to weak star continuous
- `def-strong-and-weak-operator-topologies` · definition — Strong and weak operator topologies
- `lem-norm-implies-strong-implies-weak-operator-convergence` · lemma — Norm implies strong implies weak operator convergence

### `weak-and-weak-star-topologies-examples` — Weak and Weak Star Topologies — Examples (9 item(s))

- `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p` · example — Coordinate vectors converge weakly to zero in ell p
- `cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one` · counterexample — Coordinate vectors do not converge weakly to zero in ell one
- `ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star` · example — Coordinate evaluations converge weak star to zero in ell one star
- `cex-weak-star-and-weak-topologies-on-a-dual-can-differ` · counterexample — Weak star and weak topologies on a dual can differ
- `cex-weak-closure-can-exceed-sequential-weak-closure` · counterexample — Weak closure can exceed sequential weak closure
- `ex-right-shift-powers-converge-in-wot-not-sot` · example — Right shift powers converge in wot not sot
- `ex-left-shift-powers-converge-in-sot-not-operator-norm` · example — Left shift powers converge in sot not operator norm
- `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain` · counterexample — Pointwise boundedness without a uniform bound on an incomplete domain
- `cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded` · counterexample — A weakly convergent net need not be eventually norm bounded

### `distributions-test-functions-and-differentiation` — Distributions Test Functions and Differentiation (49 item(s))

- `def-test-function-space-d-of-an-open-set` · definition — Test function space d of an open set
- `def-fixed-support-test-function-frechet-space` · definition — Fixed support test function frechet space
- `def-test-function-topology` · definition — Test function topology
- `def-distribution` · definition — Distribution
- `def-regular-distribution-from-a-locally-integrable-function` · definition — Regular distribution from a locally integrable function
- `def-convolution-of-a-distribution-with-a-test-function` · definition — Convolution of a distribution with a test function
- `lem-test-function-cutoffs-and-euclidean-localization` · lemma — Test function cutoffs and euclidean localization
- `lem-fixed-support-test-function-spaces-are-complete` · lemma — Fixed support test function spaces are complete
- `lem-test-function-lf-topology-universal-property` · lemma — Test function lf topology universal property
- `thm-test-function-operations-are-continuous` · theorem — Test function operations are continuous
- `thm-local-finite-order-characterization-of-distributions` · theorem — Local finite order characterization of distributions
- `def-order-of-a-distribution-on-a-compact-set` · definition — Order of a distribution on a compact set
- `def-distributional-derivative` · definition — Distributional derivative
- `def-multiplication-of-a-distribution-by-a-smooth-function` · definition — Multiplication of a distribution by a smooth function
- `thm-leibniz-rule-for-distributions` · theorem — Leibniz rule for distributions
- `def-dirac-delta-and-its-derivatives` · definition — Dirac delta and its derivatives
- `thm-distributions-form-a-sheaf` · theorem — Distributions form a sheaf
- `def-support-of-a-distribution` · definition — Support of a distribution
- `thm-compactly-supported-distributions-have-global-finite-order` · theorem — Compactly supported distributions have global finite order
- `thm-distributions-supported-at-one-point` · theorem — Distributions supported at one point
- `lem-bounded-test-function-sets-have-common-compact-support` · lemma — Bounded test function sets have common compact support
- `thm-sequential-convergence-in-test-function-space` · theorem — Sequential convergence in test function space
- `def-weak-and-strong-topologies-on-distributions` · definition — Weak and strong topologies on distributions
- `thm-locally-integrable-functions-embed-in-distributions` · theorem — Locally integrable functions embed in distributions
- `lem-strong-distribution-convergence-implies-weak-convergence` · lemma — Strong distribution convergence implies weak convergence
- `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` · lemma — Riemann–Lebesgue comparison for distribution test integrands
- `thm-distributional-differentiation-is-continuous-and-commutes` · theorem — Distributional differentiation is continuous and commutes
- `lem-distribution-pairing-with-smooth-parameter-families` · lemma — Distribution pairing with smooth parameter families
- `thm-convolution-with-a-test-function-is-smooth` · theorem — Convolution with a test function is smooth
- `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions` · theorem — Uniform finite order bounds for pointwise bounded distributions
- `def-pullback-of-a-distribution-by-a-diffeomorphism` · definition — Pullback of a distribution by a diffeomorphism
- `def-tensor-product-of-distributions` · definition — Tensor product of distributions
- `lem-compactly-supported-distributions-extend-to-smooth-functions` · lemma — Compactly supported distributions extend to smooth functions
- `thm-sequential-convergence-of-smooth-multipliers-and-distributions` · theorem — Sequential convergence of smooth multipliers and distributions
- `thm-extension-by-zero-for-distributions-with-ambient-closed-support` · theorem — Extension by zero for distributions with ambient closed support
- `thm-translation-invariant-test-function-operators-are-convolutions` · theorem — Translation invariant test function operators are convolutions
- `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities` · lemma — Complex l one functionals on finite measure spaces have bounded densities
- `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions` · theorem — Local structure of distributions as derivatives of continuous functions
- `lem-compact-support-continuous-primitive-representation` · lemma — Compact support continuous primitive representation
- `thm-global-locally-finite-structure-of-distributions` · theorem — Global locally finite structure of distributions
- `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets` · lemma — Finite sums of product tests are dense on product open sets
- `thm-tensor-product-distributions-and-iterated-pairings` · theorem — Tensor product distributions and iterated pairings
- `def-convolution-of-distributions-when-one-has-compact-support` · definition — Convolution of distributions when one has compact support
- `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` · lemma — Convolution of distributions is well defined under the support hypothesis
- `thm-mollifier-approximation-in-distributions` · theorem — Mollifier approximation in distributions
- `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant` · theorem — A distribution with zero derivatives on a connected open set is constant
- `cor-smooth-functions-are-weakly-dense-in-distributions` · corollary — Smooth functions are weakly dense in distributions
- `thm-associativity-of-distribution-convolution-under-compact-support` · theorem — Associativity of distribution convolution under compact support
- `thm-closed-bounded-test-function-sets-are-compact` · theorem — Closed bounded test function sets are compact

### `distributions-test-functions-and-differentiation-examples` — Distributions Test Functions and Differentiation — Examples (8 item(s))

- `ex-derivative-of-the-heaviside-function-is-dirac-delta` · example — Derivative of the heaviside function is dirac delta
- `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas` · example — Derivatives of piecewise smooth functions include jump deltas
- `ex-distributional-laplacian-of-the-newtonian-kernel` · example — Distributional laplacian of the newtonian kernel
- `ex-principal-value-distribution-one-over-x` · example — Principal value distribution one over x
- `cex-not-every-distribution-is-a-locally-integrable-function` · counterexample — Not every distribution is a locally integrable function
- `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control` · counterexample — Pointwise convergent functions need not converge as distributions without local control
- `ex-compactly-supported-distributions-have-global-finite-order` · example — Compactly supported distributions have global finite order
- `rem-sobolev-weak-derivatives-belong-to-pde` · remark — Sobolev weak derivatives belong to pde

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

3 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-29aad83de5e5f8d6d8be93f9 · `ex-distributional-laplacian-of-the-newtonian-kernel`** (from group b, gap-a-reader-closes) — The example needs the closed ball to be an elementary solid region in the sense of def-elementary-solid-region before Green's identity may be applied, and it discharges this with one compressed paragraph: the eight octant patches must be checked against clause 4 of def-adapted-outward-boundary-presentation-of-a-simple-solid-region (upper/lower projected images pairwise disjoint and filling the base disc up to content zero), against the compatible-presentation content-zero overlap condition, and against the requirement that a single elementary solid region counts for the 'finite gluing' hypothesis of cor-greens-second-identity-for-glued-elementary-solid-regions. The mathematics looks right (the four open quarter discs fill the open disc up to the two diameters and the circle, all content zero), but the verification is reconstructed by the reader from a sketch rather than derived.
- **s8a-68db6a57b7011e74da77f30f · `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`** (from group b, gap-a-reader-closes) — Step 2.1 compresses an interchange of limit and differentiation: 'its tagged sums converge uniformly, together with every target derivative, to the corresponding derivative-integral candidate ... F3 on coordinate intervals identifies these candidates as the actual derivatives, inductively'. The reader has to supply that the tagged sums of every mixed derivative converge uniformly on the parameter box, and then the alternative formula D^gamma I_eps = integral of D^gamma Phi(x - eps s, y - eps t) rho(s) sigma(t) ds dt coming from the Riemann substitution of F4, before step 3.1 can use uniform continuity to send sup|D^gamma I_eps - D^gamma Phi| to zero. The step is standard and closable in under a minute, but it is not written out.
- **s8a-6f948b122eceb89a6367e7ec · `thm-infinite-dimensional-weak-topology-is-not-first-countable`** (from group b, presentation) — The statement quantifies over a 'countable weak neighborhood base at zero', while step 1.1 begins 'Suppose (U_n) is a countable weak local base at zero' and later enumerates chosen finite lists 'by pairs of natural numbers, padding each finite list with zero functionals'. The reduction from a countable set of neighborhoods to a sequence indexed by N (and the coding of finite lists) is left to the reader, as is the convention for a finite base.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-17`

Read `research/phase-2-next-17-judge-closure.json`,
`research/phase-2-next-17-judge.jsonl`,
`research/phase-2-next-17-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-17-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-17-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-17-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
