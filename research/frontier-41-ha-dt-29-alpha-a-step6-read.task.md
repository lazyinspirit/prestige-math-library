# Step 6 Alpha group reader — read-only digest — group **a**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **23**, **27**, **29**: 3 A/B pair(s), 6 page(s), 82 item(s).

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
| 23 | `codimension-one-foliations-and-secondary-classes` | A | differential-topology | 577 | `smooth-cobordism-relations-groups-and-rings`, `foliation-holonomy-and-the-holonomy-groupoid`, `reeb-stability-and-global-foliation-constructions`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `chern-weil-theory-and-characteristic-forms`, `the-fundamental-group`, `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `further-trigonometric-identities-and-inverses`, `the-gauss-bonnet-theorem-for-riemannian-surfaces` |
| 23 | `codimension-one-foliations-and-secondary-classes-examples` | B | differential-topology | 578 | `codimension-one-foliations-and-secondary-classes` |
| 27 | `finite-abelian-categories-and-eilenberg-watts` | A | homological-algebra | 923 | `morita-bicategories-and-projective-generators`, `modular-representations-and-projective-covers`, `tensor-and-fusion-categories` |
| 27 | `finite-abelian-categories-and-eilenberg-watts-examples` | B | homological-algebra | 924 | `finite-abelian-categories-and-eilenberg-watts` |
| 29 | `graded-eilenberg-watts-and-shift-coherence` | A | homological-algebra | 927 | `eilenberg-watts-theorem-and-natural-transformations`, `morita-bicategories-and-projective-generators`, `graded-bimodules-and-tensor-functors`, `bounded-bimodule-complexes-and-derived-tensor`, `tensor-and-fusion-categories` |
| 29 | `graded-eilenberg-watts-and-shift-coherence-examples` | B | homological-algebra | 928 | `graded-eilenberg-watts-and-shift-coherence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `codimension-one-foliations-and-secondary-classes` — Codimension One Foliations, Secondary Classes and Characteristic Disk Foundations (50 item(s))

