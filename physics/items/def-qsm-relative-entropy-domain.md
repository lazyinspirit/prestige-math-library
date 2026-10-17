---
id: def-qsm-relative-entropy-domain
kind: definition
title: Quantum spectral entropy and relative-entropy domains
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-qsm-matrix-state-calculus
  - def-qsm-density-trace-state
  - lem-qsm-trace-state-calculus
  - thm-orthogonal-decomposition-by-a-closed-subspace
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qsm-density-trace-state: mathematical-premise
  lem-qsm-trace-state-calculus: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §§5.1–5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Definition

For a trace-class density $\rho$ on a Hilbert space $H$, define its support subspace in either finite or infinite dimension by
$$\operatorname{supp}\rho:=(\ker\rho)^\perp,\qquad \ker\rho:=\{x\in H:\rho x=0\}.$$
It is closed; write $P_\rho$ for its orthogonal projection, whose existence and uniqueness follow from [[thm-orthogonal-decomposition-by-a-closed-subspace]].

Fix the positive Boltzmann scale $k_B>0$ (in SI units J/K, as in the approved QSM quantities design and [[lem-qsm-trace-state-calculus]]). For a trace-class density $\rho$ with positive eigenvalues $p_i$, define $S(\rho)=-k_B\sum_i p_i\log p_i\in[0,\infty]$, with $0\log0=0$. The logarithm is natural and acts on dimensionless density eigenvalues.

For finite-dimensional densities $\rho,\sigma$, define $\operatorname{supp}\rho=(\ker\rho)^\perp$. If $\operatorname{supp}\rho\not\subseteq\operatorname{supp}\sigma$, set $D(\rho\|\sigma)=+\infty$. Otherwise define
$
D(\rho\|\sigma)=\operatorname{Tr}(\rho\log\rho)-\operatorname{Tr}(\rho\log\sigma),
$
where each logarithm is restricted to the positive support of its operator and zero eigenvalues contribute zero to $\operatorname{Tr}(\rho\log\rho)$.

For trace-class normal densities on a separable Hilbert space, write $\rho=\sum_i p_i|u_i\rangle\langle u_i|$ and $\sigma=\sum_j s_j|v_j\rangle\langle v_j|$ on their positive supports. Define the nonnegative cross-log moment
$
C(\rho,\sigma):=\sum_{i,j}p_i(-\log s_j)|\langle u_i,v_j\rangle|^2\in[0,\infty].
$
This is the spectral first moment of $-\log\sigma$ in the scalar state law of $\rho$; equivalently it is the nonnegative sum over the spectral projections, so it is independent of bases within eigenspaces. When support inclusion holds and $C(\rho,\sigma)$ and $S(\rho)$ are both finite, define $D(\rho\|\sigma)=C(\rho,\sigma)-S(\rho)/k_B$. If $C=+\infty$ and $S(\rho)<\infty$, set $D=+\infty$. No value is assigned by this definition to $+\infty-(+\infty)$; [[thm-qsm-trace-cross-log-inequality]] proves that finite $C$ forces finite $S(\rho)$.

The spectral-moment identification in the preceding cross-log clause is restricted to $\operatorname{supp}\rho\subseteq\operatorname{supp}\sigma$, so that the state is supported on the space where $-\log\sigma$ acts. Outside that domain, $C$ denotes only the displayed nonnegative double sum.

## Facts & Assumptions

**Given:** The finite spectral calculus, trace-class normal density states, the scalar PVM law on a nonzero separable complex Hilbert space, and the positive scale $k_B>0$.

[A1] The Axiom of Choice is inherited through the trace-state spectral-calculus supplier closure; the finite-dimensional clauses themselves are choice-free ([[def-axiom-of-choice]]).

[F1] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have real eigenvalues and logarithms are defined on their positive supports.

[F2] [[def-qsm-density-trace-state]] and [[lem-qsm-trace-state-calculus]]: trace-class densities have countable positive spectral weights and von Neumann entropy is the nonnegative spectral sum, possibly infinite.

## Proof

1.1 In finite dimension, support inclusion means every positive eigenvector of $\rho$ lies in the span of positive eigenvectors of $\sigma$. Each positive eigenvalue in either support is a positive real number, so its logarithm is finite; the zero eigenspaces contribute no $\rho$-weight under the stated support inclusion. Therefore both trace terms in the finite formula are finite real sums, and the formula has no undefined product $0\log0$. The Axiom of Choice is present only through the explicitly retained spectral-calculus supplier closure. [given, A1, F1, algebra]

2.1 In the trace-class case, every summand in $C(\rho,\sigma)$ is nonnegative because $0<s_j\leq1$. The sum is therefore defined unambiguously as the supremum of its finite partial sums in $[0,\infty]$. Grouping equal eigenvalues replaces the basis coefficients by traces of products of the corresponding spectral projections, so the resulting value is independent of basis choices within eigenspaces. The definition distinguishes finite subtraction from the undefined case of two infinite terms. [given, F2, algebra] ∎
