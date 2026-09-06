---
id: lem-space-bounded-universal-simulation
kind: lemma
title: "Space-bounded universal simulation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, def-dtime-ntime-dspace-and-nspace, def-time-and-space-constructible-function]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

A fixed universal simulator, given a machine description and input of total
length $n$, can simulate a computation using $s(n)$ all-tapes space in
$O(n+s(n))$ all-tapes space. In particular, this is $O(s(n))$ when
$n=O(s(n))$.

## Facts & Assumptions

**Given:** a description/input pair of total length $n$ and a simulated run using at most $s(n)$ visited cells.

## Proof

**Proof technique:** direct.

1.1 Retain the description and input, and store the active state, tape contents of visited cells, and head positions; update this finite configuration one transition at a time. [given, construct]

2.1 The description/input portion costs $O(n)$ cells and the current simulated configuration costs $O(s(n))$ cells. Updating one configuration at a time requires no history of the run and no halting clock. Hence the simulator uses $O(n+s(n))$ space, which is $O(s(n))$ under $n=O(s(n))$. [step 1.1, algebra] ∎
