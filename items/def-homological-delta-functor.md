---
id: def-homological-delta-functor
kind: definition
title: "Homological delta functor"
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
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Definition

Let $\mathcal A$ and $\mathcal B$ be abelian categories. A **homological delta
functor** from $\mathcal A$ to $\mathcal B$ is a family of additive functors
$$T_n:\mathcal A\to\mathcal B,\qquad n\geq 0,$$
together with, for every short exact sequence
$$0\to A\to B\to C\to0$$
in the sense of
[[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]], a
family of morphisms
$$\partial_n:T_n(C)\to T_{n-1}(A),\qquad n>0,$$
such that:

1. the sequence
   $$\cdots\to T_n(A)\to T_n(B)\to T_n(C)\xrightarrow{\partial_n}T_{n-1}(A)\to T_{n-1}(B)\to T_{n-1}(C)\to\cdots\to T_0(C)\to0$$
   is exact, and
2. for every morphism between short exact sequences, the connecting squares
   $$\begin{matrix} T_n(C)&\xrightarrow{\partial_n}&T_{n-1}(A)\\ \downarrow&&\downarrow\\ T_n(C')&\xrightarrow{\partial'_n}&T_{n-1}(A') \end{matrix}$$
   commute.

Thus the structure consists of both the long exact sequence and the naturality
of its connecting maps.
