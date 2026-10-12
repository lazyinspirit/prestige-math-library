---
page: cm18-measurement-uncertainty-and-later-bridges-examples
title: "Measurement, uncertainty and later bridges — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm18-pendulum-calibration-proposal
  - ex-cm18-uniform-motion-sampling-check
  - ex-cm18-frame-change-of-an-observation-model
  - cex-cm18-finite-sample-may-miss-the-signal
requires:
  - cm18-measurement-uncertainty-and-later-bridges
  - finite-probability-spaces-and-random-variables
  - cm-math-evidence
  - cm01-framework-quantities-and-geometry
  - cm02-forces-initial-data-and-newtonian-flow
---

This companion page collects the proposed protocols and the elementary
probability counterexample of
[[cm18-measurement-uncertainty-and-later-bridges]]. The pendulum proposal
[[ex-cm18-pendulum-calibration-proposal]] declares the small-angle period
relation for an explicitly specified ideal planar pendulum as an idealization with an unquantified absolute finite-amplitude period discrepancy, computes the linearized propagation of a declared covariance
through the sensitivity coefficients of the model function, and bounds the
nonlinearity remainder and the resulting explicit variance-error bound on a
declared box; every number in it is declared
model data. The uniform-motion check
[[ex-cm18-uniform-motion-sampling-check]] verifies that a constant-velocity
curve is a motion of a zero-force model and then applies the adopted IID and
second-moment sampling hypotheses to repeated readings, obtaining the
sample-mean variance identity and the Chebyshev-type bound on declared data.
The frame-change computation
[[ex-cm18-frame-change-of-an-observation-model]] transforms a single-time
position readout between two inertial frames, with a force-branch protocol interpretation only when the transformed model has an admissible fixed-domain presentation, showing that the prediction
map acquires the affine shift of the Galilean transformation and that the
additive error and its open domain are rotated. The error law is pushed forward by the rotation and can stay identical when rotation-invariant; general bounded configuration domains become time-dependent coordinate domains.

The counterexample [[cex-cm18-finite-sample-may-miss-the-signal]] exhibits a
declared zero-force operational model with constant readout and finite product Bernoulli errors in which a per-trial event of probability
$p\in(0,1)$ is missed by a finite sample with probability
$(1-p)^{n}>0$, so the inference from a finite sample without the feature to
the falsehood of the declared sampling model fails. No experiment item
appears on this page: no primary report has been read, and no measured
value, uncertainty, count or effect size is asserted anywhere above.
Turning a protocol into a reported experiment requires the inventory of
[[rem-cm18-primary-report-contract]], including an actually retrieved
primary source.
