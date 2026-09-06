---
id: prop-nc-one-is-contained-in-l-and-l-in-nc-two
kind: proposition
title: "NC1 is contained in L, and L is contained in NC2"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ac-zero-nc-one-and-nc, def-l-and-nl]
proof_strategy: direct
verification:
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

$\mathrm{NC}^1\subseteq\mathrm L\subseteq\mathrm{NC}^2$ under the page's
logspace-uniform circuit convention.

## Facts & Assumptions

**Given:** the uniform circuit and read-only-input machine conventions.

[L1] An $\mathrm{NC}^1$ family has polynomial size, bounded fan-in, logarithmic depth, and logspace uniformity, by [[def-ac-zero-nc-one-and-nc]].

[L2] $\mathrm L$ consists of languages decided with deterministic logarithmic workspace, by [[def-l-and-nl]].

## Proof

**Proof technique:** direct.

1.1 Let $C_n$ have depth $d=O(\log n)$. Evaluate its output by a depth-first walk. Store the current root-to-gate child-choice word (at most $d$ bits), a constant amount of traversal state per *current* level encoded in that word, and $O(\log n)$ counters. Whenever a gate address is needed, recompute it from the output by replaying the stored choices, using logspace uniformity to obtain each gate record. This uses $O(\log n)$ space; bounded fan-in lets the walk combine the child values. Thus $\mathrm{NC}^1\subseteq\mathrm L$. [L1, L2, given]

1.2 Let $M$ be a logspace decider. On inputs of length $n$ it has polynomially many configurations, each indexed with $O(\log n)$ bits, and its start, accepting, and one-step adjacency predicates are logspace uniform. Boolean matrix squaring computes paths of length at most $2^i$ from those predicates. There are $O(\log n)$ squarings, and each Boolean matrix product has bounded-fan-in depth $O(\log n)$ and polynomial size, so start-to-accept reachability has depth $O(\log^2 n)$ and polynomial size. The gate indices and wiring are generated in logspace from $(n,i,u,v)$. Hence $\mathrm L\subseteq\mathrm{NC}^2$. [L1, L2, given, construct]

2.1 The two simulations prove both stated containments without storing a logarithmic stack of logarithmic-size gate addresses. [step 1.1, step 1.2] ∎
