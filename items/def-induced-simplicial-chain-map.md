---
id: def-induced-simplicial-chain-map
kind: definition
title: "The induced graded homomorphism of a simplicial map"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-map-and-its-geometric-realization, def-orientation-of-a-simplex, def-simplicial-chain-groups-and-boundary]
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
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Definition

Let $f:K \to L$ be a simplicial map. For an oriented simplex
$[v_0,\dots,v_n]$ of $K$, define
$$f_\#[v_0,\dots,v_n]= \begin{cases} [f(v_0),\dots,f(v_n)] & \text{if } f(v_0),\dots,f(v_n) \text{ are pairwise distinct}, \\ 0 & \text{otherwise.} \end{cases}$$
Extending linearly gives the **induced graded homomorphism**
$$f_\#:C_n(K)\to C_n(L)$$
in each degree. The next lemma proves that these homomorphisms commute with the
boundaries and hence form a chain map.
