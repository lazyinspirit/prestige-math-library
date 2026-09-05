---
id: def-morphism-of-cohomological-delta-functors
kind: definition
title: "Morphism of cohomological delta functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cohomological-delta-functor, def-natural-transformation]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Definition

Let $S=(S^n,\partial_S)$ and $T=(T^n,\partial_T)$ be cohomological delta
functors. A **morphism of cohomological delta functors** $u:S\to T$ is a
family of natural transformations
$$u^n:S^n\Rightarrow T^n,\qquad n\geq 0,$$
such that for every short exact sequence
$$0\to A\to B\to C\to0$$
and every $n\geq 0$, the square
$$\begin{matrix} S^n(C)&\xrightarrow{\partial_S^n}&S^{n+1}(A)\\ \downarrow^{u^n(C)}&&\downarrow^{u^{n+1}(A)}\\ T^n(C)&\xrightarrow{\partial_T^n}&T^{n+1}(A) \end{matrix}$$
commutes.
