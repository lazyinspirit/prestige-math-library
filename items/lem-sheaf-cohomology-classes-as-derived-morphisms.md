---
id: "lem-sheaf-cohomology-classes-as-derived-morphisms"
kind: "lemma"
title: "Sheaf cohomology classes as derived morphisms"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-sheaf-cohomology-derived-global-sections, thm-abelian-sheaves-have-enough-injectives, def-injective-resolution-in-an-abelian-category, def-deleted-resolution, def-quasi-isomorphism, def-cochain-complex-in-an-abelian-category, def-cohomology-object-of-a-cochain-complex, def-cochain-map, thm-a-bounded-below-complex-of-injectives-is-homotopically-injective, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex, def-derived-category-of-an-abelian-category, def-homotopically-projective-bounded-above-complex, def-zero-and-stalk-complex, lem-morphisms-from-the-constant-sheaf-are-global-sections, prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, lem-addition-of-roofs-makes-an-additive-localization, thm-zero-sheaf-cohomology-global-sections, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-global-sections-functor-sheaves]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Lemma 20.11.1 and Section 31 (0FKU): sheaf cohomology as derived global sections and its representation by maps from the structure sheaf"
    - title: "The Stacks Project, Derived Categories"
      url: https://stacks.math.columbia.edu/download/derived.pdf
      locator: "Section 13.18 (K-injective complexes) and Section 13.21 (Hom complexes)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $H^q(X,-)$ be sheaf cohomology computed from the supplied
functorial injective resolution datum $I$ of
[[thm-abelian-sheaves-have-enough-injectives]]
([[def-sheaf-cohomology-derived-global-sections]]), and let
$\mathbb Z_X$ be the constant sheaf with value $\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]). Under the
standing smallness or supplied cofinal-denominator hypothesis of
[[def-derived-category-of-an-abelian-category]], for every abelian sheaf
$\mathcal F$ on $X$ and every $p\ge0$ there is a canonical isomorphism
$$\operatorname{Hom}_{D(\mathrm{Ab}(X))}(\mathbb Z_X[-p],\mathcal F)\xrightarrow{\ \sim\ }H^p(X,\mathcal F),$$
exhibited by the chain
$$\operatorname{Hom}_D(\mathbb Z_X[-p],\mathcal F) \longrightarrow\operatorname{Hom}_D(\mathbb Z_X[-p],I^\bullet(\mathcal F)) \xleftarrow{\ Q\ }\operatorname{Hom}_K(\mathbb Z_X[-p],I^\bullet(\mathcal F)) \xrightarrow{\ \sim\ }H^0\bigl(\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X[-p],I^\bullet(\mathcal F))\bigr) \xrightarrow{\ \sim\ }H^p(X,\mathcal F),$$
where the first arrow is composition with $Q(\eta_{\mathcal F})$ for the
coaugmentation $\eta_{\mathcal F}:\mathcal F\to I^\bullet(\mathcal F)$ of the
datum, the second is the localization map $Q$ of
[[def-derived-category-of-an-abelian-category]], and the last two identify the
full Hom complex with the shift $\Gamma(X,I^\bullet(\mathcal F))[p]$, including the negative degrees that supply boundaries in degree zero. Moreover:

1. **(Naturality and additivity.)** The isomorphism is additive and natural in
   $\mathcal F$: for every morphism $\psi:\mathcal F\to\mathcal G$ of abelian
   sheaves the square
   $$\begin{matrix} \operatorname{Hom}_D(\mathbb Z_X[-p],\mathcal F)&\longrightarrow&H^p(X,\mathcal F)\\ \downarrow\scriptstyle{\circ Q(\psi)}&&\downarrow\scriptstyle{H^p(X,\psi)}\\ \operatorname{Hom}_D(\mathbb Z_X[-p],\mathcal G)&\longrightarrow&H^p(X,\mathcal G) \end{matrix}$$
   commutes, $H^p(X,\psi)$ being the map induced by $\Gamma(X,\psi)$ on the
   cochain maps supplied with the datum
   ([[def-sheaf-cohomology-derived-global-sections]]).

2. **(Degree zero.)** For $p=0$ the composite of the isomorphism with the
   canonical isomorphism $H^0(X,\mathcal F)\xrightarrow{\sim}\Gamma(X,\mathcal F)$
   of [[thm-zero-sheaf-cohomology-global-sections]] is the bijection
   $\varphi\mapsto\varphi_X(1_X)$ of
   [[lem-morphisms-from-the-constant-sheaf-are-global-sections]]; in particular
   the identity of $\mathbb Z_X$ corresponds to $1_X\in\Gamma(X,\mathbb Z_X)$.

