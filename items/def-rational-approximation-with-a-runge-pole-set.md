---
id: def-rational-approximation-with-a-runge-pole-set
kind: definition
title: "Runge pole sets for rational approximation on a compact set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $K\subseteq\mathbb C$ be compact, let $U$ be an open neighbourhood of $K$,
and let $f:U\to\mathbb C$ be holomorphic. A subset
$P\subseteq\widehat{\mathbb C}\setminus K$ is a **Runge pole set for $K$** when
every connected component of $\widehat{\mathbb C}\setminus K$ meets $P$.

One says that **$f$ is rationally approximable on $K$ with poles in $P$** when
for every $\varepsilon>0$ there is a rational function $r$ whose finite poles
all lie in $P\cap\mathbb C$ and whose only possible pole at $\infty$ is also in
$P$, such that

$$\sup_{z\in K}|f(z)-r(z)|<\varepsilon.$$

## Remarks

If $\widehat{\mathbb C}\setminus K$ is connected, then the singleton
$P=\{\infty\}$ is a Runge pole set. In that case the approximants are exactly
polynomials.
