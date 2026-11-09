---
id: lem-author-b747b28c359f-homotopy-cohomology
kind: lemma
title: Homotopic maps act equally on cohomology
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-cochain-maps
dependency_roles:
  lem-author-b747b28c359f-cochain-maps: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
If cochain maps $f,g:C\to D$ are cochain-homotopic, then $H^i(f)=H^i(g)$ for every integer $i$. Here a cochain homotopy is a family $h^i:C^i\to D^{i-1}$ with $f^i-g^i=d_D^{i-1}h^i+h^{i+1}d_C^i$.

## Facts & Assumptions

[F1] Cochain maps induce maps on cohomology by applying the map to cocycle representatives ([[lem-author-b747b28c359f-cochain-maps]]).

## Proof

**Given:** Cochain maps $f,g$ and a cochain homotopy $h$ between them.

**Goal:** Prove equality of their induced cohomology maps.

1.1 For a cocycle $x\in C^i$, the homotopy identity gives $f^i(x)-g^i(x)=d_D^{i-1}h^i(x)$ because $d_C^i(x)=0$. This difference is a coboundary. [given]

2.1 Every cohomology class has a cocycle representative, and by [F1] the induced maps take it to the classes of $f^i(x)$ and $g^i(x)$. These classes agree by step 1.1. [F1, step 1.1] ∎
