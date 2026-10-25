---
id: lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps
kind: lemma
title: "Locally unique ODE solutions agree on overlaps and glue across a common endpoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution, cor-lipschitz-ode-uniqueness-and-stability-estimate, thm-connected-subsets-of-r-are-intervals]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Locally unique solutions through the same data agree on every overlap. If two such solutions are defined on adjacent intervals, agree at their common endpoint, and solve the same continuous ODE there, their piecewise union is a solution on the union interval.

## Facts & Assumptions

**Given:** Two solutions of the same locally state-Lipschitz ODE with a common value at some time in the overlap.

[L1] Coincident initial values give uniqueness on every common interval ([[cor-lipschitz-ode-uniqueness-and-stability-estimate]]).

[L2] A subset of $\mathbb R$ is connected if and only if it is order-convex ([[thm-connected-subsets-of-r-are-intervals]]).

## Proof

**Proof technique:** direct.

1.1 The agreement set in the overlap is nonempty, closed by continuity, and open because [L1] applies at each agreement time; the overlap is an interval and hence connected by [L2], so the agreement set is the whole overlap. [given, L1, L2]

2.1 The piecewise union is therefore single-valued and continuous; away from the common endpoint it is a solution, while at the endpoint both one-sided derivatives equal the same value of the continuous vector field, so the union is differentiable there and solves the ODE. [step 1.1, algebra] ∎
