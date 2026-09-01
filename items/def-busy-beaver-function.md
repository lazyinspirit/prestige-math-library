---
id: def-busy-beaver-function
kind: definition
title: "The step-count busy beaver function relative to the chosen machine coding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-effective-encoding-of-turing-machines
  - def-halting-computation-and-divergence
  - def-natural-numbers
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Adam Yedidia and Scott Aaronson, A Relatively Small Turing Machine Whose Behavior Is Independent of Set Theory"
      url: "https://www.scottaaronson.com/busybeaver.pdf"
---

## Definition

Fix the chosen machine code $\ulcorner M\urcorner$ from
[[def-effective-encoding-of-turing-machines]]. For $n\in\mathbb N$, let
$BB(n)$ be the maximum number of steps taken by any coded deterministic
one-tape Turing machine $M$ such that:

- the code length satisfies $|\ulcorner M\urcorner|\le n$, and
- $M$ halts on the empty input word $\varepsilon$.

If no such machine exists, define $BB(n):=0$.

Thus
$$ BB(n):=\max\bigl\{\operatorname{time}_M(\varepsilon): |\ulcorner M\urcorner|\le n,\ M \text{ halts on } \varepsilon\bigr\}, $$
with the empty-set convention above.

## Remarks

- This is a coding-dependent busy beaver function: changing the chosen machine
  syntax changes the finite search space for each $n$.

- The maximization is over halting time on the blank input, not over number of
  nonblank symbols written.
