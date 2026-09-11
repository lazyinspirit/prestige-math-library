# Step 7 adjudication — group **a**, run `phase-2-next-20`

You are the group Alpha for batches **1**, **5**: 3 A/B pair(s), 6 page(s), 51 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `weak-mixing-and-the-chacon-transformation` | A | measure-theory | 288.0423 | `measure-preserving-systems-and-mixing-criteria`, `complex-lp-spaces-and-test-function-conventions`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `lebesgue-measure-on-euclidean-space`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial` |
| 1 | `weak-mixing-and-the-chacon-transformation-examples` | B | measure-theory | 288.0424 | `weak-mixing-and-the-chacon-transformation` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence` | A | fourier-analysis | 288.140165 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `orthonormal-bases-parseval-and-fourier-series`, `measures-and-their-basic-properties` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` | B | fourier-analysis | 288.14017 | `kolmogorov-block-construction-and-almost-everywhere-divergence` |
| 5 | `carleson-hunt-time-frequency-theorem` | A | fourier-analysis | 288.140175 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| 5 | `carleson-hunt-time-frequency-theorem-examples` | B | fourier-analysis | 288.1401775 | `carleson-hunt-time-frequency-theorem`, `kolmogorov-block-construction-and-almost-everywhere-divergence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-mixing-and-the-chacon-transformation` — Weak Mixing and the Chacon Transformation (21 item(s))

- `def-unitary-eigenfunction-for-a-probability-system` · definition — Unitary eigenfunction for a probability system
- `def-l-two-operator-conventions-for-weak-mixing` · definition — L two operator conventions for weak mixing
- `lem-closed-l-two-subspaces-have-orthogonal-projections` · lemma — Closed l two subspaces have orthogonal projections
- `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace` · lemma — Hilbert cesaro averages converge to the fixed subspace
- `lem-product-rectangle-kernels-are-dense-in-complex-l-two` · lemma — Product rectangle kernels are dense in complex l two
- `lem-square-integrable-kernels-define-bounded-compact-integral-operators` · lemma — Square integrable kernels define bounded compact integral operators
- `lem-conjugate-transpose-kernels-give-adjoints` · lemma — Conjugate transpose kernels give adjoints
- `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` · lemma — Invariant square integrable kernel produces a compact intertwiner
- `lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k` · lemma — Nonzero compact kernel operators yield nonzero positive compact k star k
- `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces` · lemma — Nonzero positive compact self adjoint operators have positive finite dimensional eigenspaces
- `lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces` · lemma — Compact intertwiners produce finite dimensional invariant subspaces
- `lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors` · lemma — Nonzero finite dimensional complex invariant subspaces have unitary eigenvectors
- `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` · theorem — Weak mixing is equivalent to absence of nonconstant eigenfunctions
- `def-chacon-three-cut-one-spacer-towers` · definition — Chacon three cut one spacer towers
- `lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets` · lemma — Chacon partial maps extend to an invertible map mod null sets
- `lem-chacon-levels-approximate-measurable-sets` · lemma — Chacon levels approximate measurable sets
- `thm-chacon-transformation-is-ergodic` · theorem — Chacon transformation is ergodic
- `lem-chacon-eigenfunctions-are-constant` · lemma — Chacon eigenfunctions are constant
- `lem-chacon-tower-height-correlations-obstruct-mixing` · lemma — Chacon tower height correlations obstruct mixing
- `thm-chacon-transformation-is-weakly-mixing-but-not-mixing` · theorem — Chacon transformation is weakly mixing but not mixing
- `fs-weak-mixing-implies-strong-mixing` · false-statement — Weak mixing implies strong mixing

### `weak-mixing-and-the-chacon-transformation-examples` — Weak Mixing and the Chacon Transformation — Examples (3 item(s))

- `ex-first-three-chacon-tower-heights` · example — First three chacon tower heights
- `ex-chacon-spacer-measure-budget` · example — Chacon spacer measure budget
- `cex-chacon-correlation-subsequence-prevents-mixing` · counterexample — Chacon correlation subsequence prevents mixing

### `kolmogorov-block-construction-and-almost-everywhere-divergence` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence (8 item(s))

- `def-kolmogorov-analytic-partial-sum-maximal-function` · definition — Kolmogorov analytic partial sum maximal function
- `lem-kolmogorov-simultaneous-phase-approximation` · lemma — Kolmogorov simultaneous phase approximation
- `lem-kolmogorov-atomic-kernel-maxima` · lemma — Kolmogorov atomic kernel maxima
- `lem-kolmogorov-block-polynomial-with-large-partial-sums` · lemma — Kolmogorov block polynomial with large partial sums
- `lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima` · lemma — Separated frequency blocks do not disturb earlier partial sum maxima
- `lem-kolmogorov-gliding-hump-series-converges-in-lone` · lemma — Kolmogorov gliding hump series converges in lone
- `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` · lemma — Kolmogorov block maxima diverge off a null limsup set
- `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` · theorem — Kolmogorov lone fourier series diverges almost everywhere

### `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence: Examples (2 item(s))

