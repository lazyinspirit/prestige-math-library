---
id: ex-two-tt-truncations-realise-root-sum-squares-bound
kind: example
title: Two TT truncations realize the root-sum-square bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges, alg-sequential-tensor-train-svd, thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §2, Theorem 2.2"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §1.2.4 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 4
---

## Example

Let $A\in\mathbb R^{2\times2\times2}$ have nonzero entries $A_{111}=3$, $A_{122}=1$, and $A_{212}=2$, with all other entries zero. Apply sequential TT-SVD with rank cap one at both cuts.

## Verification

**Given:** The tensor and cap tuple $(1,1)$ above.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the cut-$k$ unfolding groups the first $k$ indices into rows, the remaining indices into columns, and a reindexing preserves Frobenius norm.

[F2] [[alg-sequential-tensor-train-svd]]: each step keeps the leading singular vectors up to its rank cap and records the discarded tail norm.

[F3] [[thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]]: the total TT-SVD error is bounded by the root sum of squared cut tails.

1.1 With columns ordered by $(i_2,i_3)=(1,1),(1,2),(2,1),(2,2)$, the first unfolding is $\begin{pmatrix}3&0&0&1\\0&2&0&0\end{pmatrix}$. Its rows are orthogonal with norms $\sqrt{10}$ and $2$, so the leading singular value is $\sqrt{10}$ and the first discarded tail is $\delta_1=2$. The retained left vector is $(1,0)^{\mathsf T}$, and the remainder $\Sigma_1V_1^*$ reshaped as a $2\times2$ matrix is $\begin{pmatrix}3&0\\0&1\end{pmatrix}$. [F1, F2, given, algebra]

2.1 The second remainder has singular values $3$ and $1$, hence its rank-one truncation discards $\delta_2=1$ and returns the tensor $\widehat A=3e_1\otimes e_1\otimes e_1$. The omitted entries of $A-\widehat A$ are $e_1\otimes e_2\otimes e_2$ and $2e_2\otimes e_1\otimes e_2$, which are orthogonal and have squared norms $1$ and $4$. Therefore $\|A-\widehat A\|_F=\sqrt5=\sqrt{\delta_1^2+\delta_2^2}$, realizing equality in [F3]. [F2, F3, step 1.1, algebra] ∎
