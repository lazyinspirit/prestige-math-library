# Frontier 6 independent reader report — Batch 2

Date: 2026-08-01

Role: independent Step-6 reader for the frozen Frontier-6 Batch-2 artifact.
This pass audited exactly the 91 planned items and six page files in the
Darboux/L'Hôpital/Taylor, exponential, and multidimensional Riemann/Jordan
pairs. It did not read or alter Batch 1 for audit purposes, alter
`items/thm-reals-ordered-field.md`, alter any `research/frontier-3-*` file,
change `research/plan-spec.json` or another plan/prose scaffold, publish,
commit, push, or run a judge.

## Certification and method

I read all six page files and all 91 item files end to end. For every
proof-bearing item I personally traced every numbered proof, refutation,
counterexample, or verification step, including its hypotheses, endpoint and
zero-index cases, and each cited dependency's use. I also inspected every
Statement/Definition/Example/Remark and all page-summary prose. There are no
coverage exceptions.

I read the primary Definition or Statement of all 113 distinct external
dependencies in the frozen plan. Repairs introduced six further exact targets:
`thm-linearity-of-the-integral`, `thm-ftc-first-part`,
`thm-uniform-limit-continuous-real-functions`,
`thm-continuous-implies-integrable`, `thm-infimum-property`, and
`def-metric-bounded-diameter`. I read those targets too. The repaired live graph
has 118 distinct external dependencies: the 113 planned targets, less the
inapplicable sequence-only `def-divergence-to-infinity`, plus those six. Every
live external target exists and is published.

Material edits were stopped for both orchestrator freezes. The first shared
pre-repair hash was frozen before judge scheduling; after the orchestrator
identified the first sweep's per-model coverage cap, edits were frozen again
until the full uncapped 188-item prompt set had been assembled. No edit was made
during either freeze. This reader ran no judge, so all judge contexts preserve
the pre-repair defects.

## Exact audited manifest

The plan contains 20 + 8 + 19 + 6 + 30 + 8 = 91 unique ids, all present on
disk. The six live pages contain exactly the same membership with no missing or
duplicate item. In the Darboux A page, the false statement is correctly placed
in the page's `examples` field, as required by `SCHEMA.md`; that section split
does not change membership.

### `darboux-lhopital-and-taylor` — 20

1. `def-higher-derivatives-and-smoothness`
2. `thm-general-leibniz-rule`
3. `lem-higher-order-rolle`
4. `thm-darboux-theorem-for-derivatives`
5. `cor-derivatives-have-no-removable-or-jump-discontinuities`
6. `lem-injective-darboux-function-is-strictly-monotone`
7. `cor-injective-or-monotone-derivative-is-continuous`
8. `lem-cauchy-mean-value-quotient-form`
9. `thm-lhopital-zero-over-zero`
10. `thm-lhopital-infinity-over-infinity`
11. `def-taylor-polynomial-and-remainder`
12. `lem-taylor-polynomial-derivatives`
13. `thm-taylor-schlomilch-roche-remainder`
14. `cor-taylor-lagrange-and-cauchy-remainders`
15. `thm-taylor-peano-remainder`
16. `cor-taylor-remainder-bound`
17. `thm-second-derivative-test`
18. `thm-first-nonzero-derivative-test`
19. `fs-zero-second-derivative-decides-extremum`
20. `rem-darboux-lhopital-taylor-scope`

### `darboux-lhopital-and-taylor-examples` — 8

1. `ex-piecewise-polynomial-periodic-oscillator`
2. `ex-differentiable-function-with-discontinuous-derivative`
3. `ex-xk-abs-x-smoothness-threshold`
4. `ex-positive-derivative-at-zero-with-no-local-monotonicity`
5. `ex-lhopital-rational-removable-quotient`
6. `cex-lhopital-converse`
7. `ex-geometric-function-taylor-remainder`
8. `ex-zero-second-derivative-extremum-trichotomy`

### `the-exponential-function` — 19

