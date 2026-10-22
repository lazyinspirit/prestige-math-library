---
id: lem-tau-is-independent-of-heegaard-grid
kind: lemma
title: "The tau level is independent of the normalized Heegaard model"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-preserved-by-filtered-chain-homotopy-equivalence
  - def-oriented-seifert-surface-and-knot-genus
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - def-countable-choice
  - thm-grid-moves-generate-oriented-knot-isotopy
  - thm-grid-commutation-stabilization-invariance-proof
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite filtered-complex comparison is choice-free. The current grid and Heegaard-move suppliers assume AC_omega for selecting finite diagrams and moves; no full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "§2.1, filtered Heegaard-move equivalence; §§3.3–3.5, normalized knot Floer filtration"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§2.2–3.1, diagram invariance and the tau threshold"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 5, 6, and 13; filtered grid invariance and comparison with knot Floer homology"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot, let $F$ be a fixed minimum-genus oriented Seifert surface, and let $\mathcal H_0,\mathcal H_1$ be admissible doubly pointed Heegaard diagrams for the same pair $(K,F)$ whose hat complexes have total homology $\mathbb F_2$ and the same absolute Alexander normalization. Their diagramwise thresholds agree. Moreover, every grid presentation of $(K,F)$ gives this same value after the full filtered grid complex is converted to the normalized singly pointed model, with all basepoint-variable and stabilization factors accounted for. The common value is $\tau(K)$.

## Statement references

[[def-knot-floer-filtration-and-tau|The diagramwise threshold and absolute Alexander normalization]]

[[lem-tau-preserved-by-filtered-chain-homotopy-equivalence|Filtered chain homotopy equivalences preserve the threshold]]

[[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization|The claimed Heegaard-move comparison]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The claimed normalized grid-to-analytic comparison]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, §2.1](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§2.2–3.1](https://arxiv.org/pdf/1512.00383v3)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 5, 6, and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a knot $K$, a fixed minimum-genus Seifert surface $F$, and two admissible doubly pointed diagrams with the stated one-dimensional total homology and common absolute normalization.

[A1] [[def-countable-choice]] states the axiom that every sequence of nonempty sets admits a choice function; it is inherited by the current diagram/move suppliers that require selected finite data.

[F1] [[lem-tau-preserved-by-filtered-chain-homotopy-equivalence]] proves that a filtration-preserving chain homotopy equivalence between finite models with one-dimensional total homology preserves their tau thresholds.

[L1] [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]] states that any two admissible multipointed diagrams for the same knot are joined through admissible moves and induce filtered chain homotopy equivalences after the specified variable restriction. Its current proof is not supplied, and its Step-1 record is escalated; it is not used here as a proved fact.

[L2] [[thm-grid-commutation-stabilization-invariance-proof]] states that the elementary grid moves induce filtered chain homotopy equivalences and the specified stabilization factors. Its current proof is escalated, so the local maps and homotopies are unresolved.

[L3] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] states the normalized grid-to-analytic filtered comparison, including the fully collapsed $V$ factors. Its current proof and Step-1 readiness are escalated; the variable-collapse and absolute-grading identification are unresolved.

[L4] [[thm-grid-moves-generate-oriented-knot-isotopy]] states that any two grids of the same oriented knot are connected by finitely many allowed moves. Its current Step-1 decision is escalated because the bridge-refinement and arbitrary-exterior move proofs are incomplete.

## Proof

1.1 If two specified finite hat models are related by a filtration-preserving chain homotopy equivalence that preserves the absolute Alexander grading, [F1] gives equality of their thresholds. This proves the comparison for every pair for which those maps and homotopies have actually been constructed. [F1, given, algebra]

2.1 To obtain the Statement for all Heegaard and grid presentations, one must construct the maps and homotopies in [L1] and [L2], prove the move-generation assertion in [L4], and prove the normalization and basepoint-collapse comparison in [L3]. The current suppliers' Step-1 records leave these obligations open; the grid theorem's statement alone cannot supply the missing proof or exact excerpts. Therefore the universal diagram/grid-independence conclusion is not established in this item and remains escalated. [A1, L1, L2, L3, L4, step 1.1, given]
