# Differential geometry track — smooth manifolds, geometry, Lie theory, and symplectic geometry

> **Commission:** `subjects-01`, `differential-geometry` scaffolder lane  
> **Owner:** this file is the sole writable artifact of the lane.  
> **Placement contract:** the original seam names
> `spectral-sequences-examples`.  The completed homological-algebra scaffold
> subsequently split that endpoint and asks downstream tracks to use
> `grothendieck-spectral-sequences-and-computations-examples`.  This scaffold
> records that reconciliation request in §10; it does not silently alter
> `research/subjects-01-SEAMS.md`.

## 0. Summary for the orchestrator

**Status at the first durable boundary.** The track is being written in
dependency order. `DG-1` is complete below; later pairs will cover smooth
partitions, tangent and cotangent geometry, rank and embedding theorems,
bundles, flows and Frobenius, forms/integration/Stokes, the de Rham theorem,
Riemannian geometry through comparison and Gauss–Bonnet, all assigned Lie
theory, and symplectic/Hamiltonian geometry. This paragraph is a live recovery
summary and must be replaced by the final pair/seam/blocker ledger when the
last pair is appended.

**Sources already obtained in full.** John M. Lee, *Introduction to Smooth
Manifolds*, first-edition full text (494-page searchable PDF); John M. Lee,
*Introduction to Riemannian Manifolds*, second edition (447-page searchable
PDF); Will J. Merry, *Differential Geometry* (406-page, two-semester ETH notes);
Nigel Hitchin, *Differentiable Manifolds* (94-page Oxford notes); and Ana
Cannas da Silva, *Lectures on Symplectic Geometry* (225-page author-hosted
Springer/LNM text). Further full Lie-theory texts and the pair-by-pair source
matrix are recorded in the canonical harvest below. No blocker is presently
recorded.

---

## 1. Why this track exists

The published library supplies an unusually strong base and almost none of the
subject itself. The live plan has authored pages for topological spaces and
continuity (`topological-spaces-and-continuity`, order 249), subspaces,
products, and quotients (`subspaces-products-and-quotients`, 251),
connectedness (253), compactness (255), Euclidean topology (257), the
separation hierarchy (261–269), metrization (275), homotopy (289), and the
fundamental group (291). In particular this track cites, without re-minting,
`def-topological-space`, `def-homeomorphism-and-open-maps`,
`def-product-topology`, `def-quotient-topology`,
`thm-quotient-universal-property`, `def-hausdorff-space`,
`def-second-countable-space`, `thm-second-countable-implies-lindelof`,
`thm-a-locally-compact-hausdorff-space-is-completely-regular`,
`lem-regular-lindelof-spaces-are-paracompact`,
`thm-stone-metric-spaces-are-paracompact`,
`thm-subordinate-partitions-of-unity-exist`, and
`def-homotopy-relative-and-path-homotopy`. The exact published hypotheses,
especially their choice assumptions, are inherited rather than paraphrased
away.

The authored multivariable-calculus band supplies the total derivative and
chain rule (`the-total-derivative`, 229), the Euclidean inverse and implicit
function theorems (`inverse-and-implicit-function-theorems`, 233), Riemann
integration and Jordan content (235), Fubini and compactly supported change of
variables (237), and line integrals and the Euclidean star-shaped Poincaré
lemma (241). The key stable items include
`def-total-derivative-in-euclidean-space`,
`thm-chain-rule-for-total-derivatives`,
`thm-continuous-partial-derivatives-imply-total-differentiability`,
`thm-euclidean-inverse-function-theorem`,
`thm-euclidean-implicit-function-theorem`,
`thm-change-of-variables-for-compact-jordan-sets`,
`cor-change-of-variables-for-compactly-supported-functions`, and
`thm-poincare-lemma-for-star-shaped-domains`. These are the coordinate
engines; this track proves the invariance and gluing needed to turn them into
manifold theorems.

What is absent is exactly the bridge between those bands. The live-plan probes
reported by the owner found no chart definition and only isolated mentions of
smooth manifolds and differential forms. This track therefore starts with the
definition of a smooth structure and builds every global construction whose
coordinate independence is not already a published theorem.

### 1.1 Planned cross-track prerequisites are not called published

The finished prose scaffolds for homological algebra and measure theory are
future build inputs: their `items[]` entries in the live plan are still empty.
This document names their relative pages as reconciliation requirements, not
as facts already on disk. The de Rham block consumes homological algebra's
planned `chain-complexes-and-homology`,
`long-exact-sequences-in-homology`, and diagram-lemma machinery. It defines
the de Rham and singular complexes but never redefines a general chain or
cochain complex. Integration of compactly supported smooth top forms rests on
the **published Riemann/Jordan integral** and compact-support change of
variables. The optional $L^1$ extension for densities consumes measure
theory's planned `the-lebesgue-integral-and-the-convergence-theorems` and its
conditionally homed $C^1$ Lebesgue change-of-variables block; it is not used
to prove Stokes.

## 2. What is deliberately not here

These are scope denials, not gaps disguised as omissions.

1. **General chain-complex, cohomology, exact-sequence, derived-functor, and
   spectral-sequence theory** belongs to `homological-algebra`. Differential
   geometry supplies geometric complexes and verifies their differentials;
   it cites the algebraic machinery.
2. **The construction of Lebesgue measure and integration** belongs to
   `measure-theory`. This track constructs coordinate densities and proves
   their transformation law, then invokes that track for measurable $L^1$
   densities. Compactly supported smooth-form integration uses the already
   published Riemann/Jordan theory.
3. **Hodge theory and elliptic theory** are not smuggled in under de Rham
   theory. Hodge decomposition, harmonic representatives, elliptic
   regularity, and the analytic Laplace–Beltrami theory require the future
   PDE and functional-analysis machinery. The Laplace–Beltrami operator may
   be defined as a geometric example, but no Hodge theorem depends on it.
4. **Pseudo-Riemannian, Finsler, and sub-Riemannian geometry**, general
   relativity, geometric flows, minimal-surface theory, and geometric measure
   theory are whole subjects beyond the assigned Riemannian remit. The
   positive-definite convention is explicit.
5. **Differentiable sphere theorems, Cheeger finiteness, soul theory, and full
   Morse index theory on path spaces** are denied as an advanced global-
   Riemannian sequel. Rauch, Riccati, Hessian/Laplacian and Bishop–Gromov
   comparison, Cartan–Hadamard, Bonnet–Myers, and Toponogov are retained:
   Datar and Eschenburg supply complete enough comparison spines for them.
6. **General Chern–Weil theory, characteristic classes, principal-connection
   theory, and the Chern–Gauss–Bonnet theorem in arbitrary even dimension**
   form a separate advanced block. This track proves the classical
   Gauss–Bonnet theorem for oriented Riemannian surfaces, including boundary,
   and does not mislabel it as the higher-dimensional theorem.
7. **Real-form classification is not conflated with complex
   Cartan–Killing classification.** Because the dispatch assigns the whole
   abstract structure theory, the track builds a separate real-forms pair
   using Cartan involutions, restricted roots, and Vogan diagrams. The denied
   sequel is representation theory of noncompact real reductive groups
   (Harish–Chandra modules, $(\mathfrak g,K)$-modules, Plancherel theory, and
   Langlands classification), which needs substantial functional analysis.
8. **Infinite-dimensional Lie groups/manifolds, Kac–Moody algebras, quantum
   groups, supergeometry, contact geometry, Poisson manifolds in general, and
   Floer theory** are beyond the finite-dimensional remit. The Poisson bracket
   attached to a symplectic form and elementary Hamiltonian reduction remain
   in scope.

## 3. Global conventions and design decisions

### 3.1 Manifolds

Unless a boundary is explicitly present, an $n$-manifold is Hausdorff,
second countable, and locally homeomorphic to open subsets of
$\mathbb R^n$; $n$ is fixed and finite. A smooth structure is a maximal
$C^\infty$ atlas. The library says “smooth” for $C^\infty$ and writes $C^r$
when finite regularity matters. Manifolds with boundary use charts into
relatively open subsets of the closed upper half-space; the intrinsic
boundary is proved chart-independent before it is named.

This adopts Lee's and Merry's convention. Warner allows some hypotheses to be
separated, while older Lie-group texts sometimes omit second countability.
The library retains second countability because it is used materially in
smooth partitions, countable exhaustions, the global de Rham argument, and
the ordinary metric topology of Riemannian distance. The long line is the
companion-page witness against silently omitting it.

### 3.2 Tangent vectors and signs

Tangent vectors are derivations at a point; curve germs and coordinate
velocities are proved canonically isomorphic models. This makes the
differential of a map and the Lie bracket coordinate-free from their first
definitions. The Riemann tensor convention is

$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,$$

so the unit round sphere has positive sectional curvature. The shape
operator convention is $S_\nu(X)=-(\nabla_X\nu)^\top$. Every Gauss,
Codazzi, Jacobi, and comparison statement is normalized to those signs.

### 3.3 Forms, boundaries, and integration

The exterior derivative is characterized by its action on functions, the
graded Leibniz rule, and $d^2=0$. Boundary orientation uses “outward normal
first.” A compactly supported $n$-form in an oriented chart
$(U,x^1,\ldots,x^n)$ is integrated by the published compactly supported
Riemann integral of its coefficient; orientation-preserving coordinate
changes have positive determinant, while the density construction uses the
absolute determinant. Stokes is therefore

$$\int_M d\omega=\int_{\partial M}\iota^*\omega$$

with no hidden sign or Lebesgue prerequisite.

### 3.4 Lie-theory fields and classification

Geometric Lie groups and Lie algebras are real unless another field is
printed. Abstract structure results state their field hypotheses one by one.
Lie's theorem is over an algebraically closed field of characteristic zero;
Engel's theorem is stated in its valid finite-dimensional form; the
Cartan–Killing classification is for finite-dimensional semisimple Lie
algebras over an algebraically closed field of characteristic zero. Root
systems are reduced and crystallographic. No theorem about complex
semisimple algebras is silently asserted for real algebras.

### 3.5 Symplectic signs

The canonical one-form on $T^*Q$ is $\lambda_{(q,p)}(v)=p(d\pi(v))$ and the
canonical symplectic form is $\omega=-d\lambda$, so in canonical coordinates
$\omega=\sum_i dq^i\wedge dp_i$. Hamiltonian vector fields satisfy
$\iota_{X_H}\omega=dH$, and the Poisson bracket is
$\{F,G\}=\omega(X_F,X_G)=X_G(F)$. Cannas da Silva uses this canonical-form
normalization; sources with $\iota_{X_H}\omega=-dH$ are translated once in
the convention ledger, never ad hoc.

## 4. Component-provenance notation

Every proposed mathematical item carries one of these two-letter codes; the
future build expands it into `provenance.statement` and
`provenance.proof`.

- `[LN]`: statement `literature-derived`; proof `not-applicable` (definitions
  and non-proof remarks).
- `[LL]`: statement and proof `literature-derived` with the cited proof route
  followed closely.
- `[LA]`: statement `literature-derived`; proof `ai-altered` because sources
  are reorganized, hypotheses are made explicit, or published dependencies
  replace a source's prerequisites.
- `[AA]`: statement and proof `ai-altered`; used mainly for concrete
  computations or agreement items whose mathematics is classical but whose
  library-facing formulation is new.
- `[AN]`: statement `ai-altered`; proof `not-supplied`, only for a
  source-cited, non-load-bearing orientation remark whose omitted proof and
  necessity are recorded.
- `[GN]` / `[GA]`: statement `ai-generated`, with proof respectively
  `not-applicable` or `ai-altered`; permitted only for directly checkable
  examples, counterexamples, or corollaries. Nothing may depend on such an
  item.

The scaffold uses `[AN]` only where the dispatch expressly asks for an
honestly sourced statement (notably the strong $2n$ Whitney theorem) or where
a whole denied subject is named for orientation. Every theorem on the
dependency spine is proved here or imported from a named authored/planned
prerequisite.

## 5. Direct dependency order

Every B page requires only its A page and is a leaf. Relative labels, rather
than stale absolute orders, govern the sequence. The completed table will be
inserted after all pairs are fixed; each pair below already declares its own
direct `requires`.

---

# The pairs

## DG-1. Smooth Manifolds and Smooth Maps

**A page id:** `smooth-manifolds-and-smooth-maps`  
**B page id:** `smooth-manifolds-and-smooth-maps-examples`  
**`requires`:** `topological-spaces-and-continuity`,
`subspaces-products-and-quotients`, `connectedness`, `compactness`,
`the-topology-of-euclidean-space`, `separation-axioms`,
`urysohn-lemma-and-tietze`, `partitions-of-unity-and-paracompactness`,
`countability-axioms-and-cardinal-functions`, `metrization-theorems`,
`the-total-derivative`, `higher-derivatives-and-smoothness`

The first page separates three layers that are often collapsed: the
topological manifold, an atlas of mutually compatible charts, and the maximal
atlas that is the smooth structure. Smoothness of a map is then proved
independent of both chart choices. The second-countability and Hausdorff
hypotheses are used, not decorative: they give countable chart bases,
$\sigma$-compactness, metrizability, and paracompactness, which the next page
needs for smooth partitions of unity.

### A-page items, in dependency order

**The topological and coordinate data**

1. `def-topological-manifold-without-boundary` — **definition** `[LN]`. An
   $n$-dimensional topological manifold is a Hausdorff, second-countable space
   locally homeomorphic to $\mathbb R^n$; $n\ge0$ is fixed.
2. `def-manifold-chart-coordinate-domain-and-coordinate-functions` —
   **definition** `[LN]`. A chart $(U,\varphi)$ has $U\subseteq M$ open and
   $\varphi:U\to\widehat U\subseteq\mathbb R^n$ a homeomorphism onto an open
   set; component functions $x^i$ are coordinates.
3. `def-coordinate-representation-of-a-map` — **definition** `[LN]`. For
   charts $(U,\varphi)$ and $(V,\psi)$, the local representative is
   $\psi\circ F\circ\varphi^{-1}$ on the explicitly written open set
   $\varphi(U\cap F^{-1}(V))$.
4. `def-smoothly-compatible-charts` — **definition** `[LN]`. Two charts are
   compatible when they are disjoint or both transition maps on their open
   overlap images are $C^\infty$; requiring both directions is explicit.
5. `lem-smooth-chart-compatibility-is-symmetric-and-reflexive` — **lemma**
   `[LA]`. Symmetry is not inferred from bijectivity: it uses the two-sided
   clause in item 4.
6. `def-smooth-atlas` — **definition** `[LN]`. A covering family of pairwise
   smoothly compatible charts.
7. `lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas` —
   **lemma** `[LA]`. “Compatible atlases” means every cross-pair of charts is
   compatible.
8. `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation` —
   **proposition** `[LA]`. Transitivity is proved via item 7 rather than by
   pretending chart compatibility itself is transitive without a covering
   argument.

**The maximal atlas and its well-definedness**

9. `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas` —
   **lemma** `[LA]`. If two new charts are each compatible with the supplied
   atlas, compatibility with a chart through every overlap point and the
   chain rule makes them compatible with each other.
10. `def-smooth-structure-generated-by-an-atlas` — **definition** `[LN]`.
    The maximal atlas $[\mathcal A]$ consists of every chart compatible with
    $\mathcal A$; `justified_by` names item 9.
11. `thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas` —
    **theorem** `[LA]`. It also proves that two atlases generate the same
    structure iff their union is an atlas.
12. `def-smooth-manifold` — **definition** `[LN]`. A topological manifold
    equipped with a smooth structure; a “smooth chart” is a member of the
    maximal atlas.
13. `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure` —
    **proposition** `[LA]`. Restrictions of charts cover the open subspace,
    and the generated maximal atlas is independent of the presenting atlas.
14. `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure` —
    **proposition** `[LA]`. The identity chart generates it; this is the
    agreement bridge to the published Euclidean $C^r$ calculus.
15. `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` —
    **proposition** `[LA]`. Product charts generate a structure whose
    independence follows from the product form of transition maps.
16. `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` —
    **proposition** `[LA]`. Countability is necessary for second
    countability; arbitrary disjoint unions are not asserted.

**Smooth maps**

17. `def-c-r-and-smooth-maps-between-smooth-manifolds` — **definition**
    `[LN]`. A map is $C^r$ at $p$ when one, hence every, chart
    representative around $p$ is $C^r$; $r\in\mathbb N_0\cup\{\infty\}$.
18. `lem-chart-independence-of-c-r-smoothness` — **lemma** `[LA]`. Pre- and
    postcomposition by transition diffeomorphisms and the published
    Euclidean chain rule show “one chart” equals “every chart.” This is the
    well-definedness obligation for item 17.
19. `prop-smooth-maps-are-continuous` — **proposition** `[LA]`. Coordinate
    continuity plus locality and chart homeomorphisms give continuity on the
    manifold.
20. `prop-identity-maps-and-composites-of-smooth-maps-are-smooth` —
    **proposition** `[LA]`. The proof prints the overlap restriction needed to
    apply the Euclidean chain rule.
21. `def-diffeomorphism-and-local-diffeomorphism-of-manifolds` —
    **definition** `[LN]`. A diffeomorphism is a bijective smooth map with
    smooth inverse; a local diffeomorphism restricts near every point to a
    diffeomorphism onto an open submanifold.
22. `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets` —
    **proposition** `[LA]`. This follows from membership in the maximal atlas,
    not merely from being a homeomorphism.
23. `prop-smoothness-is-local-on-the-source` — **proposition** `[LA]`. A map
    is smooth iff its restrictions to an open cover are smooth.
24. `lem-smooth-maps-paste-over-an-open-cover` — **lemma** `[LA]`. Maps that
    agree on overlaps paste continuously by the published topological lemma,
    and are smooth by item 23.
25. `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth` —
    **proposition** `[LA]`. This is the smooth version of the published
    product universal property.
26. `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth` —
    **proposition** `[LA]`.
27. `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth` —
    **proposition** `[LA]`. Every domain/codomain openness hypothesis is
    printed.
28. `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism` —
    **proposition** `[LA]`; the local inverses agree on overlaps by
    uniqueness.

**Consequences of the adopted topology**

29. `lem-coordinate-balls-form-a-basis-of-a-topological-manifold` — **lemma**
    `[LA]`. Pull back Euclidean balls with compact closure inside chart
    images.
30. `prop-topological-manifolds-are-locally-compact-and-locally-path-connected` —
    **proposition** `[LA]`. This is transferred from Euclidean open balls and
    uses only published local compactness and polygonal connectivity.
31. `prop-components-of-a-topological-manifold-are-open-and-at-most-countable` —
    **proposition** `[LA]`. Local path connectedness makes components open;
    a countable basis injects the family of components into a countable
    family by least basis index.
32. `thm-topological-manifolds-are-sigma-compact` — **theorem** `[LA]`. A
    countable chart basis by relatively compact coordinate balls supplies a
    countable compact cover; no choice of one chart at each point is hidden.
33. `thm-topological-manifolds-are-metrizable-and-paracompact` — **theorem**
    `[LA]`. Locally compact Hausdorff gives regularity; second countability
    gives Lindelöf under the published $\mathrm{AC}_\omega$ statement; the
    published regular-Lindelöf theorem gives paracompactness. The alternate
    Urysohn-metrization/Stone route and its stronger sufficient choice cost
    are recorded but not used.
34. `rem-manifold-conventions-and-the-role-of-second-countability` —
    **remark** `[LN]`. It quotes the adopted Lee/Merry convention, names the
    convention split, and points to the long-line witness on the companion.

### `fs-` items (A page)

- `fs-every-hausdorff-locally-euclidean-space-is-a-manifold` — **false
  statement** `[LL]`; the long line fails second countability.
- `fs-a-chart-domain-is-an-open-subset-of-euclidean-space` — **false
  statement** `[LL]`; the chart **image** is Euclidean-open, while its domain
  is open in the manifold.
- `fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas` —
  **false statement** `[LL]`; cross-chart transitions can fail smoothness.
- `fs-a-bijective-smooth-map-is-a-diffeomorphism` — **false statement**
  `[LL]`; $x\mapsto x^3$ has a nonsmooth inverse at zero.
- `fs-chart-compatibility-needs-only-one-smooth-transition-direction` —
  **false statement** `[LL]`; the same example shows the inverse condition is
  independent.
- `fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable` —
  **false statement** `[LL]`; an uncountable discrete union of points is the
  direct witness.

### B page — `smooth-manifolds-and-smooth-maps-examples`

1. `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds` — **example**
   `[LL]`; standard charts and restrictions.
2. `ex-the-circle-from-two-stereographic-charts` — **example** `[LL]`; both
   transition maps are computed.
3. `ex-the-n-sphere-with-its-standard-smooth-atlas` — **example** `[LL]`.
4. `ex-real-projective-space-from-affine-charts` — **example** `[LL]`; the
   construction is chartwise and does not yet use the smooth quotient
   theorem.
5. `ex-the-torus-as-a-product-smooth-manifold` — **example** `[AA]`.
6. `ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold` — **example**
   `[AA]`.
7. `cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention` —
   **counterexample** `[LL]`; it cites the published long-line construction
   and its non-second-countability facts.
8. `cex-two-noncompatible-atlases-on-the-real-line` — **counterexample**
   `[LL]`; identity and cubic coordinates make one transition inverse fail
   smoothness at zero.
9. `cex-a-bijective-smooth-map-with-nonsmooth-inverse` — **counterexample**
   `[LL]`; $x\mapsto x^3$.
10. `cex-an-uncountable-disjoint-union-of-points-is-not-second-countable` —
    **counterexample** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 1st ed., Ch. 1 “Smooth
  Manifolds,” headings “Topological Manifolds,” “Smooth Structures,”
  “Examples,” and “Local Coordinate Representations” (printed pp. 1–19), and
  Ch. 2 “Smooth Maps,” heading “Smooth Functions and Smooth Maps” (pp.
  23–28).** Primary textbook source for items 1–28 and examples 1–6.
- **Merry, *Differential Geometry*, Lectures 1 “Smooth manifolds” and the
  opening of Lecture 2 “Tangent Spaces” (PDF pp. 2–18).** Independent full
  lecture-note treatment of the Hausdorff/second-countable convention,
  smooth atlases, maximal atlases, and smooth maps.
- **Hitchin, *Differentiable Manifolds*, §§2.1 “Coordinate charts,” 2.2 “The
  definition of a manifold,” 2.3 “Further examples of manifolds,” and 2.4
  “Maps between manifolds” (pp. 6–13).** Independent convention and examples
  control.
- **Published topology pages 249, 255, 257, 267, 269, 273, and 275.** Items
  29–33 quote their exact authored hypotheses; no textbook shorthand replaces
  the published choice ledger.

### Proof strategy and traps

The first hard obligation is item 9. Pairwise compatibility with a supplied
atlas does not make two new charts compatible by formal transitivity. Around
each point of their overlap, choose an existing atlas chart and express the
new transition as a composite of already smooth transitions; smoothness is
local. Item 18 repeats this argument for a map and is what licenses the phrase
“one, hence every, chart.”

Item 33 must follow the published topology exactly. The selected proof uses
local compactness plus Hausdorffness for regularity, second countability plus
the published $\mathrm{AC}_\omega$ theorem for Lindelöfness, and regular
Lindelöf $\Rightarrow$ paracompact. It must not cite
`thm-stone-metric-spaces-are-paracompact` first and then claim a weaker choice
cost. Do not define a smooth structure as an arbitrary atlas, call chart
images “domains,” or infer smoothness of an inverse from bijectivity.

**Well-definedness discharged:** maximal atlas (items 9–11), chart-independent
$C^r$ regularity (18), restricted/product/disjoint-union smooth structures
(13–16).  
**Choice:** items 1–32 are ZF relative to the supplied atlas and published
topological facts; item 33 inherits the published $\mathrm{AC}_\omega$
sufficient hypothesis.  
**Forward references: NONE.**

---

## DG-4. Rank Theorems and Embedded Submanifolds

**A page id:** `rank-theorems-and-embedded-submanifolds`  
**B page id:** `rank-theorems-and-embedded-submanifolds-examples`  
**`requires`:** `tangent-cotangent-and-the-differential`,
`smooth-partitions-of-unity-and-exhaustions`,
`inverse-and-implicit-function-theorems`, `compactness`,
`subspaces-products-and-quotients`

This pair converts the Euclidean inverse and implicit function theorems into
the normal forms used throughout differential geometry. The published
calculus page supplies only the $C^1$ inverse and implicit function theorems;
it does **not** supply the constant-rank theorem or the smooth-regularity
upgrade. Both are therefore proved here before any manifold normal form cites
them. Embedded submanifolds are defined by slice charts, and the various
equivalent descriptions are theorems rather than silently interchangeable
definitions.

### A-page items, in dependency order

**Rank and Euclidean normal forms**

1. `def-rank-of-a-smooth-map-at-a-point` — **definition** `[LN]`.
   $\operatorname{rank}_pF$ is the rank of $dF_p$; DG-3 makes this
   coordinate-independent.
2. `def-immersion-submersion-and-constant-rank-map` — **definition** `[LN]`.
   An immersion has injective differential, a submersion has surjective
   differential, and a map has constant rank $r$ on a set when every point
   there has rank $r$.
3. `def-regular-and-critical-points-and-values` — **definition** `[LN]`.
   A regular point is a point at which the differential is surjective; a
   regular value also allows an empty fibre.
4. `lem-nonvanishing-of-a-minor-persists-locally` — **lemma** `[LL]`.
   The locus on which the differential has rank at least $r$ is open.
5. `cor-the-immersion-and-submersion-loci-are-open` — **corollary** `[LL]`.
6. `lem-a-c1-local-inverse-with-smooth-original-map-is-smooth` — **lemma**
   `[LA]`. Differentiate the inverse identity, obtain
   $D(F^{-1})=(DF\circ F^{-1})^{-1}$, and induct on derivatives.
7. `thm-smooth-inverse-function-theorem-on-manifolds` — **theorem** `[LA]`.
   If $dF_p$ is an isomorphism, $F$ restricts to a diffeomorphism between
   neighbourhoods of $p$ and $F(p)$.
8. `lem-euclidean-rank-normal-form` — **lemma** `[LA]`. If a smooth map has
   constant rank $r$ near $a$, source and target diffeomorphisms put it in
   the form
   $(x^1,\ldots,x^m)\mapsto(x^1,\ldots,x^r,0,\ldots,0)$.
9. `thm-constant-rank-theorem-for-manifolds` — **theorem** `[LA]`; the chart
   version of item 8. LANDMARK.
10. `cor-local-normal-form-for-immersions` — **corollary** `[LL]`; in adapted
    coordinates an immersion is $x\mapsto(x,0)$.
11. `cor-local-normal-form-for-submersions` — **corollary** `[LL]`; in
    adapted coordinates a submersion is $(x,y)\mapsto x$.