1. `def-real-exponential-function-and-e`
2. `lem-exponential-series-has-infinite-radius`
3. `thm-exponential-addition-formula`
4. `cor-exponential-reciprocal-and-positivity`
5. `thm-derivative-of-exponential`
6. `thm-exponential-is-strictly-increasing`
7. `thm-exponential-limits-and-range`
8. `cor-exponential-is-a-bijection-onto-positive-reals`
9. `thm-exponential-beats-every-polynomial`
10. `thm-exponential-ivp-uniqueness`
11. `thm-normalized-exponential-functional-equation`
12. `lem-scaled-binomial-coefficients-converge`
13. `thm-exponential-product-limit`
14. `thm-picard-iterates-for-exponential`
15. `thm-exponential-definition-equivalence`
16. `lem-exponential-factorial-tail-bound`
17. `cor-two-less-than-e-less-than-three`
18. `thm-e-is-irrational`
19. `rem-exponential-roadmap-and-circularity`

### `the-exponential-function-examples` — 6

1. `ex-exponential-product-limit-at-negative-input`
2. `cex-exponential-product-limit-not-uniform-on-r`
3. `ex-flat-exponential-function`
4. `ex-smooth-compactly-supported-bump`
5. `cex-discontinuous-multiplicative-cauchy-solution`
6. `cex-exponential-not-uniformly-continuous-on-r`

### `the-riemann-integral-in-rn-and-jordan-content` — 30

