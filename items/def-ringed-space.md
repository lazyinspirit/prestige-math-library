---
id: def-ringed-space
kind: definition
title: "A ringed space"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-of-groups-rings-modules, def-sheaf-on-topological-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 6.25.1"
      url: "https://stacks.math.columbia.edu/tag/0090"
    - title: "Ravi Vakil, The Rising Sea, Example 2.2.13"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

A **ringed space** is a pair
$$
(X,\mathcal O_X)
$$
consisting of a topological space $X$ and a sheaf of commutative rings
$\mathcal O_X$ on $X$.

The sheaf $\mathcal O_X$ is called the **structure sheaf** of the ringed space.
