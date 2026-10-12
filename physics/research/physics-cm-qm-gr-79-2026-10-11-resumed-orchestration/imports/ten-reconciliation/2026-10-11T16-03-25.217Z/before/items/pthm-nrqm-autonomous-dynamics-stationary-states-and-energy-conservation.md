---
id: pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation
aliases: [nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]
kind: physics-theorem
domain: physics
title: "Energy conservation, conserved sharp observables and the stationary eigenrays"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-projection-valued-measure, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-integral-against-a-pvm, lem-nrqm-autonomous-dynamics-stationary-ray-characterization, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-state-and-composition, pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow, thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-autonomous-dynamics-stationary-ray-characterization: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional consequence of the autonomous-dynamics postulate P4 and the observable and probability postulate P2 in the reading of this page for a declared isolated system: the outcome law of the assigned energy observable is time-independent in every preparation, its finite moments are conserved, every bounded assigned sharp observable compatible with the energy has a time-independent outcome law, and a pure preparation is stationary exactly when it is an eigenray of the energy, in which case all its outcome laws are time-independent. No relaxation, equilibration or decay is asserted; no converse of the compatibility criterion is claimed for unbounded energy operators; no measurement, apparatus or empirical claim is made."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 5.1, printed pages 123-125, equation (5.4) on printed page 124 (time-independent expectations of the energy: conservation of energy), and Theorem 8.1, printed page 174 (a self-adjoint operator commuting with H is a conserved quantity with invariant domain)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.2.1, printed pages 23-24 (Ehrenfest's theorem, conserved quantities and the conservation of the expectation of the energy)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Sections 2.1 and 3.2, printed pages 10-17 and 20-22 (norm conservation, Heisenberg operators and operators constant in time when they commute with the Hamiltonian)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate [[post-nrqm-framework-state-and-composition]] (P1), the observable and probability postulate in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]] (P2), and the autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]] (P4), and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $(H_{\mathrm{op}},u_H)$ be the assigned energy observable of a declared isolated system with state space $H$ ([[def-nrqm-state-geometry-framework-state-space]]), spectral projection-valued measure $E_H$ and flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ ([[def-nrqm-autonomous-dynamics-framework-evolution]]), and write $\rho(t)=U(t)\rho(0)U(t)^{*}$. Then:

(a) **Energy law and moments.** For every preparation $\rho$, every Borel set $B\subseteq\mathbb R$ and every $t$,
$$\mu^{H_{\mathrm{op}}}_{\rho(t)}(B)=\operatorname{tr}\bigl(\rho(t)E_H(B)\bigr)=\operatorname{tr}\bigl(\rho(0)E_H(B)\bigr)=\mu^{H_{\mathrm{op}}}_{\rho(0)}(B);$$
for the pure preparation of a unit vector $\psi$ likewise $\|E_H(B)U(t)\psi\|^{2}=\|E_H(B)\psi\|^{2}$. If $\psi(0)\in D(H_{\mathrm{op}})$, the mean and the second moment of the energy law of $[\psi(0)]$ are finite and time-independent, with time-zero values $\langle H_{\mathrm{op}}\psi(0),\psi(0)\rangle$ and $\|H_{\mathrm{op}}\psi(0)\|^{2}$; if one of these moments is infinite at time zero, no equality of finite quantities is claimed.

(b) **Conserved sharp observables.** Let $(A,u_A)$ be a bounded assigned sharp observable that is compatible with the energy ([[def-nrqm-autonomous-dynamics-framework-evolution]] clause (f)). Then its outcome law is time-independent: for every preparation $\rho$, every Borel set $B$ and every $t$,
$$\mu^{A}_{\rho(t)}(B)=\mu^{A}_{\rho(0)}(B).$$

(c) **Stationary states are exactly the eigenrays.** Let $\psi\in H$, $\psi\ne0$. The pure preparation $[\psi]$ is stationary, that is $[\psi(t)]=[\psi(0)]$ for every $t$, if and only if $\psi$ is an eigenvector of $H_{\mathrm{op}}$: $\psi\in D(H_{\mathrm{op}})$ and $H_{\mathrm{op}}\psi=\lambda\psi$ for some $\lambda\in\mathbb R$. In that case $\psi(t)=e^{-it\lambda/\hbar}\psi(0)$ for every $t$, and every assigned sharp observable has a time-independent outcome law in this preparation: $\mu^{A}_{\psi(t)}(B)=\mu^{A}_{\psi(0)}(B)$ for every $(A,u_A)$, every Borel $B$ and every $t$.

