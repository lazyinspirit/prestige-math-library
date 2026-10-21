---
id: def-infinite-cyclic-cover-of-a-slice-disk-exterior
kind: definition
title: Infinite and finite cyclic covers of a slice-disk exterior
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - lem-slice-disk-exterior-has-homology-of-a-circle
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

Assume AC. Let $X_D$ be the exterior of a smooth proper disk, with positive-meridian isomorphism $H_1(X_D;\mathbb Z)\cong\mathbb Z$. Let $X_{D,\infty}$ be the connected cover classified by the kernel of $\pi_1(X_D)\to H_1(X_D;\mathbb Z)\cong\mathbb Z$, and let $t$ denote the deck transformation represented by the positive meridian. For $q\ge2$, define $X_{D,q}=X_{D,\infty}/\langle t^q\rangle$.

## Definition references

[[lem-slice-disk-exterior-has-homology-of-a-circle|The meridian generates the homology of the disk exterior]]

[[def-axiom-of-choice|Axiom of Choice]]
