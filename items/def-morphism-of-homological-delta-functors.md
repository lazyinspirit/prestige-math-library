---
id: def-morphism-of-homological-delta-functors
kind: definition
title: "Morphism of homological delta functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homological-delta-functor, def-natural-transformation]
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
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Definition

Let $S=(S_n,\partial^S)$ and $T=(T_n,\partial^T)$ be homological delta
functors. A **morphism of homological delta functors** $u:S\to T$ is a family
of natural transformations
$$u_n:S_n\Rightarrow T_n,\qquad n\geq 0,$$
such that for every short exact sequence
$$0\to A\to B\to C\to0$$
and every $n>0$, the square
$$\begin{matrix} S_n(C)&\xrightarrow{\partial_n^S}&S_{n-1}(A)\\ \downarrow^{u_n(C)}&&\downarrow^{u_{n-1}(A)}\\ T_n(C)&\xrightarrow{\partial_n^T}&T_{n-1}(A) \end{matrix}$$
commutes.

Equivalently, the degreewise natural transformations assemble into a morphism
of the long exact sequences attached to every short exact sequence.
