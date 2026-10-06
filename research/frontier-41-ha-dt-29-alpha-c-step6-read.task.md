# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **22**, **25**, **26**: 3 A/B pair(s), 6 page(s), 85 item(s).

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
| 22 | `reeb-stability-and-global-foliation-constructions` | A | differential-topology | 575 | `foliation-holonomy-and-the-holonomy-groupoid`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `manifolds-with-boundary-collars-and-orientations`, `covering-spaces-and-lifting`, `the-fundamental-group`, `singular-cohomology-and-coefficient-theorems`, `fixed-point-index-and-the-lefschetz-theorem`, `topology-of-r`, `compactness`, `topological-spaces-and-continuity` |
| 22 | `reeb-stability-and-global-foliation-constructions-examples` | B | differential-topology | 576 | `reeb-stability-and-global-foliation-constructions` |
| 25 | `eilenberg-watts-theorem-and-natural-transformations` | A | homological-algebra | 919 | `tensor-products-of-modules`, `free-modules-and-exact-sequences`, `abelian-categories`, `limits-and-colimits`, `adjunctions-units-and-counits`, `tor-flatness-and-global-dimension` |
| 25 | `eilenberg-watts-theorem-and-natural-transformations-examples` | B | homological-algebra | 920 | `eilenberg-watts-theorem-and-natural-transformations` |
| 26 | `morita-bicategories-and-projective-generators` | A | homological-algebra | 921 | `eilenberg-watts-theorem-and-natural-transformations`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `monoidal-categories-and-monoidal-functors`, `noetherian-rings-and-hilbert-basis` |
| 26 | `morita-bicategories-and-projective-generators-examples` | B | homological-algebra | 922 | `morita-bicategories-and-projective-generators` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `reeb-stability-and-global-foliation-constructions` — Reeb Stability and Global Foliation Constructions (44 item(s))

- `def-c1-germ-of-a-local-diffeomorphism-at-a-point` · definition — C¹ germs of local diffeomorphisms at a point
- `def-c1-regular-codimension-one-foliation-and-transverse-orientation` · definition — C¹ codimension-one regular foliations and transverse orientation
- `def-countable-choice-principle-for-foliation-pair` · definition — The countable-choice principle used in the foliation pair
- `def-saturated-neighbourhood-of-a-leaf` · definition — Saturated neighbourhoods of a leaf
- `lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite` · lemma — Images of finitely generated and of finite groups are finitely generated and finite
- `def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary` · definition — Smooth foliations tangent to the boundary
- `def-stable-leaf-of-a-foliation` · definition — Stable leaves
- `def-transversely-oriented-codimension-one-foliation` · definition — Transversely oriented codimension-one foliations
- `lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle` · lemma — A nonempty compact connected one-dimensional manifold without boundary is a circle
- `lem-axiom-of-choice-implies-countable-choice` · lemma — The Axiom of Choice implies countable choice
- `lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation` · lemma — C¹ foliation charts preserve plaque equivalence and transverse orientation
- `lem-c1-germs-of-local-diffeomorphisms-form-a-group` · lemma — C¹ germs of local diffeomorphisms form a group
- `lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface` · lemma — A compact C¹ foliation leaf is an embedded hypersurface
- `lem-countable-choice-sequence-and-product-formulations-are-equivalent` · lemma — Countable choice is equivalent to nonempty countable products
- `lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism` · lemma — Gluing manifolds with boundary along a boundary diffeomorphism
- `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex` · lemma — A closed smooth manifold has the homotopy type of a finite CW complex
- `lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal` · lemma — A non-closed leaf of a codimension-one foliation meets a closed transversal
- `lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs` · lemma — Holonomy of a C¹ foliation is a representation into C¹ transverse germs
- `lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free` · lemma — Germs of orientation-preserving diffeomorphisms of the line at zero are torsion-free
- `lem-oriented-intersection-detects-nonvanishing-rational-homology` · lemma — A co-oriented closed transversal detects nonvanishing rational homology of a compact leaf
- `prop-mapping-torus-foliations-realize-global-reeb-stable-examples` · proposition — Mapping torus foliations realize global Reeb stable examples
- `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf` · proposition — The Reeb foliation of the solid torus has the boundary as a leaf
- `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form` · remark — Transverse orientability is load-bearing in the global codimension-one form
- `thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable` · theorem — Thurston stability: finitely generated groups of C¹ interval germs are locally indicable
- `lem-compact-c1-leaf-has-finitely-generated-fundamental-group` · lemma — A compact C¹ leaf has finitely generated fundamental group
- `lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional` · lemma — The rational homology of a closed smooth manifold is finite-dimensional in each degree
- `lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood` · lemma — Trivial C¹ holonomy gives a saturated product neighbourhood
- `prop-gluing-two-reeb-components-gives-a-foliation-of-s-three` · proposition — Gluing two Reeb components gives a foliation of the three-sphere
- `thm-reeb-thurston-stability-for-codimension-one-leaves` · theorem — Reeb-Thurston stability for codimension-one leaves with vanishing first real cohomology
- `lem-finite-holonomy-acts-on-a-small-transverse-disk` · lemma — Finite holonomy acts on a small transverse disk
- `lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group` · lemma — The deck group of the holonomy cover is the holonomy group
- `def-finite-holonomy-normal-model` · definition — The finite-holonomy normal model of a compact leaf
- `lem-transverse-holonomy-transport-is-well-defined-and-equivariant` · lemma — Transverse holonomy transport is well defined and equivariant on the model
- `lem-the-normal-model-map-is-a-foliated-local-diffeomorphism` · lemma — The normal model map is a foliated local diffeomorphism
- `lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood` · lemma — The normal model map restricts to a diffeomorphism onto a saturated neighbourhood
- `thm-local-reeb-stability` · theorem — Local Reeb stability for compact leaves with finite holonomy
- `cor-trivial-holonomy-gives-a-product-foliated-neighbourhood` · corollary — Trivial holonomy gives a product foliated neighbourhood
- `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis` · corollary — Finiteness of the fundamental group is sufficient, but not necessary, for Reeb stability
- `lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented` · lemma — In a transversely oriented codimension-one foliation a compact leaf with finite fundamental group has trivial holonomy
- `lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space` · lemma — A compact holonomy-free codimension-one foliation is fibered over its leaf space
- `lem-compact-stable-leaves-form-an-open-saturated-set` · lemma — Compact stable leaves form an open saturated set
- `rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group` · remark — A compact leaf neither has finite holonomy nor finite fundamental group automatically
- `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness` · lemma — Closedness of the set of compact leaves in a transversely oriented codimension-one foliation
- `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations` · theorem — Global Reeb stability for transversely oriented codimension-one foliations

