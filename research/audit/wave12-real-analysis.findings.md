# Wave 12 real-analysis Audit-Beta findings

## A1/A2 result

The four manifest pages, all 61 in-scope items, all 48 supplied proofs, every
numbered proof step, every direct Fact citation, and every cited dependency
clause were read. I found no unambiguous mathematical falsehood and, apart from
CP-2 below, no used dependency citation with a wrong hypothesis, quantifier,
direction, or target.
I found two citation-precision defect families requiring A3 adjudication: eight
unused Facts containing thirteen direct links, and one Fact containing two
undeclared dependency links, one of which is also semantically imprecise.

No item or page was edited. All proposals below remain unapplied pending A3.

## Exact coverage

- Manifest: `research/audit/wave12-real-analysis.pages.json`.
- Pages read: `library/real-analysis/rn-as-a-normed-space.md`, its examples
  page, `library/real-analysis/uniform-convergence-of-functions.md`, and its
  examples page.
- Scope: 61 unique mathematical-content items: 13 non-proof items and 48
  proof-bearing items.
- Proof coverage: 398 numbered steps, each mapped exactly once in the proof
  contracts.
- Fact-citation coverage: 681 direct wikilinks in `[F#]`, `[A#]`, or `[L#]`
  paragraphs, with the exact on-disk source clause and all using steps recorded.
- Dependency coverage: 182 unique declared dependency targets and 164 unique
  direct Fact targets were opened and checked. The page audit's 890 resolved
  item-to-target relationships were also reconciled: 650 published-backward,
  236 same-batch, and 4 forward relationships; none was unresolved.
- Boundary coverage: all eight worksheet cases were disposed of for every
  proof-bearing item, giving 384 anchored dispositions.
- Exception statement: none. Every proof step and every dependency citation in
  both A/B pairs was read.

## A1 provenance ledger

The ledger contains exactly 61 rows. Statement classifications are 60
`ai-altered` with `semantic-source` and one positively determined
`ai-generated` corpus-specific Remark with `none`. Proof classifications are
48 `ai-generated` and 13
`not-applicable`. All `alpha_concurred` fields remain `false`. No
`established-knowledge` fallback was used.

Source keys used below are:

- **N** — Berkeley finite-dimensional norm notes and UCI functional-analysis
  notes: <https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html>,
  <https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf>.
- **I** — Princeton functional-analysis notes, including the parallelogram-law
  obstruction: <https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2024/MAT520_Lecture_Notes.pdf>.
- **V** — Lebl's vector-calculus material:
  <https://www.jirka.org/ra/html/sec_svthedercont.html>,
  <https://www.jirka.org/ra/realanal2-draft-v2.0.pdf>.
- **R** — Banakh, *A simple inductive proof of Levy-Steinitz theorem*:
  <https://arxiv.org/abs/1711.04136>.
- **S** — Oertel–Paat–Weismantel, exact Steinitz dimension bound:
  <https://arxiv.org/abs/2201.05874>.
- **U** — Lebl and Trench open real-analysis texts:
  <https://www.jirka.org/ra/realanal2-draft-v2.0.pdf>,
  <https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf>.
- **F** — University of Alberta notes on infinite series of functions:
  <https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf>.
- **D** — Dini theorem convention source and Trench:
  <https://en.wikipedia.org/wiki/Dini%27s_theorem>,
  <https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf>.
- **C** — Harvard's published $xy/(x^2+y^2)$ witness:
  <https://legacy-www.math.harvard.edu/archive/21a_fall_09/exhibits/bitch/index.html>.

Every recorded URL was opened successfully during A1. The compact per-item
classification below is `statement / proof / evidence / source`.

