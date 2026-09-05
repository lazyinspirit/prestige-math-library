---
id: def-module-on-ringed-space
kind: definition
title: "Modules on a ringed space"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-of-groups-rings-modules, def-ringed-space]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 6.26"
      url: "https://stacks.math.columbia.edu/tag/0094"
    - title: "Ravi Vakil, The Rising Sea, Example 2.2.13 and Section 2.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $(X,\mathcal O_X)$ be a ringed space.

An **$\mathcal O_X$-module** is a sheaf $\mathcal F$ of abelian groups on $X$
such that for every open set $U \subseteq X$ the section group $\mathcal F(U)$
is an $\mathcal O_X(U)$-module, and for every inclusion $V \subseteq U$ the
restriction map
$$
\mathcal F(U)\longrightarrow\mathcal F(V)
$$
is $\mathcal O_X(U)$-linear after restricting scalars along
$\mathcal O_X(U)\to\mathcal O_X(V)$.

A **morphism of $\mathcal O_X$-modules** is a morphism of the underlying sheaves
of abelian groups whose components are $\mathcal O_X(U)$-linear on every open
set $U$.
