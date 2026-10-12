---
id: lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus
kind: lemma
title: "Stable-flag incidence spaces admit the oriented proper correspondence calculus"
status: draft
origin: session
deps: [lem-flag-variety-of-a-vector-space, def-axiom-of-choice, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports, def-equivariant-borel-moore-homology-and-correspondence-convolution, thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product, thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution, thm-constructible-six-functors-proper-base-change-and-verdier-duality, lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Geometric methods in representation theory"
      url: "https://arxiv.org/abs/math/9802004"
    - title: "Varagnolo–Vasserot, Canonical bases and KLR-algebras"
      url: "https://arxiv.org/abs/0901.3992"
    - title: "Varshavsky, Lefschetz–Verdier trace formula"
      url: "https://arxiv.org/abs/math/0505564"
---

## Statement

Assume the Axiom of Choice, inherited through the smooth-projective flag-variety and Euler-to-Chern suppliers. Let $Q$ be any finite loopless quiver, allowing multiple arrows and arrows in both directions, let $V=\bigoplus_vV_v$ be finite-dimensional over $\mathbb C$, and put $G=\prod_v\mathrm{GL}(V_v)$ and $E_V=\bigoplus_{h:v\to w}\operatorname{Hom}(V_v,V_w)$. For a word $\nu$ of vertex labels with multiplicities $\dim V_v$, let $B_\nu$ be its graded complete flag variety and $X_\nu=\{(x,F)\in E_V\times B_\nu:x_h(F^a_v)\subseteq F^a_w\text{ for all }a,h\}$. Then $X_\nu\to B_\nu$ is a complex algebraic vector bundle, $X_\nu$ is smooth, and $\pi_\nu:X_\nu\to E_V$ is projective. Every middle-forgetting projection $X_\nu\times_{E_V}X_\eta\times_{E_V}X_\theta\to X_\nu\times_{E_V}X_\theta$ is proper. All orientations and refined middle-diagonal operations required by the preceding Ext/convolution theorems exist equivariantly, without a smoothness or transversality assertion for fiber products. With $d_\nu=\dim_{\mathbb C}X_\nu$ and $L_\nu=R\pi_{\nu!}k[d_\nu]$, those theorems apply in every corner. Smooth vector-bundle projections and flag-bundle projections have their complex-oriented pullbacks, and zero-section self-intersection is cap product with the top Chern class of the bundle.

## Facts & Assumptions

**Given:** $Q,V,\nu$ and the supplied preceding constructible and Borel foundations.

[F1] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supply complex orientations, proper traces and their Thom/projection compatibility.

[F4] [[lem-flag-variety-of-a-vector-space]] supplies the smooth projective complete flag variety and its local charts, under [[def-axiom-of-choice]]. For a zero-dimensional vector space the flag variety is a point.

[F3] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] identifies Euler and top Chern classes on numerable bundles over path-connected CW complexes, assuming [[def-axiom-of-choice]]. Apply it componentwise to finite-type flag/bundle Borel approximations, which have CW type by the supplied constructible triangulation prerequisite.

[F2] [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]], and [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] supply the stated correspondence calculus under smoothness and properness.

## Proof

1.1 Fix a graded reference flag. Its stabilizer is the product of upper triangular subgroups in the individual $\mathrm{GL}(V_v)$, and its orbit $B_\nu$ is the product of complete flag varieties $\prod_v\mathrm{Flag}(V_v)$. On an ordinary flag chart choose ordered basis vectors compatible with the flags; the stability condition for an arrow $h:v\to w$ says its matrix coefficient from source position $a$ to target position $b$ is zero whenever $b>a$, where positions are positions in the full word $\nu$. Thus the fiber is a fixed linear subspace $S_\nu\subset E_V$, of dimension the sum over arrows of the number of allowed pairs. The stabilizer preserves this subspace, and $X_\nu=G\times_{P_\nu}S_\nu$ is the associated vector bundle. Alternatively the chosen flag charts trivialize it with these matrix entries as linear coordinates. Multiple arrows merely contribute separate summands; arrows in both directions impose conditions on separate matrices. [given, construct, algebra]

2.1 By [F4], flag charts are affine spaces and each nontrivial flag factor is smooth projective; dimension-zero factors are points. Step 1.1 therefore makes $X_\nu$ smooth of pure dimension $d_\nu=\sum_v\dim\mathrm{Flag}(V_v)+\dim S_\nu$. Stability is the vanishing of the bundle maps $F^a_v\to V_w/F^a_w$ induced by $x_h$, so $X_\nu$ is closed in $E_V\times B_\nu$. Projection to $E_V$ is a restriction of the projective product projection, hence projective. The middle-forgetting map is its base change for $\pi_\eta$, hence proper, although none of its fibers or total spaces is asserted smooth. [F4, step 1.1, given, algebra]

3.1 Every $X_\nu$ has its complex orientation. Its diagonal has complex normal bundle $TX_\nu$; applying its Thom class to the pulled-back closed support gives the refined diagonal operation of [F2], whether or not the support is transverse. Proper trace along the map of step 2.1 supplies convolution. All constructions are $G$-equivariant because they use equivariant bundle maps and the invariant complex orientation, so they descend to smooth free approximations. The hypotheses of both Ext and product theorems in [F2] now hold, with exactly the dimension shift $d_\nu$ rather than the dimension of the flag base alone. [F1, F2, step 1.1, step 2.1]

4.1 For a rank-$c$ complex bundle the normal pair of its zero section is its oriented disk/sphere pair. Multiplication by its positive Thom class defines the Gysin operation; pulling that class back by the zero section gives its Euler class, which is the top Chern class by [F3] on each CW-type approximation component. Thus applying zero-section pullback after its pushforward caps with $c_c$. Smooth complex bundle and flag-bundle maps use the relative orientation, so they have the stated oriented pullbacks. These operations commute with proper pushforward and Cartesian pullback by the projection formula and trace/base-change mates of [F1]. This supplies the calculus, not the numerical signed crossing formulas of a geometric KLR presentation. The Axiom of Choice is inherited through [F3] and [F4]. [F1, F3, F4, step 3.1] ∎
