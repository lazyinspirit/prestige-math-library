---
id: thm-cur-projection-residual-bound
kind: theorem
title: "Projected CUR has a two-sided Frobenius residual bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-cur-reconstruction-cores
  - lem-moore-penrose-products-are-orthogonal-projectors
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §13.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Nathan Halko, Per-Gunnar Martinsson, and Joel A. Tropp, Finding Structure with Randomness, §3.2.3"
      url: "https://arxiv.org/pdf/0909.4061"
---

## Statement

Let $m,n\ge1$, $A\in\mathbb F^{m\times n}$, and choose an integer $0\le k\le\min(m,n)$ and ordered lists $I,J$ of $k$ distinct valid row and column indices, respectively. Set $C=A(:,J)$ and $R=A(I,:)$ as in [[def-cur-reconstruction-cores]], and define $P_C=CC^\dagger$ and $P_R=R^\dagger R$. The projected least-squares CUR approximation is $\widehat A_{\mathrm{proj}}=C(C^\dagger A R^\dagger)R=P_CAP_R$. With $\|X\|_F=(\sum_{i,j}|X_{ij}|^2)^{1/2}$,

$$\|A-\widehat A_{\mathrm{proj}}\|_F\le\|(I_m-P_C)A\|_F+\|A(I_n-P_R)\|_F.$$

This bound is for the projected least-squares core only; it is not asserted for the skeleton core $W^\dagger$.

## Facts & Assumptions

**Given:** A finite real or complex matrix $A$, selected matrices $C,R$, and their unique Moore-Penrose inverses.

[F1] [[def-cur-reconstruction-cores]]: the projected core is $C^\dagger A R^\dagger$ and its reconstruction is $(CC^\dagger)A(R^\dagger R)$.

[F2] [[lem-moore-penrose-products-are-orthogonal-projectors]]: $CC^\dagger$ and $R^\dagger R$ are orthogonal projections.
 
## Proof

1.1 Put $P_C=CC^\dagger$ and $P_R=R^\dagger R$. By [F1], $\widehat A_{\mathrm{proj}}=P_CAP_R$, and [F2] makes both factors orthogonal projections. [F1, F2, given]

2.1 Algebra gives $A-P_CAP_R=(I_m-P_C)A+P_CA(I_n-P_R)$. [step 1.1, algebra]

3.1 For an orthogonal projection $P$ and each column vector $x$, the decomposition $x=Px+(I-P)x$ is orthogonal, so $\|Px\|_2\le\|x\|_2$. Summing squared column norms gives $\|PY\|_F\le\|Y\|_F$ for every compatible matrix $Y$. The Frobenius norm is the Euclidean norm of the entries, so its triangle inequality applied to step 2.1 and this contraction with $P=P_C$, $Y=A(I_n-P_R)$ gives the asserted bound. [step 1.1, step 2.1, algebra] ∎
