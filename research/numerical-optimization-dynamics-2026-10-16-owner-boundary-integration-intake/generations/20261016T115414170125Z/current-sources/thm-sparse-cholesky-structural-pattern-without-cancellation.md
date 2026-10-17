---
id: thm-sparse-cholesky-structural-pattern-without-cancellation
kind: theorem
title: Ordered sparse Cholesky has the symbolic filled pattern when no cancellation occurs
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [alg-sparse-cholesky-with-invalid-pivot-status, lem-hermitian-schur-support-is-contained-in-structural-fill, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, def-hermitian-structural-graph-adapter]
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §§4.1–4.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §§4–5"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$ be Hermitian positive definite and use its pattern from [[def-hermitian-structural-graph-adapter]]. The local Hermitian Schur-support lemma [[lem-hermitian-schur-support-is-contained-in-structural-fill]] applies. In exact arithmetic, the Cholesky recurrence in [[alg-sparse-cholesky-with-invalid-pivot-status]] returns the unique factor $L$ satisfying $PAP^*=LL^*$ and positive diagonal, and every nonzero strict-lower entry of $L$ is permitted by the filled graph $G^+_\pi$.

For $i>j$ with $\{i,j\}\in E^+_\pi$ (where ordered position $i$ represents original vertex $v_i$), define the recurrence numerator
$$\nu_{ij}=B_{ij}-\sum_{k<j}l_{ik}\overline{l_{jk}},\qquad B=PAP^*.$$
If $\nu_{ij}\ne0$ at every permitted strict-lower position, then the numerical nonzero pattern of $L$ is exactly the lower-triangular part of $G^+_\pi$ together with its diagonal. Without this no-cancellation hypothesis only the upper-pattern inclusion is asserted.

## Facts & Assumptions


**Given:** A Hermitian positive-definite matrix $A$, the stated batch-2 graph/ordering interface, and its Schur-support hypothesis.

[F1] [[alg-sparse-cholesky-with-invalid-pivot-status]]: The permutation matrix has row $j$ equal to row $v_j$ of $I_n$, and the exact algorithm uses $d_j=B_{jj}-\sum_{k<j}|l_{jk}|^2$, $l_{jj}=\sqrt{d_j}$, and $l_{ij}=(B_{ij}-\sum_{k<j}l_{ik}\overline{l_{jk}})/l_{jj}$ on filled positions.

[F2] [[lem-hermitian-schur-support-is-contained-in-structural-fill]]: With nonzero scalar pivots, each Hermitian Schur complement is supported inside the Hermitian filled graph.

[F3] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: A Hermitian positive-definite matrix has a unique factorization $C=RR^*$ with $R$ lower triangular and positive real diagonal.

## Proof


1.1 A permutation preserves positive definiteness: for $x\ne0$, $P^*x\ne0$ and $x^*Bx=(P^*x)^*A(P^*x)>0$. Thus [F3] gives a unique exact Cholesky factor $R$ of $B$. [given, F1, F3, algebra]

2.1 We show the recurrence in [F1] recovers $R$ column by column, beginning with $j=0$ where the sum is empty. From $B=RR^*$, its $(j,j)$ entry is $B_{jj}=\sum_{k<j}|r_{jk}|^2+|r_{jj}|^2$; since $r_{jj}>0$, the computed exact pivot is $d_j=|r_{jj}|^2>0$ and its positive square root is $r_{jj}$. [step 1.1, F1, F3, base, algebra]

3.1 For $i>j$, the $(i,j)$ entry of $B=RR^*$ is $B_{ij}=\sum_{k<j}r_{ik}\overline{r_{jk}}+r_{ij}\overline{r_{jj}}$. Because $r_{jj}>0$, solving this identity for $r_{ij}$ gives exactly the recurrence in [F1]. Induction on $j$ therefore makes every computed column equal to the corresponding column of $R$. [step 2.1, F1, IH, induction, algebra]

4.1 Let $S^j$ be the exact Schur complement after eliminating positions $0,\ldots,j-1$ from $B$. Initially $S^0=B$. If the first $j$ columns equal those of $R$, then [step 3.1, F1, F2, IH, induction, algebra]
$$S^j_{ab}=B_{ab}-\sum_{k<j}r_{ak}\overline{r_{bk}}.$$
This identity holds at $j=0$; eliminating pivot $j$ subtracts $r_{aj}\overline{r_{bj}}$ because $S^j_{jj}=r_{jj}^2$ and $S^j_{aj}=r_{aj}r_{jj}$, so it holds at $j+1$. In particular the recurrence numerator at position $(i,j)$ is $S^j_{ij}$. By [F2], a nonzero such entry can occur only on an edge of the filled graph. Therefore every structurally absent position has zero numerator and is correctly omitted, proving the factor support inclusion. [step 3.1, F1, F2, induction, algebra]

5.1 At each permitted strict-lower position, the recurrence gives $l_{ij}=\nu_{ij}/l_{jj}$ and step 2.1 gives $l_{jj}>0$. Hence $\nu_{ij}\ne0$ implies $l_{ij}\ne0$. Under the stated no-cancellation condition every permitted position is nonzero; together with step 4.1 this gives equality of patterns. [step 2.1, step 4.1, F1, algebra]

6.1 Steps 2.1 and 3.1 establish that the exact algorithm returns the unique Cholesky factor; step 4.1 proves the structural upper pattern in the complex Hermitian case; step 5.1 proves equality precisely under the no-cancellation hypothesis. No finite-precision success or stability claim follows from this exact-arithmetic theorem. [step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎
