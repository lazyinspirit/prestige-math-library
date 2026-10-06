# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **15**, **21**, **26**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 15 | `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` | A | scheme-theory | 879 | `group-schemes-of-finite-type-over-a-field`, `affine-group-schemes-hopf-algebras-and-rational-representations`, `dimension-constructible-images-and-dimensions-of-fibres`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `flat-smooth-and-etale-morphisms`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness` |
| 15 | `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients-examples` | B | scheme-theory | 880 | `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `smooth-proper-curves-divisors-genus-and-ramification` |
| 21 | `surface-riemann-roch-and-the-hodge-index-theorem` | A | algebraic-geometry | 897 | `intersection-products-on-smooth-projective-surfaces`, `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 21 | `surface-riemann-roch-and-the-hodge-index-theorem-examples` | B | algebraic-geometry | 898 | `surface-riemann-roch-and-the-hodge-index-theorem`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` |
| 26 | `higher-dimensional-resolution-of-singularities` | A | algebraic-geometry | 915 | `birational-morphisms-contractions-and-surface-singularities`, `galois-orbits-and-descent-of-simple-finite-group-modules` |
| 26 | `higher-dimensional-resolution-of-singularities-examples` | B | algebraic-geometry | 916 | `higher-dimensional-resolution-of-singularities` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` — Algebraic Group Actions, Orbits, Stabilizers, and Controlled Quotients (11 item(s))

- `def-quotient-sheaf-and-representable-quotient` · definition — Quotient sheaves and representable quotients for pre-relations and group actions
- `def-algebraic-group-action-and-scheme-theoretic-stabilizer` · definition — Algebraic group actions, orbit maps, orbit subschemes and scheme-theoretic stabilizers
- `lem-fppf-quotient-representability-criterion` · lemma — Criterion for a scheme to represent an fppf quotient sheaf
- `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation` · theorem — Affine finite locally free equivalence relations have finite locally free scheme quotients
- `lem-action-map-fibres-and-stabilizer-subscheme` · lemma — Fibres of the orbit map and the scheme-theoretic stabilizer as a closed subgroup scheme
- `lem-projective-space-action-from-linear-representation` · lemma — A linear representation induces an action on projective space with the same line stabilizers
- `lem-orbit-map-faithfully-flat-and-orbit-locally-closed` · lemma — Smooth orbits are locally closed and their orbit maps are faithfully flat over every field
- `prop-faithfully-flat-orbit-map-represents-coset-quotient` · proposition — A faithfully flat orbit map represents the coset quotient sheaf
- `lem-orbit-map-fibres-and-stabilizer-dimension` · lemma — Fibre dimension and orbit dimension add to the dimension of the group
- `thm-homogeneous-space-for-smooth-affine-group` · theorem — Homogeneous spaces of smooth affine groups are separated schemes
- `rem-quotient-sheaf-versus-representing-scheme` · remark — Orbit sets, fppf quotient sheaves and representing schemes are three different objects

### `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients-examples` — Algebraic Group Actions, Orbits, Stabilizers, and Controlled Quotients — Examples (2 item(s))

- `cex-orbit-set-need-not-represent-quotient-sheaf` · counterexample — The orbit set of k-points need not be the k-points of the fppf quotient sheaf
- `ex-gl2-quotient-by-diagonal-torus` · example — The quotient of GL2 by the diagonal torus is the complement of the diagonal in P1 x P1

### `surface-riemann-roch-and-the-hodge-index-theorem` — Surface Riemann-Roch and the Hodge Index Theorem (12 item(s))

- `def-canonical-divisor-of-a-smooth-projective-surface` · definition — The canonical divisor of a smooth projective surface
- `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces` · lemma — Adjunction formula for effective divisors on a smooth projective surface
- `thm-riemann-roch-for-smooth-projective-surfaces` · theorem — Riemann-Roch for smooth projective surfaces
- `def-numerical-equivalence-and-neron-severi-space` · definition — Numerical equivalence and the Neron-Severi space of a surface
- `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` · lemma — Ample divisors meet nonzero effective divisors positively
- `lem-ample-twist-of-line-bundle-is-very-ample` · lemma — Large ample twists of a line bundle are very ample
- `lem-top-cohomology-vanishes-above-canonical-ample-threshold` · lemma — Vanishing of top cohomology past the canonical threshold
- `lem-positive-square-divisor-has-effective-multiple` · lemma — Positive square and positive ample intersection force an effective multiple
- `thm-hodge-index-theorem-ample-case` · theorem — The Hodge index theorem for an ample class
- `thm-hodge-index-theorem-for-smooth-projective-surfaces` · theorem — The Hodge index theorem for smooth projective surfaces
- `cor-negative-definiteness-of-primitive-numerical-divisors` · corollary — Negative definiteness of the primitive part of the Neron-Severi space
- `rem-surface-riemann-roch-hodge-index-conventions` · remark — Conventions and hypothesis bookkeeping for surface Riemann-Roch and Hodge index

