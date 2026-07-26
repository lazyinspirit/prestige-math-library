# Level-9 batch 2 — audit notes (Beta-9-2, 2026-07-27)

Pages audited: `absolute-convergence-and-rearrangement` (36) + its B page (37),
`subspaces-products-and-quotients` (104) + its B page (105). Final page objects:
`research/level9-batch-2.pages.json`.

**Gates actually run** (against a scratchpad splice of my four page objects over
`plan-spec.json`; Alpha must re-run them on the real splice — amendment 6):

```
node tools/validate-plan.mjs <spliced>   OK, exit 0
    (3 pre-existing [redundant-prereq] warnings on filters-and-ultrafilters,
     countability-and-uncountability and ordinals-and-transfinite-recursion;
     none of them mine)
node tools/depsource.mjs <spliced>       OK, exit 0 — 0 unresolved overall
```

Per-page `depsource`, external dependencies only:

| page | published | planned-earlier | draft-page | homeless | planned-later | unresolved |
|---|---|---|---|---|---|---|
| 36 `absolute-convergence-and-rearrangement` | 173 | 0 | 0 | 0 | 0 | 0 |
| 37 `…-examples` | 66 | 35 | 0 | 0 | 0 | 0 |
| 104 `subspaces-products-and-quotients` | 114 | 0 | 0 | 0 | 0 | 0 |
| 105 `…-examples` | 83 | 47 | 0 | 0 | 0 | 0 |

Every `planned-earlier` on 37 is a dependency on page 36; on 105, 45 are
dependencies on page 104 and 2 are the cross-batch Cantor deps of §5. Item
counts: 36 → 26, 37 → 14, 104 → 24, 105 → 13; 614 dep edges in total.

**One correction the gate forced.** My first draft kept the spec's `requires`
fields unchanged and `validate-plan` rejected it with four `[undeclared-prereq]`
errors. `requires` must contain the closure of every page an item depends on, so
page 36 now also requires `countability-and-uncountability` (for
`thm-n-cross-n-countable` and `def-injection-surjection-bijection`), and page 105
also requires `cantor-set-baire-and-measure-zero` and `limits-of-real-functions`
(the first of which brings `series-and-nonnegative-tests` with it, so it is not
listed separately). These are the only `requires` changes in this batch.

Everything below is either (1) a prose-scaffold amendment stated as an exact
applyable edit, or (2) an authoring-time note that has no scaffold anchor but
must reach the step-5 author. Owner decisions live in my report; the ones with a
conditional edit here are marked OWNER-CONDITIONAL.

---

## 1. Prose-scaffold amendments — `research/plan-realanalysis-pages.md`

### 1.1 RA-09 audit block (new)

**File:** `research/plan-realanalysis-pages.md`
**Section:** `**RA-09 Absolute and Conditional Convergence; Rearrangement; Products**`
**Edit:** insert immediately after the line `<- RA-08`, before the line
beginning `absolute, conditional and unconditional convergence;`:

```
**Level-9 audit, 2026-07-27 (batch 2).** Seven notes bind authoring of this page
pair. (1) `lem-absolute-convergence-implies-convergence` is REUSED, not reminted:
`def-absolute-and-conditional-convergence` names it for the implication and no
item on this page restates it. (2) The LOGARITHM does not exist at order 36
(`the-logarithm-and-general-powers` is order 72), so no sum on this page or its
companion is ever evaluated as a multiple of log 2. The alternating harmonic
series is proved to converge with sum strictly between 1/2 and 1, and the
two-positive-one-negative rearrangement is proved to converge to (3/2) TIMES THAT
SUM, via the log-free identity T_{3n} = S_{4n} + (1/2) S_{2n}. (3) R^d does not
exist as a normed space at order 36 (`rn-as-a-normed-space` is order 62), so
Levy-Steinitz and Sierpinski's refinement are NOT items on this page and the
"in R^2 the rearrangement sums form a LINE" example is dropped; what remains is
the orientation remark `rem-rearrangement-in-higher-dimensions`. (4) The sum
p_n^2 criterion for infinite products needs the log expansion and is DEFERRED to
order 72; `thm-infinite-product-criterion` carries the log-free content instead
(the nonnegative criterion with the two elementary bounds, the (1 - p_k) form,
and absolute convergence from sum |p_k|). (5) `lem-integer-part` is homed on
`limits-of-real-functions` (order 42), LATER than this page, so
`thm-decimal-expansions` may not use a floor function; the digits are produced by
`thm-recursion` with the finite case distinction of `thm-well-ordering-principle`.
(6) The harmonic series' divergence is NOT citable here:
`ex-harmonic-series-diverges` is homed on an examples page. Every conditional
convergence witness cites `thm-p-series-rational` at p = 1 (and at p = 1/2 for
the square-root witnesses) instead. (7) Every series on this page and its
companion is written 0-indexed: the alternating harmonic series is
sum_{j>=0} (-1)^j/(j+1), the square-root witnesses run over 1/sqrt(j+1),
prod(1 - 1/(j+2)) replaces prod(1 - 1/n), and prod(1 + (-1)^j/sqrt(j+2))
replaces prod(1 + (-1)^n/sqrt n) — at the original indices the first term of
each is 1/0 or a vanishing factor.
```

