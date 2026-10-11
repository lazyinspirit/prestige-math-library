---
id: lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness
kind: lemma
title: "General projective hyperplanes decrease the defect of semismallness"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-axiom-of-choice, thm-upper-semicontinuity-fibre-dimension-projective,
       cor-dimension-of-image-plus-generic-fibre, thm-bertini-smooth-hyperplane-section,
       lem-projective-hypersurface-dimension-drop, def-projective-morphism-classical,
       def-fibre-dimension-at-point-classical]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, The Hodge theory of algebraic maps, arXiv:math/0306030v2 (complete final-version PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "Theorem 4.7.4 and its proof (defect r(f), universal hyperplane family)"
---

## Statement

Assume the Axiom of Choice as inherited from the algebraic dimension and Bertini suppliers. Let $f:X\to Y$ be a projective morphism of complex projective varieties with $X$ smooth, nonempty and irreducible of dimension $n$. Fix a projective embedding $X\hookrightarrow\mathbb P^d$ with $d\ge1$ and let $Y_i=\{y:\dim f^{-1}(y)=i\}$. Put $r(f)=\max_{Y_i\ne\varnothing}(2i+\dim Y_i-n)$. For the universal hyperplane incidence $g:\mathcal X\to Y\times(\mathbb P^d)^\vee$ one has $r(g)\le r(f)-1$ if $r(f)>0$. If $r(f)=0$, $g$ is small: it has defect zero and every positive-fiber-dimensional stratum gives a strictly negative defect contribution.

There is a nonempty Zariski open subset of the hyperplane parameter space such that every hyperplane $H$ in it has smooth $X_H=X\cap H$ and satisfies the same conclusions for $f_H:X_H\to Y$: its defect is at most $r(f)-1$ if $r(f)>0$, and it is small if $r(f)=0$. Empty hyperplane sections are omitted from the defect computation and have zero pushforward. Successive general sections therefore lower a positive defect at every nonempty step. A finite prescribed algebraic Whitney stratification can also be met transversally by shrinking this open subset when the separately supplied stratified transversality theorem is applicable.

## Facts & Assumptions

**Given:** the complex projective morphism $f$, the embedding $X\hookrightarrow\mathbb P^d$, the universal incidence $g$, and the choice assumption of the Statement.

[F1] Projective fibre dimension is upper semicontinuous: for a projective morphism of classical varieties the set $E_r=\{y:\dim X_y\ge r\}$ is closed for every integer $r$, with empty fibres of dimension $-\infty$ ([[thm-upper-semicontinuity-fibre-dimension-projective]]). Hence each $Y_i=E_i\setminus E_{i+1}$ is constructible, and so is each universal fibre-dimension locus. Every constructible locus is a finite disjoint union of locally closed varieties; the dimensions below are maxima of those finitely many piece dimensions.

[F2] For an irreducible classical variety $X$ and a morphism $f:X\to Y$ the reduced closure $Z=\overline{f(X)}$ is irreducible and $\dim X=\dim Z+r$, where $r$ is the common dimension of the nonempty fibres on a nonempty open of $Z$; for reducible $X$ one applies this component by component, not to the whole reducible source ([[cor-dimension-of-image-plus-generic-fibre]]).

[F3] A general hyperplane in a fixed embedding of a smooth complex variety cuts out a smooth zero scheme, and the set of such hyperplanes contains a nonempty Zariski open of the dual projective space ([[thm-bertini-smooth-hyperplane-section]]). No simultaneous avoidance of every positive-dimensional fibre component is asserted.

[F4] Let $X\subseteq\mathbf P^N_k$ be irreducible of dimension $d\ge1$ and let $f$ be homogeneous of positive degree not vanishing identically on $X$; then $X\cap V_+(f)$ is nonempty and every irreducible component has dimension $d-1$ ([[lem-projective-hypersurface-dimension-drop]]). Thus a nonzero hyperplane equation on an irreducible projective component of positive dimension cuts a nonempty pure codimension-one section, while a zero-dimensional component either lies in the hyperplane or has empty intersection.

[F5] The vocabulary is classical: projective morphisms and embeddings are as in [[def-projective-morphism-classical]], fibre dimensions and the loci $Y_i$ are chain dimensions of closed-point fibres as in [[def-fibre-dimension-at-point-classical]], and the Axiom of Choice is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** the data and choice assumption of the Statement.

1.1 The universal incidence $\mathcal X=\{(x,H):x\in X\cap H\}\subseteq X\times(\mathbb P^d)^\vee$ is a projective-space bundle of relative dimension $d-1$ over $X$: at each $x$ the hyperplanes containing $x$ are the linear forms vanishing at $x$, a rank-$d$ subbundle of the rank-$(d+1)$ bundle of linear forms, so the fibres are projective spaces of dimension $d-1$. Hence $\mathcal X$ is smooth, irreducible and of dimension $n+d-1$, and the fibre of $g$ at $(y,H)$ is $f^{-1}(y)\cap H$. A nonempty hyperplane cut of a projective variety of dimension $i+1$ has dimension $i$ unless the hyperplane contains a top-dimensional component, in which case its dimension is $i+1$; this is exactly [F4] applied component by component, taking the zero-dimensional components to be either contained in $H$ or disjoint from it. [given, F4, F5, algebra, construct]

2.1 Partition the universal locus of fibre dimension $i$ into $A_i=\{(y,H):y\in Y_i,\ \dim(f^{-1}(y)\cap H)=i\}$ and $B_i=\{(y,H):y\in Y_{i+1},\ \dim(f^{-1}(y)\cap H)=i\}$; both are constructible by [F1]. For fixed $y\in Y_i$ the fibre of $A_i$ over $y$ consists of the hyperplanes containing at least one of the finitely many top-dimensional components of $f^{-1}(y)$. Such a component spans a projective linear subspace of dimension at least $i$, so the hyperplanes containing it form a projective subspace of the dual of dimension at most $d-i-1$; hence every fibre of $A_i\to Y_i$ has dimension at most $d-i-1$, and [F2] applied to the finitely many components of $\overline{A_i}$ gives $\dim A_i\le\dim Y_i+d-i-1$. The projection $B_i\to Y_{i+1}$ has fibres of dimension at most $d$ because the hyperplane parameter is free, so $\dim B_i\le\dim Y_{i+1}+d$. Subtracting the source dimension $n+d-1$ of $g$ from twice the fibre dimension plus these parameter dimensions gives contributions at most $r(f)-i$ for $A_i$ and at most $r(f)-1$ for $B_i$; for $i=0$ the $A_0$ contribution is $\dim Y_0-n\le0$ because $\dim Y_0\le\dim\overline{f(X)}\le n$ by [F2]. [F1, F2, step 1.1, algebra]

3.1 If $r(f)>0$, both bounds in step 2.1 are at most $r(f)-1$, including the separately treated $i=0$ case, so $r(g)\le r(f)-1$. If $r(f)=0$, the bounds are strictly negative for every $i>0$; for $i=0$ the contribution is zero, attained because $r(f)=0$ forces generic fibre dimension zero by [F2], so $g$ is generically finite on its image and has defect zero, while the strict bounds for positive fibre dimension prove smallness. [F2, step 2.1, algebra]

4.1 For the fixed-hyperplane claim, project each of the finitely many locally closed components of the $A_i$ and $B_i$ to $(\mathbb P^d)^\vee$; a component whose image is not dense is absent from a general parameter fibre, and for a component with dense image [F2] bounds its general parameter fibre dimension by its dimension minus $d$. Intersecting the finitely many resulting nonempty parameter opens with the smooth-section open of [F3] gives a nonempty Zariski open; on it the same estimates as step 2.1 hold with $\dim A_i-d$, $\dim B_i-d$ and source dimension $n-1$ for $X_H$, so the identical arithmetic gives the fixed-hyperplane conclusions, and iterating on the successive smooth nonempty sections proves that a positive defect decreases at every nonempty step. Transversality of a prescribed finite algebraic Whitney stratification is the separately supplied condition named in the Statement, not a consequence of ordinary Bertini alone. [F1, F2, F3, step 2.1, step 3.1] ∎

## Remarks

The defect $r(f)$ and smallness are defined inline in the Statement; this item is their home in this pair, and the later consumer
`lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` reads the same formula. The argument needs no "counting of constants" theorem guaranteeing that a hyperplane avoids every fibre component. The displayed computation uses $\dim\mathcal X=n+d-1$ throughout; the source's typed rendition of Theorem 4.7.4 conflates $\dim X$ and $\dim\mathcal X$ in two display lines, which does not affect this derivation.
