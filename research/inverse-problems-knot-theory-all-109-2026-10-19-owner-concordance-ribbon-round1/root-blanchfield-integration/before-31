---
id: lem-higher-order-blanchfield-pairings-are-nonsingular
kind: lemma
title: "Classical and PTFA Blanchfield forms are nonsingular"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-blanchfield-pairing-and-higher-order-rho-invariant
  - thm-ptfa-group-rings-are-ore-domains
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance, Whitney towers and L²-signatures”"
      url: "https://arxiv.org/pdf/math/9908117"
      locator: "Theorem 2.13 and its proof"
---

## Statement

Let M be a closed oriented 3-manifold and let Γ be PTFA, with Λ=ZΓ embedded in its skew field of fractions KΓ. If H₁(M;KΓ)=0, then the higher-order Blanchfield pairing on TH₁(M;Λ) induced by the coefficient Bockstein map and Poincaré duality is nonsingular.

## Statement references

[COT, Theorem 2.13](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** A closed oriented 3-manifold M, PTFA group Γ, and vanishing H₁(M;KΓ).

[F1] PTFA group rings embed in a skew field of fractions ([[thm-ptfa-group-rings-are-ore-domains]]).

[F2] The higher-order Blanchfield pairing is the Bockstein–duality linking form with target KΓ/Λ ([[def-blanchfield-pairing-and-higher-order-rho-invariant]]).

## Proof

1.1 Apply the coefficient exact sequence 0→Λ→KΓ→KΓ/Λ→0. Since H₁(M;KΓ)=0, the associated Bockstein identifies the relevant torsion cohomology classes with the corresponding Λ-cohomology classes. [F1, F2, given, algebra]

1.2 Poincaré duality for the closed oriented 3-manifold identifies the resulting cohomology module with TH₁(M;Λ), and evaluation gives the adjoint of the linking pairing. [F2, step 1.1]

2.1 The Universal Coefficient calculation needed to show that this adjoint has zero kernel and is onto is the nonsingularity step in COT Theorem 2.13. That calculation depends on the Ore localization and the coefficient module duality conventions, which are not proved by [F1] or [F2] alone. [F1, F2, step 1.2]

## Owner escalation

COT Theorem 2.13 cites the group-ring Ore result and supplies a short Poincaré-duality/UCT argument. The PTFA Ore theorem and the full noncommutative UCT hypotheses remain unresolved locally; nonsingularity is not proved in this draft.