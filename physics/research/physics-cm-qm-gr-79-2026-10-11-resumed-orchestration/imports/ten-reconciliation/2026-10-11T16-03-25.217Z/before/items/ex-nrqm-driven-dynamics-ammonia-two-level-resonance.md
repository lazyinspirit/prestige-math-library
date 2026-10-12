---
id: ex-nrqm-driven-dynamics-ammonia-two-level-resonance
aliases: [nrqm-driven-dynamics-ammonia-two-level-resonance]
kind: example
domain: physics
title: "The two-level inversion model in an oscillating field: resonance, averaged Rabi inversion and its error contract"
status: draft
origin: session
dependency_level: 11
deps: [pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, def-nrqm-driven-dynamics-framework-driven-model, prop-nrqm-orbital-and-spin-finite-spin-matrices, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-hilbert-space, def-inner-product-space, def-countable-choice, def-axiom-of-choice]
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
physical_scope: "A conditional two-level model of an inversion doublet driven by an oscillating field: the identification with the declared linear drive model, the resonance condition and the averaged Rabi inversion probability, the pulse time, and the rotating-wave error contract at the pulse time for a declared coupling ratio. The example is a declared finite model; it asserts no measured transition frequency, no laboratory molecule or cavity, no damping or relaxation, no emission rate and no measurement record."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 4-5 chapter pages 7-15 (PDF pages 7-15): the two-state inversion model, its oscillation probability and the resonance condition for an oscillating electric field"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 in the readings of the declared driven model ([[def-nrqm-driven-dynamics-framework-driven-model]] clause (a)) and the basis $(|{\mathrm E}\rangle,|{\mathrm G}\rangle)$ of a **declared two-level inversion model**: two orthogonal unit vectors with the Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e) acting on their span, so that $\sigma_{z}=\operatorname{diag}(1,-1)$ distinguishes the two levels. Declare real parameters $\Delta_{0}>0$ (half the inversion splitting, joules), $\mu>0$ (a dipole-like coupling, in $\mathrm{C\,m}$), $E_{0}>0$ (a field amplitude, in $\mathrm{V\,m^{-1}}$) and a drive frequency $\omega>0$ in $\mathrm{s^{-1}}$, and declare the model's energy family
$$H(t):=\Delta_{0}\sigma_{z}+2\mu E_{0}\cos(\omega t)\,\sigma_{x},\qquad t\in\mathbb R,$$
read as the energy of the declared model, with $\hbar$ the reduced Planck constant of [[def-nrqm-framework-quantities-and-units]]; populations are the diagonal entries of the two projections onto $\mathbb C|{\mathrm E}\rangle$ and $\mathbb C|{\mathrm G}\rangle$ in the evolved preparation. Fix the **coupling ratio** $x:=\mu E_{0}/\Delta_{0}$ (dimensionless). Then:

