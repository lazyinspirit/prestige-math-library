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

[L1] [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]] supplies the actual finite filtered chain homotopy equivalences for admissible analytic diagrams, with the specified single-variable restriction and the Seifert-normalized doubly pointed origin. Specializing the actual finite identities at U=0 gives the filtered hat comparisons; this does not supply the separate grid-to-analytic identification.

[L2] [[thm-grid-commutation-stabilization-invariance-proof]] states that the elementary grid moves induce filtered chain homotopy equivalences and the specified stabilization factors. Its current proof is escalated, so the local maps and homotopies are unresolved.

[L3] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] states the normalized grid-to-analytic filtered comparison, including the fully collapsed $V$ factors. Its current proof and Step-1 readiness are escalated; the variable-collapse and absolute-grading identification are unresolved.

[L4] [[thm-grid-moves-generate-oriented-knot-isotopy]] states that any two grids of the same oriented knot are connected by finitely many allowed moves. Its current Step-1 decision is escalated because the bridge-refinement and arbitrary-exterior move proofs are incomplete.

## Proof

1.1 Apply [L1] to the two analytic doubly pointed diagrams in the Statement. Its maps and inverse homotopies are finite polynomial identities preserving their Seifert-normalized Alexander filtration. Specialize those identities at U=0; no flatness assertion about homology is required. The resulting actual finite hat models are filtered chain homotopy equivalent and carry the nonzero total generators to each other. Therefore [F1] gives equality of their thresholds. This proves the analytic-diagram comparison in the first sentence. [F1, L1, given, construct, algebra]

2.1 The grid conclusion additionally requires the actual grid-to-analytic normalized comparison in [L3], with its analytic rectangle counts, variable bookkeeping and absolute origin. Grid moves and geometric move generation in [L2] and [L4] concern the combinatorial presentations and cannot replace that comparison. Step 1.1 and the analytic move theorem do not by themselves prove these additional grid assertions. Thus the analytic conclusion is established, while the full grid conclusion remains held for its actual separate suppliers. [A1, L1, L2, L3, L4, step 1.1, given]
