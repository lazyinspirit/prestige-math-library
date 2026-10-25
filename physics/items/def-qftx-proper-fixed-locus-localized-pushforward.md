---
id: def-qftx-proper-fixed-locus-localized-pushforward
kind: definition
title: Intrinsic localized pushforward for a proper fixed locus
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - thm-qftx-finite-affine-atlas-bm-concentration
  - def-qftx-localized-equivariant-borel-moore-data
dependency_roles:
  thm-qftx-finite-affine-atlas-bm-concentration: mathematical-premise
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the equivariant Borel–Moore suppliers
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Section 4, explicit fixed-locus inverse and its pushforward interpretation.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore proper pushforward and fundamental classes.
landmark: false
---

## Definition

Let $T=(\mathbb C^\times)^r$ act on a smooth separated finite-type complex variety $X$ with a finite invariant affine open cover. Let $F=X^T$ be proper, $i:F\hookrightarrow X$, $p_F:F\to\mathrm{pt}$, and $S_T$ the character multiplicative set. Every notation $S_T^{-1}H_j^{\mathrm{BM},T}(Y;\mathbb Q)$ below means $\mathcal H_j^T(Y)$, the degree-$j$ piece of the localization of the total graded module. By the finite-affine-atlas concentration isomorphism, $i_*:S_T^{-1}H^{\mathrm{BM},T}_j(F;\mathbb Q)\to S_T^{-1}H^{\mathrm{BM},T}_j(X;\mathbb Q)$ is invertible. Define the intrinsic localized pushforward
$$
p^{\mathrm{loc}}_*:=p_{F*}\circ(i_*)^{-1}:S_T^{-1}H^{\mathrm{BM},T}_j(X;\mathbb Q)\longrightarrow S_T^{-1}H^{\mathrm{BM},T}_j(\mathrm{pt};\mathbb Q),
$$
where $p_{F*}$ is the genuine proper Borel–Moore pushforward. For a homogeneous $\alpha\in H_T^q(X;\mathbb Q)$ and smooth complex dimension $d$, an allowed insertion is $\alpha\cap[X]_T\in H^{\mathrm{BM},T}_{2d-q}(X;\mathbb Q)$; the fundamental class $[X]_T$ is the complex-oriented class, not the cohomological unit $1\in H_T^0(X;\mathbb Q)$. This construction does not define an ordinary pushforward along a nonproper map $X\to\mathrm{pt}$.

## Definition references

[Equivariant pushforward by the fixed-locus inverse] [Edidin–Graham, Section 4](https://arxiv.org/pdf/alg-geom/9508001)

[Borel–Moore proper pushforward and fundamental classes] [Ginzburg, Section 1](https://arxiv.org/pdf/math/9802004)

## Facts & Assumptions

**Given:** The torus action, the finite invariant affine cover, the proper fixed locus, and rational coefficients.

[A1] AC is inherited through the normalized equivariant Borel–Moore construction and its concentration supplier. [[def-qftx-localized-equivariant-borel-moore-data]] [[thm-qftx-finite-affine-atlas-bm-concentration]]

[F1] The normalized Borel–Moore groups, proper equivariant pushforwards, cap products, and fundamental classes use the preceding localized Borel–Moore definition. [[def-qftx-localized-equivariant-borel-moore-data]]

[F2] Proper pushforward along the fixed inclusion is an isomorphism after character localization under the finite invariant affine-cover hypothesis. [[thm-qftx-finite-affine-atlas-bm-concentration]]

## Proof

**Given:** The data in the Definition.

1.1 By [F2], $i_*$ is an isomorphism in each degree after localization, and on the total graded localization its inverse is a unique degree-preserving $S_T^{-1}R_T$-linear map; its restrictions give the degree-$j$ inverses. The proper inclusion $i$ and the proper map $p_F$ give the stated Borel–Moore pushforwards by [F1]. [A1, F1, F2, given]

2.1 Composition of the inverse with $p_{F*}$ is therefore a well-defined degree-preserving map on the localized Borel–Moore groups. The insertion convention is well-defined because [F1] supplies the cap action and the smooth complex orientation gives $[X]_T$ degree $2d$. If $X\to\mathrm{pt}$ is proper, functoriality gives $p_{X*}=p_{F*}i_*$, so $p_*^{\mathrm{loc}}=p_{F*}i_*(i_*)^{-1}=p_{X*}$. If $F=\varnothing$, then $F\to\mathrm{pt}$ is proper and [F2] forces the localized groups of $X$ to be zero, so the defined trace is the zero map. For $r=0$, $T$ is trivial, $F=X$, $i$ is the identity, and the properness hypothesis makes this the usual proper pushforward. [F1, F2, step 1.1, given, algebra] ∎
