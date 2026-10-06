# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **30**, **18**, **11**: 3 A/B pair(s), 6 page(s), 100 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 30 | `thom-spectra-and-unoriented-bordism-detection` | A | algebraic-topology | 548.5 | `thom-spaces-normal-data-and-collapse-maps` |
| 30 | `thom-spectra-and-unoriented-bordism-detection-examples` | B | algebraic-topology | 548.6 | `thom-spectra-and-unoriented-bordism-detection` |
| 18 | `regular-homotopy-and-sphere-eversion` | A | differential-topology | 567 | `formal-immersions-and-the-smale-hirsch-theorem`, `lie-groups-invariant-fields-and-the-exponential-map`, `covering-spaces-and-lifting`, `higher-homotopy-groups-and-cofiber-sequences`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `simply-connected-plane-domains`, `the-gauss-bonnet-theorem-for-riemannian-surfaces`, `lie-subgroups-actions-and-homogeneous-spaces` |
| 18 | `regular-homotopy-and-sphere-eversion-examples` | B | differential-topology | 568 | `regular-homotopy-and-sphere-eversion`, `the-de-rham-theorem-and-degree` |
| 11 | `characteristic-numbers-and-cobordism-obstructions` | A | differential-topology | 553 | `intersection-pairings-self-intersection-and-euler-classes`, `smooth-cobordism-relations-groups-and-rings`, `thom-spaces-normal-data-and-collapse-maps`, `pontryagin-thom-and-framed-cobordism`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `bocksteins-steenrod-squares-and-cohomology-operations`, `topological-vector-bundles-and-grassmannian-classification`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `spectra-and-stable-homotopy-groups`, `thom-spectra-and-unoriented-bordism-detection`, `products-segre-and-veronese-embeddings-and-grassmannians` |
| 11 | `characteristic-numbers-and-cobordism-obstructions-examples` | B | differential-topology | 554 | `characteristic-numbers-and-cobordism-obstructions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `thom-spectra-and-unoriented-bordism-detection` — Thom Spectra and Unoriented Bordism Detection (55 item(s))

- `def-mod-two-square-algebra-admissible-sequences-and-excess` · definition — The mod-two square algebra, admissible sequences, and excess
- `lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs` · lemma — Local path-fibration and cohomology inputs for mod-two Eilenberg–Mac Lane induction
- `lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space` · lemma — Infinite real projective space is a marked mod-two Eilenberg–Mac Lane space
- `lem-steenrod-squares-commute-with-relative-cohomology-connectors` · lemma — Steenrod squares commute with relative cohomology connectors
- `lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism` · lemma — Fiber and limit isomorphisms force a base-axis isomorphism
- `thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free` · theorem — A connected graded module coalgebra with injective unit orbit is free
- `lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants` · lemma — Finite-cover transfer with inverted degree and sign anti-invariants
- `thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison` · theorem — Integral homology comparison gives finite-range homotopy comparison for simply connected CW complexes
- `lem-rationalization-is-exact-and-commutes-with-singular-homology` · lemma — Rationalization is exact and commutes with singular homology
- `def-weak-join-classifying-model-for-a-discrete-group` · definition — Weak-join classifying model of a discrete group
- `lem-oriented-grassmannian-has-two-lifted-schubert-cells` · lemma — Oriented Grassmannians have two lifted Schubert cells
- `lem-adem-reduction-spans-by-admissible-composites` · lemma — Adem reduction spans by admissible square composites
- `lem-admissible-square-action-has-a-distinct-leading-monomial` · lemma — Admissible square actions have distinct leading monomials
- `lem-fundamental-path-fibration-class-has-the-normalized-relative-lift` · lemma — The fundamental path-fibration class has the normalized relative lift
- `lem-relative-lifts-produce-cohomological-transgressions` · lemma — Relative lifts produce cohomological transgressions
- `lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q` · lemma — Finite type and odd-primary acyclicity of K(F₂,q)
- `cor-finite-range-comparison-for-arbitrary-target` · corollary — Finite-range comparison with an arbitrary simply connected target
- `lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison` · lemma — Rational cohomology of K(Z,n) through weak CW fiber comparison
- `lem-weak-join-classifying-model-is-a-cw-k-g-one` · lemma — The weak-join model is a CW K(G,1)
- `thm-bo-bso-cohomology-away-from-two` · theorem — Cohomology of BO and BSO away from two
- `thm-integral-finite-generation-of-mo-and-mso-homology` · theorem — Integral finite generation of universal real and oriented Thom homology
- `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` · definition — The Thom prespectrum of the universal real and oriented bundles
- `thm-admissible-composites-present-the-mod-two-square-algebra` · theorem — Admissible composites present the mod-two square algebra
- `thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system` · theorem — A transgressive simple fiber system gives a polynomial base
- `lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic` · lemma — Torsion Eilenberg–Mac Lane spaces are rationally acyclic
- `thm-unoriented-thom-cohomology-away-from-two-below-2r` · theorem — Unoriented Thom cohomology away from two and its strict endpoint
- `lem-finite-products-and-comparison-cones-have-finite-type` · lemma — Finite products and comparison cones have homological finite type
- `def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum` · definition — Degreewise mod-two cohomology of the universal real Thom prespectrum
- `lem-universal-real-thom-spaces-are-r-minus-one-connected` · lemma — Universal real Thom spaces are (r−1)-connected
- `lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range` · lemma — The universal mod-two class detects admissible composites in the strict range
- `lem-external-evaluation-detects-tensor-square-operations` · lemma — External evaluation detects tensor-square operations
- `prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces` · proposition — Polynomial mod-two cohomology of Eilenberg–Mac Lane spaces
- `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy` · lemma — First rational Hurewicz after killing lower torsion homotopy
- `thm-finite-generation-cohomological-uct-gives-integral-cone-comparison` · theorem — Finite-generation cohomological UCT gives integral cone comparison
- `lem-stable-thom-cohomology-is-degreewise-eventually-constant` · lemma — Stable universal Thom cohomology is eventually constant in every degree
- `thm-admissible-square-algebra-is-a-connected-bialgebra` · theorem — The admissible square algebra is a connected bialgebra
- `lem-metastable-cohomology-of-eilenberg-maclane-spaces` · lemma — Metastable cohomology of mod-two Eilenberg–Mac Lane spaces
- `cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range` · corollary — Finite-range rational homology vanishing implies homotopy vanishing
- `lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms` · lemma — Rational homotopy comparison with one endpoint surjection implies homology comparison
- `lem-stable-squares-on-universal-thom-classes` · lemma — Stable Steenrod squares on universal Thom cohomology
- `def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology` · definition — Whitney-sum coalgebra on stable unoriented Thom cohomology
- `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree` · lemma — Rational sphere homotopy below the first unstable degree
- `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit` · lemma — The zero section proves injectivity of the Thom unit orbit
- `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology` · lemma — Whitney sum defines the connected coalgebra on stable Thom cohomology
- `lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres` · lemma — Rational Hurewicz for arbitrary wedges of high-dimensional spheres
- `lem-stable-thom-cohomology-is-a-square-module-coalgebra` · lemma — Stable Thom cohomology is a square-module coalgebra
- `thm-rational-hurewicz-for-highly-connected-cw-complexes` · theorem — Rational Hurewicz for highly connected CW complexes
- `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra` · theorem — Stable unoriented Thom cohomology is free over the square algebra
- `def-finite-thom-classifying-detector-map` · definition — Finite Thom classifying detector map
- `lem-finite-thom-classifying-detector-map-exists-and-is-continuous` · lemma — The finite Thom classifying detector map exists and is continuous
- `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r` · theorem — The finite Thom detector is a mod-two cohomology isomorphism below 2r
- `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1` · theorem — The finite Thom detector is an integral homology isomorphism below 2r−1
- `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2` · theorem — The finite Thom detector is a homotopy isomorphism through 2r−2
- `lem-stable-thom-detector-coordinates-commute-with-suspension` · lemma — Stable Thom detector coordinates commute with suspension
- `thm-stable-unoriented-thom-homotopy-is-injectively-detected` · theorem — Stable unoriented Thom homotopy is injectively detected

### `thom-spectra-and-unoriented-bordism-detection-examples` — Thom Spectra and Unoriented Bordism Detection — Examples (4 item(s))

- `ex-low-degree-admissible-steenrod-monomials` · example — Low-degree admissible Steenrod monomials
- `ex-strict-metastable-eilenberg-maclane-range` · example — A strict metastable Eilenberg–Mac Lane range
- `ex-universal-thom-class-steenrod-operation` · example — A Steenrod operation on the universal Thom class
- `ex-rational-hurewicz-range-for-the-four-sphere` · example — The rational Hurewicz range for the four-sphere

### `regular-homotopy-and-sphere-eversion` — Regular Homotopy and Sphere Eversion (15 item(s))

- `def-gauss-frame-map-of-an-immersion-into-euclidean-space` · definition — Gauss frame map of an immersion into Euclidean space
- `prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle` · proposition — Euclidean formal immersions are sections of a Stiefel bundle
- `lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration` · lemma — The basepoint evaluation on the Stiefel section space is a fibration
- `lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension` · lemma — Stiefel manifolds are connected, and simply connected in positive codimension
- `lem-the-second-homotopy-group-of-so-three-vanishes` · lemma — The second homotopy group of SO(3) vanishes
- `def-rotation-number-of-an-immersed-oriented-circle-in-the-plane` · definition — Rotation number of an immersed oriented circle in the plane
- `lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number` · lemma — Formal immersions of the circle in the plane are classified by the winding number
- `lem-regular-homotopy-preserves-the-formal-gauss-class` · lemma — Regular homotopy preserves the formal Gauss class
- `thm-whitney-graustein-classification-of-plane-circle-immersions` · theorem — Whitney–Graustein classification of plane circle immersions
- `thm-smale-classification-of-sphere-immersions-in-euclidean-space` · theorem — Smale classification of sphere immersions in Euclidean space
- `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three` · lemma — Standard and reflected two-sphere immersions have homotopic formal data in $\mathbb R^3$
- `thm-sphere-eversion` · theorem — Sphere eversion
- `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` · remark — Sphere eversion cannot be an isotopy through embeddings
- `rem-regular-homotopy-allows-self-intersections-but-never-rank-drop` · remark — Regular homotopy allows self-intersections but never a rank drop
- `rem-sphere-immersion-groups-are-at-computations-not-dt-constructions` · remark — Sphere immersion groups are AT computations, not DT constructions

### `regular-homotopy-and-sphere-eversion-examples` — Regular Homotopy and Sphere Eversion — Examples (5 item(s))

- `ex-plane-circle-immersions-of-rotation-number-k` · example — Plane circle immersions of rotation number $k$
- `cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions` · counterexample — The figure eight and the round circle are not regularly homotopic as oriented immersions
- `ex-formal-frame-homotopy-behind-sphere-eversion` · example — Formal frame homotopy behind sphere eversion
- `cex-a-homotopy-through-maps-with-a-rank-drop-is-not-a-regular-homotopy` · counterexample — A homotopy through maps with a rank drop is not a regular homotopy
- `ex-a-boy-surface-immersion-of-real-projective-two-space` · example — A Boy surface immersion of real projective two-space

### `characteristic-numbers-and-cobordism-obstructions` — Characteristic Numbers and Cobordism Obstructions (17 item(s))

- `lem-kronecker-pairing-is-multiplicative-under-cross-products` · lemma — The Kronecker pairing is multiplicative under cross products
- `lem-fundamental-class-of-a-product-of-closed-manifolds` · lemma — The fundamental class of a product is the cross product of the fundamental classes
- `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas` · lemma — Characteristic numbers of products satisfy the Whitney-sum and Kunneth product formulas
- `thm-characteristic-numbers-are-cobordism-invariants` · theorem — Characteristic numbers are cobordism invariants
- `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds` · corollary — All characteristic numbers vanish on null-cobordant manifolds
- `lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum` · lemma — The collapse of an embedded manifold classifies through the universal Thom prespectrum
- `lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse` · lemma — Every bordism class is realized by an embedded collapse
- `thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism` · theorem — The universal Pontryagin-Thom correspondence for unoriented and oriented bordism
- `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem` · lemma — Pontryagin-Thom converts bordism detection to a Thom-space homotopy problem
- `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` · theorem — Thom's theorem: Stiefel-Whitney numbers detect unoriented bordism
- `rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion` · remark — Pontryagin numbers do not detect integral oriented bordism torsion
- `lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes` · lemma — The tangent bundle of complex projective space and its Pontryagin classes
- `lem-projective-space-products-have-triangular-characteristic-number-matrix` · lemma — Products of complex projective spaces have an invertible Pontryagin-number matrix
- `lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism` · lemma — Products of complex projective spaces are linearly independent in rational oriented bordism
- `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` · proposition — Products of complex projective spaces span rational oriented bordism
- `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers` · theorem — Rational oriented bordism is detected by Pontryagin numbers
- `rem-characteristic-class-constructions-and-normalizations-are-at-owned` · remark — Characteristic-class constructions and normalizations are owned by algebraic topology

### `characteristic-numbers-and-cobordism-obstructions-examples` — Characteristic Numbers and Cobordism Obstructions — Examples (4 item(s))

- `ex-stiefel-whitney-number-of-real-projective-space` · example — Stiefel-Whitney numbers of real projective space
- `ex-pontryagin-numbers-of-complex-projective-two-space` · example — Pontryagin numbers of the complex projective plane
- `ex-characteristic-numbers-of-a-product` · example — Characteristic numbers of a product of projective planes
- `ex-orientation-reversal-negates-pontryagin-numbers` · example — Orientation reversal negates Pontryagin numbers

## Your seams

Your pages depend on another group's:

- `regular-homotopy-and-sphere-eversion` requires `formal-immersions-and-the-smale-hirsch-theorem` (group j, batch 17)
- `characteristic-numbers-and-cobordism-obstructions` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `characteristic-numbers-and-cobordism-obstructions` requires `pontryagin-thom-and-framed-cobordism` (group i, batch 9)

Another group's pages depend on yours:

- `the-hirzebruch-signature-theorem` (group g) requires your `characteristic-numbers-and-cobordism-obstructions`
- `isotopy-extension-and-embedding-theory-beyond-whitney` (group g) requires your `regular-homotopy-and-sphere-eversion`
- `isotopy-extension-and-embedding-theory-beyond-whitney-examples` (group g) requires your `regular-homotopy-and-sphere-eversion`
- `characteristic-class-obstructions-to-immersions-and-embeddings` (group g) requires your `characteristic-numbers-and-cobordism-obstructions`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-41-ha-dt-29`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
