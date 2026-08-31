---
id: lem-multitape-simulation-has-quadratic-time-overhead
kind: lemma
title: "The standard one-tape simulation of a fixed multitape machine has quadratic overhead"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-multitape-machines-have-one-tape-simulations]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Statement

Fix a deterministic $k$-tape Turing machine $M$ and the standard one-tape
simulator $S_M$ from [[thm-multitape-machines-have-one-tape-simulations]].
There is a constant $c_M>0$ such that, for every input word $w$ and every
$t\ge 0$, after simulating $t$ steps of $M$ on $w$ the simulator $S_M$ has used
at most $c_M(|w|+t+1)$ tape cells and at most $c_M(|w|+t+1)^2$ time.

## Facts & Assumptions

**Given:** A fixed deterministic $k$-tape Turing machine $M$, its standard one-tape simulator $S_M$, an input word $w$, and an integer $t\ge 0$.

[L1] The standard one-tape simulator stores the $k$ simulated tapes as marked blocks separated by delimiters, scans those blocks to read one simulated step, and may shift a block right when a head first enters a fresh blank cell, by [[thm-multitape-machines-have-one-tape-simulations]].

## Proof

**Proof technique:** direct.

1.1 After $j$ steps of $M$, each simulated head has moved by at most $j$ cells from its initial position, so tape $i$ can have visited only the cells in an interval of length at most $|w|+j+1$. Therefore the explicit block for tape $i$ in the encoding from [L1] has length $O(|w|+j+1)$, with an implied constant depending only on the fixed machine $M$. [L1, given]

2.1 Summing over the fixed number $k$ of tapes, and absorbing the fixed delimiter overhead, the whole one-tape encoding after $j$ simulated steps has length at most $c'_M(|w|+j+1)$ for some constant $c'_M>0$. [step 1.1]

3.1 One simulation cycle of $S_M$ at stage $j$ performs a constant number of full sweeps across that length-$O(|w|+j+1)$ encoding and, when needed, one local shift of a suffix of the same order. Hence the time for the $j$th simulated step is at most $c''_M(|w|+j+1)$ for some constant $c''_M>0$. [L1, step 2.1]

4.1 Summing the estimate from step 3.1 for $j=0,1,\dots,t-1$ gives $$ \sum_{j=0}^{t-1} c''_M(|w|+j+1)\le c''_M t(|w|+1)+c''_M\frac{t(t-1)}2\le c_M(|w|+t+1)^2 $$ for a suitable constant $c_M$. Together with step 2.1, this proves the claimed linear space bound and quadratic time bound. [step 2.1, step 3.1] ∎
