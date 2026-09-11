---
id: fs-direct-sum-and-product-totalisations-are-always-isomorphic
kind: false-statement
title: Direct sum and product totalisations are always isomorphic
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals", "lem-countable-sequence-groups-and-tail-filtrations", "def-direct-sum-total-complex-of-a-double-complex", "def-product-total-complex-of-a-double-complex"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

**False:** Direct-sum and product totalisations are always isomorphic whenever both exist.

## Facts & Assumptions

[F1] [[def-direct-sum-total-complex-of-a-double-complex]] and [[def-product-total-complex-of-a-double-complex]] specify the diagonal objects and total differentials.

[F2] [[lem-countable-sequence-groups-and-tail-filtrations]] constructs $S=(\mathbb Z/2)^{(\mathbb N)}$ and $P=(\mathbb Z/2)^{\mathbb N}$ and proves that they have different cardinalities.

## Refutation

**Given:** The infinite-diagonal witness of [[cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals]]: $C_{j,-j}=\mathbb Z/2$ for $j\ge0$, every other component zero, and all arrows zero.

1.1 All double-complex identities hold because all maps vanish. The degree-zero direct-sum total object is $S$ and the degree-zero product total object is $P$ by [F1, F2]. Every other total degree is zero and both total differentials are zero. Thus both totalisations exist, with infinitely many nonzero summands on their sole nonzero diagonal. [F1, F2]

2.1 An isomorphism of these chain complexes would induce a bijection $S\to P$, impossible because $S$ is countably infinite and $P$ is uncountable. The canonical comparison is also explicitly nonsurjective: the constant-one sequence lies in $P$ and has infinite support, so is absent from $S$. This verifies the failed conclusion for abstract as well as canonical isomorphisms. All zero degrees and the index $j=0$ are included; the cardinality proof and this witness require no AC. [F2, step 1.1] ∎