12. `cor-every-immersion-is-locally-an-embedding` — **corollary** `[LL]`.
13. `cor-every-submersion-is-an-open-map` — **corollary** `[LL]`.
14. `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank` —
    **proposition** `[LL]`. If the rank at $p$ equals the maximum rank on a
    neighbourhood, item 4 makes that rank locally constant.

**Embedded and immersed submanifolds**

15. `def-embedded-submanifold-and-slice-chart` — **definition** `[LN]`. A
    subset $S\subseteq M$ is an embedded $k$-submanifold when every point of
    $S$ has a chart $\varphi$ with
    $\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^k\times\{0\})$.
16. `lem-slice-chart-restrictions-form-a-smooth-atlas` — **lemma** `[LA]`.
    The restricted coordinate changes are smooth and give the subspace
    topology, so the subset acquires a well-defined smooth structure.
17. `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` —
    **proposition** `[LA]`. It is the unique structure for which the
    inclusion is an embedding and the slice coordinates are smooth.
18. `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding` —
    **proposition** `[LL]`.
19. `def-smooth-embedding` — **definition** `[LN]`. A smooth map is an
    embedding when it is an injective immersion and a homeomorphism onto its
    image with the subspace topology.
20. `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold` —
    **proposition** `[LA]`; the local immersion normal form plus the
    topological embedding property rules out other sheets entering the
    adapted neighbourhood.
21. `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` —
    **corollary** `[LL]`; the target is Hausdorff.
22. `def-immersed-submanifold` — **definition** `[LN]`. An immersed
    submanifold is a manifold equipped with an injective immersion into the
    ambient manifold; its intrinsic topology need not be the subspace
    topology.
23. `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property` —
    **proposition** `[LA]`. If $F:N\to M$ has image in $S$, then the
    corestriction $N\to S$ is smooth exactly when $F$ is smooth.
24. `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space` —
    **proposition** `[LL]`. In slice charts it is ordinary smoothness after
    inserting zero normal coordinates.
25. `def-codimension-and-hypersurface` — **definition** `[LN]`.
26. `def-local-defining-map-for-an-embedded-submanifold` — **definition**
    `[LN]`. Near $p\in S$ it is a submersion $\Phi:U\to\mathbb R^{m-k}$
    with $S\cap U=\Phi^{-1}(0)$.
27. `thm-embedded-submanifolds-admit-local-defining-submersions` — **theorem**
    `[LL]`; take the normal coordinate functions in a slice chart.
28. `thm-a-regular-level-set-is-an-embedded-submanifold` — **theorem** `[LA]`.
    If $q$ is a regular value of $F:M^m\to N^n$, then $F^{-1}(q)$ is an
    embedded submanifold of codimension $n$. LANDMARK.
29. `prop-tangent-space-of-a-regular-level-set-is-the-kernel` —
    **proposition** `[LL]`:
    $T_pF^{-1}(q)=\ker dF_p$.
30. `thm-preimage-theorem-for-submanifolds-under-submersions` — **theorem**
    `[LA]`. If $F:M\to N$ is a submersion and $S\subseteq N$ is embedded,
    then $F^{-1}(S)$ is embedded with codimension $\operatorname{codim}S$,
    and its tangent space is $(dF_p)^{-1}(T_{F(p)}S)$.
31. `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` —
    **proposition** `[LL]`; the graph is the regular level set of
    $(p,q)\mapsto$ a chartwise difference only locally, or globally the
    preimage of the diagonal after the diagonal is established from product
    slice charts.
32. `prop-the-diagonal-is-an-embedded-submanifold` — **proposition** `[LL]`;
    it has dimension $\dim M$ in $M\times M$ and tangent space
    $\{(v,v):v\in T_pM\}$.
33. `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form` —
    **proposition** `[LL]`. This coordinate precursor states the simultaneous
    slice conclusion; DG-6 will formulate it intrinsically using
    transversality.
34. `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable` —
    **corollary** `[LL]`. It is locally closed, and second countability makes
    its underlying set countable; global closedness requires it to be a
    closed subset and is not asserted.

### `fs-` items (A page)

- `fs-every-injective-immersion-is-an-embedding` — **false statement** `[LL]`;
  an injective irrational winding $\mathbb R\to\mathbb T^2$ has dense image
  and is not a homeomorphism onto its image.
- `fs-the-image-of-every-immersion-is-an-embedded-submanifold` — **false
  statement** `[LL]`; a figure-eight immersion already fails at its crossing.
- `fs-a-regular-value-must-belong-to-the-image` — **false statement** `[LL]`;
  values outside the image are regular by the empty-fibre convention.
- `fs-constant-rank-at-one-point-implies-constant-rank-nearby` — **false
  statement** `[LL]`; $x\mapsto x^2$ has rank zero only at the origin.
- `fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold` —
  **false statement** `[LL]`; only codimension zero embedded submanifolds are
  locally open.
- `fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology` —
  **false statement** `[LL]`; the irrational winding distinguishes them.

### B page — `rank-theorems-and-embedded-submanifolds-examples`

1. `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` —
   **example** `[LL]`.
2. `ex-the-sphere-as-a-regular-level-set` — **example** `[LL]`;
   $S^n=f^{-1}(1)$ for $f(x)=\lVert x\rVert^2$.
3. `ex-the-special-linear-group-as-a-regular-level-set` — **example** `[LL]`;
   $SL(n,\mathbb R)=\det^{-1}(1)$, with the derivative of determinant checked.
4. `ex-the-orthogonal-group-as-an-embedded-submanifold` — **example** `[LA]`;
   use $A\mapsto A^{\mathsf T}A$ into symmetric matrices and compute the
   derivative at an orthogonal matrix.
5. `ex-the-stiefel-manifold-as-a-regular-level-set` — **example** `[LA]`.
6. `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` —
   **example** `[LL]`.
7. `ex-the-cusp-is-not-an-embedded-one-submanifold-at-the-origin` —
   **example** `[LL]`; the local regular-level/slice condition fails.
8. `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` —
   **counterexample** `[LL]`.
9. `cex-the-irrational-winding-is-an-injective-immersion-not-an-embedding` —
   **counterexample** `[LL]`.
