---
id: ex-nrqm-autonomous-dynamics-finite-stationary-superposition
aliases: [nrqm-autonomous-dynamics-finite-stationary-superposition]
kind: example
domain: physics
title: "A finite superposition of energy eigenrays: exact phases, laws and return times"
status: draft
origin: pipeline
dependency_level: 10
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-inner-product-induces-a-norm, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-inner-product-space, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-state-geometry-state-vectors-and-rays, def-projection-valued-measure, lem-complex-conjugation-and-modulus-laws, pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow, pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation, thm-complex-exponential-addition-and-real-extension, thm-eulers-formula, thm-kernel-and-fibres-of-complex-exponential, thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite, exact model computation for a declared isolated system: the evolution of a nonzero finite superposition of orthogonal energy eigenrays, the resulting trigonometric-polynomial form of the outcome laws of bounded assigned sharp observables, the exact return-time criterion for the ray, the two-energy period, and the stationary case. The eigenvalues are model parameters; the item asserts no apparatus, no detection model and no empirical value, and no finite set of energies is identified with a physical spectrum."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.2, printed pages 21-23 (equation (2.32): the evolution of a general state as a superposition of energy eigenstates with relative phases e^{-iE_n t/hbar})"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 2.3, printed pages 15-17 (the evolution operator for a time-independent Hamiltonian and its application to eigenstates)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---

## Example

Let $H\ne\{0\}$ be the state space of a declared isolated system of the framework ([[def-nrqm-state-geometry-framework-state-space]]), let $(H_{\mathrm{op}},u_H)$ be its assigned energy observable with spectral projection-valued measure $E_H$ and flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ ([[def-nrqm-autonomous-dynamics-framework-evolution]]), and let $u_{1},\dots,u_{N}$ be a finite orthonormal family of eigenvectors of $H_{\mathrm{op}}$ with real eigenvalues $\lambda_{1},\dots,\lambda_{N}$: $H_{\mathrm{op}}u_{n}=\lambda_{n}u_{n}$ for $n=1,\dots,N$. Fix coefficients $c_{n}\in\mathbb C$ and the nonzero vector
$$\psi_{0}=\sum_{n=1}^{N}c_{n}u_{n},\qquad S:=\{n:c_{n}\ne0\}.$$
Then, with $\psi(t)=U(t)\psi_{0}$:

(i) $\psi(t)=\sum_{n\in S}c_{n}e^{-i\lambda_{n}t/\hbar}u_{n}$ for every $t$, and $\|\psi(t)\|=\|\psi_{0}\|$; if $S$ has one element, or more generally if all $\lambda_{n}$ with $n\in S$ coincide, the ray $[\psi(t)]$ is constant.

(ii) For every bounded assigned sharp observable $(A,u_{A})$ and every Borel set $B\subseteq\mathbb R$, the outcome law in the preparation $[\psi(t)]$ is
$$\mu^{A}_{\psi(t)}(B)=\sum_{m,n\in S}c_{n}\overline{c_{m}}\,e^{-i(\lambda_{n}-\lambda_{m})t/\hbar}\,\langle E_{A}(B)u_{n},u_{m}\rangle .$$
Thus the probability is a finite trigonometric polynomial in $t$ with frequencies $(\lambda_{n}-\lambda_{m})/\hbar$.

(iii) For $T>0$ the following are equivalent: (a) $[\psi(t+T)]=[\psi(t)]$ for every $t$; (b) $e^{-i\lambda_{n}T/\hbar}$ is independent of $n\in S$; (c) $(\lambda_{m}-\lambda_{n})T/\hbar\in2\pi\mathbb Z$ for all $m,n\in S$.

(iv) Consequently a positive return time exists if and only if there are $\omega_{0}>0$ and integers $k_{n}$ ($n\in S$) with $(\lambda_{n}-\lambda_{n_{0}})/\hbar=\omega_{0}k_{n}$ for all $n\in S$, where $n_{0}$ is any fixed element of $S$; and then $T=2\pi/\omega_{0}$ is a return time.

(v) Two-energy case $N=2$, $\lambda_{1}\ne\lambda_{2}$, $c_{1}c_{2}\ne0$: the positive return times are exactly $T=2\pi\hbar k/|\lambda_{1}-\lambda_{2}|$, $k=1,2,3,\dots$; the least return time is $2\pi\hbar/|\lambda_{1}-\lambda_{2}|$, which is the period $2\pi/|\omega|$ of the precession example with $\omega=(\lambda_{2}-\lambda_{1})/\hbar$.

