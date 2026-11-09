---
title: Chern classes of the alternating exterior class
status: draft
research_item: lem-exterior-square-chern-calculation
dependency_level: 28
---

PDF p. 17: Splitting-principle calculations in the proof of Corollary 6.10

## Prerequisites

- [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class)
- [def-filtration-projections](item-def-filtration-projections)
- [thm-motivic-splitting-principle](item-thm-motivic-splitting-principle)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-exterior-square-root-formula](item-lem-exterior-square-root-formula)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-zero-projection-rank](item-lem-zero-projection-rank)
- [lem-first-projection-chern](item-lem-first-projection-chern)
- [prop-second-projection-chern](item-prop-second-projection-chern)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds required by the cited motivic filtration and Chern constructions. Let $k$ be an algebraically closed field, let $X$ be a normal affine threefold over $k$, and let $E$ be a rank-three vector bundle on $X$. Put
$$\beta(E)=[\mathcal O_X]-[E]+[\Lambda^2E]-[\det E]\in K_0(X).$$
Then $\beta(E)$ has rank zero and its actual motivic Chern classes satisfy
$$c_1(\beta(E))=0,\qquad c_2(\beta(E))=0,\qquad c_3(\beta(E))=-2c_3(E).$$
Consequently $\beta(E)\in F^3_{\mathrm{mot}}K_0(X)$. On the flag space supplied by the splitting principle, if $\ell_1,\ell_2,\ell_3$ are the first Chern classes of the successive line quotients of the pulled-back $E$, the corresponding line roots of $\Lambda^2E$ are $\ell_1+\ell_2$, $\ell_1+\ell_3$ and $\ell_2+\ell_3$.

Here a vector bundle is a finite locally free sheaf, its rank is the local rank, $\Lambda^2E$ is its second exterior power, and $\det E=\Lambda^3E$. The group $K_0(X)$ is the zeroth homotopy group of the K-theory spectrum of perfect complexes; a bundle is regarded as a complex in degree zero. The integral motivic Chern class $c_i$ lies in $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$. The group $F^j_{\mathrm{mot}}K_0(X)$ is the image of the $j$th motivic filtration stage in $K_0(X)$. A normal scheme has integrally closed local domains, and a threefold here has dimension three. A line root means the first Chern class of a line-bundle quotient in the indicated locally split flag filtration; it does not require the pulled-back bundle to split as a direct sum.

## Facts & Assumptions

**Given:** The field, scheme, bundle, Choice and site and universe bounds in the statement.

**Goal:** Compute the rank and first three actual Chern classes of $\beta(E)$, identify the exterior-square roots, and prove membership in the third image filtration.

[F1] [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class) defines $\beta(E)$ and its four bundle terms. [thm-motivic-splitting-principle](item-thm-motivic-splitting-principle) supplies, under Choice, a flag map $q:Y\to X$ with locally split line quotients $L_i$ and injective pullback on integral motivic cohomology in every bidegree.

[F2] [lem-exterior-square-root-formula](item-lem-exterior-square-root-formula) gives the locally split filtration of $\Lambda^2q^*E$ with quotients $L_i\otimes L_j$ for $i<j$, and identifies $\det q^*E$ with $L_1\otimes L_2\otimes L_3$. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) gives the filtered product formula and $c_1(L\otimes M)=c_1(L)+c_1(M)$.

[F3] On noetherian finite-dimensional field-schemes, [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan) gives a natural multiplicative total Chern series for actual perfect $K_0$ classes. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) identifies its restriction to bundle classes with the supplied universal bundle Chern classes. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives the formal inverse through degree three.

[F4] For the stated normal finite-type scheme, [lem-zero-projection-rank](item-lem-zero-projection-rank) identifies $p_0$ with rank; [lem-first-projection-chern](item-lem-first-projection-chern) identifies $p_1$ on $F^1$ with $c_1$; and [prop-second-projection-chern](item-prop-second-projection-chern) identifies $p_2$ on $F^2$ with $-c_2$ and its kernel with $F^3$. The low-stage projections and stage-to-image isomorphisms are those of [def-filtration-projections](item-def-filtration-projections). [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) identifies the kernel of a transported stage projection with the next image filtration. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) states the Choice assumption.

## Proof

1.1 A rank-three bundle has exterior-square rank three and determinant rank one, as can be checked on a local basis. Thus the alternating rank of the four terms of $\beta(E)$ is $1-3+3-1=0$ at every point. The scheme is affine of finite type over a field and hence noetherian, finite-dimensional and quasi-compact quasi-separated; normality gives the seminormality required in [F4]. [given, F1, F4]

1.2 Apply [F1] to $E$. Write $x_i=c_1(L_i)$ and set $s=x_1+x_2+x_3$, $e_2=x_1x_2+x_1x_3+x_2x_3$, and $e_3=x_1x_2x_3$ in the even-degree motivic cohomology ring of $Y$. By [F2], the exterior-square line roots are $x_1+x_2$, $x_1+x_3$, and $x_2+x_3$, while the determinant line has first class $s$. Moreover $c_t(q^*E)=1+st+e_2t^2+e_3t^3.$ The equality is the Whitney formula for the flag filtration, not an assertion that the flag splits globally. [F1, F2, given]

2.1 The actual perfect Chern series is natural and multiplicative under addition by [F3]. Its values on the four bundle terms are their bundle Chern series, so [F2] and [F3] give, through degree three, $q^*c_t(\beta(E))=\frac{\prod_{i<j}(1+(x_i+x_j)t)}{(1+st)(1+st+e_2t^2+e_3t^3)}.$ The numerator is $1+2st+(s^2+e_2)t^2+(se_2-e_3)t^3$, while the denominator is $1+2st+(s^2+e_2)t^2+(se_2+e_3)t^3$ modulo $t^4$. Their constant coefficients are one. Formal inversion therefore yields $q^*c_t(\beta(E))=1-2e_3t^3\pmod{t^4}.$ These polynomial identities hold integrally, including in characteristic two; no division by two is used. [F2, F3, step 1.2, algebra]

3.1 By step 1.2, $e_3=q^*c_3(E)$. Comparing coefficients in step 2.1 gives zero pullbacks of $c_1(\beta)$ and $c_2(\beta)$ and of $c_3(\beta)+2c_3(E)$. The injectivity in [F1], separately in bidegrees $(2,1)$, $(4,2)$ and $(6,3)$, proves the three stated identities on $X$. [F1, step 1.2, step 2.1]

4.1 By step 1.1 and [F4], $p_0(\beta)=0$. Stage exactness and the low-stage identification in [F4] put $\beta$ in $F^1$. By step 3.1 and the first-projection identity, $p_1(\beta)=0$; the same exactness puts it in $F^2$. Finally $p_2(\beta)=-c_2(\beta)=0$, so the kernel statement in [F4] puts $\beta$ in $F^3$. This is membership in the image filtration and does not assert that the third stage itself maps injectively to $K_0$. Together with steps 1.1 through 3.1, this proves all assertions. [F4, step 1.1, step 3.1] ∎
