---
id: cex-cross-group-contamination-violates-partial-interference
kind: counterexample
title: "Cross-group contamination violates partial interference"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-potential-outcomes-under-partial-interference
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, §2.1"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Statement refuted

An outcome that changes when only a different group's treatment assignment changes can still be represented as a function of the focal unit's own-group assignment.

## Facts & Assumptions

**Given:** Two one-unit groups with binary assignments $Z_{11},Z_{21}$ and all four assignments allowed.

[F1] [[def-potential-outcomes-under-partial-interference]]: partial interference requires $Y_{ij}(\mathbf z)=Y_{ij}(\mathbf z')$ whenever the assignments within group $i$ agree.

## Counterexample

Let the first group's outcome schedule be $Y_{11}(z_{11},z_{21})=z_{21}$, so it depends only on the other group's assignment. All outcomes are real and the assignment space is finite.

1.1 The global assignments $(z_{11},z_{21})=(0,0)$ and $(0,1)$ have the same first-group restriction $z_{11}=0$, but their first-group outcomes are respectively $0$ and $1$. [given, F1, construct]

2.1 The inequality of those outcomes violates the invariance in [F1]. Therefore no function of the first group's assignment alone can represent this schedule, and partial interference fails. [step 1.1, F1, algebra] ∎