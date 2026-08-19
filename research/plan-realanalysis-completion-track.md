# Real analysis completion track — the multivariable, geometric and classical gaps

Prose scaffold, owner-commissioned 2026-08-19. Machine-readable half:
`research/plan-spec.json`. Seam contract: `research/subjects-01-SEAMS.md`, which
outranks this file on every ownership and placement question.

> **STATUS: PROPOSED, NOT SPLICED.** Nothing in `research/plan-spec.json`,
> `items/` or `library/` was touched to produce this file. No `status:` field was
> changed and no item was authored.

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY.** This file is authoritative only for the 14 new A pages it
defines, **RC-1 … RC-14**, and their 14 `-examples` companions. It defines no
change to any existing page. Where it finds a defect in published content it
records it in §5 and takes no further action.

**NO NEW ITEMS INSIDE PUBLISHED PAGES (owner, 2026-08-19).** Every gap below is
closed by a **new A/B pair**, never by inserting an item into a published page's
`items` list. This is the constraint that fixed the placement in §0.

**NO ABSOLUTE ORDERS.** Per SEAMS §0.2 this file numbers its pages **relative**
(`RC-1`, `RC-2`, …) and quotes page **ids** for everything it cites. Levels below
are dependency levels computed from `requires` in `research/plan-spec.json` on
2026-08-19; they are not integer orders and do not change when the block is
spliced.

---

## 0. Summary for the owner

**Placement.** Anchor `stone-weierstrass-general-examples`, the same anchor the
measure-theory track uses. The block appends after it and before
`sigma-algebras-and-borel-sets`. Everything published is then citable: all of real
analysis, the metric-space stack, the whole general-topology stack including
`connectedness` and `the-topology-of-euclidean-space`, `ascoli-arzela` and
`stone-weierstrass-general`.

That placement is what makes the "no items inside published pages" rule cost
nothing. Two ordering defects in the published multivariable band (§5.1, §5.2)
would otherwise have forced either a re-home receipt or a weakened statement; sat
above the topology stack, every new pair simply has the dependency it needs.

**What is scaffolded.** 14 A/B pairs, 28 pages.

| label | A page id | dependency level | one line |
|---|---|---|---|
| RC-1 | `the-inverse-function-theorem-completed` | 20 | $C^k$ regularity, openness of the regular locus, the derivative of a local inverse, the parametrised implicit function theorem, global injectivity, constancy on connected open sets |
| RC-2 | `constant-rank-submersions-and-regular-level-sets` | 21 | rank of a derivative, the constant-rank normal form, submersions and immersions, regular values, level sets and their tangent kernels, Lagrange multipliers in general |
| RC-3 | `convex-and-semicontinuous-functions-on-rn` | 19 | convex functions of several variables, continuity on the interior, supporting hyperplanes, the Hessian criterion, lower and upper semicontinuity, the subdifferential |
| RC-4 | `areas-of-elementary-plane-figures` | 23 | translation invariance of Jordan content, triangles, parallelograms, polygons, base times height, and the reconciliation of graph area with Jordan content |
| RC-5 | `volumes-of-elementary-solids-and-solids-of-revolution` | 24 | solids between graphs over a Jordan base, volume as a double integral, solids of revolution, the cone, the cylinder, the ball, the $n$-ball |
| RC-6 | `improper-and-parameter-dependent-multiple-integrals` | 22 | exhaustions, absolutely convergent improper multiple integrals, differentiation and continuity under the integral sign, the Gaussian integral |
| RC-7 | `the-gamma-and-beta-functions` | 23 | $\Gamma$ by the Euler integral, the functional equation, log-convexity and Bohr–Mollerup, the Beta integral, $\Gamma(1/2)=\sqrt\pi$, the reflection formula, Stirling |
| RC-8 | `regular-surfaces-and-surface-integrals` | 23 | regular parametrised surfaces, reparametrisation, the Gram determinant, surface area, scalar surface integrals, orientation, flux |
| RC-9 | `the-divergence-theorem-and-classical-stokes` | 24 | divergence and curl, the divergence theorem on a proved elementary class, oriented boundaries, classical Stokes, Green as a planar corollary |
| RC-10 | `picard-lindelof-and-first-order-odes` | 22 | the IVP and its integral equation, Picard–Lindelöf, Picard iterates with error bounds, Grönwall, continuous dependence, maximal continuation |
| RC-11 | `the-gauge-integral-and-cousins-lemma` | 22 | Cousin's lemma, gauges and $\delta$-fine partitions, the Henstock–Kurzweil integral, every derivative is integrable, the unconditional FTC, Hake's theorem |
| RC-12 | `trigonometric-and-oscillatory-examples-in-one-variable` | 23 | the classical forms the trig-free substitutes stood in for, the Weierstrass function, $\sin(nx)$, the $\sin(1/x)$ family, and what each one refutes |
| RC-13 | `trigonometric-and-oscillatory-examples-in-several-variables` | 24 | polar and spherical oscillators, direction-dependent limits, the mean value witness, non-uniform convergence in several variables |
| RC-14 | `fourier-series-and-fejer-summation` | 24 | periodic functions, Fourier coefficients, Dirichlet and Fejér kernels, localisation, pointwise convergence under regularity, uniform Cesàro convergence **(seam: §4.3)** |

A B companion rides with every A page at level $+1$.

**What this discharges.** `research/ra-enrich-01-PLAN.md` Table B in full (its four
proposals become RC-2, RC-9 + RC-8, RC-10, RC-14); the undelivered half of
`plan-realanalysis-pages.md` RA-36 and RA-38; the D-TRIG debt recorded in
`rem-classical-oscillator-is-sine-of-one-over-x`; and the geometric material
(triangle, parallelogram, solid of revolution, ball) that the `circle-area`
rabbit-hole series needs and cannot currently link.

---

## 1. Verified from disk, 2026-08-19

Everything in this section was read off `items/`, `library/` and
`research/plan-spec.json`, not from any scaffold's prose.

**The track is spec-complete.** `real-analysis` has **80 built pages** at orders
14–242. The only real-analysis entries in `plan-spec.json` with an empty `items[]`
are three B companions whose spec lists were never back-filled
(`roots-and-rational-powers-examples`, `countability-and-uncountability-examples`,
`sequences-and-limits-examples`); all three exist on disk with items. So the track
was closed at order 242, not abandoned.

**The multivariable band as built.**

| page | A items | B items |
|---|---|---|
| `rn-as-a-normed-space` | 22 | 12 |
| `the-total-derivative` | 17 | 6 |
| `mixed-partials-taylor-and-extrema` | 21 | 9 |
| `inverse-and-implicit-function-theorems` | **5** | **3** |
| `the-riemann-integral-in-rn-and-jordan-content` | 30 | 8 |
| `fubini-and-change-of-variables` | 25 | 13 |
| `the-fundamental-theorems-of-calculus` | 10 | 6 |
| `line-integrals-and-the-gradient-theorem` | 31 | 9 |

The counterexample stock is genuinely good: `cex-partial-derivatives-without-continuity`,
`cex-straight-line-continuity-tests-do-not-imply-continuity`,
`cex-directional-derivatives-without-total-differentiability`,
`cex-zero-directional-derivatives-without-continuity`,
`cex-peano-unequal-mixed-partials`, `cex-complex-squaring-is-not-globally-invertible`,
`cex-invertible-derivative-without-c-one-local-inverse`,
`cex-compact-set-without-jordan-content`, `cex-bounded-open-set-with-nonnull-boundary`,
`cex-riemann-integrable-function-with-a-nonintegrable-section`. Nothing below
duplicates these.

**Absences confirmed by exhaustive search of all 5384 items.**

