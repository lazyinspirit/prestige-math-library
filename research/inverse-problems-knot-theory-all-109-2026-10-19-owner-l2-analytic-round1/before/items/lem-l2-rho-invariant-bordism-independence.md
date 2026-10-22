---
id: lem-l2-rho-invariant-bordism-independence
kind: lemma
title: "Bordism independence of the L²-signature defect"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-signature-additivity-under-gluing
  - thm-l2-signature-theorem-for-closed-four-manifolds
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
    - title: "Wolfgang Lück and Thomas Schick, “Various L²-signatures and a topological L²-signature theorem”"
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, Theorem 1.3; signature defect gluing"
---

## Statement

Let M be a closed oriented 3-manifold, Γ a discrete group, and φ:π₁(M)→Γ. If (W₀,ψ₀) and (W₁,ψ₁) are compact oriented 4-manifolds with boundary M over which φ extends, then sign_Γ^(2)(W₀,ψ₀)−sign(W₀)=sign_Γ^(2)(W₁,ψ₁)−sign(W₁). Hence the signature defect depends only on (M,φ).

## Statement references

[Lück–Schick, Theorem 1.3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** The same boundary representation φ extends over W₀ and W₁.

[F1] The signature defect is sign_Γ^(2)(W,ψ)−sign(W) ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

[F2] Signature is additive under the specified gluing for ordinary and von Neumann intersection forms ([[lem-signature-additivity-under-gluing]]).

[F3] The closed-manifold L²-signature equals the ordinary signature for any discrete-group coefficient map ([[thm-l2-signature-theorem-for-closed-four-manifolds]]).

## Proof

1.1 Glue W₀ to −W₁ along their identified boundary M. The boundary representations agree, so ψ₀ and ψ₁ glue to a homomorphism on the fundamental group of the closed oriented 4-manifold X=W₀∪_M(−W₁). [given, algebra]

2.1 Novikov additivity for the ordinary signature and for the von Neumann signature gives sign(X)=sign(W₀)−sign(W₁) and sign_Γ^(2)(X)=sign_Γ^(2)(W₀,ψ₀)−sign_Γ^(2)(W₁,ψ₁). [F1, F2, given, step 1.1]

3.1 By [F3], the two closed signatures in step 2.1 are equal. Rearranging yields equality of the two signature defects. [F3, step 2.1, algebra] ∎

## Remarks

The local proof is conditional on both [F2] and [F3]. The signature-additivity lemma and closed-manifold L²-signature theorem are both escalated, so this item is not ready for downstream use.
