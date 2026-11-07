---
dependency_level: 2
id: lem-negative-tangent-torsor-affine-normal-contraction
kind: lemma
title: A negative tangent torsor has a normal affine contraction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve
  - lem-ample-effective-boundary-gives-generically-finite-affine-contraction
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
  - thm-regular-local-rings-are-normal
  - thm-ag-standard-smooth-geometric-regularity
  - thm-polynomial-algebras-over-fields-have-finite-integral-closures
  - cor-noether-normalisation-module-finiteness
  - lem-integral-closure-unchanged-across-an-integral-intermediate-domain
  - thm-integral-closure-is-integrally-closed
  - thm-normality-is-local-for-domains
  - lem-proper-source-to-separated-target-proper
  - lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
  - cor-quasi-finite-locus-open-finite-type-algebra
  - thm-global-functions-proper-integral-variety
  - cor-dimension-preserved-by-integral-extensions
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-proper-ideal-contained-in-maximal-ideal
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - cor-nilradical-as-intersection-of-primes
  - thm-nilradical-of-a-noetherian-ring-is-nilpotent
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §§1–2, printed pp. 133–139; normalization and exceptional-locus reconstruction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(A–B), printed pp. 63–67"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $C/k$ be a smooth proper
integral curve of genus at least two, and let $G\to C$ be an affine
torsor under $T_C^{\oplus n}$ with $n\ge1$, in the translation convention
of [[lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve]].
There is a normal integral affine $k$-variety $Y$ and a proper birational
morphism $\varphi:G\to Y$. Either it is an isomorphism, or $G$ contains
its unique integral proper closed curve $A$, $\varphi(A)=\{a\}$ is one
closed point, and
$$G\setminus A\ \cong\ Y\setminus\{a\}.$$
The exceptional curve is asserted only as a reduced closed subset; no
separability or characteristic-zero hypothesis is imposed.

## Facts & Assumptions

**Given:** AC and the field, curve, rank and torsor of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A negative tangent torsor contains at most one integral proper
closed curve, as a reduced subset. Any proper closed scheme in an
affine-space bundle is finite over its base. An injective integral ring
extension preserves dimension.
[[lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve]]
[[lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base]]
[[cor-dimension-preserved-by-integral-extensions]]

[F2] An integral proper scheme with integral projective effective Cartier
boundary whose normal line bundle is ample admits a proper generically
finite morphism from the boundary complement onto an affine integral image.
[[lem-ample-effective-boundary-gives-generically-finite-affine-contraction]]

[F3] The canonical line bundle on $C$ has degree $2g-2$; a line bundle of
degree at least $2g+1$ embeds the curve. The Veronese morphism embeds
projective space by each positive power of its twist, and the Segre
embedding pulls its twist back to the external tensor product.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[lem-veronese-map-well-defined-closed-immersion]]
[[thm-segre-line-bundle-external-tensor]]

[F4] Projective-bundle charts glue via their linear transition matrices.
Projective-space projections are proper; properness is local on the target
and preserved by composition. Smooth finite-type schemes over a field have
regular local rings, and regular local rings are integrally closed domains.
[[def-projective-bundle-scheme]] [[thm-gluing-affine-schemes]]
[[thm-projective-space-proper-over-base]] [[lem-proper-local-on-base]]
[[lem-proper-stable-composition]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]]

[F5] Noether normalization makes a finite-type domain finite over a
polynomial algebra. Polynomial algebras have finite integral closure in
every finite extension of their fraction fields, including inseparable
ones. Integral closure is unchanged across an integral intermediate ring
and is integrally closed; its normality can be tested on its local rings.
[[cor-noether-normalisation-module-finiteness]]
[[thm-polynomial-algebras-over-fields-have-finite-integral-closures]]
[[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]]
[[thm-integral-closure-is-integrally-closed]]
[[thm-normality-is-local-for-domains]]