1. `def-multidimensional-rectangle-and-volume`
2. `def-multidimensional-grid-partition`
3. `def-multidimensional-darboux-sums`
4. `lem-multidimensional-refinement-inequalities`
5. `def-multidimensional-darboux-integral`
6. `thm-multidimensional-riemann-criterion`
7. `def-multidimensional-tagged-partition-and-riemann-sum`
8. `thm-multidimensional-darboux-equals-riemann`
9. `cor-one-dimensional-and-multidimensional-riemann-agree`
10. `thm-multidimensional-integral-properties`
11. `thm-continuous-on-a-rectangle-is-riemann-integrable`
12. `def-null-and-content-zero-in-rn`
13. `cor-one-dimensional-null-and-content-zero-agree`
14. `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
15. `lem-compact-null-iff-content-zero-in-rn`
16. `def-oscillation-in-rn`
17. `lem-oscillation-characterisation-in-rn`
18. `lem-finite-cube-covers-admit-grid-control`
19. `thm-lebesgue-criterion-in-rn`
20. `def-jordan-inner-and-outer-content`
21. `thm-jordan-content-and-indicator-integrability`
22. `thm-jordan-boundary-criterion`
23. `def-riemann-integral-over-a-jordan-set`
24. `lem-jordan-set-integral-well-defined`
25. `thm-continuous-functions-on-compact-jordan-sets-are-integrable`
26. `cor-jordan-content-finite-additivity`
27. `thm-lipschitz-images-of-null-sets-in-rn-are-null`
28. `thm-graphs-of-continuous-functions-have-content-zero`
29. `lem-product-lower-bound-for-jordan-content`
30. `rem-multidimensional-riemann-conventions-and-scope`

### `the-riemann-integral-in-rn-and-jordan-content-examples` — 8

1. `ex-unit-box-volume-and-integral`
2. `cex-rational-points-in-unit-square-have-no-jordan-content`
3. `cex-compact-set-without-jordan-content`
4. `cex-bounded-open-set-with-nonnull-boundary`
5. `ex-parabola-graph-has-content-zero`
6. `ex-triangle-has-jordan-content-one-half`
7. `ex-cantor-slab-has-content-zero`
8. `rem-jordan-rectifiable-terminology`

## Fatal/load-bearing defect ledger — all repaired

The following 26 rows were load-bearing truth, proof, boundary, or dependency
defects. Every listed disposition is implemented on disk.

| Location | Pre-repair defect | Disposition |
|---|---|---|
| `cor-injective-or-monotone-derivative-is-continuous` | [L3] overstated a theorem whose actual Statement is the nondecreasing case; decreasing/nonincreasing branches were not licensed. | Restated the target exactly and applied it to `-f'` in the decreasing branches. |
| `thm-taylor-peano-remainder` | Differentiability only “at” the centre did not support the interval Cauchy-MVT proof; the `n=0` claim was false without continuity, and the induction used continuity of `f'` at order zero when `n=1`. | Required neighbourhood differentiability for `n>=1`, stated the `n=0` continuity analogue separately, proved `n=1` directly from the derivative definition, and began the Cauchy-MVT induction at `n=2`. |
| `cor-taylor-remainder-bound` | The statement omitted the regularity needed by the Lagrange remainder, and at `x=a` the proof asserted a strictly intermediate point that cannot exist. | Added the Taylor regularity hypotheses, handled `x=a` directly, and applied Lagrange only when `x!=a`. |
| `thm-first-nonzero-derivative-test` | Its pointwise differentiability hypothesis did not license the corrected Peano theorem. | Required `n`-fold differentiability on a neighbourhood of the stationary point. |
| `ex-positive-derivative-at-zero-with-no-local-monotonicity` | The oscillator hypothesis only guaranteed derivative values below `-2`, while the verification claimed reciprocal sequences producing both derivative signs. | Required oscillator derivative values above `2` and below `-2`, and stated both reciprocal sequences. |
| `ex-lhopital-rational-removable-quotient` | The title and Example asserted `(x^3-x)/(x^2-1)` at `1`, but the body proved an unrelated generic `(x^2-a^2)/(x-a)` computation. | Rewrote the verification for the planned quotient, checking the derivative denominator, derivative quotient, L'Hôpital hypotheses, and direct factorization to `x`. |
| `thm-exponential-addition-formula` | The proof cited the Cauchy-product theorem without supplying the power-series variable required by its Statement. | Introduced the two auxiliary series in `z`, applied the theorem at `z=1`, and then used the factorial/binomial coefficient identity. |
| `thm-exponential-limits-and-range` | It cited the sequence-only divergence definition for a function limit and used monotonicity in the negative-infinity argument without licensing it. | Removed the inapplicable dependency and proved both limits directly from `exp(t)>=1+t` and the reciprocal identity. |
| `thm-exponential-beats-every-polynomial` | The title claimed domination of arbitrary fixed polynomials, while the Statement and proof established only nonnegative integer powers. | Narrowed the title to the proved power statement. |
| `thm-picard-iterates-for-exponential` | The power-antiderivative citation was incomplete, and the authored theorem stopped at partial-sum convergence, omitting the plan-bound limiting integral equation and leaving uniform-limit integration unused. | Added the exact power, factorial, finite-sum linearity, compact-uniform, continuity, integrability, uniform-integration, and first-FTC dependencies; proved the exact partial sums, passed the recursion through the uniform limit, and recovered the normalized IVP. |
| `lem-exponential-factorial-tail-bound` | The title asserted an `e`-specific estimate not present in the Statement or proof. | Retitled it as the geometric bound actually proved for exponential-series tails. |
| `ex-flat-exponential-function` | Repeated product and chain differentiation was load-bearing but uncited. | Added and cited the derivative-algebra and chain-rule targets. |
| `cex-discontinuous-multiplicative-cauchy-solution` | Positivity of `exp(A(x))` was used but not licensed by the dependency set. | Added the exact positivity/reciprocal corollary and made positivity, injectivity, and multiplicativity explicit in [L3]. |
| `cex-exponential-not-uniformly-continuous-on-r` | The mean-value lower bound used monotonicity of `exp` without depending on its theorem. | Added and cited strict monotonicity. |
| `def-multidimensional-darboux-sums` | Finite real infima and suprema were asserted from completeness definitions without the library's existence theorem. | Added and cited `thm-infimum-property`. |
| `def-multidimensional-darboux-integral` | The extrema of the sets of Darboux sums had the same missing existence license. | Added and cited `thm-infimum-property`. |
| `def-jordan-inner-and-outer-content` | It used `def-bounded-set`, which defines bounded subsets of the ordered real line, for a subset of `R^m`; content extrema also lacked the infimum theorem. | Replaced it with metric boundedness and added the infimum theorem. |
| `def-riemann-integral-over-a-jordan-set` | It did not distinguish metric boundedness of `E subset R^m` from real boundedness of `f`. | Added the metric-boundedness definition while retaining real boundedness for the function. |
| `thm-jordan-content-and-indicator-integrability` | Its bounded-set dependency was the one-dimensional ordered-real definition. | Replaced it with metric boundedness and made that convention explicit in Given. |
| `thm-multidimensional-integral-properties` | The proof identified integral values from tagged sums without depending on the Darboux/tagged equivalence theorem. | Added and cited `thm-multidimensional-darboux-equals-riemann`. |
| `thm-continuous-on-a-rectangle-is-riemann-integrable` | The Statement did not exclude rectangles for which the grid/mesh setup is degenerate, and the last step cited the Riemann criterion merely as Given. | Restricted the Statement/title to closed nondegenerate rectangles and added an exact [L4] criterion citation. |
| `lem-compact-null-iff-content-zero-in-rn` | A countable cover by closed cubes was treated as an open cover when invoking compactness. | Enlarged each closed cube to a closed cube whose interior contains it, controlled the volume increase by a geometric budget, and selected finitely many interiors. |
| `thm-lebesgue-criterion-in-rn` | The null-discontinuity direction lacked the compact finite subcover and norm comparison needed to obtain one mesh away from the bad cover; the converse did not rigorously convert high-oscillation grid cells and grid hyperplanes into a small cube cover. | Rebuilt both directions: compact oscillation superlevels, finite cube/grid control, compactness on the complement, Euclidean/sup-norm mesh comparison, Darboux-gap estimate, high-cell volume estimate, thin hyperplane covers, rectangle-to-cube subdivision, and countable-union closure with the stated choice cost. |
| `thm-continuous-functions-on-compact-jordan-sets-are-integrable` | “Continuous image compact, therefore bounded” cited no theorem making a compact real image bounded, and ignored the empty domain. | Used the metric extreme-value theorem, split off the empty case, and retained the boundary-null zero-extension proof. |
| `ex-triangle-has-jordan-content-one-half` | It falsely claimed the closed-grid upper/lower gap was at most `1/N`. | Counted the lower cells as `N(N-1)/2` and upper cells as `(N^2+3N-2)/2`, obtaining lower area `(N-1)/(2N)`, upper area `1/2+3/(2N)-1/N^2`, and gap `2/N-1/N^2<2/N`. |
| `ex-cantor-slab-has-content-zero` | The last step invoked an unspecified “indicator or boundary criterion” that its cited dependencies did not supply. | Derived Jordan outer content zero directly from the finite cube covers and squeezed nonnegative inner content below outer content. |

