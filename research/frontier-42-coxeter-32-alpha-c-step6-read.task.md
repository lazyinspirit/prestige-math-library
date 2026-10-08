# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **4**, **17**, **20**: 3 A/B pair(s), 6 page(s), 26 item(s).

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
| 4 | `real-forms-and-reflection-geometry` | A | coxeter-groups | 1724 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `dual-spaces-bilinear-forms-and-inertia`, `sine-cosine-and-the-definition-of-pi`, `group-homomorphisms-and-the-isomorphism-theorems` |
| 4 | `real-forms-and-reflection-geometry-examples` | B | coxeter-groups | 1725 | `real-forms-and-reflection-geometry` |
| 17 | `finite-reflection-arrangements-and-spherical-coxeter-complexes` | A | coxeter-groups | 1750 | `finite-coxeter-diagrams-and-complete-classification`, `finite-lattice-projections-and-coxeter-chain-labels`, `further-trigonometric-identities-and-inverses` |
| 17 | `finite-reflection-arrangements-and-spherical-coxeter-complexes-examples` | B | coxeter-groups | 1751 | `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `the-divergence-theorem-and-classical-stokes`, `hilbert-space-geometry-and-riesz-representation`, `further-trigonometric-identities-and-inverses`, `permutation-statistics-inversions-and-eulerian-numbers` |
| 20 | `finite-coxeter-invariants-and-coinvariant-gradings` | A | coxeter-groups | 1756 | `finite-coxeter-diagrams-and-complete-classification`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `relations-functions-and-quotients`, `bipartite-coxeter-elements-and-ordered-root-complexes`, `complexification-realification-and-real-structures`, `reductive-affine-invariant-theory-and-geometric-quotients` |
| 20 | `finite-coxeter-invariants-and-coinvariant-gradings-examples` | B | coxeter-groups | 1757 | `finite-coxeter-invariants-and-coinvariant-gradings` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `real-forms-and-reflection-geometry` — Real Forms and Reflection Geometry (6 item(s))

- `def-cg-real-coxeter-form-and-reflection` · definition — The real Coxeter form, its radical, reflections, and form-preserving maps
- `lem-cg-reflection-form-invariance-and-rank-two-orders` · lemma — Reflections: involutivity, form invariance, fixed hyperplane, and exact rank-two order
- `def-cg-canonical-reflection-homomorphism` · definition — The canonical reflection homomorphism, roots, reflections, and the positive cone
- `lem-cg-reflection-representation-descends-and-root-norms` · lemma — Descent of the reflection representation, unit root norms, and conjugation of reflections
- `def-cg-dual-chambers-and-reflection-hyperplanes` · definition — The dual action, chambers, faces, and root hyperplanes
- `lem-cg-dual-action-and-chamber-faces-exist` · lemma — The dual action, the faces, and the rank-two chamber tiling

### `real-forms-and-reflection-geometry-examples` — Real Forms and Reflection Geometry — Examples (3 item(s))

- `ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes` · example — Reflection matrices in a positive plane, a Lorentzian plane, and a plane with radical
- `ex-cg-null-normal-admits-no-displayed-reflection` · example — A null normal admits no reflection of the displayed form
- `ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product` · example — The finite dihedral rotation and the infinite unipotent rank-two product

### `finite-reflection-arrangements-and-spherical-coxeter-complexes` — Finite Reflection Arrangements and Spherical Coxeter Complexes (3 item(s))

- `def-cg-finite-reflection-arrangement-and-spherical-chambers` · definition — The finite reflection arrangement, its chambers, the spherical chamber complex, and the coset face poset
- `thm-cg-finite-chamber-tiling-and-coset-face-identification` · theorem — The finite chamber tiling, the face-stabiliser identification, and the spherical Coxeter complex as a triangulation of the sphere
- `thm-cg-finite-parabolic-longest-element-and-opposition` · theorem — The longest element as the opposition of the chamber, and longest elements of finite parabolics

### `finite-reflection-arrangements-and-spherical-coxeter-complexes-examples` — Finite Reflection Arrangements and Spherical Coxeter Complexes — Examples (3 item(s))

- `ex-cg-circle-coxeter-complex-of-i2-5` · example — The Coxeter complex of $I_2(5)$: a circle triangulated by a decagon
- `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` · example — The Coxeter complex of $A_3$: a triangulation of the sphere and the residue of a proper parabolic
- `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` · example — Infinite dihedral type: the chamber system is a line, not a sphere; the contractible model is deferred

### `finite-coxeter-invariants-and-coinvariant-gradings` — Finite Coxeter Invariants and Coinvariant Gradings (8 item(s))

- `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` · lemma — Complexifying a finite Coxeter reflection representation: faithfulness, complex reflections, and the hypotheses of the invariant-theory suppliers
- `def-cg-coxeter-basic-degrees-and-graded-coinvariants` · definition — Basic degrees, exponents, and the graded coinvariant algebra of a finite Coxeter system
- `lem-cg-classical-coxeter-spectra-from-reflection-models` · lemma — The Coxeter elements of the classical types A_n, B_n, D_n and I_2(m): characteristic polynomials, orders and spectral exponents from their reflection models
- `lem-cg-basic-degrees-independent-and-coinvariant-series` · lemma — The basic degrees are independent of the chosen family; Hilbert series of the invariants and of the coinvariant algebra; the order formula and the Molien identity
- `lem-cg-formal-rational-differentials-and-invariant-jacobian` · lemma — Algebraicity of the coordinates over the invariant field and non-vanishing of the invariant Jacobian
- `thm-cg-coinvariant-top-degree-and-discriminant` · theorem — The total degree sum, the invariant Jacobian as the discriminant, anti-invariants, and the top coinvariant class
- `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` · lemma — The six exceptional Coxeter spectra: characteristic polynomials, orders and spectral exponents from exact matrices
- `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` · theorem — A regular Coxeter eigenvector determines the basic degrees: the exponent-residue identification and the complete degree tables for all finite Coxeter types

### `finite-coxeter-invariants-and-coinvariant-gradings-examples` — Finite Coxeter Invariants and Coinvariant Gradings — Examples (3 item(s))

- `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class` · example — The A_2 discriminant, its Jacobian and the top coinvariant class in $\mathbb C[u,z]/(uz,u^3+z^3)$
- `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` · example — The invariants and the coinvariant Hilbert series of $I_2(m)$: an explicit computation and the noncrystallographic contrast
- `ex-cg-e6-and-h3-spectra-from-exact-matrices` · example — The exceptional spectra for E_6 and H_3 computed exactly: characteristic polynomials, cyclotomic factorisations and the resulting degree tables

## Your seams

Your pages depend on another group's:

- `real-forms-and-reflection-geometry` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `finite-reflection-arrangements-and-spherical-coxeter-complexes` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)
- `finite-reflection-arrangements-and-spherical-coxeter-complexes` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)
- `finite-coxeter-invariants-and-coinvariant-gradings` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)
- `finite-coxeter-invariants-and-coinvariant-gradings` requires `bipartite-coxeter-elements-and-ordered-root-complexes` (group j, batch 19)

Another group's pages depend on yours:

- `canonical-roots-signs-and-faithful-reflections` (group b) requires your `real-forms-and-reflection-geometry`
- `spherical-parabolic-cosets-and-the-davis-complex` (group d) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `spherical-simplex-metrics-angular-links-and-cones` (group e) requires your `real-forms-and-reflection-geometry`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `finite-coxeter-invariants-and-coinvariant-gradings`
- `coxeter-euler-forms-and-sortable-chamber-cones` (group i) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `finite-reflection-length-and-orthogonal-moved-spaces` (group j) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `weak-order-inversions-and-lattice-operations` (group k) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `affine-reflections-coroot-translations-and-alcoves` (group l) requires your `real-forms-and-reflection-geometry`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-42-coxeter-32`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
