# Step 3a Reader Report — Batch 52

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: pages `qm-harmonic-oscillator` and `qm-harmonic-oscillator-examples`; assigned items in batch 52.

## Opened inventory

### Assigned pages

- `qm-harmonic-oscillator` — [library/non-relativistic-quantum-mechanics/qm-harmonic-oscillator.md](../library/non-relativistic-quantum-mechanics/qm-harmonic-oscillator.md), draft A page.
- `qm-harmonic-oscillator-examples` — [library/non-relativistic-quantum-mechanics/qm-harmonic-oscillator-examples.md](../library/non-relativistic-quantum-mechanics/qm-harmonic-oscillator-examples.md), draft B page.

### Assigned items

All 12 listed carriers were opened and reviewed:

- A page: `lem-nrqm-oscillator-diagonal-eigenspaces`; `lem-nrqm-oscillator-unitary-transport-of-spectral-pvms`; `def-nrqm-oscillator-framework-quadratic-potential-model`; `pthm-nrqm-oscillator-energy-spectrum-and-completeness`; `def-nrqm-oscillator-coherent-states`; `pthm-nrqm-oscillator-coherent-state-fluctuations`; `pthm-nrqm-oscillator-coherent-state-evolution`; `rem-nrqm-oscillator-scope-and-empirical-status`.
- B page: `ex-nrqm-oscillator-ground-state-gaussian`; `ex-nrqm-oscillator-ladder-norms`; `ex-nrqm-oscillator-coherent-trajectory`; `rem-nrqm-oscillator-examples-scope-limits`.

### Dependency and consumer context opened

The oscillator mathematics suppliers checked in dependency order included `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma`, `thm-nrqm-oscillator-diagonal-spectrum`, `thm-nrqm-oscillator-hermite-recurrence`, `thm-nrqm-oscillator-hermite-orthogonality`, `thm-nrqm-oscillator-hermite-completeness`, `lem-nrqm-oscillator-closed-ladder-domains`, `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`, `thm-nrqm-oscillator-multidimensional-oscillator-completeness`, `thm-nrqm-oscillator-coherent-state-convergence`, and `thm-nrqm-oscillator-coherent-evolution-and-variance`. For the three-dimensional result I also checked the cited tensor-product construction and maps, Euclidean $L^2$ product unitary, and stars-and-bars statement.

Framework dependencies checked included `post-nrqm-framework-state-and-composition` (P1), `post-nrqm-framework-observable-and-probability` (P2), `post-nrqm-framework-autonomous-dynamics` (P4), `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle` (P5), and `post-nrqm-framework-preparation-and-apparatus` (P7); `def-nrqm-state-geometry-framework-state-space`; `def-nrqm-observables-framework-observable-and-outcome-law`; `def-nrqm-autonomous-dynamics-framework-evolution`; `def-nrqm-kinematics-framework-massive-spin-s-model`; `def-nrqm-framework-quantities-and-units`; and `def-nrqm-uncertainty-preparation-spread`. Other checked current-run results were `pthm-nrqm-observables-born-outcome-law-properties`, `pthm-nrqm-observables-preparation-moments`, `lem-nrqm-observables-moments-and-variance`, `lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity`, `lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues`, `lem-nrqm-observables-spectral-support-and-outcome-law`, `lem-nrqm-kinematics-componentwise-position-and-momentum`, `lem-nrqm-observables-l2-multiplication-spectral-measure`, `lem-nrqm-uncertainty-product-domain-commutator-identity`, `lem-nrqm-uncertainty-approximation-by-product-domain-vectors`, `pthm-nrqm-uncertainty-robertson-relation`.

Published mathematical interfaces opened included `def-axiom-of-choice`, `def-countable-choice`, `def-hilbert-space`, `def-inner-product-space`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `def-projection-valued-measure`, `lem-scalar-and-complex-measures-from-a-pvm`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `def-unbounded-integral-against-a-pvm`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-resolvent-of-a-closed-operator`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`. I also checked the cited Fourier, heat-kernel, Gaussian-transform, change-of-variables, complex-exponential, Euler, and trigonometric interfaces: `thm-plancherel`, `def-heat-kernel`, `lem-heat-kernel-normalisation-scaling-and-derivatives`, `lem-first-and-second-moments-of-the-heat-kernel`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-complex-exponential`, `lem-complex-exponential-series-converges-everywhere`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`.

After the notation repair to the oscillator model definition, I checked its current-run consumers in batch 60: `pthm-nrqm-driven-dynamics-common-domain-propagator`, `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response`, and `rem-nrqm-driven-dynamics-examples-scope-limits`. They use the oscillator energy as $H_{\mathrm{osc}}$ and specify $L^2(\mathbb R,dx)$; none relies on $H_1$ as the name of the Hilbert space. No repair was needed there.

## Review and repairs

All proofs were checked against their stated domains, inner-product convention (linear in the first argument), dependency facts, physical assumptions, and units. The physical statements are conditional consequences of the adopted postulates and oscillator model. The pages and items report no laboratory measurements or empirical outcomes.

