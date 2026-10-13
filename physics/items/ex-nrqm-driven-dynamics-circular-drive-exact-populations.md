---
id: ex-nrqm-driven-dynamics-circular-drive-exact-populations
aliases: [ nrqm-driven-dynamics-circular-drive-exact-populations ]
kind: example
domain: physics
title: "Worked Rabi populations of the circularly driven two-level model:
  quarter-inversion, pi-pulse and detuned checks"
status: published
origin: session
dependency_level: 12
deps:
  [
    pthm-nrqm-driven-dynamics-circular-drive-exact-rabi,
    def-nrqm-driven-dynamics-framework-driven-model,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-framework-quantities-and-units,
    def-hilbert-space,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional computation inside the declared circular
  two-level drive model with declared dimensionless angular-frequency ratios:
  the exact Rabi populations at a quarter-inversion time, at the pi-pulse and at
  the return time, and a detuned finite check, together with the periodicity of
  the population. The example is a model computation; it asserts no laboratory
  system, no measured frequency, no damping and no measurement record."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the
        two-state oscillation probabilities P_up, P_down and the rotating-frame
        reduction of a circular drive"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 in the readings of the declared driven model ([[def-nrqm-driven-dynamics-framework-driven-model]] clause (a)) and the **circular two-level drive model** of its clause (f) with $\mathbb C^{2}$, the basis $(e_{\uparrow},e_{\downarrow})$ and the Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e). All angular frequencies below are declared model parameters read in $\mathrm{s^{-1}}$ ([[def-nrqm-framework-quantities-and-units]]); no value is attributed to a laboratory system. For the numerical substitutions below, frequency symbols denote their numerical values in $\mathrm{s^{-1}}$ and $t,s$ denote numerical time values in seconds; thus a displayed elapsed time $t-s=\pi/2$ means a physical duration $(\pi/2)\,\mathrm s$, and the displayed sine arguments are dimensionless. Define $\sigma_{\pm}:=(\sigma_x\pm i\sigma_y)/2$. Three declared parameter sets are used:

1. **Resonant set.** $\omega_{0}=\omega=1$, $\Omega_{1}=2$, so $\Delta=0$ and $b=2$;
2. **Detuned set.** $\omega_{0}=1+\sqrt3$, $\omega=1$, $\Omega_{1}=1$, so $\Delta=\sqrt3$ and $b=2$;
3. **Undriven set.** $\Omega_{1}=0$ and arbitrary $\omega_{0},\omega$.

In each set prescribe the displayed circular energy family for all real physical times. For $s,t\in\mathbb R$, define $U_{\mathrm c}(t,s)$ by the model's unique propagator on any compact interval $J$ containing $s,t$. These restrictions agree: on a larger compact interval containing two choices, uniqueness of the norm Dyson integral equation identifies both restrictions. Thus this definition extends the compact-interval model consistently to all real evaluation times. Let $U_{\mathrm c}(t,s)$ be that propagator and let $p_{\downarrow}(t)=\langle P_{\downarrow}U_{\mathrm c}(t,s)e_{\uparrow},U_{\mathrm c}(t,s)e_{\uparrow}\rangle$ be the down-population of the initially up state. Then:

(a) for the resonant set, $p_{\downarrow}(t)=\sin^{2}(t-s)$, so $p_{\downarrow}=1/2$ at the **quarter-inversion time** $t-s=\pi/4$, $p_{\downarrow}=1$ at the **pi-pulse** time $t-s=\pi/2$, and $p_{\downarrow}=0$ again at $t-s=\pi$;

(b) for the detuned set, $p_{\downarrow}(t)=\frac14\sin^{2}(t-s)$, so $p_{\downarrow}=1/4$ at $t-s=\pi/2$ and the population is exactly $\pi$-periodic in $t-s$;

(c) for the undriven set, $p_{\downarrow}(t)\equiv0$ and $p_{\uparrow}(t)\equiv1$ for all $t$, while the transverse coherences $\langle\sigma_{\pm}\rangle(t):=\langle\sigma_{\pm}U_{\mathrm c}(t,s)e_{\uparrow},U_{\mathrm c}(t,s)e_{\uparrow}\rangle$ rotate with phase $e^{\pm i\omega_{0}(t-s)}$: the general coherence transforms by this phase at the splitting frequency $\omega_0$, while the specified initial up state has both transverse coherences zero;

(d) in every set the population is the outcome probability of the projection $P_{\downarrow}$ in the evolved preparation in the reading of P2; no damping, decoherence, measurement record or laboratory identification is asserted.

## Verification

**Given:** the declared circular two-level drive model and the three declared parameter sets; the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the page's spectral reading.

[L1] **The page's exact theorem.** For the declared circular model with detuning $\Delta=\omega_{0}-\omega$ and $b=\sqrt{\Delta^{2}+\Omega_{1}^{2}}$, the rotating-frame reduction is exact and the down-population of the initial up-state is $p_{\downarrow}(t)=\Omega_{1}^{2}\sin^{2}(b(t-s)/2)/b^{2}$ for $b>0$, with the resonance case $\Delta=0$ giving $p_{\downarrow}=\sin^{2}(\Omega_{1}(t-s)/2)$ and the undriven case $\Omega_{1}=0$ giving constant populations ([[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clauses (b), (c)).

[L2] **The declared parameters.** For set 1: $\Delta=0$, $b=2$, $\Omega_{1}^{2}/b^{2}=1$; for set 2: $\Delta=\sqrt3$, $b=\sqrt{3+1}=2$, $\Omega_{1}^{2}/b^{2}=1/4$; for set 3: $\Omega_{1}=0$. These are immediate substitutions in the declared numbers.

**Proof technique:** direct; substitute the declared parameters into the page's exact Rabi formula and evaluate the sine at the displayed times.

**Given:** the data of the Example and [L1]-[L2].

1.1 [Resonant set] For every finite displayed evaluation choose a compact $J$ containing $s,t$; the all-real circular family is bounded and norm-continuous on $J$, so [L1] applies. Independence of $J$ follows from the norm Dyson uniqueness included in the model: restrictions from a larger interval solve the same initial integral equation on the smaller one. By [L1] with $\Delta=0$ one has $p_{\downarrow}=\sin^{2}(\Omega_{1}(t-s)/2)=\sin^{2}(t-s)$ because $\Omega_{1}=2$ by [L2]; at $t-s=\pi/4$ this is $\sin^{2}(\pi/4)=1/2$; at $t-s=\pi/2$ it is $\sin^{2}(\pi/2)=1$; and at $t-s=\pi$ it is $\sin^{2}(\pi)=0$, using $\sin(\pi/4)=\sqrt2/2$ and $\sin(\pi/2)=1$. This is clause (a). [L1, L2, algebra]

1.2 [Detuned set] By [L1] and [L2], $p_{\downarrow}=\frac14\sin^{2}(t-s)$; at $t-s=\pi/2$ this is $\frac14\sin^{2}(\pi/2)=1/4$, and since $\sin^{2}$ has period $\pi$ the population is $\pi$-periodic in $t-s$. This is clause (b). [L1, L2, algebra]

2.1 [Undriven set and reading] With $\Omega_{1}=0$ the family of clause (f) of the model is $\frac{\hbar\omega_{0}}{2}\sigma_{z}$, which is diagonal in the basis $(e_{\uparrow},e_{\downarrow})$, so $U_{\mathrm c}(t,s)=e^{-i\omega_{0}(t-s)\sigma_{z}/2}$ and $p_{\downarrow}\equiv0$, $p_{\uparrow}\equiv1$; writing $\sigma_{\pm}=\frac12(\sigma_{x}\pm i\sigma_{y})$ one has $e^{i\theta\sigma_{z}}\sigma_{\pm}e^{-i\theta\sigma_{z}}=e^{\pm 2i\theta}\sigma_{\pm}$ by the matrix products of clause (e), so $U_{\mathrm c}(t,s)^{*}\sigma_{\pm}U_{\mathrm c}(t,s)=e^{\pm i\omega_{0}(t-s)}\sigma_{\pm}$ so the phase identity holds for every initial vector, while for the specified up state the initial and evolved transverse coherences both vanish; in all three sets the numbers are outcome probabilities of the projection $P_{\downarrow}$ in the evolved preparation by the reading of clause (e) of the model, so no measurement or laboratory claim is made. These are clauses (c) and (d). [L1, L2, given] ∎

## Remarks

- **Why the checks are exact.** Each population in clauses (a)-(c) is the square of a sine at a rational multiple of $\pi$, so the values $1/2$, $1$, $0$ and $1/4$ are exact rational outputs of the model, not numerical approximations or measurements.
- **Declared parameters, no measurements.** The three sets are declared frequency parameters with the numerical-unit convention above; no frequency, energy or time of any laboratory species is claimed, and no source-reported measured value is used.
