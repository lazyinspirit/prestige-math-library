---
id: lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus
kind: lemma
title: "Stable-flag incidence spaces admit the oriented proper correspondence calculus"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [cor-projective-variety-product-exists, def-axiom-of-choice,
       def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       def-proper-morphism,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-closed-immersion-proper,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       lem-flag-variety-of-a-vector-space,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-projective-space-proper-over-base,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
       thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle,
       thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in representation theory, arXiv:math/9802004; lecture notes for the 1997 summer school (complete 30-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the smooth-projective
flag-variety and Euler-to-Chern suppliers. Let $Q$ be any finite loopless quiver, allowing
multiple arrows and arrows in both directions, let $V=\bigoplus_vV_v$ be finite-dimensional over
$\mathbb C$, and put $G=\prod_v\mathrm{GL}(V_v)$ and
$E_V=\bigoplus_{h:v\to w}\operatorname{Hom}(V_v,V_w)$. For a word $\nu$ of vertex labels with
multiplicities $\dim V_v$, let $B_\nu$ be its graded complete flag variety and
$X_\nu=\{(x,F)\in E_V\times B_\nu:x_h(F^a_v)\subseteq F^a_w\text{ for all }a,h\}$. Then
$X_\nu\to B_\nu$ is a complex algebraic vector bundle, $X_\nu$ is smooth, and
$\pi_\nu:X_\nu\to E_V$ is projective. Every middle-forgetting projection
$X_\nu\times_{E_V}X_\eta\times_{E_V}X_\theta\to X_\nu\times_{E_V}X_\theta$ is proper. All
orientations and refined middle-diagonal operations required by the preceding Ext/convolution
theorems exist equivariantly, without a smoothness or transversality assertion for fiber products.
With $d_\nu=\dim_{\mathbb C}X_\nu$ and $L_\nu=R\pi_{\nu!}k[d_\nu]$, those theorems apply in every
corner. Smooth vector-bundle projections and flag-bundle projections have their complex-oriented
pullbacks, and zero-section self-intersection is cap product with the top Chern class of the
bundle.

## Facts & Assumptions

**Given:** the Axiom of Choice; a finite loopless quiver $Q$; finite-dimensional complex vector spaces $V_v$; the word $\nu$ with multiplicities $\dim V_v$; the groups $G=\prod_v\mathrm{GL}(V_v)$; the spaces $E_V=\bigoplus_{h:v\to w}\operatorname{Hom}(V_v,V_w)$, $B_\nu$ and $X_\nu$ of the Statement; and the correspondence calculus of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] and [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]].

[F1] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supply the complex orientations, the refined middle-diagonal Thom operation on arbitrary closed supports, the proper traces and their projection/base-change compatibility, and the equivariant form with the normalized dualizing object, under [[def-axiom-of-choice]].

[F2] The items [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] and [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] supply the stated correspondence calculus for proper $G$-equivariant maps with smooth pure-dimensional sources, including the degree shifts and the corner isomorphisms, with no transversality hypothesis.

[F3] [[lem-flag-variety-of-a-vector-space]] supplies, under [[def-axiom-of-choice]], the smooth projective complete flag variety of a finite-dimensional complex vector space and its affine charts; for a zero-dimensional space the flag variety is a point. [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] supplies finite CW-type models of the finite-type flag and bundle approximations, so the Euler-to-top-Chern identification applies componentwise to them.

[F4] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] identifies, under AC, the top Chern class and the Euler class of a numerable complex bundle over a path-connected CW complex; it is applied to the CW-type approximations of [F3].

[F5] [[lem-closed-immersion-proper]] says closed immersions are proper, [[thm-projective-space-proper-over-base]] says $\mathbb P^n_S\to S$ is proper, [[cor-projective-variety-product-exists]] supplies products of projective varieties, and [[def-proper-morphism]] defines proper as separated, finite type and universally closed, properties stable under composition and base change; hence projectivity of a morphism over an affine base implies properness, and base changes of proper morphisms are proper.

