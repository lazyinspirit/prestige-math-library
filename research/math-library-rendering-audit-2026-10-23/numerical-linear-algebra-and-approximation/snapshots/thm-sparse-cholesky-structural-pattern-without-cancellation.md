---
id: thm-sparse-cholesky-structural-pattern-without-cancellation
kind: theorem
title: Ordered sparse Cholesky has the symbolic filled pattern when no cancellation occurs
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [alg-sparse-cholesky-with-invalid-pivot-status, lem-hermitian-schur-support-is-contained-in-structural-fill, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, def-hermitian-structural-graph-adapter]
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
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

2.1 Independently of the sparse algorithm, define dense active matrices on $a,b\ge j$ by $S^j_{ab}=B_{ab}-\sum_{k<j}r_{ak}\overline{r_{bk}}$. Since $B=RR^*$ and $R$ is lower triangular, $S^j_{jj}=r_{jj}^2>0$ and $S^j_{ij}=r_{ij}r_{jj}$ for $i>j$. Subtracting $S^j_{aj}S^j_{jb}/S^j_{jj}=r_{aj}\overline{r_{bj}}$ gives $S^{j+1}_{ab}$. Thus these are precisely the dense Hermitian Schur updates starting from $S^0=B$, with every pivot nonzero, without assuming anything about the sparse output. [step 1.1, F3, algebra]

3.1 Apply [F2] to the dense Schur sequence from step 2.1, using original vertex labels $v_a,v_b$ for ordered positions $a,b$. If $\{i,j\}\notin E^+_\pi$ with $i>j$, it is absent from the active filled graph at stage $j$, so $S^j_{ij}=0$. As $S^j_{ij}=r_{ij}r_{jj}$ and $r_{jj}>0$, this forces $r_{ij}=0$. Hence the dense factor $R$ already has the required structural support, before it is compared with the sparse recurrence. [step 2.1, F1, F2, algebra]

4.1 Induct on the sparse column index $j$, with no preceding columns at $j=0$. Assume $l_{ik}=r_{ik}$ for all $k<j$. By step 2.1 the pivot recurrence in [F1] gives $d_j=S^j_{jj}=r_{jj}^2>0$ and $l_{jj}=r_{jj}$. On every permitted position its numerator is $S^j_{ij}=r_{ij}r_{jj}$, so the computed $l_{ij}$ equals $r_{ij}$. On an omitted position the algorithm sets $l_{ij}=0$, which equals $r_{ij}$ by step 3.1. This completes the induction, proving $L=R$ and success at every exact pivot. [step 2.1, step 3.1, F1, base, IH, induction, algebra]

5.1 At each permitted strict-lower position, the recurrence gives $l_{ij}=\nu_{ij}/l_{jj}$ and step 4.1 gives $l_{jj}>0$. Hence $\nu_{ij}\ne0$ implies $l_{ij}\ne0$. Under the stated no-cancellation condition every permitted position is nonzero; together with step 3.1 and $L=R$ this gives equality of patterns. [step 3.1, step 4.1, F1, algebra]

6.1 Step 4.1 establishes that the exact algorithm returns the unique Cholesky factor; step 3.1 proves the structural upper pattern in the complex Hermitian case; step 5.1 proves equality under the no-cancellation hypothesis. No finite-precision success or stability claim follows from this exact-arithmetic theorem. [step 3.1, step 4.1, step 5.1, discharge-induction] ∎
