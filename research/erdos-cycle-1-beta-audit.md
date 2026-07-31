# Erdős cycle 1 Beta audit

Date: 2026-07-31

Scope: exhaustive Step 6a audit of the two A/B pairs
`uniform-convergence-of-functions` and
`chains-antichains-sperner-and-dilworth`.

## Outcome

The assigned batch is mathematically sound after the repairs recorded below.
The actual page files contain 67 distinct items. I read every item from disk,
including all Statements, definitions, Facts and Assumptions, proof or
refutation steps, examples, counterexamples, false statements, remarks,
frontmatter dependencies, and page prose. This covered 54 phase-bearing items
(36 Proof sections, 11 Counterexample sections, 2 Refutation sections, and
5 Verification sections), 274 numbered steps, 168 labelled Facts and
Assumptions, 275 frontmatter dependency edges, and 275 body wikilinks.

Ten existing items were repaired. No result was added, deleted, renamed, judged,
published, or owner-audited. No library page file needed a change.

## Coverage inventory

### `uniform-convergence-of-functions` A page

All 19 items were read:

`def-pointwise-uniform-and-uniformly-cauchy-convergence`,
`lem-uniform-convergence-implies-pointwise-convergence-real-functions`,
`thm-uniform-cauchy-criterion-real-functions`,
`def-series-of-real-functions`,
`cor-uniform-cauchy-criterion-function-series`,
`lem-uniform-limits-linear-combinations`,
`lem-uniform-product-limit-under-boundedness`,
`thm-uniform-limit-continuous-real-functions`,
`cor-uniform-limit-uniformly-continuous`,
`def-continuous-real-functions-on-a-compact-metric-space`,
`thm-c-k-complete-in-the-sup-metric`,
`lem-uniform-integral-error-bound`,
`thm-uniform-limit-interchanges-riemann-integration`,
`thm-uniform-derivative-limit-on-a-closed-interval`,
`thm-weierstrass-m-test-for-function-series`,
`thm-uniform-dirichlet-test-for-function-series`,
`thm-uniform-abel-test-for-function-series`,
`thm-dini-on-a-closed-interval`,
`rem-uniform-convergence-agrees-with-the-later-uniform-topology`.

### `uniform-convergence-of-functions-examples` B page

All 8 examples were read:

`cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly`,
`cex-shrinking-rectangles-have-integral-one`,
`cex-dini-needs-a-compact-domain`,
`cex-dini-needs-continuous-approximants`,
`cex-dini-needs-a-continuous-limit`,
`cex-dini-needs-monotonicity`,
`cex-m-over-m-plus-n-has-noncommuting-iterated-limits`,
`cex-uniform-convergence-does-not-control-derivatives`.

### `chains-antichains-sperner-and-dilworth` A page

All 30 spine items and both false statements were read:

`def-antichain-and-poset-covers`,
`def-height-and-width-of-a-finite-poset`,
`def-graded-poset-and-rank`,
`def-boolean-lattice-and-levels`,
`def-lattice-distributive-lattice-and-order-ideal`,
`def-join-irreducible-element`,
`def-shadow-of-a-uniform-family`,
`def-intersecting-family`,
`def-sunflower`,
`thm-mirsky-finite-posets`,
`lem-dilworth-maximal-antichain-decomposition`,
`lem-dilworth-induction-step`,
`thm-dilworth-finite-posets`,
`cor-erdos-szekeres-from-mirsky`,
`lem-maximal-chains-of-the-boolean-lattice`,
`thm-lym-inequality`,
`thm-local-lym-inequality`,
`lem-binomial-coefficients-symmetric-and-unimodal`,
`cor-sperner-theorem-with-equality-cases`,
`lem-symmetric-chain-decomposition-induction-step`,
`thm-symmetric-chain-decomposition-of-the-boolean-lattice`,
`cor-sperner-from-symmetric-chains`,
`lem-katona-cyclic-interval-bound`,
`thm-erdos-ko-rado`,
`lem-sunflower-maximal-disjoint-subfamily`,
`thm-erdos-rado-sunflower-lemma`,
`lem-finite-lattice-join-irreducible-decomposition`,
`lem-join-irreducible-is-join-prime`,
`lem-order-ideals-form-a-distributive-lattice`,
`thm-birkhoff-representation-finite-distributive-lattices`,
`fs-maximal-antichain-need-not-be-maximum`,
`fs-erdos-ko-rado-without-the-ground-set-bound`.

