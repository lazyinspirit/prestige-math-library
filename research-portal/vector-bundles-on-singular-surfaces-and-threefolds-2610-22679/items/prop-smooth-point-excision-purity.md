---
id: prop-smooth-point-excision-purity
kind: proposition
title: Excision and K theory purity at a smooth closed point
status: draft
domain: mathematics
deps:
  - def-cohomology-with-support
  - prop-perfect-k-localization-input
  - def-scheme-perfect-complexes
  - lem-koszul-point-support-class
  - prop-supported-k-zero-devissage
  - math:def-axiom-of-choice
dependency_roles:
  def-cohomology-with-support: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  lem-koszul-point-support-class: mathematical-premise
  prop-supported-k-zero-devissage: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 7, squares preceding equation (2.8)
      reading_limits: The displayed squares and purity assertion were read in the
        supplied article text. The argument below uses the stated local
        suppliers and the explicit arbitrary-open convention; it does not claim
        to reconstruct an unprinted proof.
dependency_level: 15
---

## Statement
Assume the Axiom of Choice. Let $X$ be a quasi-compact quasi-separated scheme over a perfect field $k$, and let $x$ be a closed point at which $X\to\operatorname{Spec}k$ is smooth. Write $S=X_{\mathrm{smooth}}$ for the open locus where this morphism is smooth and $U=X\setminus\{x\}$. The square of open immersions
$$\begin{matrix}S\cap U&\longrightarrow&U\\\downarrow&&\downarrow\\S&\longrightarrow&X\end{matrix}$$
is both cartesian and cocartesian in schemes. With $K$ on arbitrary opens interpreted by the quasi-compact-open homotopy-limit convention of the support definition, its restriction square is homotopy cartesian. Restriction and dévissage give canonical isomorphisms
$$\pi_0K(X/U)\xrightarrow{\sim}\pi_0K(S/(S\cap U))\xrightarrow{\sim}K_0(\kappa(x))\xrightarrow{\dim_{\kappa(x)}}\mathbb Z.$$
Here $K(A/B)$ denotes the fiber of $K(A)\to K(B)$ for an open immersion $B\subseteq A$, and $K_0(\kappa(x))$ is the Grothendieck group of finite-dimensional vector spaces over the residue field. The inverse image of $1$ is the supported class of the residue sheaf $i_*\kappa(x)$, for $i:\operatorname{Spec}\kappa(x)\hookrightarrow X$; its image in $K_0(X)$ is the ordinary perfect-complex class of that sheaf. Neither support-to-global map is asserted to be injective.

## Statement references
[[def-cohomology-with-support]]

## Facts & Assumptions
[A1] The already assumed [[math:def-axiom-of-choice]] and fixed suitable universes are inherited by the support, localization, local perfect-complex and dévissage constructions in [F1]–[F4]. They are used to invoke those selected constructions in the annotated steps below.

**Given:** AC, $X,k,x,S,U$ as in the statement. Smooth at $x$ means that $x$ has an open neighbourhood on which the structure morphism is smooth; a perfect field is a field all of whose algebraic extensions are separable.

**Goal:** Prove the scheme and K-theory squares, the supported degree-zero identifications and the normalization of the generator, without requiring $S$ to be quasi-compact.

[F1] [[def-cohomology-with-support]] defines $K$ on an arbitrary open as the homotopy limit of its values on quasi-compact opens, with restriction maps, and defines $K(A/B)$ as the indicated fiber. The value on a quasi-compact open is its supplied K-spectrum.

[F2] [[prop-perfect-k-localization-input]] gives localization, two-open Mayer–Vietoris and supported open excision for quasi-compact quasi-separated schemes and the stated quasi-compact opens. Its localization identifies the supported perfect-category K-spectrum with the corresponding restriction fiber, naturally for open restriction and support-to-global maps.

[F3] [[lem-koszul-point-support-class]] supplies, under AC, a smooth affine finite-type neighbourhood of a smooth closed point on a finite-type scheme, the perfect residue sheaf and its supported class. A smooth morphism is locally of finite presentation; thus a smooth point on $X$ has a smooth affine neighbourhood $V$ of finite type over $k$, to which that supplier applies. On $V$ it also gives a regular-sequence ideal for $x$ after shrinking. [[prop-supported-k-zero-devissage]] identifies the supported $K_0$ of a regular Noetherian finite-dimensional scheme with $G_0$ of the closed subscheme, with inverse given by coherent pushforward; its proof carries AC. A smooth finite-type scheme over a field is regular, Noetherian and finite-dimensional.

[F4] [[def-scheme-perfect-complexes]] defines perfectness by local representation as a bounded complex of finite locally free modules. It defines the supported perfect category by vanishing of cohomology stalks outside the specified support. In particular, perfectness of a fixed derived object can be checked on an open cover; the zero complex is perfect.