| absent | evidence |
|---|---|
| surface integrals, flux, divergence theorem, classical Stokes | the only corpus hit for "Stokes" is `rem-de-rham-and-stokes-on-manifolds`, a ‡ remark |
| the rank theorem, submersions, immersions, regular level sets | no item; RA-36 specified them and they were not built |
| general Lagrange multipliers | only `cor-lagrange-multiplier-rule-for-graph-constraints`, restricted to $y=\psi(x)$ |
| the $n$-ball volume, the Gaussian integral, Gabriel's horn, two unequal iterated integrals, improper multiple integrals | all specified in RA-38, none built |
| the Gamma function, the Beta function, Stirling's formula | zero hits |
| ordinary differential equations | "Picard" occurs twice, both about Picard iteration producing the exponential |
| the gauge / Henstock–Kurzweil integral, Cousin's lemma | zero hits |
| convex functions of several variables, semicontinuity in $\mathbb{R}^n$ | `def-convex-subset-of-euclidean-space` exists only as a hypothesis carrier |
| the Weierstrass nowhere-differentiable function | the corpus witness is `thm-takagi-function-is-continuous-and-nowhere-differentiable`, which is trig-free by design |
| $\sin(nx)$ as a counterexample | zero hits |
| any trigonometric example in several variables | scope denial 6 of `plan-realanalysis-pages.md` dropped the one that was planned |
| **any `fs-` item on any of the four multivariable B pages** | 0 across `the-total-derivative-examples`, `mixed-partials-taylor-and-extrema-examples`, `inverse-and-implicit-function-theorems-examples`, `the-riemann-integral-in-rn-and-jordan-content-examples`, `fubini-and-change-of-variables-examples` |

That last row is the measurable form of the owner's 2026-08-19 instruction. The
single-variable half of the track carries dozens of `fs-` items
(`fs-continuity-implies-uniform-continuity`,
`fs-intermediate-value-property-implies-continuity`,
`fs-bounded-implies-riemann-integrable`, and so on). The multivariable half
carries none. `cex-partial-derivatives-without-continuity` exists, but there is
no `fs-` stating the converse a reader would actually assert.

**Not absent, contrary to a first search.** The Weierstrass *approximation*
theorem is present (`cor-weierstrass-approximation-on-a-closed-interval`, via
Bernstein polynomials), as are real Stone–Weierstrass, Arzelà–Ascoli, Cesàro and
Abel summability, the irrationality of $e$, and a thorough single-variable
improper-integral theory. None of these is re-minted below.

---

## 2. Design rules for this block

**R1. Every pair is new. No published page changes.** Owner, 2026-08-19.

**R2. Every B page carries an implication-direction ledger.** Owner, 2026-08-19:
*"There are many subtleties in real analysis such as 'differentiable implies
partial derivatives exist but not vice versa'; these must be included in the
library either as false statements or as counterexamples."*

Operationally: for every theorem of the form $P \Rightarrow Q$ stated on an A
page, its B page must contain **either** a proof that $Q \Rightarrow P$ **or** an
`fs-` stating $Q \Rightarrow P$ as the false claim with a `cex-` refuting it. The
`fs-` form is preferred where a reader would plausibly assert the converse; a bare
`cex-` is enough where nobody would. Each pair below lists its ledger explicitly.
A pair whose ledger is empty is a pair whose A page states no implication, which
has not happened yet.

**R3. Two independent full-text treatments per pair**, at least one a textbook or
complete lecture-note set with a harvestable table of contents (CLAUDE.md
§"Source depth"). §6 gives the register and the per-pair backing.

**R4. Seam discipline.** `subjects-01-SEAMS.md` §4 assigns differential forms,
the exterior derivative, orientation of manifolds, integration on manifolds and
manifold Stokes to `differential-geometry`; Fourier series and the Fourier
transform to `functional-analysis`; everything Lebesgue to `measure-theory`. RC-8
and RC-9 stay strictly inside classical Euclidean vector calculus and mint no
form, no manifold and no exterior derivative. RC-14 is flagged for a ruling in
§4.3 rather than written on my own authority.

**R5. Self-contained scope.** No pair rests on a result the library has not
established, and no pair introduces a new `proved_here: false` dependency.

---

## 3. The pairs

Each entry gives: the A page's `requires`, its dependency level, the definitions
and theorems it carries, its B companion, and its implication-direction ledger.

### Block I — multivariable differential calculus completed

#### RC-1 The Inverse Function Theorem Completed — level 20

`requires`: `inverse-and-implicit-function-theorems`, `the-topology-of-euclidean-space`, `mixed-partials-taylor-and-extrema`.

The published page carries five items: `def-c-one-map-and-local-inverse`,
`def-invertible-euclidean-linear-map`,
`lem-newton-contraction-near-an-invertible-derivative`,
`thm-euclidean-inverse-function-theorem`,
`thm-euclidean-implicit-function-theorem`. RA-36 specified four further
consequences that were never built. This pair supplies them and the standard
regularity and globality theory around them.

**DEFS.** $C^k$ diffeomorphism; the regular locus $\{a : Df(a) \text{ invertible}\}$; proper map; the Jacobian sign and local orientation behaviour.

**THMS.** The regular locus is open. The derivative of a local inverse is
$(Df(a))^{-1}$ at $f(a)$, so a local inverse of a $C^k$ map is $C^k$ (bootstrapping
$k$ from $1$). A $C^1$ map with everywhere-invertible derivative is an open map.
An injective $C^1$ map with everywhere-invertible derivative on an open set is a
$C^1$ diffeomorphism onto its image. The implicit function theorem with
parameters, with its derivative formula. A $C^1$ map that is proper and has
everywhere-invertible derivative on a connected codomain is a covering, hence a
diffeomorphism when the codomain is simply connected (stated with the topology
this library has, or narrowed if the covering-space citation is judged too far).
**Constancy on connected open sets:** a totally differentiable map with zero
derivative on a connected open $U \subseteq \mathbb{R}^m$ is constant, proved from
`thm-open-connected-subsets-of-rn-are-polygonally-connected` — the statement
`plan-realanalysis-pages.md` RA-34 deferred and never returned to.

**B page.** `ex-polar-coordinates-as-a-local-diffeomorphism`;
`ex-f-of-x-y-equals-x-xy-is-a-diffeomorphism-off-a-line`;
`cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` ($x \mapsto x^3$);
`cex-invertible-derivative-everywhere-without-global-injectivity` — **not**
re-minted, the published `cex-complex-squaring-is-not-globally-invertible` is
cited instead, and the B page carries only the `fs-` that names the false
converse; `rem-the-jacobian-conjecture` as a recorded open problem.

**Ledger.**
- `fs-invertible-derivative-at-a-point-gives-a-local-inverse` — FALSE without $C^1$; refuted by the published `cex-invertible-derivative-without-c-one-local-inverse`.
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — FALSE; refuted by the published complex-squaring counterexample.
- `fs-a-c-one-bijection-has-a-c-one-inverse` — FALSE; $x\mapsto x^3$.
- `fs-zero-derivative-on-an-open-set-forces-constancy` — FALSE without connectedness; the published `cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz` is adjacent but distinct, so a fresh two-component witness is needed.

#### RC-2 Constant Rank, Submersions, Immersions and Regular Level Sets — level 21

`requires`: RC-1, `the-topology-of-euclidean-space`, `linear-maps-rank-nullity-and-quotient-spaces`.

**DEFS.** Rank of $Df(a)$; constant rank on a set; submersion; immersion;
regular point, critical point, regular value, critical value; the level set
$f^{-1}(c)$; the tangent space of a level set as $\ker Df(a)$.

**THMS.** Rank is lower semicontinuous, so the maximal-rank locus is open. The
constant-rank normal form in Euclidean coordinates. Canonical submersion and
canonical immersion theorems as its two extreme cases. The regular level set
theorem: near a regular point, $f^{-1}(c)$ is a $C^k$ graph over $\ker Df(a)$, and
its tangent kernel is $\ker Df(a)$. Lagrange multipliers at a regular constrained
extremum, in general and not only for a graph constraint, obtained by applying the
level-set theorem to `thm-parametrized-constraint-necessary-condition`.

