---
title: Reduced bundle class identities
status: published
research_item: lem-reduced-bundle-class-identities
dependency_level: 27
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: v1, PDF p. 3 conventions; p. 8, Section 3; pp. 11–12, proof of
        Proposition 5.5
      reading_limits: "Read the frozen extracted article text at PDF pp. 3, 8, 11 and
        12: conventions and filtration definition, Section 3 and Proposition
        3.2, Lemma 5.3, and the proof of Proposition 5.5. No fresh visual PDF
        inspection is claimed. Read the current named supplier interfaces and
        their local arguments for this application, including the rank-zero and
        determinant-fiber constructions, exact-sequence determinant, perfect
        object-class relation, cone model, first-Chern comparison and virtual
        Whitney formulas. The deep imported motivic, categorical and determinant
        results are used through their existing local supplier contracts; their
        underlying literature and proofs were not freshly audited or
        reconstructed. No original-author defect, independent rejudgment or
        acceptance is asserted."
      statement: The article uses the motivic image filtration and total Chern series,
        reduces equal-rank equal-determinant bundle differences to reduced
        classes, expands the rank-two product, and gives the
        direct-sum-by-a-line induction identity in the proof of Proposition 5.5.
      hypotheses: The article convention is qcqs schemes over an algebraically closed
        field, with affine schemes of finite type. Proposition 5.5 is stated for
        normal schemes. The any-field qcqs extension and the explicit
        bundle-versus-perfect-K-zero distinction here are local applications of
        the declared supplier interfaces, not assertions attributed to these
        article passages.
---

PDF p. 11: Reduced rank-two identity; PDF p. 12: Induction identity

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)


## Statement
Assume the Axiom of Choice and the site and universe bounds required by the rank-fiber, determinant-fiber and Chern-class comparisons. Let $k$ be any field and $X$ a quasi-compact quasi-separated $k$-scheme. For a vector bundle $V$ of constant rank $n\geq 0$, put
$$\delta(V)=[V]-[\det V]-(n-1)1\in K_0(X).$$
Then $\delta(V)\in F^2_{\mathrm{mot}}K_0(X)$. If $V$ and $W$ have the same constant rank and isomorphic determinant line bundles, then
$$[V]-[W]=\delta(V)-\delta(W).$$
If $V=L_1\oplus L_2$ for line bundles $L_1,L_2$, then
$$([L_1]-1)([L_2]-1)=[\det V]+1-[V].$$
For every $V$ as above, its virtual second Chern class satisfies $c_2(\delta(V))=c_2(V)$. Finally, if $L$ is a line bundle, then
$$\delta(V\oplus L)=\delta(V)-([L]-1)([\det V]-1).$$

A vector bundle is a finite locally free $\mathcal O_X$-module; a line bundle has rank one. The determinant $\det V$ is $\bigwedge^n V$, with $\det 0=\mathcal O_X$. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of quasi-compact opens are quasi-compact. In particular, these assertions apply to all normal qcqs schemes over an algebraically closed field, including the finite-type case. Normal means that every local ring is an integrally closed domain. Here $K_0(X)$ is the zeroth group of nonconnective K-theory of perfect complexes; a vector bundle gives a class in it, $1=[\mathcal O_X]$, and its product is induced by tensor product. A perfect complex is locally quasi-isomorphic to a bounded complex of vector bundles. The group $F^j_{\mathrm{mot}}K_0(X)$ is the image of the $j$th motivic filtration stage in $K_0(X)$. The virtual Chern class in the displayed formula is the second coefficient of the representative-independent total Chern series on the vector-bundle Grothendieck group, evaluated on the indicated virtual bundle expression; no identification of that group with all of perfect-complex $K_0(X)$ is assumed. Choice asserts that every family of nonempty sets admits a choice function; the size bounds fix the sites and ambient universes of the cited comparisons.

## Facts & Assumptions

**Given:** $k$, $X$, Choice, the stated size bounds, and the vector bundles and line bundles occurring in the assertions.

**Goal:** Prove the second-filtration membership, both ring identities, the equal-rank comparison, and the virtual second-Chern identity.

