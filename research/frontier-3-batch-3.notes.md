# Frontier-3 batch 3 — scaffold amendments and authoring notes

Beta-F3-3. Item scaffolds are in
`research/frontier-3-batch-3.pages.json`. This file contains applyable edits to
`research/plan-realanalysis-pages.md`, authoring notes that have no prose-plan
anchor, and scope decisions that must survive into step 5.

Checks actually run against a scratch splice of the batch objects into the
current `research/plan-spec.json`:

- JSON parsing succeeded.
- `node tools/validate-plan.mjs <scratch-splice>` exited 0. Its warnings are
  existing plan warnings; the assigned multidimensional page inherits the
  existing `redundant-prereq` warning because its fixed `requires` names
  `the-riemann-integral` directly as well as reaching it through
  `rn-as-a-normed-space`.
- `node tools/depsource.mjs <scratch-splice> --page <assigned-page>` exited 0
  for every assigned A and B page: no unresolved, homeless, draft-page, or
  planned-later dependencies were reported.
- The Archimedean worklist entries on
  `cor-improper-integral-test-for-series` and `thm-improper-p-test-rational`
  are direct-form uses: bracketing a real truncation by a canonical natural and
  making the number of dyadic blocks arbitrarily large. They do not use the
  reciprocal conclusion.

---

## 1. Applyable edits to `research/plan-realanalysis-pages.md`

### 1.1 Replace the RA-20 block

**Section:** `**RA-20 Bounded Variation and the Riemann-Stieltjes Integral**`

**Old text (exact):**

```
**RA-20 Bounded Variation and the Riemann-Stieltjes Integral** <- RA-19
bounded variation, total variation, positive and negative variation; the
**Jordan decomposition**; BV is closed under sums and products; BV implies
Riemann integrable; the Riemann-Stieltjes integral (refinement and mesh
definitions); existence for a continuous integrand against a BV integrator;
**Rudin's existence ladder**; RS integration by parts; reduction to the Riemann
integral for a C^1 integrator; **Young's Holder condition for RS existence**
(f in C^{0,alpha}, g in C^{0,beta}, alpha + beta > 1); the inclusion chain
C^1 < Lipschitz < AC < continuous and BV. B: the Cantor function as an
integrator, with int 1 dC = 1 while C' = 0 a.e.; **RS additivity FAILS when f and
alpha share a discontinuity**; a continuous function that is not BV
(x psi(1/x)); a continuous monotone g and continuous f with
int f dg != int f g' dx.
```

**New text:**

```
**RA-20 Bounded Variation and the Riemann-Stieltjes Integral** <- RA-19
bounded variation and the existence of total variation as a real supremum;
variation on subintervals; positive and negative variation; the **Jordan
decomposition**, including its minimality clause; algebra and discontinuity
properties of BV functions; BV implies Riemann integrable; and the proved
hierarchy C^1 -> Lipschitz -> continuous and BV. The Riemann-Stieltjes integral
is defined by tagged mesh sums and kept distinct from the ordinary Riemann
integral. Its development includes uniqueness, the refinement estimate,
existence for a continuous integrand and BV integrator, the converse rung with a
BV integrand and continuous integrator, linearity, cut additivity under the
stated continuity hypothesis, integration by parts, exact agreement with the
Riemann integral for the identity integrator, reduction for a differentiable
integrator with continuous derivative, and Young existence for rational Holder
exponents whose sum exceeds 1. B: strictness witnesses for the C^1 -> Lipschitz
-> continuous-and-BV hierarchy; x d(1/x,Z), extended by 0, as a continuous
function of unbounded variation; the Cantor function as an integrator with int 1
dC = 1; failure of whole-interval integrability when integrand and integrator
share a jump even though both cut integrals exist; and computations with smooth
and nondifferentiable integrators.

SCOPE AMENDMENT (Beta-F3-3). The AC rung is omitted because
`rem-absolutely-continuous-function` is recorded with `proved_here: false`, so it
cannot support new content. Claims using almost-everywhere differentiation,
including C' = 0 a.e. for the Cantor function and comparisons with int f g' dx,
are also omitted. They are licensed by a proved absolute-continuity and
almost-everywhere differentiation development. Holder exponents are rational
because rational powers, rather than arbitrary real powers, are what this
page's declared prerequisite closure supplies.
```

