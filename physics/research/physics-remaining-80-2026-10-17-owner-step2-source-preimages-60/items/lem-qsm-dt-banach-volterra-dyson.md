---
id: lem-qsm-dt-banach-volterra-dyson
kind: lemma
title: Banach-space Volterra and Dyson series with a norm remainder
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-c-star-algebra
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
dependency_roles:
  def-c-star-algebra: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, complete lecture notes, §3.3.11–3.3.12
      url: https://arxiv.org/pdf/1311.2717
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.2"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Let $X$ be a complex Banach space, let $T>0$, and let $\mathcal B(X)$ be the bounded complex-linear operators on $X$ with the operator norm. Let $K:[0,T]\to\mathcal B(X)$ be strongly continuous, meaning $t\mapsto K(t)x$ is norm-continuous for every fixed $x\in X$. Suppose a continuous function $a:[0,T]\to[0,\infty)$ satisfies $\|K(t)\|\le a(t)$. Set $c_T=\int_0^T a(s)\,ds$, where the scalar integral is the Riemann integral. Define $\Delta_0(t)=x_0$ and recursively $\Delta_n(t)=\int_0^t K(s)\Delta_{n-1}(s)\,ds$ for $n\ge1$, using the norm-Riemann integral in $X$.

For each $\epsilon\in\mathbb C$, the series $x_\epsilon(t)=\sum_{n=0}^\infty\epsilon^n\Delta_n(t)$ converges uniformly on $[0,T]$. It is the unique continuously differentiable solution of $x_\epsilon'(t)=\epsilon K(t)x_\epsilon(t)$ and $x_\epsilon(0)=x_0$, and

$$\left\|x_\epsilon(t)-x_0-\epsilon\int_0^tK(s)x_0\,ds\right\|\le \|x_0\|\frac{(|\epsilon|c_T)^2e^{|\epsilon|c_T}}{2}.$$

If $X$ is a unital complex $C^*$-algebra and $K(t)x=b(t)x$ for a norm-continuous curve $b:[0,T]\to X$ of skew-adjoint elements, then for real $\epsilon$ the solution with $x_0=1$ is unitary. If $X=\mathcal H$ is a complex Hilbert space and each $K(t)$ is a bounded skew-adjoint operator, then for real $\epsilon$ the solution operators $W_\epsilon(t):x_0\mapsto x_\epsilon(t)$ are unitary even when $K(t)$ is only strongly continuous.

## Facts & Assumptions

**Given:** A complex Banach space $X$, a strongly continuous bounded-operator family $K(t)$, a continuous nonnegative majorant $a(t)$, and $x_0\in X$.

[F1] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]: a continuous curve in a complete normed real vector space has a norm-Riemann integral; the integral is linear, additive, commutes with bounded linear maps, obeys the norm bound obtained from Riemann sums, and its indefinite integral has derivative equal to the integrand. A complex Banach space is used as its underlying real Banach space.

[F2] [[def-c-star-algebra]]: a complex $C^*$-algebra is a complete normed $*$-algebra with submultiplicative norm and $\|z^*z\|=\|z\|^2$; the unital case has an identity element.

## Proof



**Given:** The Banach space, coefficient family, majorant and initial value in the Statement.

1.1 If $x:[0,T]\to X$ is continuous, then $s\mapsto K(s)x(s)$ is continuous: for $s\to t$, its difference from $K(t)x(t)$ is bounded by $\sup_r\|K(r)\|\|x(s)-x(t)\|+\|K(s)x(t)-K(t)x(t)\|$, and both terms tend to zero. By [F1], the norm-Riemann integral defining $\Delta_{n+1}$ therefore exists whenever $\Delta_n$ is continuous. Moreover, for a continuous $f:[0,t]\to X$, the triangle inequality on each tagged Riemann sum and convergence of the scalar Riemann sums give $\|\int_0^t f(s)\,ds\|\le\int_0^t\|f(s)\|\,ds$. [given, F1, construct]


2.1 Put $\Theta(t)=\int_0^t a(s)\,ds$. By [F1], $\Theta$ is continuously differentiable and $\Theta'=a$. Inductively the curves $\Delta_n$ are continuous and satisfy $\|\Delta_n(t)\|\le\|x_0\|\Theta(t)^n/n!$: it is equality as a bound for $n=0$, and if it holds at $n$, then $\|\Delta_{n+1}(t)\|\le\int_0^t a(s)\|\Delta_n(s)\|\,ds\le\|x_0\|\int_0^t a(s)\Theta(s)^n/n!\,ds=\|x_0\|\Theta(t)^{n+1}/(n+1)!$, where the last equality follows by differentiating $\Theta^{n+1}/(n+1)!$. [given, step 1.1, F1, algebra]


3.1 Since $\Theta(t)\le c_T$, the bound in step 2.1 gives uniform absolute convergence of $\sum_n\epsilon^n\Delta_n(t)$. Uniform convergence, the integral bound in step 1.1, and the recursion show $x_\epsilon(t)=x_0+\epsilon\int_0^tK(s)x_\epsilon(s)\,ds$; [F1] then gives the differential equation and initial value. If two solutions differ by $z$, repeated substitution in $z(t)=\epsilon\int_0^tK(s)z(s)\,ds$ gives $\|z(t)\|\le\sup_{[0,T]}\|z\|(|\epsilon|c_T)^n/n!$ for every $n$, whose right side tends to zero; hence the solution is unique. [step 1.1, step 2.1, F1, algebra]


4.1 With $y=|\epsilon|c_T$, the tail after its linear term is at most $\|x_0\|\sum_{n\ge2}y^n/n!\le\|x_0\|y^2e^y/2$, because $n!\ge2(n-2)!$ for every $n\ge2$. This is the stated remainder. [step 2.1, step 3.1, algebra]


4.2 In the $C^*$-algebra case, write $W=x_\epsilon$ and assume $b(t)^*=-b(t)$ and $\epsilon\in\mathbb R$. The product rule and $W'=\epsilon bW$ give $(W^*W)'=\epsilon W^*(b^*+b)W=0$, so $W^*W=1$. Also $Z=WW^*$ satisfies $Z'=\epsilon(bZ-Zb)$ and $Z(0)=1$. The uniqueness argument of step 3.1, applied to the bounded operator family $Z\mapsto\epsilon(b(t)Z-Zb(t))$, shows that the constant curve $Z=1$ is its only solution. Hence $WW^*=1$ as well, so $W$ is unitary in the unital $C^*$-algebra. [given, F2, step 3.1, algebra]


5.1 In the Hilbert-space case, the series is linear in $x_0$ and step 2.1 gives $\|W_\epsilon(t)x_0\|\le e^{|\epsilon|c_T}\|x_0\|$, so it defines a bounded operator. Differentiating inner products of two solutions gives $\frac{d}{dt}\langle W_\epsilon(t)x,W_\epsilon(t)y\rangle=\epsilon\langle K(t)W_\epsilon(t)x,W_\epsilon(t)y\rangle+\epsilon\langle W_\epsilon(t)x,K(t)W_\epsilon(t)y\rangle=0$, hence $W_\epsilon(t)$ is an isometry. For a fixed terminal time $t$, solve $z'(s)=-\epsilon K(t-s)z(s)$ on $[0,t]$ with arbitrary $z(0)=y$ using the first part; then $x(s)=z(t-s)$ solves the forward equation and $W_\epsilon(t)x(0)=y$. Thus $W_\epsilon(t)$ is onto and therefore unitary. [given, step 2.1, step 3.1, algebra] ∎