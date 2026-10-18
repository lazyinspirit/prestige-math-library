---
page: shape-preserving-piecewise-polynomial-interpolation
title: Shape preserving piecewise polynomial interpolation
status: published
requires:
  - spline-evaluation-and-interpolation-algorithms
items:
  - def-piecewise-cubic-hermite-interpolant
  - def-piecewise-bernstein-representation
  - thm-piecewise-cubic-hermite-interpolant-properties
  - thm-hermite-monotonicity-for-normalized-slopes-in-square
  - alg-pchip-slope-selection
  - thm-bernstein-convex-hull-and-positivity
  - lem-pchip-slope-selection-well-defined
  - thm-pchip-normalized-slopes-in-square
  - lem-pchip-slopes-second-order-uniform-grid
  - thm-pchip-shape-preserving-no-overshoot
  - thm-pchip-third-order-away-from-extrema
examples: []
---

## Overview

This page defines cubic Hermite pieces with explicit nodal values and slopes, proves a sufficient monotonicity region in normalized endpoint slopes, and gives the finite PCHIP slope-selection algorithm with its endpoint, flat-interval, and sign-change rules. The PCHIP proof establishes C1 matching and no overshoot on every data cell, hence monotonicity for monotone data. Its third-order value estimate is limited to uniform grids on intervals where the derivative is bounded away from zero; no third-order estimate is claimed at extrema or on arbitrary nonuniform meshes. A separate Bernstein representation proves a convex-hull and positivity guarantee from nonnegative control values. Positive samples alone do not imply positivity between them.
