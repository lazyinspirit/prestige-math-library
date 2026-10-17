---
id: post-qsm-normal-measurement-state
kind: postulate
title: Normal-state quantum measurement interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
physical_scope: Adopted Hilbert-space Born interpretation for trace-class normal density states and their self-adjoint spectral measurements; nonnormal algebraic states and empirical apparatus claims are outside scope.
deps:
  - def-axiom-of-choice
  - def-qsm-density-trace-state
  - lem-qsm-matrix-state-calculus
  - lem-qsm-trace-state-calculus
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsm-density-trace-state: formulation-prerequisite
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-trace-state-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Postulate

Adopt the following measurement interpretation for this nonrelativistic quantum-statistical model. A prepared normal state is a trace-class density operator $\rho$ on a specified separable complex Hilbert space $H$. A sharp measurement of a self-adjoint observable $A$, with spectral PVM $E_A$, assigns probability
$
\mathbb P_\rho\{A\in C\}=\operatorname{Tr}(\rho E_A(C))
$
to each Borel outcome set $C\subseteq\mathbb R$. Finite projective measurements use the same rule with their orthogonal projections. This adopts a physical probability interpretation for the mathematical state law proved in [[lem-qsm-trace-state-calculus]]; it does not derive the Born rule, assert that an apparatus realizes a specified PVM, or report experimental outcomes. Infinite algebraic states not represented by trace-class density operators are not included.

The Axiom of Choice is inherited from the unbounded spectral theorem and its spectral-calculus supplier closure. Its strength is retained in the mathematical dependencies. The scalar probability and bounded cyclicity clauses now use the exact canonical suppliers cited by [[lem-qsm-trace-state-calculus]]; this source adoption supplies no native readiness or empirical validation, and implies no weaker foundation.
