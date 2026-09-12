# Step 7 adjudication — group **a**, run `phase-2-next-17`

You are the group Alpha for batches **1**, **3**: 2 A/B pair(s), 4 page(s), 68 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
| 1 | `measure-preserving-transformations-and-poincare-recurrence` | A | measure-theory | 288.043 | `measure-preserving-systems-and-mixing-criteria`, `weak-mixing-and-the-chacon-transformation`, `the-lebesgue-integral-and-the-convergence-theorems`, `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `outer-measure-and-the-caratheodory-extension-theorem`, `compactness`, `countability-and-uncountability`, `the-topology-of-euclidean-space`, `sequences-and-limits` |
| 1 | `measure-preserving-transformations-and-poincare-recurrence-examples` | B | measure-theory | 288.044 | `measure-preserving-transformations-and-poincare-recurrence` |
| 3 | `central-limit-theorems` | A | probability | 288.113 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `weak-laws-and-series-of-independent-random-variables`, `strong-laws-of-large-numbers`, `weak-convergence-tightness-and-representation`, `characteristic-functions-inversion-and-continuity`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-spectral-theorem-and-singular-value-decomposition`, `darboux-lhopital-and-taylor` |
| 3 | `central-limit-theorems-examples` | B | probability | 288.114 | `central-limit-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measure-preserving-transformations-and-poincare-recurrence` — Measure Preserving Transformations and Poincare Recurrence (34 item(s))

- `lem-no-return-sets-have-null-preimage-towers` · lemma — No-return sets have disjoint null preimage towers
- `thm-poincare-recurrence-for-finite-measure-preserving-systems` · theorem — Poincare recurrence for finite measure-preserving systems
- `cor-topological-poincare-recurrence-on-second-countable-spaces` · corollary — Topological recurrence on second-countable spaces
- `def-first-return-time-and-induced-transformation` · definition — First-return times and induced transformations
- `prop-first-return-time-and-induced-map-are-measurable` · proposition — First-return time and induced map are measurable
- `thm-induced-transformation-preserves-the-restricted-measure` · theorem — Induced transformations preserve restricted finite measure
- `prop-inducing-preserves-ergodicity` · proposition — Inducing an ergodic system gives an ergodic system
- `thm-kac-return-time-formula` · theorem — Kac return-time formula without invertibility
- `thm-kac-integral-formula-for-excursions` · theorem — Kac integral formula for excursions
- `def-circle-rotation-and-doubling-map` · definition — The circle, rotations and the doubling map
- `prop-circle-rotations-preserve-lebesgue-measure` · proposition — Circle rotations preserve Lebesgue measure
- `lem-irrational-circle-orbits-are-dense` · lemma — Irrational circle orbits are dense
- `thm-circle-rotation-is-ergodic-iff-angle-is-irrational` · theorem — Circle rotation is ergodic for Lebesgue measure exactly at irrational angles
- `def-integer-base-map-on-the-circle` · definition — Integer-base maps and b-adic circle intervals
- `prop-integer-base-map-preserves-lebesgue-measure` · proposition — Integer-base circle maps preserve Lebesgue measure
- `thm-integer-base-map-is-strongly-mixing` · theorem — Every integer-base circle map is strongly mixing
- `prop-doubling-map-preserves-lebesgue-measure` · proposition — Doubling preserves Lebesgue measure
- `thm-doubling-map-is-ergodic-for-lebesgue-measure` · theorem — Doubling is ergodic for Lebesgue measure
- `prop-doubling-map-is-strongly-mixing` · proposition — Doubling is strongly mixing for Lebesgue measure
- `def-binary-sequence-cylinders-and-fair-coin-content` · definition — Binary-sequence cylinders and fair-coin content
- `lem-binary-sequence-space-is-compact-without-tychonoff` · lemma — Binary-sequence space is compact without Tychonoff
- `lem-fair-coin-cylinder-content-is-a-premeasure` · lemma — Fair-coin cylinder content is a premeasure
- `thm-fair-coin-measure-on-binary-sequences` · theorem — Fair-coin measure on binary sequences
- `thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing` · theorem — The fair-coin one-sided shift preserves measure and is mixing
- `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family` · lemma — A countable dense family of continuous functions on a compact metric space
- `lem-positive-functionals-on-compact-metric-spaces-have-probability-representations` · lemma — A compact-metric probability representation using countable choice
- `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences` · lemma — Probability sequences on compact metric spaces have integral-convergent subsequences
- `thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces` · theorem — Krylov–Bogolyubov existence of an invariant probability
- `fs-measure-preserving-transformations-are-invertible` · false-statement — False: measure-preserving transformations are invertible
- `fs-ergodicity-implies-strong-mixing` · false-statement — False: ergodicity implies strong mixing
- `fs-poincare-recurrence-without-finite-total-measure` · false-statement — False: Poincare recurrence needs no finite total measure
- `fs-ergodicity-forces-only-empty-and-full-invariant-sets` · false-statement — False: an ergodic invariant sigma-algebra has only two sets
- `fs-ergodicity-forces-every-orbit-dense` · false-statement — False: every orbit of an ergodic system is dense
- `fs-continuous-invariant-functions-characterize-measure-ergodicity` · false-statement — False: constant continuous invariants characterize measure ergodicity

