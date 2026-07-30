---
id: thm-normality-is-not-hereditary
kind: theorem
title: "Assuming countable choice, normality is not hereditary, even to open regular subspaces"
status: published
origin: session
deps: [lem-deleted-tychonoff-plank-is-regular-and-nonnormal, def-hereditary-property]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, deleted Tychonoff plank"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, normality is not hereditary, even when the subspace is open and regular.

## Facts & Assumptions

**Given:** The deleted Tychonoff plank construction.

[L1] Under countable choice, its parent $P$ is normal and its deleted-corner subspace $T$ is open, regular, and nonnormal ([[lem-deleted-tychonoff-plank-is-regular-and-nonnormal]]).

[F1] A hereditary property passes from every space having it to every subspace ([[def-hereditary-property]]).

## Proof

**Proof technique:** direct.

1.1 The parent $P$ in [L1] is normal, but its open regular subspace $T$ is not normal. [L1]

2.1 This one normal space and one nonnormal subspace refute the defining universal condition in [F1]. [F1, step 1.1] ∎
