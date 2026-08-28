---
id: cex-a-stable-letter-word-that-is-not-britton-reduced
kind: counterexample
title: "A stable-letter word need not be Britton-reduced"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hnn-word-pin-and-britton-reduced-word, lem-elementary-hnn-reductions-preserve-the-represented-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement refuted

Every HNN word containing a stable letter is Britton-reduced.

## Facts & Assumptions

**Given:** An HNN extension in associated-subgroup notation.

[L1] A pin $tct^{-1}$ with $c\in C_-$ is not Britton-reduced. ([[def-hnn-word-pin-and-britton-reduced-word]])

[L2] Such a pin reduces to the base-group element $\phi(c)$. ([[lem-elementary-hnn-reductions-preserve-the-represented-element]])

## Counterexample

**Proof technique:** direct.

1.1 Choose any $c\in C_-$. The word $tct^{-1}$ contains a stable letter, and [L1] says it is a pin, so it is not Britton-reduced. [L1, given]

2.1 By [L2], the same word reduces to $\phi(c)\in A$. Thus it is a concrete counterexample to the statement refuted. [L2, step 1.1, algebra] ∎