### 1.2 RA-09 A-list — remove Levy-Steinitz, qualify the product criterion

**File:** `research/plan-realanalysis-pages.md`
**Section:** RA-09, the paragraph beginning `absolute, conditional and unconditional convergence;`
**Old text:**
```
theorem**; unconditional <=> absolute in R; **Levy-Steinitz** (in R^d the
rearrangement sums form an affine subspace) and Sierpinski's refinement;
**Cauchy products** and **Mertens' theorem**; grouping; Fubini for double series;
infinite products with the sum p_n^2 criterion; decimal expansions as a theorem.
```
**New text:**
```
theorem**; unconditional <=> absolute in R; **Cauchy products** and **Mertens'
theorem**; grouping; Fubini for double series; infinite products with the
log-free criteria (nonnegative terms, the (1 - p_k) form, and absolute
convergence from sum |p_k| — the sum p_n^2 refinement is DEFERRED to the
logarithm page, order 72); decimal expansions as a theorem. Levy-Steinitz (in
R^d the rearrangement sums form an affine subspace) and Sierpinski's refinement
are NOT stated on this page: R^d as a normed space is order 62, later in the
reading order, and rem-rearrangement-in-higher-dimensions carries the
orientation instead.
```

### 1.3 RA-09 B-list — fix the three defective witnesses

**File:** `research/plan-realanalysis-pages.md`
**Section:** RA-09, the paragraph beginning `B: the alternating harmonic series rearranged`
**Old text:**
```
B: the alternating harmonic series rearranged to (3/2) log 2 and to any
prescribed real; the Cauchy product of sum (-1)^n/sqrt(n+1) with itself diverges;
in R^2 the rearrangement sums form a LINE, not the plane; a double array with
iterated sums 0 and -1; product(1 - 1/n) = 0 explains why 0 is excluded from
product convergence; product(1 + (-1)^n/sqrt n) diverges though the series
converges.
```
**New text:**
```
B: the alternating harmonic series sum_{j>=0} (-1)^j/(j+1), proved conditionally
convergent with sum strictly between 1/2 and 1 (the VALUE log 2 is not available
at order 36); the same series rearranged two-positive-one-negative to (3/2) times
that sum, and rearranged to any prescribed real; a Dirichlet-test example whose
signs have period three, so the alternating series test does not reach it; an
Abel-test example and the counterexample showing Abel's test needs monotonicity;
the Cauchy product of sum_{k>=0} (-1)^k/sqrt(k+1) with itself diverges because
|c_n| >= 1 for every n; a double array with iterated sums 1 and 0; every
rearrangement of sum (-1/2)^k has sum 2/3; grouping (1-1)+(1-1)+... converges
while sum (-1)^k does not; prod_{j>=0}(1 - 1/(j+2)) has partial products 1/(n+1)
and so does not converge, which is why a zero limit is excluded;
prod_{j>=0}(1 + (-1)^j/sqrt(j+2)) has partial products tending to 0 although the
series converges; and 0.999... = 1 as the nonuniqueness of base-b expansions.
```

---

## 2. Prose-scaffold amendments — `research/plan-topology-track.md`

### 2.1 T3 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T3. Subspaces, Products, and Quotients`
**Edit:** insert immediately after the existing paragraph that ends
`not the definition itself.` and before the line beginning `DEFS: subspace topology`:

```
**Level-9 audit, 2026-07-27 (batch 2).** Six notes bind authoring of this page
pair. (1) The four subspace THEOREMS this section promised — the subspace basis,
closedness in a subspace, transitivity, and continuity into and out of subspaces
— are ALREADY DISCHARGED inside the body of `def-subspace-topology-top` at level
8, each with its proof. They are not reproved here and no item restates them.
What this page adds on subspaces is `thm-subspace-closure-and-interior` (closure
in a subspace is the trace of the closure; the interior only contains the trace,
with equality for open S; density traces only to OPEN subspaces — the unqualified
form is false, witness Q inside the irrationals), `def-hereditary-property`, and
`cor-metrizability-and-first-countability-are-hereditary`. (2) SEPARATION: the
library has no `def-hausdorff-space`; the property is spelled out but not defined
in `def-metrizable-space`, and `thm-metric-hausdorff-separation` is metric-only.
`separation-axioms` is order 112, LATER than this page. This page therefore mints
a MINIMAL `def-hausdorff-space` (owner decision — see report R2), used only by
`fs-quotient-of-a-hausdorff-space-is-hausdorff` and its companion
`cex-line-with-two-origins`; the T0-T4 hierarchy stays at 112 and the hereditary
and productive theorems stay at 116. (3) The false statement "a subspace of a
normal space is normal" is DROPPED from this page: normality is a separation
axiom and its non-hereditariness is exactly the subject of
`hereditary-and-productive-separation` (order 116). (4) The false statement "a
product of quotient maps is a quotient map" and its counterexample are DROPPED
from this page (report R3): the only standard witness is Dieudonne's, which needs
an enumeration of Q and a nested construction out of proportion to the page, and
the true positive result (Whitehead, with a locally compact factor) needs
compactness at order 108. (5) `lem-product-topology-on-rn` is a mandatory seam
item: without it "R^2" means two unrelated things on this page (a product, and
the metric space of `lem-metrics-on-rn`), which is the level-7 two-notions-of-open
defect. It is stated for d_infinity, whose balls ARE the basic product boxes,
with d_1 and d_2 following from d_infinity <= d_2 <= d_1 <= n d_infinity and
`thm-metric-equivalence-hierarchy`; it carries n >= 1, since `lem-metrics-on-rn`
does. (6) `ex-sorgenfrey-line` is homed on an examples page (order 103) and so
may not be a dep of anything; `ex-sorgenfrey-plane` re-introduces the half-open
basis inline through `thm-basis-criterion` and links the level-8 example as
prose, not as a dependency. Separately, the word "separable" never appears: the
property is written "has a countable dense subset", as at level 8.
```

