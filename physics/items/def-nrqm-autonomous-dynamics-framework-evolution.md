---
id: def-nrqm-autonomous-dynamics-framework-evolution
aliases: [ nrqm-autonomous-dynamics-framework-evolution ]
kind: definition
domain: physics
title: "Assigned energy observable, unitary flow and the two pictures of
  autonomous evolution"
status: draft
origin: pipeline
dependency_level: 8
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-projection-valued-measure,
    def-self-adjoint-positive-unitary-and-normal-operator,
    def-strongly-continuous-one-parameter-unitary-group,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-unbounded-integral-against-a-pvm,
    lem-nrqm-autonomous-dynamics-flow-calculus,
    lem-nrqm-autonomous-dynamics-heisenberg-flow,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The evolution vocabulary of the framework's autonomous-dynamics
  postulate P4: the assigned energy observable and its unit, the unitary flow it
  generates, the Schroedinger-picture evolution of state vectors and density
  operators, the Heisenberg-picture representative of a bounded assigned sharp
  observable, stationarity of pure preparations, and compatibility
  (conservation) of an assigned sharp observable with the energy. This item
  fixes readings and terminology of P4 together with P1 and P2; it adopts no
  assumption beyond those postulates and the cited mathematics, asserts no
  evolution for driven or open systems, no measurement or apparatus realization,
  no isolation claim about any laboratory system, and no empirical result."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58, and Theorems 5.1-5.2, printed pages
        123-125 (self-adjoint observables, the unitary group they generate and
        the domain-qualified Schroedinger equation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Sections 2.1-3.2, printed pages 10-22 (unitary time
        evolution, the evolution operator, Heisenberg operators and the
        Heisenberg equation)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.2
        and 4.3-4.4, printed pages 21-23 and 68-71 (time evolution, conserved
        quantities, stationary states and the Heisenberg picture)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Assigned energy observable.** Adopt the autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]] (P4) for a declared isolated system whose state space is the model's [[def-nrqm-state-geometry-framework-state-space]]. An **assigned energy observable** of the system is an assigned sharp observable $(H_{\mathrm{op}},u_H)$ in the sense of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a), whose declared unit $u_H$ is an energy unit in the sense of [[def-nrqm-framework-quantities-and-units]] (joules in the SI conventions fixed there). Thus $H_{\mathrm{op}}:D(H_{\mathrm{op}})\subset H\to H$ is densely defined and self-adjoint ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-hilbert-space]]), with spectral projection-valued measure $E_H$ on the Borel sets of $\mathbb R$ under the choice hypotheses of [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] ([[def-projection-valued-measure]]), and its outcome law in a preparation is the law of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b). The assignment of $H_{\mathrm{op}}$ is part of the model specification, as in clause (i) of P4; this definition asserts nothing about which laboratory quantity of a concrete system realizes it.

**(b) The unitary flow.** The **time evolution** or **flow** of the isolated system is the family
$$U(t):=\exp\!\Bigl(-\frac{i}{\hbar}tH_{\mathrm{op}}\Bigr):=\int_{\mathbb R}e^{-it\lambda/\hbar}\,dE_H(\lambda)\qquad(t\in\mathbb R),$$
the reading of clause (ii) of P4 in the spectral calculus of $H_{\mathrm{op}}$ ([[def-unbounded-integral-against-a-pvm]]); here $\hbar>0$ is the reduced Planck constant with its value and unit fixed by [[def-nrqm-framework-quantities-and-units]], so that $tH_{\mathrm{op}}/\hbar$ is dimensionless. Equivalently, $U(t)=e^{itT}$ for the self-adjoint generator $T:=-H_{\mathrm{op}}/\hbar$ with $D(T)=D(H_{\mathrm{op}})$; the two readings agree by the uniqueness of the generator in Stone's theorem, and by [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]] ([[lem-nrqm-autonomous-dynamics-flow-calculus]] clause (a)) the family $U$ is a strongly continuous one-parameter unitary group: $U(0)=I$, $U(t+s)=U(t)U(s)$, $U(t)^{*}=U(t)^{-1}=U(-t)$ ([[def-strongly-continuous-one-parameter-unitary-group]]).

