# Step 6 Alpha group reader — read-only digest — group **e**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **23**, **24**, **26**: 3 A/B pair(s), 6 page(s), 93 item(s).

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
| 23 | `classical-complex-algebraic-actions-and-affine-embeddings` | A | algebraic-geometry | 879 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`, `dimension-constructible-images-and-dimensions-of-fibres` |
| 23 | `classical-complex-algebraic-actions-and-affine-embeddings-examples` | B | algebraic-geometry | 880 | `classical-complex-algebraic-actions-and-affine-embeddings` |
| 24 | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` | A | algebraic-geometry | 885 | `group-schemes-of-finite-type-over-a-field`, `finite-proper-and-projective-morphisms`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `riemann-surfaces-branched-maps-and-differentials`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `smooth-proper-curves-divisors-genus-and-ramification`, `normalization-finiteness-for-affine-domains`, `cartier-and-weil-divisors-line-bundles-and-picard-groups` |
| 24 | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties-examples` | B | algebraic-geometry | 886 | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `elliptic-functions-and-complex-tori` |
| 26 | `intersection-products-on-smooth-projective-surfaces` | A | algebraic-geometry | 895 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `blowups-exceptional-divisors-and-strict-transforms` |
| 26 | `intersection-products-on-smooth-projective-surfaces-examples` | B | algebraic-geometry | 896 | `intersection-products-on-smooth-projective-surfaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `classical-complex-algebraic-actions-and-affine-embeddings` — Classical Complex Algebraic Actions and Affine Embeddings (7 item(s))

- `lem-classical-affine-algebraic-set-product-coordinate-ring` · lemma — Products of affine algebraic sets have tensor-product coordinate rings
- `def-rational-action-on-affine-variety` · definition — Classical complex affine algebraic actions and rational modules
- `prop-affine-algebraic-actions-coordinate-ring-coaction` · proposition — Affine actions correspond to coordinate-ring coactions
- `lem-complex-affine-group-comodule-local-finiteness` · lemma — Every affine-group comodule is a union of finite-dimensional rational submodules
- `thm-coordinate-ring-of-affine-action-is-locally-finite` · theorem — The coordinate ring of an affine algebraic action is a locally finite rational module
- `lem-torus-rational-modules-and-gradings` · lemma — Torus rational modules and affine actions are lattice gradings
- `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module` · theorem — Every complex affine algebraic action has a finite-dimensional equivariant closed embedding

### `classical-complex-algebraic-actions-and-affine-embeddings-examples` — Classical Complex Algebraic Actions and Affine Embeddings — Examples (3 item(s))

- `ex-torus-weights-and-affine-action` · example — Opposite weights on the affine plane and its coordinate ring
- `cex-abstract-group-action-is-not-algebraic-action` · counterexample — An abstract group action need not be an algebraic action
- `ex-additive-translation-equivariant-parabola-embedding` · example — The additive translation action embeds equivariantly as a parabola

### `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` — Nonaffine Algebraic Groups, Barsotti-Chevalley, and Abelian Varieties (69 item(s))

