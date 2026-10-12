---
id: def-nrqm-oscillator-coherent-states
aliases: [ nrqm-oscillator-coherent-states ]
kind: definition
domain: physics
title: "The coherent states of the oscillator model"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    post-nrqm-framework-state-and-composition,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-state-geometry-framework-state-space,
    thm-nrqm-oscillator-oscillator-scaling-and-exact-realization,
    thm-nrqm-oscillator-coherent-state-convergence,
    lem-nrqm-oscillator-closed-ladder-domains,
    def-countable-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-coherent-state-convergence: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The coherent states of the one-dimensional quadratic-potential
  oscillator model of the framework: for each complex dimensionless label z the
  unit vector Psi_z obtained by transporting the coherent vector of the Hermite
  oscillator basis along the model's scaling unitary, its properties as a
  preparation of the model (normalization, annihilation-operator eigenvalue z,
  non-orthogonality), and the amplitude and phase reading of z together with its
  operator-expectation excitation-number coordinate in the assigned unit
  1/count. The definition asserts no measurement procedure, no uniqueness or
  minimality property among preparations, no overcompleteness or resolution of
  unity, no apparatus realization and no empirical result."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §§4.1-4.3 printed pages 26-33: the definition of the coherent
        state as a translated ground state, its position and momentum
        expectation values and its uncertainties"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §§4.4-4.5 printed pages 33-41: coherent states in the energy
        basis, the Poisson number distribution and general coherent states"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Definition

**(a) Setting.** Adopt the state and composition postulate P1 in the reading of [[def-nrqm-state-geometry-framework-state-space]] ([[post-nrqm-framework-state-and-composition]]) and the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), with parameters $m>0$, $\omega>0$, action constant $\hbar>0$ and length scale $\ell=\sqrt{\hbar/(m\omega)}$. Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $(g_n)_{n\in\mathbb N}$ be the Hermite family of $L^{2}(\mathbb R,dy)$, let $D:L^{2}(\mathbb R,dy)\to L^{2}(\mathbb R,dx)$ be the scaling unitary and $(\psi_n)$ the scaled eigenbasis of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a), (b), with $\psi_n=Dg_n$; let $a_\psi=DaD^{-1}$ be the transported annihilation operator of [[lem-nrqm-oscillator-closed-ladder-domains]], and let $N_\psi=DND^{-1}$ be the model's assigned excitation-number observable of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (c), with its stated domain and unit $1/\mathrm{count}$.

**(b) The family.** For $z\in\mathbb C$ let $\psi^{(y)}_z$ be the coherent vector of [[thm-nrqm-oscillator-coherent-state-convergence]] clause (a),
$$\psi^{(y)}_z:=e^{-|z|^{2}/2}\sum_{n=0}^{\infty}\frac{z^{n}}{\sqrt{n!}}\,g_n\in L^{2}(\mathbb R,dy),$$
the series converging in $L^{2}(\mathbb R,dy)$, and define the model's **coherent state** with label $z$ by
$$\Psi_z:=D\psi^{(y)}_z=e^{-|z|^{2}/2}\sum_{n=0}^{\infty}\frac{z^{n}}{\sqrt{n!}}\,\psi_n\in H_1 .$$
The family $(\Psi_z)_{z\in\mathbb C}$ is the model's **coherent-state family**, and $z$ is its **amplitude-phase label**.

**(c) Basic properties.** The following properties of the family are those established in the cited items and are recorded here as part of the definition's reading: the series for $\Psi_z$ converges and $\|\Psi_z\|=1$, so by P1 the ray $[\Psi_z]$ is a pure preparation of the model when it is declared as one; $\Psi_z\in D(N_\psi^{k})$ for every $k\in\mathbb N$; $a_\psi\Psi_z=z\Psi_z$, so $\Psi_z$ is a unit eigenvector of the annihilation operator with eigenvalue $z$; $\langle\Psi_z,\Psi_w\rangle=e^{-(|z|^{2}+|w|^{2})/2+z\overline w}$, with modulus $e^{-|z-w|^{2}/2}$ for all $z,w$, so distinct labels define distinct preparations (their overlap modulus is less than $1$, whereas unit vectors on the same ray have overlap modulus $1$) and no two members of the family are orthogonal; and $\Psi_0=\psi_0$ is the ground eigenvector of the energy operator. ([[thm-nrqm-oscillator-coherent-state-convergence]] clauses (a), (b), (c), (d), (e), transported by the unitary $D$ of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clause (a).)

**(d) Reading of the label.** The label $z$ is dimensionless (it is a complex number, not a quantity with a physical dimension). Its amplitude is $|z|$; when $z\ne0$, its phase is the class $\arg z\in\mathbb R/(2\pi\mathbb Z)$, while $z=0$ has zero amplitude and no phase label. The mathematical coherent-state series gives the quadratic-form value $\langle N_\psi\Psi_z,\Psi_z\rangle=|z|^{2}$ for the assigned, dimensionless excitation-number observable $(N_\psi,1/\mathrm{count})$; this is the number coordinate intended by the model's P2 reading. The coherent-state evolution result shows that the preparation means of position and momentum rotate with the phase label at angular frequency $\omega$. Clause (d) records this interpretation of the label, not an outcome of measuring the label itself.

**(e) Scope.** The definition declares a one-parameter family of preparations of the one-dimensional model and fixes its notation. It does not assert that the coherent states are the only preparations with time-independent position or momentum spreads, it does not assert minimality of any uncertainty product (that is a separate result for this family), it does not construct a displacement operator, an overcompleteness relation or a resolution of unity, and it makes no measurement, apparatus or empirical claim. The two presentations of the family -- as eigenvectors of the annihilation operator, as in clause (b), and as translated ground states -- are not identified here; only the former is defined.

## Remarks

- **Why the label is not an observable.** The label $z$ indexes the family; it is not the outcome of a measurement of any assigned observable of the model. Statements about the distribution of $z$ would require a separate preparation model for the labels, which this definition does not introduce.
- **Not an orthonormal family.** The inner products of clause (c) show that no two distinct coherent states are orthogonal, so the family is not an orthonormal basis and its members are not the energy eigenstates. The energy eigenbasis remains $(\psi_n)$; the coherent states are superpositions with Poisson-type weights, a fact used by the fluctuation and evolution items of this page.