### `chains-antichains-sperner-and-dilworth-examples` B page

All 8 examples were read:

`ex-boolean-lattice-on-four-elements`,
`ex-width-three-poset-and-a-minimum-chain-cover`,
`ex-divisor-lattice-of-sixty`,
`ex-a-four-petal-sunflower-with-nonempty-core`,
`ex-an-erdos-ko-rado-star`,
`cex-a-maximal-antichain-that-is-not-maximum`,
`cex-erdos-ko-rado-fails-below-two-k`,
`cex-the-diamond-and-pentagon-lattices-are-not-distributive`.

Both B page files have the required empty authored body. Each A page has exactly
two nonempty summary paragraphs, each under 150 words. The summaries accurately
describe their prerequisites and proof progression and contain no counts,
self-ranking, unsupported position claims, or corpus surveys.

## Dependency audit

There are 113 distinct direct dependency targets across the 67 items: 39 are
inside this batch and 74 are published backward dependencies. Every in-batch
target was read as part of the inventory above. For every published target I
opened its file and checked the exact Definition or Statement, hypotheses,
conclusion, direction, and any proof passage needed to verify the citation.
Those 74 published targets are:

- Real convergence, algebra, and indexing:
  `def-function-space`, `def-real-limit`,
  `cor-archimedean-reciprocal`, `thm-cauchy-criterion-via-lub`,
  `lem-of-triangle-inequality`, `def-series`, `lem-of-abs-value`,
  `def-bounded-set`, `def-canonical-natural`,
  `lem-of-naturals-positive`, `thm-nat-linear-order`,
  `def-integer-power`, `lem-geometric-sequence-null`,
  `lem-bernoulli-inequality`, `lem-of-inverse-positive`, and
  `lem-of-square-positive`.

- Metric material:
  `def-metric-continuity`, `lem-real-line-is-a-metric-space`,
  `def-metric-uniform-continuity`, `def-metric-compactness`,
  `lem-sup-metric-is-a-metric`, `thm-extreme-value-metric`,
  `def-complete-metric-space`, `def-metric-convergence`, and
  `def-cauchy-in-metric`.

- Integration, differentiation, continuity, and series:
  `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`,
  `def-oriented-integral`, `thm-riemann-criterion`,
  `def-darboux-integral`, `def-darboux-sums`,
  `lem-finite-sum-laws`, `def-continuity-real`,
  `lem-real-and-metric-notions-agree`, `thm-ftc-first-part`,
  `thm-ftc-second-part`, `def-derivative`,
  `thm-continuous-implies-integrable`,
  `thm-additivity-over-subintervals`, `def-the-integral-function`,
  `thm-algebra-of-derivatives`, `thm-series-cauchy-criterion`,
  `thm-direct-comparison-test`, `def-finite-sum`,
  `lem-abel-summation-by-parts`,
  `thm-algebra-of-continuous-functions`,
  `thm-continuity-preimage-characterisation`, `thm-heine-borel-r`,
  `lem-finite-set-has-max`, `lem-finite-choice`,
  `thm-finitely-many-discontinuities-integrable`,
  `lem-changing-a-function-at-finitely-many-points`,
  `lem-integral-elementary-bounds`,
  `thm-heine-borel-characterisation-r`, `def-max-min`, and
  `lem-derivative-of-a-power`.

- Finite order and counting:
  `def-partial-order`, `def-chain`, `def-finite-cardinality`,
  `thm-subset-of-a-finite-set`, `thm-well-ordering-principle`,
  `def-binomial-coefficient`, `cor-cardinality-of-the-power-set`,
  `thm-induction-principle`,
  `def-a-monotone-sublist-of-a-finite-list-of-reals`,
  `thm-the-strong-pigeonhole-principle`,
  `def-factorial-and-falling-factorial`,
  `thm-number-of-bijections-of-a-finite-set`, `thm-product-rule`,
  `thm-binomial-closed-formula`, `def-sum-over-a-finite-index-set`,
  `thm-sum-rule`, `def-injection-surjection-bijection`, and
  `thm-fundamental-theorem-of-arithmetic`.

