---
id: ex-lyapunov-condition-for-nonidentical-summands
kind: example
title: Lyapunov condition for nonidentical summands
deps: ["cor-lyapunov-central-limit-theorem", "cor-countable-independent-copies-exist", "lem-ac-supplies-sequential-choices-for-probability-constructions", "def-row-wise-independent-centered-triangular-array", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, exercises after Theorem 3.4.10'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Corollary 6.2
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. Take independent symmetric signs $\epsilon_{n,k}\in\{-1,1\}$, $1\le k\le n$, and set $X_{n,k}=k\epsilon_{n,k}$. With $s_n^2=\sum_{k=1}^nk^2$, the Lyapunov condition holds for $\delta=1$, and $s_n^{-1}\sum_{k=1}^nX_{n,k}\Rightarrow N(0,1)$. In every row of length at least two the summand laws are distinct.

## Facts & Assumptions

[F1] The normalized third-moment condition implies the CLT with delta=1. [[cor-lyapunov-central-limit-theorem]].

[F2] Under DC and countable choice independent copies of a two-point law exist. [[cor-countable-independent-copies-exist]].

[F3] AC supplies those choice principles. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

## Verification

**Given:** Assume AC. Take independent symmetric signs $\epsilon_{n,k}\in\{-1,1\}$, $1\le k\le n$, and set $X_{n,k}=k\epsilon_{n,k}$. With $s_n^2=\sum_{k=1}^nk^2$, the Lyapunov condition holds for $\delta=1$, and $s_n^{-1}\sum_{k=1}^nX_{n,k}\Rightarrow N(0,1)$. In every row of length at least two the summand laws are distinct.

1.1 Use [F2]–[F3] on the law assigning mass 1/2 to each sign, and index its coordinates by $n(n-1)/2+k$ for $1\le k\le n$. These indices are distinct across the array and exhaust the positive integers. Thus the required signs exist and are independent. Direct two-point integration gives $\mathbb EX_{n,k}=(k-k)/2=0$, $\mathbb EX_{n,k}^2=k^2$ and $\mathbb E|X_{n,k}|^3=k^3$. Different k have disjoint supports $\{-k,k\}$, so their laws differ. [F2, F3]

2.1 At least n/2 integers k in the row satisfy $k\ge n/2$, so $s_n^2\ge(n/2)(n/2)^2=n^3/8$. Also $\sum_{k=1}^nk^3\le n\,n^3=n^4$. Hence $s_n^{-3}\sum_k\mathbb E|X_{n,k}|^3\le8^{3/2}/\sqrt n\to0$. These bounds remain valid for n=1. The rows are centered, independent and have finite moments and positive s_n, so [F1] with delta=1 proves the assertion. AC is used by the copy construction and inherited in [F1]. [step 1.1, F1] ∎

