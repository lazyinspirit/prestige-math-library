---
id: "lem-cohomology-functoriality-sheaf-and-space"
kind: "lemma"
title: "Variance of sheaf cohomology"
status: published
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-global-sections-functor-sheaves, thm-zero-sheaf-cohomology-global-sections, thm-abelian-sheaves-have-enough-injectives, thm-inverse-direct-image-adjunction, def-direct-image-sheaf, lem-stalk-inverse-image-sheaf, thm-exactness-of-sheaves-stalkwise, thm-sheaf-morphism-isomorphism-stalkwise, thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors, thm-chain-homotopic-maps-induce-the-same-map-on-homology, lem-comparison-map-from-an-exact-complex-into-an-injective-resolution, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice, let $X$ be a topological space with supplied
functorial injective resolution datum $I_X$ and sheaf cohomology
$H^q(X,-)$ as in [[def-sheaf-cohomology-derived-global-sections]].

1. (Covariance in the sheaf.) Every morphism $\varphi:\mathcal F\to\mathcal G$
   of abelian sheaves on $X$ induces additive maps
   $H^q(X,\varphi):H^q(X,\mathcal F)\to H^q(X,\mathcal G)$, and
   $\mathcal F\mapsto H^q(X,\mathcal F)$ is a covariant additive functor.
2. (Contravariance in the space.) Let $f:X\to Y$ be a continuous map, let
   $\mathcal G$ be an abelian sheaf on $Y$, let $\mathcal F$ be an abelian sheaf on $X$, and let
   $\varphi:f^{-1}\mathcal G\to\mathcal F$ be a morphism of abelian sheaves. Then there are maps
   $$H^q(Y,\mathcal G)\longrightarrow H^q(X,\mathcal F)\qquad(q\ge0)$$
   depending only on $\varphi$, natural in $\mathcal G$ and $\mathcal F$, and in
   degree $0$ the map is the composite
   $\Gamma(Y,\mathcal G)\to\Gamma(X,f^{-1}\mathcal G)\xrightarrow{\ \Gamma(X,\varphi)\ }\Gamma(X,\mathcal F)$
   of section pullback with $\varphi$; for composable data
   $g:Y\to Z$, $\psi:g^{-1}\mathcal H\to\mathcal G$,
   $\varphi:f^{-1}\mathcal G\to\mathcal F$ the map of the composite pair
   $\varphi\circ f^{-1}\psi:(gf)^{-1}\mathcal H\to\mathcal F$ is the composite of
   the two maps (compatibility with compositions).

## Facts & Assumptions

[F1] $H^q(X,\mathcal F)=R_{I_X}^q\Gamma(X,\mathcal F)$ is computed from the supplied functorial datum, and $H^q(X,\varphi)=R_{I_X}^q\Gamma(\varphi)$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F2] In degree $0$ the cohomology is global sections, with the identification given by the kernel description ([[thm-zero-sheaf-cohomology-global-sections]]).

[F3] Inverse and direct image are adjoint: $\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$, naturally in both variables ([[thm-inverse-direct-image-adjunction]]).

[F4] The stalk of an inverse image is the stalk at the image point: $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F5] Exactness of a sequence of abelian sheaves is checked stalkwise ([[thm-exactness-of-sheaves-stalkwise]]).

[F6] A morphism of sheaves of sets is an isomorphism if and only if all its stalk maps are bijections ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F7] A natural transformation $\alpha:F\Rightarrow G$ of additive functors on the domain of a supplied injective resolution datum induces natural maps $\mathbf R_I^n(\alpha):R_I^nF\Rightarrow R_I^nG$ on the derived objects ([[prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors]]).

