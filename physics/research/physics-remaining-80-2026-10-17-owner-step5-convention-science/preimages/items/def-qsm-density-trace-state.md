---
id: def-qsm-density-trace-state
kind: definition
title: Trace-class normal density states
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - lem-nrqm-composites-nuclear-bounded-cyclicity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Definition

Let $H\ne\{0\}$ be a separable complex Hilbert space, with inner product linear in its first argument. An operator $\rho\in\mathcal B(H)$ is a **density operator** when it is positive, trace class, and $\operatorname{Tr}\rho=1$. Here trace class means compact with summable singular values, and $\operatorname{Tr}$ is the basis-independent trace of a trace-class operator.

The **normal density state represented by $\rho$** is the functional on bounded operators
$
\omega_\rho(A):=\operatorname{Tr}(\rho A),\qquad A\in\mathcal B(H).
$
In this page, “normal density state” means this specified trace-pairing representation; no equivalence with other definitions of normal functionals is assumed. The trace pairing is used only for bounded $A$. Unbounded observables are treated through their spectral probability measures in [[lem-qsm-trace-state-calculus]].

## Facts & Assumptions

**Given:** Countable Choice, a nonzero separable complex Hilbert space $H$, a positive trace-class operator $\rho$ with $\operatorname{Tr}\rho=1$, and a bounded operator $A\in\mathcal B(H)$.

[A1] Countable Choice is the exact choice assumption used to index the nonzero eigenvalues by a finite or countable set ([[def-countable-choice]]).

[F1] [[def-trace-class-operator]]: a trace-class operator is compact with summable singular values; its trace norm dominates its operator norm.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: a positive compact operator has at most countably many positive eigenvalues with an orthonormal family spanning its support.

[F3] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: for a positive trace-class operator, its trace is the sum of its positive eigenvalues with multiplicity and its trace norm is that sum. This gives the trace directly without treating the positive eigenfamily as a Hilbert basis.

[F4] [[thm-trace-is-absolutely-convergent-and-basis-independent]]: the trace of a trace-class operator is absolutely defined, basis independent, linear, and bounded by its trace norm.

[F5] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: if $T$ is trace class and $A,B$ are bounded, then $ATB$ is trace class and $\|ATB\|_1\leq\|A\|\|T\|_1\|B\|$.

[F6] [[lem-nrqm-composites-nuclear-bounded-cyclicity]]: for a trace-class nuclear expansion $T=\sum_jT_{u_j,v_j}$ and bounded $A$, $\operatorname{Tr}(AT)=\sum_j\langle Au_j,v_j\rangle$ and $\operatorname{Tr}(TA)=\operatorname{Tr}(AT)$.

## Proof

1.1 By [F1] and [F2], write $\rho=\sum_{j\in J}p_j|u_j\rangle\langle u_j|$, where $J$ is finite or countable, $p_j>0$, and the $u_j$ are orthonormal. The positive-operator trace formula [F3] gives $\sum_jp_j=\operatorname{Tr}\rho=1$ and $\|\rho\|_1=1$. For every finite subset $F\subseteq J$, the remainder $\rho-\sum_{j\in F}p_j|u_j\rangle\langle u_j|$ is positive trace class with trace norm $1-\sum_{j\in F}p_j$. Thus these finite partial sums converge to $\rho$ in trace norm as the finite-subset net exhausts $J$; no basis of $\ker\rho$ is used. [given, A1, F1, F2, F3]

2.1 By [F5], $\rho A$ is trace class. The trace-norm expansion from step 1.1 is the nuclear representation $\rho=\sum_{j\in J}T_{p_ju_j,u_j}$, since $\sum_j\|p_ju_j\|\|u_j\|=\sum_jp_j=1$. The basis-independent trace [F4] and bounded cyclicity and its nuclear-series formula [F6] give $ \operatorname{Tr}(\rho A)=\sum_{j\in J}p_j\langle Au_j,u_j\rangle. $ The series is absolutely convergent because $\sum_jp_j|\langle Au_j,u_j\rangle|\leq\|A\|\sum_jp_j=\|A\|$. Thus $\omega_\rho$ is a well-defined bounded linear functional with $|\omega_\rho(A)|\leq\|A\|$. [given, step 1.1, F4, F5, F6, algebra]

3.1 For $A=I$, step 2.1 gives $\omega_\rho(I)=\sum_jp_j=1$. If $A\geq0$, every $\langle Au_j,u_j\rangle\geq0$, so step 2.1 gives $\omega_\rho(A)\geq0$. Therefore the trace pairing is a positive normalized bounded functional, as asserted. [given, step 1.1, step 2.1, algebra] ∎
