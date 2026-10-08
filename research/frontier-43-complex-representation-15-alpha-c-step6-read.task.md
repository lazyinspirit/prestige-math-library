# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **3**, **5**, **10**: 3 A/B pair(s), 6 page(s), 66 item(s).

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
| 3 | `sl2-r-principal-and-complementary-series` | A | representation-theory | 1236 | `induced-unitary-representations-of-locally-compact-groups`, `mackeys-imprimitivity-theorem`, `group-c-star-algebras-and-the-fell-unitary-dual`, `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `the-gamma-function`, `analytic-semigroups-and-linear-evolution-equations` |
| 3 | `sl2-r-principal-and-complementary-series-examples` | B | representation-theory | 1237 | `sl2-r-principal-and-complementary-series` |
| 5 | `sl2-r-discrete-series-and-unitary-dual` | A | representation-theory | 1240 | `group-c-star-algebras-and-the-fell-unitary-dual`, `direct-integral-decomposition-and-type-i-groups`, `sl2-r-principal-and-complementary-series`, `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms` |
| 5 | `sl2-r-discrete-series-and-unitary-dual-examples` | B | representation-theory | 1241 | `sl2-r-discrete-series-and-unitary-dual` |
| 10 | `divisors-riemann-roch-and-duality` | A | complex-analysis | 1612 | `mittag-leffler-and-runges-theorem`, `presheaves-sheaves-stalks-and-sheafification`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `sheaf-cohomology-cech-cohomology-and-comparison`, `riemann-surfaces-branched-maps-and-differentials`, `hodge-theory-on-compact-riemann-surfaces`, `the-dbar-complex-and-integral-solutions`, `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `the-de-rham-theorem-and-degree` |
| 10 | `divisors-riemann-roch-and-duality-examples` | B | complex-analysis | 1613 | `divisors-riemann-roch-and-duality`, `elliptic-functions-and-complex-tori`, `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sl2-r-principal-and-complementary-series` — Sl2 R Principal and Complementary Series (16 item(s))

- `def-iwasawa-and-minimal-parabolic-data-for-sl2-r` · definition — Iwasawa and minimal-parabolic data for SL2(R)
- `thm-iwasawa-decomposition-for-sl2-r` · theorem — Iwasawa decomposition and Haar integration formula for SL2(R)
- `def-normalized-principal-series-i-epsilon-nu` · definition — The normalized principal series I(epsilon, nu)
- `thm-compact-picture-of-the-sl2-principal-series` · theorem — The compact picture of the SL2(R) principal series
- `lem-k-type-decomposition-of-the-sl2-principal-series` · lemma — K-type decomposition of the SL2(R) principal series
- `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture` · lemma — Derived action and raising/lowering formulas in the compact picture
- `lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces` · lemma — K-finite vectors detect nonzero closed invariant subspaces
- `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` · theorem — Generic irreducibility and the exceptional parameter lattice
- `def-standard-intertwining-operator-for-sl2-r` · definition — The standard intertwining operator A(nu)
- `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` · lemma — K-type eigenvalues of A(nu): recurrence, closed form and nonvanishing
- `lem-dual-pairing-between-opposite-principal-series-parameters` · lemma — The invariant pairing between opposite principal-series parameters
- `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` · theorem — Meromorphic continuation and intertwining identity for A(nu)
- `thm-unitarity-of-the-sl2-unitary-principal-series` · theorem — Unitarity of the unitary principal series
- `thm-unitarity-of-the-sl2-complementary-series` · theorem — Unitarity of the complementary series
- `thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu` · theorem — Parameter-sign equivalence and its exceptional failures for SL2(R)
- `cor-complementary-series-converge-to-the-trivial-representation` · corollary — The spherical complementary series converge to the trivial representation

### `sl2-r-principal-and-complementary-series-examples` — Sl2 R Principal and Complementary Series — Examples (4 item(s))

- `ex-iwasawa-coordinates-and-haar-density-on-sl2-r` · example — Iwasawa coordinates and Haar density on SL2(R)
- `ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu` · example — First K-types and ladder coefficients in I(epsilon, nu)
- `ex-intertwiner-eigenvalues-in-the-spherical-complementary-range` · example — Intertwiner eigenvalues in the spherical complementary range
- `cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval` · counterexample — The complementary form loses positivity beyond the unitary interval

### `sl2-r-discrete-series-and-unitary-dual` — Sl2 R Discrete Series and Unitary Dual (19 item(s))

