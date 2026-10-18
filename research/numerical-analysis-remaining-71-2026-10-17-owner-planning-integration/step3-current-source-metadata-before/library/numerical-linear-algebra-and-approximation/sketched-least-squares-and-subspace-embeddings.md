---
page: sketched-least-squares-and-subspace-embeddings
title: Sketched least squares and subspace embeddings
status: draft
requires:
  - randomized-low-rank-approximation
  - computed-fast-transforms-and-convolution
  - robust-covariance-and-high-dimensional-stability
items:
  - alg-sketch-and-solve-least-squares
  - def-oblivious-l2-subspace-embedding
  - def-sketch-qr-right-preconditioner
  - def-subspace-leverage-scores
  - lem-hermitian-sphere-net-controls-operator-norm
  - lem-gaussian-squared-norm-tail
  - lem-subspace-leverage-score-identities
  - thm-sketch-and-solve-exact-minimizer
  - thm-sketch-qr-right-preconditioner-conditioned-spectrum
  - alg-leverage-score-row-sampling-sketch
  - thm-gaussian-oblivious-l2-subspace-embedding
  - thm-sketch-and-solve-residual-guarantee
  - thm-leverage-score-row-sampling-subspace-embedding
examples: []
---

This page develops squared-norm subspace embeddings for a fixed subspace, an
iid Gaussian construction with an additive dimension and failure-probability
bound, and with-replacement leverage-score row sampling with explicit
zero-leverage handling. It defines an exact rank-aware sketch-and-solve
procedure and proves its residual guarantee only when the sketch embeds
$\operatorname{span}(\operatorname{Ran}(A),b)$. Embedding $\operatorname{Ran}(A)$
alone does not suffice. The page also defines the QR right preconditioner and
proves its singular-value bounds under an embedding of $\operatorname{Ran}(A)$.
All solve guarantees are exact-arithmetic claims; finite-precision residuals,
rank status and solver error certificates remain distinct outputs. Sparse
CountSketch and SRHT variants are not specified here.
