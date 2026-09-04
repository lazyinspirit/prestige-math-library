---
id: thm-the-simplicial-boundary-squares-to-zero
kind: theorem
title: "The simplicial boundary squares to zero"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simplicial-chain-groups-and-boundary, lem-simplicial-boundary-is-independent-of-oriented-representative]
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

For every simplicial complex $K$ and every $n\geq1$, one has
$$\partial_{n-1}\partial_n=0:C_n(K)\to C_{n-2}(K).$$

## Proof

**Given:** An integer $n\geq1$ and an oriented $n$-simplex
$[v_0,\dots,v_n]$.

1.1 Expanding $\partial_{n-1}\partial_n[v_0,\dots,v_n]$ produces the sum of all codimension-two faces obtained by deleting two vertices, once by deleting $v_i$ then $v_j$ and once by deleting $v_j$ then $v_i$. [given]

2.1 The two appearances of the same codimension-two face have opposite signs because the exponents differ by $1$. Hence every codimension-two face cancels with its partner, and the full sum is $0$. [step 1.1]

3.1 The boundary maps are homomorphisms, so vanishing on every oriented simplex implies $\partial_{n-1}\partial_n=0$ on all of $C_n(K)$. [step 2.1] ∎
