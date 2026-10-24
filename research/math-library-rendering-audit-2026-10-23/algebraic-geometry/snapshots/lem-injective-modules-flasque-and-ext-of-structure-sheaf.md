---
id: lem-injective-modules-flasque-and-ext-of-structure-sheaf
kind: lemma
title: Injective modules are flasque and Ext from the structure sheaf is cohomology
status: published
origin: pipeline
deps:
  - def-sheaf-ext-for-coherent-modules
  - lem-ringed-space-module-sheaves-enough-injectives
  - def-sheaf-cohomology-derived-global-sections
  - def-flasque-sheaf
  - def-injective-object
  - def-module-on-ringed-space
  - def-extension-by-zero-abelian-sheaf
  - thm-extension-by-zero-adjunction-exactness
  - def-kernel-cokernel-image-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - thm-flasque-sheaves-acyclic
  - def-acyclic-object-for-a-left-exact-functor
  - def-f-acyclic-resolution
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Sheaves of Modules"
      url: "https://stacks.math.columbia.edu/tag/01DI"
      locator: "Lemma 19.5.1 (tag 01DI), enough injectives for sheaves of modules on a ringed space"
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/tag/01EA
      locator: "Lemma 20.8.1 (tag 01EA), injective sheaves are flasque"
---

## Statement

Assume the Axiom of Choice. Let $(Y,\mathcal O_Y)$ be a ringed space, let
$H^q(Y,-)$ be sheaf cohomology computed from the supplied functorial injective
resolution datum on $\mathrm{Ab}(Y)$ of
[[def-sheaf-cohomology-derived-global-sections]], and let
$\operatorname{Ext}^q_{\mathcal O_Y}$ be the global sheaf Ext of
[[def-sheaf-ext-for-coherent-modules]].

1. Every injective $\mathcal O_Y$-module $\mathcal I$
   ([[def-injective-object]]) is flasque as a sheaf of abelian groups
   ([[def-flasque-sheaf]]): for all open subsets $U\subseteq V\subseteq Y$ the
   restriction map $\mathcal I(V)\to\mathcal I(U)$ is surjective.
2. For every $\mathcal O_Y$-module $\mathcal G$ and every $q\ge0$ there is a
   canonical isomorphism
   $$\chi^q_{\mathcal G}:\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal O_Y,\mathcal G)\xrightarrow{\ \sim\ }H^q(Y,\mathcal G),$$
   natural in $\mathcal G$; in degree zero it is the composite
   $\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,\mathcal G)\cong\Gamma(Y,\mathcal G)=H^0(Y,\mathcal G)$
   which sends a morphism to its value at the unit section.

## Facts & Assumptions

**Given:** a ringed space $(Y,\mathcal O_Y)$, an open inclusion of opens $U\subseteq V\subseteq Y$, an injective $\mathcal O_Y$-module $\mathcal I$, an $\mathcal O_Y$-module $\mathcal G$, and the supplied functorial injective resolution data used in [[def-sheaf-ext-for-coherent-modules]] and in [[def-sheaf-cohomology-derived-global-sections]].

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] An $\mathcal O_Y$-module is a sheaf of abelian groups with a compatible $\mathcal O_Y$-module structure, and morphisms of $\mathcal O_Y$-modules are the module-structure-compatible morphisms of the underlying sheaves; the forgetful functor to $\mathrm{Ab}(Y)$ preserves kernels and cokernels. ([[def-module-on-ringed-space]])

[F2] An object $I$ of an abelian category is injective when every morphism $M\to I$ out of a subobject extends over the inclusion. ([[def-injective-object]])

[F3] Extension by zero $j_!$ along an open inclusion $j:U\hookrightarrow Y$ is left adjoint to restriction, $\operatorname{Hom}_Y(j_!\mathcal F,\mathcal H)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal H)$, and $j_!$ is exact; over an open $W\subseteq Y$ its sections are the sections of $\mathcal F$ over $W\cap U$ whose support is closed in $W$. ([[thm-extension-by-zero-adjunction-exactness]], [[def-extension-by-zero-abelian-sheaf]])

