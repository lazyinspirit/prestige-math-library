---
id: ex-qftx-localized-bm-affine-plane
kind: example
title: Affine-plane localization from BM classes
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - thm-qftx-proper-fixed-locus-noncompact-localization
  - def-qftx-localized-equivariant-borel-moore-data
  - lem-qftx-fixed-embedding-bm-euler-self-intersection
dependency_roles:
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
  lem-qftx-fixed-embedding-bm-euler-self-intersection: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the equivariant Borel–Moore suppliers
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Section 4, the isolated fixed-point specialization of the smooth localization formula.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore fundamental classes and proper pushforward.
landmark: false
---

## Example

Let $T=(\mathbb C^\times)^2$ act on $X=\mathbb C^2$ by $t\cdot(z_1,z_2)=(t_1z_1,t_2z_2)$, and let $u_1,u_2$ be the first Chern classes of the two coordinate characters in the product Borel model. The single affine chart $X$ is a finite invariant affine atlas, the fixed locus is the proper point $F=\{(0,0)\}$, and the tangent weights at that point are the two coordinate characters. Compute the intrinsic localized pushforward of the complex-oriented fundamental class; the result is $1/(u_1u_2)$.

## Example references

[Fixed-point denominator and isolated-point specialization] [Edidin–Graham, Section 4](https://arxiv.org/pdf/alg-geom/9508001)

[Borel–Moore fundamental classes] [Ginzburg, Section 1](https://arxiv.org/pdf/math/9802004)

## Facts & Assumptions

**Given:** The diagonal algebraic action of $T=(\mathbb C^\times)^2$ on $\mathbb C^2$, rational coefficients, and the product Borel–Moore conventions.

[F1] $u_i$ is the degree-two class of the $i$th coordinate character line, and $[\mathbb C^2]_T$ is the complex-oriented fundamental class of degree $4$. [[def-qftx-localized-equivariant-borel-moore-data]]

[F2] For a proper fixed locus, the localized pushforward of $[X]_T$ is the sum of proper fixed-component traces divided by the localized normal Euler classes. [[thm-qftx-proper-fixed-locus-noncompact-localization]]

[F3] At a fixed point, the Borel normal Euler class is the product of the character classes of the tangent representation, with multiplicity. [[lem-qftx-fixed-embedding-bm-euler-self-intersection]]

[A1] AC is inherited through the Borel–Moore suppliers; the coordinate and tangent calculations are choice-free. [[def-qftx-localized-equivariant-borel-moore-data]]

## Verification

**Given:** The action and data in the Example.

1.1 The affine plane itself is an affine $T$-invariant chart. A point is fixed exactly when both coordinates vanish, so $F=\{0\}$ is proper. Differentiating the action at $0$ gives the representation $\mathbb C_{\chi_1}\oplus\mathbb C_{\chi_2}$; hence $e_T(\nu_F)=u_1u_2$ by [F3]. [A1, F1, F3, given, algebra]

2.1 Apply [F2] with the cohomological insertion $1$. The fixed component is one point, and its proper pushforward sends its degree-zero fundamental class to $1$. Therefore $p_*^{\mathrm{loc}}[\mathbb C^2]_T=1/(u_1u_2)\in S_T^{-1}H^{\mathrm{BM},T}_4(\mathrm{pt};\mathbb Q)$. Here the target means $(S_T^{-1}H_*^{\mathrm{BM},T}(\mathrm{pt};\mathbb Q))_4=(S_T^{-1}R_T)^{-4}$, which can be nonzero although the unlocalized group $H_4^{\mathrm{BM},T}(\mathrm{pt};\mathbb Q)$ is zero. The denominator has cohomological degree $4$, so its inverse has Borel–Moore degree $4$, matching the fundamental class. [F1, F2, step 1.1, algebra] ∎
