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

## Facts & Assumptions

**Given:** Finite-dimensional complex matrices, real control parameters, Hermitian $M_0,X_a,H_0,B$, and $\beta>0$.

[F1] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have basis-independent functional calculus, cyclic trace, and a positive eigenbasis.

## Proof

1.1 On a compact interval of $s$, the matrix norms of $M(s)$ and $M'(s)$ are bounded. The exponential power series and its differentiated series converge uniformly there, since the derivative of $M^n$ is $\sum_{j=0}^{n-1}M^jM'M^{n-1-j}$, whose norm is at most $n\|M\|^{n-1}\|M'\|$. Expanding both exponentials in the integral, integrating term by term, and using $\int_0^1(1-u)^ju^k\,du=j!k!/(j+k+1)!$ (obtained by integration by parts) gives the same differentiated series. This proves the Duhamel formula. [given, algebra]

2.1 Take the trace in step 1.1. Cyclicity from [F1] makes every integrand trace equal to $\operatorname{Tr}(e^M M')$. Since $Z=\operatorname{Tr}e^M>0$, the scalar chain rule gives $(\log Z)'=\operatorname{Tr}(e^MM')/Z=\operatorname{Tr}(\rho M')$. Setting $M'=X_a$ proves the first control derivative. [step 1.1, F1, algebra]

3.1 Differentiate $\operatorname{Tr}(\rho X_b)$ in the $X_a$ direction using step 1.1 and the quotient rule. The result is $ \int_0^1\operatorname{Tr}(\rho^{1-u}X_a\rho^uX_b)\,du -\operatorname{Tr}(\rho X_a)\operatorname{Tr}(\rho X_b). $ Because $\rho^{1-u}\rho^u=\rho$, cyclicity shows that replacing each $X$ by its centered version $\delta X$ changes the integral by exactly the subtracted product, giving the stated Hessian. [step 1.1, step 2.1, F1, algebra]

4.1 Diagonalize the positive definite $\rho$ with eigenvalues $p_i>0$. For Hermitian $X$, the quadratic form equals $\sum_{i,j}|\delta X_{ij}|^2L(p_i,p_j)$, where $L(a,b)=\int_0^1a^{1-u}b^u\,du>0$. Thus it is real and nonnegative. For $a\ne b$, direct integration gives $L(a,b)=(a-b)/(\log a-\log b)$, and $L(a,a)=a$. Since $(\log x)''=-1/x^2<0$, concavity of $\log$ gives $(1-u)\log a+u\log b\leq\log((1-u)a+ub)$; exponentiating and integrating yields $L(a,b)\leq(a+b)/2$. Substituting the matrix entries yields the upper bound by $\operatorname{Tr}(\rho(\delta X)^2)$, the variance. If $X$ commutes with $\rho$, its entries between distinct eigenspaces vanish, so $L(p_i,p_i)=p_i$ on every remaining term and equality holds. [step 3.1, F1, algebra]

5.1 For $H(h)=H_0-hB$, put $M=-\beta H(h)$. Then $M'=\beta B$, so step 3.1 gives $\partial_h\operatorname{Tr}(\rho_hB)=\beta\operatorname{Cov}_{KM,\rho_h}(B,B)\geq0$. If $[H(h),B]=0$, then $B$ commutes with $\rho_h$, and step 4.1 gives $\beta\operatorname{Var}_{\rho_h}(B)$. The same calculation with $F=-\beta^{-1}\log Z$ gives the corresponding finite free-energy derivatives; no commutation is silently assumed for the Kubo–Mori formula. [step 2.1, step 3.1, step 4.1, algebra] ∎
