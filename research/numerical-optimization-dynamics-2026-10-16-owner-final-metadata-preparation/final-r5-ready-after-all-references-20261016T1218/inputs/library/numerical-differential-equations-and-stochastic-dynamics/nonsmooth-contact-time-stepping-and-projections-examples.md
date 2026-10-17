---
page: nonsmooth-contact-time-stepping-and-projections-examples
title: Nonsmooth contact time stepping and projections — Examples
status: draft
requires:
  - nonsmooth-contact-time-stepping-and-projections
items: []
examples:
  - cex-nonconvex-set-can-have-nonunique-nearest-points
  - ex-frictionless-sphere-binary-impact-calculation
  - ex-one-dimensional-impact-restitution-boundaries
  - ex-penalty-stiffness-requires-time-step-control
  - ex-projected-overdamped-particle-euler-trajectory
---

These examples work through a two-sphere impact, the perfectly inelastic and elastic limits of the scalar impulse law, and projected Euler for an overdamped particle on $[0,1]$. A nonconvex two-point set shows why convexity is required for a single-valued projection. A scalar penalty ODE shows how a fixed explicit time step can become unstable as stiffness grows; it does not establish a general penalty limit for rigid impacts.
