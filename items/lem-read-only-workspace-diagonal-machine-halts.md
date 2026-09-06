---
id: lem-read-only-workspace-diagonal-machine-halts
kind: lemma
title: "The read-only-workspace diagonal machine halts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, lem-read-only-workspace-universal-simulation]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $s$ be work-space constructible with
$\log(n+2)=O(s(n))$. The local read-only-workspace diagonal simulator can
stop every deterministic computation after its finite configuration bound
while using $O(s(n))$ work space.

## Facts & Assumptions

**Given:** the stated constructible bound and a read-only machine capped at
$s(n)$ work cells.

## Proof

**Proof technique:** direct.

1.1 Compute the cap $s(n)$. The input is fixed and read-only, while finite control, work contents, and all head positions have only exponentially many configurations in $s(n)+\log n=O(s(n))$. [given, construct]

2.1 Use the universal simulator and a binary counter of $O(s(n))$ bits to count through that bound, stopping at expiry. A deterministic nonhalting computation repeats a configuration beforehand, so the forced answer makes the simulation total without exceeding $O(s(n))$ work space. [step 1.1, algebra] ∎
