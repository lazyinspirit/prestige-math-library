---
id: lem-author-75596422a482-face-support
kind: lemma
title: Face boundaries preserve closed support
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
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ closed, and $r\geq0$. In Bloch's complex $z^r(U,\bullet)$, the free subgroup generated in each degree $n$ by admissible integral cycles contained in $T\times\Delta^n$ is preserved by the boundary.

## Statement references

[[def-bloch-higher-cycle-complex]]

## Facts & Assumptions

**Given:** $k,U,T,r$ as stated.

**Goal:** Show that the boundary of each supported generator remains supported.

[F1] Bloch's boundary is the alternating sum of its admissible face intersections. [[def-bloch-higher-cycle-complex]]

## Proof

1.1 For a supported generator $W$, every component occurring in a face intersection is contained in $W\cap(U\times\{t_i=0\})$, hence in $T\times\Delta^{n-1}$ under the face identification. [given, F1]

2.1 The coefficients in the face intersections are integers and the boundary is their alternating sum, so linearity gives the asserted preservation in every degree; degree zero has zero boundary. [F1, step 1.1] ∎
