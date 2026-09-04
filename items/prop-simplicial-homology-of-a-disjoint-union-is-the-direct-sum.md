---
id: prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum
kind: proposition
title: "Simplicial homology of a disjoint union is the direct sum"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simplicial-cycles-boundaries-and-homology, def-simplicial-chain-groups-and-boundary]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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

## Statement

If $K=\bigsqcup_{\alpha \in A} K_\alpha$ is a disjoint union of simplicial
complexes, then for every $n$,
$$H_n^{\mathrm{simp}}(K)\cong \bigoplus_{\alpha \in A} H_n^{\mathrm{simp}}(K_\alpha).$$

## Facts & Assumptions

**Given:** A disjoint union $K=\bigsqcup_{\alpha \in A} K_\alpha$.

[L1] For each $n\ge0$, the simplicial chain group $C_n(K)$ is the free abelian group on the oriented nondegenerate $n$-simplices of $K$, and the boundary map is defined simplexwise ([[def-simplicial-chain-groups-and-boundary]]).

[L2] Simplicial homology is the quotient of the cycle group by the boundary group: $$H_n^{\mathrm{simp}}(K)=Z_n(K)/B_n(K).$$ ([[def-simplicial-cycles-boundaries-and-homology]])

## Proof

**Proof technique:** direct.

1.1 Every nonempty simplex of $K$ lies in exactly one summand $K_\alpha$, so for each $n\ge0$ one has $C_n(K)\cong \bigoplus_{\alpha \in A} C_n(K_\alpha)$, and under this identification the boundary operator acts componentwise. [L1, given]

2.1 Therefore for each $n\ge0$ the cycle groups, boundary groups, and homology groups split componentwise, giving $H_n^{\mathrm{simp}}(K)\cong \bigoplus_{\alpha \in A} H_n^{\mathrm{simp}}(K_\alpha)$. For $n<0$, both sides are zero by definition. This proves the statement for every $n$. [L2, step 1.1] ∎
