---
id: fs-maximal-antichain-need-not-be-maximum
kind: false-statement
title: "False: every maximal antichain in a finite poset has maximum cardinality"
status: published
origin: session
deps: [def-antichain-and-poset-covers, def-height-and-width-of-a-finite-poset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Every maximal antichain in a finite poset has cardinality equal to the width.

## Facts & Assumptions

**Given:** The three-element poset $P=\{a,b,c\}$ with $a<b$, $a<c$, and $b,c$ incomparable.

[F1] A maximal antichain is inclusion-maximal, while a maximum antichain has greatest cardinality; the width is the cardinality of a maximum antichain ([[def-antichain-and-poset-covers]], [[def-height-and-width-of-a-finite-poset]]).

## Refutation

**Proof technique:** direct.

1.1 The singleton $\{a\}$ is an antichain, and it is maximal because both remaining elements $b$ and $c$ are comparable with $a$. [given, F1]

1.2 The set $\{b,c\}$ is an antichain of cardinality $2$, so the width of $P$ is at least $2$ and $\{a\}$ is not maximum. [given, F1]

2.1 Thus the finite poset $P$ has a maximal antichain that is not maximum, refuting the Statement. [step 1.1, step 1.2] ∎
