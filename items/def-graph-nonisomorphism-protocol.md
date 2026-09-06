---
id: def-graph-nonisomorphism-protocol
kind: definition
title: "The graph-nonisomorphism interactive protocol"
status: published
origin: session
deps: [def-interactive-proof-transcript-round-and-strategy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, §8.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

For two graphs $G_0,G_1$ on the same labelled vertex set, the verifier chooses
$b$ uniformly from $\{0,1\}$ and, independently, chooses $\pi$ uniformly from
all permutations of the vertex set. It sends $H=\pi(G_b)$, receives a bit
$b'$ from the prover, and accepts iff $b'=b$. This is a one-round instance of
the interaction convention in
[[def-interactive-proof-transcript-round-and-strategy]].
