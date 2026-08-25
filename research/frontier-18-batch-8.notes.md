# frontier-18 · batch 8 — Beta scaffold notes (steps 1–2)

Beta-8, Claude Opus 5 (claude CLI, `xhigh`, 1M context). Two A/B pairs, both
complex-analysis:

| pair | A page | order | B page |
|---|---|---|---|
| CA-7 | `the-winding-number-and-the-global-cauchy-theorem` | 315 | `…-examples` (316) |
| SC-1 | `holomorphic-functions-of-several-variables` | 349 | `…-examples` (350) |

Artifacts owned by this batch, and the only files it writes:
`research/frontier-18-batch-8.pages.json`,
`research/frontier-18-batch-8.coverage.json`,
`research/frontier-18-batch-8.proof-contracts.json`, and this file.

**Dispatch continuity.** This batch was scaffolded across two dispatches. The
first wrote `pages.json` and `coverage.json` and ended before `notes.md` and
`proof-contracts.json` existed. The second dispatch re-verified everything the
first wrote — every dep resolved from disk, every gate re-run, every design trap
re-checked against `plan-complex-analysis-track.md` — applied the five
corrections listed under **Findings**, and wrote the two missing artifacts.
Nothing in the scaffold is carried on the earlier dispatch's word.

---

## 0. Design-versus-spec drift (recorded, NOT settled here)

`research/plan-spec.json` is what this batch is built against, per the standing
instruction that a batch never adjudicates a design-vs-spec conflict. Stage 1's
`drift` unit owns these.

**D1 — SC-1 `requires` is shorter in the spec than in the design.**
`plan-complex-analysis-track.md` L3121 gives SC-1's prerequisites as CA-6, CA-4,
`the-total-derivative`, `fubini-and-change-of-variables`, `rn-as-a-normed-space`,
`mixed-partials-taylor-and-extrema` and `absolute-convergence-and-rearrangement`.
`plan-spec.json` lists the first five and drops the last two. The scaffold cites
both dropped pages anyway and they resolve on plan order:
`mixed-partials-taylor-and-extrema` (order 231) supplies
`def-ck-and-multi-index-notation-in-several-variables` and
`thm-continuous-partial-derivatives-imply-total-differentiability`, cited by
eight items; the rearrangement material is cited through
`thm-absolute-convergence-of-complex-series` (order 305 page
`complex-power-series-and-analytic-functions`, whose Statement is *“Every
absolutely convergent complex series converges, and every rearrangement has the
same sum”*) rather than through the real `absolute-convergence-and-rearrangement`
page, so that design prerequisite is discharged by a different and closer page.
Built against the spec; the only reader-visible consequence is that the rendered
page-level Prerequisites list will not name `mixed-partials-taylor-and-extrema`
even though the page depends on it. Recommend the drift unit ADD
`mixed-partials-taylor-and-extrema` to SC-1's `requires` in the spec.

**D2 — SC-1's spec `requires` names `fubini-and-change-of-variables`, which the
scaffold does not cite at all.** This is deliberate and is the design's own trap
(iii): *“the cited Riemann Fubini theorem is for the Riemann integral on a
rectangle and is stated with upper and lower integrals for a reason; check what
it actually delivers for a continuous integrand on a product of circles before
relying on it.”* I checked. `thm-riemann-fubini-on-product-rectangles` is about a
Riemann-integrable function on a product rectangle in $\mathbb R^{p+q}$; the
polydisc Cauchy formula does not need it, because the formula is proved by
**iterating** the one-variable circle formula, one variable at a time, with the
others held fixed. No interchange of integration order occurs anywhere in
`thm-cauchy-integral-formula-on-a-polydisc` or in any item that consumes it, and
the theorem is stated as an iterated integral rather than as an integral over the
distinguished boundary. That is the honest route and it removes a load-bearing
dependency instead of adding one. Consequence if the drift unit declines this
and insists on the design's Fubini justification: the interchange would have to
be justified for a continuous integrand on a product of *circles*, which is not a
rectangle and not what the cited theorem delivers, so the citation would be
inaccurate. Recommend REMOVING `fubini-and-change-of-variables` from SC-1's
spec `requires`, or leaving it as a non-load-bearing prerequisite; do not
manufacture a use for it.

**D3 — CA-7 order and prerequisites agree between design and spec.** Design
L1306 gives `requires`: CA-6, `the-topology-of-euclidean-space`; the spec gives
`the-identity-theorem-and-the-open-mapping-theorem` (which is CA-6, order 313)
and `the-topology-of-euclidean-space`. No drift.

---

## 1. Applyable amendments to the prose scaffold

The lead Alpha applies these; this batch does not write
`research/plan-complex-analysis-track.md`.

### A1 · `plan-complex-analysis-track.md`, CA-7 “Traps”, trap (i)

**Exact old text:**