### 2.2 T3 DEFS list — record what is defined where

**File:** `research/plan-topology-track.md`
**Section:** `## T3. Subspaces, Products, and Quotients`, the `DEFS:` paragraph
**Old text:**
```
DEFS: subspace topology (defined at level 8, `def-subspace-topology-top` —
cite, do not redefine); hereditary property; product topology (finite and
arbitrary); box topology; projections; disjoint union / coproduct; quotient
topology, quotient map, saturated set; identification space; adjunction space,
cone, suspension; initial and final topologies; embedding.
```
**New text:**
```
DEFS: subspace topology (defined at level 8, `def-subspace-topology-top` —
cite, do not redefine); embedding (also defined at level 8, inside
`def-homeomorphism-and-open-maps` — cite, do not redefine); hereditary property;
initial and final topologies (defined BEFORE the product, so that the product,
the coproduct and the quotient are three instances of two constructions rather
than three separate universal properties); product topology (finite and
arbitrary, including the empty index set, whose product is a one-point space);
box topology; projections; disjoint union / coproduct; quotient topology,
quotient map, saturated set; identification space; adjunction space, cone,
suspension; Hausdorff space (minimal, owner-approved pull-forward from order 112).
```

### 2.3 T3 THMS list — remove what level 8 already proved

**File:** `research/plan-topology-track.md`
**Section:** `## T3. Subspaces, Products, and Quotients`, the `THMS:` paragraph
**Old text:**
```
THMS: the subspace basis; closedness in a subspace; transitivity of subspaces;
continuity into and out of subspaces; the product topology is the initial
```
**New text:**
```
THMS: (the subspace basis, closedness in a subspace, transitivity of subspaces
and continuity into and out of subspaces are ALL discharged in the body of
`def-subspace-topology-top` at level 8 and are NOT reproved here; what this page
adds is closure and interior in a subspace, and heredity); the product topology
is the initial
```

### 2.4 T3 FS list — drop the two that outrun the vocabulary

**File:** `research/plan-topology-track.md`
**Section:** `## T3. Subspaces, Products, and Quotients`, the `FS:` paragraph
**Old text:**
```
FS: the product topology equals the box topology; a product of quotient maps is
a quotient map; a quotient of a Hausdorff space is Hausdorff; a subspace of a
normal space is normal; projections are closed maps; an arbitrary product of
opens is open in the product topology.
```
**New text:**
```
FS: the product topology equals the box topology; a quotient of a Hausdorff
space is Hausdorff; projections are closed maps; every quotient map is an open
map; an arbitrary product of opens is open in the product topology. ("A product
of quotient maps is a quotient map" is deferred — the only standard witness is
Dieudonne's and the positive result needs compactness at order 108. "A subspace
of a normal space is normal" moves to `hereditary-and-productive-separation`,
order 116, where normality is defined.)
```

### 2.5 T3 B/CEX lists — fix the witnesses that need later machinery

**File:** `research/plan-topology-track.md`
**Section:** `## T3. Subspaces, Products, and Quotients`, the `B:` and `CEX:` paragraphs
**Old text:**
```
B: R^n as a product; the Cantor set as {0,1}^N; the Hilbert cube; the torus as a
quotient of the square; the Mobius band; R/Z; the Sorgenfrey plane.
CEX: the diagonal map into R^omega is continuous for the product and not for the
box topology; the projection of the hyperbola shows projections are not closed;
the line with two origins is a non-Hausdorff quotient of a Hausdorff space; R/Q
is indiscrete-like; a product of quotient maps that is not a quotient map; the
antidiagonal of the Sorgenfrey plane is a non-separable subspace of a separable
space.
```
**New text:**
```
B: R^n as a product; the Cantor set as {0,1}^N (the ternary digits are the
coordinates; cites the order-40 Cantor items); the Hilbert cube, metrized by
sum |x_k - y_k|/2^{k+1}; R/Z, and the torus as the quotient of the square
identified with (R/Z) x (R/Z) — NOT with a circle in R^2, since identifying R/Z
with the unit circle needs the trigonometric functions at order 74; the cylinder
and the Mobius band as quotients of the square; the Sorgenfrey plane, with
Q x Q as a countable dense subset.
CEX: the diagonal map into R^omega is continuous for the product and not for the
box topology; the projection of the hyperbola shows projections are not closed;
the first projection of ([0,inf) x R) u (R x {0}) is a quotient map that is
neither open nor closed; the line with two origins is a non-Hausdorff quotient of
a metrizable space; R/Q carries the indiscrete topology; the antidiagonal of the
Sorgenfrey plane is an uncountable discrete subspace, so "has a countable dense
subset" is not hereditary (the word "separable" is not used — no item defines it).
```

