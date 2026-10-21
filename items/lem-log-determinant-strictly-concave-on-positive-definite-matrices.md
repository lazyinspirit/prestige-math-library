---
id: lem-log-determinant-strictly-concave-on-positive-definite-matrices
kind: lemma
title: "Strict concavity of log determinant on positive-definite matrices"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - thm-determinant-of-a-triangular-matrix
  - def-trace-of-a-square-matrix
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-differential-and-jacobis-formula
  - thm-derivative-of-matrix-inversion
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.1.5, printed p. 74"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

Let $p\ge1$ and let $A_0,A_1\in\mathbb R^{p\times p}$ be symmetric positive-definite matrices. For $0<t<1$ and $A_0\ne A_1$,

$$\log\det((1-t)A_0+tA_1)>(1-t)\log\det A_0+t\log\det A_1.$$

If $A_0=A_1$, equality holds. Thus $A\mapsto\log\det A$ is strictly concave on the positive-definite cone.

## Facts & Assumptions

**Given:** Symmetric positive-definite matrices $A_0,A_1\in\mathbb R^{p\times p}$ with $p\ge1$.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis.

[F2] [[def-determinant-of-a-square-matrix]]: the determinant is the finite signed Leibniz sum; in particular $\det I=1$.

[F3] [[thm-determinant-differential-and-jacobis-formula]]: for invertible $A$, $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$.

[F4] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log'(x)=1/x$.

[F5] [[thm-derivative-of-matrix-inversion]]: on the invertible locus, $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$.

[F6] [[thm-chain-rule-for-total-derivatives]]: derivatives of differentiable compositions are the compositions of the derivatives.

[F7] [[def-trace-of-a-square-matrix]]: $\operatorname{tr}(M)$ is the finite sum of diagonal entries of $M$.

[F8] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, its secant slope equals its derivative at some interior point.

[F9] [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], and [[thm-determinant-of-a-triangular-matrix]]: determinant is multiplicative and transpose-invariant, and on a triangular matrix it is the product of its diagonal entries; in particular, $\det I=1$.

## Proof

1.1 Put $H:=A_1-A_0$ and $A_s:=A_0+sH$ for $0\le s\le1$. For every nonzero $v$, $v^{\mathsf T}A_sv=(1-s)v^{\mathsf T}A_0v+s v^{\mathsf T}A_1v>0$, so each $A_s$ is symmetric positive definite. By [F1], choose an orthogonal eigenbasis $A_s=U\operatorname{diag}(\lambda_1,\ldots,\lambda_p)U^{\mathsf T}$ with every $\lambda_j>0$. The determinant laws [F9], including the triangular formula for the diagonal matrix, give $\det A_s=(\det U)^2\prod_j\lambda_j$ and $(\det U)^2=\det(U^{\mathsf T}U)=\det I=1$, so $\det A_s=\prod_j\lambda_j>0$. Since the determinant is a polynomial by [F2] and $\log$ is differentiable, hence continuous, on $(0,\infty)$ by [F4], $g(s):=\log\det A_s$ is real and continuous on $[0,1]$. [given, F1, F2, F4, F9, algebra]

2.1 On $0<s<1$, Jacobi's formula [F3], the scalar derivative [F4], and the chain rule [F6] give $g'(s)=\operatorname{tr}(A_s^{-1}H)$. [F3, F4, F6, step 1.1, algebra]

3.1 Differentiate the expression in step 2.1 along the same affine path. The inverse derivative [F5] and linearity of the finite trace [F7] give $g''(s)=-\operatorname{tr}(A_s^{-1}H A_s^{-1}H)$. [F5, F6, F7, step 2.1, algebra]

4.1 By [F1], form the symmetric positive-definite inverse square root $A_s^{-1/2}$, and set $B:=A_s^{-1/2}HA_s^{-1/2}$. Since $H$ is symmetric, $B$ is symmetric; if $A_0\ne A_1$, then $H\ne0$ and invertibility of $A_s^{-1/2}$ gives $B\ne0$. Expanding the finite trace sum and interchanging its indices gives $\operatorname{tr}(XY)=\operatorname{tr}(YX)$; applying this identity yields $\operatorname{tr}(A_s^{-1}HA_s^{-1}H)=\operatorname{tr}(B^2)=\sum_{i,j}B_{ij}^2>0$. Thus $g''(s)<0$ for every $0<s<1$. For any $0<a<b<1$, $g'$ is continuous on $[a,b]$ and differentiable on $(a,b)$ because $g$ is twice differentiable on $(0,1)$. By [F8] applied to $g'$, there is $c\in(a,b)$ with $g'(b)-g'(a)=g''(c)(b-a)<0$. Hence $g'$ is strictly decreasing on $(0,1)$. [F1, F7, F8, step 3.1, algebra]

5.1 For $0<t<1$, step 1.1 shows that $g$ is continuous on $[0,1]$ and differentiable on $(0,1)$, so [F8] applies on both $[0,t]$ and $[t,1]$. Their secant slopes are $g'(a)$ and $g'(b)$ for some $a\in(0,t)$ and $b\in(t,1)$. Step 4.1 makes $g'$ strictly decreasing, so the first slope is strictly larger than the second; rearranging yields $g(t)>(1-t)g(0)+tg(1)$. If $A_0=A_1$, the path is constant and equality holds. [given, F8, step 1.1, step 4.1, algebra] ∎
