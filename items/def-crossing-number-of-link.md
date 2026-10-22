---
id: def-crossing-number-of-link
kind: definition
title: "Crossing number of a link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - def-countable-choice
  - lem-every-oriented-link-admits-a-regular-projection
  - thm-well-ordering-principle
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is used only by the supplier guaranteeing a regular projection for every oriented link; the least-element argument on natural numbers is choice-free."
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
    - title: "Danny Calegari, Introduction to Knot Theory, §1.9, printed pp. 7–8"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "William W. Menasco and Morwen B. Thistlethwaite, The classification of alternating links, Annals of Mathematics 138 (1993), pp. 113–171"
      url: "https://doi.org/10.2307/2946636"
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $K$ be an unoriented link type in $S^3$. Its **crossing number** $c(K)$ is the least element of
$$\{\,n\in\mathbb N:\text{some regular diagram of }K\text{ has exactly }n\text{ crossings}\,\}.$$

## Definition references

[Calegari, *Introduction to Knot Theory*, §1.9](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Menasco and Thistlethwaite, *The classification of alternating links* (1993)](https://doi.org/10.2307/2946636)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and an unoriented link type $K$ in $S^3$.

[F1] A link is a finite disjoint union of smoothly embedded circles in $S^3$, and it may be moved off $\infty$ into $\mathbb R^3$ before projection ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

[F2] A regular diagram is a finite planar projection with transverse double points, no triple points, and over-under data ([[def-regular-oriented-link-diagram]]).

[F3] Under countable choice, every oriented link admits a regular projection ([[lem-every-oriented-link-admits-a-regular-projection]]).

[F4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[A1] Countable choice, abbreviated $\mathrm{AC}_\omega$, selects one element from each member of a countable family of nonempty sets ([[def-countable-choice]]).

## Proof
1.1 Let $N(K)$ be the displayed set of crossing counts. By [F1], move an oriented representative off $\infty$ into $\mathbb R^3$; [F3] and [A1] give it a regular diagram. Forgetting the diagram's strand arrows gives a regular diagram of the same unoriented type, so $N(K)\ne\varnothing$. [given, F1, F2, F3, A1, construct]

2.1 The set $N(K)$ is a nonempty subset of $\mathbb N$, so [F4] supplies its unique least element. Ambient-isotopic representatives have the same crossing-count set by definition of the underlying unoriented link type. This makes $c(K)$ well-defined. [given, F1, F4, step 1.1, choose] ∎