1. In `def-nrqm-oscillator-framework-quadratic-potential-model`, $H_1$ named both the one-dimensional Hilbert space and the Hamiltonian. I renamed the Hilbert space to \(\mathcal H_1\) throughout the definition and retained $H_1$ for the energy operator. This removes ambiguity in the domains $D(Q)$, $D(P)$, $D(H_1)$, and $D(N_\psi)$.

2. In `pthm-nrqm-oscillator-energy-spectrum-and-completeness`, I changed “the $\psi_n$ are exactly the eigenvectors” to the exact claim that the eigenspace at $n$ is $\mathbb C\psi_n$, so the nonzero eigenvectors are precisely the nonzero scalar multiples of the listed vector. This matches the proof at step 2.2 and the eigenspace supplier `lem-nrqm-oscillator-diagonal-eigenspaces`. I also used $\mathcal H_1$ for the carrier space.

3. In `def-nrqm-oscillator-coherent-states`, `pthm-nrqm-oscillator-coherent-state-fluctuations`, `pthm-nrqm-oscillator-coherent-state-evolution`, and `ex-nrqm-oscillator-ladder-norms`, I used $\mathcal H_1$ where a Hilbert-space type was intended; $H_1$ remains the Hamiltonian symbol.

4. In `pthm-nrqm-oscillator-coherent-state-evolution`, $x_0,p_0$ were previously defined only for \(|z|>0\), while the classical-form clause applied to every label. I defined both initial means for every \(z\in\mathbb C\), including $z=0$, where they equal zero. I also made the energy-spread calculation explicit: \(E_n-\hbar\omega(s+\tfrac12)=\hbar\omega(n-s)\), so the energy variance is \((\hbar\omega)^2s\) and the spread is \(\hbar\omega|z|\).

5. In `ex-nrqm-oscillator-ladder-norms`, I made the non-self-adjointness argument explicit. The ladder actions give \(a_\psi\psi_0=0\) and \(a^\dagger_\psi\psi_0=\psi_1\ne0\), while the closed-ladder supplier gives both adjoint relations; therefore neither operator equals its adjoint. The comparison with the assigned sharp observables now follows from the stated definition.

6. I regenerated the affected batch-52 proof-contract citations and derivations for `pthm-nrqm-oscillator-energy-spectrum-and-completeness`, `pthm-nrqm-oscillator-coherent-state-fluctuations`, `pthm-nrqm-oscillator-coherent-state-evolution`, `ex-nrqm-oscillator-ground-state-gaussian`, `ex-nrqm-oscillator-ladder-norms`, and `ex-nrqm-oscillator-coherent-trajectory`, keeping the unchanged boundary records. No edited carrier had a `verification.judge` record to remove.

The cited textbook passages were checked as source context, not as experimental evidence. Binney and Skinner, *The Physics of Quantum Mechanics*, §3.1, printed pp. 37–41 (PDF pp. 45–49), gives the oscillator ground Gaussian and its position and momentum dispersions; its length symbol satisfies \(\ell_B^2=\hbar/(2m\omega)\), so \(\ell=\sqrt{2}\ell_B\) in these items yields the stated \(\Delta Q=\ell/\sqrt2\), \(\Delta P=\hbar/(\ell\sqrt2)\). Its §3.2, printed pp. 41–44 (PDF pp. 49–52), derives sinusoidal motion of oscillator expectation values. Zwiebach, MIT 8.05 Chapter 6, §§4.2–4.5, printed pp. 28–41, records coherent-state normalization, means, uncertainties, energy-basis Poisson weights, variance, and the phase rotation $e^{-i\omega t/2}\Psi_{ze^{-i\omega t}}$. Teschl, *Mathematical Methods in Quantum Mechanics*, §8.3, printed pp. 178–179 (PDF pp. 190–191), states the Hermite oscillator basis and three-dimensional spectrum; the physics items rely on the local mathematical proofs for their exact operator domains and scaling.

## Validation

Required reflow and precheck were run for the six changed item carriers. Reflow reported all six unchanged; precheck passed the four proof-bearing carriers and reported no proof sections to check for the two definitions. The final required proof-layout command covered all six changed paths: **6 items, 33 steps, 0 defects**. No other tests were run.

## Page verdicts

- `qm-harmonic-oscillator`: **Pass after the local notation repair.** The model is defined by explicit Hilbert spaces, domains, units, adopted assumptions, and exact operator realizations; the spectrum, eigenbasis, uncertainty, and evolution conclusions have conditional proofs. The summary preserves the model’s idealization and non-empirical status.
- `qm-harmonic-oscillator-examples`: **Pass after the local repairs.** The Gaussian laws, ladder calculations, and coherent-state trajectory are calculations within the declared model. The summaries distinguish preparation means and outcome laws from measurements and make no empirical claim.

## Uneditable defects and blockers

No confirmed defect remained in an uneditable item, page, or dependency after the review. No blocker.
