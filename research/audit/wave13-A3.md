# Wave 13 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; A4 authorized with mandatory amendments.** I recovered
the durable audit record and independently read the four-page, 76-item scope;
all four current page files; all 76 full current items; all 76 provenance rows;
all 62 proof contracts; the complete A1/A2 findings; every cited dependency
needed to decide the proposed repairs; and the literature behind every
`exact-source` determination. This receipt is the only file written at A3. No
item, page, provenance ledger, proof-contract artifact, manifest, touch ledger,
or shared audit artifact was edited.

The live baseline is
`442f831c94882899c1dc5559b36599b0f78a99c8`, matching Wave 13 A0. The shared
tree contains concurrent Wave 11, 12, and 14 audit work and was preserved. All
76 normalized scoped-item hashes still equal the A0 `baseline` touch snapshot.
The adjudicated artifacts are bound by these SHA-256 values:

- pages: `00e7812284e362e76ff3099ba6f20ae8d9498edcad5b297a184edfb724d2b188`
- provenance: `557097e68e96b971b13c5270d2d2cb3cbb42695a8130afe8de0d37a84753532b`
- proof contracts: `5089f8aeb27469bf70e6725ecdac51d789df0755a0e8c31d2893b13f435e5363`
- findings: `9e51e43786d8d3b4013c660916553bb04598114edc7d79d53dfb13cca3645fab`
- Wave 13 manifest: `e14398564b81e878fd5494bcd2bf5139358c33b3389d18357c90741334bd911f`
- combined Waves 11–14 manifest:
  `2342c536a222b6d0532784c44d8ee229201393bd2e8bd1c16f3a59c729f0200f`

Scope integrity is exact: four pages in two A/B pairs, 76 unique items, 62
proof-bearing items, 76 unique provenance rows, and 487 relationships (288
published-backward and 199 same-batch). The contracts contain all 283 direct
Fact/source mappings, all 212 numbered steps, and all 496 standard boundary
rows. The strict contract check reports 62/62 checked, zero warnings, and the
two expected `citation-uses` errors on the unused `[L2]` mappings of
`ex-geometric-power-series-and-an-interior-reexpansion`. The strict checker is
structural; independent semantic review found the additional boundary-
worksheet contradictions authorized below.

## Class (c): provenance decisions

**APPROVE all 76 rows exactly as recorded; RETURN none.** A4 may apply every
component classification and the row's verified references, preserving every
legacy `origin` value and deleting a legacy one-axis `authorship` field if one
appears at the frozen A4 baseline. None is present now. There is no
`established-knowledge` waiver, uncertainty escalation, or provisional Alpha
concurrence.

I independently checked all six `exact-source` determinations against the
source text:

- MIT Lecture 11 states Abel's theorem for a zero-indexed convergent series and
  the real limit from below; the Rice notes also state and prove that result.
- Encyclopedia of Mathematics explicitly gives
  `sum k!(z-a)^k` as a radius-zero power series.
- The Rice notes state that for `|z|=1`, `z != 1`, the series `sum z^j` has
  Abel sum `(1-z)^(-1)`; `z=-1` is exactly the Grandi specialization with Abel
  value `1/2`, while ordinary divergence follows from its non-null terms.
- Lebl Proposition 10.5.1 states exactly that a bounded subset of `R^n` is
  Jordan measurable iff its ambient boundary is null.
- Lebl Example 10.1.9 states that a constant function on a rectangle integrates
  to the constant times the rectangle's volume; the unit-box item is its direct
  specialization.
- Munkres Section 14 defines a bounded set as rectifiable when its indicator is
  integrable, gives the null-boundary equivalence, and explicitly explains the
  borrowing of “rectifiable” from curve-length terminology.

The row-by-row decisions are:

