---
id: lem-seifert-boundary-fiber-slopes-unique-except-small-pieces
kind: lemma
title: "Boundary fiber slopes are unique outside the small Seifert exceptions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the annulus-verticalization supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.15 and its proof, printed p.20"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, uniqueness and matching of Seifert boundary fibrations"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable Seifert-fibered $3$-manifold other than $T^2\times I$, the orientable twisted $I$-bundle over $T^2$, and the orientable twisted $I$-bundle over the Klein bottle. Let $\mathcal A$ be a finite family of connected, two-sided essential annuli in $M$ such that every boundary torus of $M$ contains a boundary circle of some annulus in $\mathcal A$. Then any two Seifert fibrations of $M$ induce isotopic regular-fiber slopes on each boundary torus.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.15](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected orientable Seifert-fibered $3$-manifold $M$ outside the three orientable exceptional manifolds in the Statement, a finite family $\mathcal A$ of essential annuli meeting every boundary torus, and two Seifert fibrations of $M$.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] An essential annulus in a Seifert piece can be isotoped vertical for a given fibration, with a fibration change needed only in the exceptional underlying manifolds ([[lem-essential-annulus-in-seifert-piece-isotopic-to-vertical]], Statement).

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines the base surface, exceptional fibers, and regular-fiber slope.

## Proof

1.1 Fix an annulus $A\in\mathcal A$ whose boundary meets a chosen boundary torus $T$. Apply [F1] to the first fibration. Since $M$ is outside the exceptional cases, an ambient isotopy makes $A$ vertical without changing that fibration. Its boundary circle on $T$ therefore represents the regular-fiber slope of the first fibration. [A1, F1, given, construct]

1.2 Apply [F1] to the second fibration. Again the annulus becomes vertical by an ambient isotopy that preserves the fiber structure. Isotopy preserves the free isotopy class of its boundary circle on $T$, so that circle also represents the regular-fiber slope for the second fibration. The two primitive slopes are therefore isotopic on $T$. Repeating this argument for each boundary torus, using the annulus family $\mathcal A$, proves the claim for all boundary components. [F1, F2, step 1.1, construct] ∎
