---
id: lem-bertini-support-reduction
kind: lemma
title: Curve-and-point support reduction
status: published
domain: mathematics
deps:
  - lem-third-piece-representatives
  - prop-swan-bertini-point-section
  - prop-bertini-curve-section
  - lem-normal-smooth-locus-restriction
  - lem-determinants-of-short-exact-sequences
  - lem-trivial-determinant-rank-two-kernel
  - prop-perfect-k-localization-input
  - def-nonconnective-k-spectrum-interface
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-high-filtration-vanishing
  - math:def-axiom-of-choice
dependency_roles:
  lem-third-piece-representatives: mathematical-premise
  prop-swan-bertini-point-section: mathematical-premise
  prop-bertini-curve-section: mathematical-premise
  lem-normal-smooth-locus-restriction: mathematical-premise
  lem-determinants-of-short-exact-sequences: mathematical-premise
  lem-trivial-determinant-rank-two-kernel: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  lem-high-filtration-vanishing: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 15, proof of Theorem 6.7, from the two Bertini applications
        through the support conclusion
      reading_limits: The supplied extracted text of this passage was read. The
        Bertini results are used through the named completed suppliers; KM82
        section 3 was not independently read for this item.
dependency_level: 29
---

## Statement
Assume the Axiom of Choice and the site and universe bounds of the completed filtration, representative and K-theory suppliers. Let $k$ be algebraically closed and let $X$ be a normal affine finite-type $k$-scheme of dimension three. For every $\alpha\in F^3_{\mathrm{mot}}K_0(X)$ there are a rank-three vector bundle $P$ with $\det P\cong\mathcal O_X$ and $c_1(P)=c_2(P)=0$, a functional $s:P\to\mathcal O_X$, and, on $U=X\setminus S$ for its zero locus $S$, a functional $t:Q|_U\to\mathcal O_U$ for $Q=\ker s$, with the following properties.

The class is $\alpha=[P]-[\mathcal O_X^3]$. The zero scheme $S$ is a finite set of smooth closed points, and $Q|_U$ is a rank-two vector bundle. The zero scheme $Y$ of $t$ is a finite disjoint union of smooth geometrically integral curves, one on each three-dimensional clopen integral component of $X$; it is empty on the lower-dimensional components. It is contained in the smooth locus of $X$. For integral $X$, $Y$ is a single curve. Put $C$ for the reduced closure of $Y$ in $X$, $T=C\cup S$, and $V=X\setminus T$. Then $C\setminus Y\subseteq S$, $C$ is smooth away from $C\setminus Y$, and $T$ lies in the smooth locus of $X$. On $V$ there are short exact sequences
$$0\to Q|_V\to P|_V\xrightarrow{s}\mathcal O_V\to0,\qquad 0\to\mathcal O_V\to Q|_V\xrightarrow{t}\mathcal O_V\to0.$$
Consequently $\alpha|_V=0$ in $K_0(V)$, and $\alpha$ is in the image of the actual support-to-global map $K_{0,T}(X)=\pi_0K_T(X)\to K_0(X)$.

A vector bundle is a finite locally free sheaf; its determinant is its top exterior power. A functional is a morphism to the structure sheaf, with zero scheme defined locally by its coefficients. A curve here is a finite-type scheme of pure dimension one, and geometrically integral means integral after every field extension. The smooth locus consists of points at which the structure morphism to $\operatorname{Spec}k$ is smooth. The reduced closure is the smallest reduced closed subscheme with the given underlying closed set. The group $K_0$ is zeroth homotopy of the specified nonconnective perfect-complex K-spectrum; $K_T(X)$ is the supported spectrum in the localization supplier. The motivic filtration piece is the image of the third stage in that $K_0$. Choice means that every family of nonempty sets admits a choice function.

## Facts & Assumptions
**Given:** The field, scheme, class, Choice and size bounds in the statement.

**Goal:** Construct the componentwise curve-and-point support and prove the two exact sequences and the actual supported lift.

[F1] [[lem-third-piece-representatives]] gives a rank-three representative with the stated Chern vanishings and trivial determinant, under the stated Choice and size assumptions.

[F2] [[lem-author-80f982ded420-normal-point-strata]] decomposes $X$ into finitely many clopen integral components. [[lem-author-80f982ded420-clopen-filtered-products]] identifies restriction on the actual filtration images and $K_0$ with the product over those components. [[lem-high-filtration-vanishing]] gives $F^3_{\mathrm{mot}}K_0=0$ on each component of dimension less than three.

[F3] [[prop-swan-bertini-point-section]] supplies a functional with finite smooth zero scheme and a rank-two kernel bundle off that scheme. [[lem-normal-smooth-locus-restriction]] makes the nonsmooth locus on each normal three-dimensional component closed of codimension at least two. [[prop-bertini-curve-section]] supplies, for this fixed avoidance locus, a smooth geometrically integral codimension-two zero curve on each such component. These suppliers assume Choice.

