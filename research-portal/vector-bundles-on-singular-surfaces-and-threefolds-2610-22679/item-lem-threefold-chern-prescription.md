---
title: Prescribing three Chern classes successively
status: published
research_item: lem-threefold-chern-prescription
dependency_level: 37
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 17, proof of Theorem B, surjectivity
      statement: The three motivic Chern classes of a rank-three bundle can be
        prescribed successively.
      hypotheses: A normal affine threefold of finite type over an algebraically
        closed field.
      reading_limits: Read the Theorem B surjectivity paragraph in the frozen article
        extraction, printed p. 17. The declared supplier interfaces, the affine
        comparison proof and the qcqs-domain proof were inspected for this
        application. No new PDF-image check, reconstruction of upstream motivic
        constructions, or independent acceptance is claimed.
---

PDF p. 17: Theorem B surjectivity construction

## Prerequisites

- [thm-line-bundle-first-chern-classification](item-thm-line-bundle-first-chern-classification)
- [lem-second-chern-surjective-low-dimension](item-lem-second-chern-surjective-low-dimension)
- [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)
- [lem-critical-rank-representatives](item-lem-critical-rank-representatives)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)
- [lem-author-9b6cb358ddc9-lower-vanishing](item-lem-author-9b6cb358ddc9-lower-vanishing)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-zero-projection-rank](item-lem-zero-projection-rank)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration and Chern-class constructions. Let $k$ be an algebraically closed field and $X$ a normal affine finite-type $k$-scheme of Krull dimension three. Given classes $a_i\in H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ for $i=1,2,3$, there is a rank-three vector bundle $E$ with $c_i(E)=a_i$ for all three indices.

More precisely, choose a line bundle $L$ with $c_1(L)=a_1$, set $\alpha_1=[L]-1$, choose $\alpha_2\in F^2_{\mathrm{mot}}K_0(X)$ with $c_2(\alpha_2)=a_2$, put $b_3=c_3(\alpha_1+\alpha_2)$, and choose $\alpha_3\in F^3_{\mathrm{mot}}K_0(X)$ with $c_3(\alpha_3)=a_3-b_3$. Then $\alpha_1+\alpha_2+\alpha_3=[E]-3$ for a rank-three bundle $E$, and its first three Chern classes are the prescribed classes. The sum lies in $F^1_{\mathrm{mot}}K_0(X)$.

Here a vector bundle is a finite locally free $\mathcal O_X$-module, its rank is its local free rank, and a line bundle is a rank-one vector bundle. Normal means that all local rings are integrally closed domains; affine finite type means $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$. Krull dimension is the supremum of lengths of strict chains of irreducible closed subsets. An algebraically closed field is one in which every nonconstant one-variable polynomial has a root. A perfect complex is a complex locally quasi-isomorphic to a bounded complex of vector bundles; $K_0(X)$ is the zeroth homotopy group of its nonconnective K-theory spectrum. A bundle gives the class of its degree-zero complex, $1=[\mathcal O_X]$, and an integer denotes that multiple of $1$. The subgroup $F^j_{\mathrm{mot}}K_0(X)$ is the image in $K_0(X)$ of the $j$th stage of the supplied motivic filtration. The group $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-$2i$ cohomology of the weight-$i$ motivic complex; $c_i$ is the actual motivic Chern operation, agreeing on bundle classes with the bundle Chern class. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes used by the suppliers.

## Facts & Assumptions

**Given:** The field, scheme, choice and size hypotheses above and the three target classes.

**Goal:** Carry out the stated successive choices and obtain a rank-three bundle with the specified classes.

[F0] Fields, schemes over the base and affine schemes have the meanings of [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) and [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). In particular a $k$-scheme includes its structure morphism to $\operatorname{Spec}k$ and its structure sheaf. Integrally closed domains in the inline normality definition have the meaning of [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain). A finitely generated $k$-algebra is a commutative unital ring with a specified unit-preserving map from $k$ and a finite tuple whose polynomials with coefficients from $k$ give all its elements. An irreducible closed subset is nonempty and is not the union of two proper relatively closed subsets; a strict chain of $n+1$ members has length $n$. In particular the empty space has no dimension-three chain. A finite locally free sheaf is locally isomorphic to $\mathcal O_U^r$ for a finite rank $r$; a finite direct sum is the sheaf of tuples of sections, with componentwise restrictions, whose local frames concatenate, so ranks add. Since $X$ is finite type over a field, it is quasi-compact and quasi-separated: every open cover has a finite subcover and intersections of affine opens are quasi-compact. Thus all the qcqs suppliers below apply. The motivic complex and its cohomology are the specified Elmanto–Morrow complex and its cochain cohomology, with $H^{a,i}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(i)_{\mathrm{mot}}(X))$. [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) [def-motivic-cohomology](item-def-motivic-cohomology)

[F1] The first Chern class gives an isomorphism from the Picard group of line bundles to $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$. [thm-line-bundle-first-chern-classification](item-thm-line-bundle-first-chern-classification)

[F2] Under the given normal finite-type hypotheses, $c_2$ is surjective from $F^2_{\mathrm{mot}}K_0(X)$ to $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. [lem-second-chern-surjective-low-dimension](item-lem-second-chern-surjective-low-dimension)

[F3] For the given normal affine finite-type threefold, $c_3$ is an isomorphism from $F^3_{\mathrm{mot}}K_0(X)$ to $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)

