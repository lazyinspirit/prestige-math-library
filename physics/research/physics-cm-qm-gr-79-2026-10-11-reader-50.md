# Step 3a reader report — batch 50

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: read-only reader  
Scope: batch `50`

## Scope and inventory

Opened the batch manifest and all 18 assigned item files, in the main-page-to-companion reading sequence. The assigned pages were:

- `qm-uncertainty-and-compatibility` — [library/non-relativistic-quantum-mechanics/qm-uncertainty-and-compatibility.md] — draft A-page.
- `qm-uncertainty-and-compatibility-examples` — [library/non-relativistic-quantum-mechanics/qm-uncertainty-and-compatibility-examples.md] — draft B-page.

Opened the 12 other page prerequisites listed by the manifest: `qm-massive-particle-kinematics`, `qm-measurement-and-instruments`, `qm-math-composites`, `qm-math-magnetic-and-detection`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `the-heat-kernel-and-the-cauchy-problem`, `improper-and-parameter-dependent-multiple-integrals`, `qm-math-orbital-and-spin`, `qm-math-intervals-and-contacts`, and `qm-autonomous-dynamics`. The B-page also requires the assigned A-page, which was opened above.

Assigned A-page items opened:

- `def-nrqm-uncertainty-strong-spectral-commutation`
- `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound`
- `def-nrqm-uncertainty-preparation-spread`
- `lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators`
- `thm-nrqm-uncertainty-joint-pvm-criterion`
- `lem-nrqm-uncertainty-product-domain-commutator-identity`
- `lem-nrqm-uncertainty-approximation-by-product-domain-vectors`
- `pthm-nrqm-uncertainty-robertson-relation`
- `pthm-nrqm-uncertainty-position-momentum-relation`
- `pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law`
- `pthm-nrqm-uncertainty-position-momentum-incompatible`
- `rem-nrqm-uncertainty-scope-and-empirical-status`

Assigned B-page items opened:

- `ex-nrqm-uncertainty-gaussian-minimum-spread`
- `texp-nrqm-uncertainty-spin-half-incompatibility`
- `cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility`
- `rem-nrqm-uncertainty-energy-time-caveat`
- `rem-nrqm-uncertainty-error-disturbance-distinction`
- `rem-nrqm-uncertainty-examples-scope-limits`

Reviewed the batch proof-contract inventory. It contains 12 records for the 12 proof-bearing assigned items; I compared their cited fact IDs and derivation-step maps with the current item proofs. No contract was edited. I did not independently re-audit every boundary worksheet in every contract.

The direct mathematical and model context opened for the principal arguments included the adjoint, Hilbert-space, projection-valued-measure, Borel, self-adjoint-operator and unbounded spectral-calculus suppliers; the scalar measures of PVMs, bounded PVM calculus and its star-homomorphism result; the quantum state, observable, moment, measurement, kinematics and spin definitions/postulates; the local weak Robertson and covariance inequalities; the Q/P domain, weak Leibniz, cutoff and graph-domain approximation results; the joint-PVM and compatible Lüders results; and the Gaussian/Fourier/moment suppliers used by the example. The exact high-impact suppliers are recorded in the findings below.

I opened the cited Teschl PDF and read §4.2, Lemma 4.5 and Corollary 4.7 (printed pp. 115–116, PDF pp. 126–127). Lemma 4.5 assumes a self-adjoint operator and a bounded operator commuting with its resolvents, and concludes commutation with bounded Borel functions and the stated domain preservation for unbounded functions; Corollary 4.7 gives the bounded-operator commutation criterion. This supports the bounded-calculus comparisons in the strong-spectral-commutation definition.

## Findings and uneditable defects

1. In `lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators`, Proof step 7.1 constructs the pullback PVM `F(Λ)=E_A(f^{-1}(Λ))` and invokes uniqueness of the spectral PVM to identify it as the spectral PVM of `f(A)`, but establishes only that `F` is a PVM, not that it is regular. The cited `thm-spectral-theorem-for-unbounded-self-adjoint-operators` states uniqueness among regular PVMs. The missing point is supplied by regularity of finite Borel measures on `R` (for example `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`), after observing each scalar measure of `F` is finite; add that prerequisite and discharge, or prove regularity locally. This is nonfatal to the mathematical claim but leaves clause (c) unproved as written. It does not affect clause (a), which is the clause used in the joint-PVM criterion.

2. The current batch-42 dependency `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale`, Proof step 4.1, invokes the product-domain Robertson fact [F3] and the commutator pairing from step 3.1 to prove the timescale bound. Its statement’s clause (c) does not require `Aψ(t₀)∈D(K)`; [F3] requires both product domains, including that missing membership. The result follows immediately under the stated hypotheses from the same dependency’s weak-form Robertson bound (clause (a) of `lem-nrqm-composites-weak-form-robertson-uncertainty`), applied to `Aψ(t₀)` and `Kψ(t₀)` in the inner product: combine `ΔK ΔA ≥ |Im⟨Aψ,Kψ⟩|` with `f'=-2 Im⟨Aψ,Kψ⟩/ℏ`. This is a nonfatal proof-step gap. The assigned consumer is `rem-nrqm-uncertainty-energy-time-caveat`.

3. The current batch-35 dependency `thm-nrqm-composites-joint-pvm-construction` has an ill-formed statement sentence at the end of its existence clause: after the rectangle formula, “where a rectangle is a measurable rectangle … . and it has marginals …” leaves a sentence fragment and starts a new sentence with a coordinating “and”. The intended marginal identities are present and clear; punctuation/grammar needs repair. The assigned consumer is `thm-nrqm-uncertainty-joint-pvm-criterion`.

No other confirmed defect in the assigned item/page prose remained from the material inspected. No assigned carrier was edited; the dispatch is read-only.

## Page verdicts

- `qm-uncertainty-and-compatibility`: qualified pass on the inspected content. The summary distinguishes preparation spreads from apparatus resolution/disturbance, identifies the product-domain hypotheses, states the full maximal-domain Q/P result, and limits incompatibility to a joint sharp observable with the exact spectral marginals. The mathematical clause-(c) regularity gap in the assigned bounded-calculus lemma is recorded above.
- `qm-uncertainty-and-compatibility-examples`: qualified pass on the inspected content. The Gaussian, spin-half, interval-counterexample and scope remarks match the assigned item statements; the page does not report an experiment or empirical data. Its timescale remark accurately calls the estimate conditional, with the cross-batch proof gap recorded above.

## Edits, checks, and coverage limit

Edits: none. No content carrier, proof contract, judge record, or verification stamp was changed. Because the assignment is read-only, no reflow, precheck, proof-layout, or other validators were run.

I did not inspect the full transitive item dependency closure. A metadata walk found 2,149 item files in the recursive closure of the 18 assigned roots, including large foundational mathematics branches; I opened the assigned carriers, all required page summaries, contracts, and a focused subset of mathematical and physical suppliers needed for the arguments above. The page summaries were opened after the assigned pages during this review. Those are genuine coverage limits; the verdicts are qualified accordingly. No blocker prevented writing this report and routing the identified findings.
