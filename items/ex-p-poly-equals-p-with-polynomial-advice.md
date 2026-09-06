---
id: ex-p-poly-equals-p-with-polynomial-advice
kind: example
title: "Hardwiring a length-indexed advice string"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-p-poly-equals-p-with-polynomial-advice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Let the advised machine $M$ receive one advice bit $a_n$ and output
$x_1\mathbin\oplus a_n$ on every nonempty input $x$. At length $2$, take
$a_2=1$. Hardwiring this advice gives the circuit $C_2(x_1,x_2)=\neg x_1$,
and encoding that circuit as advice recovers the same computation.

## Facts & Assumptions

**Given:** the displayed machine, $a_2=1$, and the input $x=00$.

[L1] The P/poly/advice theorem supplies both circuit encoding and hardwiring directions. by [[thm-p-poly-equals-p-with-polynomial-advice]].

## Verification

**Proof technique:** direct.

1.1 Replacing the advice wire by the constant $1$ turns the XOR gate into a NOT gate on $x_1$; the unused input $x_2$ remains an input wire. On $00$, both $M(00,1)$ and $C_2(00)$ output $1$. [given, construct]

2.1 Conversely encode $C_2$ by the topological list ``inputs $x_1,x_2$; NOT $x_1$; designate the NOT gate as output.'' A fixed evaluator given this list as advice returns $1$ on $00$ and, for every two-bit $x$, returns $\neg x_1$; the declared input $x_2$ is simply unused. [L1, step 1.1, construct]

3.1 The same finite instance therefore exhibits both hardwiring and circuit- encoding directions of [L1]. [L1, step 1.1, step 2.1] ∎
