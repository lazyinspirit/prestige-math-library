---
id: def-cohomological-delta-functor
kind: definition
title: "Cohomological delta functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-additive-functor, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]
verification:
  audited: 2026-09-05
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

Let $\mathcal A$ and $\mathcal B$ be abelian categories. A
**cohomological delta functor** from $\mathcal A$ to $\mathcal B$ is a family
of additive functors
$$T^n:\mathcal A\to\mathcal B,\qquad n\geq 0,$$
together with, for every short exact sequence
$$0\to A\to B\to C\to0,$$
a family of morphisms
$$\partial^n:T^n(C)\to T^{n+1}(A),\qquad n\geq 0,$$
such that:

1. the sequence
   $$0\to T^0(A)\to T^0(B)\to T^0(C)\xrightarrow{\partial^0}T^1(A)\to T^1(B)\to T^1(C)\xrightarrow{\partial^1}T^2(A)\to\cdots$$
   is exact, and
2. for every morphism between short exact sequences, the connecting squares
   $$\begin{matrix} T^n(C)&\xrightarrow{\partial^n}&T^{n+1}(A)\\ \downarrow&&\downarrow\\ T^n(C')&\xrightarrow{\partial'^n}&T^{n+1}(A') \end{matrix}$$
   commute.

In particular, $T^0$ is left exact because it begins such a long exact
sequence.
