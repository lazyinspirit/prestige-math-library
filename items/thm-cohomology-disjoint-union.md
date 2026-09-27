---
id: "thm-cohomology-disjoint-union"
kind: "theorem"
title: "Cohomology of a finite disjoint union"
status: published
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, thm-extension-by-zero-adjunction-exactness, prop-derived-functors-commute-with-finite-biproducts, def-axiom-of-choice, thm-abelian-sheaves-have-enough-injectives, def-global-sections-functor-sheaves, def-godement-resolution, def-restriction-sheaf-open-subspace, def-injective-object, lem-comparison-map-from-an-exact-complex-into-an-injective-resolution, thm-chain-homotopic-maps-induce-the-same-map-on-homology, thm-choice-implies-dependent-implies-countable-choice, thm-exactness-of-sheaves-stalkwise, thm-zero-sheaf-cohomology-global-sections, def-sheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space which is the disjoint union $X=\bigsqcup_{a\in A}X_a$ of
finitely many pairwise disjoint subspaces $X_a$ that are both open and closed in
$X$, and let $\mathcal F$ be a sheaf of abelian groups on $X$. Then for every
$q\ge0$ there is a canonical isomorphism
$$H^q(X,\mathcal F)\cong\prod_{a\in A}H^q\bigl(X_a,\mathcal F|_{X_a}\bigr),$$
natural in $\mathcal F$; for finite $A$ the product equals the direct sum
$\bigoplus_{a\in A}H^q(X_a,\mathcal F|_{X_a})$. In particular, for the empty
disjoint union $A=\varnothing$ one has $H^q(\varnothing,\mathcal F)=0$ for every
$q$.

## Facts & Assumptions

[F1] Extension by zero along an open inclusion $j:U\hookrightarrow X$ is left adjoint to restriction, $\operatorname{Hom}_X(j_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G)$, and $j_!$ is exact on sheaves of abelian groups ([[thm-extension-by-zero-adjunction-exactness]]).

[F2] Products of sheaves are computed open by open, so for an open $V\subseteq X$ the sections of a product sheaf are the product of the section groups ([[def-godement-resolution]]).

[F3] $H^q(X,\mathcal F)=R_I^q\Gamma(X,\mathcal F)$ is computed from the supplied functorial injective resolution datum ([[def-sheaf-cohomology-derived-global-sections]]).

[F4] The global-sections functor is left exact and additive ([[def-global-sections-functor-sheaves]]), so the right derived functor $R_I^nF$ of an additive functor preserves finite biproducts ([[prop-derived-functors-commute-with-finite-biproducts]]); that proposition assumes the Axiom of Dependent Choice.

[F5] Under DC, maps from an exact coaugmented complex into a complex of injectives extend the given object map uniquely up to cochain homotopy ([[lem-comparison-map-from-an-exact-complex-into-an-injective-resolution]]). Apply this in both directions to two injective resolutions of one object and the identity: their composites are homotopic to the identities. An additive functor preserves those homotopies and their cohomology maps are inverse and independent of the lifts ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]). AC supplies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] An injective object $I$ of an abelian category is one for which every morphism from a subobject extends along a monomorphism ([[def-injective-object]]).

[F7] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ canonically and naturally ([[thm-zero-sheaf-cohomology-global-sections]]).

## Proof

**Given:** A topological space $X$ partitioned into finitely many pairwise disjoint open and closed subspaces $X_a$, a sheaf of abelian groups $\mathcal F$ on $X$, and the supplied functorial injective resolution $I^\bullet$ of $\mathcal F$.