## Nonfatal scope and presentation repairs

| Location | Defect and disposition |
|---|---|
| `library/real-analysis/the-exponential-function.md` | Corrected the malformed literal `(e)` and rewrote the second summary paragraph as mathematics-only progression. The A summary now has two paragraphs of 37 and 62 words. |
| `rem-darboux-lhopital-taylor-scope` | Added the one-sided endpoint convention, exact factorial/binomial/canonical-embedding citations, the limited Darboux continuity converse, Peano's neighbourhood/top-derivative scope, and the integral-remainder/Borel/Dini exclusions. |
| `rem-multidimensional-riemann-conventions-and-scope` | Added missing dependencies for cube-cover nullity and rectangle-cover Jordan content, and made the boundary criterion and zero-extension convention explicit. |

The other A summaries have two paragraphs of 42/55 and 41/58 words. All three
B pages have no authored body. Thus all six pages meet the summary-shape
contract; scoped prosecheck found no count, denial, or positional warning.

## Exact Schlömilch-Roche adjudication

`thm-taylor-schlomilch-roche-remainder` was not silently synchronized or
reverted.

The frozen plan specifies a higher-order Rolle auxiliary-function proof and
lists `lem-higher-order-rolle` and `thm-general-leibniz-rule`. The authored item
instead defines

`Phi(t) = f(x) - sum_{j=0}^n f^(j)(t)(x-t)^j/j!`

