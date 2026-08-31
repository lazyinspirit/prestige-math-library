---
id: lem-time-bounds-imply-space-bounds
kind: lemma
title: "A time bound always yields the same-order space bound"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-asymptotic-resource-comparison, def-worst-case-time-and-space-complexity, lem-time-at-least-input-length-permits-complete-input-reading]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

Let $M$ be a fixed $k$-tape machine that halts on every input. If
$$ \operatorname{Time}_M(n)=O(T(n)), $$
then
$$ \operatorname{Space}_M(n)=O(T(n)). $$

## Facts & Assumptions

**Given:** A fixed halting $k$-tape machine $M$ and a bound $T$ with $\operatorname{Time}_M(n)=O(T(n))$.

[L1] Worst-case time and space count machine steps and visited tape cells, respectively, by [[def-worst-case-time-and-space-complexity]].

[L2] Big-$O$ means eventual domination up to a constant factor, by [[def-asymptotic-resource-comparison]].

[L3] A machine that must inspect all $n$ input cells needs at least linear time, by [[lem-time-at-least-input-length-permits-complete-input-reading]].

## Proof

**Proof technique:** direct.

1.1 During one step, each of the $k$ heads can enter at most one new cell on its own tape. Therefore after $t$ steps, the total number of visited cells across all tapes is at most the initial $k$ cells plus $kt$. By [L1], every halting computation using $t$ steps uses at most $k(t+1)$ space. [L1, given]

2.1 Applying step 1.1 to the worst halting run on an input of length $n$ gives $\operatorname{Space}_M(n)\le k(\operatorname{Time}_M(n)+1)$. The additive constant is harmless asymptotically, and [L2] converts this inequality together with the hypothesis $\operatorname{Time}_M(n)=O(T(n))$ into $\operatorname{Space}_M(n)=O(T(n))$. When an argument also requires the budget to dominate input reading, [L3] supplies the usual linear lower bound. [L2, L3, step 1.1] ∎
