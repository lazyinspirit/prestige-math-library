---
id: thm-existence-and-uniqueness-of-a-maximal-ode-solution
kind: theorem
title: "Every Picard–Lindelöf initial value problem has one maximal solution on an open interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-maximal-ode-solution, thm-picard-lindelof-local-existence-and-uniqueness, lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "The maximal ODE solution"
proof_strategy: direct
verification:
  precheck: pass
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

Every initial value problem satisfying the Picard-Lindelof hypotheses has a unique maximal solution. Its domain is an open interval containing the initial time, and every other solution through the same data is its restriction.

## Facts & Assumptions

**Given:** An IVP satisfying the hypotheses of Picard-Lindelof.

[L1] A unique local solution exists on an interval around the initial time ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[L2] Locally unique solutions through the same data agree on every overlap ([[lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]]).

## Proof

**Proof technique:** direct.

1.1 Take the union $I$ of the domains of all local solutions through the initial point; [L1] makes the family nonempty, the union of intervals containing $t_0$ is an interval, and local existence around every graph point makes $I$ open. [given, L1]

2.1 By [L2], all values assigned at a time in $I$ agree, so their pointwise union is a well-defined solution; every other solution is its restriction, which proves maximality, and the same property forces uniqueness of the maximal solution. [step 1.1, L2] ∎
