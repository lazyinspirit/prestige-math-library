---
dependency_level: 2
id: lem-relative-curve-jet-torsor-has-affine-contraction
kind: lemma
title: Relative curve jet torsors have affine contractions after shrinking the base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-ample-effective-boundary-gives-generically-finite-affine-contraction
  - lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve
  - lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base
  - cor-canonical-degree-two-g-minus-two
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - lem-veronese-map-well-defined-closed-immersion
  - thm-segre-line-bundle-external-tensor
  - def-projective-bundle-scheme
  - thm-gluing-affine-schemes
  - thm-projective-space-proper-over-base
  - lem-proper-local-on-base
  - lem-proper-stable-composition
  - lem-proper-stable-base-change
  - thm-proper-morphism-closed-image
  - thm-line-bundle-sections-define-projective-map
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - cor-noether-normalisation-module-finiteness
  - thm-polynomial-algebras-over-fields-have-finite-integral-closures
  - lem-integral-closure-unchanged-across-an-integral-intermediate-domain
  - thm-integral-closure-is-integrally-closed
  - thm-normality-is-local-for-domains
  - lem-proper-source-to-separated-target-proper
  - lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
  - cor-quasi-finite-locus-open-finite-type-algebra
  - cor-dimension-preserved-by-integral-extensions
  - thm-global-functions-proper-integral-variety
  - thm-proper-quasi-finite-is-finite
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - cor-projective-cohomology-finite-dimensional-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §§2–3, printed pp. 137–141; relative algebraic reconstruction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(A–C), printed pp. 63–69"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $R$ be a smooth affine
integral $k$-variety of positive dimension, and let $X\to R$ be a smooth
projective family of geometrically integral curves of genus $g\ge2$, with
$X$ integral. Let $F\to X$ be the affine bundle of splittings of
$$0\to T_{X/R}\to T_{X/k}\to T_{R/k}|_X\to0.$$
There is a nonempty affine open $U\subseteq R$, a normal integral affine
$U$-scheme $Y$, and a proper birational surjective $U$-morphism
$\varphi:F_U\to Y$ with the following properties. Its non-quasi-finite
locus $E$ is closed and proper over $U$, and $E\to X_U$ is finite (with
$E$ given its reduced closed subscheme structure). Its image $B=\varphi(E)$
is closed, $\varphi^{-1}(B)=E$ as closed subsets, and
$$F_U\setminus E\ \cong\ Y\setminus B.$$
The exceptional set may be empty. No separability hypothesis or smoothness
of $Y$ is imposed.

## Facts & Assumptions

**Given:** AC, the base, family and splitting torsor of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A proper integral scheme with integral projective effective Cartier
boundary having ample normal bundle has a basepoint-free system of sections
of a positive boundary multiple: its canonical first section cuts out that
multiple, the system embeds the boundary, and its complement maps properly
and generically finitely to an affine image.
[[lem-ample-effective-boundary-gives-generically-finite-affine-contraction]]

[F2] Over an algebraically closed field, a torsor under $T_C^{\oplus n}$
for a smooth proper genus-at-least-two curve has at most one integral
proper closed curve. A proper closed scheme in an affine-space bundle
over a separated finite-type field scheme is finite over its base.
Injective integral extensions preserve dimension.
[[lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve]]
[[lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base]]
[[cor-dimension-preserved-by-integral-extensions]]

[F3] The canonical degree is $2g-2$; line bundles of degree at least
$2g+1$ embed smooth proper geometrically integral curves. Veronese and
Segre give the corresponding embeddings of projective spaces and products.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[lem-veronese-map-well-defined-closed-immersion]]
[[thm-segre-line-bundle-external-tensor]]

[F4] Linear homogeneous transition matrices glue projective bundles.
Projective space is proper; properness is local on the base, preserved
by composition and base change, and proper maps have closed image.
Generating sections of an invertible sheaf define a projective morphism.
[[def-projective-bundle-scheme]] [[thm-gluing-affine-schemes]]
[[thm-projective-space-proper-over-base]] [[lem-proper-local-on-base]]
[[lem-proper-stable-composition]] [[lem-proper-stable-base-change]]
[[thm-proper-morphism-closed-image]]
[[thm-line-bundle-sections-define-projective-map]]

[F5] Smooth schemes over a field are regular; regular local rings are
normal. Noether normalization makes a finite-type domain finite over a
polynomial subring. That polynomial ring has finite integral closure in
any finite extension of its fraction field, including inseparable ones.
Integral closure is unchanged across an integral intermediate ring and is
integrally closed, a property local on a domain.
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]]
[[cor-noether-normalisation-module-finiteness]]
[[thm-polynomial-algebras-over-fields-have-finite-integral-closures]]
[[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]]
[[thm-integral-closure-is-integrally-closed]]
[[thm-normality-is-local-for-domains]]

