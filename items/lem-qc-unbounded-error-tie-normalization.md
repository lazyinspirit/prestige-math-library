---
id: lem-qc-unbounded-error-tie-normalization
kind: lemma
title: "Bounded-overhead tie normalization for fair-bit machines"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - def-probabilistic-polynomial-time-machine-interface
  - def-time-and-space-constructible-function
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy, randomization conventions"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

For a fair-bit probabilistic machine with an explicit time-constructible integer clock $R(n)\ge1$, a machine with no exact $1/2$ acceptance probability can be formed with $O(R(n))$ additional time. It preserves strict-majority membership, and swapping its accept/reject labels decides the complement.

## Facts & Assumptions

**Given:** a fixed fair-bit probabilistic machine, an explicit time-constructible integer clock $R(n)\ge1$ that bounds every branch, and acceptance probability $p$ on an input of length $n$.

[F1] A length-R fair-bit string has probability 2^{-R}; unused suffix bits after halting are counted with their common halting outcome ([[def-probabilistic-polynomial-time-machine-interface]]).

[F2] PrTIME uses strict acceptance probability greater than one half, while a no-instance has probability at most one half ([[def-qc-unbounded-error-time-space-counting-model]]).

[F3] The clock is a time-constructible function, so a machine can perform the specified $R(n)$ padding transitions ([[def-time-and-space-constructible-function]]).

## Proof


1.1 At the fixed input let $R=R(n)$ and let $A$ count accepting strings among the $2^R$ fair-bit strings, including unused suffixes after early halting; then $p=A/2^R$ by [F1]. The new machine first reads $R+2$ selector bits, rejecting only the all-zero selector. On every nonzero selector it simulates the original machine for at most $R$ steps using $R$ fresh bits, records its outcome, and consumes any unused suffix bits in a no-op state. On the zero selector it consumes all $R$ fresh bits and rejects. By [F3] this is a well-defined clocked procedure. There are exactly $2^{2R+2}$ equiprobable strings and exactly $(2^{R+2}-1)A$ accepting ones, so $p'=(1-2^{-(R+2)})p$. [F1, F3, given, construct, algebra]

2.1 If $p\le1/2$ then $p'<1/2$. If $p>1/2$, then $A\ge2^{R-1}+1$, so $p-1/2\ge2^{-R}$; because $p\le1$, $p'-1/2=(p-1/2)-p\,2^{-(R+2)}\ge2^{-R}-2^{-(R+2)}>0$. Thus strict majority is preserved and an original tie becomes a strict no-instance. [step 1.1, algebra]

3.1 The new acceptance probability cannot equal one half: such equality would require the integer $A$ to equal $2^{2R+1}/(2^{R+2}-1)$, which is not an integer because its denominator is odd and greater than one. Since no tie remains, swapping accepting and rejecting labels makes the complement machine accept strictly above one half exactly on the original no-instances. The selector and padding add $2R+2$ transitions, so the overhead is $O(R(n))$. [step 1.1, F2, algebra] ∎

