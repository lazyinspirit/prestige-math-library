---
id: cor-opposite-definite-reconstruction-at-minimal-rank-is-reduced
kind: corollary
title: "Opposite definite reconstruction at minimal rank is reduced"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-connected-alternating-link-is-nonsplit
  - thm-reduced-alternating-diagram-minimizes-crossings
  - thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links
  - lem-crossing-minimal-regular-link-diagrams-are-reduced
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the nonsplit opposite-definite reconstruction. It implies countable choice for crossing minimality; all numerical comparisons are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
---

## Statement

Assume full AC. Let $D$ be a connected reduced alternating diagram of a nonempty oriented smooth link $L$. Let $F_+,F_-$ be compact smooth spanning surfaces for $L$ without closed components and with opposite definite full normal-transfer pairings. If $b_1(F_+)+b_1(F_-)=c(D)$, then both surfaces are connected and the opposite-definite reconstruction produces a connected reduced alternating diagram $E$ of $L$ with exactly $c(D)$ crossings, whose two checkerboard surfaces are smoothly ambient isotopic individually to $F_+$ and $F_-$. No primeness assumption is used.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the connected reduced alternating diagram and the two opposite definite spanning surfaces with their stated rank sum.

[F1] Full AC implies countable choice. A connected alternating diagram represents a nonsplit link. Under countable choice a connected reduced alternating diagram realizes the crossing number. ([[thm-choice-implies-dependent-implies-countable-choice]], [[lem-connected-alternating-link-is-nonsplit]], [[thm-reduced-alternating-diagram-minimizes-crossings]])

[F2] Opposite definite spanning surfaces for a nonsplit link recover a connected alternating diagram of the original smooth link with crossing count their first-Betti-number sum and with the two individual smooth checkerboard classes. Both original surfaces are connected. ([[thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links]])

[F3] A regular diagram realizing crossing number is reduced. ([[lem-crossing-minimal-regular-link-diagrams-are-reduced]])

## Proof

1.1 By [F1] the represented link $L$ is nonsplit and $c(D)=c(L)$. Apply [F2] to the actual given opposite definite pair. It supplies their connectedness, the smooth individual checkerboard identifications and a connected alternating diagram $E$ of the original link. [given, F1, F2, construct]

2.1 Its crossing count is $c(E)=b_1(F_+)+b_1(F_-)=c(D)=c(L)$. Thus [F3] makes $E$ reduced. The supplied smooth checkerboard classes and all orientations are those of [F2]; the numerical comparison introduced no isotopy or extra decomposition. This proves the full statement, including composite nonsplit links, without a prime-link hypothesis. [given, step 1.1, F1, F2, F3, algebra] ∎
