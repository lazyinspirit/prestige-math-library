---
id: def-embedded-submanifold-and-slice-chart
kind: definition
title: "Embedded submanifolds and slice charts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-manifold, def-subspace-topology-top]
justified_by: [lem-slice-chart-restrictions-form-a-smooth-atlas]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.6"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, Definition 12"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Let $M^m$ be a smooth manifold, let $k\in\mathbb N$ satisfy $0\le k\le m$,
and let $S\subseteq M$. One says that $S$ is an **embedded $k$-dimensional
submanifold** of $M$ when for every $p\in S$ there
is a smooth chart $\varphi:U\to\varphi(U)\subseteq\mathbb R^m$ with $p\in U$
such that

$$\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^k\times\{0\}).$$

Such a chart is a **slice chart** for $S$ at $p$. The topology on $S$ is the
subspace topology inherited from $M$ ([[def-subspace-topology-top]]).

The next lemma proves that the restricted slice charts define a smooth
$k$-manifold structure on $S$.