10. `ex-a-regular-level-set-with-empty-fibre` — **example** `[AA]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 1st ed., Ch. 4, headings
  “Maps of Constant Rank,” “Immersions,” “Submersions,” “Embeddings,” and
  “Submanifolds” (printed pp. 78–105), plus Ch. 5, heading “Submanifolds”
  where intrinsic and embedded viewpoints are compared.** Primary textbook
  treatment for items 1–34.
- **Merry, *Differential Geometry*, Lecture 4 “Immersions and Embeddings” and
  Lecture 6 “Submersions” (PDF pp. 28–38 and 47–54).** Independent complete
  treatment of the local immersion/submersion theorems, regular values,
  embeddings, and level-set examples.
- **Hitchin, *Differentiable Manifolds*, §3.2 “Submanifolds,” §3.3 “The
  inverse function theorem,” and §3.4 “Critical points” (pp. 16–22).**
  Independent coordinate proof and examples.
- **Published calculus:** `thm-euclidean-inverse-function-theorem` and
  `thm-euclidean-implicit-function-theorem` are the only imported local
  analytic normal-form results. Neither contains item 8 or item 6.

### Proof strategy and traps

For item 8, choose an invertible $r\times r$ minor, use its corresponding
source components as part of a new coordinate system, apply the inverse
function theorem, and only then use constancy of rank to show that every
remaining target component is independent of the remaining source variables.
That last conclusion is the heart of the proof; a pointwise row-reduction of
the Jacobian is not a coordinate normal form.

Item 16 proves both compatibility and topology: the restricted slice charts
must generate precisely the subspace topology. Item 20 needs the embedding's
homeomorphism condition to shrink the ambient adapted neighbourhood so that
no distant sheet of the source re-enters. The regular-level theorem uses the
submersion normal form and therefore does not cite Sard. Item 31 must use the
diagonal formulation globally; subtraction of manifold points is not defined.

**Well-definedness discharged:** coordinate-independent rank (item 1), the
smooth inverse upgrade (6–7), restricted slice atlas and topology (16–17),
the induced structure on an embedding image (20), corestrictions (23), and
local defining functions (26–29).  
**Choice:** ZF; all chart and minor selections are local and finite.  
**Forward references:** item 33 points to the intrinsic transverse-preimage
theorem in DG-6 and is not used before then.

---

## DG-3. Tangent and Cotangent Spaces, Bundles, and the Differential

**A page id:** `tangent-cotangent-and-the-differential`  
**B page id:** `tangent-cotangent-and-the-differential-examples`  
**`requires`:** `smooth-manifolds-and-smooth-maps`,
`the-total-derivative`, `dual-spaces-bilinear-forms-and-inertia`,
`the-determinant-of-a-linear-operator`

A tangent vector is defined first as an intrinsic derivation on germs of
smooth functions. Coordinate derivations then prove that this abstract space
is $n$-dimensional, and velocities of curves are shown to give the same
object. Only after those identifications does the page assemble the tangent
and cotangent bundles and prove that their transition functions are smooth.
Thus neither the tangent bundle nor the differential rests on an unexplained
choice of coordinates or curve representative.

### A-page items, in dependency order

**Germs and derivations**

1. `def-germ-of-a-smooth-function-at-a-point` — **definition** `[LN]`.
   Pairs $(U,f)$ with $p\in U$ are equivalent when their restrictions agree
   on some neighbourhood of $p$.
2. `lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions` —
   **lemma** `[LA]`; this licenses item 1's quotient.
3. `def-the-local-algebra-of-smooth-function-germs` — **definition** `[LN]`.
   $C_p^\infty(M)$ has pointwise addition and multiplication on restricted
   representatives; `justified_by` names item 4.
4. `lem-algebra-operations-on-smooth-germs-are-representative-independent` —
   **lemma** `[LA]`.
5. `def-derivation-at-a-point-and-tangent-space` — **definition** `[LN]`.
   A tangent vector at $p$ is an $\mathbb R$-linear map
   $v:C_p^\infty(M)\to\mathbb R$ satisfying
   $v(fg)=f(p)v(g)+g(p)v(f)$; $T_pM$ is their vector space.
6. `lem-a-derivation-annihilates-constant-germs` — **lemma** `[LA]`.
7. `def-coordinate-derivations-at-a-point` — **definition** `[LN]`.
   $\partial/\partial x^i|_p$ acts by differentiating the coordinate
   representative at $x(p)$.
8. `lem-coordinate-derivations-are-well-defined-derivations` — **lemma**
   `[LA]`. Germ and chart-representative independence are proved separately.
9. `lem-first-order-hadamard-factorization-near-a-point` — **lemma** `[LA]`.
   For smooth $f$ near $a\in\mathbb R^n$,
   $f(x)-f(a)=\sum_i(x^i-a^i)g_i(x)$ with smooth $g_i$ and
   $g_i(a)=\partial_if(a)$, obtained by integrating along the line segment.
10. `thm-coordinate-derivations-form-a-basis-of-the-tangent-space` —
    **theorem** `[LA]`. Every $v$ is uniquely
    $\sum_iv(x^i)\partial/\partial x^i|_p$ by item 9. LANDMARK.
11. `cor-the-tangent-space-of-an-n-manifold-has-dimension-n` — **corollary**
    `[LA]`.
12. `thm-change-of-coordinate-formula-for-tangent-bases` — **theorem**
    `[LA]`. The Jacobian is evaluated at the point and the direction of the
    transition map is printed.

**The curve model and its agreement**

13. `def-contact-equivalence-of-smooth-curves-at-a-point` — **definition**
    `[LN]`. Curves through $p$ at time zero are equivalent when their
    coordinate velocities agree in one chart.
14. `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation` —
    **lemma** `[LA]`. The Euclidean chain rule discharges both obligations.
15. `def-velocity-derivation-of-a-smooth-curve` — **definition** `[LN]`.
    $\dot\gamma(0)[f]=(f\circ\gamma)'(0)$; `justified_by` names item 16.
16. `lem-curve-velocity-depends-only-on-the-contact-class` — **lemma** `[LA]`.
17. `thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors` —
    **theorem** `[LA]`. Coordinate straight lines prove surjectivity and item
    10 proves injectivity. LANDMARK.
18. `cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve` —
    **corollary** `[LA]`, with the curve kept inside a chart by a small-time
    restriction.

**The differential**

19. `def-differential-of-a-smooth-map` — **definition** `[LN]`. For
    $F:M\to N$, $dF_p(v)[g]=v[g\circ F]$ defines
    $dF_p:T_pM\to T_{F(p)}N$; `justified_by` names items 20–21.
20. `lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ` —
    **lemma** `[LA]`.
21. `lem-the-differential-sends-derivations-to-derivations-and-is-linear` —
    **lemma** `[LA]`.
22. `thm-coordinate-formula-for-the-differential` — **theorem** `[LA]`.
    The matrix of $dF_p$ in coordinate bases is the published Jacobian of
    $\psi\circ F\circ\varphi^{-1}$ at $\varphi(p)$.
23. `thm-the-differential-sends-curve-velocities-to-composite-curve-velocities` —
    **theorem** `[LA]`: $dF_p(\dot\gamma(0))=(F\circ\gamma)^{\boldsymbol\cdot}(0)$.
24. `thm-chain-rule-for-differentials-of-smooth-maps` — **theorem** `[LA]`.
    $d(G\circ F)_p=dG_{F(p)}\circ dF_p$; identities differentiate to
    identities.
25. `cor-the-differential-of-a-diffeomorphism-is-an-isomorphism` —
    **corollary** `[LA]`, with inverse $d(F^{-1})_{F(p)}$.
26. `def-differential-of-a-smooth-real-valued-function` — **definition**
    `[LN]`. $df_p(v)=v(f)$ is a cotangent vector and agrees with item 19 for
    target $\mathbb R$.
27. `thm-coordinate-formula-for-the-differential-of-a-function` — **theorem**
    `[LA]`: $df=\sum_i(\partial f/\partial x^i)dx^i$.
28. `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component` —
    **proposition** `[LA]`. It is locally constant by the published
    Euclidean zero-derivative theorem and hence constant on connected
    components.

**Tangent and cotangent bundles**

29. `def-tangent-bundle-as-a-disjoint-union` — **definition** `[LN]`.
    $TM=\bigsqcup_{p\in M}T_pM$ with projection $\pi(v)=p$; no topology is
    presumed yet.
30. `def-induced-tangent-bundle-chart` — **definition** `[LN]`.
    $(x,v^i\partial_i|_p)\mapsto(x(p),(v^1,\ldots,v^n))$ on $\pi^{-1}(U)$.
31. `lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses` —
    **lemma** `[LA]`. Their fibre coordinate is multiplication by the
    Jacobian transition matrix, whose inverse is the reverse Jacobian.
32. `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` —
    **theorem** `[LA]`. Item 31 supplies an atlas; independence of the
    original manifold atlas follows from maximality. LANDMARK.
33. `prop-the-tangent-bundle-projection-and-zero-section-are-smooth` —
    **proposition** `[LA]`.
34. `def-global-differential-or-tangent-map` — **definition** `[LN]`.
    $dF:TM\to TN$ sends $v\in T_pM$ to $dF_pv$.
35. `thm-the-global-differential-of-a-smooth-map-is-smooth` — **theorem**
    `[LA]`. In bundle charts it is $(x,v)\mapsto(F(x),DF(x)v)$.
36. `prop-the-tangent-bundle-construction-is-functorial` — **proposition**
    `[LA]`; item 24 supplies identities and composition.
37. `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union` —
    **definition** `[LN]`. $T_p^*M=(T_pM)^*$ and
    $T^*M=\bigsqcup_pT_p^*M$.
38. `thm-coordinate-differentials-form-the-dual-cotangent-basis` — **theorem**
    `[LA]`. $dx^i_p(\partial_j|_p)=\delta^i_j$.
39. `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian` —
    **lemma** `[LA]`; the base point at which it is evaluated is explicit.
40. `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` —
    **theorem** `[LA]`.
41. `def-pullback-of-a-cotangent-vector` — **definition** `[LN]`.
    $F_p^*:T^*_{F(p)}N\to T_p^*M$ is composition with $dF_p$.
42. `prop-cotangent-pullback-is-contravariantly-functorial` — **proposition**
    `[LA]`.
43. `thm-canonical-tangent-and-cotangent-splittings-for-products` —
    **theorem** `[LA]`.
    $T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$ naturally, and the dual
    decomposition is proved rather than identified by notation.

### `fs-` items (A page)

- `fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p` — **false
  statement** `[LL]`; that picture has no intrinsic meaning before a tangent
  model is constructed.
- `fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space` —
  **false statement** `[LL]`; derivations are intrinsic.
- `fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector` — **false
  statement** `[LL]`; the Leibniz rule is essential.
- `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple` —
  **false statement** `[LL]`; they transform by the Jacobian.
- `fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix` — **false
  statement** `[LL]`; the differential is intrinsic and the Jacobian is one
  matrix representation.
- `fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle` —
  **false statement** `[LL]`; covectors use inverse transpose.

### B page — `tangent-cotangent-and-the-differential-examples`

1. `ex-the-tangent-space-of-euclidean-space` — **example** `[LL]`; identifies
   derivations, curve velocities, and ordinary vectors canonically.
2. `ex-tangent-basis-change-between-cartesian-and-polar-coordinates` —
   **example** `[LL]`; the calculation is restricted away from the polar
   singularity.
3. `ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates` —
   **example** `[AA]`.
4. `ex-the-tangent-space-of-the-sphere-from-curve-velocities` — **example**
   `[LL]`; $T_pS^n=\{v:p\cdot v=0\}$ is proved directly, without citing the
   later regular-level theorem.
5. `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` — **example** `[LL]`.
6. `ex-the-tangent-bundle-of-euclidean-space-is-trivial` — **example** `[LL]`.
7. `ex-the-cotangent-pullback-of-a-coordinate-one-form` — **example** `[AA]`.
8. `ex-the-differential-of-a-constant-map-is-zero` — **example** `[LL]`.
9. `cex-polar-coordinates-do-not-give-a-chart-at-the-origin` —
   **counterexample** `[LL]`.
10. `cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector` —
    **counterexample** `[AA]`; two nonlinear coordinates give different
    tuples for the same derivation.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 1st ed., Ch. 3 “The Tangent
  Bundle,” headings “Tangent Vectors,” “Push-Forwards,” “Computations in
  Coordinates,” “Tangent Vectors to Curves,” “Alternative Definitions of the
  Tangent Space,” and “The Tangent Bundle” (printed pp. 41–60), and Ch. 4 “The
  Cotangent Bundle,” headings “Covectors,” “Tangent Covectors on Manifolds,”
  “The Cotangent Bundle,” “The Differential of a Function,” and “Pullbacks”
  (pp. 65–78).** Primary textbook source for all A-page items.
- **Merry, *Differential Geometry*, Lectures 2 “Tangent Spaces,” 4 “The
  Derivative,” and 5 “The Tangent Bundle” (PDF pp. 12–44).** Independent
  derivation/curve comparison and bundle construction.
- **Hitchin, *Differentiable Manifolds*, §§3.2 “The derivative of a
  function,” 3.3 “Derivatives of smooth maps,” and §4.1 “The tangent bundle”
  (pp. 16–26).** Independent coordinate-free control.

### Proof strategy and traps

Item 10 is the core calculation. The Hadamard factorization must be made on a
small convex coordinate ball; applying a derivation kills the quadratic
remainder without ever evaluating a germ away from $p$. Items 14–17 then show
that curve contact is not a second, competing definition but a canonically
isomorphic model.

For the bundles, a disjoint union of fibres has no automatic topology. Item
31 computes the full base-and-fibre transition and item 32 uses it to generate
a smooth atlas. The cotangent transition is inverse transpose, not the tangent
Jacobian. The global differential is proved smooth from the continuity of all
first partial derivatives; pointwise linearity alone would not suffice.

**Well-definedness discharged:** germs and their algebra (items 1–4),
coordinate derivations (8), curve classes and velocities (14–17), differential
on target germs (20–21), tangent and cotangent manifold structures (31–32,
39–40), and covector pullback (41–42).  
**Choice:** all constructions are ZF; coordinates are selected only for one
point at a time inside proofs, and no family-wide choice is formed.  
**Forward references: NONE.**

---

## DG-2. Smooth Bump Functions, Partitions of Unity, and Exhaustions

**A page id:** `smooth-partitions-of-unity-and-exhaustions`  
**B page id:** `smooth-partitions-of-unity-and-exhaustions-examples`  
**`requires`:** `smooth-manifolds-and-smooth-maps`,
`partitions-of-unity-and-paracompactness`, `compactness`,
`countability-axioms-and-cardinal-functions`, `the-exponential-function`,
`higher-derivatives-and-smoothness`, `series-of-functions`

The topological partition theorem produces continuous functions; manifold
arguments need smooth ones. This page therefore begins with the flat
one-variable function and constructs Euclidean and chart bumps explicitly.
It then exploits the countability already built into the definition of a
manifold to obtain a **countable** locally finite refinement and a smooth
partition subordinate to an arbitrary open cover. This route uses
$\mathrm{AC}_\omega$ as a sufficient hypothesis and does not inherit the
stronger AC+DC cost of the published general topological partition theorem.

### A-page items, in dependency order

**The local analytic construction**

1. `def-the-standard-flat-function` — **definition** `[LN]`.
   $f(t)=e^{-1/t}$ for $t>0$ and $f(t)=0$ for $t\le0$.
2. `lem-exponential-decay-dominates-every-inverse-power` — **lemma** `[LL]`.
   For every $m\ge0$, $t^{-m}e^{-1/t}\to0$ as $t\downarrow0$; the proof uses
   the published exponential series with nonnegative terms.
3. `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` — **theorem**
   `[LA]`. On $t>0$, each derivative is a polynomial in $1/t$ times
   $e^{-1/t}$; item 2 and induction give $f^{(k)}(0)=0$ for every $k$.
4. `def-the-standard-smooth-step-function` — **definition** `[LN]`.
   $h(t)=f(t)/(f(t)+f(1-t))$; the denominator is proved positive, $h=0$ on
   $(-\infty,0]$, and $h=1$ on $[1,\infty)$.
5. `lem-smooth-bump-between-concentric-euclidean-balls` — **lemma** `[LA]`.
   For $0<r<R$, an explicit radial $C^\infty$ function equals one on
   $\overline B(0,r)$ and has support in $B(0,R)$.
6. `lem-euclidean-bump-for-a-compact-set-inside-an-open-set` — **lemma**
   `[LA]`. A finite cover by balls from item 5 and the finite product
   $1-\prod(1-\rho_i)$ yields $\rho=1$ near $K$ with compact support in
   $U\subseteq\mathbb R^n$.
7. `lem-chart-bump-at-a-point-with-prescribed-support` — **lemma** `[LA]`.
   If $p\in U$ with $U$ open in a smooth manifold, then some smooth
   $\rho:M\to[0,1]$ equals one on a neighbourhood of $p$ and has compact
   support contained in $U$; extension by zero is proved smooth near the
   chart boundary because the Euclidean support is compactly contained.
8. `lem-manifold-bump-for-a-compact-set-inside-an-open-set` — **lemma**
   `[LA]`. Compactness reduces item 7 to finitely many functions.

**Locally finite smooth algebra**

9. `lem-locally-finite-families-of-supports-have-locally-finite-cozero-families` —
   **lemma** `[LA]`.
10. `thm-a-locally-finite-sum-of-smooth-functions-is-smooth` — **theorem**
    `[LA]`. Near each point the sum is finite, so every coordinate derivative
    can be taken termwise.
11. `lem-normalizing-a-locally-finite-positive-smooth-family` — **lemma**
    `[LA]`. If $\sum_i f_i>0$, then $\varphi_i=f_i/\sum_jf_j$ is smooth,
    locally finite, nonnegative, and sums to one; supports do not grow.
12. `def-smooth-partition-of-unity-subordinate-to-an-open-cover` —
    **definition** `[LN]`. The index-to-cover-member assignment, local
    finiteness of supports, nonnegativity, sum-one condition, and support
    containment are all part of the definition.

**Existence and its exact choice cost**

13. `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` —
    **lemma** `[LA]`. A fixed countable coordinate-ball basis is filtered by
    containment in a member of the given cover; $\mathrm{AC}_\omega$ chooses
    one containing member for each retained ball.
14. `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` —
    **lemma** `[LA]`. The regular-Lindelöf construction underlying the
    published `lem-regular-lindelof-spaces-are-paracompact` is repeated only
    to retain relatively compact chart assignments; it assumes
    $\mathrm{AC}_\omega$ and produces
    $\overline{V_i}\subseteq W_i\Subset U_i$.
15. `thm-smooth-partitions-of-unity-exist-on-manifolds` — **theorem** `[LA]`.
    Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold admits
    a countable locally finite smooth subordinate partition. Choose bumps
    equal to one on $\overline{V_i}$ with support in $W_i$, then normalize by
    item 11. LANDMARK.
16. `cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover` —
    **corollary** `[LA]`. The statement retains coordinate charts and
    relatively compact supports for later integration arguments.
17. `rem-smooth-and-topological-partition-theorems-have-different-proof-costs` —
    **remark** `[LN]`. It quotes the published AC+DC theorem for arbitrary
    paracompact Hausdorff spaces and explains why item 15 uses only the
    countable manifold route; it makes no exact-strength claim.

**Smooth separation, extension, and proper functions**

18. `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set` — **theorem**
    `[LA]`. If $A\subseteq U$, with $A$ closed and $U$ open, a locally finite
    chart-bump construction gives smooth $\rho:M\to[0,1]$ equal to one on a
    neighbourhood of $A$ and with $\operatorname{supp}\rho\subseteq U$.
    Compact support is asserted only when $A$ has a compact neighbourhood in
    $U$.
19. `cor-smooth-functions-separate-points-from-closed-sets` — **corollary**
    `[LA]`.
20. `lem-smooth-extension-from-a-closed-neighbourhood` — **lemma** `[LA]`.
    If $f$ is smooth on an open neighbourhood of closed $A$ and
    $\rho$ is supported there, then $\rho f$, extended by zero, is a global
    smooth function; the product vanishes on a neighbourhood of every point
    outside the original domain.
21. `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity` —
    **theorem** `[LA]`. For vector-valued functions into a fixed finite-
    dimensional vector space, $f=\sum_i\varphi_if_i$ is smooth and has any
    convex fibrewise property shared by the $f_i$; maps into a general
    manifold cannot be averaged and are not included.
22. `def-compact-exhaustion-of-a-manifold` — **definition** `[LN]`. A sequence
    $K_j$ of compact sets with $K_j\subseteq\operatorname{int}K_{j+1}$ and
    union $M$.
23. `lem-every-manifold-has-a-compact-exhaustion` — **lemma** `[LA]`. Refine
    DG-1's countable relatively compact chart cover and take nested finite
    unions with closures; the interior-containment adjustment is explicit.
24. `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` —
    **theorem** `[LA]`. Choose smooth cutoffs $\rho_j$ equal to one on $K_j$
    and supported in $\operatorname{int}K_{j+1}$, and form a locally finite
    weighted sum whose sublevel sets lie in some $K_j$. LANDMARK.
25. `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function` —
    **corollary** `[LA]`. Use a countable locally finite family of bumps on
    $M\setminus A$ with positive coefficients and prove the zero set exactly.
26. `cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function` —
    **corollary** `[LA]`.
27. `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains` —
    **proposition** `[LA]`; retained as the standard atlas used in all later
    global constructions.

### `fs-` items (A page)

- `fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero` —
  **false statement** `[LL]`; it is smooth and flat but not equal near zero
  to its zero Taylor series.
- `fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth` —
  **false statement** `[LL]`; smooth partitions require a new construction.
- `fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth` — **false
  statement** `[LL]`; local finiteness is the missing hypothesis.
- `fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff` —
  **false statement** `[LL]`; extension by zero generally fails at the domain
  boundary.
- `fs-every-smooth-manifold-is-compact` — **false statement** `[LL]`; a
  proper exhaustion is not compactness.
- `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums` —
  **false statement** `[LL]`; a general target has no affine addition.

### B page — `smooth-partitions-of-unity-and-exhaustions-examples`

1. `ex-the-standard-compactly-supported-bump-on-the-line` — **example**
   `[LL]`; formula and all endpoint derivatives.
2. `ex-a-radial-bump-on-euclidean-space` — **example** `[AA]`.
3. `ex-a-two-function-smooth-partition-on-the-circle` — **example** `[AA]`;
   constructed in overlapping angular charts.
4. `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` —
   **example** `[AA]`.
5. `ex-a-proper-smooth-exhaustion-of-euclidean-space` — **example** `[LL]`;
   $x\mapsto\lVert x\rVert^2$.
6. `ex-a-proper-smooth-exhaustion-of-the-open-unit-ball` — **example** `[AA]`;
   $(1-\lVert x\rVert^2)^{-1}$.
7. `ex-a-smooth-function-with-a-prescribed-closed-zero-set` — **example**
   `[AA]`; the middle-thirds Cantor set is used only after citing its
   published closedness.
8. `cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous` —
   **counterexample** `[LL]`; moving spikes accumulate at the origin and show
   why local, not pointwise, finiteness is required.
9. `cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth` —
   **counterexample** `[LL]`; $f(x)=1$ on $(0,\infty)$.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 1st ed., Ch. 2, heading “Bump
  Functions and Partitions of Unity” (printed pp. 34–40), together with Ch. 6,
  the proper-function construction inside “The Whitney Embedding Theorem”
  (pp. 133–138).** Primary textbook route for items 1–27.
- **Merry, *Differential Geometry*, Lecture 3 “Partitions of Unity” (PDF pp.
  19–27).** Independent full proof from Euclidean bumps through subordinate
  smooth partitions.
- **Hitchin, *Differentiable Manifolds*, §3.1 “Existence of smooth
  functions,” §6.2 “Partitions of unity,” and Appendix §10.4 “Partitions of
  unity on general manifolds” (pp. 14–16, 39–41, 92–93).** Independent local
  construction and compact/general-manifold control.
- **Published topology:** `lem-regular-lindelof-spaces-are-paracompact` states
  the $\mathrm{AC}_\omega$ route used in items 13–15;
  `lem-paracompact-hausdorff-cover-shrinking` assumes full AC, and
  `thm-subordinate-partitions-of-unity-exist` assumes AC+DC. The latter two
  are cited for comparison only.

### Proof strategy and traps

The analytic bottleneck is item 3: “all derivatives tend to zero” is proved by
the explicit polynomial-times-exponential derivative form and item 2, not by
drawing the graph. The global bottleneck is item 15. The author must retain a
chosen cover member and a compactly contained coordinate neighbourhood through
the shrinking, build each bump before normalizing, prove the denominator is
strictly positive, and prove supports stay subordinate.

Item 18 says “equal to one on a neighbourhood of $A$,” not merely on $A$;
that stronger form is what makes item 20's extension smooth. It does **not**
claim compact support for a noncompact closed set. Item 24's sum must be
locally finite and its weights must force compact sublevel sets; divergence
along every escaping sequence is proved from the exhaustion, not asserted.

**Well-definedness discharged:** flat extension at zero (items 2–4),
extension by zero (7, 20), locally finite differentiation and normalization
(9–11), partition support/cover assignments (13–16), and properness of the
exhaustion (23–24).  
**Choice:** the local constructions and finite compact-set bumps are ZF;
items 13–27 use $\mathrm{AC}_\omega$ as a sufficient hypothesis. No DC or
full AC is used by the selected proof.  
**Forward references: NONE.**

---

## DG-5. Smooth Vector Bundles, Sections, and Bundle Operations

**A page id:** `smooth-vector-bundles-and-sections`  
**B page id:** `smooth-vector-bundles-and-sections-examples`  
**`requires`:** `rank-theorems-and-embedded-submanifolds`,
`smooth-partitions-of-unity-and-exhaustions`,
`tangent-cotangent-and-the-differential`, `direct-sums-and-products`,
`dual-spaces-bilinear-forms-and-inertia`

This pair makes finite-rank vector bundles into usable global objects. It
starts from local triviality, proves the equivalence with transition data,
and treats sections and bundle maps in coordinates. Pullbacks, quotients,
and complements are constructions whose fibres are obvious but whose total
spaces are not; their atlases and independence of choices are therefore
proved explicitly. Tensor and exterior powers are postponed to DG-10, where
their algebra is built before differential forms.

### A-page items, in dependency order

**Local triviality and transition data**

1. `def-smooth-fibre-bundle-and-local-trivialization` — **definition** `[LN]`.
   A smooth fibre bundle with model fibre $F$ is a surjective smooth map
   $\pi:E\to M$ locally identified over the identity of $U$ with
   $U\times F$.
2. `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle` — **definition**
   `[LN]`. In a rank-$r$ vector bundle, every fibre is an $r$-dimensional
   vector space and every local trivialization is fibrewise linear.
3. `prop-a-vector-bundle-projection-is-a-surjective-submersion` —
   **proposition** `[LL]`.
4. `def-vector-bundle-chart-and-transition-function` — **definition** `[LN]`.
   The overlap has the form $(p,v)\mapsto(p,g_{\beta\alpha}(p)v)$ with
   $g_{\beta\alpha}:U_\alpha\cap U_\beta\to GL(r,\mathbb R)$ smooth.
5. `lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities` —
   **lemma** `[LL]`.
6. `thm-vector-bundle-construction-from-a-smooth-cocycle` — **theorem** `[LA]`.
   The quotient of $\coprod_\alpha U_\alpha\times\mathbb R^r$ by
   $(p,v)_\alpha\sim(p,g_{\beta\alpha}(p)v)_\beta$ is a Hausdorff,
   second-countable smooth manifold and a rank-$r$ bundle. LANDMARK.
7. `prop-isomorphic-cocycles-define-isomorphic-vector-bundles` —
   **proposition** `[LA]`. A gauge change
   $g'_{\beta\alpha}=h_\beta g_{\beta\alpha}h_\alpha^{-1}$ induces a
   well-defined bundle isomorphism.
8. `def-restriction-of-a-vector-bundle` — **definition** `[LN]`.
9. `prop-the-zero-section-is-a-smooth-embedding` — **proposition** `[LL]`.
10. `prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r` —
    **proposition** `[LL]`.

**Sections, frames, and bundle maps**

11. `def-smooth-section-local-section-and-support` — **definition** `[LN]`.
12. `def-local-frame-and-global-frame-of-a-vector-bundle` — **definition**
    `[LN]`.
13. `prop-local-frames-and-local-trivializations-are-equivalent-data` —
    **proposition** `[LA]`; a section tuple is a frame exactly when its
    component matrix is invertible at every point.
14. `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame` —
    **corollary** `[LL]`.
15. `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components` —
    **proposition** `[LL]`.
16. `prop-smooth-sections-form-a-module-over-smooth-functions` —
    **proposition** `[LL]`.
17. `lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section` —
    **lemma** `[LA]`; extend in a local frame and multiply by a bump.
18. `lem-locally-finite-linear-combinations-of-sections-are-smooth` —
    **lemma** `[LL]`.
19. `def-vector-bundle-map-over-a-smooth-base-map` — **definition** `[LN]`.
    A map $\Phi:E\to F$ covers $f:M\to N$ and restricts to a linear map
    $E_p\to F_{f(p)}$.
20. `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices` —
    **proposition** `[LL]`.
21. `prop-a-fibrewise-bijective-smooth-bundle-map-is-a-bundle-isomorphism` —
    **proposition** `[LA]`; inversion of the local $GL(r)$-valued matrix is
    smooth.
22. `def-vector-subbundle` — **definition** `[LN]`; constant fibre rank and
    a local frame extending to one of the ambient bundle are required.
23. `prop-constant-rank-kernels-and-images-of-bundle-maps-are-subbundles` —
    **proposition** `[LA]`. Constant rank permits smooth local bases after a
    fixed nonzero minor is selected.

**Functorial bundle constructions**

24. `def-pullback-vector-bundle-as-a-fibre-product` — **definition** `[LN]`.
    For $f:N\to M$, set
    $f^*E=\{(q,e)\in N\times E:f(q)=\pi(e)\}$ with fibre over $q$ equal to
    $E_{f(q)}$.
25. `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` — **theorem**
    `[LA]`. It is the preimage of the diagonal under the submersion
    $f\times\pi$, and the restricted product charts give its bundle atlas.
26. `prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism` —
    **proposition** `[LA]`: $\operatorname{id}^*E\cong E$ and
    $(f\circ g)^*E\cong g^*f^*E$, with the displayed fibrewise maps.
27. `prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle` —
    **proposition** `[LA]`; stated after the Hom bundle is constructed.
28. `def-whitney-sum-of-vector-bundles` — **definition** `[LN]`.
29. `thm-whitney-sums-are-smooth-vector-bundles` — **theorem** `[LL]`;
    the transition matrices are block diagonal.
30. `def-dual-and-hom-vector-bundles` — **definition** `[LN]`.
31. `thm-dual-and-hom-transition-functions-define-smooth-bundles` —
    **theorem** `[LA]`; the dual transition is inverse transpose and Hom
    transitions act by $A\mapsto hA g^{-1}$.
32. `prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps` —
    **proposition** `[LA]`; this discharges the delayed assertion in item 27.
33. `def-quotient-vector-bundle-by-a-subbundle` — **definition** `[LN]`.
34. `thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle` —
    **theorem** `[LA]`. Adapted frames give transition maps on quotient
    coordinates, and changes of adapted frame induce the same quotient
    smooth structure.
35. `prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map` —
    **proposition** `[LL]` with kernel the given subbundle.

**Bundle metrics, complements, and normal data**

36. `def-smooth-bundle-metric` — **definition** `[LN]`; a smooth positive
    definite inner product on every fibre.
37. `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` —
    **theorem** `[LA]`. Average local Euclidean metrics with a subordinate
    smooth partition of unity. LANDMARK.
38. `prop-orthogonal-complements-of-subbundles-are-smooth-subbundles` —
    **proposition** `[LA]`; an adapted local frame is obtained by smooth
    Gram–Schmidt.
39. `cor-every-vector-subbundle-has-a-smooth-complement` — **corollary** `[LL]`.
40. `cor-every-short-exact-sequence-of-smooth-vector-bundles-splits` —
    **corollary** `[LA]`; existence, not a canonical splitting.
41. `def-normal-and-conormal-bundles-of-an-embedded-submanifold` —
    **definition** `[LN]`. Intrinsically
    $\nu(S)=TM|_S/TS$ and
    $N^*S=\{\xi\in T^*M|_S:\xi|_{TS}=0\}$.
42. `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` —
    **proposition** `[LA]`.
43. `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` —
    **proposition** `[LA]`; the identification depends on the metric, while
    the quotient bundle does not.
44. `cor-every-smooth-manifold-admits-a-riemannian-metric` — **corollary**
    `[LL]`; apply item 37 to $TM$. This proves existence only; DG-17 develops
    Riemannian geometry.
45. `prop-a-section-transverse-to-the-zero-section-has-a-submanifold-zero-set` —
    **proposition** `[LA]`. In a local frame this is the regular-level
    theorem; its zero set has codimension equal to the bundle rank.

### `fs-` items (A page)

- `fs-every-vector-bundle-is-globally-trivial` — **false statement** `[LL]`;
  the Möbius line bundle is the first counterexample.
- `fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth` —
  **false statement** `[LL]`; a nonsmooth scalar coefficient on a trivial
  line bundle gives a counterexample.
- `fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle` —
  **false statement** `[LL]`; constant rank and smooth local frames are
  essential.
- `fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting` —
  **false statement** `[LL]`; a metric supplies a choice, not naturality.
- `fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric` —
  **false statement** `[LL]`; only the quotient normal and annihilator
  conormal bundles are intrinsic at this stage.
- `fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space` —
  **false statement** `[LL]`; it is a fibre product carrying paired base and
  fibre data.

### B page — `smooth-vector-bundles-and-sections-examples`

1. `ex-the-trivial-line-bundle-and-its-sections-as-functions` — **example**
   `[LL]`.
2. `ex-the-mobius-line-bundle-from-a-transition-function` — **example** `[LA]`.
3. `ex-the-tautological-line-bundle-over-real-projective-space` — **example**
   `[LA]`; its local frames and transitions are written explicitly.
4. `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` — **example**
   `[LL]`; reconciles DG-3 with the general definition.
5. `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` —
   **example** `[LL]`; the outward radial field is a global frame.
6. `ex-the-tangent-bundle-of-the-circle-is-trivial` — **example** `[LL]`.
7. `ex-the-hairy-ball-obstruction-is-not-yet-available` — **example/reminder**
   `[AN]`; records that nontriviality of $TS^2$ will follow only from a later
   degree or Euler-class argument and is not used here.
8. `ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover` —
   **example** `[AA]`; the pullback has the explicit nowhere-zero section
   $(x,(x,tx))\mapsto tx$ after the base is stated carefully.
9. `ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum` —
   **example** `[LL]`.
10. `cex-a-rank-jumping-kernel-is-not-a-vector-subbundle` — **counterexample**
    `[LL]`; multiplication by $x$ on the trivial line bundle over
    $\mathbb R$.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 1st ed., Ch. 3, “The Tangent
  Bundle” through “Vector Fields” (printed pp. 57–64), Ch. 4, “The Cotangent
  Bundle” (pp. 69–77), and the bundle constructions used in Ch. 8, “The
  Algebra of Tensors” and “Tensors and Tensor Fields on Manifolds”
  (pp. 172–184).** Primary textbook definitions and local-matrix tests.
- **Merry, *Differential Geometry*, Lectures 16 “Bundles,” 17 “The Fibre
  Bundle Construction Theorem,” 18 “Associated Bundles,” and 20 “Sections
  of Vector Bundles” (PDF pp. 111–130 and 152–162).** Independent full
  lecture-note route for cocycle quotients, pullbacks, morphisms, sections,
  and Hom bundles.
- **Merry, Lectures 28 “Connections” and 37 “Riemannian Vector Bundles”
  (PDF pp. 216–224 and 281–288), only the bundle-metric and complement
  portions.** Backs items 36–44; connections themselves are disposed to
  DG-18.

### Proof strategy and traps

Item 6 cannot stop after forming a set-theoretic quotient. The proof checks
that the cocycle relation is an equivalence relation, that the quotient
charts are bijective, that transitions are smooth, and that the resulting
space is Hausdorff and second countable. When the cocycle arises from an
already existing bundle, this quotient is canonically diffeomorphic to its
total space; for arbitrary cocycle data it is the construction theorem.

For item 25, the diagonal preimage is legitimate because the second factor
$\pi:E\to M$ is a submersion, so $f\times\pi$ is transverse to the diagonal.
No general fibre-product theorem is assumed. Items 34 and 38 use adapted
frames and must prove independence from them. Item 37 is a convex sum of
positive-definite forms, so positivity is retained; a partition-weighted sum
of local **trivializations** would not make sense. Item 40 never labels the
splitting canonical.

**Well-definedness discharged:** cocycle quotient and atlas (items 4–7),
frame/trivialization equivalence (13), inverse bundle maps (21), pullback
fibre product and functorial identifications (24–27), dual/Hom changes of
frame (30–32), quotient bundle (33–35), metric complements (37–40), and the
intrinsic normal quotient (41–43).  
**Choice:** local bundle operations are ZF. Items 17 and 36–45 inherit the
$\mathrm{AC}_\omega$ sufficient hypothesis of DG-2's smooth partition
construction; no stronger choice is introduced.  
**Forward references:** tensor and exterior powers go to DG-10; connection
headings in Merry go to DG-18; item 44 is only the existence input for
DG-17; item 45 is reformulated intrinsically in DG-6.

---

## DG-6. Sard's Theorem and Transversality

**A page id:** `sard-theorem-and-transversality`  
**B page id:** `sard-theorem-and-transversality-examples`  
**`requires`:** `rank-theorems-and-embedded-submanifolds`,
`smooth-vector-bundles-and-sections`,
`smooth-partitions-of-unity-and-exhaustions`,
`cantor-set-baire-and-measure-zero`,
`the-riemann-integral-in-rn-and-jordan-content`,
`fubini-and-change-of-variables`, `mixed-partials-taylor-and-extrema`

Sard's theorem is proved, not imported as folklore. Before the proof, the
Euclidean null-set notion is transported to a manifold and shown independent
of charts. After it, transversality packages regular-level arguments in their
correct intrinsic form and the parametric theorem converts Sard into a
genericity tool. Claims of openness or density carry the compactness and
topology qualifications they actually need.

### A-page items, in dependency order

**Null sets on manifolds**

1. `def-null-subset-of-a-smooth-manifold` — **definition** `[LN]`. A subset
   $A\subseteq M^n$ is null when $\varphi(A\cap U)$ is Lebesgue-null in
   $\mathbb R^n$ for every smooth chart $(U,\varphi)$.
2. `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` —
   **lemma** `[LL]`; use a finite convex-ball cover and a derivative bound,
   rather than applying the mean-value theorem across a nonconvex chart
   image.
3. `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` — **lemma**
   `[LA]`; both directions use item 2 and the published Lipschitz-image
   theorem.
4. `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` —
   **proposition** `[LA]`; reduce every overlap to countably many compactly
   contained coordinate balls and apply item 3.
5. `prop-a-countable-chart-cover-detects-manifold-null-sets` — **proposition**
   `[LL]`.
6. `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` —
   **proposition** `[LL]`.
7. `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` —
   **proposition** `[LL]`; no nonempty coordinate ball is null.
8. `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` —
   **proposition** `[LA]`; countable compact coordinate localization is
   essential.
9. `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` —
   **proposition** `[LA]`. If $\dim M<\dim N$, then $F(M)$ is null for every
   $C^1$ map $F:M\to N$.
10. `cor-positive-codimension-immersed-submanifolds-are-null` — **corollary**
    `[LL]`.

**Morse–Sard**

11. `def-critical-locus-and-critical-value-set` — **definition** `[LN]`;
    notation $C(F)$ and $F(C(F))$.
12. `lem-sard-slicing-for-compact-null-sections` — **lemma** `[LA]`. A compact
    subset of a product whose every parallel section is null is null; prove
    the finite-cover estimate that replaces an unproved appeal to Fubini for
    arbitrary nonmeasurable sets.
13. `lem-sard-on-the-nonflat-critical-strata` — **lemma** `[LA]`. At a point
    where a suitable derivative first becomes nonzero, use it as a coordinate
    and reduce the domain dimension.
14. `lem-sard-on-the-infinitely-flat-critical-stratum` — **lemma** `[LA]`.
    Taylor estimates on subdivided cubes make the total target volume tend to
    zero.
15. `thm-morse-sard-for-euclidean-maps` — **theorem** `[LA]`. For
    $F:U\subseteq\mathbb R^m\to\mathbb R^n$ of class $C^r$, with
    $r>\max\{m-n,0\}$, the critical values form a null set. LANDMARK.
16. `thm-morse-sard-for-smooth-manifolds` — **theorem** `[LA]`. The same
    statement holds for $C^r$ maps of second-countable $C^r$ manifolds, with
    or without boundary when regularity is tested also on the boundary in the
    boundary conclusion. LANDMARK.
17. `cor-regular-values-have-full-measure-and-are-dense` — **corollary** `[LL]`.
18. `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact` —
    **proposition** `[LA]`. The critical locus is closed and the manifold has
    a compact exhaustion, so its image is a countable union of compact sets.
19. `cor-regular-values-form-a-dense-g-delta-set` — **corollary** `[LL]`.
    Each compact null subset has empty interior and hence is nowhere dense.
20. `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective` —
    **corollary** `[LL]`; this is false for continuous maps.

**Transverse maps and intersections**

21. `def-transverse-linear-subspaces` — **definition** `[LN]`:
    $A+B=V$, with the dimension/codimension identity proved.
22. `def-a-smooth-map-transverse-to-an-embedded-submanifold` — **definition**
    `[LN]`. At every $p$ mapping to $S$,
    $dF_p(T_pM)+T_{F(p)}S=T_{F(p)}N$; avoidance is vacuously transverse.
23. `def-transverse-smooth-maps` — **definition** `[LN]`. Maps
    $F:M\to P$ and $G:N\to P$ are transverse when their differential images
    span $T_qP$ at every coincidence.
24. `def-transverse-embedded-submanifolds` — **definition** `[LN]`; it is the
    special case of their inclusion maps.
25. `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient` —
    **lemma** `[LA]`. The composite
    $T_pM\xrightarrow{dF_p}T_qN\to T_qN/T_qS$ is surjective.
26. `thm-transverse-preimage-theorem` — **theorem** `[LA]`. If $F\pitchfork S$,
    then $F^{-1}(S)$ is embedded of codimension $\operatorname{codim}S$ and
    $T_pF^{-1}(S)=(dF_p)^{-1}(T_{F(p)}S)$. LANDMARK.
27. `cor-transverse-intersection-theorem` — **corollary** `[LL]`. If
    $A,B\subseteq M$ are transverse embedded submanifolds, $A\cap B$ is
    embedded and
    $\operatorname{codim}(A\cap B)=\operatorname{codim}A+operatorname{codim}B$.
28. `thm-transverse-fibre-product-theorem` — **theorem** `[LA]`. If
    $F:M\to P$ and $G:N\to P$ are transverse, then
    $M\mathbin{\times_P}N=\{(x,y):F(x)=G(y)\}$ is embedded in $M\times N$,
    with the displayed kernel tangent space and expected dimension.
29. `cor-a-submersion-is-transverse-to-every-embedded-submanifold` —
    **corollary** `[LL]`.
30. `prop-transversality-to-a-point-is-the-regular-value-condition` —
    **proposition** `[LL]`.
31. `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` —
    **proposition** `[LL]`.
32. `prop-local-graph-characterization-by-transversality-to-vertical-fibres` —
    **proposition** `[LA]`; the projection restricted to the submanifold is a
    local diffeomorphism.
33. `prop-global-graph-characterization-by-one-point-transverse-fibres` —
    **proposition** `[LA]`; bijectivity plus the local result makes the
    restricted projection a diffeomorphism.

**Families and genericity**

34. `def-smooth-family-of-maps-and-evaluation-map` — **definition** `[LN]`.
    A family $F_s:M\to N$ is smooth when $(p,s)\mapsto F_s(p)$ is smooth.
35. `thm-parametric-transversality` — **theorem** `[LA]`. If the evaluation
    map $F:M\times S\to N$ is transverse to $Z\subseteq N$, then for almost
    every $s\in S$, $F_s\pitchfork Z$. LANDMARK.
36. `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` —
    **corollary** `[LL]`; $(p,a)\mapsto f(p)+a$ is a submersion.
37. `cor-almost-every-point-is-a-transverse-zero-after-translation` —
    **corollary** `[LL]`; regular-value language and translation language
    agree.
38. `prop-transversality-is-stable-on-a-compact-source` — **proposition**
    `[LA]`. In the strong $C^1$ topology, maps sufficiently close to a map
    transverse to a **closed** embedded submanifold remain transverse; the
    compactness and closedness hypotheses are not omitted.

### `fs-` items (A page)

- `fs-every-critical-point-is-an-isolated-point` — **false statement** `[LL]`;
  a constant function has every point critical.
- `fs-the-set-of-critical-values-is-always-closed` — **false statement** `[LL]`;
  it is generally only $F_\sigma$; a nonproper map can have critical values
  accumulating at a regular value.
- `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` —
  **false statement** `[LL]`; the finite differentiability threshold is real,
  as Whitney-type examples show.
- `fs-two-submanifolds-with-nonempty-intersection-are-transverse` — **false
  statement** `[LL]`; coincident tangent lines are the basic counterexample.
- `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` — **false
  statement** `[LL]`; transversality cannot be discarded.
- `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` —
  **false statement** `[LL]`; compact control or the strong topology is needed.

### B page — `sard-theorem-and-transversality-examples`

1. `ex-critical-points-and-values-of-a-height-function-on-a-sphere` —
   **example** `[LL]`.
2. `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` —
   **example** `[LL]`.
3. `ex-a-smooth-map-with-a-nonclosed-critical-value-set` — **example** `[LA]`;
   give an explicit disjoint-bump construction and verify that the limit
   value has only regular preimages.
4. `ex-transverse-and-tangent-intersections-of-plane-curves` — **example**
   `[LL]`.
5. `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` —
   **example** `[LL]`.
6. `ex-a-fibre-product-of-submersions` — **example** `[LL]`.
7. `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` —
   **example** `[LA]`.
8. `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids` — **example**
   `[LL]`.
9. `cex-a-c1-map-whose-critical-values-have-positive-measure` —
   **counterexample/remark** `[AN]`; state the sourced Whitney phenomenon
   without making its construction load-bearing.
10. `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` —
    **counterexample** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 6 “Sard's
  Theorem,” headings “Sets of Measure Zero,” “Sard's Theorem,” “The Whitney
  Embedding Theorem,” “The Whitney Approximation Theorems,” and
  “Transversality” (printed pp. 125–149); this pair reads pp. 125–131 and
  143–147, with the middle headings disposed to DG-7.** Primary textbook
  proof for items 1–38.
- **Gualtieri, *Topology I: Smooth Manifolds*, Parts 6 “Transversality,” 8
  “Sard's theorem,” and 10 “Genericity” (2017 course PDFs, cumulative notes
  §§3.1–3.4, pp. 25–38).** Independent lecture-note proof of manifold null
  sets, smooth Sard, fibre products, and parametric transversality.
- **Lang, *Differential Geometry I* lecture notes, §9.1 “Null sets” and §9.2
  “Theorem (Morse–Sard)” (PDF pp. 42–46).** Exact finite-regularity source
  for item 15: $r>\max\{0,m-n\}$.
- **Source discrepancy:** the formula extracted from Gualtieri's “Big
  Sard's theorem” is not used for the differentiability threshold because it
  does not display the standard $r>\max\{m-n,0\}$ condition. Lee supplies
  the complete $C^\infty$ proof and Lang supplies the exact $C^r$ statement.

### Proof strategy and traps

Items 12–16 follow the standard three-stratum proof. On $C\setminus C_1$,
one nonzero first derivative becomes a coordinate and slicing reduces both
dimensions. On $C_j\setminus C_{j+1}$, a nonzero derivative of order $j+1$
traps $C_j$ in a smooth hypersurface and induction reduces the domain
dimension. On the final flat stratum, Taylor's theorem and cube subdivision
give the exponent for $r>m-n$. Each localization is countable; “cover by
charts” without second countability is insufficient.

For item 35, let $W=F^{-1}(Z)$ and project $W$ to the parameter manifold.
A regular parameter for that projection gives transversality of the slice;
Sard supplies almost every such parameter. The later global perturbation
theorem must first construct a finite-dimensional perturbation family whose
total evaluation is transverse, then localize it; it may not cite “genericity”
as if that were a proof.

**Well-definedness discharged:** chart independence of nullity (items 1–5),
manifold critical-value sets (11–19), normal-quotient formulation (25),
fibre-product smooth structure (28), graph corestrictions (32–33), and slice
maps in a smooth family (34–35).  
**Choice:** the local Sard proof is ZF. Countable localization and the
relative transversality construction inherit DG-2's $\mathrm{AC}_\omega$
sufficient hypothesis; no DC or full AC is added.  
**Forward references:** item 38 defines only the compact-source $C^1$
neighbourhood it uses. DG-7 supplies quantitative Whitney approximation,
tubular neighbourhoods, the global transversality-homotopy theorem, and
strong-topology density. Boundary transversality is developed after
manifolds with boundary in DG-12.

---

## DG-7. Whitney Embedding, Tubular Neighbourhoods, and Smooth Approximation

**A page id:** `whitney-embedding-tubular-neighbourhoods-and-approximation`  
**B page id:** `whitney-embedding-tubular-neighbourhoods-and-approximation-examples`  
**`requires`:** `sard-theorem-and-transversality`,
`smooth-vector-bundles-and-sections`,
`smooth-partitions-of-unity-and-exhaustions`, `compactness`,
`homotopy-and-homotopy-equivalence`

Whitney's theorems justify moving between intrinsic manifolds and Euclidean
geometry, but only after injectivity, immersion, properness, and topology have
all been checked. This page proves the weak proper embedding
$M^n\hookrightarrow\mathbb R^{2n+1}$ and immersion
$M^n\looparrowright\mathbb R^{2n}$, constructs tubular neighbourhoods with
variable radius, and uses their retractions for approximation and
transversality. The strong $2n$ embedding theorem is recorded as the
commissioned, honestly sourced non-load-bearing statement; its difficult
Whitney-trick proof is not disguised as a short consequence of Sard.

### A-page items, in dependency order

**Embeddings in Euclidean space**

1. `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space` —
   **lemma** `[LA]`. A finite regular chart cover and bump-coordinate blocks
   give an injective immersion; compactness promotes it to an embedding.
2. `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` —
   **lemma** `[LA]`; this is a bookkeeping lemma, not a map to an
   infinite-dimensional ambient space.
3. `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` —
   **lemma** `[LA]`. It combines even and odd chart bands into finitely many
   Euclidean coordinate blocks and one proper coordinate.
4. `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` —
   **theorem** `[LA]`; item 3 proves the noncompact case without a compactness
   assumption.
5. `prop-a-proper-injective-immersion-is-a-smooth-embedding` — **proposition**
   `[LL]`; a proper continuous map from a locally compact Hausdorff space to a
   Hausdorff space is closed.
6. `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` —
   **definition** `[LN]`. The normalized secant map is defined off the
   diagonal and the tangent-direction map on the unit tangent bundle.
7. `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` —
   **lemma** `[LA]`. When $N>2n+1$, Sard supplies a projection direction
   missed by both the secant and tangent-direction images.
8. `lem-a-generic-projection-can-preserve-properness` — **lemma** `[LA]`.
   Choose the direction outside a narrow cone controlled by the proper
   coordinate; an arbitrary projection of a proper embedding need not remain
   proper.
9. `thm-weak-whitney-proper-embedding-theorem` — **theorem** `[LA]`. Every
   smooth $n$-manifold, with the later stated boundary interpretation, admits
   a proper smooth embedding in $\mathbb R^{2n+1}$. LANDMARK.
10. `thm-weak-whitney-immersion-theorem` — **theorem** `[LA]`. Every smooth
    $n$-manifold admits a smooth immersion in $\mathbb R^{2n}$.
11. `rem-strong-whitney-embedding-theorem` — **remark/theorem statement**
    `[AN]`. For $n>0$, every smooth $n$-manifold embeds smoothly in
    $\mathbb R^{2n}$; this cited statement is not a dependency target.
12. `rem-strong-whitney-immersion-theorem` — **remark/theorem statement**
    `[AN]`. For $n>1$, every smooth $n$-manifold immerses in
    $\mathbb R^{2n-1}$; non-load-bearing.

**Tubular neighbourhoods**

13. `def-tubular-neighbourhood-of-an-embedded-submanifold` — **definition**
    `[LN]`. It is an open neighbourhood of the zero section in the normal
    bundle together with an embedding onto an ambient open neighbourhood,
    restricting to the original inclusion on the zero section.
14. `def-normal-addition-map-for-a-euclidean-submanifold` — **definition**
    `[LN]`: $E(p,v)=p+v$ on the orthogonal normal bundle.
15. `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section` —
    **lemma** `[LA]`; its derivative identifies tangent and normal summands
    with the ambient tangent space.
16. `lem-variable-radius-injectivity-for-normal-addition` — **lemma** `[LA]`.
    There is a positive continuous, then smooth, function $\delta:S\to(0,\infty)$
    such that $E$ is injective on $\{(p,v):\lVert v\rVert<\delta(p)\}$.
17. `thm-euclidean-tubular-neighbourhood-theorem` — **theorem** `[LA]`.
    Normal addition gives a diffeomorphism from a variable-radius normal
    neighbourhood onto an open neighbourhood of $S$ in Euclidean space.
18. `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction` —
    **corollary** `[LL]`; project to the zero-section base through the inverse
    tubular chart.
19. `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking` —
    **proposition** `[LA]`; for a compact submanifold a uniform radius is
    available, while a noncompact one generally needs a variable radius.
20. `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` —
    **theorem** `[LA]`. Choose a bundle metric and a smooth local addition,
    apply the inverse function theorem along the zero section, and shrink by
    a positive smooth radius to obtain a tube modelled on
    $TM|_S/TS$. LANDMARK.
21. `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction` —
    **corollary** `[LL]`.
22. `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section` —
    **proposition** `[LA]`; compare them by the inverse of one tube composed
    with the other and shrink. It does not claim a canonical global tube.

**Whitney approximation and smoothing**

23. `def-positive-continuous-error-function-for-strong-approximation` —
    **definition** `[LN]`; $\varepsilon:M\to(0,\infty)$ allows pointwise
    control on noncompact domains.
24. `thm-whitney-approximation-for-euclidean-valued-maps` — **theorem** `[LA]`.
    If $F:M\to\mathbb R^k$ is continuous and $\varepsilon>0$ is continuous,
    there is smooth $\widetilde F$ with
    $\lVert\widetilde F(p)-F(p)\rVert<\varepsilon(p)$ everywhere.
25. `thm-relative-whitney-approximation-for-euclidean-valued-maps` —
    **theorem** `[LA]`. If $F$ is smooth on a neighbourhood of a closed set
    $A$, the approximation can equal $F$ on a smaller neighbourhood of $A$.
26. `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood` —
    **lemma** `[LA]`; pull the variable tube radius back along $F$ and choose
    the error function below it.
27. `thm-whitney-approximation-for-manifold-valued-maps` — **theorem** `[LA]`.
    Embed the target, approximate in Euclidean space, and retract through a
    tube; the result is smooth and homotopic to the original map.
28. `thm-relative-whitney-approximation-for-manifold-valued-maps` —
    **theorem** `[LA]`; preserve the map near a closed set on which it is
    already smooth.
29. `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map` —
    **corollary** `[LL]`.
30. `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` —
    **theorem** `[LA]`; smooth a continuous homotopy relative to its two end
    collars.
31. `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets` —
    **corollary** `[LL]`.
32. `cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset` —
    **corollary** `[LA]`; the relative theorem supplies the smooth extension.

**Global transverse approximation**

33. `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family` —
    **lemma** `[LA]`. Around each compact source band, Euclidean translations
    followed by tubular retraction span the target tangent space.
34. `thm-transversality-homotopy-theorem` — **theorem** `[LA]`. Every smooth
    map is smoothly homotopic to one transverse to a fixed closed embedded
    submanifold; if already transverse near a closed set, the perturbation
    and homotopy can be fixed on a smaller neighbourhood there. LANDMARK.
35. `thm-strong-whitney-approximation-by-transverse-maps` — **theorem** `[LA]`.
    Prescribed locally finite $C^r$ error bounds can be met while obtaining
    transversality.
36. `cor-transverse-maps-are-dense-in-the-strong-smooth-topology` —
    **corollary** `[LL]`.
37. `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` —
    **corollary** `[LA]`; hence a generic section has a zero submanifold of
    the expected codimension.
38. `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` —
    **proposition** `[LA]`; the support cutoff is squared so its derivative
    also vanishes where the parameter is switched off.

### `fs-` items (A page)

- `fs-every-injective-immersion-is-a-proper-embedding` — **false statement**
  `[LL]`; both topology and properness can fail.
- `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` —
  **false statement** `[LL]`; secants or tangent directions may collapse.
- `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n` — **false
  statement** `[LL]`; dimension equality would force a local diffeomorphism
  and an open image.
- `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood` —
  **false statement** `[LL]`; distinct ends can approach with reach tending
  to zero.
- `fs-the-tubular-neighbourhood-retraction-is-canonical` — **false statement**
  `[LL]`; it depends on the tube or metric.
- `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold` —
  **false statement** `[LL]`; point-dependent positive error is required.

### B page — `whitney-embedding-tubular-neighbourhoods-and-approximation-examples`

1. `ex-the-standard-circle-and-its-annular-tubular-neighbourhood` —
   **example** `[LL]`; compute normal addition and radial retraction.
2. `ex-the-sphere-and-its-two-sided-normal-tube` — **example** `[LL]`.
3. `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius` —
   **example** `[AA]`; parallel hairpin branches approach one another at
   infinity while embeddedness is verified.
4. `ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space` —
   **example** `[LL]`.
5. `ex-projecting-a-space-curve-can-create-a-double-point` — **example** `[LL]`.
6. `ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set` —
   **example** `[AA]`.
7. `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction` —
   **example** `[AA]`.
8. `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set` —
   **example** `[LA]`.
9. `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius` —
   **counterexample** `[LL]`; use the centre of a circle.
10. `cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values` —
    **counterexample** `[AA]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 6 “Sard's
  Theorem,” headings “The Whitney Embedding Theorem,” “The Whitney
  Approximation Theorems,” and the tubular-neighbourhood development within
  the latter (printed pp. 131–143), together with “Transversality”
  (pp. 143–147).** Primary textbook proofs for items 1–38. The chapter's
  null-set and Sard headings are already included on DG-6.
