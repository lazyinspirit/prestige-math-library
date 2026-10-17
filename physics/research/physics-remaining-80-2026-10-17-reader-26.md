# Reader report — batch 26

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: the two pages and 24 items listed in `research/physics-remaining-80-2026-10-17-batch-26.pages.json`.

## Opened inventory and review

Reviewed the assigned items in dependency order, together with the mathematical and physics suppliers needed to check their statements and proofs. The local dependency review included the smooth-manifold and cotangent-bundle definitions, canonical symplectic-form results, Borel and Lebesgue measure definitions, the nonnegative change-of-variables theorem, Tonelli and dominated convergence, regular-shell coarea, Liouville measure, Gaussian integrals, SI conventions, and the classical-mechanics and electromagnetic gauge conventions. I also checked the other-batch Gibbs postulate consuming the phase reference; it remains compatible with the repaired measure.

**A page `csm-phase-ensembles` (20 items):** `def-csm-phase-space-reference`, `thm-csm-equipartition-boundary-lemma`, `def-csm-statistical-state-observable`, `thm-csm-regular-shell-coarea`, `post-csm-counting-and-physical-observables`, `thm-csm-exponential-normalization-covariance`, `thm-csm-kinetic-potential-shell-marginals`, `thm-csm-liouville-entropy-transport`, `post-csm-canonical-preparation`, `post-csm-grand-preparation`, `post-csm-isobaric-preparation`, `post-csm-microcanonical-preparation`, `thm-csm-relative-gibbs-variational-principle`, `pthm-csm-canonical-momentum-equipartition`, `pthm-csm-canonical-response-identities`, `pthm-csm-ensemble-potentials`, `pthm-csm-grand-response-identities`, `pthm-csm-isobaric-response-identities`, `def-csm-static-gauge-coupled-particle-model`, and `pthm-csm-static-gauge-canonical-partition-invariance`.

**B page `csm-phase-ensembles-examples` (4 items):** `ex-csm-finite-mixing-count`, `ex-csm-ideal-full-shell`, `ex-csm-ideal-canonical-grand`, and `ex-csm-ideal-isobaric`.

The review separates adopted ensemble preparations from consequences derived under their stated integrability and regularity assumptions. No assigned item reports an experiment or empirical measurement; the report makes no empirical claim.

## Repairs and supporting evidence

- **`def-csm-phase-space-reference`:** The prior definition named `\Lambda_N` as a measure without constructing it. It now defines the Borel sigma-algebra, partitions an at-most-countable cotangent atlas into disjoint Borel pieces, defines the measure by chartwise Lebesgue measure, and verifies atlas independence, countable additivity, and sigma-finiteness. Atlas independence uses the exact nonnegative change-of-variables theorem; the Borel sigma-algebra and measure conventions are tied to their named suppliers. Added direct dependencies on `def-borel-sigma-algebra` and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.
- **`def-csm-static-gauge-coupled-particle-model` and `pthm-csm-static-gauge-canonical-partition-invariance`:** Replaced the variable signed particle charge `e` by `q_{\\rm p}` throughout and distinguished it from the exact elementary-charge constant `e` in `def-em-si-conventions`. This removes ambiguity in the coupling, canonical momentum, zero-charge case, and unit statements.
- **`post-csm-isobaric-preparation`:** Made `N`, dimension, the unit-volume measurable shape, product integration space, Hamiltonian domain/codomain, product measurability, energy units, dimensionless uniform `dV/V_0` reference, sigma-finiteness, forbidden-state convention, and temperature control explicit. Added its Lebesgue-measure supplier as a direct dependency.
- **`ex-csm-ideal-isobaric`:** Defined the shape coordinates and kinetic energy used in the ideal isobaric calculation, so the displayed Hamiltonian and normalization have an explicit domain and integrand.
- **`post-csm-grand-preparation`:** Specified the sector Hamiltonians as Borel-measurable extended-real maps, the disjoint-union measurable structure and sigma-finite reference, the zero weight at infinite energy, the finite grand normalizer, the chemical-potential convention, and normalized density. Kept the preparation explicitly adopted.
- **`post-csm-microcanonical-preparation`:** Narrowed the title to “Regular full-shell or finite-band preparation,” avoiding an unsupported implication that a full shell is dynamically accessible. Made the `C^2` coordinate regularity, open noncritical energy band, compact inverse-band hypotheses, and full-AC shell-supplier condition explicit.
- **`post-csm-canonical-preparation`:** Typed the Hamiltonian as Borel measurable and energy-valued in joules, and specified the prescribed kelvin temperature control and inverse-joule `\\beta`.
- **`pthm-csm-canonical-response-identities`, `pthm-csm-grand-response-identities`, `pthm-csm-isobaric-response-identities`, and `pthm-csm-ensemble-potentials`:** Restricted exponential-family arguments to finite-energy support when Hamiltonians may take `+\\infty`; specified the grand reference space and particle-number statistic; named the isobaric Hamiltonian, finite real statistics, and the local parameter-envelope assumptions required by `thm-csm-exponential-normalization-covariance`; and made the thermodynamic means explicit. Corrected the Tong canonical-response locator to §1.3.2 and corrected the ensemble-potential reference to Chapter 1, §§1.3–1.4.
- **`thm-csm-regular-shell-coarea`:** Defined `C^2` regularity on the manifold through canonical chart representatives, stated the convention `i_{X_H}\\omega=dH`, and tied the shell argument to the exact regular-shell supplier hypotheses. The supplier’s full statement excludes critical levels and noncompact bands; the item now preserves those limits.
- **`thm-csm-kinetic-potential-shell-marginals` and `ex-csm-ideal-full-shell`:** Defined the flat torus as `\\mathbb R^d/\\Lambda` with a lattice basis and covolume, its `N`-particle configuration space and global cotangent trivialization; made the potential’s periodic lift explicit; and verified the ideal full-shell example’s regularity and compact-band conditions.
- **`pthm-csm-canonical-momentum-equipartition`:** Named the kinetic-energy term in the Hamiltonian and corrected the source locator to Tong, Chapter 2, §§2.2.1 and 2.3.