---

## 3. Authoring-time notes — page 36 and 37 (no scaffold anchor)

- **`def-absolute-and-conditional-convergence`:** it must NAME
  `lem-absolute-convergence-implies-convergence` for the implication and prove
  nothing about it. "Conditionally convergent" = convergent and not absolutely
  convergent. Also give the general-starting-index form, as
  `lem-absolute-convergence-implies-convergence` itself does.
- **`lem-abel-summation-by-parts`:** the identity in the library's conventions is
  `sum_{k<n} a_k b_k = A_n b_{n-1} - sum_{k<n-1} A_{k+1}(b_{k+1} - b_k)` for
  n >= 1, where `A_n = sum_{k<n} a_k` so that `A_0 = 0` and `a_k = A_{k+1} - A_k`
  (`def-series`). Check it at n = 1 (both sides `A_1 b_0`) and n = 2 before
  starting the induction; the index `n-1` is legitimate exactly because n >= 1.
  The general block form follows by subtraction and does not need its own item.
- **`thm-dirichlet-test`:** b_k nonincreasing with b_k -> 0 forces b_k >= 0
  (`lem-limit-preserves-order`) — say so, since the telescoping bound
  `sum_{k<n}(b_k - b_{k+1}) = b_0 - b_n <= b_0` is where it is used. The
  absolute convergence of `sum A_{k+1}(b_{k+1} - b_k)` comes from
  `thm-direct-comparison-test` against `M (b_k - b_{k+1})` and then
  `lem-absolute-convergence-implies-convergence`; the boundary term
  `A_n b_{n-1} -> 0` is `lem-null-times-bounded`.
- **`thm-alternating-series-test`:** cite `lem-alternating-sequence` for the
  parity object; never rebuild `(-1)^k` by a fresh recursion. The error bound is
  NOT part of the Dirichlet argument: prove it from the nesting of the even and
  odd partial sums (s_{e_j} nonincreasing, s_{o_j} nondecreasing,
  s_{o_j} <= S <= s_{e_j}) via `thm-monotone-convergence` and
  `lem-limit-preserves-order`.
- **`thm-abel-test`:** reduce to Dirichlet by writing b_k = (b_k - b) + b with
  b = lim b_k (`cor-monotone-converges-iff-bounded`). Handle BOTH monotonicity
  directions: if (b_k) is nondecreasing then (b - b_k) is the nonincreasing null
  sequence and the sign is absorbed by `lem-series-linearity`. Do not state
  Dirichlet's test with "monotone" where it needs "nonincreasing".
- **`thm-riemann-series-theorem`:** the engine is
  `lem-positive-and-negative-parts` (both part-series diverge to +infinity), and
  the rearrangement is built by `thm-recursion` carrying the state (index into
  the positives, index into the negatives, current partial sum). The "least n
  such that the running sum crosses the target" step is
  `thm-well-ordering-principle` on N, not a floor function. The oscillating case
  is stated with `def-limsup-liminf` and `def-extended-reals`, which exist at
  order 30.
- **`thm-dirichlet-rearrangement`:** the proof needs, for each epsilon, a finite
  index set covering the tail; take N from `thm-series-cauchy-criterion` applied
  to `sum |a_k|` and then `M = max{ sigma^{-1}(k) : k < N }` via
  `lem-finite-set-has-max` — that maximum is over a finite set of naturals, and
  bijectivity of sigma is what makes the preimages exist.
- **`thm-mertens`:** the standard proof splits the product partial sum with the
  tail of `sum b_k` and uses boundedness of the partial sums of `sum b_k`
  (`lem-convergent-implies-bounded`) against the absolute convergence of
  `sum a_k`. `cor-cauchy-product-absolute` then gets absolute convergence of
  `sum c_n` by `thm-direct-comparison-test` against
  `sum_n sum_{k<=n} |a_k||b_{n-k}|`, whose partial sums are bounded by
  `(sum |a_k|)(sum |b_k|)`.
- **`thm-double-series-fubini`:** existence of a bijection N -> N x N is
  `thm-n-cross-n-countable`; the value is independent of it by
  `thm-dirichlet-rearrangement`. State the hypothesis as "each inner series
  `sum_j |a_{ij}|` converges and the outer series of those sums converges", not
  as an unqualified double sum.