**B page.** Spheres and ellipsoids as regular level sets; the graph of a $C^1$ map;
a surface of revolution; the cone $x^2+y^2=z^2$ at the apex as a rank drop; the
cusp $y^2 = x^3$; a map of nonconstant rank on every neighbourhood of a point;
Lagrange multipliers computed on a sphere constraint.

**Ledger.**
- `fs-every-level-set-of-a-smooth-map-is-a-graph` — FALSE at a critical point; the cone.
- `fs-a-critical-value-has-a-singular-level-set` — FALSE; a critical point may sit over a value whose level set is still smooth.
- `fs-constant-rank-is-implied-by-continuity-of-the-derivative` — FALSE.
- `fs-the-multiplier-rule-needs-no-regularity` — the published `cex-lagrange-multiplier-rule-needs-a-regular-constraint` is cited, not re-minted.

#### RC-3 Convex and Semicontinuous Functions on $\mathbb{R}^n$ — level 19

`requires`: `convexity`, `mixed-partials-taylor-and-extrema`, `the-topology-of-euclidean-space`.

`convexity` (order 157) is about convex functions on an interval.
`def-convex-subset-of-euclidean-space` exists at order 229 only as a hypothesis
carrier for the mean value inequality. Nothing joins them.

**DEFS.** Convex function on a convex subset of $\mathbb{R}^n$; strictly convex;
epigraph; lower and upper semicontinuity; the subdifferential $\partial f(a)$;
supporting hyperplane.

**THMS.** A convex function on an open convex set is continuous, and locally
Lipschitz. Convexity is equivalent to convexity of the epigraph. A convex function
has a supporting hyperplane at every interior point, so $\partial f(a)$ is nonempty
there. For $C^1$ maps, convexity is equivalent to the gradient inequality; for
$C^2$ maps, to positive semidefiniteness of the Hessian. Jensen's inequality in
$\mathbb{R}^n$. A lower semicontinuous function on a compact set attains its
infimum. Semicontinuity is equivalent to closedness of the epigraph / openness of
strict sublevel sets.

**B page.** $\lVert x \rVert$ and $\lVert x \rVert^2$; $\max$ of finitely many affine
functions; a convex function on a closed convex set discontinuous at a boundary
point; $x \mapsto -\sqrt{1-\lVert x\rVert^2}$; a lower semicontinuous function with no
maximum; the indicator of an open set as lower semicontinuous and of a closed set
as upper semicontinuous; a convex nondifferentiable function with a
multi-point subdifferential.

**Ledger.**
- `fs-a-convex-function-on-a-convex-set-is-continuous` — FALSE on a set that is not open.
- `fs-a-convex-function-is-differentiable` — FALSE; $\lVert x\rVert$ at $0$.
- `fs-semicontinuity-implies-continuity-on-a-compact-set` — FALSE.
- `fs-a-positive-semidefinite-hessian-gives-strict-convexity` — FALSE; $x^4$ has a vanishing second derivative at a strict minimum, and its several-variable analogue.

### Block II — the geometry of area and volume

This block is what the `circle-area` rabbit-hole series needs. Parts 1–5 of that
series are published and link only to items that exist; the geometric sequel
cannot be written until RC-4 and RC-5 are.

#### RC-4 Areas of Elementary Plane Figures — level 23

`requires`: `fubini-and-change-of-variables`, `pi-the-equivalent-characterizations`, `inner-product-spaces-and-orthogonality`, `determinants-of-matrices-over-a-commutative-ring`.

**DEFS.** Translation of a set; the parallelogram $P(p;v,w)$ and the triangle
$T(A,B,C)$ in $\mathbb{R}^2$; base and height of a side; a simple polygon and its
triangulation.

**THMS.** Translating a bounded set changes neither its Jordan inner nor its
Jordan outer content, so Jordan measurability and content are translation
invariant. The Jordan content of a region between two continuous graphs equals the
Riemann area between them in the sense of
`def-riemann-area-between-continuous-graphs`, so the two notions of plane area the
library carries agree wherever both are defined; in particular a closed disc of
radius $r$ has Jordan content $\pi r^2$. For $v \ne 0$ in $\mathbb{R}^2$ the
distance from $w$ to the line $\mathbb{R}v$ is attained and
$\lVert v\rVert_2 \cdot \operatorname{dist}(w,\mathbb{R}v) = \lvert\det[v\ w]\rvert$.
A parallelogram is Jordan measurable with content $\lvert\det[v\ w]\rvert$, which for
$v\ne0$ is its base times its height. A triangle is Jordan measurable with content
$\tfrac12\lvert\det[B-A\ \ C-A]\rvert$, which for $A\ne B$ is half its base times its
height, and vanishes exactly when the vertices are collinear. A simple polygon
admits a triangulation and its content is the sum of its triangles' contents.

The disc reconciliation is load-bearing beyond this page: `thm-disc-area-is-pi-r-squared`
is stated in the local graph-area convention and has never been connected to
Jordan content, so no item in the corpus currently knows that a disc *has* a Jordan
content at all.

**B page.** A triangle with explicit vertices, area by both formulas; a
parallelogram from a matrix; a degenerate triangle with collinear vertices;
the unit disc's content computed; a right triangle recovering the published
`ex-triangle-has-jordan-content-one-half`.

**Ledger.**
- `fs-jordan-content-is-invariant-under-every-bijection-of-the-plane` — FALSE; a linear map scales by $\lvert\det\rvert$.
- `fs-a-bounded-plane-set-has-an-area` — FALSE; the published `cex-rational-points-in-unit-square-have-no-jordan-content` is cited.
- `fs-base-times-height-needs-a-right-angle` — FALSE; the height is a distance to a line, not a side length.

#### RC-5 Volumes of Elementary Solids and Solids of Revolution — level 24

`requires`: RC-4, `the-topology-of-euclidean-space`.

**DEFS.** The solid between two continuous graphs over a compact Jordan base in
$\mathbb{R}^m$; the solid of revolution of a nonnegative continuous $f$ about a
coordinate axis; the closed Euclidean ball as a set of $\mathbb{R}^3$ and of
$\mathbb{R}^n$.

**THMS.** If $A \subseteq \mathbb{R}^m$ has content zero then $A \times [c,d]$ has
content zero in $\mathbb{R}^{m+1}$. The graph of a continuous real function on a
**compact** subset of $\mathbb{R}^m$ has content zero in $\mathbb{R}^{m+1}$ — the
published `thm-graphs-of-continuous-functions-have-content-zero` requires a closed
nondegenerate rectangle, which a Jordan base need not be. **The main theorem:**
for $D \subseteq \mathbb{R}^m$ compact Jordan and continuous $\alpha \le \beta$ on
$D$, the solid $K = \{(u,t) : u \in D,\ \alpha(u) \le t \le \beta(u)\}$ is compact and
Jordan measurable, and every continuous $H$ on $K$ satisfies
$\int_K H = \int_D \bigl(\int_{\alpha(u)}^{\beta(u)} H(u,t)\,dt\bigr)du$; in particular
$\operatorname{cont}(K) = \int_D (\beta-\alpha)$. **The school formula, proved:** at
$m=2$ with $\alpha=0$, the volume under the graph of a continuous $g \ge 0$ over a
compact Jordan $D$ is the double integral $\iint_D g$. **Solids of revolution:** the
solid generated by revolving the region under $f$ about the axis is compact Jordan
with content $\pi\int_a^b f(x)^2\,dx$, obtained by iterating the main theorem twice
and evaluating the inner disc integral by `thm-disc-area-is-pi-r-squared`.
**Consequences:** the cylinder $\pi R^2 h$; the cone $\tfrac13\pi R^2 h$; the closed
ball of radius $r$ in $\mathbb{R}^3$ has content $\tfrac43\pi r^3$; the $n$-ball
volume recursion $V_n(r) = V_{n-1}\!\int \dots$ with the closed form via RC-7's
$\Gamma$, delivering the volume RA-38 specified and never built.

