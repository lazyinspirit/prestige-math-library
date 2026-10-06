# Step 6 Alpha group reader — read-only digest — group **a**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **1**, **14**, **20**: 3 A/B pair(s), 6 page(s), 91 item(s).

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
| 1 | `plane-curves-local-intersection-multiplicity-and-bezout` | A | algebraic-geometry | 366.063 | `normal-varieties-normalization-and-zariskis-main-theorem`, `homogeneous-resultants-and-projective-intersection-length`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `lattice-paths-and-catalan-numbers`, `finite-averaging-and-character-theory-prerequisites` |
| 1 | `plane-curves-local-intersection-multiplicity-and-bezout-examples` | B | algebraic-geometry | 366.064 | `plane-curves-local-intersection-multiplicity-and-bezout` |
| 14 | `lie-algebras-and-infinitesimal-group-schemes` | A | scheme-theory | 875 | `group-schemes-of-finite-type-over-a-field`, `affine-group-schemes-hopf-algebras-and-rational-representations`, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `zariski-tangent-spaces-regular-points-smoothness-and-bertini`, `linear-recurrences-and-rational-generating-functions`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `flat-smooth-and-etale-morphisms` |
| 14 | `lie-algebras-and-infinitesimal-group-schemes-examples` | B | scheme-theory | 876 | `lie-algebras-and-infinitesimal-group-schemes`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `flat-smooth-and-etale-morphisms`, `zariski-tangent-spaces-regular-points-smoothness-and-bertini` |
| 20 | `highest-weights-and-rational-representations-of-split-reductive-groups` | A | algebraic-geometry | 893 | `affine-group-schemes-hopf-algebras-and-rational-representations`, `groups-of-multiplicative-type-and-arithmetic-tori`, `split-reductive-root-systems-bruhat-cells-and-parabolics`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`, `solvable-and-nilpotent-lie-algebras`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `lie-algebra-representations-enveloping-algebras-and-pbw` |
| 20 | `highest-weights-and-rational-representations-of-split-reductive-groups-examples` | B | algebraic-geometry | 894 | `highest-weights-and-rational-representations-of-split-reductive-groups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `plane-curves-local-intersection-multiplicity-and-bezout` — Plane Curves Local Intersection Multiplicity and Bezout (31 item(s))

- `def-plane-projective-curve` · definition — Plane projective curves and their components
- `def-multiplicity-plane-curve-point` · definition — Multiplicity of a plane curve at a point
- `def-tangent-lines-plane-curve-point` · definition — Tangent cone and tangent lines at a point
- `lem-smooth-plane-curve-unique-tangent` · lemma — Multiplicity one characterises smooth points with a unique tangent
- `lem-local-intersection-length-finite` · lemma — Finite local length exactly when no common local branch
- `def-local-intersection-multiplicity-plane-curves` · definition — Local intersection multiplicity of two plane curves
- `lem-intersection-multiplicity-independent-equations-coordinates` · lemma — Invariance of the local intersection multiplicity
- `thm-intersection-multiplicity-basic-properties` · theorem — Symmetry, additivity and local nature of intersection multiplicity
- `lem-truncated-plane-local-length` · lemma — Lengths of truncated plane local rings
- `lem-tangent-cone-ideal-containment` · lemma — Coprime tangent cones force a power of the maximal ideal into the local ideal
- `lem-plane-syzygy-truncation-injectivity` · lemma — The truncated multiplication map is injective exactly when the tangent cones are coprime
- `thm-intersection-multiplicity-at-least-product-multiplicities` · theorem — Intersection multiplicity dominates the product of multiplicities, with equality for separated tangent cones
- `cor-transverse-smooth-curves-intersection-one` · corollary — Transversal smooth curves meet with multiplicity one
- `lem-intersection-with-line-order-of-vanishing` · lemma — Intersection with a line is the order of vanishing of the restricted equation
- `def-resultant-homogeneous-polynomials` · definition — Resultant of two plane forms, viewed in one variable
- `lem-resultant-detects-common-projective-point` · lemma — The resultant detects finitely many common projective points
- `lem-bezout-no-common-component-finite-intersection` · lemma — Curves without a common component meet finitely often
- `lem-bezout-global-length-degree-product` · lemma — Global length of a plane complete intersection equals the degree product
- `lem-global-intersection-length-sum-local-lengths` · lemma — Global intersection length is the sum of the local multiplicities
- `thm-bezout-plane-curves` · theorem — Bezout's theorem for plane projective curves
- `cor-projective-plane-curves-meet` · corollary — Two plane projective curves meet
- `def-local-parameter-smooth-plane-curve` · definition — Uniformising parameters at smooth points of a plane curve
- `lem-local-intersection-as-vanishing-order-on-smooth-curve` · lemma — Intersection with a smooth curve is a vanishing order
- `cor-line-meets-degree-d-curve-counted-with-multiplicity` · corollary — A line meets a degree-d curve in d points counted with multiplicity
- `def-flex-and-bitangent-plane-curve` · definition — Flexes and bitangents defined by intersection multiplicity
- `cor-tangent-line-flex-multiplicity` · corollary — Flexes are contacts of order at least three with the tangent line
- `def-linear-system-plane-curves` · definition — Linear systems of plane curves and their base loci
- `thm-bezout-uniqueness-low-degree-interpolation` · theorem — Curves sharing too many points share a component
- `lem-projective-coordinate-invariance-bezout-sum` · lemma — Invariance of the Bezout sum under projective coordinate changes
- `cor-pascal-bezout-obstruction-template` · corollary — The component-counting obstruction template for incidence arguments
- `rem-bezout-needs-projective-algebraic-closure-multiplicity` · remark — Why Bezout needs projectivity, algebraic closure and multiplicity

