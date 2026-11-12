---
title: Chern classes of the alternating exterior class
status: published
research_item: lem-exterior-square-chern-calculation
dependency_level: 31
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; p. 17, proof of Corollary 6.10,
        final paragraph
      reading_limits: For this proposal read the frozen article extraction at p. 3,
        Notation and conventions, and p. 17, the complete Corollary 6.10 proof;
        also inspected the supplied p. 17 PDF page image. The coefficient
        calculation and filtration argument below are locally authored from the
        declared supplier interfaces. No fresh reading of the deeper motivic or
        universal-Chern literature, reconstruction of those source proofs, or
        independent acceptance is claimed.
      statement: The proof defines beta=[O_X]-[E]+[Lambda^2 E]-[det E], states the
        pairwise-sum roots of Lambda^2 E, computes c_1(beta)=c_2(beta)=0 and
        c_3(beta)=-2c_3(E), and places beta in the third motivic image piece. In
        that application E has c_3(E)=0. Page 3 assumes affine schemes to be of
        finite type over the base field.
      hypotheses: "The cited application has X an affine normal threefold over the
        standing algebraically closed field k and E a rank-three bundle chosen
        with c_3(E)=0. Finite type is part of the article conventions. The
        present statement does not assume c_3(E)=0 or finite type: its
        coefficient computation and broader scheme scope are locally proved
        using the declared qcqs Cartan, flag, Whitney and low-stage projection
        suppliers under Choice and their compatible site and universe bounds."
---

PDF p. 17: Splitting-principle calculations in the proof of Corollary 6.10

## Prerequisites

- [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class)
- [def-filtration-projections](item-def-filtration-projections)
- [thm-motivic-splitting-principle](item-thm-motivic-splitting-principle)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-exterior-square-root-formula](item-lem-exterior-square-root-formula)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-zero-projection-rank](item-lem-zero-projection-rank)
- [lem-first-projection-chern](item-lem-first-projection-chern)
- [prop-second-projection-chern](item-prop-second-projection-chern)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)



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

[F1] [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class) defines $\beta(E)$ and its four bundle terms. [thm-motivic-splitting-principle](item-thm-motivic-splitting-principle) supplies, under Choice, a flag map $q:Y\to X$ with $Y$ qcqs, locally split line quotients $L_i$, and injective pullback on integral motivic cohomology in every bidegree.

[F2] [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) supplies exterior powers, their ranks and the canonical pullback isomorphisms $q^*(\Lambda^iE)\cong\Lambda^i(q^*E)$, including determinant. [lem-exterior-square-root-formula](item-lem-exterior-square-root-formula) gives the locally split filtration of $\Lambda^2q^*E$ with quotients $L_i\otimes L_j$ for $i<j$, and identifies $\det q^*E$ with $L_1\otimes L_2\otimes L_3$. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) gives the filtered product formula and $c_1(L\otimes M)=c_1(L)+c_1(M)$.

[F3] On every qcqs scheme over a field, [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan) gives a natural multiplicative total Chern series for actual perfect $K_0$ classes. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) identifies its restriction to bundle classes with the supplied universal bundle Chern classes. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives the formal inverse through degree three.

[F4] For the stated normal qcqs scheme over the algebraically closed field, [lem-zero-projection-rank](item-lem-zero-projection-rank) identifies $p_0$ with rank; [lem-first-projection-chern](item-lem-first-projection-chern) identifies $p_1$ on $F^1$ with $c_1$; and [prop-second-projection-chern](item-prop-second-projection-chern) identifies $p_2$ on $F^2$ with $-c_2$ and its kernel with $F^3$. The low-stage projections and stage-to-image isomorphisms are those of [def-filtration-projections](item-def-filtration-projections). [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) identifies the kernel of a transported stage projection with the next image filtration.


