---
id: lem-csm-frontier-massless-torus-normalization-diverges
kind: lemma
title: Unconstrained massless periodic Gaussian has infinite normalizer
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-csm-frontier-periodic-laplacian-spectrum
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
dependency_roles:
  lem-csm-frontier-periodic-laplacian-spectrum: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Uses the Axiom of Countable Choice through the cited nonnegative change-of-variables theorem."
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.1, printed pp. 41–43 / PDF pp. 44–46, finite-dimensional Gaussian integration and normalization conventions.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §8.1, printed pp. 380–382, Remark 8.2 and Exercise 8.2 on zero modes and massless free or periodic boundary conditions.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $d,L\ge1$ be integers, let $\Lambda_{d,L}=(\mathbb Z/L\mathbb Z)^d$ have $N=L^d$ sites, and let $\kappa>0$. Define the zero-mass precision $K:=\kappa(-\Delta)$ on $\mathbb R^{\Lambda_{d,L}}$, with the periodic Laplacian convention of [[lem-csm-frontier-periodic-laplacian-spectrum]]. Then the unrestricted Lebesgue normalizer diverges:

$$\int_{\mathbb R^{\Lambda_{d,L}}}\exp\!\left(-\frac12z^{\mathsf T}Kz\right)\,d\lambda_N(z)=+\infty.$$

Thus this quadratic weight does not define a probability density on the full coordinate space. A finite-volume massless Gaussian must first restrict the field, for example to $\{z:\sum_{x\in\Lambda_{d,L}}z_x=0\}$, before inverting the Laplacian.

## Statement references

[[lem-csm-frontier-periodic-laplacian-spectrum]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, integers $d,L\ge1$, the periodic site set $\Lambda_{d,L}$ with $N=L^d$, and $\kappa>0$.

[F1] The periodic operator $-\Delta$ is real symmetric and annihilates the constant vector $\mathbf1$; the $r=0$ function $\chi_0(x)=1$ for every $x$ is that constant vector ([[lem-csm-frontier-periodic-laplacian-spectrum]]).

[F2] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by its absolute Jacobian ([[def-countable-choice]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] Euclidean Lebesgue measure is the product of its coordinate measures on Borel rectangles; the coordinate measures are sigma-finite, and Tonelli identifies the integral of a nonnegative measurable function with its iterated integral ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-nonnegative-lebesgue-integral]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] Boxes have their side-length product as Lebesgue measure, and increasing nonnegative functions pass to their limit under the integral ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-monotone-convergence-for-the-integral]]).

[F5] The nonnegative Lebesgue integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

1.1 By [F1], $K\mathbf1=0$ and $K$ is symmetric. Hence the quadratic form is unchanged by adding any constant multiple of $\mathbf1$: for every $z$ and $t\in\mathbb R$, $(z+t\mathbf1)^{\mathsf T}K(z+t\mathbf1)=z^{\mathsf T}Kz$. [given, F1, algebra]

2.1 If $N=1$, then $K=0$ by step 1.1, and the integrand is identically $1$ on $\mathbb R$. Its integral is infinite because the intervals $[-M,M]$ have measure $2M$ for every integer $M\ge1$ by [F4], and [F5] bounds the full integral below by each of these unbounded values. [given, F4, F5, step 1.1, algebra]

2.2 Suppose $N\ge2$ and enumerate the lattice sites as $x_1,\ldots,x_N$. Define the linear map $T:\mathbb R^{N-1}\times\mathbb R\to\mathbb R^N$ by $T(w,t)=(w_1+t,\ldots,w_{N-1}+t,t)$. Its matrix is triangular with all diagonal entries $1$, so it is a $C^1$ diffeomorphism with determinant $1$. For $\widetilde w=(w_1,\ldots,w_{N-1},0)$, one has $T(w,t)=\widetilde w+t\mathbf1$. By step 1.1, $T(w,t)^{\mathsf T}KT(w,t)=\widetilde w^{\mathsf T}K\widetilde w$, which is independent of $t$. Applying [F2] changes the original integral to
$$\int_{\mathbb R^{N-1}\times\mathbb R}f(w)\,d\lambda_N(w,t),\qquad f(w):=\exp\!\left(-\frac12\widetilde w^{\mathsf T}K\widetilde w\right).$$
[given, F2, step 1.1, algebra]

3.1 The function $f$ is continuous and positive. On $[-1,1]^{N-1}$, $|\widetilde w^{\mathsf T}K\widetilde w|\le M$, where $M:=\sum_{i,j=1}^{N-1}|K_{ij}|<\infty$; hence $f(w)\ge e^{-M/2}$ there. By [F4] and [F5], $\int_{\mathbb R^{N-1}}f(w)\,d\lambda_{N-1}(w)\ge2^{N-1}e^{-M/2}>0$. By [F3], Tonelli factors the nonnegative integral in step 2.2 as $\int f(w)\,dw\int_{\mathbb R}1\,dt$. The second factor is infinite because each interval $[-M',M']$ has measure $2M'$ for integer $M'\ge1$ by [F4], and [F5] bounds the full-line integral below by each such value. Thus the original normalizer is infinite, proving the claim. [F3, F4, F5, step 2.2, algebra] ∎
