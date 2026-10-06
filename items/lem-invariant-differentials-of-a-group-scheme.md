---
id: lem-invariant-differentials-of-a-group-scheme
kind: lemma
title: "The invariant differentials of a group scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-group-scheme-over-a-field", "def-sheaf-relative-differentials", "lem-differentials-commute-base-change-schemes", "def-relative-cotangent-space", "thm-cotangent-space-maximal-ideal-quotient", "def-pullback-module-ringed-spaces", "thm-fibre-products-of-schemes-exist", "lem-differential-of-morphism-via-cotangent-map", "def-zariski-tangent-space-point"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Groupoid Schemes chapter"
      url: "https://stacks.math.columbia.edu/download/groupoids.pdf"
      locator: "Lemma 39.6.3 [047I], printed p. 12: Omega_{G/S} = f^*C_{S/G} = f^*e^*Omega_{G/S}, with the shearing-map proof."
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "10.6 and display (56) with the discussion of the augmentation ideal, printed pp. 188-189 (PDF 199-200)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $k$ be a field and let $G$ be a group scheme of finite type over $k$ with structure morphism $f:G\to\operatorname{Spec}k$ and identity $e:\operatorname{Spec}k\to G$. Then there is a canonical isomorphism of $\mathcal O_G$-modules $\Omega_{G/k}\cong f^*e^*\Omega_{G/k}$ (the module of invariant differentials), and $e^*\Omega_{G/k}\cong\mathfrak m_e/\mathfrak m_e^2$ is the cotangent space of $G$ at the identity. Consequently $\Omega_{G/k}\cong\mathcal O_G\otimes_k(\mathfrak m_e/\mathfrak m_e^2)$ is a free $\mathcal O_G$-module of rank $\dim_k\operatorname{Lie}(G)$; moreover, for every $k$-rational point $x\in G(k)$, left translation by $x$ identifies the cotangent space $\Omega_{G/k}\otimes_{\mathcal O_{G,x}}\kappa(x)$ with $\mathfrak m_e/\mathfrak m_e^2$.

## Facts & Assumptions

**Given:** A field $k$, a group scheme $G$ of finite type over $k$ with structure morphism $f$, multiplication $m$, inversion $i$ and identity $e$.

[F1] [[lem-differentials-commute-base-change-schemes]]: for a base change $X'=X\times_SS'$ with projections $g:X'\to X$ and $X'\to S'$, the canonical map $g^*\Omega_{X/S}\to\Omega_{X'/S'}$, $1\otimes\mathrm d_{X/S}(a)\mapsto\mathrm d_{X'/S'}(a\circ g)$, is an isomorphism of $\mathcal O_{X'}$-modules, natural in the base-change data.

[F2] [[lem-differential-of-morphism-via-cotangent-map]]: a morphism $\varphi:X\to Y$ of $S$-schemes has a unique $\mathcal O_X$-linear differential $\mathrm d\varphi:\varphi^*\Omega_{Y/S}\to\Omega_{X/S}$ with $\mathrm d\varphi(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ\varphi)$; for $\varphi=\operatorname{id}_X$ it is the canonical identification $\operatorname{id}_X^*\Omega_{X/S}\cong\Omega_{X/S}$, for $X\xrightarrow{\ \varphi\ }Y\xrightarrow{\ \psi\ }Z$ over $S$ the composite $\varphi^*\psi^*\Omega_{Z/S}\to\varphi^*\Omega_{Y/S}\to\Omega_{X/S}$, formed with the canonical identification $\varphi^*\psi^*\cong(\psi\circ\varphi)^*$, equals $\mathrm d(\psi\circ\varphi)$, and at a point $x\in X$ with $\varphi(x)=y$ the differential induces a $\kappa(x)$-linear map $(\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\kappa(y))\otimes_{\kappa(y)}\kappa(x)\to\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x)$.

[F3] [[thm-cotangent-space-maximal-ideal-quotient]]: at a $k$-rational point $e$ of a $k$-scheme, the map $\mathfrak m_e/\mathfrak m_e^2\to\Omega_{X/k}\otimes_{\mathcal O_{X,e}}\kappa(e)$ is an isomorphism of $k$-vector spaces; for $e\in G(k)$ this reads $e^*\Omega_{G/k}\cong\mathfrak m_e/\mathfrak m_e^2$.

