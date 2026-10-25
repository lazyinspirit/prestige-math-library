---
id: def-effaceable-homological-delta-functor-in-positive-degrees
kind: definition
title: "Effaceable homological delta functor in positive degrees"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homological-delta-functor, def-projective-object]
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
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Definition

Let $T=(T_n,\partial)$ be a homological delta functor on an abelian category
$\mathcal A$. We say that $T$ is **effaceable in positive degrees by
projectives** when for every $n>0$ and every object $A$ of $\mathcal A$, there
exists an epimorphism
$$p:P\twoheadrightarrow A$$
with $P$ projective such that the induced map
$$T_n(p):T_n(P)\to T_n(A)$$
is zero.

No globally chosen family of such epimorphisms is part of the definition.
