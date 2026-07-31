---
id: def-series-of-real-functions
kind: definition
title: "A series of real-valued functions and its pointwise and uniform convergence through its partial sums"
status: published
origin: session
deps: [def-function-space, def-series, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $f_k:X\to\mathbb{R}$ for
$k\in\mathbb{N}$. The **series of real-valued functions**
$\sum f_k$ is studied through its partial-sum functions

$$S_n(x):=\sum_{k<n}f_k(x)\qquad(n\in\mathbb{N},\ x\in X),$$

where the sum on the right is the finite sum of [[def-series]]. Thus
$S_0$ is the zero function and $S_{n+1}=S_n+f_n$ under the pointwise
operations of [[def-function-space]].

The series $\sum f_k$ **converges pointwise** to $S:X\to\mathbb{R}$ when
$S_n\to S$ pointwise, and it **converges uniformly** to $S$ when
$S_n\to S$ uniformly
([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

The series is **absolutely convergent at $x\in X$** when the scalar series
$\sum |f_k(x)|$ converges. It is **absolutely pointwise convergent** when this
holds for every $x\in X$.
