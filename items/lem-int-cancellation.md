---
id: lem-int-cancellation
kind: lemma
title: "The integers have no zero divisors; multiplicative cancellation"
status: draft
origin: session
deps: [def-int-operations, thm-int-comm-ring, thm-int-ordered-ring]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

If $x, y \in \mathbb{Z}$ are nonzero then $xy \ne 0$. Consequently, if
$xz = yz$ and $z \ne 0$, then $x = y$.

## Facts & Assumptions

**Given:** Nonzero integers $x, y$.

[L1] $\mathbb{Z}$ is a totally ordered ring; in particular trichotomy holds (each integer is negative, zero, or positive) and positives are closed under multiplication ([[thm-int-ordered-ring]]).

[L2] Ring arithmetic in $\mathbb{Z}$: $(-u)v = -(uv)$, $-(-u) = u$, and distributivity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** cases.

1.1 By trichotomy, each of $x$ and $y$ is positive or negative; split on the sign pattern. [L1, cases-exhaustive]

1.2 Case both positive: $0 < xy$ by closure of positives, so $xy \ne 0$. [assume-case both, L1]

1.3 Case exactly one negative, say $y < 0$ (the other case is identical by commutativity): $0 < -y$, so $0 < x(-y) = -(xy)$, hence $xy < 0$ and $xy \ne 0$. [assume-case mixed, L1, L2]

1.4 Case both negative: $0 < -x$ and $0 < -y$, so $0 < (-x)(-y) = xy$, and $xy \ne 0$. [assume-case negneg, L1, L2]

2.1 In every case $xy \ne 0$: the product of nonzero integers is nonzero. [step 1.2, step 1.3, step 1.4, cases]

3.1 Cancellation: if $xz = yz$ with $z \ne 0$, then $(x-y)z = xz - yz = 0$; were $x - y \ne 0$, the product would be nonzero, so $x - y = 0$, i.e. $x = y$. [step 2.1, L2] ∎
