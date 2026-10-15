---
id: thm-second-order-response-surface-stationary-point-and-classification
kind: theorem
title: "Stationary point and classification of a nonsingular quadratic response surface"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-local-response-surface-model
  - prop-standard-coordinate-inner-products
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 19, §§19.5–19.7"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

Let $m(x)=\beta_0+x^{\mathsf T}\beta+x^{\mathsf T}Bx$ be the second-order response-surface model from [[def-local-response-surface-model]] on a declared region $\mathcal R\subseteq\mathbb R^k$, with $B=B^{\mathsf T}$ nonsingular. The polynomial on $\mathbb R^k$ has the unique stationary point $x_0=-\tfrac12B^{-1}\beta$. If every eigenvalue of $B$ is positive, $x_0$ is a strict global minimum of this polynomial; if every eigenvalue is negative, it is a strict global maximum; if both signs occur, it is a saddle. When $x_0\in\operatorname{int}(\mathcal R)$ the same local classification applies within the fitted region. Whenever $x_0\in\mathcal R$, a strict ambient minimum or maximum is also a strict global constrained minimum or maximum on $\mathcal R$, even at a boundary point. A saddle at a boundary point need not retain its classification within $\mathcal R$; if $x_0\notin\mathcal R$, it is not a feasible candidate for constrained optimization.

## Facts & Assumptions

**Given:** $k\ge1$, a declared region $\mathcal R$, $\beta_0\in\mathbb R$, $\beta\in\mathbb R^k$, a symmetric nonsingular $B\in\mathbb R^{k\times k}$, and the polynomial $m$ in the Statement.

[F1] [[def-local-response-surface-model]]: a second-order response-surface model is $m(x)=\beta_0+x^{\mathsf T}\beta+x^{\mathsf T}Bx$ with $B$ symmetric, and its interpretation is confined to the declared factor region.

[F2] [[prop-standard-coordinate-inner-products]]: the real coordinate pairing is $\langle x,y\rangle=\sum_{i<k}x_i y_i$.

[F3] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]: in an orthonormal basis over $\mathbb R$, an operator is self-adjoint if and only if its matrix is symmetric.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

## Proof

**Proof technique:** compute the differential and diagonalize the quadratic part.

1.1 For any $x,h\in\mathbb R^k$, symmetry of $B$ gives $m(x+h)-m(x)=h^{\mathsf T}(\beta+2Bx)+h^{\mathsf T}Bh$. The second term is bounded in absolute value by a constant times $\|h\|^2$, so the differential at $x$ is $h\mapsto h^{\mathsf T}(\beta+2Bx)$; hence $x$ is stationary exactly when $\beta+2Bx=0$. [given, F1, algebra]

2.1 Since $B$ is nonsingular, this equation has the unique solution $x_0=-\tfrac12B^{-1}\beta$. [given, step 1.1, algebra]

3.1 At this point, for every $h$, $m(x_0+h)-m(x_0)=h^{\mathsf T}Bh$. Regard $B$ as an operator on $\mathbb R^k$ with the real coordinate inner product [F2], for which the standard basis is orthonormal. By [F3] it is self-adjoint, so [F4] supplies an orthonormal eigenbasis $v_1,\ldots,v_k$ with real eigenvalues $\lambda_i$; none is zero because $B$ is nonsingular. Writing $h=\sum_i z_i v_i$ yields $h^{\mathsf T}Bh=\sum_i\lambda_i z_i^2$. [given, F2, F3, F4, step 2.1, algebra]

4.1 If all $\lambda_i>0$, the increment in step 3.1 is positive for every nonzero $h$, and if all $\lambda_i<0$ it is negative for every nonzero $h$. If both signs occur, choosing $h$ along a positive-eigenvalue vector or a negative-eigenvalue vector gives increments of opposite signs, so $x_0$ is a saddle. The exact quadratic identity makes the first two classifications global for the polynomial on $\mathbb R^k$. [step 3.1, choose, algebra]

5.1 If $x_0$ lies in the interior of $\mathcal R$, sufficiently small perturbations in every direction remain in $\mathcal R$, so step 4.1 also gives the local classification there. Whenever $x_0\in\mathcal R$, the strict global inequalities in the definite cases of step 4.1 hold for every $x\in\mathcal R\setminus\{x_0\}$, proving strict constrained optimality even at the boundary. A boundary saddle need not persist: $m(x_1,x_2)=x_1^2-x_2^2$ has an ambient saddle at $0$, but its restriction to $\mathcal R=\{(t,0):t\in\mathbb R\}$ has a strict minimum there. If $x_0\notin\mathcal R$, it is infeasible. [given, step 4.1, algebra] ∎

## Remarks

The theorem classifies the polynomial for its supplied coefficients. It does not establish that the polynomial is an adequate model of the physical response, and it does not quantify sampling uncertainty in an estimated stationary point.