(d) **Status and exclusions.** No equilibration, relaxation, decay or convergence of the law of an arbitrary preparation is asserted; no moment beyond those finite at time zero is claimed; the converse of (b) — constancy of the law of a bounded observable in every preparation implying strong spectral compatibility with the energy — is not asserted for a general (possibly unbounded) $H_{\mathrm{op}}$; and the item is conditional on the isolated-system idealization of P4, asserting no apparatus realization and no empirical result.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2 and P4; the Axiom of Countable Choice and the Axiom of Choice; the assigned energy observable $(H_{\mathrm{op}},u_H)$ with PVM $E_H$ and flow $U(t)$; a preparation $\rho$; a bounded assigned sharp observable $(A,u_A)$; a nonzero vector $\psi$; a Borel set $B$; real $t$.

[F1] **Flow and preparation evolution.** $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ is the strongly continuous unitary flow of P4(ii), $\rho(t)=U(t)\rho(0)U(t)^{*}$ is a preparation for every $t$, and $[\psi(t)]$ is a pure preparation whenever $\psi(0)\ne0$ ([[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a) and (d), [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (b) and (c)).

[F2] **Conserved spectral laws.** Let $K$ be self-adjoint with PVM $E_K$ and $U(t)=e^{-itK/\hbar}$. Then: for every preparation $\rho$ the energy law $\operatorname{tr}(\rho U(t)^{*}E_K(C)U(t))=\operatorname{tr}(\rho E_K(C))$ is independent of $t$; if $\psi\in D(K)$ the scalar moments $\int\lambda^{k}\,dE_{K,U(t)\psi}$ for $k=1,2$ equal those at time zero, with values $\langle K\psi,\psi\rangle$ and $\|K\psi\|^{2}$; if a bounded operator $B_0$ commutes with every $E_K(C)$ then $B_0U(t)=U(t)B_0$; if a PVM $F$ commutes with $E_K$ in the strong spectral sense then $\operatorname{tr}\bigl(U(t)\rho U(t)^{*}F(S)\bigr)=\operatorname{tr}\bigl(\rho F(S)\bigr)$ for all $t,S$; and a unit eigenvector $K\psi=\lambda\psi$ satisfies $U(t)\psi=e^{-it\lambda/\hbar}\psi$ ([[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]] clauses (a), (b)(ii), (c) and (d)).

[F3] **Outcome law and moments.** For an assigned sharp observable $(A_0,u_{A_0})$ the outcome law of a preparation is $\mu^{A_0}_{\rho}(B)=\operatorname{tr}(\rho E_{A_0}(B))$, for a unit pure preparation $\|E_{A_0}(B)\psi\|^{2}$, and this number depends only on the ray $[\psi]$; for a unit vector in $D(A_0)$ the mean and the second moment are $\langle A_0\psi,\psi\rangle$ and $\|A_0\psi\|^{2}$, and they exist exactly under the stated domain hypotheses ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b) and (e)).

[F4] **Stationary-ray characterization.** For a self-adjoint $T$ with flow $U(t)=e^{itT}$ and a nonzero $\psi$, the invariance of the ray, $U(t)\psi\in\mathbb C\psi$ for all $t$, is equivalent to $\psi\in D(T)$ and $T\psi=\lambda\psi$ for some real $\lambda$; and then $U(t)\psi=e^{it\lambda}\psi$ ([[lem-nrqm-autonomous-dynamics-stationary-ray-characterization]]).

