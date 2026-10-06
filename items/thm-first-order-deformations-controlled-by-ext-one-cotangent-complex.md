---
id: "thm-first-order-deformations-controlled-by-ext-one-cotangent-complex"
kind: "theorem"
title: "First-order deformations are controlled by Ext^1 of the cotangent complex"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 15
justified_by: []
aliases: []
deps:
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-cotangent-complex-of-a-scheme-morphism"
  - "def-ext-groups-of-the-cotangent-complex"
  - "def-square-zero-extension-and-small-extension"
  - "lem-affine-deformations-obstruction-and-torsor"
  - "lem-flat-deformations-form-a-zariski-sheaf-of-groupoids"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "lem-ext-of-locally-free-sheaf-via-cohomology"
  - "def-flat-morphism-schemes"
  - "def-locally-finite-presentation-morphism"
  - "def-derivation-algebra"
  - "def-smooth-morphism-schemes"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, flatness across a square-zero extension"
      url: "https://stacks.math.columbia.edu/tag/063Y"
      locator: "Lemma 37.10.1, full statement and proof; its nilpotent flatness input Lemma 10.99.8 (051C) also read in full, 2026-10-06."
    - title: "The Stacks Project, square-zero sheaf extensions are schemes"
      url: "https://stacks.math.columbia.edu/tag/04EW"
      locator: "Lemma 37.2.2, full statement and proof: a square-zero extension with quasi-coherent kernel is a scheme, with affine charts recovered by sections. Read 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.21.1 (tag 08UZ) with proof: first-order deformations of a scheme over a square-zero thickening, obstruction in Ext^2, torsor under Ext^1, automorphisms Ext^0; Lemma 92.16.1 (tag 08SP) as its affine input (printed pages 25-33, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Problems, complete chapter (Chapter 93)"
      url: "https://stacks.math.columbia.edu/download/examples-defos.pdf"
      locator: "Section 93.9, Example 9.1 and Lemma 9.3 (tags 0DY7, 0DY9): the deformation category of schemes and its infinitesimal automorphisms (printed pages 17-19, read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice (supplying Dependent Choice, [[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $k$ be a field
