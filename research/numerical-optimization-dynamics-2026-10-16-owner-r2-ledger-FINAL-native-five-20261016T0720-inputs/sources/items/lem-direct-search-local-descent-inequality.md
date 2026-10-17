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
  - def-euclidean-inner-product
  - def-lipschitz-holder-contraction
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
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
$$f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+L\|y-x\|_2^2.$$
The coarser coefficient $L$ is sufficient for the direct-search result.

## Facts & Assumptions

**Given:** Total derivatives and gradients [[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], chain rule [[thm-chain-rule-for-total-derivatives]], the Lipschitz definition [[def-lipschitz-holder-contraction]], Cauchy–Schwarz [[thm-cauchy-schwarz-and-the-euclidean-norm]], and the mean-value theorem [[cor-mean-value-theorem]].

[F1] The gradient obeys $\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2$ for $u,v\in U$ ([[def-lipschitz-holder-contraction]]).

[F2] A real function continuous on a closed interval and differentiable in its interior has a point where its derivative equals its secant slope ([[cor-mean-value-theorem]]).

## Proof

1.1 Put $d=y-x$. If $d=0$, both sides are equal. Otherwise define $\phi(s)=f(x+sd)$ on $[0,1]$. The segment assumption and differentiability make $\phi$ continuous on $[0,1]$, differentiable on $(0,1)$, and the chain rule gives $\phi'(s)=\langle\nabla f(x+sd),d\rangle$. [given, F2, construct]

2.1 By [F2], some $s\in(0,1)$ satisfies $f(y)-f(x)=\langle\nabla f(x+sd),d\rangle$. Subtract and add $\langle\nabla f(x),d\rangle$; [F1] and Cauchy–Schwarz bound the remainder by $L\|sd\|_2\|d\|_2\le L\|d\|_2^2$. This proves the inequality. [F1, F2, step 1.1, algebra] ∎