[F4] [[def-pullback-module-ringed-spaces]]: for a morphism $g$ of ringed spaces and an $\mathcal O_Y$-module $\mathcal G$ one has $g^*\mathcal G=\mathcal O_X\otimes_{g^{-1}\mathcal O_Y}g^{-1}\mathcal G$, so for $g=f:G\to\operatorname{Spec}k$, where $f^{-1}\mathcal O_{\operatorname{Spec}k}=k$, the pullback of a $k$-vector space $V$ is $\mathcal O_G\otimes_kV$.

[F5] [[def-zariski-tangent-space-point]]: if $X$ is locally of finite type over $k$ and $x\in X$, the intrinsic cotangent space $\mathfrak m_x/\mathfrak m_x^2$ is finite-dimensional, its dual $T_xX$ is finite-dimensional and equals $T_{X/k,x}$ at a $k$-rational point.

[F6] [[thm-fibre-products-of-schemes-exist]]: the fibre products below exist, so $G\times_kG$ is a $k$-scheme with projections $p_0,p_1$.

[F7] [[def-group-scheme-over-a-field]]: the group laws satisfy $m\circ(e\times\operatorname{id})=m\circ(\operatorname{id}\times e)=\operatorname{id}$, $m\circ(i,\operatorname{id})=e\circ p=m\circ(\operatorname{id},i)$, and associativity on $G^3$.

## Proof

1.1 Notation and the shearing automorphism. Put $W=G\times_kG$ with projections $p_0,p_1$ and consider the shearing map $\tau:W\to W$, $\tau(g,h)=(m(g,h),h)$. Then $p_1\circ\tau=p_1$, and $\tau$ is an isomorphism over $G$ with inverse $\tau^{-1}(u,h)=(m(u,i(h)),h)$: indeed $\tau(\tau^{-1}(u,h))=(m(m(u,i(h)),h),h)=(u,h)$ and $\tau^{-1}(\tau(g,h))=(m(m(g,h),i(h)),h)=(g,h)$ by associativity and the inverse laws of [F7]. Moreover $m=p_0\circ\tau$. The map $s=(e\circ f,\operatorname{id}_G):G\to W$ satisfies $m\circ s=\operatorname{id}_G$ and $p_0\circ s=e\circ f$ by the identity law of [F7]. [F6, F7, given, construct]

1.2 Base change along the structure morphism. Apply [F1] to the Cartesian square with $X=G$, $S=\operatorname{Spec}k$, $S'=G$ and $S'\to S=f$. Its fibre product is $W=G\times_kG$, the projection to $X$ is $p_0$, and the structure map to $S'$ is $p_1$. Thus $p_0^*\Omega_{G/k}\cong\Omega_{W/G}$ canonically, where the relative differentials on the right are taken for $p_1$. [F1, given]

2.1 Differentials of automorphisms are isomorphisms. Let $\varphi:X\to Y$ be an isomorphism of $G$-schemes with inverse $\psi$; for the application below $X=Y=W$ over $G$ and $\varphi=\tau$ with $\psi=\tau^{-1}$ by step 1.1. By the identity clause of [F2], $\mathrm d(\operatorname{id}_X)$ is the canonical identification $\operatorname{id}_X^*\Omega_{X/G}\cong\Omega_{X/G}$, and by the chain-rule clause applied to $X\xrightarrow{\varphi}Y\xrightarrow{\psi}X$ the composite $\mathrm d\varphi\circ(\varphi^*\mathrm d\psi)$, formed with the canonical identification $\varphi^*\psi^*\cong(\psi\circ\varphi)^*$, equals $\mathrm d(\psi\circ\varphi)=\mathrm d(\operatorname{id}_X)$; applying the chain rule to the reversed composite gives $\mathrm d\psi\circ(\psi^*\mathrm d\varphi)=\mathrm d(\operatorname{id}_Y)$. Hence $\mathrm d\varphi$ and $\mathrm d\psi$ are mutually inverse under the canonical pullback identifications, so $\mathrm d\varphi$ is an isomorphism. [F2, step 1.1]