[F1] The zeroth filtration stage is $K(X)$ and the image groups are the images of the stage augmentations. On qcqs field-schemes, put $S=\Omega^\infty F^1_{\mathrm{mot}}K$ and $T=\Omega^\infty F^2_{\mathrm{mot}}K$. The actual first projection $d:S\to B\mathbb G_m$ is determinant, and $T$ is its homotopy fiber over the trivial line. Thus a first-stage point together with a trivialization of its determinant gives a second-stage lift. Here $B\mathbb G_m(X)$ is the space of line bundles and their isomorphisms, pointed by $\mathcal O_X$; a path to that basepoint is an isomorphism to the trivial line. [def-motivic-filtration](item-def-motivic-filtration) [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)

[F2] For every qcqs scheme over a field, the actual first-stage augmentation identifies $\pi_0F^1_{\mathrm{mot}}K(X)$ injectively with the kernel of Euler rank on perfect $K_0(X)$. Hence every rank-zero perfect class has a unique first-stage class lifting it. Euler rank is a homomorphism and on a rank-$n$ bundle in degree zero takes the value $n$. [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)

[F3] The first perfect Chern class of a virtual bundle is the image of its determinant under the weight-one orientation; this agrees with the first coefficient of its virtual bundle Chern series. The perfect determinant is a homomorphism on the specified spectral $K_0$, agrees with exterior determinant on bundles, and sends virtual negatives to inverse lines. [prop-first-chern-determinant](item-prop-first-chern-determinant)

[F4] The total Chern series is multiplicative for direct sums and virtual differences, and is representative-independent on the vector-bundle Grothendieck group. For a line bundle $M$, $c_t(M)=1+c_1(M)t$, and $c_1(V)=c_1(\det V)$. The latter follows from [F3], while the line and virtual-series formulas are supplied by [prop-chern-whitney-identities](item-prop-chern-whitney-identities). In particular $c_1(\mathcal O_X)=0$: its tensor-square identity and additivity of line $c_1$ give $c_1(\mathcal O_X)=2c_1(\mathcal O_X)$. Thus $c_t(\mathcal O_X)=1$, including for virtual integer multiples.

[F5] The Axiom of Choice is among the hypotheses of the cited filtration, perfect K-theory, derived-enhancement and Chern comparisons. The fixed compatible site and universe bounds in the Statement are assumed separately from Choice and retained for all these applications. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] The class of a bundle $E$ is the object class of the perfect complex $E[0]$, concentrated in degree zero; the unit is $[\mathcal O_X]$. The perfect category is stable and idempotent complete with cofibers inherited from its sheaf-derived enhancement. Its essentially small coherent realization has the specified nonconnective spectrum and tensor-induced multiplication. The object-class comparison identifies its spectral $K_0$ with the abelian presentation by perfect objects and cofiber relations; it does not identify it with the bundle Grothendieck group on arbitrary $X$. For a cochain map $f:C\to E$, the complex $\operatorname{Cone}(f)^j=E^j\oplus C^{j+1}$ with differential $(e,c)\mapsto(d_Ee+fc,-d_Cc)$ represents its enhanced cofiber. [def-vector-bundle-classes](item-def-vector-bundle-classes) [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[F7] Exterior determinant has $\det E=\Lambda^{\operatorname{rank}E}E$, $\det0=\mathcal O_X$ and $\det L=L$ for a line, hence $\det\mathcal O_X=\mathcal O_X$. The exact-sequence determinant isomorphism gives $\det(E\oplus F)\cong\det E\otimes\det F$ by the split exact sequence with inclusion $e\mapsto(e,0)$ and projection $(e,f)\mapsto f$. Only the arbitrary-scheme isomorphism of that supplier is used; its separate locally Noetherian Grothendieck-group assertion is not invoked. The direct sum is the module sheaf $U\mapsto E(U)\oplus F(U)$, with componentwise restrictions and concatenated local frames, so it is again a bundle. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences)

