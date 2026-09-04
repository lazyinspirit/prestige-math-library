---
id: def-rp-corp-zpp-bpp-and-pp
kind: definition
title: "The classes RP, coRP, ZPP, BPP, and PP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-probabilistic-polynomial-time-machine]
landmark: true
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Definition

Let $L$ be a language. Each bounded-error class below is defined by the
existence of a probabilistic polynomial-time machine $M$ satisfying the stated
conditions on every input $x$.

- $L$ lies in **RP** when there exists such an $M$ for which:
  - if $x\notin L$, then $M$ rejects with probability $1$;
  - if $x\in L$, then $M$ accepts with probability at least $1/2$.

- $L$ lies in **coRP** when there exists such an $M$ for which:
  - if $x\in L$, then $M$ accepts with probability $1$;
  - if $x\notin L$, then $M$ rejects with probability at least $1/2$.

- $L$ lies in **BPP** when there exists such an $M$ for which:
  - if $x\in L$, then $M$ accepts with probability at least $2/3$;
  - if $x\notin L$, then $M$ rejects with probability at least $2/3$.

- $L$ lies in **PP** when there exists such an $M$ for which:
  - if $x\in L$, then $M$ accepts with probability strictly greater than $1/2$;
  - if $x\notin L$, then $M$ accepts with probability at most $1/2$.

- $L$ lies in **ZPP** when there is a probabilistic algorithm that always
  outputs the correct yes/no answer and whose expected runtime is polynomial in
  the input length.

## Remarks

- The constants $1/2$ and $2/3$ are conventions; amplification later shows
  that the exact BPP error constant is inessential as long as it is bounded
  away from $1/2$.
- The PP definition does not require any fixed gap above $1/2$.
