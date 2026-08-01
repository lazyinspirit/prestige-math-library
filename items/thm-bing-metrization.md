---
id: thm-bing-metrization
kind: theorem
title: 'Under choice, a space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-discrete basis'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-metric-spaces-have-sigma-discrete-bases, lem-discrete-families-are-locally-finite, thm-nagata-smirnov-metrization, def-regular-and-t3-spaces, def-t0-and-t1-spaces]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of Topological Spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-discrete basis.

## Facts & Assumptions

**Given:** The Axiom of Choice and a topological space $X$.

[L1] **Recorded external fallback; not proved here.** Under choice every metric space has a $\sigma$-discrete basis ([[rem-metric-spaces-have-sigma-discrete-bases]]).

[L2] A discrete family is locally finite, and Nagata–Smirnov metrizes every regular $T_1$ space with a $\sigma$-locally-finite basis ([[lem-discrete-families-are-locally-finite]], [[thm-nagata-smirnov-metrization]]).

## Proof

**Proof technique:** cases.

1.1 If $X$ is metrizable, [L1] gives a $\sigma$-discrete basis; metric spaces are regular and $T_1$. [assume-case forward, L1]

1.2 If $X$ is regular, $T_1$, and has a $\sigma$-discrete basis, [L2] converts that basis to a $\sigma$-locally-finite one and then gives a metric. [assume-case reverse, L2]

2.1 The cases establish both directions. [step 1.1, step 1.2, cases-exhaustive] ∎
