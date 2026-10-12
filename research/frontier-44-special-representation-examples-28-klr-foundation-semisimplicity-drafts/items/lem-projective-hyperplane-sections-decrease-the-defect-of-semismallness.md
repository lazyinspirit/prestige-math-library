---
id: lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness
kind: lemma
title: "General projective hyperplanes decrease the defect of semismallness"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - thm-upper-semicontinuity-fibre-dimension-projective
  - cor-dimension-of-image-plus-generic-fibre
  - thm-bertini-smooth-hyperplane-section
  - lem-projective-hypersurface-dimension-drop
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. A. de Cataldo and L. Migliorini, The Hodge theory of algebraic maps, Theorem 4.7.4"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume the Axiom of Choice as inherited from the algebraic dimension and Bertini suppliers. Let $f:X\to Y$ be a projective morphism of complex projective varieties with $X$ smooth, nonempty and irreducible of dimension $n$. Fix a projective embedding $X\hookrightarrow\mathbb P^d$ with $d\ge1$ and let $Y_i=\{y:\dim f^{-1}(y)=i\}$. Put $r(f)=\max_{Y_i\ne\varnothing}(2i+\dim Y_i-n)$. For the universal hyperplane incidence $g:\mathcal X\to Y\times(\mathbb P^d)^\vee$ one has $r(g)\le r(f)-1$ if $r(f)>0$. If $r(f)=0$, $g$ is small: it has defect zero and every positive-fiber-dimensional stratum gives a strictly negative defect contribution.

There is a nonempty Zariski open subset of the hyperplane parameter space such that every hyperplane $H$ in it has smooth $X_H=X\cap H$ and satisfies the same conclusions for $f_H:X_H\to Y$: its defect is at most $r(f)-1$ if $r(f)>0$, and it is small if $r(f)=0$. Empty hyperplane sections are omitted from the defect computation and have zero pushforward. Successive general sections therefore lower a positive defect at every nonempty step. A finite prescribed algebraic Whitney stratification can also be met transversally by shrinking this open subset when the separately supplied stratified transversality theorem is applicable.

## Facts & Assumptions

**Given:** the complex projective morphism, embedding and choice assumption of the Statement.

[F1] Projective fiber dimensions are upper semicontinuous, so the finitely many $Y_i$ and the universal fiber-dimension loci are constructible ([[thm-upper-semicontinuity-fibre-dimension-projective]]). Every such constructible locus is a finite disjoint union of locally closed varieties; the dimensions below are maxima of those finitely many piece dimensions.

[F2] For each irreducible component of a morphism the dimension of its source is the dimension of its image closure plus its generic fiber dimension. After removing a proper closed subset of the image closure, that generic dimension is constant. Apply this component by component, not to the whole reducible source ([[cor-dimension-of-image-plus-generic-fibre]]).

[F3] General hyperplanes in a fixed embedding of a smooth complex variety cut out smooth zero schemes ([[thm-bertini-smooth-hyperplane-section]]). No simultaneous avoidance of every positive-dimensional fiber component is assumed.

[F4] A nonzero hyperplane equation on an irreducible projective component of positive dimension cuts a nonempty pure codimension-one section ([[lem-projective-hypersurface-dimension-drop]]); a zero-dimensional component either lies in the hyperplane or has empty intersection.

## Proof

**Given:** the data and choice assumption of the Statement.

1.1 The universal incidence $\mathcal X=\{(x,H):x\in X\cap H\}$ is a projective-space bundle of fiber dimension $d-1$ over $X$, because the linear forms vanishing at a given point form a rank-$d$ subbundle of the trivial space of linear forms. Thus $\mathcal X$ is smooth of dimension $n+d-1$. The fiber of $g$ at $(y,H)$ is $f^{-1}(y)\cap H$. A nonempty hyperplane cut of a projective variety of dimension $i+1$ has dimension $i$ unless the hyperplane contains a top-dimensional component, in which case its dimension is $i+1$: this is exactly [F4], applied component by component. [given, F4, algebra, construct]

2.1 Partition the universal locus of fiber dimension $i$ into $A_i=\{(y,H):y\in Y_i,\ \dim(f^{-1}(y)\cap H)=i\}$ and $B_i=\{(y,H):y\in Y_{i+1},\ \dim(f^{-1}(y)\cap H)=i\}$. These are constructible by [F1]. For fixed $y\in Y_i$, the first locus consists of hyperplanes containing at least one of the finitely many top-dimensional components of $f^{-1}(y)$. Such a component spans a projective linear space of dimension at least $i$, so its containing hyperplanes have parameter dimension at most $d-i-1$. By [F2], $\dim A_i\le\dim Y_i+d-i-1$. Also $\dim B_i\le\dim Y_{i+1}+d$. Subtracting $n+d-1$ from twice the fiber dimension plus these bounds gives contributions at most $r(f)-i$ and $r(f)-1$, respectively. For $i=0$ in the first bound the contribution is actually $\dim Y_0-n\le0$; the last inequality follows from [F2] on the zero-fiber-dimensional locus. [F1, F2, step 1.1, algebra]

3.1 If $r(f)>0$, both bounds in step 2.1 are at most $r(f)-1$, including the separately treated $i=0$ case; this proves the universal inequality. If $r(f)=0$, they are strictly negative for $i>0$. For $i=0$ the contribution is zero on the dense image of the generically finite map: $r(f)=0$ forces generic fiber dimension zero, since a generic fiber of positive dimension $a$ would give contribution $a>0$ by [F2]. The universal map is generically finite on its image, so its defect is zero and the strict positive-fiber bounds prove smallness. [F2, step 2.1, algebra]

4.1 For the fixed-hyperplane claim project each of the finitely many locally closed components of $A_i,B_i$ to $(\mathbb P^d)^\vee$. A component whose image is not dense is absent from a general parameter fiber. For a component with dense image, [F2] bounds its general parameter fiber dimension by its dimension minus $d$. Intersect the finitely many resulting nonempty parameter opens and the smooth-section open in [F3]. On this open, the same estimates as step 2.1 hold with $\dim A_i-d$, $\dim B_i-d$ and source dimension $n-1$. Hence the identical arithmetic gives the fixed-hyperplane conclusions. Iterating on the smooth nonempty sections proves the successive decrease. Transversality, when needed by a consumer, is the independently supplied finite-stratification condition named in the Statement, not a consequence asserted from ordinary Bertini alone. [F1, F2, F3, step 2.1, step 3.1] ∎

## Proof contract boundary

This argument derives the fixed-general-hyperplane bound from the universal bound and actual componentwise generic fiber dimensions. It needs no “counting constants” theorem guaranteeing that a hyperplane avoids every fiber component. The latter stronger property is unnecessary for the perverse induction. Source OCR conflates $\dim X$ and $\dim\mathcal X$ in places; the displayed local calculation uses $\dim\mathcal X=n+d-1$ explicitly.
