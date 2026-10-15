---
page: kalman-smoothing-and-rts-recursion-examples
title: Fixed-interval Gaussian smoothing and RTS recursion — Examples
status: draft
items: []
examples:
  - ex-two-time-scalar-rauch-tung-striebel-smoother
  - ex-singular-forecast-covariance-outside-rts-domain
---

## Examples

The first example carries out both passes exactly in a two-transition scalar
random walk and identifies the smoothed marginals at the selected data. The
second separates forecast-covariance invertibility from Kalman-filter
admissibility: the filter remains defined with a zero forecast covariance,
and the smoothing law exists, but the ordinary RTS inverse does not. It does
not claim a pseudoinverse formula.
