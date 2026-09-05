---
id: def-universal-delta-functor
kind: definition
title: "Universal delta functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-homological-delta-functors, def-morphism-of-cohomological-delta-functors]
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
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Definition

Let $T$ be a delta functor.

If $T=(T_n,\partial^T)$ is homological, then $T$ is **universal** when for
every homological delta functor $S=(S_n,\partial^S)$ and every natural
transformation
$$u_0:S_0\Rightarrow T_0,$$
there exists a unique morphism of homological delta functors
$$u:S\to T$$
whose degree-zero component is $u_0$.

If $T=(T^n,\partial_T)$ is cohomological, then $T$ is **universal** when for
every cohomological delta functor $S=(S^n,\partial_S)$ and every natural
transformation
$$u^0:T^0\Rightarrow S^0,$$
there exists a unique morphism of cohomological delta functors
$$u:T\to S$$
whose degree-zero component is $u^0$.

So universality says that the higher-degree components are forced by the
degree-zero data and the delta-functor axioms.
