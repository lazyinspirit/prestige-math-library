---
id: lem-qftx-fixed-embedding-bm-euler-self-intersection
kind: lemma
title: Fixed-embedding BM self-intersection and Euler units
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-localized-equivariant-borel-moore-data
  - thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions
  - lem-multiplicative-type-groups-are-linearly-reductive
  - lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent
  - lem-qftx-borel-base-is-paracompact-of-cw-type
  - lem-qftx-rational-torus-classifying-space-cohomology
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
dependency_roles:
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
  thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions: mathematical-premise
  lem-multiplicative-type-groups-are-linearly-reductive: mathematical-premise
  lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
  lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent: mathematical-premise
  lem-qftx-borel-base-is-paracompact-of-cw-type: mathematical-premise
  lem-qftx-rational-torus-classifying-space-cohomology: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  thm-external-product-and-whitney-sum-formulas-for-thom-classes: mathematical-premise
  def-euler-class-by-zero-section-pullback-of-the-thom-class: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the listed equivariant, Borel, and Thom suppliers
proof_strategy: direct
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
      locator: Section 4, Proposition 4 and Theorem 2, printed pp. 8–9.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Sections 1 and 12, Borel–Moore orientation, equivariant bundles, and the Borel construction.
landmark: false
---

## Statement

Let $T=(\mathbb C^\times)^r$ act algebraically on a smooth separated finite-type complex variety $X$ with a finite invariant affine open cover. Let $F=X^T$, $i:F\hookrightarrow X$, and $\nu_F=TX|_F/TF$ be the complex normal bundle. Then $F$ is smooth, $T_xF=(T_xX)^T$ for every $x\in F$, and every normal fiber has only nontrivial $T$-weights. On each fiber the restriction of $e_T(\nu_F)$ to $BT$ is the product of the corresponding character classes with multiplicity. The closed regular embedding $i$ has an equivariant refined Gysin map $i^!:H^{\mathrm{BM},T}_j(X;\mathbb Q)\to H^{\mathrm{BM},T}_{j-2c}(F;\mathbb Q)$ on each component of complex codimension $c$, normalized by $i^![X]_T=[F]_T$, with
$$
i^!i_*\beta=e_T(\nu_F)\mathbin{\cap}\beta
$$
for every $\beta\in H^{\mathrm{BM},T}_*(F;\mathbb Q)$, using the normalized Borel–Moore grading and complex orientation. If $F$ is proper, then $e_T(\nu_F)$ is a unit in $S_T^{-1}H_T^*(F;\mathbb Q)$. Empty components contribute no class, and a rank-zero normal bundle has Euler class $1$.

## Statement references

[Normal weights and the equivariant Euler denominator] [Edidin–Graham, Section 4, Proposition 4 and Theorem 2](https://arxiv.org/pdf/alg-geom/9508001)

[Borel–Moore orientation and equivariant construction] [Ginzburg, Sections 1 and 12](https://arxiv.org/pdf/math/9802004)

## Facts & Assumptions

**Given:** The algebraic torus action, the smooth variety $X$, the finite invariant affine cover, the localized Borel–Moore data, and the character multiplicative set $S_T$.

[A1] AC is inherited through the equivariant Borel–Moore, fixed-point, Künneth, and Thom suppliers; the finite character decomposition introduces no stronger choice principle. [[def-qftx-localized-equivariant-borel-moore-data]] [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] [[thm-thom-isomorphism-for-oriented-vector-bundles]]

[F1] A product torus over $\mathbb C$ is linearly reductive; its fixed-point subscheme in a smooth variety is smooth and has tangent space equal to the invariant tangent subspace. [[lem-multiplicative-type-groups-are-linearly-reductive]] [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]]

[F2] The Borel–Moore grading, cap action, coefficient ring, and associated character lines use the normalized product Borel model. [[def-qftx-localized-equivariant-borel-moore-data]]

[F3] Complex-oriented refined Gysin maps are compatible with the six-functor exchange, and a complex zero section satisfies the Euler self-intersection formula. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]

[F4] An oriented numerable complex vector bundle has its normalized Thom class; external products and ordered direct sums multiply Thom classes, hence Euler classes. [[thm-thom-isomorphism-for-oriented-vector-bundles]] [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]

