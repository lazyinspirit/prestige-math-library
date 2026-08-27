---
id: lem-partition-conjugation-is-an-involution
kind: lemma
title: "Conjugating a partition twice returns the original partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

For every partition $\lambda$, one has

$$(\lambda')'=\lambda.$$

## Facts & Assumptions

**Given:** a partition $\lambda$ and its Ferrers diagram.

[F1] The part $\lambda'_j$ is the number of rows of $\lambda$ of length at least $j$ ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]]).

## Proof

**Proof technique:** direct.

1.1 A cell $(i,j)$ belongs to the Ferrers diagram of $\lambda$ exactly when the $i$-th row has length at least $j$, and by [F1] this is equivalent to the $j$-th row of $\lambda'$ having length at least $i$. Therefore the cells of $\lambda'$ are exactly the transpose $(j,i)$ of the cells of $\lambda$. [F1]

2.1 Transposing the same finite set of cells a second time sends $(j,i)$ back to $(i,j)$, so the twice-conjugated diagram is the original diagram. Hence its row lengths are again $\lambda$, that is, $(\lambda')'=\lambda$. [step 1.1] ∎
