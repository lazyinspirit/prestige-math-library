---
id: def-real-analytic-map-on-the-plane
kind: definition
title: "Real-analytic maps between open subsets of the coordinate plane"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ck-and-multi-index-notation-in-several-variables, def-vector-valued-functions-limits-and-continuity, def-factorial-and-falling-factorial, def-finite-sum, def-series]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Michael Taylor, Introduction to Analysis in Several Variables, Ch. 2 §2.2, Exercise 4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Definition

A smooth map $F=(u,v):U\to\mathbb R^2$ on an open set $U\subseteq\mathbb R^2$ is real analytic when, at every $a\in U$, both components equal their total-degree Taylor series on some neighbourhood of $a$.

More explicitly, write multi-indices, their factorials, and the derivatives $D^\alpha$ as in [[def-ck-and-multi-index-notation-in-several-variables]] and [[def-factorial-and-falling-factorial]]. For each $a\in U$ there must be a neighbourhood on which, for $h=(h_0,h_1)$ with $a+h\in U$,

$$u(a+h)=\sum_{n\ge0}\ \sum_{|\alpha|=n}\frac{D^\alpha u(a)}{\alpha!}h^\alpha,\qquad v(a+h)=\sum_{n\ge0}\ \sum_{|\alpha|=n}\frac{D^\alpha v(a)}{\alpha!}h^\alpha.$$

Each inner sum is finite ([[def-finite-sum]]), and each outer sum is a real series in the sense of [[def-series]]. The coordinate functions $u$ and $v$ are the components of the map into $\mathbb R^2$ under the convention of [[def-vector-valued-functions-limits-and-continuity]]. Equality with the displayed series includes convergence to the stated component value; convergence is not presumed merely from smoothness.
