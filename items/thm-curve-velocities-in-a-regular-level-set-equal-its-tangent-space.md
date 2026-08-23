---
id: thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space
kind: theorem
title: 'Tangent vectors to a regular level set are exactly its curve velocities'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tangent-space-to-a-regular-level-set, cor-regular-level-set-local-graph-theorem, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, tangent-space discussion after Theorem 8.8'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, $k\ge1$, let $c$ be a regular value, and let $a\in f^{-1}(c)$. A vector $v$ lies in $T_a(f^{-1}(c))$ if and only if it is the velocity at zero of a $C^1$ curve $\gamma:(-\varepsilon,\varepsilon)\to f^{-1}(c)$ with $\gamma(0)=a$.

## Facts & Assumptions

**Given:** The map, regular value, point, and vector $v\in\mathbb R^m$.

[L1] The tangent space is $T_a(f^{-1}(c))=\ker Df(a)$ ([[def-tangent-space-to-a-regular-level-set]]), and the chain rule gives $(f\circ\gamma)'(0)=Df(a)\gamma'(0)$ ([[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[L2] Locally the fibre is $a+u+g(u)$ over $K=\ker Df(a)$, with $g(0)=0$ and $Dg(0)=0$ ([[cor-regular-level-set-local-graph-theorem]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose $\gamma$ lies in the fibre and $\gamma(0)=a$. Then $f\circ\gamma$ is constant, so [L1] gives $Df(a)\gamma'(0)=0$ and hence $\gamma'(0)\in T_a(f^{-1}(c))$. [given, L1]

1.2 For the reverse direction, suppose $v\in T_a(f^{-1}(c))=K$. Using [L2], define $\gamma(t)=a+tv+g(tv)$ for sufficiently small $|t|$. This curve lies in the fibre, satisfies $\gamma(0)=a$, and has $\gamma'(0)=v+Dg(0)v=v$. [given, L1, L2, construct]

2.1 The two implications are independent and exhaustive. In particular $v=0$ is realized by the same construction, or by the constant curve. [step 1.1, step 1.2] ∎
