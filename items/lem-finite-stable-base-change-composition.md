---
id: lem-finite-stable-base-change-composition
kind: lemma
title: Finite morphisms survive base change and composition
status: draft
origin: pipeline
deps:
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - thm-fibre-products-of-schemes-exist
  - def-axiom-of-choice
  - thm-affine-fibre-product-tensor-ring
  - lem-fibre-product-open-restriction
  - def-scheme
  - def-finite-type-and-module-finite-algebras
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, Lemmas 29.45.5–29.45.6"
      url: https://stacks.math.columbia.edu/tag/01WG
    - title: "Stacks Project, Algebra, Lemma 10.7.3"
      url: https://stacks.math.columbia.edu/tag/00GL
    - title: "Stacks Project, Algebra, Lemma 10.36.13"
      url: https://stacks.math.columbia.edu/tag/02JK
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice (AC) for the base-change assertion. For every
finite morphism $f:X\to S$ and every morphism $T\to S$, the projection
$X\times_ST\to T$ is finite. Finite morphisms are closed under composition,
and that composition assertion uses no AC.

## Facts & Assumptions

**Given:** Schemes and morphisms as in the statement; AC is assumed only for
the base-change assertion.

[F1] A morphism $f:X\to S$ is finite when, for every affine open
$U=\operatorname{Spec}A\subseteq S$, its inverse image is affine
$f^{-1}(U)=\operatorname{Spec}B$ and $B$ is a finite $A$-module
([[def-finite-morphism-schemes]]).

[F2] Assuming AC, a morphism is finite if there is an affine open cover of
its target on which inverse images are affine and the coordinate ring maps
are module-finite ([[lem-finite-morphism-affine]]).

[F3] Every point of a scheme has an affine open neighbourhood; this also
applies to an open subscheme ([[def-scheme]]).

[F4] Every diagram of schemes $X\to S\leftarrow T$ has a fibre product
([[thm-fibre-products-of-schemes-exist]]).

[F5] If $A\to B$ and $A\to A'$ are ring maps, then
$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}A'$
is $\operatorname{Spec}(B\otimes_A A')$, with the projection induced by
$A'\to B\otimes_A A'$ ([[thm-affine-fibre-product-tensor-ring]]).

[F6] The inverse image $f^{-1}(U)$ represents $X\times_SU$; restricting a
fibre product to opens mapping into a common open base gives the corresponding
fibre product over that open ([[lem-fibre-product-open-restriction]]).

[F7] Module-finite means finitely generated as a module over the stated ring
([[def-finite-type-and-module-finite-algebras]]).

[A1] AC says every family of nonempty sets has a choice function. In this
item it is used only to apply the converse local criterion [F2]
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:X\to S$ be finite and $g:T\to S$ any morphism; the fibre product $P=X\times_ST$ exists by [F4]. Index a family by all pairs $(U,W)$ where $U=\operatorname{Spec}A\subseteq S$ is affine, $W\subseteq T$ is affine open, and $g(W)\subseteq U$. These opens cover $T$: for each $t\in T$, an affine neighbourhood $U$ of $g(t)$ exists, and the open subscheme $g^{-1}(U)$ has an affine neighbourhood $W$ of $t$ by [F3]. Taking all such pairs makes no simultaneous pointwise choice. [F3, F4]

1.2 Let $X\xrightarrow{f}Y\xrightarrow{g}S$ be finite, without assuming AC, and fix an arbitrary affine open $U=\operatorname{Spec}A\subseteq S$. By [F1], write $g^{-1}(U)=\operatorname{Spec}B$ with $B$ finite over $A$. This is an affine open of $Y$, so [F1] applied to $f$ gives $f^{-1}(g^{-1}(U))=\operatorname{Spec}C$ with $C$ finite over $B$. Fix finite module generating lists $b_1,\ldots,b_m$ for $B/A$ and $c_1,\ldots,c_n$ for $C/B$. The products $b_ic_j$ generate $C$ over $A$: for $c=\sum_jd_jc_j$, write each $d_j=\sum_i a_{ij}b_i$ to obtain $c=\sum_{i,j}a_{ij}b_ic_j$. Thus the inverse image of every affine $U$ is affine and finite over $A$, so [F1] proves $g\circ f$ finite. Only two finite generating lists are fixed, with no choice from an arbitrary family. [F1, F7]

2.1 Fix one pair from step 1.1, with $W=\operatorname{Spec}A'$ and $U=\operatorname{Spec}A$. By [F1], write $f^{-1}(U)=\operatorname{Spec}B$ with $B$ finite over $A$. The inverse image $P\times_TW$ identifies with $f^{-1}(U)\times_UW$ by [F6], and hence with $\operatorname{Spec}(B\otimes_AA')$ by [F5]. If $b_1,\ldots,b_n$ generate $B$ as an $A$-module, then $b_1\otimes1,\ldots,b_n\otimes1$ generate $B\otimes_AA'$ as an $A'$-module, since if $b=\sum_i a_i b_i$ with $a_i\in A$, then $b\otimes a'=\sum_i(b_i\otimes1)\,\bigl(1\otimes\rho(a_i)a'\bigr)$, where $\rho:A\to A'$ is the base-change map, and every tensor is a finite sum of pure tensors. Thus the pullback over each $W$ is affine and finite. [F1, F5, F6, F7, step 1.1]

3.1 The affine opens from step 1.1 cover $T$, and step 2.1 verifies the affine and module-finite conditions on every member. Assuming AC, the converse in [F2] therefore shows that $P\to T$ is finite. This is the only choice-dependent step in the base-change assertion. [A1, F2, step 1.1, step 2.1]

4.1 If $T=\varnothing$, then $P=\varnothing$ and the base-changed map is finite. On an empty affine chart or a chart whose pullback is empty, the coordinate ring is $0$, generated as a module by the empty set; tensoring with the zero ring again gives zero. Identity maps are finite because their affine chart module is generated by $1$, and the composition argument includes identity factors. There is no endpoint parameter or iff claim. The base-change conclusion carries AC exactly as stated, while the composition proof is choice-free. [F1, F5, step 1.2, step 2.1, step 3.1] $\square$
