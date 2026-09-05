---
id: def-irreducible-topological-space-and-subset
kind: definition
title: "Irreducible topological spaces and irreducible subsets in the subspace topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 14.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Definition 5.8.1"
      url: "https://stacks.math.columbia.edu/tag/004U"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $(X,\mathcal T)$ be a topological space ([[def-topological-space]]).

The space $X$ is **irreducible** when $X\neq\varnothing$ and whenever $$ X=F_1\cup F_2 $$ with $F_1,F_2\subseteq X$ closed, one has $X=F_1$ or $X=F_2$.

If $A\subseteq X$, then $A$ is an **irreducible subset** of $X$ when the subspace $(A,\mathcal T_A)$ is irreducible, where $\mathcal T_A$ is the subspace topology ([[def-subspace-topology-top]]).

