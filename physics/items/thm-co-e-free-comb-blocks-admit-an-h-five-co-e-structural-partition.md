---
id: thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition
kind: theorem
title: "A special-vertex comb in a co-$E$-free graph admits the $\\{H_5,\\mathrm{co}\\text{-}E\\}$ structural partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property, def-h-five-overlap-chain-relation-in-a-comb-block, def-h-five-overlap-blockade-and-iterated-mixed-quotients, lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-co-e-free-external-purity-survives-h-five-overlap-quotients, lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free, def-comb-in-a-graph, def-h-free-and-family-free-graph, def-e-graph-and-co-e-graph, def-h-zero-through-h-five, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: cases
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $G$ be co-$E$-free and let it contain an $(\ell,w)$-comb $((a_i,B_i):i\in[\ell])$ and an outside vertex $v$ complete to all blocks and anticomplete to all teeth. For every $i$, there is a partition $B_i=X_i\mathbin{\dot\cup}Y_i$ such that $Y_i$ is $\{H_5,\mathrm{co}\text{-}E\}$-free, and $X_i$ has a nonempty-block pure blockade partition whose pattern is $\{H_5,\mathrm{co}\text{-}E\}$-free and whose every block is pure to every vertex of $\bigcup_{k\ne i}B_k$.

## Facts & Assumptions
**Given:** The co-$E$-free special-vertex comb of the Statement.

[F1] The terminal overlap quotient is pure and has $\{H_5,\mathrm{co}\text{-}E\}$-free pattern ([[lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade]], [[lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free]]).

[F2] Every external comb-block vertex is pure to every terminal overlap quotient block ([[lem-co-e-free-external-purity-survives-h-five-overlap-quotients]]).

[F3] A singleton sequence is a pure blockade with one-vertex pattern, and induced subgraphs of a co-$E$-free graph are co-$E$-free ([[def-edges-between-sets-and-pure-mixed-pairs]], [[def-h-free-and-family-free-graph]]).

## Proof

**Proof technique:** cases.

1.1 Fix $i$. Let $X_i^0$ be the vertices of $B_i$ contained in an induced $H_5$, and put $Y_i=B_i\setminus X_i^0$. Then $Y_i$ is $H_5$-free by definition and co-$E$-free as an induced subgraph, hence it is $\{H_5,\mathrm{co}\text{-}E\}$-free. [F3]

1.2 Assume-case nonempty: if $X_i^0\ne\varnothing$, set $X_i=X_i^0$ and take its terminal overlap quotient as the partition. Its pure-blockade and pattern clauses are [F1], and its cross-block purity clause is [F2]. [F1, F2, assume-case nonempty]

1.3 Assume-case empty: if $X_i^0=\varnothing$, choose $x_i\in B_i$, set $X_i=\{x_i\}$ and $Y_i=B_i\setminus\{x_i\}$. The singleton blockade on $X_i$ is pure, its pattern has one vertex and is forbidden-family-free, and every outside vertex is pure to it; $Y_i$ is $H_5$-free because $B_i$ was. [F3, choose, assume-case empty]

2.1 The two cases produce the required partition for this arbitrary $i$, and therefore for every comb block. [step 1.1, step 1.2, step 1.3, cases-exhaustive] ∎