1.1 Write $j_a:X_a\hookrightarrow X$ for the inclusions. For every open $V\subseteq X$ one has $V=\bigsqcup_a(V\cap X_a)$ with each $V\cap X_a$ open in $X_a$, and the functor $\rho:\mathcal F\mapsto(\mathcal F|_{X_a})_a$ from $\mathrm{Ab}(X)$ to $\prod_a\mathrm{Ab}(X_a)$ has the functor $\prod_a(j_a)_*$ as an inverse up to natural isomorphism: the stalk of $(j_a)_*(\mathcal F|_{X_a})$ at $x\in X_b$ is $(\mathcal F|_{X_a})_x$ if $b=a$ and $0$ if $b\ne a$, the second case because $X\setminus X_a$ is open and contains $x$, so the colimit defining the stalk is taken over open sets disjoint from $X_a$; consequently $\rho\prod_a(j_a)_*(F_a)=(F_a)_a$ and $\prod_a(j_a)_*\rho(\mathcal F)\cong\mathcal F$ stalkwise. Hence $\rho$ is an equivalence of categories, and in particular $\Gamma(X,\mathcal F)=\mathcal F(X)=\prod_a\mathcal F_a(X_a)$: a section over $X$ is the same as a compatible family of sections over the $X_a$, by the sheaf axiom applied to the open cover $\{X_a\}$, and by [F2] sections of the product of the direct images over $X$ are the product of the groups $\mathcal F_a(X_a)$. [F2]

1.2 Because $j_a^{-1}$ has the exact left adjoint $j_{a!}$ by [F1], the functor $j_a^{-1}$ preserves injective objects: for an injective $I\in\mathrm{Ab}(X)$ and a monomorphism $A\rightarrowtail B$ in $\mathrm{Ab}(X_a)$, the adjunction identifies $\operatorname{Hom}(A,I|_{X_a})\cong\operatorname{Hom}(j_{a!}A,I)$ and $\operatorname{Hom}(B,I|_{X_a})\cong\operatorname{Hom}(j_{a!}B,I)$, the map $j_{a!}A\to j_{a!}B$ is a monomorphism by exactness of $j_{a!}$, and $I$ injective by [F6] makes the induced map on Hom groups surjective; hence $I|_{X_a}$ is injective. Also $j_a^{-1}$ is exact, since exactness of sheaves can be tested on stalks ([[thm-exactness-of-sheaves-stalkwise]]) and the stalk of a restriction is the corresponding stalk. Applying this to the resolution $0\to\mathcal F\to I^\bullet$ shows that $0\to\mathcal F|_{X_a}\to I^\bullet|_{X_a}$ is a resolution of $\mathcal F|_{X_a}$ by injective sheaves on $X_a$, so its cohomology computes $H^\bullet(X_a,\mathcal F|_{X_a})$ by [F5]. [F1, F5, F6]

2.1 Taking global sections in [step 1.1] degree by degree gives an isomorphism of cochain complexes $\Gamma(X,I^\bullet)\cong\prod_a\Gamma(X_a,I^\bullet|_{X_a})$, since the $q$-th term of the right-hand side is $\prod_a\Gamma(X_a,I^q|_{X_a})=\Gamma(X,I^q)$ by the section computation of [step 1.1]. For a finite product of cochain complexes the cohomology of the product is the product of the cohomologies, because the kernel and image of a componentwise differential are the products of the component kernels and images, and quotient by the product of images gives the product of the quotients (only finitely many representatives are needed); hence, using that $H^q(X,\mathcal F)=R_I^q\Gamma(X,\mathcal F)=H^q(\Gamma(X,I^\bullet))$ by [F3], $H^q(X,\mathcal F)\cong\prod_aH^q\bigl(\Gamma(X_a,I^\bullet|_{X_a})\bigr)\cong\prod_aH^q(X_a,\mathcal F|_{X_a})$, the last step by [step 1.2]. Naturality in $\mathcal F$ follows from the functoriality of the supplied resolutions and of the equivalence in [step 1.1]. This proves the theorem; in degree zero it specializes to $H^0(X,\mathcal F)\cong\prod_a\Gamma(X_a,\mathcal F|_{X_a})=\Gamma(X,\mathcal F)$ by [F7]. ∎ [F3, F4, F7, step 1.1, step 1.2]
