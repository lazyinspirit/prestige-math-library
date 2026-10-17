---
page: delay-differential-equations-and-history-discretization
title: Delay differential equations and history discretization
status: draft
items:
  - def-retarded-delay-equation-and-history-space
  - lem-delay-history-space-is-banach
  - lem-retarded-delay-gronwall-bound
  - thm-retarded-delay-method-of-steps-well-posedness
  - lem-retarded-euler-and-delay-midpoint-work-and-storage
  - alg-retarded-delay-euler-with-stored-history
  - lem-piecewise-linear-delay-history-error
  - thm-retarded-delay-euler-first-order-global-error
  - def-scalar-neutral-delay-equation-and-segment-shift
  - thm-neutral-delay-method-of-steps-well-posedness
  - lem-neutral-delay-shift-neumann-inverse
  - alg-neutral-delay-euler-compatible-grid
  - lem-neutral-delay-euler-finite-execution-and-storage-counts
  - thm-neutral-delay-euler-first-order-error
  - def-distributed-delay-equation-and-window-integral
  - alg-distributed-delay-composite-midpoint-rule
  - lem-distributed-delay-midpoint-error-split
examples: []
---

## Objective

For a fixed delay $\tau>0$, this page defines retarded equations with continuous initial histories and globally state-Lipschitz right-hand sides. It makes the history space $C([ -\tau,0],\mathbb R^d)$ complete and proves existence and uniqueness by the method of steps, supported by a delay Grönwall bound. The stored-history explicit Euler algorithm uses the aligned grid $h=\tau/m$, retains all history nodes, and returns a piecewise-linear interpolant; its storage is $O(d(T+\tau)/h)$, with no constant-memory claim. The interpolation estimate applies to cellwise $C^2$ paths with bounded second derivative and nodal errors. The retarded first-order global error theorem instead assumes a bounded second derivative of the initial history, a common compact tube for the exact and numerical states, a bounded and time-Lipschitz vector field there, and the stated grid and time-margin hypotheses. Higher derivatives can jump at delay breakpoints; the RK4 example shows a crossing step can lose its smooth-ODE local order, so a higher-order claim needs breakpoint alignment or restart and its own proof.

The page treats two separate delay interfaces. For a scalar neutral equation on $T=K\tau$ with commensurate grid $h=\tau/m$, it assumes compatible $C^1$ history and $|a|<1$; the finite segment shift has a geometric-series inverse with a horizon-independent bound, and the Euler estimate controls both state and derivative error under piecewise-$C^2$ solution regularity. It makes no such claim for $|a|\ge1$ or state-dependent delays. For a distributed delay, it defines the finite-window integral and composite midpoint rule, then separates stored-history error from the exact-history quadrature remainder under cellwise $C^2$ integrand bounds. The auxiliary ODE global-error result is used only after the delay-specific local defect, stability, and tube hypotheses are checked.
