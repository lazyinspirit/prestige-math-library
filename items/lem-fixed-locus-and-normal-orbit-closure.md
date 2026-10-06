---
id: lem-fixed-locus-and-normal-orbit-closure
kind: lemma
title: Fixed loci are closed and a normal subgroup fixing a point fixes the orbit closure
dependency_level: 3
deps:
  - thm-scheme-theoretic-image-quasi-compact-morphism
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - def-axiom-of-choice
  - def-algebraic-group-action-and-scheme-theoretic-stabilizer
  - def-scheme-theoretic-image
  - def-separated-scheme-over-base
  - lem-action-map-fibres-and-stabilizer-subscheme
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - thm-morphisms-agree-closed-equalizer-separated-target
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Chapter 7 Sections 7(b)-(c), fixed-point subschemes and isotropy groups, printed pp. 138-140
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Section 9(a), printed pp. 139-140; Corollary 9.10, printed p. 143; Notes 18.8, printed p. 314
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $G$ be a smooth algebraic group of finite type over $k$ acting on a separated finite-type $k$-scheme $X$, let $H\subseteq G$ be a smooth closed normal subgroup scheme, and let $y\in X(k)$ be a point fixed by $H(k)$. Then:

(a) the fixed $k$-points form a Zariski-closed subset of $X(k)$, namely the $k$-points of the closed subscheme obtained by intersecting the scheme-theoretic equalizers of $h:X\to X$ and the identity for $h\in H(k)$;

(b) the reduced closure $Z$ of the $G$-orbit of $y$ is stable under $G$, and the action of $H$ on $Z$ is trivial as a scheme morphism;

(c) for every $x\in Z(k)$ that is fixed by $H(k)$, the scheme-theoretic stabilizer $G_x$ of $x$ contains $H$.

The Axiom of Choice is inherited from the orbit-map and stabilizer suppliers.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth finite-type $k$-group $G$ acting on a separated finite-type $k$-scheme $X$, a smooth closed normal subgroup scheme $H\subseteq G$, and $y\in X(k)$ fixed by $H(k)$.

[F1] An action of $G$ on $X$ is a morphism $\alpha:G\times_kX\to X$ satisfying the usual identities. For a rational point $x\in X(k)$ the orbit morphism is $\varrho_x(g)=\alpha(g,x)$, and its fibre over $x$ is the closed subgroup scheme $G_x=G\times_{X,\varrho_x,x}\operatorname{Spec}k$. It represents $T\mapsto\{g\in G(T):g\cdot x_T=x_T\}$, where $x_T$ is the base change of the $k$-point $x$; its $k$-points are the set-theoretic stabilizer of $x$. ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]], [[lem-action-map-fibres-and-stabilizer-subscheme]])

[F2] If $f,g:X\to Y$ are $k$-morphisms with $Y$ separated over $k$, their scheme-theoretic equalizer is a closed subscheme of $X$, representing agreement of the two morphisms on every test scheme. ([[thm-morphisms-agree-closed-equalizer-separated-target]], [[def-separated-scheme-over-base]])

[F3] Assume AC. For a smooth finite-type $k$-scheme $U$ over an algebraically closed field $k$ and a closed subscheme $W\subseteq U$, if $W(k)\supseteq S$ for a dense subset $S\subseteq U(k)$ then $W=U$; in particular $U(k)$ is dense in $U$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F4] The orbit morphism $\varphi:G\to X$ is quasi-compact, and its scheme-theoretic image $Z$ is the smallest closed subscheme receiving it. Since $G$ is reduced, the defining kernels on affine charts are radical, so $Z$ is reduced and is the reduced orbit closure. Its map from $G$ is schematically dominant. Such dominance survives product with a $k$-scheme: on affine charts the defining joint injections into the finite product of source-chart rings remain injective after tensoring with a $k$-algebra, since modules over a field are flat. ([[thm-scheme-theoretic-image-quasi-compact-morphism]], [[prop-modules-over-a-field-are-projective-flat-and-injective]], [[def-scheme-theoretic-image]], [[def-algebraic-group-action-and-scheme-theoretic-stabilizer]])

## Proof

**Given:** AC, smooth finite-type $G$ and smooth closed normal $H$ over algebraically closed $k$, separated finite-type $X$, and $y\in X(k)$ fixed by $H(k)$.

1.1 For each $h\in H(k)$, its action and the identity are $k$-morphisms $X\to X$. Their scheme-theoretic equalizer is closed by [F2]. The schematic intersection of these closed equalizers has exactly the $k$-points fixed by $H(k)$, so these form a closed subset of $X(k)$. Topological invariance of a nonclosed point alone does not imply membership in a scheme-theoretic equalizer. Only $k$-points are used to define these $k$-automorphisms; an arbitrary $R$-point would act on $X_R$. This proves (a). [F1, F2]

2.1 The closed subscheme $H\cap G_y$ contains every point of $H(k)$, since these fix $y$. Smoothness of $H$ and [F3] therefore give $H\subseteq G_y$ scheme-theoretically. Consequently every point of $H(R)$ fixes $y_R$ for every base algebra $R$. Normality then gives $h(gy_R)=g(g^{-1}hg)y_R=gy_R$, so $H$ fixes the entire orbit morphism on every base algebra. The closed locus in step1.1 contains the orbit and hence its closure $Z$. [F1, F3, step 1.1]

3.1 By [F4], $Z$ is the reduced scheme-theoretic orbit closure. The composite $G\times G\to G\times Z\to X$ given by action equals the orbit morphism after multiplication and factors through $Z$. The map $G\times G\to G\times Z$ is schematically dominant by [F4], so the pullback of the closed ideal defining $Z$ vanishes already on $G\times Z$. Thus the action factors through $G\times Z\to Z$, proving scheme stability. Similarly, the two maps $H\times Z\to X$ given by action and projection agree after the schematically dominant $H\times G\to H\times Z$, by step2.1. Their closed equalizer [F2] must therefore be the whole $H\times Z$. Hence $H$ fixes $Z$ scheme-theoretically, in particular pointwise, proving (b). No reducedness of ambient $X$ is needed. [F2, F4, step 2.1]

4.1 For any $x\in Z(k)$ fixed by $H(k)$, the closed subscheme $H\cap G_x$ contains $H(k)$. Smooth-point density [F3] makes it all of $H$, so $H\subseteq G_x$, proving (c). Steps1.1,3.1 and4.1 establish the three claims, with the all-base-algebra argument in step2.1 licensed by the preceding scheme-theoretic stabilizer inclusion. [F1, F3, step 3.1] ∎