| Item | Classification |
|---|---|
| `def-norm-and-normed-space` | `ai-altered / not-applicable / semantic-source / N` |
| `def-euclidean-inner-product` | `ai-altered / not-applicable / semantic-source / N` |
| `thm-cauchy-schwarz-and-the-euclidean-norm` | `ai-altered / ai-generated / semantic-source / N` |
| `def-p-norms-on-rn` | `ai-altered / not-applicable / semantic-source / N` |
| `lem-p-norms-are-norms-and-induce-the-published-metrics` | `ai-altered / ai-generated / semantic-source / N` |
| `def-equivalent-norms` | `ai-altered / not-applicable / semantic-source / N` |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` | `ai-altered / ai-generated / semantic-source / N` |
| `thm-all-norms-on-rn-are-equivalent` | `ai-altered / ai-generated / semantic-source / N` |
| `thm-componentwise-convergence-and-completeness` | `ai-altered / ai-generated / semantic-source / N` |
| `cor-bolzano-weierstrass-in-rn` | `ai-altered / ai-generated / semantic-source / N` |
| `def-vector-valued-functions-limits-and-continuity` | `ai-altered / not-applicable / semantic-source / V` |
| `thm-componentwise-limits-and-continuity` | `ai-altered / ai-generated / semantic-source / V` |
| `def-vector-valued-derivative-and-integral` | `ai-altered / not-applicable / semantic-source / V` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `ai-altered / ai-generated / semantic-source / V` |
| `thm-mean-value-inequality` | `ai-altered / ai-generated / semantic-source / V` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `ai-altered / ai-generated / semantic-source / V` |
| `def-series-of-vectors-and-rearrangement` | `ai-altered / not-applicable / semantic-source / R` |
| `thm-absolute-convergence-in-rn` | `ai-altered / ai-generated / semantic-source / R` |
| `def-the-space-of-summing-directions` | `ai-altered / not-applicable / semantic-source / R` |
| `thm-steinitz-polygonal-confinement` | `ai-altered / ai-generated / semantic-source / S` |
| `thm-rearrangement-sums-lie-in-an-affine-subspace` | `ai-altered / ai-generated / semantic-source / R` |
| `rem-rn-conventions-and-scope` | `ai-generated / not-applicable / none / —` |
| `cex-mean-value-equality-fails-for-a-vector-valued-function` | `ai-altered / ai-generated / semantic-source / V` |
| `cex-the-mean-value-inequality-is-attained` | `ai-altered / ai-generated / semantic-source / V` |
| `ex-p-norm-comparison-constants-on-r2` | `ai-altered / ai-generated / semantic-source / N` |
| `cex-the-one-norm-comes-from-no-inner-product` | `ai-altered / ai-generated / semantic-source / I` |
| `cex-separately-continuous-not-jointly-continuous` | `ai-altered / ai-generated / semantic-source / C` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `ai-altered / ai-generated / semantic-source / V` |
| `ex-steinitz-confinement-worked-in-the-plane` | `ai-altered / ai-generated / semantic-source / S,R` |
| `ex-gamma-and-its-complement-computed-for-a-plane-series` | `ai-altered / ai-generated / semantic-source / R` |
| `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space` | `ai-altered / ai-generated / semantic-source / R` |
| `fs-all-norms-on-any-real-vector-space-are-equivalent` | `ai-altered / ai-generated / semantic-source / N` |
| `fs-heine-borel-holds-in-every-normed-space` | `ai-altered / ai-generated / semantic-source / N` |
| `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension` | `ai-altered / ai-generated / semantic-source / N` |
| `def-pointwise-uniform-and-uniformly-cauchy-convergence` | `ai-altered / not-applicable / semantic-source / U` |
| `lem-uniform-convergence-implies-pointwise-convergence-real-functions` | `ai-altered / ai-generated / semantic-source / U` |
| `thm-uniform-cauchy-criterion-real-functions` | `ai-altered / ai-generated / semantic-source / U` |
| `def-series-of-real-functions` | `ai-altered / not-applicable / semantic-source / U` |
| `cor-uniform-cauchy-criterion-function-series` | `ai-altered / ai-generated / semantic-source / U` |
| `lem-uniform-limits-linear-combinations` | `ai-altered / ai-generated / semantic-source / U` |
| `lem-uniform-product-limit-under-boundedness` | `ai-altered / ai-generated / semantic-source / U` |
| `thm-uniform-limit-continuous-real-functions` | `ai-altered / ai-generated / semantic-source / U` |
| `cor-uniform-limit-uniformly-continuous` | `ai-altered / ai-generated / semantic-source / U` |
| `def-continuous-real-functions-on-a-compact-metric-space` | `ai-altered / not-applicable / semantic-source / U` |
| `thm-c-k-complete-in-the-sup-metric` | `ai-altered / ai-generated / semantic-source / U` |
| `lem-uniform-integral-error-bound` | `ai-altered / ai-generated / semantic-source / U` |
| `thm-uniform-limit-interchanges-riemann-integration` | `ai-altered / ai-generated / semantic-source / U` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `ai-altered / ai-generated / semantic-source / U` |
| `thm-weierstrass-m-test-for-function-series` | `ai-altered / ai-generated / semantic-source / F` |
| `thm-uniform-dirichlet-test-for-function-series` | `ai-altered / ai-generated / semantic-source / F` |
| `thm-uniform-abel-test-for-function-series` | `ai-altered / ai-generated / semantic-source / F` |
| `thm-dini-on-a-closed-interval` | `ai-altered / ai-generated / semantic-source / D` |
| `rem-uniform-convergence-agrees-with-the-later-uniform-topology` | `ai-altered / not-applicable / semantic-source / U` |
| `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly` | `ai-altered / ai-generated / semantic-source / U` |
| `cex-shrinking-rectangles-have-integral-one` | `ai-altered / ai-generated / semantic-source / U` |
| `cex-dini-needs-a-compact-domain` | `ai-altered / ai-generated / semantic-source / D` |
| `cex-dini-needs-continuous-approximants` | `ai-altered / ai-generated / semantic-source / D` |
| `cex-dini-needs-a-continuous-limit` | `ai-altered / ai-generated / semantic-source / D` |
| `cex-dini-needs-monotonicity` | `ai-altered / ai-generated / semantic-source / D` |
| `cex-m-over-m-plus-n-has-noncommuting-iterated-limits` | `ai-altered / ai-generated / semantic-source / U` |
| `cex-uniform-convergence-does-not-control-derivatives` | `ai-altered / ai-generated / semantic-source / U` |

The sole `ai-generated` Statement determination is positive rather than a
failed-source fallback: `rem-rn-conventions-and-scope` is a site-specific
inventory of this page's scope and build/read-order status, a composition with
no literature analogue. Its embedded mathematical conventions were checked
against N, V, R, and S. The Steinitz source proves the stronger arbitrary-norm,
finite zero-sum unit-ball permutation theorem with every partial sum bounded by
the dimension; the item is its Euclidean-norm, zero-indexed specialization,
which is why its evidence is semantic rather than exact.

## A2 defects and A3 proposals

### CP-1 — eight unused Fact paragraphs, class (b)

These paragraphs contain thirteen direct dependency links but no numbered proof
step cites their labels. The statements in the paragraphs are mathematically
true; the defect is that Facts are proof inputs and these are commentary or
alternative routes. Proposed repair: delete the listed Fact paragraphs. Delete
the corresponding dependency metadata only where the target has no remaining
occurrence in the item. Do not change any Statement, proof step, id, or order.

| Item and Fact | Old text | Dependency disposition after deletion |
|---|---|---|
| `thm-cauchy-schwarz-and-the-euclidean-norm` `[L7]` | “Minkowski's inequality for finite sums at the rational exponent $p=2$ … and the triangle inequality for a finite sum of reals …; neither is used below …” | Keep `thm-minkowski-finite`, which remains cited in the Remarks; remove `lem-triangle-inequality-finite`. |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` `[L13]` | “The reverse triangle inequality for a metric … is the published `lem-metric-reverse-triangle`; the norm statement … is its analogue …” | Remove `lem-metric-reverse-triangle`; it occurs nowhere else in the item. |
| `cor-bolzano-weierstrass-in-rn` `[L7]` | “Componentwise convergence in $\mathbb{R}^{n}$ for $n\ge1$ …” | Keep `thm-componentwise-convergence-and-completeness`, which remains cited in the Remarks. |
| `cor-bolzano-weierstrass-in-rn` `[L8]` | “Square roots and absolute values: $\sqrt{t^2}=|t|$ …” | Remove `thm-of-square-roots` and `lem-of-abs-value`; neither occurs elsewhere in the item. |
| `cor-vector-valued-ftc-and-lipschitz-bound` `[L7]` | “Additivity of the integral over subintervals and the orientation convention …” | Keep both targets; both remain cited in the Remarks. |
| `cex-the-one-norm-comes-from-no-inner-product` `[L6]` | “All norms on $\mathbb{R}^{2}$ are equivalent …” | Keep `thm-all-norms-on-rn-are-equivalent`, cited in the Remarks; remove `def-equivalent-norms`. |
| `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space` `[L5]` | “An absolutely convergent series in $\mathbb{R}^{n}$ has exactly one rearrangement sum …” | Keep `thm-absolute-convergence-in-rn`, cited in the Remarks. |
| `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension` `[L7]` | “A real sequence converges to $L$ exactly when its limit inferior and limit superior are both $L$ …” | Keep `thm-convergence-iff-limsup-equals-liminf`, cited in the Remarks; remove `def-integer-power`. |

