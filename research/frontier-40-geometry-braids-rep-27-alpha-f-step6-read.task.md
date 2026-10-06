# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **8**, **11**, **19**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 8 | `categorical-braid-actions-and-decategorification` | A | braid-groups | 757 | `graded-quiver-algebras-and-derived-tensor-functors`, `geometric-braids-and-artin-generators`, `the-burau-representations`, `grothendieck-groups-and-graded-cartan-pairings`, `perfect-complexes-and-triangulated-grothendieck-groups`, `punctured-disks-mapping-classes-and-point-pushing`, `homological-gaussian-elimination`, `lawrence-krammer-bigelow-and-linearity` |
| 8 | `categorical-braid-actions-and-decategorification-examples` | B | braid-groups | 758 | `categorical-braid-actions-and-decategorification` |
| 11 | `hochschild-homology-and-triply-graded-link-homology` | A | braid-groups | 765 | `matrix-factorizations-and-khovanov-rozansky-link-homology`, `rouquier-complexes-and-categorical-braid-relations`, `hochschild-homology-and-diagonal-koszul-resolutions`, `hochschild-hyperhomology-and-cyclic-tensor-invariance`, `bounded-bimodule-complexes-and-derived-tensor` |
| 11 | `hochschild-homology-and-triply-graded-link-homology-examples` | B | braid-groups | 766 | `hochschild-homology-and-triply-graded-link-homology` |
| 19 | `split-reductive-root-systems-bruhat-cells-and-parabolics` | A | algebraic-geometry | 891 | `group-schemes-of-finite-type-over-a-field`, `affine-group-schemes-hopf-algebras-and-rational-representations`, `lie-algebras-and-infinitesimal-group-schemes`, `groups-of-multiplicative-type-and-arithmetic-tori`, `unipotent-solvable-groups-and-borel-fixed-points`, `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| 19 | `split-reductive-root-systems-bruhat-cells-and-parabolics-examples` | B | algebraic-geometry | 892 | `split-reductive-root-systems-bruhat-cells-and-parabolics`, `bruhat-decomposition-and-flags-over-finite-fields` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `categorical-braid-actions-and-decategorification` — Categorical Braid Actions and Decategorification (30 item(s))

- `def-weak-action-of-a-group-on-a-category` · definition — Weak action of a group on a category
- `def-faithful-weak-categorical-action` · definition — Faithful weak action
- `def-curves-and-geometric-intersection-numbers-on-the-marked-disk` · definition — Curves and geometric intersection numbers on the marked disk
- `lem-geometric-intersection-numbers-are-isotopy-invariants` · lemma — Geometric intersection numbers are isotopy invariants
- `def-basic-arcs-admissible-curves-and-normal-form` · definition — Basic arcs, admissible curves and the standard normal form
- `lem-standard-twists-fix-the-complementary-basic-arcs-and-commute` · lemma — The standard twists commute and fix the complementary basic arcs
- `lem-standard-disk-twists-generate-a-free-abelian-subgroup` · lemma — The standard nested twists generate a free abelian subgroup
- `def-khovanov-seidel-bigraded-cover-and-bigraded-curves` · definition — The Z^2 cover of the projectivized tangent bundle and bigraded curves
- `def-khovanov-seidel-bigrading-cover-and-local-intersection-indices` · definition — Local indices and bigraded intersection numbers
- `lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action` · lemma — Existence and rigidity of bigradings
- `lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading` · lemma — The preferred lift of a half twist shifts the bigrading by chi(-1,1)
- `lem-normal-form-string-types-and-their-geometric-intersection-contributions` · lemma — String types and their contributions to geometric intersection numbers
- `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers` · lemma — Bigraded string types and their contributions to I^{bigr}
- `lem-khovanov-seidel-generator-complexes-are-mutually-inverse` · lemma — The generator complexes are mutually inverse
- `lem-khovanov-seidel-complexes-satisfy-far-commutativity` · lemma — Far commutativity of the generator complexes
- `lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation` · lemma — The three-term braid relation
- `def-khovanov-seidel-complex-of-a-braid-word` · definition — The complex of a braid word
- `thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action` · theorem — The Khovanov-Seidel complexes give a weak derived braid action
- `def-khovanov-seidel-path-ideal` · definition — The Khovanov-Seidel path ideal
- `lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives` · lemma — Finite graded projectives are sums of shifted vertex projectives
- `lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives` · lemma — The graded Grothendieck group is free on the vertex-projective classes
- `def-graded-grothendieck-group-of-a-m-perfect-complexes` · definition — The graded Grothendieck group of A_m
- `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action` · proposition — Decategorification is the unreduced Burau action
- `def-khovanov-seidel-complex-of-an-admissible-bigraded-curve` · definition — The complex of an admissible bigraded curve
- `lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves` · lemma — The curve complex is invariant under normal-form moves
- `lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators` · lemma — Curve complexes intertwine the braid generators
- `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections` · theorem — Homs compute bigraded arc intersections
- `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid` · lemma — The basic arcs detect the identity braid
- `thm-the-khovanov-seidel-weak-braid-action-is-faithful` · theorem — The Khovanov-Seidel weak braid action is faithful
- `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel` · lemma — A nontrivial five-strand braid lies in the Burau kernel

### `categorical-braid-actions-and-decategorification-examples` — Categorical Braid Actions and Decategorification — Examples (4 item(s))

- `ex-cancelling-a-generator-with-its-inverse-categorical-twist` · example — Cancelling a generator with its inverse categorical twist
- `ex-decategorifying-a-khovanov-seidel-generator` · example — Decategorifying a generator on the vertex-projective basis
- `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences` · counterexample — Equal actions on K_0 do not imply isomorphic derived autoequivalences
- `cex-ks-weak-actions-do-not-supply-pentagon-coherence-data` · counterexample — Weak actions do not supply pentagon coherence data

### `hochschild-homology-and-triply-graded-link-homology` — Hochschild Homology and Triply-Graded Link Homology (13 item(s))

- `def-reduced-type-a-polynomial-ring-for-hhh` · definition — The reduced type-A polynomial ring and Soergel bimodules for the HHH construction
- `def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor` · definition — Unreduced type-A Soergel bimodules and the trivial polynomial factor
- `def-khovanovs-hhh-rouquier-generator-complexes` · definition — Khovanov's generator complexes for the HHH construction
- `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` · definition — The termwise Hochschild complex of a Rouquier complex and the groups HHH
- `def-reduced-khovanov-rozansky-homology` · definition — The reduced Khovanov-Rozansky homology
- `lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex` · lemma — Setting a to zero in a closed KR factorization gives the layer-by-layer Koszul complex
- `lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence` · lemma — The first-layer relations of a closed MOY resolution form a regular sequence
- `lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex` · lemma — The remaining closure Koszul complex is the diagonal Hochschild complex
- `lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule` · lemma — A closed MOY resolution's Koszul complex computes Hochschild homology of its Soergel bimodule
- `lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings` · lemma — The Koszul-Hochschild comparison respects crossing differentials and trigradings
- `thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology` · theorem — HHH is isomorphic to reduced Khovanov-Rozansky homology
- `cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift` · corollary — HHH is an oriented-link invariant up to an overall trigrading shift
- `cor-the-graded-euler-characteristic-of-hhh-is-homflypt` · corollary — The normalized graded Euler series of HHH recovers HOMFLYPT

### `hochschild-homology-and-triply-graded-link-homology-examples` — Hochschild Homology and Triply-Graded Link Homology — Examples (4 item(s))

- `ex-hochschild-homology-of-the-rank-one-soergel-bimodule` · example — Hochschild homology of the rank-one Soergel bimodule
- `ex-hhh-of-the-positive-two-strand-torus-knot` · example — The HHH of the positive two-strand torus knot
- `ex-the-trivial-one-braid-hhh-grading-normalization` · example — The trivial one-braid and the grading normalization
- `ex-termwise-and-total-hochschild-theories-have-different-grading-outputs` · example — Termwise and total Hochschild theories have different grading outputs

### `split-reductive-root-systems-bruhat-cells-and-parabolics` — Split Reductive Root Systems, Bruhat Cells, and Parabolics (36 item(s))

- `def-radical-and-unipotent-radical-of-an-algebraic-group` · definition — Radical, unipotent radical, semisimple and reductive algebraic groups
- `lem-character-and-cocharacter-lattices-of-a-split-torus` · lemma — Character and cocharacter lattices of a split torus
- `def-split-reductive-algebraic-group` · definition — Split reductive groups
- `lem-reductive-center-radical-and-semisimple-quotient` · lemma — Centre, radical and semisimple quotient of a reductive group
- `lem-lie-functor-exactness-fixed-points-and-generation` · lemma — The Lie functor: exactness, fixed points and generation
- `def-limit-of-a-gm-orbit-and-concentrator-subscheme` · definition — Limits of one-parameter orbits and concentrator subschemes
- `thm-concentrator-subscheme-representability-and-smoothness` · theorem — Representability and smoothness of concentrator subschemes
- `lem-graded-nakayama` · lemma — Graded Nakayama lemma
- `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions` · theorem — Fixed-point subschemes and centralizers of linearly reductive actions
- `lem-fixed-loci-and-centralizers-of-torus-actions-are-connected` · lemma — Connectedness of fixed loci and centralizers of torus actions
- `lem-nilpotent-group-structure-and-maximal-torus-criterion` · lemma — Structure of connected nilpotent groups and the maximal-torus criterion
- `thm-cocharacter-limit-subgroups` · theorem — Limit subgroups attached to cocharacters
- `thm-luna-map-and-bialynicki-birula-decomposition` · theorem — Luna maps and the Bialynicki-Birula decomposition
- `lem-connected-groups-of-rank-zero-are-unipotent` · lemma — Groups of rank zero are unipotent
- `thm-weight-subgroups-of-a-torus-action` · theorem — T-stable subgroups attached to semigroups of characters
- `lem-homogeneous-curves-and-automorphisms-of-p1` · lemma — Homogeneous curves, the projective line and its automorphisms
- `lem-sl2-structure-and-root-coordinates` · lemma — Structure of SL_2 and its root coordinates
- `thm-rank-one-connected-groups` · theorem — Connected groups of semisimple rank one
- `thm-split-rank-one-reductive-classification` · theorem — Split reductive groups of semisimple rank one
- `thm-solvable-subgroups-and-the-radical-as-borel-intersection` · theorem — Solvable subgroups lie in Borel subgroups; the radical as a Borel intersection
- `lem-cartan-subgroups-conjugacy-and-density` · lemma — Cartan subgroups: conjugacy and density
- `thm-chevalley-centralizer-radical-and-reductive-centralizers` · theorem — Chevalley's theorem and reductivity of torus centralizers
- `lem-maximal-tori-extension-conjugacy-and-derived-group` · lemma — Maximal tori, field extensions, conjugacy and derived subgroups
- `def-abstract-root-datum-and-its-weyl-group` · definition — Root data and their Weyl groups
- `lem-root-datum-combinatorics` · lemma — Combinatorics of a reduced root datum
- `def-roots-and-root-groups-of-a-split-reductive-group` · definition — Roots, root groups and the Weyl group of a split reductive group
- `thm-root-subgroups-of-a-split-reductive-group` · theorem — Root subgroups of a split reductive group and the reduced root datum
- `lem-borel-root-group-opposition` · lemma — A Borel subgroup contains exactly one of each opposite pair of root groups
- `thm-weyl-group-borel-chambers` · theorem — The Weyl group, Borel subgroups and chambers of a split reductive group
- `def-root-datum-of-a-split-reductive-group` · definition — The root datum of a split reductive group
- `lem-simple-reflection-double-coset-rule` · lemma — Simple reflections act on double cosets by the Tits rule
- `lem-root-coordinate-cells-and-generation` · lemma — Root coordinates, cell subgroups and generation
- `thm-bruhat-decomposition-for-split-reductive-group` · theorem — Bruhat decomposition for a split reductive group
- `def-parabolic-subgroup-of-an-affine-algebraic-group` · definition — Parabolic subgroups
- `lem-standard-levi-subgroup` · lemma — Standard Levi subgroups of a split reductive group
- `thm-parabolics-and-levi-decomposition` · theorem — Parabolic subgroups and Levi decomposition

### `split-reductive-root-systems-bruhat-cells-and-parabolics-examples` — Split Reductive Root Systems, Bruhat Cells, and Parabolics -- Examples (3 item(s))

- `ex-root-groups-and-bruhat-cells-for-sl2` · example — Root groups and Bruhat cells for SL_2
- `ex-standard-parabolics-in-gl-n` · example — Standard parabolics in GL_n
- `cex-lie-root-system-does-not-record-full-root-datum` · counterexample — The Lie algebra and root system do not determine the root datum

## Your seams

Your pages depend on another group's:

- `categorical-braid-actions-and-decategorification` requires `the-burau-representations` (group b, batch 5)
- `hochschild-homology-and-triply-graded-link-homology` requires `matrix-factorizations-and-khovanov-rozansky-link-homology` (group d, batch 10)
- `hochschild-homology-and-triply-graded-link-homology` requires `rouquier-complexes-and-categorical-braid-relations` (group c, batch 9)
- `split-reductive-root-systems-bruhat-cells-and-parabolics` requires `affine-group-schemes-hopf-algebras-and-rational-representations` (group e, batch 13)
- `split-reductive-root-systems-bruhat-cells-and-parabolics` requires `lie-algebras-and-infinitesimal-group-schemes` (group a, batch 14)
- `split-reductive-root-systems-bruhat-cells-and-parabolics` requires `unipotent-solvable-groups-and-borel-fixed-points` (group e, batch 18)
- `split-reductive-root-systems-bruhat-cells-and-parabolics` requires `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` (group g, batch 15)

Another group's pages depend on yours:

- `highest-weights-and-rational-representations-of-split-reductive-groups` (group a) requires your `split-reductive-root-systems-bruhat-cells-and-parabolics`
- `rouquier-complexes-and-categorical-braid-relations` (group c) requires your `categorical-braid-actions-and-decategorification`

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
