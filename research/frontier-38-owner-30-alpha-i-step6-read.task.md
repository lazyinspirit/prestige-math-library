# Step 6 Alpha group reader — read-only digest — group **i**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **1**, **25**, **27**: 3 A/B pair(s), 6 page(s), 69 item(s).

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
| 1 | `normal-varieties-normalization-and-zariskis-main-theorem` | A | algebraic-geometry | 366.061 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini`, `normalization-finiteness-for-affine-domains`, `algebraic-zariski-main-for-quasi-finite-morphisms` |
| 1 | `normal-varieties-normalization-and-zariskis-main-theorem-examples` | B | algebraic-geometry | 366.062 | `normal-varieties-normalization-and-zariskis-main-theorem` |
| 25 | `groups-of-multiplicative-type-and-arithmetic-tori` | A | algebraic-geometry | 887 | `group-schemes-of-finite-type-over-a-field`, `the-galois-correspondence`, `algebraic-closure-embeddings-and-separability`, `galois-orbits-and-descent-of-simple-finite-group-modules`, `finite-proper-and-projective-morphisms` |
| 25 | `groups-of-multiplicative-type-and-arithmetic-tori-examples` | B | algebraic-geometry | 888 | `groups-of-multiplicative-type-and-arithmetic-tori`, `flat-smooth-and-etale-morphisms`, `regular-local-rings-and-homological-dimension` |
| 27 | `point-blowup-resolution-on-arbitrary-regular-surfaces` | A | algebraic-geometry | 901 | `blowups-exceptional-divisors-and-strict-transforms`, `normalization-finiteness-for-affine-domains`, `flat-smooth-and-etale-morphisms`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` |
| 27 | `point-blowup-resolution-on-arbitrary-regular-surfaces-examples` | B | algebraic-geometry | 902 | `point-blowup-resolution-on-arbitrary-regular-surfaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `normal-varieties-normalization-and-zariskis-main-theorem` — Normal Varieties Normalization and Zariskis Main Theorem (31 item(s))

- `lem-av7-zero-dimensional-standard-smooth-local-tools` · lemma — Local algebra tools for elementary etale changes of classical varieties
- `lem-av7-relative-integral-closure-finite-affine-charts` · lemma — Finite relative integral-closure charts for classical quasi-finite morphisms
- `lem-av7-integral-closure-elementary-etale-base-change` · lemma — Relative integral closure under elementary etale change
- `lem-av7-coprime-factorization-finite-component-neighbourhoods` · lemma — Finite fibre components after an elementary etale change
- `lem-av7-classical-zmt-relative-integral-closure-neighbourhoods` · lemma — Classical Zariski Main from relative integral-closure neighbourhoods
- `lem-av7-proper-quasi-finite-factor-is-finite` · lemma — Proper quasi-finite classical morphisms are finite
- `lem-av7-finite-morphism-projective-over-projective-base` · lemma — Finite morphisms over a projective variety over any field
- `def-normal-point-and-normal-variety` · definition — Normal points and normal varieties
- `lem-normality-local-on-affine-opens` · lemma — Normality is checked on affine open charts
- `thm-regular-local-ring-is-normal` · theorem — Regular varieties are normal
- `thm-normal-variety-regular-in-codimension-one` · theorem — A normal variety is regular in codimension one
- `def-normalization-affine-variety` · definition — The normalization of an irreducible affine variety
- `thm-normalization-finite-birational-surjective` · theorem — The affine normalization is finite, birational, and surjective
- `lem-normalization-isomorphism-over-normal-locus` · lemma — The normalization is an isomorphism over the normal locus
- `thm-normalization-glues-variety` · theorem — Normalization of a classical variety by gluing affine normalizations
- `thm-normalization-universal-property` · theorem — Universal property of the normalization
- `cor-normalization-unique-up-to-unique-isomorphism` · corollary — The normalization is unique up to unique isomorphism
- `lem-normalization-commutes-with-restriction-open` · lemma — Normalization commutes with restriction to an open subvariety
- `def-unibranch-point-classical` · definition — Unibranch points of a classical variety
- `thm-normal-curve-is-nonsingular` · theorem — A normal curve over a perfect field is nonsingular
- `cor-normalization-resolves-singularities-of-curves` · corollary — Normalization resolves the singularities of a projective curve
- `def-finite-morphism-classical-affine-local` · definition — Finite morphisms of classical varieties
- `thm-finite-morphism-closed-and-finite-fibres` · theorem — Finite morphisms are closed with finite fibres
- `lem-finite-birational-to-normal-is-isomorphism` · lemma — A finite birational morphism onto a normal variety is an isomorphism
- `thm-zariski-main-open-immersion-factorization-classical` · theorem — Zariski's Main Theorem: open immersion followed by a finite morphism
- `cor-bijective-birational-to-normal-isomorphism-under-finiteness` · corollary — Birational quasi-finite maps to normal targets are open immersions
- `thm-normal-functions-codimension-one-intersection` · theorem — Regular functions on a normal variety are determined in codimension one
- `cor-rational-function-no-poles-codimension-one-regular` · corollary — A rational function with no codimension-one poles is regular
- `def-conductor-normalization` · definition — The conductor of a normalization
- `lem-conductor-ideal-common-ideal` · lemma — The conductor is an ideal of both the coordinate ring and its normalization
- `rem-normalization-not-resolution-higher-dimension` · remark — Normalization need not resolve singularities in dimension at least two

### `normal-varieties-normalization-and-zariskis-main-theorem-examples` — Normal Varieties Normalization and Zariskis Main Theorem — Examples (8 item(s))

- `ex-normalization-cusp` · example — Normalizing the cuspidal plane curve
- `ex-normalization-node` · example — Normalizing the nodal plane curve
- `ex-normal-affine-space` · example — Affine space is normal
- `cex-normalization-not-injective-node` · counterexample — Normalization of the node is two-to-one over the node
- `cex-normal-not-smooth-quadric-cone` · counterexample — A normal singular surface: the quadric cone
- `cex-bijective-birational-not-isomorphism-cusp-reprise` · counterexample — The cusp normalization is bijective but not an isomorphism
- `ex-conductor-cusp-semigroup` · example — The conductor of the cusp is generated by the gap exponents
- `cex-finite-fibres-not-finite-open-immersion` · counterexample — Finite fibres do not make an open immersion finite

### `groups-of-multiplicative-type-and-arithmetic-tori` — Groups of Multiplicative Type and Arithmetic Tori (12 item(s))

- `def-multiplicative-type-coordinate-hopf-algebra` · definition — Coordinate Hopf algebras for multiplicative type
- `lem-multiplicative-type-local-hopf-dictionary` · lemma — The affine Hopf dictionary used for multiplicative type
- `def-diagonalizable-group-and-character-module` · definition — Diagonalizable groups and their character modules
- `lem-diagonalizable-character-antiequivalence` · lemma — Split diagonalizable groups are dual to abelian groups
- `def-group-of-multiplicative-type-and-torus` · definition — Groups of multiplicative type and tori
- `lem-multiplicative-type-affineness-by-field-descent` · lemma — Affineness of a field form of a diagonalizable group
- `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` · lemma — Finite coalgebra pieces of a multiplicative coordinate algebra
- `lem-multiplicative-type-groups-split-separably` · lemma — Multiplicative type groups split over a finite Galois extension
- `lem-finite-galois-descent-for-multiplicative-hopf-algebras` · lemma — Finite Galois descent for the Hopf algebras of multiplicative type
- `def-continuous-galois-character-module` · definition — Continuous Galois character modules
- `thm-multiplicative-type-groups-and-galois-character-modules` · theorem — Multiplicative type groups and Galois character modules
- `cor-tori-correspond-to-torsion-free-character-lattices` · corollary — Tori correspond exactly to torsion-free character lattices

### `groups-of-multiplicative-type-and-arithmetic-tori-examples` — Groups of Multiplicative Type and Arithmetic Tori — Examples (3 item(s))

- `ex-split-torus-character-lattice` · example — The character lattice of a split torus
- `ex-nonsplit-torus-galois-action` · example — A quadratic norm-one torus and its sign action
- `cex-mu-p-is-not-a-smooth-torus` · counterexample — The multiplicative group scheme μ_p is not a smooth torus

### `point-blowup-resolution-on-arbitrary-regular-surfaces` — Point Blowup Resolution on Arbitrary Regular Surfaces (12 item(s))

- `def-intersection-multiplicity-of-closed-subschemes` · definition — Intersection multiplicity of closed subschemes at a point
- `lem-intersection-multiplicity-drop-under-point-blowup` · lemma — A point blowup drops pairwise intersection multiplicity by at least one
- `lem-point-blowup-of-integral-curve-is-finite` · lemma — The blowup of a one-dimensional integral Noetherian scheme at a closed point is finite
- `lem-normalization-factors-through-blowup-of-curve-point` · lemma — The finite normalization of a curve factors through the blowup of a closed point
- `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` · lemma — Blowing up a non-regular point strictly increases the finite normalization subalgebra
- `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` · lemma — Increasing sequences of coherent subsheaves of a coherent module on a Noetherian scheme stabilize
- `thm-regularization-of-finite-normalization-curve-by-point-blowups` · theorem — Regularization of a one-dimensional integral curve with finite normalization by point blowups
- `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` · lemma — Regularization of an integral curve on an arbitrary Noetherian ambient scheme
- `lem-blowup-of-closed-point-of-regular-surface-is-regular` · lemma — Point blowups of arbitrary regular surfaces stay regular, with rational exceptional curve over the residue field
- `def-strict-normal-crossings-divisor` · definition — Strict normal crossings divisor on a regular surface
- `thm-separation-of-regular-curve-components-by-point-blowups` · theorem — Separation of finitely many curve components by point blowups
- `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` · theorem — Embedded strict-normal-crossings resolution of a reduced curve on a regular surface

### `point-blowup-resolution-on-arbitrary-regular-surfaces-examples` — Point Blowup Resolution on Arbitrary Regular Surfaces — Examples (3 item(s))

- `ex-node-resolved-by-one-blowup` · example — A node is resolved by one point blowup
- `ex-cusp-resolution-and-delta-drop` · example — A cusp: one blowup, the normalization and the delta drop
- `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` · counterexample — Finite normalization alone does not make a curve regular

## Your seams

Your pages depend on another group's:

- `groups-of-multiplicative-type-and-arithmetic-tori` requires `group-schemes-of-finite-type-over-a-field` (group a, batch 22)
- `point-blowup-resolution-on-arbitrary-regular-surfaces` requires `blowups-exceptional-divisors-and-strict-transforms` (group a, batch 2)
- `point-blowup-resolution-on-arbitrary-regular-surfaces` requires `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` (group e, batch 24)

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