This proposal removes 8 Fact paragraphs, 13 dead direct Fact links, and 6
now-unneeded dependency entries. It preserves seven dependencies that still
have non-Fact uses.

### CP-2 — undeclared and imprecise order dependencies, class (b)

Item `lem-p-norms-are-norms-and-induce-the-published-metrics`, Fact `[L7]`, now
reads:

> Order arithmetic: multiplying an inequality by a nonnegative real preserves
> it (`lem-of-sign-rules` in its strict form, together with the case of equality
> settled by totality), and $\le$ is transitive (`def-ordered-field`,
> `def-complete-ordered-field`).

Both order-definition links are absent from `deps`. Moreover,
`def-complete-ordered-field` defines the least-upper-bound property and does not
state the transitivity proposition; completeness is irrelevant here.
`def-ordered-field` says in its Remarks that the defined relation is a total
order, which licenses transitivity under the library's convention.

Proposed new text:

> Order arithmetic: multiplying an inequality by a nonnegative real preserves
> it (`lem-of-sign-rules` in its strict form, together with the case of equality
> settled by totality), and $\le$ is transitive (`def-ordered-field`).

Add `def-ordered-field` to `deps`; do not add
`def-complete-ordered-field`. This is a citation/metadata repair only.

## Mathematical review and triage

