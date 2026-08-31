---
id: lem-time-at-least-input-length-permits-complete-input-reading
kind: lemma
title: "Any machine that fully reads every input of length n needs at least linear time"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-worst-case-time-and-space-complexity]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
---

## Statement

Let $M$ be a $k$-tape machine that halts on every input of length $n$. If, on
every such input, the accepting or rejecting branch of $M$ scans each of the
first $n$ input cells before halting, then
$$ \operatorname{Time}_M(n)\ge n. $$

## Facts & Assumptions

**Given:** A halting machine $M$ with the input-reading property stated above.

[L1] Worst-case running time $\operatorname{Time}_M(n)$ is the maximum number of steps over inputs of length $n$, by [[def-worst-case-time-and-space-complexity]].

## Proof

**Proof technique:** direct.

1.1 In one machine step, the input head can move across at most one tape edge, so a single step can expose at most one previously unseen input cell. Starting at the leftmost input cell, reaching all first $n$ input cells therefore requires at least $n-1$ moves and hence at least $n$ time steps under the usual start-and-halt conventions. [given]

2.1 The hypothesis says this lower bound applies on every input of length $n$. By [L1], the worst-case value $\operatorname{Time}_M(n)$ is at least that common lower bound, so $\operatorname{Time}_M(n)\ge n$. [L1, step 1.1] ∎