- `lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it` · lemma — Divisibility by a nowhere-vanishing one-form
- `lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary` · lemma — Restriction of a foliation transverse to the boundary
- `def-bott-partial-connection-on-the-normal-bundle-of-a-foliation` · definition — The Bott partial connection on the normal bundle of a foliation
- `lem-winding-number-jumps-by-one-across-a-regular-planar-arc` · lemma — The winding number jumps by one across a regular planar arc
- `lem-winding-number-is-locally-constant-via-integral-estimate` · lemma — The winding number is locally constant by an integral estimate
- `lem-c2-inverses-and-scalar-return-roots` · lemma — C² inverses and scalar return roots
- `lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood` · lemma — C¹ planar fields on a closed disk extend to a neighbourhood
- `lem-c2-saddle-function-has-c1-morse-coordinates` · lemma — A C² saddle function has C¹ Morse coordinates
- `lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions` · lemma — The Bott partial connection is well defined and flat along leaves
- `lem-c2-leaf-intersection-with-a-box-transversal-is-countable` · lemma — A C² leaf meets a local box transversal in at most countably many points
- `lem-finitely-cornered-regular-plane-curve-separates-without-choice` · lemma — A finitely cornered regular plane curve separates without choice
- `lem-c1-euclidean-maximal-flow-with-c2-upgrade` · lemma — C¹ Euclidean maximal flows, variational dependence and the finite C² upgrade
- `lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph` · lemma — Finite cellulations of compact C² subsurfaces relative to an embedded graph
- `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` · lemma — Finite surface normal forms, Jordan disks, and torsion control
- `lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega` · lemma — Frobenius divisibility: d omega equals eta wedge omega
- `def-smooth-foliated-concordance` · definition — Smooth foliated concordance of codimension-one foliations
- `lem-curvature-of-an-extending-bott-connection-lies-in-the-transverse-differential-ideal` · lemma — Curvature of an extending Bott connection lies in the transverse differential ideal
- `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary` · lemma — Relative generic position for characteristic disk maps
- `lem-characteristic-period-annulus-has-a-smooth-product-coordinate` · lemma — A C² product coordinate on a planar period annulus
- `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit` · lemma — Local generalized Poincare-Bendixson theorem for a precompact planar orbit
- `lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves` · lemma — A C1 hyperbolic planar gradient has local stable and unstable curves
- `lem-eta-wedge-d-eta-is-closed` · lemma — The Godbillon-Vey form eta wedge d eta is closed
- `thm-bott-vanishing-for-real-pontryagin-monomials-of-a-codimension-q-foliation` · theorem — Bott vanishing for real Pontryagin monomials of a foliation
- `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` · lemma — C² plaque transport and finite transverse fences preserve C² regularity
- `lem-characteristic-disk-center-saddle-index-count` · lemma — The characteristic disk has one more center than saddle
- `lem-finite-saddle-omega-graph-is-strongly-connected` · lemma — A finite saddle omega-graph is strongly connected and is a finite union of polycycles
- `lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form` · lemma — Independence of the auxiliary form eta up to exact forms
- `lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form` · lemma — Rescaling the defining form changes the Godbillon-Vey form by an exact form
- `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar` · lemma — Characteristic-disk singular images can be separated into distinct leaves relative to the boundary collar
- `lem-c2-first-integral-period-annuli-have-c2-products` · lemma — A C² first-integral period annulus has a C² leaf product
- `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` · lemma — A fixed cap product glues by unique transverse flow roots
- `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle` · lemma — A one-quadrant homoclinic disk contains a center
- `lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative` · lemma — Finite general position for a leafwise loop
- `def-godbillon-vey-class` · definition — The Godbillon-Vey class of a codimension-one foliation
- `lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup` · lemma — One-sided trivial-holonomy classes form a normal subgroup
- `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` · lemma — A compact leafwise nullhomotopy persists under a transverse deformation
- `lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar` · lemma — A fixed leafwise cap gives a joint transverse product with exact collar data
- `lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit` · lemma — A flat transverse drift realizes the period-annulus frontier as an omega-limit set
- `lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle` · lemma — A separated characteristic disk has a minimal nonidentity simple cycle
- `cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class` · corollary — Closed defining forms have vanishing Godbillon-Vey class
- `thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance` · theorem — Godbillon-Vey invariance under smooth foliated concordance
- `rem-classical-godbillon-vey-requires-at-least-c-two-regularity` · remark — The Godbillon-Vey class requires at least C-two regularity
- `def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation` · definition — Limit cycles of a leaf
- `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier` · lemma — A center period annulus has an orbit or polycycle frontier
- `def-limitwise-nullhomotopy-predicate-on-based-loops` · definition — Limitwise-nullhomotopy predicate on based loops
- `lem-a-finite-characteristic-circuit-has-c2-regular-port-traces` · lemma — A finite characteristic circuit has C² regular port traces
- `lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup` · lemma — Limitwise-nullhomotopy predicate descends to a normal subgroup
- `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family` · lemma — A saddle polycycle has a smooth transverse family on either adjacent annulus
- `def-limitwise-nullhomotopy-subgroup-of-a-leaf` · definition — Limitwise-nullhomotopy subgroup of a leaf
- `lem-fixed-transverse-fences-have-a-finite-crossing-word` · lemma — Fixed transverse fences and their finite crossing words

### `codimension-one-foliations-and-secondary-classes-examples` — Codimension One Foliations and Secondary Classes — Examples (2 item(s))

- `ex-a-fibration-over-the-circle-has-zero-godbillon-vey-class` · example — A fibration over the circle has zero Godbillon-Vey class
- `ex-godbillon-vey-rescaling-calculation` · example — Explicit Godbillon-Vey rescaling calculation

### `finite-abelian-categories-and-eilenberg-watts` — Finite Abelian Categories and Eilenberg–Watts (12 item(s))

- `def-superfluous-subobject-and-projective-cover-in-an-abelian-category` · definition — Superfluous subobjects and projective covers in an abelian category
- `lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite` · lemma — Finite-support families of finite-dimensional vector spaces are locally finite but not finite
- `prop-finite-dimensional-module-categories-are-intrinsically-finite` · proposition — Finite-dimensional module categories satisfy the intrinsic finiteness conditions
- `lem-finite-module-duality-is-exact-with-commuting-bimodule-actions` · lemma — Finite module duality is exact with commuting bimodule actions
- `lem-projectives-covering-the-simple-objects-generate-every-finite-length-object` · lemma — Projective epimorphisms onto the simples generate every finite-length object
- `thm-intrinsic-finite-category-hypotheses-give-a-finite-projective-generator` · theorem — Intrinsic finite category hypotheses give a finite projective generator
- `thm-finite-abelian-categories-are-finite-dimensional-module-categories` · theorem — Finite abelian categories admit finite-dimensional module models
- `thm-finite-eilenberg-watts-for-right-exact-linear-functors` · theorem — Finite Eilenberg–Watts for right exact linear functors
- `thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels` · theorem — Finite left exact functors are Hom functors with dual bimodule kernels
- `cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint` · corollary — Finite one-sided exactness is equivalent to existence of the corresponding adjoint
- `cor-finite-eilenberg-watts-is-a-biequivalence` · corollary — Finite Eilenberg–Watts is a biequivalence
- `cor-exact-finite-tensor-functors-have-right-projective-kernels` · corollary — Exact finite tensor functors have projective right-module kernels

