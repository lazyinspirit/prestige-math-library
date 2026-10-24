---
id: cor-turan-ramsey-lower-bound
kind: corollary
title: "Turán graphs give the Ramsey lower bound $R(s,t)\\ge(s-1)(t-1)+1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ramsey-colouring-and-arrow-notation, def-off-diagonal-ramsey-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For integers $s,t\ge2$,

$$R(s,t)\ge(s-1)(t-1)+1.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] $N\to(s,t)^2$ means every red-blue colouring of the pairs of an $N$-element set has a red $s$-set or a blue $t$-set ([[def-ramsey-colouring-and-arrow-notation]]).

[F2] $R(s,t)$ is the least positive $N$ satisfying $N\to(s,t)^2$ ([[def-off-diagonal-ramsey-number]]).

## Proof

**Proof technique:** exhibit a colouring below the claimed threshold.

1.1 Partition $(s-1)(t-1)$ vertices into $s-1$ parts of size $t-1$. Colour every edge within a part blue and every edge between parts red. A red clique uses at most one vertex from each part, so has size at most $s-1$; a blue clique lies in one part, so has size at most $t-1$. [given, F1]

2.1 Thus this colouring has neither a red $K_s$ nor a blue $K_t$. The Ramsey-number definition makes $R(s,t)$ strictly larger than $(s-1)(t-1)$, proving the integer lower bound. [step 1.1, given, F1, F2] ∎