### `plane-curves-local-intersection-multiplicity-and-bezout-examples` — Plane Curves Local Intersection Multiplicity and Bezout — Examples (10 item(s))

- `ex-line-conic-two-intersections` · example — A line and a conic meet in two points counted with multiplicity
- `ex-tangent-line-conic-double-intersection` · example — A tangent line meets a conic with multiplicity two at one point
- `ex-cusp-line-intersection-multiplicities` · example — Line multiplicities at a cusp
- `ex-node-line-intersection-branches` · example — Lines through a node and its two branches
- `cex-affine-bezout-misses-points-at-infinity` · counterexample — Bezout fails on the affine plane because points at infinity are missing
- `cex-real-bezout-needs-algebraic-closure` · counterexample — Bezout needs algebraic closure: an imaginary conic has no real point
- `cex-distinct-point-count-needs-multiplicity` · counterexample — Counting distinct points is not enough: tangent contact
- `cex-common-component-bezout-sum-not-finite` · counterexample — A common component makes the intersection sum infinite
- `ex-two-plane-cubics-nine-points` · example — Two transverse cubics meet in nine points
- `ex-flex-cubic-contact-order-three` · example — A flex of a cubic has contact order three

### `lie-algebras-and-infinitesimal-group-schemes` — Lie Algebras and Infinitesimal Group Schemes (10 item(s))

- `def-lie-algebra-of-a-group-scheme` · definition — The Lie algebra of a group scheme
- `lem-lie-algebra-tangent-space-and-functoriality` · lemma — The tangent space at the identity is a vector space, and Lie is a functor
- `lem-adjoint-representation-of-an-affine-group-scheme` · lemma — The adjoint representation of an affine group scheme
- `lem-lie-algebra-of-the-general-linear-group` · lemma — The Lie algebra of the general linear group
- `thm-lie-bracket-and-adjoint-action-from-infinitesimals` · theorem — The Lie bracket from infinitesimals and the adjoint action
- `lem-invariant-differentials-of-a-group-scheme` · lemma — Invariant differentials and the cotangent space at the identity
- `lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors` · lemma — A differential generating a free direct summand is a nonzerodivisor
- `lem-free-differentials-imply-regular-in-characteristic-zero` · lemma — Free differentials imply regularity in characteristic zero
- `thm-smoothness-over-characteristic-zero-via-free-differentials` · theorem — Smoothness over a characteristic-zero field via free differentials
- `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` · theorem — Cartier's theorem: affine group schemes in characteristic zero are smooth

### `lie-algebras-and-infinitesimal-group-schemes-examples` — Lie Algebras and Infinitesimal Group Schemes — Examples (3 item(s))

- `ex-additive-and-infinitesimal-group-schemes` · example — Additive and infinitesimal group schemes
- `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` · example — Lie algebras of the additive, infinitesimal and general linear groups
- `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` · counterexample — The Lie algebra does not detect nonsmooth group schemes

### `highest-weights-and-rational-representations-of-split-reductive-groups` — Highest Weights and Rational Representations of Split Reductive Groups (35 item(s))

