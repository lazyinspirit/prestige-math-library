---
id: lem-dpdas-have-unique-computations
kind: lemma
title: "A DPDA has at most one computation on each input"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-pda, def-pda-configuration-and-step]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Statement

Let $M$ be a DPDA. For every marked input $w\dashv$, any two finite computations
of $M$ starting from the initial configuration on $w\dashv$ are comparable by
extension. Consequently, there is at most one maximal computation on that
marked input.

## Facts & Assumptions

**Given:** A DPDA $M$ and an input word $w\dashv$.

[L1] By [[def-deterministic-pda]], once the current state and top stack symbol are fixed, there is at most one enabled move, and an enabled $\varepsilon$-move excludes all simultaneous input-reading moves.

[L2] By [[def-pda-configuration-and-step]], a computation is a sequence of one-step moves between configurations.

## Proof

**Proof technique:** direct.

1.1 From any configuration of $M$, the pair consisting of the current state and top stack symbol determines at most one legal next step by [L1]. [L1, given]

2.1 Therefore two computations on the same input and with the same initial configuration must agree on their first move whenever either has a first move. Repeating the same argument after each common prefix shows inductively that they agree step by step for as long as both are defined. [L1, L2, step 1.1, induction]

3.1 Thus any two finite computations from the initial configuration are comparable by extension. Their union, when the computation continues indefinitely, or their common terminal extension, when it halts, is the unique maximal computation on $w\dashv$. [L2, step 2.1] ∎
