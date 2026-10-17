---
id: def-total-derivative-in-euclidean-space
kind: definition
title: "The total (Fréchet) derivative $Df(a)$ as the linear first-order approximation with $o(\\|h\\|_2)$ remainder"
status: published
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
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $m,n\in\mathbb N$, let $U\subseteq\mathbb R^m$ be open in the metric induced by its Euclidean norm, let $a\in U$, and let $f:U\to\mathbb R^n$. The map $f$ is **totally differentiable at $a$** when there is a linear map $L:\mathbb R^m\to\mathbb R^n$ ([[def-euclidean-linear-map]]) such that for every $\varepsilon>0$ there is $\delta>0$ for which

$$\|f(a+h)-f(a)-Lh\|_2\le\varepsilon\|h\|_2\qquad\text{whenever }a+h\in U\text{ and }\|h\|_2<\delta.$$

The map $L$, when it exists, is denoted $Df(a)$ and called the **total derivative**. Equivalently, $f(a+h)=f(a)+Df(a)h+r(h)$ with the displayed remainder estimate for every $\varepsilon>0$. At $h=0$ the remainder is zero because $L0=0$.

For $m\ge1$, openness of $U$ provides admissible nonzero increments arbitrarily near zero, and dividing the estimate by $\|h\|_2>0$ gives the usual notation

$$\lim_{h\to0}\frac{\|f(a+h)-f(a)-Lh\|_2}{\|h\|_2}=0,$$

where the quotient is considered for $h\ne0$ with $a+h\in U$. Conversely this punctured normwise limit gives the estimate above (using a smaller positive tolerance if necessary). Thus the positive-dimensional definition is unchanged. This is the multivariate normwise remainder condition; no limit at an isolated point is asserted.

When $m=0$, the Euclidean zero space consists only of $0$, so $a=0$ and $U=\{0\}$; its Euclidean norm and induced metric exist by [[def-norm-and-normed-space]]. The unique linear map $L:\mathbb R^0\to\mathbb R^n$ sends $0$ to $0$, and its remainder is identically zero. It is therefore the total derivative by the displayed estimate, with any $\delta>0$. When $n=0$, the unique map $f$ and the unique linear map into $\mathbb R^0$ likewise have zero remainder, in every source dimension.
