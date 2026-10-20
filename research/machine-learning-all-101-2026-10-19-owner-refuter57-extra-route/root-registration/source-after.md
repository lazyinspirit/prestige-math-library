---
id: lem-convex-gradient-step-nonexpansive
kind: lemma
title: Gradient steps of smooth convex functions are nonexpansive
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - lem-l-smoothness-descent-inequality
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix C, Lemma 6"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
      locator: "Appendix C, Lemma 6, PDF p. 17: related strongly convex contraction for eta<=1/beta. The full convex nonexpansive range in this item is established by its local proof."
proof_strategy: direct
---

## Statement

Let $h:\mathbb R^d\to\mathbb R$ be convex and differentiable with
$\beta$-Lipschitz gradient, where $\beta>0$. For every
$0\le\eta\le2/\beta$ and $x,y\in\mathbb R^d$,
$$ \|x-y-\eta(\nabla h(x)-\nabla h(y))\|_2\le\|x-y\|_2. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix C, Lemma 6](https://cs.nyu.edu/~mohri/pub/scaffold.pdf) proves a related contraction for $\mu$-strongly convex functions with $\eta\le1/\beta$ and squared-distance factor $1-\mu\eta$. The convex-only nonexpansiveness for the full range $0\le\eta\le2/\beta$ is established by the local proof below.

## Facts & Assumptions
**Given:** The differentiable convex function and gradient step in the Statement.

[F1] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity means $h((1-t)u+tz)\le(1-t)h(u)+th(z)$ for $u,z\in\mathbb R^d$ and $t\in[0,1]$.

[F2] [[lem-l-smoothness-descent-inequality]]: a $\beta$-Lipschitz gradient satisfies the quadratic descent inequality.

[F3] [[def-euclidean-inner-product]]: inner products are bilinear and $\|v\|_2^2=\langle v,v\rangle$.

## Proof

1.1 Fix $u,v\in\mathbb R^d$. For every $z\in\mathbb R^d$ and $0<t\le1$, [F1] gives [given]
$$ \frac{h(u+t(z-u))-h(u)}{t}\le h(z)-h(u). $$
As $t\downarrow0$, differentiability makes the left side tend to
$\langle\nabla h(u),z-u\rangle$. Hence
$h(z)\ge h(u)+\langle\nabla h(u),z-u\rangle$. Define
$\phi(z)=h(z)-\langle\nabla h(u),z-u\rangle$; this inequality shows
that $u$ minimizes $\phi$. Its gradient is $\beta$-Lipschitz, hence continuous. Apply [F2] at $v$ to
$v-\beta^{-1}\nabla\phi(v)$ and use $\phi(u)\le\phi(z)$ to obtain
$$ \|\nabla h(v)-\nabla h(u)\|_2^2 \le2\beta\bigl(h(v)-h(u)-\langle\nabla h(u),v-u\rangle\bigr). $$ [F1, F2, given, algebra]

2.1 Repeat step 1.1 with $u$ and $v$ exchanged and add the two inequalities. [given]
The right-hand Bregman terms sum to
$\langle\nabla h(v)-\nabla h(u),v-u\rangle$, so
$$ \|\nabla h(v)-\nabla h(u)\|_2^2 \le\beta\langle\nabla h(v)-\nabla h(u),v-u\rangle. $$ [F3, step 1.1, given, algebra]

3.1 Expand the square in the Statement and apply step 2.1: [given]
$$ \begin{aligned} \|x-y-\eta(\nabla h(x)-\nabla h(y))\|_2^2 &\le\|x-y\|_2^2 -\left(\frac{2\eta}{\beta}-\eta^2\right) \|\nabla h(x)-\nabla h(y)\|_2^2\\ &\le\|x-y\|_2^2, \end{aligned} $$
because $0\le\eta\le2/\beta$. Taking nonnegative square roots proves the
claim. [F3, step 2.1, given, algebra] ∎