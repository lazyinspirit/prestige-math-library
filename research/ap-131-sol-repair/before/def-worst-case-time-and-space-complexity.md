---
id: def-worst-case-time-and-space-complexity
kind: definition
title: "Worst-case time and space complexity of a machine"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-recognized-and-decided, def-partial-function-computed-by-a-machine, def-multitape-and-nondeterministic-machines]
justified_by: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $M$ be a deterministic $k$-tape Turing machine. For an input word $w$, let
$\operatorname{time}_M(w)$ be the number of steps in the computation of $M$ on
$w$ when that computation halts, and let $\operatorname{space}_M(w)$ be the
total number of tape cells that are ever visited during that computation across
all $k$ tapes.

If $M$ halts on every input of length $n$, its **worst-case time complexity**
and **worst-case space complexity** are the functions
$$ \operatorname{Time}_M(n):=\max_{|w|=n}\operatorname{time}_M(w),\qquad \operatorname{Space}_M(n):=\max_{|w|=n}\operatorname{space}_M(w). $$

For a nondeterministic machine $N$, define $\operatorname{time}_N(w)$ and
$\operatorname{space}_N(w)$ as the maximum over all halting branches on input
$w$, provided every branch halts. The worst-case functions
$\operatorname{Time}_N$ and $\operatorname{Space}_N$ are then defined by the
same maxima over inputs of length $n$.

We say that a machine **runs in time at most $t(n)$** when its worst-case time
is bounded by $t$, and **runs in space at most $s(n)$** when its worst-case
space is bounded by $s$.

## Remarks

- The time and space functions are attached to machines that halt on all inputs
  under consideration, which is the regime needed for complexity classes.

- Space counts visited cells, not merely cells that happen to be nonblank in
  the initial input configuration.
