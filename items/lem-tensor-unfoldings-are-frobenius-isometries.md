---
id: lem-tensor-unfoldings-are-frobenius-isometries
kind: lemma
title: Tensor unfoldings preserve the Frobenius inner product
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §2.4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "Lieven De Lathauwer, Bart De Moor, and Joos Vandewalle, A Multilinear Singular Value Decomposition, SIAM Journal on Matrix Analysis and Applications 21(4) (2000), §2"
      url: "https://www.math.ucdavis.edu/~saito/data/tensor/lathauwer-etal_mulilinear-SVD.pdf"
dependency_level: 1
---

## Statement

For tensors $A,B$ of the same finite shape, every mode unfolding and every cut unfolding preserves the Frobenius inner product and norm.

## Facts & Assumptions

**Given:** A field $\mathbb F\in\{\mathbb R,\mathbb C\}$, an order $d\ge2$, and tensors $A,B\in\mathbb F^{n_1\times\cdots\times n_d}$.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: each unfolding uses a fixed lexicographic ordering of the same tensor indices, and the Frobenius inner product sums conjugate-entry times entry over all indices.

## Proof

1.1 For a mode-$k$ unfolding, the map from a multi-index $(i_1,\ldots,i_d)$ to the matrix position consisting of row $i_k$ and the ordered tuple of all other indices is a bijection: the row and column tuple recover every original index exactly once. Thus the entrywise sum defining $\langle A_{(k)},B_{(k)}\rangle_F$ is precisely the same finite sum as $\langle A,B\rangle_F$. [given, F1, construct]

2.1 For a cut-$k$ unfolding, splitting the tuple into $(i_1,\ldots,i_k)$ and $(i_{k+1},\ldots,i_d)$ is also a bijection with the original multi-index set. Its entrywise inner-product sum therefore equals $\langle A,B\rangle_F$ as well. Taking $B=A$ and nonnegative square roots proves each norm identity. [given, F1, algebra] ∎