[F8] Cochain-homotopic cochain maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F9] The derived objects $R_I^nF$ form an additive functor in $A$ for a fixed additive $F$ ([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[F10] AC implies DC in ZF ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F11] Under DC a morphism from the coaugmentation of an exact coaugmented complex into the coaugmentation of a complex of injective objects extends to a coaugmentation-preserving cochain map, and any two such lifts are cochain-homotopic ([[lem-comparison-map-from-an-exact-complex-into-an-injective-resolution]]).

[F12] $\Gamma(X,-)$ is an additive left exact functor ([[def-global-sections-functor-sheaves]]).

[F13] The direct image sheaf satisfies $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$, so over $Y$ it is $\Gamma(Y,f_*\mathcal F)=\Gamma(X,\mathcal F)$ ([[def-direct-image-sheaf]]).

## Proof

**Given:** The Axiom of Choice, the continuous map $f:X\to Y$, the abelian sheaves $\mathcal G$ on $Y$ and $\mathcal F$ on $X$, and the morphism $\varphi:f^{-1}\mathcal G\to\mathcal F$.

1.1 By [F10] AC gives DC, which is the hypothesis of the comparison item [F11]; by [F12] the global-sections functors are additive and left exact, and applying [[thm-abelian-sheaves-have-enough-injectives]] to $X$ and to $Y$ supplies functorial injective resolution data $I_X$ and $I_Y$. Hence $H^q(X,-)$ and $H^q(Y,-)$ are defined by [F1], and the inverse image $f^{-1}$ is additive because it is a left adjoint [F3]. [F3, F10, F12, given]

1.2 For a morphism $\varphi:\mathcal F\to\mathcal G$ in $\mathrm{Ab}(X)$, put $H^q(X,\varphi):=R_{I_X}^q\Gamma(\varphi)$; this is additive in $\varphi$ and preserves identities and composites because $R_{I_X}^q\Gamma$ is an additive functor on the domain of $I_X$ by [F9]. Thus $\mathcal F\mapsto H^q(X,\mathcal F)$ is a covariant additive functor, which is assertion 1. [F1, F9]

1.3 For a sheaf $\mathcal H$ on $Y$, applying [F3] to the identity of $f^{-1}\mathcal H$ produces the unit $\eta_{\mathcal H}:\mathcal H\to f_*f^{-1}\mathcal H$; taking sections over $Y$ and using $(f_*f^{-1}\mathcal H)(Y)=(f^{-1}\mathcal H)(X)$ [F13] gives the section-pullback map $\Gamma(Y,\mathcal H)\to\Gamma(X,f^{-1}\mathcal H)$, natural in $\mathcal H$. [F3, F13]

1.4 The functor $f^{-1}$ is exact: by [F4] the stalk at $x$ of the inverse image of a sequence of sheaves on $Y$ is the stalk of that sequence at $f(x)$, so by [F5] every exact sequence on $Y$ pulls back to a sequence exact at each $x\in X$; hence $f^{-1}$ is exact and preserves kernels and cokernels. [F4, F5]

2.1 For continuous maps $f:X\to Y$ and $g:Y\to Z$ the functors $(gf)^{-1}$ and $f^{-1}g^{-1}$ agree on stalks by [F4], both giving $\mathcal H_{g(f(x))}$ at $x$, so the canonical comparison $(gf)^{-1}\mathcal H\to f^{-1}g^{-1}\mathcal H$ is an isomorphism by [F6]; the identification is compatible with the units of step 1.3, the unit of a composite adjunction being the composite of the units. [F4, F6]

2.2 By [F7] the natural transformation $\alpha:\Gamma(Y,-)\Rightarrow\Gamma(X,f^{-1}(-))$ of step 1.3 induces, for every $q$, a natural map $R_{I_Y}^q\Gamma(Y,\mathcal H)\to R_{I_Y}^q\bigl(\Gamma(X,f^{-1}(-))\bigr)(\mathcal H)$; by [F1] the target is $H^q\bigl(\Gamma(X,f^{-1}I_Y(\mathcal H)^\bullet)\bigr)$, the cohomology of the complex obtained by applying $\Gamma(X,-)$ to the deleted resolution $f^{-1}I_Y(\mathcal H)^\bullet_{\mathrm{del}}$. Hence there is a natural map $H^q(Y,\mathcal H)\to H^q(\Gamma(X,f^{-1}I_Y(\mathcal H)^\bullet))$. [F1, F7, step 1.3] [F1, F7]

2.3 Let $\mathcal G$ be a sheaf on $Y$ and $\varphi:f^{-1}\mathcal G\to\mathcal F$. By step 1.4 the complex $f^{-1}I_Y(\mathcal G)^\bullet$ is an exact coaugmented complex resolving $f^{-1}\mathcal G$, and $I_X(\mathcal F)^\bullet$ is a complex of injectives, so by [F11] the morphism $\varphi$ extends to a coaugmentation-preserving cochain map $\psi^\bullet:f^{-1}I_Y(\mathcal G)^\bullet\to I_X(\mathcal F)^\bullet$, unique up to cochain homotopy. [F11, step 1.4, construct] [F11, construct]

3.1 Define the space map as the composite $$H^q(Y,\mathcal G)\to H^q\bigl(\Gamma(X,f^{-1}I_Y(\mathcal G)^\bullet)\bigr)\xrightarrow{\ H^q(\Gamma(\psi^\bullet))\ }H^q\bigl(\Gamma(X,I_X(\mathcal F)^\bullet)\bigr)=H^q(X,\mathcal F),$$ the first arrow from step 2.2 and the last identification from [F1]. By [F11] any two lifts $\psi^\bullet$ are cochain-homotopic, hence by [F8] they induce the same map on cohomology, so the composite depends only on $\varphi$; it is natural in $\mathcal G$ and $\mathcal F$ by step 2.2 and by naturality of $H^q(X,-)$ [F1]. [F1, F8, F11, step 2.2, step 2.3] [F1, F8, F11]

4.1 For composable data as in the statement the map of the composite pair agrees with the composite of the two maps: step 2.1 identifies $(gf)^{-1}\mathcal H$ with $f^{-1}g^{-1}\mathcal H$, the unit of the composite adjunction is the composite of the units by step 1.3, and the two comparison maps involved differ by a cochain homotopy by [F11], hence induce the same map on cohomology by [F8]. In degree $0$, step 3.1 is the composite $\Gamma(Y,\mathcal G)\to\Gamma(X,f^{-1}\mathcal G)\to\Gamma(X,\mathcal F)$ of section pullback with $\Gamma(X,\varphi)$, by [F2] and step 1.3. [F2, F8, F11, step 2.1, step 3.1] ∎ [F2, F8, F11] ∎
