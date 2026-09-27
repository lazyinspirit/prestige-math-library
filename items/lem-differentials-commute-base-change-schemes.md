---
id: "lem-differentials-commute-base-change-schemes"
kind: "lemma"
title: "Relative differentials commute with scheme base change"
status: draft
origin: "pipeline"
deps: ["lem-differentials-base-change", "def-sheaf-relative-differentials", "lem-sheaf-differentials-affine-compatibility", "thm-affine-fibre-product-tensor-ring", "def-pullback-module-ringed-spaces", "thm-sheaf-differentials-universal-property", "thm-pullback-pushforward-module-adjunction", "def-stalk-of-presheaf", "def-scheme-over-base"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.33.10 (tag 01UY)"
      url: "https://stacks.math.columbia.edu/tag/01UY"
    - title: "Vakil 22.2.K, p.583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $X\to S$ be a morphism of schemes and let $S'\to S$ be a morphism, with
fibre product
$$X'=X\times_S S',\qquad g\colon X'\longrightarrow X,\qquad X'\longrightarrow S'.$$
Then the canonical map
$$g^*\Omega_{X/S}\longrightarrow\Omega_{X'/S'},\qquad 1\otimes\mathrm d_{X/S}(a)\longmapsto\mathrm d_{X'/S'}(a\circ g),$$
is an isomorphism of $\mathcal O_{X'}$-modules. It is natural in the
base-change data and compatible with the universal derivations of $X/S$ and
$X'/S'$; no flatness, finiteness, separatedness or tor-independence hypothesis
is imposed on $S'\to S$ or on $X\to S$.

## Facts & Assumptions

**Given:** Morphisms of schemes $X\to S$ and $S'\to S$, with fibre product $X'=X\times_SS'$ and projections $g\colon X'\to X$, $X'\to S'$.

[F1] [[lem-differentials-base-change]]: for ring maps $A\to B$ and $A\to A'$ with $B'=B\otimes_AA'$, the canonical $B'$-linear map $\Omega_{B/A}\otimes_BB'\to\Omega_{B'/A'}$, $\mathrm db\otimes a'\mapsto a'\mathrm d(b\otimes1)$, is an isomorphism.

[F2] [[thm-affine-fibre-product-tensor-ring]]: for affine opens $U=\operatorname{Spec}B\subseteq X$ over $V=\operatorname{Spec}A\subseteq S$ and $W=\operatorname{Spec}A'\subseteq S'$ over $V$, the open subscheme $U\times_VW\subseteq X'$ is affine with ring $B\otimes_AA'$.

[F3] [[def-sheaf-relative-differentials]]: $\Omega_{X/S}$ carries the universal $S$-derivation $\mathrm d_{X/S}$, an $S$-derivation of $\mathcal O_X$ kills the image of the structure map from $\mathcal O_S$, and $\Omega_{X'/S'}$ is defined analogously.

[F4] [[thm-sheaf-differentials-universal-property]]: composition with $\mathrm d_{X/S}$ is a natural bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong\operatorname{Der}_S(\mathcal O_X,\mathcal F)$ for every $\mathcal O_X$-module $\mathcal F$.

[F5] [[thm-pullback-pushforward-module-adjunction]]: there is a natural bijection $\operatorname{Hom}_{\mathcal O_{X'}}(g^*\mathcal G,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_X}(\mathcal G,g_*\mathcal F)$, and the map corresponding to $u$ sends $1\otimes s$ to $u(s)$.

[F6] [[def-pullback-module-ringed-spaces]]: $g^*\mathcal G=\mathcal O_{X'}\otimes_{g^{-1}\mathcal O_X}g^{-1}\mathcal G$, and a local section $a$ of $\mathcal O_X$ acts on $g^*\mathcal G$ as $a\circ g$.

[F7] [[lem-sheaf-differentials-affine-compatibility]] and [[def-stalk-of-presheaf]]: on an affine chart, $\Omega_{X/S}$ is the sheaf attached to the relevant algebraic module with the restriction maps given by localization, and stalks are filtered colimits of sections over basic opens.

## Proof

**Proof technique:** direct.

1.1 The canonical map. The composite $D\colon\mathcal O_X\to g_*\mathcal O_{X'}\xrightarrow{g_*\mathrm d_{X'/S'}}g_*\Omega_{X'/S'}$ is an $S$-derivation of $\mathcal O_X$ into the $\mathcal O_X$-module $g_*\Omega_{X'/S'}$: it is additive, satisfies Leibniz for the $\mathcal O_X$-module structure transported along $g^{\sharp}$, and kills the image of $\mathcal O_S$, because that image is mapped into the image of the $\mathcal O_{S'}$-structure of $X'$, which $\mathrm d_{X'/S'}$ annihilates by [F3]. By [F4] there is a unique $\mathcal O_X$-linear $u\colon\Omega_{X/S}\to g_*\Omega_{X'/S'}$ with $u(\mathrm d_{X/S}(a))=\mathrm d_{X'/S'}(a\circ g)$, and by [F5] there is a unique $\mathcal O_{X'}$-linear map $\gamma\colon g^*\Omega_{X/S}\to\Omega_{X'/S'}$ sending $1\otimes\mathrm d_{X/S}(a)$ to $\mathrm d_{X'/S'}(a\circ g)$. [F3, F4, F5, F6]

2.1 Affine charts compute $\gamma$. Let $x'\in X'$ have image $x\in X$ and $s\in S$, and choose an affine open $V=\operatorname{Spec}A\subseteq S$ containing $s$; then choose an affine open $U=\operatorname{Spec}B\subseteq X$ containing $x$ with image in $V$ and an affine open $W=\operatorname{Spec}A'\subseteq S'$ containing the image of $x'$ with image in $V$. By [F2], $U':=U\times_VW=\operatorname{Spec}B'$ for $B'=B\otimes_AA'$ is an open affine neighbourhood of $x'$. By [F7], $\Omega_{X/S}|_U$ and $\Omega_{X'/S'}|_{U'}$ are attached to $\Omega_{B/A}$ and $\Omega_{B'/A'}$. If $x'$ corresponds to $\mathfrak p'\subseteq B'$ and $x$ to $\mathfrak p=\mathfrak p'\cap B$, the pullback definition [F6] and stalk construction [F7] give $(g^*\Omega_{X/S})_{x'}\cong(\Omega_{B/A})_{\mathfrak p}\otimes_{B_{\mathfrak p}}B'_{\mathfrak p'}\cong(B'\otimes_B\Omega_{B/A})_{\mathfrak p'}$. Hence the pullback is the sheaf attached to $B'\otimes_B\Omega_{B/A}$ on $U'$. The map $\gamma$ sends $1\otimes\mathrm db$ to $\mathrm d(b\otimes1)$ by step 1.1, so on these stalks it is the localisation of the canonical isomorphism of [F1]. [F1, F2, F6, F7, step 1.1]

3.1 $\gamma$ is an isomorphism. Every point $x'\in X'$ lies in a chart $U'$ as in step 2.1, on which $\gamma|_{U'}$ is the isomorphism of [F1]; a morphism of sheaves whose restriction to each member of an open cover is an isomorphism is an isomorphism (equivalently, its stalk maps are isomorphisms), and forming stalks of the sheaves attached to $B'$-modules at points of $U'$ is compatible with the identifications of step 2.1. Hence $\gamma$ is an isomorphism of $\mathcal O_{X'}$-modules, with the asserted description on generators. [F1, step 2.1]

4.1 Naturality and hypotheses. The map $\gamma$ was produced from the universal properties of [F4] and the adjunction [F5] applied to the given morphisms $S'\to S$ and $X\to S$; replacing the base-change data by a morphism of squares replaces $\gamma$ by the corresponding pullback of $\gamma$, and on affine charts this is the naturality statement of [F1]. Only the existence of the fibre product and the affine descriptions of $\Omega$ were used, so no flatness, finiteness, separatedness or tor-independence hypothesis enters. [F1, F4, F5, step 2.1, step 3.1] ∎
