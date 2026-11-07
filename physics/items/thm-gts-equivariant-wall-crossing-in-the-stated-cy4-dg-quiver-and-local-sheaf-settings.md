---
id: thm-gts-equivariant-wall-crossing-in-the-stated-cy4-dg-quiver-and-local-sheaf-settings
kind: theorem
title: Bojko CY4 wall crossing for the specified compactly supported sheaf category
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
proof_strategy: direct
deps: []
dependency_roles: {}
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds and quivers"
      url: "https://arxiv.org/pdf/2507.05922v3"
      locator: "§§1.2–1.7, Theorem 1.8, Assumptions 5.1(g) and 5.10(a), and the proof in §4; the exact scope and statements are transcribed, but the proof is not reconstructed here."
---

## Statement

For stability conditions $\sigma,\sigma'$ in the source's common small neighborhood, Problem (I) is the ordered-decomposition wall-crossing equation (1.5), with source coefficients $\widetilde U(\alpha;\sigma,\sigma')$ and left-nested Lie brackets, together with the Joyce–Song-pair formula (5.33). Problem (II) asserts independence of the obstruction-theory choice $k$ on overlapping neighborhoods. Under all of Bojko Assumptions 5.1 and 5.10, including their stability, finite-decomposition, rank, Harder–Narasimhan, proper-fixed-locus, resolution-property, orientation and compatible obstruction-diagram hypotheses, Theorem 1.8 states that both problems hold when $\mathcal A$ is compactly supported coherent sheaves on the local Calabi–Yau fourfold $X=\operatorname{Tot}(K_Y)$ from Example 1.6: $Y$ is smooth with the source's $\kappa(Y)=-\infty$ and torus-action assumptions, and in Theorem 1.8 may be quasi-projective. The claim concerns the source's equivariant virtual classes and virtual counts; it does not identify them with the CY3 PT or Behrend invariants on the A page.

## Facts & Assumptions

**Given:** the exact source category, its complete Assumptions 5.1(a–g) and 5.10(a–b), the admissible local stability path and common neighborhood, proper fixed loci with resolution property, compatible obstruction-theory homotopies and virtual pullbacks, equivariance, and orientations.

[A1] The source's Theorem 1.8 is a conditional input for the compactly supported sheaf case. Its proof uses the CY4 dg-quiver completion, master-space obstruction theory and the detailed argument of §§4 and 6; the complete proof is not reconstructed in this carrier.

## Proof

1.1 With the stated hypotheses, the cited equivariant wall-crossing result applies to the compactly supported sheaf category in the source's local CY4 setup; its scope permits the base threefold $Y$ to be quasi-projective and requires the stated properness of fixed loci. [given, A1, algebra]

2.1 The source result supplies both conclusions: its ordered-decomposition formula for the wall crossing between the specified stability conditions and equality of the resulting classes for each admissible obstruction-theory choice $k$ on overlapping neighborhoods. Those are precisely the two conclusions asserted here, with the source's coefficients, brackets and orientation conventions. The CY3 stable-pair and Behrend statements do not follow. [given, A1, step 1.1] ∎