[F6] A map from a proper scheme to a separated scheme over the same
base is proper. A proper birational map to a normal integral Noetherian
scheme is an isomorphism over a neighbourhood of the image of any
quasi-finite point; in particular that fibre is a singleton. The quasi-finite
locus of a finite-type map is open.
[[lem-proper-source-to-separated-target-proper]]
[[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]]
[[cor-quasi-finite-locus-open-finite-type-algebra]]

[F7] Global functions on an integral proper scheme over $k$ are
constant. Every nonempty open of a finite-type $k$-scheme has a $k$-point:
take a maximal ideal in a nonempty affine open; its residue field is finite
over algebraically closed $k$.
[[thm-global-functions-proper-integral-variety]]
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F8] Quasi-finiteness at a point means finite dimension of its local fibre
algebra over the target residue field. The nilradical is the intersection of
prime ideals and is nilpotent in a Noetherian ring; thus a Noetherian local
ring of dimension zero has nilpotent maximal ideal.
[[def-quasi-finite-at-a-prime-for-finite-type-algebras]]
[[cor-nilradical-as-intersection-of-primes]]
[[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]

## Axiom use

AC is inherited through [F1]–[F8], especially proper coherent cohomology,
normalization and the local Zariski Main theorem. Only finite affine chart,
section and normalization-generator choices are made in the construction.

## Proof

**Proof technique:** direct; homogenize the affine transitions, lift an
embedding of the boundary, normalize the affine image, and determine the
exceptional locus using finite proper subschemes of an affine bundle.

1.1 Put $L=T_C$. Choose local frames $e_i$ of $L$ and affine coordinates $z_i=(z_{i1},\ldots,z_{in})$ of the torsor, with transitions $e_j=g_{ij}e_i$ and $z_i=g_{ij}z_j+b_{ij}$. The affine cocycle identities give the same identities for the invertible homogeneous matrices $[u:z_i]=[u:g_{ij}z_j+b_{ij}u]$. By [F4] these glue a $\mathbb P^n$-bundle $\overline G\to C$, with $G$ the open $u\ne0$ and boundary $D$ the effective Cartier divisor $u=0$. Properness follows locally from the projective-space projections and globally from composition with $C\to\operatorname{Spec}k$, using [F4]. The charts are products of a smooth curve with affine-space charts of projective space: a standard smooth presentation for the curve remains standard smooth after adjoining those polynomial coordinates. Hence $\overline G$ is smooth, integral and normal, of dimension $n+1$, and so is its open $G$. [A1, F4, given, construct, algebra]

2.1 On $D$, the scalar $g_{ij}$ disappears projectively, so $D=C\times\mathbb P^{n-1}$. On a chart $z_{i\ell}\ne0$ its local equation is $t_i=u/z_{i\ell}$. Modulo squares of the boundary ideal, $t_j=g_{ij}t_i$; changing $\ell$ introduces the coordinate transition of $\mathcal O(-1)$. Thus the conormal is $L\boxtimes\mathcal O(-1)$ and the normal bundle is $N=\Omega^1_{C/k}\boxtimes\mathcal O(1)$. The translation term contributes only to second order in $t_i$. By [F3], a sufficiently large power of $\Omega^1_{C/k}$ embeds $C$, since $2g-2>0$. The same power of $\mathcal O(1)$ embeds $\mathbb P^{n-1}$ by Veronese. Their external product embeds $D$ by Segre, so $D$ is projective and $N$ is ample. For $n=1$ this says $D=C\times\mathbb P^0=C$ with normal bundle $\Omega^1_{C/k}$. [F3, given, algebra, step 1.1]

3.1 Apply [F2] to $(\overline G,D)$. It gives a proper generically finite morphism $\psi:G\to V$ onto an affine integral image with coordinate ring $R$, finitely generated over $k$, and a finite field extension $\operatorname{Frac}R\subseteq M:=k(G)$. By [F5], $R$ is finite over a polynomial subring $R_0=k[t_1,\ldots,t_d]$. The integral closure $B_0$ of $R_0$ in $M$ is finite over $R_0$. Since $R$ is integral over $R_0$, the integral closure $B$ of $R$ in $M$ equals $B_0$ by [F5]. Its finite $R_0$-generators also generate it over $R$. Thus $B$ is finite over $R$, without assuming the field extension separable. [F2, F5, step 1.1, step 2.1]

4.1 The fraction field of $B$ is $M$: for $z\in M$, clear the denominators in a monic minimal polynomial over $\operatorname{Frac}R$ to make $az$ integral over $R$ for some $0\ne a\in R$. Then $az\in B$ and $z=(az)/a\in\operatorname{Frac}B$. Put $Y=\operatorname{Spec}B$, normal by [F5]. Every $b\in B$ is regular on $G$: its monic integral equation over $R$ holds in each normal local ring of $G$, so integral closedness puts it in every such ring, and the local regular representatives glue as the same rational function. Hence $B\to\Gamma(G,\mathcal O_G)$ gives $\varphi:G\to Y$ factoring $\psi$. The finite map $Y\to V$ is separated, and $G\to V$ is proper, so [F6] makes $\varphi$ proper. The equality of function fields makes it birational. Its proper closed image contains the generic point and is therefore all of $Y$. [F4, F5, F6, algebra, step 3.1]

5.1 Let $Z$ be a positive-dimensional reduced irreducible component of a closed fibre of $\varphi$. It is proper and a closed integral subvariety of the affine bundle $G\to C$. By [F1] its projection to $C$ is finite. It cannot have one-point image, since then its finite coordinate algebra would make it zero-dimensional. Thus it dominates $C$, and the dimension assertion in [F1] makes it a proper integral curve. Any two such curves have the same reduced closed subset by [F1]; call it $A$ when one exists. Its image under $\varphi$ is a point by [F7], since $Y$ is affine. Every closed point on this curve has positive-dimensional local fibre. [F1, F7, step 4.1]

6.1 By [F6], the non-quasi-finite locus $E$ is closed in $G$. A closed point of $G$ and its image have residue field $k$ by [F7]. A closed point outside $E$ forces its entire fibre to be a singleton, and $\varphi$ is an isomorphism over an open neighbourhood of its image. Conversely a non-quasi-finite closed point has a positive-dimensional local fibre: over its closed image, the local fibre ring has residue field $k$; if it had dimension zero, its Noetherian maximal ideal would be nilpotent by [F8]. The finite filtration by its powers has finite-dimensional successive quotients over $k$, so its local algebra would be finite-dimensional, which is the quasi-finite condition of [F8]. Thus every non-quasi-finite closed point lies on a curve of step 5.1. By uniqueness that curve is $A$. If $E$ is nonempty it has a closed point by [F7]; then every closed point of $A$ lies in $E$ by step 5.1. Since $E$ is closed and closed points are dense in $A$ by [F7], $A\subseteq E$. All closed points of $E$ lie on $A$. Density of closed points from [F7] implies $E=A$ as reduced closed subsets. If $E$ is empty, [F6] makes $\varphi$ an isomorphism everywhere. [F1, F6, F7, F8, step 5.1]

7.1 Suppose $A$ exists and write $\varphi(A)=\{a\}$. No point outside $A$ can lie over $a$: by [F6] such a point, being quasi-finite, would force the whole fibre to be a singleton, contradicting the curve $A$ in that fibre. Over the complement of $a$ all points are quasi-finite; the neighbourhood isomorphisms of [F6] glue, as inverses to the same morphism, to $G\setminus A\cong Y\setminus\{a\}$. This proves the Statement, retaining any inseparability of $A\to C$ and without invoking a connected-fibre theorem. [F6, given, step 4.1, step 5.1, step 6.1] ∎
