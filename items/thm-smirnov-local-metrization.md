---
id: thm-smirnov-local-metrization
kind: theorem
title: "Under choice, a space is metrizable if and only if it is paracompact, Hausdorff, and locally metrizable"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-locally-metrizable-space, lem-locally-finite-union-of-sigma-locally-finite-bases, lem-metric-spaces-have-sigma-locally-finite-bases, thm-nagata-smirnov-metrization, thm-stone-metric-spaces-are-paracompact, lem-paracompact-hausdorff-is-regular, def-paracompact-space, def-hausdorff-space]
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
    - title: "UCR, Partitions of Unity and a Metrization Theorem of Smirnov"
      url: "https://math.ucr.edu/~res/math205A/smirnov.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A space is metrizable if and only if it is paracompact, Hausdorff, and locally metrizable.

## Facts & Assumptions

**Given:** The Axiom of Choice and a topological space $X$.

[L1] Under choice, every metric space is paracompact and has a $\sigma$-locally-finite basis ([[thm-stone-metric-spaces-are-paracompact]], [[lem-metric-spaces-have-sigma-locally-finite-bases]]).

[L2] A paracompact Hausdorff space is regular, and Nagata–Smirnov applies to a regular $T_1$ space with a $\sigma$-locally-finite basis ([[lem-paracompact-hausdorff-is-regular]], [[thm-nagata-smirnov-metrization]]).

## Proof

**Proof technique:** cases.

1.1 If $X$ is metrizable, it is Hausdorff and locally metrizable by taking $X$ itself as the open neighbourhood, and it is paracompact by [L1]. [assume-case forward, L1]

1.2 Conversely, local metrizability gives an open cover by metrizable subspaces. Paracompactness refines it by a locally finite open cover; every refining member is a metrizable subspace and has a $\sigma$-locally-finite basis by [L1]. The merger lemma [[lem-locally-finite-union-of-sigma-locally-finite-bases]] gives such a basis for $X$. [assume-case reverse, L1]

2.1 Hausdorffness implies $T_1$, and [L2] makes $X$ regular; applying Nagata–Smirnov in [L2] to the basis from step 1.2 yields a metric. [L2, step 1.2]

3.1 The two cases prove the equivalence. [step 1.1, step 2.1, cases-exhaustive] ∎
