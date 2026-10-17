---
page: discrete-continuous-and-pde-adjoint-sensitivities
title: "Discrete continuous and pde adjoint sensitivities"
status: draft
items:
  - def-parameterized-finite-state-step-objective
  - def-parameterized-elliptic-variational-problem
  - def-parameterized-parabolic-variational-problem
  - lem-parameter-ode-flow-tangent-on-common-tube
  - lem-ode-adjoint-pairing-integration-by-parts
  - thm-discrete-adjoint-gradient-recursion
  - thm-continuous-ode-adjoint-gradient-formula
  - thm-discrete-continuous-gradient-error-order-p
  - lem-implicit-rk-stage-jacobian-nonsingular-on-branch
  - thm-implicit-rk-stage-parameter-sensitivity
  - lem-elliptic-state-map-c1-under-uniform-coercivity
  - thm-elliptic-adjoint-reduced-gradient
  - thm-elliptic-fe-gradient-error-in-energy-norms
  - cor-elliptic-l2-gradient-rate-under-dual-regularity
  - thm-parabolic-adjoint-gradient-sensitivity
  - thm-parabolic-fe-gradient-error-with-time-dependent-ritz
  - thm-finite-time-tangent-volume-growth-from-qr
examples: []
---

This page separates derivatives of a finite computational graph from derivatives of the exact ODE flow. It gives conditional ODE adjoint formulas and an order-$p$ gradient estimate that requires state, adjoint, derivative-data, endpoint, and quadrature bounds; the state error theorem alone does not establish the adjoint bound. Implicit Runge–Kutta sensitivities apply to a selected nonsingular algebraic stage branch, not to a stopped stage iteration.

For elliptic equations, the reduced gradient uses the transposed variational adjoint. The finite-element error budget is restricted to conforming state and adjoint approximations and keeps derivative-data defects separate from state and adjoint errors. An $L^2$ rate additionally needs dual approximation and $L^2$-bounded parameter derivative maps. The parabolic formula is conditional on differentiable state and adjoint solutions; the finite-element estimate retains the full time-dependent Ritz residual derivative $P_h'(t)u(t)+P_h(t)u'(t)-u'(t)$. The QR identity concerns exact finite-time tangent-volume change and does not assert an infinite-time Lyapunov exponent.
