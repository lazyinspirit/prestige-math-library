---
id: lem-knot-genus-invariant-under-mirror-and-reversal
kind: lemma
title: "Knot genus is invariant under mirroring and reversal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-oriented-seifert-surface-and-knot-genus
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.1–7.3, printed pp.91–93"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot in $S^3$, and let $r:S^3\to S^3$ be an orientation-reversing reflection. Give $r(K)$ the image orientation, and let $-K$ denote reversal of the knot orientation. Then $g(K)=g(r(K))=g(-K)=g(-r(K))$.

## Statement references

[[def-oriented-seifert-surface-and-knot-genus|Definition of knot genus by minimum spanning-surface genus]]

## Facts & Assumptions

**Given:** AC$_\omega$, a smooth oriented knot $K$, and a smooth reflection $r$ of $S^3$.

[F1] Knot genus is the minimum genus among connected compact smooth oriented surfaces whose oriented boundary is the knot. ([[def-oriented-seifert-surface-and-knot-genus]])

[F2] For a connected compact orientable surface with one boundary component, reversing its orientation or applying a diffeomorphism preserves its genus. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[A1] AC$_\omega$ is the sequence-choice principle. ([[def-countable-choice]])

## Proof

**Given:** The knot $K$, reflection $r$, and AC$_\omega$.

1.1 If $F$ is any spanning surface for $K$, its image $r(F)$ is a connected compact smooth surface with boundary $r(K)$. Push the orientation of $F$ forward to orient $r(F)$; reversing the boundary orientation instead is achieved by reversing the orientation on $r(F)$. By [F2], all these surfaces have genus $g(F)$. Thus every genus admissible for $K$ is admissible with the same value for $r(K)$ and $-K$. [given, F1, F2, A1, construct]

2.1 Apply the same argument using $r^{-1}=r$ and orientation reversal again. This gives the reverse inclusion of the sets of admissible genera, so their minima agree for all four knots. [given, step 1.1, algebra] ∎

## Sources

[[def-oriented-seifert-surface-and-knot-genus]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[[def-countable-choice]]