- **`def-infinite-product`:** the convention: `prod a_k` CONVERGES when there is
  N with a_k != 0 for all k >= N and the partial products of the N-tail converge
  to a NONZERO limit. Say explicitly why a zero limit is excluded (otherwise
  every product with one zero factor would converge and the theory would carry
  no information); the companion page witnesses it with
  `ex-product-of-one-minus-one-over-k-is-zero`.
- **`thm-infinite-product-criterion`:** all four inequalities are inductions on
  `def-finite-sum` products and need no logarithm:
  `prod_{k<n}(1+p_k) >= 1 + sum_{k<n} p_k`;
  `prod_{k<n}(1+p_k) <= 1/(1 - sum_{k<n} p_k)` whenever `sum_{k<n} p_k < 1`;
  `prod_{k<n}(1-p_k) >= 1 - sum_{k<n} p_k`; and
  `prod_{k<n}(1-p_k) <= 1/prod_{k<n}(1+p_k) <= 1/(1 + sum_{k<n} p_k)`, from
  `(1-x)(1+x) = 1 - x^2 <= 1`. The last one is what gives
  "partial products tend to 0 when sum p_k diverges".
- **`thm-decimal-expansions`:** floor-free construction. Set r_0 = x in [0,1);
  the intervals [d/b, (d+1)/b) for d < b partition [0,1), so there is exactly one
  digit d_0 < b with r_0 in that interval (a finite case distinction, closed by
  `thm-well-ordering-principle`), and r_1 := b r_0 - d_0 is again in [0,1).
  `thm-recursion` on the state (r, d) produces the digit sequence. Convergence
  and the value come from `thm-geometric-series` with the tail bound
  `sum_{j>=n} (b-1)/b^{j+1} = 1/b^n`. Write the digits 0-indexed:
  `x = sum_{j>=0} d_j / b^{j+1}`, so no index runs from 1 and `b^0 = 1` never
  appears in a denominator by accident.
- **`fs-convergent-implies-absolutely-convergent` and
  `fs-rearrangement-preserves-the-sum`:** both inline the alternating harmonic
  witness on the A page (they may not cite the B page). Divergence of `sum 1/k`
  is `thm-p-series-rational` at p = 1 — NOT `ex-harmonic-series-diverges`, which
  is homed on `series-and-nonnegative-tests-examples` and is unusable as a dep.
- **`fs-cauchy-product-of-convergent-series-converges`:** the witness
  a_k = b_k = (-1)^k/sqrt(k+1) gives
  c_n = (-1)^n sum_{k=0}^{n} 1/sqrt((k+1)(n-k+1)); each root is at most
  (n+2)/2 by `thm-am-gm` on the two factors, so every term is at least 2/(n+2)
  and |c_n| >= 2(n+1)/(n+2) >= 1. Divergence is then `lem-nth-term-test`. The
  same computation is the companion counterexample.
- **`fs-iterated-double-sums-always-agree`:** the witness is a_{ii} = 1,
  a_{i+1,i} = -1, all other entries 0. Row sums: 1 for row 0 and 0 afterwards,
  giving 1. Column sums: 0 for every column, giving 0. (The scaffold said
  "0 and -1"; the values are 1 and 0 for this array, and the point is identical.)
- **`cex-infinite-product-diverges-though-the-series-converges`:** the log-free
  route. Pair consecutive factors: with a = 2i+2, b = 2i+3,
  `1/sqrt(a) - 1/sqrt(b) = 1/(sqrt(ab)(sqrt(a)+sqrt(b))) <= (1/2)/sqrt(ab)`, so
  each pair is at most `1 - (1/2)/sqrt(ab) <= 1 - 1/(2(2i+3))`. The sum of
  `1/(2(2i+3))` diverges by `thm-p-series-rational` and direct comparison, so the
  even partial products tend to 0 by the last clause of
  `thm-infinite-product-criterion`; the odd ones differ by one bounded factor.
- **`ex-alternating-harmonic-rearranged-to-three-halves`:** prove
  T_{3n} = S_{4n} + (1/2) S_{2n} by induction (check n = 1: 1 + 1/3 - 1/2 = 5/6
  and 7/12 + 1/4 = 5/6), then pass to the limit with `thm-algebra-of-limits` and
  `lem-subsequence-inherits-limit`, closing the two residual index classes with
  `lem-nth-term-test`. Never write the value as (3/2) log 2.
- **`ex-dirichlet-test-with-period-three-signs`:** build the period-three pattern
  by `thm-recursion` with state in a three-element set (r_0 = 0, r -> next),
  then a_k := g(r_k) with g(0) = g(1) = 1, g(2) = -2. Its partial sums lie in
  {0, 1, 2}. This is the one item on the pair that shows Dirichlet is strictly
  stronger than Leibniz; do not replace it with an alternating witness.
- **Index discipline, every item on the pair.** `def-sequence` and `def-series`
  are 0-indexed and N contains 0. The shifts baked into the titles are
  deliberate: `(-1)^j/(j+1)`, `1/sqrt(j+1)`, `1 - 1/(j+2)`,
  `1 + (-1)^j/sqrt(j+2)`, `d_j/b^{j+1}`. At the unshifted indices these are
  1/0, 1/sqrt(0), a zero factor and a zero factor respectively.
