---
id: lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
kind: lemma
title: "Essential annuli in Seifert pieces can be made vertical"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings
  - lem-orientable-seifert-pieces-with-boundary-are-irreducible
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the essential-surface classification supplier."
provenance:
  statement: ai-altered
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

Assume full AC. Let $M$ be a compact connected orientable Seifert-fibered $3$-manifold and let $A\subset M$ be an incompressible, boundary-incompressible neatly embedded annulus. After an ambient isotopy and, if necessary, replacement by another Seifert fibration of $M$, $A$ is vertical. A change of fibration is needed only when the underlying manifold is $T^2\times I$ or the orientable twisted $I$-bundle over the Klein bottle. The twisted $I$-bundle over $T^2$ and $K\times I$ are nonorientable and do not occur under these hypotheses.

For an arbitrary smooth boundary-preimage annulus with the same disk-obstruction hypotheses, the conclusion holds by a smooth isotopy of embeddings with a topological ambient extension. The smooth ambient conclusion above requires neatness.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.14](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected orientable Seifert-fibered $3$-manifold $M$ and an incompressible, boundary-incompressible annulus $A$, neat for the smooth ambient conclusion and otherwise a boundary-preimage embedding for the broader variant.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] Every essential annulus in a Seifert-fibered piece is isotopic to a vertical or horizontal annulus ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F2] A proper two-sided horizontal annulus in an orientable Seifert piece admits a smooth refibering that makes that very annulus vertical; the underlying manifold is $T^2\times I$ or the orientable twisted Klein-bottle interval bundle ([[lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings]], Statement).

[F3] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines vertical and horizontal surfaces and exceptional fibers.

[F4] A compact connected orientable Seifert piece with nonempty boundary is irreducible ([[lem-orientable-seifert-pieces-with-boundary-are-irreducible]], Statement).

[F9] The explicit boundary-fixed neatification and disk-witness transport preserve the annulus disk obstructions. Its initial path is a smooth isotopy of embeddings with a topological ambient extension; it has a smooth ambient extension when the initial annulus is neat. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

## Proof

1.1 For a broad input first use [F9] to pass to a neat representative, retaining both disk-obstruction hypotheses. At the end prepend that smooth embedding path and its explicit topological ambient extension. For a neat input use the argument directly. Properness of the annulus makes the boundary of $M$ nonempty, so $M$ is irreducible by [F4]. A boundary-parallel annulus has a boundary compression: in its product with a boundary annulus, a spanning arc crossed with the product interval is a boundary-compressing rectangle. Therefore the given boundary-incompressible annulus is not boundary-parallel and is essential. All hypotheses of [F1], including irreducibility, are now discharged. Apply it to isotope $A$ to a vertical or horizontal annulus. [F9, A1, F1, F3, F4, given, construct]

2.1 If it is vertical, retain the original fibration. If it is horizontal, apply [F2] to refiber $M$ while leaving the annulus in place. The new fibration makes it vertical, and [F2] identifies the only possible underlying orientable manifolds where this change is needed. Compose with the initial isotopy to obtain the stated conclusion for the original annulus. There is no use of a hypothetical circle foliation on a horizontal annulus: the refibering supplier constructs an invariant circle foliation from its actual finite deck action. [F2, F3, step 1.1, construct] ∎
