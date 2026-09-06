---
id: thm-the-bar-cochain-complex-computes-derived-group-cohomology
kind: theorem
title: "The bar cochain complex computes group cohomology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module, thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes, def-hom-double-complex-of-a-projective-and-an-injective-resolution, lem-the-two-hom-double-complex-differentials-commute-before-signing, def-direct-sum-total-complex-on-finite-diagonals, lem-acyclic-assembly-by-exact-columns, lem-acyclic-assembly-by-exact-rows, lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact, lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For every left $G$-module $M$, the cohomology of $(C^\bullet(G,M),d)$ is naturally $H^n(G;M)$.

## Proof

**Given:** The free bar resolution $P\to\mathbb Z$ and an injective resolution $M\to I$.

1.1 Form the finite-diagonal double complex $\operatorname{Hom}_{\mathbb Z[G]}(P,I)$. Projectivity of each $P_i$ makes the columns exact away from $\operatorname{Hom}(P,M)$. [given]

1.2 Injectivity of each $I^j$ makes the rows exact away from $\operatorname{Hom}(\mathbb Z,I)$. The two acyclic-assembly comparisons identify the cohomology of these edge complexes. [given]

2.1 The right edge computes $\operatorname{Ext}_{\mathbb Z[G]}^n(\mathbb Z,M)=H^n(G;M)$, while the left edge is homogeneous bar cochains; the homogeneous--inhomogeneous isomorphism identifies it with $C^\bullet(G,M)$. [step 1.1, step 1.2] ∎
