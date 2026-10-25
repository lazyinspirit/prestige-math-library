---
id: lem-qftx-u1-one-instanton-adhm-space
kind: lemma
title: "Explicit Rank-One One-Instanton ADHM Quotient"
status: draft
origin: pipeline
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + the choice strength inherited from the normalized equivariant Borel–Moore suppliers; the finite scalar quotient calculation itself uses no choice."
physical_scope: "A finite-dimensional rank-one, charge-one stable ADHM quotient and its mass-twisted localized Borel–Moore coefficient. It makes no continuum gauge-theory claim."
deps:
  - def-qftx-localized-equivariant-borel-moore-data
  - def-qftx-proper-fixed-locus-localized-pushforward
  - thm-qftx-proper-fixed-locus-noncompact-localization
dependency_roles:
  def-qftx-localized-equivariant-borel-moore-data: mathematical-prerequisite
  def-qftx-proper-fixed-locus-localized-pushforward: mathematical-premise
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Section 4, the fixed-locus inverse and Euler-class localization formula.
verification:
  precheck: pending
---

## Statement

Let $V=W=\mathbb C$, let $k=N=1$, and consider scalar ADHM data $(b_1,b_2,i,j)\in\mathbb C^4$ satisfying $ij=0$ and the stability condition $i\ne0$. Let $GL(V)=\mathbb C^\times$ act by $(b_1,b_2,i,j)\mapsto(b_1,b_2,\lambda i,\lambda^{-1}j)$, and let $T=(\mathbb C^\times)^2\times\mathbb C^\times_h$ act by $(t_1,t_2,h)\cdot(b_1,b_2,i,j)=(t_1b_1,t_2b_2,h^{-1}i,t_1t_2h j)$. Write $X$ for the geometric quotient of the stable locus. Extend $T$ by a flavor torus $\mathbb C_m^\times$ acting trivially on $X$, with additive character $\widetilde m$. The quotient is isomorphic to $\mathbb C^2$ with coordinates $b_1,b_2$, the fixed locus is the origin, and the tangent weights there are $\epsilon_1=c_1(t_1)$ and $\epsilon_2=c_1(t_2)$. If the localized Borel–Moore pushforward of the complex-oriented fundamental class with insertion $c_2^{T_m}(TX\otimes L_{-1})$ is defined, where $L_{-1}$ is the inverse flavor line of weight $-\widetilde m$, then the charge-one coefficient is
$$I_{1,1}^{\mathrm{adj}}(\widetilde m)=\frac{(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)}{\epsilon_1\epsilon_2}.$$
At charge zero the quotient is a point with rank-zero insertion and coefficient $1$.

## Statement references

[[def-qftx-localized-equivariant-borel-moore-data|Normalized equivariant Borel–Moore conventions]]

[[thm-qftx-proper-fixed-locus-noncompact-localization|Proper-fixed-locus localization formula]]

## Facts & Assumptions

**Given:** The scalar ADHM equation $ij=0$, stability $i\ne0$, the stated gauge and torus actions, and the stipulated localized Borel–Moore pushforward.

[F1] [[thm-qftx-proper-fixed-locus-noncompact-localization]]: for a smooth separated finite-type variety with a finite invariant affine cover and proper fixed locus, the localized pushforward of a homogeneous class capped with the complex-oriented fundamental class is the fixed-locus sum of its restriction divided by the normal Euler class.

[F2] [[def-qftx-localized-equivariant-borel-moore-data]]: the normalized fundamental class of a smooth complex dimension-$d$ variety has Borel–Moore degree $2d$, and equivariant cohomology classes act by cap product.

## Proof

1.1 Since $i\ne0$ and $ij=0$ for scalars, $j=0$. Every stable gauge orbit has the unique representative $(b_1,b_2,1,0)$, obtained by choosing $\lambda=i^{-1}$; thus the geometric quotient is $\mathbb C^2$ with coordinates $b_1,b_2$. [given, algebra]

2.1 On the representative with $i=1$, the torus sends $i$ to $h^{-1}$, and the gauge transformation $\lambda=h$ restores $i=1$ without changing $b_1,b_2$. Hence the quotient action is $(b_1,b_2)\mapsto(t_1b_1,t_2b_2)$. Its fixed locus is the origin and the tangent weights there are $\epsilon_1,\epsilon_2$. [given, step 1.1, algebra]

3.1 The variety $\mathbb C^2$ is smooth, separated, finite type, and covered by one invariant affine open set; its fixed locus is the proper point from step 2.1. The restriction of $c_2^{T_m}(TX\otimes L_{-1})$ at that point is $(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)$, while the normal Euler class is $\epsilon_1\epsilon_2$. [given, F1, step 2.1, algebra]

4.1 Apply [F1] to this insertion. The fixed-locus formula divides the restriction in step 3.1 by its normal Euler class, yielding the stated coefficient in the rational character-localized ring. At charge zero, $V=0$ gives a point, the tangent bundle has rank zero, and its top Chern insertion is $1$, so its proper pushforward is $1$. [F1, F2, step 3.1, algebra] ∎
