---
id: prop-simplicial-homology-is-functorial
kind: proposition
title: "Simplicial homology is functorial"
status: draft
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-simplicial-chain-map, lem-induced-simplicial-chain-maps-commute-with-boundaries, prop-homology-respects-identities-and-composition]
proof_strategy: direct
verification:
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

Every simplicial map $f:K \to L$ induces homomorphisms
$$f_*:H_n^{\mathrm{simp}}(K)\to H_n^{\mathrm{simp}}(L),$$
and these induced maps respect identities and composition.

## Proof

**Given:** Simplicial maps $f:K \to L$ and $g:L \to M$.

1.1 The previous lemma shows that each $f_\#$ is a chain map, so simplicial homology may be applied degreewise to obtain homomorphisms $f_*$. [given]

1.2 On every oriented simplex, the identity simplicial map induces the identity chain map, and $(g \circ f)_\#=g_\# \circ f_\#$ by direct inspection of the defining formula. Therefore the induced homology maps satisfy $(\operatorname{id}_K)_*=\operatorname{id}$ and $(g \circ f)_*=g_* \circ f_*$. [given]

2.1 Thus simplicial homology defines a functor from simplicial complexes and simplicial maps to graded abelian groups. [step 1.1, step 1.2] ∎
