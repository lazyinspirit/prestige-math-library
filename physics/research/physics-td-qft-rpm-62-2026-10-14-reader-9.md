# Step 3a reader report — batch 9

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `9`

At the last status recomputation, the run remained at `3a-read`; no stage transition was attempted.

## Opened inventory

Assigned pages reviewed:

- `td-potentials-and-responses` — `library/thermodynamics/td-potentials-and-responses.md`
- `td-potentials-and-responses-examples` — `library/thermodynamics/td-potentials-and-responses-examples.md`

All 14 listed items were opened and reviewed: `lem-tdmath-euler-identity-for-degree-one-homogeneous-function`, `lem-tdmath-smooth-partial-legendre-transform-differential`, `def-td-legendre-potentials`, `pthm-td-potential-differentials`, `pthm-td-euler-and-gibbs-duhem`, `pthm-td-maxwell-relations`, `def-td-isentropic-compressibility`, `pthm-td-reservoir-minimum-principles`, `pthm-td-useful-work-bound`, `pthm-td-heat-capacity-relation`, `pthm-td-compressibility-capacity-ratio`, `pthm-td-joule-thomson-chart`, `ex-td-response-chart-failure`, and `ex-td-nonzero-isothermal-work-loop`.

Supporting physics items opened: `def-td-si-quantities`, `def-td-system-and-permitted-exchanges`, `def-td-galilean-rest-frame`, `def-td-equilibrium-state-domain`, `def-td-process-and-protocol`, `post-td-bulk-additivity`, `post-td-concave-fundamental-entropy`, `post-td-common-bulk-constitutive-law`, `post-td-first-law-energy`, `post-td-macroscopic-second-law`, `post-td-entropy-maximum`, `post-td-mechanical-conjugate-identification`, `def-td-temperature-pressure-chemical-potential`, `def-td-response-functions`, and `pthm-td-local-energy-representation`.

