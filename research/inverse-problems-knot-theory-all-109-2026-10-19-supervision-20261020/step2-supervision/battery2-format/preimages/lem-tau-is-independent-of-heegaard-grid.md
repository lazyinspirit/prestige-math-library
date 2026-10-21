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

[L2] [[thm-grid-commutation-stabilization-invariance-proof]] gives the local filtered equivalences for commutations and stabilizations, using the stated polygon maps and the stabilization cone comparison. Its simultaneous-collapse statement retains the extra $V$ factor; this local move comparison is separate from the analytic grid comparison in [L3].

[L3] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] constructs the normalized comparison from the grid full filtered minus complex to the singly pointed analytic model. It distinguishes restriction to one variable action from simultaneous collapse, and accounts for the latter by $V^{\otimes(n-1)}$; its argument also identifies the grid Alexander origin with the Seifert-normalized one.

[L4] [[thm-grid-moves-generate-oriented-knot-isotopy]] gives a finite grid-move sequence for grids of the same oriented knot, by refining to bridge-like grids, applying an oriented Reidemeister sequence, and translating each local change using the stated arbitrary-exterior move supplier.

## Proof

1.1 Apply [L1] to the two analytic doubly pointed diagrams in the Statement. Its maps and inverse homotopies are finite polynomial identities preserving their Seifert-normalized Alexander filtration. Specialize those identities at U=0; no flatness assertion about homology is required. The resulting actual finite hat models are filtered chain homotopy equivalent and carry the nonzero total generators to each other. Therefore [F1] gives equality of their thresholds. This proves the analytic-diagram comparison in the first sentence. [F1, L1, given, construct, algebra]

2.1 Fix a grid $G$ with $n$ marking pairs and choose one marking variable $U_i$. Use the actual normalized grid-to-analytic comparison in [L3], together with the pointed-move comparison in [L1], to convert its full filtered minus complex to the finite singly pointed model for $(K,F)$. In this comparison first restrict scalars along $U\mapsto U_i$ and retain the other $U_j$ as independent module variables. The supplied chain maps and inverse homotopies preserve the Alexander filtration and the Seifert-normalized origin. Specializing these actual identities at the chosen $U=0$ gives the corresponding filtered equivalence to the singly pointed hat endpoint. The restricted grid module can still have infinite rank over $\mathbb F_2$ after this specialization, so it is not itself an input to the finite-complex definition of $\tau$; the grid value in the Statement is the threshold on the finite normalized singly pointed endpoint obtained by this conversion. [L1, L3, given, construct, algebra]

2.2 The separate simultaneous ordinary collapse sets all marking variables equal before taking the one-variable quotient. By [L3] and [L1] its filtered type is the singly pointed minus model tensored with $V^{\otimes(n-1)}$, with each $V$ carrying bidegrees $(0,0)$ and $(-1,-1)$. After quotienting the remaining variable by zero, this collapsed model has the extra $V$ homology factors and is not the finite complex with one-dimensional total homology required in the definition of $\tau$. Those factors are accounted for by the actual basepoint-pair cone and retraction comparison in [L1, L3]: use the retained-variable equivalence to the singly pointed model when defining the grid's value, and do not apply $\tau$ to the unreduced simultaneous-collapse complex. Thus no extra filtration shift from the $V$ factors is included in the claimed value. [L1, L3, given, algebra]

2.3 For any two grid presentations, [L3] supplies this conversion for each grid to a normalized singly pointed model. Compare those finite endpoints by the actual pointed-move equivalence [L1], specialize its maps and filtered inverse homotopies at $U=0$, and apply [F1]. This gives the same threshold as in step 1.1. The grid-move and grid-isotopy suppliers [L2, L4] describe additional combinatorial comparisons; they do not replace the filtered grid-to-analytic conversion or alter the variable-collapse distinction above. [A1, F1, L1, L2, L3, L4, step 1.1, step 2.1, step 2.2, algebra] ∎
