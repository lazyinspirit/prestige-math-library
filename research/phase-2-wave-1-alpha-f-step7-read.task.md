# Step 7 whole-group reading — group **f**, run `phase-2-wave-1`

You are the group Alpha for batches **7**, **8**: 2 A/B pair(s), 4 page(s), 80 item(s).

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
| 7 | `simplicial-subdivision-and-simplicial-approximation` | A | algebraic-topology | 366.0021 | `simplicial-complexes-and-simplicial-homology` |
| 7 | `simplicial-subdivision-and-simplicial-approximation-examples` | B | algebraic-topology | 366.0022 | `simplicial-subdivision-and-simplicial-approximation` |
| 8 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` | A | algebraic-geometry | 366.0403 | `ideals-and-quotient-rings`, `the-field-of-fractions-and-localisation`, `prime-spectra-and-radicals`, `noether-normalisation-and-nullstellensatz` |
| 8 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples` | B | algebraic-geometry | 366.0404 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `simplicial-subdivision-and-simplicial-approximation` — Simplicial Subdivision and Simplicial Approximation (25 item(s))

- `def-face-poset-and-order-complex` · definition — Face poset and order complex
- `def-barycentric-subdivision-of-an-abstract-simplicial-complex` · definition — Barycentric subdivision of an abstract simplicial complex
- `def-canonical-barycentric-realization-map` · definition — Canonical barycentric realization map
- `lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology` · lemma — Finite simplicial weak topology agrees with euclidean topology
- `lem-barycentric-face-chains-triangulate-a-geometric-simplex` · lemma — Barycentric face chains triangulate a geometric simplex
- `thm-barycentric-subdivision-realizes-homeomorphically` · theorem — Barycentric subdivision realizes homeomorphically
- `def-open-and-closed-stars-in-a-subdivision` · definition — Open and closed stars in a subdivision
- `lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices` · lemma — Compact subsets of an arbitrary simplicial realization meet finitely many open simplices
- `lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction` · lemma — An augmented simplicial cone has an explicit chain contraction
- `lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic` · lemma — Simplicial chain maps carried by specified cones are chain homotopic
- `def-oriented-simplicial-subdivision-chain-map` · definition — Oriented simplicial subdivision operator
- `lem-oriented-simplicial-subdivision-commutes-with-boundary` · lemma — Oriented simplicial subdivision commutes with boundary
- `lem-last-vertex-map-is-carried-by-original-simplices` · lemma — Last vertex map is carried by original simplices
- `thm-simplicial-subdivision-is-a-chain-map-and-homology-isomorphism` · theorem — Simplicial subdivision is a chain map and homology isomorphism
- `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero` · lemma — Mesh of iterated simplicial barycentric subdivision tends to zero
- `lem-the-open-star-criterion-produces-a-simplicial-map` · lemma — The open star criterion produces a simplicial map
- `thm-finite-simplicial-approximation-for-maps-of-pairs` · theorem — Finite simplicial approximation for maps of pairs
- `def-relative-derived-subdivision-of-a-finite-simplicial-pair` · definition — Relative derived subdivision of a finite simplicial pair
- `lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full` · lemma — Relative derived subdivision makes the fixed subcomplex full
- `lem-relative-subdivision-neighbourhood-adjustment` · lemma — Relative subdivision neighbourhood adjustment
- `thm-relative-simplicial-approximation-after-subdivision` · theorem — Relative simplicial approximation after subdivision
- `def-finite-convex-cell-complex-and-linear-subdivision` · definition — Finite convex cell complex and linear subdivision
- `lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex` · lemma — Intersections of finite linear complexes form a convex cell complex
- `lem-finite-convex-cell-complexes-admit-compatible-triangulations` · lemma — Finite convex cell complexes admit compatible triangulations
- `lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement` · lemma — Two finite linear subdivisions have a common simplicial refinement

### `simplicial-subdivision-and-simplicial-approximation-examples` — Simplicial Subdivision and Simplicial Approximation: Examples (6 item(s))

- `ex-barycentric-subdivision-of-an-edge-and-triangle` · example — Barycentric subdivision of an edge and triangle
- `ex-the-subdivision-chain-of-an-oriented-two-simplex` · example — The subdivision chain of an oriented two simplex
- `ex-a-relative-simplicial-approximation-fixed-on-the-endpoints` · example — A relative simplicial approximation fixed on the endpoints
- `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells` · example — A compact set in an infinite non locally finite realization still meets finitely many cells
- `cex-a-continuous-map-need-not-be-simplicial-before-subdivision` · counterexample — A continuous map need not be simplicial before subdivision
- `cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge` · counterexample — Ordinary barycentric subdivision cannot fix a nonconstant simplicial edge

### `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` — Classical Affine Varieties: Coordinate Rings, Morphisms, and Rational Maps (48 item(s))

