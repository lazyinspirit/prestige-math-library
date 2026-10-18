---
id: ex-cutoff-overflow-is-reported-as-lost-mass
kind: example
title: An above-cutoff product moves mass into the reported reservoir
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
  - thm-finite-sectional-positivity-and-mass-reservoir-conservation
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; one event has a specified finite stoichiometric increment.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

On a grid ending at cutoff $R=4$, an aggregation event between two particles of mass $2$ has product mass $4$ and stays in range, while an event between masses $2$ and $3$ has product mass $5>R$ and removes retained mass $5$ while adding reservoir mass $5$.

## Facts & Assumptions

**Given:** A finite sectional grid containing pivots $2,3,4$ and the reported-overflow rule.

[F1] [[alg-finite-sectional-coagulation-fragmentation-balance]]: when $x_i+x_j>R$, both parents are removed and the sum of their masses is added to $L$.

[F2] [[thm-finite-sectional-positivity-and-mass-reservoir-conservation]]: each overflow event has zero augmented-mass change.

## Proof

1.1 For masses $2$ and $3$, their sum is $5$, which exceeds $R=4$. The rule [F1] therefore consumes masses $2+3$ and increments the reservoir by $5$. [given, F1, algebra]

2.1 The retained mass change is $-(2+3)=-5$ and the reservoir change is $+5$, so augmented mass change is zero, as asserted in [F2]. This reservoir entry has no later fragmentation dynamics under [F1]. [F1, F2, step 1.1, algebra] ∎