### 1.2 Replace the RA-21 block

**Section:** `**RA-21 Improper Integrals**`

**Old text (exact):**

```
**RA-21 Improper Integrals** <- RA-19
improper integrals of the first, second and mixed kinds; absolute versus
conditional convergence; the **Cauchy principal value**; the p-test; tail
invariance; comparison; the Cauchy criterion; **Dirichlet's and Abel's tests for
integrals** (from the second MVT); **Frullani's integral**. B: a divergent
improper integral with a finite principal value; **a convergent improper integral
whose positive continuous integrand does not tend to 0** (the integral analogue
of the n-th term test is FALSE); one whose integrand is unbounded in every tail;
1/sqrt x on (0,1].
```

**New text:**

```
**RA-21 Improper Integrals** <- RA-19
one-ended and mixed improper integrals as limits of proper Riemann integrals;
split-point independence and tail invariance; linearity; the Cauchy criteria at
infinity and at finite singular endpoints; absolute and conditional
convergence; absolute convergence implies convergence; comparison and limit
comparison; the improper-integral form of the integral test for series; the
rational p-test at infinity and at 0; the **Cauchy principal value** and its
agreement with separately convergent improper integrals; **Dirichlet's and
Abel's tests for integrals** from the second mean value theorem; and
**Frullani's formula** with the proved factor int_a^b dt/t. B: 1/x with principal
value 0 but no improper integral; a conditionally convergent step-function
integral; a strictly positive continuous function with a convergent improper
integral that is unbounded on every tail; rational p-test computations; a
Frullani computation; and an absolutely convergent rational integral over the
real line.

SCOPE AMENDMENT (Beta-F3-3). The p-test is stated for rational p. Frullani's
answer remains int_a^b dt/t because a logarithm is not supplied by this page's
declared prerequisites. The rational integral over the line is proved
absolutely convergent but is not evaluated as pi, since the needed trigonometric
and inverse-trigonometric material is not in those prerequisites.
```

### 1.3 Replace the main RA-37 paragraph

**Section:** `**RA-37 The Riemann Integral in R^m and Jordan Content**`

**Old text (exact):**

```
**RA-37 The Riemann Integral in R^m and Jordan Content** <- RA-18, RA-22
rectangles and partitions; Darboux sums and the integral over a rectangle;
Riemann's criterion in R^n; continuous implies integrable; measure zero versus
**content zero** in R^n; **Lebesgue's criterion in R^n**; Jordan inner and outer
content; **Jordan measurable iff the boundary has measure zero**; the integral
over a Jordan measurable set; graphs of continuous functions have content zero;
C^1 images of null sets are null. B: a bounded plane set without area; a compact
one; a bounded open set built from a fat Cantor set whose boundary has positive
measure; **Munkres calls Jordan measurable sets "rectifiable"**, a real citation
hazard.
```

**New text:**

