---
id: def-lindelof-degree-and-cellularity
kind: definition
title: "Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions"
status: published
origin: session
deps: [def-compact-space, def-topological-space, def-cardinal, def-cardinal-arithmetic, def-axiom-of-choice]
justified_by: [lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The **Lindelöf degree** $L(X)$ is the least cardinal $\kappa$ such that every open cover of $X$ has a subcover of cardinality at most $\kappa$. The **cellularity** $c(X)$ is the cardinal supremum of the cardinalities of pairwise-disjoint families of nonempty open subsets of $X$.

These are raw cardinal functions. Thus finite covers and finite cellular families retain their finite cardinalities. Their well-definedness is supplied by the forward lemmas named in `justified_by`.
