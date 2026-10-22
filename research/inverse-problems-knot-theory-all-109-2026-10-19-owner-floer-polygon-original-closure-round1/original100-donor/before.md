---
id: lem-os-disk-and-polygon-analytic-foundations
kind: lemma
title: "Analytic foundations for disk and polygon counts"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - def-admissible-pointed-heegaard-floer-data
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-countable-choice
proof_strategy: direct
axiom_use: "Assumes ACω for generic regular perturbation and countable intersection arguments, as in the existing pointed disk supplier."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, Holomorphic disks and topological invariants for closed three-manifolds, §§3.2–3.8 and §4"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, Heegaard Floer Homologies, §§2–5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume ACω. For every admissible pointed Heegaard multi-diagram for a closed oriented three-manifold, generic compatible perturbations within the admissible class make the disk and polygon moduli spaces used for the hat differential, continuation maps, handleslide maps, stabilization maps and surgery maps regular of their expected dimensions. These dimensions include the allowed conformal variations of the punctured source and any auxiliary family parameters; quotient only by the actual source automorphisms, in particular translation for a nonconstant two-ended strip, and not by a nonexistent translation action on a three-marked triangle. Every resulting zero-dimensional space entering a mod-two count is finite. The one-dimensional spaces entering the chain-map, composition and homotopy identities have compactifications whose codimension-one ends are exactly the broken-disk or broken-polygon configurations, together with the specified boundary-degeneration strata. Gluing gives collars at those ends, and the boundary-degeneration terms cancel over $\mathbb F_2$. No sphere bubble, boundary escape or uncontrolled periodic domain contributes an additional codimension-one end. In particular, the disk differential squares to zero and the polygon maps satisfy the chain-map, composition and homotopy identities required in Heegaard Floer theory.

## Statement references

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold|Closed-manifold hat Floer disk-count construction]]

[[def-admissible-pointed-heegaard-floer-data|Knot-specialized pointed admissibility and disk conventions]]

[[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing|Existing knot-specialized disk-analysis claim]]

[Ozsváth and Szabó, *Holomorphic disks and topological invariants for closed three-manifolds*, §§3.2–3.8 and §4](https://arxiv.org/pdf/math/0101206)

[Ozsváth and Szabó, *Holomorphic triangles and invariants for smooth four-manifolds*](https://arxiv.org/pdf/math/0110169)

[Lipshitz, *Heegaard Floer Homologies*, §§2–5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** ACω, a closed-manifold pointed Heegaard multi-diagram, admissible disk and polygon classes, and the mod-two count construction.

[F1] The closed-manifold candidate complex counts Maslov-index-one disks with zero basepoint multiplicity ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]).

[F2] The existing regularity claim is for pointed data representing a knot in $S^3$ and disk strips; it does not assert the closed three-manifold, polygon, handleslide, or surgery-map conclusions here ([[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]).

## Proof

1.1 Under [F1], the differential and every surgery or continuation map in the statement are defined by counts of moduli spaces of pseudo-holomorphic disks or polygons; finiteness, square-zero, and the composition identities depend on the compactified one-dimensional moduli-space boundary descriptions. [F1, given]

1.2 The available local analytic supplier [F2] has knot-specialized disk hypotheses. It does not prove the closed-manifold polygon regularity, boundary strata, or gluing claims required in step 1.1. The primary-source passages listed above defer parts of those arguments to earlier theory, so the conclusion has no complete local proof from current suppliers. Escalated obligations are generic transversality within admissibility, energy and compactness bounds, sphere and boundary bubbling exclusions, codimension-one boundary classification, gluing, and mod-two cancellation for each polygon dimension used by the surgery and invariance maps. [F1, F2, step 1.1]