[F5] **The energy convention.** $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ equals $e^{itT}$ for the self-adjoint $T=-H_{\mathrm{op}}/\hbar$ with $D(T)=D(H_{\mathrm{op}})$, and the PVM of $K=H_{\mathrm{op}}$ is $E_H$ ([[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b), [[def-unbounded-integral-against-a-pvm]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).



## Proof

**Proof technique:** direct; read the energy law, moments, compatible-observable law and eigenray evolution from the conserved-spectral-law theorem with $K=H_{\mathrm{op}}$, whose convention $U(t)=e^{-itK/\hbar}$ is exactly the framework's, and prove the converse of the stationarity characterization with the stationary-ray lemma.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Energy law] Instantiate [F2] with $K=H_{\mathrm{op}}$ and its PVM $E_K=E_H$; this is the same flow as [F1] by [F5]. Its first statement gives $\operatorname{tr}(\rho(0)E_H(B))=\operatorname{tr}\bigl(U(t)\rho(0)U(t)^{*}E_H(B)\bigr)=\operatorname{tr}(\rho(t)E_H(B))$ for every preparation and every Borel $B$, which is the first display of (a) after reading the outcome law through [F3]; the pure-vector form follows from [F3] with $[\psi(t)]$ and the identity $U(t)^{*}E_H(B)U(t)=E_H(B)$, or directly from the second statement of [F2] with $F=E_H$. [given, F1, F2, F3, F5, algebra]

1.2 [Eigenrays are stationary] Let $H_{\mathrm{op}}\psi=\lambda\psi$ with $\lambda\in\mathbb R$ and $\psi\ne0$. The last statement of [F2] with $K=H_{\mathrm{op}}$ gives $\psi(t)=U(t)\psi=e^{-it\lambda/\hbar}\psi$ for every $t$; since the scalar $e^{-it\lambda/\hbar}$ is nonzero, $[\psi(t)]=[\psi(0)]$ and $[\psi]$ is stationary. Moreover, for every assigned sharp observable $(A_0,u_{A_0})$ the law $\mu^{A_0}_{\psi(t)}(B)=\|E_{A_0}(B)\psi(t)\|^{2}$ depends only on the ray $[\psi(t)]=[\psi(0)]$ by [F3], so it equals $\mu^{A_0}_{\psi(0)}(B)$; this is the forward direction and the final assertion of (c). [given, F2, F3, algebra]

2.1 [Moments] If $\psi(0)\in D(H_{\mathrm{op}})=D(K)$, the moment statement of [F2] with $k=1,2$ gives the displayed time-independence of the two spectral moments, with values $\langle K\psi(0),\psi(0)\rangle=\langle H_{\mathrm{op}}\psi(0),\psi(0)\rangle$ and $\|K\psi(0)\|^{2}=\|H_{\mathrm{op}}\psi(0)\|^{2}$, independently of $t$; by [F3] these spectral moments are the mean and the second moment of the energy law, which are therefore finite and time-independent. If a moment is infinite at time zero, the hypothesis of the moment statement fails and no equality is claimed; this completes (a). [given, step 1.1, F2, F3, F5, algebra]

2.2 [Compatible bounded observables] Let $(A,u_A)$ be bounded and energy-compatible, so $F:=E_A$ satisfies $F(S)E_H(C)=E_H(C)F(S)$ for all Borel $S,C$. The third statement of [F2], with $K=H_{\mathrm{op}}$, gives $\operatorname{tr}\bigl(\rho(t)F(S)\bigr)=\operatorname{tr}\bigl(\rho(0)F(S)\bigr)$ for every $t$ and every Borel $S$; reading $\operatorname{tr}(\rho F(S))$ through [F3] as $\mu^{A}_{\rho}(S)$ gives the display of (b). [given, step 1.1, F2, F3, F5, algebra]

2.3 [Only eigenrays are stationary] Conversely, let $[\psi]$ be stationary, that is $U(t)\psi\in\mathbb C\psi$ for every $t$, with $\psi\ne0$. By [F5], $U(t)=e^{itT}$ with the self-adjoint $T=-H_{\mathrm{op}}/\hbar$, $D(T)=D(H_{\mathrm{op}})$. Applying [F4] to $T$ and $\psi$ gives $\psi\in D(T)=D(H_{\mathrm{op}})$ and $T\psi=\lambda'\psi$ with $\lambda'\in\mathbb R$; multiplying by $-\hbar$ gives $H_{\mathrm{op}}\psi=\lambda\psi$ with $\lambda=-\hbar\lambda'\in\mathbb R$. Together with step 1.2 this proves (c). [given, step 1.2, F4, F5, algebra]

3.1 Steps 1.1, 2.1, 2.2, 1.2 and 2.3 prove (a)-(c); clause (d) records that the statement asserts neither equilibration nor the converse of (b) for unbounded $H_{\mathrm{op}}$. [step 1.1, step 2.1, step 2.2, step 1.2, step 2.3] ∎

## Remarks

- **What "conservation of energy" means here.** The conserved object is the outcome law of the assigned energy observable — a probability measure on the Borel sets — and, when they exist, its first two moments. The statement does not say that a single numerical value of the energy is revealed at each time, and it does not identify $\langle H_{\mathrm{op}}\rangle$ with a measured calorimetric energy.
- **Stationarity is a ray statement.** Because the pure law depends only on the ray, the stationary property of an eigenray is stable under the phase $e^{-it\lambda/\hbar}$; a *superposed* preparation of two eigenrays with distinct eigenvalues is generally not stationary, and that failure is exhibited on the companion page.

