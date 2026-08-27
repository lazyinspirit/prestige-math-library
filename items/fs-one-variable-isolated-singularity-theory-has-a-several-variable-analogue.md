---
id: fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue
kind: false-statement
title: "FALSE: isolated singularities in several variables can be poles or essential"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-no-isolated-holomorphic-singularities-in-several-complex-variables,
       thm-isolated-singularity-trichotomy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "J.-B. Campesato, MAT334 notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Statement

**False claim:** in complex dimension at least two, an isolated singularity can
still be removable, a pole, or essential just as in one variable.

## Facts & Assumptions

**Given:** Complex dimension $m\ge2$.

[L1] In one variable every isolated singularity is exactly one of the removable,
pole, or essential cases ([[thm-isolated-singularity-trichotomy]]).

[L2] In several variables with $m\ge2$, an isolated deleted point is always
removable ([[cor-no-isolated-holomorphic-singularities-in-several-complex-variables]]).

## Refutation

**Proof technique:** direct.

1.1 The one-variable trichotomy of [L1] distinguishes three genuinely different behaviors at a puncture. [L1]

2.1 In several variables with $m\ge2$, [L2] collapses that trichotomy at an isolated point: the only possible behavior is removability. So poles and essential singularities do not occur at isolated deleted points. [L2, step 1.1] ∎
