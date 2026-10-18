---
id: def-cur-reconstruction-cores
kind: definition
title: "Skeleton and projected least-squares CUR cores"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
dependency_level: 0
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §§13.1–13.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Nathan Halko, Per-Gunnar Martinsson, and Joel A. Tropp, Finding Structure with Randomness, §3.2.3"
      url: "https://arxiv.org/pdf/0909.4061"
---

## Definition

Let $A\in\mathbb F^{m\times n}$ over $\mathbb F\in\{\mathbb R,\mathbb C\}$ with $m,n\ge1$, and let $I=(i_1,\ldots,i_k)$ and $J=(j_1,\ldots,j_k)$ be ordered lists of distinct row and column indices. For $k=0$, both lists and all selected matrices have zero size, with ordinary empty-matrix multiplication. Define $C=A(:,J)\in\mathbb F^{m\times k}$, $R=A(I,:)\in\mathbb F^{k\times n}$, and the cross matrix $W=A(I,J)\in\mathbb F^{k\times k}$, using the same orders in $I,J,W$.

The **skeleton CUR core** is $U_{\mathrm{skel}}=W^\dagger$ and its reconstruction is $\widehat A_{\mathrm{skel}}=C W^\dagger R$. The **projected least-squares CUR core** is $U_{\mathrm{proj}}=C^\dagger A R^\dagger$ and its reconstruction is
$\widehat A_{\mathrm{proj}}=C(C^\dagger A R^\dagger)R=(CC^\dagger)A(R^\dagger R)$.

For $k=0$, both reconstructions are the zero $m\times n$ matrix.

The Moore-Penrose theorem in the dependencies guarantees that these formulas are single-valued for singular as well as nonsingular $C,R,W$. The two core choices are distinct. The projection residual bound on the A page applies only to $\widehat A_{\mathrm{proj}}$; it is not asserted for the skeleton core $W^\dagger$.
