---
id: lem-continuous-function-holomorphic-off-a-point-is-holomorphic
kind: lemma
title: "A continuous function holomorphic off a single point is holomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-goursat-theorem-one-exceptional-point, thm-morera-triangle-theorem, def-oriented-complex-triangle-and-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §3.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $p\in U$, and let $f:U\to\mathbb C$ be
continuous on $U$ and holomorphic on $U\setminus\{p\}$. Then $f$ is holomorphic
on $U$, the point $p$ included.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$, a point $p\in U$, and a function $f:U\to\mathbb C$ that is continuous on $U$ and holomorphic on $U\setminus\{p\}$.

[L1] If $U\subseteq\mathbb C$ is open, $p\in U$, and $f:U\to\mathbb C$ is continuous and holomorphic on $U\setminus\{p\}$, then $\int_{\partial T}f(z)\,dz=0$ for every filled triangle $T=\Delta[a,b,c]$ of [[def-oriented-complex-triangle-and-boundary]] contained in $U$; the exceptional point may lie outside, inside, or on the boundary of $T$ ([[thm-goursat-theorem-one-exceptional-point]]).

[L2] If $\Omega\subseteq\mathbb C$ is open and $f:\Omega\to\mathbb C$ is continuous, then $f$ is holomorphic on $\Omega$ if and only if $\int_{\partial\Delta[a,b,c]}f(z)\,dz=0$ whenever $\Delta[a,b,c]\subseteq\Omega$; repeated or collinear vertices are permitted ([[thm-morera-triangle-theorem]]).

## Proof

**Proof technique:** direct.

1.1 The hypotheses of [L1] are exactly the given ones, so $\int_{\partial T}f(z)\,dz=0$ for every filled triangle $T\subseteq U$, whether $p$ lies outside $T$, inside it, or on its boundary. [given, L1]

2.1 The function $f$ is continuous on the open set $U$ and step 1.1 supplies the vanishing triangle integrals demanded by the right-hand side of [L2], so [L2] makes $f$ holomorphic on all of $U$, including at $p$. [given, step 1.1, L2] ∎
