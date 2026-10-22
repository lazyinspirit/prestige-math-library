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
  - lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions
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

Let $M$ be a closed oriented three-manifold with a specified coefficient homomorphism $\phi:\pi_1(M_j)\to\Gamma$ on each component, where $\Gamma$ is PTFA. The integral coefficient ring is $\Lambda=\mathbb Z[\Gamma]$ with its fraction division ring $K\Gamma$. More generally let $k$ be $\mathbb Z$ or a commutative field, let $K$ be the fraction division ring of $k[\Gamma]$, and let $k[\Gamma]\subseteq R\subseteq K$ be an involution-stable unital intermediate ring. The involution fixes $k$ and sends $g$ to $g^{-1}$; on fractions it is the involutive anti-automorphism extending this formula. Taking $k=\mathbb Z$ and $R=\Lambda$ recovers the integral convention.

If $H_1(M;K)=0$, the coefficient Bockstein, oriented Poincaré duality and evaluation define the Blanchfield linking pairing
$$B_{M,\phi,R}:TH_1(M;R)\times TH_1(M;R)\longrightarrow K/R.$$
Here $T$ denotes the submodule of elements with a nonzero right annihilator, the first variable is conjugate-linear, and the second is right-linear. Nonsingularity means that the adjoint
$$\overline{TH_1(M;R)}\longrightarrow\operatorname{Hom}_R(TH_1(M;R),K/R)$$
is an isomorphism of left $R$-modules, where $r\cdot\bar x=\overline{x\bar r}$ on the conjugate module. This is equivalent to the conjugate-dual formulation in the right-module convention. For $\Gamma=\mathbb Z$ with generator $t$, $R=\mathbb Z[t^{\pm1}]$ and $K=\mathbb Q(t)$ give the classical coefficient convention. Nonsingularity is a separate property of the defined pairing, with its coefficient hypotheses supplied by the nonsingularity theorem.

For a homomorphism φ:π₁(M)→G and an extension ψ:π₁(W)→G over a compact oriented 4-manifold W with ∂W=M, define the signature defect by ρ(M,φ;W,ψ)=sign_G^(2)(W,ψ)−sign(W). It is an invariant of (M,φ) only when a separate bordism-independence theorem applies.

## Definition references

[[def-maximal-abelian-cover-alexander-module|Maximal-abelian-cover Alexander module]]

[[def-integral-half-solutions-strebel-and-l2-signatures|Integral solutions, von Neumann dimension, L²-signature and signature defect]]

[[def-poly-torsion-free-abelian-group|PTFA group]]

[[thm-ptfa-group-rings-are-ore-domains|Rational PTFA fraction fields]]

[[lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions|Integral and field coefficients, intermediate Ore rings and involutions]]

[ COT, Theorem 2.13 and §2.1](https://arxiv.org/pdf/math/9908117)

[Cha, Definition 3.1](https://arxiv.org/pdf/1010.1058)
