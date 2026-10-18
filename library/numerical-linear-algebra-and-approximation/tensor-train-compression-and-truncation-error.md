---
page: tensor-train-compression-and-truncation-error
title: Tensor train compression and truncation error
status: draft
items:
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - lem-tensor-unfoldings-are-frobenius-isometries
  - def-tucker-multilinear-rank-and-mode-products
  - def-tensor-train-cores-bond-ranks-and-canonical-gauges
  - def-canonical-polyadic-rank
  - thm-best-rank-k-frobenius-matrix-approximation
  - lem-full-column-rank-matrix-least-squares-solution
  - alg-sequential-tensor-train-svd
  - alg-tensor-train-rounding
  - thm-tensor-train-storage-and-inner-product-cost
  - alg-hosvd-truncation
  - alg-budgeted-cp-alternating-least-squares
  - thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error
  - thm-hosvd-quasioptimal-multilinear-rank-error
  - thm-exact-cp-als-block-updates-are-monotone
examples: []
---

This page develops exact-arithmetic compression for finite tensors over $\mathbb R$ or $\mathbb C$, with fixed lexicographic unfolding conventions. It defines Tucker, TT, and CP ranks and supplies a local Frobenius-norm Eckart–Young lemma, since the existing operator-norm theorem alone does not prove the tensor tail estimates. The sequential TT-SVD and canonical-gauge rounding procedures state rank-cap and absolute tail-tolerance choices, zero-rank behavior, and the discarded tails used in the root-sum-square error bound. HOSVD is proved within a factor $\sqrt d$ of the best prescribed multilinear-rank Frobenius error. Storage and inner-product costs are counted from actual mode sizes and bond ranks. The CP-ALS procedure is finite-budget and reports rank-deficient block systems; monotonicity is claimed only for successful exact least-squares updates. These arguments concern exact arithmetic and give no floating-point stability guarantee.
