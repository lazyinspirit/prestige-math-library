---
id: lem-lbfgs-curvature-bounds-imply-uniform-spectrum
kind: lemma
title: "Fixed-memory L-Bfgs curvature and scale bounds imply uniform spectral bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-lbfgs-two-loop-with-curvature-filter
  - lem-lbfgs-two-loop-equals-stored-updates-and-cost
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - lem-bfgs-trace-determinant-potential-identities
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-characteristic-polynomial-of-an-operator
  - def-characteristic-polynomial-of-a-matrix
  - thm-determinant-of-a-triangular-matrix
  - thm-trace-is-sum-of-eigenvalues
  - thm-determinant-is-product-of-eigenvalues
  - def-trace-of-an-endomorphism
  - def-determinant-of-a-linear-operator
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Dong C. Liu and Jorge Nocedal, On the limited memory BFGS method for large scale optimization"
      url: "https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf"
      locator: "§6, assumptions on correction pairs and initial matrices and the trace/determinant proof of Theorem 6.1, printed pp. 521–524 / PDF pp. 22–25."
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.4, equations (6.42)–(6.51), printed pp. 154–156 / PDF pp. 172–174."
---

## Statement

Fix $n,m\ge1$, constants $0<a\le b<\infty$, $C>0$, and $0<\gamma_{\min}\le\gamma_{\max}<\infty$. Suppose every stored pair in a limited-memory BFGS state satisfies
$$ a\|s_i\|_2^2\le s_i^Ty_i\le b\|s_i\|_2^2, \qquad \frac{\|y_i\|_2^2}{s_i^Ty_i}\le C, $$
and each base scale satisfies $\gamma_{\min}\le\gamma\le\gamma_{\max}$. Then the implicit SPD matrix $H_k$ represented by the two-loop recursion of [[alg-lbfgs-two-loop-with-curvature-filter]] has uniform bounds
$$ \underline\lambda I\preceq H_k\preceq\overline\lambda I, \quad T:=\frac n{\gamma_{\min}}+mC,\quad r:=\min\{1,a/T\},\quad D:=\gamma_{\max}^{-n}r^m, \quad \underline\lambda:=\frac1T,\quad \overline\lambda:=\frac{T^{n-1}}{D}. $$
Here $A\preceq B$ means $z^TAz\le z^TBz$ for all $z$. If the stored list is nonempty, the usual scale $(s_{\rm last}^Ty_{\rm last})/\|y_{\rm last}\|_2^2$ lies in $[1/C,b/a^2]$.

## Facts & Assumptions

**Given:** $n,m,a,b,C,\gamma_{\min},\gamma_{\max}$, the stored-pair bounds, and the L-BFGS state in the Statement.

[F1] [[lem-lbfgs-two-loop-equals-stored-updates-and-cost]]: the implicit matrix is obtained by at most $m$ sequential inverse BFGS updates from $H_0=\gamma I$.

[F2] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: each positive-curvature inverse update preserves positive definiteness and is reciprocal to its Hessian update.

[F3] [[lem-bfgs-trace-determinant-potential-identities]]: for $B=H^{-1}$, one update adds at most $\|y\|_2^2/(s^Ty)$ to $\operatorname{tr}(B)$ and multiplies $\det(B)$ by $(s^Ty)/(s^TBs)$.

