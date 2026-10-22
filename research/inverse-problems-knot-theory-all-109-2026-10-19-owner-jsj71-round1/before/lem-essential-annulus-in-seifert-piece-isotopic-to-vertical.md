---
id: lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
kind: lemma
title: "Essential annuli in Seifert pieces can be made vertical"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the essential-surface classification supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.14 and its proof, printed p.20"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, Seifert-fibered pieces and matching boundary fibrations"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable Seifert-fibered $3$-manifold and let $A\subset M$ be an incompressible, boundary-incompressible annulus. After an ambient isotopy and, if necessary, replacement by another Seifert fibration of $M$, $A$ is vertical. The only possible exceptional underlying manifolds are $T^2\times I$, the orientable twisted $I$-bundle over $T^2$, $K\times I$ for the Klein bottle $K$ when nonorientable ambient manifolds are allowed, and the orientable twisted $I$-bundle over $K$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.14](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected orientable Seifert-fibered $3$-manifold $M$ and an incompressible, boundary-incompressible annulus $A$.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] Every essential annulus in a Seifert-fibered piece is isotopic to a vertical or horizontal annulus ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F2] A two-sided horizontal annulus cuts a Seifert manifold into interval bundles; its complementary interval-bundle structures are mapping cylinders of the associated two-sheeted covers ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F3] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines vertical and horizontal surfaces and exceptional fibers.

## Proof

1.1 By [F1], isotope $A$ to be vertical or horizontal. If it is vertical, the conclusion holds. Suppose it is horizontal. [A1, F1, given]

1.2 If $A$ is nonseparating, [F2] gives $M\setminus A\cong A\times I$, so $M$ is the mapping torus of a self-homeomorphism of the annulus. The original Seifert fibration induces a circle fibration on $A$ and the return map preserves its circle fibers. Up to isotopy there are four such return maps, determined by whether the map preserves or reverses the circle direction and whether it preserves or reverses the interval direction. Their mapping tori are respectively $T^2\times I$, the orientable twisted $I$-bundle over $T^2$, $K\times I$, and the orientable twisted $I$-bundle over $K$. In each model, use the annulus circle direction as the Seifert fiber direction; this alternative fibration makes $A$ vertical. [F2, F3, step 1.1, construct]

2.1 If $A$ separates $M$, [F2] identifies the two complementary pieces as twisted $I$-bundles over a Möbius band. Each such piece has a Seifert fibration over a disk with one exceptional fiber of order $2$. Glue these two fibrations across the annulus $A$: the annulus is the vertical boundary of each $I$-bundle and its circle direction is the fiber direction on both sides, after reversing one local fiber orientation if required. The glued base is a disk with two exceptional points of order $2$, and $A$ is vertical in the resulting Seifert fibration. The underlying orientable manifold is the twisted $I$-bundle over the Klein bottle. [F2, F3, step 1.2, construct] ∎
