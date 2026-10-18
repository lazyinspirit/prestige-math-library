---
id: alg-sequential-tensor-train-svd
kind: algorithm
title: Sequential tensor-train SVD
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §2"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mark D. Dupuy, Tensor Train Decomposition, full lecture notes, Chapter 1, §§1.2.1, 1.2.4 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
---

## Definition

Work in exact arithmetic over $\mathbb F\in\{\mathbb R,\mathbb C\}$. The input is a tensor $A\in\mathbb F^{n_1\times\cdots\times n_d}$ with $d\ge2$, and exactly one of:

- rank caps $c_1,\ldots,c_{d-1}\in\mathbb N_0$; or
- absolute tail tolerances $\tau_1,\ldots,\tau_{d-1}\in[0,\infty)$.

At cut $k$, flatten the current remainder with rows $(\alpha_{k-1},i_k)$ and columns $(i_{k+1},\ldots,i_d)$, where $\alpha_0=1$, and compute an exact compact SVD $M_k=U_k\Sigma_kV_k^*$. Its positive singular values are ordered decreasingly as $\sigma_1,\ldots,\sigma_s$. Under rank caps choose $q_k=\min(c_k,s)$. Under tolerances choose the least $q_k\in\{0,\ldots,s\}$ for which $\sum_{j>q_k}\sigma_j^2\le\tau_k^2$. This set is nonempty because $q_k=s$ gives tail zero. Record the discarded tail
$$ \delta_k=\left(\sum_{j>q_k}\sigma_j^2\right)^{1/2}. $$

Reshape the first $q_k$ columns of $U_k$ into core $G_k$ and reshape $\Sigma_{k,1:q_k}V_{k,1:q_k}^*$ as the next remainder. After cut $d-1$, reshape the remaining matrix as $G_d$. If $q_k=0$, the remainder has zero row dimension; all later ranks and tails are set to zero and the remaining cores are the corresponding empty zero arrays. Thus the zero tensor has all internal ranks zero, a cap zero returns the zero tensor, and a tolerance large enough to select $q_k=0$ does the same. The output is the TT core list and the cut tails $(\delta_k)$. Any SVD tie at a retained cutoff may be resolved by any orthonormal choice within the tied singular subspace.
