---
id: lem-qsm-matrix-exponential-response
kind: lemma
title: Duhamel derivative and finite Kubo–Mori response
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Zhang Jiang, Quantum Fisher information for states in exponential form, arXiv:1310.2687v3, §II, equations (2.1)–(2.14)
      url: https://arxiv.org/pdf/1310.2687
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

The path convention is $D\geq1$, an open interval $I\subseteq\mathbb R$, and a continuously differentiable map $M:I\to\operatorname{Herm}(D)$, where $\operatorname{Herm}(D)$ is the real vector space of Hermitian $D\times D$ matrices. For the control convention, $m\geq1$, $\theta\in\mathbb R^m$, and $M(\theta)=M_0+\sum_{a=1}^m\theta_aX_a$ with Hermitian matrices $M_0,X_1,\ldots,X_m$. At each control value let $Z=\operatorname{Tr}e^M$ and $\rho=e^M/Z$. For Hermitian $X$, define
$$\langle X\rangle_\rho:=\operatorname{Tr}(\rho X),\qquad \operatorname{Var}_\rho(X):=\operatorname{Tr}(\rho(X-\langle X\rangle_\rho I)^2).$$
For Hermitian $X,Y$, put $\delta X:=X-\langle X\rangle_\rho I$ and $\delta Y:=Y-\langle Y\rangle_\rho I$, and define the Kubo--Mori covariance by
$$\operatorname{Cov}_{KM,\rho}(X,Y):=\int_0^1\operatorname{Tr}(\rho^{1-u}\delta X\rho^u\delta Y)\,du.$$
For the static-control clause, take $H_0,B\in\operatorname{Herm}(D)$, $h\in\mathbb R$, $\beta>0$, and $H(h):=H_0-hB$.

