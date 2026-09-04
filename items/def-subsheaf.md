---
id: def-subsheaf
kind: definition
title: "Subsheaves"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sheaf-on-topological-space, def-morphism-of-presheaves]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 29"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $\mathcal G$ be a sheaf of sets on a topological space $X$.

A **subsheaf** of $\mathcal G$ is a sheaf $\mathcal H$ on $X$ together with a
morphism of presheaves
$$\iota:\mathcal H\longrightarrow\mathcal G$$
([[def-morphism-of-presheaves]]) such that for every open set $U\subseteq X$,
the component
$$\iota_U:\mathcal H(U)\longrightarrow\mathcal G(U)$$
is injective.

Equivalently, one may identify $\mathcal H(U)$ with a subset of $\mathcal G(U)$
for every open $U$, with restriction maps inherited from $\mathcal G$, and then
require that these subsets define a sheaf. A subpresheaf of a sheaf need not be
a subsheaf, because it may fail gluing.
