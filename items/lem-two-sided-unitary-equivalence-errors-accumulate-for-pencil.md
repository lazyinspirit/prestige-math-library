---
id: lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil
kind: lemma
title: "Two-sided unitary errors in a matrix pencil accumulate as a backward perturbation pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-unitary-similarity-error-accumulation
  - def-matrix-product-and-identity-matrix
  - def-frobenius-matrix-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §§2.3–3.5"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.8"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Let $n\ge1$, $m\ge0$, $\mathbb F\in\{\mathbb R,\mathbb C\}$, and
$A,B\in\mathbb F^{n\times n}$. Put $A_0=A$, $B_0=B$. For
$j=1,\ldots,m$, suppose exact unitary/orthogonal factors $Q_j,Z_j$ and local
arithmetic/deflation perturbations satisfy
$$A_j=Q_j^*(A_{j-1}+E_j^A+D_j^A)Z_j,$$
$$B_j=Q_j^*(B_{j-1}+E_j^B+D_j^B)Z_j.$$
Then with $Q=Q_1\cdots Q_m$ and $Z=Z_1\cdots Z_m$ (empty products are $I_n$)
there are perturbations
$\Delta_A,\Delta_B$ such that
$$A_m=Q^*(A+\Delta_A)Z,\qquad B_m=Q^*(B+\Delta_B)Z,$$
and
$$\sqrt{\|\Delta_A\|_F^2+\|\Delta_B\|_F^2} \le\sum_{j=1}^m\left( \sqrt{\|E_j^A\|_F^2+\|E_j^B\|_F^2} +\sqrt{\|D_j^A\|_F^2+\|D_j^B\|_F^2}\right).$$

## Facts & Assumptions

**Given:** Finite sequences of square matrices and exact unitary update factors
as in the statement.

[F1] [[lem-unitary-similarity-error-accumulation]]: a sequence
$H_j=P_j^*(H_{j-1}+E_j+D_j)P_j$ with unitary $P_j$ has a global unitary
similarity representation whose Frobenius perturbation is bounded by
$\sum_j(\|E_j\|_F+\|D_j\|_F)$.

[F2] [[def-matrix-product-and-identity-matrix]]: block matrix multiplication
uses the usual row-by-column products.

[F3] [[def-frobenius-matrix-norm]]: the Frobenius norm is the square root of
the sum of squared moduli of all matrix entries.

## Proof

1.1 If $m=0$, take $Q=Z=I_n$ and $\Delta_A=\Delta_B=0$; the equations and bound hold. For $m\ge1$, form the $3n\times3n$ block matrix $M_j=\begin{pmatrix}0&A_j&B_j\\0&0&0\\0&0&0\end{pmatrix}$ and $P_j=\operatorname{diag}(Q_j,Z_j,Z_j)$. Put the local $E_j^A,E_j^B$ in the first block row of $\mathcal E_j$ and the local $D_j^A,D_j^B$ in the first block row of $\mathcal D_j$, with all other blocks zero. Then [F2] and the stated updates give $M_j=P_j^*(M_{j-1}+\mathcal E_j+\mathcal D_j)P_j$. Each $P_j$ is unitary/orthogonal because its diagonal blocks are unitary/orthogonal. [given, F1, F2, construct, algebra]

2.1 For $m\ge1$, apply [F1] to the augmented sequence. Its accumulated perturbation has only the two first-row, off-diagonal blocks, because conjugation by each block diagonal $P_j$ preserves those block positions. Call them $\Delta_A,\Delta_B$. By [F3], $\|\mathcal E_j\|_F=\sqrt{\|E_j^A\|_F^2+\|E_j^B\|_F^2}$ and likewise for $\mathcal D_j$. Therefore the global bound from [F1] is exactly the displayed pair bound, and the accumulated block products are $Q,Z$. [given, F1, F3, step 1.1, algebra] ∎
