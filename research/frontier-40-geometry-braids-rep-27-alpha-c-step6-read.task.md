# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **3**, **9**, **22**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 3 | `mackeys-imprimitivity-theorem` | A | representation-theory | 510.077 | `unitary-representations-positive-type-and-gns`, `induced-unitary-representations-of-locally-compact-groups`, `spectral-measures-and-borel-functional-calculus`, `measurable-hilbert-fields-and-direct-integral-operators`, `character-groups-and-elementary-lca-duals` |
| 3 | `mackeys-imprimitivity-theorem-examples` | B | representation-theory | 510.078 | `mackeys-imprimitivity-theorem`, `unbounded-self-adjoint-operators-and-stones-theorem`, `induced-representations-and-frobenius-reciprocity`, `character-groups-and-elementary-lca-duals` |
| 9 | `rouquier-complexes-and-categorical-braid-relations` | A | braid-groups | 761 | `type-a-soergel-bimodules-and-hecke-categorification`, `graded-quiver-algebras-and-derived-tensor-functors`, `categorical-braid-actions-and-decategorification`, `derived-categories`, `bounded-bimodule-complexes-and-derived-tensor` |
| 9 | `rouquier-complexes-and-categorical-braid-relations-examples` | B | braid-groups | 762 | `rouquier-complexes-and-categorical-braid-relations` |
| 22 | `chow-groups-intersection-products-and-grothendieck-riemann-roch` | A | algebraic-geometry | 899 | `plane-curves-local-intersection-multiplicity-and-bezout`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `intersection-products-on-smooth-projective-surfaces`, `grothendieck-groups-and-graded-cartan-pairings`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 22 | `chow-groups-intersection-products-and-grothendieck-riemann-roch-examples` | B | algebraic-geometry | 900 | `chow-groups-intersection-products-and-grothendieck-riemann-roch` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `mackeys-imprimitivity-theorem` — Mackeys Imprimitivity Theorem (27 item(s))

- `def-system-of-imprimitivity` · definition — Systems of imprimitivity for a Borel $G$-space
- `def-transformation-algebra-of-a-g-space` · definition — The transformation (covariance) algebra $C_c(G\times X)$
- `lem-characters-of-l1-of-an-abelian-lch-group` · lemma — Characters of the L1 algebra of an abelian group
- `lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms` · lemma — Direct integrals transport along bimeasurable base isomorphisms
- `lem-nondegenerate-czero-representations-have-regular-pvms` · lemma — Nondegenerate representations of C0 have regular PVMs
- `lem-second-countable-lch-spaces-are-standard-borel` · lemma — Second-countable locally compact Hausdorff spaces are Polish, and homogeneous quotients are standard Borel
- `lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups` · lemma — Steinhaus and Pettis: Borel homomorphisms of second-countable locally compact groups are continuous
- `lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base` · lemma — Unitary intertwiners preserve fibre multiplicity over a standard Borel base
- `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra` · lemma — A system of imprimitivity integrates to a nondegenerate representation of the transformation algebra
- `lem-borel-cross-sections-for-closed-subgroups` · lemma — Borel cross-sections for closed subgroups of second-countable groups
- `lem-lca-fourier-transforms-form-a-dense-czero-algebra` · lemma — LCA Fourier transforms form a dense algebra in C0 of the dual
- `lem-pvm-multiplicity-model-over-a-standard-borel-space` · lemma — Multiplicity model of a projection-valued measure over a standard Borel base
- `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit` · lemma — Ergodic systems with regular orbits concentrate on one orbit
- `lem-haar-lifts-and-borel-descent-on-a-homogeneous-space` · lemma — Haar null classes and Borel descent on a homogeneous space
- `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group` · lemma — Spectral measure of a unitary representation of an abelian group, covariance, and ergodicity
- `def-transitive-system-of-imprimitivity` · definition — Transitive systems of imprimitivity and their normalized measure class
- `lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic` · lemma — A transitive Borel $G$-space with a quasi-invariant measure class is ergodic
- `lem-haar-regularization-of-transitive-unitary-cocycles` · lemma — Haar regularization of transitive unitary cocycles
- `def-unitary-equivalence-of-systems-of-imprimitivity` · definition — Unitary equivalence of systems of imprimitivity and of the induced representations
- `lem-induced-representations-carry-a-canonical-system-of-imprimitivity` · lemma — An induced representation carries a canonical system of imprimitivity on $G/H$
- `lem-spectral-measure-multiplicity-model-for-a-transitive-system` · lemma — Spectral multiplicity model of a transitive system of imprimitivity
- `lem-borel-cocycle-fields-for-imprimitivity-systems` · lemma — Measurable cocycle fields for a multiplicity-normalized system
- `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary` · lemma — The stabilizer acts unitarily on an imprimitivity fibre
- `lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining` · lemma — The imprimitivity reconstruction map is isometric and intertwining
- `thm-mackey-imprimitivity-theorem` · theorem — Mackey's imprimitivity theorem
- `thm-uniqueness-in-mackey-imprimitivity` · theorem — Uniqueness in the imprimitivity theorem
- `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup` · corollary — Mackey little-group reduction for an abelian normal subgroup