and `Psi(t)=(x-t)^p`, differentiates the finite sum by telescoping, and applies
the Cauchy mean-value quotient theorem once. Its actual removed planned edges
are `lem-higher-order-rolle` and `thm-general-leibniz-rule`; its actual added
edges are `lem-cauchy-mean-value-quotient-form`,
`thm-algebra-of-derivatives`, `lem-derivative-of-a-power`, and
`lem-finite-sum-laws`.

I checked the differentiation, endpoint values, nonvanishing of `Psi'`, quotient
identity, factorial coefficient, all natural `1<=p<=n+1`, and reflection to
`x<a`. The direct authored proof is sound, shorter, and its authored dependency
set is exactly load-bearing. The plan's instruction to “handle `x=a`
separately” cannot coexist with its demand for a point strictly between `a` and
`x`; the authored Statement correctly treats `a<x` and `x<a` and leaves the
zero-distance identity to downstream cases such as the remainder bound.

Disposition: preserve the authored direct strategy and authored dependency set;
do not restore the unused Rolle/Leibniz edges. The frozen plan remains unchanged,
and this discrepancy is explicitly recorded for the orchestrator.

## Other authored dependency deltas

These are intentional Step-6 dependency repairs, not silent plan edits. A minus
entry is a planned dependency removed from the authored file; a plus entry is an
exact target added to license the authored statement/proof.

| Item | Delta apart from the separately adjudicated Schlömilch item |
|---|---|
| `rem-darboux-lhopital-taylor-scope` | + `def-factorial-and-falling-factorial`, `def-binomial-coefficient`, `def-canonical-natural` |
| `thm-exponential-limits-and-range` | - `def-divergence-to-infinity` |
| `thm-picard-iterates-for-exponential` | + `thm-linearity-of-the-integral`, `thm-ftc-first-part`, `lem-derivative-of-a-power`, `thm-uniform-limit-continuous-real-functions`, `thm-continuous-implies-integrable`, `thm-algebra-of-continuous-functions`, `lem-exponential-series-has-infinite-radius` |
| `cex-discontinuous-multiplicative-cauchy-solution` | + `cor-exponential-reciprocal-and-positivity` |
| `cex-exponential-not-uniformly-continuous-on-r` | + `thm-exponential-is-strictly-increasing` |
| `def-multidimensional-darboux-sums` | + `thm-infimum-property` |
| `def-multidimensional-darboux-integral` | + `thm-infimum-property` |
| `thm-multidimensional-integral-properties` | + `thm-multidimensional-darboux-equals-riemann` |
| `thm-lebesgue-criterion-in-rn` | + `def-metric-compactness`, `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` |
| `def-jordan-inner-and-outer-content` | - `def-bounded-set`; + `def-metric-bounded-diameter`, `thm-infimum-property` |
| `thm-jordan-content-and-indicator-integrability` | - `def-bounded-set`; + `def-metric-bounded-diameter` |
| `def-riemann-integral-over-a-jordan-set` | + `def-metric-bounded-diameter` |
| `thm-continuous-functions-on-compact-jordan-sets-are-integrable` | - `thm-continuous-image-of-a-compact-space-is-compact`; + `thm-extreme-value-metric` |
| `rem-multidimensional-riemann-conventions-and-scope` | + `def-null-and-content-zero-in-rn`, `def-jordan-inner-and-outer-content` |
| `ex-cantor-slab-has-content-zero` | - `thm-jordan-content-and-indicator-integrability` |

No item or page was added to or removed from the frozen manifest, and the plan
file was not changed.

## Gates

- Reflow: ran on all 22 changed proof-bearing items. It mechanically reflowed
  `thm-taylor-peano-remainder` and `cor-taylor-remainder-bound`; every other file
  was already one-step-per-line. Exit 0.
- Scoped precheck over all 91 item paths: 75 proof-bearing items checked, 75
  pass, 0 failing. Definitions and remarks were correctly skipped.
- `node tools/depcheck.mjs`: exit 0 over 2,272 items and 128 pages; 0 hard
  errors. It reports 134 repository-wide warnings, none attached to any of the
  91 assigned ids.