[F6] A map from a proper scheme to a separated scheme over the same
base is proper. A proper birational map to a normal integral Noetherian
target is an isomorphism over a neighbourhood of the image of any
quasi-finite point, whose entire fibre is then a singleton. The quasi-finite
locus of a finite-type map is open.
[[lem-proper-source-to-separated-target-proper]]
[[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]]
[[cor-quasi-finite-locus-open-finite-type-algebra]]

[F7] Global functions on an integral proper variety over an algebraically
closed field are constant. Proper quasi-finite maps are finite. For a
finite-type map, quasi-finiteness at a point means finite dimension of the
local fibre algebra over its target residue field. Coherent cohomology on
a proper field scheme is finite-dimensional.
[[thm-global-functions-proper-integral-variety]]
[[thm-proper-quasi-finite-is-finite]]
[[def-quasi-finite-at-a-prime-for-finite-type-algebras]]
[[cor-projective-cohomology-finite-dimensional-field]]

## Axiom use

AC is inherited from the boundary, normalization, properness and local
Zariski Main suppliers. Only finite systems of sections and finite affine
covers are chosen. Algebraic closures are used only to analyze the generic
exceptional set, and no perfectness of the generic function field is assumed.

## Proof

**Proof technique:** direct; spread a generic boundary construction,
normalize its total affine image, and keep the generic exceptional set
away from the projective boundary after shrinking.

1.1 Shrink $R$ to a nonempty affine open on which $T_{R/k}$ is free of rank $n=\dim R$. Put $L=T_{X/R}$. Then $F$ is a torsor under $L^{\oplus n}$. Locally write its transitions as $z_i=g_{ij}z_j+b_{ij}$, where $g_{ij}$ are the scalar transitions of $L$. Homogenize them as $[u:z_i]=[u:g_{ij}z_j+b_{ij}u]$. By [F4] they glue a $\mathbf P^n$-bundle $P\to X$, proper over $R$, with $F=P\setminus D$ and effective Cartier divisor $D=(u=0)$. Its charts are smooth over the smooth $k$-scheme $X$, so $P$ and $F$ are integral and normal by [F5]. Scalar transitions disappear projectively on $D$, giving $D=X\times\mathbf P^{n-1}$. In the local equation $t_i=u/z_{i\ell}$, the linear part of the transition is $t_j=g_{ij}t_i$; the translations contribute only terms of order at least two. Thus $\mathcal O_P(D)|_D=\Omega^1_{X/R}\boxtimes\mathcal O(1)$. [F4, F5, given, construct, algebra]

2.1 Write $K=k(R)$ and $C=X_K$. On the generic fibre the boundary is $C\times\mathbf P^{n-1}_K$, and its normal bundle is ample: a high power of $\Omega^1_{C/K}$ embeds $C$ by [F3], and Veronese followed by Segre embeds the external product with the same positive power of $\mathcal O(1)$. Apply [F1] to $(P_K,D_K)$. Its finitely many sections $s_0,\ldots,s_a$ of $\mathcal O_{P_K}(mD_K)$, with $s_0$ the canonical section, extend to $P$ after shrinking $R$. To see this directly, use a finite affine cover trivializing $\mathcal O_P(mD)$; a generic-fibre section on each chart lies in its coordinate ring localized at the nonzero base elements. Clear the finitely many denominators on all charts and shrink the base; agreement on overlaps follows from agreement in the common function field. The common zero locus of these sections is closed in $P$ and has empty generic fibre. Its proper image in $R$ is closed by [F4]; remove that image. Now the sections are basepoint-free and give $\Phi:P\to\mathbf P^a_R$, with $\Phi^{-1}(z_0\ne0)=F$ because the first section is still the canonical one. Thus $F\to\mathbf A^a_R$ is proper by [F4] and [F6]. [F1, F3, F4, F6, given, construct, step 1.1]

3.1 Let $V$ be the reduced affine image, with coordinate ring $A$ the image of $\Gamma(R,\mathcal O_R)[z_1,\ldots,z_a]$ in $M=k(F)$ through the section ratios. It is a finite-type integral $k$-algebra, and $F\to V$ is proper and surjective by [F4] and [F6]. On the generic fibre this is the generically finite map of [F1], so $M/\operatorname{Frac}A$ is finite. Let $A_0$ be a polynomial subring over which $A$ is finite by [F5]. Its integral closure in $M$ is finite over $A_0$; it is also the integral closure $B$ of $A$ in $M$ by [F5]. The same finite generators generate $B$ over $A$. Moreover $\operatorname{Frac}B=M$: for $w\in M$, clear the denominators of a monic equation over $\operatorname{Frac}A$ to make $cw$ integral over $A$ for some $0\ne c\in A$, so $w=(cw)/c\in\operatorname{Frac}B$. Every $b\in B$ is regular on normal $F$, since its integral equation over $A$ holds in each normal local ring of $F$. Hence it defines $\varphi:F\to Y=\operatorname{Spec}B$. The finite separated map $Y\to V$ and proper $F\to V$ make $\varphi$ proper by [F6]. It is birational by the function-field identity, and surjective since its closed image contains the generic point. [F1, F4, F5, F6, algebra, step 1.1, step 2.1]