Mathematical suppliers opened for the local arguments: `thm-chain-rule-for-total-derivatives`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-clairaut-schwarz-mixed-partials`, `def-piecewise-c1-path-operations-and-oriented-reparametrizations`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-gradient-theorem-for-line-integrals`, `thm-newton-leibniz-with-interior-derivative`, `thm-continuous-implies-integrable`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-euclidean-implicit-function-theorem`, and `thm-euclidean-inverse-function-theorem`.

For the implicit-energy supplier chain, I opened `thm-tdmath-local-implicit-rank` in batch 4. It is a draft mathematical theorem; its C1 graph conclusion is explicitly recorded in `pthm-td-local-energy-representation`, which derives the extra C2 regularity locally from the adopted C2 entropy assumption. The assigned use remains conditional on that draft supplier's acceptance. I also opened the B-page's contextual target `cex-td-tagged-scaling-not-fixed-type-homogeneity` and its home page `td-representation-and-equilibrium-examples`; the counterexample supports the page's context statement and is not a logical prerequisite.

## Repairs made

- **`ex-td-nonzero-isothermal-work-loop`** — At `items/ex-td-nonzero-isothermal-work-loop.md:9,60,66,74,94`, the original example's mechanical-work coupling and first-law balance had unstated applicability conditions. Its model statement now stipulates a closed core record in one fixed Galilean chart, zero endpoint changes in center-of-mass kinetic and separately tracked external-field energy, and a planar constant-area piston in frictionless mechanical equilibrium. It also states that the constructed protocol accumulates the supplier's incremental work by path integration. The verification defines exactness locally by a C1 potential satisfying `dφ = p dV`, so the gradient-theorem contradiction has an explicit mathematical premise. Evidence: `def-td-process-and-protocol`, `post-td-mechanical-conjugate-identification`, and `post-td-first-law-energy`; the line-integral definition and gradient theorem supply the calculation. The example remains explicitly a stipulated model record, not an observation.
- **`pthm-td-reservoir-minimum-principles`** — At `items/pthm-td-reservoir-minimum-principles.md:42`, replaced the undefined qualifier “spontaneous endpoint change” with the precise scope of an admitted process record of the isolated composite, including the pressure store in the fixed-pressure case. This matches the ideal-environment assumptions [A1]–[A3] and the isolated-compound second-law supplier. The deduction itself was unchanged.

The affected batch-9 proof-contract scope excerpts and raw item hashes were synchronized. The loop example's step 4.1 derivation claim was also synchronized. Neither edited carrier had a `verification.judge` record to remove. Reflow reported both item files unchanged; scoped precheck passed for both.

The interface-consumer search found no item depending on either edited carrier. The affected home-page summaries remain accurate under the clarified conditions: the A page still describes conditional reservoir minima, and the B page still describes a constructed nonzero work loop.

## Source review

The cited source passages were checked against their use: the [BIPM SI Brochure, 9th ed., version 4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), §§2.3.1–2.3.2 and Table 4 (English text around pp. 17, 21–22, and 136), gives the exact Boltzmann and Avogadro constants and the SI unit relations used; [Arovas, §2.7](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials), lines 1360–1374, gives conventional potential definitions, differentials, and minimum-principle context; [Arovas, §2.8](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.08:_Maxwell_Relations), lines 1354 and 1373, and [Tatum, §12.5](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.05:_Summary_the_Maxwell_Relations_and_the_Gibbs-Helmholtz_Relations), lines 191–225, list Maxwell relations; [Tatum, §12.6](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.06:_The_Joule_and_Joule-Thomson_Coefficients), lines 225–255, derives the constant-enthalpy Joule–Thomson coefficient; [Tatum, §13.3](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/13:_Expansion_Compression_and_the_TdS_Equations/13.03:_Pressure_and_Temperature), lines 199–201, states the heat-capacity relation (using its symbol for the volume expansion coefficient), and lines 224–229 discusses its scope; [Tatum, §17.6](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/17:_Chemical_Thermodynamics/17.06:_The_Gibbs-Duhem_Relation), lines 191–207, gives the fixed-temperature/fixed-pressure Gibbs–Duhem special case. The batch proofs provide their own conditional derivations and state narrower chart hypotheses where needed; these references are not treated as proof of adopted physical assumptions. No experimental result or statistical inference appears in this batch.

The Arovas 2025 Chapter 2 PDF cited by `post-td-common-bulk-constitutive-law` could not be fetched in this review. That item explicitly treats the coordinate-preserving transport as an adopted idealized constitutive assumption, not as a theorem established by that source; the batch deduction uses the stated postulate conditionally.

## Page verdicts

- **`td-potentials-and-responses` — pass.** Its summary accurately limits differential identities to valid C2 charts and states the additional same-tag homogeneity hypothesis for Euler/Gibbs–Duhem. The reservoir and useful-work conclusions are presented as conditional model deductions.
- **`td-potentials-and-responses-examples` — pass.** Its summary distinguishes the constructed chart/work calculations from reports of observations. Its tagged-scaling cross-link is accurately identified as contextual rather than a supplier.

## Unedited findings and blocker

No confirmed defect remains outside the authorized repair scope. No blocker remains after the proof-layout check workaround described below.

## Validation and coverage limits

- `reflow.mts`: run for each edited item; both reported unchanged.
- `precheck.mts`: both edited items passed.
- `proof-layout.mjs`: the unmodified invocation initially failed because the fallback TypeScript loader could not resolve the shared web renderer's `@/` alias and extensionless imports. I reran the same two-item proof-layout check with a temporary resolver hook, removed that temporary hook afterward, and obtained `2 items, 8 steps, 0 defects`.

This report covers every assigned page and item and the direct or transitive suppliers needed for the checked deductions. It is not an independent re-audit of every prerequisite proof in the published root-mathematics dependency closure; the exact relevant statements, hypotheses, and supplier status were checked.
