---
id: def-integral-half-solutions-strebel-and-l2-signatures
kind: definition
title: "Integral half-solutions, Strebel classes, and L²-signatures"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-zero-surgery-on-a-knot
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
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Definition 3.1 and §§2–3, solution and coefficient conventions"
    - title: "Jae Choon Cha and Kent E. Orr, “L²-signatures, homology localization, and amenable groups”"
      url: "https://arxiv.org/pdf/0910.3700"
      locator: "§§6–7, amenable-group L² conventions"
---

## Definition

Assume full AC, matching the chosen finite twisted-chain and maximal-abelian-cover conventions. Let K be a smooth oriented knot, M(K) its preferred-longitude zero-framed surgery, W a compact connected oriented smooth 4-manifold with boundary M(K), and π=π₁(W). Put π^(0)=π and π^(j+1)=[π^(j),π^(j)]. A right Zπ-chain complex with coefficients in a left Z[π/π^(j)]-module is formed by tensoring over Zπ with that module.

For n≥0, W is an integral n-solution for K when H₁(M(K);Z)→H₁(W;Z) is an isomorphism, H₂(W;Z) is free of rank 2r for some finite r, and there are classes x₁,…,x_r,y₁,…,y_r in H₂(W;Z[π/π^(n)]) whose equivariant intersection pairings satisfy λ_n(x_i,x_j)=0 and λ_n(x_i,y_j)=δ_ij. It is an integral (n+1/2)-solution when, in addition, each x_i is the image of a class x̃_i in H₂(W;Z[π/π^(n+1)]) and λ_{n+1}(x̃_i,x̃_j)=0 for all i,j. Here λ_j is the equivariant intersection pairing induced by the orientation of W.

For a commutative ring R with 1≠0, a group G belongs to Strebel's class D(R) if every homomorphism between projective RG-modules is injective whenever its tensor with the trivial G-module R is injective. In this page R is Q or F_p for a prime p. For a countable discrete group G, its group von Neumann algebra N G is the weak-operator closure of CG in the left regular representation on ℓ²(G), with trace τ_G(T)=⟨Tδ_e,δ_e⟩. The von Neumann dimension of a finitely generated projective N G-module represented by a projection E is τ_G(E); for an arbitrary module it is the supremum of the dimensions of its finitely generated projective submodules.

For a compact oriented 4-manifold W with boundary, sign(W) is the inertia difference of the symmetric intersection form on H₂(W;R) modulo its radical (the subspace pairing to zero with every class), equivalently on the image of H₂(W;R)→H₂(W,∂W;R). Given a closed oriented 3-manifold M, a homomorphism φ:π₁(M)→G, a compact oriented 4-manifold W with ∂W=M, and an extension ψ:π₁(W)→G of φ, the L²-signature sign_G^(2)(W,ψ) is the von Neumann signature of the nonsingular part of the N G-coefficient intersection form. When such a W and extension exist, the signature defect is sign_G^(2)(W,ψ)−sign(W). It is called the rho invariant of (M,φ) only after its independence of the bounding data is established by a separate bordism argument.

## Definition references

[[def-zero-surgery-on-a-knot|The zero-framed surgery manifold M(K)]]

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Finite twisted-chain and group-ring convention]]

[[def-axiom-of-choice|Full Axiom of Choice]]

[Cha, Definition 3.1 and §§2–3](https://arxiv.org/pdf/1010.1058)

[Cha–Orr, §§6–7](https://arxiv.org/pdf/0910.3700)
