---
id: cor-the-stable-letter-has-infinite-order
kind: corollary
title: "The stable letter has infinite order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-brittons-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

The stable letter $t$ of an HNN extension has infinite order.

## Facts & Assumptions

**Given:** An HNN extension with stable letter $t$.

[L1] Every Britton-reduced HNN word containing a stable letter is nontrivial. ([[thm-brittons-lemma]])

## Proof

**Proof technique:** direct.

1.1 For any nonzero integer $n$, the word $t^n$ contains a stable letter and has no base coefficient at which a pin could occur, so it is Britton-reduced. [L1, given]

2.1 By [L1], the element represented by $t^n$ is nonidentity for every $n\ne 0$. Hence no nonzero power of $t$ equals $1$, and $t$ has infinite order. [L1, step 1.1, algebra] ∎