### `reeb-stability-and-global-foliation-constructions-examples` — Reeb Stability and Global Foliation Constructions — Examples (5 item(s))

- `ex-a-fibration-over-the-circle-as-a-global-stable-foliation` · example — A fibration over the circle as a globally stable foliation
- `ex-finite-holonomy-mobius-normal-model` · example — The finite-holonomy normal model of the Möbius band
- `cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour` · counterexample — A Reeb component has a compact boundary leaf with infinite holonomy
- `ex-product-foliation-near-a-compact-trivial-holonomy-leaf` · example — The product foliation near a compact leaf with trivial holonomy
- `cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy` · counterexample — A compact leaf with infinite fundamental group can still have trivial holonomy

### `eilenberg-watts-theorem-and-natural-transformations` — Eilenberg–Watts Theorem and Natural Transformations (13 item(s))

- `def-additive-cocontinuous-module-functor` · definition — Additive cocontinuous module functors and their category
- `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums` · lemma — The functor $M\otimes_A-$ is additive, right exact, and preserves direct sums over an arbitrary unital ring
- `lem-evaluation-on-the-regular-module-has-a-commuting-right-action` · lemma — $F(A)$ is a $(B,A)$-bimodule for every additive functor $F$
- `lem-tensor-hom-adjunction-for-bimodules` · lemma — Tensor-Hom adjunction for bimodules over arbitrary unital rings
- `lem-additive-cocontinuous-module-functors-form-a-category` · lemma — Additive cocontinuous module functors form a locally small category
- `lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` · lemma — Cocontinuity of an additive module functor equals right exactness plus coproduct preservation
- `lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural` · lemma — The canonical comparison to the tensor functor of $F(A)$ is balanced and natural
- `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` · lemma — Canonical free presentations force the comparison to be an isomorphism
- `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` · theorem — Natural transformations between tensor functors are bimodule maps
- `thm-eilenberg-watts-for-arbitrary-unital-rings` · theorem — Eilenberg-Watts theorem for arbitrary unital rings
- `cor-eilenberg-watts-is-an-equivalence-of-hom-categories` · corollary — Eilenberg-Watts is an equivalence of Hom categories
- `cor-cocontinuous-additive-module-functors-admit-right-adjoints` · corollary — Additive cocontinuous module functors admit right adjoints
- `cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules` · corollary — Exact module tensor functors correspond to right-flat bimodules