3.1 Comparison of $m$ with the first projection. The canonical identification $\tau^*p_0^*\cong(p_0\circ\tau)^*$ of [F2], together with $m=p_0\circ\tau$ from step 1.1, identifies $m^*\Omega_{G/k}\cong\tau^*p_0^*\Omega_{G/k}$; pulling the isomorphism of step 1.2 back along $\tau$ gives $\tau^*p_0^*\Omega_{G/k}\cong\tau^*\Omega_{W/G}$, and step 2.1 applied to $\varphi=\tau$ gives $\tau^*\Omega_{W/G}\cong\Omega_{W/G}$. Combining with step 1.2 a second time yields the canonical isomorphism $m^*\Omega_{G/k}\cong p_0^*\Omega_{G/k}$. [F1, F2, step 1.2, step 2.1]

4.1 Pulling back along the identity section. The composite $m\circ s=\operatorname{id}_G$ and the chain-rule identification $s^*m^*\cong(m\circ s)^*$ of [F2], followed by the identity clause for $\operatorname{id}_G$, identify $s^*m^*\Omega_{G/k}\cong\Omega_{G/k}$; likewise $p_0\circ s=e\circ f$ identifies $s^*p_0^*\Omega_{G/k}\cong(e\circ f)^*\Omega_{G/k}=f^*e^*\Omega_{G/k}$. Applying $s^*$ to step 3.1 therefore yields the canonical isomorphism $\Omega_{G/k}\cong f^*e^*\Omega_{G/k}$ of invariant differentials. Now $e^*\Omega_{G/k}\cong\mathfrak m_e/\mathfrak m_e^2$ by [F3], so by [F4] the module $\Omega_{G/k}\cong f^*e^*\Omega_{G/k}\cong\mathcal O_G\otimes_k(\mathfrak m_e/\mathfrak m_e^2)$ is free. Its rank is $\dim_k(\mathfrak m_e/\mathfrak m_e^2)$, which equals $\dim_k\operatorname{Lie}(G)$: the cotangent space $\mathfrak m_e/\mathfrak m_e^2$ is finite-dimensional, its dual $\operatorname{Lie}(G)=T_{G/k,e}$ is the intrinsic tangent space $T_eG$ at the $k$-rational point $e$ and hence has the same finite dimension, by [F5]. [F2, F3, F4, F5, step 3.1]

5.1 Left translations. Let $x\in G(k)$ and let $\ell_x:G\to G$, $\ell_x(g)=m(x,g)$, be left translation by $x$; then $\ell_x$ is an isomorphism with inverse $\ell_{x^{-1}}$, and $\ell_x\circ e=x$ by the identity law of [F7]. By step 2.1 applied to $\varphi=\ell_x$ (an isomorphism of $k$-schemes, the base being $\operatorname{Spec}k$), the differential $\mathrm d\ell_x:\ell_x^*\Omega_{G/k}\to\Omega_{G/k}$ is an isomorphism; taking the induced map on the fibre at $e$ in the sense of the fibre clause of [F2], and using that $\ell_x(e)=x$ so that the source fibre is $\Omega_{G/k}\otimes_{\mathcal O_{G,x}}\kappa(x)$, it identifies $\Omega_{G/k}\otimes_{\mathcal O_{G,x}}\kappa(x)$ with its target $\Omega_{G/k}\otimes_{\mathcal O_{G,e}}\kappa(e)=\mathfrak m_e/\mathfrak m_e^2$, the identification of the target with the cotangent space at the identity being step 4.1. [F2, F3, F7, step 2.1, step 4.1] ∎

## Remarks

The same shearing argument gives $\Omega_{G/S}\cong f^*e^*\Omega_{G/S}$ for any group scheme over a base scheme. In the finite-type field case considered here, the finite-dimensional cotangent space makes this module free. The proof uses no choice principle: the shearing map, the section $s$ and the left translations are explicit formulae.
