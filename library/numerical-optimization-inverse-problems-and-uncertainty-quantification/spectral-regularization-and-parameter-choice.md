---
page: spectral-regularization-and-parameter-choice
title: "Spectral regularization and parameter choice"
status: published
items: [alg-discrete-l-curve-parameter-choice, lem-compact-gram-operator-is-positive-and-has-kernel, lem-compact-spectral-multiplier-is-well-defined, lem-linear-smoother-gcv-expression, lem-square-summable-sequences-form-a-hilbert-space, alg-gcv-finite-grid-parameter-choice, def-compact-spectral-filter-and-qualification, thm-discrete-l-curve-grid-search-is-well-defined, lem-tikhonov-bias-converges-for-minimum-norm-solution, lem-tikhonov-data-residual-continuity-monotonicity-and-limits, lem-tikhonov-source-condition-bias-bound, thm-gcv-grid-search-returns-score-minimizer, alg-morozov-discrepancy-bracketing-and-bisection, thm-tikhonov-convergence-under-noise-parameter-coupling, thm-tikhonov-source-condition-rate-and-qualification-saturation, thm-morozov-discrepancy-choice-converges, thm-tikhonov-forward-discretization-and-stopping-coupling]
examples: []
---

This page develops compact-operator Tikhonov regularization from its spectral filter through source-condition rates and Morozov discrepancy selection. It also specifies finite-grid GCV and L-curve choices, and tracks forward discretization and exact solve residuals separately. The parameter $\lambda$ is the coefficient of the squared penalty. The convergence claims require their displayed Hilbert-space, range, source, noise, and parameter-coupling hypotheses; finite-grid heuristics carry no universal optimality guarantee.