- **`rem-rearrangement-in-higher-dimensions` (OWNER-CONDITIONAL, report R4):**
  if the owner approves minting `rem-levy-steinitz` with `proved_here: false` on
  `deferred-functional-analysis`, this remark declares
  `external_refs: [rem-levy-steinitz]` and links it, and the fuchsia reminder
  does the honest work. If not, the remark says only that the R^d question has a
  complete classical answer that this library does not reach at this point in the
  reading order, names no theorem statement, and carries the Levy and Steinitz
  papers in `sources.references`. Either way it must NOT assert the theorem as a
  fact of this library.
- **`rem-sums-proved-to-exist-but-not-evaluated`:** phrase every scope sentence
  as "not available at this point in the reading order", never as "this library
  does not develop X" (defect class 5). The named waits are: the value of the
  alternating harmonic sum and of the (3/2)-rearrangement (the logarithm, order
  72), the sum p_n^2 product criterion (same page), and the R^d rearrangement
  theorem (order 62 and beyond).

## 4. Authoring-time notes — page 104 and 105 (no scaffold anchor)

- **`thm-subspace-closure-and-interior`:** the density clause is TRUE only for
  open S. Q is dense in R and Q intersect (R \ Q) is empty, so the unqualified
  form is false; state the hypothesis and say why.
- **`def-initial-and-final-topology`:** discharge both existence obligations
  inline (WORKFLOW definition-justification): the initial topology is
  `<{f_i^{-1}[V]}>` and is a topology by `def-topology-basis-subbasis`; the final
  family `{U : g_i^{-1}[U] open for every i}` is a topology directly, since
  preimage commutes with unions and finite intersections. Name
  `def-subspace-topology-top` as the model initial topology and CITE its
  characteristic property rather than reproving it.
- **`def-product-topology`:** the product set is
  `{ x : I -> union X_i with x_i in X_i for every i }`. Two index-range facts must
  be stated, not assumed: for I empty the product is the one-point set containing
  the empty function (and both topologies on it are the unique one); and the
  product being nonempty when all factors are nonempty is the Axiom of Choice for
  infinite I (`def-axiom-of-choice`, `def-choice-function`), `lem-finite-choice`
  for finite I. The box topology is generated by all `prod U_i`, the product
  topology by those with `U_i = X_i` for all but finitely many i.
- **`thm-product-universal-property`:** projections are open for BOTH topologies;
  say so, since the counterexample page uses openness of the projection on R^2.
  Surjectivity of a projection is where AC enters and nowhere else in the item.
- **`thm-box-finer-than-product`:** strictness needs a point in `prod U_i` with
  every `U_i` a nonempty proper open subset — again AC for infinite I. State the
  hypothesis as "infinitely many factors have a nonempty proper open subset", not
  as "infinitely many factors are non-trivial", which is vague.
- **`thm-product-of-subspaces-and-closures`:** cl(prod A_i) = prod cl(A_i) is
  proved by basic open sets; the inclusion cl <= prod cl uses only continuity of
  the projections, and the reverse uses a choice of a_i in A_i for the
  unrestricted coordinates — AC when I is infinite, `lem-finite-choice`
  otherwise. If some A_i is empty both sides are empty (cl of the empty set is
  empty), so the nonemptiness hypothesis costs nothing; say that rather than
  assuming all A_i nonempty.
- **`lem-product-topology-on-rn`:** prove it for d_infinity, whose ball
  B(x, r) is exactly the basic product box `prod (x_k - r, x_k + r)`; that is the
  whole proof. Then `d_infinity <= d_2 <= d_1 <= n d_infinity` (from
  `lem-finite-sum-laws` and `thm-of-square-roots`) gives Lipschitz equivalence
  (`def-equivalent-metrics`) and hence the same topology by
  `thm-metric-equivalence-hierarchy`. Do NOT cite `ex-p-metrics-on-rn`: it is
  homed on `metric-spaces-examples`, a B page. Carry n >= 1, as
  `lem-metrics-on-rn` does — at n = 0 d_infinity is a maximum over the empty set.
- **`def-disjoint-union-topology`:** realise the coproduct concretely as
  `union_i X_i x {i}` so that it is a set and the injections are injective by
  construction; the final topology of the injections is then literally "each
  trace is open".