- `ex-one-finite-kolmogorov-frequency-block` · example — One finite kolmogorov frequency block
- `ex-summable-exceptional-measures-in-the-kolmogorov-induction` · example — Summable exceptional measures in the kolmogorov induction

### `carleson-hunt-time-frequency-theorem` — The Carleson–Hunt Time–Frequency Theorem (14 item(s))

- `def-carleson-operator-and-measurable-linearisation` · definition — Carleson operator and measurable linearisation
- `def-carleson-tiles-wave-packets-and-tile-order` · definition — Carleson tiles wave packets and tile order
- `lem-wave-packet-model-dominates-the-linearised-carleson-operator` · lemma — Wave packet model dominates the linearised carleson operator
- `def-density-size-and-tree-count-for-carleson-tiles` · definition — Density size and tree count for carleson tiles
- `lem-carleson-density-selection` · lemma — Carleson density selection
- `lem-carleson-size-selection` · lemma — Carleson size selection
- `lem-carleson-single-tree-estimate` · lemma — Carleson single tree estimate
- `lem-carleson-forest-summation-gives-restricted-weak-ltwo` · lemma — Carleson forest summation gives restricted weak ltwo
- `lem-carleson-signed-tree-weak-one-one-estimate` · lemma — Carleson signed tree weak one one estimate
- `lem-hunt-exceptional-set-and-distribution-estimates` · lemma — Hunt exceptional set and distribution estimates
- `lem-carleson-restricted-weak-interpolation` · lemma — Carleson restricted weak interpolation
- `thm-carleson-maximal-operator-is-strong-ltwo` · theorem — Carleson maximal operator is strong ltwo
- `lem-carleson-real-line-to-torus-transfer` · lemma — Carleson real line to torus transfer
- `thm-carleson-hunt-maximal-inequality-on-the-torus` · theorem — Carleson hunt maximal inequality on the torus

### `carleson-hunt-time-frequency-theorem-examples` — The Carleson–Hunt Time–Frequency Theorem: Examples (3 item(s))

- `ex-two-comparable-and-two-incomparable-carleson-tiles` · example — Two comparable and two incomparable carleson tiles
- `ex-balancing-density-and-size-levels-in-the-carleson-sum` · example — Balancing density and size levels in the carleson sum
- `rem-carleson-hunt-does-not-include-the-lone-endpoint` · remark — Carleson hunt does not include the lone endpoint

## Your seams

Your pages depend on another group's:

- `carleson-hunt-time-frequency-theorem` requires `schwartz-space-and-the-plancherel-theorem` (group b, batch 15)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

