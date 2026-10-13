---
id: def-nrqm-observables-framework-observable-and-outcome-law
aliases: [ nrqm-observables-framework-observable-and-outcome-law ]
kind: definition
domain: physics
title: "Assigned sharp observables and the outcome law of the framework"
status: draft
origin: pipeline
dependency_level: 7
deps:
  [
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-axiom-of-choice,
    def-borel-sigma-algebra,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-state-geometry-state-vectors-and-rays,
    def-projection-valued-measure,
    def-resolvent-and-spectrum-of-a-closed-unbounded-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-observables-moments-and-variance,
    lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-observables-spectral-support-and-outcome-law,
    post-nrqm-framework-observable-and-probability,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The observable and outcome-law vocabulary of the
  non-relativistic quantum framework: the reading of the observable and
  probability postulate P2 as assigned sharp self-adjoint quantities with a
  declared unit, their spectral projection-valued measures, the outcome law of a
  preparation, the spectral-support reading of outcome sets, the conditional
  readings of mean and variance, and the affinity of the law under statistical
  mixing. This item fixes terminology and readings only: it adopts no assumption
  beyond P1 and P2, asserts no detector or apparatus realization, makes no
  joint-measurement claim, records no empirical data, and excludes the finite
  unsharp-effect extension of P2(iv), which belongs to the
  measurement-and-instruments page."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1 and Chapter 3, printed pages 55-58 and 87-100 (observables
        as self-adjoint operators, their spectral measures and expectation
        values)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        3.2-3.3, printed pages 65-84 (operators and observables, eigenfunctions,
        Hermitian operators, the measurement postulate and expectation values)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's
        Bra and Ket Notation', Sections 1-3, printed pages 1-15 (bras, kets,
        operator matrix elements and non-denumerable bases)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9\
        d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Assigned sharp observables.** Adopt the observable and probability postulate [[post-nrqm-framework-observable-and-probability]] (P2) for a declared system whose state space is the model's [[def-nrqm-state-geometry-framework-state-space]]. An **assigned sharp observable** of the system is a pair $(A,u_A)$ consisting of a densely defined self-adjoint operator $A:D(A)\subset H\to H$ on the assigned Hilbert space $H$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-hilbert-space]]) and a **declared unit** $u_A$ in which the real spectral coordinate of $A$ is read, in the sense of [[def-nrqm-framework-quantities-and-units]]. The domain $D(A)$ is part of the assignment: symmetry on a smaller domain, or a formal differential expression, does not by itself supply an assigned observable ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Whether a concrete laboratory quantity of a given apparatus is described by a particular pair $(A,u_A)$ is a tested identification with uncertainty under the preparation and apparatus postulate P7 and is not produced by this definition.

**(b) Spectral measure and outcome law.** Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of the cited spectral suppliers. The self-adjoint operator $A$ has a unique spectral projection-valued measure $E_A$ on the Borel $\sigma$-algebra of $\mathbb R$, with $D(A)=\{x:\int\lambda^{2}\,dE_{A,x}<\infty\}$ and $Ax=\int\lambda\,dE_A(\lambda)x$, where $E_{A,x}(B)=\langle E_A(B)x,x\rangle$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-borel-sigma-algebra]]). For a preparation $\rho$, that is a state $\rho\in D(H)$ of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]], the **outcome law** of the pair $(A,u_A)$ in the preparation $\rho$ is the assignment
$$\mu^{A}_{\rho}(B):=\operatorname{tr}\bigl(\rho\,E_A(B)\bigr)\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
the reading of clause (ii) of P2; for the pure preparation $[\psi]$ of a unit vector $\psi$ it is $\mu^{A}_{\psi}(B)=\|E_A(B)\psi\|^{2}$, which depends only on the ray by [[def-nrqm-state-geometry-state-vectors-and-rays]]. The law is a probability measure on the Borel sets by [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b), and it is affine in the preparation: for a statistical mixture $\sum_nw_n\rho_n$ one has $\mu^{A}_{\sum_nw_n\rho_n}=\sum_nw_n\mu^{A}_{\rho_n}$ by [[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]] clause (b).

