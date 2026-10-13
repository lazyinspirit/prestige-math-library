---
id: pthm-nrqm-observables-states-separated-by-born-statistics
aliases: [ nrqm-observables-states-separated-by-born-statistics ]
kind: physics-theorem
domain: physics
title: "Distinct preparations are separated by the statistics of a bounded sharp
  observable"
status: published
origin: pipeline
dependency_level: 9
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-orthogonal-projection,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-observables-states-separated-by-bounded-projections,
    lem-orthogonal-projection-is-linear-self-adjoint-contractive,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-born-outcome-law-properties
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-observables-states-separated-by-bounded-projections: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional separation statement for the framework's
  preparations: two distinct preparations of a declared system assign different
  probabilities to some outcome of some bounded sharp observable of the
  framework, namely to the outcome 1 of a rank-one orthogonal projection; the
  difference is bounded by the trace-norm distance of the two states. The item
  asserts no finite-measurement procedure that identifies a preparation, no
  apparatus realization and no empirical result; it concerns the model's state
  space under the state and observable postulates."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Sections 2.2.1, 2.3.2 and 2.6, printed pages 8-9,
        21-23 and 36-39 (Bloch-vector determination of qubit states; statistics
        distinguishing states and the trace-distance notion)"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3,
        printed pages 121-126 (the density operator and the trace rule, with
        distinct states having different statistics)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate [[post-nrqm-framework-state-and-composition]] (P1) and the observable and probability postulate [[post-nrqm-framework-observable-and-probability]] (P2), and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H$ be the state space assigned to a declared system and let $\rho\ne\sigma$ be two preparations of the system in the sense of [[def-nrqm-state-geometry-framework-state-space]] clauses (a)-(c). Then there is a bounded sharp observable of the framework, namely an orthogonal projection $P$ of rank one, such that the outcome laws of [[def-nrqm-observables-framework-observable-and-outcome-law]] differ at the outcome set $\{1\}$:
$$\mu^{P}_{\rho}(\{1\})=\operatorname{tr}(\rho P)\ne\operatorname{tr}(\sigma P)=\mu^{P}_{\sigma}(\{1\}).$$
Moreover for every rank-one projection $P$ one has $|\mu^{P}_{\rho}(\{1\})-\mu^{P}_{\sigma}(\{1\})|\le\|\rho-\sigma\|_{1}$; consequently, if $\mu^{P}_{\rho}=\mu^{P}_{\sigma}$ for every bounded sharp observable $P$ (or merely for every rank-one projection), then $\rho=\sigma$.

The statement is conditional on P1 and P2 and asserts no procedure that determines a preparation from finitely many measurements, no apparatus realization, no error rate and no empirical result.

## Facts & Assumptions

**Given:** The adopted postulates P1 and P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]]); the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); the assigned state space $H$ with preparation class of [[def-nrqm-state-geometry-framework-state-space]]; preparations $\rho,\sigma$ with $\rho\ne\sigma$.

[F1] **Mathematical separation.** For distinct density operators $\rho,\sigma$ there is a unit vector $w\in H$ with $\langle\rho w,w\rangle\ne\langle\sigma w,w\rangle$; for the rank-one projection $P=T_{w,w}$ the spectral law of $P$ satisfies $\mu^{P}_{\rho}(\{1\})=\operatorname{tr}(\rho P)=\langle\rho w,w\rangle$ and likewise for $\sigma$, and $|\operatorname{tr}((\rho-\sigma)T_{w,w})|\le\|\rho-\sigma\|_{1}$ ([[lem-nrqm-observables-states-separated-by-bounded-projections]] clauses (a)-(c)).

[F2] **The framework's outcome law and its reading.** An assigned sharp observable has spectral PVM $E_A$ and outcome law $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$, equal to $\|E_A(B)\psi\|^{2}$ for a pure preparation; the law is a probability measure on the Borel sets of $\mathbb R$, and the outcome-set reading of the model is that of [[def-nrqm-observables-framework-observable-and-outcome-law]] ([[pthm-nrqm-observables-born-outcome-law-properties]] clauses (a)-(c), clause (ii)).

[F3] **Projections are assigned bounded observables.** An orthogonal projection $P$ is a bounded self-adjoint operator with $0\le P\le I$ on $H$ ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]), hence qualifies as a sharp observable of the framework when assigned with the dimensionless unit of its spectral coordinate.

## Proof

1.1 [Existence of a separating bounded observable] Let $w$ and $P=T_{w,w}$ be as in [F1]: such a unit vector exists because $\rho\ne\sigma$ and $\rho-\sigma$ is a nonzero self-adjoint trace-class operator. By [F3] the operator $P$ is a bounded self-adjoint projection, hence an assigned sharp observable of the framework once its unit (the dimensionless spectral coordinate, which here takes the values $0$ and $1$) is declared; its spectral law at $\{1\}$ is $\operatorname{tr}(\rho P)$ and $\operatorname{tr}(\sigma P)$ by [F2], and [F1] gives $\operatorname{tr}(\rho P)=\langle\rho w,w\rangle\ne\langle\sigma w,w\rangle=\operatorname{tr}(\sigma P)$. [given, F1, F2, F3, algebra]

2.1 [Uniform bound and separation] The bound $|\mu^{P}_{\rho}(\{1\})-\mu^{P}_{\sigma}(\{1\})|=|\operatorname{tr}((\rho-\sigma)P)|\le\|\rho-\sigma\|_{1}$ is [F1] applied to the rank-one projection $P$. If all rank-one projections have equal laws for $\rho$ and $\sigma$, then $\langle\rho w,w\rangle=\langle\sigma w,w\rangle$ for every unit $w$ by the same identification, contradicting the choice of $w$ in [F1] unless $\rho=\sigma$; hence statistical identity for all such observables forces the preparations to coincide. This proves the statement, and the assertion involves no measurement procedure beyond the model's outcome law. [step 1.1, given, F1, F2, algebra] ∎
