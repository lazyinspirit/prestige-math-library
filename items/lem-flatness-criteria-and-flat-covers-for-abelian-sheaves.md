---
id: "lem-flatness-criteria-and-flat-covers-for-abelian-sheaves"
kind: "lemma"
title: "Flatness criteria and canonical epimorphisms from flat abelian sheaves"
status: draft
origin: pipeline
deps: [def-flat-abelian-sheaf, def-left-and-right-flat-modules-over-an-arbitrary-ring, def-kernel-cokernel-image-sheaves, thm-exactness-of-sheaves-stalkwise, thm-sheaf-morphism-isomorphism-stalkwise, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, cor-free-modules-are-projective-and-flat, def-extension-by-zero-abelian-sheaf, lem-stalk-inverse-image-sheaf, def-restriction-sheaf-open-subspace, thm-direct-sums-and-direct-summands-preserve-flatness, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, def-tensor-product-of-abelian-sheaves, lem-abelian-sheaves-form-a-grothendieck-category, def-sheaf-on-topological-space, def-stalk-of-presheaf, def-topological-space, thm-abelian-sheaves-form-abelian-category, def-abelian-category]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 26: Lemmas 26.4, 26.9 and 26.12; Stacks Project Modules, Lemma 17.2 and Modules, Lemma 17.7"
---

## Statement

Let $X$ be a topological space and let flatness of abelian sheaves
be as in [[def-flat-abelian-sheaf]].

1. An abelian sheaf $\mathcal F$ on $X$ is flat if and only if the functor
   $\mathcal F\otimes_{\mathbb Z}-$ on abelian sheaves is exact, equivalently
   if and only if $-\otimes_{\mathbb Z}\mathcal F$ is exact.
2. The constant sheaf $\mathbb Z_X$ is flat; for every open subspace
   $j:U\hookrightarrow X$ the extension by zero $j_{U!}\mathbb Z_U$ is flat;
   and any coproduct of flat abelian sheaves on $X$ is flat.
3. For every abelian sheaf $\mathcal F$ the canonical morphism
   $$\Phi:\bigoplus_{(U,s)}j_{U!}\mathbb Z_U\longrightarrow\mathcal F,$$
   the coproduct being indexed by the set of pairs $(U,s)$ with $U\subseteq X$
   open and $s\in\mathcal F(U)$, and the $(U,s)$-component sending a section
   $g\in(j_{U!}\mathbb Z_U)(V)$ over an open $V$, viewed as the locally constant
   function $g:V\cap U\to\mathbb Z$ with closed support in $V$, to the section obtained by gluing $g\cdot s$ on $V\cap U$ with zero
   on $V\setminus\operatorname{Supp}(g)$, is an epimorphism whose
   source is flat. Consequently every
   abelian sheaf on $X$ is a quotient of a flat abelian sheaf, and the covering
   flat sheaf and the morphism $\Phi$ are canonically determined by
   $\mathcal F$.

## Facts & Assumptions

[F1] A left $R$-module $M$ is flat exactly when $-\otimes_RM$ is exact on right $R$-modules ([[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).

[F2] The kernel sheaf of a morphism of abelian sheaves is defined objectwise, $\ker(\varphi)(U)=\ker(\varphi_U)$ ([[def-kernel-cokernel-image-sheaves]]).

[F3] A sequence of abelian sheaves is exact if and only if its stalk sequence at every point is exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F4] A morphism of sheaves of sets is an isomorphism if and only if every induced map on stalks is a bijection ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F5] Under the canonical isomorphism $\theta:A_X\to\underline A_{\mathrm{loc}}$ the constant sheaf $A_X$ is the sheaf of locally constant $A$-valued functions, evaluation at $x$ is a canonical bijection on stalks, and $a\mapsto$ the constant function with value $a$ is a group homomorphism ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F6] A free module over a commutative ring is flat regardless of any choice principle; in particular the $\mathbb Z$-module $\mathbb Z$ is flat ([[cor-free-modules-are-projective-and-flat]]).

[F7] A section of $j_{U!}\mathcal F$ over an open $V$ has closed support in $V$, is a locally constant function when $\mathcal F=\mathbb Z_U$, and for $V\subseteq U$ the support condition is vacuous so that $(j_{U!}\mathcal F)(V)=\mathcal F(V)$ ([[def-extension-by-zero-abelian-sheaf]]).

[F8] The stalk of an inverse image sheaf is the stalk at the image point: $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F9] The restriction of a sheaf to an open subspace is the inverse image sheaf, $\mathcal F|_U:=j^{-1}\mathcal F$ ([[def-restriction-sheaf-open-subspace]]).