No load-bearing dependency is unresolved, homed on a B page, carried by an
unproved/deferred item, or forward. The four later links in
`rem-uniform-convergence-agrees-with-the-later-uniform-topology` occur only in
the remark and remain declared as orientation-only `forward_refs`.

## Repairs

1. `items/def-pointwise-uniform-and-uniformly-cauchy-convergence.md`
   had asserted without a dependency that positive rational and positive real
   error quantifiers are equivalent. I added
   `cor-archimedean-reciprocal` and supplied the reciprocal-natural argument in
   the Definition.

2. `items/thm-uniform-cauchy-criterion-real-functions.md` used the real-error
   form of pointwise convergence after invoking a completeness theorem whose
   real-limit convention is rational-error based. I added an explicit Fact for
   the equivalence, cited it at the limit-passage step, and made the choice of an
   index beyond both thresholds explicit. The final proof is in canonical phase
   form.

3. `items/thm-uniform-derivative-limit-on-a-closed-interval.md` moved silently
   between real-native continuity and metric continuity. I linked
   `def-continuity-real` in the Statement, added
   `def-continuity-real` and `lem-real-and-metric-notions-agree` to `deps`,
   recorded the dictionary as Fact L7, and rewrote step 1.1 to perform both
   conversions before applying the uniform-limit and Riemann-integrability
   theorems.

4. `items/rem-uniform-convergence-agrees-with-the-later-uniform-topology.md`
   ended with a survey claim about what other Statements and proofs on the page
   use. I replaced it with the local and durable sentence that the links are
   included only for orientation.

5. `items/def-join-irreducible-element.md` claimed a least element for an
   arbitrary finite lattice, although the cited existence lemma assumes the
   lattice is nonempty. I restored the nonempty hypothesis in the title and
   Definition.

6. `items/def-sunflower.md` left the type of the petal count implicit. I changed
   the opening hypothesis to `r` in `mathbb N` with `r >= 2`.

7. `items/lem-dilworth-induction-step.md` proved but did not expose the
   subposet facts needed by its consumer. I strengthened the Statement to say
   that the two induced subposets are nonempty proper subposets, have width
   `w`, and have cardinality strictly below `|P|`. Step 2.1 now uses
   `thm-subset-of-a-finite-set` for the strict cardinality conclusion. I also
   expanded the chain-splicing step: an element of the lower chain cannot lie
   strictly above its indexed antichain element, and dually for the upper
   chain.

8. `items/thm-dilworth-finite-posets.md` cited ordinary induction while assuming
   a strong induction hypothesis. I rewrote the proof using the cumulative
   predicate `Q(n)`: every nonempty poset of cardinality at most `n` has a
   width-sized chain cover. The two smaller subposets are now licensed directly
   by the strengthened induction-step lemma.

9. `items/lem-finite-lattice-join-irreducible-decomposition.md` constructed a
   subfamily of join-irreducibles with join `x` but concluded that `x` is the
   join of all join-irreducibles below it. I added the missing finite-join
   sandwich: the full family is bounded above by `x` and contains the
   constructed subfamily whose join is `x`.

10. `items/cor-sperner-from-symmetric-chains.md` attributed the identification
    of Boolean rank levels only to the binomial-coefficient definition. I added
    `def-boolean-lattice-and-levels` to `deps` and to Fact F2.

## Special-focus findings that required no change

- All sequence examples use zero-based indexing correctly. Every shifted
  denominator or exponent uses `k+1`; the double-sequence witness is defined at
  `(0,0)`; and the function-series tail indices agree with the library's
  zero-indexed partial sums.

- The derivative-limit theorem retains the necessary base-point convergence,
  continuous-derivative, uniform derivative-convergence, and closed-interval
  hypotheses. Its use of both FTC directions and oriented integration is
  correct.

- Dini's theorem assumes a compact closed interval, continuous approximants, a
  continuous limit, pointwise convergence, and one fixed monotone direction.
  Its finite-cover proof is valid. The four companion counterexamples
  separately remove compactness, approximant continuity, limit continuity, and
  monotonicity.

