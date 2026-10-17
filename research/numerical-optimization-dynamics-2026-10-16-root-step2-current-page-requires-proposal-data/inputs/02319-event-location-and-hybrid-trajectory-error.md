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

A hybrid trajectory follows a smooth ODE in each mode, changes mode at an oriented guard crossing, and applies a reset. This page defines admissible dense-output and guard-enclosure data: explicitly justified $C^1$ dense and error bounds are general inputs, and the finite rational residual-tube checker is one sufficient provider. Interval root isolation examines the whole accepted step. It returns no enabled event only after every root is excluded or proved to cross strictly opposite to its declared orientation. Failed enclosures, unresolved roots, and ambiguous event order return `inconclusive`; exhausted budgets return `budget-exhausted`; and a failed reset-domain check returns `domain-failure`, each with the certified prefix.

Under a uniform transverse-crossing bound, a guard residual and dense trajectory error give an explicit event-time error. A local reset estimate and finite induction propagate that error through finitely many separated events. The saltation formula records the first-order sensitivity across a transverse reset; it assumes differentiable mode flows, differentiable guards and resets, and a nonzero crossing derivative.

Grazing, ambiguous simultaneous events, sliding, and Zeno accumulation are outside the finite isolated-event error theorem.
