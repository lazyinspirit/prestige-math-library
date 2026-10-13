---
id: pthm-nrqm-observables-born-outcome-law-properties
aliases: [ nrqm-observables-born-outcome-law-properties ]
kind: physics-theorem
domain: physics
title: "The Born outcome law: probability measure, mixtures, atoms and spectral
  support"
status: published
origin: pipeline
dependency_level: 8
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-observables-spectral-support-and-outcome-law,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional consequences of the adopted observable and
  probability postulate P2 for the sharp observables of the framework: the
  outcome law of an assigned self-adjoint observable and preparation is a
  probability measure on the Borel sets; it is affine under statistical
  mixtures; it assigns zero to an exact value that is not an eigenvalue; it is
  supported in the spectrum of the observable; and it carries no claimed
  density. The item is conditional on P1 and P2 and on the choice hypotheses of
  the spectral theorem; it asserts nothing about concrete apparatuses, joint
  measurements, moments, state updates or empirical data."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        3.2.2-3.3.1, printed pages 71-81 (Hermitian operators; the measurement
        outcome lies in the spectrum; probabilities from eigenstate expansion
        and expectation values)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-half, Bras, Kets, and Operators', Sections 3-5, printed pages 7-18
        (outcome probabilities from amplitudes and the idealized filter
        measurements), and Chapter 4, Section 2.1-2.2, printed pages 6-9
        (projection operators)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.4
        and 6.3, printed pages 15-18 and 121-126 (ideal measurement; the trace
        rule for the probability of an outcome)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate [[post-nrqm-framework-state-and-composition]] (P1) and the observable and probability postulate [[post-nrqm-framework-observable-and-probability]] (P2), and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of the spectral suppliers. Let $H$ be the state space assigned to a declared system, let $(A,u_A)$ be an assigned sharp observable of the framework with spectral projection-valued measure $E_A$ and spectrum $\sigma(A)$, and let $\mu^{A}_{\rho}$ be the outcome law of [[def-nrqm-observables-framework-observable-and-outcome-law]]. Then for every preparation $\rho$ ([[def-nrqm-state-geometry-framework-state-space]]) and every Borel set $B\subseteq\mathbb R$:

(a) **Probability measure.** $0\le\mu^{A}_{\rho}(B)\le1$ and $\mu^{A}_{\rho}(\mathbb R)=1$; for pairwise disjoint Borel sets $B_n$ with union $B$ one has $\mu^{A}_{\rho}(B)=\sum_n\mu^{A}_{\rho}(B_n)$; and for the pure preparation of a unit vector $\psi$ the law is $\mu^{A}_{\psi}(B)=\|E_A(B)\psi\|^{2}$. The declared outcome law of the model is therefore a probability measure on the Borel $\sigma$-algebra of $\mathbb R$, not a formal weight attached to eigenvectors.

(b) **Mixtures.** If $\rho=\sum_nw_n\rho_n$ is a statistical mixture of preparations with weights $w_n\ge0$, $\sum_nw_n=1$, then $\mu^{A}_{\rho}(B)=\sum_nw_n\mu^{A}_{\rho_n}(B)$ for every Borel $B$, the series converging absolutely: the outcome law of a mixture is the weighted average of the outcome laws, with classical weights.

(c) **Exact values.** For $\lambda\in\mathbb R$ the probability of the exact value $\lambda$ is $\mu^{A}_{\rho}(\{\lambda\})=\operatorname{tr}(\rho E_A(\{\lambda\}))$; it is zero for every preparation whenever $\lambda$ is not an eigenvalue of $A$, and when $\lambda$ is an eigenvalue it equals the trace weight of the eigenspace $\ker(A-\lambda)$, with $\mu^{A}_{T_{u,u}}(\{\lambda\})=1$ for every unit eigenvector $u$.

(d) **Spectral support.** $\mu^{A}_{\rho}(B)=\mu^{A}_{\rho}(B\cap\sigma(A))$ and $\mu^{A}_{\rho}(\sigma(A))=1$: outcomes outside the spectrum of the observable have probability zero.

(e) **No density and no discreteness are asserted.** The postulate asserts that $\mu^{A}_{\rho}$ is a probability measure on the Borel sets and does not assert that it is a density with respect to Lebesgue measure or a finite or countable sum of point masses; the operational object named there is the probability of a declared Borel set, such as a finite-resolution bin, not the value of a density at a point ([[post-nrqm-framework-observable-and-probability]] clause (iii)). Which structure a particular pair $(A,\rho)$ exhibits is a property of that pair and is not fixed by the adopted law.

(f) **What is not claimed.** No mean, variance or higher moment is asserted by this item; their existence is conditional and is treated separately. No claim is made about the joint statistics of two or more observables, about the state after the outcome, about the physical mechanism producing an outcome, or about any concrete apparatus. The statement is conditional on P1 and P2 and on the cited mathematics.

## Facts & Assumptions

**Given:** The adopted postulates P1 and P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]]); the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); the assigned state space $H$ with preparation class $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]; an assigned sharp observable $(A,u_A)$ with spectral PVM $E_A$ and spectrum $\sigma(A)$; preparations $\rho,\rho_n$; Borel sets $B,B_n\subseteq\mathbb R$; and the readings of [[def-nrqm-observables-framework-observable-and-outcome-law]].

