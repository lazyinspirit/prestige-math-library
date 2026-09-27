---
id: "lem-abelian-sheaves-form-a-grothendieck-category"
kind: "lemma"
title: "Abelian sheaves form a Grothendieck category"
status: draft
origin: pipeline
deps: [def-grothendieck-category, thm-abelian-sheaves-form-abelian-category, def-morphism-of-presheaves, thm-exactness-of-sheaves-stalkwise, thm-sheafification-universal-property, thm-sheafification-preserves-stalks, thm-extension-by-zero-adjunction-exactness, def-extension-by-zero-abelian-sheaf, def-sheafification, thm-ab5-is-equivalent-to-exactness-of-filtered-colimits, prop-abelian-groups-are-z-modules, thm-module-categories-are-grothendieck-categories, lem-equality-in-a-filtered-colimit-of-sets-is-eventual, def-stalk-of-presheaf, def-separating-set-and-coseparating-set, def-generator-and-cogenerator-of-a-category]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "The Stacks Project, Injectives (tag 01DF)"
      url: https://stacks.math.columbia.edu/tag/01DF
---

## Statement

Let $X$ be a topological space whose open sets form a set. Then the category
$\mathrm{Ab}(X)$ of sheaves of abelian groups on $X$ is locally small, is
cocomplete (AB3), satisfies AB5, and has a generator, namely
$$G:=\coprod_{U\subseteq X\text{ open}}j_{U!}\,\mathbb Z_U,$$
the coproduct over the set of open subsets of $X$ of the extension by zero
([[def-extension-by-zero-abelian-sheaf]]) along $j_U:U\hookrightarrow X$ of the
sheaf $\mathbb Z_U$ on $U$ associated to the constant presheaf with value
$\mathbb Z$ ([[def-sheafification]]). Consequently $\mathrm{Ab}(X)$ is a
Grothendieck category ([[def-grothendieck-category]]).

## Facts & Assumptions

[F1] $\mathrm{Ab}(X)$ is an abelian category; a morphism of abelian sheaves is a morphism of the underlying presheaves, and addition of morphisms is componentwise ([[thm-abelian-sheaves-form-abelian-category]], [[def-morphism-of-presheaves]]).

[F2] Sheafification is left adjoint to the inclusion of sheaves among presheaves: every presheaf morphism into a sheaf factors uniquely through the sheafification map ([[thm-sheafification-universal-property]]).

[F3] A sequence of abelian sheaves is exact if and only if all of its stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F4] The sheafification map of a presheaf $\mathcal F$ induces a bijection on stalks $\mathcal F_x\to(a\mathcal F)_x$ for every $x$ ([[thm-sheafification-preserves-stalks]]).

[F5] Extension by zero is left adjoint to restriction along an open inclusion: $\operatorname{Hom}_X(j_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G)$ ([[thm-extension-by-zero-adjunction-exactness]]).

[F6] A cocomplete abelian category satisfies AB5 if and only if every small filtered colimit functor on it is exact ([[thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]]).

[F7] Abelian groups are the same objects and morphisms as $\mathbb Z$-modules ([[prop-abelian-groups-are-z-modules]]).

[F8] For every ring $R$ the category of left $R$-modules is a Grothendieck category ([[thm-module-categories-are-grothendieck-categories]]).

[F9] The stalk at $x$ of a presheaf is the filtered colimit of its section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F10] In a small filtered diagram of sets, two elements have equal images in the colimit if and only if they become equal after restriction to a common later stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F11] A set $\{G\}$ is separating exactly when for all distinct $f,g$ there is $h:G\to X$ with $f\circ h\ne g\circ h$ ([[def-separating-set-and-coseparating-set]]).

[L1] A Grothendieck category is an abelian category satisfying AB5 and possessing a generator, and a generator is an object whose singleton family is separating ([[def-grothendieck-category]], [[def-generator-and-cogenerator-of-a-category]]).

## Proof

**Given:** A topological space $X$ whose open sets form a set.

1.1 A morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves is a family of group homomorphisms $\varphi_U:\mathcal F(U)\to\mathcal G(U)$ over the open sets of $X$, compatible with restriction, and $\varphi=\psi$ exactly when $\varphi_U=\psi_U$ for all $U$ [F1]. Hence $\operatorname{Hom}(\mathcal F,\mathcal G)$ is a subset of the product $\prod_U\operatorname{Hom}_{\mathbf{Ab}}(\mathcal F(U),\mathcal G(U))$ indexed by the set of opens, which is a set. Thus $\mathrm{Ab}(X)$ is locally small. [F1, given]

