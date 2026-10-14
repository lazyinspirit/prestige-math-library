---
page: robust-covariance-and-high-dimensional-stability-examples
title: Robust Covariance and Sparse Robust Estimation — Examples
status: draft
items: []
examples:
- cex-matrix-variance-does-not-dominate-trace-covariance-product
- ex-clean-heavy-tailed-finite-matrix-variance
- cex-bounded-spectrum-covariance-lower-rate-must-be-capped
- cex-intrinsic-variance-alone-does-not-control-covariance-pilot
- ex-block-sparse-huber-covariance-model
- ex-dense-huber-covariance-model
---













These examples check the Gaussian Huber model, the single-common-block
sparsity convention, and a clean polynomial-tail law with finite matrix
variance. The counterexamples distinguish three failures: the two-axis law
refutes the auxiliary trace comparison, the growing-axis family refutes the
former $d$-only pilot sample condition, and the zero estimator refutes an
uncapped all-regime lower rate on a bounded-spectrum class. The active
trace-aware covariance theorem and capped lower rate remain supported by
their local proofs.

## Pilot centering and intrinsic variance

The new axis-family example keeps intrinsic matrix variance bounded while
its trace grows. On an event of probability approaching one, the same-sample
geometric-median pilot makes radial truncation erase the leading covariance
direction. A joint sample/dimension/confidence sequence makes the former
ambient-dimension failure guarantee nonvacuous and still contradicts it.
The earlier two-axis example is retained for its distinct auxiliary trace
comparison. These clean heavy-tail examples do not describe Huber contamination.

## Dense lower bounds at large dimension

The zero-estimator counterexample shows why a bounded-spectrum covariance class cannot have an uncapped all-dimension lower rate. The all-regime Gaussian Huber lower bound uses the capped scale, while its original small-dimension rate and the separate upper confidence conditions remain intact.