[F4] Every class in $F^2$ has pointwise rank zero and first Chern class zero. Every class in $F^3$ has rank zero and first and second Chern classes zero. [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant) [lem-author-9b6cb358ddc9-lower-vanishing](item-lem-author-9b6cb358ddc9-lower-vanishing)

[F5] On this nonempty affine finite-type threefold, each pointwise rank-zero perfect $K_0$ class is $[V]-3$ for a rank-three bundle $V$. The affine bridge identifies bundle and perfect $K_0$ classes compatibly. [lem-critical-rank-representatives](item-lem-critical-rank-representatives) [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F6] The bundle total Chern series is multiplicative under direct sums, a line has no Chern classes above degree one, and the virtual series of a difference is the quotient of the bundle series. A trivial bundle has total class $1$. [prop-chern-whitney-identities](item-prop-chern-whitney-identities)

[F7] The image filtration is decreasing, and the kernel of the zeroth stage projection is $F^1$. On this normal affine finite-type scheme the zeroth projection is pointwise rank. [def-motivic-filtration](item-def-motivic-filtration) [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) [lem-zero-projection-rank](item-lem-zero-projection-rank)

[F8] Assume the Axiom of Choice. Fix compatible nested Grothendieck universes with $\omega$ in the scheme-data universe, with the sites, perfect categories and derived targets in the larger universes required by the cited constructions. Universe existence and these size bounds are separate assumptions from Choice. Use these compatible bounds for each specified supplier site. Choice and these bounds are inherited when applying the qcqs, filtration, representative and actual-Chern suppliers in steps 1.1–4.1; choosing these three individual classes requires no additional choice principle. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F9] On an affine qcqs scheme over a field, under [F8], every positive-index actual perfect-$K_0$ Chern value agrees with the coefficient of the virtual bundle Chern series under the object-class bridge in [F5]. In particular, for bundles $P,Q$, $c_i([P]-[Q])$ is the coefficient of $t^i$ in $c_t(P)c_t(Q)^{-1}$. The global affine clause applies without the additional perfect-field or smooth-point hypotheses of that supplier's separate supported comparison. [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)

## Proof

**Proof technique:** Choose the classes in successive filtration pieces, represent the higher pieces by rank-three bundles, and calculate using Whitney multiplication.

1.1 By [F0], $X$ is in the qcqs domain of the supplied constructions, with compatible bounds as in [F8]. By [F1], choose $L$ with $c_1(L)=a_1$ and put $\alpha_1=[L]-1$. Its pointwise rank is zero, so [F7] places it in $F^1$. By [F2], choose $\alpha_2\in F^2$ with $c_2(\alpha_2)=a_2$. Put $b_3=c_3(\alpha_1+\alpha_2)$. By [F3], choose $\alpha_3\in F^3$ with $c_3(\alpha_3)=a_3-b_3$. These choices use the hypotheses and bounds in [F8]. [F0, F1, F2, F3, F7, F8, given, choose]

2.1 By [F4], $\alpha_2$ and $\alpha_3$ have pointwise rank zero. The dimension assumption makes $X$ nonempty, so [F5] gives rank-three bundles $E_2,E_3$ with $\alpha_i=[E_i]-3$ for $i=2,3$. By [F9], the actual $c_j(\alpha_i)$ is the coefficient of $c_t(E_i)c_t(\mathcal O_X^3)^{-1}$. Since the trivial bundle has total Chern class $1$ by [F6], this coefficient is $c_j(E_i)$. In particular $c_1(E_2)=0$, $c_2(E_2)=a_2$, $c_1(E_3)=c_2(E_3)=0$, and $c_3(E_3)=a_3-b_3$. [F4, F5, F6, F8, F9, step 1.1]

3.1 Let $V=E_3\oplus E_2\oplus L$, a rank-seven bundle. In $K_0(X)$, $\alpha_1+\alpha_2+\alpha_3=[V]-7$. By [F6], [F9] and step 2.1, the total class of $E_3$ through degree three is $1+c_3(E_3)t^3$, and that of $E_2\oplus L$ begins $1+a_1t+a_2t^2+b_3t^3$. The latter equality follows because $\alpha_1+\alpha_2=[E_2\oplus L]-4$ and [F9] identifies its actual third Chern value $b_3$ with the degree-three coefficient of $c_t(E_2\oplus L)$, since [F6] gives $c_t(\mathcal O_X^4)=1$. Multiplying these series through degree three gives $c_1(V)=a_1$, $c_2(V)=a_2$, and $c_3(V)=b_3+c_3(E_3)=a_3$. [F0, F5, F6, F9, step 1.1, step 2.1, algebra]

4.1 The class $[V]-7$ has pointwise rank zero. Applying [F5] gives a rank-three bundle $E$ with $[E]-3=[V]-7=\alpha_1+\alpha_2+\alpha_3$. Apply the affine bridge [F5], the representative-independent virtual series [F6] and the actual-operation comparison [F9] to this equality. They imply $c_j(E)=c_j(V)=a_j$ for $j=1,2,3$, since trivial bundles have total class $1$. Finally, $\alpha_1\in F^1$ by step 1.1 and $F^3\subseteq F^2\subseteq F^1$ by [F7]; hence their sum lies in $F^1$. This proves the construction. [F5, F6, F7, F8, F9, step 1.1, step 3.1] ∎

## Source notation
The article first identifies the sum with $[E_3\oplus E_2\oplus L]-7$. Its final two occurrences use $E_1\oplus E_2\oplus L$, although the preceding rank-three bundle is called $E_3$. The calculation above retains the defined $E_3$.