### `measure-preserving-transformations-and-poincare-recurrence-examples` — Measure Preserving Transformations and Poincare Recurrence — Examples (11 item(s))

- `ex-rational-rotation-invariant-set` · example — An explicit invariant set for a rational rotation
- `ex-doubling-dyadic-preimage-computation` · example — Dyadic preimages under doubling
- `ex-base-three-cylinder-intervals-and-preimages` · example — Base-three cylinders and their preimages
- `ex-fair-coin-cylinder-measures-tabulated` · example — Fair-coin cylinder masses and separated blocks
- `ex-doubling-recurrence-to-a-dyadic-interval` · example — Recurrence to a dyadic interval under doubling
- `ex-kac-mean-return-to-a-half-circle` · example — Kac mean return to a half-circle under irrational rotation
- `cex-mod-null-invariance-is-not-strict-invariance` · counterexample — Mod-null invariance need not be strict invariance
- `cex-doubling-ergodicity-depends-on-the-invariant-measure` · counterexample — Doubling ergodicity depends on the invariant measure
- `cex-irrational-rotation-is-not-weakly-mixing` · counterexample — Irrational rotation is ergodic but not weakly mixing
- `cex-kac-formula-needs-ergodicity` · counterexample — Kac normalization needs ergodicity
- `ex-gauss-map-preserves-gauss-measure` · example — The Gauss map preserves Gauss measure

### `central-limit-theorems` — Central Limit Theorems (16 item(s))

- `lem-characteristic-function-of-a-normal-law` · lemma — Characteristic function of a normal law
- `lem-second-order-characteristic-function-expansion` · lemma — Second-order characteristic-function expansion
- `lem-product-of-near-one-characteristic-factors` · lemma — Products of near-one characteristic factors
- `thm-lindeberg-levy-iid-central-limit-theorem` · theorem — Lindeberg-Levy iid central limit theorem
- `lem-ac-supplies-sequential-choices-for-probability-constructions` · lemma — AC supplies countable selections and prescribed serial paths
- `cor-de-moivre-laplace-central-limit-theorem` · corollary — De Moivre-Laplace central limit theorem
- `def-row-wise-independent-centered-triangular-array` · definition — Row-wise independent centered triangular array
- `def-total-row-variance-and-lindeberg-condition` · definition — Total row variance and the Lindeberg condition
- `lem-lindeberg-condition-implies-feller-negligibility` · lemma — The Lindeberg condition implies Feller negligibility
- `thm-lindeberg-feller-central-limit-theorem-sufficiency` · theorem — Lindeberg-Feller central limit theorem: sufficiency
- `thm-feller-converse-to-lindeberg-feller` · theorem — Feller converse to Lindeberg-Feller
- `cor-lyapunov-central-limit-theorem` · corollary — Lyapunov central limit theorem
- `def-multivariate-normal-law` · definition — Multivariate normal law, including singular covariance
- `lem-characteristic-function-of-a-multivariate-normal-law` · lemma — Characteristic function of a multivariate normal law
- `thm-multivariate-iid-central-limit-theorem` · theorem — Multivariate iid central limit theorem
- `rem-clt-convergence-is-only-in-distribution` · remark — Central-limit convergence is only in distribution

