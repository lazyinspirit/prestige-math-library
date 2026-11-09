---
id: lem-author-75596422a482-open-restriction
kind: lemma
title: Open restriction of admissible cycles
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subset U$ open and $r\geq0$. Restricting each admissible generator to $V\times\Delta^n$, with empty restriction sent to zero, defines a chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$.

## Statement references

[[def-bloch-higher-cycle-complex]]

## Facts & Assumptions

**Given:** $k,U,V,r$ as stated.

**Goal:** Establish admissibility and compatibility with boundaries.

[F1] The cycle groups, face maps and their coefficients are defined by admissible intersections and local lengths. [[def-bloch-higher-cycle-complex]]

## Proof

1.1 A nonempty open subscheme of an integral scheme is integral and dense. Restricting a generator and its intersections with coordinate faces to the open subset $V$ preserves their codimensions at their generic points; its restriction is therefore an admissible generator, or zero if empty. [given, F1]

2.1 Formation of a face intersection commutes with restriction to the open subset. At each surviving generic point the local rings and the length in the face coefficient are unchanged; components disjoint from the open disappear. Thus each face map commutes with restriction, and so does their alternating sum. [F1, step 1.1] ∎