- **`lem-open-or-closed-surjection-is-quotient`:** include the continuous-section
  clause — `q . s = id` with s continuous forces q to be a quotient map, since
  `V = s^{-1}[q^{-1}[V]]`. It is the cheapest route to the companion
  counterexample and it is not in the prose scaffold. Non-reversal ("a quotient
  map need be neither open nor closed") goes in a REMARK naming
  `cex-quotient-map-neither-open-nor-closed` as an ordinary same-pair link, not
  as a dep — the level-7/level-8 pattern.
- **`def-adjunction-cone-suspension`:** all three are quotients of a coproduct or
  of `X x [0,1]`, so the item needs nothing beyond the two constructions already
  on the page plus `lem-product-topology-on-rn` for the interval factor. State
  plainly that the invariants distinguishing these spaces (connectedness,
  compactness, homotopy) are later in the reading order, so nothing here claims
  two of them are different.
- **`def-hausdorff-space` (OWNER-CONDITIONAL, report R2):** minimal content only
  — distinct points have disjoint open neighbourhoods; every metrizable space is
  Hausdorff by `thm-metric-hausdorff-separation` (this is the SEAM, and
  `def-metrizable-space` already states the fact, so cite it rather than
  reproving); the indiscrete topology on two points is not. Do NOT prove that
  Hausdorff is hereditary or productive: that is
  `hereditary-and-productive-separation` (order 116) and poaching it here would
  leave that page with nothing.
- **`fs-projections-are-closed-maps`:** inline the hyperbola on the A page (it
  cannot cite the B page). Closedness of `{(x,y) : xy = 1}` in R^2 is cleanest
  through metrizability plus `thm-metric-sequential-closure`: a convergent
  sequence on the hyperbola cannot have first coordinate tending to 0, since then
  the second would be unbounded.
- **`fs-quotient-of-a-hausdorff-space-is-hausdorff`:** inline the line with two
  origins on the A page. The source `R sqcup R` is metrizable — exhibit the
  metric `d((x,i),(y,j)) = min(|x-y|,1)` for i = j and `= 2` otherwise — and
  hence Hausdorff. The quotient map is open because the saturation of an open set
  is open.
- **`cex-quotient-map-neither-open-nor-closed`:** with
  `A = ([0,inf) x R) u (R x {0})` and q the first projection: q is a quotient map
  because `s(x) = (x,0)` is a continuous section; q is not open because
  `A n (R x (0,inf)) = [0,inf) x (0,inf)` is open in A with image [0,inf); q is
  not closed because `{(x,1/x) : x > 0}` is closed in R^2, hence in A, with image
  (0,inf). Note that points (x,0) with x < 0 have A-neighbourhoods lying entirely
  on the x-axis — that is what makes the first set open in A.
- **`cex-r-mod-q-is-indiscrete-like`:** the argument is that a nonempty open
  subset of the quotient pulls back to a nonempty open SATURATED subset of R,
  which contains an interval; every coset y + Q is dense (a translate of a dense
  set), so it meets that interval, so y is in the preimage. Hence the preimage is
  all of R. `lem-rat-embeds-dense` supplies the density of Q; translation
  invariance is one line and is not a separate item.
- **`ex-cantor-set-as-a-product`:** avoid compactness (order 108). Show directly
  that the ternary map `{0,1}^N -> C` is a continuous bijection AND open onto its
  image, by checking that a basic cylinder maps onto the trace on C of an
  interval of length 3^{-n}. This is a CROSS-BATCH dependency on batch 1's page
  40 (`def-cantor-set`, `thm-cantor-set-ternary-description`) — see report R6.
- **`ex-hilbert-cube`:** `d(x,y) = sum_k |x_k - y_k| / 2^{k+1}` converges by
  comparison with the geometric series; proving it induces the product topology
  is the only real work, and it needs `cor-archimedean-reciprocal` for the tail
  cutoff. Index from 0 so that the first weight is 1/2 and the total mass is 1.
- **`ex-circle-as-r-mod-z` / `ex-torus-as-a-quotient-of-the-square`:** the torus
  is identified with `(R/Z) x (R/Z)`, NEVER with a circle in R^2: parametrising
  the unit circle needs the trigonometric functions (order 74). `lem-integer-part`
  (order 42) is what makes the [0,1) representatives available, and it IS legal
  here — it is illegal only on page 36.
- **`ex-sorgenfrey-plane` / `cex-antidiagonal-of-the-sorgenfrey-plane`:** the
  half-open basis is re-introduced inline via `thm-basis-criterion`;
  `ex-sorgenfrey-line` (order 103, B page) may be linked in prose but never
  declared as a dep. The antidiagonal is discrete because
  `L n ([x,b) x [-x,d)) = {(x,-x)}`, uncountable because it is in bijection with
  R (`thm-r-uncountable`), and a discrete space has exactly one dense subset,
  itself. Write "has a countable dense subset", never "separable".

## 5. Forward references and cross-page references

- **Forward references introduced by this batch: none** in any `deps`.
- One PLANNED orientation-only forward reference:
  `rem-rearrangement-in-higher-dimensions` (page 36) points at the R^d theory,
  whose earliest home is `rn-as-a-normed-space` (order 62). That page has no
  items, so no `forward_refs` id is declarable now — exactly the situation of
  `rem-complete-metrizability-is-the-topological-shadow` at level 8. Record it in
  the forward-refs ledger at authoring time and declare the id when order 62
  gains items.
- One planned `external_refs` mention, OWNER-CONDITIONAL: the same remark would
  declare `external_refs: [rem-levy-steinitz]` if that `proved_here: false` item
  is approved (report R4). A mention does not propagate the fuchsia marker
  (SCHEMA §3), which is the correct behaviour here: nothing on page 36 rests on
  Levy-Steinitz.
- **Leaf rule:** no item on any of my four pages declares a dep on an item homed
  on an examples page. The three near-misses, all deliberately routed around,
  are `ex-harmonic-series-diverges` (page 35), `ex-p-metrics-on-rn` (page 25) and
  `ex-sorgenfrey-line` (page 103).
- **Cross-batch:** `ex-cantor-set-as-a-product` (page 105) depends on
  `def-cantor-set` and `thm-cantor-set-ternary-description`, both scaffolded on
  `cantor-set-baire-and-measure-zero` (order 40), which is batch 1's. If batch 1
  renames either id, that one item breaks; nothing else in my batch touches
  batch 1.
- My pages need nothing else from batch 1, and I believe batch 1 needs nothing
  from me: no page of mine is earlier in plan order than a batch-1 page except
  36/37, which sit before 40/41, and page 40's scaffolded item list declares no
  dependency on series material beyond order 34.

## 6. Recommendation to the owner: T3 sizing and whether to split

Raised by the orchestrator mid-flight, on the owner's instruction. **My finding
is that no split is needed**, and the arithmetic is below.

**Measured.** `subspaces-products-and-quotients` scaffolds at **24 items**
— 7 definitions, 8 theorems, 2 lemmas, 1 corollary, 5 false statements and
1 remark — and `subspaces-products-and-quotients-examples` at **13**
(7 examples, 6 counterexamples). Measured against the pages that are actually
built (16 A pages with items, 11 B pages): A runs 12-28, median 22, maximum 28
(`metric-spaces`); B runs 8-14, median 11, maximum 14
(`topological-spaces-and-continuity-examples`). So the A page sits two items
above the median and four below the largest page in the library, and the B page
sits two above the B median and one below the B maximum. On the measured norm
this pair is unremarkable in size, and both my other two pages (26 and 14) are
the ones nearer the ceiling.

**Why the ~34 estimate was pessimistic, item by item.** Four independent
reductions, none of which is a trim:

1. **Four of the promised theorems were already proved at level 8.** The subspace
   basis, closedness in a subspace, transitivity of subspaces, and continuity
   into and out of subspaces are all discharged inside the body of
   `def-subspace-topology-top`, which the owner pulled forward to order 102.
   Restating them here would be duplication, not content. "Embedding" is likewise
   already defined, inside `def-homeomorphism-and-open-maps`. That is 5 items of
   the prose count that must not exist. What genuinely remains on subspaces is
   3 items.
2. **Initial and final topologies collapse four universal properties into two
   items.** Defining them once, before the product, lets
   `thm-initial-and-final-characteristic-properties` carry the universal property
   of the product, the coproduct AND the quotient, each of the three then needing
   only its own construction plus a short specialisation. Stating four separate
   universal properties would cost 3 more items and prove the same theorem four
   times.
3. **Two false statements leave on grounds that are not budgetary.** "A subspace
   of a normal space is normal" needs normality, which is defined at order 112
   and whose heredity IS the subject of `hereditary-and-productive-separation`
   at order 116; putting it here would both outrun the vocabulary and empty a
   later page. "A product of quotient maps is a quotient map" has, as its only
   standard witness, Dieudonne's construction with an enumeration of Q, and its
   true positive counterpart (Whitehead's theorem, with a locally compact factor)
   needs compactness at order 108; it belongs after 108. Both are stated as
   mathematical arguments in §2.4 above and both are reversible by the owner.
4. **Nothing was cut to fit.** The adjunction space, the cone and the suspension
   are KEPT, as `def-adjunction-cone-suspension` — they are quotients of a
   coproduct and of `X x [0,1]`, so they cost exactly one item once products and
   quotients are on the page. And I ADDED two items the prose scaffold did not
   have: `lem-product-topology-on-rn`, without which "R^2" would silently mean
   two different things on this page, and `def-hausdorff-space`, without which
   the quotient section has nothing to say about separation.

**If the owner nevertheless wants a split.** The clean seam is between
`lem-product-topology-on-rn` and `def-disjoint-union-topology`, giving
*Subspaces and Products* (items 1-10) and *Quotients, Coproducts, and Gluing*
(items 11-24, plus the Hausdorff definition), each with its own B page. Cost:
two new page ids and two new `-examples` ids; **no renumbering is needed**, since
fractional orders are already in use (`formal-laurent-series-field` is 31.5), so
the second pair takes 104.5 / 104.6 and the existing 104/105 keep their ids and
titles for the first pair. That lands batch 2 at three A-pages, inside step 0's
cap. Effects: the page-level Prerequisites graph gains one edge (the quotient
page requires the product page); the index group tree gains one row in the
topology group, with its `-examples` companion in the right-hand column as usual.
I do not recommend it: at 24 items the page is inside the measured norm, and a
split would separate `def-initial-and-final-topology` from half of its
instances, which is the one structural idea holding the page together.

**Decision requested:** approve keeping `subspaces-products-and-quotients` as a
single 24-item A page, or ask for the two-way split at 104 / 104.5 with the seam
above.
