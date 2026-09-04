---
id: cor-the-simplex-has-zero-reduced-simplicial-homology
kind: corollary
title: "A simplex has zero reduced simplicial homology"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible, cor-a-contractible-complex-is-acyclic, def-augmentation-and-reduced-simplicial-homology]
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

If $\Delta^n$ is a simplex, then
$$\widetilde H_k^{\mathrm{simp}}(\Delta^n)=0$$
for every $k$.

## Proof

**Given:** A simplex $\Delta^n$.

1.1 The previous lemma gives a contracting homotopy for the augmented simplicial chain complex of $\Delta^n$. [given]

2.1 A contractible chain complex is acyclic, so every reduced simplicial homology group of $\Delta^n$ vanishes. [step 1.1] ∎