(vi) In the stationary case of (i), every outcome law of every assigned sharp observable is independent of $t$: $\mu^{A}_{\psi(t)}(B)=\mu^{A}_{\psi(0)}(B)$.

The computation is a model-internal one: the eigenvalues are parameters of the assigned observable, and no identification with a physical spectrum, apparatus or measured value is asserted.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; the assigned energy observable $(H_{\mathrm{op}},u_H)$ with flow $U(t)$; a finite orthonormal family $u_{1},\dots,u_{N}$ of eigenvectors with real eigenvalues $\lambda_{n}$; coefficients $c_{n}$ and the nonzero vector $\psi_{0}$; $S=\{n:c_{n}\ne0\}$; the evolved vectors $\psi(t)=U(t)\psi_{0}$; a bounded assigned sharp observable $(A,u_{A})$ with spectral measure $E_{A}$; a Borel set $B$; the Axiom of Countable Choice and the Axiom of Choice, the choice hypotheses of the cited spectral suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] **Eigenrays evolve by phases.** If $H_{\mathrm{op}}u=\lambda u$ with $\lambda\in\mathbb R$, then $U(t)u=e^{-i\lambda t/\hbar}u$ for every $t$, and the flow is linear with $\|\psi(t)\|=\|\psi_{0}\|$ ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c), [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clause (a), [[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]] clause (d)).

[F2] **Outcome law for a pure preparation.** $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}=\langle E_{A}(B)\psi,\psi\rangle$ for a unit vector, and the number depends only on the ray $[\psi]$; the inner product is linear in the first argument and conjugate-linear in the second ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[def-nrqm-state-geometry-state-vectors-and-rays]], [[def-inner-product-space]]).

[F3] **Complex exponential algebra.** For real $\theta,\phi$: $e^{i(\theta+\phi)}=e^{i\theta}e^{i\phi}$, $|e^{i\theta}|=1$ and $\overline{e^{i\theta}}=e^{-i\theta}$; for complex $z,w$, $\overline{zw}=\overline z\,\overline w$ ([[thm-eulers-formula]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]). Moreover $\ker(\exp)=2\pi i\mathbb Z$, so for real $\mu$ one has $e^{-i\mu}=1$ exactly for $\mu\in2\pi\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F4] **Orthonormality.** $\langle u_{n},u_{m}\rangle=\delta_{nm}$, and every $\psi_{0}$ as above is nonzero exactly when $S$ is nonempty ([[def-inner-product-space]], [[cor-inner-product-induces-a-norm]]).

## Verification

**Proof technique:** direct; expand the evolved vector along the eigenfamily, evaluate the pairing term by term and read the return-time condition off the phases.

1.1 [Evolution of the superposition] By [F1] applied to each eigenvector, $U(t)u_{n}=e^{-i\lambda_{n}t/\hbar}u_{n}$; linearity of $U(t)$ gives $\psi(t)=\sum_{n=1}^{N}c_{n}e^{-i\lambda_{n}t/\hbar}u_{n}=\sum_{n\in S}c_{n}e^{-i\lambda_{n}t/\hbar}u_{n}$, and $\|\psi(t)\|=\|\psi_{0}\|$ by the norm statement of [F1]. If all $\lambda_{n}$ with $n\in S$ equal a common $\lambda$, then $\psi(t)=e^{-i\lambda t/\hbar}\psi_{0}$, so $[\psi(t)]=[\psi_{0}]$ for every $t$. This is (i). [given, F1, F3, algebra]

2.1 [Trigonometric-polynomial law] Assume first $\|\psi_{0}\|=1$. By [F2] and step 1.1, using conjugate-linearity in the second argument, $\mu^{A}_{\psi(t)}(B)=\langle E_{A}(B)\sum_{n\in S}c_{n}e^{-i\lambda_{n}t/\hbar}u_{n},\sum_{m\in S}c_{m}e^{-i\lambda_{m}t/\hbar}u_{m}\rangle=\sum_{m,n\in S}c_{n}\overline{c_{m}}e^{-i(\lambda_{n}-\lambda_{m})t/\hbar}\langle E_{A}(B)u_{n},u_{m}\rangle$, which is the display of (ii); for a general nonzero $\psi_{0}$ the same formula holds after dividing by $\|\psi_{0}\|^{2}$, since $\mu^{A}$ depends only on the ray by [F2]. [given, step 1.1, F2, F3, F4, algebra]

