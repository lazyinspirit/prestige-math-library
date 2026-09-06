# Step 7 whole-group reading — group **g**, run `frontier-31a`

You are the group Alpha for batches **7**, **12**, **20**: 3 A/B pair(s), 6 page(s), 97 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `tensor-and-fusion-categories` | A | category-theory | 365.035 | `enriched-categories-examples` |
| 7 | `tensor-and-fusion-categories-examples` | B | category-theory | 365.036 | `tensor-and-fusion-categories` |
| 12 | `relative-homology-excision-and-mayer-vietoris` | A | algebraic-topology | 366.005 | `singular-chains-and-singular-homology-examples` |
| 12 | `relative-homology-excision-and-mayer-vietoris-examples` | B | algebraic-topology | 366.006 | `relative-homology-excision-and-mayer-vietoris` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories` | A | differential-topology | 521 | `morse-functions-critical-values-and-genericity-examples` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories-examples` | B | differential-topology | 522 | `gradient-like-vector-fields-and-morse-trajectories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-and-fusion-categories` — Tensor and Fusion Categories (29 item(s))

- `def-k-linear-category-and-k-linear-functor` · definition — k-linear categories and k-linear functors
- `def-locally-finite-k-linear-abelian-category` · definition — Locally finite k-linear abelian categories
- `def-finite-k-linear-abelian-category` · definition — Finite k-linear abelian categories
- `def-semisimple-object-and-semisimple-abelian-category` · definition — Semisimple objects and semisimple abelian categories
- `def-tensor-and-multitensor-category` · definition — Tensor and multitensor categories
- `def-fusion-and-multifusion-category` · definition — Fusion and multifusion categories
- `rem-tensor-category-terminology-is-source-dependent` · remark — Tensor-category terminology follows the EGNO convention
- `thm-the-tensor-product-in-a-multitensor-category-is-biexact` · theorem — Tensor product in a multitensor category is biexact
- `thm-dualization-in-a-multitensor-category-is-exact` · theorem — Dualization in a multitensor category is exact
- `thm-images-commute-with-tensor-products-in-a-multitensor-category` · theorem — Images commute with tensor products in a multitensor category
- `thm-tensoring-with-a-dualizable-object-preserves-projectives` · theorem — Tensoring with a dualizable object preserves projectives
- `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple` · corollary — The unit is projective exactly when the tensor category is semisimple
- `thm-the-unit-object-of-a-multitensor-category-is-semisimple` · theorem — The unit object of a multitensor category is semisimple
- `thm-the-unit-object-of-a-tensor-category-is-simple` · theorem — The unit object of a tensor category is simple
- `cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` · corollary — Evaluation is epic and coevaluation monic for nonzero objects
- `def-tensor-functor-between-tensor-categories` · definition — Tensor functors between tensor categories
- `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` · theorem — An exact k-linear strong monoidal functor out of a tensor category is faithful
- `def-grothendieck-ring-of-a-tensor-category` · definition — The Grothendieck ring of a tensor category
- `thm-the-grothendieck-ring-multiplication-is-well-defined` · theorem — Grothendieck-ring multiplication is well-defined
- `def-fusion-rules` · definition — Fusion rules
- `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring` · theorem — Duality induces an anti-involution on the Grothendieck ring
- `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` · theorem — Left and right dual objects are isomorphic in a semisimple multitensor category
- `rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure` · remark — Objectwise double-dual isomorphisms do not supply a pivotal structure
- `rem-the-boundary-of-the-fusion-category-development` · remark — The boundary of this fusion-category development
- `fs-every-finite-k-linear-abelian-category-is-semisimple` · false-statement — Every finite k-linear abelian category is semisimple
- `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category` · false-statement — Every rigid k-linear abelian monoidal category is a tensor category
- `fs-a-tensor-functor-is-just-a-strong-monoidal-functor` · false-statement — A tensor functor is just a strong monoidal functor
- `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative` · false-statement — The Grothendieck ring of a tensor category is always commutative
- `fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure` · false-statement — Objectwise isomorphisms X isomorphic to its double dual supply a pivotal structure

