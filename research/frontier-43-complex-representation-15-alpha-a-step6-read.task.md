# Step 6 Alpha group reader — read-only digest — group **a**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **1**, **9**: 2 A/B pair(s), 4 page(s), 65 item(s).

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
| 1 | `direct-integral-decomposition-and-type-i-groups` | A | representation-theory | 1232 | `unitary-representations-positive-type-and-gns`, `group-c-star-algebras-and-the-fell-unitary-dual`, `measurable-hilbert-fields-and-direct-integral-operators`, `conditional-distributions-and-regular-conditional-probability`, `mackeys-imprimitivity-theorem`, `pontryagin-duality-for-locally-compact-abelian-groups` |
| 1 | `direct-integral-decomposition-and-type-i-groups-examples` | B | representation-theory | 1233 | `direct-integral-decomposition-and-type-i-groups` |
| 9 | `hodge-theory-on-compact-riemann-surfaces` | A | complex-analysis | 1610 | `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `integration-of-forms-and-the-general-stokes-theorem`, `riemannian-metrics-length-distance-and-volume`, `complex-lp-spaces-and-test-function-conventions`, `hilbert-space-geometry-and-riesz-representation`, `reflexivity-and-eberlein-smulian`, `rellich-kondrachov-and-sobolev-compactness`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `interior-and-boundary-sobolev-elliptic-regularity`, `riemann-surfaces-branched-maps-and-differentials`, `the-dbar-complex-and-integral-solutions` |
| 9 | `hodge-theory-on-compact-riemann-surfaces-examples` | B | complex-analysis | 1611 | `hodge-theory-on-compact-riemann-surfaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `direct-integral-decomposition-and-type-i-groups` — Direct Integral Decomposition and Type I Groups (44 item(s))

- `def-direct-integral-of-unitary-representations` · definition — Direct integrals of unitary representations
- `def-factor-representation-and-primary-representation` · definition — Factor (primary) representations
- `lem-l-one-of-a-second-countable-group-is-separable` · lemma — L1 of a second-countable locally compact group is separable
- `def-measurable-field-of-von-neumann-algebras` · definition — Measurable fields of von Neumann algebras and their direct integrals
- `lem-measurable-gram-schmidt-and-constant-field-trivializations` · lemma — Measurable Gram-Schmidt and constant-field trivializations on dimension strata
- `lem-closed-witness-codings-and-measured-projections` · lemma — Closed witness codings and completion measurability of Borel projections
- `lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections` · lemma — Measurable dense selections for fields of nonempty compact sets
- `thm-double-commutant-theorem-for-concrete-von-neumann-algebras` · theorem — The double commutant theorem for concrete von Neumann algebras
- `def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra` · definition — States, tracial states and faithful normal traces on a von Neumann algebra
- `def-commensurator-unitary-character-and-monomial-induced-representation` · definition — Commensurator, unitary characters and monomial induced representations in the transversal model
- `lem-c-star-state-gns-purity-and-polish-state-space` · lemma — C star state GNS construction, purity and Polish pure-state spaces
- `def-mackey-borel-structure-and-countable-separation` · definition — Mackey Borel structure and countable separation of the unitary dual
- `lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous` · lemma — A measurable direct integral of unitary representations is strongly continuous
- `lem-borel-relations-admit-conull-borel-uniformizations` · lemma — Conull Borel uniformizations and Borel versions of measured suprema
- `def-type-i-factor-representation-and-type-i-group` · definition — Type I factor representations and type I groups
- `lem-polar-decomposition-and-nonzero-partial-isometries-in-factors` · lemma — Polar decomposition inside a von Neumann algebra and nonzero partial isometries between nonzero projections in a factor
- `lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra` · lemma — The full group C star algebra of a second-countable group is separable
- `lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity` · lemma — A sequential approximate identity concentrated near the identity
- `lem-monomial-induced-representations-transversal-model-properties` · lemma — Matrix-coefficient properties of the transversal model of a monomial representation
- `lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two` · lemma — Free factors of the free group of rank two are self-commensurating with trivial conjugate intersections
- `lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries` · lemma — Two common diagonalizations differ by a bimeasurable base isomorphism and a measurable field of unitaries
- `lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations` · lemma — Bounded density and finite-vector transitivity for C star representations
- `lem-separable-type-i-factors-are-multiples-of-irreducible-representations` · lemma — A separable type I factor is a multiple of an irreducible representation
- `lem-monomial-irreducibility-criterion` · lemma — Mackey-Shoda irreducibility criterion for monomial representations
- `lem-monomial-inequivalence-criterion` · lemma — Mackey-Shoda non-equivalence criterion for monomial representations
- `lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra` · lemma — Disintegration of a separable group representation over a commuting diagonal algebra
- `lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers` · lemma — Measurable fields of von Neumann algebras have measurable commutants and centers
- `lem-pure-state-excision-and-essential-orbit-density` · lemma — Pure-state excision and density of faithful essential vector-state orbits
- `lem-faithful-essential-pure-state-orbits-obstruct-countable-separation` · lemma — Faithful essential pure-state orbits obstruct countable separation
- `lem-primitive-ideals-have-standard-borel-quotient-norm-codings` · lemma — Primitive ideals have standard Borel quotient-norm codings
- `lem-multiplicity-of-a-type-i-factor-representation-is-well-defined` · lemma — Irreducible class and multiplicity of a type I factor representation are well defined
- `lem-central-diagonal-disintegration-has-factor-fibers` · lemma — Central disintegration: fibre commutant, centre and factoriality
- `cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums` · corollary — Compact groups are type I and their direct integrals collapse to discrete Hilbert sums
- `lem-local-analytic-separation-and-saturated-borel-quotients` · lemma — Local analytic separation and saturated Borel quotient images
- `thm-central-decomposition-into-factor-representations` · theorem — Central decomposition into factor representations
- `lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings` · lemma — Measurable splitting of a field of type I factors into irreducible representations with multiplicity
- `lem-gcr-kernel-and-mackey-borel-characterizations` · lemma — GCR kernel and Mackey Borel characterizations
- `lem-central-spectral-models-transport-and-intertwiners-disintegrate` · lemma — Transport of central models and disintegration of intertwiners
- `lem-separable-group-c-star-type-i-and-smooth-dual-criteria` · lemma — Glimm criteria for separable C star algebras and type I groups
- `thm-essential-uniqueness-of-central-decomposition` · theorem — Essential uniqueness of the central decomposition
- `thm-equivalent-characterizations-of-second-countable-type-i-groups` · theorem — Equivalent characterizations of second-countable type I groups
- `thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition` · theorem — Non-type-I groups have non-smooth irreducible disintegration
- `thm-irreducible-direct-integral-decomposition-for-type-i-groups` · theorem — Irreducible direct integral decomposition for type I groups
- `thm-essential-uniqueness-of-type-i-irreducible-disintegration` · theorem — Essential uniqueness of the type I irreducible disintegration

