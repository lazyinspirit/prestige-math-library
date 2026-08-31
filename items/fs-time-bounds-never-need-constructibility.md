---
id: fs-time-bounds-never-need-constructibility
kind: false-statement
title: "FALSE: clocked-simulation and time-hierarchy arguments never need constructibility hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-time-and-space-constructible-function, lem-clocked-machine-construction]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

**False claim:** every total time bound $t$ with $t(n)\ge n$ can be uniformly
materialized and enforced as a same-scale machine clock without a
constructibility assumption.

## Facts & Assumptions

**Given:** The false claim above.

[A1] Every total time bound $t$ with $t(n)\ge n$ can be uniformly materialized
and enforced as a same-scale machine clock without a constructibility
assumption.

[L1] A constructible time bound is one whose value can itself be written down within the same asymptotic scale, by [[def-time-and-space-constructible-function]].

[L2] A constructible time bound that also satisfies $n\le t(n)$ for all
sufficiently large $n$ yields a uniformly clocked simulator, by
[[lem-clocked-machine-construction]].

[F1] There exists a total noncomputable function
$b:\mathbb N\to\{0,1\}$. Indeed, the total computable binary-valued functions
form a countable family $(b_j)_{j\in\mathbb N}$ because machines have finite
descriptions, and the diagonal function $b(n):=1-b_n(n)$ differs from every
$b_j$ at input $j$.

## Refutation

**Proof technique:** direct.

1.1 Define the total bound $t(n):=2n+b(n)$ using [F1]. Then $t(n)\ge n$. If a uniform constructor could materialize $t(n)$ on input $1^n$, subtracting $2n$ from its output would compute $b(n)$, contradicting [F1]. Hence this total bound is not time-constructible in the sense of [L1]. [L1, F1, construct]

2.1 The construction in [L2] works precisely by first computing the bound and then enforcing it as a timeout. Step 1.1 exhibits a total bound satisfying the size condition for which that first operation is impossible. Therefore [A1] is false: a uniform same-scale clock cannot be obtained for every total bound without a constructibility hypothesis. [A1, L2, step 1.1] ∎