- The full Steinitz proof was checked against the exact theorem in S. Its bound
  $n$ is the classical arbitrary-norm dimension bound, and the on-disk
  polytope/support argument licenses the permutation conclusion. The wording
  that a stage is “determined” suppresses finite witness choices, but only
  finite choice is involved and the gap is closed immediately from the finite
  nonempty candidate sets; it falls under the standing 30-second rule.
- `thm-rearrangement-sums-lie-in-an-affine-subspace` proves only containment.
  R proves the stronger Levy–Steinitz affine-subspace equality, so the published
  weaker direction is sound and not misleading about what its own proof
  establishes.
- In `thm-norm-inequality-for-the-vector-valued-integral`, the symbol $K$ is
  used before its explicit definition later in the same proof; the intended
  compact image is immediate from the next block. This is nonfatal under the
  standing rule.
- The iterated-limit counterexample suppresses one elementary rescaling in its
  epsilon estimate. The displayed denominator estimate supplies it in under 30
  seconds.
- All other proof steps, Remarks, and false-statement witnesses were read with
  proof-step suspicion. No additional repair class (a), (b), or (d) proposal
  survived the standing triage rule.

## Published-claim and page-prose debt noticed in passing

These are recorded, not chased, as required by the brief.

- `library/real-analysis/rn-as-a-normed-space.md` has a 1,068-word,
  twelve-block A-page summary rather than the current two-paragraph,
  approximately 150-word form. This is legacy page prose, not a mathematical
  item defect.
- `rem-rn-conventions-and-scope` says, “There is no definition of a linear map
  anywhere in this library at this point,” while published
  `def-linear-map` now exists on
  `library/linear-algebra/linear-maps-rank-nullity-and-quotient-spaces.md`.
  This is published-claim decay about corpus state. It does not affect any
  mathematical argument audited here.
- The uniform-convergence A-page summary is two paragraphs and 126 words; its
  mathematical synopsis agrees with the scoped items.
- Both B pages are intentionally bodyless apart from frontmatter and item
  ordering; no summary claim was available to decay.

## Wave 12 to Wave 11 reconciliation queue

The following 29 edges enter Wave 11. They were checked against the current
on-disk target clauses, but remain explicitly provisional for exact-final
reconciliation after the Wave 11 text freezes:

| Wave 12 item | Wave 11 target |
|---|---|
| `def-vector-valued-derivative-and-integral` | `def-oriented-integral` |
| `def-vector-valued-derivative-and-integral` | `thm-linearity-of-the-integral` |
| `def-vector-valued-derivative-and-integral` | `lem-integrability-on-a-subinterval` |
| `def-vector-valued-derivative-and-integral` | `thm-additivity-over-subintervals` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-linearity-of-the-integral` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-monotonicity-of-the-integral` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `cor-integrability-of-absolute-values-products-and-lattice-operations` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-composition-with-a-continuous-function` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `def-oriented-integral` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `thm-ftc-second-part` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `cor-primitives-of-a-continuous-function` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `def-oriented-integral` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `thm-additivity-over-subintervals` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `cor-primitives-of-a-continuous-function` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `thm-monotonicity-of-the-integral` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `thm-linearity-of-the-integral` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `def-oriented-integral` |
| `lem-uniform-integral-error-bound` | `thm-linearity-of-the-integral` |
| `lem-uniform-integral-error-bound` | `thm-monotonicity-of-the-integral` |
| `lem-uniform-integral-error-bound` | `def-oriented-integral` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-ftc-first-part` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-ftc-second-part` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `lem-integrability-on-a-subinterval` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `def-oriented-integral` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-additivity-over-subintervals` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `def-the-integral-function` |
| `cex-shrinking-rectangles-have-integral-one` | `lem-changing-a-function-at-finitely-many-points` |
| `cex-shrinking-rectangles-have-integral-one` | `thm-additivity-over-subintervals` |
| `cex-shrinking-rectangles-have-integral-one` | `def-oriented-integral` |

