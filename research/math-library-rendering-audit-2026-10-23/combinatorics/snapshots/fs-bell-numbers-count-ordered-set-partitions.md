---
id: fs-bell-numbers-count-ordered-set-partitions
kind: false-statement
title: "FALSE: Bell numbers count ordered set partitions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-stirling-second-kind-and-bell-number, cor-standard-specializations-of-the-labelled-symbolic-method]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.8"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Bell number $B_n$ counts ordered set partitions of $[n]$.

## Facts & Assumptions

**Given:** The Bell numbers and ordered Bell numbers already discussed on this page.

## Proof

**Proof technique:** direct.

1.1 For $n=3$, [[def-stirling-second-kind-and-bell-number]] gives $B_3=5$. [given]

2.1 But the ordered set partitions of $[3]$ are counted by $1\cdot1!+3\cdot2!+1\cdot3!=13$. Since $5\neq 13$, the Bell numbers do not count ordered set partitions. [step 1.1, given, algebra]

3.1 Therefore the claim is false. [step 2.1] ∎
