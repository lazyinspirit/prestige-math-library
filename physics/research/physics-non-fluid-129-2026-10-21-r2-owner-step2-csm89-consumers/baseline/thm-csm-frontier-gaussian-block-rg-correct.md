---
id: thm-csm-frontier-gaussian-block-rg-correct
kind: theorem
title: Correctness of finite Gaussian block elimination
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps:
  - alg-csm-frontier-gaussian-block-rg
  - def-csm-frontier-finite-gaussian-precision
  - thm-csm-examples-quadratic-covariance
  - lem-csm-frontier-schur-complement-positive
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-natural-logarithm-laws
  - thm-complex-exponential-addition-and-real-extension
dependency_roles:
  alg-csm-frontier-gaussian-block-rg: mathematical-premise
  def-csm-frontier-finite-gaussian-precision: mathematical-premise
  thm-csm-examples-quadratic-covariance: mathematical-premise
  lem-csm-frontier-schur-complement-positive: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §3.2, printed pp. 63–69 / PDF pp. 67–73, Gaussian integration over eliminated modes and the resulting effective action.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §§8.2–8.4, printed pp. 385–395, finite Gaussian normalization and Green-kernel covariance.
    - title: MIT OpenCourseWare, 2.154 Maneuvering and Control, lecture notes
      url: https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf
      locator: §§25.1.4–25.1.5, printed pp. 135–136 / PDF pp. 141–142, completion-of-square and Schur-complement positivity.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and the hypotheses of [[alg-csm-frontier-gaussian-block-rg]] with input $K_0$ and retained sets $R_0,\ldots,R_q$. Let $K_j,C_j,\ell_j$ be the algorithm outputs. At each stage write $E_j=R_{j-1}\setminus R_j$, and use the empty-set conventions of the algorithm. Then the algorithm terminates after $q$ stages, every nonempty retained precision $K_j$ is positive definite, and for every fixed retained vector $x\in\mathbb R^{R_q}$,

$$\int_{\mathbb R^{\bigcup_{j=1}^q E_j}}\exp\!\left(-\frac12 \widetilde z(x,y)^{\mathsf T}K_0\widetilde z(x,y)\right)\,d\lambda(y) =\exp\!\left(\sum_{j=1}^q\ell_j\right)\exp\!\left(-\frac12x^{\mathsf T}K_qx\right),$$

where $y$ lists the eliminated coordinates in increasing order, $\widetilde z(x,y)\in\mathbb R^{R_0}$ is the unique full coordinate vector agreeing with $x$ on $R_q$ and with $y$ on $R_0\setminus R_q$, and $\lambda$ is Euclidean Lebesgue measure in that finite-dimensional space. If $R_q\ne\varnothing$, the normalized marginal law of the retained coordinates under $\gamma_{K_0}$ is exactly $\gamma_{K_q}$; if $R_q=\varnothing$, the final retained space is the singleton $\mathbb R^0$ and the identity gives $Z_{K_0}=\exp(\sum_j\ell_j)$. In all cases,

$$\ln Z_{K_0}=\sum_{j=1}^q\ell_j+\ln Z_{K_q},$$

with $Z_{K_q}=1$ under the empty-space convention. These are exact finite-dimensional Gaussian identities and make no approximation or empirical claim.

## Statement references

[[alg-csm-frontier-gaussian-block-rg]]