(a) *Identification with the declared linear drive.* $H(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ with
$$\omega_{0}=\frac{2\Delta_{0}}{\hbar},\qquad \Omega_{1}=\frac{4\mu E_{0}}{\hbar},\qquad \omega_{0}\in\mathrm{s^{-1}},\ \Omega_{1}\in\mathrm{s^{-1}},$$
so the model is an instance of the declared linear two-level drive model of clause (f) with $\Delta=\omega_{0}-\omega$; the level splitting is $2\Delta_{0}$.

(b) *Resonance and averaged inversion.* At resonance $\omega=\omega_{0}$, i.e. $\hbar\omega=2\Delta_{0}$, the averaged model of the page's error contract predicts that the initial $|{\mathrm E}\rangle$ population is transferred to $|{\mathrm G}\rangle$ with probability
$$p_{\mathrm G}^{\mathrm{avg}}(\tau)=\sin^{2}\!\Bigl(\frac{\mu E_{0}\tau}{\hbar}\Bigr),$$
which equals $1$ at the **inversion time** $\tau=\pi\hbar/(2\mu E_{0})$; equivalently $\Omega_{1}\tau/4=\pi/2$ at that time.

(c) *Error contract at inversion.* At the inversion time $\tau=\pi\hbar/(2\mu E_{0})$ the exact $|{\mathrm G}\rangle$ population $p_{\mathrm G}$ satisfies
$$\bigl|p_{\mathrm G}-1\bigr|\le 2x\Bigl(1+\frac{3\pi}{2}\Bigr),$$
so with the declared ratio $x=1/100$ the contract gives $p_{\mathrm G}\ge1-\frac{2+3\pi}{100}$;

(d) *status.* The model, its parameters and the time $\tau$ are declared model data; no measured transition frequency, no laboratory molecule, cavity or field, no damping or relaxation and no measurement record appears, and the averaged formula is accompanied by the explicit contract of clause (c), not asserted as exact.

## Verification

**Given:** the declared two-level inversion model with parameters $\Delta_{0},\mu,E_{0},\omega$ and coupling ratio $x=\mu E_{0}/\Delta_{0}$; the reading of the declared linear drive model; the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the page's reading.

[L1] **The declared linear model and its contract.** The declared linear two-level drive model of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] has energy $H_{\mathrm l}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ and detuning $\Delta=\omega_{0}-\omega$; its exact down-population differs from the averaged Rabi population $p_{\downarrow}^{\mathrm{avg}}(\tau)=((\Omega_{1}/2)^{2}/(\Delta^{2}+(\Omega_{1}/2)^{2}))\sin^{2}(\frac{\tau}{2}\sqrt{\Delta^{2}+\Omega_{1}^{2}/4})$ by at most $2\varepsilon(\tau)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}[1+\tau(\frac{|\Delta|}{2}+\frac{3|\Omega_{1}|}{4})]$ ([[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (a)-(d)).

[L2] **The circular companion.** For the circular two-level drive model the rotating-frame reduction is exact and the down-population of the initial up-state is $\Omega_{1}^{2}\sin^{2}(b\tau/2)/b^{2}$ with $b=\sqrt{\Delta^{2}+\Omega_{1}^{2}}$ ([[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] clause (b)); this is recorded as the contrast case in which no rotating-wave error occurs.

[L3] **Elementary arithmetic.** $\omega_{0}=2\Delta_{0}/\hbar$ and $\Omega_{1}=4\mu E_{0}/\hbar$; at resonance $\Delta=0$ one has $|\Omega_{1}|/(2|\omega|)=\Omega_{1}/(2\omega_{0})=(4\mu E_{0}/\hbar)/(4\Delta_{0}/\hbar)=\mu E_{0}/\Delta_{0}=x$ and $3|\Omega_{1}|/4=3\mu E_{0}/\hbar$, so $\varepsilon(\tau)=x(1+3\mu E_{0}\tau/\hbar)$; at $\tau=\pi\hbar/(2\mu E_{0})$ this is $x(1+3\pi/2)$ and $\mu E_{0}\tau/\hbar=\pi/2$.

**Proof technique:** direct; match the declared matrix family with the page's declared linear model, specialise the error contract to resonance, and evaluate the declared time exactly.

**Given:** the data of the Example and [L1]-[L3].

1.1 [Identification] Comparing $H(t)=\Delta_{0}\sigma_{z}+2\mu E_{0}\cos(\omega t)\sigma_{x}$ with $\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ term by term gives $\frac{\hbar\omega_{0}}{2}=\Delta_{0}$ and $\frac{\hbar\Omega_{1}}{2}=2\mu E_{0}$, i.e. the displayed $\omega_{0},\Omega_{1}$; both are in $\mathrm{s^{-1}}$ because $\Delta_{0}$ is in joules and $\hbar$ in $\mathrm{J\,s}$, and the level splitting is $\hbar\omega_{0}=2\Delta_{0}$. This is clause (a). [L1, given, algebra]

2.1 [Averaged inversion] At resonance $\omega=\omega_{0}$ one has $\Delta=0$, so the averaged formula of [L1] reads $p^{\mathrm{avg}}=\sin^{2}(\tau\Omega_{1}/4)=\sin^{2}(\mu E_{0}\tau/\hbar)$ by [L3]; at $\tau=\pi\hbar/(2\mu E_{0})$ the argument is $\pi/2$ and the probability is $1$. This is clause (b). [L1, L3, step 1.1, algebra]

3.1 [Contract at inversion] By [L1] and [L3] the error at the inversion time is $2\varepsilon=x(1+3\pi/2)$ doubled, i.e. $2x(1+3\pi/2)$, and with $x=1/100$ the bound is $2x(1+\frac{3\pi}{2})=\frac{2+3\pi}{100}$, so $p_{\mathrm G}\ge1-\frac{2+3\pi}{100}$; the population is the model's outcome probability of the ground-level projection in the evolved preparation, and the contrast case [L2] shows that the circular model of the same frequencies has no such error term. This is clauses (c) and (d). [L1, L2, L3, step 2.1, algebra] ∎

## Remarks

- **What is and is not asserted.** The example asserts a conditional model statement: the declared two-level family has a resonance at $\hbar\omega=2\Delta_{0}$ at which the averaged model inverts the population at the time $\pi\hbar/(2\mu E_{0})$, with an explicit error contract. It does not assert that any molecule, cavity or field realizes these parameters, and it records no measured frequency; the source's reported numerical frequency is not used as a premise.
- **Why the contract is needed.** The source treatment drops the counter-rotating term; the contract of clause (c) is what makes that step quantitative, and the ratio $x=\mu E_{0}/\Delta_{0}$ is exactly the small parameter controlling it.
