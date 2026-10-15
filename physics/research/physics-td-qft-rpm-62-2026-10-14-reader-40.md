# Step 3a reader report — batch 40

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Verdict: both assigned pages pass content review after the listed repairs; the required proof-layout scan is blocked by the renderer import error recorded below.

## Opened inventory

Assigned pages read in full:

- `qft-c01` — A page, Quantum field quantities and compatible SI normalizations.
- `qft-c01-examples` — B page, Two-level measurement and formal-coefficient boundary.

Assigned items read in full and in supplier context:

- `def-qft-framework-units`
- `post-qft-constructed-model-and-measurement`
- `texp-qft-two-level-measurement`

Run evidence read as navigation and evidence, not as a verdict: the batch-40 pages manifest, proof contracts, coverage record, notes, and the current autopilot status. The current run is in Step 3a reading; the assigned carriers are drafts.

The required `qft-mc03` page and its draft suppliers were read:

- `qft-mc03`
- `def-qft-finite-bounded-kraus-instrument`
- `lem-qft-finite-instrument-normalization`

The SR and EM suppliers were read before using their conventions: `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `def-sr-si-units-and-coordinate-conventions`, `def-em-si-conventions`, and `def-em-electromagnetic-tensor`.

Mathematical suppliers read for the assigned definitions, measurement construction, and example proof: `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-unbounded-linear-operator-domain-and-graph`, `def-countable-choice`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-projection-valued-measure`, `lem-nrqm-composites-rank-one-operator-calculus`, `thm-complex-plane-is-complete`, `thm-reals-ordered-field`, `def-formal-power-series-and-coefficient-extraction`, `lem-cauchy-reals-archimedean`, and `def-complex-conjugate-real-imaginary-part-and-modulus`.

For the QFT normalization proof chain I also read `def-bounded-linear-operator`, `def-space-of-bounded-linear-operators`, `def-operator-norm`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-nuclear-bounded-cyclicity`, `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, and `def-self-adjoint-positive-unitary-and-normal-operator`. The current-run QFT-MC03 lemma remains a draft prerequisite; neither the postulate nor the thought experiment treats it as independently approved.

## Source checks

- Srednicki, *Quantum Field Theory*, author-hosted draft, §12, printed pp. 104–105 (PDF pp. 103–104), equations (12.1)–(12.12). The section derives action-density and canonical scalar engineering dimensions under its stated natural-unit convention; the assigned proof supplies the SI conversions and the Dirac and photon kinetic-term dimension calculations locally.
- Tong, *Quantum Field Theory*, author-hosted Chapter 0, §0.1 “Units and Scales.” The section gives natural-unit conversion and the Compton-length relation used for the inverse-length mass parameter.
- BIPM, *The International System of Units*, 9th edition/version 4.01, §2.2, printed pp. 124–125, and §2.3.1 “The ampere,” printed p. 129. The defining values of $c$, $h$, and $e$ have no uncertainty; the current ampere definition fixes $e$ rather than $\mu_0$, so $\mu_0$ is determined experimentally. No current numerical estimate of $\mu_0$ is used.
- Watrous, *The Theory of Quantum Information*, author-hosted chapter extract, §2.3.1, printed pp. 100–104, and §2.3.2 “Nondestructive measurements and instruments,” printed pp. 111–113. The latter defines a finite Kraus measurement and a general instrument, assigns $\operatorname{Tr}(\Phi_a(\rho))$ as its outcome probability, and uses $\Phi_a(\rho)/\operatorname{Tr}(\Phi_a(\rho))$ as the conditional state when the probability is positive.
- Griffiths, “Notes on Quantum Information Theory,” version 30 Jan. 2004, complete §7, pp. 1–3, equations (7.2)–(7.9). It derives the supplied-Kraus pure-state outcome probability, normalization, and positive-probability update from a specified apparatus interaction. The QFT postulate remains an adopted model rule, not an apparatus-realization theorem.
- OpenStax, *Calculus Volume 2*, §6.1, Theorem 6.1 and proof, and Example 6.1(2). This source treats real numerical inputs; the assigned thought experiment separately proves divergence for every nonzero complex input.
- Howell, *Complex Analysis*, §4.4, Theorem 4.4.1 and Exercise 3(b). The exercise names the complex factorial series; the assigned proof supplies the argument rather than relying on the exercise as proof.

## Edits and evidence

1. In `def-qft-framework-units`, the sentence equating $\hbar c$ times the natural action density with a physical energy density was corrected. The action-density convention now states $S/\hbar=\int_{\mathcal U}\mathcal L_{\rm nat}\,d^4x$, assigns $\mathcal L_{\rm nat}$ unit $\mathrm m^{-4}$, and names $\hbar c\mathcal L_{\rm nat}$ the SI Lagrangian density, with unit $\mathrm{J\,m^{-3}}$. A Lagrangian density is not thereby identified with the Hamiltonian energy density. Proof step 1.4 was updated to establish the units of the SI Lagrangian density, and the corresponding derivation claim in the batch-40 proof contract was updated. This follows from the action normalization and $x^0=ct$; Srednicki §12 supports the natural action-density convention, while the SI unit multiplication is local algebra.

