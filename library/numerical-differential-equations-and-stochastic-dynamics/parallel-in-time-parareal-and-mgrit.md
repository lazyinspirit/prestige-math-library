---
page: parallel-in-time-parareal-and-mgrit
title: Parallel in time parareal and mgrit
status: draft
items:
  - def-parareal-propagator-pair
  - alg-parareal-correction-sweeps
  - def-linear-all-at-once-time-operator
  - lem-parareal-first-k-nodes-are-fine-exact
  - thm-parareal-binomial-error-bound
  - lem-mgrit-exact-coarse-elimination
  - thm-parareal-inexact-sweep-error-ledger
  - alg-mgrit-two-level-cycle
  - cor-parareal-continuous-target-error-decomposition
  - thm-mgrit-contraction-implies-residual-and-error-decay
  - alg-mgrit-multilevel-recursive-cycle
  - lem-parareal-sweep-work-and-span
  - lem-mgrit-two-level-call-counts
  - lem-mgrit-recursive-work-and-visits
examples: []
---

## Summary

Parareal corrects a serial coarse trajectory with parallel fine propagations. The canonical ODE instantiation uses explicit Runge–Kutta microsteps for the fine map and a selected successful backward Euler endpoint for the coarse map. Its exact-arithmetic recurrence reproduces the first $k$ fine nodes after $k$ sweeps. Under common-set Lipschitz bounds it has a binomial error estimate; any inexact propagation or correction contributes an explicit update defect. The target is the sequential fine-method trajectory. A separate fine-method estimate is required to compare that trajectory with an exact ODE solution.

MGRIT writes a linear time recurrence as an all-at-once bidiagonal system, eliminates F-points to identify the exact coarse Schur operator, and defines a practical two-level coarse correction with F or FCF relaxation. A two-grid cycle contracts only when its actual error matrix has norm below one in the declared block norm; residual/error comparison also assumes finite induced norms for the fine operator and its inverse. The local scalar heat calculation is not a general rate, and the two-grid theorem does not establish multilevel convergence. Work and span depend on propagator costs, processor count, communication, cycle count, and all visited levels.