and let $X$ be a $k$-scheme that is flat and locally of finite presentation
over $k$ ([[def-flat-morphism-schemes]],
[[def-locally-finite-presentation-morphism]]). Let $I$ be a $k$-vector space
and $k[I]=k\oplus I$ the trivial square-zero extension
([[def-square-zero-extension-and-small-extension]]). Then there is a canonical
bijection
$$\operatorname{Def}_X(k[I])_{\mathrm{iso}}\;\cong\;\operatorname{Ext}^1_{\mathcal O_X}\bigl(L_{X/k},\mathcal O_X\otimes_kI\bigr)$$
between isomorphism classes of deformations of $X$ over
$\operatorname{Spec}k[I]$ and the first Ext group of the cotangent complex
([[def-infinitesimal-deformation-functor-over-square-zero-extension]],
[[def-cotangent-complex-of-a-scheme-morphism]],
[[def-ext-groups-of-the-cotangent-complex]]), carrying the trivial deformation
to $0$; for the dual numbers this reads
$T^1_X=\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)$. The bijection
is natural under isomorphisms of $X$ and covariant in the coefficient vector
space $I$ (a $k$-linear map $I\to I'$ induces the augmentation-preserving map
$k[I]\to k[I']$ and hence the base-change map
$\operatorname{Def}_X(k[I])\to\operatorname{Def}_X(k[I'])$). This statement
allows arbitrary, including infinite-dimensional, $I$; on finite-dimensional
coefficient spaces the covariance restricts to the corresponding morphisms of
small extensions. Moreover, for the dual numbers, the
infinitesimal automorphism group of the trivial deformation is
$\operatorname{Ext}^0_{\mathcal O_X}(L_{X/k},\mathcal O_X)=\operatorname{Der}_k(\mathcal O_X,\mathcal O_X)$,
and for $X$ smooth over $k$ the theorem specializes to the Kodaira-Spencer
description $T^1_X\cong H^1(X,T_{X/k})$ with
$T_{X/k}=\mathcal Hom(\Omega^1_{X/k},\mathcal O_X)$.

## Facts & Assumptions

**Given:** a field $k$, a flat locally finitely presented $k$-scheme $X$, a $k$-vector space $I$, the trivial square-zero extension $k[I]$, and the Axiom of Choice.

[F1] For an augmented $k$-algebra $B\to k$, $\operatorname{Def}_X(B)$ is the groupoid of flat locally finitely presented $B$-schemes with a specified identification of their special fibre with $X$, and isomorphisms inducing the identity on that fibre. This definition applies to $B=k[I]$ for every $k$-vector space $I$, without a finite-dimensionality assumption. In particular, $T^1_X=\operatorname{Def}_X(k[\epsilon])_{\mathrm{iso}}$ and $\operatorname{Inf}_X$ is the automorphism group of the trivial deformation. ([[def-infinitesimal-deformation-functor-over-square-zero-extension]])

[F2] The affine case: for a flat ring map $k\to B$ the deformations of $B$ over $k[I]$ form, since the trivial deformation exists, a torsor under $\operatorname{Ext}^1_B(L_{B/k},B\otimes_kI)$ with automorphism group $\operatorname{Ext}^0_B(L_{B/k},B\otimes_kI)=\operatorname{Der}_k(B,B\otimes_kI)$. If $B$ is finitely presented over $k$, every such flat lift is finitely presented over $k[I]$: the affine supplier's specialization applies to any square-zero extension, so it applies to $k[I]\to k$ even when $I$ is infinite-dimensional. ([[lem-affine-deformations-obstruction-and-torsor]], [[def-derivation-algebra]])

[F3] The exact cited ringed-space extension theorem, Stacks tag 08UZ, gives the global lifting torsor under $\operatorname{Ext}^1$ and automorphisms $\operatorname{Ext}^0$. Flat scheme deformations are among its ringed-space extensions with coefficient $\mathcal O_X\otimes_kI$ and the prescribed canonical map from $I$; effective Zariski descent identifies these with the local scheme deformation groupoids. ([[lem-flat-deformations-form-a-zariski-sheaf-of-groupoids]])

[F4] For smooth $X$ over $k$ one has $L_{X/k}\simeq\Omega^1_{X/k}[0]$ with $\Omega^1_{X/k}$ locally free of finite rank, so $\operatorname{Ext}^i_{\mathcal O_X}(L_{X/k},M)\cong H^i(X,\mathcal Hom(\Omega^1_{X/k},M))$; the differentials $\Omega^1_{X/k}$ are locally free by smoothness. ([[lem-cotangent-complex-truncation-and-smooth-case]], [[lem-ext-of-locally-free-sheaf-via-cohomology]], [[def-smooth-morphism-schemes]])

## Proof

**Proof technique:** prove the affine statement as a torsor based at the trivial deformation, glue it over an affine cover by descent and the exact global ringed-space extension theorem, then specialize to the smooth case.

1.1 Affine case. Let $X=\operatorname{Spec}B$ be affine over $k$. By [F2] the deformations of $B$ over $k[I]$ form a torsor under $\operatorname{Ext}^1_B(L_{B/k},B\otimes_kI)$ once nonempty, and the trivial deformation $B\otimes_kk[I]$ provides a base point; transporting the torsor structure along this base point gives a canonical bijection $\operatorname{Def}_X(k[I])_{\mathrm{iso}}\cong\operatorname{Ext}^1_B(L_{B/k},B\otimes_kI)=\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X\otimes_kI)$ carrying the trivial class to $0$, together with the identification of the automorphism group of the trivial deformation with $\operatorname{Ext}^0$. The affine ring/sheaf Ext equality uses the affine derived quasi-coherent equivalence recorded in [[def-cotangent-complex-of-a-scheme-morphism]] and the affine cotangent comparison. A square-zero thickening of this affine special fibre is affine by Stacks tag 04EW, and the finite-presentation assertion in [[lem-affine-deformations-obstruction-and-torsor]] ensures the stipulated local finiteness. [F1, F2, given]

2.1 Global case. For a general flat locally finitely presented $X$, use the ringed-space extension classification of Stacks tag 08UZ. The exact cited source theorem 08UZ applies to the thickening $\operatorname{Spec}k\subseteq\operatorname{Spec}k[I]$ with coefficient $\mathcal O_X\otimes_kI$ and its canonical map from $I$. A ringed-space solution is an extension $0\to G\to\mathcal A\to\mathcal O_X\to0$ with square-zero kernel $G=\mathcal O_X\otimes_kI$, which is quasi-coherent. Stacks tag 04EW (the square-zero scheme criterion) therefore makes $(X,\mathcal A)$ a scheme, with the corresponding opens over affine charts of $X$ also affine. The prescribed map from $I$ induces the identity $\mathcal O_X\otimes_kI\to G$, so Stacks tag 063Y gives flatness over $k[I]$ and reduction exactly $X$. On affine finite-presentation charts, the finite-presentation assertion of [[lem-affine-deformations-obstruction-and-torsor]] gives finite presentation of the lift. Conversely every flat lift has this canonical kernel by the same flatness criterion. Thus the ringed-space solutions and the required scheme lifts are the same groupoid. This argument applies also to infinite-dimensional $I$. The source theorem computes the extension classes as a torsor under $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X\otimes_kI)$; consequently the isomorphism classes of global deformations are in canonical bijection with that group, the trivial deformation supplying the distinguished origin. Naturality under isomorphisms of $X$ and covariance in $I$ follow from the functoriality of base change on augmented bases and of the extension classification. In finite-dimensional cases this includes the corresponding morphisms of small extensions. This proves the first-order classification. [F1, F3, step 1.1]

3.1 Infinitesimal automorphisms and the smooth specialization: the automorphism statement is the $\operatorname{Ext}^0$ part of [F2] and [F3] at the trivial deformation, and $\operatorname{Ext}^0_{\mathcal O_X}(L_{X/k},\mathcal O_X)=\operatorname{Der}_k(\mathcal O_X,\mathcal O_X)$ is the affine identification glued over the cover. If $X$ is smooth over $k$, [F4] gives $L_{X/k}\simeq\Omega^1_{X/k}[0]$ and hence $T^1_X\cong\operatorname{Ext}^1(L_{X/k},\mathcal O_X)\cong H^1(X,\mathcal Hom(\Omega^1_{X/k},\mathcal O_X))=H^1(X,T_{X/k})$, the Kodaira-Spencer description. The Axiom of Choice is used only through the declared derived-Hom and Cech suppliers. [F3, F4, step 2.1] ∎

**Source application.** The global extension classification uses Stacks tag 08UZ directly, read with its proof; it applies on arbitrary ringed spaces and does not require a finite affine cover of $X$. A map $I\to I'$ gives base change along $k[I]\to k[I']$, so the coefficient variance is covariant.
