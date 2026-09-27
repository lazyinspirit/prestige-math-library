---
id: "lem-sheaf-differentials-affine-compatibility"
kind: "lemma"
title: "Affine charts recover the algebraic module of differentials"
status: draft
origin: "pipeline"
deps: ["lem-affine-module-sheaf-universal-property", "thm-sheaf-differentials-universal-property", "cor-derivations-represented-by-differentials", "lem-differentials-localization", "thm-global-sections-affine-scheme", "thm-sections-basic-open-affine-scheme", "def-sheaf-relative-differentials", "def-affine-scheme-spectrum", "def-localisation-of-a-module"]
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Stacks Morphisms, Lemma 29.33.5, tag 01UT"
      url: "https://stacks.math.columbia.edu/tag/01UT"
    - title: "Stacks Morphisms, Lemma 29.33.3, tag 01US"
      url: "https://stacks.math.columbia.edu/tag/01US"
    - title: "Vakil 22.2.20, pp.584–585"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\to B$ be a homomorphism of commutative rings, let
$f\colon X=\operatorname{Spec}B\to S=\operatorname{Spec}A$ be the induced
morphism of affine schemes, and let $\widetilde\Omega$ be the sheaf attached to
the $B$-module $\Omega_{B/A}$
([[lem-affine-module-sheaf-universal-property]]). Then there is a unique
isomorphism of $\mathcal O_X$-modules
$$\widetilde\Omega\longrightarrow\Omega_{X/S},\qquad \varepsilon(\mathrm db)\longmapsto\mathrm d_{X/S}(b),$$
and it is natural in the ring map $A\to B$, in particular compatible with
restriction to a further affine open. Consequently, for every $g\in B$,
$$\Gamma(X,\Omega_{X/S})\cong\Omega_{B/A},\qquad \Omega_{X/S}(D(g))\cong\Omega_{B_g/A},$$
compatibly with $\mathrm d_{X/S}$ and with the localization maps
$\Omega_{B/A}\to\Omega_{B_g/A}$; for $g=1$ the two displays agree. No
finiteness, flatness or separatedness hypothesis is imposed on $A\to B$.

## Facts & Assumptions

**Given:** A ring map $A\to B$, the induced morphism $X=\operatorname{Spec}B\to S=\operatorname{Spec}A$ and an $\mathcal O_X$-module $\mathcal F$.

[F1] [[lem-affine-module-sheaf-universal-property]]: the sheaf $\widetilde M$ attached to a $B$-module $M$ satisfies $\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\mathcal F)\cong\operatorname{Hom}_B(M,\mathcal F(X))$ naturally in $M$ and $\mathcal F$, the bijection being $\varphi\mapsto\varphi_X\circ\varepsilon$.

[F2] [[thm-sheaf-differentials-universal-property]]: $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong\operatorname{Der}_S(\mathcal O_X,\mathcal F)$ via $\alpha\mapsto\alpha\circ\mathrm d_{X/S}$, naturally in $\mathcal F$, for every $\mathcal O_X$-module $\mathcal F$.

[F3] [[cor-derivations-represented-by-differentials]]: for a ring map $R\to T$ and a $T$-module $N$, $\operatorname{Hom}_T(\Omega_{T/R},N)\cong\operatorname{Der}_R(T,N)$ via precomposition with the universal derivation.

[F4] [[lem-differentials-localization]]: for a multiplicative subset $U\subseteq B$ the canonical map $U^{-1}\Omega_{B/A}\to\Omega_{U^{-1}B/A}$ is an isomorphism of $U^{-1}B$-modules; for $U=\{1,g,g^2,\dots\}$ this reads $\Omega_{B/A}\otimes_BB_g\cong\Omega_{B_g/A}$, compatible with the universal derivations.

[F5] [[thm-global-sections-affine-scheme]]: the canonical map $B\to\Gamma(X,\mathcal O_X)$ is an isomorphism, so $\mathcal O_X(X)=B$ and global sections of any $\mathcal O_X$-module are a $B$-module.

[F6] [[thm-sections-basic-open-affine-scheme]]: $\Gamma(D(g),\mathcal O_X)=B_g$, and for $D(h)\subseteq D(g)$ the restriction is the canonical localization map $B_g\to B_h$.

[F7] [[def-sheaf-relative-differentials]]: an $S$-derivation $\mathcal O_X\to\mathcal F$ kills the image of $f^{\sharp}\colon f^{-1}\mathcal O_S\to\mathcal O_X$; in particular it kills the image of $A\to(f^{-1}\mathcal O_S)(X)\to\mathcal O_X(X)=B$ under the structure map.

## Proof

**Proof technique:** direct.

1.1 Restriction of derivations. Let $D\colon\mathcal O_X\to\mathcal F$ be an $S$-derivation. Its global component $D_X\colon B\to\mathcal F(X)$ is additive and satisfies Leibniz, and it kills the image of $A$, because $A$ maps into $\mathcal O_X(X)=B$ through $(f^{-1}\mathcal O_S)(X)$ and $D$ kills that image by [F7]. So $D\mapsto D_X$ is a map $\operatorname{Der}_S(\mathcal O_X,\mathcal F)\to\operatorname{Der}_A(B,\mathcal F(X))$. [F5, F7]