```
**RA-37 The Riemann Integral in R^m and Jordan Content** <- RA-18, RA-22
for m >= 1, axis-parallel rectangles, coordinate grids, cells, refinements and
iterated finite sums; multidimensional Darboux sums and integrals; Riemann's
criterion; tagged grid sums and agreement with the Darboux definition;
linearity, monotonicity, absolute-value estimates and coordinate-cut additivity;
and continuous functions on rectangles are integrable. The m = 1 dictionary
identifies these notions with the published one-dimensional Riemann integral.
Nullity and content zero are defined by countable and finite cube covers, with an
explicit m = 1 agreement; compact null sets have content zero; and the
multidimensional **Lebesgue criterion** is proved by oscillation and a finite
cube-cover-to-grid lemma. Jordan inner and outer content use listed finite
rectangle families; a bounded set is Jordan measurable iff its indicator is
integrable, equivalently iff its boundary is null; integrals over Jordan sets
are independent of the bounding rectangle; Jordan content is finitely additive
under content-zero overlap; equal-dimensional Lipschitz maps preserve nullity;
and graphs of continuous functions have cube-content zero. B: a bounded null
plane set without Jordan content; compact and open fat-Cantor constructions;
graph, triangle and Cantor-slab computations; and the source-backed warning that
some texts use "rectifiable" for Jordan measurable sets.

SCOPE AMENDMENT (Beta-F3-3). The planned C^1-image theorem is replaced by the
proved equal-dimensional Lipschitz-image theorem. A C^1-image argument requires
the total derivative and a compact local-Lipschitz theorem; `the-total-derivative`
is not built and is not in this page's declared prerequisite closure. The
replacement does not assert a dimension-changing theorem. Cube covers are used
for nullity and content zero, while arbitrary listed rectangles are used for
Jordan outer content; proofs converting geometric constructions into nullity
must therefore construct cubes rather than silently switch cover notions.
```

---

## 2. Authoring notes with no prose-plan anchor

### 2.1 Bounded variation and Riemann-Stieltjes integration

- `def-bounded-variation-and-total-variation` must prove that the set of
  partition variations is nonempty and bounded above before writing its
  supremum. Its main definition is for `a < b`; the singleton convention is
  variation 0 and must be stated separately.
- `def-variation-function-and-positive-negative-variation` is well defined
  because restriction preserves bounded variation and the preceding additivity
  lemma supplies every subinterval variation. At the left endpoint its value is
  defined directly as 0.
- Keep ordinary Riemann sums and Riemann-Stieltjes sums distinct. The identity
  integrator agreement is termwise and must be stated in both directions,
  including equality of the values after citing the published Darboux/tagged
  agreement.
- `lem-riemann-stieltjes-refinement-estimate` must handle a refinement by
  grouping fine increments inside each coarse interval and must state both the
  refinement and retagging estimates. Uniform partitions need not refine one
  another; existence proofs compare them through a common refinement.
- `thm-riemann-stieltjes-linearity-and-additivity` keeps continuity of the
  integrand at the cut. Without it, the companion shared-jump construction has
  both cut integrals but no whole-interval integral.
- `thm-riemann-stieltjes-integration-by-parts` must derive its finite-sum
  identity for the exact tagged convention in the definition. Do not cite the
  ordinary derivative-based integration-by-parts theorem.
- `thm-riemann-stieltjes-c1-integrator-reduction` assumes that the derivative on
  the interior extends continuously to the closed interval. State this domain
  convention explicitly rather than treating endpoint derivatives as automatic.
- `lem-young-partition-sum-estimate` carries the point-removal and convergent
  rational p-series argument. `thm-young-riemann-stieltjes-existence` should
  cite that estimate rather than reproduce the removal proof.

### 2.2 Improper integrals

- Infinity is never an endpoint in the ordered field. Every definition first
  requires proper Riemann integrability on compact truncations and then takes a
  function limit at infinity or a one-sided limit.
- A mixed improper integral requires separate convergence at every singular
  end. A coupled two-parameter limit is not the definition, and a Cauchy
  principal value is a different object.
- In the Cauchy-criterion proof use `R_k=a+\iota(k)` at positive infinity and
  `c_k=a+(b-a)/\iota(k+2)` at a finite left endpoint. These are legitimate at
  the initial index; bare canonical naturals and `a+1/\iota(k+1)` can fall
  outside the required truncation domain.
- At infinity, algebraic limit laws not covered by
  `thm-algebra-of-function-limits` are proved directly from
  `def-limits-at-infinity`.
- `cor-improper-integral-test-for-series` writes
  `f(\iota(k))`, not `f(k)`: a natural is a von Neumann set and reaches the reals
  through the canonical embedding.
