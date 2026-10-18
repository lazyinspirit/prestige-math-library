---
id: thm-gauss-newton-local-linear-contraction
kind: theorem
title: "Gauss-Newton contracts linearly under a controlled residual-curvature bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-nonlinear-least-squares-gradient-and-hessian
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-chain-rule-for-total-derivatives
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed pp. 256–257 / PDF pp. 275–276: Theorem 10.1 and the local Gauss–Newton error estimate (10.30), including its hypotheses."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section An actual bound for Gauss-Newton: the full local error derivation from the stationarity condition and Lipschitz Jacobian."
---

## Statement

Let $m,n\ge1$, and let $r:U\to\mathbb R^m$ be $C^2$ on an open $U\subseteq\mathbb R^n$, let
$\phi=\|r\|_2^2/2$, $J=Dr$, $A=J^TJ$, and
$S(x)=\sum_i r_i(x)\nabla^2r_i(x)$. Let $x_*\in U$ satisfy
$J(x_*)^Tr(x_*)=0$, and let the closed ball
$B=\{x:\|x-x_*\|_2\le R\}$ lie in $U$, with $R>0$. Suppose on $B$:

- $J(x)$ has full column rank and smallest singular value at least $\sigma>0$;
- $\|J(x)\|_2\le M$;
- $J$ is $L$-Lipschitz in the Euclidean induced matrix norm;
- $\|S(x)\|_2\le\kappa$.

Define $q=(\kappa+MLR)/\sigma^2$ and assume $q<1$. For the exact full-rank
Gauss-Newton step $p(x)=-A(x)^{-1}J(x)^Tr(x)$, supply an exact reduced QR
factorization of $J(x)$ to the exact branch of
[[alg-gauss-newton-qr-svd-step-with-rank-safeguard]] at each $x\in B$; the
full-column-rank hypothesis guarantees such a factorization. Every $x\in B$ satisfies
$$\|x+p(x)-x_*\|_2\le q\|x-x_*\|_2.$$
Consequently the exact iterates from any $x_0\in B$ stay in $B$ and converge
to $x_*$ at a linear rate no larger than $q$. The curvature hypothesis
controls the residual term $S$; no quadratic rate is claimed when it is
nonzero.

## Facts & Assumptions

**Given:** The residual map, stationary point, ball, and quantitative bounds in the Statement.

[F1] [[thm-nonlinear-least-squares-gradient-and-hessian]]: $\nabla\phi=J^Tr$ and $\nabla^2\phi=J^TJ+S$.

[F2] [[cor-vector-valued-ftc-and-lipschitz-bound]]: for a vector-valued path differentiable on a closed interval with integrable derivative, the endpoint difference is the integral of that derivative.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean matrix norm satisfies $\|Av\|_2\le\|A\|_2\|v\|_2$ and $\|AB\|_2\le\|A\|_2\|B\|_2$.

[F4] [[thm-singular-value-decomposition]] and [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $J=U_1\Sigma V^T$ on its full-column-rank subspace, and orthogonal factors preserve the operator norm.

[F5] [[def-induced-matrix-p-norm]]: the matrix $2$-norm is induced by the Euclidean vector norm.

[F6] [[thm-chain-rule-for-total-derivatives]]: the derivative of the path composition is the derivative of the outer map applied to its tangent.

[F7] [[thm-norm-inequality-for-the-vector-valued-integral]]: the norm of an integrable vector-valued integral is at most the integral of the pointwise norm.

[F8] [[def-euclidean-inner-product]]: the Euclidean norm is induced by the standard dot product and $\|v\|_2^2=v^Tv$.

[A1] $x_*$ is stationary: $J(x_*)^Tr(x_*)=0$.

[A2] The bounds and strict contraction factor $q<1$ hold throughout the stated convex ball.

## Proof

1.1 For each $x\in B$, the SVD [F4] writes $J(x)=U_1\Sigma V^T$ with every diagonal entry of $\Sigma$ at least $\sigma$. Thus $A(x)=V\Sigma^2V^T$ is invertible and $A(x)^{-1}=V\Sigma^{-2}V^T$. By [F4]–[F5], $\|A(x)^{-1}\|_2\le\sigma^{-2}$. [given, A2, F4, F5, F8, algebra]

1.2 Fix $x\in B$, put $e=x-x_*$, and set $x_t=x_*+te$. The path $t\mapsto\nabla\phi(x_t)$ is continuously differentiable; [F1] and [F6] give derivative $(A(x_t)+S(x_t))e$. This derivative is continuous and hence componentwise integrable, so [F2] and [A1] yield $J(x)^Tr(x)=\int_0^1(A(x_t)+S(x_t))e\,dt$. [given, A1, F1, F2, F6, construct]

1.3 For $0\le t\le1$, write $A(x)-A(x_t)=J(x)^T(J(x)-J(x_t))+(J(x)^T-J(x_t)^T)J(x_t)$. An SVD of $J(x)-J(x_t)$ also gives an SVD of its transpose with the same singular values, so [F4] gives $\|J(x)^T-J(x_t)^T\|_2=\|J(x)-J(x_t)\|_2$ and $\|J(x)^T\|_2=\|J(x)\|_2$. The Lipschitz and boundedness hypotheses, with [F3], now give $\|A(x)-A(x_t)\|_2\le2ML(1-t)\|e\|_2$. [given, A2, F3, F4, algebra]

2.1 The exact step satisfies $x+p(x)-x_*=A(x)^{-1}(A(x)e-J(x)^Tr(x))$. Step 1.2 makes the parenthesized term $\int_0^1(A(x)-A(x_t)-S(x_t))e\,dt$. By step 1.3, $\|S(x_t)\|_2\le\kappa$, and [F7] bounds the integral norm by $(ML\|e\|_2+\kappa)\|e\|_2$. Step 1.1 therefore gives $\|x+p(x)-x_*\|_2\le\sigma^{-2}(ML\|e\|_2+\kappa)\|e\|_2\le q\|e\|_2$, since $\|e\|_2\le R$. [step 1.1, step 1.2, step 1.3, A2, F3, F7, F8, algebra]

3.1 Because $q<1$, step 2.1 keeps every iterate in $B$ and gives $\|x_k-x_*\|_2\le q^k\|x_0-x_*\|_2$, which tends to zero. [step 2.1, algebra] ∎
