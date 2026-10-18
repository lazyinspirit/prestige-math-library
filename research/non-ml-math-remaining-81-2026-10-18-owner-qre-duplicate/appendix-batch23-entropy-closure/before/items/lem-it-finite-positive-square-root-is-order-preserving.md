---
id: lem-it-finite-positive-square-root-is-order-preserving
kind: lemma
title: The finite positive square root preserves operator order
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-non-negative-and-positive-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-real-power-continuity-and-derivatives
  - thm-ftc-second-part
  - def-oriented-integral
  - thm-additivity-over-subintervals
  - thm-monotone-change-of-variable-for-riemann-integrals
  - thm-monotonicity-of-the-integral
  - cor-monotone-converges-iff-bounded
  - thm-continuous-implies-integrable
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Appendix B"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, Appendix B and §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

If $A,B$ are nonnegative endomorphisms of a nonzero finite-dimensional complex inner-product space and $A\preceq B$, then their nonnegative square roots satisfy $A^{1/2}\preceq B^{1/2}$.

## Facts & Assumptions

**Given:** Nonnegative $A,B$ on a nonzero finite-dimensional complex inner-product space with $A\preceq B$.

[F1] [[def-non-negative-and-positive-operator]]: $A\preceq B$ means $B-A$ is nonnegative, and positive definite operators have positive quadratic form on nonzero vectors.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite-dimensional Hermitian operators have orthonormal eigenbases.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: the nonnegative square root is defined spectrally with eigenvalues $\sqrt\lambda$.

[F4] [[thm-real-power-continuity-and-derivatives]] and [[thm-ftc-second-part]]: the positive powers $s^{1/2}$ and $s^{-1/2}$ have their ordinary derivatives, and a continuous derivative integrates to its endpoint difference on each compact positive interval.

[F5] [[def-oriented-integral]] and [[thm-additivity-over-subintervals]]: oriented compact-interval integrals reverse sign and add over adjacent intervals.

[F6] [[thm-monotone-change-of-variable-for-riemann-integrals]]: a differentiable monotone change of variable transforms a Riemann integral by its derivative.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[prop-adjoint-algebra]]: adjoints satisfy the inner-product identity and reverse products, so a congruence by a self-adjoint endomorphism is self-adjoint and preserves nonnegativity by its quadratic-form calculation.

[F8] [[thm-monotonicity-of-the-integral]]: pointwise inequalities between integrable functions on a compact interval imply the same inequality for their integrals.

[F9] [[cor-monotone-converges-iff-bounded]]: every bounded monotone sequence of real numbers converges.

[F10] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

## Proof

1.1 First suppose $P,Q$ are positive definite and $P\preceq Q$. By [F2], their eigenvalues are strictly positive: applying the positive quadratic form to an eigenvector gives $\lambda\|v\|^2>0$. Define $P^{-1/2}$ spectrally by replacing each eigenvalue $\lambda$ with $\lambda^{-1/2}$, and set $P^{-1}:=(P^{-1/2})^2$; multiplication in the eigenbasis shows these are the inverse square root and inverse of $P$. Put $C:=P^{-1/2}QP^{-1/2}$. By the adjoint product rule in [F7], $C$ is self-adjoint, and [F7] gives $\langle v,Cv\rangle=\langle P^{-1/2}v,Q P^{-1/2}v\rangle>0$ for $v\ne0$, so $C$ is positive definite. Also $C-I=P^{-1/2}(Q-P)P^{-1/2}\succeq0$ by the same quadratic-form identity and [F1]. Hence every eigenvalue $\mu$ of $C$ is at least one by [F2]; define $C^{-1}$ spectrally by reciprocating its positive eigenvalues, giving $C^{-1}\preceq I$. Since $Q=P^{1/2}CP^{1/2}$, multiplying this factorization by $P^{-1/2}C^{-1}P^{-1/2}$ on either side gives the identity, so $Q^{-1}=P^{-1/2}C^{-1}P^{-1/2}$. Congruence of $C^{-1}\preceq I$ by $P^{-1/2}$ now yields $Q^{-1}\preceq P^{-1}$. [F1, F2, F3, F7, given, algebra]

