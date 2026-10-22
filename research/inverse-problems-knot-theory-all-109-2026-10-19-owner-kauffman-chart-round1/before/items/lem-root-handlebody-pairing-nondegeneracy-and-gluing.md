---
id: lem-root-handlebody-pairing-nondegeneracy-and-gluing
kind: lemma
title: "Handlebody pairing nondegeneracy and gluing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-skein-tqft-state-space-and-handlebody-pairing
  - lem-root-handlebody-spine-state-space-finite-generation
  - def-extended-skein-cobordism-anomaly-data
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the marked surgery-presentation and weighted-bordism interfaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §§1 and 4–5"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 6–7"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
---

## Statement

For the fixed root parameter, the normalized double-handlebody pairing on the admissible spine states of a marked handlebody is nondegenerate after quotienting by its radical. The inverse pairing defines the sewing map for gluing along a closed marked surface, and these maps satisfy the stated weighted Lagrangian anomaly correction.

## Statement references

[[def-skein-tqft-state-space-and-handlebody-pairing|State-space pairing]]

[[lem-root-handlebody-spine-state-space-finite-generation|Finite spine spanning set]]

[[def-extended-skein-cobordism-anomaly-data|Weighted Lagrangian anomaly convention]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1 and 4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 6–7](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

[Pohorence, *3-manifold Invariants and TQFTs*, §3](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** The finite spanning set of admissible spine states and the normalized gluing pairing.

[F1] [[def-skein-tqft-state-space-and-handlebody-pairing]] defines the radical quotient and pairing.

[F2] [[lem-root-handlebody-spine-state-space-finite-generation]] is intended to span the quotient by finitely many admissible labels; its spanning proof is incomplete.

[F3] [[def-extended-skein-cobordism-anomaly-data]] fixes the weight and Maslov convention.

## Proof

**Given:** A marked handlebody spine, its admissible colorings, and the gluing pairing.

1.1 On a fixed finite spine, each admissible coloring gives a finite colored graph state. Gluing a pair of handlebodies evaluates the resulting closed colored graph using the specified root bracket and anomaly normalization. [F1, F2, F3, given]

2.1 Nondegeneracy requires computing the full theta and tetrahedral evaluation matrix on the admissible spine states and proving its orthogonality and invertibility; gluing compatibility further requires invariance under all spine changes and mapping-class actions. Those identities are not supplied here, so the claim is escalated. [F2, F3, step 1.1, given]
