---
id: thm-bpp-amplification-to-inverse-polynomial-error
kind: theorem
title: "BPP amplification to inverse-polynomial error"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp, lem-majority-error-bound-from-chebyshev]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If $L\in\mathrm{BPP}$ and $q$ is a polynomial with positive values on $\mathbb N$, then $L$ also has a probabilistic polynomial-time decider whose error on length-$n$ inputs is at most $1/q(n)$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm{BPP}$ and a positive polynomial $q$.

[L1] A BPP machine is correct on every input with probability at least $2/3$ ([[def-rp-corp-zpp-bpp-and-pp]]).

[L2] Repeating such trials independently and taking the majority answer makes the error probability at most $9/k$ after $k$ repetitions ([[lem-majority-error-bound-from-chebyshev]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a BPP machine for $L$. On input $x$, run $M$ independently $k:=\lceil 9q(|x|)\rceil$ times and output the majority answer. Each run uses polynomial time and $k$ is polynomial in $|x|$, so the new machine is still probabilistic polynomial-time. [L1, given, construct]

2.1 Fix $x$. The correctness indicators of the independent runs satisfy the hypotheses of [L2] by [L1], so the probability that the majority answer is wrong is at most $9/k\le 1/q(|x|)$. [L1, L2, step 1.1, algebra]

3.1 Since $x$ was arbitrary, the amplified machine has inverse-polynomial error on every input length. [step 2.1] ∎
