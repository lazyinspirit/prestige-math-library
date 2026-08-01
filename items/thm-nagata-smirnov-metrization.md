---
id: thm-nagata-smirnov-metrization
kind: theorem
title: 'Under choice, a space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-locally-finite basis'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-metric-spaces-have-sigma-locally-finite-bases, rem-sigma-locally-finite-base-produces-compatible-normal-sequence, lem-alexandroff-urysohn-metrization-lemma, def-regular-and-t3-spaces, def-t0-and-t1-spaces, def-metrizable-space]
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
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-locally-finite basis. Here regularity and $T_1$ are separate hypotheses.

## Facts & Assumptions

**Given:** The Axiom of Choice and a topological space $X$.

[L1] Under choice every metric space has a $\sigma$-locally-finite basis ([[lem-metric-spaces-have-sigma-locally-finite-bases]]).

[L2] **Recorded external fallback; not proved here.** A regular $T_1$ space with such a basis has a compatible normal sequence ([[rem-sigma-locally-finite-base-produces-compatible-normal-sequence]]); a $T_1$ space with such a sequence is metrizable ([[lem-alexandroff-urysohn-metrization-lemma]]).

## Proof

**Proof technique:** cases.

1.1 If $X$ is metrizable, it is regular and $T_1$, and [L1] gives the required basis. [assume-case forward, L1]

1.2 If $X$ is regular, $T_1$, and has a $\sigma$-locally-finite basis, [L2] first gives a compatible normal sequence and then a compatible metric. [assume-case reverse, L2]

2.1 The two cases prove the two directions of the equivalence. [step 1.1, step 1.2, cases-exhaustive] ∎
