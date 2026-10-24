---
id: "thm-conormal-sequence-closed-immersion"
kind: "theorem"
title: "Conormal sequence for a closed immersion"
status: published
origin: "pipeline"
deps: ["thm-conormal-exact-sequence-algebra", "lem-sheaf-differentials-affine-compatibility", "lem-differentials-localization", "def-pullback-module-ringed-spaces", "thm-exactness-of-sheaves-stalkwise", "def-closed-immersion-schemes", "def-ideal-sheaf", "def-sheaf-tensor-product", "def-kernel-cokernel-image-sheaves", "thm-sheaf-differentials-universal-property", "thm-pullback-pushforward-module-adjunction", "lem-differentials-polynomial-algebra-free", "def-scheme-over-base", "def-stalk-of-presheaf", "def-inverse-image-presheaf-and-sheaf"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.33.15 (tag 01UT)"
      url: "https://stacks.math.columbia.edu/tag/01UT"
    - title: "Vakil 22.2.12 and 22.2.15, pp.579-581"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $S$ be a scheme, let $Y$ be an $S$-scheme and let $i\colon X\to Y$ be a
morphism of $S$-schemes which is a closed immersion
([[def-closed-immersion-schemes]], [[def-scheme-over-base]]). Let

$$\mathcal I:=\ker\bigl(\mathcal O_Y\longrightarrow i_*\mathcal O_X\bigr)$$

be its ideal sheaf ([[def-ideal-sheaf]]), let $\mathcal I^2\subseteq\mathcal O_Y$
be the image of the multiplication map
$\mathcal I\otimes_{\mathcal O_Y}\mathcal I\to\mathcal O_Y$
([[def-sheaf-tensor-product]], [[def-kernel-cokernel-image-sheaves]]), and put
$\mathcal Q:=\operatorname{coker}(\mathcal I^2\hookrightarrow\mathcal I)$ as a sheaf on $Y$.
In the sequence below the notation $\mathcal I/\mathcal I^2$ means
$i^{-1}\mathcal Q$, a sheaf on $X$
([[def-inverse-image-presheaf-and-sheaf]]).
The ideal $i^{-1}\mathcal I$ annihilates it, so its
$i^{-1}\mathcal O_Y$-action factors through
$i^{-1}\mathcal O_Y/i^{-1}\mathcal I\cong\mathcal O_X$.
This last identification follows on stalks from the closed immersion:
$\mathcal O_{X,x}=\mathcal O_{Y,i(x)}/\mathcal I_{i(x)}$. Then the sequence of
$\mathcal O_X$-modules

$$\mathcal I/\mathcal I^2\xrightarrow{\ \alpha\ }i^*\Omega_{Y/S} \xrightarrow{\ \beta\ }\Omega_{X/S}\longrightarrow 0$$

is exact, where $\alpha$ sends the class of a local section $t$ of $\mathcal I$
to $1\otimes\mathrm d_{Y/S}(t)$, and $\beta$ is the pullback of the universal
$S$-derivation, characterised by
$\beta\bigl(1\otimes\mathrm d_{Y/S}(g)\bigr)=\mathrm d_{X/S}(g\circ i)$ for
local sections $g$ of $\mathcal O_Y$. The map $\alpha$ is **not** asserted to be
injective, and it is not injective in general; no finiteness, flatness or
separatedness hypothesis is imposed on $i$ or on the structure morphisms.

## Facts & Assumptions

**Given:** A scheme $S$, an $S$-scheme $Y$, and a closed immersion of $S$-schemes $i\colon X\to Y$.

[F1] [[def-closed-immersion-schemes]]: a morphism $i\colon X\to Y$ is a closed immersion if its underlying map is a homeomorphism onto a closed subset and $\mathcal O_Y\to i_*\mathcal O_X$ is surjective.

[F2] [[def-pullback-module-ringed-spaces]]: the pullback of an $\mathcal O_Y$-module $\mathcal G$ is $i^*\mathcal G=\mathcal O_X\otimes_{i^{-1}\mathcal O_Y}i^{-1}\mathcal G$; the canonical map $i^{-1}\mathcal G\to i^*\mathcal G$, $s\mapsto1\otimes s$, is $i^{-1}\mathcal O_Y$-linear, and $\mathcal O_X$ is an $i^{-1}\mathcal O_Y$-algebra, so a local section $g$ of $\mathcal O_Y$ acts on $i^*\mathcal G$ as $g\circ i$.

[F3] [[def-closed-immersion-schemes]], [[def-stalk-of-presheaf]]: for a closed immersion and $x\in X$ with $y=i(x)$, the surjection $\mathcal O_Y\to i_*\mathcal O_X$ induces a surjection $\mathcal O_{Y,y}\to\mathcal O_{X,x}$ with kernel $\mathcal I_y$. Indeed, $i$ is a homeomorphism onto its closed image, so neighbourhoods of $y$ restrict to a cofinal system of neighbourhoods of $x$ in $X$.

[F4] [[lem-sheaf-differentials-affine-compatibility]] and [[lem-differentials-localization]]: for a ring map $A\to B$ with induced morphism $\operatorname{Spec}B\to\operatorname{Spec}A$, the sheaf $\Omega_{X/S}$ is associated to $\Omega_{B/A}$, naturally in the ring map; localizing both $B$ at a prime and $A$ at its inverse-image prime identifies its stalk with the differentials of the resulting local rings.

[F5] [[thm-conormal-exact-sequence-algebra]]: for a ring map $A\to P$, an ideal $I\subseteq P$ and $B=P/I$, the sequence $I/I^2\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact, the first map sending the class of $t$ to $1\otimes\mathrm dt$ and the second sending $1\otimes\mathrm dp$ to $\mathrm d(p+I)$.

[F6] [[thm-exactness-of-sheaves-stalkwise]]: a sequence of sheaves of abelian groups is exact if and only if all its stalk sequences are exact.

[F7] [[thm-sheaf-differentials-universal-property]]: for every $\mathcal O_X$-module $\mathcal F$, composition with $\mathrm d_{X/S}$ is a natural bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong\operatorname{Der}_S(\mathcal O_X,\mathcal F)$.

[F8] [[thm-pullback-pushforward-module-adjunction]]: for a morphism of ringed spaces $f$ there is a natural bijection $\operatorname{Hom}_{\mathcal O_X}(f^*\mathcal G,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_Y}(\mathcal G,f_*\mathcal F)$; the map corresponding to $u\colon\mathcal G\to f_*\mathcal F$ sends $1\otimes s$ to the germ $u(s)$.

[F10] [[lem-differentials-polynomial-algebra-free]]: for $P=A[x_1,\dots,x_n]$ the module $\Omega_{P/A}$ is free on $\mathrm dx_1,\dots,\mathrm dx_n$.

[F11] [[def-kernel-cokernel-image-sheaves]] and [[def-stalk-of-presheaf]]: images and cokernels of morphisms of sheaves are computed by sheafifying the objectwise constructions, and the stalk at a point is the filtered colimit of the sections over the open neighbourhoods of that point.

## Proof

**Proof technique:** direct.

1.1 The map $\alpha$. For a local section $t$ of $\mathcal I$ over an open $V\subseteq Y$ let $\alpha(t)\in(i^*\Omega_{Y/S})(i^{-1}V)$ be the image of $\mathrm d_{Y/S}(t)$ under the canonical map $i^{-1}\Omega_{Y/S}\to i^*\Omega_{Y/S}$ of [F2], i.e. $1\otimes\mathrm d_{Y/S}(t)$. For a local section $g$ of $\mathcal O_Y$ over $V$ one has $\mathrm d(gt)=g\,\mathrm dt+t\,\mathrm dg$, hence $$1\otimes\mathrm d(gt)=(g\circ i)\,(1\otimes\mathrm dt)+(t\circ i)\,(1\otimes\mathrm dg)=(g\circ i)\,(1\otimes\mathrm dt)$$ because $t$ lies in the kernel of $\mathcal O_Y\to i_*\mathcal O_X$, so that $t\circ i=0$; thus these formulas define an $\mathcal O_Y$-linear map $\mathcal I\to i_*i^*\Omega_{Y/S}$. For local sections $t,t'$ of $\mathcal I$ one has $1\otimes\mathrm d(tt')=(t\circ i)(1\otimes\mathrm dt')+(t'\circ i)(1\otimes\mathrm dt)=0$, so $\alpha$ kills $\mathcal I^2$, and since $\mathcal I$ annihilates both $\mathcal I/\mathcal I^2$ and the pullback (a local section $t$ of $\mathcal I$ acts on $i^*\Omega_{Y/S}$ as $t\circ i=0$), the descended formulas on germs define a map $i^{-1}\mathcal Q\to i^*\Omega_{Y/S}$. It is linear over $i^{-1}\mathcal O_Y$ and hence over its quotient $\mathcal O_X$, so this is the required $\mathcal O_X$-linear $\alpha$. [F1, F2, given]

