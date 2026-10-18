---
page: projection-and-pressure-correction-for-incompressible-flow-examples
title: "Projection, pressure correction and saddle-point solvers — Examples"
status: draft
items: []
examples:
  - ex-na-wall-pressure-correction-tangential-velocity-defect
  - cex-na-collocated-central-difference-checkerboard-pressure-mode
  - ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum
  - ex-na-periodic-single-mode-pressure-correction
---

# Projection, pressure correction and saddle-point solvers — Examples

[[ex-na-wall-pressure-correction-tangential-velocity-defect]] computes an
explicit periodic-channel field whose Neumann pressure correction preserves
zero normal velocity but changes the tangential wall trace. It is a boundary
caveat and gives no convergence rate.

[[cex-na-collocated-central-difference-checkerboard-pressure-mode]] verifies
that an even-grid alternating pressure has zero collocated centred
gradient. It illustrates why collocated and staggered operators must not be
identified.

[[ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum]] works out a
scalar symmetric saddle system whose exact block-diagonal symmetric
preconditioning leaves the golden-ratio eigenvalues visible. The example
makes no solver-speed claim.

[[ex-na-periodic-single-mode-pressure-correction]] constructs an admissible
componentwise mean-zero force that makes the staggered backward-Euler
predictor equal to a single pressure-gradient mode; the pressure correction
removes that velocity exactly in one step.
