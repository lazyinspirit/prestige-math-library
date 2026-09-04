---
id: def-simplicial-cycles-boundaries-and-homology
kind: definition
title: "Simplicial cycles, boundaries, and homology"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-chain-groups-and-boundary, thm-the-simplicial-boundary-squares-to-zero, def-cycle-and-boundary-subobjects-of-a-complex, def-homology-object-of-a-chain-complex]
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

For a simplicial complex $K$, define
$$Z_n(K):=\ker(\partial_n)\subseteq C_n(K),\qquad B_n(K):=\operatorname{im}(\partial_{n+1})\subseteq C_n(K).$$
By $\partial^2=0$, every boundary is a cycle. The **$n$th simplicial homology
group** is
$$H_n^{\mathrm{simp}}(K):=Z_n(K)/B_n(K).$$
