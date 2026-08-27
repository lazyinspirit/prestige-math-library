---
id: thm-unlabelled-unlabelled-placement-counts
kind: theorem
title: "The unlabelled-to-unlabelled cells of the twelvefold way"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-twelvefold-way-ball-box-conventions,
       def-partition-counting-functions-and-restricted-families,
       cor-partitions-with-at-most-k-parts-equal-parts-at-most-k]
justified_by: []
aliases: []
landmark: false
proof_strategy: classification
sources:
  scraped: []
  references:
    - title: "Alexander Hulpke, Combinatorics notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

Fix positive integers $n$ and $k$. For placements of $n$ indistinguishable
balls into $k$ indistinguishable boxes:

1. the arbitrary placements are counted by the partitions of $n$ with at most
   $k$ parts, equivalently by the partitions of $n$ whose parts are all at most
   $k$;
2. the injective placements are counted by $1$ when $n \le k$ and by $0$ when
   $n>k$;
3. the surjective placements are counted by $p_k(n)$.

## Facts & Assumptions

**Given:** positive integers $n$ and $k$.

[L1] Under the page conventions, an unlabelled-to-unlabelled placement is encoded by its nonzero occupancies written in nonincreasing order ([[def-twelvefold-way-ball-box-conventions]]).

[L2] Partitions with at most $k$ parts are equinumerous with partitions whose parts are all at most $k$ ([[cor-partitions-with-at-most-k-parts-equal-parts-at-most-k]]).

## Proof

**Proof technique:** classification.

1.1 By [L1], an arbitrary placement is determined by the list of its positive occupancies, written in nonincreasing order. These occupancies sum to $n$, so they form a partition of $n$; because there are only $k$ boxes, there can be at most $k$ positive occupancies. Conversely, any partition of $n$ with at most $k$ parts becomes such a placement by reading its parts as the nonzero box occupancies. This proves clause 1 in its "at most $k$ parts" form. [L1, construct]

2.1 A placement is surjective exactly when every box is occupied, so there are exactly $k$ positive occupancies. By step 1.1 these are exactly the partitions of $n$ into $k$ positive parts, which are counted by $p_k(n)$. This is clause 3. [step 1.1]

2.2 A placement is injective exactly when every occupied box contains one ball. Therefore the positive occupancy list must be $(1,\dots,1)$ with $n$ entries. Such a list exists exactly when $n \le k$, and when it exists it is unique. This proves clause 2. [step 1.1]

3.1 The second description in clause 1 follows from [L2]. [step 1.1, L2] ∎
