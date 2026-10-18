---
page: nonlinear-full-approximation-multigrid-examples
title: "Nonlinear full-approximation multigrid — Examples"
status: draft
items: []
examples:
  - ex-fas-reaction-poisson-tau-cancellation
  - cex-fas-zero-tau-breaks-fine-root
  - ex-fas-bifurcation-shrinks-contraction-ball
  - ex-fas-linear-cycle-equivalence
requires:
  - nonlinear-full-approximation-multigrid
---

These examples compute the tau correction for a nonlinear reaction-diffusion
discretization, show a fine-root failure when tau is omitted, verify the exact
linear correction reduction on a two-dimensional matrix, and track the
certified local contraction radius through a pitchfork bifurcation. Each
calculation is finite-dimensional and uses the hypotheses stated on the
companion A page. None asserts an arbitrary-start nonlinear FAS convergence
result.

