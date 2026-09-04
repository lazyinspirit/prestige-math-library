---
id: lem-the-simplicial-augmentation-is-a-chain-map
kind: lemma
title: "The simplicial augmentation is a chain map"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-and-reduced-simplicial-homology, def-simplicial-chain-groups-and-boundary]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

For every simplicial complex $K$, one has
$$\varepsilon\partial_1=0,$$
so the augmented simplicial chain groups form a chain complex.

## Proof

**Given:** An oriented edge $[v_0,v_1]$ and the augmented simplicial chain complex of $K$.

1.1 By the boundary formula, $\partial_1[v_0,v_1]=[v_1]-[v_0]$. Applying the augmentation gives $\varepsilon([v_1]-[v_0])=1-1=0$. [given]

2.1 In degrees $n \geq 1$, the ordinary simplicial differentials already satisfy $\partial_{n-1}\partial_n=0$, so adding $\varepsilon$ at degree $0$ preserves the chain-complex condition. [step 1.1] ∎
