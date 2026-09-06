# Step 7 whole-group reading — group **c**, run `frontier-31a`

You are the group Alpha for batches **11**, **13**, **14**: 3 A/B pair(s), 6 page(s), 132 item(s).

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
| 11 | `koszul-complexes-and-regular-sequences` | A | commutative-algebra | 365.901 | `zariski-topology-on-prime-spectra-examples`, `long-exact-sequences-in-homology` |
| 11 | `koszul-complexes-and-regular-sequences-examples` | B | commutative-algebra | 365.902 | `koszul-complexes-and-regular-sequences` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones` | A | algebraic-geometry | 366.045 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones-examples` | B | algebraic-geometry | 366.046 | `projective-algebraic-sets-projective-morphisms-and-cones` |
| 14 | `affine-schemes-and-the-structure-sheaf` | A | scheme-theory | 366.061 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`, `zariski-topology-on-prime-spectra` |
| 14 | `affine-schemes-and-the-structure-sheaf-examples` | B | scheme-theory | 366.062 | `affine-schemes-and-the-structure-sheaf` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `koszul-complexes-and-regular-sequences` — Koszul Complexes and Regular Sequences (51 item(s))

- `def-exterior-algebra-of-a-finite-free-module` · definition
- `lem-exterior-algebra-basis-monomials` · lemma
- `lem-exterior-multiplication-koszul-sign-rule` · lemma
- `def-koszul-complex-of-a-sequence-with-coefficients` · definition
- `lem-koszul-differential-coordinate-formula` · lemma
- `lem-koszul-differential-square-pairwise-cancellation` · lemma
- `lem-koszul-differential-is-well-defined-and-squares-to-zero` · lemma
- `cor-empty-koszul-complex-is-the-coefficient-module` · corollary
- `lem-one-element-koszul-complex` · lemma
- `cor-one-element-koszul-homology` · corollary
- `thm-basic-koszul-homology` · theorem
- `lem-koszul-complex-concatenation-tensor-isomorphism` · lemma
- `lem-koszul-append-one-element-mapping-cone-identification` · lemma
- `lem-koszul-mapping-cone-homology-exact-sequence` · lemma
- `thm-koszul-concatenation-and-mapping-cone` · theorem
- `lem-koszul-generator-contraction-homotopy` · lemma
- `cor-sequence-ideal-annihilates-koszul-homology` · corollary
- `lem-koszul-generators-act-null-homotopically` · lemma
- `cor-koszul-homology-supported-on-sequence-vanishing-set` · corollary
- `lem-koszul-complex-localises-termwise` · lemma
- `cor-koszul-homology-localises` · corollary
- `lem-koszul-complex-flat-base-change` · lemma
- `cor-koszul-homology-flat-base-change` · corollary
- `lem-koszul-generator-matrix-chain-map` · lemma
- `cor-koszul-complex-invariant-under-invertible-generator-change` · corollary
- `thm-functoriality-base-change-and-generator-change-for-koszul-complexes` · theorem
- `def-regular-sequence-on-a-module` · definition
- `lem-regular-sequence-first-element-boundary` · lemma
- `lem-regular-sequence-tail-on-quotient` · lemma
- `cor-initial-subsequences-of-a-regular-sequence-are-regular` · corollary
- `thm-localisation-and-flat-base-change-of-regular-sequences` · theorem
- `lem-regular-one-element-koszul-acyclicity` · lemma
- `lem-regular-sequence-koszul-acyclicity-induction` · lemma
- `thm-regular-sequences-give-acyclic-koszul-complexes` · theorem
- `cor-koszul-complex-resolves-a-regular-quotient` · corollary
- `lem-local-koszul-h-one-detects-first-regularity-failure` · lemma
- `lem-local-koszul-acyclicity-inductive-converse` · lemma
- `thm-koszul-acyclicity-characterises-local-regular-sequences` · theorem
- `cor-local-koszul-acyclicity-iff-regular-sequence` · corollary
- `def-koszul-regular-and-h-one-regular-sequences` · definition
- `lem-koszul-regular-implies-h-one-regular` · lemma
- `lem-h-one-regular-local-implies-koszul-regular` · lemma
- `lem-regular-sequence-permutation-adjacent-swap` · lemma
- `cor-regular-sequences-permutable-local` · corollary
- `lem-positive-powers-of-a-regular-sequence-remain-regular` · lemma
- `cor-regularity-notions-coincide-local-finite` · corollary
- `thm-regularity-notions-and-permutation-invariance-local` · theorem
- `def-minimal-free-resolution-over-a-local-ring` · definition
- `def-koszul-betti-numbers-over-a-local-ring` · definition
- `lem-koszul-resolution-minimality-maximal-ideal-sequence` · lemma
- `cor-complete-intersection-betti-numbers-binomial` · corollary

### `koszul-complexes-and-regular-sequences-examples` — Koszul Complexes and Regular Sequences — Examples (12 item(s))

- `ex-koszul-complex-one-and-two-elements` · example
- `ex-koszul-complex-polynomial-variables` · example
- `ex-koszul-resolution-complete-intersection` · example
- `ex-koszul-homology-zero-divisor` · example
- `ex-nonpermutable-regular-sequence` · example
- `ex-koszul-homology-after-localisation` · example
- `ex-empty-and-unit-koszul-boundaries` · example
- `ex-koszul-d-square-sign-check-three-elements` · example
- `ex-koszul-homology-of-a-zero-divisor` · example
- `ex-generator-change-koszul-isomorphism` · example
- `ex-regular-sequence-powers-and-permutation` · example
- `ex-koszul-resolution-betti-table-complete-intersection` · example

### `projective-algebraic-sets-projective-morphisms-and-cones` — Projective Algebraic Sets Projective Morphisms and Cones (25 item(s))

- `def-projective-space-points` · definition — Projective space as scalar-equivalence classes
- `def-homogeneous-polynomial-and-homogeneous-ideal` · definition — Homogeneous polynomials and homogeneous ideals
- `lem-homogeneous-polynomial-zero-locus-well-defined` · lemma — A homogeneous zero locus is well-defined on projective points
- `def-projective-algebraic-set` · definition — Projective algebraic set
- `thm-projective-zariski-topology` · theorem — Projective Zariski topology
- `lem-standard-projective-opens-are-affine-spaces` · lemma — Standard projective opens are affine spaces
- `lem-homogenization-dehomogenization-correspondence` · lemma — Homogenization and dehomogenization
- `def-projective-closure-affine-set` · definition — Projective closure of an affine algebraic set
- `def-homogeneous-ideal-saturation` · definition — Saturation of a homogeneous ideal
- `thm-ideal-projective-closure-saturation` · theorem — Ideal of a projective closure via saturation
- `def-homogeneous-coordinate-ring` · definition — Homogeneous coordinate ring
- `def-projective-variety-classical` · definition — Classical projective variety
- `lem-projective-irreducibility-homogeneous-prime` · lemma — Irreducibility and homogeneous prime ideals
- `def-regular-function-projective-variety` · definition — Regular functions on a projective variety
- `lem-projective-regular-function-chart-compatibility` · lemma — Compatibility of projective regular-function charts
- `thm-global-regular-functions-projective-variety` · theorem — Global regular functions on an irreducible projective variety
- `def-morphism-to-projective-space-homogeneous-coordinates` · definition — Projective morphisms in homogeneous coordinates
- `lem-projective-coordinate-morphisms-well-defined` · lemma — Homogeneous coordinate formulas define morphisms
- `thm-closed-projective-embedding-by-homogeneous-generators` · theorem — Closed projective embedding from a radical homogeneous ideal
- `def-affine-cone-projective-set` · definition — Affine cone over a projective algebraic set
- `lem-projective-variety-cone-irreducible` · lemma — The cone over a projective variety is irreducible
- `lem-projective-closure-dense-affine-chart` · lemma — The affine chart is dense in a projective closure
- `def-degree-projective-hypersurface` · definition — Degree of a reduced projective hypersurface
- `lem-projective-hypersurface-affine-pieces` · lemma — Affine pieces of a projective hypersurface
- `rem-projective-coordinate-ring-not-function-ring` · remark — A homogeneous coordinate ring is not the global function ring

### `projective-algebraic-sets-projective-morphisms-and-cones-examples` — Projective Algebraic Sets Projective Morphisms and Cones — Examples (7 item(s))

- `ex-projective-line-two-affine-charts` · example — The two standard affine charts of the projective line
- `ex-projective-closure-parabola` · example — Projective closure of a parabola
- `cex-naive-homogenization-adds-component` · counterexample — Raw homogenized generators can add a projective component
- `ex-projective-conic-standard-charts` · example — Standard affine charts of a projective conic
- `ex-affine-cone-over-conic` · example — Affine cone over a smooth projective conic
- `cex-inhomogeneous-equation-not-projectively-well-defined` · counterexample — An inhomogeneous equation does not define a projective zero locus
- `ex-morphism-projective-line-power-map` · example — The power map on the projective line

### `affine-schemes-and-the-structure-sheaf` — Affine Schemes and the Structure Sheaf (28 item(s))

- `def-affine-scheme-spectrum` · definition — The underlying space of an affine spectrum
- `def-structure-presheaf-on-basic-opens` · definition — The localization presheaf on distinguished opens
- `lem-structure-presheaf-basic-open-well-defined` · lemma — Localization sections are independent of a distinguished-open presentation
- `thm-structure-sheaf-affine-scheme` · theorem — The localization construction extends to the structure sheaf on Spec A
- `thm-sections-basic-open-affine-scheme` · theorem — Sections and restrictions on distinguished opens of an affine scheme
- `thm-stalk-structure-sheaf-prime-localization` · theorem — The stalk of the affine structure sheaf at a prime is A_p
- `cor-spectrum-with-structure-sheaf-locally-ringed` · corollary — Spec A with its structure sheaf is a locally ringed space
- `def-residue-field-scheme-point` · definition — The residue field at a point of an affine scheme
- `thm-global-sections-affine-scheme` · theorem — Global functions on Spec A recover A
- `lem-spectrum-localization-open-immersion` · lemma — A principal localization identifies its spectrum with a distinguished open
- `def-affine-scheme` · definition — Affine schemes and their coordinate rings
- `def-morphism-affine-schemes-from-ring-map` · definition — The map of affine spectra induced by a ring homomorphism
- `lem-spectrum-map-stalk-homomorphisms-local` · lemma — The stalk maps induced by a ring map are local
- `thm-affine-scheme-ring-anti-equivalence` · theorem — Affine schemes are contravariantly equivalent to commutative rings
- `cor-affine-scheme-isomorphism-ring-isomorphism` · corollary — Affine-scheme isomorphisms are exactly coordinate-ring isomorphisms in reverse direction
- `def-closed-point-scheme` · definition — Closed points of an affine scheme
- `lem-classical-points-inside-affine-scheme` · lemma — Classical k-points give closed points over an algebraically closed field
- `def-generic-point-irreducible-closed-subset` · definition — Generic points of irreducible closed subsets
- `thm-spectrum-sober` · theorem — Every irreducible closed subset of an affine spectrum has a unique generic point
- `def-reduced-affine-scheme` · definition — Reduced affine schemes
- `def-integral-affine-scheme` · definition — Integral affine schemes
- `def-nonreduced-infinitesimal-thickening-affine` · definition — An affine nilpotent thickening
- `def-functor-of-points-affine-scheme` · definition — The functor of points of an affine scheme
- `thm-affine-schemes-determined-by-functor-of-points` · theorem — An affine scheme is determined by its functor of points
- `def-dual-numbers-scheme` · definition — The affine scheme of dual numbers
- `lem-basic-opens-quasi-compact` · lemma — Every distinguished open of an affine spectrum is quasi-compact
- `cor-affine-scheme-quasi-compact` · corollary — Every affine scheme is quasi-compact
- `rem-spec-contravariance-and-points` · remark — Contravariance reverses coordinates and scheme points are not only classical points

### `affine-schemes-and-the-structure-sheaf-examples` — Affine Schemes and the Structure Sheaf — Examples (9 item(s))

- `ex-spectrum-field-one-point` · example — The spectrum of a field is a one-point affine scheme
- `ex-spectrum-zero-ring-empty` · example — The zero ring has empty spectrum
- `ex-spectrum-integers-generic-and-closed-points` · example — Spec Z has one generic point and closed prime-number points
- `ex-dual-numbers-one-point-nonreduced` · example — Dual numbers give a one-point nonreduced affine scheme
- `ex-spectrum-product-ring-disjoint-union` · example — The spectrum of a product ring is a disjoint union
- `ex-basic-open-affine-line` · example — A basic open of the affine line is affine
- `cex-scheme-not-determined-by-underlying-space` · counterexample — The underlying topological space does not determine a scheme
- `ex-functor-points-affine-line` · example — Relative points of the affine line are elements of a test k-algebra
- `cex-nonclosed-scheme-point-no-k-valued-coordinate` · counterexample — A nonclosed scheme point need not be a k-valued coordinate

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
