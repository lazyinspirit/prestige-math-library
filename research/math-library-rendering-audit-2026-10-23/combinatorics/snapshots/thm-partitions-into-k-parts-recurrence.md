---
id: thm-partitions-into-k-parts-recurrence
kind: theorem
title: "Exact-k partition recurrence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-partition-counting-functions-and-restricted-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: decomposition
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

For every integer $n$ and every integer $k \ge 1$,

$$p_k(n)=p_{k-1}(n-1)+p_k(n-k).$$

## Facts & Assumptions

**Given:** an integer $n$ and an integer $k \ge 1$.

[F1] The quantity $p_k(n)$ counts partitions of $n$ into exactly $k$ positive parts, and it is defined to be $0$ when $n<0$ or $k<0$ ([[def-partition-counting-functions-and-restricted-families]]).

## Proof

**Proof technique:** decomposition.

1.1 A partition of $n$ into exactly $k$ positive parts either contains a part equal to $1$ or has every part at least $2$. These two cases are disjoint and exhaustive. [F1]

2.1 In the first case, delete one part equal to $1$. The remaining parts still form a partition, now of $n-1$, and they are exactly $k-1$ positive parts. Conversely, adjoining one part equal to $1$ to any partition of $n-1$ into $k-1$ positive parts gives a partition of $n$ into $k$ positive parts containing a $1$. So the first case contributes $p_{k-1}(n-1)$. [step 1.1, F1, construct]

2.2 In the second case, subtract $1$ from each of the $k$ parts. Because each part was at least $2$, the result is a partition of $n-k$ into exactly $k$ positive parts. Conversely, adding $1$ to each part of any partition of $n-k$ into $k$ positive parts recovers a partition of $n$ into $k$ parts all at least $2$. So the second case contributes $p_k(n-k)$. If $n-k<0$, then [F1] makes this contribution $0$, exactly as it should. [step 1.1, F1, construct]

3.1 The two disjoint cases of steps 2.1 and 2.2 cover every partition counted by $p_k(n)$, so their cardinalities add to $p_k(n)$. This is the stated recurrence. [step 2.1, step 2.2] ∎
