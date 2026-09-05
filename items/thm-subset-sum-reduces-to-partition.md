---
id: thm-subset-sum-reduces-to-partition
kind: theorem
title: "Subset sum polynomial-time many-one reduces to partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subset-sum-and-partition, def-polynomial-time-many-one-reduction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

SUBSET SUM polynomial-time many-one reduces to PARTITION.

## Facts & Assumptions

**Given:** A SUBSET SUM instance $(a_1,\ldots,a_n;k)$ and the total
$$ A:=a_1+\cdots+a_n. $$

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[F1] SUBSET SUM asks for a subcollection summing to $k$, and PARTITION asks for a split into two subcollections of equal total sum, by [[def-subset-sum-and-partition]].

## Proof

**Proof technique:** direct.

1.1 If $k>A$, map the instance to the one-element list $(1)$ for PARTITION. This is a correct no-instance because no subcollection of $a_1,\ldots,a_n$ can exceed the total $A$, and the list $(1)$ cannot be partitioned into two equal sums. Thus it remains to treat the case $k\le A$. Define $b:=2A-k$ and $c:=A+k$, and output the PARTITION instance with list $(a_1,\ldots,a_n,b,c)$. [F1, given, construct]

2.1 The new total sum is $A+b+c = A+(2A-k)+(A+k)=4A$, so any equal partition must split the numbers into two subcollections each summing to $2A$. [step 1.1, algebra]

3.1 If the SUBSET SUM instance is positive, choose $I\subseteq\{1,\ldots,n\}$ with $\sum_{i\in I} a_i=k$. Then $\sum_{i\in I} a_i + b = k+(2A-k)=2A$. The complementary numbers among $a_1,\ldots,a_n$ therefore sum to $A-k$, and $(A-k)+c = (A-k)+(A+k)=2A$. So the augmented list is a yes-instance of PARTITION. [step 1.1, step 2.1, construct]

3.2 Conversely, suppose the augmented list has a partition into two subcollections each summing to $2A$. The numbers $b$ and $c$ cannot lie on the same side because $b+c=3A>2A$, and they cannot both be absent from one side because then that side would use only the original $a_i$ and so would sum at most $A<2A$. Hence exactly one of $b,c$ lies on each side. The side containing $b$ must then contain original numbers summing to $2A-b = 2A-(2A-k)=k$. Those numbers witness a yes-instance of SUBSET SUM. [step 1.1, step 2.1, algebra]

4.1 The construction adds only two binary integers computed from $A$ and $k$, so it is polynomial-time. Steps 3.1 and 3.2 establish the required iff, and [L1] therefore gives a polynomial-time many-one reduction from SUBSET SUM to PARTITION. [L1, step 1.1, step 3.1, step 3.2] ∎
