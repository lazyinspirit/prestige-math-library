# Step 6 Alpha group reader — read-only digest — group **e**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **7**, **13**, **18**: 3 A/B pair(s), 6 page(s), 89 item(s).

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
| 7 | `yang-baxter-operators-and-quantum-braid-representations` | A | braid-groups | 753 | `braided-and-symmetric-monoidal-categories`, `duality-and-rigidity-in-monoidal-categories`, `tensor-and-fusion-categories`, `modules-and-module-homomorphisms`, `oriented-links-braid-closures-and-markov-equivalence` |
| 7 | `yang-baxter-operators-and-quantum-braid-representations-examples` | B | braid-groups | 754 | `yang-baxter-operators-and-quantum-braid-representations` |
| 13 | `affine-group-schemes-hopf-algebras-and-rational-representations` | A | scheme-theory | 873 | `group-schemes-of-finite-type-over-a-field`, `affine-schemes-and-the-structure-sheaf`, `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` |
| 13 | `affine-group-schemes-hopf-algebras-and-rational-representations-examples` | B | scheme-theory | 874 | `affine-group-schemes-hopf-algebras-and-rational-representations` |
| 18 | `unipotent-solvable-groups-and-borel-fixed-points` | A | algebraic-geometry | 889 | `group-schemes-of-finite-type-over-a-field`, `affine-group-schemes-hopf-algebras-and-rational-representations`, `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`, `groups-of-multiplicative-type-and-arithmetic-tori`, `finite-proper-and-projective-morphisms`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `proj-projective-schemes-twisting-sheaves-and-ampleness` |
| 18 | `unipotent-solvable-groups-and-borel-fixed-points-examples` | B | algebraic-geometry | 890 | `unipotent-solvable-groups-and-borel-fixed-points`, `proj-projective-schemes-twisting-sheaves-and-ampleness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `yang-baxter-operators-and-quantum-braid-representations` — Yang–Baxter Operators and Quantum Braid Representations (18 item(s))

- `def-yang-baxter-operator-on-an-object` · definition — Yang–Baxter operators on an object
- `def-the-framed-oriented-tangle-category` · definition — The framed oriented tangle category
- `def-absolutely-simple-object` · definition — Absolutely simple objects
- `def-exponent-sum-and-writhe-of-a-braid` · definition — Exponent sum and writhe of a braid
- `def-local-yang-baxter-operators-on-tensor-powers` · definition — Local Yang–Baxter operators on tensor powers
- `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation` · lemma — Framed oriented tangles have the ribbon generator-and-relation presentation
- `lem-local-yang-baxter-operators-satisfy-the-artin-relations` · lemma — Local Yang–Baxter operators satisfy the Artin relations
- `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` · theorem — A ribbon object defines a unique framed-tangle evaluation functor
- `thm-a-yang-baxter-operator-gives-braid-group-representations` · theorem — A Yang–Baxter operator gives braid-group representations
- `cor-an-object-of-a-braided-category-carries-canonical-braid-actions` · corollary — An object of a braided category carries canonical braid actions
- `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group` · proposition — An involutive Yang–Baxter operator factors through the symmetric group
- `def-braided-monoidal-functor-induced-intertwiner` · definition — The intertwiner induced by a braided monoidal functor
- `def-ribbon-evaluation-of-an-x-colored-closed-braid` · definition — The ribbon evaluation of an $X$-colored closed braid
- `lem-ribbon-trace-equals-the-framed-closure-evaluation` · lemma — The ribbon trace equals the framed-closure evaluation
- `thm-braided-functors-intertwine-canonical-braid-actions` · theorem — Braided functors intertwine canonical braid actions
- `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` · theorem — The ribbon evaluation is an invariant of framed colored links
- `lem-scalar-twist-controls-the-two-markov-stabilizations` · lemma — The scalar twist controls the two Markov stabilizations
- `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` · theorem — The writhe-normalized ribbon trace is an unframed link invariant

### `yang-baxter-operators-and-quantum-braid-representations-examples` — Yang–Baxter Operators and Quantum Braid Representations — Examples (7 item(s))

- `ex-the-flip-operator-gives-the-permutation-representation` · example — The flip operator gives the permutation representation
- `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces` · example — A diagonal Yang–Baxter operator on graded vector spaces
- `ex-a-noninvolutive-one-dimensional-yang-baxter-operator` · example — A non-involutive one-dimensional Yang–Baxter operator
- `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group` · counterexample — A non-invertible solution of the Yang–Baxter equation does not represent the braid group
- `cex-a-braiding-alone-does-not-define-a-link-trace` · counterexample — A braiding alone does not define a link trace
- `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant` · counterexample — The unnormalized ribbon trace is not an unframed Markov invariant
- `ex-writhe-normalization-cancels-a-ribbon-kink` · example — Writhe normalization cancels a ribbon kink

### `affine-group-schemes-hopf-algebras-and-rational-representations` — Affine Group Schemes, Hopf Algebras, and Rational Representations (13 item(s))

- `def-commutative-hopf-algebra-over-a-field` · definition — Commutative Hopf algebras over a field
- `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated` · lemma — An affine scheme of finite type over a field has a finitely generated coordinate ring
- `lem-quotient-spectrum-map-is-a-closed-immersion` · lemma — A surjective ring map induces a closed immersion of affine spectra
- `lem-general-linear-group-scheme-and-its-coordinate-ring` · lemma — The general linear group scheme and its coordinate ring
- `def-coordinate-hopf-algebra-of-affine-group-scheme` · definition — The coordinate Hopf algebra of an affine group scheme
- `lem-hopf-ideal-kernels-and-quotients` · lemma — Hopf ideals, kernels and quotients of commutative Hopf algebras
- `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra` · lemma — The coordinate ring of an affine group scheme is a commutative Hopf algebra
- `def-rational-representation-and-comodule-of-an-affine-group-scheme` · definition — Rational representations and comodules of an affine group scheme
- `thm-affine-group-schemes-hopf-algebra-antiequivalence` · theorem — Affine group schemes of finite type are antiequivalent to finitely generated commutative Hopf algebras
- `lem-representations-of-affine-group-schemes-are-comodules` · lemma — Rational representations of an affine group scheme are comodules of its coordinate Hopf algebra
- `lem-finite-dimensional-subcomodules-contain-elements` · lemma — Every element of a comodule lies in a finite-dimensional subcomodule
- `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` · theorem — Closed subgroup schemes of an affine group scheme correspond to Hopf ideals
- `thm-affine-group-scheme-faithful-finite-dimensional-representation` · theorem — A finitely generated affine group scheme has a faithful finite-dimensional representation

### `affine-group-schemes-hopf-algebras-and-rational-representations-examples` — Affine Group Schemes, Hopf Algebras, and Rational Representations — Examples (2 item(s))

- `ex-hopf-algebra-of-a-split-torus` · example — The Hopf algebra of a split torus and its root-of-unity subgroups
- `ex-rational-representation-from-a-comodule` · example — A rational representation of the multiplicative group from a graded comodule

### `unipotent-solvable-groups-and-borel-fixed-points` — Unipotent and Solvable Groups and Borel Fixed Points (46 item(s))

- `def-unipotent-algebraic-group` · definition — Unipotent algebraic groups and unipotent representations
- `def-coconnected-hopf-algebra` · definition — Coconnected commutative Hopf algebras
- `def-upper-unitriangular-group-scheme` · definition — The upper unitriangular group scheme U_n and its coordinate ring
- `def-derived-subgroup-and-solvable-algebraic-group` · definition — The derived subgroup, the derived series and solvable algebraic groups
- `def-trigonalizable-algebraic-group` · definition — Trigonalizable algebraic groups
- `def-borel-subgroup-and-maximal-torus` · definition — Borel subgroups, maximal tori and Borel pairs
- `def-crossed-homomorphism-and-hochschild-extension` · definition — Crossed homomorphisms, principal crossed homomorphisms and Hochschild extensions
- `lem-unipotent-representation-criterion` · lemma — Unipotence is equivalent to unipotence of all finite-dimensional representations
- `lem-upper-unitriangular-coordinate-ring-is-coconnected` · lemma — Coconnected Hopf algebras: the coordinate ring of U_n and passage to quotients
- `lem-coconnected-comodules-have-fixed-vectors` · lemma — Coconnected Hopf algebras give fixed vectors in every nonzero comodule
- `lem-upper-unitriangular-central-series` · lemma — The central series of U_n with additive quotients
- `thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients` · theorem — Unipotent groups have central series with quotients embedded in G_a
- `thm-unipotent-group-triangular-criterion` · theorem — Unipotent groups are exactly the subgroups of some U_n, equivalently the groups with coconnected coordinate Hopf algebra
- `lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces` · lemma — Representations of diagonalizable groups split into character eigenspaces
- `lem-distinct-characters-are-linearly-independent` · lemma — Distinct characters are linearly independent and eigenspace sums are direct
- `lem-unipotent-and-diagonalizable-intersection-is-trivial` · lemma — A subgroup that is both unipotent and diagonalizable is trivial
- `lem-derived-subgroup-properties` · lemma — Properties of the derived subgroup of an algebraic group
- `lem-trigonalizable-iff-invariant-flags` · lemma — Trigonalizable groups, invariant flags and embeddings into T_n
- `lem-smooth-finite-type-schemes-have-schematically-dense-rational-points` · lemma — Rational points of smooth finite-type schemes over a separably closed field are schematically dense
- `lem-closed-finite-index-subgroup-of-connected-group-points` · lemma — Closed finite-index subgroups of rational points of smooth connected groups over algebraically closed fields are the whole point group
- `prop-smooth-commutative-algebraic-groups-are-trigonalizable` · proposition — Smooth commutative affine algebraic groups over algebraically closed fields are trigonalizable
- `thm-lie-kolchin-for-smooth-connected-solvable-groups` · theorem — Lie-Kolchin: smooth connected solvable affine groups over algebraically closed fields are trigonalizable
- `lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant` · lemma — Morphisms from complete connected schemes to affine schemes are constant
- `lem-fixed-locus-and-normal-orbit-closure` · lemma — Fixed loci are closed and a normal subgroup fixing a point fixes the orbit closure
- `thm-borel-fixed-point-for-complete-schemes` · theorem — Borel fixed point theorem for complete schemes
- `lem-flag-variety-of-a-vector-space` · lemma — The variety of complete flags of a finite-dimensional vector space is smooth projective
- `lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag` · lemma — A Borel subgroup of maximal dimension is the stabilizer of a maximal flag
- `thm-quotient-by-a-borel-subgroup-is-complete` · theorem — The quotient of a connected group by a Borel subgroup of maximal dimension is complete
- `lem-power-map-on-unipotent-groups-is-bijective` · lemma — Power maps with exponent prime to the characteristic are bijective on unipotent groups
- `lem-smooth-multiplicative-type-groups-are-generated-by-their-finite-subgroups` · lemma — A smooth group of multiplicative type is the only closed subscheme containing all its finite subgroups
- `prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal` · proposition — Smooth diagonalizable groups over algebraically closed fields have only principal cocycles into smooth commutative unipotent groups
- `def-hochschild-cohomology-of-algebraic-groups` · definition — Hochschild cohomology of algebraic groups and the classification of Hochschild extensions
- `lem-shapiro-lemma-and-induced-modules-are-acyclic` · lemma — Shapiro's lemma for the trivial subgroup and acyclicity of free comodules
- `prop-linearly-reductive-iff-h1-vanishes` · proposition — Linear reductivity is equivalent to vanishing of first Hochschild cohomology
- `prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups` · proposition — Higher Hochschild cohomology vanishes for linearly reductive groups
- `lem-multiplicative-type-groups-are-linearly-reductive` · lemma — Groups of multiplicative type are linearly reductive
- `lem-ga-torsors-over-affine-schemes-are-trivial` · lemma — Torsors under the additive group over an affine scheme are trivial
- `prop-extensions-of-multiplicative-type-groups-by-vector-groups-split` · proposition — Extensions of multiplicative-type groups by a one-dimensional vector group with a linear action split
- `thm-trigonalizable-group-has-normal-series-with-vector-quotients` · theorem — Trigonalizable groups have a normal series with a multiplicative quotient and additive subgroup quotients
- `lem-dimension-one-smooth-connected-group-is-ga-or-gm` · lemma — One-dimensional smooth connected affine groups over perfect fields are additive groups or tori
- `lem-smooth-trigonalizable-group-normal-series-refinement` · lemma — Unipotent radicals of smooth connected trigonalizable groups over perfect fields have normal G_a series
- `lem-central-ga-subgroup-of-smooth-connected-unipotent-group` · lemma — A nontrivial smooth connected unipotent group with split torus action over a perfect field has a stable central G_a
- `thm-trigonalizable-extensions-split-over-algebraically-closed-fields` · theorem — Splitting trigonalizable extensions: algebraically closed fields and two perfect-field cases
- `thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate` · theorem — Conjugacy of diagonalizable complements and maximal subgroups under smoothness hypotheses
- `thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate` · theorem — Maximal tori of a smooth connected solvable group are conjugate
- `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field` · theorem — Conjugacy of Borel subgroups and of maximal tori over an algebraically closed field

### `unipotent-solvable-groups-and-borel-fixed-points-examples` — Unipotent and Solvable Groups and Borel Fixed Points — Examples (3 item(s))

- `ex-upper-triangular-unipotent-groups` · example — Upper unitriangular groups are unipotent, and the additive group is U_2
- `ex-borel-fixed-point-on-projective-space` · example — Borel subgroups of GL_n are flag stabilizers and act on projective space with a fixed line
- `cex-borel-fixed-point-needs-completeness` · counterexample — The fixed point theorem fails without completeness: the additive group acts on the affine line by translations

## Your seams

Your pages depend on another group's:

- `unipotent-solvable-groups-and-borel-fixed-points` requires `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` (group g, batch 15)

Another group's pages depend on yours:

- `lie-algebras-and-infinitesimal-group-schemes` (group a) requires your `affine-group-schemes-hopf-algebras-and-rational-representations`
- `highest-weights-and-rational-representations-of-split-reductive-groups` (group a) requires your `affine-group-schemes-hopf-algebras-and-rational-representations`
- `split-reductive-root-systems-bruhat-cells-and-parabolics` (group f) requires your `affine-group-schemes-hopf-algebras-and-rational-representations`
- `split-reductive-root-systems-bruhat-cells-and-parabolics` (group f) requires your `unipotent-solvable-groups-and-borel-fixed-points`
- `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` (group g) requires your `affine-group-schemes-hopf-algebras-and-rational-representations`

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
