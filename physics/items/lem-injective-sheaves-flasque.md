---
id: "lem-injective-sheaves-flasque"
kind: "lemma"
title: "Injective abelian sheaves are flasque"
status: published
origin: pipeline
deps: [def-flasque-sheaf, def-injective-object, thm-extension-by-zero-adjunction-exactness, thm-exactness-of-sheaves-stalkwise, thm-abelian-sheaves-form-abelian-category, thm-sheafification-universal-property, def-sheafification, def-extension-by-zero-abelian-sheaf, def-kernel-cokernel-image-sheaves, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Let $X$ be a topological space and let $\mathcal I$ be an injective object of
$\mathrm{Ab}(X)$ ([[def-injective-object]],
[[thm-abelian-sheaves-form-abelian-category]]). Then $\mathcal I$ is flasque
([[def-flasque-sheaf]]): for all open subsets $U\subseteq V\subseteq X$ the
restriction map $\mathcal I(V)\to\mathcal I(U)$ is surjective.

No choice principle beyond the given data is used: the injective object
$\mathcal I$ is part of the hypothesis.

## Facts & Assumptions

[F1] An object $I$ of an abelian category is injective when every morphism $M\to I$ out of a subobject extends over the inclusion ([[def-injective-object]]).

[F2] Extension by zero along an open inclusion $j$ is left adjoint to restriction: $\operatorname{Hom}_X(j_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G)$, naturally in both variables, and $j_!$ is exact ([[thm-extension-by-zero-adjunction-exactness]], [[def-extension-by-zero-abelian-sheaf]]).

[F3] Let $\mathbb Z_U$ be the sheaf on $U$ associated to the constant presheaf with value $\mathbb Z$ ([[def-sheafification]]). Every presheaf morphism out of that constant presheaf into a sheaf $\mathcal E$ on $U$ factors uniquely through the sheafification map, and such a presheaf morphism is determined by the image of $1\in\mathbb Z$ at the open $U$, that is, by an element of $\mathcal E(U)$ ([[thm-sheafification-universal-property]]).

[F4] The sections of the extension by zero over an open $W$ are the sections of $\mathcal F$ over $W\cap U$ whose support is closed in $W$ ([[def-extension-by-zero-abelian-sheaf]]).

[F5] The kernel sheaf of a morphism $\varphi:\mathcal F\to\mathcal G$ of sheaves is computed objectwise, $\ker(\varphi)(W)=\ker(\varphi_W)$ ([[def-kernel-cokernel-image-sheaves]]); hence a morphism of sheaves injective on sections over every open has zero kernel, and in the abelian category $\mathrm{Ab}(X)$ a morphism with zero kernel is a monomorphism ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]], [[thm-abelian-sheaves-form-abelian-category]]).

[F6] $\mathcal I$ is the flasque condition: for all open $U\subseteq V\subseteq X$ the restriction map $\mathcal I(V)\to\mathcal I(U)$ is surjective ([[def-flasque-sheaf]]).

## Proof

**Given:** A topological space $X$, an open inclusion of opens $U\subseteq V\subseteq X$, and an injective abelian sheaf $\mathcal I$ on $X$.

1.1 Let $j_U:U\hookrightarrow X$ and $j_V:V\hookrightarrow X$ be the inclusions and let $\mathbb Z_U,\mathbb Z_V$ be the sheaves associated to the constant presheaves with value $\mathbb Z$ on $U$ and on $V$ [F3]. Since $V$ is open, the restriction $(j_{V!}\mathbb Z_V)|_U=j_U^{-1}j_{V!}\mathbb Z_V$ has sections over an open $W\subseteq U$ equal to $(\mathbb Z_V)(W\cap V)=(\mathbb Z_V)(W) = \mathbb Z_U(W)$, so restriction along $U\subseteq V$ identifies it with $\mathbb Z_U$; concretely its sections over $W$ are the locally constant $\mathbb Z$-valued functions on $W$ with closed support in $W$ [F4]. Let $\beta:\mathbb Z_U\to(j_{V!}\mathbb Z_V)|_U$ be that identification and let $\alpha:j_{U!}\mathbb Z_U\to j_{V!}\mathbb Z_V$ be the morphism whose adjoint transpose under the adjunction [F2] is $\beta$; on sections over an open $W$ the map $\alpha_W$ extends a section of $\mathbb Z$ over $W\cap U$ with closed support in $W$ by zero across $W\setminus U$. [F2, F3, F4, construct]

1.2 Combining the adjunction bijection [F2] with the presheaf correspondence of [F3] gives, for every open $W\subseteq X$, a natural bijection $\operatorname{Hom}_X(j_{W!}\mathbb Z_W,\mathcal I)\cong\mathcal I(W)$: a morphism $j_{W!}\mathbb Z_W\to\mathcal I$ corresponds to $\mathbb Z_W\to\mathcal I|_W$, and by [F3] this corresponds to the image of $1\in\mathbb Z=\mathbb Z_W(W)$ in $\mathcal I(W)$; a morphism of sheaves $\mathcal I\to\mathcal I'$ or an inclusion $W\subseteq W'$ acts by the corresponding map of section groups, so the bijection is natural and, for $W\subseteq W'$, it carries the element of $\mathcal I(W')$ to its restriction in $\mathcal I(W)$. [F2, F3]

2.1 For every open $W\subseteq X$ the map $\alpha_W$ is injective, because it is the inclusion of the sections over $W\cap U$ into the sections over $W\cap V$ given by extension by zero [F4, step 1.1]. By [F5] the kernel sheaf $\ker(\alpha)$ is computed objectwise, so $\ker(\alpha)(W)=0$ for every open $W$; hence $\ker(\alpha)=0$, and since $\mathrm{Ab}(X)$ is abelian [F5] the morphism $\alpha$ is a monomorphism. [F5, step 1.1]

3.1 Let $s\in\mathcal I(U)$ and let $f_s:j_{U!}\mathbb Z_U\to\mathcal I$ correspond to $s$ under the bijection of step 1.2 applied to $U$. By step 2.1 the morphism $\alpha$ is a monomorphism, so [F1] applied to the subobject $\alpha:j_{U!}\mathbb Z_U\rightarrowtail j_{V!}\mathbb Z_V$ and to the morphism $f_s$ provides $g:j_{V!}\mathbb Z_V\to\mathcal I$ with $g\circ\alpha=f_s$. Let $t\in\mathcal I(V)$ correspond to $g$ under the bijection of step 1.2 applied to $V$. Precomposition with $\alpha$ corresponds, under the two bijections of step 1.2, to the identification $\mathbb Z_U\cong(j_{V!}\mathbb Z_V)|_U$ of step 1.1, so by the naturality of step 1.2 the element corresponding to $g\circ\alpha$ is the restriction $t|_U$; the identity $g\circ\alpha=f_s$ therefore says $t|_U=s$. Hence every $s\in\mathcal I(U)$ extends to $\mathcal I(V)$, that is, $\rho^V_U$ is surjective, and since $U\subseteq V$ were arbitrary open subsets, $\mathcal I$ is flasque [F6]. ∎ [F1, F2, F3, F6, step 2.1, step 1.2] [F1, F2, F3, F6] ∎