[F10] Any direct sum of flat modules over a commutative ring is flat ([[thm-direct-sums-and-direct-summands-preserve-flatness]]).

[F11] For abelian sheaves the tensor product has stalks $(\mathcal F\otimes_{\mathbb Z}\mathcal G)_x\cong\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$, coproducts have stalks $\bigl(\bigoplus_i\mathcal G_i\bigr)_x\cong\bigoplus_i(\mathcal G_i)_x$, and it is right exact in each variable ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F12] An abelian sheaf is flat when each of its stalks is a flat $\mathbb Z$-module ([[def-flat-abelian-sheaf]]).

[F13] The category of abelian sheaves on a topological space is locally small and cocomplete, so coproducts of arbitrary families of abelian sheaves exist ([[lem-abelian-sheaves-form-a-grothendieck-category]], [[thm-abelian-sheaves-form-abelian-category]]).

[F14] In a sheaf, compatible local sections over an open cover glue uniquely ([[def-sheaf-on-topological-space]]).

[F15] The stalk at $x$ is the filtered colimit of the section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

## Proof

**Given:** A topological space $X$, abelian sheaves $\mathcal F,\mathcal G_i,\mathcal G',\mathcal G,\mathcal G''$ on $X$, an open subspace $j:U\hookrightarrow X$, points $x\in X$, and a short exact sequence $0\to M'\to M\to M''\to0$ of $\mathbb Z$-modules.

1.1 Assume $\mathcal F$ flat, so that each stalk $\mathcal F_x$ is a flat $\mathbb Z$-module [F12, F1]. Let $\varphi:\mathcal G'\to\mathcal G$ be an injective morphism of abelian sheaves and let $\kappa:\mathcal F\otimes_{\mathbb Z}\mathcal G'\to\mathcal F\otimes_{\mathbb Z}\mathcal G$ be the induced morphism, whose stalk at $x$ is $\operatorname{id}\otimes\varphi_x:\mathcal F_x\otimes_{\mathbb Z}\mathcal G'_x\to\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$ by naturality of the stalk identification [F11]. Let $K:=\ker(\kappa)$ be the kernel sheaf; by [F2] its stalk is $K_x=\ker(\operatorname{id}\otimes\varphi_x)$, and since $\mathcal G'_x\to\mathcal G_x$ is injective and $\mathcal F_x$ is flat, this kernel is zero [F1]. The zero morphism $K\to0$ therefore has bijective stalks at every point (both are zero groups), so it is an isomorphism by [F4] and $K=0$; hence $\kappa$ is injective. Since $\mathcal F\otimes_{\mathbb Z}-$ is right exact [F11], it carries every short exact sequence to a short exact sequence and is exact; the argument in the other variable is identical. [F1, F2, F4, F11, F12]

1.2 The constant sheaf $\mathbb Z_X$ has stalk $\mathbb Z$ at every $x$, as the value at $x$ of the locally constant functions [F5], and $\mathbb Z$ is a free, hence flat, $\mathbb Z$-module [F6]; so $\mathbb Z_X$ is flat [F12]. [F5, F6, F12]

1.3 Let $x\in X$. If $x\in U$, then for every open $V\subseteq U$ the support condition is vacuous and $(j_{U!}\mathbb Z_U)(V)=\mathbb Z_U(V)$ [F7], so the restriction of $j_{U!}\mathbb Z_U$ to the open subspace $U$ is $\mathbb Z_U$ [F9]; by [F8] the stalk of that restriction at $x$ is the stalk of $j_{U!}\mathbb Z_U$ at $x$, which is therefore $\mathbb Z$ by [F5]. If $x\notin U$ and $s\in(j_{U!}\mathbb Z_U)(V)$ is a section over an open $V\ni x$, then the support of $s$ is closed in $V$ and contained in $V\cap U$, so $x$ lies in the open subset $V\setminus\operatorname{Supp}(s)$ of $V$ on which $s$ vanishes [F7, F15]; hence the germ $s_x$ is zero and $(j_{U!}\mathbb Z_U)_x=0$. The stalk of $j_{U!}\mathbb Z_U$ is thus $\mathbb Z$ at points of $U$ and $0$ at points outside $U$, both flat $\mathbb Z$-modules [F1, F6], so $j_{U!}\mathbb Z_U$ is flat [F12]. [F1, F5, F6, F7, F8, F9, F12, F15]

