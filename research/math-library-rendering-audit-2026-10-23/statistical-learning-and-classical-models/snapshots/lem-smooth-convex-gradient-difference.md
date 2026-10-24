---
id: lem-smooth-convex-gradient-difference
kind: lemma
title: Smooth convex gradient differences around a minimizer
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - lem-l-smoothness-descent-inequality
  - lem-finite-sum-gradient-is-average
  - def-euclidean-inner-product
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix B, inequality (9)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $h_1,\ldots,h_N:\mathbb R^d\to\mathbb R$ be convex and continuously
differentiable, with $\beta$-Lipschitz gradients for $\beta>0$. Put
$f=N^{-1}\sum_{i=1}^Nh_i$, and let $x^\star$ minimize $f$. Then
$$ \frac1N\sum_{i=1}^N \|\nabla h_i(x)-\nabla h_i(x^\star)\|_2^2 \le2\beta\bigl(f(x)-f(x^\star)\bigr) \qquad(x\in\mathbb R^d). $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix B, inequality (9)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The functions and minimizer in the Statement, the standard Euclidean inner product, and the finite-average gradient rule.

[F1] [[lem-l-smoothness-descent-inequality]]: a $\beta$-Lipschitz gradient implies $h(y)\le h(x)+\langle\nabla h(x),y-x\rangle+ (\beta/2)\|y-x\|_2^2$.

[F2] [[lem-finite-sum-gradient-is-average]]: the gradient of a finite average of differentiable functions is the average of their gradients.

[F3] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity means $h((1-t)x+ty)\le(1-t)h(x)+th(y)$ for $0\le t\le1$.

[F4] [[def-euclidean-inner-product]]: $\langle u,v\rangle$ is the standard inner product and $\|u\|_2^2=\langle u,u\rangle$.

## Proof

1.1 Fix $i$ and define [given]
$\phi_i(z)=h_i(z)-\langle\nabla h_i(x^\star),z-x^\star\rangle$.
For $z\in\mathbb R^d$ and $0<t\le1$, convexity [F3] gives
$$ \frac{h_i(x^\star+t(z-x^\star))-h_i(x^\star)}{t} \le h_i(z)-h_i(x^\star). $$
Letting $t\downarrow0$ and using differentiability at $x^\star$ yields
$\langle\nabla h_i(x^\star),z-x^\star\rangle\le h_i(z)-h_i(x^\star)$.
Therefore $\phi_i(z)\ge\phi_i(x^\star)$ for every $z$, so $x^\star$ minimizes
$\phi_i$. [F3, given, algebra]

1.2 The gradient $\nabla\phi_i$ is $\beta$-Lipschitz and vanishes at [given]
$x^\star$. Apply the descent inequality [F1] at
$x$ with $y=x-\beta^{-1}\nabla\phi_i(x)$; the inner-product and squared-norm
terms give
$$ \phi_i(y)\le\phi_i(x) -\beta^{-1}\|\nabla\phi_i(x)\|_2^2 +\frac{\beta}{2}\beta^{-2}\|\nabla\phi_i(x)\|_2^2 =\phi_i(x)-\frac{1}{2\beta}\|\nabla\phi_i(x)\|_2^2. $$
Since $\phi_i(x^\star)\le\phi_i(y)$ by step 1.1, rearranging gives
$$ \|\nabla h_i(x)-\nabla h_i(x^\star)\|_2^2 \le2\beta\left(h_i(x)-h_i(x^\star) -\langle\nabla h_i(x^\star),x-x^\star\rangle\right). $$
[F1, F4, step 1.1, given, construct, algebra]

2.1 Average the inequality in step 1.2 over $i$. By [F2], $N^{-1}\sum_i\nabla h_i(x^\star)=\nabla f(x^\star)$. For each coordinate direction $e_j$, the one-variable function $s\mapsto f(x^\star+se_j)$ has a minimum at $s=0$, so differentiability gives $\langle\nabla f(x^\star),e_j\rangle=0$. Thus every coordinate of $\nabla f(x^\star)$ is zero. The averaged inner-product term therefore vanishes and the remaining function terms equal $2\beta(f(x)-f(x^\star))$. This is the claimed bound. [F2, step 1.2, given, algebra] ∎
