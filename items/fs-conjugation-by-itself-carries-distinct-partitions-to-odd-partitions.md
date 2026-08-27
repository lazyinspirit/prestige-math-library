---
id: fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions
kind: false-statement
title: "FALSE: conjugation itself is the distinct-parts to odd-parts bijection"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-partition-conjugation-is-an-involution,
       thm-glaisher-bijection-between-odd-and-distinct-partitions]
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
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

**False claim:** conjugation sends every partition with distinct parts to a
partition into odd parts.

## Facts & Assumptions

**Given:** the distinct-part partition $\lambda=(4,2,1)$.

[L1] Conjugation is the transpose of the Ferrers diagram ([[lem-partition-conjugation-is-an-involution]]).

[L2] The true bijection between odd-part and distinct-part partitions is Glaisher's map ([[thm-glaisher-bijection-between-odd-and-distinct-partitions]]).

## Refutation

**Proof technique:** direct.

1.1 The Ferrers diagram of $(4,2,1)$ has column lengths $3,2,1,1$, so [L1] gives $(4,2,1)'=(3,2,1,1)$. [given, L1]

2.1 The conjugate partition $(3,2,1,1)$ has an even part, namely $2$, so it is not a partition into odd parts. [step 1.1]

3.1 Therefore conjugation does not send every distinct-part partition to an odd-part partition, and the displayed claim is false. By [L2], the correct bijection is a different map. [step 2.1, L2] ∎
