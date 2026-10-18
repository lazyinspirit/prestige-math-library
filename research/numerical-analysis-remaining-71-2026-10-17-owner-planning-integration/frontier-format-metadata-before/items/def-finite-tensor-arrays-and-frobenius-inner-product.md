---
id: def-finite-tensor-arrays-and-frobenius-inner-product
kind: definition
title: Finite tensor arrays and the Frobenius inner product
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §§2–4"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §§2–4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "Lieven De Lathauwer, Bart De Moor, and Joos Vandewalle, A Multilinear Singular Value Decomposition, SIAM Journal on Matrix Analysis and Applications 21(4) (2000), §§2–3"
      url: "https://www.math.ucdavis.edu/~saito/data/tensor/lathauwer-etal_mulilinear-SVD.pdf"
---

## Definition

Fix a field $\mathbb F\in\{\mathbb R,\mathbb C\}$, an integer $d\ge2$, and positive integers $n_1,\ldots,n_d$. A finite order-$d$ tensor of shape $(n_1,\ldots,n_d)$ is an array $A=(A_{i_1,\ldots,i_d})$ indexed by $1\le i_k\le n_k$. Its Frobenius inner product and norm are
$$ \langle A,B\rangle_F=\sum_{i_1=1}^{n_1}\cdots\sum_{i_d=1}^{n_d}\overline{A_{i_1,\ldots,i_d}}B_{i_1,\ldots,i_d}, \qquad \|A\|_F=\sqrt{\langle A,A\rangle_F}. $$
For a matrix, rank means the dimension of its column image and the Frobenius inner product is the same entrywise formula. The adjoint $M^*$ is conjugate transpose (transpose over $\mathbb R$).

For $1\le k\le d$, the mode-$k$ unfolding $A_{(k)}$ has $n_k$ rows and $\prod_{j\ne k}n_j$ columns. Its row index is $i_k$ and its column index is the remaining tuple in increasing mode order, lexicographically ordered. Its entry at that row and column is the corresponding entry of $A$. For $1\le k<d$, the cut-$k$ unfolding $A^{\langle k\rangle}$ has row tuple $(i_1,\ldots,i_k)$ and column tuple $(i_{k+1},\ldots,i_d)$, each lexicographically ordered. These conventions fix all reshapes used below.