2.2 [Return-time criterion] Let $T>0$. If (a) holds, then for every $t$ there is $\zeta(t)\ne0$ with $\psi(t+T)=\zeta(t)\psi(t)$; pairing with $u_{m}$ for $m\in S$ and using orthonormality [F4] gives $c_{m}e^{-i\lambda_{m}(t+T)/\hbar}=\zeta(t)c_{m}e^{-i\lambda_{m}t/\hbar}$, hence $e^{-i\lambda_{m}T/\hbar}=\zeta(t)$ for every $m\in S$, which is (b). If (b) holds with common value $\zeta$, then $\psi(t+T)=\zeta\psi(t)$ by step 1.1, which is (a). Finally (b) holds exactly when $e^{-i(\lambda_{m}-\lambda_{n})T/\hbar}=1$ for all $m,n\in S$, and by the exponential kernel $\ker(\exp)=2\pi i\mathbb Z$ of [F3] this is exactly the integrality condition (c). This proves (iii). [given, step 1.1, F2, F3, F4, algebra]

3.1 [Common frequency and return time] Condition (iv) is the statement that the numbers $(\lambda_{n}-\lambda_{n_{0}})/\hbar$ are integer multiples of one positive number $\omega_{0}$; by step 2.2 with $T=2\pi/\omega_{0}$ and [F3], $(\lambda_{m}-\lambda_{n})T/\hbar=2\pi(k_{m}-k_{n})\in2\pi\mathbb Z$ for all $m,n\in S$, so $T$ is a return time. Conversely, if $T>0$ is a return time, then by step 2.2(c) applied with $m=n_{0}$ we have $(\lambda_{n}-\lambda_{n_{0}})T/\hbar\in2\pi\mathbb Z$ for all $n\in S$, that is $(\lambda_{n}-\lambda_{n_{0}})/\hbar=\omega_{0}k_{n}$ with $\omega_{0}:=2\pi/T>0$ and integers $k_{n}$; this proves the equivalence of (iv). [given, step 2.2, F3, algebra]

3.2 [Two energies] Let $N=2$, $\lambda_{1}\ne\lambda_{2}$, $c_{1}c_{2}\ne0$ and $T>0$. By step 2.2(c) with $\{m,n\}=\{1,2\}$ the return times are exactly the solutions of $|\lambda_{1}-\lambda_{2}|T/\hbar\in2\pi\mathbb Z$, that is $T=2\pi\hbar k/|\lambda_{1}-\lambda_{2}|$ with $k\in\mathbb Z$, $k\ge1$; the least such $T$ is $2\pi\hbar/|\lambda_{1}-\lambda_{2}|=2\pi/|\omega|$ for $\omega=(\lambda_{2}-\lambda_{1})/\hbar$. This is (v). [given, step 2.2, algebra]

3.3 [Stationary case] If all $\lambda_{n}$, $n\in S$, equal a common $\lambda$, then by step 1.1 $\psi(t)=e^{-i\lambda t/\hbar}\psi_{0}$ and $[\psi(t)]=[\psi_{0}]$; by [F2] the outcome law of every bounded assigned sharp observable depends only on the ray, so $\mu^{A}_{\psi(t)}(B)=\mu^{A}_{\psi(0)}(B)$ for every $t$. This is (vi), and it agrees with the stationary-state characterization of [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c). [given, step 1.1, step 2.1, F1, F2, algebra]

4.1 Steps 1.1, 2.1, 2.2, 3.1, 3.2 and 3.3 establish (i)-(vi) for the explicit model data. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **The relative phases are physical.** Only the relative phases $e^{-i(\lambda_{n}-\lambda_{m})t/\hbar}$ appear in the laws; a common phase of $\psi(t)$ would not change any outcome law, in agreement with the ray reading of pure preparations.
- **Existence of a common frequency is a number-theoretic condition on the model data.** For two distinct energies it always holds, and the least return time is the inverse Bohr frequency of the precession example. For three or more energies it may fail, in which case the ray never returns to itself, although the laws remain finite sums of oscillations with the Bohr frequencies.
- **No detector is modeled.** Exactly as on the precession example, the probabilities displayed are model outcome laws; no measurement interaction, finite resolution, efficiency or record is introduced.