[[def-csm-frontier-finite-gaussian-precision]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite symmetric positive-definite $K_0$, and a finite nested retained-coordinate list as in the algorithm.

[F1] For a positive-definite precision matrix $K$ on $\mathbb R^n$ with $n\ge1$, the density proportional to $e^{-z^{\mathsf T}Kz/2}$ has normalizer $(2\pi)^{n/2}(\det K)^{-1/2}$; the empty-space normalizer is $1$ by definition ([[thm-csm-examples-quadratic-covariance]], [[def-csm-frontier-finite-gaussian-precision]]).

[F2] Completing the square gives the Schur-complement identity, and for a nonempty retained block its Schur complement is positive definite ([[lem-csm-frontier-schur-complement-positive]]).

[F3] Under $\mathrm{AC}_\omega$, the nonnegative Lebesgue integral is defined for nonnegative measurable functions, obeys the change-of-variables formula for a $C^1$ diffeomorphism, and Tonelli identifies it with either iterated integral on finite-dimensional Lebesgue product spaces ([[def-countable-choice]], [[def-nonnegative-lebesgue-integral]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] The natural logarithm sends positive products to sums and $\exp(a+b)=\exp(a)\exp(b)$ ([[thm-natural-logarithm-laws]], [[thm-complex-exponential-addition-and-real-extension]]).

## Proof

1.1 Initially $K_0$ is positive definite. At any later stage with nonempty $E_j$, the current $K_{j-1}$ is positive definite by induction, so its principal block $C_j$ is positive definite. The Schur identity in [F2] then gives exactly the algorithm's $K_j=A_j-B_jC_j^{-1}B_j^{\mathsf T}$ and proves it positive definite when $R_j$ is nonempty. If $R_j$ is empty, the empty-matrix convention applies. Stages with $E_j=\varnothing$ leave $K_j=K_{j-1}$. The algorithm is consequently well-defined at every one of its finitely many stages. [given, F2, algebra]

2.1 Fix one stage with $E_j\ne\varnothing$ and fix its retained coordinates $x$. By step 1.1 the current matrix is well-defined and positive definite. Reordering the coordinates is a linear permutation with Jacobian determinant of absolute value $1$, so the change-of-variables formula in [F3] preserves the integral. With eliminated coordinates denoted by $y$, [F2] gives
$$\begin{pmatrix}x\\y\end{pmatrix}^{\mathsf T}K_{j-1}\begin{pmatrix}x\\y\end{pmatrix} =x^{\mathsf T}K_jx+(y+C_j^{-1}B_j^{\mathsf T}x)^{\mathsf T}C_j(y+C_j^{-1}B_j^{\mathsf T}x).$$
For fixed $x$, the translation $y\mapsto y+C_j^{-1}B_j^{\mathsf T}x$ is a $C^1$ diffeomorphism of Euclidean space with Jacobian $1$. The change-of-variables formula [F3] and the Gaussian normalizer [F1] therefore give
$$\int_{\mathbb R^{E_j}}e^{-\frac12(x,y)^{\mathsf T}K_{j-1}(x,y)}\,dy =\frac{(2\pi)^{|E_j|/2}}{\sqrt{\det C_j}}e^{-\frac12x^{\mathsf T}K_jx} =e^{\ell_j}e^{-\frac12x^{\mathsf T}K_jx}.$$
The last equality follows from the definition of $\ell_j$ and positivity of $\det C_j$. If $E_j=\varnothing$, the same identity holds with factor $1=e^{\ell_j}$ by definition. [F1, F2, F3, step 1.1, algebra]

3.1 Apply step 2.1 successively for the finite stages. At each stage the integrand is nonnegative, so Tonelli [F3] permits the iterated eliminations in the stated order. Multiplying the one-stage factors yields, for each fixed final retained vector $x$,
$$\int_{\mathbb R^{\bigcup_j E_j}}e^{-\frac12\widetilde z(x,y)^{\mathsf T}K_0\widetilde z(x,y)}\,dy =\left(\prod_{j=1}^qe^{\ell_j}\right)e^{-\frac12x^{\mathsf T}K_qx} =e^{\sum_j\ell_j}e^{-\frac12x^{\mathsf T}K_qx},$$
using exponential addition in [F4]. For $q=0$ the equality is the identity with an empty product. [F3, F4, step 2.1, algebra]

4.1 Integrating step 3.1 over the retained vector and using Tonelli [F3] gives $Z_{K_0}=e^{\sum_j\ell_j}Z_{K_q}$. Each nonempty $K_q$ is positive definite by step 1.1, so [F1] makes $Z_{K_q}$ finite and positive; for empty $R_q$ it equals $1$ by convention. Dividing step 3.1 by $Z_{K_0}$ gives the retained density $Z_{K_q}^{-1}e^{-x^{\mathsf T}K_qx/2}$, exactly $\gamma_{K_q}$. Taking natural logarithms of the positive normalizer identity and using [F4] proves the logarithmic formula, including the empty-space case. [F1, F3, F4, step 1.1, step 3.1, algebra] ∎
