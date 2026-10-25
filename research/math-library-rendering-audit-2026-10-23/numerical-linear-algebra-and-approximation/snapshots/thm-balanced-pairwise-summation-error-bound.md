---
id: thm-balanced-pairwise-summation-error-bound
kind: theorem
title: "Balanced pairwise summation has a depth-dependent error bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-balanced-pairwise-summation
  - lem-product-of-one-plus-deltas-gives-theta-n
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Statement

Let $x_1,\ldots,x_n\in\mathbb R$, $n\ge1$, be successfully processed by [[alg-balanced-pairwise-summation]] in the operationwise model. Put $d=\lceil\log_2 n\rceil$, assume $du<1$, and set $\gamma_d=du/(1-du)$. Then
$$\left|\widehat s-\sum_{i=1}^n x_i\right|\le\gamma_d\sum_{i=1}^n|x_i|.$$
For $n=1$, $d=0$ and the error is zero.
## Facts & Assumptions
**Given:** the successful padded balanced tree and operationwise model.

[F1] [[alg-balanced-pairwise-summation]]: the tree has depth d and rounds each internal addition.

[F2] [[lem-product-of-one-plus-deltas-gives-theta-n]]: a product of k relative factors is within gamma_k of 1 when ku<1.

## Proof

1.1 Each original leaf contributes along one path of at most d rounded additions; zero padding contributes zero. Expanding the additions by the relative model writes s-hat=sum_i x_i product_{r=1}^{k_i}(1+delta_ir), with k_i<=d and |delta_ir|<=u. [given, F1, choose]

2.1 For k_i=0 the product is 1. Otherwise [F2] bounds its difference from 1 by gamma_{k_i}<=gamma_d. Subtracting the exact sum and applying the triangle inequality proves the result; for d=0 every input is the sole exact leaf. [step 1.1, F2, algebra] ∎