## Proof
1.1 Choose a smooth affine finite-type neighbourhood $V$ of $x$ and shrink it as in [F3] so that the ideal of $x$ in $V$ is finitely generated by a regular sequence. The point is closed in $V$, and $V\setminus\{x\}$ is quasi-compact: it is the finite union of the principal opens where the chosen generators are nonzero. The empty sequence gives the empty complement when $V$ is the point. [A1, F3, given]

2.1 If $Z$ is any quasi-compact open of $X$ containing $V$, then $Z\setminus\{x\}$ is quasi-compact. Indeed, cover $Z$ by finitely many affine opens. An affine open $A$ not containing $x$ needs no removal. If $x\in A$, choose a principal neighbourhood $D(f)$ of $x$ contained in $A\cap V$. The closed set $A\setminus D(f)$ is quasi-compact and avoids $x$, so finitely many principal opens in $A$ avoiding $x$ cover it. Inside $D(f)$ the complement of $x$ is quasi-compact: it is the intersection of $D(f)$ and $V\setminus\{x\}$, hence quasi-compact because $X$ is quasi-separated and both are quasi-compact opens of $X$. These finite covers prove the claim. In particular $U$ is quasi-compact by taking $Z=X$. Every such $Z$ is quasi-separated as an open subscheme of $X$. [step 1.1, given]

3.1 The displayed scheme square is cartesian because intersections of open subschemes are their fiber products. It is cocartesian because $S\cup U=X$: $x\in S$, and $U$ contains every other point. Morphisms from $S$ and $U$ to any scheme that agree on $S\cap U$ glue uniquely over this open cover. [given, step 2.1]

4.1 Let $\mathcal C$ be the poset of quasi-compact opens $Z$ of $S$ containing $V$. It is cofinal among quasi-compact opens of $S$, since any such open $B$ is contained in the quasi-compact open $B\cup V$. By step 2.1, each $Z\setminus\{x\}$ is quasi-compact. These complements are cofinal among quasi-compact opens of $S\setminus\{x\}$: a quasi-compact open $B$ there is contained in $(B\cup V)\setminus\{x\}$. Consequently [F1], cofinality of homotopy limits, and preservation of limits by fibers give $K(S/(S\cap U))\simeq\operatorname*{holim}_{Z\in\mathcal C^{\mathrm{op}}}\operatorname{fib}\bigl(K(Z)\to K(Z\setminus\{x\})\bigr).$ The comparison is induced by restriction, not merely an abstract equivalence. [F1, step 1.1, step 2.1, step 3.1]

5.1 For each $Z\in\mathcal C$, localization and supported excision in [F2] identify its displayed fiber, naturally in $Z$, with $K_{\{x\}}(V)$. The indexing poset has the least element $V$, so its nerve is contractible; the homotopy limit of this coherent constant diagram is $K_{\{x\}}(V)$. Applying the same localization and excision to $V\subseteq X$, using the quasi-compact complement from step 2.1, identifies $K(X/U)$ with $K_{\{x\}}(V)$ compatibly with restriction. Thus restriction induces an equivalence $K(X/U)\simeq K(S/(S\cap U))$. [A1, F2, step 2.1, step 4.1]

6.1 The restriction square on $X,S,U,S\cap U$ is coherent. Its horizontal fibers, taken over $K(U)$ and $K(S\cap U)$, are equivalent by step 5.1. In spectra a square with equivalent corresponding fibers is homotopy cartesian: compare its upper-left corner with the homotopy pullback of the other three corners and use the fiber sequences over the common base. This proves the K-theory square, including when $S$ is not quasi-compact. [F1, step 5.1]

7.1 The scheme $V$ is regular, Noetherian and finite-dimensional, and the closed subscheme $\operatorname{Spec}\kappa(x)$ has underlying set $\{x\}$. By [F3], supported dévissage gives $\pi_0K_{\{x\}}(V)\cong G_0(\kappa(x))$. Every finite-dimensional vector space over a field is a finite direct sum of copies of the field, and dimension is additive in short exact sequences. Hence dimension gives $G_0(\kappa(x))\cong\mathbb Z$, with inverse $1\mapsto[\kappa(x)]$. Combining this with step 5.1 gives the asserted isomorphisms. [A1, F3, step 5.1, step 6.1]

8.1 The inverse in dévissage sends $[\kappa(x)]$ to the class of the residue sheaf on $V$. Let $E=i_*\kappa(x)[0]$ be the globally defined residue sheaf in degree zero. Its restriction to $V$ is perfect by the Koszul resolution in [F3], applied only to the smooth finite-type scheme $V$. Its restriction to $U=X\setminus\{x\}$ is zero, hence perfect. Since $V\cup U=X$, the local definition in [F4] makes $E$ perfect on $X$; its cohomology stalks vanish away from $x$, so it belongs to the supported perfect category on $X$. Naturality of localization and restriction in [F2] identifies the supported class of this object with that of its restriction to $V$. Its image under support-to-global is the class of the same perfect object on $X$. Thus it is the inverse image of $1$ under the displayed isomorphisms. The image in global $K_0$ can vanish, so no injectivity is used. [A1, F2, F3, F4, step 7.1] ∎