- **Gualtieri, *Topology I: Smooth Manifolds*, Part 11 “Partitions of unity,
  Whitney embedding, and Tubular neighbourhoods” (cumulative notes §3.6,
  pp. 39–43), together with Part 10 “Genericity” (§3.4, pp. 35–37).**
  Independent lecture-note construction of regular covers, the high-dimensional
  embedding, projection to $\mathbb R^{2n+1}$, Euclidean tubes, and transverse
  homotopy.
- **Lee's strong Whitney statements, Theorems 6.19 and 6.20 (2nd ed., printed
  p. 136), citing Whitney's original 1944 results.** These back items 11–12
  only; no later item depends on them.

### Proof strategy and traps

The projection proof must avoid three bad-direction sets: normalized secants,
normalized tangent vectors, and directions that destroy the proper-coordinate
control. A dimension count alone is not enough until each bad set is realized
as the image of a second-countable smooth manifold to which Sard applies.
For noncompact $M$, preservation of properness is a separate lemma.

In item 16, local injectivity along each zero vector does not by itself produce
a globally injective tube. The proof constructs an open neighbourhood of the
zero section on which no two normal fibres collide, then finds a positive
smooth radius whose disc bundle lies inside it. The same variable-radius
discipline is used in approximation: a single positive constant generally
does not work on a noncompact source or target.

The manifold-valued approximation theorem embeds only the **target**, not the
source. Its homotopy follows the Euclidean straight segment inside the tube
and then retracts. The relative result uses a cutoff supported away from the
fixed neighbourhood. In item 38 the parameter cutoff has zero derivative on
its zero locus; equality of values alone would not preserve transversality
there.

**Well-definedness discharged:** finite coordinate embedding (items 1–4),
normalized secant/tangent domains (6–8), normal-bundle tube and variable
radius (13–22), tubular retraction in approximation (26–28), endpoint-relative
smoothing of homotopies (30), and supported parameter families (33–38).  
**Choice:** the local Euclidean and finite-dimensional Sard arguments are ZF.
Noncompact locally finite constructions inherit DG-2's
$\mathrm{AC}_\omega$ sufficient hypothesis. The strong Whitney statements
add no choice because they are not proved or used.  
**Forward references:** boundary versions of embedding, tubes, approximation,
and transversality are stated precisely on DG-12 after boundary charts and
the induced boundary smooth structure exist.

---

## DG-8. Euclidean Ordinary Differential Equations with Smooth Dependence

**A page id:** `euclidean-ordinary-differential-equations-with-smooth-dependence`  
**B page id:** `euclidean-ordinary-differential-equations-with-smooth-dependence-examples`  
**`requires`:** `completeness-and-uniform-continuity`,
`uniform-convergence-of-functions`, `properties-of-the-integral-and-the-working-ftc`,
`the-total-derivative`, `higher-derivatives-and-smoothness`,
`mixed-partials-taylor-and-extrema`

The published library has Banach's fixed-point theorem and complete spaces of
continuous functions, but no local ODE theorem. Flow, parallel transport,
geodesic, Jacobi, and Hamiltonian arguments all need more than bare existence:
they need uniqueness, maximal continuation, and smooth dependence on initial
data and parameters. This pair supplies that analytic prerequisite once and
for all, in Euclidean space, before any geometric page invokes it.

### A-page items, in dependency order

**Comparison and the Picard operator**

1. `def-solution-of-a-nonautonomous-first-order-system` — **definition**
   `[LN]`. A $C^1$ curve $x:J\to U\subseteq\mathbb R^n$ solves
   $\dot x=V(t,x)$ with $x(t_0)=x_0$ when the equation holds throughout its
   interval domain.
2. `def-autonomous-ordinary-differential-equation` — **definition** `[LN]`;
   $V$ is independent of $t$.
3. `lem-a-c1-vector-field-is-uniformly-lipschitz-on-a-compact-convex-box` —
   **lemma** `[LL]`; bound the operator norm of $D_xV$ and use the vector
   mean-value inequality.
4. `lem-ode-comparison-inequality` — **lemma** `[LA]`. If an upper right
   derivative satisfies the stated scalar differential inequality, comparison
   with the scalar solution follows.
5. `thm-gronwall-inequality-for-continuous-functions` — **theorem** `[LA]`.
   Both constant- and variable-coefficient integral forms are proved.
6. `cor-uniqueness-estimate-for-lipschitz-odes` — **corollary** `[LL]`:
   $\lVert x(t)-y(t)\rVert\le e^{L|t-t_0|}\lVert x(t_0)-y(t_0)\rVert$.
7. `prop-the-ode-initial-value-problem-is-equivalent-to-a-volterra-integral-equation` —
   **proposition** `[LL]`; this uses the componentwise fundamental theorem of
   calculus.
8. `def-picard-operator-on-a-closed-curve-ball` — **definition** `[LN]`:
   $(\mathcal Tx)(t)=x_0+\int_{t_0}^tV(s,x(s))\,ds$.
9. `lem-the-closed-curve-ball-is-complete-in-the-sup-metric` — **lemma** `[LA]`.
   It is a closed subspace of the finite product of the published complete
   $C(K,\mathbb R)$ spaces.
10. `lem-the-picard-operator-preserves-a-sufficiently-small-curve-ball` —
    **lemma** `[LA]`; the time radius is chosen from the vector-field bound
    and the spatial distance to the box boundary.
11. `lem-the-picard-operator-is-a-contraction-for-short-time` — **lemma**
    `[LL]`; contraction constant $Lh<1$.
12. `thm-local-picard-lindelof-existence-and-uniqueness` — **theorem** `[LA]`.
    Banach fixed point gives the unique local solution for a locally Lipschitz
    right-hand side. LANDMARK.
13. `thm-uniform-local-existence-for-nearby-initial-data` — **theorem** `[LA]`.
    A single time interval and spatial box work for all initial points in a
    smaller neighbourhood.
14. `prop-picard-iteration-converges-with-an-explicit-error-bound` —
    **proposition** `[LA]`; inherit the published Banach a priori and a
    posteriori bounds.

**Maximal solutions and continuation**

15. `lem-uniqueness-glues-overlapping-ode-solutions` — **lemma** `[LL]`.
16. `thm-existence-and-uniqueness-of-a-maximal-solution` — **theorem** `[LA]`.
    The union of all compatible local solutions is a function on one maximal
    open interval; no representative is chosen.
17. `thm-ode-continuation-from-a-compact-interior-region` — **theorem** `[LA]`.
    If $(t,x(t))$ remains in a compact subset of the ODE domain near a finite
    endpoint, the solution extends beyond that endpoint.
18. `cor-finite-maximal-time-forces-escape-from-every-compact-subset` —
    **corollary** `[LL]`.
19. `cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete` —
    **corollary** `[LA]`; bounded speed prevents escape to infinity in finite
    time.
20. `cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete` —
    **corollary** `[LL]`.
21. `cor-a-globally-lipschitz-vector-field-has-global-solutions` —
    **corollary** `[LA]`; the Grönwall bound prevents finite-time blow-up.

**Dependence on data and parameters**

22. `thm-continuous-dependence-of-ode-solutions-on-initial-data` — **theorem**
    `[LA]`; on a common compact time interval, the Grönwall estimate gives
    quantitative dependence.
23. `def-variational-equation-along-an-ode-solution` — **definition** `[LN]`:
    $\dot A=D_xV(t,x(t))A$, $A(t_0)=I$.
24. `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` —
    **lemma** `[LA]`; bounded coefficients on compact subintervals plus the
    continuation theorem.
25. `prop-a-fundamental-matrix-is-invertible` — **proposition** `[LA]`.
    Solve the inverse equation or differentiate $B(t)A(t)$; zero determinant
    is not excluded by assertion.
26. `thm-c1-dependence-of-solutions-on-initial-data` — **theorem** `[LA]`.
    Difference quotients converge uniformly to item 23's solution.
27. `thm-smooth-dependence-of-solutions-on-initial-data` — **theorem** `[LA]`.
    Differentiate the integral equation inductively; at each order the new
    highest derivative solves an inhomogeneous linear ODE.
28. `thm-smooth-dependence-of-ode-solutions-on-parameters` — **theorem** `[LA]`.
    For $V(t,x,\lambda)$, adjoin $\dot\lambda=0$ and apply item 27; domain
    openness and a common local interval are included in the statement.
29. `thm-fundamental-theorem-for-autonomous-smooth-odes` — **theorem** `[LA]`.
    Local existence, uniqueness, and smoothness of
    $(t,t_0,x_0)\mapsto x(t;t_0,x_0)$ are collected with their exact domain.
30. `thm-fundamental-theorem-for-nonautonomous-smooth-odes` — **theorem**
    `[LA]`. Adjoin the time variable $\dot s=1$ to reduce to item 29.
31. `prop-the-maximal-solution-domain-is-open` — **proposition** `[LA]`. The
    set of triples $(t,t_0,x_0)$ on which the maximal solution exists is open,
    and the solution map is smooth there.
32. `prop-solutions-compose-under-a-change-of-initial-time` — **proposition**
    `[LL]`: whenever both sides are defined,
    $x(t;s,x(s;t_0,x_0))=x(t;t_0,x_0)$.

### `fs-` items (A page)

- `fs-continuity-of-the-vector-field-guarantees-unique-ode-solutions` —
  **false statement** `[LL]`; $\dot x=\sqrt{|x|}$ has multiple solutions from
  zero.
- `fs-every-smooth-vector-field-on-euclidean-space-is-complete` — **false
  statement** `[LL]`; $\dot x=x^2$ blows up in finite time.
- `fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points` —
  **false statement** `[LL]`; uniformity is local or compact, not global.
- `fs-a-maximal-ode-solution-has-a-closed-interval-domain` — **false
  statement** `[LL]`; maximal domains are open intervals.
- `fs-continuous-dependence-alone-implies-differentiable-dependence` —
  **false statement** `[LL]`; differentiability uses derivatives of the
  vector field and the variational equation.
- `fs-the-picard-operator-is-a-contraction-on-every-time-interval` — **false
  statement** `[LL]`; the short-time condition $Lh<1$ is essential.

### B page — `euclidean-ordinary-differential-equations-with-smooth-dependence-examples`

1. `ex-a-constant-vector-field-and-translation-solutions` — **example** `[LL]`.
2. `ex-a-linear-system-and-its-fundamental-matrix` — **example** `[LL]`.
3. `ex-the-harmonic-oscillator-as-a-first-order-system` — **example** `[LL]`.
4. `ex-logistic-growth-and-its-maximal-solution` — **example** `[LL]`.
5. `ex-quadratic-growth-with-finite-time-blow-up` — **example** `[LL]`.
6. `cex-nonuniqueness-for-a-holder-but-not-lipschitz-vector-field` —
   **counterexample** `[LL]`; display the delayed-start family for
   $\dot x=\sqrt{|x|}$.
7. `ex-a-compactly-supported-vector-field-with-global-solutions` — **example**
   `[AA]`.
8. `ex-smooth-dependence-in-an-ode-with-a-parameter` — **example** `[LL]`;
   solve $\dot x=\lambda x$ and compare with the variational equation.
9. `ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time` —
   **example** `[LL]`.
10. `cex-a-solution-escaping-every-compact-set-at-a-finite-endpoint` —
    **counterexample** `[LL]`; use $x(t)=(1-t)^{-1}$.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Appendix D “Review of
  Differential Equations,” heading “Existence, Uniqueness, and Smoothness”
  (printed pp. 663–672): Theorem D.1 Fundamental Theorem for Autonomous
  ODEs, Theorem D.2 ODE Comparison, Theorem D.3 Existence, Theorem D.4
  Uniqueness, Theorem D.5 Smoothness, and Theorem D.6 Fundamental Theorem
  for Nonautonomous ODEs.** Primary textbook proof for items 1–32. The later
  heading “Simple Solution Techniques” is examples-only and is disposed to
  the B page.
- **Hitchin, *Differentiable Manifolds*, Appendix §§10.2 “Existence of
  solutions of ordinary differential equations” and 10.3 “Smooth dependence”
  (pp. 88–92).** Independent concise proof using the contraction mapping
  theorem and parameter differentiation.
- **Datar, *Lectures on Riemannian Geometry*, Appendix B §§B.1 “Linear ODEs”
  and B.2 “Non-linear ODEs” (PDF pp. 276–284).** Independent treatment of
  linear systems, Picard–Lindelöf, continuation, and smooth dependence; §B.3
  Frobenius is disposed to DG-10.
- **Published analytic inputs:** `thm-banach-fixed-point`,
  `cor-banach-error-estimates`, and `thm-c-k-complete-in-the-sup-metric` are
  cited rather than re-minted.

### Proof strategy and traps

The contraction is performed on a **closed curve ball** inside
$C([t_0-h,t_0+h],\mathbb R^n)$, not on all continuous curves. One inequality
keeps the Picard operator inside the spatial box and another gives $Lh<1$.
These bounds must be chosen uniformly for item 13 before dependence on initial
data can be discussed.

For item 16, the maximal solution is a union of compatible functions, not a
choice of one solution for every interval; uniqueness makes the union
single-valued. Item 17 first obtains a convergent subsequence at times tending
to the endpoint from compactness, restarts at the limit point, and uses
uniqueness to glue. Smooth dependence is not inferred from Picard iterates
without proof: item 26 controls difference quotients by the comparison theorem,
and item 27 inducts through inhomogeneous variational equations.

**Well-definedness discharged:** vector-valued integral equation (item 7),
complete Picard domain (9), preservation/contraction bounds (10–12), maximal
union (15–18), variational fundamental matrix (23–27), parameter augmentation
(28), time augmentation (30), and the open maximal solution domain (31).  
**Choice:** ZF relative to the published Banach fixed-point theorem. The fixed
point is unique, maximal solutions are unions, and no family of arbitrary
solutions is selected.  
**Forward references: NONE.**

---

## DG-9. Vector Fields, Flows, Lie Brackets, and Lie Derivatives

**A page id:** `vector-fields-flows-and-lie-derivatives`  
**B page id:** `vector-fields-flows-and-lie-derivatives-examples`  
**`requires`:** `euclidean-ordinary-differential-equations-with-smooth-dependence`,
`smooth-vector-bundles-and-sections`, `tangent-cotangent-and-the-differential`,
`rank-theorems-and-embedded-submanifolds`,
`smooth-partitions-of-unity-and-exhaustions`

This pair turns infinitesimal directions into local one-parameter groups. It
proves that vector fields are derivations, builds maximal manifold integral
curves from the Euclidean ODE theorem, establishes smoothness and the group law
of the maximal flow, and then defines the Lie bracket and Lie derivative with
one consistent sign. General tensor and form Lie derivatives wait until those
objects have been constructed; their compatibility with this page is recorded
on DG-11 and DG-12.

### A-page items, in dependency order

**Vector fields and derivations**

1. `def-smooth-vector-field-as-a-tangent-bundle-section` — **definition**
   `[LN]`.
2. `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components` —
   **proposition** `[LL]`.
3. `def-action-of-a-vector-field-on-smooth-functions` — **definition** `[LN]`:
   $(Xf)(p)=X_p(f)$.
4. `prop-a-vector-field-acts-as-a-derivation-of-smooth-functions` —
   **proposition** `[LL]`.
5. `thm-derivations-of-smooth-functions-are-smooth-vector-fields` —
   **theorem** `[LA]`. Every $\mathbb R$-linear derivation
   $D:C^\infty(M)\to C^\infty(M)$ has the unique form $D=X$ for a smooth
   vector field.
