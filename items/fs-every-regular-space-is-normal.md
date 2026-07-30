---
id: fs-every-regular-space-is-normal
kind: false-statement
title: "Assuming countable choice, refuted: every regular space is normal"
status: published
origin: session
deps: [lem-deleted-tychonoff-plank-is-regular-and-nonnormal, def-regular-and-t3-spaces, def-normal-and-t4-spaces]
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

Assuming the Axiom of Countable Choice, every regular space is normal.

## Facts & Assumptions

**Given:** The separation-axiom conventions and the deleted Tychonoff plank.

[F1] Regularity separates points from disjoint closed sets, whereas normality separates disjoint closed sets from one another ([[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

[L1] Under countable choice, the deleted Tychonoff plank is regular and not normal ([[lem-deleted-tychonoff-plank-is-regular-and-nonnormal]]).

## Refutation

**Proof technique:** direct.

1.1 Let $T$ be the deleted Tychonoff plank. It is regular by [L1]. [L1]

2.1 The same space $T$ is not normal by [L1], contradicting the displayed universal claim. [F1, L1, step 1.1] ∎
