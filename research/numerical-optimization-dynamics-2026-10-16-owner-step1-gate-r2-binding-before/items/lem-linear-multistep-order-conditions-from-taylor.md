---
id: lem-linear-multistep-order-conditions-from-taylor
kind: lemma
title: "Taylor moment conditions characterize the order of a linear multistep method"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.6"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6"
      url: "https://fncbook.com/multistep/"
dependency_level: 1
---

## Statement

For the method in [[def-linear-multistep-method-consistency-order-and-root-condition]], define

$$\mu_0=\sum_{j=0}^k\alpha_j,\qquad \mu_m=\sum_{j=0}^k\alpha_jj^m-m\sum_{j=0}^k\beta_jj^{m-1}\quad(m\ge1).$$

For every integer $p\ge1$, the method has order at least $p$ if and only if $\mu_m=0$ for each $m=0,\ldots,p$. In particular, consistency is equivalent to $\rho(1)=0$ and $\rho'(1)=\sigma(1)$.

## Facts & Assumptions

**Given:** A $k$-step method with coefficients and local residual as in [[def-linear-multistep-method-consistency-order-and-root-condition]], and an integer $p\ge1$.

[F1] [[def-linear-multistep-method-consistency-order-and-root-condition]] sets $\tau_n(h;y)=\sum_j\alpha_jy(t_n+jh)-h\sum_j\beta_jy'(t_n+jh)$ and defines order at least $p$ by $\tau_n=O(h^{p+1})$.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] gives a degree-$p$ Taylor expansion with remainder of order $p+1$ along every line segment in an open convex domain.

## Proof

1.1 Fix $t_n$ and expand each $y(t_n+jh)$ through degree $p$ and each $y'(t_n+jh)$ through degree $p-1$ by [F2], on the interval containing the finitely many nodes. Bounded derivatives on the compact interval make the remainders uniform over $n$ and $j$. [given, F2]

2.1 Substituting those expansions into [F1] and collecting the coefficient of $y^{(m)}(t_n)h^m/m!$ gives $\tau_n(h;y)=\sum_{m=0}^{p}\mu_m\frac{h^m}{m!}y^{(m)}(t_n)+O(h^{p+1})$. The derivative term contributes $m\sum_j\beta_jj^{m-1}$ when $m\ge1$ and contributes nothing for $m=0$. [F1, F2, step 1.1, algebra]

3.1 If $\mu_0,\ldots,\mu_p$ vanish, step 2.1 gives $\tau_n=O(h^{p+1})$ uniformly, so the method has order at least $p$. [step 2.1, algebra]

3.2 Conversely, suppose the method has order at least $p$. Induct on $m=0,\ldots,p$, testing the residual on the polynomial solution $y(t)=t^m$ of $y'=mt^{m-1}$ (with $y=1$, $y'=0$ when $m=0$). Lower moments vanish by the induction hypothesis, so the residual is exactly $\mu_m h^m$; since $m\le p$, it can be $O(h^{p+1})$ only if $\mu_m=0$. Thus every required moment vanishes. [F1, step 2.1, algebra, induction]

4.1 Finally, $\mu_0=\rho(1)$ and $\mu_1=\rho'(1)-\sigma(1)$ by the polynomial definitions. Their vanishing is exactly consistency. [F1, algebra] ∎
