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
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Let $M$ be a deterministic $k$-tape Turing machine. For an input word $w$, let
$\operatorname{time}_M(w)$ be the number of steps in the computation of $M$ on
$w$ when that computation halts, and let $\operatorname{space}_M(w)$ be the
total number of tape cells that are ever visited during that computation across
all $k$ tapes.

If $M$ halts on every input of length $n$, its **worst-case time complexity**
and **worst-case space complexity** at that length are
$$ \operatorname{Time}_M(n):=\max\bigl(\{0\}\cup\{\operatorname{time}_M(w):|w|=n\}\bigr),\qquad \operatorname{Space}_M(n):=\max\bigl(\{0\}\cup\{\operatorname{space}_M(w):|w|=n\}\bigr). $$
Thus both values are $0$ when the input alphabet has no words of length $n$.

For a nondeterministic machine $N$, a **maximal branch** either is infinite,
ends in an accepting or rejecting state, or ends at a nonhalting configuration
with no allowed transition. Suppose that every maximal branch on $w$ ends in
an accepting or rejecting state. Since the computation tree is finitely
branching, it then has finitely many nodes: if it had arbitrarily large depth,
repeatedly taking the first child with descendants at arbitrarily large depths
would produce an infinite branch. Define $\operatorname{time}_N(w)$ and
$\operatorname{space}_N(w)$ as the maxima over these finitely many halting
branches. The worst-case values $\operatorname{Time}_N(n)$ and
$\operatorname{Space}_N(n)$ use the same input maxima with $0$ adjoined as
above, provided the branch condition holds for every input of length $n$.

We say that a machine **runs in time at most $t(n)$** when its worst-case time
is bounded by $t$, and **runs in space at most $s(n)$** when its worst-case
space is bounded by $s$.

## Remarks

- The time and space functions are attached to machines that halt on all inputs
  under consideration, which is the regime needed for complexity classes.

- Space counts visited cells, not merely cells that happen to be nonblank in
  the initial input configuration.