[F4] The kernel of a morphism of sheaves is computed on sections over every open, so a morphism of sheaves whose section maps are all injective has zero kernel and is a monomorphism. ([[def-kernel-cokernel-image-sheaves]], [[thm-exactness-of-sheaves-stalkwise]])

[F5] A sheaf of abelian groups is flasque when all restriction maps $\mathcal F(V)\to\mathcal F(U)$ for open $U\subseteq V$ are surjective, and a flasque abelian sheaf $\mathcal F$ satisfies $H^q(W,\mathcal F|_W)=0$ for every open $W$ and every $q>0$: it is acyclic for the global-sections functor. ([[def-flasque-sheaf]], [[thm-flasque-sheaves-acyclic]], [[def-acyclic-object-for-a-left-exact-functor]])

[F6] With an $\mathcal O_Y$-injective resolution $\mathcal G\to I^\bullet$ one has $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal O_Y,\mathcal G)=H^q\bigl(\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,I^\bullet)\bigr)$, and this is independent of the supplied resolution up to canonical isomorphism; the functorial datum of the cited module-injective supplier provides such a resolution for every $\mathcal G$ under the Axiom of Choice. ([[def-sheaf-ext-for-coherent-modules]], [[lem-ringed-space-module-sheaves-enough-injectives]])

[F7] $H^q(Y,\mathcal H):=R_I^q\Gamma(Y,\mathcal H)=H^q(\Gamma(Y,I^\bullet(\mathcal H))_{\mathrm{del}})$ is the $q$-th right derived object of the global-sections functor relative to the supplied functorial injective resolution datum on $\mathrm{Ab}(Y)$, with $H^q(Y,\mathcal H)=0$ for $q<0$. ([[def-sheaf-cohomology-derived-global-sections]])

[F8] Acyclic-resolution theorem: if $F$ is additive and left exact, $I$ is a supplied injective resolution datum on a class $\mathcal D$ containing the object $A$ and the cycles of a given exact coaugmented complex $0\to A\to J^0\to J^1\to\cdots$, and each $J^q$ is $F$-acyclic, then under the Axiom of Dependent Choice there is a canonical isomorphism $R_I^nF(A)\cong H^n(F(J^\bullet_{\mathrm{del}}))$ for every $n\ge0$. ([[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-f-acyclic-resolution]])

[F9] In ZF the Axiom of Choice implies the Axiom of Dependent Choice, which is the choice principle consumed by [F8]. ([[thm-choice-implies-dependent-implies-countable-choice]])



**Given:** the data of the statement, an open inclusion $U\subseteq V\subseteq Y$, and an injective $\mathcal O_Y$-module $\mathcal I$.

## Proof

1.1 Extension by zero for modules. Let $o:U\hookrightarrow Y$ be an open inclusion and let $\mathcal G$ be an $\mathcal O_U$-module. Define the presheaf $o_!^{\mathrm{mod}}\mathcal G$ on $Y$ by $$(o_!^{\mathrm{mod}}\mathcal G)(W)=\{s\in\mathcal G(W\cap U):\operatorname{Supp}(s)\text{ is closed in }W\},\qquad W\subseteq Y\text{ open},$$ with restriction maps those of $\mathcal G$ and with the $\mathcal O_Y(W)$-module structure induced by the ring map $\mathcal O_Y(W)\to\mathcal O_U(W\cap U)$ [F1]. The support condition is stable under multiplication by functions and under restrictions, and the presheaf is a sheaf because its sections are the sections of the abelian extension by zero $o_!\mathcal G$ of [F3] with the additional module structure: the underlying abelian sheaf of $o_!^{\mathrm{mod}}\mathcal G$ is exactly $o_!\mathcal G$, and the module structure is well defined on the same section sets. Consequently the functor $o_!^{\mathrm{mod}}$ is exact on $\mathcal O$-modules, since the forgetful functor to abelian sheaves preserves kernels and cokernels [F1] and $o_!$ is exact on abelian sheaves [F3]. [F1, F3, construct]