### `eilenberg-watts-theorem-and-natural-transformations-examples` — Eilenberg–Watts Theorem and Natural Transformations — Examples (4 item(s))

- `ex-natural-transformations-between-tensor-composites` · example — Natural transformations between tensor composites are governed by bimodule maps
- `ex-eilenberg-watts-recovers-extension-of-scalars` · example — Eilenberg-Watts recovers extension of scalars
- `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor` · counterexample — A right exact module functor without coproduct preservation is not tensor
- `cex-coproduct-preserving-left-exact-module-functor-is-not-tensor` · counterexample — A coproduct-preserving left exact module functor is not tensor

### `morita-bicategories-and-projective-generators` — Morita Bicategories and Projective Generators (16 item(s))

- `def-bicategory-pseudofunctor-and-biequivalence` · definition — Bicategories, pseudofunctors, and biequivalences
- `def-center-of-a-ring` · definition — The center of a ring
- `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` · lemma — Endomorphisms of an object of a preadditive category form a ring
- `def-small-projective-generator-and-progenerator` · definition — Small projective generators and progenerators
- `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` · lemma — The dual-basis isomorphism for a finitely generated projective bimodule
- `def-morita-bicategory-of-rings-and-bimodules` · definition — The Morita bicategory of rings and bimodules
- `lem-small-projective-modules-are-exactly-finitely-generated-projective-modules` · lemma — Small projective modules are exactly finitely generated projective modules; the progenerator identification
- `lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful` · lemma — The Hom functor of a small projective generator is exact, coproduct-preserving, and faithful
- `lem-equivalences-preserve-progenerators` · lemma — Equivalences preserve small projective generators
- `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` · lemma — The Morita data satisfy the bicategory coherence axioms
- `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom` · lemma — The copower presentation construction is left adjoint to the generator Hom functor
- `thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category` · theorem — Module reconstruction from a small projective generator with supplied copowers and cokernels
- `lem-tensoring-defines-a-pseudofunctor-with-interchange` · lemma — Tensoring defines a schematic pseudofunctor with interchange
- `thm-eilenberg-watts-biequivalence-for-module-categories` · theorem — Eilenberg-Watts schematic biequivalence between the Morita bicategory and module categories
- `thm-morita-equivalence-is-invertibility-of-a-bimodule` · theorem — Morita equivalence is invertibility of a bimodule
- `cor-center-is-morita-invariant-via-natural-endomorphisms` · corollary — The center is Morita invariant, via natural endomorphisms of the identity

### `morita-bicategories-and-projective-generators-examples` — Morita Bicategories and Projective Generators — Examples (3 item(s))

- `ex-matrix-ring-morita-pair-with-explicit-tensor-inverses` · example — The matrix-ring Morita pair with explicit tensor inverses
- `cex-a-projective-generator-need-not-be-small` · counterexample — A projective generator need not be small
- `ex-central-elements-as-natural-endomorphisms-of-the-identity` · example — Central elements as natural endomorphisms of the identity

## Your seams

Your pages depend on another group's:

- `reeb-stability-and-global-foliation-constructions` requires `foliation-holonomy-and-the-holonomy-groupoid` (group i, batch 21)
- `reeb-stability-and-global-foliation-constructions` requires `fixed-point-index-and-the-lefschetz-theorem` (group e, batch 8)

Another group's pages depend on yours:

- `codimension-one-foliations-and-secondary-classes` (group a) requires your `reeb-stability-and-global-foliation-constructions`
- `finite-abelian-categories-and-eilenberg-watts` (group a) requires your `morita-bicategories-and-projective-generators`
- `graded-eilenberg-watts-and-shift-coherence` (group a) requires your `eilenberg-watts-theorem-and-natural-transformations`
- `graded-eilenberg-watts-and-shift-coherence` (group a) requires your `morita-bicategories-and-projective-generators`
- `vanishing-cycles-novikov-and-taut-foliations` (group k) requires your `reeb-stability-and-global-foliation-constructions`

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