1.2 Let $(\mathcal F_i)_{i\in I}$ be a family of abelian sheaves indexed by a set $I$ and let $P$ be the presheaf $U\mapsto\bigoplus_i\mathcal F_i(U)$ with componentwise restriction maps. For an abelian sheaf $\mathcal G$, a presheaf morphism $P\to\mathcal G$ is exactly a family of morphisms $\mathcal F_i\to\mathcal G$ (the universal property of the direct sum of groups, applied over each open set), and [F2] converts presheaf morphisms $P\to\mathcal G$ into sheaf morphisms $aP\to\mathcal G$. So $\operatorname{Hom}(aP,\mathcal G)\cong\prod_i\operatorname{Hom}(\mathcal F_i,\mathcal G)$, naturally in $\mathcal G$, and $aP$ is a coproduct of the family. Hence coproducts indexed by sets exist in $\mathrm{Ab}(X)$. [F2, construct]

1.3 Filtered colimits of abelian groups are exact: by [F7] it suffices to treat $\mathbb Z$-modules, and $\mathbb Z\text{-}\mathbf{Mod}$ is a Grothendieck category [F8], hence satisfies AB5, so by [F6] every filtered colimit functor on it is exact. Thus for a small filtered diagram of short exact sequences $0\to A_i\to B_i\to C_i\to 0$ of abelian groups the colimit sequence $0\to\operatorname*{colim}_iA_i\to\operatorname*{colim}_iB_i\to\operatorname*{colim}_iC_i\to 0$ is short exact. [F6, F7, F8, algebra]

2.1 Let $D$ be a small diagram in $\mathrm{Ab}(X)$. Because coequalizers exist in the abelian category $\mathrm{Ab}(X)$ [F1] and small coproducts exist by step 1.2, the coequalizer of the two canonical maps $\coprod_{f}\mathcal F_{f(0)}\rightrightarrows\coprod_{i}\mathcal F_i$ built from the diagram maps and the identities exists and satisfies the universal property of $\operatorname*{colim}D$. Hence $\mathrm{Ab}(X)$ is cocomplete and satisfies AB3. [F1, step 1.2, construct] [F1, construct]

2.2 For an open $U\subseteq X$ let $j_U:U\hookrightarrow X$ be the inclusion and let $\mathbb Z_U$ be the sheaf on $U$ associated with the constant presheaf with value $\mathbb Z$; write $G_U:=j_{U!}\mathbb Z_U$. For every abelian sheaf $\mathcal F$ on $X$, [F5] and the identification $j_U^{-1}\mathcal F=\mathcal F|_U$ give $\operatorname{Hom}_X(G_U,\mathcal F)\cong\operatorname{Hom}_{U}(\mathbb Z_U,\mathcal F|_U)$. A morphism $\mathbb Z_U\to\mathcal F|_U$ corresponds, by the universal property of sheafification [F2], to a presheaf morphism out of the constant presheaf, which is exactly the data of an element $s\in\mathcal F(U)$ (the image of $1\in\mathbb Z$, the value of the constant presheaf on $U$, with compatibility forced by the restriction maps of the constant presheaf); conversely every $s\in\mathcal F(U)$ gives such a morphism by $n\mapsto n\cdot s|_V$ over $V\subseteq U$. Hence $\operatorname{Hom}_X(G_U,\mathcal F)\cong\mathcal F(U)$, naturally in $\mathcal F$. The coproduct $G:=\coprod_U G_U$ over the set of all open subsets exists by step 1.2 and satisfies $\operatorname{Hom}(G,\mathcal F)\cong\prod_U\mathcal F(U)$ naturally in $\mathcal F$. [F2, F5, step 1.2, construct] [F2, F5, construct]

