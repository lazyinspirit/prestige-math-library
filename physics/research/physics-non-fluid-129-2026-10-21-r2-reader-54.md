# Step 3a reader report — batch 54

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 54

## Opened inventory

### Assigned pages

- [nrqmx-bloch-band-geometry](../library/non-relativistic-quantum-mechanics-mathematics/nrqmx-bloch-band-geometry.md) — draft A page, Mathematics.
- [nrqmx-bloch-band-geometry-examples](../library/non-relativistic-quantum-mechanics-mathematics/nrqmx-bloch-band-geometry-examples.md) — draft B page, Mathematics.

### Assigned items, read in dependency order

1. def-nrqmx-bloch-fiber-model
2. lem-nrqmx-bloch-fiber-model-properties
3. def-nrqmx-determinant-line-projector
4. lem-nrqmx-determinant-line-projector-well-defined
5. lem-nrqmx-determinant-curvature-is-trace
6. lem-nrqmx-degree-area-formula
7. thm-nrqmx-bloch-projector-chern
8. thm-nrqmx-two-band-degree-formula
9. thm-nrqmx-finite-band-adiabatic-velocity
10. ex-nrqmx-two-band-gap-closures
11. cex-nrqmx-smooth-frame-obstruction

### Additional dependency context

Read the nrqmx-adiabatic-holonomy page and the batch-47 supplier items used by this batch: def-nrqmx-smooth-projector-bundle, lem-nrqmx-projector-bundle-kato-well-definedness, lem-nrqmx-c1-stokes-compact-surface, thm-nrqmx-berry-projector-curvature, lem-nrqmx-c2-projector-chern-integrality, and thm-nrqmx-rank-one-chern-holonomy. Read the finite-dimensional adiabatic estimate and the published first-Chern-form comparison used by that supplier. The batch-47 Chern-integrality proof and its relevant integration, de Rham, partition-of-unity, smooth-chain, and regular-value suppliers were checked where used.

Read the nrqmx-form-spectral-methods page and the seven published prerequisite page summaries in the root mathematics library: orthonormal-bases-parseval-and-fourier-series; orientations-poincare-lefschetz-and-alexander-duality; the-de-rham-theorem-and-degree; singular-cohomology-and-coefficient-theorems; compact-kahler-hodge-foundations; singular-chains-and-singular-homology; and chern-and-pontryagin-classes-by-splitting-and-complexification.

Opened the exact statements of all 36 distinct direct mathematical item dependencies listed by the batch items, including the Fourier/Parseval, finite-dimensional spectral, exterior-power, degree, de Rham, homology/cohomology, Chern-class, and regular-value suppliers. The current bytes of all 23 direct imported dependencies match their hashes in research/math-imports.json. The relevant source passages checked were Asbóth, Oroszlány, and Pályi, A Short Course on Topological Insulators, Chapter 2 §2.3.4, Eqs. (2.40)–(2.41), and Chapter 6 §§6.1.1–6.1.2, Eqs. (6.1)–(6.5); Xiao, Chang, and Niu, Berry Phase Effects on Electronic Properties, Eqs. (1.11), (3.5)–(3.7), and (5.7)–(5.8); and Tong, Applications of Quantum Mechanics, Chapter 6 §§6.3.4–6.3.5.

## Review and repairs

- thm-nrqmx-bloch-projector-chern, Proof 1.1: the original text asserted that the determinant line over the compact torus was numerable without showing a trivializing cover with a subordinate partition of unity. I added local frames from the continuous rank-one projector, a finite trivializing cover, a finite metric refinement, and an explicit continuous partition of unity. This establishes the numerability required by the cited Chern-class definition. I updated derivation 1.1 in the batch proof contract. I preserved the existing Step-2 boundary-worksheet pointer and its original source hash as author evidence; it remains bound to its earlier source and was not resealed. No verification.judge record was present. Reflow reported the item unchanged; precheck passed.
- thm-nrqmx-finite-band-adiabatic-velocity, sources and Facts & Assumptions A2: Xiao–Chang–Niu Eq. (3.6) has a sign inconsistent with the same source's Eqs. (3.5), (5.7), and (5.8) under its stated Berry-curvature convention. The proof of this item derives its signs directly from the adopted Lagrangian, and Eqs. (5.7)–(5.8) support that action and its equations. I narrowed the locator and A2 to §V.A, Eqs. (5.7)–(5.8), without changing the mathematical claim or proof. No verification.judge record was present. Reflow reported the item unchanged; precheck passed.

The batch contracts' numbered derivations matched the current proof steps after the repair, and every contract citation target was among the item's declared logical dependencies. The final proof-layout command checked the two changed items: 9 numbered steps, 0 defects.

No TikZ or tikzcd diagram occurs in either assigned page or any assigned item. The commutative frame/connection diagram in the directly used Berry-curvature supplier was checked: its frame maps, connection maps, and arrow directions match the surrounding text, and the proof does not rely on it.

## Remaining defect outside the write scope

The batch-47 supplier lem-nrqmx-c2-projector-chern-integrality has a nonfatal omitted detail in Proof 1.1. It invokes the Chern-class definition for a numerable line bundle, but chooses a finite coordinate-chart cover and a subordinate partition without saying that the cover trivializes E_P or constructing a partition subordinate to a trivializing refinement. The projector-bundle supplier gives local triviality; compactness and the supplied smooth partition theorem close the gap immediately by refining to finitely many local frame domains. This supplier is outside batch 54. The assigned consumer is thm-nrqmx-bloch-projector-chern.

## Page verdicts

- nrqmx-bloch-band-geometry: no page-level defect found. Its summary accurately states the finite-lattice scope, the Chern-sign convention, the conditional effective-action result, and the continuum and wave-packet limitations. The batch-47 numerability omission is recorded above as an in-run prerequisite finding.
- nrqmx-bloch-band-geometry-examples: no page-level defect found. The summary accurately describes the locally proved gap-closing/Chern calculation and global-frame obstruction as mathematical model results, not observations.

## Blocker

No access or process blocker. The one uneditable nonfatal supplier finding is recorded for routing.

## Coverage limits

I did not re-audit every proof in the transitive closure of all published mathematics imports, or unrelated carriers on pages outside this batch's dependency closure. The reported checks cover all assigned carriers, their directly used supplier statements and proof arguments, the relevant draft Chern chain, and the source passages listed above.
