---
id: lem-optimal-prover-may-be-deterministic
kind: lemma
title: "An optimal prover may be deterministic"
status: draft
origin: session
deps: [def-protocol-game-tree-and-value]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, §8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

In every finite protocol game tree, a deterministic prover strategy attains the root value.

## Proof

**Given:** a finite protocol game tree.

1.1 At each prover node, the finitely many child values have a maximum; choose one maximizing child. [given]

2.1 Backward induction from terminal nodes shows that the choices in step 1.1 attain the value at every prover node, while random nodes retain their prescribed averages. By [[def-protocol-game-tree-and-value]], the resulting deterministic strategy attains the root value. [step 1.1, given] ∎
