---
id: ex-diagonal-tensor-has-large-minimal-tt-ranks
kind: example
title: A diagonal tensor has large minimal TT ranks
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
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §1.2.3, Theorem 1.2.12 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §2"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
dependency_level: 4
---

## Example

For integers $d\ge3$ and $n\ge2$, let
$$ A=\sum_{j=1}^{n}e_j^{(1)}\otimes e_j^{(2)}\otimes\cdots\otimes e_j^{(d)} \in\mathbb R^{n\times\cdots\times n}. $$

## Verification

**Given:** The tensor above with $d\ge3$ and $n\ge2$.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: a cut unfolding has row tuple $(i_1,\ldots,i_k)$ and column tuple $(i_{k+1},\ldots,i_d)$.

[F2] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: TT cores contract along the bond indices.

[F3] [[thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]]: minimal exact TT bond size at a cut equals the rank of that cut unfolding.

1.1 For each cut $k$, only the $n$ row tuples $(j,\ldots,j)$ and the matching $n$ column tuples $(j,\ldots,j)$ contain nonzero entries of $A^{\langle k\rangle}$. The resulting matrix has $n$ ones in distinct rows and columns and zeros elsewhere, so its rank is exactly $n$. [F1, given, algebra]

2.1 By [F3], every exact TT representation has bond size at least $n$ at every cut. Such a representation is explicit: the first core enforces $\alpha_1=i_1$, each interior core enforces $\alpha_{k-1}=i_k=\alpha_k$, and the last core enforces $\alpha_{d-1}=i_d$. Contracting these Kronecker-delta entries yields $1$ exactly when all mode indices are the same and $0$ otherwise, which is the stated tensor. [F2, F3, step 1.1, construct, algebra] ∎
