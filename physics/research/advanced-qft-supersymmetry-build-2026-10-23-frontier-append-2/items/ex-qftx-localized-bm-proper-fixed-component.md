---
id: ex-qftx-localized-bm-proper-fixed-component
kind: example
title: A noncompact variety with a proper fixed component
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
  - thm-thom-isomorphism-for-oriented-vector-bundles
dependency_roles:
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
  lem-qftx-fixed-embedding-bm-euler-self-intersection: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the equivariant Borel–Moore and Thom suppliers
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
      locator: Section 4, proper fixed-component pushforward formula.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore homology and fundamental classes.
landmark: false
---

## Example

Let $T=\mathbb C^\times$ act on $X=\mathbb P^1\times\mathbb C$ by $t\cdot([x:y],z)=([x:y],tz)$, and give $X$ the two invariant affine charts $\{x\neq0\}\times\mathbb C$ and $\{y\neq0\}\times\mathbb C$. Its fixed locus is the proper component $F=\mathbb P^1\times\{0\}$, although $X$ is noncompact. Let $\chi(t)=t$, $u=c_1(L_{\chi|_{S^1}})$, choose $p\in\mathbb P^1$, and let $h\in H^2(\mathbb P^1;\mathbb Q)$ be the complex-oriented Gysin class of $p$, so $\int_{\mathbb P^1}h=1$. Pull $h$ back to $\alpha\in H_T^2(X;\mathbb Q)$ by the projection $X\to\mathbb P^1$. Compute the intrinsic localized pushforward of $\alpha\cap[X]_T$; it is $1/u$.

## Example references

[Proper fixed-component denominator formula] [Edidin–Graham, Section 4](https://arxiv.org/pdf/alg-geom/9508001)

[Borel–Moore fundamental classes and proper pushforward] [Ginzburg, Section 1](https://arxiv.org/pdf/math/9802004)

## Facts & Assumptions

**Given:** The standard complex orientation on $X$ and $F$, the stated $T$-action and finite invariant affine cover, rational coefficients, and the character class $u$.

[F1] The Borel construction gives $u\in H^2(BT;\mathbb Q)$, the cap action on Borel–Moore classes, and the complex-oriented fundamental classes. [[def-qftx-localized-equivariant-borel-moore-data]]

[F2] The intrinsic pushforward formula for a smooth variety with proper fixed locus is the finite sum over fixed components divided by their localized normal Euler classes. [[thm-qftx-proper-fixed-locus-noncompact-localization]]

[F3] The normal Euler class on a fixed component is determined by the nonzero character weights, and its degree equals twice the complex normal rank. [[lem-qftx-fixed-embedding-bm-euler-self-intersection]]

[F4] The complex orientation defines the Gysin class of a point in a smooth curve, normalized so that its proper trace is $1$. [[thm-thom-isomorphism-for-oriented-vector-bundles]]

[A1] AC is inherited through the Borel–Moore and Thom constructions; the chosen point and all fiber data are explicit. [[def-qftx-localized-equivariant-borel-moore-data]] [[thm-thom-isomorphism-for-oriented-vector-bundles]]

## Verification

**Given:** The data in the Example.

1.1 Each listed chart is isomorphic to $\mathbb C^2$, is $T$-invariant, and the two cover $X$. The action fixes $([x:y],z)$ exactly when $z=0$, so $F=\mathbb P^1\times\{0\}\cong\mathbb P^1$ is smooth and proper. Its normal bundle is the trivial complex line over $\mathbb P^1$ with character $\chi$; hence $e_T(\nu_F)=u$ by [F3]. [A1, F1, F3, given, algebra]

1.2 The point inclusion $p\hookrightarrow\mathbb P^1$ has a complex-oriented Gysin map by [F4]. Define $h$ as the image of $1\in H^0(p;\mathbb Q)$. Functoriality of proper pushforward gives $\int_{\mathbb P^1}h=1$, since the composite $p\to\mathbb P^1\to\mathrm{pt}$ is the identity. The $T$-action on $\mathbb P^1$ is trivial, so $\alpha|_F=h$. [F1, F4, given]

2.1 The localization theorem [F2] gives $p_*^{\mathrm{loc}}(\alpha\cap[X]_T)=p_{F*}((h/u)\cap[\mathbb P^1]_T)=1/u$. The numerator trace is $1$ by step 1.2, and the output has Borel–Moore degree $2$, matching $2\dim_{\mathbb C}X-\deg\alpha=4-2$. [F1, F2, F3, step 1.2, algebra] ∎
