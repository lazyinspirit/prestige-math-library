---
page: matrix-norms-condition-numbers-and-numerical-stability-examples
title: "Matrix Norms, Condition Numbers and Numerical Stability: Examples and Counterexamples"
status: published
items: []
examples: [ex-two-by-two-systems-with-contrasting-condition-numbers,
           ex-low-order-hilbert-matrices-have-large-condition-numbers,
           ex-vandermonde-conditioning-improves-after-centering-and-scaling,
           cex-a-tiny-residual-does-not-force-a-small-forward-error,
           ex-a-backward-stable-solution-of-an-ill-conditioned-system,
           ex-catastrophic-cancellation-and-a-stable-reformulation,
           ex-a-floating-point-dot-product-error-bound,
           ex-normal-equations-versus-qr-conditioning,
           cex-condition-number-depends-on-the-chosen-norm-and-scaling,
           cex-numerical-rank-depends-on-the-declared-tolerance,
           cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations]
---

These examples run the A-page machinery on concrete linear systems: a
well-conditioned diagonal system against a nearly singular one of the same
shape, the already large condition numbers of the order-two and order-three
Hilbert matrices, and the same interpolation task with Vandermonde condition
number $20502$ before and $3$ after centering and scaling the nodes. The
floating-point witnesses compute a short dot product under the $\gamma_n$
bound, compare the cancellation-prone formula $1-\sqrt{1-z}$ with its stable
reformulation $z/(1+\sqrt{1-z})$, and compare the squared normal-equation
conditioning with the unsquared Gram–Schmidt factor.

The counterexamples isolate exactly where the A-page theorems have hypotheses:
a tiny residual does not by itself force a small forward error, a
backward-stable answer to an ill-conditioned system can still have order-one
forward error, the condition number changes with the chosen norm and with
diagonal rescaling, numerical rank changes with the declared tolerance, and
the relative floating-point model genuinely excludes overflow, underflow and
invalid operations.