**(c) Outcome sets and exact values.** A declared finite-resolution outcome of the quantity is a Borel set $B$; its probability in the preparation $\rho$ is $\mu^{A}_{\rho}(B)$, and a "value in $B$" is read only through this number. The reading of an **exact value** $\lambda$ is the singleton $B=\{\lambda\}$, with probability $\mu^{A}_{\rho}(\{\lambda\})$; by [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a) and (b) this number is zero for every preparation unless $\lambda$ is an eigenvalue of $A$, and when $\lambda$ is an eigenvalue it is the total weight of the eigenspace. In particular the model provides no normalizable eigenvector at a non-eigenvalue of $A$. If $A$ has no eigenvalues, every preparation has an atomless outcome law: each singleton has probability zero, while $\mathbb R$ remains the outcome space and the law is concentrated on $\sigma(A)$ as in clause (d). Zero singleton probability does not exclude real point values as realizations of this law; it supplies no normalized exact-value eigenstate. A finite-resolution record is read through its declared Borel bin, in the sense of clause (iii) of P2.

**(d) Spectral support.** The outcomes of the observable lie in its spectrum: with $\sigma(A)$ the spectrum of [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], one has $\mu^{A}_{\rho}(B)=\mu^{A}_{\rho}(B\cap\sigma(A))$ and $\mu^{A}_{\rho}(\sigma(A))=1$ for every preparation by [[lem-nrqm-observables-spectral-support-and-outcome-law]] clause (b). This is the precise reading of the statement that the result of a measurement lies in the spectrum of the observable.

**(e) Moments.** The **mean** and the **variance** of the outcome law in a preparation are the numbers $\int\lambda\,d\mu^{A}_{\rho}(\lambda)$ and $\int(\lambda-m)^{2}\,d\mu^{A}_{\rho}(\lambda)$ with $m$ the mean, read in the declared unit $u_A$ and its square respectively; they exist only under the integrability hypotheses of [[lem-nrqm-observables-moments-and-variance]], which also supplies the formulas in terms of $A$ and the state. For a pure preparation of a unit vector $\psi\in D(A)$ the mean and the second moment are $\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$; membership of $\psi$ in $D(A)$ or in $D(A^{2})$ is a genuine hypothesis and is not asserted for an arbitrary preparation.

**(f) Unsharp finite outcomes are separate.** Clause (iv) of P2 permits a finite family of bounded effects $F_a$ with $0\le F_a\le I$ and $\sum_aF_a=I$ and outcome probabilities $\operatorname{tr}(\rho F_a)$ as an operational description of a finite-resolution apparatus. That extension is tied to an apparatus instrument and is developed, together with state updates, on the measurement-and-instruments page; this definition fixes only the sharp outcome law of clause (b) and makes no claim that every laboratory procedure realizes it.

**(g) Status.** Clauses (a)-(f) record the readings of P1 and P2 in the vocabulary of this page and fix the terminology used by the later pages of the category. They adopt no physical assumption beyond P1 and P2 and the choice hypotheses of the spectral theorem, assert no dynamics, no joint measurement of several observables, no detector realization and no empirical result, and make no claim that any physical system is exactly described by an assigned pair $(A,u_A)$. The additive additivity, support, atom and moment statements cited are mathematical consequences proved in the cited items; their physical reading is exactly the reading of P2 fixed here.

## Remarks

- **Mixtures versus superpositions.** The affinity of clause (b) concerns statistical mixtures with classical weights, not superpositions: a coherent superposition is a normalized vector combination of unit representatives, and its outcome law need not be the weighted average of their laws. The interference terms can vanish for a particular observable, so equality of these laws is possible. The distinction is carried by the state-space items of the preceding page.
- **No discrete basis is assumed.** Nothing in this definition asserts that $A$ has eigenvalues or a complete system of eigenvectors. The outcome law exists for every assigned self-adjoint $A$ through its spectral PVM; discrete sums are the special case of a purely atomic law.