10 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-9f1f4f613041edd90f79dfb2 · `lem-wave-packet-model-dominates-the-linearised-carleson-operator`** (from group a, presentation) — The symbol κ denotes the reconstruction constant κ = (1/log2)∫H(t)dt/t in this item, while def-density-size-and-tree-count-for-carleson-tiles uses κ = 20 for the weight exponent; both are locally defined, but the clash is visible on one page and can mislead a constants check.
- **s8a-57e1e1c2aa2b9a335a4991b3 · `ex-two-comparable-and-two-incomparable-carleson-tiles`** (from group a, presentation) — This example (and ex-balancing-density-and-size-levels-in-the-carleson-sum) gives its argument under a '## Proof' heading, whereas the content contract's heading convention for examples is 'Verification, when supplied' (SCHEMA §3). The mathematics is fine; only the section name deviates.
- **s8a-6889ae306bf4f2fa068e5e05 · `def-unitary-eigenfunction-for-a-probability-system`** (from group a, presentation) — The closing sentence asserts that a completed Lebesgue probability space 'has the usual interval-and-atoms model modulo null sets'; that is a classification fact stated as a convention, is not proved here, and is in fact not used by any owned proof (the equivalence theorem's arguments use only general Hilbert-space and measure facts).
- **s8a-fb25c16d6288da4c37c3dba2 · `kolmogorov-block-construction-and-almost-everywhere-divergence`** (from group a, presentation) — The page header's requires list contains orthonormal-bases-parseval-and-fourier-series, which has no library page file and is authored in none of this run's 15 batches; no owned item's deps reach it. Recorded so the adjudicator can rule on this page-level prerequisite.
- **s8a-1a9341f491db4e9b962b4724 · `lem-carleson-forest-summation-gives-restricted-weak-ltwo`** (from group a, presentation) — No item file declares this lemma in its deps (only the A-page prose names it); the two Carleson theorems reach their bounds through lem-hunt-exceptional-set-and-distribution-estimates and lem-carleson-restricted-weak-interpolation, so its intended role in the L² spine is unused. Not a mathematical defect, but worth confirming against the plan's intent.
- **s8a-d933b25791d97658fb3c3c7d · `lem-carleson-single-tree-estimate`** (from group a, presentation) — Its F4 (centered real-line maximal L² bound) rests on the published cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, whose upstream supplier thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity has a canonically recorded proof gap (step 4.1 applies Tonelli without the σ-finiteness hypothesis; step 2.1 omits the tail-integrability note for the weak-(1,1) application). research/published-consumer-supplier-ledger.md already records this and states the Euclidean consumer is not additionally blocked, so this item is not defective; recorded as dependency debt only.
- **s8a-f341149f71aa52b5f4799cbd · `lem-carleson-size-selection`** (from group b, would-be-fatal) — The F3 proof-contract citation quotes the pre-repair Statement of thm-plancherel and omits its now-explicit hypothesis n>=1. The item uses only n=1, so its mathematics remains faithful, but the exact Statement quote must be refreshed before strict contract validation can pass.
- **s8a-5d796284787d379b227f695d · `lem-carleson-single-tree-estimate`** (from group b, would-be-fatal) — The F3 proof-contract citation quotes the pre-repair Statement of thm-plancherel and omits its now-explicit hypothesis n>=1. The item uses only n=1, so its mathematics remains faithful, but the exact Statement quote must be refreshed before strict contract validation can pass.
- **s8a-2bf6ac4833f917bc29734a9b · `lem-carleson-signed-tree-weak-one-one-estimate`** (from group b, would-be-fatal) — The F2 proof-contract citation quotes the pre-repair Statement of thm-plancherel and omits its now-explicit hypothesis n>=1. The item uses only n=1, so its mathematics remains faithful, but the exact Statement quote must be refreshed before strict contract validation can pass.
- **s8a-1bb5718ed8eab51da39c66ba · `thm-carleson-maximal-operator-is-strong-ltwo`** (from group b, would-be-fatal) — The F5 proof-contract citation quotes the pre-repair Statement of lem-schwartz-space-is-dense-in-l-two. The repaired Statement now explicitly requires n>=1 and asserts both L2 membership and density. This item works on R, so the mathematics remains faithful, but the exact Statement quote must be refreshed before strict contract validation can pass.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-20`

Read `research/phase-2-next-20-judge-closure.json`,
`research/phase-2-next-20-judge.jsonl`,
`research/phase-2-next-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-20-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-20-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-20-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
