---
id: thm-qsm-finite-gibbs-variational
kind: theorem
title: Finite Gibbs free-energy and entropy optimization
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - lem-qsm-matrix-state-calculus
  - def-qsm-relative-entropy-domain
  - supplier-nrqm-M25
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  supplier-nrqm-M25: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §§5.1–5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $H=H^*$ act on a finite-dimensional complex Hilbert space of dimension $d\geq1$, $\beta>0$, $k_B>0$, $T=(k_B\beta)^{-1}$, and $Z=\operatorname{Tr}(e^{-\beta H})$. Put $\sigma=e^{-\beta H}/Z$, $F_\beta=-\beta^{-1}\log Z$, and $S(\rho)=-k_B\operatorname{Tr}(\rho\log\rho)$, with $0\log0=0$. Then every density matrix $\rho$, including rank-deficient matrices, satisfies
$
\operatorname{Tr}(\rho H)-TS(\rho)\geq F_\beta,
$
with equality if and only if $\rho=\sigma$. Moreover $S(\sigma)=k_B(\log Z+\beta\operatorname{Tr}(\sigma H))$, so $F_\beta=\operatorname{Tr}(\sigma H)-TS(\sigma)$. This is finite-dimensional mathematical optimization; actual preparation is a separate postulate.

## Facts & Assumptions

**Given:** A finite-dimensional Hermitian $H$, $\beta>0$, $k_B>0$, a density matrix $\rho$, and natural logarithms.

[A1] $H$ is the mathematical energy matrix and $T=(k_B\beta)^{-1}>0$ is a parameter; when SI units are used, $\beta$ is J$^{-1}$, $H$ is in J, and $k_B$ is J/K.

[F1] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have real eigenvalues and a basis-independent trace.

[F2] [[def-qsm-relative-entropy-domain]]: $D(\rho\|\sigma)=\operatorname{Tr}(\rho\log\rho)-\operatorname{Tr}(\rho\log\sigma)$ on support inclusion.

[L1] [[supplier-nrqm-M25]]: the completed NRQM research proof M25 states that for finite Hermitian $H$, $\beta>0$, and any density matrix, the Gibbs density minimizes $\operatorname{Tr}(\rho H)-\beta^{-1}[-\operatorname{Tr}(\rho\log\rho)]$, with equality at the Gibbs density. Its exact source is research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/mathematical-prerequisites.md, M25; it is not a production item or acceptance receipt.

## Proof

1.1 By [F1], write $H=\sum_jE_j|v_j\rangle\langle v_j|$ with real $E_j$. Then $e^{-\beta H}$ has strictly positive eigenvalues $e^{-\beta E_j}$, so $Z=\sum_je^{-\beta E_j}>0$, $\sigma$ is faithful, and $\log\sigma=-\beta H-(\log Z)I$. [given, F1, algebra]

2.1 By [F2] and step 1.1, $ D(\rho\|\sigma)=\operatorname{Tr}(\rho\log\rho)+\beta\operatorname{Tr}(\rho H)+\log Z =\beta\bigl(\operatorname{Tr}(\rho H)-TS(\rho)-F_\beta\bigr). $ All terms are finite because the dimension is finite and $\sigma$ is faithful. [step 1.1, F2, algebra]

3.1 The planned supplier [L1], under exactly these finite-dimensional hypotheses, gives $D(\rho\|\sigma)\geq0$, hence the displayed variational inequality by step 2.1. The supplier’s carrier is currently absent; the use is conditional on its inspected M25 statement and proof status. [given, step 2.1, L1]

3.2 For the equality case, diagonalize $\rho=\sum_iw_i|u_i\rangle\langle u_i|$ on its support and let $q_j=e^{-\beta E_j}/Z>0$ be the eigenvalues of $\sigma$ in the $v_j$ basis. Set $r_i=\sum_j|\langle u_i,v_j\rangle|^2q_j>0$. The overlap weights in each row sum to one, so concavity of $\log$ gives $\sum_j|\langle u_i,v_j\rangle|^2\log q_j\leq\log r_i$, with equality only when all $q_j$ having positive overlap in that row are equal. Also $-\log(r_i/w_i)\geq1-r_i/w_i$, with equality only at $r_i=w_i$. Consequently $ D(\rho\|\sigma)\geq\sum_{i:w_i>0}w_i\log(w_i/r_i) \geq\sum_{i:w_i>0}(w_i-r_i)\geq0, $ because $\sum_iw_i=1$ and $\sum_{i:w_i>0}r_i=\operatorname{Tr}(\sigma P_{\operatorname{supp}\rho})\leq1$. If $D=0$, all inequalities are equalities. Strictness of the scalar inequality gives $r_i=w_i$; equality in strict concavity of $\log$ means $u_i$ lies in one eigenspace of $\sigma$, so $\sigma u_i=w_i u_i$. The sum of the $r_i$ is then one, so $\operatorname{Tr}(\sigma(I-P_{\operatorname{supp}\rho}))=0$. For every $v$ in that orthogonal complement, positivity gives $\|\sigma^{1/2}v\|^2=\langle\sigma v,v\rangle=0$, hence $\sigma v=0$; therefore $\sigma$ has no support outside $\operatorname{supp}\rho$. Together with $\sigma u_i=w_i u_i$, this proves $\rho=\sigma$. Conversely $\rho=\sigma$ gives $D=0$. [step 2.1, F2, algebra]

4.1 For $\rho=\sigma$, step 1.1 gives $S(\sigma)=-k_B\operatorname{Tr}(\sigma\log\sigma)=k_B(\log Z+\beta\operatorname{Tr}(\sigma H))$. Substitution of $T=(k_B\beta)^{-1}$ and $F_\beta=-\beta^{-1}\log Z$ gives $F_\beta=\operatorname{Tr}(\sigma H)-TS(\sigma)$, as stated. [A1, step 1.1, algebra] ∎
