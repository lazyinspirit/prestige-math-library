---
id: "thm-sheaf-differentials-universal-property"
kind: "theorem"
title: "Universal property of relative differential sheaves"
status: published
origin: "pipeline"
deps: ["def-sheaf-relative-differentials", "thm-sheafification-universal-property", "cor-derivations-represented-by-differentials", "def-module-on-ringed-space", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Stacks Modules, Lemma 17.28.4 and Definition 17.28.10, tags 08TD and 08RT"
      url: "https://stacks.math.columbia.edu/tag/08TD"
    - title: "Stacks Morphisms, Lemma 29.33.2, tag 01UR"
      url: "https://stacks.math.columbia.edu/tag/01UR"
    - title: "Vakil §22.2.20, pp.584–585"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $f\colon X\to S$ be a morphism of schemes and let $\Omega_{X/S}=aP$ with
universal derivation $\mathrm d_{X/S}\colon\mathcal O_X\to\Omega_{X/S}$
([[def-sheaf-relative-differentials]]). For every $\mathcal O_X$-module
$\mathcal F$, composition with $\mathrm d_{X/S}$ is a bijection
$$\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\longrightarrow \operatorname{Der}_S(\mathcal O_X,\mathcal F),\qquad \alpha\longmapsto\alpha\circ\mathrm d_{X/S},$$
natural in $\mathcal F$. No quasi-coherence or finiteness is assumed on
$\mathcal F$, and no condition is imposed on $f$; the sheaf $\Omega_{X/S}$ is
determined up to unique compatible isomorphism by this property.

## Facts & Assumptions

**Given:** A morphism of schemes $f\colon X\to S$, the presheaf $P(W)=\Omega_{\mathcal O_X(W)/(f^{-1}\mathcal O_S)(W)}$ of [[def-sheaf-relative-differentials]], and an $\mathcal O_X$-module $\mathcal F$.

[F1] [[def-sheaf-relative-differentials]]: $\Omega_{X/S}=aP$, the universal derivations $\mathrm d_W$ assemble to $\mathrm d_{X/S}$, and an $S$-derivation $\mathcal O_X\to\mathcal F$ is a morphism of sheaves of abelian groups that is additive, satisfies the Leibniz rule on sections over every open $W$, and kills the image of $f^{\sharp}\colon f^{-1}\mathcal O_S\to\mathcal O_X$.

[F2] [[thm-sheafification-universal-property]]: every morphism of presheaves $\varphi\colon P\to\mathcal F$ with $\mathcal F$ a sheaf factors uniquely through the canonical map $P\to aP$.

[F3] [[cor-derivations-represented-by-differentials]]: for a ring map $R\to T$ and every $T$-module $N$, composition with the universal derivation is an isomorphism $\operatorname{Hom}_T(\Omega_{T/R},N)\cong\operatorname{Der}_R(T,N)$.

[F4] [[def-module-on-ringed-space]]: an $\mathcal O_X$-module has section groups that are modules over the section rings, restriction is linear after restricting scalars, and morphisms are linear on every open set.

[F5] [[def-derivation-algebra]]: an $R$-derivation $T\to N$ is additive, kills the image of $R$ and satisfies the Leibniz rule; sums and scalar multiples of derivations are derivations.

## Proof

**Proof technique:** direct.

1.1 Sheafification adjunction. Restriction along $P\to aP=\Omega_{X/S}$ gives a bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong\operatorname{Hom}_{\mathcal O_X\text{-presheaf}}(P,\mathcal F)$: [F2] gives the factorization on underlying presheaves, and the factor is $\mathcal O_X$-linear because sections of $aP$ are locally represented by sections of $P$, with scalar multiplication defined on those representatives by [F1]. Linearity therefore holds locally and hence globally. A morphism of presheaves $P\to\mathcal F$ is exactly a compatible family of $\mathcal O_X(W)$-linear maps $\varphi_W\colon P(W)\to\mathcal F(W)$. [F1, F2, F4]

1.2 Algebraic universal property on each open. Since $\mathcal O_X(W)$ is an $(f^{-1}\mathcal O_S)(W)$-algebra, [F3] turns $\varphi_W$ into the derivation $D_W:=\varphi_W\circ\mathrm d_W\colon\mathcal O_X(W)\to\mathcal F(W)$, an $(f^{-1}\mathcal O_S)(W)$-derivation by [F5]; conversely every such derivation arises from exactly one $\varphi_W$. Compatibility of the family $(\varphi_W)$ under restriction is equivalent to compatibility of the family $(D_W)$, because the restriction maps of $\Omega_{X/S}$ are defined so that $\mathrm d_{W'}\circ\rho=\rho\circ\mathrm d_W$ for $W'\subseteq W$. [F1, F3, F5]

2.1 Compatible families of derivations are $S$-derivations. The families $(D_W)$ in step 1.2 are in canonical bijection with morphisms of sheaves of abelian groups $D\colon\mathcal O_X\to\mathcal F$ that are additive and satisfy Leibniz on every open and kill the image of each $(f^{-1}\mathcal O_S)(W)$; by gluing, the last condition is exactly $D\circ f^{\sharp}=0$, so these are precisely the $S$-derivations of [F1]. The two passes are inverse because a derivation determines its components $D_W$, and $\varphi_W$ is recovered from $D_W$ by the universal property of $P(W)$. [F1, step 1.2]

3.1 Conclusion. Composing the bijections of steps 1.1, 1.2 and 2.1 gives the displayed bijection $\alpha\mapsto\alpha\circ\mathrm d_{X/S}$, since $\alpha$ corresponds to the composite of its components with $\mathrm d_W$ and $\mathrm d_{X/S}$ is assembled from the $\mathrm d_W$ by [F1]. Each step is natural in $\mathcal F$: a morphism $\mathcal F\to\mathcal G$ of $\mathcal O_X$-modules composes with $\varphi_W$ and with $D_W$, so the bijection is compatible with postcomposition, and by the Yoneda lemma $\Omega_{X/S}$ is determined up to unique compatible isomorphism. [F1, step 1.1, step 1.2, step 2.1] ∎
