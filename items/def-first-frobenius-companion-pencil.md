---
id: def-first-frobenius-companion-pencil
kind: definition
title: "First Frobenius companion pencil of a matrix polynomial"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-matrix-polynomial-and-homogeneous-eigenpairs
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. Steven Mackey, Niloufer Mackey, and Françoise Tisseur, Polynomial Eigenvalue Problems: Theory, Computation, and Structure, §3"
      url: "https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §3.4"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Definition

Let $P(\lambda)=\sum_{j=0}^{m}A_j\lambda^j$ be as in [[def-matrix-polynomial-and-homogeneous-eigenpairs]]. For $m\ge1$, define $mn\times mn$ block matrices $A_c,B_c$ by
$$A_c:=\begin{bmatrix}A_{m-1}&A_{m-2}&\cdots&A_0\\-I_n&0&\cdots&0\\0&-I_n&\ddots&\vdots\\\vdots&\ddots&\ddots&0\\0&\cdots&-I_n&0\end{bmatrix},\qquad B_c:=\begin{bmatrix}-A_m&0&\cdots&0\\0&-I_n&\cdots&0\\\vdots&\ddots&\ddots&\vdots\\0&\cdots&0&-I_n\end{bmatrix}.$$
The **first Frobenius companion pencil** with the sign convention used here is
$$L(\lambda):=A_c-\lambda B_c=\begin{bmatrix}\lambda A_m+A_{m-1}&A_{m-2}&\cdots&A_0\\-I_n&\lambda I_n&\cdots&0\\0&-I_n&\ddots&\vdots\\\vdots&\ddots&\ddots&\lambda I_n\end{bmatrix}.$$
For a vector $x\in\mathbb C^n$ and finite $\lambda$, its **companion lift** is $z(\lambda,x):=(\lambda^{m-1}x,\lambda^{m-2}x,\ldots,\lambda x,x)^T\in\mathbb C^{mn}$; when $m=1$, this is simply $x$.