6. `def-f-related-vector-fields` — **definition** `[LN]`:
   $dF_p(X_p)=Y_{F(p)}$.
7. `prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law` —
   **proposition** `[LL]`: $X(f\circ F)=(Yf)\circ F$.
8. `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism` —
   **definition** `[LN]`; no pushforward by an arbitrary noninjective map is
   asserted.
9. `lem-a-vector-field-along-an-embedded-submanifold-extends-locally-and-globally` —
   **lemma** `[LA]`; use slice charts, a tubular neighbourhood, and a cutoff.
10. `prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field` —
    **proposition** `[LL]`.

**Lie brackets**

11. `def-lie-bracket-of-smooth-vector-fields` — **definition** `[LN]`:
    $[X,Y]f=X(Yf)-Y(Xf)$.
12. `lem-the-commutator-of-vector-field-derivations-is-a-derivation` —
    **lemma** `[LL]`; second-order terms cancel.
13. `prop-coordinate-formula-for-the-lie-bracket` — **proposition** `[LL]`:
    $[X,Y]^j=X^i\partial_iY^j-Y^i\partial_iX^j$.
14. `thm-vector-fields-form-a-lie-algebra` — **theorem** `[LA]`. Bilinearity,
    antisymmetry, and Jacobi follow from commutators of endomorphisms.
15. `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples` —
    **proposition** `[LL]`:
    $[X,fY]=f[X,Y]+(Xf)Y$ and its two-function expansion.
16. `prop-related-vector-fields-have-related-lie-brackets` — **proposition**
    `[LA]`; use item 7 on test functions.
17. `cor-diffeomorphism-pushforward-preserves-lie-brackets` — **corollary**
    `[LL]`.
18. `prop-coordinate-vector-fields-commute` — **proposition** `[LL]`.

**Integral curves and maximal flows**

19. `def-integral-curve-of-a-vector-field` — **definition** `[LN]`:
    $\gamma'(t)=X_{\gamma(t)}$.
20. `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` —
    **theorem** `[LA]`; solve in a chart, prove overlap compatibility by
    uniqueness, and import DG-8's parameter dependence.
21. `thm-unique-maximal-integral-curve-through-each-point` — **theorem** `[LA]`.
22. `def-complete-vector-field` — **definition** `[LN]`; every maximal
    integral curve has domain $\mathbb R$.
23. `def-local-and-global-flow` — **definition** `[LN]`. A local flow domain
    $\mathcal D\subseteq\mathbb R\times M$ contains $\{0\}\times M$, has
    interval time fibres, and satisfies the local group law wherever defined.
24. `thm-fundamental-theorem-on-flows` — **theorem** `[LA]`. The union of
    maximal integral curves defines an open $\mathcal D$, a smooth map
    $\Phi:\mathcal D\to M$, and the unique maximal flow generated by $X$.
    LANDMARK.
25. `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains` —
    **proposition** `[LL]`; inverse $\Phi_{-t}$.
26. `prop-the-generating-vector-field-is-invariant-under-its-flow` —
    **proposition** `[LL]`: $(\Phi_t)_*X=X$ on the appropriate domains.
27. `prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global` —
    **proposition** `[LL]`.
28. `thm-compactly-supported-vector-fields-are-complete` — **theorem** `[LA]`.
    Outside the compact support integral curves are stationary; inside, finite
    maximal time would contradict the compact continuation criterion.
29. `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` —
    **corollary** `[LL]`.
30. `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it` —
    **proposition** `[LA]`; restricted and ambient integral curves agree by
    uniqueness.
31. `thm-flow-box-theorem` — **theorem** `[LA]`. Near a point where $X_p\ne0$
    there are coordinates with $X=\partial/\partial x^1$. LANDMARK.
32. `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves` —
    **corollary** `[LL]`.
33. `def-flowout-of-an-embedded-submanifold` — **definition** `[LN]`.
34. `thm-flowout-theorem` — **theorem** `[LA]`. If $X$ is nowhere tangent to
    an embedded codimension-one slice $S$, then
    $(t,p)\mapsto\Phi_t(p)$ is an embedding on a sufficiently small variable
    neighbourhood of $\{0\}\times S$ and produces a flow box.

**Lie derivatives and commuting flows**

35. `def-lie-derivative-of-a-function` — **definition** `[LN]`:
    $\mathcal L_Xf=Xf$.
36. `def-lie-derivative-of-a-vector-field` — **definition** `[LN]`:
    $(\mathcal L_XY)_p=\frac d{dt}|_0
    (\Phi_{-t})_*Y_{\Phi_t(p)}$.
37. `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket` —
    **theorem** `[LA]`: $\mathcal L_XY=[X,Y]$. The inverse-time sign in item
    36 is what gives this convention.
38. `prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes` —
    **proposition** `[LA]`.
39. `thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute` —
    **theorem** `[LA]`; the forward direction differentiates one flow's
    pushforward, and the reverse differentiates the commutation identity.
40. `prop-related-complete-vector-fields-have-intertwined-flows` —
    **proposition** `[LL]`: $F\circ\Phi_t^X=\Phi_t^Y\circ F$ wherever
    defined, by uniqueness.
41. `def-time-dependent-vector-field-and-evolution-operator` — **definition**
    `[LN]`.
42. `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` —
    **theorem** `[LA]`; apply the nonautonomous theorem from DG-8 in charts.
43. `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law` —
    **proposition** `[LL]`.
44. `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` —
    **theorem** `[LA]`; the union of supports over time is assumed contained
    in one compact set.

### `fs-` items (A page)

- `fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field` —
  **false statement** `[LL]`; coordinate components must be smooth.
- `fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map` — **false
  statement** `[LL]`; different source points in one fibre can prescribe
  incompatible target vectors.
- `fs-every-smooth-vector-field-is-complete` — **false statement** `[LL]`;
  $x^2\partial_x$ on $\mathbb R$ is not.
- `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field` — **false
  statement** `[LL]`; item 15 displays the derivative correction.
- `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p` —
  **false statement** `[LL]`; first derivatives of the fields enter.
- `fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent` —
  **false statement** `[LL]`; distinct coordinate fields commute.

### B page — `vector-fields-flows-and-lie-derivatives-examples`

1. `ex-constant-vector-fields-and-translation-flows` — **example** `[LL]`.
2. `ex-the-radial-vector-field-and-dilation-flow` — **example** `[LL]`.
3. `ex-the-rotation-vector-field-and-circle-flow` — **example** `[LL]`.
4. `ex-a-vector-field-with-finite-time-escape` — **example** `[LL]`;
   $x^2\partial_x$.
5. `ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete` —
   **example** `[AA]`.
6. `ex-coordinate-formula-for-a-nonzero-lie-bracket` — **example** `[LL]`.
7. `ex-commuting-coordinate-fields-and-their-commuting-flows` — **example**
   `[LL]`.
8. `cex-pointwise-zero-vector-fields-with-a-nonzero-bracket-at-the-point` —
   **counterexample** `[LL]`; choose fields whose coefficients vanish but
   derivatives do not.
9. `ex-a-time-dependent-translation-field-and-its-evolution-operator` —
   **example** `[LL]`.