[F4] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]] and [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix represents a self-adjoint endomorphism of Euclidean $\mathbb R^n$ and has an orthonormal eigenbasis. If the matrix is SPD, each eigenvalue is positive by evaluating its quadratic form on a unit eigenvector.

[F5] [[alg-lbfgs-two-loop-with-curvature-filter]]: the scale from the newest pair is $(s_{\rm last}^Ty_{\rm last})/(y_{\rm last}^Ty_{\rm last})$.

[F6] [[def-characteristic-polynomial-of-an-operator]], [[def-characteristic-polynomial-of-a-matrix]], and [[thm-determinant-of-a-triangular-matrix]]: in an eigenbasis with diagonal matrix $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$, $\chi_{B_k}(t)=\det(tI-D)=\prod_i(t-\lambda_i)$. [[thm-trace-is-sum-of-eigenvalues]] and [[thm-determinant-is-product-of-eigenvalues]] then give the trace and determinant as $\sum_i\lambda_i$ and $\prod_i\lambda_i$; [[def-trace-of-an-endomorphism]] and [[def-determinant-of-a-linear-operator]] identify these with the represented matrix's trace and determinant. The triangular-determinant rule also gives $\det(\gamma^{-1}I)=\gamma^{-n}$.

## Proof


**Given:** $n,m,a,b,C,\gamma_{\min},\gamma_{\max}$, the stored-pair bounds, and the L-BFGS state in the Statement.

[F1] [[lem-lbfgs-two-loop-equals-stored-updates-and-cost]]: the implicit matrix is obtained by at most $m$ sequential inverse BFGS updates from $H_0=\gamma I$.

[F2] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: each positive-curvature inverse update preserves positive definiteness and is reciprocal to its Hessian update.

[F3] [[lem-bfgs-trace-determinant-potential-identities]]: for $B=H^{-1}$, one update adds at most $\|y\|_2^2/(s^Ty)$ to $\operatorname{tr}(B)$ and multiplies $\det(B)$ by $(s^Ty)/(s^TBs)$.

[F4] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]] and [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix represents a self-adjoint endomorphism of Euclidean $\mathbb R^n$ and has an orthonormal eigenbasis. If the matrix is SPD, each eigenvalue is positive by evaluating its quadratic form on a unit eigenvector.

[F5] [[alg-lbfgs-two-loop-with-curvature-filter]]: the scale from the newest pair is $(s_{\rm last}^Ty_{\rm last})/(y_{\rm last}^Ty_{\rm last})$.

[F6] [[def-characteristic-polynomial-of-an-operator]], [[def-characteristic-polynomial-of-a-matrix]], and [[thm-determinant-of-a-triangular-matrix]]: in an eigenbasis with diagonal matrix $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$, $\chi_{B_k}(t)=\det(tI-D)=\prod_i(t-\lambda_i)$. [[thm-trace-is-sum-of-eigenvalues]] and [[thm-determinant-is-product-of-eigenvalues]] then give the trace and determinant as $\sum_i\lambda_i$ and $\prod_i\lambda_i$; [[def-trace-of-an-endomorphism]] and [[def-determinant-of-a-linear-operator]] identify these with the represented matrix's trace and determinant. The triangular-determinant rule also gives $\det(\gamma^{-1}I)=\gamma^{-n}$.



1.1 Let $B_k:=H_k^{-1}$. By [F1] and [F2], this is an SPD matrix obtained from $B_0=\gamma^{-1}I$ by at most $m$ direct BFGS updates. Its initial trace satisfies $\operatorname{tr}(B_0)=n/\gamma\le n/\gamma_{\min}$. Each update adds at most $C$ to trace by [F3] and the pair bound. Hence $\operatorname{tr}(B_k)\le T$. [given, F1, F2, F3, algebra]

2.1 By [F4], choose an orthonormal eigenbasis for $B_k$ and let its positive eigenvalues be $\lambda_1,\ldots,\lambda_n$. In this basis the characteristic polynomial factors as $\prod_i(t-\lambda_i)$, so [F6] gives $\operatorname{tr}(B_k)=\sum_i\lambda_i$ and $\det(B_k)=\prod_i\lambda_i$. By step 1.1 each $\lambda_i\le T$, and expanding $s$ in this orthonormal basis gives $s^TB_ks\le T\|s\|_2^2$. The determinant ratio in [F3] and the lower pair bound therefore give $$ \frac{\det(B_{k+1})}{\det(B_k)} =\frac{s^Ty}{s^TB_ks}\ge\frac aT\ge r. $$ Since $0<r\le1$ and there are at most $m$ updates, while $\det(B_0)=\gamma^{-n}\ge\gamma_{\max}^{-n}$, it follows that $\det(B_k)\ge D$. [given, F3, F4, F6, step 1.1, algebra]

3.1 Let $\lambda_{\min}(B_k)$ be the smallest eigenvalue. By step 2.1, $\det(B_k)$ is the product of the $n$ positive eigenvalues, and the other $n-1$ eigenvalues are at most $T$. Thus $\lambda_{\min}(B_k)\ge D/T^{n-1}$, while every eigenvalue is at most $T$. The eigenvalues of $H_k=B_k^{-1}$ are the reciprocals, so they lie in $[1/T,T^{n-1}/D]$. The spectral theorem translates these bounds into the asserted quadratic-form inequalities. [F4, F6, step 2.1, algebra]

4.1 If the stored list is nonempty, take its newest pair. For the standard scale, [F5] and the upper curvature bound give $\gamma=(s^Ty)/\|y\|_2^2\le b\|s\|_2^2/\|y\|_2^2$. By Cauchy–Schwarz and the lower curvature bound, $\|s\|_2\|y\|_2\ge s^Ty\ge a\|s\|_2^2$, so $\|y\|_2\ge a\|s\|_2$ and $\gamma\le b/a^2$. The other pair bound gives $\|y\|_2^2/(s^Ty)\le C$, hence $\gamma\ge1/C$. [given, F5, algebra] ∎

