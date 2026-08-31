---
id: thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest
kind: theorem
title: "A long blockade yields a wide cograph-pattern subblockade or a rainbow forest"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement,
       def-blockade-rainbow-induced-copy,
       def-pattern-graph-of-a-pure-blockade,
       def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 6.7"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $F$ be a forest. Then there exists an integer $d\ge 1$ such that for every
integer $s\ge 1$ and every graph $G$ with a blockade $\mathcal B$ of length

$$ D:=2^{s-1}d^{2s-1} $$

and width $W$, at least one of the following holds:

1. $G$ has a pure blockade $\mathcal A$ of length $2^s$ and width at least
   $W/D$ whose pattern graph is a cograph;
2. $G$ contains a $\mathcal B$-rainbow induced copy of one of $F,\overline F$.

## Facts & Assumptions

**Given:** A forest $F$, an integer $s\ge 1$, a graph $G$, and a blockade $\mathcal B$ in $G$ of length $D:=2^{s-1}d^{2s-1}$ and width $W$.

[L1] Theorem 6.7 of the cited source proves exactly the displayed alternative after translating its pattern language into the library's blockade notation.

## Proof

**Proof technique:** translate the cited source theorem.

1.1 The cited source theorem proves exactly this cograph-pattern or rainbow-copy alternative after translating its pattern language into the library's blockade notation. [L1, given]

2.1 Therefore the present statement follows. [step 1.1] ∎
