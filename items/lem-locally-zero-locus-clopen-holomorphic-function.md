---
id: lem-locally-zero-locus-clopen-holomorphic-function
kind: lemma
title: "The locally zero locus of a holomorphic function is clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-zero-order-factorization-holomorphic-function, cor-complex-differentiability-implies-continuity, def-metric-interior-closure-boundary]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 2.28"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

For a holomorphic function $h$ on an open set $U$, the set of points having a neighbourhood on which $h$ vanishes is both open and closed in $U$.

More precisely, put
$$L(h):=\{a\in U:\text{ there is an open neighbourhood }V\subseteq U\text{ of }a\text{ such that }h|_V=0\}.$$
Then $L(h)$ and $U\setminus L(h)$ are open in $U$ ([[def-metric-interior-closure-boundary]]).

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$, a holomorphic function $h:U\to\mathbb C$, and the locally zero locus $L(h)$ defined above.

[L1] If a holomorphic function has finite order $m$ at $b$, then near $b$ it has the form $(z-b)^m g(z)$ with $g$ holomorphic and $g(b)\ne0$; moreover, its order at $b$ is $+\infty$ exactly when it vanishes on a neighbourhood of $b$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L2] A function complex differentiable at a point is continuous at that point ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 If $a\in L(h)$, one of the neighbourhoods appearing in the definition of $L(h)$ is contained in $L(h)$, so $L(h)$ is open in $U$; this also covers $L(h)=\varnothing$. [given]

1.2 Let $b\in U\setminus L(h)$. If $h(b)\ne0$, [L2] gives a neighbourhood on which $h$ is nonzero. If $h(b)=0$, then [L1] and $b\notin L(h)$ make the order finite, so $h(z)=(z-b)^m g(z)$ near $b$ with $g(b)\ne0$; after shrinking by [L2], $g$ is nowhere zero there, and $b$ is the only zero. In either case a neighbourhood of $b$ contains no point of $L(h)$, so $U\setminus L(h)$ is open. [L1, L2, algebra]

2.1 Thus $L(h)$ is open and its complement in $U$ is open, so $L(h)$ is both open and closed in $U$. [step 1.1, step 1.2] ∎
