---
title: Perfect K theory localization and open excision
status: published
research_item: prop-perfect-k-localization-input
dependency_level: 16
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization)
- [lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence)
- [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel)
- [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness)
- [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum)
- [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)


## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be a quasi-compact quasi-separated scheme and $U\subseteq X$ a quasi-compact open with closed complement $T$. For the specified nonconnective perfect-complex K-theory there is a natural fiber sequence
$$K_T(X)\longrightarrow K(X)\longrightarrow K(U).$$
For every cover $X=U\cup V$ by quasi-compact opens, the restriction square is homotopy cartesian, equivalently
$$K(X)\xrightarrow{\sim}K(U)\times_{K(U\cap V)}K(V).$$
Thus K-theory has open-cover Mayer–Vietoris (and the corresponding finite quasi-compact-open covering form by iteration). If $T$ is closed with quasi-compact complement and $T\subseteq W\subseteq X$ with $W$ quasi-compact open, restriction gives the natural support excision equivalence $K_T(X)\simeq K_T(W)$, compatible with the support-to-global and restriction maps. All these assertions use the nonconnective spectra and their groups in every integer degree, without a regularity, field or resolution-property assumption.

## Statement references
[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization)

[lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence)

## Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The schemes, opens and closed supports in the Statement, with the supplied essentially small sheaf-derived perfect categories and nonconnective functor.

**Goal:** Deduce localization, Mayer–Vietoris and open excision in exactly that model.

[F1] [lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization) proves the actual enhanced quotient exactness and resulting K fiber sequence, using [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel), [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) and [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density).

[F2] [lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence) gives the actual support restriction equivalence and compatibility with global restriction.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent pullbacks and stable fiber/cofiber sequences. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) identifies the K functor and all integer groups.

[F4] A scheme is quasi-compact when every open cover of its underlying space has a finite subcover, and quasi-separated when the intersection of every two affine open subschemes is quasi-compact. These are the conventions of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme).

[F5] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme), every point of a scheme has an affine open neighbourhood. An affine scheme is a locally ringed space isomorphic to the prime spectrum of a commutative ring with its structure sheaf, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). For an open subset $A\subseteq X$, the open subscheme is $(A,\mathcal O_X|_A)$; it is affine open precisely when this restricted locally ringed space is affine, as in [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Restrictions to nested open subsets give the same restricted structure sheaf.

[F6] For a commutative ring $R$, an open $O\subseteq\operatorname{Spec}R$ and a point $\mathfrak p\in O$, [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point) supplies $f\in R$ with $\mathfrak p\in D(f)\subseteq O$. Here $D(f)$ is the principal distinguished subset of [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum). The statement of [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) identifies $\operatorname{Spec}(R_f)$ with $D(f)$ as an open locally ringed subspace of $\operatorname{Spec}R$; thus this neighbourhood is affine with the restricted structure sheaf.

## Proof
1.1 First check the geometric hypotheses needed below. Every open subscheme of $X$ is quasi-separated: its affine opens are affine opens of $X$, with the same intersections. For any open $A\subseteq X$ and $x\in A$, take an affine open neighbourhood $H$ of $x$ in $X$ and an affine presentation $H\simeq\operatorname{Spec}R$ by [F5]. Under this presentation $A\cap H$ corresponds to an open $O$ containing the image $\mathfrak p$ of $x$. By [F6] there is $\mathfrak p\in D(f)\subseteq O$, and this distinguished open is affine with the restricted structure sheaf. Its inverse image in $H$ is therefore an affine open of $X$ contained in $A$, with the same restricted sheaf by [F5]. Thus the family of all affine opens of $X$ contained in $A$ covers $A$. If $A$ is quasi-compact, [F4] extracts a finite subcover (the empty one is allowed when $A=\varnothing$). In particular, for quasi-compact opens $A,B\subseteq X$ obtain finite affine covers $A=\bigcup_i A_i$ and $B=\bigcup_j B_j$ by this construction. Each $A_i\cap B_j$ is quasi-compact by quasi-separatedness of $X$, and these finitely many intersections cover $A\cap B$. Given any open cover of $A\cap B$, restrict it to each $A_i\cap B_j$, choose a finite subcover there, and take the finite union of the selected cover members. This proves quasi-compactness of $A\cap B$. The same open-cover argument shows that finite unions of quasi-compact opens are quasi-compact. Thus all the quasi-compact opens and their finite intersections used below are qcqs schemes. Now [F1] applied to $j:U\hookrightarrow X$ and its full kernel $\mathrm{Perf}_T(X)$ gives the claimed localization sequence. It identifies the category-defined $K_T(X)$ with the actual fiber, without assuming that identification in its definition or comparing with a different K-theory model. The choice and universe assumptions are those required by the suppliers. [A1, F1, F3, F4, F5, F6, given]

2.1 For a two-open cover $X=U\cup V$, step 1.1 shows that [F1] applies both to $U\subseteq X$ and $U\cap V\subseteq V$. Put $T=X\setminus U$, a closed subset of $X$ contained in $V$. Their fiber terms are $K_T(X)$ and $K_T(V)$, and [F2] identifies the induced map between these fibers with an equivalence. Put $P=K(U)\times_{K(U\cap V)}K(V)$. The map $K(X)\to P$ lies over $K(U)$, and the induced map on fibers over zero is exactly $K_T(X)\to K_T(V)$, by the defining pullback universal properties and the compatibility in [F2]. We justify the required stable fiber criterion directly from [F3]. For any map $A\to A'$ over a common base $B$, write $F=\operatorname{fib}(A\to B)$ and $F'=\operatorname{fib}(A'\to B)$. The defining fiber squares are also pushout squares in the stable category, so $B\simeq A\sqcup_F0$. Pasting pushouts gives $B\sqcup_A0\simeq0\sqcup_F0=F[1]$. Hence the defining cofiber square for $A\to B$ is also a pullback square, giving $A\simeq\operatorname{fib}(B\to F[1])$. The same construction gives $A'\simeq\operatorname{fib}(B\to F'[1])$, naturally in the map over $B$. If $F\to F'$ is an equivalence, the diagrams $B\to F[1]\leftarrow0$ and $B\to F'[1]\leftarrow0$ are equivalent coherent diagrams; their limits, and thus $A$ and $A'$, are equivalent. Apply this with $A=K(X)$, $A'=P$ and $B=K(U)$. This proves the restriction square is homotopy cartesian without a homotopy-group detection argument. For a finite quasi-compact-open cover, regroup its members into a union of the first members and the last member and iterate this binary formula, also on the intersection covers. All finite unions and intersections are quasi-compact by step 1.1, so each application has the required hypotheses. This gives the stated finite-cover Mayer–Vietoris form. The empty-cover case also holds: [F1] with $X=U=\varnothing$ and $T=\varnothing$ gives $K(\varnothing)\simeq\operatorname{fib}(\mathrm{id}_{K(\varnothing)})\simeq0$, since the supported category is then the whole perfect category. [F1, F2, F3, F4, step 1.1]

3.1 For the stated support excision take $W$ in [F2]. Its support equivalence is induced by actual restriction and is compatible with the support-to-global inclusions and global restriction. The support is closed in $W$, and $W\setminus T=W\cap(X\setminus T)$ is quasi-compact by step 1.1 because both opens on the right are quasi-compact. Thus both support terms are also the fibers in step 1.1, and naturality of [F1] identifies their maps with the actual restriction maps supplied by [F2]. No regularity, field or resolution-property hypothesis has entered, and the spectra have not been truncated in any degree. This proves the entire stated interface. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
