---
id: def-effaceable-cohomological-delta-functor-in-positive-degrees
kind: definition
title: "Effaceable cohomological delta functor in positive degrees"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cohomological-delta-functor, def-injective-object]
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
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Definition

Let $T=(T^n,\partial)$ be a cohomological delta functor on an abelian category
$\mathcal A$. We say that $T$ is **effaceable in positive degrees by
injectives** when for every $n>0$ and every object $A$ of $\mathcal A$, there
exists a monomorphism
$$u:A\rightarrowtail I$$
with $I$ injective such that the induced map
$$T^n(u):T^n(A)\to T^n(I)$$
is zero.

Again, the definition only asks for existence object by object and degree by
degree.
