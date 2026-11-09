---
id: lem-reduced-bundle-class-identities
kind: lemma
title: Reduced bundle class identities
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-e216acade157-split-determinant-fiber
  - prop-first-chern-determinant
  - prop-chern-whitney-identities
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: v1, PDF p. 3 conventions; p. 8, Section 3; pp. 11–12, proof of
        Proposition 5.5
      reading_limits: Read the supplied v1 extracted article text on pp. 3, 8 and
        10–12, including the reduced-class, rank-two and induction calculations;
        no visual PDF inspection is claimed. Read the current qcqs
        rank-zero-stage, global-Picard-projection, split-determinant-fiber,
        first-Chern-determinant and virtual-Whitney supplier arguments for these
        applications. The arbitrary-field qcqs scope is a local deduction from
        these current draft interfaces; the underlying external motivic and
        determinant constructions were not reconstructed. Retained reduced-class
        proposals and the low-filtration outside-resolution note were consulted
        only for the assigned scope and rank concerns; they grant no acceptance.
dependency_level: 24
---

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

[F1] The zeroth filtration stage is $K(X)$ and the image groups are the images of the stage augmentations. On qcqs field-schemes, put $S=\Omega^\infty F^1_{\mathrm{mot}}K$ and $T=\Omega^\infty F^2_{\mathrm{mot}}K$. The actual first projection $d:S\to B\mathbb G_m$ is determinant, and $T$ is its homotopy fiber over the trivial line. Thus a first-stage point together with a trivialization of its determinant gives a second-stage lift. [[def-motivic-filtration]] [[lem-author-e216acade157-split-determinant-fiber]]

[F2] For every qcqs scheme over a field, the actual first-stage augmentation identifies $\pi_0F^1_{\mathrm{mot}}K(X)$ injectively with the kernel of Euler rank on perfect $K_0(X)$. Hence every rank-zero perfect class has a unique first-stage class lifting it. [[lem-author-ec13f1db88a5-rank-zero-stage]]

[F3] The first perfect Chern class of a virtual bundle is the image of its determinant under the weight-one orientation; this agrees with the first coefficient of its virtual bundle Chern series. [[prop-first-chern-determinant]]

[F4] The total Chern series is multiplicative for direct sums and virtual differences. For a line bundle $M$, $c_t(M)=1+c_1(M)t$, and $c_1(V)=c_1(\det V)$. The latter follows from [F3], while the line and virtual-series formulas are supplied by [[prop-chern-whitney-identities]].

[F5] The Axiom of Choice is among the hypotheses of the cited filtration and Chern comparisons. [[math:def-axiom-of-choice]]

## Proof

**Proof technique:** Lift the rank-zero class through the actual determinant fiber, then compute in the bundle Grothendieck ring and its virtual Chern series.

1.1 The rank of $\delta(V)$ is $n-1-(n-1)=0$, including $n=0$. By [F2], it has a unique first-stage class $s\in\pi_0S(X)$ lifting it. Its virtual determinant is $\det V\otimes(\det V)^{-1}\otimes(\det\mathcal O_X)^{-(n-1)}\cong\mathcal O_X$, since the determinant of a virtual trivial bundle is trivial. By [F1], the image of $s$ under the actual determinant map is therefore the trivial line class. Represent $s$ by a point of $S(X)$ and choose a trivialization of its determinant; this is a path of its image to the basepoint of $B\mathbb G_m(X)$. The point and path define a point of the actual fiber $T(X)$ whose underlying perfect class is $\delta(V)$. By the image-group definition in [F1], this proves $\delta(V)\in F^2_{\mathrm{mot}}K_0(X)$. These suppliers apply throughout the stated qcqs scope under the assumed Choice and size bounds. [given, F1, F2, F5]

1.2 If $V$ and $W$ have the same rank and isomorphic determinants, subtracting their definitions of $\delta$ cancels the determinant and trivial-bundle terms. This gives $\delta(V)-\delta(W)=[V]-[W]$. [given, construct]

1.3 For $V=L_1\oplus L_2$, its determinant is $L_1\otimes L_2$. Distributivity in $K_0(X)$ and the direct-sum relation give $([L_1]-1)([L_2]-1)=[L_1\otimes L_2]-[L_1]-[L_2]+1=[\det V]+1-[V].$ This calculation is performed on actual bundle classes and their images in perfect-complex $K_0$. [given, construct]

1.4 Write $a=c_1(V)=c_1(\det V)$. By [F4], the total series of $\delta(V)$ is $c_t(V)(1+at)^{-1}$: the trivial-bundle factor has total class $1$, even when its coefficient in the virtual expression is negative. Through degree two, $c_t(V)(1+at)^{-1}=(1+at+c_2(V)t^2+\cdots)(1-at+a^2t^2+\cdots).$ The coefficient of $t^2$ is $c_2(V)-a^2+a^2=c_2(V)$. This proves the stated virtual identity without requiring a Chern-series operation on arbitrary perfect classes. [F3, F4, construct]

2.1 For $D=\det V$, the determinant of $V\oplus L$ is $D\otimes L$. Therefore $\begin{aligned} \delta(V\oplus L)-\delta(V) &=[L]-[D\otimes L]+[D]-1\\ &=-([L]-1)([D]-1). \end{aligned}$ The equality uses distributivity and the tensor-product interpretation of multiplication. Together with steps 1.1 through 1.4 this proves all assertions. [given, construct, step 1.1, step 1.2, step 1.3, step 1.4] ∎
