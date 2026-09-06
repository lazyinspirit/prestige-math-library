---
id: thm-p-is-contained-in-p-poly
kind: theorem
title: "Every polynomial-time language has polynomial-size circuits"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-circuit-size-depth-fanin-and-basis, def-circuit-family-and-p-poly, def-p]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

## Proof

**Proof technique:** direct.

1.1 Fix an input length $n$. Encode a configuration of $M$ by the state, head position, and the $O(p(n))$ tape cells that can be visited in $p(n)$ steps. Each bit of the next configuration depends on only a constant-size neighbourhood of the current configuration, so it is computed by a constant-size Boolean subcircuit. Pad halting configurations so that this update is defined through time $p(n)$. [L1, given, construct]

2.1 Wire $p(n)$ copies of the update layer in sequence, initialize the first layer from the $n$ input bits, and read the accepting-state bit in the final layer. There are $O(p(n))$ encoded bits per layer and $p(n)$ layers, so the resulting circuit $C_n$ has $O(p(n)^2)$ gates. Replacing its fixed local basis by the page basis changes this bound only by a constant factor. [L3, step 1.1]

3.1 For every $x\in\{0,1\}^n$, $C_n(x)=1$ exactly when $M$ accepts $x$. Thus $(C_n)$ is a polynomial-size family recognizing $L$, as required by [L2]. The construction proves existence of each $C_n$ and does not assert a uniform generator. [L2, step 2.1] ∎
