---
id: ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget
aliases: [ nrqm-driven-dynamics-linear-drive-rotating-wave-budget ]
kind: example
domain: physics
title: "Worked rotating-wave error budget for the linearly driven two-level
  model: dimensionless instantiation and averaged Rabi check"
status: draft
origin: session
dependency_level: 12
deps:
  [
    pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error,
    pthm-nrqm-driven-dynamics-circular-drive-exact-rabi,
    def-nrqm-driven-dynamics-framework-driven-model,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-hilbert-space,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional computation inside the declared linear two-level
  drive model with declared dimensionless angular-frequency ratios: the
  rotating-wave error budget at three elapsed times, one exact rational averaged
  Rabi population, and the comparison with the exactly solvable circular drive.
  The example is a model computation; it asserts no laboratory system, no
  measured frequency or population, no damping and no measurement record."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Section 5 chapter pages 14-15 (PDF pages 14-15): the
        linearly oscillating ammonia drive and the counter-rotating terms of the
        decomposition"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 in the readings of the declared driven model ([[def-nrqm-driven-dynamics-framework-driven-model]] clause (a)) and the **linear two-level drive model** of its clause (f) with $\mathbb C^{2}$, the basis $(e_{\uparrow},e_{\downarrow})$ and the Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e). Declare the dimensionless ratios $\omega>0$, $\Delta=\omega_{0}-\omega=0$ (resonance) and $\Omega_{1}=\omega/50$, so that $\Omega_{1}/|\omega|=1/50$; all angular frequencies are declared model parameters read in $\mathrm{s^{-1}}$ ([[def-nrqm-framework-quantities-and-units]]), and no value is attributed to a laboratory system. Let $p_{\downarrow}(t)$ be the exact down-population of the initially up state under the model's propagator, $p_{\downarrow}^{\mathrm{avg}}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)$ the averaged-model Rabi population of the page's error contract, and $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}[1+\tau(|\Delta|/2+3|\Omega_{1}|/4)]$. Then:

(a) the rotating-wave error contract reads $\varepsilon(\tau)=\frac{1}{100}(1+\frac{3\omega\tau}{200})$, so that $\varepsilon=1/100$ at $\omega\tau=0$, $\varepsilon=5/200=1/40$ at $\omega\tau=100$, and $\varepsilon=1/25$ at $\omega\tau=200$; the corresponding population-difference bounds $2\varepsilon$ are $2/100$, $1/20$ and $2/25$;

(b) at the declared elapsed time $\omega\tau=100\pi/3$ one has $\Omega_{1}\tau/4=\pi/6$ and the averaged-model population is exactly $p_{\downarrow}^{\mathrm{avg}}=1/4$;

(c) for the **circular** drive of the companion theorem with the same $\omega_{0},\omega,\Omega_{1}$ the model's exact population obeys the same Rabi-type formula with no rotating-wave error, so the non-zero bound of (a) is specific to the linear polarization;

(d) the numbers in (a)-(b) are outputs of the declared model and its error contract; they are not measured values, and clause (a)'s bound is conservative (at $\tau=0$ the two propagators coincide while the bound is $1/50$).

## Verification

**Given:** the declared linear two-level drive model with $\Delta=0$, $\Omega_{1}=\omega/50$, the declared elapsed times, and the companion circular model with the same frequencies; the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the page's reading.

[L1] **The page's error contract and averaged model.** For the declared linear model with $\omega\ne0$, $\Delta=\omega_{0}-\omega$, $A$ and $B$ as in the companion theorem, one has $\|U_{\mathrm l}^{R}(t,s)-e^{-i(t-s)A/\hbar}\|\le\varepsilon(|t-s|)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}[1+\tau(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4})]$, and $|p_{\downarrow}(t)-p_{\downarrow}^{\mathrm{avg}}(t-s)|\le2\varepsilon(|t-s|)$ with $p_{\downarrow}^{\mathrm{avg}}(\tau)=\frac{(\Omega_{1}/2)^{2}}{\Delta^{2}+(\Omega_{1}/2)^{2}}\sin^{2}(\frac{\tau}{2}\sqrt{\Delta^{2}+\Omega_{1}^{2}/4})$ ([[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (b), (c)).

[L2] **The circular comparison.** For the circular model with the same $\omega_{0},\omega,\Omega_{1}$ the rotating-frame reduction is exact and the down-population is $p_{\downarrow}(t)=\Omega_{1}^{2}\sin^{2}(b(t-s)/2)/b^{2}$, $b=\sqrt{\Delta^{2}+\Omega_{1}^{2}}$ ([[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clause (b)).

[L3] **Arithmetic of the declared ratios.** $\Omega_{1}/(2|\omega|)=1/100$; $3\Omega_{1}/4=3\omega/200$; at $\Delta=0$ the averaged formula reduces to $\sin^{2}(|\Omega_{1}|\tau/4)$; and $\omega\tau=100\pi/3$ gives $\Omega_{1}\tau/4=(\omega/50)\tau/4=\omega\tau/200=\pi/6$.

**Proof technique:** direct; substitute the declared ratios into the page's error contract and averaged formula and evaluate the elementary arithmetic exactly.

**Given:** the data of the Example and [L1]-[L3].

1.1 [The budget values] By [L1] and [L3], $\varepsilon(\tau)=\frac{1}{100}(1+\frac{3\omega\tau}{200})$; at $\omega\tau=0,100,200$ this is $\frac{1}{100}$, $\frac{1}{100}(1+\frac32)=\frac{1}{40}$ and $\frac{1}{100}(1+3)=\frac{1}{25}$; the population-difference bound of [L1] is twice these numbers. This is clause (a). [L1, L3, algebra]

1.2 [The exact averaged population] At $\Delta=0$ the averaged formula of [L1] is $p_{\downarrow}^{\mathrm{avg}}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)$; at the declared time [L3] gives $\Omega_{1}\tau/4=\pi/6$, so $p_{\downarrow}^{\mathrm{avg}}=\sin^{2}(\pi/6)=1/4$ exactly. This is clause (b). [L1, L3, algebra]

2.1 [Circular comparison and scope] By [L2] the circular model with the same frequencies has the exact population without a rotating-wave error term, so the non-zero bound of clause (a) is a property of the linear polarization; the values computed are model outputs, and at $\tau=0$ the two propagators coincide while the contract's bound is $1/50$, so the bound is conservative rather than sharp. This is clauses (c) and (d). [L1, L2, step 1.1, algebra] ∎

## Remarks

- **Reading the budget.** The error contract is a uniform bound, not a prediction of the actual difference; the example shows the two faces of that: the bound is exact arithmetic (rational numbers at the declared times), and it is conservative at the initial time, where the true difference vanishes.
- **No physical numbers.** The example deliberately uses only declared ratios and dimensionless elapsed times; no frequency, field amplitude or relaxation parameter of a laboratory species appears.