10. `ex-the-flow-box-coordinates-for-a-nonconstant-planar-field` — **example**
    `[AA]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 8 “Vector Fields,”
  headings “Vector Fields on Manifolds,” “Vector Fields and Smooth Maps,” and
  “Lie Brackets” (printed pp. 174–189), and Ch. 9 “Integral Curves and
  Flows,” headings “Integral Curves,” “Flows,” “Flowouts,” “Lie Derivatives,”
  “Commuting Vector Fields,” and “Time-Dependent Vector Fields” (pp.
  205–239).** Primary textbook route for items 1–44. Ch. 9's “Flows and
  Flowouts on Manifolds with Boundary” goes to DG-13; “First-Order Partial
  Differential Equations” is deferred to the PDE track.
- **Merry, *Differential Geometry*, Lectures 8 “Vector Fields,” 9 “Flows,”
  and 22 “The Lie Derivative Revisited” (PDF pp. 58–74 and 167–173).**
  Independent full lecture-note treatment of brackets, smooth flows,
  completeness, naturality, and Lie derivatives.
- **Hitchin, *Differentiable Manifolds*, §§4.1 “The tangent bundle,” 4.2
  “Vector fields as derivations,” 4.3 “One-parameter groups of
  diffeomorphisms,” and 4.4 “The Lie bracket revisited” (pp. 22–33).**
  Independent derivation/flow treatment.

### Proof strategy and traps

The manifold flow theorem is not obtained merely by “working in charts.” The
author proves chart solutions agree on overlaps, maximal curves have interval
domains, the total maximal domain in $\mathbb R\times M$ is open, and the
solution map is smooth jointly in time and initial point. The local group law
then follows from uniqueness after a time shift; it is not an additional ODE
assumption.

The bracket is defined before the flow formula, so Jacobi follows cleanly from
operator commutators. Item 37 derives the flow formula and fixes its sign. For
item 39, equality $[X,Y]=0$ implies invariance of $Y$ under the $X$-flow and
then uniqueness of integral curves gives flow commutation. Statements are
always restricted to the common domains of local flows.

**Well-definedness discharged:** derivation-to-field reconstruction (items
3–5), $F$-relatedness and diffeomorphic pushforward (6–8), bracket as a
first-order derivation (11–17), gluing and maximal flow domain (19–25),
submanifold restriction (30), flowout coordinates (33–34), inverse-time Lie
derivative (36–39), and two-time evolution (41–44).  
**Choice:** local arguments and maximal unions are ZF. Global extension in
item 9 and compactly supported cutoffs inherit DG-2's
$\mathrm{AC}_\omega$ sufficient hypothesis; completeness itself introduces
no further choice.  
**Forward references:** tensor-field Lie derivatives go to DG-11;
differential-form Lie derivatives and Cartan's formula go to DG-12;
boundary-tangent and inward/outward flow statements go to DG-13.

---

## DG-10. Distributions, Integral Manifolds, and the Frobenius Theorem

**A page:** `distributions-integral-manifolds-and-the-frobenius-theorem`  
**B page:** `distributions-and-foliations-examples`  
**Requires:** DG-3, DG-4, DG-5, DG-8, DG-9, and published
`inverse-and-implicit-function-theorems` (only its actual Euclidean inverse and
implicit function theorems).

This pair proves both the local coordinate theorem and the global leaf
statement.  A distribution is not treated as a pointwise family with an
unspoken regularity condition: it is a smooth vector subbundle of $TM$ (or,
equivalently, a locally framed constant-rank family).  Singular distributions
and the Stefan--Sussmann orbit theorem are explicitly separated from this
regular theory.

### A-page items in dependency order

**Regular distributions and their integral manifolds**

1. `def-smooth-distribution-on-a-manifold` — **definition** `[LN]`. A smooth
   rank-$k$ distribution $\mathcal D$ is a rank-$k$ smooth vector subbundle of
   $TM$.
2. `prop-local-frame-characterization-of-a-smooth-distribution` —
   **proposition** `[LA]`. A rank-$k$ family is smooth exactly when locally it
   is spanned by $k$ smooth pointwise-independent vector fields.
3. `def-vector-field-tangent-to-a-distribution` — **definition** `[LN]`.
4. `prop-sections-of-a-distribution-form-a-locally-free-module` —
   **proposition** `[LL]`; in a distribution frame, every tangent field has
   unique smooth coefficients.
5. `def-annihilator-bundle-of-a-distribution` — **definition** `[LN]`:
   $\mathcal D^\circ\subseteq T^*M$.
6. `prop-double-annihilator-recovers-a-finite-rank-distribution` —
   **proposition** `[LL]`; the bundle assertion is checked in dual local
   frames.
7. `def-integral-manifold-of-a-distribution` — **definition** `[LN]`. An
   injectively immersed connected submanifold $i:N\to M$ is integral when
   $di(TN)=\mathcal D|_{i(N)}$; the image alone does not determine the
   manifold topology.
8. `def-integrable-distribution` — **definition** `[LN]`; every point lies in
   an integral manifold of the full distribution dimension.
9. `prop-integral-manifolds-have-the-distribution-dimension` —
   **proposition** `[LL]`.
10. `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds` —
    **proposition** `[LL]`.

**Involutivity and the local theorem**

11. `def-involutive-distribution` — **definition** `[LN]`:
    $[X,Y]\in\Gamma(\mathcal D)$ whenever
    $X,Y\in\Gamma(\mathcal D)$.
12. `prop-involutivity-can-be-checked-on-a-local-frame` — **proposition**
    `[LA]`; use the bracket product rule rather than a false
    $C^\infty$-bilinearity claim.
13. `prop-integrable-distributions-are-involutive` — **proposition** `[LA]`;
    restrict tangent fields to an integral manifold and use naturality of the
    bracket under an immersion.
14. `lem-involutive-frame-reduction` — **lemma** `[LA]`. If $X_1$ is a
    nonvanishing member of an involutive local frame, straighten it and replace
    the remaining frame fields by smooth combinations whose brackets with
    $X_1$ vanish.
15. `lem-commuting-independent-vector-fields-give-a-coordinate-system` —
    **lemma** `[LA]`. The successive local flows of $k$ commuting independent
    fields define a coordinate map in which they become the first $k$
    coordinate fields.
16. `thm-frobenius-local-coordinate-theorem` — **theorem** `[LA]`. A smooth
    constant-rank distribution is integrable iff it is involutive; near every
    point of an involutive rank-$k$ distribution there are coordinates
    $(x^1,\ldots,x^n)$ with
    $\mathcal D=\operatorname{span}(\partial_{x^1},\ldots,
    \partial_{x^k})$. LANDMARK.
17. `cor-frobenius-local-first-integrals` — **corollary** `[LA]`. Locally an
    involutive rank-$k$ distribution is the common kernel of the submersion
    $(x^{k+1},\ldots,x^n)$.
18. `cor-kernel-of-a-constant-rank-submersion-is-integrable` —
    **corollary** `[LL]`; its leaves are connected components of level sets.
19. `prop-level-set-distributions-are-involutive` — **proposition** `[LL]`;
    gives a direct bracket proof of item 18.

**Maximal leaves and foliations**

20. `def-flat-chart-for-a-distribution` — **definition** `[LN]`; a Frobenius
    chart whose plaques are slices with the transverse coordinates fixed.
21. `def-plaque-of-a-flat-chart` — **definition** `[LN]`.
22. `lem-integral-manifolds-are-locally-contained-in-plaques` — **lemma**
    `[LA]`; connected pieces cannot change their transverse coordinate.
23. `lem-overlapping-plaques-through-a-point-have-compatible-germs` —
    **lemma** `[LA]`.
24. `def-leaf-equivalence-relation-of-an-integrable-distribution` —
    **definition** `[LN]`: points are equivalent when joined by a piecewise
    smooth curve tangent to $\mathcal D$.
25. `lem-tangent-curve-reachability-is-an-equivalence-relation` — **lemma**
    `[LL]`.
26. `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` —
    **theorem** `[LA]`. Each equivalence class has a unique smooth structure
    making it a connected injectively immersed integral manifold, and every
    connected integral manifold through one of its points factors uniquely
    through it.
27. `cor-maximal-integral-manifolds-partition-the-manifold` — **corollary**
    `[LL]`.
28. `def-regular-foliation-atlas` — **definition** `[LN]`; transition maps
    preserve plaques, with the exact local product form recorded.
29. `def-leaf-of-a-regular-foliation` — **definition** `[LN]`.
30. `thm-regular-foliations-and-integrable-distributions-correspond` —
    **theorem** `[LA]`; a foliation gives its tangent distribution and an
    integrable distribution gives its maximal-leaf foliation.
31. `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution` —
    **proposition** `[LA]`; if $F:P\to M$ is smooth, has connected source,
    meets a leaf, and $dF(TP)\subseteq\mathcal D$, its image stays in that leaf
    and its factorization through the leaf is smooth.
32. `prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded` —
    **proposition** `[LL]`; the precise distinctions are delegated to the B
    page examples.

The Pfaffian and codimension-one differential-form criteria are deliberately
not items on this page: DG-12 returns to Frobenius after constructing the
exterior derivative, so there is no backward dependency or premature use of
$d$.

### `fs-` items (A page)

- `fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution` —
  **false statement** `[LL]`; smooth local frames are essential.
- `fs-every-smooth-distribution-is-integrable` — **false statement** `[LL]`;
  the standard contact plane field is not.
- `fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors` —
  **false statement** `[LL]`; a bracket is defined on fields and depends on
  first derivatives.
- `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold` — **false
  statement** `[LL]`; an irrational linear leaf in the torus is dense.
- `fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology` —
  **false statement** `[LL]`; this fails for a dense immersed leaf.
- `fs-frobenius-applies-to-any-variable-rank-family-of-subspaces` — **false
  statement** `[LL]`; singular distributions require a different theorem.

### B page — `distributions-and-foliations-examples`

1. `ex-coordinate-plane-distribution-and-its-affine-leaves` — **example**
   `[LL]`.
2. `ex-kernel-of-a-submersion-as-an-integrable-distribution` — **example**
   `[LL]`.
3. `ex-level-set-foliation-of-a-regular-function` — **example** `[LL]`.
4. `ex-product-foliation` — **example** `[LL]`.
5. `ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin` —
   **example** `[LL]`; including why the origin makes the rank singular.
6. `ex-irrational-linear-foliation-of-the-two-torus` — **example** `[LL]`;
   every leaf is injectively immersed, dense, and not embedded.
7. `ex-the-mobius-band-line-foliation` — **example** `[LL]`.
8. `cex-the-standard-contact-plane-field-is-not-integrable` —
   **counterexample** `[LL]`; the bracket computation is available now, and
   DG-12 later rechecks it using $\alpha\wedge d\alpha\ne0$.
9. `cex-a-variable-rank-involutive-family-outside-regular-frobenius` —
   **counterexample** `[LL]`; it is labelled singular, not called a smooth
   distribution in the present convention.
10. `ex-leaves-of-a-lie-subalgebra-distribution` — **example** `[LL]`; this is
    the local model later used in the Lie subgroup theorem.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 19
  “Distributions and Foliations,” headings “Distributions,” “Involutive
  Distributions,” “The Frobenius Theorem,” and “Foliations” (printed pp.
  489–514).** Primary textbook treatment for items 1–32. Its singular-foliation
  discussion is `deferred`: the Stefan--Sussmann theorem requires a separately
  developed variable-rank orbit theory and is not used later.
- **Merry, *Differential Geometry*, Lectures 14 “Distributions” and 15
  “Frobenius' Theorem” (PDF pp. 105–119).** Independent full lecture-note route
  through the local theorem, the commuting-frame lemma, and maximal integral
  manifolds.
- **Datar, *Lectures on Riemannian Geometry*, Appendix B.3 “Frobenius
  theorem” (pp. 197–201).** Independent concise proof and the annihilator/Pfaff
  formulation. The differential-form criterion is disposed to items 33–34
  after DG-12.

### Proof strategy and traps

Necessity is short only after naturality of brackets under immersions has been
proved. Sufficiency is decomposed: straighten one nonzero frame field; solve
the linear coefficient equations that make the other frame fields commute
with it; apply the induction hypothesis on a transverse slice; extend the
result by the first field's local flow; finally use the inverse function theorem
to obtain a coordinate chart. This records every use of ODE uniqueness and
prevents “choose commuting generators” from becoming an unsupported step.

The global theorem does not put the subspace topology on a reachability class.
It uses compatible plaque charts to define the leaf topology, proves Hausdorff
and second countable locally and along a countable manifold atlas, and then
checks that the inclusion is an injective immersion. Maximality and uniqueness
are universal properties, not claims that all leaves are embedded or closed.

**Well-definedness discharged:** subbundle/local-frame equivalence (items
1–6), immersed integral manifolds and their intrinsic topology (7–10,
20–27), frame independence of involutivity (11–12), coordinate construction
(14–17), and foliation transition compatibility (28–31).  
**Choice:** the local theorem is ZF. The maximal leaf can be built from the set
of reachable points and compatible plaque germs in ZF. Any use of a countable
manifold atlas cites DG-1's fixed second-countability basis and needs no new
choice.  
**Forward references:** DG-12 proves the Pfaffian and codimension-one
criteria; Lie-subalgebra leaves and the closed subgroup theorem consume this
pair in the Lie block. Singular foliations and the Stefan--Sussmann orbit
theorem remain a named scope denial.

---

## DG-11. Tensor Fields, Exterior Algebra, and Differential Forms

**A page:** `tensor-fields-exterior-algebra-and-differential-forms`  
**B page:** `tensor-fields-and-differential-forms-examples`  
**Requires:** DG-3 and DG-5; published `multilinear-determinants-and-permutations`,
`dual-spaces-bilinear-forms-and-inertia`, and `quotient-spaces-and-projections`.

The planned abstract-algebra page `tensor-products-of-modules` currently has
an empty `items` array and therefore is not a dependency. For the finite-
dimensional real geometry needed here, tensors are defined intrinsically as
multilinear maps and exterior powers are constructed from alternating forms
and finite-dimensional duality. This proves the relevant universal property
without pretending that the unavailable general module tensor product exists.
The future build should replace the finite-dimensional construction by stable
MOD-3 citations if that page has actually been authored below this block; the
mathematical statements and exterior-algebra proofs remain unchanged.

### A-page items in dependency order

**Multilinear tensors**

1. `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` —
   **definition** `[LN]`. With the library's convention, a type $(r,s)$
   tensor is a multilinear map
   $(V^*)^r\times V^s\to\mathbb R$; this makes vectors type $(1,0)$ and
   covectors type $(0,1)$.
2. `def-tensor-product-of-multilinear-tensors` — **definition** `[LN]`; the
   arguments are concatenated in the displayed order.
3. `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` —
   **proposition** `[LL]`; equality is literal under the chosen model, not an
   unstated canonical-isomorphism convention.
4. `def-permutation-action-on-covariant-tensors` — **definition** `[LN]`.
5. `def-symmetrization-and-alternation-operators` — **definition** `[LN]`,
   both normalized by $1/k!$ over $S_k$.
6. `prop-symmetrization-and-alternation-are-projections` — **proposition**
   `[LA]`; their images are the symmetric and alternating covariant tensors.
7. `def-contraction-of-a-mixed-tensor` — **definition** `[LN]`; contract one
   contravariant and one covariant slot using the canonical pairing.
8. `lem-contraction-is-independent-of-the-basis-formula` — **lemma** `[LA]`;
   the coordinate sum $\sum_i T(e^i,\ldots,e_i,\ldots)$ is the intrinsic
   evaluation contraction.
9. `def-pullback-of-a-covariant-tensor-by-a-linear-map` — **definition**
   `[LN]`.
10. `prop-linear-pullback-respects-tensor-products-and-permutations` —
    **proposition** `[LL]`.

**Exterior powers without an unavailable tensor-product page**

11. `def-alternating-k-covectors` — **definition** `[LN]`:
    $\operatorname{Alt}^k(V)=\{\omega:V^k\to\mathbb R:omega\text{ is
    alternating}\}$, with $\operatorname{Alt}^0(V)=\mathbb R$.
12. `def-wedge-product-of-alternating-covectors` — **definition** `[LN]`:
    $\alpha\wedge\beta=\frac{(k+\ell)!}{k!\ell!}
    \operatorname{Alt}(\alpha\otimes\beta)$, equivalently the signed shuffle
    sum.
13. `lem-the-wedge-product-is-alternating-and-bilinear` — **lemma** `[LL]`.
14. `thm-wedge-product-is-associative-and-graded-commutative` — **theorem**
    `[LA]`: $\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha$.
15. `def-exterior-algebra-of-covectors` — **definition** `[LN]`:
    $\bigwedge V^*=\bigoplus_{k=0}^{\dim V}\operatorname{Alt}^k(V)$ with
    the wedge product.
16. `lem-wedge-monomials-in-a-dual-basis-form-a-basis` — **lemma** `[LA]`:
    $e^{i_1}\wedge\cdots\wedge e^{i_k}$ for
    $i_1<\cdots<i_k$.
17. `cor-dimension-of-the-kth-exterior-power-is-binomial` — **corollary**
    `[LL]`: $\dim\operatorname{Alt}^k(V)=\binom nk$, and it is zero for
    $k>n$.
18. `def-finite-dimensional-exterior-power-of-vectors` — **definition**
    `[LN]`: $\bigwedge^kV:=\operatorname{Alt}^k(V^*)^*$, with
    $v_1\wedge\cdots\wedge v_k$ evaluating an alternating covector at the
    tuple.
19. `thm-universal-property-of-the-finite-dimensional-exterior-power` —
    **theorem** `[LA]`. Every alternating $k$-linear map $V^k\to W$ factors
    uniquely through $\bigwedge^kV$; prove existence on the wedge basis and
    independence from the chosen basis by uniqueness.
20. `prop-functoriality-of-finite-dimensional-exterior-powers` —
    **proposition** `[LA]`; $A\mapsto\bigwedge^kA$, identities, and
    composition.
21. `prop-exterior-power-duality-pairing` — **proposition** `[LA]`; the
    canonical pairing $\bigwedge^kV^*\times\bigwedge^kV\to\mathbb R$ is
    nondegenerate and has the determinant formula.
22. `prop-the-top-exterior-power-is-one-dimensional` — **proposition** `[LL]`;
    this cites, and does not re-mint, the published top-form determinant
    machinery.
23. `def-interior-product-on-alternating-covectors` — **definition** `[LN]`:
    $(\iota_v\omega)(v_2,\ldots,v_k)=\omega(v,v_2,\ldots,v_k)$.
24. `prop-interior-product-is-a-graded-antiderivation` — **proposition**
    `[LA]`: $\iota_v(\alpha\wedge\beta)=
    \iota_v\alpha\wedge\beta+(-1)^k\alpha\wedge\iota_v\beta$.

**Tensor and exterior bundles**

25. `def-type-r-s-tensor-bundle` — **definition** `[LN]`:
    $T^r_sM=(TM)^{\otimes r}\otimes(T^*M)^{\otimes s}$ interpreted through
    its local multilinear-map model.
26. `thm-tensor-transition-laws-define-a-smooth-vector-bundle` — **theorem**
    `[LA]`; the local change-of-coordinates matrices satisfy the cocycle law.
27. `def-smooth-tensor-field` — **definition** `[LN]`; a smooth section of
    $T^r_sM$.
28. `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` —
    **proposition** `[LL]`.
29. `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` —
    **proposition** `[LA]`.
30. `def-pullback-of-a-covariant-tensor-field` — **definition** `[LN]`:
    $(F^*T)_p(v_1,\ldots,v_k)=T_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$.
31. `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` —
    **proposition** `[LA]`; includes $(G\circ F)^*=F^*G^*$ and identity.
32. `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` —
    **false statement** `[LL]`; contravariant slots cannot be pulled back
    without additional invertibility data.
33. `def-symmetric-and-alternating-covariant-tensor-subbundles` —
    **definition** `[LN]`.
34. `thm-symmetric-and-alternating-images-are-smooth-subbundles` —
    **theorem** `[LA]`; their constant ranks follow from the fixed fibrewise
    projections.
35. `def-exterior-power-bundle-of-the-cotangent-bundle` — **definition**
    `[LN]`: $\bigwedge^kT^*M$ with fibres
    $\operatorname{Alt}^k(T_pM)$.
36. `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` —
    **theorem** `[LA]`; equivalently it is item 34's alternating subbundle.

**Differential forms as smooth sections**

37. `def-smooth-differential-k-form` — **definition** `[LN]`: a smooth
    section of $\bigwedge^kT^*M$; set
    $\Omega^k(M)=\Gamma(\bigwedge^kT^*M)$ and
    $\Omega^0(M)=C^\infty(M)$.
38. `prop-local-coordinate-expression-for-a-differential-form` —
    **proposition** `[LL]`: uniquely
    $\omega=\sum_{i_1<\cdots<i_k}\omega_{i_1\cdots i_k}
    dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ with smooth coefficients.
39. `def-wedge-product-of-differential-forms` — **definition** `[LN]`;
    defined pointwise.
40. `prop-differential-forms-form-a-graded-commutative-algebra` —
    **proposition** `[LL]`.
41. `def-interior-product-of-a-form-by-a-vector-field` — **definition**
    `[LN]`; $(\iota_X\omega)_p=\iota_{X_p}\omega_p$.
42. `prop-interior-product-on-forms-is-a-graded-antiderivation` —
    **proposition** `[LL]`.
43. `def-pullback-of-a-differential-form` — **definition** `[LN]`; the
    covariant tensor pullback restricted to alternating tensors.
44. `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` —
    **proposition** `[LA]`.
45. `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` —
    **proposition** `[LL]`; for mixed tensors use both $dF$ and $dF^{-1}$.

### `fs-` items (A page)

- `fs-every-mixed-tensor-field-can-be-pulled-back-by-an-arbitrary-smooth-map` —
  **false statement** `[LL]`; retained alongside item 32 only if house policy
  permits the theorem/FS pairing, otherwise item 32 is the sole FS.
- `fs-the-wedge-product-is-commutative` — **false statement** `[LL]`; it is
  graded-commutative.
- `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` —
  **false statement** `[LL]`; $\alpha\wedge\alpha=0$.
- `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` —
  **false statement** `[LL]`.
- `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` —
  **false statement** `[LL]`; the Jacobian and inverse Jacobian act on the
  respective slots.
- `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis` —
  **false statement** `[LL]`.

### B page — `tensor-fields-and-differential-forms-examples`

1. `ex-tensor-product-and-contraction-in-a-basis` — **example** `[LL]`.
2. `ex-a-bilinear-form-as-a-type-zero-two-tensor` — **example** `[LL]`.
3. `ex-an-endomorphism-as-a-type-one-one-tensor` — **example** `[LL]`.
4. `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` —
   **example** `[LL]`.
5. `ex-wedge-products-of-the-standard-dual-basis` — **example** `[LL]`.
6. `ex-determinant-as-the-pairing-of-top-exterior-powers` — **example**
   `[LL]`.
7. `ex-the-euclidean-metric-as-a-symmetric-two-tensor` — **example** `[LL]`.
8. `ex-the-area-form-in-polar-coordinates` — **example** `[LA]`; derive
   $dx\wedge dy=r\,dr\wedge d\theta$ on the chart domain.
9. `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve` —
   **example** `[LA]`.
10. `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` —
    **counterexample** `[LL]`.
11. `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection` —
    **counterexample** `[LL]`; prepares orientation.
12. `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` —
    **example** `[LA]`; its exterior derivative is postponed to DG-12.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 12 “Tensors,”
  headings “Multilinear Algebra,” “Symmetric and Alternating Tensors,” and
  “Tensors and Tensor Fields on Manifolds” (printed pp. 310–338).** Primary
  textbook source for items 1–36. Its
  covariant derivative material is disposed to the Riemannian connection
  pair; tensor densities go to integration and Riemannian volume.
- **Lee, 2nd ed., Ch. 14 “Differential Forms,” all headings surveyed and the
  opening exterior-algebra/differential-form construction read in detail
  (pp. 353–388).** Second textbook cross-check for items 11–45; exterior
  derivative and Cartan-calculus headings are disposed to DG-12.
- **Merry, *Differential Geometry*, Lectures 19 “Tensor and Exterior
  Algebras,” 20 “Sections of Vector Bundles,” and 21 “Tensor Fields” (PDF pp.
  131–166).** Independent full lecture-note treatment. Lecture 22 “Lie
  Derivative Revisited” and Lecture 23 “Exterior Differential” are disposed
  to DG-12.
- **Hitchin, *Differentiable Manifolds*, §5 “Tensor products,” especially
  §5.1 “Exterior algebra,” and §6 “Differential forms” (pp. 34–45), with the
  algebraic and definitional portions read here.** Independent convention
  check; exterior-derivative results are disposed to DG-12.

### Proof strategy and traps

All algebraic operations are first defined on a single finite-dimensional
vector space and only then globalized. The wedge normalization is fixed twice:
the alternation and shuffle formulas are proved equal, and the resulting
formula for one-forms is
$(\alpha\wedge\beta)(v,w)=\alpha(v)\beta(w)-\alpha(w)\beta(v)$.
Associativity is proved by the shuffle bijection, while graded commutativity
uses the block-swap sign $(-1)^{k\ell}$.

The exterior power of vectors is not a mysterious quotient of an unavailable
tensor product. Finite-dimensional duality gives a concrete object; the wedge
basis proves its universal property. This construction is canonical despite
the proof's use of a basis because uniqueness of the factorization identifies
the maps produced from any two bases. For bundles, the induced exterior-power
matrices satisfy the cocycle identities, so “take the exterior power in each
fibre” is followed by an actual smooth-bundle proof.

**Well-definedness discharged:** basis-free contraction (items 7–8), wedge
normalization and exterior universal property (11–24), tensor transition
cocycles and component laws (25–36), and coordinate-independent form
operations (37–45).  
**Choice:** finite-dimensional basis arguments use only finite choice; the
page is ZF given the published finite-dimensional linear algebra.  
**Forward references:** the exterior derivative and full Cartan calculus are
DG-12; orientations are DG-13; integration and Stokes are DG-14. General
tensor products of modules remain owned by abstract algebra's MOD-3 and are
not re-minted here.

---

## DG-12. The Exterior Derivative and Cartan Calculus

**A page:** `the-exterior-derivative-and-cartan-calculus`  
**B page:** `exterior-calculus-computations-and-examples`  
**Requires:** DG-9, DG-10, and DG-11.

This pair constructs $d$ intrinsically and proves, rather than assumes, its
coordinate independence. It then reconciles the flow definition of Lie
derivative with the algebra of $d$ and $\iota_X$. The Pfaffian version of
Frobenius appears only now, after all its symbols have meanings.

### A-page items in dependency order

**Intrinsic construction of the exterior derivative**

1. `def-graded-derivation-of-the-algebra-of-differential-forms` —
   **definition** `[LN]`; a degree-$r$ operator obeys
   $D(\alpha\wedge\beta)=D\alpha\wedge\beta+(-1)^{r\deg\alpha}
   \alpha\wedge D\beta$.
2. `def-exterior-derivative-by-the-invariant-vector-field-formula` —
   **definition** `[LN]`. For $\omega\in\Omega^k(M)$,
   \[
   d\omega(X_0,\ldots,X_k)=
   \sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)
   +\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,
   \widehat X_j,\ldots,X_k).
   \]
3. `lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear` —
   **lemma** `[LA]`; derivative terms cancel using the bracket product rule,
   so the formula depends only on the pointwise vectors.
4. `prop-the-exterior-derivative-is-local` — **proposition** `[LL]`.
5. `prop-exterior-derivative-of-a-function-is-its-differential` —
   **proposition** `[LL]`.
6. `thm-local-coordinate-formula-for-the-exterior-derivative` — **theorem**
   `[LA]`: for $\omega=\sum_I\omega_I dx^I$,
   $d\omega=\sum_I d\omega_I\wedge dx^I$.
7. `thm-the-exterior-derivative-is-a-graded-derivation` — **theorem** `[LA]`.
8. `thm-the-exterior-derivative-squares-to-zero` — **theorem** `[LA]`;
   first on coordinate expressions, then globally by locality.
9. `thm-existence-and-uniqueness-of-the-exterior-derivative` — **theorem**
   `[LA]`. It is the unique degree-one graded derivation agreeing with $df$ on
   functions and satisfying $d^2=0$.
10. `prop-the-exterior-derivative-commutes-with-restriction` —
    **proposition** `[LL]`.
11. `thm-the-exterior-derivative-commutes-with-pullback` — **theorem** `[LA]`:
    $d(F^*\omega)=F^*(d\omega)$ for every smooth map $F$.
12. `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms` —
    **corollary** `[LL]`; “closed” and “exact” are provisionally named here
    and formally collected with the de Rham complex in DG-15.
13. `prop-the-exterior-derivative-does-not-enlarge-support` —
    **proposition** `[LL]`: $\operatorname{supp}(d\omega)\subseteq
    \operatorname{supp}\omega$.

**Lie derivatives of tensors and forms**

14. `def-lie-derivative-of-a-tensor-field` — **definition** `[LN]`:
    $\mathcal L_XT=\frac d{dt}|_0(\Phi_t^*T)$, with the pullback convention
    extended to mixed tensors by the local diffeomorphism $\Phi_t$.
15. `lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined` —
    **lemma** `[LA]`; any two local flows agree near $(0,p)$.
16. `prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields` —
    **proposition** `[LA]`; reconciles DG-9's inverse-time pushforward
    definition.
17. `thm-lie-derivative-is-a-derivation-of-the-tensor-algebra` — **theorem**
    `[LA]`; it commutes with contractions and obeys the ordinary product rule.
18. `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor` —
    **proposition** `[LA]`.
19. `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` —
    **proposition** `[LA]`.
20. `prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes` —
    **proposition** `[LA]`, on every common flow domain.
21. `def-lie-derivative-of-a-differential-form` — **definition** `[LN]`; the
    alternating-covariant specialization of item 14.
22. `prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation` —
    **proposition** `[LL]`.
23. `thm-cartans-magic-formula` — **theorem** `[LA]`:
    $\mathcal L_X=d\iota_X+\iota_Xd$. LANDMARK.
24. `cor-lie-derivative-commutes-with-the-exterior-derivative` —
    **corollary** `[LL]`.
25. `prop-cartan-commutator-identities` — **proposition** `[LA]`:
    $[\mathcal L_X,\iota_Y]=\iota_{[X,Y]}$,
    $[\mathcal L_X,\mathcal L_Y]=\mathcal L_{[X,Y]}$, and
    $\iota_X\iota_Y+\iota_Y\iota_X=0$, with graded commutators stated once.
26. `prop-lie-derivatives-are-natural-for-related-vector-fields` —
    **proposition** `[LA]`; if $X$ and $Y$ are $F$-related then
    $\mathcal L_XF^*\omega=F^*\mathcal L_Y\omega$.
27. `thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow` —
    **theorem** `[LA]`: for the evolution $\Phi_{t,s}$ of $X_t$,
    $\frac d{dt}\Phi_{t,s}^*\omega_t=Phi_{t,s}^*(\dot\omega_t+
    \mathcal L_{X_t}\omega_t)$.
28. `cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero` —
    **corollary** `[LL]`; if $d\omega=0$ and $\iota_X\omega=0$, then
    $\mathcal L_X\omega=0$.

**Pfaffian Frobenius criteria**

29. `def-differential-ideal-in-the-algebra-of-forms` — **definition** `[LN]`;
    a graded ideal $I$ with $dI\subseteq I$.
30. `lem-annihilator-ideal-of-a-distribution-is-frame-independent` —
    **lemma** `[LA]`; the ideal is generated locally by any frame of
    $\mathcal D^\circ$.
31. `thm-pfaffian-frobenius-criterion` — **theorem** `[LA]`. If
    $\theta^1,\ldots,\theta^{n-k}$ locally frame $\mathcal D^\circ$, then
    $\mathcal D$ is involutive iff
    $d\theta^a=\sum_b\eta^a_b\wedge\theta^b$ locally, equivalently the
    annihilator ideal is differential.
32. `cor-codimension-one-frobenius-criterion` — **corollary** `[LA]`. For a
    nowhere-zero one-form $\alpha$, $\ker\alpha$ is integrable iff
    $\alpha\wedge d\alpha=0$.
33. `prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields` —
    **proposition** `[LL]`.

### `fs-` items (A page)

- `fs-the-exterior-derivative-is-c-infinity-linear` — **false statement**
  `[LL]`; $d(f\omega)=df\wedge\omega+f,d\omega$.
- `fs-the-exterior-derivative-depends-on-a-riemannian-metric` — **false
  statement** `[LL]`; it is defined on every smooth manifold.
- `fs-every-closed-differential-form-is-globally-exact` — **false statement**
  `[LL]`; the angular form on the punctured plane provides the first witness.
- `fs-lie-derivative-and-interior-product-commute-for-all-vector-fields` —
  **false statement** `[LL]`; their commutator is
  $\iota_{[X,Y]}$.
- `fs-alpha-wedge-d-alpha-vanishes-for-every-one-form` — **false statement**
  `[LL]`; it is the contact obstruction in odd dimension.
- `fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported` —
  **false statement** `[LL]`; this needs a proper map (or support control).

### B page — `exterior-calculus-computations-and-examples`

1. `ex-exterior-derivatives-of-coordinate-one-forms` — **example** `[LL]`.
2. `ex-the-euclidean-area-form-is-closed` — **example** `[LL]`.
3. `ex-the-angular-one-form-on-the-punctured-plane-is-closed` — **example**
   `[LA]`.
4. `ex-the-angular-one-form-has-no-global-potential` — **example** `[LA]`;
   integrate around the unit circle only after DG-14, so here record the local
   primitive obstruction and cross-link the later proof.
5. `ex-curl-and-divergence-encoded-by-the-exterior-derivative` — **example**
   `[LA]`; uses Euclidean coordinates, with no metric-free identification
   claimed.
6. `ex-lie-derivative-of-the-euclidean-metric-under-dilations` — **example**
   `[LL]`.
7. `ex-lie-derivative-of-an-area-form-and-planar-divergence` — **example**
   `[LA]`.
8. `ex-cartans-formula-for-a-coordinate-vector-field` — **example** `[LL]`.
9. `ex-a-contact-form-on-three-space` — **example** `[LL]`:
   $\alpha=dz-x\,dy$ and $\alpha\wedge d\alpha\ne0$.
10. `ex-an-integrable-pfaffian-equation-with-a-local-first-integral` —
    **example** `[LL]`.
11. `cex-a-nonproper-pullback-destroys-compact-support` — **counterexample**
    `[LL]`.
12. `ex-time-dependent-pullback-differentiation-for-a-translation` —
    **example** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 14 “Differential
  Forms,” all substantive headings (printed pp. 353–388), especially Prop.
  14.11 (wedge laws), Prop. 14.23 (Euclidean $d$), Thm. 14.24 (exterior
  derivative), Prop. 14.32 (invariant formula), and Thm. 14.35 (Cartan's magic
  formula).** Primary textbook route for items 1–28.
- **Nicolaescu, *Lectures on the Geometry of Manifolds*, 3rd ed., Ch. 3
  §3.1 “Lie derivative” and §3.2 “Derivations of $\Omega^\bullet(M)$,”
  headings “Exterior derivative” and “Examples” (pp. 127–150).** Independent
  monograph treatment of derivations and Cartan calculus.
- **Merry, *Differential Geometry*, Lectures 22 “The Lie Derivative
  Revisited” and 23 “Exterior Differential” (PDF pp. 167–181).** Independent
  full lecture-note treatment for items 14–28.
- **Hitchin, *Differentiable Manifolds*, §6 “Differential forms,” §§6.1–6.5
  (pp. 40–49).** Independent check of $d$, pullback, contraction, and Lie
  derivative conventions. Section 6.6 “deRham cohomology” is disposed to
  DG-15.
- **Lee, 2nd ed., Ch. 19 “Distributions and Foliations,” Pfaffian
  formulation surrounding Thm. 19.12, and Datar, *Lectures on Riemannian
  Geometry*, Appendix B.3 “Frobenius theorem.”** Independent backing for
  items 29–33; all other Ch. 19 headings were disposed to DG-10.

### Proof strategy and traps

Item 3 is the well-definedness heart: every term created by replacing
$X_i$ by $fX_i$ cancels against a bracket-product term. The result is a
smooth alternating tensor and hence a form. Coordinate fields commute, which
gives item 6; from that formula the graded Leibniz rule and $d^2=0$ follow
without an unproved coordinate-independence assertion. Pullback naturality is
proved first for functions and coordinate generators and then by locality.

Cartan's formula is checked on functions and one-forms and extended to the
whole form algebra because both sides are degree-zero derivations. The
time-dependent formula includes $\dot\omega_t$ and uses the two-time evolution
operator; omitting either is a common false statement. In Pfaffian Frobenius,
the coefficients $\eta^a_b$ are obtained in a local coframe, and a change of
annihilator frame changes generators but not their ideal.

**Well-definedness discharged:** tensoriality of the invariant $d$ formula
(items 2–3), coordinate independence and uniqueness of $d$ (4–11), local-flow
independence of tensor Lie derivatives (14–20), sign reconciliation and graded
commutators (21–28), and frame independence of the Pfaffian ideal (29–33).  
**Choice:** all constructions and identities are local and finite; this pair
is ZF.  
**Forward references:** compactly supported integration validates the angular
period computation on DG-14; de Rham closed/exact quotients and homotopy
operators are DG-15; Maurer--Cartan equations appear in the Lie block.

---

## DG-13. Manifolds with Boundary, Collars, and Orientations

**A page:** `manifolds-with-boundary-collars-and-orientations`  
**B page:** `boundary-and-orientation-examples`  
**Requires:** DG-1–DG-5, DG-8–DG-12, and published
`inverse-and-implicit-function-theorems`.

Boundary is developed here rather than hidden in the first atlas definition.
This isolates the nontrivial fact that boundary points are chart-independent,
and it lets all earlier pages state explicitly whether they concern manifolds
without boundary. The proof uses smooth transition maps and the Euclidean
inverse function theorem; it does not cite the library's unproved draft remark
on topological invariance of domain.

### A-page items in dependency order

**Half-space charts and smoothness at the boundary**

1. `def-euclidean-upper-half-space-and-its-boundary` — **definition** `[LN]`:
   $\mathbb H^n=\{x^n\ge0\}$ with its subspace topology,
   $\partial\mathbb H^n=\{x^n=0\}$.
2. `def-smooth-function-on-a-relatively-open-subset-of-a-half-space` —
   **definition** `[LN]`; it locally extends to a smooth function on an open
   Euclidean neighbourhood.
3. `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space` —
   **lemma** `[LA]`; equality on a relative neighbourhood forces equality of
   all derivatives at boundary points by one-sided limits.
4. `prop-chain-rule-for-smooth-half-space-maps` — **proposition** `[LA]`;
   independent of the local extensions by item 3.
5. `def-topological-manifold-with-boundary` — **definition** `[LN]`; Hausdorff,
   second-countable, locally homeomorphic to relatively open subsets of
   $\mathbb H^n$.
6. `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` —
   **definition** `[LN]`; compatibility uses the extension definition in
   item 2 and the maximal atlas is the definable compatible-chart union.
7. `def-smooth-map-between-manifolds-with-boundary` — **definition** `[LN]`;
   coordinate representatives are smooth in the extension sense.
8. `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions` —
   **lemma** `[LA]`.
9. `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` —
   **definition** `[LN]`; initially relative to a boundary chart.
10. `thm-smooth-invariance-of-manifold-boundary` — **theorem** `[LA]`. A
    smooth diffeomorphism between relatively open half-space sets carries
    boundary to boundary; hence item 9 is chart-independent. LANDMARK.
11. `cor-diffeomorphisms-preserve-interior-and-boundary` — **corollary**
    `[LL]`.
12. `thm-the-interior-is-an-open-smooth-n-manifold` — **theorem** `[LL]`.
13. `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` —
    **theorem** `[LA]`; boundary chart restrictions give its atlas and the
    transitions are smooth.
14. `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` —
    **proposition** `[LL]` under the evident identification of conventions.

**Tangency, defining functions, and collars**

15. `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` —
    **theorem** `[LA]`; tangent spaces at boundary points are still
    $n$-dimensional, using derivations of boundary germs and item 3.
16. `def-inward-outward-and-boundary-tangent-vectors` — **definition** `[LN]`;
    the sign of the last component is proved invariant under boundary chart
    changes.
17. `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane` —
    **proposition** `[LA]`.
18. `def-boundary-defining-function` — **definition** `[LN]`; locally
    $\rho\ge0$, $\partial M=\rho^{-1}(0)$, and $d\rho\ne0$ on the boundary.
19. `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors` —
    **proposition** `[LA]`; $v$ is inward iff $d\rho(v)>0$ for the adopted
    sign.
20. `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary` —
    **theorem** `[LA]`; glue local inward coordinate fields using a smooth
    partition and extend off the boundary.
21. `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary` —
    **theorem** `[LA]`.
22. `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary` —
    **theorem** `[LA]`; no two-sided flow staying in $M$ is claimed.
23. `def-smooth-collar-of-a-manifold-boundary` — **definition** `[LN]`; an
    embedding $c:\partial M\times[0,\varepsilon)	o M$ with
    $c(p,0)=p$ and an open image near $\partial M$ (variable-width collars
    are allowed before shrinking).
24. `thm-collar-neighborhood-theorem` — **theorem** `[LA]`; the inward field's
    flow yields a collar after a locally finite variable-time construction.
25. `def-double-of-a-smooth-manifold-with-boundary` — **definition** `[LN]`;
    glue two labelled copies along the identity on $\partial M$.
26. `thm-the-double-has-a-well-defined-smooth-structure` — **theorem** `[LA]`;
    collar coordinates give the seam charts, and different collars produce
    diffeomorphic structures relative to each half.
27. `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` —
    **corollary** `[LA]`; extend on the double and restrict, with no canonical
    extension asserted.
28. `def-neat-submanifold-of-a-manifold-with-boundary` — **definition** `[LN]`:
    $S\cap\partial M=\partial S$ and $S$ is transverse to $\partial M$.
29. `thm-neat-submanifolds-have-boundary-adapted-slice-charts` — **theorem**
    `[LA]`.

**Orientations**

30. `def-orientation-of-a-finite-dimensional-real-vector-space` —
    **definition** `[LN]`; ordered bases are equivalent when the change-of-
    basis determinant is positive.
31. `prop-an-orientation-is-equivalently-a-positive-ray-in-the-top-exterior-power` —
    **proposition** `[LA]`.
32. `def-oriented-smooth-manifold-and-oriented-chart` — **definition** `[LN]`;
    a smoothly varying orientation of $T_pM$, equivalently an atlas with
    positive-Jacobian transitions.
33. `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent` —
    **theorem** `[LA]`.
34. `def-orientable-manifold` — **definition** `[LN]`; existence of an
    orientation, not a chosen simultaneous orientation of all components.
35. `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form` —
    **theorem** `[LA]`; a supplied top form determines positive bases, and a
    supplied orientation plus smooth partition produces a positive top form.
36. `prop-connected-orientable-manifolds-have-exactly-two-orientations` —
    **proposition** `[LA]`; for disconnected manifolds, orientations are
    componentwise and no global family is selected implicitly.
37. `prop-local-diffeomorphisms-preserve-or-reverse-orientation-by-the-sign-of-the-jacobian` —
    **proposition** `[LL]`.
38. `def-product-orientation` — **definition** `[LN]`; an oriented basis of
    $TM$ followed by one of $TN$.
39. `def-induced-orientation-on-a-hypersurface-from-a-coorientation` —
    **definition** `[LN]`; normal-first fixes the tangent orientation.
40. `def-induced-boundary-orientation` — **definition** `[LN]`;
    **outward-normal-first** is the library convention.
41. `prop-boundary-orientation-is-independent-of-the-outward-vector-field` —
    **proposition** `[LA]`; two outward vectors differ by a positive normal
    coefficient plus a tangent vector.
42. `prop-boundary-of-an-oriented-product-has-the-signed-product-orientation` —
    **proposition** `[LA]`:
    $\partial(M^m\times N)=
    (\partial M)\times N\;\sqcup\;(-1)^m M\times\partial N$.
43. `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold` —
    **proposition** `[LA]`; any two of ambient, tangent, and normal
    orientations determine the third.
44. `def-orientation-preserving-parametrization` — **definition** `[LN]`;
    used in integration charts.

### `fs-` items (A page)

- `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart` —
  **false statement** `[LL]`; item 10 is the obstruction.
- `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one` —
  **false statement** `[LL]`; that is the tangent space of $\partial M$, not
  of $M$.
- `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold` —
  **false statement** `[LL]`; an outward field immediately exits.
- `fs-an-orientable-manifold-comes-with-a-canonical-orientation` — **false
  statement** `[LL]`.
- `fs-every-manifold-is-orientable` — **false statement** `[LL]`; the Möbius
  band is the basic counterexample.
- `fs-the-boundary-orientation-is-given-by-inward-normal-first` — **false
  statement** `[LL]`; the adopted convention is outward-normal-first.

### B page — `boundary-and-orientation-examples`

1. `ex-the-closed-half-space-as-a-manifold-with-boundary` — **example**
   `[LL]`.
2. `ex-the-closed-ball-and-its-sphere-boundary` — **example** `[LA]`.
3. `ex-the-cylinder-with-two-oppositely-oriented-boundary-components` —
   **example** `[LL]`.
4. `ex-the-boundary-of-an-oriented-interval` — **example** `[LL]`:
   $\partial[a,b]=\{b\}-\{a\}$.
5. `ex-the-standard-collar-of-a-closed-ball` — **example** `[LL]`.
6. `ex-the-double-of-a-disk-is-a-sphere` — **example** `[LA]`.
7. `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` —
   **example** `[LA]`.
8. `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` —
   **example** `[LA]`; calculate the antipodal degree sign directly.
9. `ex-the-product-orientation-on-a-torus` — **example** `[LL]`.
10. `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly` —
    **counterexample** `[LL]`.
11. `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line` —
    **counterexample** `[LL]`.
12. `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal` —
    **example** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 1 “Smooth
  Manifolds,” heading “Manifolds with Boundary”; Ch. 9 “Integral Curves and
  Flows,” headings “Flows and Flowouts on Manifolds with Boundary”; and Ch.
  15 “Orientations,” headings “Orientations of Vector Spaces,” “Orientations
  of Manifolds,” “Riemannian Volume Form,” and “Orientations and Covering
  Maps.”** These exact ranges were read; Ch. 15's Riemannian volume heading is
  disposed to DG-18 and covering-map orientation to the Lie/covering seam.
- **Merry, *Differential Geometry*, Lecture 24 “Orientations and Manifolds
  With Boundary” (PDF pp. 182–193).** Independent full lecture-note treatment
  for items 1–19 and 30–44.
- **Robbin--Salamon, *Introduction to Differential Topology*, Ch. 1 §1.2
  “Theorem of Sard and Brown,” subheadings “Submanifolds” and “Manifolds with
  Boundary.”** Independent boundary and transversality convention check;
  Brouwer fixed point is already published topology material and is not used.
- **Lee, Ch. 9 boundary-flow results together with the collar construction in
  the boundary chapter, and Nicolaescu, Ch. 3 §3.1 “Flows on manifolds.”**
  Independent support for items 20–27; ordinary boundaryless flow headings
  were already disposed to DG-9.

### Proof strategy and traps

For boundary invariance, extend a transition map and its inverse smoothly near
the point. Their differentials are inverses by the one-sided chain rule. If a
boundary point mapped to an interior point, the last coordinate of the local
inverse would be a nonnegative smooth function with an interior zero, hence
would have zero differential, contradicting invertibility. This is the exact
smooth argument that avoids relying on the draft `rem-invariance-of-domain`.

The collar proof first builds an inward-pointing field along the boundary,
extends it, and uses a forward flow. Local collars agree only after shrinking;
a locally finite positive time function patches their domains without choosing
a uniform collar width on a noncompact boundary. For orientation, every sign
is reduced to a determinant or a normal-first ordered basis. Item 42 is proved
from that order, not memorized as a sign formula.

**Well-definedness discharged:** extension-independent boundary calculus
(items 2–8), chart-independent boundary (9–14), full tangent versus boundary
tangent spaces and invariant inward signs (15–19), collar/double atlases
(20–27), and every orientation/induced-orientation choice (30–44).  
**Choice:** local boundary calculus and supplied orientations are ZF. The
inward field, noncompact collar, double extension, and the “orientation implies
top form” direction inherit DG-2's smooth-partition
$\mathrm{AC}_\omega$ sufficient hypothesis. Orientability does not silently
select an orientation on each member of an arbitrary family.  
**Forward references:** DG-14 consumes the outward-normal-first convention for
Stokes; Riemannian volume goes to DG-18; corners are a deliberate scope denial.

---

## DG-14. Integration of Forms and the General Stokes Theorem

**A page:** `integration-of-forms-and-the-general-stokes-theorem`  
**B page:** `integration-and-stokes-examples`  
**Requires:** DG-2, DG-4, and DG-11–DG-13; published
`fubini-and-change-of-variables`, `the-riemann-integral-in-rn-and-jordan-content`,
and `line-integrals-and-conservative-fields`.

Signed integration of compactly supported smooth top forms is built from the
published compactly supported **Riemann** integral and its change-of-variables
theorem. It does not wait for or duplicate Lebesgue integration. The optional
extension from compactly supported smooth densities to measurable or $L^1$
densities is explicitly routed to measure theory.

### A-page items in dependency order

**Chart integrals and globalization**

1. `def-compactly-supported-differential-form` — **definition** `[LN]`;
   support is the closure of the nonzero locus, and
   $\Omega_c^k(M)$ denotes compact support.
2. `lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form` —
   **lemma** `[LA]`; extract a finite subcover of the compact support and use
   local finiteness.
3. `def-integral-of-an-oriented-chart-supported-top-form` — **definition**
   `[LN]`. If $\omega=f\,dx^1\wedge\cdots\wedge dx^n$ is supported in an
   oriented chart, set $\int_M\omega=\int_{\mathbb R^n}\widetilde f$, where
   extension by zero is legitimate because the coordinate support is compact
   inside the chart image.
4. `lem-extension-by-zero-of-a-chart-supported-smooth-coefficient-is-smooth` —
   **lemma** `[LA]`; the support-inside-domain hypothesis is essential.
5. `thm-oriented-chart-integrals-are-coordinate-independent` — **theorem**
   `[LA]`; the top-form transformation law and the published compact-support
   change-of-variables theorem cancel the positive Jacobian determinant.
6. `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold` —
   **definition** `[LN]`: choose a smooth partition subordinate to oriented
   charts and sum the chart-supported integrals.
7. `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement` —
   **theorem** `[LA]`. A common refinement and item 5 identify any two sums.
8. `prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components` —
   **proposition** `[LL]`; only finitely many components meet a compact
   support.
9. `prop-reversing-orientation-negates-the-integral` — **proposition** `[LL]`.
10. `thm-change-of-variables-for-oriented-manifold-diffeomorphisms` —
    **theorem** `[LA]`: if $F:M\to N$ is orientation preserving then
    $\int_MF^*\omega=\int_N\omega$; orientation reversal inserts a minus sign.
11. `prop-integration-over-an-oriented-embedded-submanifold` —
    **proposition** `[LL]`; it is the intrinsic integral of the pullback to
    the submanifold, independent of an oriented parametrization.

**Densities and orientation-free integration**

12. `def-one-density-on-a-finite-dimensional-real-vector-space` —
    **definition** `[LN]`; a function on ordered bases transforming by
    $|\det A|$.
13. `def-density-bundle-and-smooth-density` — **definition** `[LN]`; local
    coefficients transform by the absolute Jacobian.
14. `prop-the-absolute-value-of-a-top-form-is-a-density` — **proposition**
    `[LL]`, with loss of sign made explicit.
15. `def-integral-of-a-compactly-supported-smooth-density` — **definition**
    `[LN]`; chartwise using absolute change of variables, with partition
    independence proved as for forms.
16. `thm-density-integration-is-defined-without-an-orientation` — **theorem**
    `[LA]`.
17. `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond` —
    **proposition** `[LA]`.
18. `rem-lebesgue-extension-of-manifold-density-integration` — **remark**
    `[LN]`. Arbitrary nonnegative measurable densities, $L^1$ densities, and
    the resulting Radon measures are obtained chartwise from the
    measure-theory track's Lebesgue change-of-variables and partition
    machinery; this page proves only the compactly supported smooth case.

**Local and global Stokes**

19. `lem-euclidean-stokes-for-a-compactly-supported-form` — **lemma** `[LA]`.
    On $\mathbb R^n$, $\int d\omega=0$ for
    $\omega\in\Omega_c^{n-1}(\mathbb R^n)$, by the coordinate formula, Fubini,
    and the one-dimensional FTC.
20. `lem-half-space-stokes-for-a-compactly-supported-form` — **lemma** `[LA]`:
    $\int_{\mathbb H^n}d\omega=\int_{\partial\mathbb H^n}\omega$ with
    outward-normal-first boundary orientation; the sign is calculated from
    the $dx^n$ boundary term.
21. `lem-partition-localization-of-stokes` — **lemma** `[LA]`; write
    $d(\rho_i\omega)=d\rho_i\wedge\omega+\rho_i d\omega$ and show the
    $\sum_i d\rho_i$ terms vanish where $\omega$ is supported.
22. `thm-general-stokes-theorem` — **theorem** `[LA]`. If $M^n$ is oriented
    with boundary and $\omega\in\Omega_c^{n-1}(M)$, then
    \[
       \int_Md\omega=\int_{\partial M}\omega,
    \]
    where $\partial M$ has the outward-normal-first orientation. LANDMARK.
23. `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero` —
    **corollary** `[LL]`.
24. `cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact` —
    **corollary** `[LL]`.
25. `cor-fundamental-theorem-of-calculus-from-stokes` — **corollary** `[LL]`.
26. `cor-greens-theorem-from-general-stokes` — **corollary** `[LA]`; both
    circulation and flux forms are written with their orientations.
27. `cor-classical-three-dimensional-stokes-theorem` — **corollary** `[LA]`;
    the Euclidean metric identification is displayed, not called intrinsic.

**Divergence relative to a volume form**

28. `def-volume-form-on-an-oriented-manifold` — **definition** `[LN]`; a
    nowhere-vanishing positive top form.
29. `def-divergence-relative-to-a-volume-form` — **definition** `[LN]`:
    $\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu$.
30. `prop-divergence-is-well-defined-and-has-the-coordinate-formula` —
    **proposition** `[LA]`; division is legitimate because $\mu$ never
    vanishes.
31. `prop-divergence-satisfies-the-product-rule` — **proposition** `[LL]`:
    $\operatorname{div}_\mu(fX)=df(X)+f\operatorname{div}_\mu X$.
32. `lem-divergence-form-identity` — **lemma** `[LL]`:
    $d(\iota_X\mu)=(\operatorname{div}_\mu X)\mu$ by Cartan's formula.
33. `thm-divergence-theorem-relative-to-a-volume-form` — **theorem** `[LA]`:
    $\int_M(\operatorname{div}_\mu X)\mu=
    \int_{\partial M}\iota_X\mu$ for compactly supported $X$ (or compact
    $M$). The Riemannian normal-flux formula follows later in DG-18.

### `fs-` items (A page)

- `fs-the-integral-of-a-top-form-is-defined-without-an-orientation` — **false
  statement** `[LL]`; a density is the orientation-free object.
- `fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition` —
  **false statement** `[LL]`; overlaps would be multiply counted.
- `fs-extension-by-zero-of-any-smooth-function-on-an-open-set-is-smooth` —
  **false statement** `[LL]`; support must stay away from the boundary.
- `fs-stokes-theorem-uses-the-inward-normal-first-orientation` — **false
  statement** `[LL]` under the library convention.
- `fs-the-integral-of-every-exact-form-on-every-manifold-is-zero` — **false
  statement** `[LL]`; boundary and compact-support hypotheses matter.
- `fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold` —
  **false statement** `[LL]`.

### B page — `integration-and-stokes-examples`

1. `ex-integrating-a-compactly-supported-form-in-two-overlapping-charts` —
   **example** `[LA]`; explicitly verifies partition independence.
2. `ex-orientation-reversal-under-reflection` — **example** `[LL]`.
3. `ex-integration-of-a-density-on-the-mobius-band` — **example** `[LA]`.
4. `ex-stokes-on-an-oriented-interval` — **example** `[LL]`.
5. `ex-greens-theorem-on-a-planar-disk` — **example** `[LL]`.
6. `ex-classical-stokes-on-an-oriented-graph-surface` — **example** `[LA]`.
7. `ex-divergence-theorem-on-a-euclidean-ball` — **example** `[LL]`.
8. `ex-the-angular-form-has-period-two-pi` — **example** `[LA]`; this closes
   DG-12's proof that it is not exact.
9. `ex-an-exact-form-with-nonzero-boundary-integral` — **example** `[LL]`.
10. `cex-a-noncompactly-supported-form-with-divergent-chart-integral` —
    **counterexample** `[LL]`; compact support is not decorative.
11. `cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes` —
    **counterexample** `[LL]`.
12. `ex-change-of-variables-on-the-oriented-circle` — **example** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 16 “Integration on
  Manifolds,” headings “Geometry of Volume Measurement,” “Integration of
  Differential Forms,” “Stokes's Theorem,” “Integration on Riemannian
  Manifolds,” “Densities,” and “Manifolds with Corners.”** The first three
  and “Densities” are included in items 1–33; Riemannian integration is
  disposed to DG-18, and corners are deferred because the singular-simplex de
  Rham route does not need them. Named controls are Prop. 16.6, Thm. 16.11,
  Cor. 16.13, Thms. 16.17, 16.32, 16.34, and Prop. 16.42.
- **Robbin--Salamon, *Introduction to Differential Topology*, Ch. 5 §5.2
  “Exterior Differential and Integration” and §5.3 “Lie Derivative,”
  subheading “Integration and Exactness.”** Independent textbook treatment;
  Thm. 5.2.12 backs general Stokes and Thm. 5.3.10/Cor. 5.3.12 back exactness
  consequences.
- **Merry, *Differential Geometry*, Lecture 26 “Stokes' Theorem” (PDF pp.
  194–207), especially Thms. 26.2 and 26.16.** Independent local-to-global
  lecture-note proof.
- **Nicolaescu, *Lectures on the Geometry of Manifolds*, Ch. 3 §3.4
  “Integration on manifolds,” headings “Integration of 1-densities,”
  “Orientability and integration of differential forms,” and “Stokes'
  formula.”** Independent density and form-integration convention control.
- **Published Euclidean pages** `the-riemann-integral-in-rn-and-jordan-content`
  and `fubini-and-change-of-variables`, specifically
  `def-support-and-compactly-supported-riemann-integral-in-rn`,
  `lem-compactly-supported-riemann-integral-is-well-defined`, and
  `cor-change-of-variables-for-compactly-supported-functions`. These exact
  authored items, not a Lebesgue theorem, support items 3–22.

### Proof strategy and traps

Coordinate independence is proved before the global definition. Compact
support inside a chart ensures the coefficient extends smoothly by zero and
is Riemann integrable; under an oriented coordinate change, the determinant in
the top-form coefficient is exactly the positive Jacobian in the published
change-of-variables theorem. For global independence, refine two subordinate
partitions by products $\rho_i\sigma_j$; compact support makes the relevant
double sum finite.

Stokes reduces to one coordinate computation. In an interior chart all one-
variable boundary terms vanish by compact support. In a half-space chart only
the normal derivative contributes, and outward-normal-first fixes its sign.
The partition localization lemma explicitly cancels the $d\rho_i$ terms.
Nothing in this proof invokes a measurable atlas or a manifold Lebesgue
measure.

**Well-definedness discharged:** support/extension by zero (items 1–4), chart
and partition independence (5–11), absolute-Jacobian density gluing (12–18),
boundary signs and localization (19–27), and uniqueness of divergence relative
to a nonvanishing volume form (28–33).  
**Choice:** chart-local integration is ZF relative to the published Riemann
theory. Global integration and Stokes inherit DG-2's smooth-partition
$\mathrm{AC}_\omega$ sufficient hypothesis; a compact support makes every
actual sum finite. The Lebesgue/Radon extension inherits the measure track's
separate ledger and is not silently charged here.  
**Forward references:** DG-16 integrates over smooth singular simplices;
DG-18 specializes densities and divergence to Riemannian volume; Gauss--Bonnet
uses Stokes on geodesic polygons but builds its own finite triangulation.

---

## DG-15. The de Rham Complex, Homotopy, Poincaré, and Mayer–Vietoris

**A page:** `the-de-rham-complex-homotopy-and-mayer-vietoris`  
**B page:** `de-rham-cohomology-computations`  
**Requires:** DG-2, DG-7, DG-11, DG-12, and DG-14; published
`homotopy-and-homotopy-equivalence`; homological-algebra pages
`chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`,
and `long-exact-sequences-in-homology`.

The three homological-algebra pages above are finished prose scaffolds but
their `plan-spec` item arrays are presently empty. They are therefore an
explicit build-time seam, not fictitious published dependencies. Once authored
below the high differential-geometry anchor, this page cites their general
cochain-complex, induced-cohomology, chain-homotopy, and long-exact-sequence
items. It never re-mints that machinery.

### A-page items in dependency order

**The complex and its cohomology algebra**

1. `def-de-rham-cochain-complex` — **definition** `[LN]`:
   $(\Omega^\bullet(M),d)$, zero outside degrees $0,\ldots,\dim M$; cite
   `def-cochain-complex-in-an-abelian-category` and DG-12's $d^2=0$.
2. `def-closed-and-exact-differential-forms` — **definition** `[LN]`:
   $Z^k_{\mathrm{dR}}(M)=\ker d$ and
   $B^k_{\mathrm{dR}}(M)=\operatorname{im}d$, with
   $B^k\subseteq Z^k$ justified by $d^2=0$.
3. `def-de-rham-cohomology` — **definition** `[LN]`:
   $H^k_{\mathrm{dR}}(M)=Z^k/B^k$, an instance of
   `def-cohomology-object-of-a-cochain-complex`.
4. `prop-zero-and-out-of-range-de-rham-cohomology` — **proposition** `[LL]`;
   $H^k=0$ for $k<0$ and $k>\dim M$.
5. `thm-zero-th-de-rham-cohomology-is-locally-constant-functions` —
   **theorem** `[LA]`; for a connected nonempty manifold it is $\mathbb R$.
6. `prop-pullback-is-a-morphism-of-de-rham-complexes` — **proposition** `[LL]`;
   this is DG-12 pullback naturality packaged in HA's cochain-map language.
7. `thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology` —
   **theorem** `[LA]`; representatives differing by an exact form have
   pullbacks differing by an exact form.
8. `prop-de-rham-cohomology-is-a-contravariant-functor` — **proposition**
   `[LA]`; identities and composition cite HA rather than repeat quotient
   calculations.
9. `lem-wedge-with-a-closed-form-preserves-exactness-classes` — **lemma**
   `[LA]`; if one closed representative changes by an exact form, the wedge
   changes by an exact form with the graded sign printed.
10. `thm-wedge-product-descends-to-de-rham-cohomology` — **theorem** `[LA]`.
11. `def-de-rham-cohomology-ring` — **definition** `[LN]`; a unital graded-
    commutative $\mathbb R$-algebra.
12. `prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras` —
    **proposition** `[LL]`.

**Homotopy operator and Poincaré lemma**

13. `def-integration-along-the-unit-interval-for-a-differential-form` —
    **definition** `[LN]`. Decompose a form on $M\times I$ uniquely as
    $\alpha_t+dt\wedge\beta_t$ locally and set
    $K\omega=\int_0^1\beta_t\,dt$; smoothness under the parameter integral is
    proved from the published calculus.
14. `lem-the-interval-homotopy-operator-is-coordinate-independent` —
    **lemma** `[LA]`; equivalently
    $K\omega=\int_0^1\iota_{\partial_t}\omega\,dt$ after restriction to each
    slice.
15. `thm-de-rham-homotopy-formula-on-a-product` — **theorem** `[LA]`:
    $i_1^*-i_0^*=dK+Kd$.
16. `thm-de-rham-homotopy-formula-for-a-smooth-homotopy` — **theorem** `[LA]`:
    for $F:M\times I\to N$,
    $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.
17. `cor-smoothly-homotopic-maps-induce-the-same-de-rham-map` —
    **corollary** `[LL]`.
18. `thm-de-rham-cohomology-is-smooth-homotopy-invariant` — **theorem**
    `[LA]`; a smooth homotopy equivalence induces inverse cohomology maps.
19. `cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds` —
    **corollary** `[LA]`; cite DG-7's endpoint-relative smoothing theorem,
    rather than treating a merely continuous homotopy as differentiable.
20. `def-radial-contraction-of-a-star-shaped-domain` — **definition** `[LN]`:
    $F_t(x)=tx$ after translating the star centre to zero.
21. `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains` —
    **theorem** `[LA]`; for $k\ge1$, every closed smooth $k$-form is exact,
    with the explicit radial homotopy operator. This strictly extends the
    published one-form Poincaré lemma. LANDMARK.
22. `cor-closed-differential-forms-are-locally-exact` — **corollary** `[LL]`;
    work in a coordinate ball.
23. `thm-de-rham-cohomology-of-a-contractible-smooth-manifold` — **theorem**
    `[LA]`: $H^0\cong\mathbb R$ and $H^{k>0}=0$ for a nonempty connected
    contractible manifold.

**Mayer–Vietoris**

24. `def-two-open-set-de-rham-mayer-vietoris-cochain-maps` — **definition**
    `[LN]`: restriction
    $r:\Omega(M)\to\Omega(U)\oplus\Omega(V)$ and difference
    $s(\alpha,\beta)=\beta|_{U\cap V}-\alpha|_{U\cap V}$, with the sign fixed
    for the later connector.
25. `lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms` —
    **lemma** `[LA]`; equal restrictions glue uniquely to a global smooth
    form.
26. `lem-the-de-rham-mayer-vietoris-difference-map-is-surjective` — **lemma**
    `[LA]`. A smooth partition $\rho_U+\rho_V=1$ subordinate to $U,V$ and
    extension by zero produce preimages of every form on $U\cap V$.
27. `thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes` —
    **theorem** `[LA]`:
    \[
      0\to\Omega^\bullet(M)\xrightarrow r
      \Omega^\bullet(U)\oplus\Omega^\bullet(V)
      \xrightarrow s\Omega^\bullet(U\cap V)\to0.
    \]
28. `thm-mayer-vietoris-sequence-in-de-rham-cohomology` — **theorem** `[LA]`;
    cite HA's `thm-long-exact-sequence-in-cohomology`, including the direction
    $\delta:H^k(U\cap V)\to H^{k+1}(M)$.
29. `prop-explicit-de-rham-mayer-vietoris-connecting-class` — **proposition**
    `[LA]`; using the chosen partition, lift a closed overlap form, apply $d$,
    glue, and prove independence through HA's connector theorem.
30. `thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds` —
    **theorem** `[LA]`; the squares and connector signs are displayed.
31. `cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum` —
    **corollary** `[LL]`; finite only, avoiding an unexamined infinite product
    convention.
32. `thm-de-rham-cohomology-of-spheres` — **theorem** `[LA]`:
    $H^k_{\mathrm{dR}}(S^n)\cong\mathbb R$ for $k=0,n$ and zero otherwise
    ($n\ge1$), by two contractible hemispherical opens and Mayer–Vietoris.
33. `cor-de-rham-cohomology-of-punctured-euclidean-space` — **corollary**
    `[LL]`; deformation retract onto $S^{n-1}$, with the $n=1$ component case
    stated separately.

### `fs-` items (A page)

- `fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness` —
  **false statement** `[LL]`; only cycles represent classes.
- `fs-every-smooth-form-is-either-closed-or-exact` — **false statement**
  `[LL]`; exact implies closed, while a general form need not be closed.
- `fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator` —
  **false statement** `[LL]`; smoothing is required.
- `fs-the-poincare-lemma-says-every-closed-form-is-globally-exact` — **false
  statement** `[LL]`; its conclusion is local/star-shaped.
- `fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity` —
  **false statement** `[LL]`; surjectivity of the difference map uses one.
- `fs-de-rham-cohomology-is-a-covariant-functor` — **false statement** `[LL]`;
  pullback reverses arrows.

### B page — `de-rham-cohomology-computations`

1. `ex-de-rham-cohomology-of-a-point` — **example** `[LL]`.
2. `ex-de-rham-cohomology-of-euclidean-space` — **example** `[LL]`.
3. `ex-de-rham-cohomology-of-a-finite-discrete-manifold` — **example** `[LL]`.
4. `ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris` — **example**
   `[LA]`.
5. `ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle` —
   **example** `[LA]`; normalize its period to one.
6. `ex-de-rham-cohomology-of-the-two-sphere` — **example** `[LA]`.
7. `ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere` —
   **example** `[LA]`; nonexactness uses nonzero integral and Stokes.
8. `ex-de-rham-cohomology-of-punctured-three-space` — **example** `[LL]`.
9. `ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings` —
   **example** `[LL]`.
10. `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact` —
    **counterexample** `[LL]`.
11. `cex-the-pullback-on-cohomology-reverses-composition-order` —
    **counterexample/check** `[LL]`.
12. `ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle` —
    **example** `[LA]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 17 “De Rham
  Cohomology,” headings “The de Rham Cohomology Groups,” “Homotopy
  Invariance,” “Mayer–Vietoris Theorem,” “Proof of Mayer–Vietoris Theorem,”
  and “Degree Theory.”** The first four headings are included here; degree is
  disposed to DG-17. Named controls are Prop. 17.8, Lem. 17.9, Thms. 17.11,
  17.13, 17.14, 17.20, and 17.21. Lee's Zigzag Lemma 17.40 is
  `already-planned` as the stronger HA long-exact-sequence machinery and is
  not re-minted.
