---
id: lem-knot-reverse-mirror-connected-sum-is-ribbon
kind: lemma
title: "The trefoil sum with its reverse mirror is ribbon"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
  - ex-knot-kt-04-worked-cases
  - def-countable-choice
forward_refs:
  - def-ribbon-disk-and-ribbon-knot
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brendan Owens and Frank Swenton, An Algorithm to Find Ribbon Disks for Alternating Knots"
      url: "https://eprints.gla.ac.uk/287761/1/287761.pdf"
      locator: "Definition 2.5 and Proposition 4.2, printed pp.10 and 21–22"
    - title: "Brendan Owens and Frank Swenton, An Algorithm to Find Ribbon Disks for Alternating Knots"
      url: "https://arxiv.org/pdf/2102.11778"
      locator: "Proposition 4.2; algorithm produces a band sequence for $-L\\#L$ when $L$ is nonsplit alternating"
---

## Statement

Assume AC$_\omega$. Let $T$ be the standard right-handed trefoil, let $T^*$ be its image under the fixed orientation-reversing reflection of the connected-sum convention, and let $-T^*$ denote reversal of the image knot's orientation. Then $T\#(-T^*)$ bounds a smooth ribbon disk in $B^4$.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum convention]]

## Facts & Assumptions

**Given:** AC$_\omega$, the standard trefoil diagram, and the reverse mirror convention.

[F1] A ribbon disk is a smooth properly embedded disk in $B^4$ whose radial height function has no local minima in its interior; equivalently its boundary admits a finite band presentation resolving only ribbon singularities. ([[def-ribbon-disk-and-ribbon-knot]])

[F2] Connected sum is commutative under AC$_\omega$. ([[thm-oriented-knot-connected-sum-is-a-commutative-monoid]])

[F3] The KT-04 worked case identifies the standard right trefoil diagram as the closure of $\sigma_1^3$ and displays its over/under branches. ([[ex-knot-kt-04-worked-cases]])

[A1] Owens–Swenton Proposition 4.2 applies to nonsplit alternating diagrams and asserts that $-L\#L$ admits an algorithmic ribbon disk. Its proof uses the checkerboard zig-zag construction and a sequence of band moves and isotopies. The source passage and figures were inspected, but a complete finite band sequence for this particular trefoil diagram has not yet been reconstructed in prose. ([Owens–Swenton PDF](https://eprints.gla.ac.uk/287761/1/287761.pdf))

[A2] The expected ribbon-disk definition supplier `def-ribbon-disk-and-ribbon-knot` is a planned KT-28 item and has no current carrier to inspect. ([[def-ribbon-disk-and-ribbon-knot]])

[A3] AC$_\omega$ is the sequence-choice principle used by [F2]. ([[def-countable-choice]])

## Proof

**Given:** AC$_\omega$ and the standard right-handed trefoil diagram $T$.

1.1 Following the single component of the standard closure diagram in [F3], the six successive crossing branches are over, under, over, under, over, under. Thus the diagram is alternating; as a one-component knot it is nonsplit. The inspected Proposition 4.2 in [A1] therefore gives a ribbon disk for $-T^*\#T$. [given, F3, A1, construct]

2.1 By [F2] and [A3], $-T^*\#T$ is oriented ambient isotopic to $T\#(-T^*)$. However, applying Proposition 4.2 is not a local proof: the exact trefoil band sequence, each resulting link, and its ribbon-disk verification have not been reconstructed. The conclusion remains escalated pending those finite checks and the actual ribbon-disk definition. [given, F1, F2, A1, A2, A3, step 1.1]

## Owner escalation

Supply the exact band sequence for the standard three-crossing trefoil and its reverse mirror, verify every resulting link and band move in prose (with a TikZ schematic if useful), and inspect the actual KT-28 ribbon-disk definition.

## Proof references

[[def-ribbon-disk-and-ribbon-knot]]

[[lem-knot-connected-sum-well-defined]]