- `lem-truncated-integrals-of-rational-powers` is restricted to rational
  `p > 0`, `p != 1`. The `p=1` divergence proof uses dyadic blocks and does not
  introduce a logarithm.
- The Frullani proof is performed first on `[epsilon,R]` by substitution. The
  limits are uniform over the fixed proper interval between `a` and `b`, and
  orientation handles `b < a`.
- In the positive continuous spike example, state the triangular bump formula,
  verify disjoint supports and local finiteness, and compute each area before
  invoking the geometric series.

### 2.3 Multidimensional Riemann integration and Jordan content

- The fixed `requires` do not reach
  `finite-counting-and-binomial-coefficients`. Cell-indexed sums are therefore
  defined as nested applications of `def-finite-sum`, recursively across the
  coordinate ranges. Do not add undeclared uses of
  `def-sum-over-a-finite-index-set`, `thm-sum-rule`, or `thm-product-rule`.
- `def-multidimensional-grid-partition` must define the multi-index range, cells,
  mesh, coordinatewise refinement and common refinement, and prove coverage,
  disjointness of interiors and the iterated cell-volume identity. This is the
  well-definedness base for every multidimensional sum.
- The multidimensional tagged/Darboux agreement uses the quantitative
  boundary-slab clause of `lem-multidimensional-refinement-inequalities`.
  Closed cells overlap at faces, so every boundary-cell estimate must account
  for that overlap rather than call the cells disjoint.
- The m = 1 agreement results are load-bearing seams. `R^1` is not literally
  `R`; use the published isometry and identify rectangles, cells, volumes,
  tagged sums, null covers and content-zero covers term by term.
- `def-null-and-content-zero-in-rn` uses sequences of closed cubes for nullity
  and finite listed closed cubes for content zero, with convergent nonnegative
  volume series bounded by the epsilon budget. It does not define Lebesgue
  measure or outer measure.
- `lem-finite-cube-covers-admit-grid-control` is the decomposition lemma for the
  multidimensional Lebesgue criterion. Positive enlargement margins are
  essential because both covering cubes and grid cells are closed.
- `def-jordan-inner-and-outer-content` uses ordinary listed finite sums.
  Inscribed rectangle families have pairwise disjoint interiors. Prove the
  extrema exist as finite reals before naming them, including empty and
  degenerate cases.
- `def-riemann-integral-over-a-jordan-set` must record
  `justified_by: [lem-jordan-set-integral-well-defined]`; the lemma depends on
  the definition and therefore is not a prerequisite edge.
- Graph content zero and Cantor-slab content zero require actual cube covers.
  A cover by thin rectangles does not by itself prove the cube-cover definition.
  Use the cube-stacking and integer-part estimates in the scaffold strategies.
- In `cex-rational-points-in-unit-square-have-no-jordan-content`, prove
  singleton nullity directly, use countable-union closure, and prove the unit
  square is not null through compact-null equivalence plus its Jordan content;
  density alone proves the boundary identity but not nonnullity.
- Before authoring `rem-jordan-rectifiable-terminology`, verify the exact textbook
  wording and attach a working standard-reference URL. If that source check
  fails, omit the remark rather than retain an unattributed terminology claim.

---

## 3. Dependency and scope ledger

- Forward dependencies retained in `deps`: none.
- Cross-batch dependencies: none. Every external dependency is published; B
  pages otherwise cite their own A page or an earlier item on the same B page.
- The B-page leaf rule is preserved.
- The discarded AC and almost-everywhere claims are licensed by a proved
  absolute-continuity and differentiation-almost-everywhere development.
- The discarded C1-image-of-null-sets claim is licensed by a built total
  derivative page plus a compact local-Lipschitz theorem in equal dimensions.
- Arbitrary real Holder exponents are licensed by a developed real-power theory;
  the scaffold proves the rational-exponent form.
- Evaluating the rational full-line integral as pi is licensed by the relevant
  trigonometric and inverse-trigonometric integration theory; only absolute
  convergence is claimed here.
