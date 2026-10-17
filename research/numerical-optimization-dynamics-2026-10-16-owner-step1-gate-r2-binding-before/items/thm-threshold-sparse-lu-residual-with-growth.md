---
id: thm-threshold-sparse-lu-residual-with-growth
kind: theorem
title: Real threshold sparse LU has a backward residual bound with actual growth
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-threshold-partial-pivot-sparse-lu
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §7.3.1"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §6"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Let $A\in\mathbb R^{n\times n}$ be nonsingular, $n\ge1$, and run [[alg-threshold-partial-pivot-sparse-lu]] with $\theta\in(0,1]$. Assume a successful run under the real operation model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with unit roundoff $u<1$ and every exact intermediate either zero or normal. Let $M=\max_{i,j}|a_{ij}|>0$, let $S^{(k)}$ be the active matrix at stage $k$ including its current pivot row, and define the actual growth of this run by
$$
\rho=\frac{\max_{k,i,j}|S^{(k)}_{ij}|}{M}\ge1.
$$
For its computed factors and accumulated row permutation, there is a residual $\Delta A$ such that
$$
\widehat QPA P^T+\Delta A=\widehat L\widehat U,
\qquad
\max_{i,j}|\Delta A_{ij}|\le \frac{8nu}{\theta}\rho M,
\qquad
\|\Delta A\|_\infty\le \frac{8n^2u}{\theta}\rho M,
\qquad \|X\|_\infty:=\max_i\sum_j|X_{ij}|.
$$
The bound retains this run's actual growth $\rho$ and makes no uniform small-growth claim. This residual theorem is for real arithmetic; the local operation model used here does not specify a general complex division primitive.

## Facts & Assumptions


**Given:** A successful real threshold-pivoted elimination run, the stated real relative operation model, and the no-range-failure hypothesis.

[F1] [[alg-threshold-partial-pivot-sparse-lu]]: At stage $k$, use the diagonal only if its modulus is at least $\theta$ times the active column maximum; otherwise swap a maximum-modulus row into the pivot position. The algorithm swaps previously stored entries of the same rows of $L$ and updates each active entry by one product and one subtraction.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: Each real add, subtract, multiply, or divide is one rounded operation; on a successful in-range real operation, the computed result is the exact result times $1+\delta$ with $|\delta|\le u$, and exact zero is returned exactly.

## Proof


1.1 The initial active matrix is $PAP^T$, whose entrywise maximum is $M$ because $P$ only permutes rows and columns; hence $\rho\ge1$. Let $c=S^{(k)}_{ik}$ and $p=S^{(k)}_{kk}$ at a successful pivot. If the diagonal is accepted, [F1] gives $|c/p|\le\theta^{-1}$. If a maximum-modulus entry is selected, $|c/p|\le1\le\theta^{-1}$. The rounded division therefore gives $|\widehat l_{ik}|\le(1+u)/\theta\le2/\theta$. Also every pivot-row entry and every active entry has modulus at most $\rho M$. [given, F1, F2, algebra]

1.2 For a trailing update, write $p_{ij}=\operatorname{fl}(\widehat l_{ik}\widehat u_{kj})$ and $S^{(k+1)}_{ij}=\operatorname{fl}(S^{(k)}_{ij}-p_{ij})$. Define $e_{ijk}=S^{(k+1)}_{ij}-(S^{(k)}_{ij}-\widehat l_{ik}\widehat u_{kj})$. By [F2]. [given, F1, F2, algebra]
$$
|p_{ij}-\widehat l_{ik}\widehat u_{kj}|\le u|\widehat l_{ik}\widehat u_{kj}|,
\quad
|S^{(k+1)}_{ij}-(S^{(k)}_{ij}-p_{ij})|\le u|S^{(k)}_{ij}-p_{ij}|.
$$
The triangle inequality and $|p_{ij}|\le(1+u)|\widehat l_{ik}\widehat u_{kj}|$ yield
$$
|e_{ijk}|\le u|S^{(k)}_{ij}|+u(2+u)|\widehat l_{ik}\widehat u_{kj}|
\le u\rho M\left(1+\frac{(2+u)(1+u)}{\theta}\right)
\le \frac{7u\rho M}{\theta},
$$
using $u<1$ and $\theta\le1$. [step 1.1, F1, F2, algebra]

2.1 For a computed multiplier, $\widehat l_{ik}=\operatorname{fl}(c/p)$, so [F2] gives a division residual $e^{\rm div}_{ik}:=c-\widehat l_{ik}p$ with $|e^{\rm div}_{ik}|\le u|c|\le u\rho M$. [step 1.1, F2, algebra]

3.1 Track each active row together with its previously stored entries of $\widehat L$ and its accumulated update residuals. Before stage $k$, for every active row $i$ and active column $j\ge k$, maintain [F1, step 1.2, step 2.1, induction, algebra]
$$
(Q_k P A P^T)_{ij}=\sum_{r<k}\widehat l_{ir}\widehat u_{rj}+S^{(k)}_{ij}-\sum_{r<k}e_{ijr},
$$
where $Q_k$ is the row permutation accumulated so far. At $k=0$ this is $S^{(0)}=PAP^T$. Swapping two active rows also swaps their earlier $L$ entries and residual histories, so it preserves the invariant. After the pivot, $\widehat u_{kj}=S^{(k)}_{kj}$; each lower-row update is $S^{(k+1)}_{ij}=S^{(k)}_{ij}-\widehat l_{ik}\widehat u_{kj}+e_{ijk}$, so substitution gives the same invariant at stage $k+1$. For the pivot column, $S^{(k)}_{ik}=\widehat l_{ik}\widehat u_{kk}+e^{\rm div}_{ik}$ by definition of the division residual. Thus after all stages, for $i\le j$,
$$
(\widehat QPA P^T)_{ij}-(\widehat L\widehat U)_{ij}=-\sum_{k<i}e_{ijk},
$$
and for $i>j$,
$$
(\widehat QPA P^T)_{ij}-(\widehat L\widehat U)_{ij}
=e^{\rm div}_{ij}-\sum_{k<j}e_{ijk}.
$$
These identities define $\Delta A=\widehat L\widehat U-\widehat QPA P^T$. Each entry contains at most $n$ update residuals and at most one division residual. [F1, step 1.2, step 2.1, induction, algebra]

4.1 By steps 1.2–2.1, every residual entry is bounded by [step 1.2, step 2.1, step 3.1, algebra]
$$
n\frac{7u\rho M}{\theta}+u\rho M
\le \frac{8nu}{\theta}\rho M,
$$
since $n\ge1$ and $\theta\le1$. Summing at most $n$ such bounds in any row gives $\|\Delta A\|_\infty\le8n^2u\rho M/\theta$. [step 1.2, step 2.1, step 3.1, algebra]

5.1 The definition of $\Delta A$ in step 3.1 gives the displayed nearby-factorization identity, and step 4.1 gives both residual bounds. The only growth quantity in the estimate is the maximum active-entry magnitude of this executed run. [step 3.1, step 4.1] ∎