1. `def-real-power-series-and-radius-of-convergence` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
2. `thm-cauchy-hadamard-for-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
3. `cor-power-series-convergence-dichotomy` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
4. `thm-power-series-uniform-on-compact-subintervals` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
5. `cor-power-series-sums-are-continuous` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
6. `lem-derived-and-integrated-power-series-have-the-same-radius` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
7. `thm-termwise-differentiation-of-a-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
8. `cor-termwise-integration-of-a-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
9. `cor-power-series-sums-are-smooth-with-coefficient-formula` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
10. `lem-power-series-reexpansion-double-series` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
11. `thm-power-series-reexpansion-at-an-interior-point` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
12. `def-real-analytic-function` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
13. `thm-power-series-sums-are-real-analytic` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
14. `cor-real-analytic-functions-are-smooth` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
15. `lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
16. `thm-identity-theorem-for-real-analytic-functions-on-an-interval` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
17. `lem-cauchy-product-of-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
18. `lem-local-composition-of-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
19. `lem-local-reciprocal-of-a-real-power-series` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
20. `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
21. `def-abel-and-cesaro-summability-of-a-series` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
22. `thm-abel-limit-theorem` — **APPROVE:** `literature-derived` / `ai-altered` / `exact-source`.
23. `lem-abel-transform-of-cesaro-means` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
24. `thm-frobenius-cesaro-implies-abel-summability` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
25. `cor-convergent-series-are-cesaro-and-abel-summable` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
26. `lem-tauber-block-estimate` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
27. `thm-tauber-converse-for-abel-summability` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
28. `fs-power-series-uniform-on-its-open-interval` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
29. `fs-power-series-convergence-at-one-point-forces-global-convergence` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
30. `fs-abel-summability-implies-ordinary-convergence` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
31. `ex-geometric-power-series-and-an-interior-reexpansion` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
32. `ex-three-radius-one-series-with-different-endpoint-behaviour` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
33. `cex-factorial-power-series-has-radius-zero` — **APPROVE:** `literature-derived` / `ai-generated` / `exact-source`.
34. `cex-geometric-power-series-not-uniform-on-its-open-interval` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
35. `ex-a-rational-function-is-real-analytic-via-a-geometric-series` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
36. `ex-abel-theorem-on-the-alternating-harmonic-series` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
37. `cex-grandi-series-abel-summable-but-divergent` — **APPROVE:** `literature-derived` / `ai-generated` / `exact-source`.
38. `cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
39. `def-multidimensional-rectangle-and-volume` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
40. `def-multidimensional-grid-partition` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
41. `def-multidimensional-darboux-sums` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
42. `lem-multidimensional-refinement-inequalities` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
43. `def-multidimensional-darboux-integral` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
44. `thm-multidimensional-riemann-criterion` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
45. `def-multidimensional-tagged-partition-and-riemann-sum` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
46. `thm-multidimensional-darboux-equals-riemann` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
47. `cor-one-dimensional-and-multidimensional-riemann-agree` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
48. `thm-multidimensional-integral-properties` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
49. `thm-continuous-on-a-rectangle-is-riemann-integrable` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
50. `def-null-and-content-zero-in-rn` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
51. `cor-one-dimensional-null-and-content-zero-agree` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
52. `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
53. `lem-compact-null-iff-content-zero-in-rn` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
54. `def-oscillation-in-rn` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
55. `lem-oscillation-characterisation-in-rn` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
56. `lem-finite-cube-covers-admit-grid-control` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
57. `thm-lebesgue-criterion-in-rn` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
58. `def-jordan-inner-and-outer-content` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
59. `thm-jordan-content-and-indicator-integrability` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
60. `thm-jordan-boundary-criterion` — **APPROVE:** `literature-derived` / `ai-altered` / `exact-source`.
61. `def-riemann-integral-over-a-jordan-set` — **APPROVE:** `ai-altered` / `not-applicable` / `semantic-source`.
62. `lem-jordan-set-integral-well-defined` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
63. `thm-continuous-functions-on-compact-jordan-sets-are-integrable` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
64. `cor-jordan-content-finite-additivity` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
65. `thm-lipschitz-images-of-null-sets-in-rn-are-null` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
66. `thm-graphs-of-continuous-functions-have-content-zero` — **APPROVE:** `ai-altered` / `ai-altered` / `semantic-source`.
67. `lem-product-lower-bound-for-jordan-content` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
68. `rem-multidimensional-riemann-conventions-and-scope` — **APPROVE:** `ai-generated` / `not-applicable` / `none`.
69. `ex-unit-box-volume-and-integral` — **APPROVE:** `literature-derived` / `ai-generated` / `exact-source`.
70. `cex-rational-points-in-unit-square-have-no-jordan-content` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
71. `cex-compact-set-without-jordan-content` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
72. `cex-bounded-open-set-with-nonnull-boundary` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
73. `ex-parabola-graph-has-content-zero` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
74. `ex-triangle-has-jordan-content-one-half` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
75. `ex-cantor-slab-has-content-zero` — **APPROVE:** `ai-altered` / `ai-generated` / `semantic-source`.
76. `rem-jordan-rectifiable-terminology` — **APPROVE:** `literature-derived` / `not-applicable` / `exact-source`.

The approved statement distribution remains 6 `literature-derived`, 69
`ai-altered`, and one `ai-generated`. The proof distribution remains 34
`ai-altered`, 28 `ai-generated`, and 14 `not-applicable`. The sole generated
statement, `rem-multidimensional-riemann-conventions-and-scope`, is positively
identifiable as a repository-specific scope ledger, every mathematical clause
is licensed by its named dependency, and its corpus-wide reverse dependency
cone is empty. The positive determination therefore satisfies the generated-
statement standard without creating a load-bearing seed.

## Class (a)/(b): repair decisions

All three proposed repairs are authorized, but each receives an explicit A3
amendment. **AMEND three; RETURN none.** Exactly three item ids are material A4
repair targets.

### 1. `thm-jordan-boundary-criterion` — AMEND and apply

The false intermediate Fact is confirmed. For `E=Q=[0,1]^m`, the relative
indicator `1_E:Q->R` is constant, so its relative discontinuity set is empty,
whereas the ambient boundary is nonempty. Lebl's proof avoids this error by
first choosing a rectangle whose interior contains `E` (and, in the library's
safer version, `closure(E)`). The theorem Statement is true and unchanged.

A4 is authorized to replace `[L1]` with exactly this proposition:

> [L1] If $Q$ is a nondegenerate rectangle with
> $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator
> $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary
> $\partial E$. At a boundary point every sufficiently small ambient ball lies
> in $Q$ and meets both $E$ and its ambient complement, while away from the
> boundary the indicator is locally constant
> ([[def-metric-interior-closure-boundary]]).

A4 is authorized to replace step 1.1 with:

> 1.1 By [L3], choose a closed bounding rectangle $Q_0$ for $E$ and enlarge
> every coordinate interval by a fixed positive margin to obtain a
> nondegenerate rectangle $Q$ with
> $\overline E\subseteq Q_0\subseteq\operatorname{int}Q$. By [L1] and [L2],
> $E$ is Jordan measurable exactly when $\partial E$ is null.
> `[L1, L2, L3, given, choose]`

No dependency addition is needed: `[L3]` already cites the bounding-rectangle
construction in `def-jordan-inner-and-outer-content`, the smallest-closed-
superset result in `thm-metric-closure-characterisation`, and the compact/null-
content route used by step 1.2. Steps 1.2 and 2.1 remain unchanged.

The regenerated contract must add step `1.1` to every `[L3]` mapping, update the
step-1.1 inputs, mark `nonempty-choice` checked at step 1.1, and correct both
`iff-forward` and `iff-reverse` from the false `not_applicable` disposition to
`checked`, anchored to steps 1.1 and 2.1. Remove stale `verification.judge` if
present and remove the obsolete `audited` stamp before final independent A6
certification.

### 2. `thm-lebesgue-criterion-in-rn` — AMEND and apply

The citation defect is confirmed. `def-oscillation-in-rn` and
`lem-oscillation-characterisation-in-rn` give `D={x:omega_f(x)>0}` and closed
positive superlevels, but neither supplies the reciprocal-integer witness. The
exact missing proposition is the Statement of `cor-archimedean-reciprocal`.

Do not fold the reciprocal theorem into `[L1]`: every contract mapping for one
Fact must list every step that cites that Fact, which would falsely make the
reciprocal source appear to support steps 1.2, 1.3, and 3.1. Instead A4 must:

1. add `cor-archimedean-reciprocal` to `deps`;
2. replace `[L1]` by:

   > [L1] Continuity at $x$ is equivalent to $\omega_f(x)=0$, and each set
   > $\{x:\omega_f(x)\ge\varepsilon\}$ is closed for $\varepsilon>0$
   > ([[def-oscillation-in-rn]], [[lem-oscillation-characterisation-in-rn]]).

3. add a separate Fact:

   > [L6] For every positive real $u$ there is a natural $r\ge1$ with
   > $1/r<u$ ([[cor-archimedean-reciprocal]]).

4. open step 6.1 with `By [L1] and [L6],
   $D=\bigcup_{r\ge1}S_{1/r}$`, retain the rest of that step unchanged, and use
   inputs `[step 5.1, step 3.2, L1, L6]`.

The contract must retain the existing `[L1]` uses, add the exact Statement
quote for `[L6]` with `uses: ["6.1"]`, and add `L6` to the step-6.1 derivation.
This isolates the proposition-to-source accounting exactly. Remove stale
`verification.judge` if present and remove the obsolete `audited` stamp before
final independent A6 certification.

### 3. `ex-geometric-power-series-and-an-interior-reexpansion` — AMEND and apply

The two unused `[L2]` mappings are confirmed contract defects, but Beta's
sentence “This is the interior re-expansion ... described in [L2]” is too broad
without qualification. Applied to the original radius-one series at centre
`c`, `thm-power-series-reexpansion-at-an-interior-point` guarantees the
re-expansion only when `|c|+|x-c|<1`. For negative `c` this is strictly smaller
than the displayed sharp interval `|x-c|<1-c`. The local reciprocal theorem
likewise promises only some neighbourhood. The direct geometric calculation,
not `[L2]`, proves the displayed full interval.

Preserve `[L2]` and both declared dependencies, and replace step 2.1 with:

> 2.1 The general results in [L2] show qualitatively that the sum re-expands
> about $c$ and that the nonzero denominator there has a local reciprocal
> series. To identify that series and its full convergence interval directly,
> use $1-x=(1-c)(1-(x-c)/(1-c))$ and $1-c>0$, and apply [L1] with
> $t=(x-c)/(1-c)$. This gives the second formula precisely when
> $|x-c|<1-c$. `[given, L1, L2, algebra]`

This makes both `[L2]` uses truthful without attributing the sharp interval to
weaker sources. Both `[L2]` contract entries must then record
`uses: ["2.1"]`, and the step-2.1 derivation must include `L2`. Remove stale
`verification.judge` if present and remove the obsolete `audited` stamp before
final independent A6 certification.

## Contract-only amendment omitted at A1/A2

`thm-jordan-content-and-indicator-integrability` has an iff Statement, but its
contract says both `iff-forward` and `iff-reverse` are `not_applicable` because
the Statement is supposedly not an equivalence. That reason contradicts the
Statement verbatim. A4 must change both rows to `checked`; steps 1.1–3.1
establish equality of the Jordan inner/outer contents exactly when the lower
and upper indicator integrals agree, so those steps anchor both directions.
This is a contract-only correction: it does not authorize any change to the
item, its page, its stamps, or the A7 target set.

Together with the same two corrected rows in the regenerated
`thm-jordan-boundary-criterion` contract, this amendment fixes four false
boundary dispositions across two contracts. No other contract content change
is authorized beyond regenerating exact quotes/uses/derivations made stale by
the three approved item repairs.

## Pages, impact, and later-stage scope

No page summary, page membership, item Statement, theorem conclusion, id,
kind, title, reading order, or deletion is authorized. A4 writes the 76 approved
provenance applications, the three material item repairs above, and the
namespaced contract/provenance/findings handoff required by the workflow.

The precomputed current consumer surface is:

- `thm-jordan-boundary-criterion`: 7 direct consumers;
- `thm-lebesgue-criterion-in-rn`: 4 direct consumers;
- `ex-geometric-power-series-and-an-interior-reexpansion`: 0 consumers;
- 9 distinct consumers total because `thm-jordan-boundary-criterion` is itself
  one of the four Lebesgue-criterion consumers.

The two repaired Facts/dependency surfaces require the normal A4 impact
template and A6 consumer-by-consumer disposition. Their public Statements stay
unchanged, so no consumer edit is pre-authorized. All three material ids are
the exact repair/certifier and eventual A7 targeted-rejudge candidates; pure
provenance retags and the contract-only correction are not A7 targets. A4 must
run reflow/precheck on the three changed proof items, rebuild the exact
contracts, and take the single post-A4 stage snapshot. A3 did not run A4 or any
later stage.

## Mandatory A6 Wave 11–12 final-text barrier

The combined manifest independently confirms exactly 24 earlier-wave edges:
one Wave 13 -> Wave 11 edge and 23 Wave 13 -> Wave 12 edges. A6 must reopen all
24 against the **final** earlier-wave text and refresh any affected contract
quotation. Concurrent text observed at A3 is not a certification.

Wave 11 — one edge:

- `cor-termwise-integration-of-a-real-power-series` -> `thm-ftc-first-part`

Wave 12 — 23 edges:

- `thm-power-series-uniform-on-compact-subintervals` -> `thm-weierstrass-m-test-for-function-series`
- `thm-power-series-uniform-on-compact-subintervals` -> `def-series-of-real-functions`
- `cor-power-series-sums-are-continuous` -> `thm-uniform-limit-continuous-real-functions`
- `thm-termwise-differentiation-of-a-real-power-series` -> `thm-uniform-derivative-limit-on-a-closed-interval`
- `cor-termwise-integration-of-a-real-power-series` -> `thm-uniform-limit-interchanges-riemann-integration`
- `fs-power-series-uniform-on-its-open-interval` -> `thm-uniform-cauchy-criterion-real-functions`
- `fs-power-series-uniform-on-its-open-interval` -> `def-pointwise-uniform-and-uniformly-cauchy-convergence`
- `cex-geometric-power-series-not-uniform-on-its-open-interval` -> `def-pointwise-uniform-and-uniformly-cauchy-convergence`
- `def-multidimensional-rectangle-and-volume` -> `def-p-norms-on-rn`
- `def-multidimensional-grid-partition` -> `def-p-norms-on-rn`
- `def-multidimensional-grid-partition` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `cor-one-dimensional-and-multidimensional-riemann-agree` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-continuous-on-a-rectangle-is-riemann-integrable` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-continuous-on-a-rectangle-is-riemann-integrable` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `cor-one-dimensional-null-and-content-zero-agree` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `def-oscillation-in-rn` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `lem-oscillation-characterisation-in-rn` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-lebesgue-criterion-in-rn` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `def-jordan-inner-and-outer-content` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `def-p-norms-on-rn`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-graphs-of-continuous-functions-have-content-zero` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`

## Exact handoff

- Provenance: 76 **APPROVE**, zero **RETURN**, zero classification amendments.
- Item repairs: three **AMEND and apply**, zero **RETURN**; exact material ids
  are `thm-jordan-boundary-criterion`, `thm-lebesgue-criterion-in-rn`, and
  `ex-geometric-power-series-and-an-interior-reexpansion`.
- Contract amendment: four false iff dispositions corrected across
  `thm-jordan-boundary-criterion` and
  `thm-jordan-content-and-indicator-integrability`, plus exact regeneration for
  the three material repairs.
- Pages/structure: zero changes authorized.
- A6 final-text barrier: 24/24 edges preserved (1 Wave 11, 23 Wave 12).
- Blockers: none.