- `def-weight-and-dominant-weight-of-a-rational-representation` · definition — Weights, dominant weights and the highest-weight order of a rational representation
- `def-primitive-vector-of-a-rational-representation` · definition — Primitive vectors for a Borel pair
- `lem-root-group-expansion-of-a-weight-vector` · lemma — Expansion of a root-group translate of a weight vector
- `lem-normalizer-action-permutes-weight-spaces` · lemma — The normalizer of the torus permutes weight spaces
- `prop-module-generated-by-a-primitive-vector` · proposition — Modules generated by a primitive vector
- `thm-simple-rational-representations-have-a-highest-weight` · theorem — Simple rational representations have a unique highest weight
- `lem-simple-rational-representations-are-finite-dimensional` · lemma — Simple rational representations are finite-dimensional
- `thm-simple-modules-with-equal-highest-weight-are-isomorphic` · theorem — Simple modules with equal highest weight are isomorphic
- `def-induced-coordinate-module-e-lambda` · definition — The induced coordinate module E(lambda)
- `prop-primitive-vectors-of-the-induced-coordinate-module` · proposition — Primitive vectors of the induced coordinate module
- `def-simple-and-semisimple-representations` · definition — Simple and semisimple rational representations
- `lem-tensor-and-hom-representations-are-rational` · lemma — Tensor products, exterior powers and Hom spaces of finite-dimensional rational representations are rational
- `lem-power-extension-over-a-normal-affine-domain` · lemma — Power extension over a normal affine domain
- `lem-top-exterior-power-detects-subspace-stabilizers` · lemma — The top exterior power detects stabilizers of a subspace
- `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup` · theorem — Chevalley: every closed subgroup is a line stabilizer
- `lem-primitive-vectors-from-standard-maximal-parabolics` · lemma — Primitive vectors from standard maximal parabolics
- `lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples` · lemma — Multiples of the fundamental weights are primitive weights in the semisimple case
- `lem-tensor-products-of-primitive-vectors` · lemma — Tensor products of primitive vectors
- `lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights` · lemma — Every dominant weight of a split semisimple group is a primitive weight
- `def-contragredient-rational-representation` · definition — Contragredient (dual) rational representation
- `lem-centre-central-characters-and-descent-along-central-isogenies` · lemma — Central characters and descent along a central isogeny
- `lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights` · lemma — Dominant characters of a torus times a split semisimple group are primitive weights
- `lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups` · lemma — Every dominant character of a split reductive group is a highest weight
- `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups` · theorem — Dominant weights classify the simple rational representations of a split reductive group
- `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces` · lemma — Lie algebras of subspace stabilizers and Lie-stable subspaces
- `lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero` · lemma — Lie ideals and normal connected subgroups in characteristic zero
- `lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple` · lemma — The Lie algebra of a semisimple group in characteristic zero is semisimple
- `lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate` · lemma — Trace forms of faithful representations of semisimple Lie algebras are nondegenerate
- `lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters` · lemma — Semisimple groups are perfect and have no nontrivial characters
- `lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules` · lemma — The Casimir element of a rational representation is an endomorphism of G-modules
- `lem-complete-reducibility-reduces-to-codimension-one-simple-submodules` · lemma — Complete reducibility reduces to splitting codimension-one simple submodules
- `lem-semisimplicity-of-rational-representations-descends-along-field-extensions` · lemma — Semisimplicity of rational representations descends along field extensions
- `thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive` · theorem — Semisimple groups in characteristic zero are linearly reductive
- `thm-complete-reducibility-of-rational-modules-in-characteristic-zero` · theorem — Complete reducibility of rational modules in characteristic zero
- `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic` · remark — The highest-weight classification does not imply semisimplicity in positive characteristic

### `highest-weights-and-rational-representations-of-split-reductive-groups-examples` — Highest Weights and Rational Representations of Split Reductive Groups — Examples (2 item(s))

- `ex-fundamental-sl2-modules-in-characteristic-p` · example — The simple modules of SL_2 and its fundamental representation
- `cex-rational-modules-need-not-be-semisimple-in-characteristic-p` · counterexample — Rational modules need not be semisimple in characteristic p

## Your seams

Your pages depend on another group's:

- `lie-algebras-and-infinitesimal-group-schemes` requires `affine-group-schemes-hopf-algebras-and-rational-representations` (group e, batch 13)
- `highest-weights-and-rational-representations-of-split-reductive-groups` requires `affine-group-schemes-hopf-algebras-and-rational-representations` (group e, batch 13)
- `highest-weights-and-rational-representations-of-split-reductive-groups` requires `split-reductive-root-systems-bruhat-cells-and-parabolics` (group f, batch 19)

Another group's pages depend on yours:

- `chow-groups-intersection-products-and-grothendieck-riemann-roch` (group c) requires your `plane-curves-local-intersection-multiplicity-and-bezout`
- `split-reductive-root-systems-bruhat-cells-and-parabolics` (group f) requires your `lie-algebras-and-infinitesimal-group-schemes`

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