## Facts & Assumptions

[F1] Sheaf cohomology is defined by $H^q(X,\mathcal F):=R_I^q\Gamma(X,\mathcal F)=H^q(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}}))$, the cohomology object of the complex $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))\to\cdots$ obtained from the deleted resolution ([[def-sheaf-cohomology-derived-global-sections]], [[def-deleted-resolution]]).

[F2] For a morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves the map $H^q(X,\varphi)$ is the map on cohomology induced by $\Gamma(X,-)$ applied to the cochain maps supplied with the datum, and it is additive in $\varphi$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F3] Under AC the datum assigns to every abelian sheaf one specific injective resolution, built functorially from $\mathcal F$ with no further selection ([[thm-abelian-sheaves-have-enough-injectives]]).

[F4] An injective resolution of $A$ is a coaugmented cochain complex $0\to A\xrightarrow{\eta}I^0\to I^1\to\cdots$ that is exact at every displayed term, with every $I^n$ injective ([[def-injective-resolution-in-an-abelian-category]]); in particular $I^\bullet(\mathcal F)$ has injective terms, vanishes in negative degrees and the coaugmentation $\eta_{\mathcal F}$ induces isomorphisms on cohomology, so it is a quasi-isomorphism $\mathcal F\to I^\bullet(\mathcal F)$ ([[def-quasi-isomorphism]]).

[F5] A bounded-below cochain complex of injective objects is K-injective, assuming dependent choice for the countable successive homotopy extensions ([[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]); in ZF the Axiom of Choice implies dependent choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] For a K-injective complex $I$ and any complex $X$ the localization map $Q:\operatorname{Hom}_K(X,I)\to\operatorname{Hom}_D(X,I)$ is bijective ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

[F7] For complexes $C,D$ there is a natural isomorphism $\operatorname{Hom}_{K(\mathcal A)}(C,D)\cong H_0(\underline{\operatorname{Hom}}(C,D)_\bullet)$, and the cochain category $K(\mathcal A)$ is the reindexed published homotopy category ([[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]], [[def-derived-category-of-an-abelian-category]]).

[F8] In the cochain Hom complex the degree-$r$ term is $\prod_n\operatorname{Hom}(P^n,A^{n+r})$, with differential $(du)^n=d_Au^n-(-1)^ru^{n+1}d_P$, and shifts satisfy $X[k]^n=X^{n+k}$ with $d_{X[k]}^n=(-1)^kd_X^{n+k}$ ([[def-homotopically-projective-bounded-above-complex]], [[def-derived-category-of-an-abelian-category]]).

[F9] A quasi-isomorphism becomes invertible under $Q$ ([[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]), and composition in the localization is bilinear ([[lem-addition-of-roofs-makes-an-additive-localization]]).

[F10] For an abelian sheaf $\mathcal F$ the map $\varphi\mapsto\varphi_X(1_X)$ is a bijection $\operatorname{Hom}_{\mathrm{Ab}(X)}(\mathbb Z_X,\mathcal F)\to\Gamma(X,\mathcal F)$, additive and natural in $\mathcal F$, and it extends to cochain complexes: for every cochain complex $J^\bullet$ of abelian sheaves the levelwise maps define an isomorphism of cochain complexes $\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X,J^\bullet)\cong\Gamma(X,J^\bullet)$ with right-hand differentials $\Gamma(X,d^n)$ ([[lem-morphisms-from-the-constant-sheaf-are-global-sections]]).

[F11] The $n$th cohomology object of a cochain complex is $H^n(C)=\operatorname{coker}(B^n(C)\to Z^n(C))=Z^n(C)/B^n(C)$ with $Z^n(C)=\ker(d^n)$ and $B^n(C)=\operatorname{im}(d^{n-1})$, so $H^0$ of a complex is the quotient of the $0$-cocycles by the $0$-coboundaries ([[def-cohomology-object-of-a-cochain-complex]]).