- **Robbin--Salamon, *Introduction to Differential Topology*, Ch. 6 §6.1
  “Poincare Lemma” and §6.2 “Mayer–Vietoris Sequence,” subheadings “Long
  Exact Sequences,” “Finite Good Covers,” and “Kunneth Formula.”** Poincaré
  and Mayer–Vietoris are included. General long exact sequences are
  `already-planned` in HA; finite-good-cover details are inline proof support;
  Künneth is deferred to algebraic topology because it needs product
  machinery not used here.
- **Nicolaescu, *Lectures on the Geometry of Manifolds*, Ch. 7 §7.1 “DeRham
  cohomology,” headings “Speculations around Poincare lemma,” “Very little
  homological algebra,” “Functorial properties,” “Some simple examples,” and
  “Mayer–Vietoris principle.”** All but generic homological algebra are
  included here; “Cech vs. DeRham” and Künneth are out of scope for the stated
  reasons in §scope denials.
- **Hitchin, *Differentiable Manifolds*, §6.6 “deRham cohomology,” including
  Prop. 6.6, Thm. 6.7, Prop. 6.8, and Thm. 6.10.** Independent lecture-note
  cross-check for the ring, homotopy, Euclidean, and sphere computations.
- **Merry, *Differential Geometry*, Lecture 27 “Poincare Lemma and de Rham
  Theorem,” through Cor. 27.10.** Included here for the homotopy operator and
  Poincaré lemma; its later singular comparison is only a proof sketch and is
  disposed to DG-16/DG-17 with stronger sources.

### Proof strategy and traps

The homotopy operator is first proved for $M\times I$ by splitting off the
$dt$ component and applying the FTC. Pulling this identity back by a smooth
homotopy gives the general formula. A continuous homotopy enters only through
DG-7's relative smoothing theorem.

For Mayer–Vietoris, injectivity and middle exactness are sheaf-like gluing and
need no choice. Surjectivity is the hard degreewise step: multiply the overlap
form by the opposite partition function so each product vanishes on a
neighbourhood of the relevant edge, then extend it by zero. The precise sign
in item 24 governs both the lifted form and the connector. HA supplies the LES;
this page only verifies its hypotheses and specializes it.

**Well-definedness discharged:** boundaries inside cycles and representative
independence (items 1–12, through HA), interval decomposition and parameter
integration (13–19), radial contraction endpoint (20–23), extension-by-zero
MV lifts and connector signs (24–30), and low-dimensional sphere cases
(31–33).  
**Choice:** the local homotopy/Poincaré arguments are ZF. De Rham
Mayer–Vietoris and its computations inherit DG-2's smooth-partition
$\mathrm{AC}_\omega$ sufficient hypothesis. Continuous-homotopy invariance
inherits DG-7's same global approximation boundary. HA adds the choice costs
recorded in its own pages, none silently strengthened here.  
**Unresolved seam:** the three HA pages must be authored before this page can
be built; their exact promised item ids are named above. No generic complex or
LES substitute is minted here.

---

## DG-16. Singular Cochains, Mayer–Vietoris, and Smooth Singular Comparison

