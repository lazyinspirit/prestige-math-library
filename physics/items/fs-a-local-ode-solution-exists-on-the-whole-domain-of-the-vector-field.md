---
id: fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field
kind: false-statement
title: "False: a local ODE solution extends across the whole time-domain of its vector field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-quadratic-ode-finite-time-blowup]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
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

**False claim:** Every local solution extends across the whole time-domain on which its vector field is defined.

## Facts & Assumptions

**Given:** The false universal claim.

[L1] $y'=y^2$, $y(0)=1$, has maximal solution $y(t)=(1-t)^{-1}$ on $(-\infty,1)$ ([[ex-quadratic-ode-finite-time-blowup]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the false claim were true; the vector field in [L1] is defined for all real times, but its solution has finite maximal endpoint $1$. [assume-contra, L1]

2.1 The asserted extension would continue this maximal solution past $1$, a contradiction. [step 1.1, discharge-contradiction] ∎
