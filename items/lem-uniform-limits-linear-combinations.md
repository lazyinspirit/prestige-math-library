---
id: lem-uniform-limits-linear-combinations
kind: lemma
title: "Uniform limits respect sums and scalar multiples"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
pipeline_run: null
---

## Statement

Let $X$ be a set. Suppose $f_k\to f$ and $g_k\to g$ uniformly on $X$, where
all functions are real valued. Then, for all $\alpha,\beta\in\mathbb{R}$,

$$\alpha f_k+\beta g_k\longrightarrow \alpha f+\beta g$$

uniformly on $X$. In particular, uniform convergence is preserved by sums,
differences, and scalar multiples.

## Facts & Assumptions

**Given:** A set $X$, uniformly convergent sequences $f_k\to f$ and $g_k\to g$, and reals $\alpha,\beta$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index after which $|f_k(x)-f(x)|<\eta$ at every $x$, and likewise for $g_k\to g$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] For reals $u,v$, $|u+v|\le |u|+|v|$, while $|cu|=|c||u|$ and absolute values are nonnegative ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real and put $\eta:=\varepsilon/\bigl(2(|\alpha|+|\beta|+1)\bigr)>0$. [construct, L1]

1.2 By uniform convergence choose $N_f,N_g$ such that $|f_k(x)-f(x)|<\eta$ for $k\ge N_f$ and all $x$, and $|g_k(x)-g(x)|<\eta$ for $k\ge N_g$ and all $x$. [A1, choose]

2.1 Choose an index $N$ at least as large as $N_f$ and $N_g$. For every $k\ge N$ and $x\in X$, one has $|\alpha(f_k(x)-f(x))+\beta(g_k(x)-g(x))|\le |\alpha|\eta+|\beta|\eta<\varepsilon$. [step 1.1, step 1.2, L1, choose, algebra]

3.1 The expression in step 2.1 is $|(\alpha f_k+\beta g_k)(x)-(\alpha f+\beta g)(x)|$, and the index $N$ serves every $x$, so the asserted convergence is uniform. [step 2.1, A1] ∎
