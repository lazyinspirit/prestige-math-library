---
id: ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth
kind: example
title: "Scalar eigenvalue stability does not control nonnormal matrix growth"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-rkc1-chebyshev
  - def-euclidean-inner-product
  - prop-rkc-stability-intervals-and-stage-degree
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §§1–2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.1"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
---

## Example

Take $A=\begin{pmatrix}-1&4\\0&-1\end{pmatrix}$, $h=1/2$, and one-stage RKC1. Both eigenvalues of $hA$ lie in the scalar stability interval, but the matrix step expands a vector in Euclidean norm.

## Facts & Assumptions

**Given:** The real matrix and step in the Example, the RKC1 polynomial, and the Euclidean norm.

[F1] [[alg-rkc1-chebyshev]]: for $s=1$ the output is $Y_1=y+h f(y)$, so for $f(y)=Ay$ the matrix update is $I+hA$.

[F2] [[prop-rkc-stability-intervals-and-stage-degree]]: the scalar RKC1 stability interval for $s=1$ is $[-2,0]$; its matrix nonexpansion conclusion requires self-adjointness.

[F3] [[def-euclidean-inner-product]]: $\|x\|_2^2=x_1^2+x_2^2$ for $x\in\mathbb R^2$.

## Verification

1.1 The matrix is nonnormal: $AA^{\mathsf T}=\begin{pmatrix}17&-4\\-4&1\end{pmatrix}$ while $A^{\mathsf T}A=\begin{pmatrix}1&-4\\-4&17\end{pmatrix}$. Its two eigenvalues are $-1$, so those of $hA$ are both $-1/2\in[-2,0]$ and the scalar stability factor is $1/2$. [F2, given, algebra]

2.1 The one-stage update is $I+hA=\begin{pmatrix}1/2&2\\0&1/2\end{pmatrix}.$ It sends $e_2=(0,1)$ to $(2,1/2)$, whose Euclidean norm is $\sqrt{17}/2>1=\|e_2\|_2$. Therefore eigenvalue-wise scalar stability does not imply a matrix norm bound here; the self-adjoint hypothesis in [F2] cannot be omitted. [F1, F2, F3, step 1.1, algebra] ∎