- `def-k-finite-and-smooth-vectors-for-sl2-r` · definition — Smooth and K-finite vectors for SL2(R), and the (g,K)-module
- `lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action` · lemma — Smooth and K-finite vectors are dense and stable under the derived action
- `lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points` · lemma — Highest- and lowest-weight submodules at the exceptional parameters
- `def-holomorphic-and-antiholomorphic-discrete-series-models` · definition — Holomorphic and antiholomorphic discrete-series models
- `lem-the-weighted-discrete-series-space-is-a-hilbert-space` · lemma — The weighted discrete-series space is a Hilbert space with K-type basis
- `lem-the-weighted-area-form-is-sl2-r-invariant` · lemma — The weighted area form is SL2(R)-invariant
- `thm-irreducibility-and-k-types-of-the-discrete-series` · theorem — Irreducibility and K-types of the discrete series
- `def-limits-of-discrete-series-for-sl2-r` · definition — The two limits of discrete series
- `lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r` · lemma — KAK integration formula for K-bi-invariant functions on SL2(R)
- `lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series` · lemma — Matrix-coefficient formulas and decay for the discrete and principal series
- `thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients` · theorem — Square integrability of discrete-series matrix coefficients
- `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series` · theorem — Unitarity and irreducibility of the limits of discrete series
- `thm-the-limits-of-discrete-series-are-not-square-integrable` · theorem — The limits of discrete series are not square-integrable
- `def-tempered-unitary-representation` · definition — Tempered unitary representations
- `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` · theorem — Classification of the irreducible unitary dual of SL2(R)
- `lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series` · lemma — Fell continuity of the unitary principal series in the parameter
- `thm-plancherel-support-for-sl2-r` · theorem — Plancherel support for SL2(R)
- `thm-tempered-status-of-the-sl2-r-unitary-series` · theorem — Tempered status of the SL2(R) unitary series
- `cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits` · corollary — The unitary dual of SL2(R) is non-discrete and non-Hausdorff at the stated limits

### `sl2-r-discrete-series-and-unitary-dual-examples` — Sl2 R Discrete Series and Unitary Dual — Examples (5 item(s))

- `ex-lowest-k-types-of-the-first-holomorphic-discrete-series` · example — Lowest K-types of the first holomorphic discrete series
- `ex-weighted-norm-invariance-for-a-mobius-transformation` · example — Weighted norm invariance for the inversion generator
- `ex-a-square-integrable-discrete-series-matrix-coefficient` · example — A square-integrable discrete-series matrix coefficient
- `cex-a-limit-of-discrete-series-is-not-square-integrable` · counterexample — A limit of discrete series is not square-integrable
- `ex-parameter-identifications-in-the-sl2-r-unitary-dual` · example — Parameter identifications in the SL2(R) unitary dual

### `divisors-riemann-roch-and-duality` — Divisors, Riemann--Roch, and Duality (17 item(s))

- `def-divisor-principal-and-canonical-divisor-riemann-surface` · definition — Divisors, principal divisors and canonical divisors on a Riemann surface
- `def-line-bundle-associated-to-a-divisor` · definition — The holomorphic line bundle associated to a divisor
- `def-cech-cohomology-holomorphic-line-bundle-sections` · definition — Cech cohomology of holomorphic sections of a line bundle on finite good covers
- `thm-smooth-function-module-sheaves-are-acyclic` · theorem — Sheaves of smooth-function modules are cohomologically acyclic
- `thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces` · theorem — Cech--Dolbeault comparison for holomorphic line bundles on a compact Riemann surface
- `thm-finiteness-cohomology-compact-riemann-surface` · theorem — Finite-dimensionality of the cohomology of a divisor on a compact Riemann surface
- `lem-point-divisor-exact-sequence-and-euler-characteristic-step` · lemma — The point-divisor exact sequence and the Euler-characteristic step
- `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` · lemma — The Euler characteristic of the structure sheaf is one minus the genus
- `thm-residue-pairing-for-line-bundle-cohomology` · theorem — The residue pairing for line-bundle cohomology
- `thm-nondegeneracy-of-the-residue-pairing` · theorem — Nondegeneracy of the residue pairing
- `thm-serre-duality-compact-riemann-surfaces` · theorem — Serre duality on a compact Riemann surface
- `thm-riemann-roch-compact-riemann-surfaces` · theorem — The Riemann-Roch theorem on a compact Riemann surface
- `cor-prescribed-principal-parts-compact-riemann-surface` · corollary — Prescribed principal parts on a compact Riemann surface
- `cor-compact-riemann-surface-has-meromorphic-function` · corollary — Every compact Riemann surface admits a nonconstant meromorphic function
- `def-complex-projective-space-and-holomorphic-charts` · definition — Complex projective space and its holomorphic charts
- `thm-linear-system-map-to-projective-space-is-well-defined` · theorem — The map defined by a base-point-free linear system
- `thm-projective-embedding-compact-riemann-surface` · theorem — Projective embedding of a compact Riemann surface

### `divisors-riemann-roch-and-duality-examples` — Divisors, Riemann--Roch, and Duality: Examples and Counterexamples (5 item(s))

- `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` · example — Divisors and Riemann-Roch on the Riemann sphere and on a complex torus
- `ex-hyperelliptic-canonical-divisors` · example — Canonical divisors on hyperelliptic curves
- `ex-low-degree-riemann-roch-computations` · example — Low-degree Riemann-Roch computations
- `ex-failed-principal-parts-problem-detected-by-residues` · example — A failed principal-parts problem detected by residues on a complex torus
- `ex-veronese-linear-system-on-the-riemann-sphere` · example — The Veronese linear system on the Riemann sphere

## Your seams

Your pages depend on another group's:

- `sl2-r-discrete-series-and-unitary-dual` requires `direct-integral-decomposition-and-type-i-groups` (group a, batch 1)
- `divisors-riemann-roch-and-duality` requires `hodge-theory-on-compact-riemann-surfaces` (group a, batch 9)

Another group's pages depend on yours:

- `kazhdans-property-t-and-spectral-gap` (group b) requires your `sl2-r-principal-and-complementary-series`
- `periods-jacobians-and-abel-jacobi-theory` (group d) requires your `divisors-riemann-roch-and-duality`

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