### `direct-integral-decomposition-and-type-i-groups-examples` — Direct Integral Decomposition and Type I Groups — Examples (4 item(s))

- `ex-direct-integral-of-characters-for-the-regular-representation-of-r` · example — The regular representation of the real line as a multiplicity-one integral of characters
- `ex-the-left-regular-factor-of-an-icc-discrete-group` · example — The left regular factor of an ICC discrete group is a non-type-I factor
- `ex-compact-group-direct-integrals-are-atomic` · example — Canonical compact-group decompositions are atomic Hilbert sums
- `cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i` · counterexample — Irreducible multiplicity data is not canonical outside type I

### `hodge-theory-on-compact-riemann-surfaces` — Hodge Theory on Compact Riemann Surfaces (12 item(s))

- `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` · definition — Holomorphic line bundles and meromorphic sections on a Riemann surface
- `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface` · definition — Hermitian metric and $L^2$ pairing on a compact Riemann surface
- `def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface` · definition — The maximal Dolbeault operator and its Hilbert adjoint on a compact Riemann surface
- `thm-chern-connection-of-a-hermitian-holomorphic-line-bundle` · theorem — Chern connection of a Hermitian holomorphic line bundle
- `lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas` · lemma — The Dolbeault adjoint and Laplacian: local formulas and ellipticity
- `thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface` · theorem — Gårding estimates for the Dolbeault Laplacian on a compact Riemann surface
- `lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel` · lemma — Dolbeault green operator is compact on the orthogonal complement of the kernel
- `thm-elliptic-regularity-for-dolbeault-harmonic-forms` · theorem — Elliptic regularity for Dolbeault harmonic forms
- `thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range` · theorem — The Dolbeault Laplacian has finite-dimensional kernel and closed range
- `thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface` · theorem — Hodge decomposition for Dolbeault forms on a compact Riemann surface
- `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional` · corollary — Dolbeault cohomology of a compact riemann surface is finite dimensional
- `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology` · theorem — Harmonic star duality for line bundle valued dolbeault cohomology

### `hodge-theory-on-compact-riemann-surfaces-examples` — Hodge Theory on Compact Riemann Surfaces: Examples and Counterexamples (5 item(s))

- `ex-nonharmonic-exact-dbar-form` · example — Nonharmonic exact dbar form
- `ex-one-dimensional-constant-zero-mode-of-dolbeault-laplacian` · example — One dimensional constant zero mode of dolbeault laplacian
- `ex-dolbeault-cohomology-is-independent-of-hermitian-metric` · example — Dolbeault cohomology is independent of hermitian metric
- `ex-dolbeault-h-zero-one-of-the-riemann-sphere-vanishes` · example — Dolbeault h zero one of the riemann sphere vanishes
- `ex-flat-torus-dolbeault-harmonic-representatives` · example — Flat torus dolbeault harmonic representatives

## Your seams

Another group's pages depend on yours:

- `sl2-r-discrete-series-and-unitary-dual` (group c) requires your `direct-integral-decomposition-and-type-i-groups`
- `divisors-riemann-roch-and-duality` (group c) requires your `hodge-theory-on-compact-riemann-surfaces`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