[F12] For every abelian sheaf $\mathcal F$ there is a canonical isomorphism $H^0(X,\mathcal F)\xrightarrow{\sim}\Gamma(X,\mathcal F)$, natural in $\mathcal F$, identifying $H^0(X,\mathcal F)$ with the kernel of $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F13] A cochain map $f:C^\bullet\to D^\bullet$ is a family $f^n:C^n\to D^n$ with $d_D^n\circ f^n=f^{n+1}\circ d_C^n$, and a cochain complex is a family of objects with $d^{n+1}d^n=0$ ([[def-cochain-map]], [[def-cochain-complex-in-an-abelian-category]]).

[F14] A function $f:U\to A$ is locally constant when every point of $U$ has an open neighbourhood on which $f$ is constant, and the constant sheaf's sections over $U$ are exactly these functions under $\theta_U$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F15] A morphism of sheaves is a family of group homomorphisms commuting with restriction, and addition of morphisms is componentwise, so $\Gamma(X,-)$ is additive ([[def-global-sections-functor-sheaves]]).

## Proof

**Given:** The Axiom of Choice, a topological space $X$, the supplied functorial injective resolution datum $I$ with its coaugmentations $\eta_{\mathcal F}:\mathcal F\to I^\bullet(\mathcal F)$ and its functorial cochain maps, an abelian sheaf $\mathcal F$ and an integer $p\ge0$.

1.1 For every abelian sheaf $\mathcal F$ the datum gives a coaugmented complex $0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$ which is exact at every displayed term with every $I^n(\mathcal F)$ injective [F3, F4], so read as a map of complexes $\eta_{\mathcal F}:\mathcal F\to I^\bullet(\mathcal F)$ it is a quasi-isomorphism [F4]; the complex $I^\bullet(\mathcal F)$ is bounded below with injective terms [F4], hence K-injective by [F5], dependent choice being available from the Axiom of Choice [F5]. [F3, F4, F5]

2.1 For every $p$ composition with $Q(\eta_{\mathcal F})$ is a bijection $$\operatorname{Hom}_D(\mathbb Z_X[-p],\mathcal F)\longrightarrow\operatorname{Hom}_D(\mathbb Z_X[-p],I^\bullet(\mathcal F)),$$ because $Q(\eta_{\mathcal F})$ is invertible in $D(\mathrm{Ab}(X))$ [F9] and composition with an isomorphism is bijective. [F9, step 1.1]

2.2 Since $I^\bullet(\mathcal F)$ is K-injective [step 1.1], the localization map $$Q:\operatorname{Hom}_K(\mathbb Z_X[-p],I^\bullet(\mathcal F))\longrightarrow\operatorname{Hom}_D(\mathbb Z_X[-p],I^\bullet(\mathcal F))$$ is bijective [F6]. [F6, step 1.1]

3.1 The natural isomorphism of [F7], read through the reindexing convention that makes $K(\mathrm{Ab}(X))$ the published homotopy category, identifies the homotopy classes of cochain maps $\mathbb Z_X[-p]\to I^\bullet(\mathcal F)$ with the zeroth cohomology of the cochain Hom complex: $$\operatorname{Hom}_K(\mathbb Z_X[-p],I^\bullet(\mathcal F))\cong H^0\bigl(\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X[-p],I^\bullet(\mathcal F))\bigr).$$ [F7, step 2.2]

4.1 By [F8] the degree-$n$ term of $\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X[-p],I^\bullet(\mathcal F))$ is $$\prod_m\operatorname{Hom}\bigl((\mathbb Z_X[-p])^m,I^{m+n}(\mathcal F)\bigr),$$ and $(\mathbb Z_X[-p])^m=\mathbb Z_X^{m-p}$ is nonzero only for $m=p$, where it is $\mathbb Z_X$, so the term is $\operatorname{Hom}(\mathbb Z_X,I^{n+p}(\mathcal F))$; its differential is $(du)^p=d_Iu^p-(-1)^nu^{p+1}d_{\mathbb Z_X[-p]}^p$, and $d_{\mathbb Z_X[-p]}^p=(-1)^{-p}d_{\mathbb Z_X}^0=0$ while $u^{p+1}=0$ because $(\mathbb Z_X[-p])^{p+1}=0$ [F8], so $(du)=d_I\circ u$ in every degree. Applying [F10] in every degree identifies this Hom complex with the full graded complex having degree-$n$ term $\Gamma(X,I^{n+p}(\mathcal F))$ for all $n\in\mathbb Z$ (zero when $n+p<0$), and differential $\Gamma(X,d^{n+p})$. The degreewise sign twist $u\mapsto(-1)^{pn}u$ identifies it with the standard shifted complex $\Gamma(X,I^\bullet(\mathcal F))[p]$ when that shift uses differential $(-1)^p d$ [F13]. In particular degree $-1$ is retained when $p>0$ and contributes the boundaries in degree zero. [F8, F10, F13, step 3.1]