[F5] For compact smooth $F_0$, the positive-degree ideal $J_0=\bigoplus_{q>0}H^q(F_0;\mathbb Q)$ is nilpotent, and $BT\times F_0$ is paracompact Hausdorff of CW type. [[lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent]] [[lem-qftx-borel-base-is-paracompact-of-cw-type]]

[F6] $H_q(BT;\mathbb Q)$ is finite-dimensional in every degree, so the cohomological Künneth cross product identifies $H_T^*(F_0;\mathbb Q)$ as a graded ring with $H^*(BT;\mathbb Q)\otimes_{\mathbb Q}H^*(F_0;\mathbb Q)$. [[lem-qftx-rational-torus-classifying-space-cohomology]] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

## Proof

**Given:** The data in the Statement.

1.1 By [F1], $F$ is smooth and $T_xF=(T_xX)^T$. The quotient $T_xX/T_xF$ therefore has no invariant vector. On an affine open of a connected fixed component the base ring has trivial $T$-action, so the coaction on the finite-rank normal bundle is linear over that ring. Each of finitely many local module generators has finite character support; the character-coefficient projections are orthogonal idempotents summing to the identity. Their images are locally free direct summands. These decompositions agree on overlaps because the projections are defined by the group coaction. The zero-weight image has zero fiber at every point by $T_xF=(T_xX)^T$, so $\nu_F$ is the finite direct sum of nontrivial character subbundles. Thus $i$ is a closed regular embedding with the stated complex normal bundle. [F1, given, construct]

2.1 The complex normal orientation gives the refined Gysin map in the normalized Borel–Moore grading. The Thom class is normalized to restrict to the positive complex-oriented generator on every normal fiber, so $i^![X]_T=[F]_T$. A $K$-invariant tubular neighborhood of each fixed component identifies the embedding locally in the Borel construction with the zero section of its normal bundle. By [F3] and the Thom class in [F4], this zero-section operation satisfies $i^!i_*\beta=e_T(\nu_F)\cap\beta$; the degree is lowered by twice the complex codimension $c$. The result is independent of the chosen tubular neighborhood because the refined exchange and orientation comparisons are canonical. [A1, F2, F3, F4, step 1.1]

2.2 Now let $F_0$ be a connected component of proper $F$. It is a compact smooth complex manifold, and $T$ acts trivially on it. The Borel normal bundle is a complex vector bundle over $BT\times F_0$; [F5] puts its base in the Thom theorem's scope. By [F6], $H_T^*(F_0;\mathbb Q)=H^*(BT;\mathbb Q)\otimes_{\mathbb Q}H^*(F_0;\mathbb Q)$. The weight subbundles from step 1.1 have ranks $m_\chi$ constant on $F_0$. Restricting the Borel normal bundle to $BT\times\{x\}$, for any $x\in F_0$, gives $\bigoplus_{\chi\ne1}L_\chi^{\oplus m_\chi}$. By [F4] and the zero-section definition of Euler class, the restriction of $e_T(\nu_F)$ is $w_0=\prod_{\chi\ne1}u_\chi^{m_\chi}$. Each $u_\chi$ is a generator of $S_T$, so $w_0$ is invertible after localization. [F2, F4, F5, F6, step 1.1]

3.1 Under the Künneth decomposition of step 2.2, write $e_T(\nu_F)=w_0+\eta$, where $\eta\in J_0\otimes_{\mathbb Q}H^*(BT;\mathbb Q)$; restriction to a point detects the degree-zero $F_0$ component $w_0$. By [F5], $J_0^N=0$ for some finite $N$, so $z=w_0^{-1}\eta$ has $z^N=0$ in the localized ring. Therefore $e_T(\nu_F)^{-1}=w_0^{-1}\sum_{a=0}^{N-1}(-z)^a$ is a finite inverse. If the normal rank is zero, the empty product is $w_0=1$, $\eta=0$, and the same formula gives $e_T=1$. There are finitely many connected components because $F$ is finite type; the componentwise inverses give a unit on all of $F$. If $F=\varnothing$, the Euler-unit clause is vacuous. [F5, step 2.2, algebra] ∎
