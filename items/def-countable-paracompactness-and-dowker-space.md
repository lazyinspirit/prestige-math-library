---
id: def-countable-paracompactness-and-dowker-space
kind: definition
title: Countable paracompactness and Dowker spaces
status: draft
origin: pipeline
deps: [def-cover-refinement-and-local-finiteness, def-normal-and-t4-spaces]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Topology, Chapter 4 introduction p. 25 and §3 Definition 3.2 p. 27"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Definition

A topological space $X$ is **countably paracompact** if every countable open cover $\mathcal U$ of $X$ has a locally finite open **refining cover** $\mathcal V$: its members are open, their union is $X$, each is contained in some member of $\mathcal U$, and every point has a neighborhood meeting only finitely many members of $\mathcal V$. The terminology is that of [[def-cover-refinement-and-local-finiteness]]. Countable includes finite; the refinement is not required in this definition to be countable.

A **Dowker space** is a $T_1$ normal space that is not countably paracompact. Normality means separation of disjoint closed sets by disjoint open sets and does not include $T_1$ in this library; see [[def-normal-and-t4-spaces]]. Hart's Chapter 4 introduction instead names these spaces by failure of normality of their interval product; the product characterization below proves the equivalence under AC.

The empty space is countably paracompact: the empty family refines and covers it. A one-point space is countably paracompact: the singleton family consisting of the space refines every cover. More generally every finite open cover is itself locally finite. These conventions do not assert that every space with infinite countable covers is countably paracompact. No choice axiom is part of either definition.
