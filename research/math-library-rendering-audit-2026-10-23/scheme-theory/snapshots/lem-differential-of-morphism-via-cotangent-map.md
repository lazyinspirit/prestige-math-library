---
id: "lem-differential-of-morphism-via-cotangent-map"
kind: "lemma"
title: "Differential of an S-morphism"
status: published
origin: "pipeline"
deps: ["thm-transitivity-sequence-schemes", "def-relative-cotangent-space", "def-pullback-module-ringed-spaces", "thm-sheaf-differentials-universal-property", "def-sheaf-relative-differentials", "thm-pullback-pushforward-module-adjunction", "def-dual-numbers-scheme"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.33.8 (tag 01UW)"
      url: "https://stacks.math.columbia.edu/tag/01UW"
    - title: "Vakil 22.2.K, p.583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $S$ be a scheme and let $f\colon X\to Y$ be a morphism of $S$-schemes. Then
the universal derivations of $X/S$ and $Y/S$ induce a unique $\mathcal O_X$-linear
map
$$\mathrm df\colon f^*\Omega_{Y/S}\longrightarrow\Omega_{X/S},\qquad 1\otimes\mathrm d_{Y/S}(g)\longmapsto\mathrm d_{X/S}(g\circ f),$$
the **differential of $f$**. It satisfies:

1. (identity) for $f=\mathrm{id}_X$ the map $\mathrm df$ is the canonical
   identification $\mathrm{id}_X^*\Omega_{X/S}\cong\Omega_{X/S}$;
2. (chain rule) for $X\xrightarrow{f}Y\xrightarrow{g}Z$ over $S$ the composite
   $f^*g^*\Omega_{Z/S}\to f^*\Omega_{Y/S}\to\Omega_{X/S}$, formed with the
   canonical identification $f^*g^*\cong(g\circ f)^*$, equals
   $\mathrm d(g\circ f)$;
3. (fibres) at each $x\in X$, with $y=f(x)$, the map $\mathrm df$ induces a
   $\kappa(x)$-linear map
   $$(\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\kappa(y)) \otimes_{\kappa(y)}\kappa(x) \longrightarrow\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x).$$
   Dualising over $\kappa(x)$ gives a $\kappa(x)$-linear tangent map
   $$T_{X/S,x}\longrightarrow \operatorname{Hom}_{\kappa(x)}\bigl( (\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\kappa(y)) \otimes_{\kappa(y)}\kappa(x),\kappa(x)\bigr).$$
   If $\kappa(y)=\kappa(x)$, this target is $T_{Y/S,y}$.

No finiteness, flatness or separatedness hypothesis is imposed.

## Facts & Assumptions

**Given:** A scheme $S$ and a morphism $f\colon X\to Y$ of $S$-schemes.

[F1] [[thm-transitivity-sequence-schemes]]: the first arrow $\gamma\colon f^*\Omega_{Y/S}\to\Omega_{X/S}$ of the transitivity sequence is the unique $\mathcal O_X$-linear map with $\gamma(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ f)$.

[F2] [[def-relative-cotangent-space]] and [[def-pullback-module-ringed-spaces]]: the relative cotangent space at $x$ is $\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x)$, and the source stalk of $\mathrm df$ is $\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\mathcal O_{X,x}$; its fibre is the cotangent space at $y$ extended along $\kappa(y)\to\kappa(x)$.

[F3] [[def-pullback-module-ringed-spaces]]: the composite of pullbacks is canonically identified with the pullback along the composite, $f^*g^*\cong(g\circ f)^*$, by associativity of the sheaf tensor products defining pullback; on generators $1\otimes1\otimes s$ the identification is the identity.

[F4] [[thm-sheaf-differentials-universal-property]]: a map out of $\Omega$ is determined by its values on the universal differentials, since these generate the module.

[F5] [[def-sheaf-relative-differentials]]: the modules $\Omega_{X/S}$ and $\Omega_{Y/S}$ and their universal derivations exist for arbitrary morphisms and kill the images of the structure maps from $\mathcal O_S$.

## Proof

**Proof technique:** direct.

1.1 Construction. By [F1], applied to the $S$-morphism $f$, there is a unique $\mathcal O_X$-linear $\mathrm df\colon f^*\Omega_{Y/S}\to\Omega_{X/S}$ with $\mathrm df(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ f)$ for local sections $g$ of $\mathcal O_Y$; it is obtained by applying the universal property [F4] to the $S$-derivation $\mathcal O_Y\to f_*\Omega_{X/S}$, $g\mapsto\mathrm d_{X/S}(g\circ f)$, and then the adjunction of [[thm-pullback-pushforward-module-adjunction]], and it is natural in the data $(X,Y,f)$ by construction. [F1, F4, F5]

2.1 Identity. For $f=\mathrm{id}_X$ the map sends $1\otimes\mathrm d_{X/S}(g)$ to $\mathrm d_{X/S}(g)$; since the elements $\mathrm d_{X/S}(g)$ generate $\Omega_{X/S}$ over $\mathcal O_X$ by [F4], this is the canonical identification $\mathrm{id}_X^*\Omega_{X/S}\cong\Omega_{X/S}$. [F4, step 1.1]

2.2 Chain rule. Let $X\xrightarrow{f}Y\xrightarrow{g}Z$ be morphisms of $S$-schemes. Both $\mathrm d(g\circ f)$ and the composite $\mathrm df\circ f^*(\mathrm dg)$ are $\mathcal O_X$-linear maps $(g\circ f)^*\Omega_{Z/S}\to\Omega_{X/S}$ (the composite being formed with the identification [F3]), and on a generator $1\otimes1\otimes\mathrm d_{Z/S}(h)$ both take the value $\mathrm d_{X/S}(h\circ g\circ f)$: the composite because $\mathrm df(1\otimes\mathrm d_{Y/S}(h\circ g))=\mathrm d_{X/S}(h\circ g\circ f)$ and $\mathrm dg(1\otimes\mathrm d_{Z/S}(h))=\mathrm d_{Y/S}(h\circ g)$, and $\mathrm d(g\circ f)$ by its definition. As the generators $1\otimes1\otimes\mathrm d_{Z/S}(h)$ generate the source over $\mathcal O_X$, the two maps agree. [F3, F4, step 1.1]

2.3 Fibres and the tangent map. Fix $x\in X$ and put $y=f(x)$. By [F2], the source stalk of $\mathrm df$ is $\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\mathcal O_{X,x}$. Tensoring it with $\kappa(x)$ gives $\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\kappa(x)$, canonically $(\Omega_{Y/S,y}\otimes_{\mathcal O_{Y,y}}\kappa(y))\otimes_{\kappa(y)}\kappa(x)$, because $\mathcal O_{Y,y}\to\kappa(x)$ factors through the residue field $\kappa(y)$. Thus the fibre of $\mathrm df$ is the $\kappa(x)$-linear cotangent map displayed in the statement. Dualising over $\kappa(x)$ gives the stated map from $T_{X/S,x}$ to the $\kappa(x)$-dual of the extended cotangent space at $y$. When the residue-field map is an isomorphism, this target is $T_{Y/S,y}$; without that hypothesis, the latter is only a $\kappa(y)$-vector space and cannot be the target of a $\kappa(x)$-linear map. [F2, step 1.1]

3.1 Conclusion. Step 1.1 gives the asserted map and its characterisation, steps 2.1 and 2.2 give the identity and chain rules, and step 2.3 gives the fibre and tangent maps; nothing beyond the universal property of $\Omega$ and the functoriality of pullback and of extension of scalars was used, so no finiteness, flatness or separatedness hypothesis enters. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