1.2 The map $\beta$. Since $Y$ and $X$ are $S$-schemes and $i$ is an $S$-morphism, the composite $D\colon\mathcal O_Y\to i_*\mathcal O_X\to i_*\Omega_{X/S}$ of the structure map $i^{\sharp}$ with $i_*\mathrm d_{X/S}$ is additive, satisfies Leibniz for the $\mathcal O_Y$-module structure of $i_*\Omega_{X/S}$ transported along $i^{\sharp}$, and kills the image of $\mathcal O_S$: the image of $g^{-1}\mathcal O_S\to\mathcal O_Y\to i_*\mathcal O_X$ is the image of $f^{-1}\mathcal O_S\to\mathcal O_X$ for the structure morphism $f\colon X\to S$, which $\mathrm d_{X/S}$ annihilates. Hence $D$ is an $S$-derivation of $\mathcal O_Y$ into $i_*\Omega_{X/S}$, and [F7] applied to the $S$-scheme $Y$ gives a unique $\mathcal O_Y$-linear map $u\colon\Omega_{Y/S}\to i_*\Omega_{X/S}$ with $u(\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ i)$. Let $\beta\colon i^*\Omega_{Y/S}\to\Omega_{X/S}$ be the $\mathcal O_X$-linear map corresponding to $u$ under the adjunction [F8]; it satisfies $\beta(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ i)$ by the description of the correspondence, and it is unique with this property. [F7, F8, given]

