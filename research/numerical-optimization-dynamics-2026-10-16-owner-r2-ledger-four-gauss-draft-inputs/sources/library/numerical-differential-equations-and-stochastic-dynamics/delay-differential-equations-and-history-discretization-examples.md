---
page: delay-differential-equations-and-history-discretization-examples
title: Delay differential equations and history discretization — Examples
status: draft
items: []
examples:
  - ex-retarded-delayed-feedback-euler
  - ex-rk4-delay-breakpoint-local-order-loss
  - ex-neutral-delay-derivative-amplification
  - ex-distributed-delay-midpoint-history-error
---

## Objective

These examples work through four boundaries of the A-page results. A constant delayed-feedback problem gives an explicit two-block Euler recurrence and the exact endpoint error $a^2\tau h/2$. A classical RK4 step crossing a retarded-delay breakpoint has an explicitly computed second-order exact-start defect, so smooth-ODE order does not transfer across that kink. A compatible scalar neutral history shows geometric derivative amplification for $|a|>1$ and a finite-horizon shift inverse whose norm grows at $a=1$. A quadratic history with constant kernel computes the distributed-delay midpoint remainder and the additional stored-history contribution separately, including their signed-error cancellation. These are concrete calculations under their stated data; they do not assert general convergence on unstable neutral branches or a fourth-order delay-equation method across breakpoints.
