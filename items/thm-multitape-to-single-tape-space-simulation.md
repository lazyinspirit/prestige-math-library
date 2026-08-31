---
id: thm-multitape-to-single-tape-space-simulation
kind: theorem
title: "Every multitape space-S computation has a single-tape simulation in O(n+S(n)) space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-asymptotic-resource-comparison, def-dtime-ntime-dspace-and-nspace, def-worst-case-time-and-space-complexity, thm-multitape-machines-have-one-tape-simulations]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $M$ be a fixed deterministic multitape Turing machine. If
$$ \operatorname{Space}_M(n)=O(S(n)), $$
then there exists a deterministic one-tape Turing machine $S_M$ deciding the
same language and satisfying
$$ \operatorname{Space}_{S_M}(n)=O(n+S(n)). $$

## Facts & Assumptions

**Given:** A fixed deterministic multitape machine $M$ with $\operatorname{Space}_M(n)=O(S(n))$.

[L1] Every fixed multitape machine has an equivalent deterministic one-tape simulator, by [[thm-multitape-machines-have-one-tape-simulations]].

[L2] Worst-case space counts the total number of tape cells ever visited during a halting computation, by [[def-worst-case-time-and-space-complexity]].

[L3] Big-$O$ compares functions up to eventual constant factors, by [[def-asymptotic-resource-comparison]].

[L4] The class notation DSPACE records deterministic decision procedures within an asymptotic space bound, by [[def-dtime-ntime-dspace-and-nspace]].

## Proof

**Proof technique:** direct.

1.1 Use the standard simulator from [L1] that stores the $k$ simulated tapes as marked blocks on one tape. On an input of length $n$, the first simulated tape block initially records the whole input word, contributing $n$ cells up to a constant factor. Beyond that initial block, the simulator records only cells that the multitape computation has visited, together with only constant-size bookkeeping per recorded cell and a fixed number of delimiters depending on $M$. If the simulated computation has visited at most $S(n)$ cells altogether, [L2] therefore bounds the one-tape encoding length by $O(n+S(n))$. [L1, L2, given, construct]

2.1 Therefore there exists a constant $c_M$ such that every halting run of the simulator on an input of length $n$ visits at most $c_M(n+S(n)+1)$ cells. By [L3], this is $O(n+S(n))$. Taking maxima over all length-$n$ inputs gives $\operatorname{Space}_{S_M}(n)=O(n+S(n))$. [L3, step 1.1]

3.1 The simulator still decides the same language as $M$, and step 2.1 places it in the deterministic single-tape space class described by [L4]. [L4, step 1.1, step 2.1] ∎
