---
id: fs-every-pure-blockade-is-complete-or-anticomplete
kind: false-statement
title: "FALSE: every pure blockade is either complete or anticomplete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, §5"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

**False claim:** every pure blockade is either complete or anticomplete.

## Facts & Assumptions

**Given:** Three singleton blocks $B_1=\{1\}$, $B_2=\{2\}$, $B_3=\{3\}$ with
edges $12$ and $23$ but not $13$.

## Proof

**Proof technique:** direct.

1.1 For this blockade, $(B_1,B_2)$ and $(B_2,B_3)$ are complete but $(B_1,B_3)$ is anticomplete, so the blockade is pure. [given]

2.1 So the blockade is pure, but not every pair is complete and not every pair is anticomplete. Hence it is neither complete nor anticomplete. [step 1.1]

3.1 Therefore the claim is false. [step 2.1] ∎