5.1 Taking zeroth cohomology in [step 4.1] gives the quotient of the $0$-cocycles of that complex by the $0$-coboundaries [F11], that is $$\ker\bigl(\Gamma(X,d^p)\bigr)\big/\operatorname{im}\bigl(\Gamma(X,d^{p-1})\bigr)=H^p\bigl(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}})\bigr)=H^p(X,\mathcal F),$$ the middle expression being $H^p$ of the deleted resolution, whose entries in degrees $\ge0$ are the $I^n(\mathcal F)$ and which has zero differential in negative degrees [F1, F4]. [F1, F4, F11, step 4.1]

5.2 Let $p=0$ and let $\varphi:\mathbb Z_X\to\mathcal F$ be a morphism with $\varphi_X(1_X)=s$. Under [step 2.1] $\varphi$ goes to $Q(\eta_{\mathcal F}\circ\varphi)$, whose preimage under the bijection of [step 2.2] is the homotopy class of the cochain map $\eta_{\mathcal F}\circ\varphi:\mathbb Z_X\to I^\bullet(\mathcal F)$ [step 1.1]; under [step 3.1] and [step 4.1] this class corresponds to the class of the cocycle $$\Gamma(X,\eta_{\mathcal F})(s)=(\eta_{\mathcal F}\circ\varphi)_X(1_X)\in\Gamma(X,I^0(\mathcal F)),$$ which is a cocycle because $\eta_{\mathcal F}\circ\varphi$ is a cochain map [F13] and $\mathbb Z_X$ has zero differentials in nonzero degrees [F8]. The canonical isomorphism of [F12] identifies $H^0(X,\mathcal F)$ with the kernel of $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$ through exactly this map $\Gamma(X,\eta_{\mathcal F})$, so the composite of clause 1 with it sends $\varphi$ to $\varphi_X(1_X)$; by [F10] the map $\varphi\mapsto\varphi_X(1_X)$ is a bijection onto $\Gamma(X,\mathcal F)$, and the constant section $1_X$ is the image of the identity of $\mathbb Z_X$. The description of $\mathbb Z_X(U)$ by locally constant functions [F14] and the additivity of $\Gamma(X,-)$ [F15] are the ingredients of [F10] used here. [F8, F10, F12, F13, F14, F15, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 Composing the bijection of [step 2.1] with the inverse of the bijection of [step 2.2], the isomorphism of [step 3.1] and the equality of [step 5.1] gives the canonical isomorphism of clause 1. Naturality: a morphism $\psi:\mathcal F\to\mathcal G$ of abelian sheaves comes with the cochain map $I(\psi):I^\bullet(\mathcal F)\to I^\bullet(\mathcal G)$ supplied by the functorial datum [F3] and commuting with the coaugmentations, so $I(\psi)\circ\eta_{\mathcal F}=\eta_{\mathcal G}\circ\psi$; every arrow used in [step 2.1], [step 2.2], [step 3.1], [step 4.1] and [step 5.1] is given by composition with $I(\psi)$ and $\Gamma(X,I(\psi))$, and the levelwise bijections $\Phi_{J^n}$ of [F10] are natural in the sheaf variable, so the square of clause 1 commutes, the right-hand vertical map being $H^p(X,\psi)$ [F2]. Additivity: the bijections of [step 2.1] and [step 2.2] are composition with fixed morphisms and hence additive, the identification of [step 3.1] is an isomorphism of abelian groups, the levelwise maps of [F10] are additive [F10], and $H^0$ is additive, so the composite isomorphism is additive; alternatively additivity of the cup-style constructions follows from bilinearity of composition in the localization [F9]. [F2, F3, F9, F10, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1]

7.1 Clause 1 is [step 6.1] with [step 5.1], and clause 2 is [step 5.2]. The Axiom of Choice is used only to obtain the functorial injective resolution datum [F3] and, through the Axiom of Dependent Choice [F5], the K-injectivity of the bounded-below injective complexes; no other selection occurs. ∎ [F3, F5, step 6.1, step 5.1, step 5.2]
