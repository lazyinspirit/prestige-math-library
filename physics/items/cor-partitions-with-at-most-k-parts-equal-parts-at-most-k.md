---
id: cor-partitions-with-at-most-k-parts-equal-parts-at-most-k
kind: corollary
title: "Partitions with at most k parts are equinumerous with partitions whose parts are all at most k"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-partitions-with-k-parts-equal-largest-part-k,
       def-partition-counting-functions-and-restricted-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
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

For every $n \ge 0$ and $k \ge 0$, the number of partitions of $n$ with at
most $k$ parts equals the number of partitions of $n$ whose parts are all at
most $k$.

## Facts & Assumptions

**Given:** integers $n \ge 0$ and $k \ge 0$.

[F1] A partition has all parts at most $k$ exactly when its largest part is at most $k$ ([[def-partition-counting-functions-and-restricted-families]]).

[L1] For each $j \ge 0$, partitions with exactly $j$ parts are equinumerous with partitions whose largest part is $j$ ([[thm-partitions-with-k-parts-equal-largest-part-k]]).

## Proof

**Proof technique:** bijection.

1.1 Let $\lambda$ be a partition of $n$ with at most $k$ parts. If $\lambda$ has exactly $j$ parts, then $j \le k$, and [L1] sends $\lambda$ by conjugation to a partition whose largest part is $j$. By [F1], every part of the conjugate is therefore at most $k$. The same reasoning in reverse sends any partition all of whose parts are at most $k$ to one with at most $k$ parts. [F1, L1]

2.1 Thus conjugation restricts to a bijection between the two displayed sets, so they have equal cardinality. [step 1.1] ∎
