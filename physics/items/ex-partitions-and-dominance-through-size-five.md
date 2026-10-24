---
id: ex-partitions-and-dominance-through-size-five
kind: example
title: Small partitions and the first dominance incomparability
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-partition-young-diagram-and-conjugate-partition, def-dominance-order-on-partitions, lem-conjugation-reverses-dominance]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Definitions 1.18-1.19 and Lemma 1.21, printed pp. 15-16 (PDF pp. 17-18)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definition 2.12 and Remark 2.13, printed p. 9 (PDF p. 10)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

The partitions of $n$, each paired with its conjugate, are as follows for
$0\le n\le 5$:

- $n=0$: the empty partition $\varnothing$, with $\varnothing'=\varnothing$;
- $n=1$: $(1)$, self-conjugate;
- $n=2$: $(2)$ and $(1,1)$, with $(2)'=(1,1)$;
- $n=3$: $(3)$, $(2,1)$, $(1,1,1)$, with $(3)'=(1,1,1)$ and
  $(2,1)'=(2,1)$;
- $n=4$: $(4)$, $(3,1)$, $(2,2)$, $(2,1,1)$, $(1,1,1,1)$, with
  $(4)'=(1,1,1,1)$, $(3,1)'=(2,1,1)$ and $(2,2)'=(2,2)$;
- $n=5$: $(5)$, $(4,1)$, $(3,2)$, $(3,1,1)$, $(2,2,1)$, $(2,1,1,1)$,
  $(1,1,1,1,1)$, with $(5)'=(1,1,1,1,1)$, $(4,1)'=(2,1,1,1)$,
  $(3,2)'=(2,2,1)$ and $(3,1,1)'=(3,1,1)$.

For every $n\le 5$ the dominance order on the partitions of $n$ is a chain,
namely
$$(5)\rhd(4,1)\rhd(3,2)\rhd(3,1,1)\rhd(2,2,1)\rhd(2,1,1,1)\rhd(1,1,1,1,1)$$
for $n=5$, and $(4)\rhd(3,1)\rhd(2,2)\rhd(2,1,1)\rhd(1,1,1,1)$ for $n=4$,
with the shorter chains for $n\le3$. Dominance is therefore a total order on
the partitions of each $n\le 5$. It first fails to be total at $n=6$, where the
partitions $(4,1,1)$ and $(3,3)$ are incomparable: their prefix sums
$4,5,6$ and $3,6,6$ cross, and the conjugates $(3,1,1,1)$ and $(2,2,2)$ of this
pair are likewise incomparable.

## Facts & Assumptions

**Given:** The partitions listed above for $0\le n\le 5$ and the two partitions $(4,1,1)$ and $(3,3)$ of $6$.

[F1] The conjugate partition $\lambda'$ has parts $\lambda'_j=\#\{i:\lambda_i\ge j\}$, the diagram $[\lambda']$ is the transpose of $[\lambda]$, and conjugation is an involution ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] $\lambda\unrhd\mu$ means $\sum_{i\le r}\lambda_i\ge\sum_{i\le r}\mu_i$ for every $r\ge1$, with each sequence padded by zeros beyond its parts; $\unrhd$ is a partial order, and $\lambda\rhd\mu$ means $\lambda\unrhd\mu$ with $\lambda\ne\mu$ ([[def-dominance-order-on-partitions]]).

[F3] Conjugation reverses dominance: $\lambda\unrhd\mu$ if and only if $\mu'\unrhd\lambda'$ ([[lem-conjugation-reverses-dominance]]).

## Verification

**Proof technique:** direct.

1.1 The six lists are complete: a partition of $n\le5$ whose largest part is $a$ is exactly a partition of $n-a$ with all parts at most $a$, with the part $a$ adjoined, so running over $a=n,n-1,\dots,1$ recovers each list, and for $n=5$ this gives $a=5$: $(5)$; $a=4$: $(4,1)$; $a=3$: $(3,2)$ and $(3,1,1)$; $a=2$: $(2,2,1)$ and $(2,1,1,1)$; $a=1$: $(1,1,1,1,1)$, exactly the seven partitions displayed, with the same recursion for $n\le4$. [given, F1]

1.2 Each displayed conjugate is read off as the column-height sequence of the diagram: $(4,1)$ has column heights $2,1,1,1$, so $(4,1)'=(2,1,1,1)$; $(3,2)$ has column heights $2,2,1$, so $(3,2)'=(2,2,1)$; $(3,1,1)$ has column heights $3,1,1$ and is self-conjugate; $(3,1)$ transposes to $(2,1,1)$ and $(2,2)$ to itself, matching the listed pairs, and taking column heights twice returns the original partition as in [F1]. [F1]

1.3 For $n=5$, each listed consecutive pair is comparable, by the prefix sums of the two partitions: $(5)\rhd(4,1)$ since $5>4$; $(4,1)\rhd(3,2)$ since $4>3$; $(3,2)\rhd(3,1,1)$ since $3=3$ and $5>4$; $(3,1,1)\rhd(2,2,1)$ since $3>2$; $(2,2,1)\rhd(2,1,1,1)$ since $2=2$, $4>3$; and $(2,1,1,1)\rhd(1,1,1,1,1)$ since $2>1$. [F2]

1.4 The same computation for $n=4$ gives the chain $(4)\rhd(3,1)\rhd(2,2)\rhd(2,1,1)\rhd(1,1,1,1)$: the prefix sums compare as $4>3$; then $3>2$; then $2=2$ and $4>3$; then $2>1$, while the partitions of $n\le3$ form the chains $(3)\rhd(2,1)\rhd(1,1,1)$, $(2)\rhd(1,1)$ and the single partitions of $n\le1$. [F2]

1.5 At $n=6$ the partition $(4,1,1)$ has prefix sums $4,5,6$ and $(3,3)$ has prefix sums $3,6,6$, so $4>3$ rules out $(3,3)\unrhd(4,1,1)$ while $5<6$ rules out $(4,1,1)\unrhd(3,3)$: the two are incomparable, and taking conjugates gives $(4,1,1)'=(3,1,1,1)$ and $(3,3)'=(2,2,2)$, whose prefix sums $3,4,5,6$ and $2,4,6,6$ also cross, as [F3] requires. [given, F1, F2, F3]

2.1 Steps 1.3 and 1.4 exhibit a chain through all partitions of each $n\le5$, so any two partitions of the same $n\le5$ are comparable by transitivity of the partial order $\unrhd$; together with step 1.5, which exhibits an incomparable pair of partitions of $6$, dominance is total exactly through size five and the first incomparable pair occurs at $n=6$. ∎ [step 1.3, step 1.4, step 1.5, F2]