4.1 Let $E\subseteq F$ be the reduced non-quasi-finite locus, closed by [F6]. We first show that its generic fibre has proper closure inside $P_K$ disjoint from $D_K$. Extend $K$ to an algebraic closure $\overline K$. The schemes $F_{\overline K}$ and $P_{\overline K}$ remain integral and smooth. The affine $Y_{\overline K}$ is integral: on rings, its embedding in $M$ remains injective after tensoring with $\overline K$, and $M\otimes_K\overline K$ is a domain because $F_K$ is geometrically integral. Normalize $Y_{\overline K}$ in the common fraction field. The same polynomial integral-closure argument as step 3.1 makes this normalization finite. Normal $F_{\overline K}$ factors through it, giving a proper birational morphism $h$ to a normal affine target. Passing to this finite target changes no positive-dimensional fibre at a closed point: a fibre of the original map is partitioned among finitely many fibres of $h$, and the local target-residue extensions are finite. By the local-algebra criterion in [F7], it changes no quasi-finite locus. Field extension also preserves and reflects this locus: a closed point of a finite-type fibre is isolated exactly when its local fibre algebra is finite-dimensional; scalar extension preserves such finite algebras, while a positive-dimensional component remains positive-dimensional after algebraic extension by Noether normalization and [F2]. This criterion determines the closed non-quasi-finite subsets by their closed points. [F2, F5, F6, F7, algebra, step 1.1, step 3.1]

5.1 Each positive-dimensional irreducible component of a closed fibre of $h$ is a proper closed integral subvariety of the affine bundle $F_{\overline K}\to C_{\overline K}$. By [F2] it maps finitely to that curve, so it is itself a curve and dominates the base. Any two such components agree as reduced subsets by [F2]. Denote that curve by $A'$ if one exists. It maps to one point of the affine target by [F7]. Every closed point on $A'$ is non-quasi-finite, and conversely every non-quasi-finite closed point lies on a positive-dimensional fibre component. Thus the non-quasi-finite set is empty or exactly $A'$: both sets are closed, and closed points are dense on finite-type schemes over $\overline K$ (take maximal ideals in nonempty affine opens). The curve $A'$ is proper, hence closed in the separated compactification $P_{\overline K}$, and disjoint from its boundary. It follows that the closure of $E_K$ in $P_K$ is disjoint from $D_K$. In detail, closure of a closed subset of the open $F_K$ commutes with field extension: locally its ideal is the kernel of restriction to that open, and flat tensoring by a field extension preserves this kernel; this can be checked using a finite principal-open cover. Its extended support is therefore the closure of the set just analyzed, and an intersection with $D_K$ would remain nonempty after the faithfully flat extension. [F2, F6, F7, algebra, step 4.1]

6.1 Take the reduced closure $\overline E$ of $E$ in $P$. It is proper over $R$. Its intersection with $D$ has empty generic fibre by step 5.1; formation of closure on the generic fibre is localization and therefore commutes with it. The image of this intersection in $R$ is closed by [F4]. Remove that proper closed image, and shrink to a nonempty affine open $U$. Then $\overline E_U$ is disjoint from $D_U$, so is contained in $F_U$. Since $E$ was closed there, $\overline E_U=E_U$ as reduced closed subschemes. Thus $E_U$ is proper over $U$. Its map to separated $X_U$ is proper by [F6]. For any $x\in X_U$, its fibre is both proper over $\kappa(x)$ and closed in affine space. By [F7] its global algebra is finite-dimensional. Every localization of a finite-dimensional algebra is finite-dimensional: for each denominator $a$, stabilization of $(a^r)$ gives $a^r=a^{r+1}b$, so its inverse in the localization equals $b$. Hence all local fibre algebras are finite-dimensional, and [F7] makes $E_U\to X_U$ quasi-finite and therefore finite. This retains nonreduced fibres. [F4, F6, F7, algebra, step 5.1]

7.1 Replace the base by $U$. Put $B=\varphi(E)$, closed because $\varphi$ is proper. If a point outside $E$ lay over $B$, [F6] would make its entire fibre a singleton and the morphism an isomorphism nearby. That contradicts the non-quasi-finite point of $E$ in the same fibre. Thus $\varphi^{-1}(B)=E$ as subsets. On the complement every point is quasi-finite, so the local isomorphisms of [F6] cover $Y\setminus B$ and glue to an inverse there. This proves the required isomorphism and all assertions, including the case $E=\varnothing$. All shrinking removed closed sets missing the generic point, so $U$ is nonempty. [F6, given, step 3.1, step 6.1] ∎