### `finite-abelian-categories-and-eilenberg-watts-examples` — Finite Abelian Categories and Eilenberg–Watts — Examples (3 item(s))

- `ex-finite-right-exact-functor-needs-no-infinite-coproduct-hypothesis` · example — A finite right exact functor needs no infinite-coproduct hypothesis
- `cex-finite-length-and-finite-hom-do-not-imply-finite-category` · counterexample — Finite length and finite Hom do not imply a finite category
- `ex-dual-numbers-tensor-functor-is-right-exact-but-not-left-exact` · example — The dual-numbers tensor functor is right exact but not left exact

### `graded-eilenberg-watts-and-shift-coherence` — Graded Eilenberg–Watts and Shift Coherence (12 item(s))

- `lem-graded-degreewise-direct-sums-and-homogeneous-free-covers` · lemma — Degreewise direct sums and homogeneous free covers in graded modules
- `lem-internal-shift-endofunctors-and-tensor-compatibility` · lemma — Internal shifts are autoequivalences and commute with the graded tensor product
- `def-coherently-shift-compatible-functor-and-natural-transformation` · definition — Coherently shift-compatible functors and natural transformations
- `lem-coherent-shift-functors-and-transformations-form-hom-categories` · lemma — Coherently shift-compatible functors and transformations form k-linear hom categories
- `lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action` · lemma — Homogeneous right multiplication reconstructs the graded kernel action
- `lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent` · lemma — Graded tensor functors are k-linear, right exact, coproduct preserving and shift-coherent
- `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` · lemma — Colimits of a graded additive functor equal right exactness plus coproduct preservation
- `lem-homogeneous-free-presentations-prove-the-graded-comparison` · lemma — Homogeneous free presentations prove the graded comparison is an isomorphism
- `thm-graded-eilenberg-watts-with-coherent-shifts` · theorem — Graded Eilenberg-Watts theorem with coherent shifts
- `cor-graded-bimodule-maps-classify-shift-compatible-transformations` · corollary — Graded bimodule maps classify shift-compatible transformations
- `cor-graded-eilenberg-watts-respects-bicategory-coherence` · corollary — Graded Eilenberg-Watts respects bicategorical coherence
- `rem-derived-tensor-composition-and-the-enhancement-boundary` · remark — Derived tensor composition and the enhancement boundary

### `graded-eilenberg-watts-and-shift-coherence-examples` — Graded Eilenberg–Watts and Shift Coherence — Examples (3 item(s))

- `cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor` · counterexample — The degree-zero projection is exact and cocontinuous but not a graded tensor functor
- `cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module` · counterexample — Unrestricted graded natural transformations are not determined by the regular module
- `ex-internal-shift-as-a-graded-eilenberg-watts-kernel` · example — The internal shift as a graded Eilenberg-Watts kernel

## Your seams

Your pages depend on another group's:

- `codimension-one-foliations-and-secondary-classes` requires `foliation-holonomy-and-the-holonomy-groupoid` (group i, batch 21)
- `codimension-one-foliations-and-secondary-classes` requires `reeb-stability-and-global-foliation-constructions` (group c, batch 22)
- `finite-abelian-categories-and-eilenberg-watts` requires `morita-bicategories-and-projective-generators` (group c, batch 26)
- `graded-eilenberg-watts-and-shift-coherence` requires `eilenberg-watts-theorem-and-natural-transformations` (group c, batch 25)
- `graded-eilenberg-watts-and-shift-coherence` requires `morita-bicategories-and-projective-generators` (group c, batch 26)

Another group's pages depend on yours:

- `deligne-products-and-categorical-eilenberg-watts` (group d) requires your `finite-abelian-categories-and-eilenberg-watts`
- `vanishing-cycles-novikov-and-taut-foliations` (group k) requires your `codimension-one-foliations-and-secondary-classes`

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
