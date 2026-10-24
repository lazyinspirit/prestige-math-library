---
id: cor-uniform-limit-uniformly-continuous
kind: corollary
title: "The uniform limit of uniformly continuous real-valued functions is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-metric-uniform-continuity, lem-real-line-is-a-metric-space, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space. If each $f_k:X\to\mathbb{R}$ is uniformly
continuous and $f_k\to f$ uniformly on $X$, then $f$ is uniformly continuous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, uniformly continuous functions $f_k:X\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence gives one index serving every point for any prescribed positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Uniform continuity of $f_N$ means that for every real $\eta>0$ there is $\delta>0$ such that $d(x,y)<\delta$ implies $|f_N(x)-f_N(y)|<\eta$ for all $x,y\in X$ ([[def-metric-uniform-continuity]], [[lem-real-line-is-a-metric-space]]).

[L1] For reals $u,v$, $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real. Choose $N$ such that $|f_N(x)-f(x)|<\varepsilon/3$ for every $x\in X$. [A1, choose]

1.2 By uniform continuity of $f_N$, choose $\delta>0$ such that $d(x,y)<\delta$ implies $|f_N(x)-f_N(y)|<\varepsilon/3$ for every $x,y\in X$. [A2, choose]

2.1 If $d(x,y)<\delta$, then $|f(x)-f(y)|\le|f(x)-f_N(x)|+|f_N(x)-f_N(y)|+|f_N(y)-f(y)|<\varepsilon$. [step 1.1, step 1.2, L1, algebra]

3.1 The same $\delta$ serves every pair $x,y$, so $f$ is uniformly continuous. [step 2.1, A2] ∎
