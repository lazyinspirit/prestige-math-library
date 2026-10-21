---
id: lem-integral-sutured-floer-taut-hierarchy-nonvanishing
kind: lemma
title: "Integral sutured Floer nonvanishing from a finite good taut hierarchy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - thm-balanced-taut-sutured-manifolds-admit-finite-good-hierarchies
  - lem-signed-relative-surface-cut-and-horizontal-decomposition
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
  - lem-signed-essential-product-annulus-decomposition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions, Theorems 1.3 and 1.4"
      url: "https://arxiv.org/pdf/math/0609779v3"
---

## Statement

Assume the Axiom of Choice for the analytic existence and invariant chain-comparison assertions. Let a balanced sutured manifold be taut. For a specified coherent orientation class, its integral sutured Floer homology has a direct summand isomorphic to the integers. More precisely, a finite good taut hierarchy terminating in product balls induces a split inclusion of the terminal product homology into the original homology, with orientation classes induced along the cuts.

## Facts & Assumptions

[A1] The Axiom of Choice is [[def-axiom-of-choice]]. It is assumed when invoking existence, regularity, compactification, and invariant comparison maps from the imported integral sutured analytic framework. The finite domain and determinant calculations retain their stated conditional supplied-data hypotheses; no unconditional Countable-Choice analytic existence theorem is asserted. In particular the Countable-Choice selection result applies only GIVEN its actual pointwise operator constructions, not merely because the diagrams or domain classes are countable.

[F1] [[thm-balanced-taut-sutured-manifolds-admit-finite-good-hierarchies]] supplies the actual finite good taut hierarchy with its terminal product balls.

[F2] [[lem-signed-relative-surface-cut-and-horizontal-decomposition]] supplies the actual signed outer-to-cut chain isomorphism, retaining nonzero periodic domains by pullback of the specified orientation character.

[F3] [[lem-relative-sutured-diagrams-have-signed-move-equivalences]] compares actual sutured diagrams with the specified transported orientation class and computes a product by its empty diagram.

[F4] [[lem-signed-essential-product-annulus-decomposition]] gives literal product one-handle and disk complex identifications.

## Proof

**Given:** A taut balanced sutured manifold and a specified coherent orientation class on its finite admissible integral chain complex. The Axiom of Choice is assumed for the analytic invocations [A1]; the relative finite-move geometry and supplied finite-complex algebra keep their stated inputs.

1.1 For a good cut surface S and its actual adapted polygon P, choose the standard fixed boundary vector field and a frame of its orthogonal plane along the one-dimensional boundary of S. Such a frame always exists along those circles; no global trivialization of the plane over the entire boundary is assumed. Let c(S) be the relative Euler obstruction for the outer local Morse field. Replacing that field along an interior generator trajectory adds two positive turns on S, one on either side of its trajectory tube. Boundary creases contribute the fixed tangent Euler, half-suture-crossing and boundary rotation terms to c(S); they are independent of the generator. Therefore the relative plane Euler obstruction of a generator x on S is c(S)+2n_P(x), where n_P counts its interior polygon coordinates. In particular it has the outer value exactly when n_P(x)=0. [construct]

1.2 This relative obstruction depends only on the relative Spin^c class of x. Indeed, equality of those classes means the nonvanishing generator vector fields are homotopic outside an interior ball, with their fixed boundary values. Push S off that ball and restrict the homotopy of orthogonal planes to S. Its framed boundary is unchanged, so the relative Euler obstruction is unchanged. Equivalently, changing the field in its relative Spin^c class changes neither the paired obstruction nor the fixed crease contributions. Thus a relative Spin^c class contains either only outer generators or none. This is the required class-level assertion; it is stronger than merely calling the outer generator set a subset. [step 1.1, construct]

1.3 The differential preserves relative Spin^c classes. For a disk, its α and β trace boundary gives a nullhomologous generator-difference cycle; modifying the Morse field along that bounding trace supplies the relative homotopy outside a ball. Consequently the whole chain complex is the direct sum of its relative Spin^c subcomplexes, and the outer complex is the direct sum of a subset of them by step 1.2. The projection onto this subset is a chain retraction of its inclusion. In particular its homology is a direct summand of the whole homology over the integers, with no field or torsion-freeness assumption. [step 1.2, construct]

1.4 Take the actual finite hierarchy of F1. At each cut use its good adapted admissible nice representative and F2 with the orientation character induced from the previous stage. The resulting cut homology identifies with the outer summand at that stage. Combining its chain inclusion and retraction with the signed diagram equivalences of F3 gives a split inclusion on homology from the next stage to the preceding stage. Auxiliary product one-handles or product disks in the hierarchy use the literal identifications of F4. None of these maps replaces the specified orientation class by an arbitrary one. [F1, F2, F3, F4, step 1.3]

1.5 The terminal disjoint product balls have empty diagrams. Their disjoint union has the single product empty tuple, zero differential and integral homology Z. Its determinant line has the empty-product orientation. Compose the finitely many homology inclusions from step 1.4 and compose the retractions in the reverse order. Their composite on the terminal Z is the identity. Thus Z is an actual direct summand of the original integral homology. [F3, step 1.4] ∎
