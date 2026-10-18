---
id: alg-hosvd-truncation
kind: algorithm
title: Higher-order SVD truncation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tucker-multilinear-rank-and-mode-products, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Lieven De Lathauwer, Bart De Moor, and Joos Vandewalle, A Multilinear Singular Value Decomposition, SIAM Journal on Matrix Analysis and Applications 21(4) (2000), §§3, 5"
      url: "https://www.math.ucdavis.edu/~saito/data/tensor/lathauwer-etal_mulilinear-SVD.pdf"
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §4.2"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
---

## Definition

Work in exact arithmetic over $\mathbb F\in\{\mathbb R,\mathbb C\}$. Given $A\in\mathbb F^{n_1\times\cdots\times n_d}$ and integer rank caps $0\le r_k\le n_k$, compute an exact SVD of each mode unfolding $A_{(k)}$. Let $U_k$ consist of the first $q_k=\min(r_k,\operatorname{rank}A_{(k)})$ left singular vectors, with any orthonormal choice at a tied cutoff. Define $P_k=U_kU_k^*$, the orthogonal projection onto their span; for $q_k=0$, set $P_k=0$.

Return the factors $U_k$, the core $G=A\times_1U_1^*\times_2\cdots\times_dU_d^*$, and reconstruction
$$ \widehat A=G\times_1U_1\times_2\cdots\times_dU_d =A\times_1P_1\times_2\cdots\times_dP_d. $$
The algorithm makes no finite-precision claim.