- `def-abelian-variety-over-a-field` · definition — Abelian varieties over a field
- `lem-proper-geometrically-integral-affine-scheme-is-point` · lemma — A proper geometrically integral affine scheme is a point
- `lem-nonaffine-holomorphic-rational-map-product-curves-algebraic` · lemma — A holomorphic extension of a rational map on a product of smooth complex curves is algebraic
- `lem-nonaffine-effective-affine-algebra-descent` · lemma — Faithfully flat descent of modules and affine algebras is effective
- `lem-nonaffine-fppf-descent-of-scheme-morphisms` · lemma — Scheme morphisms satisfy fppf descent
- `lem-nonaffine-affine-and-finite-morphism-fppf-descent` · lemma — Affineness and finiteness of morphisms descend under fppf base change
- `lem-nonaffine-affine-group-faithful-representation` · lemma — Affine group schemes have faithful finite-dimensional representations
- `lem-nonaffine-affine-nilpotent-thickening` · lemma — A nilpotent thickening of an affine scheme is affine
- `lem-nonaffine-flat-hypersurface-slice` · lemma — Fibre-regular hypersurface cuts preserve flatness and produce finite image slices
- `lem-nonaffine-generic-quasisection-flat-groupoid` · lemma — A flat finite-type equivalence relation has generic saturated quasi-sections
- `thm-nonaffine-finite-flat-affine-equivalence-quotient` · theorem — Finite locally free affine equivalence relations have finite locally free scheme quotients
- `lem-nonaffine-finite-relation-saturated-affine-neighbourhood` · lemma — Finite equivalence relations have saturated affine neighbourhoods around affine-contained orbits
- `thm-nonaffine-finite-relation-quotient-with-affine-orbits` · theorem — Finite locally free equivalence quotients exist when orbits lie in affine opens
- `thm-nonaffine-groupoid-quotient-from-quasisection` · theorem — A flat equivalence relation with a suitable quasi-section has a scheme quotient
- `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation` · theorem — A flat finite-type equivalence relation has a generic scheme quotient
- `lem-nonaffine-finite-field-descent-scheme-with-affine-orbits` · lemma — Finite field descent is effective for schemes with affine-contained descent orbits
- `thm-nonaffine-group-scheme-normal-subgroup-quotient` · theorem — Normal subgroup quotients of finite-type group schemes exist as fppf scheme quotients
- `lem-nonaffine-global-sections-flat-field-base-change` · lemma — Global sections commute with extension of scalars over a field
- `lem-nonaffine-group-monomorphism-closed-immersion` · lemma — Finite-type algebraic group monomorphisms are closed immersions
- `lem-nonaffine-connected-group-geometrically-connected` · lemma — Connected finite-type groups are geometrically connected
- `lem-nonaffine-subgroup-scheme-stabilizer-of-line` · lemma — Every subgroup scheme of an affine group is a line stabilizer
- `lem-nonaffine-high-frobenius-smooth-image` · lemma — High relative Frobenius has smooth scheme-theoretic image
- `lem-nonaffine-normal-subgroup-inverse-multiple-character` · lemma — A character of a normal subgroup admits an inverse multiple in a group representation
- `lem-nonaffine-normal-subgroup-kernel-of-representation` · lemma — Every normal subgroup of an affine group is a representation kernel
- `thm-nonaffine-affine-normal-group-quotient-affine` · theorem — Quotients of affine group schemes by normal subgroup schemes are affine
- `lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties` · lemma — Affine smooth and connected properties in exact sequences of algebraic groups
- `lem-nonaffine-group-image-exact-quotient-properties` · lemma — Group images are exact kernel quotients and preserve affine smooth connected properties
- `lem-nonaffine-affine-normal-subgroup-products` · lemma — Products of smooth connected affine normal subgroups are in the same class
- `lem-nonaffine-ample-finite-type-projective-immersion` · lemma — An ample line bundle on a finite-type scheme gives a projective immersion
- `lem-nonaffine-ample-line-bundle-field-descent` · lemma — Ampleness of a given line bundle descends under field extension
- `lem-nonaffine-antiaffine-factor-rigidity` · lemma — Rigidity for an integral factor with only constant functions
- `lem-nonaffine-faithful-fixed-point-jet-representation` · lemma — A scheme-faithful action fixing a point has a faithful finite jet representation
- `lem-nonaffine-centre-is-stable-jet-kernel` · lemma — The centre is the stable kernel of conjugation on local jets
- `lem-nonaffine-characteristic-zero-group-smooth` · lemma — Every finite-type characteristic-zero group scheme is smooth
- `lem-nonempty-smooth-scheme-finite-separable-point` · lemma — A nonempty smooth scheme has a finite separable point
- `lem-nonaffine-finite-galois-descent-of-morphisms` · lemma — Finite Galois descent of morphisms of schemes
- `lem-nonaffine-commutative-torsor-norm-map` · lemma — Norm map for a commutative torsor with a separable point
- `lem-nonaffine-rational-map-normal-to-proper-codimension-two` · lemma — A rational map from a normal variety to a proper variety extends in codimension one
- `lem-nonaffine-divisorial-valuation-restriction-model` · lemma — A divisorial valuation restricts to a divisorial valuation or the trivial valuation
- `lem-nonaffine-finite-field-descent-of-morphisms` · lemma — Morphisms descend under a finite field extension with the full descent identity
- `lem-nonaffine-purely-inseparable-affine-proper-descent` · lemma — Affineness and properness descend under finite purely inseparable scalar extension
- `lem-nonaffine-frobenius-power-ideal-subgroup-descent` · lemma — Purely inseparable subgroup descent by Frobenius power ideals
- `lem-nonaffine-geometric-properness-field-descent` · lemma — Properness over a field can be checked after field extension
- `lem-nonaffine-regular-local-picard-principal-localization` · lemma — Line bundles on a principal localization of a regular local ring are trivial
- `thm-nonaffine-regular-local-ring-is-ufd` · theorem — Regular local rings are unique factorization domains
- `lem-nonaffine-group-target-rational-indeterminacy-divisors` · lemma — Indeterminacy of a rational map to a group is divisorial
- `lem-nonaffine-line-bundle-affine-space-parameter-constancy` · lemma — Line bundles over an affine-space parameter open come from the smooth factor
- `lem-nonaffine-rigidity-proper-geometrically-integral-factor` · lemma — Rigidity for a proper geometrically integral factor
- `prop-abelian-variety-commutativity-from-rigidity` · proposition — A proper geometrically connected group variety is commutative
- `lem-nonaffine-smooth-affine-open-cartier-boundary` · lemma — An affine open in a smooth integral variety has Cartier boundary
- `lem-nonaffine-smooth-connected-group-has-ample-line-bundle` · lemma — A smooth geometrically integral algebraic group has an ample line bundle
- `thm-abelian-variety-is-projective` · theorem — Every abelian variety over a field is projective
- `lem-nonaffine-theorem-of-the-cube-for-abelian-variety` · lemma — The theorem of the cube for an abelian variety
- `lem-nonaffine-multiplication-pullback-symmetric-line-bundle` · lemma — Multiplication pulls back a symmetric line bundle to its square power
- `lem-nonaffine-normal-completion-smooth-locus-antiaffine` · lemma — The smooth locus of a normal completion of a group has only constant functions
- `thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup` · theorem — Every algebraic group has a largest smooth connected affine normal subgroup
- `lem-nonaffine-pseudo-abelian-separable-field-extension` · lemma — Pseudo-abelian varieties under separable algebraic extension
- `lem-nonaffine-rational-action-composition-domain` · lemma — Composition at points in the domain of a rational group action
- `lem-nonaffine-rational-fixed-point-affineness` · lemma — A faithful rational action with a fixed point forces affineness
- `lem-nonaffine-reduced-neutral-subgroup-over-perfect-field` · lemma — Reduced identity components over perfect fields
- `prop-nonaffine-smooth-group-pseudo-abelian-quotient` · proposition — A smooth connected group has a unique affine-normal pseudo-abelian reduction
- `thm-nonaffine-rosenlicht-dichotomy` · theorem — Rosenlicht dichotomy for smooth connected algebraic groups
- `thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends` · theorem — Rational maps from smooth varieties to abelian varieties extend
- `thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism` · theorem — Pointed morphisms from smooth groups to abelian varieties are homomorphisms
- `thm-nonaffine-abelian-multiplication-finite-faithfully-flat` · theorem — Nonzero multiplication on an abelian variety is finite and faithfully flat
- `thm-nonaffine-rosenlicht-almost-complement` · theorem — Rosenlicht almost-complements to abelian subvarieties
- `thm-nonaffine-pseudo-abelian-perfect-field-is-complete` · theorem — Pseudo-abelian varieties over perfect fields are complete
- `thm-barsotti-chevalley-perfect-field-group-variety` · theorem — Barsotti-Chevalley over a perfect field: unique smooth affine normal subgroup
- `thm-barsotti-chevalley-existence-over-arbitrary-field` · theorem — Barsotti-Chevalley existence over an arbitrary field, allowing nonsmooth affine kernel

