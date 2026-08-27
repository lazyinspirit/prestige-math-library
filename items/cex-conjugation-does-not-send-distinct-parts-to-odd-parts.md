---
id: cex-conjugation-does-not-send-distinct-parts-to-odd-parts
kind: counterexample
title: "Conjugating (4,2,1) does not produce an odd-part partition"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions,
       lem-partition-conjugation-is-an-involution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Conjugating the distinct-part partition

$$(4,2,1)$$

produces a partition into odd parts.

## Facts & Assumptions

**Given:** the distinct-part partition $\lambda=(4,2,1)$.

[L1] Conjugation of partitions is the transpose of the Ferrers diagram ([[lem-partition-conjugation-is-an-involution]]).

## Counterexample

**Proof technique:** direct.

1.1 The columns of the Ferrers diagram of $\lambda$ have lengths $3,2,1,1$, so [L1] gives $\lambda'=(3,2,1,1)$. [L1]

2.1 The conjugate partition has an even part, namely $2$, so it is not a partition into odd parts. Therefore the displayed claim is false. [step 1.1] ∎