[F1] **P1.** Pure preparations are the unit rays of the assigned Hilbert space, general preparations are the density operators $\rho$ with $\operatorname{tr}\rho=1$, and a statistical mixture $\sum_nw_n\rho_n$ with $w_n\ge0$, $\sum_nw_n=1$ is a preparation ([[post-nrqm-framework-state-and-composition]] clauses (i)-(iii), [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

[F2] **P2.** An ideal sharp real-valued quantity is a self-adjoint operator with a declared unit; its spectral PVM assigns to a Borel set $B$ the probability $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$, equal to $\|E_A(B)\psi\|^{2}$ for a unit pure preparation; the law is a measure and not necessarily a density or a discrete sum; an exact continuum value is an idealization, while a real detector's finite-resolution outcome is represented by a declared Borel set ([[post-nrqm-framework-observable-and-probability]] clauses (i)-(iii)).

[F3] **Scalar law.** For every density operator $\rho$ with expansion $\rho=\sum_nw_nT_{u_n,u_n}$ and every PVM $E$, the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure with $\operatorname{tr}(\rho E(B))=\sum_nw_n\|E(B)u_n\|^{2}$; for a unit vector $u$ it equals $\|E(B)u\|^{2}$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F4] **Atoms and eigenvalues.** $E_A(\{\lambda\})$ is the projection onto $\ker(A-\lambda)$; it is nonzero exactly when $\lambda$ is an eigenvalue of $A$; consequently $\operatorname{tr}(\rho E_A(\{\lambda\}))=0$ for every preparation when $\lambda$ is not an eigenvalue, and $\mu^{A}_{T_{u,u}}(\{\lambda\})=1$ for every unit eigenvector $u$ at $\lambda$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a) and (b)).

[F5] **Spectral support.** $E_A(\mathbb R\setminus\sigma(A))=0$ and $\operatorname{tr}(\rho E_A(B))=\operatorname{tr}(\rho E_A(B\cap\sigma(A)))$ with $\mu^{A}_{\rho}(\sigma(A))=1$ for every preparation ([[lem-nrqm-observables-spectral-support-and-outcome-law]] clauses (a) and (b)).

[F6] **Affinity.** For a trace-norm convergent mixture $\rho=\sum_nw_n\rho_n$ of density operators one has $\operatorname{tr}(\rho E_A(B))=\sum_nw_n\operatorname{tr}(\rho_nE_A(B))$ for every Borel set $B$, the series converging absolutely ([[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]] clauses (b) and (c)).

[F7] **Nature of the law (P2 clause (iii)).** The postulate asserts that the outcome law is a measure, not necessarily a density with respect to Lebesgue measure and not necessarily a finite or countable sum of point masses; an exact value of a continuum quantity is an idealization, and a real detector reports the probability of a declared Borel set such as a bin ([[post-nrqm-framework-observable-and-probability]] clause (iii)).

[F8] **Spectral theorem.** The spectral PVM $E_A$ exists, is unique among regular PVMs on the Borel sets of $\mathbb R$ representing $A$, and is the object whose scalar measures enter [F3] ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

1.1 [Clause (a)] By [F2] the outcome law is defined using the spectral PVM of [F8], and by $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$; by [F3] it is a probability measure on the Borel sets with values in $[0,1]$, normalization $\mu^{A}_{\rho}(\mathbb R)=\operatorname{tr}\rho=1$ and countable additivity, and for a unit vector $\psi$ it equals $\|E_A(B)\psi\|^{2}$. This is clause (a). [given, F2, F3, F8, algebra]

1.2 [Clause (b)] Let $\rho=\sum_nw_n\rho_n$ be a statistical mixture; by [F1] it is a preparation, and [F6] gives $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))=\sum_nw_n\operatorname{tr}(\rho_nE_A(B))=\sum_nw_n\mu^{A}_{\rho_n}(B)$ for every Borel $B$ with absolute convergence. [given, F1, F6, algebra]

1.3 [Clause (c)] By [F4], $E_A(\{\lambda\})$ is the projection onto $\ker(A-\lambda)$ and vanishes exactly when $\lambda$ is not an eigenvalue; hence $\mu^{A}_{\rho}(\{\lambda\})=\operatorname{tr}(\rho E_A(\{\lambda\}))=0$ for every preparation in that case, while for a unit eigenvector $u$ at $\lambda$ the same reference gives $\mu^{A}_{T_{u,u}}(\{\lambda\})=1$, and the value is the trace weight of the eigenspace. [given, F4, algebra]

1.4 [Clause (d)] By [F5], $E_A(\mathbb R\setminus\sigma(A))=0$ and hence $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))=\operatorname{tr}(\rho E_A(B\cap\sigma(A)))=\mu^{A}_{\rho}(B\cap\sigma(A))$, with $\mu^{A}_{\rho}(\sigma(A))=\operatorname{tr}\rho=1$; this is the spectral-support reading of [F2]. [given, F5, algebra]

1.5 [Clause (e)] By [F2] the law is asserted to be a probability measure, and by [F7] the postulate neither asserts that it is a density with respect to Lebesgue measure nor that it is a finite or countable sum of point masses, the operational object being the probability of a declared Borel set. Therefore clause (e) is a reading of P2 clause (iii) alone, and no further structure of $\mu^{A}_{\rho}$ is claimed. [given, F2, F7]

2.1 [Clause (f) and conclusion] Steps 1.1-1.4 prove clauses (a)-(d) from P1, P2 and the cited mathematics, and step 1.5 records the limits of clause (e). Nothing in the argument uses moments, joint statistics, state updates, apparatus models or data, so none of these is claimed. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
