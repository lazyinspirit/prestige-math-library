---
page: implicit-stiff-time-stepping-and-algebraic-error-examples
title: Implicit stiff time stepping and algebraic error — Examples
status: draft
items: []
examples:
  - ex-newton-budget-exhaustion-with-a-unique-backward-euler-root
  - ex-stiff-scalar-decay-and-trapezoid-ringing
  - ex-dissipative-backward-euler-residual-contraction
  - ex-robertson-reaction-system-newton-work
---

These examples separate algebraic root existence from finite Newton budget, compute a dissipative backward Euler residual-to-error bound, and compare stiff scalar damping factors. The Robertson step records a reproducible binary64 Newton and frozen-Jacobian chord work comparison; it does not assert a general convergence rate or forward-error guarantee.
