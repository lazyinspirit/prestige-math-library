# Reader report — physics-cm-qm-gr-79-2026-10-11, batch 40

## Scope and inventory

Reviewed the two assigned pages and all 47 listed item files in dependency order.

Pages:

- `qm-math-controlled-dynamics` — `library/non-relativistic-quantum-mechanics-mathematics/qm-math-controlled-dynamics.md`
- `qm-math-controlled-dynamics-examples` — `library/non-relativistic-quantum-mechanics-mathematics/qm-math-controlled-dynamics-examples.md`

Items on `qm-math-controlled-dynamics`:

- `lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus`
- `lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus`
- `thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation`
- `thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution`
- `thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness`
- `lem-nrqm-controlled-dynamics-dyson-truncation-bound`
- `thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization`
- `thm-nrqm-controlled-dynamics-contour-perturbation-projection`
- `thm-nrqm-controlled-dynamics-cook-domain-criterion`
- `thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate`
- `thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel`
- `thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound`
- `thm-nrqm-controlled-dynamics-two-level-rabi-model`
- `thm-nrqm-controlled-dynamics-wkb-explicit-error`
- `thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients`
- `thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence`
- `thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining`
- `thm-nrqm-controlled-dynamics-degenerate-feshbach-error`
- `thm-nrqm-controlled-dynamics-liouville-turning-point-transformation`
- `thm-nrqm-controlled-dynamics-quadratic-free-packet-decay`
- `thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error`
- `thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients`
- `thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture`
- `prop-nrqm-controlled-dynamics-first-order-amplitude-tail`
- `thm-nrqm-controlled-dynamics-analytic-perturbation-remainder`
- `thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation`
- `thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection`
- `thm-nrqm-controlled-dynamics-dollard-integrable-remainder`
- `thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error`
- `thm-nrqm-controlled-dynamics-radial-carleman-estimate`
- `thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp`
- `thm-nrqm-controlled-dynamics-driven-oscillator-common-domain`
- `thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator`
- `thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues`
- `thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility`
- `thm-nrqm-controlled-dynamics-compact-scattering-defects`
- `thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux`
- `thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness`
- `thm-nrqm-controlled-dynamics-controlled-born-amplitude-error`
- `thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate`
- `thm-nrqm-controlled-dynamics-dollard-channel-completeness`
- `thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence`
- `thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness`
- `thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification`

Items on `qm-math-controlled-dynamics-examples`:

- `ex-nrqm-controlled-dynamics-gap-closing-failure`
- `ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation`
- `ex-nrqm-controlled-dynamics-long-time-rwa-limitation`

The direct current-run draft suppliers opened in dependency order were:

- Batch 35: `lem-nrqm-composites-complex-gaussian-continuation`.
- Batch 36: `thm-nrqm-oscillator-hermite-recurrence`, `lem-nrqm-oscillator-closed-ladder-domains`, `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`.
- Batch 37: `prop-nrqm-orbital-and-spin-finite-spin-matrices`, `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation`, `thm-nrqm-orbital-and-spin-associated-polynomial-normalization`, `thm-nrqm-orbital-and-spin-weighted-angular-completeness`, `thm-nrqm-orbital-and-spin-sphere-onb`, `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain`.
- Batch 38: `thm-nrqm-intervals-regular-ivp-parameter-series`.
- Batch 39: `def-nrqm-coulomb-ltwo-kernel-operators`, `lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`, `thm-nrqm-coulomb-angular-radial-unitary-reduction`.

Their relevant statements and proofs were checked against their uses. Relevant published mathematical dependency statements were opened, including the exact Choice hypotheses cited in the findings below. I did not reconstruct every transitive proof in the published mathematics closure.

## Edit

In `qm-math-controlled-dynamics`, the summary said the page opened with the norm-continuous Dyson theorem and truncation estimate. The page item list actually begins with two spectral-calculus lemmas, then the allowed-region WKB equation and common-domain evolution; Dyson and its truncation estimate are fifth and sixth. I corrected the summary to match the list. I also replaced its categorical claim that no item asserts a physical interpretation: the assigned Rabi theorem calls a squared transition amplitude a “probability of finding” spin down, which lacks an adopted measurement rule and is reported below. The revised summary describes the page as mathematical model calculations and says it records no experimental observations or uncertainty records.

