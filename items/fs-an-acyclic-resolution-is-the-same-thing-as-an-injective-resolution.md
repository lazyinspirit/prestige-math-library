---
id: fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution
kind: false-statement
title: "FALSE: an acyclic resolution is the same thing as an injective resolution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-acyclic-resolution, prop-an-exact-functor-has-vanishing-positive-derived-functors, def-injective-object]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

An acyclic resolution is the same thing as an injective resolution.
## Facts & Assumptions

**Given:** The identity functor on abelian groups, a supplied projective resolution datum $P$ on a class containing the free abelian groups, and the standard free resolution $$\cdots\to0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0.$$

[L1] An $F$-acyclic resolution only requires a correctly oriented exact resolution by $F$-acyclic objects ([[def-f-acyclic-resolution]]).

[L2] Exact functors have vanishing positive derived functors on every object, so every object is acyclic for the identity functor ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).

[L3] Injective objects are characterized by an extension property across monomorphisms ([[def-injective-object]]).

## Refutation

**Proof technique:** direct.

1.1 The identity functor is exact, so [L2] makes every object in the domain of $P$ Id-acyclic. The terms of the displayed free resolution are free abelian groups, hence lie in that domain. Therefore [L1] identifies the displayed free resolution of $\mathbb Z/2$ as an Id-acyclic resolution relative to $P$. [L1, L2, given]

2.1 The term $\mathbb Z$ in that resolution is not injective: the inclusion $2\mathbb Z\hookrightarrow\mathbb Z$ and the map $2n\mapsto n$ into $\mathbb Z$ admit no extension $\mathbb Z\to\mathbb Z$. Thus [L3] fails. So an $F$-acyclic resolution need not be an injective resolution, and the displayed claim is false. [L3, step 1.1, algebra] ∎
