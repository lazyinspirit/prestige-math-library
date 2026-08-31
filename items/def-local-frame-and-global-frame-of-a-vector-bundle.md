---
id: def-local-frame-and-global-frame-of-a-vector-bundle
kind: definition
title: "Local and global frames of a vector bundle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-section-local-section-and-support, def-linear-basis]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $\pi:E\to M$ be a smooth rank-$r$ vector bundle and let $U\subseteq M$ be
open.

A tuple of smooth local sections $(s_1,\dots,s_r)$ on $U$ is a **local frame**
when, for every $p\in U$, the vectors $s_1(p),\dots,s_r(p)$ form a basis of the
fibre $E_p$.

When $U=M$, the same data are called a **global frame**.
