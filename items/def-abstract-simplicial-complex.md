---
id: def-abstract-simplicial-complex
kind: definition
title: "An abstract simplicial complex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Definition

An **abstract simplicial complex** is a pair $(V,K)$ consisting of a set $V$ of
vertices and a family $K$ of finite subsets of $V$ such that:

1. $\varnothing \in K$;
2. if $\sigma \in K$ and $\tau \subseteq \sigma$, then $\tau \in K$;
3. every singleton $\{v\}$ with $v \in V$ lies in $K$.

The elements of $K$ are the **simplices** of the complex. If $\sigma \in K$ is
nonempty, its dimension is $\dim \sigma := |\sigma|-1$, and the empty simplex
has dimension $-1$.
