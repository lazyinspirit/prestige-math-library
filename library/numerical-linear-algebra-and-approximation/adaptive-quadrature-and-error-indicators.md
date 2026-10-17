---
page: adaptive-quadrature-and-error-indicators
title: Adaptive quadrature and error indicators
status: draft
items:
  - def-adaptive-simpson-refinement-indicator
  - lem-composite-simpson-asymptotic-error-expansion
  - alg-adaptive-simpson-with-finite-depth-and-panel-cap
  - thm-simpson-richardson-error-estimator-asymptotic
  - thm-adaptive-simpson-cap-termination-and-indicator-budget
  - alg-certified-adaptive-simpson
  - thm-certified-adaptive-simpson-enclosure
---

## Objective

This page separates adaptive Simpson's finite procedure and its heuristic
indicator from a conditional certified mode. The $1/15$ relation follows
from a local composite Simpson asymptotic expansion. A nonzero leading
coefficient ensures asymptotic relative accuracy; when that coefficient is zero,
the expansion alone gives no relative-error conclusion. The indicator does not
certify any finite run. The capped procedure always returns an explicit accepted, cap-reached,
or failure status. A separate interval mode encloses the integral only when
sound point-value and fourth-derivative enclosure oracles are supplied; an
inconclusive enclosure never reports the requested tolerance as achieved.