2. The same definition now specifies $\mathbf k\in\mathbb R^3$, its component units and Euclidean norm, and the domain and range of $\omega_\mu$. The Clifford matrices are typed as dimensionless endomorphisms of $\mathbb C^4$ and their anticommutator convention is explicit. The scalar and Dirac engineering-dimension symbols are marked as normalization labels, not pointwise field maps. The unitary map and the composition domain of $O_H(t)=U(t)^*OU(t)$ are explicit. The phrase “self-adjointly closable” was removed; the definition now states that it asserts no further operator properties beyond the given matrix-element continuity and linear maps.

3. In `post-qft-constructed-model-and-measurement`, the time parameter, Hilbert-space operator types, unitary-map condition, Hamiltonian unit, and domain of the Heisenberg conjugate are now explicit. Its `physical_scope` was also corrected to say that it supplies no continuum representation or convergence. The Born probability and conditional-state clauses are unchanged.

4. In the assigned A-page `qft-c01`, the summary no longer says “no missing continuum representation.” It now states that no continuum field representation is supplied and that further operator properties and local algebras require separate model constructions.

No assigned item had a stale `verification.judge` record to remove. The nonproof postulate received no proof stamp or proof section. No other batch, B page, published supplier, or plan file was edited.

## Consumer review

The current run manifest dependency closure contains 53 consumers of `def-qft-framework-units` and 28 consumers of `post-qft-constructed-model-and-measurement`; the latter set is contained in the former. I checked the direct consumer use passages and the intermediate interfaces along their current dependency paths. No downstream carrier needed a repair: the QED action consumers use $\mathcal L_{\rm nat}$ as an action/Lagrangian density, not as Hamiltonian energy density; momentum consumers already use spatial wave vectors in $\mathbb R^3$; and no postulate consumer uses the Heisenberg conjugation formula. The only consumer of the Schrödinger time-evolution convention keeps that convention unchanged.

Current-run closure carriers, grouped by manifest batch:

- Batch 40: `post-qft-constructed-model-and-measurement`, `texp-qft-two-level-measurement`.
- Batch 49: `def-qft-example-observable-types`, `ex-qft-x01`, `ex-qft-x03`, `pthm-qft-example-regulated-probability-control`.
- Batch 51: `def-qft-free-field-observables`, `ex-qft-mode-occupations`, `post-qft-free-field-model`, `pthm-qft-free-fock-statistics`.
- Batch 52: `def-qft-qed-physical-gauge-quantities`, `post-qft-free-photon-model`, `post-qft-qed-local-coupling`, `pthm-qft-photon-local-observables`, `pthm-qft-photon-physical-properties`, `pthm-qft-qed-classical-coupling`, `pthm-qft-qed-coulomb-constraints`, `texp-qft-photon-auxiliary-comparison`, `texp-qft-qed-neutral-cell`.
- Batch 53: `post-qft-compact-lattice-gauge-model`, `post-qft-formal-qed-coefficients`, `pthm-qft-lattice-gauge-existence`, `pthm-qft-lattice-gauge-ward`, `pthm-qft-qed-formal-ward`, `texp-qft-lattice-charged-operator`, `texp-qft-qed-infrared-sequence`.
- Batch 54: `ex-qft-x04`, `ex-qft-x05`, `ex-qft-x09`, `post-qft-example-formal-observable-map`, `pthm-qft-example-dirac-magnetic-benchmark`, `pthm-qft-example-formal-scattering-decay`.
- Batch 55: `ex-qft-x06`, `exp-qft-fan-electron-moment-2022`, `pthm-qft-example-soft-coherent-counts`, `pthm-qft-reported-electron-anomaly-shift`.
- Batch 56: `def-qft-free-scalar-model`, `ex-qft-scalar-vacuum-correlation`, `pthm-qft-scalar-free-properties`, `pthm-qft-scalar-vacuum-moments`.
- Batch 57: `def-qft-free-dirac-model`, `ex-qft-dirac-rotation-parity`, `pthm-qft-dirac-free-properties`.
- Batch 58: `cex-qft-point-operator-assumption`, `pthm-qft-classical-quantum-free-correspondence`, `pthm-qft-free-observable-domain-limits`.
- Batch 64: `def-qft-regulated-thermal-parameter`, `ex-qft-one-mode-interacting-model`, `post-qft-regulated-equilibrium-state`, `post-qft-regulated-polynomial-model`, `pthm-qft-quartic-model-energy-bound`, `pthm-qft-regulated-equilibrium-predictions`, `pthm-qft-regulated-interacting-model-evolution`.

## Page verdicts

- `qft-c01`: pass on content after the unit-definition and summary repairs. Its scope remains a conditional unit/domain dictionary; it asserts no measurement, pointwise field product, or continuum QFT construction.
- `qft-c01-examples`: pass. The finite two-level result is conditional on the explicitly adopted Born postulate and draft mathematical normalization supplier. The factorial series is a mathematical calculation and is not assigned a physical probability. No observation is reported.

## Checks and blocker

- `reflow.mts` and `precheck.mts` were run on both changed items after the final item edits. Both scoped prechecks passed; reflow left the postulate unchanged and reconciled the definition.
- The required final `node tools/physics-support/proof-layout.mjs items/def-qft-framework-units.md items/post-qft-constructed-model-and-measurement.md` command failed before scanning item rows. Its renderer could not resolve `@/components` imported from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). No proof-layout pass is claimed. This is the remaining blocker.
- No reported measurements or statistical inferences occur in the assigned batch.
- No confirmed defect remains outside the assigned edit scope.
