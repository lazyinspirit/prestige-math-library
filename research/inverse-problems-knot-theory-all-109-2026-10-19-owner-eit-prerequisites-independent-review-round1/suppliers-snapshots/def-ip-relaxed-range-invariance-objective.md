---
id: def-ip-relaxed-range-invariance-objective
kind: definition
title: Joint and frozen-Newton objectives for range-invariant relaxations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-differential-range-invariance
  - def-ip-banach-convex-subgradient-and-dual-pairing
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equations (1.8), (1.11), (2.7), (2.20), and (2.35)"
      url: "https://arxiv.org/pdf/2403.18704"
verification:
  precheck: n/a
---

## Definition

Let $X,Y,Z$ be real Banach spaces, let $X_0$ be a closed linear subspace of $X$, and let $D\subseteq X$ contain $X_0$ and a nonempty set $U$. Fix $x_0\in X_0\cap U$, a map $F:D\to Y$, a bounded linear map $K:Z\to Y$, and a map $r:D\to Z$ such that $F(x)-F(x_0)=Kr(x)$ for every $x\in D$. Assume that $r|_U$ is a bijection from $U$ onto a set $\widetilde U\subseteq Z$, and that $(I-P)r^{-1}(\widehat r)\in X_0\cap D$ for every $\widehat r\in\widetilde U$ admitted below. Here $I$ is the identity on $X$ and $P:X\to X$ is a bounded linear projection with $P^2=P$, $P|_{X_0}=0$, and $(I-P)(X)\subseteq X_0$. Let $\check R:X_0\to[0,+\infty]$ be a proper convex regularizer, let $R_P:P(X)\to[0,+\infty]$ be a nonnegative penalty, and let $Q:Z\times Z\to[0,+\infty]$ satisfy $Q(a,b)=Q(b,a)$ and $Q(a,b)=0$ exactly when $a=b$. For $\widehat r\in\widetilde U$, set

$$\mathcal R(\widehat r):=\check R\big((I-P)r^{-1}(\widehat r)\big)+R_P\big(Pr^{-1}(\widehat r)\big).$$

For $p\in[1,\infty)$, data $y^\delta\in Y$, and parameters $\alpha,\beta>0$, the **joint relaxed objective** is

$$\mathcal J_{\alpha,\beta}^\delta(\widehat r,x):=\|K\widehat r+F(x_0)-y^\delta\|_Y^p+\alpha\mathcal R(\widehat r)+\beta Q(r(x),\widehat r)^p+\|Px\|_X^p,\qquad (\widehat r,x)\in\widetilde U\times U.$$

The joint source-condition objective takes $R_P=0$. The term $\beta Q(r(x),\widehat r)^p$ ties the relaxed range variable to the physical variable, while $\|Px\|_X^p$ penalizes the component outside $X_0$.

If $r$ is Gâteaux differentiable at a current iterate $x_n\in U$, the **frozen-Newton objective** with parameters $\alpha_n,\beta_n>0$ is

$$\mathcal J_n^\delta(\widehat r,x):=\|K\widehat r+F(x_0)-y^\delta\|_Y^p+\alpha_n\mathcal R(\widehat r)+\beta_n Q\big(r(x_n)+r'(x_n)(x-x_n),\widehat r\big)^p+\|Px\|_X^p.$$

Here $r'(x_n)$ is the bounded linear Gâteaux derivative used to form the affine range proxy; no minimizer existence or uniqueness is part of either definition.

## Definition references

[[def-ip-differential-range-invariance|The range factorization and its Banach-space maps]]

[[def-ip-banach-convex-subgradient-and-dual-pairing|Proper convex regularizers on real Banach spaces]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equations (1.8), (1.11), (2.7), (2.20), and (2.35)](https://arxiv.org/pdf/2403.18704)
