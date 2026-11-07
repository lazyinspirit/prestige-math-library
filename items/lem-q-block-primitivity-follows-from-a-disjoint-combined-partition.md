---
dependency_level: 2
id: lem-q-block-primitivity-follows-from-a-disjoint-combined-partition
kind: lemma
title: "A disjoint combined partition supplies q-block primitivity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-partitioned-primitive-linear-form-condition
  - def-gcd-of-finite-integer-tuple
proof_strategy: direct
sources:
  references:
    - title: "Mass-transference and metric approximation source proof, with explicit local reconstruction"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "\u00a72.3 Theorem8; elementary disjoint-partition strengthening for the approved predicate"
---

## Statement

Let $n,m\ge1$ and let $\pi$ partition $\{1,\ldots,n\}$ into blocks of size at least $m+1$. There is a partition $\widehat\pi$ of the ordered combined coordinates $(p_1,\ldots,p_m,q_1,\ldots,q_n)$, also with every block of size at least $m+1$, such that $\widehat\pi$-primitivity implies $\gcd((q_i)_{i\in J},p_1,\ldots,p_m)=1$ for every $J\in\pi$.

## Facts & Assumptions

**Given:** The finite partition and tuple-gcd convention.

[F1] Combined partition primitivity means gcd $1$ in each disjoint block. [[def-partitioned-primitive-linear-form-condition]]

[F2] Every common divisor of a tuple divides its gcd, and a divisor common to a larger tuple is common to each subtuple. [[def-gcd-of-finite-integer-tuple]]

## Proof

1.1 Let $J_0$ be the unique block containing index $1$. Replace it by the combined block consisting of every $p$ coordinate followed by its $q$ coordinates; each other block consists only of its original $q$ coordinates. These are disjoint and cover all combined coordinates. Every unchanged block has size at least $m+1$, and the enlarged block has at least that size. [given, construct, algebra]

2.1 For a primitive tuple, [F1] gives gcd $1$ on the enlarged block, which is precisely the required condition for $J_0$. For another block $J$, its $q$ subtuple already has gcd $1$. Every common divisor of that subtuple and all the $p$ coordinates divides this gcd by [F2], so the appended tuple also has gcd $1$. Only this inclusion is claimed; no equivalence of the two predicates is needed. [step 1.1, F1, F2, algebra] ∎
