---
page: shape-preserving-piecewise-polynomial-interpolation-examples
title: Shape preserving piecewise polynomial interpolation — Examples
status: draft
requires:
  - shape-preserving-piecewise-polynomial-interpolation
items: []
examples:
  - ex-positive-endpoint-samples-negative-between
  - ex-natural-cubic-spline-undershoots-nonnegative-table
  - ex-pchip-flat-monotone-data
  - ex-pchip-limiter-second-order-at-smooth-extremum
---

## Overview

The examples compute a natural cubic spline that dips below nonnegative table values, a PCHIP interpolant that retains a flat monotone segment, and a smooth-extremum witness where the PCHIP value error is only of second order. A Bernstein quadratic also shows why positive endpoint samples do not guarantee a positive interpolant. Each calculation uses exact formulas and keeps the hypotheses of the A-page results visible.