- `def-classical-affine-algebraic-set-with-empty-boundaries` · definition — Classical affine algebraic sets, including the empty boundaries
- `lem-classical-zero-locus-ideal-radical-invariance` · lemma — A classical zero locus depends only on the generated ideal and its radical
- `thm-classical-affine-zero-loci-form-zariski-closed-sets` · theorem — Classical affine zero loci form the Zariski closed sets
- `def-classical-vanishing-ideal` · definition — The classical vanishing ideal
- `lem-classical-zero-locus-vanishing-ideal-galois-connection` · lemma — Zero loci and vanishing ideals form a Galois connection
- `thm-classical-affine-nullstellensatz-correspondence` · theorem — Classical affine algebraic sets correspond to radical ideals, and irreducible sets to prime ideals
- `def-classical-affine-variety-interface` · definition — A classical affine variety
- `lem-classical-irreducible-space-open-intersection-criterion` · lemma — Irreducibility is equivalent to the nonempty-open intersection criterion
- `lem-classical-affine-variety-nonempty-opens-dense` · lemma — Every nonempty open of a classical affine variety is dense
- `def-classical-affine-coordinate-ring` · definition — The coordinate ring of a classical affine algebraic set
- `thm-classical-affine-variety-prime-coordinate-ring` · theorem — A classical affine variety has a domain coordinate ring, and conversely
- `thm-classical-polynomial-functions-equal-coordinate-ring` · theorem — Polynomial functions on an affine algebraic set are its coordinate ring
- `def-classical-principal-open` · definition — A principal open subset of a classical affine variety
- `lem-classical-principal-opens-form-affine-basis` · lemma — Principal opens form a basis and multiply under intersection
- `def-classical-regular-function-on-open-set` · definition — A regular function on an open subset of a classical affine variety
- `lem-classical-regular-functions-locality-and-gluing` · lemma — Classical regular functions satisfy locality and unique gluing
- `thm-classical-principal-open-coordinate-ring-localization` · theorem — Regular functions on a principal open are the principal localization
- `lem-classical-affine-algebraic-set-finite-irreducible-components` · lemma — A classical affine algebraic set has a unique finite irredundant decomposition
- `def-reduced-finitely-generated-k-algebra-interface` · definition — A reduced finitely generated $k$-algebra
- `lem-classical-affine-closed-points-are-maximal-ideals` · lemma — Classical affine points are maximal ideals
- `thm-classical-affine-global-regular-functions-coordinate-ring` · theorem — Global regular functions on a classical affine variety are its coordinate ring
- `def-classical-affine-variety-morphism` · definition — A morphism from an open subset of a classical affine variety to an affine variety
- `def-classical-regular-map-image-and-set-theoretic-fibre` · definition — Images and set-theoretic fibres of classical regular maps
- `lem-classical-morphism-inverse-image-of-closed-is-closed` · lemma — A classical morphism pulls Zariski closed sets back to closed sets
- `thm-classical-affine-morphisms-coordinate-ring-antiequivalence` · theorem — Classical affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms
- `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` · theorem — Classical affine algebraic sets and reduced finitely generated $k$-algebras are contravariantly equivalent
- `lem-classical-affine-morphisms-equal-on-dense-open` · lemma — Affine-source morphisms agreeing on a dense open agree everywhere
- `def-classical-germ-and-local-ring` · definition — Germs and the local ring of a classical affine variety
- `thm-classical-affine-local-ring-is-localization` · theorem — The classical affine local ring is localization at the point's maximal ideal
- `thm-classical-principal-open-is-affine-variety` · theorem — Every nonempty principal open is a classical affine variety
- `def-classical-affine-open-subset` · definition — A classical affine open subset and its coordinate ring
- `def-classical-variety-function-field` · definition — The function field of an irreducible classical affine variety
- `lem-classical-regular-functions-on-open-embed-in-function-field` · lemma — Regular functions on a nonempty open embed in the affine function field
- `thm-classical-function-field-independent-of-affine-open` · theorem — The function field is independent of the chosen nonempty principal affine open
- `def-classical-rational-map` · definition — A rational map as an equivalence class of morphisms on nonempty opens
- `lem-classical-rational-map-equivalence-transitive` · lemma — The rational-map relation is transitive
- `def-classical-rational-map-domain-union` · definition — The candidate domain of a rational map
- `def-classical-dominant-morphism-and-rational-map` · definition — Dominant classical morphisms and rational maps
- `lem-classical-open-source-morphisms-equal-on-dense-open` · lemma — Morphisms defined on an open source and agreeing on a dense open agree on their common domain
- `lem-classical-morphisms-glue-on-open-cover` · lemma — Compatible classical morphisms to an affine target glue over an open cover
- `thm-classical-rational-map-maximal-domain-affine-target` · theorem — A rational map to an affine target has a unique maximal open domain
- `lem-classical-dominant-rational-maps-compose` · lemma — Dominant rational maps compose on nonempty open domains
- `lem-classical-dominant-map-pulls-back-function-fields` · lemma — Dominant maps pull back function fields functorially
- `thm-classical-dominant-rational-maps-function-field-embeddings` · theorem — Dominant rational maps to an affine variety correspond to field embeddings
- `def-classical-integral-affine-atlas-and-chartwise-morphism` · definition — Integral classical varieties in the compatible affine-atlas register
- `lem-classical-integral-affine-charts-have-canonical-common-function-field` · lemma — Compatible affine charts of an integral classical variety have one function field
- `def-classical-birational-equivalence` · definition — Birational maps and birational equivalence of classical varieties
- `thm-classical-birational-equivalence-iff-function-fields-isomorphic` · theorem — Classical integral varieties are birational exactly when their function fields are isomorphic over $k$

### `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples` — Classical Affine Varieties: Coordinate Rings, Morphisms, and Rational Maps — Examples (1 item(s))

- `ex-classical-affine-line-coordinate-local-and-function-field-dictionary` · example — The affine-line coordinate, local, and function-field dictionary

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `phase-2-wave-1`

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
