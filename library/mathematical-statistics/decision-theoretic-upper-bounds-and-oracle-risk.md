---
page: decision-theoretic-upper-bounds-and-oracle-risk
title: "Decision-Theoretic Upper Bounds"
status: draft
items:
  - def-fixed-design-projection-estimator
  - lem-binomial-support-count-bound
  - lem-finite-dimensional-projection-is-linear-and-contractive
  - lem-isotropic-gaussian-noise-is-subgaussian
  - lem-finite-support-projection-selection-is-borel
  - alg-bic-penalized-least-squares
  - alg-constrained-l0-least-squares
  - thm-gaussian-projection-risk
  - thm-subgaussian-projection-risk
  - thm-bic-fitted-risk-bound
  - thm-sparse-subset-risk-upper-bound
  - thm-gaussian-sparse-sequence-minimax-lower-bound
  - cor-matching-minimax-rate

examples: []
---

This page studies squared fitted-value loss for fixed-design least squares. Orthogonal projection gives a well-defined fit even when coefficients are not identifiable. It establishes an exact isotropic-noise risk identity, a sub-Gaussian projection bound, a sparse constrained least-squares upper bound, and a penalized support-search bound without design-rank or incoherence assumptions. The sparse bounds concern fitted values; they do not control coefficient error. The BIC statement assumes a nonempty true support and gives no zero right-hand side for the empty model. A matching minimax comparison is proved for the Gaussian sequence submodel with $n=d$ and $X=\sqrt n I_n$; it makes no lower-bound claim for general fixed designs or non-Gaussian noise.
