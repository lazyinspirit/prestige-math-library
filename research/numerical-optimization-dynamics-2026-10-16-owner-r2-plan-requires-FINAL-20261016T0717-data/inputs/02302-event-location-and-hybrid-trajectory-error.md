---
page: event-location-and-hybrid-trajectory-error
title: Event location and hybrid trajectory error
status: draft
items:
  - def-hybrid-mode-guard-reset-system
  - lem-hybrid-guard-derivative-along-mode
  - lem-ode-flow-lipschitz-on-a-tube
  - lem-reset-error-after-a-mistimed-hybrid-event
  - thm-saltation-matrix-for-a-transverse-hybrid-reset
  - def-certified-hybrid-event-enclosure
  - lem-transverse-hybrid-event-time-error
  - alg-safeguarded-hybrid-event-location-and-restart
  - thm-finite-hybrid-trajectory-error-under-separated-events
  - thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted
examples: []
---

A hybrid trajectory follows a smooth ODE in each mode, changes mode at a guard, and applies a reset. This page defines certified dense-output and guard-enclosure inputs, then uses interval root isolation over each accepted step so an event is excluded only when the whole step is certified root-free. Finite budgets, failed enclosures, unresolved roots, ambiguous event order, and failed restart branches return inconclusive.

Under a uniform transverse-crossing bound, a guard residual and dense trajectory error give an explicit event-time error. A local reset estimate and finite induction propagate that error through finitely many separated events. The saltation formula records the first-order sensitivity across a transverse reset; it assumes differentiable mode flows, differentiable guards and resets, and a nonzero crossing derivative.

Grazing, ambiguous simultaneous events, sliding, and Zeno accumulation are outside the finite isolated-event error theorem.
