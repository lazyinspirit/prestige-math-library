---
id: def-blanchfield-pairing-and-higher-order-rho-invariant
kind: definition
title: "Localized Blanchfield pairings and higher-order rho-invariants"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - def-maximal-abelian-cover-alexander-module
  - def-poly-torsion-free-abelian-group
  - thm-ptfa-group-rings-are-ore-domains
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
    - title: "Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance, Whitney towers and L²-signatures”"
      url: "https://arxiv.org/pdf/math/9908117"
      locator: "§2.1 and Theorem 2.13, higher-order Blanchfield form"
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Definition 3.1, signature defect conventions"
---

## Definition

Let M be a closed oriented 3-manifold and let Γ be a PTFA group with group ring Λ=ZΓ and skew field of fractions KΓ. Write the involution on Λ induced by g↦g⁻¹ and complex conjugation on coefficients. If H₁(M;KΓ)=0, the coefficient Bockstein map, Poincaré duality and evaluation define the higher-order Blanchfield linking pairing
B_M:TH₁(M;Λ)×TH₁(M;Λ)→KΓ/Λ,
where T denotes the Λ-torsion submodule; the first variable is conjugate-linear and the second is linear under the chosen right-module convention. Nonsingularity means that the adjoint map from TH₁(M;Λ) to its conjugate Λ-dual Hom_Λ(TH₁(M;Λ),KΓ/Λ) is an isomorphism. For Γ=Z with generator t this specializes to the classical pairing over Z[t,t⁻¹] and Q(t)/Z[t,t⁻¹].

For a homomorphism φ:π₁(M)→G and an extension ψ:π₁(W)→G over a compact oriented 4-manifold W with ∂W=M, define the signature defect by ρ(M,φ;W,ψ)=sign_G^(2)(W,ψ)−sign(W). It is an invariant of (M,φ) only when a separate bordism-independence theorem applies.

## Definition references

[[def-maximal-abelian-cover-alexander-module|Maximal-abelian-cover Alexander module]]

[[def-integral-half-solutions-strebel-and-l2-signatures|Integral solutions, von Neumann dimension, L²-signature and signature defect]]

[[def-poly-torsion-free-abelian-group|PTFA group]]

[[thm-ptfa-group-rings-are-ore-domains|Ore localization for PTFA group rings]]

[ COT, Theorem 2.13 and §2.1](https://arxiv.org/pdf/math/9908117)

[Cha, Definition 3.1](https://arxiv.org/pdf/1010.1058)
