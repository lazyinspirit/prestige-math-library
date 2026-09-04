---
id: def-augmentation-and-reduced-simplicial-homology
kind: definition
title: "Augmentation and reduced simplicial homology"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-chain-groups-and-boundary, def-homology-object-of-a-chain-complex]
verification:
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

For a simplicial complex $K$, the **augmentation**
$$\varepsilon:C_0(K)\to \mathbb Z$$
is the homomorphism determined by $\varepsilon([v])=1$ for every vertex $v$.

The **augmented simplicial chain complex** is
$$\cdots \to C_2(K)\xrightarrow{\partial_2} C_1(K)\xrightarrow{\partial_1} C_0(K)\xrightarrow{\varepsilon} \mathbb Z \to 0.$$
Its homology groups are the **reduced simplicial homology groups**
$\widetilde H_n^{\mathrm{simp}}(K)$.

If $K$ has no vertices, then $C_n(K)=0$ for all $n \geq 0$, so
$\widetilde H_{-1}^{\mathrm{simp}}(K)\cong \mathbb Z$ and
$\widetilde H_n^{\mathrm{simp}}(K)=0$ for $n \neq -1$.