3.1 Let $(\mathcal F_i)_{i\in\mathcal J}$ be a small filtered diagram of abelian sheaves with objectwise colimit presheaf $P$, so that $\operatorname*{colim}_i\mathcal F_i=aP$ by step 2.1 and step 1.2. Colimits of presheaves are computed objectwise, since a cocone on the diagram is exactly a compatible family of cocones over the open sets. Fix $x\in X$. An element of $P_x$ is represented by a pair $(i,s)$ with $s\in\mathcal F_i(W)$ for some open neighbourhood $W$ of $x$ [F9], and by [F10] applied to the filtered index categories $\mathcal J$ and $\mathcal N_x^{\mathrm{op}}$ two such pairs $(i_1,W_1,s_1)$ and $(i_2,W_2,s_2)$ have the same image in $P_x$ if and only if they can be refined to a common $(i_3,W_3,s_3)$; the same relation describes equality in $\operatorname*{colim}_i(\mathcal F_i)_x$, because $(\mathcal F_i)_x=\operatorname*{colim}_{W\ni x}\mathcal F_i(W)$ [F9]. Both sides are therefore the filtered colimit of the same diagram $\mathcal J\times\mathcal N_x^{\mathrm{op}}\to\mathbf{Ab}$, and the canonical comparison is an isomorphism of abelian groups, compatible with the maps from the diagram. Composing with the bijection $(aP)_x\cong P_x$ of [F4] gives a natural isomorphism $(\operatorname*{colim}_i\mathcal F_i)_x\cong\operatorname*{colim}_i(\mathcal F_i)_x$: stalks of sheaves commute with filtered colimits. [F4, F9, F10, step 2.1, algebra] [F4, F9, F10, algebra]

3.2 Let $f\ne g:\mathcal F\to\mathcal F_0$ be distinct morphisms of abelian sheaves. Since morphisms are their families of components [F1], $f-g\ne0$ gives an open $U$ and a section $s\in\mathcal F(U)$ with $(f-g)_U(s)\ne0$. Under the bijection of step 2.2 the pair $(U,s)$ corresponds to a morphism $h:G_U\to\mathcal F$; the coproduct universal property extends $h$ by zero on all other summands to a morphism $\bar h:G\to\mathcal F$; its composite with the injection $G_U\to G$ is $h$, so $(f-g)\circ\bar h\ne0$, that is $f\circ\bar h\ne g\circ\bar h$. By [F11] the singleton family $\{G\}$ is separating, so $G$ is a generator of $\mathrm{Ab}(X)$. [F1, F11, step 2.2] [F1, F11]

4.1 Let $0\to\mathcal A_i\to\mathcal B_i\to\mathcal C_i\to0$ be a small filtered diagram of short exact sequences of abelian sheaves, i.e. a short exact sequence of diagrams, and fix $x\in X$. The stalk sequences $0\to(\mathcal A_i)_x\to(\mathcal B_i)_x\to(\mathcal C_i)_x\to0$ are exact by [F3], and by step 3.1 the stalk at $x$ of the colimit diagram is the filtered colimit of these exact sequences, which is short exact by step 1.3. Since exactness of sequences of sheaves is stalkwise [F3], the colimit sequence $0\to\operatorname*{colim}_i\mathcal A_i\to\operatorname*{colim}_i\mathcal B_i\to\operatorname*{colim}_i\mathcal C_i\to0$ is short exact. Thus every small filtered colimit functor on $\mathrm{Ab}(X)$ preserves short exact sequences; it is additive and preserves finite coproducts because it is a left adjoint (its right adjoint is the constant diagram functor) and preserves the zero object, and preservation of kernels and cokernels follows from the same stalkwise computation applied to the exact sequences $0\to\ker\to\cdot\to\operatorname{im}\to0$. Hence every small filtered colimit functor on $\mathrm{Ab}(X)$ is exact. [F3, step 1.3, step 3.1, algebra] [F3, algebra]

5.1 By step 2.1 the category $\mathrm{Ab}(X)$ is cocomplete and abelian [F1], so the equivalence [F6] applies; step 4.1 shows that every small filtered colimit functor on it is exact, so $\mathrm{Ab}(X)$ satisfies AB5. [F1, F6, step 2.1, step 4.1] [F1, F6]

6.1 The steps 1.1, 2.1, 5.1 and 3.2 show that $\mathrm{Ab}(X)$ is locally small, abelian, cocomplete, satisfies AB5 and has a generator; by [L1] the last three properties together with the abelian structure make it a Grothendieck category. [L1, step 1.1, step 2.1, step 5.1, step 3.2] ∎
