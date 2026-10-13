# Reader report — batch 63

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Batch: `63`

## Opened inventory

Pages reviewed:

- `qm-photons-and-radiation-modes` — `library/non-relativistic-quantum-mechanics/qm-photons-and-radiation-modes.md` (A-page).
- `qm-photons-and-radiation-modes-examples` — `library/non-relativistic-quantum-mechanics/qm-photons-and-radiation-modes-examples.md` (B-page).

Assigned items reviewed, in dependency order:

1. `lem-nrqm-photons-analyzer-projections-and-overlaps`
2. `lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers`
3. `lem-nrqm-photons-fixed-mode-number-isometry`
4. `lem-nrqm-photons-transverse-fock-total-momentum`
5. `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment`
6. `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments`
7. `def-nrqm-photons-framework-fixed-mode-polarization-model`
8. `pthm-nrqm-photons-fixed-mode-polarization-outcome-law`
9. `pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws`
10. `def-nrqm-photons-framework-ideal-counting-and-detection-model`
11. `pthm-nrqm-photons-fixed-mode-number-and-energy-statistics`
12. `rem-nrqm-photons-scope-and-empirical-status`
13. `ex-nrqm-photons-malus-and-jones-analyzer-ratios`
14. `ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal`
15. `texp-nrqm-photons-classical-field-and-quantized-detection-comparison`
16. `rem-nrqm-photons-examples-scope-limits`

I opened the mathematical suppliers needed to check the cited constructions and proof steps, including `def-hilbert-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction`, `lem-nrqm-fock-and-equilibrium-fock-sector-projections`, `thm-nrqm-fock-and-equilibrium-number-operator-domain`, `thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian`, the fixed-mode number and single-mode thermal trace results, `lem-nrqm-observables-l2-multiplication-spectral-measure`, `lem-unbounded-pvm-integral-is-well-defined-and-closed`, `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`, `lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `def-dependent-choice`, and `thm-choice-implies-dependent-implies-countable-choice`. I also opened the relevant state, observable, measurement, identical-particle and preparation/apparatus postulates. I opened `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` from batch 43 to check the postulate's stated limitation.

## Review findings and repairs

Fourteen assigned items were materially repaired. The affected proof contracts were updated in `research/physics-cm-qm-gr-79-2026-10-11-batch-63.proof-contracts.json`. No changed item contained a stale `verification.judge` record.

- `lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers`: corrected the choice-principle accounting in the remarks to match the actual hypotheses of the cited results. The multiplication-operator results assume Countable Choice and Choice; `lem-unbounded-pvm-integral-is-well-defined-and-closed` states Countable Choice. Those cited statements do not require Dependent Choice. The item contract now quotes the relevant hypotheses.
- `lem-nrqm-photons-fixed-mode-number-isometry`: added `lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers` as a mathematical prerequisite because the non-invariance remark uses its no-eigenvalue conclusion for the continuum energy multiplier. Made the choice assumptions explicit and cited `def-dependent-choice` and `thm-choice-implies-dependent-implies-countable-choice` for the dependent-choice premise used in the Fock construction. Updated the proof contract accordingly.
- `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment`: added `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` as a formulation prerequisite for the cited zero-mass limitation. Made explicit that Choice supplies the Dependent Choice premise by the cited choice theorem. Removed the unsupported empirical claim that photon indistinguishability and integer spin are observed motivation; the bosonic assignment is now presented as an adopted postulate, not an empirical conclusion.
- `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments`, `def-nrqm-photons-framework-fixed-mode-polarization-model`, `pthm-nrqm-photons-fixed-mode-polarization-outcome-law`, `pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws`, `def-nrqm-photons-framework-ideal-counting-and-detection-model`, `pthm-nrqm-photons-fixed-mode-number-and-energy-statistics`, `rem-nrqm-photons-scope-and-empirical-status`, `ex-nrqm-photons-malus-and-jones-analyzer-ratios`, `ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal`, `texp-nrqm-photons-classical-field-and-quantized-detection-comparison`, and `rem-nrqm-photons-examples-scope-limits`: stated the Countable Choice, Dependent Choice, and Choice assumptions used by the cited Fock/spectral constructions and recorded the mathematical dependency on `def-dependent-choice`. This makes the premise visible at each result using that construction.
- `ex-nrqm-photons-malus-and-jones-analyzer-ratios`: weakened the inference from the shared Malus-law prediction. Agreement with the shared prediction does not distinguish the two specified models or establish either; an observation could bear on a separately specified alternative under a declared observation model. No observation is supplied here.
- `texp-nrqm-photons-classical-field-and-quantized-detection-comparison`: likewise narrowed the comparison's conclusion to the two declared models and the shared two-bin law; agreement alone does not establish either model. The statement now says that no data or competing-model comparison is supplied.
- `pthm-nrqm-photons-fixed-mode-polarization-outcome-law`, `ex-nrqm-photons-malus-and-jones-analyzer-ratios`, and `texp-nrqm-photons-classical-field-and-quantized-detection-comparison`: corrected the MIT 8.05 Chapter 3 citation from Section 7 to Section 5, “Orthonormal basis and orthogonal projectors.” The source's Section 7 concerns Hermitian and unitary operators; the cited finite-dimensional projection material is in Section 5.

Evidence checked for these repairs included the actual hypotheses of the local multiplier/PVM/Fock suppliers; the published choice result `thm-choice-implies-dependent-implies-countable-choice`; and the exact statement and proof of `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit`. I checked the relevant source passages in S. Pratt, *Lecture Notes on Quantum Mechanics*, Chapter 9 §9.2; B. Zwiebach, MIT 8.05, Chapter 6 §5.3; J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, §1.3.6; and Zwiebach, MIT 8.05, Chapter 3 §5. The source records are in the assigned items; the key links are [Pratt's notes](http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf), [MIT Chapter 6](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf), [Binney and Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf), and [MIT Chapter 3](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf).

## Page verdicts

- `qm-photons-and-radiation-modes` (A-page): no unedited defect identified. Its summary presents the radiation sector and its consequences conditionally on the stated postulates and mathematical suppliers.
- `qm-photons-and-radiation-modes-examples` (B-page): no unedited defect identified. Its summary keeps model predictions separate from observations and does not report measurements.

No confirmed defect remains unedited, and no blocker remains. The findings file therefore has an empty `findings` array.

## Validation and coverage limits

Reflow and precheck were run for each of the fourteen changed items; all prechecks passed (the postulate received its non-proof-structure check). The final batched proof-layout run covered all fourteen changed item paths and reported `14 items, 45 steps, 0 defects`. No item was changed after that run.

Coverage limitation: I did not independently re-audit the complete recursive proof closure of every external dependency among the batch's 68 unique dependency items. I checked the supplier statements and proof material needed for the reviewed claims, especially the Fock construction, multiplier/PVM and spectral results, choice assumptions, and zero-mass counterexample, and checked cited-source fidelity at the locators recorded above. The report and findings do not claim a complete recursive audit of all remaining supplier proofs.