**(c) Schroedinger picture.** The **Schroedinger-picture evolution** of a preparation is fixed by clause (iii) of P4. A state vector evolves by $\psi(t):=U(t)\psi(0)$ for every $\psi(0)\in H$, and the **state at time $t$** of the pure preparation $[\psi(0)]$ is the pure preparation $[\psi(t)]$, which is well defined because $U(t)$ is injective; a general preparation $\rho$, that is an element of the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]], evolves by
$$\rho(t):=U(t)\rho(0)U(t)^{*},$$
the reading of clause (iii) of P4 in the density-operator vocabulary of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]). In this picture the assigned observables are held fixed at their assigned values and the preparation moves.

**(d) Heisenberg picture.** For a **bounded** assigned sharp observable $(A,u_A)$ — that is, an assigned sharp observable with $A\in\mathcal B(H)$ ([[def-bounded-linear-operator]]), so that $A$ is self-adjoint and everywhere defined — the **Heisenberg representative** of $(A,u_A)$ at time $t$ is the pair $(A_H(t),u_A)$ with the same declared unit and
$$A_H(t):=U(t)^{*}AU(t)=U(-t)AU(t).$$
By [[lem-nrqm-autonomous-dynamics-heisenberg-flow]] clauses (a) and (d), $A_H(t)$ is again bounded and self-adjoint with spectral projection-valued measure $E_{A_H(t)}(B)=U(-t)E_A(B)U(t)$, so $(A_H(t),u_A)$ is again an assigned sharp observable of the framework; in this picture the preparation is held fixed at its value at time $0$ and the observables move. The two pictures are two bookkeeping devices for the same model; the statement that they assign the same outcome laws is proved in the Heisenberg-picture theorem of this page, not assumed here.

**(e) Stationary preparations.** A preparation $\rho\in D(H)$ is **stationary** for the assigned energy observable when $\rho(t)=\rho$ for every $t\in\mathbb R$. A pure preparation $[\psi]$ is stationary when $[\psi(t)]=[\psi(0)]$ for every $t$, that is, when the evolved vector remains in the ray of $\psi$; the characterization of this condition by the eigenrays of $H_{\mathrm{op}}$ is proved in the stationary-states theorem of this page, not assumed here. An **energy eigenstate** is a pure preparation of a unit eigenvector of $H_{\mathrm{op}}$, and a **stationary state** in the model is a stationary pure preparation; by that theorem the two notions coincide.

**(f) Energy-compatible observables.** An assigned sharp observable $(A,u_A)$ is **compatible with the energy**, or **energy-compatible**, when its spectral projection-valued measure and that of the energy commute strongly,
$$E_A(B)E_H(C)=E_H(C)E_A(B)\qquad\text{for all Borel }B,C\subseteq\mathbb R .$$
This is an equality of bounded operators on $H$, not a relation between formal commutators on a small domain; the phrase **conserved quantity** for an energy-compatible assigned observable is a claim about the time invariance of its outcome law and is established in the energy-conservation theorem of this page for bounded $A$.

**(g) Status.** Clauses (a)-(f) record the readings of P4 together with P1 and P2 in the vocabulary of this page and fix the terminology used by the later pages of the category. They adopt no physical assumption beyond P4, P1 and P2 and the choice hypotheses of the cited mathematics, assert no dynamics for a prescribed time-dependent family or for an open system (clauses (iv) and (v) of P4 are separate model assumptions treated on their own pages), assert no measurement model, no apparatus realization and no empirical result, and make no claim that any laboratory system is exactly isolated.

## Remarks

- **Units and dimensionless phases.** The energy unit $u_H$ and $\hbar$ are part of the model's quantity conventions: $H_{\mathrm{op}}t/\hbar$ is a dimensionless spectral variable, and the argument of the exponential is read in those units. No numerical value of $H_{\mathrm{op}}$ is asserted.
- **Domain matters.** The flow $U(t)$ is defined on all of $H$, while the energy operator and every unbounded assigned observable are defined only on their domains; the Schroedinger equation and the Heisenberg equation are domain-qualified statements and are proved as such on this page.
- **Rays and global phases.** Multiplying $\psi(t)$ by a common unit-modulus scalar leaves its ray unchanged. For nonzero coefficients $c_j,c_k$ in a fixed orthonormal basis, their **relative phase** is $(c_j/|c_j|)\overline{(c_k/|c_k|)}$; it is unchanged by a common phase and can affect outcome laws. Autonomous evolution need not change relative phases: for $H_{\mathrm{op}}=EI$ with $E\in\mathbb R$, clause (b) gives $U(t)=e^{-iEt/\hbar}I$, so every ray is stationary.
