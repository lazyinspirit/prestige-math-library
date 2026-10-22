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
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
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

## Proof status

The rational homology inclusions, boundary signs, zero homological Euler characteristic and zero intersection module are proved in [[lem-punctured-rational-homology-balls-are-rational-cobordisms]]. The exact algebraic implication from a commuting Laurent/plus square with a degree-zero infinity isomorphism to the two correction-term inequalities is proved in [[lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities]]. These supply the topology and tower comparison without constructing any Floer map.

Escalated: a complete proof needs the generic closed three-manifold Spin$^c$ cobordism maps on $HF^\infty$ and $HF^+$, the degree-shift theorem, the rational-cobordism isomorphism on $HF^\infty$, and the tower-preserving plus-map inequality in each orientation. Those are not supplied by the knot Floer/grid interfaces. The cited source gives the conclusion but its proof invokes the missing general map theory; no local proof is claimed here.
