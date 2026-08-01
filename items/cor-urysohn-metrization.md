---
id: cor-urysohn-metrization
kind: corollary
title: "Under choice, every regular $T_1$ second-countable space is metrizable"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nagata-smirnov-metrization, def-second-countable-space, def-discrete-family-and-sigma-bases]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every regular $T_1$ second-countable space is metrizable.

## Facts & Assumptions

**Given:** A regular $T_1$ space with a countable basis $(B_n)_{n\in\mathbb N}$, and the Axiom of Choice.

[L1] Nagata–Smirnov metrizes a regular $T_1$ space with a $\sigma$-locally-finite basis ([[thm-nagata-smirnov-metrization]]).

## Proof

**Proof technique:** direct.

1.1 Each singleton family $\{B_n\}$ is locally finite, including when $B_n=\varnothing$. Hence the displayed basis is $\sigma$-locally finite. [given]

2.1 Apply [L1] to step 1.1 and the given regular and $T_1$ hypotheses. [L1, step 1.1] ∎
