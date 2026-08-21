---
id: fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness
kind: false-statement
title: "False: local Lipschitz continuity is necessary for uniqueness of an ODE solution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-uniqueness-does-not-require-local-lipschitz-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
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

**False claim:** A first-order ODE can have a unique solution through a point only if its vector field is locally Lipschitz there.

## Facts & Assumptions

**Given:** The false necessity claim.

[L1] An almost-Lipschitz vector field has a unique solution through zero but is not locally Lipschitz there ([[cex-uniqueness-does-not-require-local-lipschitz-continuity]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the false claim were true; [L1] gives uniqueness at zero while its vector field has no local Lipschitz constant there. [assume-contra, L1]

2.1 This contradicts the asserted necessity, so the claim is false. [step 1.1, discharge-contradiction] ∎