**B page.** The cone and the cylinder computed; a torus by revolution; the ball
computed both by the disc method and by Cavalieri; **Gabriel's horn**, finite
volume with infinite lateral surface (the surface half deferred to RC-8's page and
cross-linked); a solid of revolution about the $y$-axis by shells; the $n$-ball
volumes for $n \le 5$ tabulated from the recursion.

**Ledger.**
- `fs-every-compact-solid-has-a-volume` — FALSE; the published `cex-compact-set-without-jordan-content` crossed with an interval.
- `fs-equal-cross-sections-force-congruence` — FALSE; Cavalieri gives equal volume, not congruence. The published `cor-cavalieri-principle-for-jordan-content` is cited.
- `fs-a-solid-of-revolution-of-a-bounded-region-has-finite-surface-area` — FALSE; Gabriel's horn.
- `fs-the-volume-under-a-graph-is-the-iterated-integral-for-every-integrable-g` — FALSE without a Jordan base or without continuity; the published `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` is cited.

#### RC-6 Improper and Parameter-Dependent Multiple Integrals — level 22

`requires`: `fubini-and-change-of-variables`, `improper-integrals`, `uniform-convergence-of-functions`, `the-fundamental-theorems-of-calculus`.

**DEFS.** An exhaustion of a bounded open Jordan set and of an unbounded open set
by compact Jordan sets; the improper multiple integral by exhaustion; absolute
convergence; a parameter-dependent integral $F(t)=\int_D f(x,t)\,dx$.

**THMS.** The exhaustion limit is independent of the exhaustion for a nonnegative
integrand, and for an absolutely convergent one. Absolute convergence is necessary
in dimension $\ge 2$: unlike the one-variable case there is no conditional theory,
because there is no canonical order of approach. Continuity of $F$ under local
uniform domination; differentiation under the integral sign on a non-compact
domain under a uniform bound on $\partial_t f$; the multivariable Leibniz rule,
extending the published
`thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` off the
compact rectangle. **The Gaussian integral** $\int_{-\infty}^{\infty} e^{-x^2}dx=\sqrt\pi$,
by the polar-coordinate evaluation of $\bigl(\int e^{-x^2}\bigr)^2$ over an exhaustion by
discs, using the published `ex-polar-change-of-variables-on-an-annular-sector`.

**B page.** $\iint (x^2-y^2)/(x^2+y^2)^2$ with iterated values $\pi/4$ and $-\pi/4$ —
the canonical two-unequal-iterated-integrals witness RA-38 specified; a
nonnegative $f$ with both iterated integrals $0$ and no double integral;
$\int_0^\infty \sin x / x$ existing improperly but not absolutely, and its
failure to have a two-dimensional analogue; Leibniz's rule failing without
domination; the Gaussian computed.

**Ledger.**
- `fs-both-iterated-integrals-existing-and-equal-gives-integrability` — FALSE.
- `fs-an-improper-multiple-integral-converges-conditionally` — FALSE; the exhaustion limit exists iff the integral converges absolutely.
- `fs-differentiation-under-the-integral-needs-only-pointwise-differentiability` — FALSE.

### Block III — classical special functions

#### RC-7 The Gamma and Beta Functions — level 23

`requires`: `improper-integrals`, `the-logarithm-and-general-powers`, `power-series-and-real-analytic-functions`, `convexity`, RC-6.

Zero items in the corpus mention $\Gamma$. The Wallis product is published, which
is one of the two classical routes into $\Gamma(1/2)$.

**DEFS.** $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}dt$ for $s>0$; the Beta integral
$B(p,q)=\int_0^1 t^{p-1}(1-t)^{q-1}dt$; log-convexity.

**THMS.** The Euler integral converges for $s>0$ and diverges for $s \le 0$.
$\Gamma(s+1)=s\Gamma(s)$ and $\Gamma(n+1)=n!$. $\Gamma$ is $C^\infty$ on $(0,\infty)$
by differentiation under the integral sign (RC-6), and log-convex.
**Bohr–Mollerup:** $\Gamma$ is the unique positive log-convex solution of the
functional equation normalised by $\Gamma(1)=1$. $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$,
proved by Fubini on the first quadrant with the substitution the change-of-variables
theorem licenses. $\Gamma(1/2)=\sqrt\pi$, from the Gaussian integral and independently
from the Wallis product, with both routes given because the library has both.
Euler's reflection formula $\Gamma(s)\Gamma(1-s)=\pi/\sin(\pi s)$ on $(0,1)$.
**Stirling's formula** $n! \sim \sqrt{2\pi n}\,(n/e)^n$, and the volume of the
$n$-ball in closed form, closing RC-5's recursion.

**B page.** $\Gamma(1),\Gamma(2),\Gamma(3),\Gamma(1/2),\Gamma(3/2)$ computed; $B(1,1)$
and $B(2,3)$; the $n$-ball volumes for $n\le 8$; the volume of the $n$-ball tending
to $0$; a log-convex function that is not convex; a non-log-convex solution of the
same functional equation, showing Bohr–Mollerup's hypothesis is not decoration.

**Ledger.**
- `fs-the-functional-equation-determines-gamma` — FALSE without log-convexity; a periodic perturbation $\Gamma(s)e^{\sin(2\pi s)}$ satisfies it.
- `fs-gamma-extends-to-the-nonpositive-integers` — FALSE.
- `fs-the-unit-n-ball-volume-increases-with-dimension` — FALSE; it peaks at $n=5$ and tends to $0$.

### Block IV — classical vector calculus

#### RC-8 Regular Surfaces and Surface Integrals — level 23

`requires`: `line-integrals-and-the-gradient-theorem`, RC-2, `arc-length-and-rectifiable-curves`.

Mints no differential form, no manifold and no exterior derivative: those are
`differential-geometry`'s by SEAMS §4. This pair is the classical Euclidean theory
only, exactly as `research/ra-enrich-01-PLAN.md` Table B row 4 scoped it.

**DEFS.** A regular parametrised surface patch $\varphi : D \to \mathbb{R}^3$ with
$D$ compact Jordan and $\partial_u\varphi \times \partial_v\varphi \ne 0$; oriented
reparametrisation; the first fundamental form and the Gram determinant; surface
area; the scalar surface integral; a unit normal field and an orientation; flux.