2.1 The composite vanishes. For a local section $t$ of $\mathcal I$ one has $\beta(\alpha(t))=\beta(1\otimes\mathrm dt)=\mathrm d_{X/S}(t\circ i)=\mathrm d_{X/S}(0)=0$ by the characterisations of steps 1.1 and 1.2, so the image of $\alpha$ is contained in the kernel of $\beta$. [step 1.1, step 1.2]

2.2 Stalkwise algebra. Fix $x\in X$, write $y=i(x)$ and $s\in S$ for its image, and choose affine neighbourhoods $W=\operatorname{Spec}A$ of $s$ and $V=\operatorname{Spec}P$ of $y$ with $V\to W$. Put $R=\mathcal O_{S,s}$, $T=\mathcal O_{Y,y}$, $J=\mathcal I_y$, and $C=\mathcal O_{X,x}$. By [F3], $C=T/J$; this uses only the defining sheaf surjection of a closed immersion, without identifying the entire inverse image of $V$ with an affine quotient. The stalk construction and [F4], with its naturality and the simultaneous base/source localization in [[lem-differentials-localization]], identify $\Omega_{Y/S,y}\cong\Omega_{T/R}$ and $\Omega_{X/S,x}\cong\Omega_{C/R}$: choose an affine neighbourhood of $x$ inside $i^{-1}(V)$ for the latter, and localize its coordinate ring at $x$ and $A$ at $s$. By [F11], stalks of image and cokernel sheaves commute with the filtered neighbourhood colimit, so $(i^{-1}\mathcal Q)_x\cong J/J^2$; multiplication commutes with this colimit. By [F2], $(i^*\Omega_{Y/S})_x\cong C\otimes_T\Omega_{T/R}$. Under these identifications the maps of steps 1.1 and 1.2 are exactly the algebraic maps $J/J^2\to C\otimes_T\Omega_{T/R}\to\Omega_{C/R}$ in [F5]. [F2, F3, F4, F5, F11, step 1.1, step 1.2]

2.3 Failure of injectivity. Take $A=k$ a field, $P=k[x]$, $I=(x^2)$ and $B=k[x]/(x^2)$, so that $I/I^2=(x^2)/(x^4)$, in which the class of $x^3$ is nonzero. By [F10] we have $B\otimes_P\Omega_{P/A}=B\,\mathrm dx$ with $\mathrm dx$ a free generator, and $\alpha([x^3])=1\otimes\mathrm d(x^3)=3x^2(1\otimes\mathrm dx)=0$, because $x^2=0$ in $B$: the class of $x^3$ lies in the kernel of $\alpha$ and is nonzero. Hence the left map of the conormal sequence is not injective in general, and in particular no injectivity is claimed. [F5, F10, step 1.1]

3.1 Surjectivity of $\beta$. By [F6] surjectivity of a morphism of sheaves may be checked on stalks. At every $x\in X$, step 2.2 identifies $\beta_x$ with the surjective second map of [F5] for $R\to T\to C$. Hence $\beta$ is surjective. [F5, F6, step 2.2]

3.2 Exactness at the middle term. At every $x\in X$, step 2.2 identifies the stalk sequence with the algebraic conormal sequence for $R\to T\to C=T/J$. It is exact at the middle term by [F5], so $\operatorname{im}\alpha_x=\ker\beta_x$. Since $x$ was arbitrary, [F6] gives $\operatorname{im}\alpha=\ker\beta$ as subsheaves of $i^*\Omega_{Y/S}$. [F5, F6, step 2.2]

4.1 Conclusion. Steps 1.1 and 1.2 construct $\mathcal O_X$-linear maps $\alpha$ and $\beta$ with the asserted descriptions, step 2.1 shows $\beta\circ\alpha=0$, step 3.1 shows that $\beta$ is surjective and step 3.2 that its kernel is exactly the image of $\alpha$; step 2.3 exhibits a case where $\alpha$ has nonzero kernel. Hence the displayed sequence of $\mathcal O_X$-modules is exact and its left map is not generally injective, with no finiteness, flatness or separatedness hypothesis used anywhere. [step 2.1, step 3.1, step 3.2, step 2.3] ∎