### `tensor-and-fusion-categories-examples` — Tensor and Fusion Categories — Examples (4 item(s))

- `ex-finite-dimensional-vector-spaces-form-a-fusion-category` · example — Finite-dimensional vector spaces form a fusion category
- `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` · example — The Grothendieck ring of finite-dimensional vector spaces
- `ex-a-matrix-multifusion-category-with-nonsimple-unit` · example — A matrix multifusion category with nonsimple unit
- `ex-fusion-rules-for-a-supplied-finite-simple-family` · example — Fusion rules for a supplied finite simple family

### `relative-homology-excision-and-mayer-vietoris` — Relative Homology Excision and Mayer Vietoris (30 item(s))

- `def-singular-chain-complex-of-a-pair` · definition — Relative singular chain complex
- `lem-singular-boundary-descends-to-relative-chains` · lemma — Boundary on relative chains
- `def-relative-singular-homology` · definition — Relative singular homology
- `prop-relative-homology-is-functorial-for-maps-of-pairs` · proposition — Functoriality of relative homology
- `prop-relative-homology-of-the-empty-and-total-subspace` · proposition — Relative homology for the empty and total subspace
- `thm-long-exact-sequence-of-a-pair-in-singular-homology` · theorem — Long exact sequence of a pair
- `def-relative-homology-connecting-homomorphism-on-cycles` · definition — Relative connecting homomorphism on cycles
- `lem-the-relative-connecting-map-is-independent-of-lift-and-representative` · lemma — Well-definedness of the relative connector
- `thm-naturality-of-the-long-exact-sequence-of-a-pair` · theorem — Naturality of the pair long exact sequence
- `def-barycenter-and-affine-cone-on-a-singular-chain` · definition — Barycenter and affine cone
- `def-barycentric-subdivision-chain-operator` · definition — Barycentric subdivision operator
- `thm-barycentric-subdivision-is-a-chain-map` · theorem — Barycentric subdivision is a chain map
- `def-barycentric-subdivision-prism-homotopy` · definition — Subdivision prism homotopy
- `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` · theorem — Subdivision is chain homotopic to the identity
- `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` · lemma — Mesh tends to zero under iterated subdivision
- `def-cover-small-singular-chain-subcomplex` · definition — Cover-small singular chains
- `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` · lemma — Finite chains eventually become cover-small
- `thm-cover-small-singular-chains-compute-singular-homology` · theorem — Cover-small chains compute singular homology
- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` · theorem — The cover-small inclusion is a chain-homotopy equivalence
- `thm-excision-for-singular-homology` · theorem — Excision for singular homology
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` · corollary — Good pairs and quotient reduced homology
- `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` · lemma — Cover-small chains for a two-open cover
- `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence` · theorem — Short exact chain Mayer–Vietoris sequence
- `thm-mayer-vietoris-sequence-in-singular-homology` · theorem — Mayer–Vietoris sequence in singular homology
- `def-mayer-vietoris-connecting-class` · definition — Mayer–Vietoris connecting class
- `lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition` · lemma — Well-definedness of the Mayer–Vietoris connector
- `thm-naturality-of-singular-mayer-vietoris` · theorem — Naturality of singular Mayer–Vietoris
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` · theorem — Simplicial and singular homology agree
- `cor-homology-of-spheres` · corollary — Homology of spheres
- `cor-suspension-isomorphism-in-reduced-singular-homology` · corollary — Suspension isomorphism in reduced singular homology

### `relative-homology-excision-and-mayer-vietoris-examples` — Relative Homology Excision and Mayer Vietoris — Examples (9 item(s))

- `ex-relative-homology-of-a-disk-and-its-boundary` · example — Relative homology of a disk and its boundary
- `ex-relative-homology-of-an-interval-and-its-endpoints` · example — Relative homology of an interval and its endpoints
- `ex-first-barycentric-subdivision-of-a-triangle` · example — First barycentric subdivision of a triangle
- `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` · example — Cover-small chains for a two-arc cover of a circle
- `ex-mayer-vietoris-computation-of-sphere-homology` · example — Mayer–Vietoris computation of sphere homology
- `ex-mayer-vietoris-computation-of-the-torus-first-homology` · example — Mayer–Vietoris computation of first homology of the torus
- `cex-excision-fails-without-the-closure-inside-interior-hypothesis` · counterexample — Excision fails without closure inside interior
- `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` · counterexample — No uniform subdivision depth for all singular simplices
- `cex-relative-homology-is-not-the-homology-of-the-set-difference` · counterexample — Relative homology is not homology of the set difference

### `gradient-like-vector-fields-and-morse-trajectories` — Gradient Like Vector Fields and Morse Trajectories (20 item(s))

- `def-riemannian-gradient-of-a-smooth-function` · definition — The Riemannian gradient is the metric dual of the differential
- `lem-riemannian-gradient-vanishes-exactly-at-critical-points` · lemma — The Riemannian gradient vanishes exactly at the critical points
- `def-negative-gradient-trajectory-of-a-morse-function` · definition — Negative-gradient trajectories of a Morse function
- `lem-negative-gradient-energy-identity` · lemma — A negative-gradient trajectory satisfies the energy identity
- `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` · corollary — Nonconstant negative-gradient trajectories strictly decrease the function
- `def-downward-gradient-like-vector-field` · definition — Downward gradient-like vector fields for a Morse function
- `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` · proposition — Every Morse function admits a complete downward gradient-like field on a closed manifold
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` · lemma — Precompact trajectory tails have nonempty compact connected flow-invariant limit sets
- `lem-a-limit-point-of-a-gradient-trajectory-is-critical` · lemma — Every precompact end-limit point of a negative-gradient trajectory is critical
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` · lemma — A negative-gradient trajectory on a compact Morse manifold has single critical alpha and omega limits
- `def-morse-trajectory-from-p-to-q` · definition — A Morse trajectory from one critical point to another
- `lem-morse-trajectories-have-positive-energy-drop` · lemma — Morse trajectories have a positive energy drop
- `def-stable-and-unstable-sets-of-a-critical-point` · definition — Stable and unstable sets of a critical point
- `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` · theorem — Local stable and unstable manifolds at a Morse critical point
- `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` · theorem — Global stable and unstable manifolds are immersed Euclidean spaces
- `lem-stable-and-unstable-manifolds-are-flow-invariant` · lemma — Stable and unstable manifolds are flow invariant
- `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` · corollary — A downward gradient flow has no nonconstant periodic or recurrent orbit
- `def-proper-smooth-function-and-compact-morse-slab` · definition — Proper smooth functions and compact Morse slabs
- `prop-proper-morse-slabs-give-complete-connecting-trajectories` · proposition — Proper Morse slabs prevent finite-time escape of connecting trajectories
- `rem-noncompact-flow-completeness-is-an-extra-hypothesis` · remark — Completeness of a gradient flow is an extra hypothesis on a noncompact manifold

### `gradient-like-vector-fields-and-morse-trajectories-examples` — Gradient Like Vector Fields and Morse Trajectories — Examples (5 item(s))

- `ex-negative-gradient-lines-for-a-quadratic-morse-function` · example — Negative-gradient lines for a quadratic Morse function
- `ex-meridian-trajectories-for-height-on-the-sphere` · example — Meridian trajectories for height on the sphere
- `ex-gradient-flow-on-the-torus-morse-function` · example — Gradient flow for a Morse function on the flat torus
- `cex-positive-gradient-reverses-stable-and-unstable-dimensions` · counterexample — Using the positive gradient reverses the stable and unstable dimensions
- `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` · counterexample — A gradient flow on a noncompact manifold can be incomplete

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-31a`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
