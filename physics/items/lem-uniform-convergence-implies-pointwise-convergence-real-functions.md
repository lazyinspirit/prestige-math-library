---
id: lem-uniform-convergence-implies-pointwise-convergence-real-functions
kind: lemma
title: "Uniform convergence of real-valued functions implies pointwise convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence]
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

Let $X$ be a set. If a sequence of functions $f_k:X\to\mathbb{R}$ converges
uniformly to $f:X\to\mathbb{R}$, then it converges pointwise to $f$
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Facts & Assumptions

**Given:** A set $X$, functions $f_k,f:X\to\mathbb{R}$, and uniform convergence $f_k\to f$ on $X$.

[A1] Uniform convergence means that for every real $\varepsilon>0$ there is $N\in\mathbb{N}$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a real $\varepsilon>0$. By [A1] choose $N\in\mathbb{N}$ such that $|f_k(y)-f(y)|<\varepsilon$ for every $k\ge N$ and every $y\in X$. [A1, choose]

2.1 In particular, $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$. [step 1.1]

3.1 Since $x$ and $\varepsilon$ were arbitrary, $f_k(x)\to f(x)$ for every $x\in X$, which is pointwise convergence. [step 2.1, A1] ∎