1.2 Localizing a derivation of global sections. Conversely let $D_0\colon B\to\mathcal F(X)$ be an $A$-derivation. For every $g$ the composite $B\xrightarrow{D_0}\mathcal F(X)\to\mathcal F(D(g))$ is an $A$-derivation, so by [F3] it corresponds to a $B$-linear map $\Omega_{B/A}\to\mathcal F(D(g))$, which by [F4] is the same as a $B_g$-linear map $\varepsilon_g\colon\Omega_{B_g/A}\to\mathcal F(D(g))$; put $D_g:=\varepsilon_g\circ\mathrm d_{B_g/A}\colon B_g\to\mathcal F(D(g))$. These maps are compatible with restriction to a smaller basic open, since both restrictions are induced by the same $A$-derivation composite $B\to\mathcal F(D(gh))$ and [F4] is compatible with the universal derivations. [F3, F4]

2.1 Gluing. For an open $W\subseteq X$ and $a\in\mathcal O_X(W)$, the elements $D_g(a|_{D(g)})$, indexed by basic opens $D(g)\subseteq W$, are compatible on intersections $D(gh)$ by step 1.2, so they glue to a unique element $D_W(a)\in\mathcal F(W)$. The resulting $D_W$ are additive and satisfy Leibniz because this can be checked on a basic-open cover. They kill $f^{-1}\mathcal O_S$ locally: a germ in the image of $f^{-1}\mathcal O_S$ at $x\in D(g)$ comes from a section of $\mathcal O_S$ on an open neighbourhood of $f(x)$; after shrinking to an affine neighbourhood of $f(x)$ and then to a basic open around $x$, that section is a fraction of elements of $A$. The derivation $D_g$ kills $A$, and the Leibniz rule applied to an inverse shows it kills such fractions. Vanishing at every stalk implies the sheaf composite $f^{-1}\mathcal O_S\to\mathcal F$ is zero. [F4, step 1.2]

3.1 The two constructions are inverse. If $D$ is an $S$-derivation with global component $D_0=D_X$, then for each $g$ the map $\varepsilon_g$ of step 1.2 is the composite $\Omega_{B/A}\to\Omega_{B_g/A}\to\mathcal F(D(g))$ induced by $D_0$ and restriction, so $D_g$ agrees with $D$ on $B_g$; by the sheaf property, the derivation produced in step 2.1 equals $D$. Conversely the derivation produced from $D_0$ has global component $D_0$, since its component on $D(g)$ restricts from $D_0$. Hence restriction of global sections is a bijection $$\operatorname{Der}_S(\mathcal O_X,\mathcal F)\cong\operatorname{Der}_A(B,\mathcal F(X)),$$ natural in $\mathcal F$. [step 1.1, step 1.2, step 2.1]

4.1 The comparison isomorphism. By [F1] with $M=\Omega_{B/A}$ and [F3], $\operatorname{Hom}_{\mathcal O_X}(\widetilde\Omega,\mathcal F)\cong\operatorname{Hom}_B(\Omega_{B/A},\mathcal F(X))\cong\operatorname{Der}_A(B,\mathcal F(X))$, and by step 3.1 and [F2] the last group is $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)$. All identifications are natural in $\mathcal F$, so the Yoneda lemma produces a unique isomorphism $\widetilde\Omega\to\Omega_{X/S}$; tracking the universal elements (the identity of $\widetilde\Omega$ corresponds to the derivation $b\mapsto\varepsilon(\mathrm db)$ and the identity of $\Omega_{X/S}$ to $\mathrm d_{X/S}$) shows that the isomorphism sends $\varepsilon(\mathrm db)$ to $\mathrm d_{X/S}(b)$. Naturality in the ring map $A\to B$ follows from the functoriality of [F1] in $M$ and of [F3]. [F1, F2, F3, step 3.1]

5.1 Sections over affine and basic opens. The sheaf attached to $\Omega_{B/A}$ is computed from its values on the distinguished-open basis: the assignment $D(g)\mapsto\Omega_{B/A}\otimes_BB_g=\Omega_{B_g/A}$ with the localization maps as restrictions is a sheaf on the basis (the localization exactness makes fractions glue; see [[def-localisation-of-a-module]] and [F4]) and extends to the sheaf $\widetilde\Omega$ with those values and restrictions, exactly as [[thm-sections-basic-open-affine-scheme]] records for $\mathcal O_X$ itself. Hence $\Gamma(X,\widetilde\Omega)= \Omega_{B/A}$ and $\Omega_{X/S}(D(g))\cong\Omega_{B_g/A}$ under step 4.1, compatible with $\mathrm d_{X/S}$ by the characterization of that isomorphism and with the localization maps because those are the restriction maps of $\widetilde\Omega$. [F4, F6, step 4.1] ∎
