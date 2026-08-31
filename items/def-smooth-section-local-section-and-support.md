---
id: def-smooth-section-local-section-and-support
kind: definition
title: "Smooth sections, local sections, and support"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-the-zero-section-is-a-smooth-embedding]
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

Let $\pi:E\to M$ be a smooth vector bundle.

A **smooth section** of $E$ is a smooth map $s:M\to E$ such that
$\pi\circ s=\operatorname{id}_M$.

If $U\subseteq M$ is open, a **smooth local section on $U$** is a smooth map
$s:U\to E|_U$ with $\pi\circ s=\operatorname{id}_U$.

The **support** of a section $s$ is the closure of the set
$\{p\in M:s(p)\neq 0_p\}$. A section is **compactly supported** when this set
has compact closure.
