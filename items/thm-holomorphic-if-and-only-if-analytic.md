---
id: thm-holomorphic-if-and-only-if-analytic
kind: theorem
title: "A complex function is holomorphic if and only if it is analytic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-taylor-expansion-holomorphic-function, def-complex-analytic-function, thm-complex-analytic-functions-are-holomorphic]
justified_by: []
aliases: []
landmark: true
short: "holomorphic $\\Longleftrightarrow$ analytic"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 2.24"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "Matthias Weber, Complex Analysis, §2.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and let $f:U\to\mathbb C$. Then $f$ is holomorphic on $U$ if and only if it is analytic on $U$ in the local power-series sense of [[def-complex-analytic-function]].

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$ and a function $f:U\to\mathbb C$.

[L1] Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L2] A function is analytic on an open set exactly when every point has a contained open disc on which the function equals a convergent complex power series centred at that point ([[def-complex-analytic-function]]).

[L3] Every function analytic on an open subset of $\mathbb C$ is holomorphic there ([[thm-complex-analytic-functions-are-holomorphic]]).

## Proof

**Proof technique:** direct.

1.1 For the holomorphic-to-analytic direction, if $f$ is holomorphic and $a\in U$, [L1] gives a positive-radius disc about $a$ on which $f$ equals its Taylor series, so [L2] makes $f$ analytic at $a$ and hence on $U$. [L1, L2]

1.2 For the analytic-to-holomorphic direction, the local power-series hypothesis of [L2] is exactly the hypothesis of [L3], which makes $f$ holomorphic on the same open set $U$. [L2, L3]

2.1 Steps 1.1 and 1.2 prove both implications; when $U=\varnothing$, both pointwise predicates hold vacuously, so the equivalence also includes the empty open set. [step 1.1, step 1.2] ∎
