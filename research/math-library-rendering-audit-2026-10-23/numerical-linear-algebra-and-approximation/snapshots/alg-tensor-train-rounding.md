---
id: alg-tensor-train-rounding
kind: algorithm
title: Tensor-train rounding
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §3"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §1.2.4, Algorithm 1.3; §1.2.5 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 2
---

## Definition

Work in exact arithmetic over $\mathbb F\in\{\mathbb R,\mathbb C\}$. The input is a valid TT core list for a tensor of order $d\ge2$ and exactly one of rank caps $c_1,\ldots,c_{d-1}\in\mathbb N_0$ or absolute tail tolerances $\tau_1,\ldots,\tau_{d-1}\in[0,\infty)$.

1. **Left orthogonalize without truncation.** For $k=1,\ldots,d-1$, reshape core $G_k$ into a matrix with rows $(\alpha_{k-1},i_k)$ and columns $\alpha_k$. Compute an exact compact SVD $M=U\Sigma V^*$, replace $G_k$ by the reshape of $U$, and absorb $\Sigma V^*$ into the next core along their common bond. Omitting zero singular directions is exact. The resulting cores $G_1,\ldots,G_{d-1}$ are left-isometric.

2. **Truncate from right to left.** For $k=d,d-1,\ldots,2$, reshape the current $G_k$ into a matrix $M_k$ with rows $\alpha_{k-1}$ and columns $(i_k,\alpha_k)$, and compute an exact compact SVD $M_k=U_k\Sigma_kV_k^*$. If its positive singular values are $\sigma_1\ge\cdots\ge\sigma_s>0$, choose $q_{k-1}=\min(c_{k-1},s)$ for rank caps, or the least $q_{k-1}\in\{0,\ldots,s\}$ with $\sum_{j>q_{k-1}}\sigma_j^2\le\tau_{k-1}^2$ for tolerances. Record $\delta_{k-1}=(\sum_{j>q_{k-1}}\sigma_j^2)^{1/2}$. Replace $G_k$ by the reshape of the first $q_{k-1}$ rows of $V_k^*$ and absorb $U_{k,1:q}\Sigma_{k,1:q}$ into the previous core.

If $q_{k-1}=0$, the represented tensor becomes zero; set all remaining internal ranks to zero and their unperformed tails to zero. If the input represents zero, return the all-zero-rank representation and zero tails immediately. The output is the rounded core list and all recorded cut tails. No finite-precision error guarantee is part of this exact-arithmetic procedure.