### `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties-examples` — Nonaffine Algebraic Groups, Barsotti-Chevalley, and Abelian Varieties — Examples (2 item(s))

- `ex-affine-extension-of-an-abelian-variety` · example — A split affine extension of an abelian variety
- `ex-elliptic-curve-as-nonaffine-algebraic-group` · example — A smooth Weierstrass elliptic cubic is a nonaffine algebraic group

### `intersection-products-on-smooth-projective-surfaces` — Intersection Products on Smooth Projective Surfaces (9 item(s))

- `def-degree-invertible-sheaf-proper-dimension-one` · definition — Degree of an invertible sheaf on a proper one-dimensional scheme
- `lem-euler-characteristic-finite-support-twist-invariance` · lemma — Euler characteristic of a closed point, and invariance under an invertible twist
- `lem-closed-immersion-projection-formula-invertible` · lemma — Projection formula for a closed immersion and an invertible sheaf
- `lem-euler-characteristic-twist-integral-proper-curve` · lemma — Twisting a coherent sheaf by an invertible sheaf on an integral proper curve
- `cor-degree-additive-proper-curve` · corollary — Degree is additive on invertible sheaves over a proper curve
- `def-divisor-intersection-number-on-smooth-projective-surface` · definition — Intersection numbers of Cartier divisors on a smooth projective surface
- `thm-surface-intersection-product-bilinear-and-symmetric` · theorem — The surface intersection product is symmetric and bilinear
- `thm-intersection-with-curve-as-degree-of-restriction` · theorem — Intersection with a curve is the degree of the restriction
- `lem-blowup-intersection-matrix-at-smooth-point` · lemma — The intersection matrix of a point blowup of a regular surface

### `intersection-products-on-smooth-projective-surfaces-examples` — Intersection Products on Smooth Projective Surfaces — Examples (3 item(s))

- `ex-intersection-pairing-on-p2` · example — The intersection pairing on the projective plane
- `ex-intersection-pairing-on-blowup-of-p2` · example — The intersection form of the blown-up projective plane
- `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` · counterexample — The intersection product needs Cartier or complementary-dimension hypotheses

## Your seams

Your pages depend on another group's:

- `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` requires `group-schemes-of-finite-type-over-a-field` (group a, batch 22)
- `intersection-products-on-smooth-projective-surfaces` requires `blowups-exceptional-divisors-and-strict-transforms` (group a, batch 2)

Another group's pages depend on yours:

- `point-blowup-resolution-on-arbitrary-regular-surfaces` (group i) requires your `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
