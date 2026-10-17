---
id: def-directional-and-partial-derivatives
kind: definition
title: "Directional derivatives and partial derivatives of a map $U\\subseteq\\mathbb{R}^m\\to\\mathbb{R}^n$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, lem-standard-basis-of-f-n, def-euclidean-inner-product, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: true
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-zero-domain/def-directional-and-partial-derivatives/application/repair.json
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$, $a\in U$, $v\in\mathbb R^m$, and $f:U\to\mathbb R^n$. If the line map $t\mapsto f(a+tv)$ is defined near $0$, its derivative at $0$ is the **directional derivative**

$$D_vf(a):=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}.$$

For a standard basis vector $e_j$ ([[lem-standard-basis-of-f-n]]), $D_{e_j}f(a)$ is the **$j$th partial derivative**, written $\partial_jf(a)$. For $n\ge1$, these are ordinary vector-valued one-variable derivatives in the sense of [[def-vector-valued-derivative-and-integral]].

For $n=0$, use the zero-space case directly, without invoking that supplier's positive-codomain standing hypothesis. The space $\mathbb R^0$ has only its zero vector and carries the zero Euclidean norm and its induced metric ([[lem-standard-basis-of-f-n]] clause 5, [[def-euclidean-inner-product]], [[def-norm-and-normed-space]]). Whenever the line map is defined near $0$, every difference quotient for real $t\ne0$ is this zero vector; define $D_vf(a)=0$. This is the unique possible derivative value, and its normwise difference-quotient error is exactly zero for all such $t$, so the real parameter still approaches an actual limit point. Every existing coordinate direction therefore has $\partial_jf(a)=0$; these zero-valued partial maps are continuous in the induced norm metrics. If the source dimension is zero, there are no partial indices and the sole direction is $v=0$; its constant line map is defined near $0$.
