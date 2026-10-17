---
id: def-phi-functions-by-everywhere-convergent-series
kind: definition
title: "The phi-function family by everywhere-convergent series"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-complex-exponential
  - def-inner-product-norm
  - def-matrix-product-and-identity-matrix
  - def-matrix-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - prop-standard-coordinate-inner-products
  - lem-exponential-series-of-a-bounded-operator
justified_by:
  - lem-phi-series-converges-absolutely
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 2, equation (2.5), printed pp. 490–491."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 2, equations (1)–(2), arXiv v2 full text."
verification:
  precheck: n/a
---

## Definition

Use the first-variable-linear standard inner product on $\mathbb C^n$ and its norm $\|x\|_2=\sqrt{\sum_{i<n}|x_i|^2}$ from [[prop-standard-coordinate-inner-products]] and [[def-inner-product-norm]]. The matrix norm $\|X\|_2$ is the operator norm of the linear map $x\mapsto Xx$ in [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. On $\mathbb C^0=\{0\}$ this operator norm is $0$, as specified in that definition.

For each integer $k\ge0$, define the scalar phi function and its finite-matrix action by

$$\varphi_k(z):=\sum_{j=0}^{\infty}\frac{z^j}{(j+k)!},\qquad \varphi_k(X):=\sum_{j=0}^{\infty}\frac{X^j}{(j+k)!}.$$

Here $z\in\mathbb C$, $X\in M_n(\mathbb C)$, $n\ge0$, $X^0=I_n$, and factorials are the usual positive integer factorials. [[lem-phi-series-converges-absolutely]] establishes that both series converge absolutely for every such input, so these expressions define values on their full stated domains. By the published power-series definition [[def-complex-exponential]], $\varphi_0(z)=\exp z$; for matrices, $\varphi_0(X)$ is the bounded-operator exponential series of [[lem-exponential-series-of-a-bounded-operator]].

At zero, the series gives $\varphi_k(0)=1/k!$ and $\varphi_k(0_{n\times n})=I_n/k!$ for every $n\ge0$. For $n\ge1$, only the $j=0$ matrix term can be nonzero. For $n=0$, [[def-matrix-space]] and [[def-matrix-product-and-identity-matrix]] identify $I_0$ with the unique empty matrix $0_{0\times0}$; every power $X^j$ and every partial sum is that matrix. Thus $\varphi_k(0_{0\times0})=I_0/k!=0_{0\times0}$, including $k=0$.

The recurrence is always interpreted as a series identity, including at zero; division by $z$ is not part of this definition.
