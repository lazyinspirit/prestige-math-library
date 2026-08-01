---
id: def-total-derivative-in-euclidean-space
kind: definition
title: "The total (Fréchet) derivative $Df(a)$ as the linear first-order approximation with $o(\\|h\\|_2)$ remainder"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-linear-map, def-norm-and-normed-space, def-vector-valued-functions-limits-and-continuity, def-metric-topology]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ be open, let $a\in U$, and let $f:U\to\mathbb R^n$. The map $f$ is **totally differentiable at $a$** when there is a linear map $L:\mathbb R^m\to\mathbb R^n$ ([[def-euclidean-linear-map]]) such that

$$\lim_{h\to0}\frac{\|f(a+h)-f(a)-Lh\|_2}{\|h\|_2}=0,$$

where the quotient is considered for $h\ne0$ with $a+h\in U$. The map $L$, when it exists, is denoted $Df(a)$ and called the **total derivative**. Equivalently, $f(a+h)=f(a)+Df(a)h+r(h)$ with $\|r(h)\|_2/\|h\|_2\to0$.
