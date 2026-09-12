---
id: "lem-space-bounded-machine-configuration-count"
kind: "lemma"
title: "A space-bounded machine has exponentially many configurations"
status: published
origin: "pipeline"
deps: ["def-polynomial-space-and-nondeterministic-polynomial-space", "def-multitape-and-nondeterministic-machines", "def-turing-machine-configuration", "def-turing-machine-initial-and-halting-configuration-interface"]
justified_by: []
landmark: false
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a74.3"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
    - title: "Kabanets, CMPT 710 Lecture 12, \u00a72"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l12.pdf
proof_strategy: "direct"
---

## Statement

Fix a finite $k$-tape machine $M$, a single input $x$ of length $n$, and an integer visited-cell bound $S$. Configurations reached from this input while using at most $S$ visited cells have injective fixed-length binary encodings of length $O_M(S+\log(n+2))$, and there are at most $2^{O_M(S+\log(n+2))}$ of them. The decoder may use the fixed $x$. If $S\ge n$ the bounds are $O_M(S)$ and $2^{O_M(S)}$ for nonempty feasible configurations.

## Facts & Assumptions

**Given:** The fixed machine in the deterministic $k$-tape model of [[def-multitape-and-nondeterministic-machines]], the standard initial configuration with every head at zero, $x$ on tape one and every other tape blank, and the fixed space bound; no bound across different inputs is asserted.

[F1] Space is the number of distinct scanned tape/cell pairs, includes every initial head cell, and does not count initially occupied but unvisited input cells ([[def-polynomial-space-and-nondeterministic-polynomial-space]]).

[F2] A one-tape configuration consists of state, head position and whole finite-support tape content ([[def-turing-machine-configuration]]).

[F3] Initially the input occupies the first tape starting at zero, all other cells are blank, and halting predicates are machine-relative ([[def-turing-machine-initial-and-halting-configuration-interface]]).

## Proof

1.1 Every head begins at zero and moves by one cell per transition, with a left move at zero unable to leave the right-infinite tape. Hence the cells visited on each tape form an initial segment. A transition writes only at the currently scanned cell, so every unvisited cell retains its initial content. Suppose $S\ge k$. For each tape let $r_i\ge1$ be the visited prefix length; $\sum_i r_i\le S$. Encode the state by a fixed-width word, each $r_i$ and head position by a width-$\lceil\log_2(S+1)\rceil$ field, and the concatenation of the visited tape prefixes by at most $S\lceil\log_2(|\Gamma|+1)\rceil$ bits. Pad the last field to this fixed length with zeros. Reconstruct the unvisited suffix on tape one from the fixed $x$, and all other unvisited cells as blank. These data recover the full configuration, extending F2's triple to the fixed number of tapes. [given, F1, F2, F3]

2.1 To make the map canonical on configurations rather than histories, use on tape $i$ the least prefix containing its head and every cell whose current content differs from its initial content. This prefix is nonempty and no longer than the visited prefix, because writes require a visit. Apply the encoding just described to these canonical prefixes. Their lengths sum to at most $S$, and decoding recovers the exact configuration, so equal codes imply equal configurations. Different histories reaching the same configuration now give the same code. [step 1.1, F1, F3]

3.1 The code length is at most $c_M+2k\lceil\log_2(S+1)\rceil+S\lceil\log_2(|\Gamma|+1)\rceil=O_M(S)$ for $S\ge k\ge1$. There are at most $2^m$ binary words of a fixed length $m$, proved by doubling the count for each appended bit, starting with one empty word. Hence the number of configurations is at most $2^{O_M(S)}$, in particular the stated weaker bound with the input-length logarithm. If $S<k$, even the initial head cells exceed the bound and the reachable set is empty; there is then a vacuous encoding. Empty input and blank-only tape data need no special extra field. No uniform code independent of the fixed input is claimed for an arbitrary unvisited input suffix. [step 2.1, F1] ∎
