---
id: lem-rational-ball-spin-c-cobordism-map-inequality
kind: lemma
title: "Correction-term inequality from a rational-ball cobordism map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-plus-infinity-absolute-grading
  - def-heegaard-floer-correction-term
  - lem-heegaard-floer-correction-term-heegaard-invariance
  - lem-punctured-rational-homology-balls-are-rational-cobordisms
  - lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 9.2, Theorem 9.6 and Proposition 9.9"
    - title: "Adam Baranowski, Maciej Borodzik, and Juan Serrano de Rodrigo, Heegaard Floer Homologies and Rational Cuspidal Curves"
      url: "https://www.numdam.org/item/10.5802/wbln.12.pdf"
      locator: "Section 4, cobordism maps, correction-term inequalities, and vanishing"
---

## Statement

Let $B$ be a smooth compact four-manifold with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$ and oriented boundary the rational homology sphere $Y$, where $H_*(Y;\mathbb Q)\cong H_*(S^3;\mathbb Q)$. Let $\mathfrak t$ be a boundary Spin$^c$ structure extending over $B$. Removing an open four-ball from the interior gives a Spin$^c$ cobordism $W$ with boundary $-S^3\sqcup Y$, and each boundary inclusion induces an isomorphism on rational homology. In both orientations, the induced Heegaard Floer infinity map is an isomorphism of degree zero and the corresponding plus-map inequality gives $d(Y,\mathfrak t)\ge0$ and $d(Y,\mathfrak t)\le0$.

## Statement references

[[def-heegaard-floer-plus-infinity-absolute-grading|The cobordism degree convention]]

[[lem-heegaard-floer-correction-term-heegaard-invariance|The generic Heegaard Floer package needed for correction terms]]

[Ozsvath and Szabo, *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, Theorem 9.6 and Proposition 9.9](https://arxiv.org/pdf/math/0110170v1)

[Baranowski, Borodzik, and Serrano de Rodrigo, *Heegaard Floer Homologies and Rational Cuspidal Curves*, Section 4](https://www.numdam.org/item/10.5802/wbln.12.pdf)

## Facts & Assumptions

[F1] [[lem-punctured-rational-homology-balls-are-rational-cobordisms]] gives the two rational homology inclusion isomorphisms, the boundary orientations, $\chi(W)=0$ and the zero rational intersection module.

[F2] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] and [[lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism]] construct, for each fixed extending Spin$^c$ structure, the compatible infinity and plus maps and prove the degree-zero infinity isomorphism.

[F3] [[lem-heegaard-floer-correction-term-heegaard-invariance]] supplies the grading-preserving tower and its bottom degree, with $d(S^3)=0$; [[lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities]] supplies the bottom-degree comparison for the commuting square.

## Proof

**Given:** The stated rational homology ball, its oriented boundary, and an extending Spin$^c$ structure; let $W$ be obtained by removing an interior open ball.

1.1 The two boundary inclusions are rational homology isomorphisms and $H^2(W;\mathbb Q)=0$. In particular the square of the Chern class is zero, and $\chi(W)=\sigma(W)=0$. The same assertions hold for the reverse cobordism from $Y$ to $S^3$. For each of the fixed induced Spin$^c$ structures, the constructed infinity map is an isomorphism with degree $(0-2\cdot0-3\cdot0)/4=0$, and the corresponding plus map commutes with the infinity-to-plus projection. This uses the individual fixed-structure conclusion, including torsion extensions. [F1, F2]

2.1 Apply the supplied commuting-square comparison first to $W:S^3\to Y$ and then to its reverse $Y\to S^3$. The degree-zero isomorphisms give respectively $d(Y,\mathfrak t)\ge d(S^3)=0$ and $d(S^3)=0\ge d(Y,\mathfrak t)$. These are exactly the two stated inequalities in both orientations. [F3, step 1.1] ∎

