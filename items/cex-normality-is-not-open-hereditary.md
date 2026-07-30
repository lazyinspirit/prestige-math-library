---
id: cex-normality-is-not-open-hereditary
kind: counterexample
title: "Assuming countable choice, normality is not open-hereditary: deleting one corner of the Tychonoff plank"
status: published
origin: session
deps: [lem-deleted-tychonoff-plank-is-regular-and-nonnormal]
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

## Statement refuted

Assuming countable choice, every open subspace of a normal space is normal.

## Facts & Assumptions

**Given:** The deleted Tychonoff plank construction.

[L1] Under countable choice, its parent is normal and deletion of its corner produces an open nonnormal subspace ([[lem-deleted-tychonoff-plank-is-regular-and-nonnormal]]).

## Counterexample

**Proof technique:** direct.

1.1 Take the compact Hausdorff normal plank $P$ of [L1] and its deleted-corner subspace $T$. [L1]

2.1 The subspace $T$ is open in $P$ and is not normal, which refutes the displayed assertion. [L1, step 1.1] ∎