> Traps. (i) #8a is the load-bearing item of the page and its proof has exactly
> one delicate step: $h(t) = (\gamma(t)-a)\exp(-\int_{t_0}^t \gamma'/(\gamma-a))$
> has $h' = 0$ at every point where $\gamma$ is differentiable, and $h$ is
> continuous, so $h$ is constant on $[a,b]$ — the piecewise structure means "$h'=0$
> on each piece plus continuity", not "$h'=0$". Write the subdivision.

**Exact new text:**

> Traps. (i) #8a is the load-bearing item of the page, and the auxiliary-function
> proof the literature gives — $h(t) = (\gamma(t)-a)\exp(-\int_{t_0}^t
> \gamma'/(\gamma-a))$ has $h'=0$ on each piece and $h$ is continuous, so $h$ is
> constant — IS NOT AVAILABLE HERE, because it needs $\gamma$ piecewise
> differentiable and this library's contours are only RECTIFIABLE
> (`def-complex-contours-reversal-concatenation-and-closedness`; $\gamma'$ need
> not exist anywhere). Take Ahlfors's other route, his Exercise 2 to §2.1:
> subdivide the parameter interval so that each subarc lies in a disc missing
> $a$, take a holomorphic branch of $\log(z-a)$ on each disc, accumulate the
> increments into a CONTINUOUS LOGARITHM $\lambda$ along $\gamma$, and read
> $\int_\gamma dz/(z-a) = \lambda(b)-\lambda(a)$ off the fundamental theorem for
> contour integrals. Closedness then puts that increment in $\ker\exp =
> 2\pi i\mathbb Z$. The delicate step is the subdivision and the agreement of
> consecutive branches at the partition points; write it out.

*Why:* the design's stated route cites a derivative the library's contours do not
have. Mathematical accuracy outranks fidelity to the design.

### A2 · `plan-complex-analysis-track.md`, SC-1 THMS paragraph

**Exact old text:**

> **separately holomorphic and locally bounded $\Rightarrow$
> holomorphic** (landmark; the Schwarz-lemma telescoping estimate — CA-12's
> Schwarz lemma, applied one variable at a time, giving joint continuity from the
> one-variable bound);

**Exact new text:**

> **separately holomorphic and locally bounded $\Rightarrow$
> holomorphic** (landmark; the telescoping estimate, one coordinate at a time,
> with the slice derivative bounded by the published CAUCHY INEQUALITY
> `cor-cauchy-inequalities` rather than by CA-12's Schwarz lemma. CA-12,
> `conformal-mapping-branches-and-the-schwarz-lemma`, sits at order 325, which is
> below SC-1's 349 and so would be legal in plan order — but it is NOT BUILT in
> run frontier-18, so its Schwarz lemma is not an item any proof can cite. The
> Cauchy inequality is published, gives the same bound $M/((1-\theta)\rho_k)$
> uniformly in the remaining coordinates, and needs no normalisation step);

*Why:* the Cauchy-inequality bound is the shorter route and needs one published
dependency instead of a normalisation argument. The scaffold takes it.

### A3 · `plan-complex-analysis-track.md`, SC-1 `requires` line

**Exact old text:**

> `requires`: CA-6, CA-4, `the-total-derivative`,
> `fubini-and-change-of-variables`, `rn-as-a-normed-space`,
> `mixed-partials-taylor-and-extrema`, and
> `absolute-convergence-and-rearrangement`

**Exact new text:**

> `requires`: CA-6, CA-4, `the-total-derivative`, `rn-as-a-normed-space`,
> `mixed-partials-taylor-and-extrema`, and CA-2
> (`complex-power-series-and-analytic-functions`, which carries
> `thm-absolute-convergence-of-complex-series` — the rearrangement fact the
> multi-index summation definition actually cites). NOT
> `fubini-and-change-of-variables`: the polydisc Cauchy formula is proved by
> iterating the one-variable formula and interchanges no integrals, so the
> Riemann–Fubini theorem is never used.

*Why:* D1 and D2 above. Apply only if the drift unit adopts them.

---

## 2. Per-page item list (reading order)

### `the-winding-number-and-the-global-cauchy-theorem` · order 315 · kind A · 42 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `lem-tagged-sums-approximate-a-contour-integral` | lemma | Tagged sums approximate a contour integral within oscillation times length |
| 2 | `lem-continuous-function-holomorphic-off-a-point-is-holomorphic` | lemma | A continuous function holomorphic off a single point is holomorphic |
| 3 | `thm-contour-parameter-integrals-are-holomorphic` | theorem | A contour integral of a jointly continuous, parameter-holomorphic integrand is holomorphic |
| 4 | `cor-holomorphic-logarithm-has-the-logarithmic-derivative` | corollary | A holomorphic logarithm is a primitive of the logarithmic derivative |
| 5 | `lem-logarithm-branch-for-a-linear-factor-on-a-disc` | lemma | A disc missing $p$ carries a holomorphic logarithm of $z-p$ |
| 6 | `lem-contour-subdivision-into-discs-missing-a-point` | lemma | A contour missing a point subdivides into arcs lying in discs that miss it |
| 7 | `def-continuous-argument-and-holomorphic-logarithm-branches` | definition | Continuous logarithms and continuous arguments along a contour |
| 8 | `thm-continuous-logarithms-exist-along-a-contour` | theorem | Every contour missing a point admits a continuous logarithm, unique up to a constant in $2\pi i\mathbb{Z}$ |
| 9 | `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment` | theorem | The integral of $dz/(z-p)$ along a contour is the increment of a continuous logarithm |
| 10 | `def-winding-number-closed-complex-contour` | definition | The winding number of a closed contour about a point off its trace |
| 11 | `thm-winding-number-is-integer` | theorem | The winding number of a closed contour is an integer |
| 12 | `cor-winding-number-is-the-normalized-argument-increment` | corollary | The winding number is the increment of a continuous argument divided by $2\pi$ |
| 13 | `thm-winding-number-locally-constant` | theorem | The winding number is constant on each connected component of the complement of the trace |
| 14 | `lem-plane-exterior-of-a-closed-disc-is-path-connected` | lemma | The exterior of a closed disc in the plane is path-connected |
| 15 | `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` | theorem | The complement of a compact plane set has exactly one unbounded connected component |
| 16 | `thm-winding-number-zero-unbounded-component` | theorem | The winding number vanishes on the unbounded component of the complement of the trace |
| 17 | `prop-winding-number-under-reversal-and-concatenation` | proposition | Reversal negates and concatenation adds winding numbers |
| 18 | `thm-winding-number-circle-traversed-k-times` | theorem | A circle traversed $k$ times has winding number $k$ inside and $0$ outside |
| 19 | `def-complex-chain-and-cycle` | definition | Complex chains, their traces, and cycles |
| 20 | `def-integration-and-index-of-complex-chain` | definition | Integration over a complex chain and the index of a chain |
| 21 | `thm-winding-number-chain-laws` | theorem | Chain integration and the index are additive in the chain, and reverse with it |
| 22 | `thm-winding-number-of-a-cycle-is-integer` | theorem | The index of a cycle about a point off its trace is an integer |
| 23 | `cor-cycle-integral-of-a-derivative-vanishes` | corollary | The integral of a continuous derivative over a cycle is zero |
| 24 | `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` | corollary | The index of a cycle is locally constant off its trace and vanishes far from it |
| 25 | `def-null-homologous-and-homologous-complex-cycles` | definition | Null-homologous cycles and homologous cycles in an open set |
| 26 | `def-homologically-simply-connected-complex-domain` | definition | Homologically simply connected complex domains |
| 27 | `prop-star-shaped-plane-domains-are-homologically-simply-connected` | proposition | Star-shaped plane domains are homologically simply connected |
| 28 | `lem-holomorphic-difference-quotient-segment-formula` | lemma | On a convex open set the difference quotient is an average of the derivative along the segment |
| 29 | `lem-holomorphic-difference-quotient-is-jointly-continuous` | lemma | The filled difference quotient of a holomorphic function is jointly continuous |
| 30 | `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable` | lemma | The filled difference quotient is holomorphic in each variable separately |
| 31 | `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` | lemma | The Cauchy transform of a cycle is holomorphic off its trace, with the expected derivatives |
| 32 | `lem-dixon-entire-gluing` | lemma | Dixon's glued function is entire and vanishes at infinity |
| 33 | `thm-global-cauchy-integral-formula-homology` | theorem | Cauchy's integral formula for a null-homologous cycle |
| 34 | `cor-global-cauchy-theorem-homology` | corollary | Cauchy's theorem for a null-homologous cycle |
| 35 | `cor-contour-integrals-homologous-cycles` | corollary | Holomorphic integrals agree on homologous cycles |
| 36 | `cor-global-cauchy-formula-higher-derivatives` | corollary | The higher-derivative form of the global Cauchy formula |
| 37 | `thm-primitives-homologically-simply-connected-domains` | theorem | Every holomorphic function on a homologically simply connected domain has a primitive |
| 38 | `thm-holomorphic-logarithms-homologically-simply-connected-domains` | theorem | A nonvanishing holomorphic function on a homologically simply connected domain has a holomorphic logarithm |
| 39 | `cor-holomorphic-roots-homologically-simply-connected-domains` | corollary | A nonvanishing holomorphic function on such a domain has holomorphic roots of every positive order |
| 40 | `thm-homological-simple-connectivity-equivalences` | theorem | Equivalent characterisations of a homologically simply connected domain |
| 41 | `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` | corollary | The principal logarithm is the normalised holomorphic branch on the slit plane |
| 42 | `rem-homological-simple-connectivity-conventions` | remark | Conventions for chains, cycles and the homological adjective on this page |

### `the-winding-number-and-the-global-cauchy-theorem-examples` · order 316 · kind B · 12 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-winding-number-of-the-unit-circle-traversed-three-times` | example | The unit circle traversed three times has index $3$ at every interior point |
| 2 | `ex-winding-number-of-a-figure-eight-cycle` | example | A figure-eight cycle has indices $+1$ and $-1$ in its two loops |
| 3 | `ex-index-of-the-boundary-cycle-of-a-round-annulus` | example | The boundary cycle of a round annulus has index $1$ inside the annulus and $0$ on either side |
| 4 | `ex-winding-numbers-of-a-keyhole-contour` | example | The winding numbers of a keyhole contour about the origin and about an excluded point |
| 5 | `ex-continuous-argument-along-a-spiralling-contour` | example | A continuous argument computed along a spiralling contour |
| 6 | `ex-dixon-gluing-traced-on-an-annulus-cycle` | example | Dixon's gluing traced on the boundary cycle of an annulus |
| 7 | `ex-periods-of-a-holomorphic-function-on-an-annulus` | example | Every cycle in a round annulus has one period, that of the central circle |
| 8 | `rem-the-winding-number-and-the-planar-vortex-field` | remark | The winding number is the circulation of the planar vortex field |
| 9 | `cex-annulus-is-connected-but-not-homologically-simply-connected` | counterexample | A connected plane domain that is not homologically simply connected |
| 10 | `cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm` | counterexample | A nonvanishing holomorphic function on a domain with no holomorphic logarithm |
| 11 | `fs-winding-number-depends-only-on-the-trace` | false-statement | The winding number depends only on the trace of the closed contour |
| 12 | `fs-every-cycle-in-a-connected-plane-domain-is-null-homologous` | false-statement | Every cycle in a connected plane domain is null-homologous in that domain |

### `holomorphic-functions-of-several-variables` · order 349 · kind A · 32 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `rem-complex-euclidean-space-dictionary` | remark | Complex $m$-space and its real coordinate dictionary |
| 2 | `def-balls-and-polydiscs-in-complex-euclidean-space` | definition | Balls, polydiscs and the distinguished boundary in $\mathbb{C}^m$ |
| 3 | `def-holomorphic-function-in-several-complex-variables` | definition | Holomorphic functions on an open subset of $\mathbb{C}^m$ |
| 4 | `def-separately-holomorphic-function` | definition | Separately holomorphic functions |
| 5 | `def-wirtinger-operators-in-several-complex-variables` | definition | Wirtinger operators in $\mathbb{C}^m$ |
| 6 | `lem-complex-linear-real-differential-criterion` | lemma | A real-linear functional on $\mathbb{C}^m$ is complex linear exactly when its antiholomorphic part vanishes |
| 7 | `prop-holomorphic-functions-are-continuous-and-separately-holomorphic` | proposition | A holomorphic function of several variables is continuous and separately holomorphic |
| 8 | `def-multivariable-power-series` | definition | Multi-indexed power series in $\mathbb{C}^m$ and their absolute convergence |
| 9 | `lem-multivariable-geometric-series-on-a-distinguished-boundary` | lemma | The Cauchy kernel expands as an absolutely and uniformly convergent multi-indexed geometric series |
| 10 | `thm-cauchy-integral-formula-on-a-polydisc` | theorem | The iterated Cauchy integral formula on a polydisc |
| 11 | `thm-power-series-expansion-in-several-complex-variables` | theorem | A continuous separately holomorphic function is the sum of an absolutely convergent power series with Cauchy-integral coefficients on every smaller polydisc |
| 12 | `thm-power-series-define-holomorphic-functions-in-several-variables` | theorem | An absolutely convergent multi-indexed power series is holomorphic and differentiates termwise |
| 13 | `thm-osgood-lemma-in-several-complex-variables` | theorem | Osgood's lemma: continuous and separately holomorphic implies holomorphic |
| 14 | `cor-holomorphic-functions-in-several-variables-are-smooth` | corollary | Holomorphic functions of several variables are smooth and their complex derivatives are holomorphic |
| 15 | `cor-uniqueness-of-multivariable-power-series-coefficients` | corollary | The coefficients of a convergent multi-indexed power series are its derivative coefficients, hence unique |
| 16 | `thm-cauchy-estimates-on-a-polydisc` | theorem | Cauchy estimates for mixed derivatives on a polydisc |
| 17 | `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` | lemma | A bounded separately holomorphic function on a polydisc is Lipschitz on every smaller polydisc |
| 18 | `thm-locally-bounded-separate-holomorphy` | theorem | Locally bounded and separately holomorphic implies holomorphic |
| 19 | `thm-cauchy-riemann-characterization-in-several-complex-variables` | theorem | For $C^1$ functions, holomorphy, complex linearity of the real derivative, and the Cauchy–Riemann system agree |
| 20 | `prop-algebra-of-holomorphic-functions-in-several-variables` | proposition | Sums, products and nonvanishing quotients of holomorphic functions are holomorphic |
| 21 | `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables` | theorem | Locally uniform limits of holomorphic functions are holomorphic, with locally uniform convergence of all derivatives |
| 22 | `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` | corollary | The modulus of a holomorphic function on a closed polydisc is bounded by its supremum on the distinguished boundary |
| 23 | `def-holomorphic-map-and-complex-jacobian` | definition | Holomorphic maps $\mathbb{C}^m \to \mathbb{C}^n$ and the complex Jacobian matrix |
| 24 | `thm-componentwise-holomorphy-in-several-complex-variables` | theorem | A map into $\mathbb{C}^n$ is holomorphic exactly when each of its components is |
| 25 | `thm-chain-rule-for-holomorphic-maps-in-several-variables` | theorem | The composite of holomorphic maps is holomorphic and its complex Jacobian is the product |
| 26 | `cor-complex-jacobian-determinant-is-multiplicative` | corollary | The complex Jacobian determinant of a composite of equidimensional holomorphic maps is the product |
| 27 | `thm-identity-theorem-in-several-complex-variables` | theorem | A holomorphic function vanishing on a nonempty open subset of a domain vanishes identically |
| 28 | `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` | corollary | The holomorphic functions on a domain in $\mathbb{C}^m$ have no zero divisors |
| 29 | `thm-maximum-modulus-principle-in-several-complex-variables` | theorem | An interior local maximum of the modulus forces a scalar holomorphic function to be constant |
| 30 | `cor-liouville-theorem-in-several-complex-variables` | corollary | A bounded holomorphic function on all of $\mathbb{C}^m$ is constant |
| 31 | `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` | theorem | A nonconstant scalar holomorphic function on a domain in $\mathbb{C}^m$ is an open map |
| 32 | `rem-several-variable-conventions-and-the-identity-theorem-gap` | remark | Conventions on this page, and what the several-variable identity theorem does not say |

### `holomorphic-functions-of-several-variables-examples` · order 350 · kind B · 12 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc` | example | The power series of $z_0z_1$ on a bidisc centred away from the origin |
| 2 | `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum` | example | The power series of $\exp(z_0+z_1)$ on every bidisc |
| 3 | `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables` | example | The power series of $z_0/(1-z_1)$ and the shape of its domain of convergence |
| 4 | `ex-cauchy-integral-formula-computed-on-a-bidisc` | example | The iterated Cauchy formula computed for $z_0z_1$ on a bidisc |
| 5 | `ex-cauchy-estimates-computed-on-a-bidisc` | example | Cauchy estimates on a bidisc, computed and compared with the exact derivatives |
| 6 | `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space` | example | Componentwise holomorphy checked for an explicit map $\mathbb{C}^2\to\mathbb{C}^3$ |
| 7 | `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` | example | The complex Jacobian and its determinant for $(z_0z_1, z_0+z_1)$ |
| 8 | `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` | example | A function whose modulus attains its maximum only on the distinguished boundary of a bidisc |
| 9 | `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded` | counterexample | A nonzero holomorphic function on $\mathbb{C}^2$ whose zero set is an unbounded hyperplane |
| 10 | `fs-several-variable-identity-theorem-from-an-accumulation-point` | false-statement | A holomorphic function on a domain in $\mathbb{C}^2$ vanishing on a set with an accumulation point vanishes identically |
| 11 | `fs-separately-real-analytic-functions-are-jointly-continuous` | false-statement | A bounded function of two real variables whose every coordinate slice is real analytic is continuous |
| 12 | `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` | remark | Why local boundedness gives joint continuity here and nothing like it holds in the real case |

Recount from the tables: 42 + 12 + 32 + 12 = 98 items in this batch.
Both A pages are under the 60-item `validate-plan` ceiling, so no split is proposed.

---

## 3. Per-pair richness report

Both passes — proof decomposition and the corollary pass — were run separately on
each A/B pair. Both found material on both pairs.

### CA-7 · `the-winding-number-and-the-global-cauchy-theorem`

The design proposed 20 A-page items; the scaffold has 42. Every one of the
design's 20 ids is present and none was renamed. The 22 added items are all
decomposition or corollary work, itemised here.

**Long proofs decomposed.** Four monoliths were broken up.

1. *Integrality of the index* (design #8a). Six earlier items now carry it:
   `cor-holomorphic-logarithm-has-the-logarithmic-derivative` (a holomorphic
   logarithm is a primitive of $h'/h$),
   `lem-logarithm-branch-for-a-linear-factor-on-a-disc` (a disc missing $p$
   carries a holomorphic $\log(z-p)$),
   `lem-contour-subdivision-into-discs-missing-a-point` (the compactness and
   uniform-continuity subdivision),
   `def-continuous-argument-and-holomorphic-logarithm-branches`,
   `thm-continuous-logarithms-exist-along-a-contour` (existence and uniqueness up
   to $2\pi i\mathbb Z$), and
   `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment`. After
   them `thm-winding-number-is-integer` is three steps. See amendment A1: this
   replaces the design's auxiliary-function route, which needs a derivative the
   library's rectifiable contours do not have.
2. *Vanishing on the unbounded component* (design #8c). Split into
   `lem-plane-exterior-of-a-closed-disc-is-path-connected` and
   `thm-complement-of-a-compact-plane-set-has-one-unbounded-component`, which the
   design's text assumed from `the-topology-of-euclidean-space` and which is not
   published there under any id — see Findings F12.
3. *Dixon's proof* (design's landmark). Eight earlier items:
   `lem-tagged-sums-approximate-a-contour-integral`,
   `thm-contour-parameter-integrals-are-holomorphic`,
   `lem-continuous-function-holomorphic-off-a-point-is-holomorphic`,
   `lem-holomorphic-difference-quotient-segment-formula`,
   `lem-holomorphic-difference-quotient-is-jointly-continuous`,
   `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable`,
   `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` and
   `lem-dixon-entire-gluing`. This is the decomposition the design's trap (ii)
   demands: nothing is "simply declared entire", the joint continuity and
   separate holomorphy of the filled difference quotient are each their own
   lemma, and the gluing is stated as a lemma with its own bound at infinity.
4. *Chain machinery*, so that the single-contour results are not re-proved inside
   the cycle results: `thm-winding-number-of-a-cycle-is-integer`,
   `cor-cycle-integral-of-a-derivative-vanishes` (the item where boundary-zero
   rather than piecewise-closed does its work) and
   `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace`.

**Corollary pass, CA-7.** Added:
`cor-winding-number-is-the-normalized-argument-increment` (the index as
$(\theta(b)-\theta(a))/2\pi$, which is what makes "winding" the right word and
costs four lines once the continuous logarithm exists);
`prop-star-shaped-plane-domains-are-homologically-simply-connected` (gives the
page a stock of examples and is what `cor-principal-logarithm-…` consumes);
`thm-homological-simple-connectivity-equivalences` (the equivalence of
null-homology, primitives, logarithms, and the vanishing of $\int dz/(z-p)$ —
three of its arrows are already on the page, so the item is cheap and it is the
form later pages will cite); and
`rem-homological-simple-connectivity-conventions`, which justifies the four
conventions rather than surveying anything.

**Second-proof pass, CA-7.** Run, and it licenses nothing here. The two routes
the sources offer as alternatives — Beardon's square-net proof of Cauchy's
theorem (Ahlfors §4.5) and the lattice proof of the integrality theorem (Weber's
second proof of Theorem 4.1.7) — are second routes to theorems this page is
MINTING, not to published theorems, so the owner's 2026-08-20 licence does not
apply and a same-page duplicate would be padding. Both are recorded in the
harvest with `destination: owner-decision`. See Findings F10.

**Ceiling.** 42 items, ceiling 60. No split proposed.

### SC-1 · `holomorphic-functions-of-several-variables`

The design proposed 22 A-page items; the scaffold has 32, with all 22 design ids
present.

**Long proofs decomposed.**

1. *The polydisc Cauchy formula and the power-series expansion.*
   `lem-multivariable-geometric-series-on-a-distinguished-boundary` carries the
   kernel expansion and its explicit majorant $\prod_k \theta^{\alpha_k}/r_k$
   separately, so the expansion theorem is a substitution plus $m$ uniform-limit
   interchanges and the majorant is available for reuse in the Cauchy estimates.
2. *Locally bounded separate holomorphy.*
   `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz`
   isolates the telescoping estimate, which is the whole content; the theorem
   itself is then three lines through Osgood. See amendment A2 for why the bound
   comes from `cor-cauchy-inequalities` and not from a Schwarz lemma.
3. *The $\mathbb C$-linearity criterion.*
   `lem-complex-linear-real-differential-criterion` is used by four later items
   (the definition-level continuity proposition, the CR characterisation, the
   algebra proposition and the termwise-differentiation theorem) and was a
   repeated inline computation in the design's plan.
4. *The dictionary.* `rem-complex-euclidean-space-dictionary` fixes
   $\mathbb C^m\cong\mathbb R^{2m}$, the 0-indexed coordinate order and the norm
   agreement once. It is cited by 19 items on the pair. Without it every one of
   them re-derives that open sets, convergence and compactness transfer — the
   level-8 "two items silently rebuild the Euclidean metric" defect.

**Corollary pass, SC-1.** Added:
`cor-uniqueness-of-multivariable-power-series-coefficients` (the definite article
in "the coefficients" depends on it);
`prop-algebra-of-holomorphic-functions-in-several-variables`;
`cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` (the sharp
several-variable form, whose witness is on the B page);
`cor-complex-jacobian-determinant-is-multiplicative`;
`cor-holomorphic-functions-on-a-domain-form-an-integral-domain` (immediate from
the identity theorem, and the item later algebraic work cites); and
`rem-several-variable-conventions-and-the-identity-theorem-gap`, which justifies
the weaker several-variable identity theorem rather than surveying it.

**Second-proof pass, SC-1.** Run; nothing licensed. Every theorem here is minted
on this page, so there is no published theorem to re-prove.

**Ceiling.** 32 items, ceiling 60. No split proposed.

### B pages

`the-winding-number-and-the-global-cauchy-theorem-examples` has 12 items and
`holomorphic-functions-of-several-variables-examples` has 12. Both carry the
design's required content: the circle traversed $k$ times, the figure-eight, the
keyhole, the annulus, Dixon traced on an explicit cycle, the vortex-field
dictionary remark, both counterexamples and both false statements for CA-7; the
three polydisc expansions, the computed Cauchy formula and estimates, the
explicit $\mathbb C^2\to\mathbb C^3$ map, the Jacobian of $(z_0z_1, z_0+z_1)$,
the distinguished-boundary witness, the unbounded-zero-set counterexample and the
identity-theorem false statement for SC-1.

The SC-1 B page gained one item in this dispatch. The design lists TWO false
statements for SC-1 and the first scaffold carried only one: the real analogue,
*a separately real-analytic function must be continuous*, had been folded into
`rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` as
prose. It is the sharp contrast that makes `thm-locally-bounded-separate-holomorphy`
worth proving, so it is now
`fs-separately-real-analytic-functions-are-jointly-continuous`, refuted with the
published witness `cex-partial-derivatives-without-continuity` rather than a
re-minted one, and the remark now cites it instead of carrying it. See Findings F14.

**Seam check (brief §7).** Two seams were looked for and both are now declared
edges, not silence. (1) CA-7 redefines nothing the library already has in
generality, but the winding number and the published closed-not-exact vortex form
on `line-integrals-and-the-gradient-theorem` (order 241) ARE the same fact seen
twice; `rem-the-winding-number-and-the-planar-vortex-field` states the agreement
explicitly and cites both, which is the `def-metrizable-space` dictionary style.
(2) SC-1 redefines holomorphy, and it defines it as complex Fréchet
differentiability with respect to the published total derivative rather than
natively; `rem-complex-euclidean-space-dictionary` and
`thm-cauchy-riemann-characterization-in-several-complex-variables` record the
agreement with the published one-variable notion at $m=1$ and with the published
real total derivative.

---

## 4. Findings — one recommendation each, severity order

F1–F5 and F14 are already APPLIED to `research/frontier-18-batch-8.pages.json`;
the step-3 Alpha is being asked to confirm or reverse each. F6–F13 are open
recommendations. F14 is last because it was found last, when the SC-1 design's FS
line was re-read against the manifest; by severity it belongs with F1 and F2.

### F1 · APPLIED · `cor-global-cauchy-theorem-homology` rested on an unstated and unestablished claim

**What was wrong.** The strategy justified the existence of a point
$z\in\Omega\setminus\Gamma^\ast$ by calling $\Gamma^\ast$ "a compact set of empty
interior". That a rectifiable trace has empty interior in the plane is TRUE but
is not established anywhere in this library, and no dependency declared it — the
exact "a dep gate cannot see deps nobody declared" class. Proving it needs the
finite-length covering argument and a positive-content statement for a disc,
neither of which is on this page's spine.

**What I propose (applied).** Replace the justification. $\Gamma^\ast\subseteq
\Omega$ always, so $\Omega\setminus\Gamma^\ast=\varnothing$ forces
$\Omega=\Gamma^\ast$; the trace of a chain is a finite union of continuous images
of compact intervals, hence compact, hence closed and bounded; so $\Omega$ would
be a nonempty bounded clopen subset of $\mathbb C$, and $\mathbb C$ is connected
(`cor-rn-is-polygonally-connected-and-locally-path-connected` through
`rem-complex-plane-euclidean-dictionary`), whose only clopen subsets are
$\varnothing$ and $\mathbb C$. Six dependencies were added to the item to make
that argument declared:
`thm-closed-subspace-of-a-compact-space-is-compact` (its Statement carries "a
finite union of compact subspaces is compact"),
`thm-continuous-image-of-a-compact-space-is-compact`,
`thm-connectedness-characterisations`,
`cor-rn-is-polygonally-connected-and-locally-path-connected`,
`rem-complex-plane-euclidean-dictionary` and `def-complex-chain-and-cycle`.
The strategy now says in terms that the empty-interior claim must NOT be
asserted.

**What breaks if declined.** The step-5 author writes an unlicensed inference in
the load-bearing corollary of the page, and either a judge catches it at step 7
or it publishes.

### F2 · APPLIED · `thm-power-series-expansion-in-several-complex-variables` claimed more in its title than its proof gives

**What was wrong.** The title read "…is the sum of its **derivative-coefficient**
power series…", but the proof at that point produces the coefficients as iterated
contour integrals. The identification $c_\alpha=\partial^\alpha f(a)/\alpha!$
needs termwise differentiation, which is the NEXT theorem
(`thm-power-series-define-holomorphic-functions-in-several-variables`, item 12),
and is recorded two items later in
`cor-holomorphic-functions-in-several-variables-are-smooth`. A title the proof
does not reach is the fatal class the judge reads Statements for and cannot see.

**What I propose (applied).** Title is now "A continuous separately holomorphic
function is the sum of an absolutely convergent power series with
Cauchy-integral coefficients on every smaller polydisc", and the strategy
carries an explicit instruction that neither the title nor the Statement may
claim the derivative identification here.

**What breaks if declined.** A published falsehood in a title, on the page's
second landmark.

### F3 · APPLIED · a count in a title that can decay

`thm-homological-simple-connectivity-equivalences` was titled "**Six** equivalent
characterisations of a homologically simply connected domain". The list is
mathematics, but the count in the title is a claim about the item's own final
shape, and any step-6 or step-8 repair that merges or drops a condition
falsifies it silently. Retitled "Equivalent characterisations of a homologically
simply connected domain"; the six conditions stay in the strategy and will stay
in the Statement. Declining costs a decay risk for no gain.

### F4 · APPLIED · the keyhole example asserted an index at points on the trace

`ex-winding-numbers-of-a-keyhole-contour` builds the cycle from two circles and
two opposite radial segments. Both segments carry coefficient $1$, so that radius
is part of $\Gamma^\ast$ and no index is defined on it — but the strategy said
the index is "$1$ in the annulus", which includes those points. Corrected to say
"at points OFF the trace" and to name the radius explicitly. Declining ships an
example whose stated conclusion is undefined on part of the region it names.

### F5 · APPLIED · two LaTeX typos that would have reached the page

`(z_0z_1,;z_0+z_1)` (a mis-typed `\;`) appeared in the title of
`ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` and in the strategy of
`ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space`. Both
are now `, `. A stray `;` inside `$…$` renders, so no gate would have caught it.

### F6 · OPEN · add `mixed-partials-taylor-and-extrema` to SC-1's spec `requires`

The design lists it, the spec does not, and eight scaffolded items cite
`def-ck-and-multi-index-notation-in-several-variables` and
`thm-continuous-partial-derivatives-imply-total-differentiability` from it (order
231, published). Declining does not break a proof — the deps resolve on plan
order — but the rendered page-level Prerequisites will omit a page the reading
genuinely needs. Drift unit's call; recorded as D1.

### F7 · OPEN · `fubini-and-change-of-variables` is in SC-1's spec `requires` and is used by nothing

Deliberate, and it is the design's own trap (iii). See D2 for the full argument.
Declining means someone later manufactures a use for it, and the only available
use — interchanging the order of integration on a product of circles — is not
what `thm-riemann-fubini-on-product-rectangles` delivers.

### F8 · OPEN · adopt amendment A1: the integrality proof changes route

The design's auxiliary-function route needs $\gamma$ piecewise differentiable.
`def-complex-contours-reversal-concatenation-and-closedness` gives only
rectifiability. The scaffold takes Ahlfors's continuous-logarithm route
(Exercise 2 to §2.1), which uses no derivative of $\gamma$ anywhere. Declining
means either the page's central theorem is stated for a class of contours it does
not prove it for, or the whole page is restricted to piecewise-$C^1$ contours and
stops applying to the contours the rest of the track uses.

### F9 · OPEN · adopt amendment A2: the Lipschitz bound comes from the Cauchy inequality

The design routes `thm-locally-bounded-separate-holomorphy` through CA-12's
Schwarz lemma. CA-12 (`conformal-mapping-branches-and-the-schwarz-lemma`, order
325) is **not built in run frontier-18** — its `items` array in `plan-spec.json`
is empty and no batch owns it — so there is no item to cite. `cor-cauchy-inequalities`
is published and gives $|g'(\zeta)|\le M/((1-\theta)\rho_k)$ uniformly in the
remaining coordinates, which is exactly the bound the telescoping needs.
Declining leaves the item with an unresolvable dependency.

### F10 · OPEN · the two `owner-decision` deferrals are second routes, and I recommend keeping them deferred

Ahlfors §4.5 (Beardon's square-net proof of Cauchy's theorem) and Weber's second,
lattice proof of the integrality theorem are genuinely different routes to two
theorems on this page. The owner's 2026-08-20 second-proof licence is for a
theorem the library ALREADY ESTABLISHES; both of these are minted here, so a
second route on the same page is a duplicate rather than a second proof, and each
would add roughly eight items to a page that already has 42. Recommend leaving
both `deferred` with `destination: owner-decision`, which is how the harvest
records them. Declining means adding one or both and re-checking the ceiling.

### F11 · OPEN · six dependencies are `draft-page`, all on frontier-17's CA-6

`depsource` will report six deps as `draft-page`, every one on
`the-identity-theorem-and-the-open-mapping-theorem` (order 313), which run
frontier-17 authored and has not published:

| dep | consumer |
|---|---|
| `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` | `lem-logarithm-branch-for-a-linear-factor-on-a-disc` |
| `thm-boundary-maximum-modulus-principle` | `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` |
| `thm-local-maximum-modulus-principle` | `thm-maximum-modulus-principle-in-several-complex-variables` |
| `thm-open-mapping-theorem-holomorphic-functions` | `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` |
| `thm-identity-theorem-holomorphic-functions` | `fs-several-variable-identity-theorem-from-an-accumulation-point` |
| `thm-isolated-zeros-holomorphic-function` | `fs-several-variable-identity-theorem-from-an-accumulation-point` |

Page 313 is a declared prerequisite of both A pages and sits at a strictly
smaller order, so this is legitimate and not a forward reference; the citations
resolve for the owner today and for the public when frontier-17 publishes. All
six carry `provenance.statement: literature-derived`, so all six are legal `deps`
targets. Recorded, not repaired — nothing this batch may do changes it.

### F12 · OPEN · the design cites a result `the-topology-of-euclidean-space` does not carry

The CA-7 design says "$\mathbb{C}\setminus\gamma^\ast$ has exactly one unbounded
component by `the-topology-of-euclidean-space`". That page (order 257) carries
polygonal connectedness of $\mathbb R^n$ and of open connected subsets, the
punctured-space results and the sphere results; it does not state anything about
the components of the complement of a compact set, and no published item anywhere
does (`grep -il 'unbounded component' items/*.md` returns nothing). Under the
self-contained-scope rule the missing prerequisite is BUILT rather than deferred:
`lem-plane-exterior-of-a-closed-disc-is-path-connected` and
`thm-complement-of-a-compact-plane-set-has-one-unbounded-component`, both on this
page, ahead of `thm-winding-number-zero-unbounded-component`. Recommend the lead
Alpha correct the design line to name these two items. Declining leaves a design
that points at a nonexistent citation.

### F13 · OPEN · SC-1 is at order 349 with nothing between 317 and 348 built

Every complex-analysis page from CA-8 (317) to CA-23 (348) is planned and unbuilt
in this run; batch 8 owns the only complex-analysis pages in frontier-18. SC-1
therefore rests entirely on pages at order $\le 313$ plus its own predecessors,
and I checked each dependency's home page for that: the highest-order external
home page any SC-1 item cites is 313. This is not a defect and needs no repair;
it is recorded because the SC-1 design was written expecting CA-8, CA-12 and
CA-14 to exist, and every place it leaned on them has been rerouted or dropped
(see F9, and the `deferred` rows pointing at `normal-families-and-montels-theorem`
and `conformal-mapping-branches-and-the-schwarz-lemma`).

### F14 · APPLIED · SC-1 was missing one of the two false statements its design lists

**What was wrong.** The SC-1 design's FS line names two false statements. The
scaffold carried `fs-several-variable-identity-theorem-from-an-accumulation-point`
and handled the other — the real analogue, that separate real-analyticity forces
joint continuity — as prose inside a Remark. A false statement demoted to a
sentence is a dropped item, and this one is the contrast that makes
`thm-locally-bounded-separate-holomorphy` worth proving at all.

**What I propose (applied).** Added
`fs-separately-real-analytic-functions-are-jointly-continuous` to
`holomorphic-functions-of-several-variables-examples`, immediately before the
remark, stating: *a bounded function of two real variables whose every coordinate
slice is real analytic is continuous*. Refuted with the PUBLISHED witness
`cex-partial-derivatives-without-continuity` ($xy/(x^2+y^2)$ off the origin, $0$
at it) rather than a re-minted one, per the design's own "cited rather than
re-minted". The refutation proves the two things that published counterexample
does not state — that $|f|\le 1/2$ from $2|xy|\le x^2+y^2$, and that every
coordinate slice is real analytic on all of $\mathbb R$ (a quotient of
polynomials with nowhere-vanishing denominator, by
`thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`, the
slice through the origin being identically zero) — and takes the discontinuity
from the published item. `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`
now cites the false statement instead of carrying its content, and its claim that
the witness is "separately real-analytic away from a line" was corrected: every
slice is real analytic, including the one through the origin.

**What breaks if declined.** SC-1 ships with one of its two designed false
statements missing, and the page's central hypothesis has no reader-facing
witness that the real analogue fails.

---

## 5. Forward references kept

**None, on any of the four pages.** No item declares `forward_refs`, and no
Statement, Definition or Facts block points forward.

Two were available and both were declined for the same mechanical reason. The
CA-7 design permits "a Remarks-only pointer to CA-17, declared", and the SC-1
design permits declaring SC-2's full separate-holomorphy theorem. CA-17
(`simply-connected-plane-domains`, order 335) and SC-2 (`the-hartogs-phenomena`,
order 351) are both planned-but-unbuilt: their `items` arrays in
`plan-spec.json` are empty and no batch of frontier-18 owns either page. A
`forward_refs` entry must name an EXISTING item id on a strictly later page, so
either declaration would fail `fwdcheck.mjs` outright.

Where the design wanted the pointer, the scaffold uses reading-order-scoped prose
instead of a link. `thm-locally-bounded-separate-holomorphy` says the
local-boundedness hypothesis "is not available at this point in the reading
order" rather than "is removed on a later page" or "the library does not develop
it" — the first is checkable from the spec, the other two are the two forms this
library has published as falsehoods.

`depsource.mjs` should therefore report **zero `planned-later` deps** for all four
of this batch's pages. Six `draft-page` rows are expected and enumerated in F11.

---

## 6. New ids proposed, and the greps behind them

Every id below was checked against the whole published pool AND against
`research/plan-spec.json` AND against the other nine batch manifests of
frontier-18 before minting. The mechanical check actually run, from the repo
root, was:

```
node -e 'const fs=require("fs");
 const disk=new Set(fs.readdirSync("items").map(f=>f.replace(/\.md$/,"")));
 const spec=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")).pages;
 const specIds=new Set(); for(const p of spec) for(const i of (p.items||[])) specIds.add(i.id);
 const other=new Set();
 for(const f of fs.readdirSync("research").filter(f=>/^frontier-18-batch-\d+\.pages\.json$/.test(f) && !f.includes("batch-8")))
   for(const p of JSON.parse(fs.readFileSync("research/"+f,"utf8"))) for(const i of (p.items||[])) other.add(i.id);
 const mine=JSON.parse(fs.readFileSync("research/frontier-18-batch-8.pages.json","utf8"));
 for(const p of mine) for(const i of p.items)
   if(disk.has(i.id)||specIds.has(i.id)||other.has(i.id)) console.log("COLLISION",i.id);'
```

It printed nothing: **all 98 ids are new, and none duplicates a statement already
in the pool.** Duplicate ids WITHIN the batch were checked separately (98 ids, 98
distinct).

The twenty ids the design did not propose are listed here with what each is for,
since a new id is a decision the step-3 Alpha adjudicates:

| new id | what it is for |
|---|---|
| `lem-tagged-sums-approximate-a-contour-integral` | the modulus-of-continuity bound that makes the parameter theorem a Weierstrass limit |
| `lem-continuous-function-holomorphic-off-a-point-is-holomorphic` | the removability step of the filled difference quotient |
| `thm-contour-parameter-integrals-are-holomorphic` | holomorphy of a contour integral in its parameter; the item Dixon consumes |
| `cor-holomorphic-logarithm-has-the-logarithmic-derivative` | $L'=h'/h$, used four times on the page |
| `lem-logarithm-branch-for-a-linear-factor-on-a-disc` | the per-disc branch of $\log(z-p)$ used in the subdivision |
| `lem-contour-subdivision-into-discs-missing-a-point` | the compactness/uniform-continuity subdivision |
| `thm-continuous-logarithms-exist-along-a-contour` | existence and $2\pi i\mathbb Z$ uniqueness of the continuous logarithm |
| `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment` | $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ |
| `cor-winding-number-is-the-normalized-argument-increment` | the index as $(\theta(b)-\theta(a))/2\pi$ |
| `lem-plane-exterior-of-a-closed-disc-is-path-connected` | prerequisite for the unbounded-component theorem (F12) |
| `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` | the result the design attributed to `the-topology-of-euclidean-space`, which does not carry it (F12) |
| `prop-winding-number-under-reversal-and-concatenation` | the single-contour half of the design's chain laws |
| `thm-winding-number-of-a-cycle-is-integer` | integrality for cycles, which the single-contour theorem does not give |
| `cor-cycle-integral-of-a-derivative-vanishes` | the item where boundary-zero rather than piecewise-closed does its work |
| `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` | the chain-level form of local constancy, used by Dixon |
| `prop-star-shaped-plane-domains-are-homologically-simply-connected` | the page's supply of worked homologically simply connected domains |
| `lem-holomorphic-difference-quotient-segment-formula` | the average-of-the-derivative identity |
| `lem-holomorphic-difference-quotient-is-jointly-continuous` | Dixon's joint continuity, proved rather than asserted |
| `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable` | Dixon's separate holomorphy, proved rather than asserted |
| `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` | the second half of Dixon's gluing |
| `thm-homological-simple-connectivity-equivalences` | the equivalence later pages will cite |
| `rem-homological-simple-connectivity-conventions` | the four conventions of the page, justified |
| `rem-complex-euclidean-space-dictionary` | the $\mathbb C^m\cong\mathbb R^{2m}$ dictionary, cited by 19 items |
| `prop-holomorphic-functions-are-continuous-and-separately-holomorphic` | the immediate consequences of the SC-1 definition |
| `lem-multivariable-geometric-series-on-a-distinguished-boundary` | the kernel expansion and its majorant |
| `cor-uniqueness-of-multivariable-power-series-coefficients` | what licenses "the" coefficients |
| `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` | the telescoping estimate |
| `prop-algebra-of-holomorphic-functions-in-several-variables` | sums, products, nonvanishing quotients |
| `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` | the sharp several-variable maximum bound |
| `cor-complex-jacobian-determinant-is-multiplicative` | the determinant half of the chain rule |
| `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` | the immediate algebraic consequence of the identity theorem |
| `rem-several-variable-conventions-and-the-identity-theorem-gap` | SC-1's conventions and the honest weakening, justified |
| `fs-separately-real-analytic-functions-are-jointly-continuous` | the design's second SC-1 false statement (F14) |

Plus the B-page example, counterexample and false-statement ids, all leaves.

---

## 7. Cross-batch dependencies

**This batch needs nothing from any other batch of frontier-18, and no other
batch needs anything from it.** Batch 8 owns the only complex-analysis pages in
the run (orders 315/316 and 349/350); the other nine batches sit at orders
57–302 and 365–402 in number theory, group theory, field theory, commutative
algebra, combinatorics, vector calculus, measure theory, geometric group theory
and category theory. Checked mechanically: no dep of any batch-8 item resolves to
an item in another batch's manifest, and no other batch's manifest names a
batch-8 id.

The one genuine cross-run dependency is on run **frontier-17**, whose CA-6 page
`the-identity-theorem-and-the-open-mapping-theorem` (order 313) is authored and
still `status: draft` on disk. Six items depend on it; see F11.

---

## 8. Component provenance, planned for every mathematical-content item

The rule applied, so the step-6 Alpha can check it rather than re-derive it:

* `literature-derived` only where a row of `frontier-18-batch-8.coverage.json` names
  the exact source heading AND the library statement follows it with editorial
  changes only.
* `ai-altered` where a source statement is materially reformulated for this
  library's conventions — rectifiable contours in place of piecewise-$C^1$ ones,
  chains as finite lists in place of a free abelian group, 0-indexed coordinates,
  or a step extracted from a source's proof into a standalone statement.
* `ai-generated` ONLY for a non-load-bearing example or counterexample construction
  chosen here, each carrying `generation.role` and cited by nothing. No theorem,
  proposition, definition, lemma, false statement or remark is `ai-generated`,
  which `content-policy.mjs` enforces and which is also why every decomposition
  lemma below is `ai-altered` rather than generated.
* An `ai-generated` PROOF never changes the statement label.

**Truth-risk obligations.** The heightened audit attaches to an `ai-generated`
STATEMENT or construction. Seven items below carry one, all of them B-page
examples whose witnesses are finite explicit computations; for each, the step-5
authoring obligation is to compute the witness and check the asserted value
before writing it, and no counterexample search is meaningful because the claim
is a computation rather than a general assertion. No `ai-generated` item is a
`deps` target anywhere in this batch — verified mechanically.

### `the-winding-number-and-the-global-cauchy-theorem`

| id | statement | proof | reason |
|---|---|---|---|
| `lem-tagged-sums-approximate-a-contour-integral` | ai-altered | ai-altered | The tagged-sum approximation is the Riemann–Stieltjes step behind every source's treatment of contour integrals, but no source states it as a standalone bound; extracted here and reformulated with an explicit oscillation constant instead of a limit, so later items get a modulus of continuity. |
| `lem-continuous-function-holomorphic-off-a-point-is-holomorphic` | literature-derived | ai-altered | The removable-exceptional-point statement as Ahlfors Ch. 4 §3.1 gives it. The proof is reassembled from the two published items thm-goursat-theorem-one-exceptional-point and thm-morera-triangle-theorem, which is not the source's own route. |
| `thm-contour-parameter-integrals-are-holomorphic` | literature-derived | ai-generated | The statement is Lebl's lemma on the holomorphy of a Cauchy-type parameter integral. The proof is constructed here: tagged sums are finite linear combinations of holomorphic functions and converge locally uniformly, so Weierstrass convergence finishes — the sources use Morera plus an interchange, which this library cannot justify for a rectifiable contour. |
| `cor-holomorphic-logarithm-has-the-logarithmic-derivative` | literature-derived | ai-altered | The identity L'=h'/h for exp(L)=h is standard in all three sources; the derivation is written from the published chain rule and thm-complex-exponential-is-entire-with-derivative-itself. |
| `lem-logarithm-branch-for-a-linear-factor-on-a-disc` | ai-altered | ai-altered | A specialisation of the published lem-local-holomorphic-logarithm-nonvanishing-function-on-disc to h(z)=z-p, with the 2*pi*i*Z ambiguity added; no source states this special case separately. |
| `lem-contour-subdivision-into-discs-missing-a-point` | ai-altered | ai-altered | Ahlfors Exercise 1 to §2.1 sketches the subdivision inside a proof; made a standalone statement here with the compactness and uniform-continuity hypotheses spelled out and the degenerate parameter interval covered. |
| `def-continuous-argument-and-holomorphic-logarithm-branches` | literature-derived | not-applicable | Definition as Lebl gives it, distinguishing a continuous logarithm along a curve from a holomorphic branch on an open set, with each branch ambiguity fixed. No proof component. |
| `thm-continuous-logarithms-exist-along-a-contour` | literature-derived | ai-altered | Ahlfors Exercise 2 to §2.1 and Stein–Shakarchi 'The complex logarithm' state existence and the 2*pi*i*Z uniqueness for continuous curves. The proof is written for rectifiable contours from this page's subdivision lemma. |
| `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment` | ai-altered | ai-altered | Weber Ch. 4 §4.1 has the increment identity inside its integrality proof; stated separately here so the integrality theorem and the spiralling non-closed example can both cite it. |
| `def-winding-number-closed-complex-contour` | literature-derived | not-applicable | The index n(gamma,p) as all three sources define it, restricted to the rectifiable contours this library has and stated for the parametrised contour rather than its trace. No proof component. |
| `thm-winding-number-is-integer` | literature-derived | ai-altered | Ahlfors Lemma 1 to §4.2.1. The proof takes the continuous-logarithm route rather than the auxiliary-function route, because the library's contours carry no derivative — see amendment A1 and finding F8. |
| `cor-winding-number-is-the-normalized-argument-increment` | literature-derived | ai-altered | Weber states the index as the normalised argument increment; the derivation here reads Re(lambda)=log\|gamma-p\| off exp(lambda)=gamma-p. |
| `thm-winding-number-locally-constant` | literature-derived | ai-altered | Ahlfors Property (ii) of §4.2.1. The proof is written with an explicit ML bound L(gamma)\|p-p0\|/(pi d^2) so the continuity is quantitative. |
| `lem-plane-exterior-of-a-closed-disc-is-path-connected` | ai-altered | ai-generated | Standard plane topology that no source states as a lemma and that the library does not publish; built here as the prerequisite of the unbounded-component theorem. The radial-then-circular path is written locally. |
| `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` | literature-derived | ai-generated | Ahlfors states in §4.2.1 that the complement of a compact curve determines one and only one unbounded region. The design attributed it to the-topology-of-euclidean-space, which does not carry it (F12), so the proof is written here from the exterior lemma. |
| `thm-winding-number-zero-unbounded-component` | literature-derived | ai-altered | Ahlfors Property (i)/(ii) of §4.2.1. Proof from the ML estimate plus integrality plus local constancy. |
| `prop-winding-number-under-reversal-and-concatenation` | literature-derived | ai-altered | Ahlfors's reversal law together with the concatenation law; both reduce to the published contour-integral identities, and the composability hypotheses are stated explicitly here. |
| `thm-winding-number-circle-traversed-k-times` | literature-derived | ai-altered | Lebl's computation of the index of a circle traversed k times. Stated here for every integer k with k=0 and k<0 dispatched separately. |
| `def-complex-chain-and-cycle` | ai-altered | not-applicable | Ahlfors and Weber define chains as elements of a free abelian group on contours. Materially reformulated here as finite lists with integer coefficients, per the design's trap (iii): no free abelian group is imported and no result claims two differently presented chains are equal. No proof component. |
| `def-integration-and-index-of-complex-chain` | ai-altered | not-applicable | The linear extension of the integral and of the index to chains, restated for the list presentation and checked to agree with the single-contour definition at r=1. No proof component. |
| `thm-winding-number-chain-laws` | ai-altered | ai-altered | Ahlfors's additivity and sign laws for chains, restated for the list presentation, with the empty chain included. |
| `thm-winding-number-of-a-cycle-is-integer` | literature-derived | ai-altered | Ahlfors §4.4 states integrality for cycles. The proof groups the exponential factors by evaluation point and reads the exponent off the boundary function, which is the list-presentation form of the source's argument. |
| `cor-cycle-integral-of-a-derivative-vanishes` | ai-altered | ai-altered | Implicit in every source's use of cycles; stated separately here because it is the exact place where boundary-zero, rather than the stronger requirement that each piece be closed, does its work. |
| `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` | ai-altered | ai-altered | The chain-level form of two single-contour results, needed by Dixon's gluing to know that Omega_0 is open; no source states it separately. |
| `def-null-homologous-and-homologous-complex-cycles` | literature-derived | not-applicable | Definition as Ahlfors §4.4 and Lebl give it, with the dependence on Omega stated explicitly. No proof component. |
| `def-homologically-simply-connected-complex-domain` | ai-altered | not-applicable | Lebl's homological definition, with the qualifier 'homologically' made part of the name and of every use, per the design's trap (iv): the topological notion belongs to the-fundamental-group and is not invoked here. No proof component. |
| `prop-star-shaped-plane-domains-are-homologically-simply-connected` | ai-altered | ai-altered | Lebl records that a star-shaped domain is homologically simply connected; the proof here runs through the published star-shaped primitive theorem and this page's cycle-integral corollary. |
| `lem-holomorphic-difference-quotient-segment-formula` | ai-altered | ai-altered | Weber's parametric identity for the difference quotient on a convex set, extracted as a lemma so that both the joint-continuity lemma and the diagonal case can cite one statement. |
| `lem-holomorphic-difference-quotient-is-jointly-continuous` | literature-derived | ai-altered | Dixon's lemma as Lebl states it. The proof is written from the segment formula rather than asserted, which is the design's trap (ii). |
| `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable` | literature-derived | ai-altered | Dixon's second hypothesis, as Lebl states it; proved here through the page's exceptional-point removability lemma. |
| `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` | literature-derived | ai-altered | Standard in all three sources; proved here by applying the published differentiation lemma for Cauchy integrals termwise across the chain. |
| `lem-dixon-entire-gluing` | literature-derived | ai-altered | Dixon's construction as Lebl gives it. Stated as a lemma with its own bound at infinity so that the theorem is Liouville plus one line. |
| `thm-global-cauchy-integral-formula-homology` | literature-derived | ai-altered | The homology form of the Cauchy integral formula, as Lebl and Weber state it. The proof is Dixon's, decomposed across eight earlier items. |
| `cor-global-cauchy-theorem-homology` | literature-derived | ai-altered | The homology form of Cauchy's theorem, in all three sources. The existence of a point off the trace is justified here by connectedness of C rather than by an empty-interior claim the library has not established (F1). |
| `cor-contour-integrals-homologous-cycles` | literature-derived | ai-altered | Lebl's statement that holomorphic integrals depend only on the homology class; the proof is the chain laws applied to the difference. |
| `cor-global-cauchy-formula-higher-derivatives` | literature-derived | ai-altered | The higher-derivative form, standard in the sources. The proof uses local constancy of the index to differentiate n(Gamma,z)f(z) as a constant multiple on a neighbourhood, which the sources leave implicit. |
| `thm-primitives-homologically-simply-connected-domains` | literature-derived | ai-altered | Ahlfors and Lebl both state it. The proof is Cauchy's theorem plus the published path-independence criterion, whose hypotheses (a complex domain, a continuous integrand) are checked explicitly. |
| `thm-holomorphic-logarithms-homologically-simply-connected-domains` | literature-derived | ai-altered | Ahlfors §4.4 and Lebl. The uniqueness clause up to 2*pi*i*Z is proved from connectedness and the published kernel of exp. |
| `cor-holomorphic-roots-homologically-simply-connected-domains` | literature-derived | ai-altered | Lebl's corollary on holomorphic k-th roots; the proof is exp(L/m) plus the addition formula. |
| `thm-homological-simple-connectivity-equivalences` | literature-derived | ai-altered | Ahlfors Theorem 14 and Weber Proposition 4.3.7 give the equivalence list; the conditions are restated in the homological vocabulary of this page and the cycle of implications is arranged so three arrows are items already on the page. |
| `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` | ai-altered | ai-altered | Lebl identifies the principal branch on the slit plane; the identification with the library's published def-complex-logarithms-principal-logarithm-and-complex-powers, and the intermediate-value argument keeping the imaginary part inside (-pi,pi), are written here. |
| `rem-homological-simple-connectivity-conventions` | ai-altered | not-applicable | Records which of the sources' conventions this page adopts and why, in the justifying rather than surveying form. Not a generated claim: every convention it states is one of the sources' own, chosen among them. No proof component. |

### `the-winding-number-and-the-global-cauchy-theorem-examples`

| id | statement | proof | reason |
|---|---|---|---|
| `ex-winding-number-of-the-unit-circle-traversed-three-times` | ai-altered | ai-altered | Ahlfors's circle computation specialised to k=3, with the continuous logarithm exhibited explicitly rather than obtained from the existence theorem. |
| `ex-winding-number-of-a-figure-eight-cycle` | ai-altered | ai-altered | The figure eight is the standard illustration in the sources; the specific radii and centres, and the presentation as a two-term chain, are chosen here. |
| `ex-index-of-the-boundary-cycle-of-a-round-annulus` | literature-derived | ai-altered | Lebl's annulus boundary cycle, the worked instance he uses to introduce null-homology; the computation is written from this page's chain additivity. |
| `ex-winding-numbers-of-a-keyhole-contour` | ai-altered | ai-altered | The keyhole is a standard contour; presenting it as a CYCLE whose two radial segments cancel in the boundary count, and checking the boundary function is zero, is the library-specific content. |
| `ex-continuous-argument-along-a-spiralling-contour` | ai-generated | ai-generated | The spiralling witness gamma(t)=(1+t)exp(2*pi*i*t) and its explicit continuous logarithm are chosen here to separate the logarithm-increment theorem from the integrality theorem, which needs a NON-CLOSED contour and so cannot be taken from a source's index example. Directly checkable and cited by nothing. |
| `ex-dixon-gluing-traced-on-an-annulus-cycle` | ai-generated | ai-generated | The specific Omega, Gamma and f on which Dixon's gluing is traced are chosen here; every quantity in the example is computed from circle integrals of integer monomials. Cited by nothing. |
| `ex-periods-of-a-holomorphic-function-on-an-annulus` | literature-derived | ai-altered | Ahlfors §4.7 on multiply connected regions gives the period statement for the annulus; the proof here is homologousness to a multiple of the central circle. |
| `rem-the-winding-number-and-the-planar-vortex-field` | ai-altered | not-applicable | The identification of the index with the circulation of the published closed-not-exact field on line-integrals-and-the-gradient-theorem is the seam this library must state (brief §7). The dictionary is assembled here from two published items; the underlying fact is standard. A `rem-` has no Proof section, so the proof component is `not-applicable`. |
| `cex-annulus-is-connected-but-not-homologically-simply-connected` | ai-altered | ai-altered | The annulus with its unit circle is the sources' own witness; restated as a counterexample item against the explicit false claim that every complex domain is homologically simply connected. |
| `cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm` | literature-derived | ai-altered | The identity function on the punctured plane, the standard witness. The refutation cites the published no-continuous-logarithm theorem, whose CONTINUOUS statement is stronger than what is needed, and gives the integral refutation as well. |
| `fs-winding-number-depends-only-on-the-trace` | ai-altered | ai-altered | The false claim is the index-language restatement of the published false statement about contour integrals depending only on the trace; the witness is the unit circle traversed once and twice. |
| `fs-every-cycle-in-a-connected-plane-domain-is-null-homologous` | ai-altered | ai-altered | The false claim named in the design, which is exactly what would make the homological hypothesis of the global Cauchy theorem vacuous. Witness taken from the annulus counterexample on this page. |

### `holomorphic-functions-of-several-variables`

| id | statement | proof | reason |
|---|---|---|---|
| `rem-complex-euclidean-space-dictionary` | ai-altered | not-applicable | Lebl SCV §1.1 fixes the C^m = R^{2m} identification; reformulated here for the library's 0-indexed coordinates and its published norms, and made a single cited item rather than a repeated inline remark. No proof component. |
| `def-balls-and-polydiscs-in-complex-euclidean-space` | literature-derived | not-applicable | Lebl SCV §1.1 definitions of ball, polydisc and distinguished boundary, with the proper-subset remark for m>=2 kept. No proof component. |
| `def-holomorphic-function-in-several-complex-variables` | ai-altered | not-applicable | Lebl defines holomorphy by local power series or by the C^1 CR system; this page defines it as complex Frechet differentiability so that Osgood's lemma and the locally bounded theorem are theorems rather than tautologies (the design's trap (i)). Materially a different but equivalent formulation. No proof component. |
| `def-separately-holomorphic-function` | literature-derived | not-applicable | Lebl SCV §1.1 definition of separate holomorphy, with the explicit note that no continuity in the other variables is assumed. No proof component. |
| `def-wirtinger-operators-in-several-complex-variables` | literature-derived | not-applicable | Lebl SCV §1.3 Wirtinger operators, extended coordinatewise, with the differential identity recorded. No proof component. |
| `lem-complex-linear-real-differential-criterion` | ai-altered | ai-altered | The vanishing-of-the-anti-Wirtinger-part criterion is inside Lebl's treatment of the CR system; extracted as a standalone lemma here because four later items use it. |
| `prop-holomorphic-functions-are-continuous-and-separately-holomorphic` | ai-altered | ai-altered | Immediate from the Frechet definition this page adopts, so no source states it separately; it exists because that definition is the library's choice and its consequences must be recorded. |
| `def-multivariable-power-series` | ai-altered | not-applicable | Lebl and Boas both define the multi-indexed series; this version fixes absolute convergence through a bijection N -> N^m and cites the published complex rearrangement theorem so that no second notion of unordered sum is introduced. No proof component. |
| `lem-multivariable-geometric-series-on-a-distinguished-boundary` | ai-altered | ai-altered | Boas and Jabbari expand the Cauchy kernel inside their proofs; extracted here as a lemma with the explicit majorant, which is reused by the Cauchy estimates. |
| `thm-cauchy-integral-formula-on-a-polydisc` | ai-altered | ai-altered | All three SCV sources state the polydisc formula. Materially restated as an ITERATED integral, never as an integral over the distinguished boundary, so that no interchange is performed and Fubini is not used (D2, the design's trap (iii)). |
| `thm-power-series-expansion-in-several-complex-variables` | literature-derived | ai-altered | Lebl and Jabbari state the expansion. The title and Statement claim only Cauchy-integral coefficients, since the derivative identification needs the next theorem (F2). |
| `thm-power-series-define-holomorphic-functions-in-several-variables` | literature-derived | ai-altered | Lebl SCV §1.2. The proof isolates the first-order term by the multinomial expansion and bounds the remainder by the majorant series. |
| `thm-osgood-lemma-in-several-complex-variables` | literature-derived | ai-altered | Osgood's lemma as Boas and Jabbari state it. The proof is assembled from the two preceding theorems of this page. |
| `cor-holomorphic-functions-in-several-variables-are-smooth` | literature-derived | ai-altered | Lebl and Jabbari record smoothness and the holomorphy of every mixed derivative; the derivative identification of the coefficients is placed here. |
| `cor-uniqueness-of-multivariable-power-series-coefficients` | literature-derived | ai-altered | Lebl states uniqueness. It is a separate item because the definite article in 'the coefficients' depends on it. |
| `thm-cauchy-estimates-on-a-polydisc` | literature-derived | ai-altered | Lebl and Boas state the polydisc Cauchy estimates; the proof applies the published ML estimate to each of the m iterated integrals. |
| `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` | ai-altered | ai-altered | The telescoping estimate is inside the sources' proof of the locally bounded theorem; extracted as a lemma and rewritten to use the published Cauchy inequality rather than a Schwarz lemma (A2, F9). |
| `thm-locally-bounded-separate-holomorphy` | literature-derived | ai-altered | Lebl and Boas state it. The proof is the Lipschitz lemma plus Osgood; the item says the removal of local boundedness is not available at this point in the reading order and does not use it. |
| `thm-cauchy-riemann-characterization-in-several-complex-variables` | literature-derived | ai-altered | Boas gives the C^1 equivalence. The proof routes through the published total derivative and the criterion lemma, and states which implication uses C^1. |
| `prop-algebra-of-holomorphic-functions-in-several-variables` | ai-altered | ai-altered | Standard and assumed by all three sources without a separate statement; recorded here because cor-holomorphic-functions-on-a-domain-form-an-integral-domain and the examples cite it. |
| `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables` | literature-derived | ai-altered | In all three sources. The proof reduces to the published one-variable Weierstrass convergence theorem on slices plus Osgood, with the derivative convergence from this page's Cauchy estimates. |
| `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` | literature-derived | ai-altered | Lebl states the distinguished-boundary bound; the proof pushes one coordinate at a time to its circle with the published boundary maximum-modulus principle. |
| `def-holomorphic-map-and-complex-jacobian` | literature-derived | not-applicable | Lebl SCV §1.3 definitions of a holomorphic map and its complex Jacobian, using the library's published matrix-of-a-linear-map over C. No proof component. |
| `thm-componentwise-holomorphy-in-several-complex-variables` | literature-derived | ai-altered | Lebl's componentwise reduction. The proof covers n=0 and n=1 explicitly. |
| `thm-chain-rule-for-holomorphic-maps-in-several-variables` | literature-derived | ai-altered | Lebl SCV §1.3 chain rule with the Jacobian product; proof from the Frechet definition. |
| `cor-complex-jacobian-determinant-is-multiplicative` | ai-altered | ai-altered | The determinant half of the chain rule, which the sources use without stating separately; recorded here because the B page computes it. |
| `thm-identity-theorem-in-several-complex-variables` | literature-derived | ai-altered | All three sources state the open-set form. The Statement says in terms that an accumulation point of the zero set is neither assumed nor sufficient, which is the design's trap (ii). |
| `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` | literature-derived | ai-altered | Lebl records that the ring of holomorphic functions on a domain is an integral domain; the proof is the identity theorem applied to the nonempty open set where f is nonzero. |
| `thm-maximum-modulus-principle-in-several-complex-variables` | literature-derived | ai-altered | Lebl and Jabbari state the interior-maximum form; the proof reduces to the published one-variable local maximum modulus principle and the identity theorem. |
| `cor-liouville-theorem-in-several-complex-variables` | literature-derived | ai-altered | Lebl states it; proof from the Cauchy estimates with radii going to infinity. |
| `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` | literature-derived | ai-altered | Jabbari states the scalar open mapping theorem. The proof restricts to a complex line and applies the published one-variable theorem; the Statement says the result is about scalar targets and asserts nothing for maps into C^n with n>=2. |
| `rem-several-variable-conventions-and-the-identity-theorem-gap` | ai-altered | not-applicable | Records this page's conventions and why the several-variable identity theorem is weaker than its one-variable ancestor, in the justifying rather than surveying form. Every convention it names is one taken from the sources. No proof component. |

### `holomorphic-functions-of-several-variables-examples`

| id | statement | proof | reason |
|---|---|---|---|
| `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc` | ai-altered | ai-altered | A worked polydisc expansion of the kind Lebl §1.2 gives; the centre (1,1) and the finite-series observation are chosen here. Cited by three later examples, so not a generated construction. |
| `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum` | ai-altered | ai-altered | exp(z_0+z_1) is a standard worked expansion; the route through the published Cauchy-product theorem is the library-specific part. Cited by the Cauchy-estimates example, so not a generated construction. |
| `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables` | ai-generated | ai-generated | The witness z_0/(1-z_1) and the observation that its set of absolute convergence is an unbounded product region are chosen here to exercise the definition; directly checkable and cited by nothing. |
| `ex-cauchy-integral-formula-computed-on-a-bidisc` | ai-generated | ai-generated | A directly checkable computation of the iterated formula for a chosen f and polyradius, exercising the stated integration order; cited by nothing. |
| `ex-cauchy-estimates-computed-on-a-bidisc` | ai-generated | ai-generated | A directly checkable comparison of the estimate against the exact derivative for a chosen f, a and polyradius; cited by nothing. |
| `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space` | ai-altered | ai-altered | The design asks for the componentwise reduction checked on an explicit C^2 -> C^3 map; the specific map is chosen here. Cited by the Jacobian example, so not a generated construction. |
| `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` | ai-generated | ai-generated | The map (z_0z_1, z_0+z_1) and the multiplicativity check against a linear swap are chosen here; both are directly computable and cited by nothing. |
| `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` | ai-generated | ai-generated | z_0z_1 on the closed unit bidisc, whose modulus attains its maximum exactly on the distinguished boundary, is chosen here as the concrete content of the corollary; directly checkable and cited by nothing. |
| `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded` | literature-derived | ai-altered | Lebl SCV §1.6 uses exactly this witness for the failure of isolated zeros in dimension at least two; the refuted claim and the verification are written here. |
| `fs-several-variable-identity-theorem-from-an-accumulation-point` | ai-altered | ai-altered | The false claim named in the SC-1 design: the one-variable identity theorem carried over unchanged. The witness z_0 on C^2 is the sources' own; the false statement and the account of which step of a one-variable proof breaks are written here. |
| `fs-separately-real-analytic-functions-are-jointly-continuous` | ai-altered | ai-altered | The second false statement the SC-1 design names, the real analogue of thm-locally-bounded-separate-holomorphy. The witness is the PUBLISHED cex-partial-derivatives-without-continuity rather than a re-minted one; the boundedness and slice real-analyticity claims are proved here since that published item states neither (F14). |
| `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` | ai-altered | not-applicable | Justifies the hypotheses of the locally bounded theorem by contrast with the real case, citing the false statement on this page. The contrast itself is standard; its assembly against this library's published items is local. A `rem-` has no Proof section, so the proof component is `not-applicable`, matching every published remark in the corpus; the reasoning its prose carries belongs to the statement component. |


---

## 9. Web research ledger and dependency-closure statement

### 9.1 Sources, and what each one backs

Every URL below was fetched in full text and carries a `fetch_verified` stamp in
`research/frontier-18-batch-8.coverage.json`. Re-run in this dispatch:
`node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-8.coverage.json`
reports **6/6 source(s) fetch-verified**, and
`node tools/url-sweep.mjs --coverage … --recover --fail-on-dead` reports **6/6
live, 0 failed, 0 recoverable from the archive, 0 suspect**. No archive fallback
was needed and no source was replaced, so every locator below is true of the
edition actually read.

These are also the exact URLs Step 5 will place in `sources.references`: an item
carries the URL of every source whose harvest row names it, and nothing else.

**`the-winding-number-and-the-global-cauchy-theorem`** — 3 independent treatments, 3 of them of textbook, monograph or
lecture-note class. No encyclopedia or wiki entry is used as backing anywhere in
this batch.

- **L. V. Ahlfors, Complex Analysis, 3rd ed. (McGraw-Hill, 1979)** — `textbook`
  - `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
  - read: Ch. 4 §2.1 (printed pp. 114–118) and Ch. 4 §4, §§4.1–4.7 (printed pp. 137–148), both read in full; Ch. 4 §§1.1–1.5, 2.2–2.3, 3.1–3.4 and §5 are outside the claimed range
  - harvest: 24 of that source's own headings — 17 `included`, 7 `deferred`
  - fetch: 6624662 bytes, `pdf`, sha256/16 `8aa98a45a8c074b9`, 2026-08-23T17:43:14.167Z
- **J. Lebl, Complex Analysis (open textbook, v1.0)** — `textbook`
  - `https://www.jirka.org/ca/ca.pdf`
  - read: Ch. 3 §3.4 (PDF pp. 81–86) and Ch. 4 §§4.1–4.3 (PDF pp. 91–103), both read in full; §4.4 onward and the starred sections §§4.5–4.7 are outside the claimed range
  - harvest: 29 of that source's own headings — 4 `already-published`, 23 `included`, 2 `deferred`
  - fetch: 2058822 bytes, `pdf`, sha256/16 `d48d49f1e534ba4e`, 2026-08-23T17:44:46.001Z
- **M. Weber, Complex Analysis (Indiana University, 2026)** — `lecture-notes`
  - `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`
  - read: Ch. 4 §4.1 "Cauchy’s Theorem" (PDF pp. 55–62), read in full; §§4.2–4.4 are outside the claimed range
  - harvest: 14 of that source's own headings — 10 `included`, 4 `deferred`
  - fetch: 6022228 bytes, `pdf`, sha256/16 `893da9917e484edd`, 2026-08-23T17:43:19.908Z

**`holomorphic-functions-of-several-variables`** — 3 independent treatments, 3 of them of textbook, monograph or
lecture-note class. No encyclopedia or wiki entry is used as backing anywhere in
this batch.

- **J. Lebl, Tasty Bits of Several Complex Variables, v4.4** — `textbook`
  - `https://www.jirka.org/scv/scv.pdf`
  - read: Ch. 1 §§1.1–1.6 (PDF pp. 13–46), read in full; Ch. 2 onward and the appendices are outside the claimed range
  - harvest: 34 of that source's own headings — 23 `included`, 11 `deferred`
  - fetch: 1652309 bytes, `pdf`, sha256/16 `729cdb8a00685da5`, 2026-08-23T17:44:48.822Z
- **H. P. Boas, Lecture Notes on Multidimensional Complex Analysis (Texas A&M, Math 650)** — `lecture-notes`
  - `https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf`
  - read: Ch. 1 §§1.1–1.5 (PDF pp. 3–7) and Ch. 2 §§2.1–2.7 (PDF pp. 9–38), read in full; Ch. 3 onward is outside the claimed range
  - harvest: 20 of that source's own headings — 1 `out-of-scope`, 9 `included`, 10 `deferred`
  - fetch: 1726335 bytes, `pdf`, sha256/16 `2d8f5e24943f67e3`, 2026-08-23T17:43:22.417Z
- **M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables (CIMAT)** — `lecture-notes`
  - `https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf`
  - read: Ch. 3 opening and §3.1 (PDF pp. 26–28) and §3.3 with Remark 40 (PDF pp. 44–46), read in full; §3.2 and §§3.4 onward are outside the claimed range
  - harvest: 16 of that source's own headings — 9 `included`, 7 `deferred`
  - fetch: 1399384 bytes, `pdf`, sha256/16 `e8bf824bef56853d`, 2026-08-23T17:44:55.215Z

### 9.2 Convention disagreements found in the sources

1. **Which curves carry a winding number.** Ahlfors defines $n(\gamma,a)$ for
   piecewise differentiable closed curves and proves integrality with the
   auxiliary function $h(t)=(\gamma(t)-a)\exp(-\int\gamma'/(\gamma-a))$, which
   needs $\gamma'$. Lebl and Weber both work with piecewise-$C^1$ curves.
   **This library's contours are RECTIFIABLE**
   (`def-complex-contours-reversal-concatenation-and-closedness`) and carry no
   derivative. Resolved by taking Ahlfors's own alternative, the
   continuous-logarithm route of his Exercise 2 to §2.1, which uses no
   derivative of $\gamma$ anywhere. This is amendment A1 and finding F8, and it
   is the single most consequential convention decision on CA-7.
2. **Chains: group elements or lists.** Ahlfors and Weber present chains as
   elements of the free abelian group on curves and therefore have to say when
   two chains are equal. Resolved by the design's trap (iii): chains are finite
   lists, equality of chains is equality of lists, and no result on the page
   claims two differently presented chains are equal. This is why
   `def-complex-chain-and-cycle` is `ai-altered` and not `literature-derived`.
3. **"Simply connected".** Ahlfors §4.2 defines simple connectivity in the
   EXTENDED plane; Lebl uses the homological condition; Stein–Shakarchi use the
   homotopy condition. Resolved by the design's trap (iv): this page says
   **homologically** simply connected, always with the qualifier, defines only
   the index condition, and invokes no other notion. The equivalence with the
   topological notion belongs to a page that is not built.
4. **What "holomorphic in several variables" means by definition.** Lebl defines
   it by local power-series representability; Boas by the $C^1$
   Cauchy–Riemann system; Jabbari takes continuity plus separate holomorphy.
   Taking any of them makes Osgood's lemma or the locally bounded theorem
   trivially true. Resolved per the design's trap (i): the definition here is
   complex Fréchet differentiability, and the equivalences with local
   power-series representability and with the $C^1$ CR system are proved.
5. **The polydisc formula: iterated or over the distinguished boundary.** Lebl
   and Boas write the Cauchy formula as an integral over the distinguished
   boundary, which presumes a product-measure integral this library has not
   built for a torus. Resolved by stating it as an ITERATED integral throughout,
   which is what the proof actually produces and needs no interchange (D2).
6. **Indexing.** Every source indexes coordinates from $1$. This library indexes
   $\mathbb R^n$ and $\mathbb N$ from $0$, and `def-sequence` is a function on
   $\mathbb N$ with $0\in\mathbb N$. All multi-indices, coordinates and
   polyradii below are 0-indexed, and the boundary pass in §11 checks every sum
   and product at its first index.

### 9.3 Dependency-closure statement

**Every published item this batch proposes as a dependency was opened from disk
and read** — not the scaffold's description of it, the item. 142 distinct
external dependencies were resolved this way. Of those:

* **136 are `status: published`.** Every one has a component `provenance`; the
  split across all 142 is 81 `ai-altered` and 61 `literature-derived` statements.
* **0 are `ai-generated` statements.** No `deps` target anywhere in this batch has
  `provenance.statement: ai-generated`, so the eligibility rule is satisfied with
  no exception to name.
* **0 are legacy-unclassified.** No dependency lacks both `provenance` and the
  legacy `authorship` field, so no `established-from-knowledge` /
  `source-checked` confidence route had to be recorded for any of them.
* **6 are `status: draft`**, all on `the-identity-theorem-and-the-open-mapping-theorem`
  (order 313, a declared prerequisite of both A pages, authored by run
  frontier-17). Enumerated in F11. All six carry
  `provenance.statement: literature-derived`.

**Every load-bearing dependency is internal to its own A/B pair or available in
content at a strictly earlier plan order.** The exceptions to name are exactly
the six `draft-page` rows above, which are earlier in plan order but not yet
public. Mechanically checked, and the check printed `problems: 0`:

```
for every item, for every dep: the dep is EITHER earlier on the same page,
OR on a page of strictly smaller order, OR an authored item on disk;
and no dep resolves to an ai-generated statement, a later page, or nothing.
```

**No external fallback is used.** No item in this batch is planned with
`proved_here: false`, none needs an `external_dependency` record, and
`external_refs` is empty everywhere. Every result either has a local proof from
published dependencies or is a prerequisite this batch builds — the two
prerequisites built for that reason are
`lem-plane-exterior-of-a-closed-disc-is-path-connected` and
`thm-complement-of-a-compact-plane-set-has-one-unbounded-component` (F12).

**No published-dependency repair is proposed.** Reading the 142 dependencies
turned up no unambiguous falsehood in a published Definition, Statement, Fact or
load-bearing citation, so the owner-delegated narrow repair protocol is not
invoked and nothing is queued for it.

---

## 10. Confidence, and what I did NOT verify

**Verified, mechanically, in this dispatch:**

| check | command | result |
|---|---|---|
| harvest structure, with destinations | `node tools/coverage-checklist.mjs research/frontier-18-batch-8.coverage.json --require-destination` | 2 pages, 163 harvested results, 0 errors, 0 warnings |
| source full-text stamps | `node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-8.coverage.json` | 6/6 fetch-verified |
| citation liveness | `node tools/url-sweep.mjs --coverage … --recover --fail-on-dead` | 6/6 live, 0 failed, 0 suspect |
| every authored result still backed | `node tools/source-backing.mjs --coverage … --liveness …` | 59 authored results, every one backed by an openable source |
| scaffold policy and the two-pair cap | `node tools/content-policy.mjs --manifest-only research/frontier-18-batch-8.pages.json` | 98 scoped items, 0 errors, 0 warnings |
| dependency resolution and ordering | local script, reproduced in §9.3 | 0 problems over all 98 items |
| id collisions | local script, reproduced in §6 | 0 collisions over disk, spec and nine other manifests |

**Expected but NOT run here, because they need the spliced spec or the authored
items, and the engine owns them:** `validate-plan.mjs` (needs step 4's splice; I
expect `size` to pass at 42 and 32 items against a ceiling of 60, and the
acyclicity and forward-freedom checks to pass, since the equivalent per-item
check above found no same-page or cross-page ordering violation);
`depsource.mjs` (I expect 0 `unresolved`, 0 `planned-later`, 6 `draft-page` as
enumerated in F11, and 2 `homeless` — `def-integers` and `thm-induction-principle`
are published items that sit on no page, a pre-existing corpus condition this
batch does not create); `proof-contract.mjs` (reads `items/<id>.md`, which does
not exist before step 5); `prosecheck.mjs`, `finite-smoke.mjs`, `risk-report.mjs`
and `precheck.mts` (all read authored item text). **A claim that a gate would
pass is not a gate passing.**

**What I did not verify, stated plainly:**

1. **I did not verify the harvest's faithfulness to the sources by re-reading
   them page by page in this dispatch.** The 163 harvest rows and their locators
   were written by the first dispatch of this batch. I re-ran the structural gate
   and the fetch and liveness checks, and I spot-checked the rows that the
   scaffold's load-bearing items cite; I did not re-enumerate all six sources'
   headings from scratch. Step-6 Alpha's faithfulness check is the one that
   closes this, and it should treat the harvest as unconfirmed by a second reader.
2. **I did not re-derive every proof.** I checked the chain of reasoning of every
   landmark and of every item whose strategy makes a load-bearing claim about a
   published dependency, and I opened the actual Statement of every dependency
   those items cite. Routine algebra inside a strategy I read for plausibility,
   not line by line.
3. **The B-page numeric computations are unchecked arithmetic.** Seven examples
   carry `ai-generated` constructions whose truth is a finite computation
   (§8). I have not performed those computations; the step-5 authoring obligation
   recorded against each is to compute the value before writing it.
4. **`prop-star-shaped-plane-domains-are-homologically-simply-connected` asserts a
   star-shaped open set is a DOMAIN.** It is — star-shaped implies path-connected
   implies connected — but the scaffold's strategy does not name the step. I have
   recorded it in §11 as an authoring obligation rather than adding a dependency,
   because the argument is one line from `def-star-shaped-open-subset-of-rn`.
5. **I did not verify that `cor-cauchy-inequalities` is stated for a circle
   contained in the domain of holomorphy in exactly the form the Lipschitz lemma
   needs at every centre.** I read its Statement — $f$ holomorphic on $D(a,R)$,
   $0<r<R$, $|f|\le M$ on $|\zeta-a|=r$, conclusion $|f^{(n)}(a)|\le n!M/r^n$ —
   and the application (centre $\zeta$ with $|\zeta-a_k|\le\theta\rho_k$, radius
   $r<(1-\theta)\rho_k$, then $r\to(1-\theta)\rho_k$) is sound, but the limiting
   step is an authoring obligation and is recorded in §11, not proved here.

---

## 11. Authoring notes for the Step-5 author (me)

These have no scaffold anchor and must not be rediscovered. The full
step-by-step obligation map lives in
`research/frontier-18-batch-8.proof-contracts.json`; what follows is the part
that is judgment rather than bookkeeping.

### 11.1 Boundary and degenerate cases already identified

| where | case | what to write |
|---|---|---|
| `lem-contour-subdivision-into-discs-missing-a-point` | degenerate parameter interval | a constant contour, $a=b$: the partition is trivial and the single arc lies in $D(\gamma(a),d)$. Do not assume a nondegenerate interval |
| `thm-winding-number-circle-traversed-k-times` | $k=0$ | the contour is CONSTANT and its trace is the single point $a+r$, not the circle. The claim about $D(a,r)$ and about $\lvert z-a\rvert>r$ still holds with value $0$; say so rather than excluding $k=0$ |
| `thm-winding-number-circle-traversed-k-times` | $k<0$ | reversal of $\gamma_{\lvert k\rvert}$, via `prop-winding-number-under-reversal-and-concatenation` |
| `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` | $K=\varnothing$ | the complement is the connected plane; one component, and it is unbounded |
| `def-complex-chain-and-cycle`, `thm-winding-number-chain-laws` | the empty chain | it is a cycle; its integral and index are $0$. Every chain-level result must hold for it |
| `def-complex-chain-and-cycle` | $m_k=0$ terms | excluded from the trace by definition and contributing nothing to any sum. Say it once, in the definition |
| `cor-global-cauchy-theorem-homology` | $\Omega=\varnothing$, $\Gamma$ empty | both give $0$; dispatch them before the main argument (F1) |
| `thm-componentwise-holomorphy-in-several-complex-variables` | $n=0$ | vacuous; and $n=1$ recovers the scalar definition |
| `def-multivariable-power-series`, all multi-index sums | $\alpha=0$ | $z^0=1$, $0!=1$, and the $\alpha=0$ term is the constant. Every product $\prod_{k<m}$ is over $k=0,\dots,m-1$: **ℕ contains 0 here** |
| `lem-multivariable-geometric-series-on-a-distinguished-boundary` | $m=1$ | the statement must reduce to the published one-variable geometric expansion, not to a degenerate empty product |
| `thm-cauchy-riemann-characterization-in-several-complex-variables` | both directions | say which implication uses $C^1$ and which does not; the item is an iff and the $C^1$ hypothesis is not symmetric |
| `thm-homological-simple-connectivity-equivalences` | every arrow | it is a cycle of implications plus two side arrows; each must be discharged, and three are items already on the page |
| `fs-separately-real-analytic-functions-are-jointly-continuous` | the slice through the origin | it is identically zero, hence real analytic; the refutation must say so, because $b=0$ is exactly where the quotient formula does not apply |

### 11.2 Obligations that are not in any strategy and must not be lost

1. **`prop-star-shaped-plane-domains-are-homologically-simply-connected` needs one
   extra line**: `def-homologically-simply-connected-complex-domain` is stated for
   a complex DOMAIN, so the proof must say that a star-shaped open set is
   path-connected, hence connected, hence a domain. One line from
   `def-star-shaped-open-subset-of-rn`; do not leave it implicit.
2. **`lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz`
   uses a limiting form of the Cauchy inequality.** `cor-cauchy-inequalities`
   gives $\lvert g'(\zeta)\rvert\le M/r$ for each $r$ with the circle
   $\lvert w-\zeta\rvert=r$ inside the slice's disc of holomorphy. Apply it at
   every $\zeta$ with $\lvert \zeta-a_k\rvert\le\theta\rho_k$, for every
   $r<(1-\theta)\rho_k$, and take the infimum over $r$ to get
   $M/((1-\theta)\rho_k)$. Write the infimum step; do not cite the inequality as
   if it were stated at the boundary radius.
3. **The telescoping in the same lemma changes one coordinate at a time**, and
   every intermediate point must be checked to lie in the closed polydisc of
   polyradius $\theta\rho$ — it does, because each coordinate of an intermediate
   point is a coordinate of $z$ or of $w$. State it; it is the step that makes the
   bound $M$ available uniformly.
4. **`thm-contour-parameter-integrals-are-holomorphic` needs the oscillation to be
   uniform in the parameter.** Uniform continuity of $\varphi$ on the compact
   $\gamma^\ast\times K$ gives one $\delta$ that works for every $z\in K$
   simultaneously; uniform continuity of $\gamma$ turns that into a mesh
   condition. Both are needed and neither is enough alone.
5. **`lem-dixon-entire-gluing` must construct $\Omega_0$ before using it.**
   $\Omega_0=\{z\notin\Gamma^\ast : n(\Gamma,z)=0\}$ is open by
   `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace`, and
   $\Omega\cup\Omega_0=\mathbb C$ is exactly the null-homology hypothesis
   unpacked. Write both, then the agreement on the overlap, then the gluing. The
   design's trap (ii) is that nothing here may be asserted.
6. **`cor-global-cauchy-formula-higher-derivatives` differentiates a locally
   constant multiple.** On a neighbourhood of a fixed $z$ the index is a CONSTANT
   $k$; differentiate $kf=F_1$ there, not $n(\Gamma,\cdot)f$ globally. The index
   is not differentiable across the trace and the identity is only local.
7. **`cor-principal-logarithm-is-holomorphic-on-the-slit-plane` needs the slit
   plane to be star-shaped with respect to $1$** — the segment from $1$ to any
   $z$ not on $(-\infty,0]$ misses $(-\infty,0]$ — and the intermediate-value
   argument needs $\operatorname{Im}F$ CONTINUOUS along that segment, which it is
   because $F$ is holomorphic. Both are one line and both are load-bearing.
8. **Notation.** No applied canonical embedding anywhere: write $k$, $0$, $m$, not
   $\iota(k)$, $\iota(0)$, $\iota(m)$ (`content-policy` error
   `notation-iota-applied`). No wikilink inside `$…$`. After well-definedness,
   conventional $\lim$ notation, not the arrow form.
9. **Prose.** No count of anything on a page, no positional claim not derived from
   the spec, and any scope denial scoped to this page's declared prerequisites —
   the phrase to use is "not available at this point in the reading order", which
   `thm-locally-bounded-separate-holomorphy` and
   `rem-several-variable-conventions-and-the-identity-theorem-gap` both already
   carry in their strategies.
10. **Landmarks** (`landmark: true`), so the birds-eye flowchart is not empty:
    on CA-7, `thm-winding-number-is-integer`,
    `def-winding-number-closed-complex-contour`, `def-complex-chain-and-cycle`,
    `def-null-homologous-and-homologous-complex-cycles`,
    `def-homologically-simply-connected-complex-domain`, `lem-dixon-entire-gluing`,
    `thm-global-cauchy-integral-formula-homology`,
    `cor-global-cauchy-theorem-homology`,
    `thm-primitives-homologically-simply-connected-domains`,
    `thm-holomorphic-logarithms-homologically-simply-connected-domains` and
    `thm-homological-simple-connectivity-equivalences`; on SC-1,
    `def-holomorphic-function-in-several-complex-variables`,
    `def-balls-and-polydiscs-in-complex-euclidean-space`,
    `thm-cauchy-integral-formula-on-a-polydisc`,
    `thm-power-series-expansion-in-several-complex-variables`,
    `thm-osgood-lemma-in-several-complex-variables`,
    `thm-locally-bounded-separate-holomorphy`,
    `thm-componentwise-holomorphy-in-several-complex-variables`,
    `thm-identity-theorem-in-several-complex-variables` and
    `thm-cauchy-riemann-characterization-in-several-complex-variables`.

### 11.3 Page summaries

Each A page gets exactly two nonempty prose paragraphs, each under 150 words:
paragraph 1 the background and the named results from declared dependencies the
development uses; paragraph 2 the definitions and theorems developed here and
their logical progression. No counts, no self-ranking, no claim about another
page, no reading position not derived from the spec. Neither B page gets an
authored summary body.

For CA-7 the declared prerequisites to name in paragraph 1 are
`the-identity-theorem-and-the-open-mapping-theorem` and
`the-topology-of-euclidean-space`; the material actually used from earlier pages
that paragraph 1 should name is the contour integral and the ML estimate, the
fundamental theorem for contour integrals, the kernel of $\exp$, Liouville's
theorem and Morera's triangle criterion. For SC-1 they are the total derivative,
$\mathbb R^n$ as a normed space, the one-variable Cauchy integral formula on a
circle, the Cauchy inequalities and the Weierstrass convergence theorem — and see
F6/F7 before writing anything about `fubini-and-change-of-variables`, which the
page does not use.

---

## 12. The proof contract, and what is and is not settled in it

`research/frontier-18-batch-8.proof-contracts.json` is version 1, level
`frontier-18`, scope **81 proof-bearing items** — every theorem, lemma,
proposition, corollary, example, counterexample and false statement in the batch.
The 6 definitions and 5 remarks are not proof-bearing and are out of scope.

It carries **574 citation entries** and **286 planned proof steps**.

**What is settled now and must not be re-derived.**

* **312 of the 574 citations name an item already on disk, and every one of them
  carries an EXACT quote verified to occur in that item's own `Statement`,
  `Statement refuted`, `Definition` or `Example` section.** Verified
  independently in this dispatch: 312 checked, 0 mismatches. This is the
  citation-fidelity work done from the actual items rather than from the
  scaffold's description of them.
* **The eight boundary axes are dispositioned on every one of the 81 items** —
  648 rows. `node tools/boundary-audit.mjs research/frontier-18-batch-8.proof-contracts.json --min-cluster 2 --fail-on-template --fail-on-contradicted`
  reports **no template reuse at or above two members**: all 357
  `not_applicable` rationales are distinct and each names that item's own claim
  shape. The contradiction detectors were skipped because the items are not
  authored yet, so that half is open until step 6.
* **`finite_smoke` is not empty, and the reason it is nearly empty is recorded.**
  Of the ten checks `node tools/finite-smoke.mjs --self-test` actually defines,
  exactly one models a claim in this batch: `matrix-ring-laws-mod-n` verifies
  determinant multiplicativity in a finite matrix ring, which is the algebraic
  fact `cor-complex-jacobian-determinant-is-multiplicative` and
  `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` rest on. Both carry it.
  The other seventy-nine items are about contour integrals, winding numbers,
  polydisc power series and holomorphy in several variables, and no registered
  check is a bounded model of any of them; naming one anyway would resolve to
  nothing and report green. `node tools/finite-smoke.mjs research/frontier-18-batch-8.proof-contracts.json`
  reports **2/81 items carrying obligations** — that count, not a green tick, is
  the evidence the gate has something to run.

**What is NOT settled and is my own step-5 obligation.**

* **262 citations name items this batch has not authored yet.** Their
  `source_section` is fixed by kind and their `quote` is the planned item's TITLE,
  which is the proposition in this library's title style. At step 5 each becomes
  the exact clause of the authored Statement that the `[F#]` or `[L#]` actually
  states. `proof-contract.mjs` cannot check any of this before the items exist.
* **The 286 steps are the planned proof skeleton, taken from each item's
  scaffold strategy.** Step ids, the assignment of facts to steps and the
  `uses` lists are provisional and are re-derived against the authored text at
  step 5. Nothing downstream may treat a step id here as an anchor.
* **`risk_review` is absent from every contract, deliberately.** Only Alpha
  writes one, at step 6; `--require-reviewed` at step 5 could never pass.
* **`routine_steps` is empty everywhere** because no step has been written yet;
  the split between derivations and routine steps is made at authoring.

**One authoring constraint the contract format imposes, which is easy to miss.**
A citation's `source_section` must be one of `Statement`, `Statement refuted`,
`Definition` or `Example`, and a `rem-` item has none of them. Every wikilink
inside a labelled `[F#]`/`[A#]`/`[L#]` fact needs a citation entry
(`citation-fact-uncontracted`), so **a `rem-` may never be wikilinked inside a
labelled fact paragraph.** Dictionary remarks — `rem-complex-euclidean-space-dictionary`,
`rem-complex-plane-euclidean-dictionary`, `rem-locally-uniform-convergence-dictionary`,
`rem-plane-star-shaped-and-convex-dictionary`, `rem-domain-hypotheses-for-closed-versus-exact` —
go in the `**Given:**` context paragraph instead, which is what the 22 published
items that cite one already do. The contract omits all five for that reason, and
their omission is a format constraint, not a judgement that the page does not use
them.

---

## Step-3 fix pass

Reviewing Alpha: **group `a`** (batches 6, 7, 8), report
`research/frontier-18-alpha-a-step3-scaffold-review.md`, machine half
`research/frontier-18-alpha-a-step3-verdicts.json`. Id prefix for this batch is
`B8-`. Both of my pairs are **`sufficient`**:
`the-winding-number-and-the-global-cauchy-theorem` outright,
`holomorphic-functions-of-several-variables` after the repair Alpha applied
itself.

The report's §9 "What the `3-fix` stage owes" reads, for me, **"Beta-8 — nothing.
B8-1 is applied; B8-2, B8-3 and B8-4 are records."** No finding was routed to
this batch. I changed no scaffold file in this pass. What follows is the
per-id disposition and the verification behind each, then the authoring notes
Alpha left with no scaffold anchor.

### B8-1 · MAJOR · `b-leaf` dependency — **already correct** (applied by Alpha, verified by me from disk)

Alpha removed the `deps` edge to `cex-partial-derivatives-without-continuity`
from `fs-separately-real-analytic-functions-are-jointly-continuous` and
`rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`,
rewrote both strategies, and renumbered the `fs-` contract's `F2`–`F8` to
`F1`–`F7`. Verified, not assumed:

* **No `deps` edge survives.** A programmatic sweep of every item in
  `research/frontier-18-batch-8.pages.json` finds zero `deps` arrays containing
  that id. Both items carry seven deps.
* **The two surviving textual mentions are the intended prose instructions** —
  one in each strategy, each telling the step-5 author to name the published
  item in prose *without* a wikilink and stating the `b-leaf` reason. Neither is
  a citation.
* **The contract's single remaining mention is the amended `nonempty-choice`
  boundary row**, not a fact citation.
* **The renumbering is internally consistent.** Across all 81 contract entries:
  every `derivations[].inputs` fact token resolves to a declared
  `citations[].fact`; every `step N.N` input resolves to a `step` value present
  in the same entry; every `citations[].uses` entry names a step that exists;
  no duplicate step-entry id; all eight standard boundary dispositions present
  on every entry; and every declared fact label matches the `/^[FLA]\d+$/`
  grammar `tools/facts-block.mjs` parses. **Zero structural problems.** This is
  the check that matters most, because a hand-renumbering is exactly where a
  dangling `F#` would hide, and it would have surfaced as
  `citation-fact-missing` at step 5 rather than here.
* **The mathematics of the rewritten refutation closes without the removed
  dependency.** $f(x,y)=xy/(x^2+y^2)$ off the origin, $f(0,0)=0$: bounded by
  $2|xy|\le x^2+y^2$, so $|f|\le 1/2$; the slice at fixed $b\ne0$ is
  $x\mapsto bx/(x^2+b^2)$, a quotient of polynomials with nowhere-vanishing
  denominator, real analytic by the published closure theorem; the slice at
  $b=0$ is identically $0$; the other variable follows by the symmetry
  $f(x,y)=f(y,x)$; and along $y=x$ with $x\ne0$ the value is $1/2\ne f(0,0)$,
  so $f$ is discontinuous at the origin by `def-metric-continuity`, which is in
  `deps` and stays. All three properties are now proved on this item. Nothing
  is imported and nothing is lost.

I accept the repair. It is also the right call on the mechanics: `validate-plan`
errors `b-leaf` on any dep homed on an examples page *independently of
`requires`*, so no spec edit could have saved the edge, and my F14 was wrong to
introduce it on the strength of the SC-1 design line. The design's instruction
("cited rather than re-minted") is unimplementable as written; that line is the
lead Alpha's step-4 correction, not mine.

### B8-2 · record only · draft-dependency finding closed — **already correct**

My F11 listed six deps as `draft-page`, all on
`the-identity-theorem-and-the-open-mapping-theorem`. Alpha confirms all six and
the page itself are `status: published` on disk today. Nothing to change; the
scaffold already cites them as ordinary published dependencies. My F13 (nothing
built between orders 317 and 348) needs no action either — the highest-order
external home page any SC-1 item cites is 313.

### B8-3 · record only · the design cites a nonexistent result — **already correct**

CA-7's THMS paragraph attributes "$\mathbb C\setminus\gamma^\ast$ has exactly one
unbounded component" to `the-topology-of-euclidean-space`, which states no such
thing, as my F12 reported and Alpha confirmed mechanically against `items/`.
The scaffold already builds the prerequisite rather than citing the phantom:
`lem-plane-exterior-of-a-closed-disc-is-path-connected` and
`thm-complement-of-a-compact-plane-set-has-one-unbounded-component`, both placed
ahead of their consumer. **Alpha approved the build.** Correcting the design
line is the lead Alpha's step-4 edit, not a scaffold change.

### B8-4 · record only · `fubini-and-change-of-variables` is a declared prerequisite nothing cites — **pushed back is not mine to push; the decline is accepted**

My F7 proposed removing the edge. **Alpha declined the spec edit** and I accept
the reasoning: an unused page-level `requires` is harmless, `validate-plan`
checks the other direction and passes, and `research/plan-spec.json` is outside
my write scope in any case. Recorded for the lead Alpha at step 4. My F6 (add
`mixed-partials-taylor-and-extrema` as a direct prerequisite) is likewise
declined — it and `absolute-convergence-and-rearrangement` are already in the
transitive closure at orders 231 and 129, so a direct edge would only produce a
`redundant-prereq` advisory. No change.

The zero-citation count is a *consequence* of the trap-(iii) disposition Alpha
approved, not an oversight: `thm-cauchy-integral-formula-on-a-polydisc` proves
the polydisc formula by induction on $m$, applying the one-variable circle
formula one variable at a time, and invokes no Fubini anywhere.

### Findings not addressed to me

**X-1** is cross-batch and closed for the lead Alpha. **B6-1 … B6-4** and
**B7-1 … B7-4** belong to Beta-6 and Beta-7. I touched no file of theirs.

### Checks re-run in this pass

| check | result |
|---|---|
| `coverage-checklist.mjs research/frontier-18-batch-8.coverage.json` | **pass** — 2 pages, 163 harvested results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json` | **pass** — 784 scoped items across the whole run, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | **pass** — acyclic and consistent; `redundant-prereq` advisories only. Note this validates the spec's *current* state: my items are spliced at step 4, so this is not yet a check of my manifest |
| `proof-contract.mjs research/frontier-18-batch-8.proof-contracts.json` | 81 errors, **all `item-missing`** and nothing else — the expected result before authoring, since the gate reads item text from disk. It gives no evidence either way about the renumbering, which is why I checked that structurally instead (B8-1 above) |
| contract structural sweep (labels, fact resolution, step resolution, `uses` targets, boundary completeness) over all 81 entries | **0 problems** |

Contract coverage by kind is unchanged and consistent: every proof-bearing item
has an entry (`lem` 13, `thm` 27, `cor` 15, `prop` 4, `ex` 15, `cex` 3, `fs` 4);
`def` and `rem` items have none, which is the batch's convention and the reason
Alpha's B8-1 repair touched only the `fs-` entry. No contract entry lacks a
manifest item.

---

## Step-5 authoring obligations carried from the Alpha review

These have **no scaffold anchor** — they are things Alpha found while tracing
routes, stated in its report and nowhere in `pages.json`. They are recorded here
because that is where my step-5 self will look, and a finding that lives only in
a review is a finding that gets lost.

### A1 · The (ii)⇒(iii) arrow of `thm-homological-simple-connectivity-equivalences` may NOT cite item 38

This is the one that would produce a circular proof, so it is first.

Item 40's strategy says "three of the arrows are already proved on this page."
**That must not be read as covering (ii)⇒(iii).** Item 38,
`thm-holomorphic-logarithms-homologically-simply-connected-domains`, is stated
for a *homologically simply connected* domain — hypothesis **(i)** — and its own
proof takes a primitive from item 37, which needs (i) as well. Citing it inside
the equivalence cycle would assume what the cycle is proving.

Write (ii)⇒(iii) by **re-running item 38's argument from hypothesis (ii)
directly**: $f$ nowhere zero and holomorphic makes $f'/f$ holomorphic; (ii)
supplies a primitive $F$ of $f'/f$; adjust $F$ by a constant so $\exp(F(z_0))=f(z_0)$
at one point; then $f\exp(-F)$ has zero derivative on the domain, hence is
constant, and the constant is $1$. Nothing in that needs (i). Alpha traced the
remaining arrows and reports the six-condition cycle closes, including
(iii)⇒(iv) by differentiating $\exp(g(z))=z-p$ to get $g'(z)(z-p)=1$, and
(v)⇒(vi) by applying (v) to $1/(z-p)$.

### A2 · Write the maximum-modulus conclusion at the strength the argument gives

`thm-maximum-modulus-principle-in-several-complex-variables`'s strategy says the
slice $g_v$ is "constant near $0$". The hypothesis $|f|\le|f(a)|$ holds on the
*whole* ball $B$, so $|g_v|\le|g_v(0)|$ on the whole disc $\{|\xi|<r\}$ with
$a+\xi v\in B$, and the one-variable principle gives $g_v$ constant on **all** of
that disc — hence $f$ constant on all of $B$, not merely on a smaller ball. The
strategy as written is sound and still closes (the identity theorem propagates
either way), so this is not a defect; it under-claims. Author the stronger form.

### A3 · Harmonise the witness's variable names across the two SC-1 items

`fs-separately-real-analytic-functions-are-jointly-continuous` writes the witness
as $f(x,y)=xy/(x^2+y^2)$; `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`
writes the same function as $x_0x_1/(x_0^2+x_1^2)$. Same function, and the remark
cites the false statement, so a reader meets both spellings on one page. Pick one
at authoring — the $x,y$ form, since the remark is prose and the false statement
carries the computation. Cosmetic, mine to fix at step 5, no scaffold change now.

### A4 · Both mentions of the published real witness stay wikilink-free

`cex-partial-derivatives-without-continuity` is homed on
`the-total-derivative-examples`, a B page. Name it in prose in both items; do
**not** wikilink it and do **not** add a `deps` edge. `validate-plan.mjs:235`
errors `b-leaf` on any dep homed on an examples page regardless of `requires`,
so reintroducing it at step 5 fails the splice after the text is written. Both
strategies now say this in-line; this note is the second guard.

### A5 · Cross-page seams the group Alpha checked, and what they oblige me to

Alpha read batches 6, 7 and 8 together and reports the seams are correctly
handled. Two carry an authoring obligation for me:

* **Rectifiable versus $C^1$.** This batch's contours are rectifiable and carry
  no derivative — which is precisely why the continuous-logarithm route replaces
  CA-7's prescribed auxiliary-function proof (amendment A1, finding F8; Alpha
  approved it as *necessary*, not preferred, because
  `def-complex-contours-reversal-concatenation-and-closedness` defines a complex
  contour as a rectifiable path and there is no $\gamma'$). Batch 6's boundary
  chains are piecewise-$C^1$. **`rem-the-winding-number-and-the-planar-vortex-field`
  is the single item that crosses the seam**, and it must keep restricting itself
  to a piecewise-$C^1$ closed contour before invoking the real line integrals.
  Do not relax that hypothesis when authoring.
* **Measure-zero exceptional sets.** Batch 7 owns the translation between Jordan
  content and Lebesgue nullity and sits at a *later* plan order. Nothing in this
  batch may reach for Lebesgue nullity. Alpha's warning about
  `lem-content-zero-implies-null` being stated for $A\subseteq\mathbb R$ only is
  addressed to the batch-6 and batch-7 authors, not to me — no item of mine
  cites it.

### A6 · Approved, and to be carried into the authored text unchanged

Alpha confirmed these from the manifest and I should not quietly undo them:
the nonemptiness derivation in `cor-global-cauchy-theorem-homology` (which
refuses to assert that a rectifiable trace has empty interior, and gets
nonemptiness from compactness plus the connectedness of $\mathbb C$ instead);
the title of `thm-power-series-expansion-in-several-complex-variables`, which
deliberately does not yet claim $c_\alpha=\partial^\alpha f(a)/\alpha!$ because
that needs the following theorem; the keyhole example's refusal to state an index
on the radial segments, which lie in $\Gamma^\ast$; and the holomorphy definition
as complex Fréchet differentiability **without** continuity or local boundedness
built in — the departure from all three harvested sources that makes Osgood's
lemma and `thm-locally-bounded-separate-holomorphy` theorems rather than
tautologies. My F9 (amendment A2, the Lipschitz bound from the Cauchy inequality)
and F10 (keep the two `owner-decision` deferrals) are **approved**.

---

## Continuity checkpoint (step 5, authoring)

**Substage.** Step-5 authoring, in progress. CA-7 pair complete: all 42 A-page
items and all 12 B-page items of `the-winding-number-and-the-global-cauchy-theorem`
and its companion are written to `items/` as `status: draft`, `origin: session`,
and every proof-bearing one passes `precheck.mts` in canonical stratification.
SC-1 (`holomorphic-functions-of-several-variables`, 32 + 12 items) is NOT yet
authored, and no page composition file under `library/complex-analysis/` exists
yet.

**Owned artifact paths.** `items/<id>.md` for the 98 ids of
`research/frontier-18-batch-8.pages.json`; `library/complex-analysis/<page>.md`
for the four pages; `research/frontier-18-batch-8.{notes,coverage,proof-contracts}.md/json`.

**Gates run so far.** `precheck.mts` on every authored item (clean);
`depcheck.mjs` (my one wikilink defect fixed; the remaining 13 `link-unresolved`
errors belong to other batches' in-flight items and are not mine).
`proof-contract.mjs`, `prosecheck.mjs`, `content-policy.mjs`,
`coverage-checklist.mjs`, `validate-plan.mjs`, `fwdcheck`, `extcheck`,
`citecheck`, `rendercheck` are NOT yet re-run against the authored text.

**Authoring decisions that must not be re-derived.** Subdivision additivity of
the complex line integral is proved inline (concatenation of increasing affine
reparametrisations onto $[0,1]$ plus induction) in
`lem-tagged-sums-approximate-a-contour-integral` and in
`thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment`; there is no
standalone item for it and minting one would be a scaffold change.
`lem-plane-exterior-of-a-closed-disc-is-path-connected` was widened at authoring
to two clauses, $\{|z-c|>R\}$ for $R\ge0$ and $\{|z-c|\ge R\}$ for $R>0$, because
`ex-periods-of-a-holomorphic-function-on-an-annulus` needs the closed exterior
and `cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm` needs
the punctured plane. `ex-index-of-the-boundary-cycle-of-a-round-annulus` states
its null-homology in a STRICTLY LARGER annulus $\{s_1<|z-p|<s_2\}$, because the
trace of the boundary cycle is not contained in the open annulus between its own
two radii.

**Exact next action.** Author the 32 items of
`holomorphic-functions-of-several-variables`, in the reading order of
`pages.json`, then its 12 companion items, then the four page files, then re-run
the full gate list and write the Step-5 report.

## Continuity checkpoint

**Substage.** Step-5 authoring resumed in the current session. CA-7 remains
complete on disk. For SC-1, 14 A-page items and no B-page items are still
missing from `items/`: the final theorem cluster
(`thm-identity-theorem-in-several-complex-variables` through
`rem-several-variable-conventions-and-the-identity-theorem-gap`) and all 12
examples/counterexamples/false statements/remark on
`holomorphic-functions-of-several-variables-examples`. All four
`library/complex-analysis/*.md` page files for batch 8 are still absent.

**Owned artifact paths.** `items/<id>.md` for the 98 ids listed in
`research/frontier-18-batch-8.pages.json`; the four page files under
`library/complex-analysis/`; `research/frontier-18-batch-8.notes.md`;
`research/frontier-18-batch-8.proof-contracts.json`;
`research/frontier-18-batch-8.coverage.json`.

**Completed gates.** Alpha step-3 repair B8-1 is already on disk and rechecked.
A manifest sweep confirms 98 scoped ids, 18 files still missing, and no
existing batch-8 item is missing `status: draft`, `origin: session`, or
component provenance. No new step-5 gates have been run in this session yet.

**Frozen-text state and live constraints.** `research/frontier-18-batch-8.proof-contracts.json`
already contains entries for the 16 missing proof-bearing SC-1 items, so the new
prose should follow those maps rather than re-invent them. The `b-leaf` repair
must stay in place: no `deps` edge or wikilink to
`cex-partial-derivatives-without-continuity`. A2 from Alpha still binds:
`thm-maximum-modulus-principle-in-several-complex-variables` should state the
strength the argument gives, namely constancy on the whole local ball, not only
on a smaller one.

**Exact next action.** Create the missing SC-1 A-page theorem/corollary/remark
files, then the 12 SC-1 companion-page items, then the four page files, and only
after that re-run precheck, contract, coverage, prose and plan/content gates.

## Step-5 authoring

### Items authored

This pass finished the remaining SC-1 gap and the page composition files. Newly authored item files:

- `thm-identity-theorem-in-several-complex-variables`
- `cor-holomorphic-functions-on-a-domain-form-an-integral-domain`
- `thm-maximum-modulus-principle-in-several-complex-variables`
- `cor-liouville-theorem-in-several-complex-variables`
- `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables`
- `rem-several-variable-conventions-and-the-identity-theorem-gap`
- `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc`
- `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum`
- `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables`
- `ex-cauchy-integral-formula-computed-on-a-bidisc`
- `ex-cauchy-estimates-computed-on-a-bidisc`
- `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space`
- `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc`
- `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc`
- `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded`
- `fs-several-variable-identity-theorem-from-an-accumulation-point`
- `fs-separately-real-analytic-functions-are-jointly-continuous`
- `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`

New page files:

- `library/complex-analysis/the-winding-number-and-the-global-cauchy-theorem.md`
- `library/complex-analysis/the-winding-number-and-the-global-cauchy-theorem-examples.md`
- `library/complex-analysis/holomorphic-functions-of-several-variables.md`
- `library/complex-analysis/holomorphic-functions-of-several-variables-examples.md`

I also made batch-local cleanup edits to already-authored items so the final contracts and cross-file gates match the prose actually on disk: `lem-holomorphic-difference-quotient-is-jointly-continuous`, `cor-global-cauchy-theorem-homology`, `thm-homological-simple-connectivity-equivalences`, `cex-annulus-is-connected-but-not-homologically-simply-connected`, `thm-componentwise-holomorphy-in-several-complex-variables`, `thm-maximum-modulus-principle-in-several-complex-variables`, `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables`, and `fs-several-variable-identity-theorem-from-an-accumulation-point`.

### Per-item list

- `lem-tagged-sums-approximate-a-contour-integral` — pass
- `lem-continuous-function-holomorphic-off-a-point-is-holomorphic` — pass
- `thm-contour-parameter-integrals-are-holomorphic` — pass
- `cor-holomorphic-logarithm-has-the-logarithmic-derivative` — pass
- `lem-logarithm-branch-for-a-linear-factor-on-a-disc` — pass
- `lem-contour-subdivision-into-discs-missing-a-point` — pass
- `def-continuous-argument-and-holomorphic-logarithm-branches` — pass
- `thm-continuous-logarithms-exist-along-a-contour` — pass
- `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment` — pass
- `def-winding-number-closed-complex-contour` — pass
- `thm-winding-number-is-integer` — pass
- `cor-winding-number-is-the-normalized-argument-increment` — pass
- `thm-winding-number-locally-constant` — pass
- `lem-plane-exterior-of-a-closed-disc-is-path-connected` — pass
- `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` — pass
- `thm-winding-number-zero-unbounded-component` — pass
- `prop-winding-number-under-reversal-and-concatenation` — pass
- `thm-winding-number-circle-traversed-k-times` — pass
- `def-complex-chain-and-cycle` — pass
- `def-integration-and-index-of-complex-chain` — pass
- `thm-winding-number-chain-laws` — pass
- `thm-winding-number-of-a-cycle-is-integer` — pass
- `cor-cycle-integral-of-a-derivative-vanishes` — pass
- `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` — pass
- `def-null-homologous-and-homologous-complex-cycles` — pass
- `def-homologically-simply-connected-complex-domain` — pass
- `prop-star-shaped-plane-domains-are-homologically-simply-connected` — pass
- `lem-holomorphic-difference-quotient-segment-formula` — pass
- `lem-holomorphic-difference-quotient-is-jointly-continuous` — pass
- `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable` — pass
- `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` — pass
- `lem-dixon-entire-gluing` — pass
- `thm-global-cauchy-integral-formula-homology` — pass
- `cor-global-cauchy-theorem-homology` — pass
- `cor-contour-integrals-homologous-cycles` — pass
- `cor-global-cauchy-formula-higher-derivatives` — pass
- `thm-primitives-homologically-simply-connected-domains` — pass
- `thm-holomorphic-logarithms-homologically-simply-connected-domains` — pass
- `cor-holomorphic-roots-homologically-simply-connected-domains` — pass
- `thm-homological-simple-connectivity-equivalences` — pass
- `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` — pass
- `rem-homological-simple-connectivity-conventions` — pass
- `ex-winding-number-of-the-unit-circle-traversed-three-times` — pass
- `ex-winding-number-of-a-figure-eight-cycle` — pass
- `ex-index-of-the-boundary-cycle-of-a-round-annulus` — pass
- `ex-winding-numbers-of-a-keyhole-contour` — pass
- `ex-continuous-argument-along-a-spiralling-contour` — pass
- `ex-dixon-gluing-traced-on-an-annulus-cycle` — pass
- `ex-periods-of-a-holomorphic-function-on-an-annulus` — pass
- `rem-the-winding-number-and-the-planar-vortex-field` — pass
- `cex-annulus-is-connected-but-not-homologically-simply-connected` — pass
- `cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm` — pass
- `fs-winding-number-depends-only-on-the-trace` — pass
- `fs-every-cycle-in-a-connected-plane-domain-is-null-homologous` — pass
- `rem-complex-euclidean-space-dictionary` — pass
- `def-balls-and-polydiscs-in-complex-euclidean-space` — pass
- `def-holomorphic-function-in-several-complex-variables` — pass
- `def-separately-holomorphic-function` — pass
- `def-wirtinger-operators-in-several-complex-variables` — pass
- `lem-complex-linear-real-differential-criterion` — pass
- `prop-holomorphic-functions-are-continuous-and-separately-holomorphic` — pass
- `def-multivariable-power-series` — pass
- `lem-multivariable-geometric-series-on-a-distinguished-boundary` — pass
- `thm-cauchy-integral-formula-on-a-polydisc` — pass
- `thm-power-series-expansion-in-several-complex-variables` — pass
- `thm-power-series-define-holomorphic-functions-in-several-variables` — pass
- `thm-osgood-lemma-in-several-complex-variables` — pass
- `cor-holomorphic-functions-in-several-variables-are-smooth` — pass
- `cor-uniqueness-of-multivariable-power-series-coefficients` — pass
- `thm-cauchy-estimates-on-a-polydisc` — pass
- `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` — pass
- `thm-locally-bounded-separate-holomorphy` — pass
- `thm-cauchy-riemann-characterization-in-several-complex-variables` — pass
- `prop-algebra-of-holomorphic-functions-in-several-variables` — pass
- `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables` — pass
- `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` — pass
- `def-holomorphic-map-and-complex-jacobian` — pass
- `thm-componentwise-holomorphy-in-several-complex-variables` — pass
- `thm-chain-rule-for-holomorphic-maps-in-several-variables` — pass
- `cor-complex-jacobian-determinant-is-multiplicative` — pass
- `thm-identity-theorem-in-several-complex-variables` — pass
- `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` — pass
- `thm-maximum-modulus-principle-in-several-complex-variables` — pass
- `cor-liouville-theorem-in-several-complex-variables` — pass
- `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` — pass
- `rem-several-variable-conventions-and-the-identity-theorem-gap` — pass
- `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc` — pass
- `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum` — pass
- `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables` — pass
- `ex-cauchy-integral-formula-computed-on-a-bidisc` — pass
- `ex-cauchy-estimates-computed-on-a-bidisc` — pass
- `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space` — pass
- `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` — pass
- `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` — pass
- `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded` — pass
- `fs-several-variable-identity-theorem-from-an-accumulation-point` — pass
- `fs-separately-real-analytic-functions-are-jointly-continuous` — pass
- `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` — pass

### Ledger

No semantic title change was made to any batch-8 item. The newly authored SC-1 block follows the component-provenance ledger already recorded in §8; the rows realised on disk in this pass are:

- `thm-identity-theorem-in-several-complex-variables` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Lebl, Boas and Jabbari all state the open-set form; the proof on disk uses the page's smoothness and local power-series expansion, and says explicitly that an accumulation point of zeros is not sufficient.
- `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Lebl records the ring-theoretic consequence; the proof reduces it to the several-variable identity theorem and continuity of `f`.
- `thm-maximum-modulus-principle-in-several-complex-variables` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Lebl and Jabbari state the theorem; the proof on disk restricts to complex lines, invokes the published one-variable local maximum-modulus principle, and then the several-variable identity theorem.
- `cor-liouville-theorem-in-several-complex-variables` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Lebl states it; the proof on disk takes complex lines through the origin and applies the published one-variable Liouville theorem.
- `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Jabbari states the scalar theorem; the proof on disk restricts to a complex line through two points of a local ball and applies the published one-variable open mapping theorem.
- `rem-several-variable-conventions-and-the-identity-theorem-gap` — statement `ai-altered`, proof `not-applicable`. Source/edit history: the conventions and the open-set-versus-accumulation-point distinction are assembled from the SCV sources and this page's final dependency graph.
- `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc` — statement `ai-altered`, proof `ai-altered`. Source/edit history: standard worked expansion in the style of Lebl; the centre `(1,1)` and the finite-series presentation are local authoring choices.
- `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum` — statement `ai-altered`, proof `ai-altered`. Source/edit history: standard expansion; the proof on disk uses the published Cauchy-product theorem and the exponential addition law.
- `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables` — statement `ai-generated`, proof `ai-generated`. Source/edit history: local checkable witness chosen to exhibit an unbounded product domain of absolute convergence; no counterexample search applies because this is an explicit example, and the convergence region is verified directly from the geometric series.
- `ex-cauchy-integral-formula-computed-on-a-bidisc` — statement `ai-generated`, proof `ai-generated`. Source/edit history: local checkable computation chosen to exercise the iterated integration order; the value is verified by two successive one-variable Cauchy-formula evaluations.
- `ex-cauchy-estimates-computed-on-a-bidisc` — statement `ai-generated`, proof `ai-generated`. Source/edit history: local checkable comparison of the Cauchy estimate with an exact derivative; the distinguished-boundary supremum and the minimised bound are computed directly.
- `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space` — statement `ai-altered`, proof `ai-altered`. Source/edit history: the design called for an explicit `\mathbb C^2\to\mathbb C^3` witness; the specific map on disk is a local choice and the verification uses the componentwise theorem and the exponential derivative.
- `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` — statement `ai-generated`, proof `ai-generated`. Source/edit history: local checkable Jacobian computation chosen to exercise determinant multiplicativity against a coordinate swap.
- `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` — statement `ai-generated`, proof `ai-generated`. Source/edit history: local checkable witness `z_0z_1` chosen to show concretely that the maximum sits exactly on the distinguished boundary and not on arbitrary topological-boundary points.
- `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded` — statement `literature-derived`, proof `ai-altered`. Source/edit history: Lebl's own witness `f(z)=z_0`; the refutation and the checks of unboundedness and nonisolation are written locally.
- `fs-several-variable-identity-theorem-from-an-accumulation-point` — statement `ai-altered`, proof `ai-altered`. Source/edit history: the false claim is the one-variable identity theorem carried over unchanged; the witness `z_0` and the explanation of the broken isolated-zero step are written locally from the page's several-variable counterexample.
- `fs-separately-real-analytic-functions-are-jointly-continuous` — statement `ai-altered`, proof `ai-altered`. Source/edit history: this is the SC-1 design's named real-variable false statement; the witness is the published function used in `cex-partial-derivatives-without-continuity`, but the boundedness, slice real-analyticity, and discontinuity arguments are all proved locally here because the published B-page item states only the discontinuity phenomenon.
- `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` — statement `ai-altered`, proof `not-applicable`. Source/edit history: the real/complex contrast is assembled from Lebl's exercise, the false statement on this page, and the Cauchy-inequality-based Lipschitz lemma.

Scaffold-to-final dependency-list changes made in this pass:

- `thm-identity-theorem-in-several-complex-variables` — dropped scaffold deps on `thm-osgood-lemma-in-several-complex-variables`, `def-complex-domain`, and `rem-complex-euclidean-space-dictionary`; the authored proof uses only smoothness, the local power-series expansion, connectedness, and the several-variable holomorphy definition.
- `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` — dropped scaffold dep on `def-complex-domain`; the authored statement is written directly for a nonempty connected open subset of `\mathbb C^m`.
- `thm-maximum-modulus-principle-in-several-complex-variables` — dropped scaffold deps on `def-complex-domain` and `rem-complex-euclidean-space-dictionary`; the authored proof uses complex-line slices, the one-variable local maximum principle, and the several-variable identity theorem.
- `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` — dropped scaffold deps on `def-complex-domain` and `rem-complex-euclidean-space-dictionary`; the authored proof uses a local ball, a complex line, and the published one-variable open mapping theorem.
- `fs-several-variable-identity-theorem-from-an-accumulation-point` — dropped the dependency on `rem-several-variable-conventions-and-the-identity-theorem-gap` during gate repair; keeping it created a load-bearing forward cycle with that remark's forward references.
- `rem-several-variable-conventions-and-the-identity-theorem-gap` — added `forward_refs` to `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` and `fs-several-variable-identity-theorem-from-an-accumulation-point` so the companion-page pointers are marked as forward references rather than silently load-bearing links.
- `lem-holomorphic-difference-quotient-is-jointly-continuous`, `cor-global-cauchy-theorem-homology`, `thm-homological-simple-connectivity-equivalences`, and `cex-annulus-is-connected-but-not-homologically-simply-connected` — no claim change; each gained one explicit citation in a numbered step so the final proof contract names every fact where it is actually used.
- `thm-componentwise-holomorphy-in-several-complex-variables` — no claim change; removed the dictionary remark from a source-fact line because proof-contract citations may quote only Statement/Statement refuted/Definition/Example sections.

No scaffold item was dropped, merged, renamed, or retitled in the mathematical sense, and no page was split.

### Gates

Ran on Monday, August 24, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/<batch-8 ids>` — pass.
- `node tools/tsx-run.mjs tools/precheck.mts items/<batch-8 ids>` — pass on all 81 proof-bearing items; every definition and remark remains `verification.precheck: n/a`.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass.
- `node tools/content-policy.mjs research/frontier-18-batch-8.pages.json` — pass (98 scoped items, 0 errors, 0 warnings).
- `node tools/proof-contract.mjs research/frontier-18-batch-8.proof-contracts.json --strict` — pass (81/81 entries checked, 0 errors, 0 warnings).
- `node tools/coverage-checklist.mjs research/frontier-18-batch-8.coverage.json` — pass (2 pages, 163 harvested results, 0 errors, 0 warnings).
- `node tools/prosecheck.mjs library/complex-analysis/the-winding-number-and-the-global-cauchy-theorem.md library/complex-analysis/the-winding-number-and-the-global-cauchy-theorem-examples.md library/complex-analysis/holomorphic-functions-of-several-variables.md library/complex-analysis/holomorphic-functions-of-several-variables-examples.md --warnings` — pass.
- `node tools/extcheck.mjs` — pass repo-wide.
- `node tools/depcheck.mjs` — **did not pass repo-wide** because of unrelated existing errors outside batch 8, including YAML-escape defects in out-of-batch quasi-isometry items and a pre-existing unresolved link in `items/lem-a-vector-line-integral-pulls-back-to-the-parameter-region.md`. I sliced the output against every batch-8 id touched in this pass and found no batch-local depcheck error.
- `node tools/fwdcheck.mjs` — **did not pass repo-wide** because of unrelated existing forward-reference defects outside batch 8. The one batch-local forward-reference error in `rem-several-variable-conventions-and-the-identity-theorem-gap` was repaired in this pass; the targeted batch-8 slice is now clean.
- `node tools/citecheck.mjs` — heuristic warnings only, and the targeted batch-8 slice is clean.

### Escalations

- No missing prerequisite or false published dependency forced an out-of-batch repair.
- Repo-wide `depcheck` and `fwdcheck` remain blocked by unrelated files outside batch 8. Under the batch boundary I did not edit those items.

### Confidence

Mathematical confidence is moderate to high on the newly authored SC-1 cluster and high on the gate bookkeeping: every batch-8 item exists on disk, every proof-bearing item prechecks clean, the batch proof contract is synchronized to the final prose and passes `--strict`, the coverage file passes, the page prose passes `prosecheck`, and the batch-local slices of `depcheck`, `fwdcheck`, and `citecheck` are clean.

What I did **not** verify: I did not clear the unrelated repo-wide `depcheck` and `fwdcheck` failures outside batch 8, I did not run any judge lane (owner rule), and I did not independently source-audit every inherited CA-7 item beyond the contract/citation synchronization required to make the final batch proof-contract gate pass.
