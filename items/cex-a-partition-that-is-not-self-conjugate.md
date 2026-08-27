---
id: cex-a-partition-that-is-not-self-conjugate
kind: counterexample
title: "The partition (4,2,1) is not self-conjugate"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

The partition

$$(4,2,1)$$

is self-conjugate.

## Facts & Assumptions

**Given:** the partition $\lambda=(4,2,1)$.

[F1] Conjugation transposes the Ferrers diagram, so the conjugate partition has column lengths equal to the row lengths of the transposed diagram ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]]).

## Counterexample

**Proof technique:** direct.

1.1 The Ferrers diagram of $\lambda$ has column lengths $3,2,1,1$, so [F1] gives $\lambda'=(3,2,1,1)$. [F1]

2.1 Since $(3,2,1,1)\ne(4,2,1)$, the partition $\lambda$ is not self-conjugate. Therefore the displayed claim is false. [step 1.1] ∎
