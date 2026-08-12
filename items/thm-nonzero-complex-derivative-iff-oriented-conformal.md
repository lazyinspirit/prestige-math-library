---
id: thm-nonzero-complex-derivative-iff-oriented-conformal
kind: theorem
title: "A real-differentiable complex map is orientation-preserving conformal at a point exactly when it is complex differentiable there with nonzero derivative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       def-oriented-conformal-map-at-a-point,
       lem-oriented-similarities-are-nonzero-complex-multiplications]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 2.2.10"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 9.1.2"
      url: "https://complexanalysis.org/web/sec_conformal-mappings.html"
pipeline_run: null
---

## Statement

Let $f:U\to\mathbb C$ be real totally differentiable at $a\in U$. Then $f$ is orientation-preserving conformal at $a$ if and only if it is complex differentiable at $a$ and $f'(a)\ne0$.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C$, a point $a\in U$, and a map $f:U\to\mathbb C$ real totally differentiable at $a$.

[L1] Complex differentiability at $a$ is equivalent to $Df(a)$ being multiplication by the complex derivative ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F1] Orientation-preserving conformality at $a$ means that $Df(a)$ is an orientation-preserving similarity ([[def-oriented-conformal-map-at-a-point]]).

[L2] The orientation-preserving similarities of the plane are exactly the maps $h\mapsto\xi h$ with $\xi\ne0$ ([[lem-oriented-similarities-are-nonzero-complex-multiplications]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is complex differentiable at $a$ with $f'(a)\ne0$, [L1] makes $Df(a)$ multiplication by $f'(a)$, and [L2] makes this an orientation-preserving similarity. Hence $f$ is conformal at $a$ by [F1]. [given, L1, L2, F1]

1.2 Conversely, if $f$ is orientation-preserving conformal at $a$, [F1] and [L2] give $Df(a)h=\xi h$ for some $\xi\ne0$. The reverse direction of [L1] makes $f$ complex differentiable with $f'(a)=\xi\ne0$. [given, F1, L2, L1]

2.1 Steps 1.1 and 1.2 prove both directions of the equivalence. [step 1.1, step 1.2] ∎