1.2 The Hom complex of the structure sheaf. For every $\mathcal O_Y$-module $\mathcal H$ the map $$\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,\mathcal H)\longrightarrow\Gamma(Y,\mathcal H),\qquad \varphi\longmapsto\varphi_Y(1_Y),$$ is a bijection: two morphisms with the same value at $1_Y$ agree on the unit section over every open and hence on all sections, and conversely a section $s\in\Gamma(Y,\mathcal H)$ defines a morphism whose value on $f\in\mathcal O_Y(W)$ is $f\cdot s|_W$, with inverse given by the unit section. This bijection is natural in $\mathcal H$ and identifies the complex $\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,J^\bullet)$ degreewise with the complex $\Gamma(Y,J^\bullet)$ of [F1], the differentials corresponding because both are postcomposition with the differentials of $J^\bullet$. Hence $$H^q\bigl(\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,J^\bullet)\bigr)\cong H^q\bigl(\Gamma(Y,J^\bullet_{\mathrm{del}})\bigr)$$ for every $q\ge0$. [F1, F6]

2.1 The adjunction. The abelian-sheaf adjunction of [F3] sends a morphism $o_!^{\mathrm{mod}}\mathcal G\to\mathcal H$ to its restriction over $U$. It restricts to an adjunction of $\mathcal O$-modules. Indeed an $\mathcal O_Y$-linear map restricts over $U$ to an $\mathcal O_U$-linear map. Conversely the abelian adjoint of an $\mathcal O_U$-linear map is $\mathcal O_Y$-linear stalkwise: at a point of $U$ the stalk map is the given $\mathcal O_U$-linear map, and at a point outside $U$ the source stalk of $o_!\mathcal G$ is zero; equality of the two candidate multiplication morphisms is detected on stalks. Thus $$\operatorname{Hom}_{\mathcal O_Y}(o_!^{\mathrm{mod}}\mathcal G,\mathcal H)\cong\operatorname{Hom}_{\mathcal O_U}(\mathcal G,\mathcal H|_U).$$ For $\mathcal G=\mathcal O_U$ and $\mathcal H=\mathcal I$, evaluation at the unit section gives $$\operatorname{Hom}_{\mathcal O_Y}(o_!^{\mathrm{mod}}\mathcal O_U,\mathcal I)\cong\operatorname{Hom}_{\mathcal O_U}(\mathcal O_U,\mathcal I|_U)\cong\mathcal I(U).$$ This uses stalkwise module linearity, not surjectivity of $\mathcal O_Y(W)\to\mathcal O_U(W\cap U)$, which need not hold. [F1, F3, step 1.1, construct]

2.2 The comparison map is a monomorphism. For open $U\subseteq V\subseteq Y$ let $i:U\hookrightarrow V$ be the inclusion. The natural map $$\alpha:o_!^{\mathrm{mod}}\mathcal O_U\longrightarrow o_!^{\mathrm{mod}}\mathcal O_V$$ that extends a section of $\mathcal O_Y$ over $W\cap U$ with support closed in $W$ by zero across $W\cap(V\setminus U)$ is a morphism of $\mathcal O_Y$-modules, because extension by zero is $\mathcal O_Y(W)$-linear on the subsheaf of sections with closed support [F1, step 1.1]. Its section maps are injective: a section $s$ over $W\cap U$ with closed support in $W$, extended by zero over $W\cap(V\setminus U)$, has support closed in $W$ as well and restricts back to $s$. Hence $\ker(\alpha)=0$ by [F4], so $\alpha$ is a monomorphism. [F4, step 1.1]