[F4] [[lem-determinants-of-short-exact-sequences]] gives the determinant isomorphism for a short exact sequence of bundles. [[lem-trivial-determinant-rank-two-kernel]] identifies the kernel of a surjective functional on a rank-two bundle of trivial determinant with $\mathcal O$.

[F5] [[def-nonconnective-k-spectrum-interface]] gives the classes of bundles in perfect $K_0$ and their additivity in short exact sequences. [[prop-perfect-k-localization-input]] gives the fiber sequence $K_T(X)\to K(X)\to K(V)$ when $X$ is qcqs and $V$ is quasi-compact open. [[math:def-axiom-of-choice]] records the inherited Choice assumption.

## Proof
1.1 By [F1], choose a representative $P_0$ of $\alpha$ with the stated rank, determinant and Chern properties. By [F2], each lower-dimensional clopen component has zero third filtration image, so $\alpha$ restricts to zero there. Replace $P_0$ on all such components by $\mathcal O^3$, leaving it unchanged on the three-dimensional components. Gluing over the finite disjoint clopen partition gives a rank-three bundle $P$. The componentwise $K_0$ decomposition in [F2] shows that $[P]-[\mathcal O_X^3]=\alpha$. Its determinant and the two Chern vanishings hold componentwise, hence globally. [F1, F2, given]

2.1 Apply the point-section supplier [F3] to the restriction of $P$ on the union of three-dimensional components. On each lower-dimensional component use the first-coordinate projection $\mathcal O^3\to\mathcal O$. These maps glue to $s$. Its zero scheme $S$ is finite, lies in the smooth locus, and has no points on lower-dimensional components. On $U=X\setminus S$, [F3] gives the exact sequence $0\to Q|_U\to P|_U\xrightarrow{s}\mathcal O_U\to0$ with rank-two kernel; on lower-dimensional components this kernel is the displayed trivial rank-two summand. [F2, F3, step 1.1]

3.1 On each three-dimensional component, prescribe the closed nonsmooth locus in $U$ as the avoidance set. It has codimension at least two by [F3]. The curve supplier [F3] gives a functional on the actual restricted kernel whose zero scheme is a smooth geometrically integral codimension-two curve avoiding that set. On each lower-dimensional component use a coordinate projection from the trivial rank-two kernel; it has empty zero scheme. Glue these finitely many functionals to $t$ on $U$. Thus $Y$ is precisely the stated finite disjoint union of curves and lies in the smooth locus. The construction uses the avoidance set fixed before choosing the functional. [F2, F3, step 2.1]

4.1 The zero scheme $Y$ is closed in the open subset $U$. Its reduced closure $C$ in $X$ therefore satisfies $C\cap U=Y$ as reduced schemes: $Y$ is smooth and hence reduced. Thus $C\setminus Y\subseteq X\setminus U=S$. Since $Y$ is smooth and every point of $S$ is in the smooth locus of $X$, both $C$ and $T=C\cup S$ have the asserted location properties; the possible nonsmooth points of $C$ are contained in $C\setminus Y$. This also applies to the empty boundary. [F3, step 2.1, step 3.1]

5.1 On $V=X\setminus(C\cup S)$ both functionals are pointwise nonzero. A functional on a finite locally free module is surjective wherever one of its coefficients is a unit, so the sequence for $s$ restricts to the first displayed sequence and $t|_V$ is surjective. By [F4], $\det Q|_V\otimes\det\mathcal O_V\cong\det P|_V\cong\mathcal O_V$. The rank-two kernel result in [F4] identifies the kernel of $t|_V$ with $\mathcal O_V$, giving the second sequence. [F4, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 Additivity of bundle classes in perfect $K_0$ gives $[Q|_V]=2[\mathcal O_V]$ and then $[P|_V]=3[\mathcal O_V]$, so $\alpha|_V=0$. The finite-type affine scheme $X$ is Noetherian and qcqs; its open subset $V$ is quasi-compact. Applying the actual localization fiber sequence in [F5], exactness on zeroth homotopy identifies the kernel of $K_0(X)\to K_0(V)$ with the image of $K_{0,T}(X)\to K_0(X)$. Therefore $\alpha$ has the claimed supported lift. The lift is an existence statement and is not asserted to be canonical. [F5, step 1.1, step 4.1, step 5.1] ∎

## Source/application note
The article's integral-curve construction is applied separately on the finitely many three-dimensional clopen integral components. The resulting finite union is sufficient for the subsequent localization argument. Lower-dimensional components contribute no third image-filtration class by the named stage-vanishing supplier and are given trivial representatives and nowhere-zero functionals. No globally irreducible curve is asserted for a disconnected fixed pair.