1.4 Let $\mathcal F$ be an abelian sheaf. For each open $U\subseteq X$ and $s\in\mathcal F(U)$ define $\varphi_{U,s}:j_{U!}\mathbb Z_U\to\mathcal F$ on a section $g\in(j_{U!}\mathbb Z_U)(V)$ as follows. The support $S=\operatorname{Supp}(g)$ is closed in $V$ and contained in $V\cap U$ [F7]. On $V\cap U$ use the section $g\cdot s$, defined locally where the integer-valued function $g$ is constant; these local products glue uniquely since they agree on overlaps [F5, F14]. On the open set $V\setminus S$ use the zero section. These opens cover $V$, and on their intersection $g=0$, so the sections agree and glue uniquely to $\varphi_{U,s}(g)\in\mathcal F(V)$ [F14]. Addition and restriction of $g$ commute with both local formulas, hence with their unique gluing, so this is a morphism of sheaves. On $V=U$, the section $1_U\in(j_{U!}\mathbb Z_U)(U)$ maps to $s$. The construction is canonical in $(U,s)$; by the coproduct universal property [F13] the components induce $\Phi:\bigoplus_{(U,s)}j_{U!}\mathbb Z_U\to\mathcal F$. [F5, F7, F13, F14]

2.1 Conversely assume $\mathcal F\otimes_{\mathbb Z}-$ exact, let $x\in X$, and let $0\to M'\to M\to M''\to0$ be a short exact sequence of $\mathbb Z$-modules. Under the canonical isomorphism of [F5] the constant sheaves $M'_X,M_X,M''_X$ are the sheaves of locally constant functions with values in $M',M,M''$, and a homomorphism $u$ of abelian groups induces the morphism of sheaves given pointwise on locally constant functions by $f\mapsto u\circ f$; these morphisms are compatible on stalks with $u$ under evaluation at $x$ [F5], so the induced sequence $0\to M'_X\to M_X\to M''_X\to0$ has exact stalk sequence $0\to M'\to M\to M''\to0$ at every point and is therefore exact [F3]. Applying the exact functor $\mathcal F\otimes_{\mathbb Z}-$ and then taking the stalk at $x$, where the stalks of the tensor products are the tensor products of the stalks [F11] and the stalk of the constant sheaf $M_X$ is $M$ [F5], gives the exact sequence $0\to\mathcal F_x\otimes_{\mathbb Z}M'\to\mathcal F_x\otimes_{\mathbb Z}M\to\mathcal F_x\otimes_{\mathbb Z}M''\to0$. Hence $\mathcal F_x\otimes_{\mathbb Z}-$ is exact and $\mathcal F_x$ is flat [F1]; since $x$ was arbitrary, $\mathcal F$ is flat [F12]. With step 1.1 this proves clause 1, both equivalent formulations included. [F1, F3, F5, F11, F12, step 1.1]

2.2 Let $(\mathcal F_i)_{i\in I}$ be a family of flat abelian sheaves with coproduct $\bigoplus_{i\in I}\mathcal F_i$ [F13]. By [F11] the stalk of the coproduct at $x$ is $\bigoplus_{i\in I}(\mathcal F_i)_x$, a direct sum of flat $\mathbb Z$-modules, hence flat [F10]; therefore the coproduct is flat [F12]. This proves clause 2 together with [step 1.2] and [step 1.3]. [F10, F11, F12, F13, step 1.2, step 1.3]

3.1 The source of $\Phi$ is a coproduct of the sheaves $j_{U!}\mathbb Z_U$, each flat by step 1.3, so it is flat by step 2.2. To see that $\Phi$ is an epimorphism, compute stalks at $x$: by [F11] the stalk of the source is $\bigoplus_{(U,s):\,x\in U}(j_{U!}\mathbb Z_U)_x\cong\bigoplus_{(U,s):\,x\in U}\mathbb Z$, the pairs with $x\notin U$ contributing $0$ by step 1.3. The $(U,s)$-component of the stalk map sends the canonical basis element to the germ $s_x$: for $V=U$ the function $g=1_U\in(j_{U!}\mathbb Z_U)(U)$ is locally constant with $V_1=U$ and $V_n=\varnothing$ for $n\ne1$, so the formula of step 1.4 gives $\varphi_{U,s}(1_U)=s$ and hence germ $s_x$ at $x\in U$. Given $t_x\in\mathcal F_x$, represented by a section $t\in\mathcal F(W)$ over an open $W\ni x$ [F15], the pair $(W,t)$ is an index and its basis element maps to $t_x$; hence the stalk map is surjective in every degree, and $\Phi$ is an epimorphism by [F3]. Therefore every abelian sheaf is a quotient of the flat abelian sheaf $\bigoplus_{(U,s)}j_{U!}\mathbb Z_U$, canonically determined as in step 1.4. This is clause 3, and clauses 1 and 2 are step 2.1, step 1.2, step 1.3 and step 2.2. ∎ [F3, F11, F15, step 1.3, step 2.2, step 1.4, step 2.1, step 1.2]
