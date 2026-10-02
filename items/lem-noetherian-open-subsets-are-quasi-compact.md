---
id: lem-noetherian-open-subsets-are-quasi-compact
kind: lemma
title: Noetherian open subsets are quasi-compact
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- def-axiom-of-choice
- def-compact-space
- def-noetherian-topological-space
- def-subspace-topology-top
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: The Stacks Project; elementary local prerequisite for the Step 5b citation
        repair
      url: https://stacks.math.columbia.edu/tag/0050
---

## Statement

Assume the Axiom of Choice. Every open subset of a Noetherian topological space is quasi-compact, including the empty open subset.

## Facts & Assumptions

**Given:** AC, a Noetherian space $X$, an open subset $U$, and an open cover $(U_i)_{i\in I}$ of $U$.

[F1] Noetherian means every ascending sequence of open subsets stabilizes. ([[def-noetherian-topological-space]])

[F2] A subspace is quasi-compact when each of its open covers has a finite subcover. Since $U$ is open, its relatively open subsets are open in $X$. ([[def-compact-space]], [[def-subspace-topology-top]])

[A1] AC permits the recursive selections below. ([[def-axiom-of-choice]])

## Proof

1.1 If the cover has no finite subcover, start with $V_0=\varnothing$. Given the finite union $V_n$ of previously selected members, choose a point of $U\setminus V_n$ and a cover member containing it, and let $V_{n+1}$ be its union with $V_n$. AC licenses these countably many choices. Every $V_n$ is open in $X$, and $V_n\subsetneq V_{n+1}$. [F2, A1, construct]

2.1 This contradicts [F1]. Thus the cover has a finite subcover and $U$ is quasi-compact. For $U=\varnothing$, the empty subcover already suffices. ∎ [F1, F2, step 1.1]