Let $M(s)$ be a continuously differentiable path of Hermitian $D\times D$ matrices, $D\geq1$. Then
$
\frac{d}{ds}e^{M(s)}=\int_0^1 e^{(1-u)M(s)}M'(s)e^{uM(s)}\,du,\qquad
\frac{d}{ds}\log\operatorname{Tr}e^{M(s)}=\operatorname{Tr}(\rho_sM'(s)),
$
where $\rho_s=e^{M(s)}/\operatorname{Tr}e^{M(s)}$. For real controls $M(\theta)=M_0+\sum_a\theta_aX_a$ with Hermitian $X_a$,
$
\partial_a\log Z=\operatorname{Tr}(\rho X_a),\qquad
\partial_a\partial_b\log Z=\int_0^1\operatorname{Tr}(\rho^{1-u}\delta X_a\rho^u\delta X_b)\,du,
$
where $Z=\operatorname{Tr}e^M$, $\delta X_a=X_a-\operatorname{Tr}(\rho X_a)I$. The diagonal quadratic form of this Hessian is nonnegative. It equals the ordinary variance when $X_a$ commutes with $\rho$, and in general is bounded above by that variance. For $H(h)=H_0-hB$, $\beta>0$, and Hermitian $B$, the static susceptibility satisfies $\partial_h\operatorname{Tr}(\rho_hB)=\beta\,\operatorname{Cov}_{KM,\rho_h}(B,B)\geq0$. No infinite-dimensional or dynamical response is asserted.

More precisely, for every positive definite $\rho=e^M/\operatorname{Tr}e^M$ and Hermitian $X$, equality between the diagonal Kubo--Mori quadratic form and $\operatorname{Var}_\rho(X)$ holds if and only if $X\rho=\rho X$.
$
\frac{d}{dh}\langle B\rangle_{\rho_h}=\beta\,\operatorname{Cov}_{KM,\rho_h}(B,B)\geq0,
\qquad \rho_h:=\frac{e^{-\beta H(h)}}{\operatorname{Tr}e^{-\beta H(h)}}.
$
No infinite-dimensional or dynamical response is asserted.

## Facts & Assumptions

**Given:** $D\geq1$, an open interval $I$, a continuously differentiable Hermitian-matrix path $M:I\to\operatorname{Herm}(D)$, $m\geq1$ real parameters $\theta\in\mathbb R^m$, Hermitian $M_0,X_1,\ldots,X_m,H_0,B$, real $h\in\mathbb R$, and $\beta>0$.

[F1] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have basis-independent functional calculus, an orthonormal eigenbasis, and the stated density trace pairing.

## Proof

1.1 On a compact interval of $s$, the matrix norms of $M(s)$ and $M'(s)$ are bounded. The exponential power series and its differentiated series converge uniformly there, since the derivative of $M^n$ is $\sum_{j=0}^{n-1}M^jM'M^{n-1-j}$, whose norm is at most $n\|M\|^{n-1}\|M'\|$. Expanding both exponentials in the integral, integrating term by term, and using $\int_0^1(1-u)^ju^k\,du=j!k!/(j+k+1)!$ (obtained by integration by parts) gives the same differentiated series. This proves the Duhamel formula. [given, algebra]

2.1 For finite matrices $C,D$, $\operatorname{Tr}(CD)=\sum_{i,j}C_{ij}D_{ji}=\operatorname{Tr}(DC)$ by interchanging finite indices. Take the trace in step 1.1. This cyclicity makes every integrand trace equal to $\operatorname{Tr}(e^M M')$. Since $Z=\operatorname{Tr}e^M>0$, the scalar chain rule gives $(\log Z)'=\operatorname{Tr}(e^MM')/Z=\operatorname{Tr}(\rho M')$. Setting $M'=X_a$ proves the first control derivative. [step 1.1, F1, algebra]

3.1 Differentiate $\operatorname{Tr}(\rho X_b)$ in the $X_a$ direction using step 1.1 and the quotient rule. The result is $ \int_0^1\operatorname{Tr}(\rho^{1-u}X_a\rho^uX_b)\,du -\operatorname{Tr}(\rho X_a)\operatorname{Tr}(\rho X_b). $ Because $\rho^{1-u}\rho^u=\rho$, cyclicity shows that replacing each $X$ by its centered version $\delta X$ changes the integral by exactly the subtracted product, giving the stated Hessian. [step 1.1, step 2.1, F1, algebra]

4.1 Diagonalize the positive definite $\rho$ with eigenvalues $p_i>0$. For Hermitian $X$, the quadratic form equals $\sum_{i,j}|\delta X_{ij}|^2L(p_i,p_j)$, where $L(a,b)=\int_0^1a^{1-u}b^u\,du>0$. Thus it is real and nonnegative. For $a\ne b$, direct integration gives $L(a,b)=(a-b)/(\log a-\log b)$, and $L(a,a)=a$. Concavity of $\log$ gives $(1-u)\log a+u\log b\leq\log((1-u)a+ub)$, strictly when $a\ne b$ and $0<u<1$. Exponentiating and integrating yields $L(a,b)\leq(a+b)/2$, strictly when $a\ne b$. Substituting the matrix entries yields the upper bound by $\operatorname{Tr}(\rho(\delta X)^2)=\operatorname{Var}_\rho(X)$. If $X$ commutes with $\rho$, its entries between distinct eigenspaces vanish, so equality holds. Conversely, if $X$ does not commute with $\rho$, some $\delta X_{ij}\ne0$ has $p_i\ne p_j$; its term is strictly below the arithmetic-mean bound while every other term is at most that bound, so the total inequality is strict. Thus equality holds exactly in the commuting case. [step 3.1, F1, algebra]

5.1 For $H(h)=H_0-hB$, put $M=-\beta H(h)$. Then $M'=\beta B$, so step 3.1 gives $\partial_h\operatorname{Tr}(\rho_hB)=\beta\operatorname{Cov}_{KM,\rho_h}(B,B)\geq0$. Since $E\mapsto e^{-\beta E}/Z(h)$ is injective on the real eigenvalues of $H(h)$, $H(h)$ and $\rho_h$ have the same eigenspaces; hence $[H(h),B]=0$ if and only if $[\rho_h,B]=0$. Step 4.1 therefore gives equality with $\beta\operatorname{Var}_{\rho_h}(B)$ exactly in the commuting case, and strict inequality otherwise. No ordinary-variance identity is inferred without this condition. [step 2.1, step 3.1, step 4.1, algebra] ∎