- The LYM normalization and local-LYM equality statement are correct. Sperner's
  equality cases, including the odd-rank exchange argument, are correctly
  handled.

- Erdős-Ko-Rado has the exact range `1 <= k` and `n >= 2k`. The cyclic-order
  counts and the boundary remark are correct, and no uniqueness assertion is
  made when `n = 2k`.

- The sunflower induction uses the strict threshold
  `k!(r-1)^k`, and its `k=0` base case is valid under the distinct-family
  convention.

- The finite Birkhoff theorem itself already assumes a nonempty finite
  distributive lattice. Its order-ideal maps, empty-join convention, and inverse
  calculations are correct after the join-irreducible convention repair.

## Step 10 fatal-error ledger

| Defect type | Affected id and location | Publish-blocking defect | Disposition |
|---|---|---|---|
| Semantic citation and unlicensed inference | `def-pointwise-uniform-and-uniformly-cauchy-convergence` Definition/dependencies; `thm-uniform-cauchy-criterion-real-functions` Facts/proof | The proof passed from rational-error real convergence to a real `epsilon/2` estimate without an established density/Archimedean bridge. | Corrected dependencies and repaired the Definition and proof using `cor-archimedean-reciprocal`. |
| Semantic dictionary mismatch | `thm-uniform-derivative-limit-on-a-closed-interval` Statement, Facts/dependencies, proof step 1.1 | The proof fed real-native continuity into a metric-continuity theorem and then fed the metric conclusion into a real-native integrability theorem without citing the equivalence. | Corrected dependencies and hypotheses and repaired the proof using `lem-real-and-metric-notions-agree`. |
| Invalid induction inference | `thm-dilworth-finite-posets` proof steps 1.1 to 1.2 | The proof announced induction for posets of exact cardinality `n` but assumed the theorem for all cardinalities at most `n`, while citing only ordinary induction. | Replaced the induction predicate by the cumulative assertion `Q(n)` and repaired the induction step. |
| Missing consumer-visible hypotheses/conclusions | `lem-dilworth-induction-step` Statement/proof and `thm-dilworth-finite-posets` proof step 2.1 | The theorem needed nonempty proper subposets of strictly smaller cardinality, but the cited lemma Statement exposed only conditional cover splicing and the decomposition lemma did not supply the missing claims. | Restated the lemma with the needed subposet conclusions, proved strict cardinality, and corrected the theorem's citation use. |
| False/overstrong definition | `def-join-irreducible-element` title/Definition | The Definition assigned a least element to every finite lattice even though the cited result establishes one only for a nonempty finite lattice. | Restated the title and Definition with the nonempty hypothesis. |

The expansion of the lower/upper-chain comparison in the Dilworth splicing
lemma, the full-family join argument, the sunflower type annotation, the direct
Boolean-level dependency, and the orientation-only wording were useful rigor or
maintenance repairs but were not separately fatal under the audit brief's
30-second-gap rule.

## Gates

- `tools/reflow.mts`: run on all six changed proof-bearing files; all were
  already single-line canonical physical paragraphs.
- `tools/precheck.mts`: final run passed all six changed proof-bearing files
  with 0 failures. Two first-pass canonical phase repairs were adopted before
  the clean run.
- `tools/prosecheck.mjs --warnings`: 14 changed or page files checked,
  0 errors and 0 warnings.
- `tools/citecheck.mjs`: 10 changed items checked, clean.
- `tools/rendercheck.mjs`: 10 changed items plus the four pages checked; all
  math parsed under the real KaTeX and no delimiter or wikilink-in-math defect
  was found.
- `tools/depcheck.mjs`, `tools/fwdcheck.mjs`, `tools/extcheck.mjs`, and
  `tools/validate-plan.mjs research/plan-spec.json`: all exited 0 with no hard
  errors. Their repository-wide warning streams did not name any assigned
  item.
- `tools/depsource.mjs` for each of the four pages: 0 unresolved dependencies
  on every run.

## Unresolved and write-boundary findings

There is no unresolved mathematical defect in the assigned batch and no
published dependency defect to report outside the write boundary. The global
gates emitted their usual nonblocking warnings on unrelated files and planned
prerequisite redundancy; none involves the assigned items or repairs above.