In `thm-nrqm-controlled-dynamics-liouville-turning-point-transformation`, I specified `J=[-x_-,x_+]`, `x_-,x_+>0`, the classical solution type `u∈C²(J;ℂ)`, and the definition of `w` through the inverse of `ζ`, after clause (a) establishes that inverse. I removed unused WKB, Airy, Bochner-integrability and Countable-Choice prerequisites; added the Heine–Borel and extreme-value suppliers for compactness and the positive minimum; and added dominated convergence for the integral regularity argument. I updated the proof contract. Reflow reported no changes and precheck passed.

In `thm-nrqm-controlled-dynamics-degenerate-feshbach-error`, I removed the AC-dependent discrete-spectrum definition from `deps` and `dependency_roles`. The Statement now identifies `σ(H₀)` through the resolvent definition and explicitly assumes `E∈σ(H₀)`, isolated, with `dim ker(H₀−E)=r` and the stated positive gap. I updated the proof contract. Its direct batch-59 consumer already declares both Countable Choice and AC. Reflow reported no changes and precheck passed. Neither repaired item contained a `verification.judge` record.

I left `thm-nrqm-controlled-dynamics-two-level-rabi-model` unchanged. Its finite-matrix proof invokes an AC-only group theorem, and its probability wording needs a measurement-rule review; both usages flow to direct batch-60 consumers that use the same probability clause with an explicit physical outcome postulate. A coordinated edit must address that interface and both findings together.

## Findings left for owner disposition

1. `qm-math-controlled-dynamics-examples`, summary’s final sentence on the long-time rotating-wave example: the sentence moves from the fixed commuting case `A=B=σ_z, ω=1` and its nondecaying error to the class-wide failure of uniform-time smallness. The linked example explicitly says that this fixed case alone does not establish that conclusion, gives a commuting small-ratio bound, and uses a separate noncommuting family with ratio tending to zero and error 2 to prove the class-wide statement. The page is read-only for this assignment. Finding: `unlicensed-inference`, nonfatal.

2. `thm-nrqm-controlled-dynamics-two-level-rabi-model`, Facts & Assumptions [F2] and the corresponding `deps` entry: [F2] uses `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group` for finite-matrix exponential unitarity and uniqueness. That published Statement explicitly assumes the Axiom of Choice, while the assigned theorem does not state it. The finite-matrix result can instead be proved from the norm-convergent power series and the finite-dimensional ODE. Direct current-run consumers are in batch 60 (`pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error` and `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi`); I left the carrier untouched for coordinated review. Finding: `missing-hypothesis`, fatal.

3. `thm-nrqm-controlled-dynamics-two-level-rabi-model`, Statement (b), “Rabi probability” and its first sentence: the squared transition amplitude is called the probability of finding a spin-down result, but no Born rule or measurement model is adopted; the closing paragraph explicitly says no measurement statistics is asserted. The formula proves the squared amplitude, not an operational probability. Its batch-60 consumers use this clause with a separate physical outcome postulate, so the statement needs coordinated review with them. Finding: `unlicensed-inference`, fatal.

## Page verdicts and blocker

- `qm-math-controlled-dynamics`: the item-order and categorical no-physical-interpretation summary defects are repaired; no other page-level defect was confirmed in the checked prose.
- `qm-math-controlled-dynamics-examples`: the three example carriers’ mathematical computations were checked; the final summary sentence remains misleading about which construction establishes the uniform-time limitation and needs owner repair.
- No blocker prevented completion of the batch review. The Rabi item remains unchanged for coordinated review with batch-60 consumers. The Liouville and Feshbach repairs affect mathematical scope/prerequisite statements only; no other-batch file was edited.

## Review limits

All assigned pages and 47 item files were opened. The relevant direct in-run supplier proofs were checked. Published mathematical sources were checked at the statements needed for the audited claims, including the exact Axiom-of-Choice premises cited above; this review does not certify every transitive published proof. The batch includes a mathematical Rabi formula whose measurement-probability wording remains an unedited finding; the batch contains no reported experimental observation.
