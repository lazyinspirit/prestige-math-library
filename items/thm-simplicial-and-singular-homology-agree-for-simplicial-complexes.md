---
id: thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
kind: theorem
title: "Simplicial and singular homology agree"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simplicial-to-singular-chains-commute-with-boundaries, cor-the-simplex-has-zero-reduced-simplicial-homology, thm-five-lemma-for-a-morphism-of-long-exact-sequences]
proof_strategy: induction
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 2.27"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For every simplicial complex $K$, the natural simplicial-to-singular chain map
induces $H_n^{\mathrm{simp}}(K;G)\cong H_n(|K|;G)$ for all $n$.

## Facts & Assumptions

**Given:** A simplicial complex $K$ and the natural simplicial-to-singular map.

## Proof

**Proof technique:** induction.

1.1 Extend the simplicial chains, the characteristic-simplex map, and its boundary identity $G$-linearly. For a finite-dimensional complex, filter by skeleta. The relative comparison for $(K^r,K^{r-1})$ is an isomorphism: both relative theories are a direct sum of one copy of $G$ for each $r$-simplex in degree $r$ and vanish in the other degrees. [given, base, construct]

2.1 The simplicial and singular pair long exact sequences commute with this comparison. Skeletal induction and the five lemma therefore give an isomorphism for every finite-dimensional $K$. [step 1.1, ih, algebra]

3.1 A finite singular cycle, and likewise a finite chain witnessing a boundary, has compact image. In a simplicial complex this image meets only finitely many open simplices and is contained in a finite-dimensional skeleton. The finite-dimensional result gives respectively surjectivity and injectivity for arbitrary $K$. The characteristic-simplex construction commutes with simplicial maps, so the isomorphism is natural. [step 2.1, discharge-induction] ∎
