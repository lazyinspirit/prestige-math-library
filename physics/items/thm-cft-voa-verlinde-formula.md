---
id: thm-cft-voa-verlinde-formula
kind: theorem
title: Verlinde formula for strongly rational VOA fusion rules
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: mathematics
library: mathematics
deps:
  - lem-cft-character-hopf-normalization-and-fusion-diagonalization
  - thm-cft-strongly-rational-character-modularity
  - def-cft-ordinary-character
  - def-cft-contragredient-module
  - def-cft-intertwining-operator-space
  - lem-cft-fusion-matrix-diagonalization-implies-verlinde
dependency_roles:
  lem-cft-character-hopf-normalization-and-fusion-diagonalization: mathematical-premise
  thm-cft-strongly-rational-character-modularity: mathematical-premise
  def-cft-ordinary-character: mathematical-premise
  def-cft-contragredient-module: mathematical-premise
  def-cft-intertwining-operator-space: mathematical-premise
  lem-cft-fusion-matrix-diagonalization-implies-verlinde: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
      url: https://arxiv.org/pdf/math/0406291v3
      locator: Section 1, PDF pages 2–4; Section 4; Proposition 5.1, Theorems 5.2 and 5.5, Corollary 5.4, and adjacent proof, PDF pages 52–56.
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: Sections 9.6–9.8, printed pages 157–165; the formula is used only as a pedagogical convention comparison.
---

## Statement

Let $V$ be a strongly rational VOA in the shared convention. For irreducible ordinary modules labeled by a finite set $I$, let $S$ be the matrix of the character transformation $\tau\mapsto-1/\tau$, with $0$ the vacuum label and $k^*$ the label of the contragredient module. Define $N_{ij}^{\,k}=\dim_{\mathbb C}\mathcal I\binom{M_k}{M_i\ M_j}$, where $\mathcal I\binom{M_k}{M_i\ M_j}$ is the ordinary intertwining-operator space in the exact module convention of the library. The theorem asserts that these dimensions are finite, every $S_{0x}$ is nonzero in Huang's convention, and

$$N_{ij}^{\,k}=\sum_{x\in I}\frac{S_{ix}S_{jx}S_{k^*x}}{S_{0x}}.$$

No complex conjugation is inserted in this convention. The theorem concerns the VOA fusion multiplicities and the actual character $S$-matrix, not an arbitrary Hopf-link matrix.

## Statement references

[[thm-cft-strongly-rational-character-modularity]]

[[def-cft-ordinary-character]]

[[def-cft-contragredient-module]]

[[def-cft-intertwining-operator-space]]

[[lem-cft-fusion-matrix-diagonalization-implies-verlinde]]

## Facts & Assumptions

**Given:** The unchanged strong-rational VOA hypotheses, actual character modular convention, ordinary module labels and restricted contragredient involution.

[F1] [[lem-cft-character-hopf-normalization-and-fusion-diagonalization]]: proves finiteness of the ordinary intertwiner spaces, actual character/Hopf normalization, symmetry, the duality square, nonzero vacuum row and simultaneous fusion diagonalization, with no complex conjugation.

[F2] [[lem-cft-fusion-matrix-diagonalization-implies-verlinde]] gives the exact displayed formula from those matrix identities.

## Proof

1.1 The hypotheses are precisely those of F1, with the original actual-character and contragredient conventions. [given, algebra]

2.1 F1 identifies the actual character matrix with the normalized categorical Hopf matrix after explicitly comparing the two projected cycle loops and their common cap/cup normalization. In particular every vacuum-row entry is nonzero. [F1, step 1.1, algebra]

3.1 The same supplier proves finite ordinary intertwiner dimensions and the fusion diagonalization identity for this actual matrix, as well as symmetry and its duality square. [F1, step 2.1, algebra]

4.1 Apply F2: inversion uses the contragredient permutation, so the resulting entry is N_ij^k=sum_x S_ix S_jx S_(k*)x/S_0x. There is no complex conjugation in that inverse. [F1, F2, step 3.1, algebra]

5.1 This is the formula and both finiteness/nonvanishing assertions of the unchanged Statement for the actual character matrix. [F1, F2, step 4.1, algebra] ∎
