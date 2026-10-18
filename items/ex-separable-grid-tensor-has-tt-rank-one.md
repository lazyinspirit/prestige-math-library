---
id: ex-separable-grid-tensor-has-tt-rank-one
kind: example
title: A separable grid tensor has TT rank one
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges, thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §2"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, Example 1.2.3 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 4
---

## Example

For nonzero vectors $u^{(k)}\in\mathbb R^{n_k}$, consider the separable grid tensor
$$ A=u^{(1)}\otimes\cdots\otimes u^{(d)}. $$

## Verification

**Given:** $d\ge2$ and nonzero vectors $u^{(k)}\in\mathbb R^{n_k}$.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: a cut unfolding groups the first $k$ indices into rows and the remaining indices into columns.

[F2] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: TT cores contract over their shared bond indices.

[F3] [[thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]]: the exact minimal bond size at cut $k$ is $\operatorname{rank}(A^{\langle k\rangle})$.

1.1 At cut $k$, the unfolding is the outer product of the vector with entries $\prod_{j=1}^{k}u^{(j)}_{i_j}$ and the vector with entries $\prod_{j=k+1}^{d}u^{(j)}_{i_j}$. Both vectors are nonzero, so this matrix has rank one. [F1, given, construct, algebra]

2.1 Set $G_k(1,i_k,1)=u^{(k)}_{i_k}$ for each core. Their contraction is $\prod_ku^{(k)}_{i_k}=A_{i_1,\ldots,i_d}$, so this is an exact TT with every internal bond size one. By [F3] these sizes are minimal; full-rank TT-SVD therefore also returns this exact rank-one structure. [F2, F3, step 1.1, algebra] ∎