### `mackeys-imprimitivity-theorem-examples` — Mackeys Imprimitivity Theorem — Examples (4 item(s))

- `cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` · counterexample — A nontransitive system with two orbits is not classified by one stabilizer
- `ex-the-regular-position-momentum-imprimitivity-system` · example — The regular translation system on $L^2(\mathbb R^n)$: position, momentum and trivial stabilizer
- `ex-imprimitivity-for-a-finite-transitive-g-set` · example — Finite transitive $G$-sets recover the stabilizer-induction classification
- `ex-little-groups-for-the-real-ax-plus-b-group` · example — Little groups for the real $ax+b$ group and its orientation-preserving subgroup

### `rouquier-complexes-and-categorical-braid-relations` — Rouquier Complexes and Categorical Braid Relations (15 item(s))

- `def-positive-and-negative-rouquier-generator-complexes` · definition — The positive and negative Rouquier generator complexes
- `lem-opposite-rouquier-generator-complexes-are-homotopy-inverse` · lemma — Opposite Rouquier generator complexes are homotopy inverse
- `lem-rouquier-complexes-satisfy-far-commutativity` · lemma — Rouquier complexes satisfy far commutativity
- `lem-rouquier-complexes-satisfy-the-three-term-braid-relation` · lemma — Rouquier complexes satisfy the three-term braid relation
- `def-rouquier-complex-of-a-braid-word` · definition — The Rouquier complex of a braid word
- `def-coherent-action-of-a-group-on-a-category` · definition — Coherent action of a group on a category
- `def-rouquier-canonical-comparisons-between-standard-graph-tensors` · definition — Canonical comparisons between standard graph tensor products
- `lem-rouquier-generator-complexes-have-canonical-derived-graph-models` · lemma — Rouquier generator complexes have canonical derived graph models
- `lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps` · lemma — Derived comparisons give unique normalized homotopy maps
- `lem-rouquier-normalized-comparison-isomorphisms-are-transitive` · lemma — Normalized comparison isomorphisms are transitive
- `thm-rouquier-complexes-form-a-coherent-braid-group-action` · theorem — Rouquier complexes form a coherent braid group action
- `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence` · theorem — The Rouquier complex is well defined up to canonical homotopy equivalence
- `thm-rouquiers-two-braid-category-is-strict-rigid-monoidal` · theorem — The two-braid category is strict rigid monoidal
- `lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative` · lemma — Euler classes of Rouquier complexes are homotopy invariant and multiplicative
- `prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator` · proposition — Decategorification of a Rouquier complex is the Hecke braid generator

### `rouquier-complexes-and-categorical-braid-relations-examples` — Rouquier Complexes and Categorical Braid Relations — Examples (4 item(s))

- `ex-the-rouquier-complex-of-a-positive-three-strand-braid` · example — The Rouquier complex of a positive three-strand braid
- `ex-the-three-term-rouquier-braid-equivalence-in-type-a-two` · example — The three-term Rouquier braid equivalence in type A2
- `ex-normalized-comparison-maps-around-a-relation-loop` · example — Normalized comparison maps around a relation loop
- `cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes` · counterexample — Equal Euler classes do not by themselves prove homotopy-equivalent complexes

### `chow-groups-intersection-products-and-grothendieck-riemann-roch` — Chow Groups, Intersection Products, and Grothendieck-Riemann-Roch (38 item(s))