2.1 For $t>0$ and nonzero $v$, $\langle v,(A+tI)v\rangle\ge t\|v\|^2>0$, and likewise for $B$, so $A+tI$ and $B+tI$ are positive definite and ordered. Step 1.1 gives $(A+tI)^{-1}\succeq(B+tI)^{-1}$. Multiplying the order by $t$ and subtracting from $I$ yields
$$A(A+tI)^{-1}=I-t(A+tI)^{-1}\preceq I-t(B+tI)^{-1}=B(B+tI)^{-1}.$$
[F1, step 1.1, algebra]

3.1 Set $f(s)=s^{-1/2}/(1+s)$ for $s>0$. It is continuous, hence integrable on every compact interval in its domain by [F10]. For $0<s\le1$, $f(s)\le s^{-1/2}$; for $s\ge1$, $f(s)\le s^{-3/2}$. For each integer $k\ge1$, the sequence $a_k=\int_{1/k}^1f(s)\,ds$ is nondecreasing by positivity and additivity, and is bounded above by $\int_{1/k}^1s^{-1/2}ds=2(1-k^{-1/2})\le2$. For $k>1$ this evaluation follows from the primitive $2\sqrt{s}$, whose derivative is $s^{-1/2}$ by [F4], and the fundamental theorem in [F4]; for $k=1$ both sides are zero by the equal-endpoint convention in [F5]. The sequence $b_k=\int_1^kf(s)\,ds$ is likewise nondecreasing and bounded above by $\int_1^ks^{-3/2}ds=2(1-k^{-1/2})\le2$, using the primitive $-2s^{-1/2}$ and [F4] when $k>1$, and [F5] when $k=1$. Both sequences therefore converge by [F9]. By additivity [F5], $c_k:=\int_{1/k}^kf(s)\,ds=a_k+b_k$ converges to a finite $c$. For every $k\ge2$, monotonicity [F8] and $f(s)\ge1/(3\sqrt2)$ on $[1,2]$ give $c_k\ge\int_1^2f(s)\,ds\ge1/(3\sqrt2)$, so $c>0$. For $\lambda>0$, [F6] with $t=\lambda s$ on $[1/k,k]$ gives
$$\int_{\lambda/k}^{\lambda k}t^{-1/2}\frac{\lambda}{\lambda+t}\,dt =\sqrt{\lambda}\,c_k.$$
For $\lambda=0$, the corresponding integrand and both sides are zero. For a nonnegative $X$, let $P_\lambda$ be its spectral projection at eigenvalue $\lambda$ and define the finite operator
$$J_k(X):=\sum_{\lambda\in\operatorname{spec}(X)}\left(\int_{1/k}^k t^{-1/2}\frac{\lambda}{\lambda+t}\,dt\right)P_\lambda.$$
The coefficient depends only on $\lambda$, so this definition is independent of choices of eigenvectors within eigenspaces. The substitution and the zero-eigenvalue case give $J_k(X)=c_kX^{1/2}$, hence $c^{-1}J_k(X)\to X^{1/2}$. For any vector $v$, the quadratic form of $J_k(X)$ is the integral of the continuous scalar function $t\mapsto\langle v,t^{-1/2}X(X+tI)^{-1}v\rangle$ on $[1/k,k]$, as follows from the finite spectral sum. By step 2.1 these functions for $X=A$ and $X=B$ are pointwise ordered; [F8] therefore gives $\langle v,J_k(A)v\rangle\le\langle v,J_k(B)v\rangle$. Taking limits and using $c>0$ yields $A^{1/2}\preceq B^{1/2}$. [F2, F3, F4, F5, F6, F8, F9, F10, step 2.1, algebra] ∎