**THMS.** The area element is $\lVert\partial_u\varphi\times\partial_v\varphi\rVert
=\sqrt{\det G}$, and surface area and scalar surface integrals are invariant under
orientation-preserving and orientation-reversing reparametrisation alike. Flux
changes sign under an orientation reversal. A regular level set (RC-2) is locally a
regular patch, so the sphere, the cylinder and the torus are covered by finitely
many patches with content-zero overlaps, and the patch integrals add. Surface area
of a graph $z=g(x,y)$ is $\iint_D\sqrt{1+\lVert\nabla g\rVert^2}$. The surface of
revolution formula $2\pi\int f\sqrt{1+f'^2}$, and the lateral-surface half of
Gabriel's horn.

**B page.** The sphere's area $4\pi r^2$; the cylinder; the torus; a graph patch;
the lateral surface of a cone; a degenerate parametrisation whose image is a curve;
the same surface under two parametrisations with opposite orientation; **Schwarz's
lantern**, the inscribed-polyhedron sequence whose areas do not converge to the
cylinder's area, which is why surface area is *not* defined by inscribed polyhedra
the way arc length is defined by inscribed polygons.

**Ledger.**
- `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` — FALSE; Schwarz's lantern. This is the surface analogue of the definition the library uses for arc length, and its failure is the reason the definitions differ.
- `fs-every-continuous-parametrised-surface-has-an-area` — FALSE without regularity.
- `fs-flux-is-independent-of-the-parametrisation` — FALSE; only up to orientation.

#### RC-9 The Divergence Theorem and Classical Stokes — level 24

`requires`: RC-8, `fubini-and-change-of-variables`.

**DEFS.** Divergence and curl of a $C^1$ field on an open subset of $\mathbb{R}^3$;
an elementary solid region (simple in each of the three coordinate directions) and
a finite gluing of them; the outward unit normal; the induced boundary orientation
of an oriented surface patch.

**THMS.** The divergence theorem $\iiint_E \operatorname{div}F = \iint_{\partial E}
F\cdot n$ on a finite gluing of elementary solid regions, proved coordinate
direction by coordinate direction exactly as the published Green's theorem is
proved on elementary plane regions, with the shared-face cancellation lemma the
analogue of `lem-green-boundary-cancellation-under-finite-gluing`. Classical
Stokes $\iint_S (\operatorname{curl}F)\cdot n = \oint_{\partial S} F \cdot dr$ for a
$C^2$ patch over an elementary plane region, by pulling back to the parameter
domain and applying the published `thm-greens-theorem-for-finite-unions-of-elementary-regions`.
Green's circulation and flux forms as planar corollaries.
$\operatorname{curl}\circ\operatorname{grad}=0$ and $\operatorname{div}\circ\operatorname{curl}=0$.
A field is conservative on a star-shaped domain iff its curl vanishes, recovering
the published Poincaré lemma in the language of curl.
`rem-what-classical-stokes-does-not-cover`, naming the Jordan-domain limitation
that `rem-greens-theorem-jordan-domain-limitation` already records for Green, and
pointing at the manifold theory as `differential-geometry`'s.

**B page.** Flux of the inverse-square field through a sphere not containing the
origin, and through one containing it; the divergence theorem computing the ball's
volume from its boundary; Stokes on two different surfaces spanning one curve;
the vortex field's circulation, cross-linking the published
`cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`; a
non-orientable band excluded by hypothesis.

**Ledger.**
- `fs-a-closed-surface-bounds-a-region-to-which-the-divergence-theorem-applies` — FALSE in the generality stated; the elementary-region hypothesis is not removable here.
- `fs-vanishing-curl-implies-conservative-on-every-domain` — the published `fs-every-closed-c1-field-on-a-connected-open-set-is-exact` is cited, not re-minted.
- `fs-stokes-needs-the-surface-to-be-a-graph` — FALSE.
- `fs-every-surface-is-orientable` — FALSE; the Möbius band, stated with the classical patch language only.

### Block V — differential equations and the sharp integral

#### RC-10 Picard–Lindelöf, Grönwall and First-Order ODEs — level 22

`requires`: `the-fundamental-theorems-of-calculus`, `completeness-and-uniform-continuity`, `uniform-convergence-of-functions`, `approximation-and-compactness-in-ck`.

**DEFS.** The initial value problem; a solution on an interval; local Lipschitz
continuity in the dependent variable; the Picard iterates; a maximal solution.

**THMS.** The IVP is equivalent to the integral equation. **Picard–Lindelöf:** a
continuous $F$ locally Lipschitz in $y$ gives a unique local solution, by the
published `thm-banach-fixed-point` on $C(I)$. Quantitative error bounds for the
iterates. Uniqueness on overlapping intervals, hence a maximal solution.
**Grönwall's inequality** and continuous dependence on the initial value and on
parameters. The continuation criterion: a maximal solution either exists for all
time or leaves every compact set. The linear equation by integrating factor.
**Peano's existence theorem** from Arzelà–Ascoli, giving existence without
uniqueness under continuity alone — the library has `thm-arzela-ascoli-for-real-ck`
and this is its natural consumer.

**B page.** $y'=y$ recovering the exponential, cross-linking the published Picard
iteration item; $y'=y^2$ blowing up in finite time; $y'=2\sqrt{|y|}$ with a
continuum of solutions through the origin; a discontinuous right-hand side with no
solution; an equation whose maximal interval is strictly smaller than the domain
of $F$.

**Ledger.**
- `fs-continuity-of-the-right-hand-side-gives-uniqueness` — FALSE; $y'=2\sqrt{|y|}$.
- `fs-a-solution-exists-on-the-whole-interval-where-f-is-defined` — FALSE; $y'=y^2$.
- `fs-lipschitz-in-y-is-necessary-for-uniqueness` — FALSE; it is sufficient, not necessary.

#### RC-11 The Gauge Integral and Cousin's Lemma — level 22

`requires`: `the-fundamental-theorems-of-calculus`, `equivalent-forms-of-completeness`, `bounded-variation-and-riemann-stieltjes`.

Zero corpus hits for gauge, Cousin, Henstock or Kurzweil.
`plan-realanalysis-pages.md` deferred Cousin's lemma on the ground that no retained
result consumed it; this pair is the result that consumes it. It matters because it
gives the **sharpest fundamental theorem of calculus available without measure
theory**, and the library's `the-fundamental-theorems-of-calculus` page currently
defers that sharpness to a measure track that does not exist yet.

**DEFS.** A gauge $\delta$ on $[a,b]$; a $\delta$-fine tagged partition; the
Henstock–Kurzweil integral.

**THMS.** **Cousin's lemma:** every gauge admits a $\delta$-fine tagged partition,
proved by bisection from completeness. The HK integral is well defined and linear,
and agrees with the Riemann integral on every Riemann integrable function. **Every
derivative is HK integrable and the unconditional FTC holds:** if $F$ is
differentiable on $[a,b]$ then $F'$ is HK integrable with $\int_a^b F' = F(b)-F(a)$,
with no integrability hypothesis at all. Hake's theorem: the HK integral has no
proper improper extension. The Cauchy criterion and Saks–Henstock lemma.

**B page.** Volterra's function, differentiable with bounded derivative that is not
Riemann integrable, integrated by HK; $\int_0^\infty \sin x/x$ as an HK integral;
$F(x)=x^2\sin(1/x^2)$, whose derivative is unbounded and not Riemann integrable,
with HK evaluating it; Cousin's lemma used to reprove Heine–Borel on $[a,b]$.

**Ledger.**
- `fs-every-derivative-is-riemann-integrable` — FALSE; Volterra. The library already has a Volterra remark; this states the false converse as such.
- `fs-the-hk-integral-strictly-extends-the-lebesgue-integral-in-both-directions` — FALSE; the correct relation is stated, and the Lebesgue half is left to `measure-theory`.
- `fs-an-hk-integrable-function-is-bounded` — FALSE.

### Block VI — the trigonometric debt

`plan-realanalysis-pages.md` decision D-TRIG settled on 2026-07-25 that every page
below `sine-cosine-and-the-definition-of-pi` states a **trig-free** version of each
classical example, with the classical form restated later. The substitutes were
built — `ex-piecewise-polynomial-periodic-oscillator`, `ex-distance-to-the-integers`,
`ex-distance-to-the-integers-is-1-lipschitz`, `cex-psi-of-one-over-x-has-no-limit-at-zero`
— and `rem-classical-oscillator-is-sine-of-one-over-x` records the debt in so many
words. **It was never discharged by a page that owns the job.** Some classical
forms landed later by accident; these two pairs make it deliberate.

#### RC-12 Trigonometric and Oscillatory Examples in One Variable — level 23

`requires`: `the-complex-exponential-and-eulers-formula`, `approximation-and-compactness-in-ck`, `darboux-lhopital-and-taylor`, `arc-length-and-rectifiable-curves`.

**B-heavy pair.** The A page carries only what the examples need as theorems:
the Weierstrass $M$-test applied to the classical series, the modulus estimates
$\lvert\sin x - \sin y\rvert \le \lvert x-y\rvert$, and a `rem-` ledger naming, for
each trig-free substitute already published, the classical form it stood in for
and the item that now supplies it.

**THMS.** **The Weierstrass function** $W(x)=\sum a^n\cos(b^n\pi x)$ with $0<a<1$,
$b$ an odd integer and $ab>1+3\pi/2$: continuous everywhere, differentiable nowhere.
The library's present witness is the trig-free Takagi function; this is the
original. The classical oscillator family: $\sin(1/x)$ has no limit at $0$;
$x\sin(1/x)$ is continuous but not of bounded variation; $x^2\sin(1/x)$ is
differentiable with discontinuous derivative; $x^2\sin(1/x^2)$ has an unbounded
non-integrable derivative. $\sin(nx)$ on $[0,\pi]$: pointwise divergent, not
equicontinuous, no uniformly convergent subsequence, and its integrals against a
fixed continuous function tend to zero.

**B page.** Each of the above as its own item, plus: the topologist's sine curve
as a connected non-path-connected set; the arc length of $\sin$ on a period as an
elliptic integral that is not elementary; $\tan$ as a homeomorphism
$(-\pi/2,\pi/2)\to\mathbb{R}$ showing boundedness and completeness are not
topological; $\sum \sin(n x)/n$ converging pointwise but not uniformly.

**Ledger.**
- `fs-a-continuous-function-is-differentiable-somewhere` — FALSE; Weierstrass, now in the classical form.
- `fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence` — FALSE; $\sin(nx)$. The published `cex-rudin-bounded-spikes-are-not-equicontinuous` is a different witness and is cited, not replaced.
- `fs-a-differentiable-function-has-a-continuous-derivative` — the published `ex-x-squared-sine-one-over-x` is cited; the `fs-` naming the false converse is new.
- `fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph` — FALSE; the published `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` is cited.

#### RC-13 Trigonometric and Oscillatory Examples in Several Variables — level 24

`requires`: RC-12, RC-1, `mixed-partials-taylor-and-extrema`, `fubini-and-change-of-variables`.

Scope denial 6 of `plan-realanalysis-pages.md` dropped $t\mapsto(\cos t,\sin t)$ as
the mean-value witness from `rn-as-a-normed-space` because trigonometry sits at a
higher order than that page. Every multivariable page sits higher still, and
nobody went back for it. There is currently **no trigonometric example anywhere in
the multivariable corpus**.

**THMS/EXAMPLES.** $(\cos t,\sin t)$ on $[0,2\pi]$ as the mean value witness: no
$\xi$ satisfies $f(2\pi)-f(0)=2\pi f'(\xi)$, the classical form of the published
$t\mapsto(t^2,t^3)$ substitute. $f(x,y)=\sin(xy)$ and its mixed partials.
$f(x,y)=xy\sin(1/(x^2+y^2))$: continuous, with partials existing everywhere and
unbounded near the origin. The polar oscillator $r^2\sin(1/r)$ and the angular
oscillator $\sin(2\theta)$ extended by $0$: the second has every directional
derivative at the origin and is discontinuous there in the classical form the
published `cex-zero-directional-derivatives-without-continuity` gives without
trigonometry. $\sin(nx)\sin(ny)$ as a doubly indexed non-equicontinuous family.
A surface of revolution generated by $\sin$, with its area and volume from RC-5 and
RC-8.

**B page.** Each of the above; plus the spherical-coordinate seam as a place where a
trigonometric parametrisation fails injectivity, cross-linking the published
`cex-polar-coordinates-are-not-globally-injective`.

**Ledger.**
- `fs-the-mean-value-equality-holds-for-vector-valued-maps` — the published `cex-mean-value-equality-fails-for-a-vector-valued-function` is cited; this pair adds the classical circular witness.
- `fs-existence-of-all-directional-derivatives-implies-continuity` — FALSE, now in classical form.
- `fs-continuity-along-every-smooth-curve-implies-continuity` — FALSE; a spiral approach witnesses it where straight lines do not, strengthening the published straight-line counterexample.

### Block VII — Fourier, subject to a seam ruling

#### RC-14 Fourier Series and Fejér Summation — level 24

`requires`: RC-12, `the-complex-exponential-and-eulers-formula`, `approximation-and-compactness-in-ck`, `bounded-variation-and-riemann-stieltjes`.

**Do not author this pair without the §4.3 ruling.** SEAMS §4 assigns "Fourier
series, Fourier transform on $L^1$/$L^2$/Schwartz, Plancherel, convolution" to
`functional-analysis`.

Scope if approved: periodic functions and trigonometric polynomials; Fourier
coefficients for Riemann integrable data and their uniqueness; orthogonality and
the finite Bessel inequality; the Dirichlet kernel and the localisation principle;
pointwise convergence under a Dini or Lipschitz condition, and the Dirichlet–Jordan
theorem for functions of bounded variation with the midpoint value at a jump; the
Fejér kernel as an approximate identity and uniform Cesàro convergence for
continuous periodic functions; density of trigonometric polynomials, recovering
Weierstrass approximation a second way; the Riemann–Lebesgue lemma for Riemann
integrable data. B page: square, sawtooth and absolute-value waves; Gibbs
behaviour; coefficient decay against smoothness; the du Bois-Reymond continuous
function with a divergent Fourier series, cross-linking the published
`rem-du-bois-reymond-divergent-fourier`; a continuous function whose Fourier series
converges pointwise but not uniformly. Everything $L^2$ — Parseval, Riesz–Fischer,
completeness of the trigonometric system — stays with `measure-theory` and
`functional-analysis`.

---

## 4. Decisions for the owner

### 4.1 The dead Leibman citation — needs a decision, not a repair

`https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf` returns **404**
and is **not recoverable**. The Wayback CDX index has **zero captures** of that
path under any host variant tried (`people.math.osu.edu`, `www.math.osu.edu`,
`math.osu.edu`, `www.math.ohio-state.edu`, with and without `~`); the archived
subdirectories of that homepage are `6211`, `C-analysis`, `H190`, `RadicalPi`,
`algebra`, `algebra1`, `algebra2`, `analysis`, `foundations`, `preprints`, and
`analysis2` was never crawled. Leibman's homepage is now reduced to a single
`Papers` link and the single-variable companion is 404 live as well.

**29 published items cite it**, essentially the whole Fubini and change-of-variables
block, including `thm-jordan-fubini-by-sections`,
`thm-linear-images-scale-jordan-content-by-absolute-determinant`,
`cor-cavalieri-principle-for-jordan-content`,
`thm-change-of-variables-for-compact-jordan-sets` and
`thm-fubini-over-a-region-between-continuous-graphs`.

`url-sweep --fail-on-dead` would fail on all 29. Under the recover-before-replace
rule recovery has been attempted and has failed, so a replacement is licensed. The
minimum-cost replacement is **Lebl, *Basic Analysis II*, §10.5 and §10.7**
(`https://www.jirka.org/ra/realanal2.pdf`), which matches the cited statements
term for term: Prop. 10.7.1 is $V(A(R))=\lvert\det A\rvert V(R)$ and Thm 10.7.2 is
change of variables for a compact Jordan set. Trench §7.1–7.3 is the second
independent match and uses the phrase "Jordan content" explicitly.

This is a change to published items' `sources.references`, which the 2026-08-19
rule puts outside my scope. Recorded here; not acted on.

### 4.2 The two ordering defects in the published multivariable band

Both are recorded in §5. Neither blocks this block, because every pair sits above
the topology stack. Both remain true of the published pages, and repairing them
would mean editing published pages. No action proposed.

### 4.3 Fourier series: real analysis or functional analysis?

SEAMS §4 gives Fourier series to `functional-analysis`, whose track is planned and
entirely unbuilt (50 empty pages). `ra-enrich-01-PLAN.md` proposed a classical
Riemann-integral Fourier pair for real analysis, written before that table existed.
Both readings are defensible: the classical Dirichlet/Fejér theory needs only the
Riemann integral and uniform convergence, while the $L^2$ theory genuinely belongs
with functional analysis.

Options: **(a)** approve RC-14 as scoped above, with the $L^2$ half explicitly
reserved; **(b)** drop RC-14 and let `functional-analysis` carry all of it, at the
cost of leaving the library with no Fourier series at all until that track is
built; **(c)** approve RC-14 and record an amendment to
`plan-functional-analysis-track.md` telling it to cite rather than re-mint the
classical pointwise theory. Recommendation: **(c)**.

### 4.4 Brouwer's fixed point theorem

Taylor and Sjamaar both derive it from Stokes, and RC-9 would make that route
available. The library proves the fundamental group of the circle
(`the-fundamental-group-of-the-circle`, order 295), which is the other classical
route and sits above this block. Brouwer is not assigned in SEAMS §4. Left out of
RC-9 pending a ruling; it is one item wherever it lands.

---

## 5. Amendments owed to other scaffolds

**5.1 To `plan-realanalysis-pages.md`, RA-34.** The deferral recorded there —
*"The stronger connected-open statement is deferred until connectedness and
Euclidean polygonal connectedness are legal dependencies"* — is now dischargeable.
`thm-open-connected-subsets-of-rn-are-polygonally-connected` is published on
`the-topology-of-euclidean-space`. RC-1 states the connected-open constancy
theorem on a new page rather than amending
`cor-zero-total-derivative-on-a-convex-open-set-is-constant`, which stays as it is.

**5.2 To `plan-realanalysis-pages.md`, RA-36 and RA-38.** Both scaffolds specified
material that was not built: RA-36's rank theorem and four IFT consequences, and
RA-38's $n$-ball volume, Gaussian integral, Gabriel's horn, unequal iterated
integrals and improper multiple integrals. RC-1, RC-2, RC-5 and RC-6 carry them on
new pages. The RA-36 and RA-38 entries should be annotated as partially delivered
so a future reader does not take the scaffold prose for the built page.

**5.3 To `plan-realanalysis-pages.md`, D-TRIG and scope denial 6.** RC-12 and
RC-13 discharge the debt. `rem-classical-oscillator-is-sine-of-one-over-x` and the
other substitute items are left untouched; the new pairs point at them, not the
other way round.

**5.4 To `plan-functional-analysis-track.md`.** If §4.3 is decided as (a) or (c),
that track cites RC-14's classical pointwise theory and re-mints none of it.

**5.5 To `plan-measure-theory-track.md`.** RC-11's gauge integral overlaps the
measure track's absolute-continuity and sharp-FTC material at exactly one point:
the relation between the HK and Lebesgue integrals. RC-11 states the classical half
and leaves the Lebesgue comparison to MT-19.

**5.6 To `plan-differential-geometry-track.md`.** RC-8 and RC-9 mint the classical
Euclidean surface integral, divergence theorem and Stokes theorem. The differential
geometry track should cite them as the classical special case and re-mint neither,
while retaining sole ownership of forms, the exterior derivative, orientation of
manifolds and the general Stokes theorem.

---

## 6. Scope denials

A dropped result is deferred, not deleted; each entry names what would license it.

1. **Differential forms, the exterior derivative, the general Stokes theorem.**
   `differential-geometry`'s by SEAMS §4. Licensed by: that track.
2. **Lebesgue measure and integration anywhere in this block.** `measure-theory`'s.
   RC-6 and RC-11 state their results for the Riemann and HK integrals only.
3. **$L^2$ Fourier theory, Parseval, Riesz–Fischer, Carleson.** `measure-theory` and
   `functional-analysis`. Licensed by: those tracks.
4. **Sard's theorem.** Taylor §3.4 and Guillemin L23 have it and RC-2's constant-rank
   machinery is most of the way there, but the measure-zero statement is cleanest
   with Lebesgue null sets in the codomain. The library's `def-null-and-content-zero-in-rn`
   would in fact suffice. Deferred as an addition to RC-2 rather than dropped;
   flagged for the authoring session to decide from the proof obligations.
5. **Morse's lemma.** Needs the constant-rank normal form (RC-2) plus a quadratic-form
   diagonalisation over a $C^\infty$ family. Licensed by: RC-2 plus
   `the-spectral-theorem-and-singular-value-decomposition`, which is planned and unbuilt.
6. **The Jacobian conjecture.** Recorded as an open problem on RC-1's B page, never
   asserted.
7. **The isoperimetric inequality.** Needs Fourier series (RC-14) and is therefore
   downstream of a seam ruling.
8. **Space-filling curves and Hahn–Mazurkiewicz.** Point-set topology, not this
   block. `DEFERRED.md` §0 already records them as in scope for the topology track.

---

## 7. Canonical-coverage harvest: the source register

Every source below was fetched and its mathematical body text read by the scouting
pass of 2026-08-19; every URL returned HTTP 200 on a final re-check. Licences are
recorded because several are free-to-read but not redistributable.

### 7.1 Primary sources for this block

| # | source | URL | licence | covers |
|---|---|---|---|---|
| S1 | J. Lebl, *Basic Analysis II*, v6.3 (2026), 217 pp | `https://www.jirka.org/ra/realanal2.pdf` | CC BY-NC-SA 4.0 and CC BY-SA 4.0 | multivariable derivative, IFT/implicit, Jordan sets, Fubini, Green, change of variables, Fourier series |
| S2 | W. F. Trench, *Introduction to Real Analysis*, 2.04 (2013), 586 pp | `https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF` | CC BY-NC-SA 3.0 | Ch. 5–7 multivariable and multiple integrals with Jordan content named explicitly; Ch. 8 metric spaces |
| S3 | M. Taylor, *Introduction to Analysis in Several Variables* (2018), 462 pp | `https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf` | author-hosted, no licence stated | content ("contented sets"), surfaces and surface integrals, Gauss/Green/Stokes, a second forms-based change of variables |
| S4 | J. Shurman, *Multivariable Calculus* (Reed), 523 pp | `https://www.stat.rice.edu/~dobelman/notes_papers/math/calculus.MV.pdf` | none stated; **university mirror, not the author's own host** | derivative via Bachmann–Landau, IFT/implicit, Lagrange multipliers proved analytically, volume zero, full standalone change-of-variables proof |
| S5 | L. Loomis and S. Sternberg, *Advanced Calculus*, rev. ed., 592 pp | `https://people.math.harvard.edu/~shlomo/docs/Advanced_Calculus.pdf` | "all rights reserved", hosted by the co-author | the differential in normed spaces, contented sets, change of variables, divergence theorem, Stokes |
| S6 | V. Guillemin, *MIT 18.101 Analysis II* (2005), 161 pp | `https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf` | CC BY-NC-SA 4.0 | multivariable Riemann integrability criteria, exhaustions, partitions of unity, **canonical submersion and immersion theorems**, Sard, Stokes |
| S7 | K. McGerty, *Multidimensional Analysis and Geometry* (Oxford Part A, TT23), 48 pp | `https://courses.maths.ox.ac.uk/pluginfile.php/29795/mod_resource/content/19/Lecture%20notes%20TT23.pdf` | none stated | IFT and implicit with proofs, submanifolds, tangent and normal spaces, Lagrange multipliers, a precise $o$/$O$ calculus |
| S8 | N. Wickramasekera / D. Chua, *Cambridge Part IB Analysis II* (2015), 79 pp | `https://dec41.user.srcf.net/notes/IB_M/analysis_ii.pdf` | student notes, not endorsed | operator norm, mean value inequalities, IFT via contraction, Lipschitz equivalence of norms |
| S9 | R. Sjamaar, *Manifolds and Differential Forms* (Cornell, 2017), 171 pp | `https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf` | personal-use copies permitted | orientation conventions, the outward-normal-first boundary rule, Gauss and Stokes, regular value theorem |
| S10 | D. Perkinson, *Differential Calculus of Several Variables* (Reed, 2008), 151 pp | `https://www.reed.edu/~davidp/211notes2013.pdf` | none stated | Appendix C states the inverse, implicit and **constant-rank** theorems as three equivalent forms (statements only, no proofs) |
| S11 | B. Thomson, J. Bruckner and A. Bruckner, *Elementary Real Analysis*, 2nd ed. (2008), 683 pp | `https://classicalrealanalysis.info/documents/TBB-AllChapters-Portrait.pdf` | free download, authors retain copyright | Cousin's property, Volterra's example, the generalized Riemann integral, Pompeiu's function, Dini derivates |
| S12 | A. Bruckner, J. Bruckner and B. Thomson, *Real Analysis*, 2nd ed. (2008), ~1100 pp | `https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf` | free download, authors retain copyright | §1.21 the generalized Riemann integral; Ch. 9–10 metric spaces and Baire category; §12.6 Banach–Tarski stated precisely |
| S13 | S. Axler, *Measure, Integration and Real Analysis* (2020, corrected 2026), 426 pp | `https://measure.axler.net/MIRA.pdf` | **CC BY-NC 4.0**, Springer open access | §5C the volume of the unit ball in $\mathbb{R}^n$, and equality of mixed partials via Fubini |
| S14 | A. Knapp, *Basic Real Analysis*, digital 2nd ed. (2016), 842 pp | `https://www.math.stonybrook.edu/~aknapp/download/b2-realanal-clickable.pdf` | free noncommercial use; **whole-page quotation only** | Ch. III arc length, line integrals, Green; Ch. IV a full ODE chapter with existence, uniqueness and parameter dependence |
| S15 | J. Hunter and B. Nachtergaele, *Applied Analysis* (2005) | `https://www.math.ucdavis.edu/~hunter/book/ch3.pdf` and `ch2.pdf` | none stated | Ch. 2–3: Arzelà–Ascoli, Grönwall, Peano from Arzelà–Ascoli, Picard from the contraction theorem, Green's function for a BVP |
| S16 | P. Dote / C. Rodriguez, *MIT 18.100A Complete Lecture Notes* (2020), 92 pp | `https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full2.pdf` | CC BY-NC-SA | **Lecture 18 proves the Weierstrass nowhere-differentiable function in full**, with the explicit series $\sum\cos(160^k x)/4^k$ |
| S17 | H. J. Keisler, *Elementary Calculus*, ch. 4A and ch. 6 | `https://people.math.wisc.edu/~hkeisler/chapter_4a.pdf`, `https://people.math.wisc.edu/~hkeisler/chapter_6.pdf` | CC BY-NC-SA 3.0 | area between graphs; volumes of solids of revolution by the disc and shell methods |
| S18 | OpenStax, *Calculus* Vol. 2 §2.1–2.2 and Vol. 3 §5.2 | `https://openstax.org/books/calculus-volume-2/pages/2-1-areas-between-curves`, `.../2-2-determining-volumes-by-slicing`, `https://openstax.org/books/calculus-volume-3/pages/5-2-double-integrals-over-general-regions` | CC BY-NC-SA | areas between curves, volumes by slicing, double integrals over general regions — convention tiebreakers only |
| S19 | J. Hefferon, *Linear Algebra* | `https://hefferon.net/linearalgebra/` | free, author-hosted | the determinant as the size of a box, the geometric reading used by RC-4 |
| S20 | D. Fremlin, *Measure Theory* Vol. 1 and Vol. 5 ch. 56 | `https://www1.essex.ac.uk/maths/people/fremlin/chap11.pdf`, `.../chap56.pdf` | **Design Science License (copyleft)** | the reference of record for choice-cost annotations, cited by RC-11 only for what survives without choice |

**Rejected and why, so nobody re-scouts them.** Hubbard and Hubbard: sample pages
and a paid PDF only. Spivak *Calculus on Manifolds* and Munkres *Analysis on
Manifolds*: no legitimate free full text; the archive.org copies are 404 or
lending-only. Zorich Vol. II, Duistermaat and Kolk: no legitimate free full text.
Salamon (ETH) *Measure and Integration*: HTTP 403 to every client tried. Teschl's
*Topics in Real Analysis*: withdrawn, 404, returning 24 months after AMS
publication. Shifrin and Nearing: connection timeouts, unverifiable. Shurman's own
Reed hosting: the entire `211/` directory is 404, which is why S4 is a mirror and is
flagged as such. Oxford Moodle-hosted analysis notes: HTTP 200 but the body is a
login page; S7 is the one Oxford PDF served without authentication.

### 7.2 Per-pair backing

Each row lists two or more independent treatments; the first is the primary.

| pair | primary | independent second | third where the statement is delicate |
|---|---|---|---|
| RC-1 | S1 §8.5 | S2 §6.3–6.4 | S7 §3.1–3.3, S6 L6–7 |
| RC-2 | S6 L30 (canonical submersion/immersion) | S7 §4.1–4.2 | S10 App. C (statements), S9 §6.2 |
| RC-3 | S12 Ch. 12 §9 (separation of convex sets) | Lafferriere–Lafferriere–Nguyen §§5.4–5.6 (`https://pdxscholar.library.pdx.edu/cgi/viewcontent.cgi?article=1048&context=pdxopen`, CC BY-NC 4.0) | S5 Ch. 3 §16 |
| RC-4 | S19 (determinant as size of a box) | S3 §3.1 (contented sets, linear distortion) | S2 §7.3, S17 ch. 4A |
| RC-5 | S17 ch. 6 (solids of revolution) | S3 §3.1 Thm 3.1.9 (region between graphs) | S13 §5C ($n$-ball), S18 Vol. 2 §2.2 |
| RC-6 | S6 L12–13 (improper integrals, exhaustions) | S1 §9.1 (differentiation under the integral) | S2 supplement *Functions Defined by Improper Integrals* |
| RC-7 | S14 I.7 (special functions) | S12 §1.20 and Ch. 5 | S13 §5C for the $n$-ball closed form |
| RC-8 | S3 §3.2 (surfaces and surface integrals) | S9 §8.1 ($n$-dimensional volume via Gram determinants) | S5 Ch. 10 §§3–4 (densities) |
| RC-9 | S3 §4.4 (classical Gauss, Green, Stokes) | S5 Ch. 10 §6 and Ch. 11 §4 | S9 §9.3, S1 §10.6 (Green only) |
| RC-10 | S14 Ch. IV (whole ODE chapter) | S15 Ch. 3 (contraction) and §2.5 (Peano via Arzelà–Ascoli) | S1 §6.3 and §7.6 (Picard twice) |
| RC-11 | S12 §1.21 (the generalized Riemann integral) | S11 §1.21 and §4.5.3 (Cousin's property) | S20 for the choice-cost note only |
| RC-12 | S16 Lecture 18 (Weierstrass, full proof) | S11 §9.7, §13.14.3 (Baire route) | S12 Ch. 10 §7 |
| RC-13 | S1 §8.3–8.4 exercises | S4 §4.8 (directional derivatives without differentiability) | S2 §5.2–5.3 |
| RC-14 | S1 §11.8 | S14 I.10 and VI.9 (Dirichlet–Jordan) | S12 Ch. 15 §§15.2–15.9 |

Convention disagreements the authoring session must resolve rather than paper over:
S3 and S5 call Jordan content "content" and Jordan measurable sets "contented";
S4 calls content zero "volume zero"; S2 alone uses "Jordan content" verbatim, which
is this library's term. S9 orients $\partial M$ outward-normal-first; S3 uses the
outward unit normal $\nu$ directly; RC-9 must fix one and say so. S1 defines the
derivative as a linear map and derives partials; S2 Ch. 5 introduces the differential
of a real-valued map from partials first and only reaches the linear-map form in
Ch. 6 — the library follows S1's order, which `def-total-derivative-in-euclidean-space`
already fixes.

---

## 8. Count

14 A pages and 14 B companions, 28 pages. A pages average roughly 18 items and B
pages roughly 12, so about **420 items**. Every A page is well inside the 60-item
`size` gate; RC-5 and RC-9 are the largest and are estimated at 22 and 20.

Nothing here is authored. The next step is an owner ruling on §4.3, after which the
block can be spliced into `research/plan-spec.json` at the anchor named in §0 and
built pair by pair through the standard step 0–10 cycle.
