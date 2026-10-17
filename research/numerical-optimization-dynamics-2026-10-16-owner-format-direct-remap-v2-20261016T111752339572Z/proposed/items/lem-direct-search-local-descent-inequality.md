---
id: lem-direct-search-local-descent-inequality
kind: lemma
title: "Local descent inequality for a Lipschitz gradient on an open segment"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - def-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - def-lipschitz-holder-contraction
  - lem-metrics-on-rn
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
  - def-derivative
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6 and Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
---

## Statement

Let $U\subseteq\mathbb R^n$ be open, let $f:U\to\mathbb R$ be totally differentiable at every point, and suppose its gradient is $L$-Lipschitz on $U$ for some $L\ge0$. If $x,y\in U$ and the whole segment $[x,y]$ lies in $U$, then
$$f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+\frac{L}{2}\|y-x\|_2^2.$$

## Facts & Assumptions

**Given:** Total derivatives and gradients [[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]], the Lipschitz definition and Euclidean metric [[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], local continuity of totally differentiable maps [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]], Cauchy–Schwarz [[thm-cauchy-schwarz-and-the-euclidean-norm]], derivative rules [[def-derivative]], [[thm-algebra-of-derivatives]], and the mean-value theorem [[cor-mean-value-theorem]].

[F1] The Lipschitz condition is $d_2(\nabla f(u),\nabla f(v))\le Ld_2(u,v)$; for $n\ge1$, $d_2(a,b)=\|a-b\|_2$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]]).

[F2] A real function continuous on a closed interval and differentiable in its interior has a point where its derivative equals its secant slope ([[cor-mean-value-theorem]]).

[F3] Total differentiability implies continuity, and the directional derivative along $d$ is $D_df(a)=\langle\nabla f(a),d\rangle$ ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]).

[F4] The identity function has derivative $1$ by its difference quotient; the sum, scalar-multiple, and product rules follow from [[thm-algebra-of-derivatives]], and restricting a differentiable function to an interval preserves its interior derivatives ([[def-derivative]]).

[F5] Cauchy–Schwarz and norm homogeneity give $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ and $\|sv\|_2=|s|\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] Sums, scalar multiples, products, and polynomials of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]).

## Proof

1.1 Put $d=y-x$. If $d=0$, both sides are equal. For $d\ne0$, necessarily $n\ge1$. Define $\gamma(s)=x+sd$ and $I=\{s\in\mathbb R:\gamma(s)\in U\}$. Since $\|\gamma(s+h)-\gamma(s)\|_2=|h|\|d\|_2$, the affine path is continuous; openness of $U$ then makes $I$ open, and the segment assumption gives $[0,1]\subseteq I$. Put $\phi=f\circ\gamma$ on $I$. Total differentiability makes $f$ continuous at every point of $\gamma([0,1])$, so $\phi$ is continuous on $[0,1]$. For each $s\in(0,1)$, its difference quotient is the directional difference quotient of $f$ at $x+sd$ in direction $d$, so $\phi'(s)=\langle\nabla f(x+sd),d\rangle$. [given, F3, F5, construct]

2.1 Put $a=\langle\nabla f(x),d\rangle$, $g(s)=\phi(s)-\phi(0)-sa$, and $q(s)=g(s)-\frac{L}{2}s^2\|d\|_2^2$. By [F3] and [F6], $q$ is continuous on $[0,1]$; by [F4], it is differentiable on $(0,1)$ and $$q'(s)=\langle\nabla f(x+sd)-\nabla f(x),d\rangle-Ls\|d\|_2^2.$$ By [F1] and [F5], the inner-product term is at most $L\|sd\|_2\|d\|_2=Ls\|d\|_2^2$ for $s\in(0,1)$. Hence $q'(s)\le0$. [F1, F3, F4, F5, step 1.1, algebra]

3.1 Apply [F2] to $q$ on $[0,1]$: for some $s\in(0,1)$, $q(1)-q(0)=q'(s)\le0$. Since $q(0)=0$, this says $f(y)-f(x)-\langle\nabla f(x),d\rangle\le\frac{L}{2}\|d\|_2^2$, as required. [F2, step 2.1, algebra] ∎