## Proof-contract gate state

`research/audit/wave12-real-analysis.proof-contracts.json` contains all 48
contracts, 681 citation entries, 398 one-step input maps, and 384 boundary
dispositions. `finite_smoke` is empty because none of the available finite
combinatorial smoke-test types applies to these real-analysis claims.
`risk_review` is left `pending` for Alpha, as required before A5/A6 routing.

The strict contract validator reports exactly 15 errors and no warnings:
thirteen `citation-uses` errors from CP-1 and two
`citation-undeclared-dependency` errors from CP-2. These are the published
defects proposed above, not omissions from the contract. No other contract
error was reported.

## A3 handoff

Approve, reject, or amend CP-1 and CP-2. A provenance-only A4 pass would add the
61 ledger determinations and their source references to item frontmatter. If
CP-1 or CP-2 is approved, those are material citation repairs and require their
own pre-edit touchlog snapshots, stale judge/audit removal, reflow, precheck,
and local gates. Audit-Beta has applied none of this work.

## A4 continuity checkpoint — 2026-08-09

Substage: final A4 accounting after the approved item edits. The owned
artifacts are this findings file, `wave12-real-analysis.provenance.jsonl`,
`wave12-real-analysis.proof-contracts.json`, the merged
`wave12-proof-contracts.json`, and the 61 manifest-scoped items. All 61
provenance/source determinations are applied; the eight approved material
items contain CP-1/CP-2 and have had stale verification state removed; reflow
was unchanged; all eight item prechecks pass. The regenerated contracts have
48 contracts, 398 numbered steps, 667 Fact-citation entries, and 384 boundary
dispositions, with strict validation at 48/48 and zero errors or warnings.
The remaining action is to verify the 53/8 field-aware split, final dependency
delta and all 29 Wave12-to-Wave11 edges, source/frontmatter invariants, direct
gates, and `git diff --check`, then append the completed A4 accounting here.

## A4 applied result — 2026-08-09

A3's authorization has been applied exactly. The field-aware final split is
53 pure retags and the eight A3-listed material items, with no created item.
All 61 approved provenance blocks and all approved source associations are in
frontmatter: statements are 60 `ai-altered` and one `ai-generated`; proofs are
48 `ai-generated` and 13 `not-applicable`; evidence remains 60
`semantic-source` and one `none` in the ledger. The 61 rows contain 108 URL
associations to 11 distinct URLs. Every association occurs in the matching
item's `sources.references`; all 11 URLs were successfully reopened through
the available web route. All 61 legacy `origin` blocks are byte-preserved, no
legacy `authorship` field remains, and the verification block and body of each
of the 53 pure retags are byte-identical to the baseline except for the
authorized provenance/source frontmatter additions.

The material repairs are class-(b) citation-precision repairs. Their exact
old-to-new dispositions and mathematical bases are:

| Item | Old text or state | Final text or state, and basis |
|---|---|---|
| `thm-cauchy-schwarz-and-the-euclidean-norm` | `[L7]` stated the unused Minkowski and finite-sum triangle alternatives. | `[L7]` is absent. Its two Fact links are absent; `lem-triangle-inequality-finite` is removed from `deps`, while `thm-minkowski-finite` remains because the Remark directly cites it. No proof step used `[L7]`. |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` | `[L13]` stated the metric reverse triangle inequality as an unused analogue. | `[L13]` and its one link are absent, and `lem-metric-reverse-triangle` is removed from `deps`. The norm reverse-triangle clause is proved locally, and no proof step used `[L13]`. |
| `cor-bolzano-weierstrass-in-rn` | `[L7]` cited componentwise convergence; `[L8]` cited the square-root and absolute-value identity; the first Remark ended its isometry calculation with `by [L8]`. | Both Facts are absent. The Remark now cites `thm-of-square-roots` and `lem-of-abs-value` exactly where it uses `sqrt((s-t)^2)=|s-t|`. Those two dependencies and `thm-componentwise-convergence-and-completeness` remain declared because the Remarks use them. |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `[L7]` recorded additivity and oriented integration although no step used it. | `[L7]` and its two Fact links are absent. `thm-additivity-over-subintervals` and `def-oriented-integral` remain declared because the Remarks cite both directly. |
| `cex-the-one-norm-comes-from-no-inner-product` | `[L6]` stated unused equivalence of all norms on `R^2`. | `[L6]` and its two links are absent. `def-equivalent-norms` is removed from `deps`; `thm-all-norms-on-rn-are-equivalent` remains for its direct Remark use. |
| `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space` | `[L5]` stated that absolute convergence gives a unique rearrangement sum. | `[L5]` and its one link are absent. `thm-absolute-convergence-in-rn` remains declared for its direct Remark use. |
| `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension` | `[L7]` stated the liminf/limsup convergence criterion and also linked `def-integer-power`. | `[L7]` and its two links are absent. `def-integer-power` is removed from `deps`; `thm-convergence-iff-limsup-equals-liminf` remains for its direct Remark use. |
| `lem-p-norms-are-norms-and-induce-the-published-metrics` | `[L7]` ended with “and `<=` is transitive (`def-ordered-field`, `def-complete-ordered-field`)”; neither target was declared. | `[L7]` now ends with “and `<=` is transitive (`def-ordered-field`)”. `def-ordered-field` is added to `deps`; the irrelevant direct `def-complete-ordered-field` link is absent. Totality supplies the equality split, the ordered-field relation supplies transitivity, and `lem-of-sign-rules` supplies the strict multiplication case. |

Thus CP-1 deletes exactly eight Fact paragraphs and their 13 direct links,
then relocates the two Bolzano--Weierstrass links into the actually using
Remark. It removes exactly four declared dependencies and preserves the nine
dependencies A3 required. CP-2 removes one further direct link and adds the
one required declaration. The net declared-dependency change is four removals
and one addition. No Statement, numbered proof step, id, page order, or item
order changed.

The stale judge/audited state is absent from the seven material items that
carried it, and the stale `verification.verified` block is absent from
`cor-bolzano-weierstrass-in-rn`. All eight now carry only
`verification.precheck: pass`; no Beta certification was added. Reflow reported
all eight unchanged, and item precheck passed 8/8.

The regenerated namespaced and merged proof contracts contain 48 contracts,
398 numbered steps, 667 Fact-citation entries, and 384 boundary dispositions.
Strict validation reports zero errors, zero warnings, and 48/48 checked.
Finite smoke reports zero errors and zero applicable checks; risk routing
reports zero errors and 48 items routed.

The final relationship receipt contains 887 edges: 648 published-backward,
235 same-batch, and four forward. Its three-edge reduction from the 890-edge
baseline is exactly the net four-removal/one-addition dependency delta. All 29
Wave12-to-Wave11 barrier edges listed above remain present for A6's final-text
reconciliation.

Direct A4 validation is clean: global precheck checked 2,172 proof items with
zero failures; `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`,
`depsource`, and `depcheck --pending-audit-ok` passed; rendercheck parsed all
3,043 files; prosecheck had zero errors; depsource had zero unresolved targets;
the proof-contract, finite-smoke, risk-report, content-policy, and relationship
checks all exited zero. Content policy reports 61 scoped items, zero errors,
and the one expected legacy truth-risk warning for the positively
`ai-generated` `rem-rn-conventions-and-scope`. `citecheck` exited zero with its
advisory heuristic inventory, including the approved `[L7]` wording; the exact
ordered-field clause was checked at A3. `git diff --check` is clean.

The aggregate `gates.mjs` wrapper cannot launch child Node processes in this
managed sandbox: its final A4 attempt reports `spawnSync /usr/bin/node EPERM`
for all 12 required children and the one advisory child. The same sandbox rule
blocks `audit-split.mjs` at its internal `/bin/sh` spawn. Each underlying gate
was therefore run directly, and the split receipt records a subprocess-free
execution of the tool's exact field-aware algorithm over all 61 baseline/current
pairs. These are transport limitations, not content failures.

Only the orchestrator's existing `baseline` and `pre-A4` stage snapshots are
present in `wave12-touches.json`; Audit-Beta took no additional snapshot. The
long page summary and the generated Remark's published-claim debt are unchanged.
No A6 or later work was run. The earlier A1/A2 coverage statement remains
exact with no exception: every numbered proof step, every Fact citation, and
every declared dependency citation in both pairs was read.
