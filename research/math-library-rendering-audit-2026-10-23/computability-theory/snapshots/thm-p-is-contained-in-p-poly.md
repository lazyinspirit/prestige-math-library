---
id: thm-p-is-contained-in-p-poly
kind: theorem
title: "Every polynomial-time language has polynomial-size circuits"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-circuit-size-depth-fanin-and-basis, def-circuit-family-and-p-poly, def-p, lem-multitape-simulation-has-quadratic-time-overhead]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Every polynomial-time language belongs to $\mathrm{P/poly}$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm P$ and a deterministic machine $M$ deciding $L$ in time $p(n)$ for a polynomial $p$.

[L1] Membership in $\mathrm P$ supplies such a polynomial-time decider, by [[def-p]].

[L2] A polynomial-size family, with one circuit chosen separately at each length, recognizes a language in $\mathrm{P/poly}$, by [[def-circuit-family-and-p-poly]].

[L3] Fixed mutually simulable Boolean bases differ by only constant factors in size and depth, by [[def-boolean-circuit-size-depth-fanin-and-basis]].

[L4] A fixed deterministic multitape machine running for $t$ steps on an $n$-bit input has a fixed one-tape simulator using at most $c_M(n+t+1)^2$ time and at most $c_M(n+t+1)$ cells, by [[lem-multitape-simulation-has-quadratic-time-overhead]].

## Proof

**Proof technique:** direct.

1.1 Fix an input length $n$ and enlarge the time bound to a polynomial $q(n)\ge n+1$ that covers the one-tape simulation in [L4]. Encode each of the first $q(n)+1$ one-tape cells by its tape symbol and a marker carrying the simulated state exactly at the head cell. An update to one cell depends only on the old codes of that cell and its immediate neighbours, since a one-tape head moves at most one cell; the boundary cell uses the fixed left-end rule. Each new cell code therefore has a fixed-size Boolean circuit. Give accepting and rejecting states absorbing local updates so the configuration remains defined through time $q(n)$. [L1, L4, given, construct]

2.1 Wire $q(n)$ copies of the update layer in sequence, initialize the first layer from the $n$ input bits, and OR the accepting-state markers in the final layer. There are $O(q(n))$ encoded bits per layer and $q(n)$ layers, so the resulting circuit $C_n$ has $O(q(n)^2)$ gates; initialization and the final OR also use $O(q(n))$ gates. Replacing its fixed local basis by the page basis changes this bound only by a constant factor. [L3, step 1.1]

3.1 For every $x\in\{0,1\}^n$, $C_n(x)=1$ exactly when $M$ accepts $x$. Thus $(C_n)$ is a polynomial-size family recognizing $L$, as required by [L2]. The construction proves existence of each $C_n$ and does not assert a uniform generator. [L2, step 2.1] ∎