**A page:** `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`  
**B page:** `singular-and-smooth-singular-cochain-examples`  
**Requires:** DG-7, DG-13, DG-15; published `free-modules-and-exact-sequences`,
`homotopy-and-homotopy-equivalence`, and `the-diagram-lemmas-in-an-abelian-category`;
HA pages `chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`,
and `long-exact-sequences-in-homology`.

Only the singular machinery needed by the de Rham comparison is built. In
particular, relative homology, excision as a general axiom, cellular/simplicial
homology, cup products, and universal coefficients remain algebraic topology.
Real singular cohomology is defined directly as cohomology of the real singular
**cochain** complex; it is not defined as
$\operatorname{Hom}(H_*(-),\mathbb R)$, so no hidden injectivity or choice
argument enters.

### A-page items in dependency order

**Singular simplices, chains, and cochains**

1. `def-standard-topological-simplex-and-its-affine-face-maps` —
   **definition** `[LN]`:
   $\Delta^k=\{(t_0,\ldots,t_k):t_i\ge0,\sum t_i=1\}$ and
   $\delta_i:\Delta^{k-1}\to\Delta^k$ inserts a zero.
2. `lem-affine-face-maps-satisfy-the-cosimplicial-identities` — **lemma**
   `[LL]`: $\delta_j\delta_i=\delta_i\delta_{j-1}$ for $i<j$, with the index
   convention checked.
3. `def-continuous-singular-simplex-and-real-singular-chain-group` —
   **definition** `[LN]`; $C_k(X;\mathbb R)$ is the free real vector space on
   continuous maps $\Delta^k\to X$, citing the published free-module
   construction and its universal property.
4. `def-singular-boundary-operator` — **definition** `[LN]`:
   $\partial\sigma=\sum_{i=0}^k(-1)^i\sigma\circ\delta_i$.
5. `thm-the-singular-boundary-squares-to-zero` — **theorem** `[LA]`; pair
   cancelling terms via item 2.
6. `def-real-singular-chain-complex` — **definition** `[LN]`; an instance of
   HA's chain-complex definition.
7. `def-induced-singular-chain-map` — **definition** `[LN]`:
   $f_\#(\sigma)=f\circ\sigma$.
8. `prop-singular-chains-are-covariantly-functorial` — **proposition** `[LL]`.
9. `def-real-singular-cochain-complex` — **definition** `[LN]`:
   $C^k(X;\mathbb R)=\operatorname{Hom}_{\mathbb R}(C_k(X;\mathbb R),
   \mathbb R)$ and $(\delta\varphi)(c)=\varphi(\partial c)$.
10. `lem-the-singular-coboundary-squares-to-zero` — **lemma** `[LL]`.
11. `def-real-singular-cohomology` — **definition** `[LN]`:
    $H^k_{\mathrm{sing}}(X;\mathbb R)=H^k(C^\bullet(X;\mathbb R))$, citing
    HA's quotient definition.
12. `prop-singular-cohomology-is-contravariantly-functorial` —
    **proposition** `[LA]`; precomposition with $f_\#$ gives $f^*$.
13. `def-prism-operator-for-a-homotopy` — **definition** `[LN]`; triangulate
    $\Delta^k\times I$ with the standard signed prisms.
14. `thm-singular-chain-homotopy-formula` — **theorem** `[LA]`:
    $g_\#-f_\#=\partial P+P\partial$ for a homotopy from $f$ to $g$.
15. `cor-singular-cohomology-is-homotopy-invariant` — **corollary** `[LA]`;
    cite HA's chain-homotopy invariance.

**Barycentric subdivision and cover-small chains**

16. `def-barycenter-and-affine-cone-on-a-singular-chain` — **definition**
    `[LN]`; the cone boundary identity is printed.
17. `def-barycentric-subdivision-chain-operator` — **definition** `[LN]`;
    recursively cone the subdivided oriented faces to the barycenter.
18. `thm-barycentric-subdivision-is-a-chain-map` — **theorem** `[LA]`.
19. `def-barycentric-subdivision-prism-homotopy` — **definition** `[LN]`.
20. `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` —
    **theorem** `[LA]`: $S-1=\partial T+T\partial$.
21. `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` — **lemma**
    `[LA]`; give the contraction factor $k/(k+1)$ in dimension $k$.
22. `def-cover-small-singular-chain-subcomplex` — **definition** `[LN]`. For
    an open cover $\mathcal U$, it is spanned by simplices whose images lie
    in a single member of $\mathcal U$.
23. `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` —
    **lemma** `[LA]`; use the Lebesgue number lemma on each compact simplex
    domain and take a maximum over the finite support.
24. `thm-cover-small-singular-chains-compute-singular-homology` — **theorem**
    `[LA]`; subdivision and its homotopy prove the inclusion induces an
    isomorphism, with injectivity and surjectivity treated separately.
25. `thm-cover-small-inclusion-admits-a-chain-level-deformation-inverse` —
    **theorem** `[LA]`; build the inverse recursively on the free simplex
    basis using least sufficient subdivision depths and a compatible prism.
    This stronger item, not an appeal to universal coefficients, implies the
    restriction map on real cochains is a cochain-homotopy equivalence.

**Singular Mayer–Vietoris without injective coefficients**

26. `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` —
    **lemma** `[LL]`: $C_*^{\{U,V\}}(X)=C_*(U)+C_*(V)$.
27. `thm-short-exact-two-open-cover-small-singular-chain-sequence` —
    **theorem** `[LA]`:
    \[
      0\to C_*(U\cap V)\xrightarrow{c\mapsto(c,-c)}
      C_*(U)\oplus C_*(V)\xrightarrow{(a,b)\mapsto a+b}
      C_*^{\{U,V\}}(X)\to0.
    \]
28. `lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis` —
    **lemma** `[LA]`; extend a function on basis simplices in $U\cap V$ by
    zero on the other basis simplices of $U$. No injectivity theorem or basis
    choice is involved because the basis is supplied.
29. `thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence` —
    **theorem** `[LA]`; dualize item 27 and use item 28 for the only
    nonformal surjectivity step.
30. `thm-mayer-vietoris-sequence-in-real-singular-cohomology` — **theorem**
    `[LA]`; combine items 25 and 29 with HA's cohomology LES.
31. `thm-naturality-of-singular-mayer-vietoris-connectors` — **theorem**
    `[LA]`; cite HA's connector naturality and display the cover-preserving
    map hypothesis.

**Smooth singular chains and comparison**

32. `def-smooth-singular-simplex` — **definition** `[LN]`; a map
    $\sigma:\Delta^k\to M$ extending smoothly to a neighbourhood of
    $\Delta^k$ in its affine span.
33. `def-smooth-singular-chain-and-cochain-complexes` — **definition** `[LN]`;
    faces of a smooth simplex are smooth, so this is a subcomplex.
34. `prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps` —
    **proposition** `[LL]`.
35. `prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains` —
    **proposition** `[LA]`; all reparametrizing maps are affine smooth.
36. `thm-smooth-singular-mayer-vietoris-sequence` — **theorem** `[LA]`; repeat
    items 22–31 inside the smooth subcomplex, not by assuming the continuous
    result automatically restricts.
37. `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces` —
    **lemma** `[LA]`. If all proper faces have compatible prescribed smooth
    approximations, approximate the simplex relative to a collar of its
    boundary and connect it by a relative homotopy.
38. `thm-smooth-singular-chains-compute-singular-homology` — **theorem** `[LA]`;
    apply item 37 inductively to the finitely many simplices of a cycle or
    bounding chain. No simultaneous smoothing of the proper class of all
    singular simplices is selected.
39. `def-restriction-from-continuous-to-smooth-singular-cochains` —
    **definition** `[LN]`; precompose a cochain with the inclusion of smooth
    chains.
40. `prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-balls` —
    **proposition** `[LA]`; the common smooth contraction gives explicit
    prism contractions of both complexes.
41. `thm-countable-mayer-vietoris-open-set-principle` — **theorem** `[LA]`.
    A natural transformation between contravariant cohomology functors that
    commutes with two-open MV, is an isomorphism on a countable coordinate
    basis and its finite intersections/disjoint layers, is an isomorphism on
    the manifold. The exhaustion and odd/even locally finite union argument
    is included.
42. `thm-smooth-and-continuous-real-singular-cohomology-agree` — **theorem**
    `[LA]`; apply item 41 to item 39 using items 30, 36, and 40. No universal
    coefficient or injective-$\mathbb R$ argument is used. LANDMARK.

### `fs-` items (A page)

- `fs-the-singular-boundary-of-a-simplex-is-the-unsigned-sum-of-its-faces` —
  **false statement** `[LL]`; alternating signs make $\partial^2=0$.
- `fs-a-singular-cochain-is-a-finite-linear-combination-of-singular-simplices` —
  **false statement** `[LL]`; chains have finite support, while a cochain is
  an arbitrary linear functional.
- `fs-dualizing-every-short-exact-sequence-is-automatically-exact-in-zf` —
  **false statement** `[LL]`; item 28 supplies the exact extension actually
  needed.
- `fs-one-fixed-number-of-barycentric-subdivisions-makes-every-singular-simplex-cover-small` —
  **false statement** `[LL]`; the depth depends on the simplex or finite
  chain.
- `fs-every-continuous-singular-simplex-is-smooth` — **false statement**
  `[LL]`.
- `fs-a-homology-isomorphism-of-chain-complexes-automatically-gives-a-cohomology-isomorphism-after-dualizing-without-further-machinery` —
  **false statement** `[LL]`; item 25 or the local-to-global comparison is
  required.

### B page — `singular-and-smooth-singular-cochain-examples`

1. `ex-boundaries-of-the-standard-one-and-two-simplices` — **example** `[LL]`.
2. `ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex` —
   **example** `[LL]`.
3. `ex-the-prism-operator-for-a-path-homotopy` — **example** `[LA]`.
4. `ex-first-barycentric-subdivision-of-a-triangle` — **example** `[LL]`.
5. `ex-a-finite-chain-needing-different-subdivision-depths-on-its-simplices` —
   **example** `[AA]`.
6. `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` — **example**
   `[LA]`.
7. `ex-canonical-zero-extension-of-an-overlap-cochain` — **example** `[LL]`.
8. `ex-smooth-singular-simplices-in-a-coordinate-ball` — **example** `[LL]`.
9. `cex-a-continuous-nowhere-differentiable-singular-one-simplex` —
   **counterexample** `[LL]`.
10. `ex-relative-smoothing-fixes-the-endpoints-of-a-path` — **example** `[LA]`.
11. `ex-singular-cohomology-of-a-point-from-the-cochain-complex` —
    **example** `[LL]`.
12. `cex-hom-of-homology-is-not-used-as-the-definition-of-singular-cohomology` —
    **counterexample/reminder** `[LN]`; it records the missing universal-
    coefficient/injectivity step, without asserting a false finite-dimensional
    identification.

### Sources and exact locators

- **Hatcher, *Algebraic Topology*, §2.1 from “Singular Homology” through
  “Exact Sequences and Excision” (pp. 108–132), §2.2 “Mayer–Vietoris
  Sequences” (pp. 149–150), and §3.1 headings “Cohomology of Spaces” and
  “Mayer–Vietoris Sequences” (pp. 197–204).** Primary open textbook source.
  Thm. 2.10 and Prop. 2.12 back prism homotopy; Prop. 2.21 backs cover-small
  chains. General relative homology/excision and simplicial comparison are
  out of scope; universal coefficients are deliberately not used.
- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 18 “The de Rham
  Theorem,” all four substantive headings, especially Thms. 18.4/18.6
  (singular Mayer–Vietoris), 18.7 (smooth comparison), 18.12 (chain Stokes),
  Prop. 18.13, and Thm. 18.14.** Items 1–42 harvest the singular and smooth-
  singular material; chain integration and the final comparison are disposed
  to DG-17. Lee's shortcut defining real cohomology as
  $\operatorname{Hom}(H_p,\mathbb R)$ and invoking injectivity is explicitly
  rejected in favour of items 9–11 and 28–30.
- **Merry, *Differential Geometry*, Lecture 25 “Smooth Singular Cubes” and
  Lecture 27 after Cor. 27.10.** The cubical construction is an alternative
  `out-of-scope` route because it would require general corners; its comparison
  and de Rham results are statement-level controls only because their proofs
  use Zorn/filtered-limit sketches.
- **Park, “Proof of de Rham's Theorem,” §§1–2 “Introduction” and “Smooth
  Singular Homology,” Lem. 2.1 and Thms. 2.2/2.4.** Focused independent support
  for relative face smoothing. Section 3 is disposed to DG-17.
- **van der Vorst, *De Rham Cohomology*, §7 “Chains and cohomologies” and
  §10 through “smooth simplices.”** Secondary lecture-note control; its
  remaining de Rham-map headings go to DG-17.

### Proof strategy and traps

Subdivision is a chain construction before it is a mesh argument. The cone
boundary identity proves $S\partial=\partial S$; a separately defined prism
proves $S\simeq1$; only then does the Lebesgue-number estimate make finite
chains small. Item 25 records the stronger chain-level comparison needed to
dualize safely. In the two-open sequence, surjectivity after dualizing is
proved on the **supplied singular-simplex basis** by extension by zero, so the
sentence “$\mathbb R$ is injective” and its set-theoretic cost never appear.

Relative smoothing proceeds dimension by dimension and only over the finite
support of a particular chain. Smooth versus continuous **cohomology** is then
proved by the natural restriction map, local contractions, both MV sequences,
and the countable open-set principle—not by turning the finite smoothing
argument into a global choice of one smoothing for every simplex.

**Well-definedness discharged:** face signs and free-basis extension (items
1–12), prism/subdivision chain identities (13–25), overlap bases and exact
cochain sequence (26–31), neighbourhood extension in the definition of a
smooth simplex and compatibility on faces (32–38), and the natural cohomology
comparison (39–42).  
**Choice:** finite chains, canonical subdivision, prisms, and basiswise zero
extension are ZF. Relative smoothing inherits DG-7's smooth approximation
boundary but makes no global selection. The countable open-set principle needs
at most the same $\mathrm{AC}_\omega$ already charged by DG-2; it avoids full
AC and injective-module arguments. HA's own ledger is cited unchanged.  
**Unresolved seam:** HA-1/HA-2/HA-4 must be authored first. No other algebraic-
topology page is assumed.

---

## DG-17. The de Rham Theorem, Compact-Support Top Cohomology, and Degree

**A page:** `the-de-rham-theorem-and-degree`  
**B page:** `de-rham-comparison-and-degree-examples`  
**Requires:** DG-6, DG-7, and DG-13–DG-16; HA pages
`chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`,
and `long-exact-sequences-in-homology`; published
`the-diagram-lemmas-in-an-abelian-category` (including
`thm-five-lemma-for-modules`).

The landmark comparison is a natural isomorphism of real vector spaces for
every smooth manifold. A ring comparison is not claimed: it requires a
separately constructed singular cup product and its compatibility with wedge,
which belongs to algebraic topology. The second half develops only the
compact-support top-degree result needed to make degree honest; it is not a
surrogate for Poincaré duality.

### A-page items in dependency order

**Integration on smooth singular simplices**

1. `def-standard-orientation-of-the-affine-simplex` — **definition** `[LN]`;
   the ordered vertices induce the orientation, and the $i$th face carries
   the sign $(-1)^i$.
2. `def-integral-of-a-form-over-a-smooth-singular-simplex` — **definition**
   `[LN]`: $\int_\sigma\omega=\int_{\Delta^k}\sigma^*\omega$. The right side
   is the published Riemann integral of a smooth coefficient over the compact
   Jordan simplex in its affine span.
3. `lem-simplex-integrals-are-independent-of-affine-coordinate-identification` —
   **lemma** `[LA]`; orientation-preserving affine changes use the published
   compact-Jordan change of variables.
4. `lem-stokes-theorem-for-the-standard-simplex` — **lemma** `[LA]`:
   $\int_{\Delta^k}d\eta=
   \sum_i(-1)^i\int_{\Delta^{k-1}}\delta_i^*\eta$. Prove this polytope-specific
   formula directly by slicing/FTC; no general manifold-with-corners theory is
   imported.
5. `thm-stokes-theorem-for-smooth-singular-chains` — **theorem** `[LA]`:
   $\int_c d\omega=\int_{\partial c}\omega$, by item 4 and linearity.
6. `def-de-rham-integration-cochain-map` — **definition** `[LN]`:
   $I_M(\omega)(\sigma)=\int_\sigma\omega$ on smooth singular simplices.
7. `thm-de-rham-integration-is-a-cochain-map` — **theorem** `[LA]`:
   $\delta I_M=I_Md$, exactly item 5 in cochain notation.
8. `thm-the-de-rham-map-on-cohomology-is-well-defined` — **theorem** `[LA]`;
   cite HA's induced-cohomology theorem and also print the representative
   calculation.
9. `prop-naturality-of-the-de-rham-map` — **proposition** `[LA]`:
   $I_M(F^*\omega)=F^*I_N(\omega)$ for every smooth $F:M\to N$.

**Local-to-global comparison**

10. `lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-balls` —
    **lemma** `[LA]`; degree zero is evaluation on the one component, positive
    degrees vanish by the Poincaré lemma and the smooth singular prism
    contraction.
11. `lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors` —
    **lemma** `[LL]`; restriction and difference squares follow from
    naturality.
12. `lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors` — **lemma**
    `[LA]`. Use the explicit partition lift on forms and the basiswise
    singular lift, then show their difference is a coboundary with the chosen
    sign. This is a separate proof obligation, not “by naturality.”
13. `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection` —
    **theorem** `[LA]`; apply the published five lemma to the two long exact
    sequences.
14. `thm-de-rham-theorem-for-smooth-singular-cohomology` — **theorem** `[LA]`;
    the countable Mayer–Vietoris open-set principle from DG-16, items 10–13,
    and a convex coordinate basis give
    $H^k_{\mathrm{dR}}(M)\cong H^k_{\mathrm{sing},\infty}(M;\mathbb R)$.
15. `thm-de-rham-theorem` — **theorem** `[LA]`. Compose item 14 with DG-16's
    natural smooth/continuous singular comparison:
    \[
       H^k_{\mathrm{dR}}(M)\;\cong\;
       H^k_{\mathrm{sing}}(M;\mathbb R)
    \]
    naturally in every smooth manifold $M$. LANDMARK.
16. `cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type` —
    **corollary** `[LL]`; agrees with DG-15's direct homotopy proof.
17. `rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product` —
    **remark** `[LN]`; precise deferred statement:
    $I([alpha\wedge\beta])=I[alpha]\smile I[\beta]$ after the cup product
    and cochain comparison are built. Compactness is not a hypothesis.

**Compact-support top cohomology**

18. `def-compactly-supported-de-rham-cochain-complex-and-cohomology` —
    **definition** `[LN]`; $d$ preserves support, so
    $(\Omega_c^\bullet(M),d)$ is a cochain complex.
19. `prop-proper-smooth-maps-pull-back-compactly-supported-forms` —
    **proposition** `[LA]`; $\operatorname{supp}F^*\omega\subseteq
    F^{-1}(\operatorname{supp}\omega)$ is compact when $F$ is proper.
20. `prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps` —
    **proposition** `[LL]`; arbitrary smooth maps are not claimed.
21. `thm-integration-descends-to-compactly-supported-top-de-rham-cohomology` —
    **theorem** `[LA]`: Stokes gives
    $\int_M:H_c^n(M)\to\mathbb R$ for an oriented boundaryless $n$-manifold.
22. `lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives` —
    **lemma** `[LA]`; construct the primitive coordinate by coordinate with
    correcting bump terms so support remains compact.
23. `lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls` —
    **lemma** `[LA]`; exact transfer forms move normalized bumps between
    overlapping balls.
24. `thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology` —
    **theorem** `[LA]`. If $M^n$ is connected, oriented, and boundaryless,
    $\int_M:H_c^n(M)\xrightarrow\sim\mathbb R$. LANDMARK.
25. `cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real` —
    **corollary** `[LL]`; compactness makes ordinary and compact supports
    coincide.

**Degree of proper maps**

26. `def-degree-of-a-proper-smooth-map-by-compact-support-cohomology` —
    **definition** `[LN]`. For connected oriented boundaryless $n$-manifolds,
    the scalar $\deg F$ is determined by
    $\int_MF^*\omega=(\deg F)\int_N\omega$ for all
    $\omega\in\Omega_c^n(N)$.
27. `lem-degree-is-well-defined-and-independent-of-the-normalized-top-form` —
    **lemma** `[LA]`; use the one-dimensionality in item 24.
28. `def-local-orientation-sign-of-a-regular-preimage` — **definition** `[LN]`:
    $\operatorname{sgn}(dF_p)=\pm1$.
29. `thm-regular-value-formula-for-degree` — **theorem** `[LA]`. If $y$ is a
    regular value of the proper map $F$, then $F^{-1}(y)$ is finite and
    $\deg F=\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p)\in\mathbb Z$.
30. `cor-degree-is-an-integer-and-independent-of-the-regular-value` —
    **corollary** `[LL]`.
31. `prop-degree-is-multiplicative-under-composition` — **proposition** `[LA]`.
32. `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism` —
    **proposition** `[LL]`: $+1$ or $-1$.
33. `thm-degree-is-invariant-under-proper-smooth-homotopy` — **theorem**
    `[LA]`; the combined map must be proper, a hypothesis not inferred from
    proper endpoints.
34. `cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective` —
    **corollary** `[LA]`; a missed point supports a normalized form whose
    pullback is zero.
35. `prop-degree-of-the-antipodal-map-on-the-sphere` — **proposition** `[LA]`:
    $(-1)^{n+1}$ on $S^n$.
36. `prop-degree-of-the-power-map-on-the-circle` — **proposition** `[LA]`:
    $z\mapsto z^m$ has degree $m$ for $m\in\mathbb Z$.

### `fs-` items (A page)

- `fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices` — **false
  statement** `[LL]`; chain Stokes is exactly the cochain identity.
- `fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors` —
  **false statement** `[LL]`; connector compatibility is item 12.
- `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` — **false
  statement** `[LL]`; singular cup product has not been constructed.
- `fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map` —
  **false statement** `[LL]`; pullback needs properness.
- `fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre` —
  **false statement** `[LL]`; local orientation signs matter.
- `fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy` —
  **false statement** `[LL]`.

### B page — `de-rham-comparison-and-degree-examples`

1. `ex-de-rham-integration-cochain-on-a-smooth-path` — **example** `[LL]`.
2. `ex-chain-stokes-on-an-oriented-two-simplex` — **example** `[LA]`.
3. `ex-the-de-rham-map-on-the-angular-form` — **example** `[LA]`.
4. `ex-the-local-de-rham-comparison-on-a-ball` — **example** `[LL]`.
5. `ex-connector-compatibility-for-a-two-arc-cover-of-the-circle` —
   **example** `[LA]`.
6. `ex-a-normalized-compactly-supported-top-form-on-euclidean-space` —
   **example** `[LL]`.
7. `ex-degree-of-a-reflection-of-a-sphere` — **example** `[LL]`.
8. `ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value` — **example**
   `[LL]`.
9. `ex-a-two-sheeted-orientation-preserving-cover-has-degree-two` —
   **example** `[LA]`, conditional only on the specific displayed covering,
   not general covering-space theory.
10. `cex-a-map-with-two-preimages-but-degree-zero` — **counterexample** `[LA]`;
    use opposite local signs.
11. `cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map` —
    **counterexample** `[AA]`, retained only after direct verification and not
    used as a dependency.
12. `ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds` —
    **example** `[LL]`.

### Sources and exact locators

- **Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 18 “The de Rham
  Theorem,” especially Thm. 18.12 “Stokes for Chains,” Prop. 18.13
  (naturality), and Thm. 18.14 (de Rham), together with Ch. 17 heading “Degree
  Theory.”** Primary textbook source for items 1–36. The general five lemma is
  `already-published` as `thm-five-lemma-for-modules`, and generic long exact
  sequences are `already-planned` in HA.
- **Park, “Proof of de Rham's Theorem,” §§3 “De Rham Map” and 4 “Example:
  deRham Cohomology of $S^n$,” especially Thm. 3.1, Prop. 3.2, and Thm. 3.3.**
  Focused independent proof guide for chain Stokes, naturality, connector
  compatibility, and the five-lemma comparison.
- **van der Vorst, *De Rham Cohomology*, §10 headings “singular homology,”
  “singular cohomology,” “smooth simplices,” “de Rham homomorphism,” and “de
  Rham theorem,” especially Thm. 10.2, Lemmas 10.5–10.9, and Thm. 10.3.**
  Independent lecture-note control; minor expository slips are resolved in
  favour of Lee/Hatcher/Park.
- **Robbin--Salamon, *Introduction to Differential Topology*, Ch. 5 §5.3
  “Lie Derivative,” subheading “Integration and Exactness,” especially Thm.
  5.3.10 and Cor. 5.3.12.** Independent textbook backing for items 18–25.
- **Hatcher, *Algebraic Topology*, §3.1 “Cohomology of Spaces” and
  “Mayer–Vietoris Sequences.”** Control for the singular comparison target.
  Cup products later in Ch. 3 are specifically deferred to algebraic topology
  and are not silently imported.

### Proof strategy and traps

The standard simplex is handled as one explicit Jordan polytope. Its face
orientation computation supplies the alternating boundary signs, so general
corners are unnecessary. Chain Stokes makes integration a cochain map; quotient
well-definedness then comes from HA. The global comparison is a five-lemma
argument only after the connector square has been checked at representatives.

For compact-support top cohomology, the Euclidean zero-integral primitive is
the hard local lemma. A compact support meets finitely many coordinate balls;
connectedness lets normalized bump mass be transported across an overlapping
chain of balls, reducing the global kernel to the Euclidean lemma. Degree is
then a scalar on a one-dimensional space. To prove its regular-value formula,
choose a compactly supported form in a regular-value neighbourhood, use the
inverse theorem on each of the finitely many sheets, and apply manifold change
of variables with the local orientation sign.

**Well-definedness discharged:** simplex orientation and coordinate choice
(items 1–5), representatives/naturality/connectors (6–17), compact support
under proper pullback and primitive support control (18–25), and independence
of forms and regular values in degree (26–36).  
**Choice:** simplex integration and finite five-lemma diagrams are ZF. The
global comparison inherits DG-16's $\mathrm{AC}_\omega$ open-set boundary.
Compact-support globalization uses finite covers of each compact support plus
the supplied connected manifold and adds no choice beyond DG-2. Degree adds
none. No full AC/injective-coefficient route is used.  
**Unresolved seam:** HA-1/HA-2/HA-4 remain build prerequisites. The graded-ring
comparison, Poincaré duality, Thom isomorphism, Künneth, and general excision
are precise algebraic-topology deferrals.
