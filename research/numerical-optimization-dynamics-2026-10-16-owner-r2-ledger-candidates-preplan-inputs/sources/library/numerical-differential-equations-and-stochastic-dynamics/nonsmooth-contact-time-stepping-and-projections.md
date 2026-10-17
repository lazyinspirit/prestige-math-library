---
page: nonsmooth-contact-time-stepping-and-projections
title: Nonsmooth contact time stepping and projections
status: draft
requires:
  - convex-and-semicontinuous-functions-on-rn
  - inequality-kkt-duality-and-optimality-certificates
  - proximal-gradient-and-accelerated-composite-optimization
  - event-location-and-hybrid-trajectory-error
items:
  - lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence
  - lem-projection-onto-closed-convex-set-is-nonexpansive
  - alg-one-dimensional-first-impact-with-restitution
  - thm-frictionless-sphere-binary-impact-impulse-laws
  - lem-projected-euler-projection-residual-certificate
  - thm-first-impact-step-complementarity-momentum-and-energy
  - lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds
  - alg-event-driven-frictionless-sphere-contact-with-certified-events
  - def-projected-contact-dynamics-and-euler-step
  - lem-naive-all-pairs-collision-search-has-quadratic-work
  - lem-normal-cone-maximal-monotone-and-projection-resolvent
  - alg-certified-projected-euler-method
  - lem-projected-contact-solutions-are-unique
  - thm-projected-euler-existence-uniqueness-and-convergence
  - thm-projected-euler-square-root-global-error
examples: []
---

This page treats two distinct finite-dimensional contact models. For a fixed nonempty compact convex set, it defines the outward normal-cone evolution and explicit projection Euler, proves the normal-cone and projection facts used by the method, and proves uniqueness under the choice assumptions inherited through its absolutely-continuous FTC supplier. Countable Choice is used for almost-everywhere differentiability, Lebesgue differentiation, and null-set unions; Dependent Choice is inherited through the integrated FTC identities. The exact Euler interpolants converge uniformly; with certified per-step projection residuals, the error is bounded by a constant times $\sqrt h$ plus the accumulated projection tolerances. The computation reports an unresolved status when a projection certificate cannot be produced within its budget.

For one-dimensional unilateral impact, the first-impact algorithm accepts constant acceleration, a prescribed restitution coefficient, and an explicit failure status for grazing or unresolved contact onset. Its proof establishes momentum balance, complementarity, and the kinetic-energy change at the instantaneous impact; it does not continue through sustained contact or repeated impacts. A separate frictionless binary-sphere law is proved by direct impulse algebra. The event-driven sphere algorithm accepts explicitly valid finite dense/event providers and consumes the event page's general time-error, reset-error and mode-flow interfaces. A local geometry lemma supplies the full-state guard/normal and reset Lipschitz bounds. Event-bracket width, guard residual, prior reset error and outgoing flow during a reporting lag are kept separate; only matched smooth prefixes and aligned reset states are compared. This retains arbitrary C1 force fields without claiming a generic provider construction from a rational-expression checker. Frictional multi-contact, simultaneous or grazing impacts, Zeno behavior, and a penalty-to-rigid limit are outside the proved scope.
