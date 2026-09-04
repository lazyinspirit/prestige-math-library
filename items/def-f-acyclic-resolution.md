---
id: def-f-acyclic-resolution
kind: definition
title: "An F-acyclic resolution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-acyclic-object-for-a-left-exact-functor, def-acyclic-object-for-a-right-exact-functor, def-projective-resolution-in-an-abelian-category, def-injective-resolution-in-an-abelian-category]
verification:
  audited: 2026-09-04
  precheck: n/a
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
## Definition

Let $F$ be an additive functor between abelian categories.

1. If $F$ is left exact and $I$ is a supplied injective resolution datum on a
   class $\mathcal D$, an **$F$-acyclic resolution of $A$ relative to $I$** is
   a coaugmented exact complex
   $$0\to A\to J^0\to J^1\to\cdots$$
   such that every $J^q$ lies in $\mathcal D$ and is $F$-acyclic in the sense
   of
   [[def-acyclic-object-for-a-left-exact-functor]].
2. If $F$ is right exact and $P$ is a supplied projective resolution datum on a
   class $\mathcal D$, an **$F$-acyclic resolution of $A$ relative to $P$** is
   an augmented exact complex
   $$\cdots\to P_1\to P_0\to A\to0$$
   such that every $P_q$ lies in $\mathcal D$ and is $F$-acyclic in the sense
   of
   [[def-acyclic-object-for-a-right-exact-functor]].

Thus the phrase keeps both the resolution orientation and the chosen supplied
datum visible.