[A1] The Axiom of Choice is inherited through [F1], [F2] and [F3]'s suppliers; the incidence, dimension and orientation computations of the proof are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Incidence as an associated bundle. Fix a graded reference flag. Its stabilizer $P_\nu=\prod_vP_v$ is the product of the upper triangular subgroups of the individual $\mathrm{GL}(V_v)$, and by the transitive action of [F3] its orbit is $B_\nu=\prod_v\operatorname{Flag}(V_v)$, a product of smooth projective flag varieties, so $B_\nu=G/P_\nu$ is smooth projective. On an ordinary flag chart choose ordered basis vectors compatible with the flags; the stability condition $x_h(F^a_v)\subseteq F^a_w$ for an arrow $h:v\to w$ says that the matrix coefficient of $x_h$ from source position $a$ to target position $b$ vanishes whenever $b>a$, positions being read in the full word $\nu$. Over the chart the fiber of $X_\nu\to B_\nu$ is therefore the fixed linear subspace $S_\nu\subset E_V$ of tuples whose entries vanish in the forbidden positions, of dimension the sum over arrows of the number of allowed pairs; the stabilizer $P_\nu$ preserves $S_\nu$ and the chart trivializations identify $X_\nu=G\times_{P_\nu}S_\nu$ as a complex algebraic vector bundle over $B_\nu=G/P_\nu$. Multiple arrows contribute separate summands, and arrows in both directions impose conditions on separate matrices. [F3, given, construct, algebra]

2.1 Smoothness, projectivity and properness. By step 1.1 the total space $X_\nu$ is the total space of a vector bundle over the smooth variety $B_\nu$, hence is smooth of pure complex dimension $d_\nu=\sum_v\dim\operatorname{Flag}(V_v)+\dim S_\nu$. The incidence conditions are polynomial in the chart coordinates, so $X_\nu$ is closed in $E_V\times B_\nu$, and $\pi_\nu$ is the composite of this closed immersion with the product projection. Since $B_\nu$ is a closed subvariety of a product of projective spaces by [F3], the product projection $E_V\times B_\nu\to E_V$ is a closed subvariety of a trivial projective-space bundle over the affine space $E_V$, so it is projective, and passing to the closed subvariety $X_\nu$ keeps it projective; by [F5] a projective morphism over the affine base is proper. The middle-forgetting map $X_\nu\times_{E_V}X_\eta\times_{E_V}X_\theta\to X_\nu\times_{E_V}X_\theta$ is the base change of $\pi_\eta$ along the projection $X_\nu\times_{E_V}X_\theta\to E_V$, hence proper by the base-change stability in [F5], although neither its fibers nor its total space is asserted smooth. [F3, F5, step 1.1, algebra]

3.1 Orientations and equivariance. Each $X_\nu$ is smooth by step 2.1, so it carries the complex orientation and its diagonal $X_\nu\hookrightarrow X_\nu\times X_\nu$ has complex normal bundle $TX_\nu$; applying the Thom class of [F1] to the pulled-back closed support gives the refined middle-diagonal operation of [F2] whether or not the support is transverse, and the proper trace along the maps of step 2.1 supplies convolution. All constructions use $G$-equivariant bundle maps and the invariant complex orientation, so they descend to the smooth free approximations of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] and are compatible with stabilization by [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]. The hypotheses of the Ext and product theorems of [F2] therefore hold in every corner of the quiver-flag data, with exactly the dimension shift $d_\nu$ and not the dimension of the flag base alone; the Borel approximations have CW type by [F3]. [F1, F2, F3, step 1.1, step 2.1]

4.1 Zero sections and Euler classes. For a rank-$c$ complex bundle over a CW-type approximation the normal pair of its zero section is its oriented disk/sphere pair; multiplication by the positive Thom class defines the Gysin operation, and pulling that class back along the zero section gives the Euler class, which equals the top Chern class by [F4] on each approximation component. Smooth complex vector-bundle projections and flag-bundle projections use the relative complex orientation, so they have the stated oriented pullbacks, and these operations commute with proper pushforward and Cartesian pullback by the projection formula and trace/base-change mates of [F1]. This supplies the oriented push-pull calculus required by the convolution theorems, not the numerical signed crossing formulas of a geometric KLR presentation. The Axiom of Choice is inherited through [A1], and no further choice principle is used. [A1, F1, F4, step 3.1] ∎
