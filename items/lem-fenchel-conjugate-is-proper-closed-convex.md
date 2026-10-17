---
id: lem-fenchel-conjugate-is-proper-closed-convex
kind: lemma
title: "The Fenchel conjugate of a proper closed convex function is proper closed convex"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - lem-proper-closed-convex-function-affine-minorant
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-proper-closed-convex-function-on-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §§3.3.1 and 3.3.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

If $f:\mathbb R^n\to(-\infty,+\infty]$ is proper, closed and convex, then its
conjugate $f^*$ from [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]
is also proper, closed and convex. The affine-minorant result cited below is
used only to prove properness; closedness and convexity follow directly from
the supremum formula.

## Facts & Assumptions

**Given:** Proper closed convex $f$ on $\mathbb R^n$.

[A1] The function $f$ is proper, closed and convex.


[F1] [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]: $f^*(s)=\sup_x(\langle s,x\rangle-f(x))$.

[F2] [[lem-proper-closed-convex-function-affine-minorant]]: some $a\in\mathbb R^n,b\in\mathbb R$ satisfy $f(x)\ge\langle a,x\rangle+b$ for every $x$.

[F3] [[def-proper-closed-convex-function-on-rn]]: $f$ has a nonempty effective domain, is convex, and has a closed epigraph.

[F4] [[def-euclidean-inner-product]]: the pairing is bilinear and finite on all vectors.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\lVert u\rVert_2\lVert v\rVert_2$, and for $n\ge1$, $d_2(u,v)=\lVert u-v\rVert_2$.

## Proof

1.1 Choose $x_0\in\operatorname{dom}f$ by [F3]. The affine minorant [F2] gives $\langle a,x\rangle-f(x)\le-b$ for every $x$ with finite $f(x)$, so $f^*(a)\le-b<+\infty$. The term at $x_0$ gives $f^*(a)\ge\langle a,x_0\rangle-f(x_0)>-\infty$. Thus $f^*$ is proper. [A1, F1, F2, F3, choose]

1.2 If $n=0$, [F4] gives the singleton $\mathbb R^0=\{0\}$ and properness makes $f(0)$ finite, so $f^*(0)=-f(0)$ is proper, closed and convex directly. Hence assume $n\ge1$. For each $x\in\operatorname{dom}f$ and $s,s'\in\mathbb R^n$, [F5] gives $|\langle s,x\rangle-\langle s',x\rangle|\le\lVert s-s'\rVert_2\lVert x\rVert_2=d_2(s,s')\lVert x\rVert_2$. Thus $s\mapsto\langle s,x\rangle-f(x)$ is finite continuous affine. A pointwise supremum of these affine functions is convex: apply each affine function to $(1-\theta)s_0+\theta s_1$, bound by $(1-\theta)f^*(s_0)+\theta f^*(s_1)$, then take the supremum. [A1, F1, F4, F5, algebra]

2.1 The epigraph of $f^*$ is the intersection, over $x\in\operatorname{dom}f$, of the closed half-spaces $$\{(s,t):t\ge\langle s,x\rangle-f(x)\}.$$ Each half-space is closed because its defining affine function is continuous by step 1.2, and any intersection of closed sets is closed. Hence $f^*$ is closed in the epigraph convention of [F3]. [A1, F1, F3, F4, F5, step 1.2, algebra] ∎
