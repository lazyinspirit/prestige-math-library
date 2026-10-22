---
id: lem-signature-additivity-under-gluing
kind: lemma
title: "Signature additivity under gluing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - def-signature-of-a-closed-oriented-four-k-manifold
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: 'Wolfgang Lück and Thomas Schick, "Various L²-signatures and a topological L²-signature theorem"'
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, closed-manifold L²-signature conventions"
    - title: 'Tim D. Cochran, Kent E. Orr, and Peter Teichner, "Knot concordance, Whitney towers and L²-signatures"'
      url: "https://arxiv.org/pdf/math/9908117"
      locator: "§2.2, ordinary and L²-signature conventions"
---
## Statement

Let W₀ and W₁ be compact oriented smooth 4-manifolds with a common identified boundary M, and let Γ be a discrete group. Suppose coefficient homomorphisms ψ_i:π₁(W_i)→Γ agree on π₁(M), and let X=W₀∪_M(−W₁) be the resulting closed oriented 4-manifold with its glued coefficient map. Then
sign(X)=sign(W₀)−sign(W₁)
and
sign_Γ^(2)(X)=sign_Γ^(2)(W₀,ψ₀)−sign_Γ^(2)(W₁,ψ₁).

## Statement references

[[def-integral-half-solutions-strebel-and-l2-signatures|Ordinary and von Neumann signatures]]

[[def-signature-of-a-closed-oriented-four-k-manifold|Signature of the closed glued manifold]]

[Lück–Schick, §1](https://arxiv.org/pdf/math/0209161)

[COT, §2.2](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** W₀,W₁, their common boundary M, the agreeing coefficient maps, and the orientation-reversing gluing on W₁.

[F1] The L²-signature is the von Neumann signature of the nonsingular part of the coefficient intersection form ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

[F2] The ordinary signature of a closed oriented 4-manifold is the inertia difference of its middle-dimensional form ([[def-signature-of-a-closed-oriented-four-k-manifold]]).

## Proof

1.1 Van Kampen glues ψ₀ and ψ₁ to a homomorphism π₁(X)→Γ because their restrictions to the identified boundary group agree. The orientation reversal on W₁ negates its ordinary intersection form and its von Neumann intersection form. [given, F1, F2, algebra]

1.2 The remaining claim is additivity of the nonsingular signatures when the two intersection forms are glued across the common boundary. For ordinary real forms this is Novikov additivity; for NΓ-valued forms, the same conclusion requires a dimension-theoretic argument for the boundary nullspace. No local proof of either gluing theorem is supplied here. [F1, F2, step 1.1]

## Owner escalation

The signature-additivity theorem is a required input to L²-rho bordism independence. Proposed local completion: prove ordinary Novikov additivity from the long exact sequence of the pair and prove the NΓ form version by identifying the boundary radical and showing its von Neumann dimension contributes zero. This item remains escalated; the cited sources are context, not a substitute for that proof.
