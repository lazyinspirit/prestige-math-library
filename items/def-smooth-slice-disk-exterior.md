---
id: def-smooth-slice-disk-exterior
kind: definition
title: Exterior of a smooth proper disk
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp.190–194, covering-space/slice-disk-exterior setup and Theorem2 proof; baseline for the local smooth disk-exterior and meridional cover conventions. The detailed coordinate, collar and covering formulations here are local definitions, not verbatim assertions attributed to the source.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Definition

Assume AC. Let $D\subset B^4$ be a smooth proper disk. Give $B^4$ its standard orientation, choose an orientation of $D$, and give $K=\partial D\subset S^3$ the induced boundary orientation. Choose a closed tubular neighborhood $N(D)\cong D^2\times D^2$ meeting $S^3$ in $\partial D\times D^2$, and let $X_D$ be the closure of $B^4\setminus\operatorname{int}N(D)$, with corners rounded. The positive meridian is the oriented circle $\{x\}\times\partial D^2$ in the overlap $D^2\times S^1$, oriented by the ambient and disk orientations.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Proper surfaces and boundary collars]]

[[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold|Tubular neighborhoods in smooth manifolds]]

[[def-axiom-of-choice|Axiom of Choice]]