- `node tools/fwdcheck.mjs --quiet`: exit 0; every forward reference is declared,
  strictly forward, and cycle-free.
- `node tools/extcheck.mjs --quiet`: exit 0; recorded-not-proved items and their
  consequences are consistently marked. Its published-consequence warnings are
  outside this draft batch.
- Scoped `citecheck` over the 97 assigned item/page paths: exit 0; 91 item files
  scanned and every recognized elementary move has a stating dependency.
- Scoped `rendercheck` over the same 97 paths: exit 0; no wikilink-in-math,
  delimiter, multiline-display, or KaTeX error.
- Scoped `prosecheck --warnings` over the same 97 paths: exit 0; 0 errors and 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo
  /root/Projects/prestige-math-library`: exit 0; no plan cycle, forward item
  dependency, B-page dependency, or unresolved id. Existing redundant-page-
  prerequisite warnings elsewhere remain nonblocking.
- `depsource` run separately for all six assigned page ids: every run exited 0
  with 0 unresolved dependencies. The published/neither counts were respectively
  77/29, 30/12, 73/36, 18/15, 135/97, and 27/31; all earlier-planned counts were
  0. Here “neither” is the tool's expected category for authored draft items in
  the in-flight pair, not an unresolved target.
- `audit-manifest` on `research/frontier-6-batch-2.pages.json`: exit 0; six pages,
  598 live dependency edges, classified only as 375 published-backward and 223
  same-batch. There are no cross-batch, forward, unresolved, or missing-source
  edges.
- Judge-block scan over all 91 items: no `verification.judge` block is present.
  No stale judge record needed removal.
- Judges: deliberately not run by this reader.

## Touched paths

The reader changed 28 item files, one page file, and this report:

- `items/cor-injective-or-monotone-derivative-is-continuous.md`
- `items/thm-taylor-peano-remainder.md`
- `items/cor-taylor-remainder-bound.md`
- `items/thm-first-nonzero-derivative-test.md`
- `items/ex-positive-derivative-at-zero-with-no-local-monotonicity.md`
- `items/ex-lhopital-rational-removable-quotient.md`
- `items/rem-darboux-lhopital-taylor-scope.md`
- `library/real-analysis/the-exponential-function.md`
- `items/thm-exponential-addition-formula.md`
- `items/thm-exponential-limits-and-range.md`
- `items/thm-exponential-beats-every-polynomial.md`
- `items/thm-picard-iterates-for-exponential.md`
- `items/lem-exponential-factorial-tail-bound.md`
- `items/ex-flat-exponential-function.md`
- `items/cex-discontinuous-multiplicative-cauchy-solution.md`
- `items/cex-exponential-not-uniformly-continuous-on-r.md`
- `items/def-multidimensional-darboux-sums.md`
- `items/def-multidimensional-darboux-integral.md`
- `items/def-jordan-inner-and-outer-content.md`
- `items/def-riemann-integral-over-a-jordan-set.md`
- `items/thm-jordan-content-and-indicator-integrability.md`
- `items/thm-multidimensional-integral-properties.md`
- `items/thm-continuous-on-a-rectangle-is-riemann-integrable.md`
- `items/lem-compact-null-iff-content-zero-in-rn.md`
- `items/thm-lebesgue-criterion-in-rn.md`
- `items/thm-continuous-functions-on-compact-jordan-sets-are-integrable.md`
- `items/rem-multidimensional-riemann-conventions-and-scope.md`
- `items/ex-triangle-has-jordan-content-one-half.md`
- `items/ex-cantor-slab-has-content-zero.md`
- `research/frontier-6-reader-batch2.md`

## Final disposition

All 91 frozen items and all six pages have been independently read with no
exception. All safe Batch-2 defects found by this reader are repaired. No
mathematical or dependency defect remains unresolved in the assigned scope.
The sole specially requested plan/authored strategy discrepancy is adjudicated
in favour of the sound authored direct Schlömilch-Roche proof and is recorded
above without changing the frozen plan.
