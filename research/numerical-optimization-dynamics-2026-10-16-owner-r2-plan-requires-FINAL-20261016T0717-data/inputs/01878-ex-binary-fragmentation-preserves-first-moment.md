---
id: ex-binary-fragmentation-preserves-first-moment
kind: example
title: A binary split preserves first moment and increases number by one
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-discrete-coagulation-fragmentation-system
  - lem-finite-coagulation-fragmentation-event-moments
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the daughter counts are finite and explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

For a parent of size $5a$, let its expected daughters be one cluster of size $2a$ and one of size $3a$. The event removes one parent and adds two daughters, so number increases by one and mass is unchanged.

## Facts & Assumptions

**Given:** The finite fragmentation event convention with daughter counts $b_5(2)=b_5(3)=1$ and all other $b_5(k)=0$.

[F1] [[def-finite-discrete-coagulation-fragmentation-system]]: one fragmentation event has increment $-e_i+\sum_{k<i}b_i(k)e_k$ and requires $\sum_{k<i}k b_i(k)=i$.

[F2] [[lem-finite-coagulation-fragmentation-event-moments]]: a fragmentation event changes number by $\sum b_i(k)-1$ and mass by zero.

## Proof

1.1 The daughter mass sum is $2a+3a=5a$, so this daughter law satisfies the required parent-mass normalization in [F1]. [given, F1, algebra]

1.2 Its number increment is $1+1-1=1$. Its mass increment is $-5a+2a+3a=0$, agreeing with [F2]. [given, F2, step 1.1, algebra] ∎
