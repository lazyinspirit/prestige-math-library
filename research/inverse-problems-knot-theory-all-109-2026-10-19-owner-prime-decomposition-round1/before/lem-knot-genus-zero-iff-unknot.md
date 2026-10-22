---
id: lem-knot-genus-zero-iff-unknot
kind: lemma
title: "A knot has genus zero exactly when it is the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.4–7.7, printed pp.93–94"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Chapter 11, Proposition 11.7, printed pp.160–162; source explicitly leaves smooth ball details to the reader"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in $S^3$, its Seifert genus is zero if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the standard unknot.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The standard unknot convention]]

[[def-oriented-seifert-surface-and-knot-genus|Seifert genus]]

## Facts & Assumptions

**Given:** AC$_\omega$ and a smooth oriented knot $K$.

[F1] Seifert genus is the minimum nonnegative genus of a connected compact smooth oriented spanning surface. ([[def-oriented-seifert-surface-and-knot-genus]])

[F2] The standard unknot bounds a smooth disk in $S^3$, and the genus of a connected one-boundary disk is zero. ([[def-knot-connected-sum-and-prime-knot]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[A1] AC$_\omega$ is the sequence-choice principle. ([[def-countable-choice]])

[A2] The reverse implication requires the smooth Schoenflies theorem for an embedded sphere in $S^3$ (or an equivalent complete disk-to-standard-unknot argument). The expected supplier `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three` is absent from the current library and run manifest. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

## Proof

**Given:** AC$_\omega$ and $K$.

1.1 If $K$ is ambient isotopic to the standard unknot, carry its standard spanning disk through the isotopy. This gives a genus-zero spanning surface, and nonnegativity in [F1] gives $g(K)=0$. [given, F1, F2, construct]

1.2 If $g(K)=0$, a minimum genus surface is a disk by the compact-surface classification in [F1]. To conclude that its boundary is ambient isotopic to the standard unknot requires the unsupplied smooth Schoenflies/disk-isotopy result in [A2]. No such result was verified, so the reverse implication is unresolved. [given, F1, A1, A2]

## Owner escalation

Supply a complete proof that the boundary of a smoothly embedded disk in $S^3$ is the standard unknot, including the ambient-isotopy conclusion and orientation convention.

## Proof references

[[def-oriented-seifert-surface-and-knot-genus]]

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]
