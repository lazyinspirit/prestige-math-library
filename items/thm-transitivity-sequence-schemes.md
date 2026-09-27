---
id: "thm-transitivity-sequence-schemes"
kind: "theorem"
title: "Transitivity sequence for schemes"
status: draft
origin: "pipeline"
deps: ["thm-transitivity-exact-sequence-differentials", "lem-sheaf-differentials-affine-compatibility", "def-pullback-module-ringed-spaces", "thm-exactness-of-sheaves-stalkwise", "thm-sheaf-differentials-universal-property", "thm-pullback-pushforward-module-adjunction", "thm-localisation-of-modules-is-exact", "def-sheaf-relative-differentials", "def-scheme-over-base", "lem-differentials-polynomial-algebra-free", "cor-jacobian-presentation-differentials", "def-stalk-of-presheaf"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.33.9 (tag 01UX)"
      url: "https://stacks.math.columbia.edu/tag/01UX"
    - title: "Vakil 22.2.9-11, pp.578-579"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $X\xrightarrow{\ f\ }Y\xrightarrow{\ h\ }S$ be morphisms of schemes. Then the
sequence of $\mathcal O_X$-modules

$$f^*\Omega_{Y/S}\xrightarrow{\ \gamma\ }\Omega_{X/S} \xrightarrow{\ \delta\ }\Omega_{X/Y}\longrightarrow 0$$

is exact, where $\gamma$ is characterised by
$\gamma\bigl(1\otimes\mathrm d_{Y/S}(g)\bigr)=\mathrm d_{X/S}(g\circ f)$ for
local sections $g$ of $\mathcal O_Y$, and $\delta$ is characterised by
$\delta(\mathrm d_{X/S}(c))=\mathrm d_{X/Y}(c)$ for local sections $c$ of
$\mathcal O_X$. The maps $\gamma$ and $\delta$ are natural in the morphisms $f$
and $h$, and the first arrow is **not** asserted to be injective: it fails to be
injective in general. No finiteness, flatness or separatedness hypothesis is
imposed.

## Facts & Assumptions

**Given:** Morphisms of schemes $f\colon X\to Y$ and $h\colon Y\to S$.

[F1] [[def-sheaf-relative-differentials]]: for a morphism $Z\to T$ of schemes there is an $\mathcal O_Z$-module $\Omega_{Z/T}$ with universal $T$-derivation $\mathrm d_{Z/T}\colon\mathcal O_Z\to\Omega_{Z/T}$, and an $S$-derivation of $\mathcal O_X$ kills the image of the structure map from $\mathcal O_S$.

[F2] [[thm-sheaf-differentials-universal-property]]: for every $\mathcal O_X$-module $\mathcal F$, composition with $\mathrm d_{X/S}$ is a natural bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong\operatorname{Der}_S(\mathcal O_X,\mathcal F)$, and likewise over $Y$.

[F3] [[def-pullback-module-ringed-spaces]]: $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$, the canonical map $f^{-1}\mathcal G\to f^*\mathcal G$, $s\mapsto1\otimes s$, is $f^{-1}\mathcal O_Y$-linear, and a local section $g$ of $\mathcal O_Y$ acts on $f^*\mathcal G$ as $g\circ f$.

[F4] [[thm-pullback-pushforward-module-adjunction]]: there is a natural bijection $\operatorname{Hom}_{\mathcal O_X}(f^*\mathcal G,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_Y}(\mathcal G,f_*\mathcal F)$; the map corresponding to $u\colon\mathcal G\to f_*\mathcal F$ sends $1\otimes s$ to $u(s)$.

[F5] [[thm-transitivity-exact-sequence-differentials]]: for ring maps $A\to B\to C$ the sequence $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\to\Omega_{C/B}\to0$ is exact, with the first map $c\otimes\mathrm db\mapsto c\,\mathrm d_{C/A}(b)$ and the second induced by $\mathrm d_{C/B}$.

[F6] [[lem-sheaf-differentials-affine-compatibility]]: for a ring map $A\to B$ with induced morphism $\operatorname{Spec}B\to\operatorname{Spec}A$, the sections of $\Omega_{B/A}$ over a basic open are $\Omega_{B_g/A}$, compatibly with the universal derivations and with localization.

[F7] [[thm-exactness-of-sheaves-stalkwise]]: a sequence of sheaves of abelian groups is exact if and only if every stalk sequence is exact.

[F8] [[thm-localisation-of-modules-is-exact]]: localization at a prime is exact.

[F9] [[def-stalk-of-presheaf]]: the stalk is the filtered colimit of the sections over a basis of neighbourhoods.

[F10] [[lem-differentials-polynomial-algebra-free]] and [[cor-jacobian-presentation-differentials]]: $\Omega_{k[x]/k}$ is free on $\mathrm dx$, and for $B=P/I$ the module $\Omega_{B/k}$ is presented as the cokernel of the Jacobian map on $I/I^2$.

## Proof

**Proof technique:** direct.

1.1 The map $\gamma$. The composite $D\colon\mathcal O_Y\to f_*\mathcal O_X\xrightarrow{f_*\mathrm d_{X/S}}f_*\Omega_{X/S}$ is an $S$-derivation: it is additive, satisfies Leibniz for the $\mathcal O_Y$-module structure of $f_*\Omega_{X/S}$ transported along $f^{\sharp}$, and kills the image of $\mathcal O_S$ because [F1] applied to $X\to S$ says that $\mathrm d_{X/S}$ annihilates it. By [F2] applied to the $S$-scheme $Y$ there is a unique $\mathcal O_Y$-linear $u\colon\Omega_{Y/S}\to f_*\Omega_{X/S}$ with $u(\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ f)$, and by [F4] there is a unique $\mathcal O_X$-linear $\gamma\colon f^*\Omega_{Y/S}\to\Omega_{X/S}$ with $\gamma(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ f)$, where $f^*\Omega_{Y/S}=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\Omega_{Y/S}$ is the pullback of [F3] and the elements $1\otimes s$ generate it; the value on $1\otimes s$ is $u(s)$ by the description of the adjunction. [F1, F2, F3, F4]

1.2 The map $\delta$. The universal $Y$-derivation $\mathrm d_{X/Y}\colon\mathcal O_X\to\Omega_{X/Y}$ annihilates the image of $\mathcal O_Y$, hence also the image of $\mathcal O_S$ under $\mathcal O_S\to\mathcal O_Y\to\mathcal O_X$; so it is an $S$-derivation, and [F2] over $S$ gives a unique $\mathcal O_X$-linear $\delta\colon\Omega_{X/S}\to\Omega_{X/Y}$ with $\delta(\mathrm d_{X/S}(c))=\mathrm d_{X/Y}(c)$. It is surjective because the sections $\mathrm d_{X/Y}(c)$ generate $\Omega_{X/Y}$ over $\mathcal O_X$ by [F1]. [F1, F2, given]

2.1 The composite vanishes. For a local section $g$ of $\mathcal O_Y$ one has $\delta(\gamma(1\otimes\mathrm dg))=\delta(\mathrm d_{X/S}(g\circ f))=\mathrm d_{X/Y}(g\circ f)=0$, because $g\circ f$ is the image of a section of $\mathcal O_Y$; hence $\operatorname{im}\gamma\subseteq\ker\delta$. [step 1.1, step 1.2]

2.2 Affine charts. Let $V=\operatorname{Spec}B\subseteq Y$ be an affine open whose image lies in $W=\operatorname{Spec}A\subseteq S$, and let $U=\operatorname{Spec}C\subseteq X$ be an affine open with $f(U)\subseteq V$. The structure maps give $A\to B\to C$. By [F6], $\Omega_{X/S}|_U$ and $\Omega_{X/Y}|_U$ are attached to $\Omega_{C/A}$ and $\Omega_{C/B}$. For $x\in U$, let $\mathfrak p\subseteq C$ correspond to $x$ and $\mathfrak q=\mathfrak p\cap B$ to $f(x)$. The pullback definition [F3] and stalk construction [F9] give $(f^*\Omega_{Y/S})_x\cong\Omega_{Y/S,f(x)}\otimes_{\mathcal O_{Y,f(x)}}\mathcal O_{X,x}\cong(\Omega_{B/A})_{\mathfrak q}\otimes_{B_{\mathfrak q}}C_{\mathfrak p}\cong(C\otimes_B\Omega_{B/A})_{\mathfrak p}$. Consequently $f^*\Omega_{Y/S}|_U$ is the sheaf attached to $C\otimes_B\Omega_{B/A}$. These stalk identifications use tensor products after taking inverse-image stalks; no equality between $f^{-1}\mathcal O_Y$ and $\mathcal O_X$ is needed. The maps $\gamma$ and $\delta$ become the maps of [F5] because their values on $\mathrm db$ and $\mathrm d_{C/A}(c)$ are those of steps 1.1 and 1.2. [F3, F5, F6, F9, step 1.1, step 1.2]

3.1 Exactness at $\Omega_{X/S}$. Let $x\in X$ and take a chart as in step 2.2 with $x$ corresponding to a prime $\mathfrak p\subseteq C$. By step 2.2 the stalks of the three sheaves at $x$ are $(C\otimes_B\Omega_{B/A})\otimes_CC_{\mathfrak p}$, $\Omega_{C/A}\otimes_CC_{\mathfrak p}$ and $\Omega_{C/B}\otimes_CC_{\mathfrak p}$, and the stalk maps are the localizations at $\mathfrak p$ of the maps of [F5]. Applying $-\otimes_CC_{\mathfrak p}$ to the exact sequence [F5] and using [F8], the stalk sequence is exact at the middle term, so $\operatorname{im}\gamma_x=\ker\delta_x$. As $x$ was arbitrary, [F7] gives $\operatorname{im}\gamma=\ker\delta$ and the sequence of the statement is exact at $\Omega_{X/S}$; combined with step 1.2 and step 2.1 this is the asserted exactness. [F5, F7, F8, step 1.2, step 2.1, step 2.2]

3.2 Failure of injectivity of the first arrow. Let $k$ be a field of characteristic $\ne2$, let $A=k$, $B=k[x]$, $C=k[x]/(x^2)$, so that $\Omega_{B/A}$ is free on $\mathrm dx$ by [F10] and $\Omega_{C/A}$ is the cokernel of $I/I^2\to C\otimes_B\Omega_{B/A}$ for $I=(x^2)$. By [F10] the module $C\otimes_B\Omega_{B/A}=C\,\mathrm dx$ has the two $k$-linearly independent elements $1\otimes\mathrm dx$ and $x\otimes\mathrm dx$, while $\mathrm d(x^2)=2x\,\mathrm dx$ shows that $x\otimes\mathrm dx$ lies in the kernel of $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}$; since $2\ne0$ in $k$, the element $1\otimes\mathrm dx$ does not, so this map has a nonzero kernel and $\gamma$ is not injective in general. [F5, F10, step 2.2]

4.1 Conclusion. Steps 1.1 and 1.2 construct $\gamma$ and $\delta$ with the stated properties, step 2.1 shows that the composite vanishes, step 3.1 identifies the kernel of $\delta$ with the image of $\gamma$ and makes $\delta$ surjective by step 1.2, and step 3.2 shows that $\gamma$ need not be injective. Hence the displayed sequence is exact and the first arrow is not injective in general. Naturality in $f$ and $h$ follows because $\gamma$ and $\delta$ are determined by the universal properties of [F2] and [F4] applied to the morphisms $f$ and $h$, which are natural in those morphisms, and no finiteness, flatness or separatedness assumption was used. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2] ∎
