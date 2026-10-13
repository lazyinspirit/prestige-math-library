# Step 3a reader report — batch 56

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `56`

## Page verdicts

- `qm-bell-models-and-measurement-limits` — **Pass on the page prose.** Its summary keeps the mathematical table models separate from the declared quantum arrangement and from laboratory identification. The A-page's assigned arrangement definition depends on one proof-text issue in a batch-54 spin-spectrum supplier; that issue is recorded below against the direct assigned consumer.
- `qm-bell-models-and-measurement-limits-examples` — **Pass.** Its summary accurately describes the worked model computations and finite-sample qualifications. It reports no measured outcomes or experiment. I changed the companion item’s ambiguous “classical bound” phrase to name the local-response CHSH bound.

## Assigned inventory opened

Pages:

- `library/non-relativistic-quantum-mechanics/qm-bell-models-and-measurement-limits.md`
- `library/non-relativistic-quantum-mechanics/qm-bell-models-and-measurement-limits-examples.md`

Items opened; proof-bearing claims were checked against their cited suppliers before verdicts:

- Mathematical vocabulary and results: `def-nrqm-bell-binary-correlation-models`, `def-nrqm-bell-local-response-representation`, `prop-nrqm-bell-local-representations-are-no-signalling`, `thm-nrqm-bell-local-representations-satisfy-chsh`, `lem-nrqm-bell-setting-independent-selection-closure`, `lem-nrqm-bell-singlet-pairings`.
- Declared model and conditional quantum results: `def-nrqm-bell-declared-spin-arrangement`, `texp-nrqm-bell-singlet-arrangement-contrast`, `pthm-nrqm-bell-tsirelson-bound-for-arrangements`, `rem-nrqm-bell-boundaries-and-comparison-scope`, `rem-nrqm-bell-scope-and-empirical-status`.
- Companion examples and scope: `ex-nrqm-bell-worked-angles-and-product-mixture`, `texp-nrqm-bell-finite-sample-chsh`, `rem-nrqm-bell-selection-loss-and-fair-sampling`, `rem-nrqm-bell-examples-scope-limits`.

## Dependency and source review

I opened the claim-relevant mathematical suppliers cited by these items, including the finite-probability and finite-sum definitions; measure/probability, measurability, expectation, independence, variance and Chebyshev results; the singlet spin-matrix and tensor-product constructions; rank-one trace and density-operator calculations; partial trace and product-state statistics; the local PVM extension; the finite-dimensional spin-block theorem; the operator Tsirelson bound; and the CHSH/local-instrument results used by the assigned proofs. I also opened the cited quantum framework postulates and definitions used for the state, observable, measurement, composite, spin and preparation readings. The inspected carriers included `prop-nrqm-orbital-and-spin-finite-spin-matrices`, `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition`, `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws`, `thm-nrqm-orbital-and-spin-tsirelson-bound`, `pthm-nrqm-composites-local-instruments-and-no-signalling`, `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations`, and their claim-relevant partial-trace, tensor, probability and trace suppliers.

I checked these cited source passages:

- Brunner et al., “Bell nonlocality,” §II.A, PDF pp. 2–3: the factorized local-response model, the common distribution independent of settings, probabilistic responses without a determinism assumption, and the CHSH bound ([arXiv PDF](https://arxiv.org/pdf/1303.2849)).
- Binney and Skinner, *The Physics of Quantum Mechanics*, §6.1.4, printed pp. 111–115 (PDF pp. 119–123): the 1972 Freedman–Clauser mention, the Bell-model derivation, the 1998 Tittel citation, and broad experimental conclusions that batch 56 explicitly does not import ([book PDF](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)).
- Zwiebach, MIT 8.05, Chapter 8 §5, pp. 16–19: the singlet probabilities, the EPR-type ensemble, the stated Bell inequality and the final qualitative experimental remark, without trial-level report details ([MIT PDF](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf)).

The page items state no experimental result. I retrieved no primary Bell-test report and claim no audit of actual counts, calibration, detector efficiency or trial-level uncertainty. The reviewed page prose accurately marks that experiment as deferred.

## Edits and evidence

- In `items/def-nrqm-bell-local-response-representation.md`, clause (b) now equips the two-point outcome set with its discrete measurable structure and types the deterministic response maps between the declared measurable spaces. The earlier wording called maps into `Σ` measurable without specifying a codomain σ-algebra; the measurable-map supplier defines measurability only for maps between specified measurable spaces. A search of current `items/` and `library/` references found only batch-56 consumers; I checked their uses. No consumer repair was needed. The existing batch-56 proof-contract file contains no contract for this definition.
- In `items/prop-nrqm-bell-local-representations-are-no-signalling.md`, fact [F2] now records the normalization of both response laws. Before the repair, step 1.2 cited [F2] for the first station's α-normalization, but [F2] stated only the second station's β-normalization. The exact Definition clause (a) of `def-nrqm-bell-local-response-representation` supplies both. I updated this proposition’s [F2] contract quotation to the precise supplier excerpt; the proposition has no `verification.judge` record to remove.
- In `items/rem-nrqm-bell-examples-scope-limits.md`, I replaced “classical bound” with “local-response CHSH bound” and linked the exact theorem. This keeps the comparison tied to the proved local-response model class rather than suggesting a bound for classical physics in general.

Validation after the final item edits:

- Reflow: `def-nrqm-bell-local-response-representation` unchanged; `prop-nrqm-bell-local-representations-are-no-signalling` reflowed; `rem-nrqm-bell-examples-scope-limits` unchanged.
- Precheck: definition and remark reported `0 checked, 0 failing — all clean`; proposition passed (`1 checked, 0 failing`).
- Final batched proof layout: `node tools/physics-support/proof-layout.mjs items/def-nrqm-bell-local-response-representation.md items/prop-nrqm-bell-local-representations-are-no-signalling.md items/rem-nrqm-bell-examples-scope-limits.md` reported `3 items, 3 steps, 0 defects`.

## Uneditable finding

`pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws` is a draft supplier in current-run batch 54, outside this assignment’s edit scope. At `items/pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws.md:215`, Proof step 1.1 asserts that for an oriented orthonormal frame, each cross product `e^(i) × e^(j)` is a frame vector `e^(i')` and writes the commutator as `i A_(i')`, without limiting this equality to cyclic distinct pairs. For `i=j` the cross product is zero, and reversing a cyclic pair gives the negative of a frame vector. The spin-block classification needs only the three cyclic commutators; those follow immediately by writing the coefficient identity with the Levi-Civita symbols or listing the three cyclic cases. I classify this as a nonfatal proof-text inference gap, not a defect in the stated spin-spectrum conclusion. The assigned direct consumer is `def-nrqm-bell-declared-spin-arrangement`, which uses clause (c) to define its spin projections. The raw supplier SHA-256 at handoff is recorded in the findings JSON.

## Blocker and coverage note

No process or validation blocker. The batch-54 supplier finding remains for its owner’s disposition. Inventory inspection preceded some supplier reads; I completed the claim checks against the exact supplier statements/proofs before reaching these verdicts, but did not preserve a strict one-pass supplier-first read order. I did not independently re-audit every remote prerequisite beneath those suppliers; I checked the mathematical statements and proof steps actually used by batch 56. No primary experimental report was retrieved because batch 56 contains no experiment item and reports no measurement.
