---
page: randomized-low-rank-approximation
title: Randomized low-rank approximation
status: draft
items:
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - lem-orthogonal-projector-power-error-inequality
  - alg-gaussian-randomized-range-finder
  - lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
  - lem-finite-real-gaussian-increment-comparison
  - alg-randomized-power-subspace-iteration-with-qr
  - lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
  - lem-real-scaled-gaussian-product-expectation
  - lem-randomized-rangefinder-deterministic-svd-partition-error
  - thm-randomized-power-rangefinder-error-transfer
  - lem-wide-gaussian-pseudoinverse-frobenius-moments
  - lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail
  - thm-real-gaussian-rangefinder-expected-spectral-error
  - thm-gaussian-rangefinder-expected-spectral-error
  - thm-real-gaussian-power-rangefinder-expected-error
  - thm-gaussian-power-rangefinder-expected-error
examples: []
---

This page defines the exact Gaussian range finder over real and normalized
complex fields, with the returned rank equal to the actual sample rank. It
proves the real expected spectral-error bound from a deterministic SVD
partition, a real scaled-Gaussian product estimate, and locally derived
pseudoinverse moments and tails. The normalized-complex expectation remains
an explicit construction hold: the missing sharp complex product comparison
is not supplied by the available real proof. The power page separately states
QR-reorthogonalized subspace iteration and proves the deterministic power
error transfer. No expectation is treated as a per-draw guarantee or an
oblivious subspace embedding, and no finite-precision result is claimed by the
exact-arithmetic procedure.