### `central-limit-theorems-examples` — Central Limit Theorems — Examples (7 item(s))

- `ex-normal-approximation-to-binomial-probabilities` · example — Normal approximation to binomial probabilities
- `ex-clt-for-sums-of-uniform-random-variables` · example — CLT for sums of uniform random variables
- `ex-lyapunov-condition-for-nonidentical-summands` · example — Lyapunov condition for nonidentical summands
- `ex-lindeberg-array-with-no-identically-distributed-row` · example — A Lindeberg array with no identically distributed row
- `ex-degenerate-multivariate-gaussian-limit` · example — A degenerate multivariate Gaussian limit
- `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling` · counterexample — Infinite variance can defeat square-root-n CLT scaling
- `cex-feller-negligibility-cannot-be-removed-from-the-converse` · counterexample — Feller negligibility cannot be removed from the converse

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-96c9fa3253d84007809bbf39 · `thm-circle-rotation-is-ergodic-iff-angle-is-irrational`** (from group a, gap-a-reader-closes) — Step 2.1 of the irrational direction ends: 'Subtracting the two exceptional portions, this intersection would contain points in both A and its complement on a set of measure at least 19r/10-2r/5=3r/2>0, impossible.' The reader must reconstruct the argument: with K = J intersect R^m I, B1 = R^m I minus A of measure < r/5 and B2 = J intersect A of measure < r/5, one has K minus (B1 union B2) contained in A intersect A-complement = empty while lambda(K minus (B1 union B2)) >= lambda(K) - 2r/5 > 19r/10 - 2r/5 = 3r/2. The numbers and the conclusion are correct, but the sentence does not say which set has measure 3r/2 or why it is empty.
- **s8a-6ee36e270ce20371761fd054 · `thm-induced-transformation-preserves-the-restricted-measure`** (from group a, gap-a-reader-closes) — Step 2.1 says of the pieces H_n: 'Each differs from H_n intersect E_infinity by a subset of the measurable null set E minus E_infinity; these differences are themselves measurable.' Measurability of a subset of a null set needs completeness, which is not assumed here (the statement explicitly does not require invertibility, and no completeness hypothesis is present). The intended justification is available but unstated: H_n and E_infinity are both measurable, so the difference is measurable by closure under intersection and complement, and it has measure zero by monotonicity. As written the parenthetical reason is not valid in a non-complete space.
- **s8a-ac4ba8d17c1346323061463b · `ex-gauss-map-preserves-gauss-measure`** (from group a, presentation) — Step 3.1 closes with two sentences reading 'The rational-base assertion uses [F10]. The rational-base assertion uses [F11].' This is a duplicated sentence; it is harmless but should be merged into one statement naming both facts.
- **s8a-40df81b6e6ecc8c8481bd77f · `ex-lindeberg-array-with-no-identically-distributed-row`** (from group a, presentation) — Step 2.1 justifies the sum identity by 'obtained by pairing k with n+1-k and adding the n equal pair sums'. The pairing gives n/2 pairs each of sum n+1 (and, for odd n, one unpaired middle term), not n pair sums. The displayed value n(n+1)/2 is correct; only the description of the justification is inaccurate.
- **s8a-53693bf584a50340bb00930c · `def-row-wise-independent-centered-triangular-array`** (from group a, presentation) — The row-wise independence clause is stated as the rectangle product rule and then asserted to be 'independence in [[def-independent-random-elements]]', which is defined through independence of generated sigma-algebras. The equivalence is true and is published as thm-rectangle-criterion-for-independent-random-elements, but the definition cites only the definition item, so the bridge is asserted rather than cited. The CLT chain (row independence implies factorization of characteristic functions) uses it.

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

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-17`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-17-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-17-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-17-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-17-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-17-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
