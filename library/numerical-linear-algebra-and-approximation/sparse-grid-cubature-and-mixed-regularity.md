---
page: sparse-grid-cubature-and-mixed-regularity
title: "Sparse grid cubature and mixed regularity"
status: published
requires:
  - composite-quadrature-rules
  - clenshaw-curtis-and-extrapolation-quadrature
  - gaussian-quadrature
  - combinatorial-classes-and-the-symbolic-method
items:
  - def-smolyak-univariate-level-hierarchy
  - def-smolyak-cubature
  - lem-smolyak-dyadic-tensor-simpson-convergence
  - alg-smolyak-node-deduplication
  - def-smolyak-absolute-detail-summability
  - lem-smolyak-mixed-simpson-detail-decay
  - lem-smolyak-rectangular-telescope
  - alg-dimension-adaptive-smolyak-surplus-selection
  - thm-smolyak-absolute-detail-reconstruction-and-tail-error
  - thm-smolyak-polynomial-multi-degree-exactness
  - lem-smolyak-adaptive-surplus-termination
  - thm-smolyak-isotropic-mixed-smoothness-work-error-rate
examples: []
---

This page builds Smolyak cubature from nested composite-Simpson levels. It defines finite downward-closed index sets, tensor details, and deterministic node deduplication with combined signed weights. Rectangular telescoping supplies exactness from one-dimensional level exactness; the actual work count is the distinct node union.

For continuous mixed fourth partials, tensor details have an explicit geometric decay bound. Together with convergence of the dyadic tensor rules, absolute summability gives a reconstruction and omitted-tail theorem, and the isotropic simplex has the explicit Simpson work/error bound recorded here. The dimension-adaptive procedure is finite under its stated cap and budget; a surplus is only an indicator unless a separate tail theorem is available. Constants remain dimension dependent.
