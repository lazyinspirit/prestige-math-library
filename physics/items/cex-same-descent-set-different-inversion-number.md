---
id: cex-same-descent-set-different-inversion-number
kind: counterexample
title: "Two permutations can have the same descent set and different inversion numbers"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-descent-set-major-index-excedance-and-fixed-point, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

The permutations $[1,0,2]$ and $[2,0,1]$ have the same descent set
$\{0\}$, but their inversion numbers are $1$ and $2$ respectively.

## Facts & Assumptions

**Given:** Descents and inversion numbers are defined by [[def-descent-set-major-index-excedance-and-fixed-point]] and [[def-inversions-inversion-number-and-sign]].

## Verification

**Proof technique:** direct.

1.1 For both permutations, the only descent is at position $0$: in each case the first entry exceeds the second, while the second does not exceed the third. [given]

2.1 The permutation $[1,0,2]$ has one inversion, namely $(1,0)$, while $[2,0,1]$ has two inversions, namely $(2,0)$ and $(2,1)$. So the inversion numbers differ even though the descent sets agree. [step 1.1, given] ∎
