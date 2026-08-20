---
id: fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions
kind: false-statement
title: "False: continuity of the right-hand side guarantees unique ODE solutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-continuous-ode-with-nonunique-delayed-solutions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
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

**False claim:** Every continuous right-hand side gives a unique local solution through each initial value.

## Facts & Assumptions

**Given:** The false universal claim.

[L1] $y'=2\sqrt{|y|}$ has distinct delayed-start solutions through the origin ([[cex-continuous-ode-with-nonunique-delayed-solutions]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the false claim were true; [L1] gives a continuous right-hand side with distinct solutions through the same initial value. [assume-contra, L1]

2.1 This contradicts the asserted uniqueness, so the claim is false. [step 1.1, discharge-contradiction] ∎
