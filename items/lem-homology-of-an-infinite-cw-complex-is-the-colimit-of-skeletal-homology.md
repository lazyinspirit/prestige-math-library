---
id: lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology
kind: lemma
title: Homology of an infinite CW complex is the colimit of skeletal homology
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells, cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex, def-singular-chain-complex-and-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For a CW complex $X$, the natural map $\varinjlim_nH_k(X^n;G)\to H_k(X;G)$ is an isomorphism for every $k$.

## Facts & Assumptions

**Given:** A singular cycle or a singular bounding chain in $X$.

## Proof

**Proof technique:** direct.

1.1 A singular chain has finitely many simplices, so its image is compact; [[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]] places it in one finite subcomplex and hence in some skeleton. Thus every homology class is in the image. [given]

2.1 If a class from $H_k(X^n)$ dies in $H_k(X)$, a finite singular bounding chain has compact image and lies in some $X^m$. It already kills the class there, proving injectivity of the colimit map. [step 1.1] ∎