3.1 Injective modules are flasque. Let $s\in\mathcal I(U)$. Under the bijection of step 2.1 for $U$ the element $s$ corresponds to some morphism $f:o_!^{\mathrm{mod}}\mathcal O_U\to\mathcal I$. By step 2.2 the map $\alpha$ is a monomorphism, so [F2] applied to the subobject $\alpha:o_!^{\mathrm{mod}}\mathcal O_U\rightarrowtail o_!^{\mathrm{mod}}\mathcal O_V$ and the morphism $f$ provides $g:o_!^{\mathrm{mod}}\mathcal O_V\to\mathcal I$ with $g\circ\alpha=f$. Let $t\in\mathcal I(V)$ correspond to $g$ under the bijection of step 2.1 for $V$. Precomposition with $\alpha$ corresponds under these two bijections to restriction along $U\subseteq V$, so $g\circ\alpha=f$ says $t|_U=s$. Hence every section over $U$ extends to $V$, the restriction map $\mathcal I(V)\to\mathcal I(U)$ is surjective, and since $U\subseteq V$ were arbitrary $\mathcal I$ is flasque, which is clause 1. [F2, F5, step 2.1, step 2.2]

4.1 Flasque injective resolutions compute cohomology. Let $\mathcal G$ be an $\mathcal O_Y$-module and let $\mathcal G\to J^\bullet$ be the $\mathcal O_Y$-injective resolution supplied by the functorial datum of [F6]. By step 3.1 every $J^p$ is flasque as an abelian sheaf, so $H^q(Y,J^p)=0$ for every $q>0$ by [F5]: each $J^p$ is acyclic for the global sections functor $\Gamma(Y,-)$ on $\mathrm{Ab}(Y)$. The underlying abelian complex of $\mathcal G\to J^\bullet$ is therefore a $\Gamma(Y,-)$-acyclic resolution of the abelian sheaf $\mathcal G$, with all its cycles lying in the class $\mathcal D$ of all abelian sheaves on $Y$, on which the supplied datum of [F7] is defined. The Axiom of Dependent Choice is available by [F9] and [A1], so [F8] gives a canonical isomorphism $$R_I^q\Gamma(Y,\mathcal G)\cong H^q\bigl(\Gamma(Y,J^\bullet_{\mathrm{del}})\bigr),\qquad q\ge0 .$$ [A1, F5, F6, F7, F8, F9, step 3.1]

5.1 Conclusion. Combining steps 4.1 and 1.2 with the identification $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal O_Y,\mathcal G)=H^q(\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,J^\bullet))$ of [F6] and $H^q(Y,\mathcal G)=R_I^q\Gamma(Y,\mathcal G)$ of [F7] gives the canonical isomorphism $\chi^q_{\mathcal G}$ of clause 2 for every $\mathcal O_Y$-module $\mathcal G$ and every $q\ge0$; in degree zero both bijections display the value at the unit section, which is the identification asserted in the statement. Naturality in $\mathcal G$ holds because the supplied resolution datum is functorial: a morphism $\psi:\mathcal G\to\mathcal G'$ gives a cochain map $J^\bullet(\mathcal G)\to J^\bullet(\mathcal G')$ commuting with the coaugmentations, and the comparisons used in steps 4.1 and 1.2 are built from the datum and the fixed functor $\Gamma(Y,-)$ and therefore intertwine the two $\chi$'s; the right-hand isomorphism of step 4.1 is the canonical comparison of the two acyclic resolutions, so the square commutes. Clause 1 is step 3.1. The Axiom of Choice [A1] is assumed in the statement and is used exactly through the functorial injective resolution data of [F6] and [F7] for modules and for abelian sheaves and, through the Dependent Choice instance of [F9], in the acyclic-resolution comparison of step 4.1; no further selection of resolutions, indices or sections is made, the charts and open sets being arbitrary parameters of the construction. [A1, F6, F7, F8, F9, step 3.1, step 4.1, step 1.2] ∎
