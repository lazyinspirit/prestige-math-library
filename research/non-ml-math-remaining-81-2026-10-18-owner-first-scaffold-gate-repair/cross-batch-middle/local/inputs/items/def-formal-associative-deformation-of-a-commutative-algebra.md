---
id: def-formal-associative-deformation-of-a-commutative-algebra
kind: definition
title: Coefficientwise formal associative deformations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-formal-power-series-and-coefficient-extraction
  - def-formal-order-and-x-adic-topology
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 5, §5.1, Definition 5.1.2 and formula (5.1.4)
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.1, star-products (PDF pp. 1–2)
verification:
  precheck: n/a
---

## Definition

Let $A$ be a commutative unital algebra over $\mathbb R$, with
multiplication $m(f,g)=fg$. Write $A\llbracket\hbar\rrbracket$ for the real formal
power-series module with coefficients in $A$; its underlying coefficient
and Cauchy-product conventions are those of
[[def-formal-power-series-and-coefficient-extraction]]. The $\hbar$-adic
topology is the coefficient-prefix topology of
[[def-formal-order-and-x-adic-topology]]: two series are close modulo
$\hbar^N$ when their coefficients agree in degrees below $N$.

A **formal associative deformation** of $A$ is specified by real-bilinear
maps $B_r:A\times A\to A$ for $r\geq 1$, with $B_0:=m$, and the
product
$$\left(\sum_{i\geq0}\hbar^if_i\right)\star \left(\sum_{j\geq0}\hbar^jg_j\right) =\sum_{N\geq0}\hbar^N\sum_{\substack{i,j,r\geq0\\i+j+r=N}}B_r(f_i,g_j).$$
For each fixed $N$ the inner sum is finite, so this formula defines a
coefficientwise-continuous, $\mathbb R\llbracket\hbar\rrbracket$-bilinear product. It is
required to be associative and unital with unit $1$; equivalently,
$B_r(1,f)=B_r(f,1)=0$ for $r\geq1$. Reduction modulo $\hbar$ is the
original product $m$.

This definition alone asserts no differential-order condition, no specified
first-order bracket, no convergence at a numerical value of $\hbar$, and no
existence or classification theorem.
