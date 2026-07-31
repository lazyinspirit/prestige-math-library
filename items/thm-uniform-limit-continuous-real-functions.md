---
id: thm-uniform-limit-continuous-real-functions
kind: theorem
title: "The uniform limit of continuous real-valued functions on a metric space is continuous"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-metric-continuity, lem-real-line-is-a-metric-space, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.16"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space and let $f_k:X\to\mathbb{R}$ be continuous for
every $k\in\mathbb{N}$, where $\mathbb{R}$ has its usual metric
$d_{\mathbb{R}}(s,t)=|s-t|$. If $f_k\to f$ uniformly on $X$, then
$f:X\to\mathbb{R}$ is continuous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, continuous functions $f_k:X\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index $N$ such that $|f_k(x)-f(x)|<\eta$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Continuity of $f_N$ at $a$ means that for every real $\eta>0$ there is $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\eta$ ([[def-metric-continuity]], [[lem-real-line-is-a-metric-space]]).

[L1] For reals $u,v$, $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in X$ and a real $\varepsilon>0$. By uniform convergence choose $N$ such that $|f_N(x)-f(x)|<\varepsilon/3$ for every $x\in X$. [A1, choose]

1.2 By continuity of $f_N$ at $a$, choose $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\varepsilon/3$. [A2, choose]

2.1 If $d(x,a)<\delta$, then $|f(x)-f(a)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|<\varepsilon$. [step 1.1, step 1.2, L1, algebra]

3.1 Thus $f$ is continuous at the arbitrary point $a$, and hence continuous on $X$. [step 2.1, A2] ∎
