---
id: thm-tensor-train-storage-and-inner-product-cost
kind: theorem
title: Tensor-train storage and inner-product costs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §4.2"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §1.2 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 2
---

## Statement

If a TT representation has mode sizes $n_k$ and bond sizes $r_0=r_d=1,r_1,\ldots,r_{d-1}$, its core storage is exactly
$$ \sum_{k=1}^d n_kr_{k-1}r_k $$
field entries. If $A$ and $B$ have TT cores of bond sizes $r_k$ and $s_k$, respectively, their Frobenius inner product can be computed with
$$ O\!\left(\sum_{k=1}^d n_kr_{k-1}s_{k-1}r_ks_k\right) $$
scalar arithmetic operations and $O(\max_k r_ks_k)$ additional workspace entries.

## Facts & Assumptions

**Given:** Two finite tensors $A,B$ with exact TT cores $G_k,H_k$, same mode sizes $n_k$, and bond sizes $r_0=r_d=s_0=s_d=1$.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: $\langle A,B\rangle_F$ is the sum over all multi-indices of $\overline{A_{i_1,\ldots,i_d}}B_{i_1,\ldots,i_d}$.

[F2] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: each tensor entry is the contraction of its mode cores over adjacent bond indices.

## Proof

1.1 Core $G_k$ contains $r_{k-1}n_kr_k$ entries, so storing all cores requires the stated sum. The corresponding dense tensor would have $\prod_kn_k$ entries; the TT formula counts its actual core storage and by itself asserts no savings unless that sum is smaller. [F2, algebra]

1.2 Set $E_0=[1]$ and recursively define $(E_k)_{\alpha_k,\beta_k}=\sum_{\alpha_{k-1}=1}^{r_{k-1}}\sum_{\beta_{k-1}=1}^{s_{k-1}}\sum_{i_k=1}^{n_k}(E_{k-1})_{\alpha_{k-1},\beta_{k-1}}\overline{G_k(\alpha_{k-1},i_k,\alpha_k)}H_k(\beta_{k-1},i_k,\beta_k)$. Induction on $k$ expands $E_k$ as the sum over indices $i_1,\ldots,i_k$ and bonds $\alpha_k,\beta_k$ of the conjugate prefix contraction of $A$ times the prefix contraction of $B$. At $k=d$, the terminal bonds each have size one, so this is exactly $\langle A,B\rangle_F$ by [F1] and [F2]. [F1, F2, construct, algebra]

2.1 At step $k$, each of the $r_ks_k$ output entries accumulates $n_kr_{k-1}s_{k-1}$ terms. Thus its arithmetic is bounded by a fixed constant times $n_kr_{k-1}s_{k-1}r_ks_k$. Summing over modes gives the displayed cost. The recurrence stores the previous and next environments, of sizes $r_{k-1}s_{k-1}$ and $r_ks_k$, so its additional workspace is bounded by a constant times their maximum over $k$. [step 1.2, algebra] ∎