Source checks included Tong, *Statistical Physics*, author-hosted Chapter 1 §1.3.2 for canonical response identities ([S1](https://davidtong.org/teaching/statistical-physics/statmechhtml/S1)) and Chapter 2 §§2.2.1, 2.2.3, and 2.3 for equipartition, particle-counting convention, and the Maxwell distribution ([S2](https://davidtong.org/teaching/statistical-physics/statmechhtml/S2)); the Concordia CHEM 630P *Statistical Mechanics Part 1* notes, §4.3.1, Eqs. 123–130, for isothermal-isobaric normalization and response identities ([PDF](https://mypage.concordia.ca/faculty/glamoure/pdfs/statmech_part1.pdf)); `items/def-em-si-conventions.md` for the exact meaning of `e`; and the complete statement and proof of `../items/thm-tdmath-regular-energy-shell-measure.md` for the shell theorem’s hypotheses and conclusions. The statistical sources motivate adopted preparations and conventional formulas; they do not prove laboratory equilibration or empirical validity.

The item citations for the phase-space reference were corrected to distinguish Tong Chapter 1 (S1) from Chapter 2 (S2). The corresponding proof-contract quotations and derivations were refreshed for the eight edited proof-bearing carriers. No changed item had a `verification.judge` record to remove.

## Validation

For every one of the 16 changed items, ran the required reflow command followed by precheck. All 16 prechecks passed; reflow reported 10 proof/example items reformatted and 6 items unchanged. Then ran the required single batched proof-layout command on those 16 paths: `16 items, 30 steps, 0 defects`.

## Uneditable issue and blocker

The frozen batch manifest still records the pre-review dependency lists for two repaired items. `def-csm-phase-space-reference` now directly depends on `def-borel-sigma-algebra` and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; `post-csm-isobaric-preparation` now directly depends on `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`. The manifest does not list those additions. The manifest is outside this reader’s authorized edit scope, so an owner must reconcile the manifest/dependency-role metadata before downstream mechanical checks that require exact agreement. No content defect remains in the assigned items, and no uneditable published-dependency defect was identified.

## Page verdicts

- **`csm-phase-ensembles` (A page):** Pass after the listed repairs. Definitions, postulates, conditional deductions, and source qualifications are explicit. Its frozen manifest dependency metadata requires owner reconciliation as described above.
- **`csm-phase-ensembles-examples` (B page):** Pass after the ideal full-shell and ideal isobaric clarifications. The other two examples were reviewed without a confirmed defect.

## Source-access limitation

The assignment cites Arovas’s 635-page UCSD course text ([PDF](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf)). The direct PDF retrieval in this review returned an oversized response and the mirror attempt also failed; search excerpts alone were not treated as full-text verification. I therefore did not independently verify Arovas’s complete arguments. The repairs and verdicts above rely on the local mathematical suppliers and the directly inspected Tong and Concordia passages identified above; this limitation is not treated as evidence of a defect in an assigned item.
