# Reader report — batch 46

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Batch: `46`

## Opened inventory

Pages opened:

- A: `qm-measurement-and-instruments` — `library/non-relativistic-quantum-mechanics/qm-measurement-and-instruments.md`
- B: `qm-measurement-and-instruments-examples` — `library/non-relativistic-quantum-mechanics/qm-measurement-and-instruments-examples.md`

All 14 assigned items were opened and reviewed:

- `lem-nrqm-measurement-selective-luders-update`
- `lem-nrqm-measurement-nonselective-luders-map`
- `def-nrqm-measurement-framework-declared-measurements-and-instruments`
- `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles`
- `pthm-nrqm-measurement-degenerate-eigenspace-update`
- `pthm-nrqm-measurement-instrument-updates-not-determined-by-effects`
- `pthm-nrqm-measurement-finite-effects-dilation`
- `pthm-nrqm-measurement-countable-kraus-instruments`
- `rem-nrqm-measurement-scope-and-empirical-status`
- `ex-nrqm-measurement-serial-stern-gerlach-filters`
- `ex-nrqm-measurement-three-polarizer-chain`
- `ex-nrqm-measurement-absorption-instrument`
- `ex-nrqm-measurement-degenerate-coarse-versus-fine-update`
- `rem-nrqm-measurement-examples-scope-limits`

I also opened the mathematical and physics suppliers needed for the claims reviewed, including the assigned general-H positivity/effect and instrument definitions; Hilbert tensor-product, adjoint, rank-one, trace-class, partial-trace, and trace-cyclicity results; the measurement postulates; and the dependency results for the projective, degenerate, dilation, and Kraus claims. Source sections checked for P2 include Teschl, *Mathematical Methods in Quantum Mechanics*, §2.1, pp. 55–58; Tong, *Quantum Mechanics*, §§3.2–3.3, pp. 67–80; Binney and Skinner, *The Physics of Quantum Mechanics*, §1.4, pp. 15–18; and Preskill, *Lecture Notes for Ph219/CS219*, ch. 3, §3.1.2, pp. 8–10, Eqs. 3.23–3.31.

## Edits and evidence

- `def-nrqm-measurement-framework-declared-measurements-and-instruments`: expanded clause (d)'s positive-form Cauchy–Schwarz step. The text now derives the inequality for a positive tail directly from positivity of its quadratic form, then uses `0 ≤ D ≤ I` to obtain `||Dx||² ≤ ⟨Dx,x⟩`. This supplies the strong convergence argument used to define each countable subseries effect.
- `lem-nrqm-measurement-selective-luders-update` and `lem-nrqm-measurement-nonselective-luders-map`: replaced the finite-dimensional positivity dependency with the general-H positivity definition and made the relevant quadratic-form positivity explicit. Their conditional and discarded-outcome conclusions are unchanged.
- `pthm-nrqm-measurement-finite-effects-dilation`: corrected the reduced conditional state. For the stated isometry, `P_a W = J_a F_a^{1/2}`, so the reduced conditional state is `F_a^{1/2} ρ F_a^{1/2}/p_a`; the nonselective reduction is the single square-root Kraus map `Λ(ρ) = Σ_a F_a^{1/2}ρF_a^{1/2}`. The prior extra application of `Λ` and the resulting two-index Kraus family were false. The proof now establishes the isometry, projections, compression, state normalization, probabilities, partial-trace formulas, and trace preservation locally with its actual dependencies. Clause (d) now distinguishes the projective Lueders case from the general nonuniqueness of updates for fixed effects. The proof contract was updated.
- `pthm-nrqm-measurement-countable-kraus-instruments`: removed the finite-dimensional positivity and finite-effects suppliers from its general-H argument. The proof now obtains each effect's quadratic-form bounds from the declared Kraus normalization, gives the positive-form Cauchy–Schwarz argument locally, and uses polarization explicitly for the quadratic-form identity. The finite-dimensional qualification on the projection consequence remains explicit. The proof contract was updated.
- `ex-nrqm-measurement-serial-stern-gerlach-filters`: labeled the values as probabilities predicted by the declared filter model and removed an unsupported spatial-field gradient formula; the example does not specify a field, beam-deflection, or detector model. The proof contract was updated.
- `ex-nrqm-measurement-degenerate-coarse-versus-fine-update`: corrected the coarse/fine description. Grouping fine outcomes `e₁,e₂` into `K` and `e₃` into `K⊥` is a refinement of the coarse outcome structure, while the resulting update remains distinct. The proof contract was updated.
- `rem-nrqm-measurement-scope-and-empirical-status`: clarified that the non-determination result compares instruments with the same effects, while the dilation theorem exhibits one particular square-root instrument.

No stale `verification.judge` record remained on the changed items. Reflow and precheck completed for all changed items. The direct prechecks passed for the six proof-bearing items; the definition and scope remark produced `0 checked, 0 failing`. The final layout command reported `8 items, 32 steps, 0 defects`.

## Uneditable finding

`post-nrqm-framework-observable-and-probability` is a draft supplier in batch 43, outside this reader's edit scope. P2 itself gives a general-H definition of effects, so I found no defect in that definition. Its listed sources, however, support the sharp spectral and ideal projective-measurement material but do not substantiate clause (iv)'s finite unsharp-outcome/POVM extension: Teschl §2.1 treats self-adjoint observables and spectral probability; Tong §§3.2–3.3 treat Hermitian operators and the sharp measurement postulate; and Binney–Skinner §1.4 treats ideal measurement and amplitudes. Preskill §3.1.2, pp. 8–10, Eqs. 3.23–3.31 gives the relevant generalized-measurement/POVM statements. The unsharp clause is explicitly adopted as a model postulate, so this is a nonfatal citation-accuracy defect rather than a failure of a purported deduction. Its exact current SHA-256 is recorded in the findings JSON. The assigned consumer whose dependency closure reaches it is `pthm-nrqm-measurement-finite-effects-dilation`.

## Page verdicts and blocker

- `qm-measurement-and-instruments` (A): local mathematical and scope repairs are complete. Final source sign-off remains pending owner disposition of the nonfatal P2 citation finding above.
- `qm-measurement-and-instruments-examples` (B): the reviewed examples are internally consistent after the repairs; no remaining defect was identified.

No workflow blocker. The P2 supplier finding is outside batch 46's edit authority and is reported for owner disposition.
