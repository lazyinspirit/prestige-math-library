---
id: thm-correction-term-obstruction-from-rational-ball
kind: theorem
title: "Correction terms vanish on extending Spin-c structures over rational homology balls"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-correction-term
  - lem-rational-ball-spin-c-cobordism-map-inequality
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "No axiom-strength claim beyond the unresolved Heegaard Floer supplier is made."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 9.2, Proposition 9.9; correction-term vanishing for Spin-c structures extending over a rational homology ball"
    - title: "Adam Baranowski, Maciej Borodzik, and Juan Serrano de Rodrigo, Heegaard Floer Homologies and Rational Cuspidal Curves"
      url: "https://www.numdam.org/item/10.5802/wbln.12.pdf"
      locator: "Section 4, Corollary 4.8; vanishing for extending Spin-c structures"
---

## Statement

Let $B$ be a smooth compact connected oriented four-manifold with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$ and oriented boundary the rational homology sphere $Y$, where $H_*(Y;\mathbb Q)\cong H_*(S^3;\mathbb Q)$. If a boundary Spin$^c$ structure $\mathfrak t$ extends over $B$, then its Heegaard Floer correction term vanishes: $d(Y,\mathfrak t)=0$. The extension hypothesis is essential; no vanishing is asserted for Spin$^c$ structures that do not extend.

## Statement references

[[lem-rational-ball-spin-c-cobordism-map-inequality|The rational-ball cobordism-map inequalities]]

[Ozsvath and Szabo, *Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary*, Proposition 9.9](https://arxiv.org/pdf/math/0110170v1)

[Baranowski, Borodzik, and Serrano de Rodrigo, *Heegaard Floer Homologies and Rational Cuspidal Curves*, Corollary 4.8](https://www.numdam.org/item/10.5802/wbln.12.pdf)

## Facts & Assumptions

**Given:** A smooth rational homology four-ball $B$, its oriented rational homology sphere boundary $Y$, and an extending boundary Spin$^c$ structure $\mathfrak t$.

[F1] For this extending structure, puncturing the ball yields both inequalities $d(Y,\mathfrak t)\ge0$ and $d(Y,\mathfrak t)\le0$ ([[lem-rational-ball-spin-c-cobordism-map-inequality]]).

## Proof
**Proof technique:** combine the two orientation-sensitive inequalities.

**Given:** The data above.

1.1 The forward punctured-cobordism map gives $d(Y,\mathfrak t)\ge0$ by [F1]. [F1, given]

2.1 The reversed punctured cobordism gives $d(Y,\mathfrak t)\le0$ by [F1]. A rational number satisfying both inequalities is zero, so $d(Y,\mathfrak t)=0$. The argument applies only to the Spin$^c$ structure that extends. [F1, step 1.1, algebra] ∎