- `def-algebraic-cycle-and-cycle-group` · definition — Algebraic cycles and the cycle group of a scheme of finite type over a field
- `lem-order-function-one-dimensional-local-domain` · lemma — The order function of a one-dimensional Noetherian local domain
- `def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme` · definition — Grothendieck groups of coherent sheaves and of vector bundles on a scheme
- `lem-smooth-immersion-normal-sequence-and-deformation-charts` · lemma — Smooth immersions have regular equations, normal exact sequences and smooth deformation charts
- `def-chow-group-of-cycles-mod-rational-equivalence` · definition — Rational equivalence and the Chow group of cycles
- `lem-cycle-of-a-closed-subscheme` · lemma — The cycle associated to a closed subscheme and to a coherent sheaf
- `lem-k-zero-vector-bundles-versus-coherent-sheaves` · lemma — Vector bundles and coherent sheaves generate the same K-classes on a regular scheme
- `def-pushforward-in-algebraic-k-theory` · definition — Pushforward in algebraic K-theory of coherent sheaves
- `lem-proper-pushforward-of-cycles-well-defined` · lemma — Proper pushforward of cycles is well defined on Chow groups
- `lem-projection-formula-in-algebraic-k-theory` · lemma — Projection formula in algebraic K-theory
- `lem-k-theory-of-projective-space-and-projections` · lemma — K-theory of projective space and surjectivity for projections
- `lem-flat-pullback-chow-groups` · lemma — Flat pullback of cycles is well defined on Chow groups
- `lem-two-dimensional-tame-symbol-reciprocity` · lemma — Two-dimensional tame-symbol reciprocity and divisor commutation
- `lem-pushforward-pullback-compatibility-chow` · lemma — Proper pushforward and flat pullback commute in a fibre square
- `def-intersection-with-a-cartier-divisor-and-first-chern-class` · definition — Intersection with an invertible sheaf and the first Chern class
- `lem-chow-localization-and-vector-bundle-homotopy` · lemma — Localization and homotopy invariance for Chow groups
- `lem-chow-groups-of-projective-space` · lemma — Chow groups of projective space by cellular decomposition
- `def-deformation-to-the-normal-cone-and-specialization` · definition — Deformation to the normal cone and specialization
- `thm-projective-bundle-formula-for-chow-groups` · theorem — The projective bundle formula for Chow groups
- `def-bivariant-chow-operations` · definition — Bivariant Chow operations
- `lem-operational-chern-classes-and-whitney-formula` · lemma — Operational Chern classes, Whitney formula and regular sections
- `lem-vector-bundle-chow-homotopy-invariance` · lemma — Homotopy invariance for a vector bundle
- `lem-koszul-resolution-and-flat-fibre-restriction` · lemma — Koszul resolutions and restriction to deformation fibres
- `lem-zero-section-gysin-and-excess-vector-subbundle` · lemma — Zero-section Gysin and the excess vector subbundle formula
- `lem-relative-projective-bundle-k-theory-generators` · lemma — K-theory generators for a relative projective bundle
- `lem-gysin-specialization-bivariant-and-base-change` · lemma — Specialization as a bivariant operation and base change
- `lem-refined-gysin-commutation-and-composition` · lemma — Commutation and composition of refined Gysin operations
- `def-refined-gysin-pullback-for-regular-embeddings` · definition — Refined Gysin pullback for a regular embedding of smooth schemes
- `thm-intersection-product-and-chow-ring-of-a-smooth-scheme` · theorem — The intersection product and Chow ring of a smooth scheme
- `lem-chow-ring-naturality-and-projection-formula` · lemma — Naturality and projection formula for the Chow ring
- `def-chern-classes-of-a-vector-bundle` · definition — Chern classes of a vector bundle in the Chow ring
- `lem-chern-class-naturality-additivity-and-splitting` · lemma — Additivity, naturality and the splitting principle for Chern classes
- `def-chern-character-and-todd-class` · definition — Chern character and Todd class
- `lem-chern-character-and-todd-class-multiplicativity` · lemma — Additivity of the Chern character and multiplicativity of the Todd class
- `thm-rr-for-projective-space-projections` · theorem — Riemann-Roch for projections from projective space
- `thm-rr-for-regular-embeddings` · theorem — Riemann-Roch for a closed embedding of smooth varieties
- `thm-grothendieck-riemann-roch-for-projective-morphisms` · theorem — Grothendieck-Riemann-Roch for projective morphisms
- `rem-chow-ring-and-grr-conventions` · remark — Conventions, hypotheses and scope of the Chow and Grothendieck-Riemann-Roch development

### `chow-groups-intersection-products-and-grothendieck-riemann-roch-examples` — Chow Groups, Intersection Products, and Grothendieck-Riemann-Roch — Examples (2 item(s))

- `cex-arbitrary-pullback-does-not-define-a-chow-operation` · counterexample — Scheme-theoretic preimages do not define a pullback on Chow groups
- `ex-chow-ring-of-projective-space` · example — The Chow ring of projective space

## Your seams

Your pages depend on another group's:

- `rouquier-complexes-and-categorical-braid-relations` requires `categorical-braid-actions-and-decategorification` (group f, batch 8)
- `chow-groups-intersection-products-and-grothendieck-riemann-roch` requires `plane-curves-local-intersection-multiplicity-and-bezout` (group a, batch 1)

Another group's pages depend on yours:

- `matrix-factorizations-and-khovanov-rozansky-link-homology` (group d) requires your `rouquier-complexes-and-categorical-braid-relations`
- `hochschild-homology-and-triply-graded-link-homology` (group f) requires your `rouquier-complexes-and-categorical-braid-relations`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-40-geometry-braids-rep-27`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