[F8] A field has the commutative field operations, and a $k$-scheme means a scheme equipped with a structure morphism to $\operatorname{Spec}k$. The qcqs and finite locally free bundle meanings are those stated inline and in the bundle-class interface. [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F9] Actual Chern coefficients have $c_i(E)\in H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ and $c_0=1$. The coefficient ring for the formal series is $R_X=\bigoplus_{i\geq0}H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ with its motivic products; it is commutative in these even cohomological degrees. Products of series use finite coefficient convolution, so the inversions below assert no convergence. [def-motivic-chern-classes](item-def-motivic-chern-classes) [prop-chern-whitney-identities](item-prop-chern-whitney-identities)

## Proof

**Proof technique:** Use the perfect object-class relation and actual determinant fiber, then compute the bundle identities and virtual Chern coefficient.

1.1 First justify the direct-sum relation in the specified spectral group. For bundles $E,F$, the cone of $E[0]\to(E\oplus F)[0]$, $e\mapsto(e,0)$, has $E$ in degree $-1$, $E\oplus F$ in degree zero and differential $e\mapsto(e,0)$. Its projection to $F[0]$ is a quasi-isomorphism: its kernel is the two-term identity complex $E\xrightarrow{1}E$, with zero cohomology. By [F6], this is a cofiber sequence in the stable perfect category, and its object-class relation gives $[E\oplus F]=[E]+[F]$ on every stated $X$, without a global bundle presentation for all perfect classes. The tensor-induced multiplication likewise gives $[E][F]=[E\otimes F]$, since bundles are locally free and their derived tensor is their ordinary tensor. Now the rank of $\delta(V)$ is $n-1-(n-1)=0$ by [F2], including $n=0$. It has a unique first-stage class $s\in\pi_0S(X)$ lifting it. By [F3] and [F7], its virtual determinant is $\det V\otimes(\det V)^{-1}\otimes(\det\mathcal O_X)^{-(n-1)}\cong\mathcal O_X$, since $\det(\det V)=\det V$ and the determinant of a virtual trivial bundle is trivial. By [F1], the image of $s$ under the actual determinant map is therefore the trivial line class. Represent $s$ by a point of $S(X)$ and choose an isomorphism of its determinant with $\mathcal O_X$; this is a path of its image to the basepoint of $B\mathbb G_m(X)$. The point and path define a point of the actual fiber $T(X)$ whose underlying perfect class is $\delta(V)$. The image-group definition in [F1] proves $\delta(V)\in F^2_{\mathrm{mot}}K_0(X)$. These suppliers apply throughout the stated any-field qcqs scope with Choice and the fixed compatible size bounds. [given, F1, F2, F3, F5, F6, F7, F8]

2.1 If $V,W$ have the same rank and isomorphic determinants, subtracting their definitions of $\delta$ cancels the determinant and trivial-bundle terms, giving $\delta(V)-\delta(W)=[V]-[W]$. If $V=L_1\oplus L_2$, [F7] gives $\det V\cong L_1\otimes L_2$. Distributivity and the class relations proved in step 1.1 give $([L_1]-1)([L_2]-1)=[L_1\otimes L_2]-[L_1]-[L_2]+1=[\det V]+1-[V]$. For the virtual Chern identity, write $a=c_1(V)=c_1(\det V)$ by [F3] and [F7]. In the formal coefficient ring of [F9], [F4] gives $c_t(\delta(V))=c_t(V)(1+at)^{-1}$, because every virtual trivial-bundle factor has series one. Through degree two this is $(1+at+c_2(V)t^2+\cdots)(1-at+a^2t^2+\cdots)$; the $t^2$ coefficient is $c_2(V)-a^2+a^2=c_2(V)$. This evaluates the indicated virtual bundle expression, without a Chern-series operation on arbitrary perfect classes. Finally put $D=\det V$. By [F7], $\det(V\oplus L)\cong D\otimes L$. The relations of step 1.1 yield $\delta(V\oplus L)-\delta(V)=[L]-[D\otimes L]+[D]-1=-([L]-1)([D]-1)$. This proves every assertion, including rank zero. [given, F3, F4, F6, F7, F9, step 1.1, algebra] ∎