[F5] Under Choice, an affine scheme is quasi-compact by [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and quasi-separated by [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated). Thus $X$ is in the qcqs scope of [F1], [F3] and [F4], without any finite-type or Noetherian premise.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site and universe bounds in the Statement. Choice means that every family of nonempty sets has a choice function. These hypotheses are inherited by the perfect K-class, flag, Chern, filtration and affine quasi-compactness suppliers when applying [F1]–[F5]. The finite rank and coefficient calculations add no choice principle; the size assumptions are separate from Choice.

[F6] Inline conventions are as follows. Affine means isomorphic to $\operatorname{Spec}A$ for a commutative unital ring $A$, and $X/k$ includes its structural morphism to $\operatorname{Spec}k$. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. In the normality convention, an integrally closed domain contains every element of its fraction field satisfying a monic polynomial with coefficients in the domain. Dimension is the supremum of lengths of strict chains of irreducible closed subsets. Quasi-compact means every open cover has a finite subcover; quasi-separated means the intersection of two affine open subsets is quasi-compact. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves. The bundle, pullback, K-class and motivic group constructions are those in [F1]–[F4]; no additional cohomology theory is introduced. Products are motivic cup products. On the diagonal coefficient ring $R_Y=\bigoplus_{i\geq0}H^{2i,i}_{\mathrm{mot}}(Y,\mathbb Z)$ they are commutative because all first degrees are even. The symbol $t$ is an indeterminate, $c_t$ denotes the total Chern series, and formal multiplication uses finite convolution of coefficients as in [F3]. Equality modulo $t^4$ means equality of coefficients in degrees zero through three. No finite-type convention is imposed on the Statement.

## Proof

1.1 By [F2], a rank-three bundle has exterior-square rank three and determinant rank one, as can also be checked on a local basis. Thus the alternating rank of the four terms of $\beta(E)$ is $1-3+3-1=0$ at every point. By [F5], $X$ is qcqs. Its normality and algebraically closed base are exactly the additional hypotheses of [F4]. Neither finite type nor Noetherianity nor a seminormality comparison is needed by these current suppliers. [given, F1, F2, F4, F5, A1]

1.2 Apply [F1] to $E$. Write $x_i=c_1(L_i)$ and set $s=x_1+x_2+x_3$, $e_2=x_1x_2+x_1x_3+x_2x_3$, and $e_3=x_1x_2x_3$ in the even-degree motivic cohomology ring of $Y$. By [F2], the exterior-square line roots are $x_1+x_2$, $x_1+x_3$, and $x_2+x_3$, while the determinant line has first class $s$. Moreover $c_t(q^*E)=1+st+e_2t^2+e_3t^3.$ The equality is the Whitney formula for the flag filtration, not an assertion that the flag splits globally. [F1, F2, given]

2.1 Apply the natural total-series homomorphism of [F3] to the four classes on $X$, and then pull back its coefficients along $q$. Its values on the four bundle terms are their bundle Chern series, and their pullbacks agree with the exterior powers of $q^*E$ by [F2], so [F2] and [F3] give, through degree three, $q^*c_t(\beta(E))=\frac{\prod_{i<j}(1+(x_i+x_j)t)}{(1+st)(1+st+e_2t^2+e_3t^3)}.$ The numerator is $1+2st+(s^2+e_2)t^2+(se_2-e_3)t^3$, while the denominator is $1+2st+(s^2+e_2)t^2+(se_2+e_3)t^3$ modulo $t^4$. Their constant coefficients are one. Formal inversion therefore yields $q^*c_t(\beta(E))=1-2e_3t^3\pmod{t^4}.$ These polynomial identities hold integrally, including in characteristic two; no division by two is used. [F2, F3, step 1.2, algebra]

3.1 By step 1.2, $e_3=q^*c_3(E)$. Comparing coefficients in step 2.1 gives zero pullbacks of $c_1(\beta)$ and $c_2(\beta)$ and of $c_3(\beta)+2c_3(E)$. The injectivity in [F1], separately in bidegrees $(2,1)$, $(4,2)$ and $(6,3)$, proves the three stated identities on $X$. [F1, step 1.2, step 2.1]

4.1 By step 1.1 and [F4], $p_0(\beta)=0$. Stage exactness and the low-stage identification in [F4] put $\beta$ in $F^1$. By step 3.1 and the first-projection identity, $p_1(\beta)=0$; the same exactness puts it in $F^2$. Finally $p_2(\beta)=-c_2(\beta)=0$, so the kernel statement in [F4] puts $\beta$ in $F^3$. This is membership in the image filtration and does not assert that the third stage itself maps injectively to $K_0$. Together with steps 1.1 through 3.1, this proves all assertions. [F4, step 1.1, step 3.1] ∎


## External input

Reference 0 records the article's four-term class, pairwise-sum roots and Chern identities in its finite-type application with $c_3(E)=0$. The proof here is a local composition of [F1]–[F5]; it does not import the article proof as justification for the broader Statement. The motivic, universal-Chern and exactness constructions are used through their declared suppliers, without reconstructing their deeper literature inputs here.

## Reading limits

Read the complete assigned body and its current declared supplier bodies for the interfaces used here. Also read the existing qcqs Cartan and exterior-power constructions and the two affine qcqs suppliers before using them. Article reading is limited to the passages and page image recorded in reference 0. The Statement is unchanged. Read the complete direct consumer, the rank-three zero-Chern splitting corollary: its [F2] and step 1.1 use precisely the retained third-filtration membership and the retained identity $c_3(\beta(E))=-2c_3(E)$ under stronger finite-type hypotheses. Its application remains valid and needs no source edit for this repair. Independent supplier acceptance, changed-item rejudgment, rendering and serving publication remain outside this proposal.