### `surface-riemann-roch-and-the-hodge-index-theorem-examples` — Surface Riemann-Roch and the Hodge Index Theorem - Examples (6 item(s))

- `lem-product-of-projective-lines-is-a-smooth-projective-surface` · lemma — The product of two projective lines is an integral smooth projective surface
- `lem-picard-group-and-intersection-form-of-p1-times-p1` · lemma — The Picard group and intersection form of a product of projective lines
- `ex-hodge-index-on-p1-times-p1` · example — The Hodge index theorem on a product of projective lines
- `lem-picard-group-of-a-point-blowup-of-the-projective-plane` · lemma — The Picard group of a point blowup of the projective plane
- `ex-hodge-index-on-a-blowup` · example — The Hodge index theorem on a blowup of the projective plane
- `cex-intersection-form-not-negative-definite-on-all-divisors` · counterexample — The intersection form is not negative definite on all divisor classes

### `higher-dimensional-resolution-of-singularities` — Higher-Dimensional Resolution of Singularities (56 item(s))

- `def-order-of-an-ideal-sheaf-at-a-point` · definition — Order of an ideal sheaf at a point
- `def-simple-normal-crossings-divisors` · definition — Simple normal crossings divisors and simultaneous normal crossings position
- `lem-etale-formal-local-isomorphism` · lemma — Étale maps induce completion isomorphisms at equal-residue points
- `lem-etale-morphism-extends-to-ambient-neighbourhoods` · lemma — Extending an étale morphism to a smooth ambient neighbourhood
- `rem-resolution-of-singularities-conventions` · remark — Conventions for the resolution development
- `lem-order-and-snc-under-smooth-morphisms` · lemma — Order and simultaneous normal crossings are preserved by smooth morphisms
- `def-marked-ideal` · definition — Marked ideals and their support
- `def-multiple-test-blowup-and-controlled-transform` · definition — Multiple test blow-ups, controlled transforms and resolutions of marked ideals
- `def-ideal-of-derivatives` · definition — Derivative ideals of an ideal sheaf and of a marked ideal
- `def-equivalence-of-marked-ideals` · definition — Equivalence of marked ideals
- `lem-controlled-transform-is-well-defined` · lemma — Controlled transforms are well defined
- `lem-derivative-ideals-have-the-same-support` · lemma — Iterated derivative ideals have the same support
- `lem-derivative-ideals-under-etale-morphisms` · lemma — Etale pullback commutes with derivative ideals
- `lem-restriction-of-marked-ideal-to-a-smooth-subvariety` · lemma — Restriction of a marked ideal to a smooth subvariety and its blow-ups
- `lem-derivatives-under-field-isomorphisms` · lemma — Derivative ideals under semilinear ground-field isomorphisms
- `def-maximal-order-and-tangent-directions` · definition — Marked ideals of maximal order, tangent directions and transversality to the exceptional divisors
- `lem-addition-and-multiplication-of-marked-ideals` · lemma — Addition and multiplication of marked ideals
- `def-canonical-resolution-invariants` · definition — Canonical resolutions with invariants of a marked ideal
- `lem-smooth-pullback-of-multiple-test-blowups` · lemma — Smooth base change of multiple test blow-ups
- `lem-derivatives-commute-with-controlled-transform` · lemma — Controlled derivative transforms are contained in derivatives of the controlled transform
- `lem-equivalence-of-powers-of-a-marked-ideal` · lemma — A marked ideal is equivalent to its powers
- `def-homogenized-ideal` · definition — The homogenized ideal of a marked ideal of maximal order
- `def-coefficient-ideal` · definition — The coefficient ideal of a marked ideal of maximal order
- `def-companion-ideal-and-monomial-part` · definition — The monomial part, the non-monomial part and the companion ideal
- `lem-order-semicontinuity-and-snc-strata` · lemma — Order functions and normal-crossings strata are upper semicontinuous
- `lem-derivatives-of-maximal-order-ideals` · lemma — Derivative ideals of a maximal-order marked ideal have maximal order
- `lem-derivatives-of-a-multiple-test-blowup` · lemma — Derivative ideals under a multiple test blow-up
- `lem-maximal-order-preserved-by-controlled-transform` · lemma — Controlled transforms of maximal-order marked ideals have maximal order
- `lem-homogenized-ideal-properties` · lemma — Elementary properties of the homogenized ideal
- `lem-homogenized-ideal-under-smooth-morphisms` · lemma — Homogenization commutes with smooth pullback
- `lem-completion-automorphisms-for-tangent-directions` · lemma — An automorphism of the completed local ring matching two tangent directions preserves the homogenization
- `lem-coefficient-ideal-under-smooth-morphisms` · lemma — The coefficient ideal commutes with smooth pullback
- `lem-giraud-tangent-directions-and-controlled-transforms` · lemma — Giraud's tangent-direction lemma
- `lem-coefficient-ideal-is-equivalent` · lemma — The coefficient ideal is equivalent to the marked ideal
- `lem-homogenized-ideal-is-equivalent` · lemma — The homogenized ideal is equivalent to the marked ideal
- `lem-tangent-direction-contains-the-support` · lemma — The supports of a multiple test blow-up stay inside the strict transforms of a hypersurface of maximal contact
- `lem-coefficient-ideal-restriction-support` · lemma — The coefficient ideal controls the support after restriction
- `lem-codimension-one-maximal-order-components` · lemma — Codimension-one components of a maximal-order support
- `lem-glueing-homogenized-ideals` · lemma — Glueing of homogenized ideals along etale neighbourhoods
- `lem-coefficient-ideal-disjoint-centres` · lemma — Coefficient-ideal control with centres allowed off the subvariety
- `lem-refined-giraud-maximal-contact` · lemma — Refined maximal-contact statement via the coefficient ideal
- `prop-canonical-resolution-of-marked-ideals` · proposition — Canonical resolution of marked ideals
- `lem-etale-commutativity-of-maximal-order-case` · lemma — Etale commutativity of the maximal-order resolution step
- `lem-canonical-resolution-commutes-with-ambient-embeddings` · lemma — Canonical resolutions commute with embeddings of ambient smooth schemes
- `lem-canonical-resolution-under-field-isomorphisms` · lemma — Canonical resolution under isomorphisms of the ground field
- `lem-etale-commutativity-of-companion-step` · lemma — Etale commutativity of the companion-ideal step
- `lem-canonical-resolution-commutes-with-smooth-morphisms` · lemma — Canonical resolutions commute with smooth morphisms
- `lem-canonical-resolution-over-nonclosed-fields` · lemma — Canonical resolutions over non-algebraically-closed ground fields
- `thm-principalization-of-ideals` · theorem — Canonical principalization of ideals in characteristic zero
- `thm-weak-embedded-desingularization` · theorem — Weak embedded desingularization in characteristic zero
- `thm-bravo-villamayor-full-transform` · theorem — Bravo-Villamayor strengthening of embedded desingularization
- `lem-embedding-independence-of-desingularization` · lemma — Independence of the embedded desingularization from the ambient embedding
- `lem-open-restriction-of-desingularization` · lemma — Open restrictions of the canonical desingularization
- `thm-resolution-of-singularities-in-characteristic-zero` · theorem — Resolution of singularities in characteristic zero
- `lem-resolution-is-functorial-under-smooth-maps` · lemma — Resolution of singularities is functorial under smooth morphisms
- `rem-positive-characteristic-resolution-status` · remark — Recorded: the positive-characteristic boundary

### `higher-dimensional-resolution-of-singularities-examples` — Higher-Dimensional Resolution of Singularities — Examples (3 item(s))

- `lem-blowup-charts-of-the-quadric-cone` · lemma — Blowup charts of the quadric cone at its vertex
- `cex-no-claim-of-resolution-in-positive-characteristic` · counterexample — The maximal-contact mechanism fails in positive characteristic
- `ex-resolution-of-a-surface-singularity` · example — Resolving the quadric cone by one blowup

## Your seams

Your pages depend on another group's:

- `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` requires `affine-group-schemes-hopf-algebras-and-rational-representations` (group e, batch 13)
- `higher-dimensional-resolution-of-singularities` requires `birational-morphisms-contractions-and-surface-singularities` (group j, batch 25)

Another group's pages depend on yours:

- `unipotent-solvable-groups-and-borel-fixed-points` (group e) requires your `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`
- `split-reductive-root-systems-bruhat-cells-and-parabolics` (group f) requires your `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`
- `reductive-affine-invariant-theory-and-geometric-quotients` (group h) requires your `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`
- `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations` (group h) requires your `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`

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
