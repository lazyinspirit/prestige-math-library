---
id: thm-hosvd-quasioptimal-multilinear-rank-error
kind: theorem
title: HOSVD quasioptimality for multilinear rank
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tucker-multilinear-rank-and-mode-products, lem-tensor-unfoldings-are-frobenius-isometries, thm-best-rank-k-frobenius-matrix-approximation, alg-hosvd-truncation, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: pass
sources:
  references:
    - title: "Lieven De Lathauwer, Bart De Moor, and Joos Vandewalle, A Multilinear Singular Value Decomposition, SIAM Journal on Matrix Analysis and Applications 21(4) (2000), §5, Property 10"
      url: "https://www.math.ucdavis.edu/~saito/data/tensor/lathauwer-etal_mulilinear-SVD.pdf"
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §4.2"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
dependency_level: 3
---

## Statement

Let $A\in\mathbb F^{n_1\times\cdots\times n_d}$ and let $\widehat A$ be the truncated HOSVD with mode-rank caps $r_1,\ldots,r_d$. Then
$$ \|A-\widehat A\|_F \le \sqrt d\inf_{B\in\mathcal T_r}\|A-B\|_F, $$
where $\mathcal T_r$ is the set of tensors whose $k$th unfolding has rank at most $r_k$.

## Facts & Assumptions

**Given:** A finite tensor, mode-rank caps $0\le r_k\le n_k$, and the HOSVD output.

[F1] [[def-tucker-multilinear-rank-and-mode-products]]: $\mathcal T_r$ imposes the matrix rank bound $\operatorname{rank}B_{(k)}\le r_k$ in every mode.

[F2] [[lem-tensor-unfoldings-are-frobenius-isometries]]: mode unfoldings preserve Frobenius norms.

[F3] [[thm-best-rank-k-frobenius-matrix-approximation]]: the mode-$k$ truncated SVD has squared residual equal to its discarded singular-value tail and minimizes this residual over matrices of rank at most $r_k$.

[F4] [[alg-hosvd-truncation]]: the HOSVD reconstruction is the product of the mode-wise orthogonal projections onto the leading left singular subspaces.

[F5] [[thm-singular-value-decomposition]]: every mode unfolding has an exact SVD with orthonormal singular vectors.

## Proof

1.1 Let $P_k=U_kU_k^*$ be the orthogonal projection used in mode $k$, and let $\mathcal P_k$ denote its action on that mode. The projections $\mathcal P_k$ commute for distinct modes, since they act on different tensor indices. By [F4], $\widehat A=\mathcal P_1\cdots\mathcal P_dA$. The telescoping identity gives $A-\widehat A=\sum_{k=1}^d\mathcal P_1\cdots\mathcal P_{k-1}(I-\mathcal P_k)A$. For $k<\ell$, the $k$th summand lies in the kernel of $\mathcal P_k$, while the $\ell$th lies in its range. These summands are orthogonal, so their squared norms add. [F4, F5, algebra]

2.1 Each $\mathcal P_j$ is an orthogonal projection and hence a contraction: its range and kernel are orthogonal, so applying it cannot increase the squared norm. Consequently, $\|A-\widehat A\|_F^2=\sum_{k=1}^d\|\mathcal P_1\cdots\mathcal P_{k-1}(I-\mathcal P_k)A\|_F^2\le\sum_{k=1}^d\|(I-\mathcal P_k)A\|_F^2$. By [F2], $\|(I-\mathcal P_k)A\|_F$ is the Frobenius error of truncating $A_{(k)}$ to rank $r_k$. [F2, step 1.1, algebra]

3.1 Fix any $B\in\mathcal T_r$. Its mode-$k$ unfolding has rank at most $r_k$ by [F1], so [F3] implies $\|(I-\mathcal P_k)A\|_F\le\|A_{(k)}-B_{(k)}\|_F=\|A-B\|_F$. Substitute this bound for each $k$ in step 2.1 to obtain $\|A-\widehat A\|_F^2\le d\|A-B\|_F^2$. Since it holds for every $B\in\mathcal T_r$, taking the infimum and square roots proves the claim. [F1, F2, F3, step 2.1, algebra] ∎
