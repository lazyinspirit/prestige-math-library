---
id: lem-third-piece-representatives
kind: lemma
title: Rank-three representatives with two zero Chern classes
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - lem-critical-rank-representatives
  - lem-second-piece-rank-determinant
  - prop-second-projection-chern
  - lem-second-chern-additive
  - prop-chern-whitney-identities
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
  - def-motivic-chern-classes
  - def-exterior-determinant-bundles
  - prop-first-chern-determinant
  - def-vector-bundle-classes
dependency_roles:
  def-motivic-filtration: mathematical-premise
  lem-critical-rank-representatives: mathematical-premise
  lem-second-piece-rank-determinant: mathematical-premise
  prop-second-projection-chern: mathematical-premise
  lem-second-chern-additive: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 15, Theorem 6.7 and the first sentence of its proof
      reading_limits: For this repair, read the frozen article extraction at PDF p. 3,
        Notation and conventions, and p. 15, Theorem 6.7 and the opening proof
        paragraph. No PDF-image inspection or reconstruction of the underlying
        filtration, perfect K-theory or motivic Chern constructions is claimed.
        Checked the current supplier interfaces used in this item and read the
        direct Bertini consumer. The proof is a locally authored composition; no
        library acceptance or original-author defect judgment is claimed.
      statement: The opening sentence of the proof represents every element of the
        third motivic image piece as [P]-[O_X^3] with P of rank three and
        c_1(P)=c_2(P)=0, invoking Lemma 5.2 and Proposition 5.5. The determinant
        triviality in the present item is a locally derived consequence of its
        declared determinant comparison.
      hypotheses: X is a normal affine threefold over an algebraically closed field k,
        with the article convention that affine k-schemes are of finite type.
        Choice and compatible site/universe bounds are explicit inherited
        hypotheses of the present supplier-based proof, rather than additional
        assertions in this sentence of the article.
dependency_level: 31
formulation_deps:
  - def-motivic-filtration
  - lem-critical-rank-representatives
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
  - def-motivic-chern-classes
  - def-exterior-determinant-bundles
  - def-vector-bundle-classes
argument_deps:
  - def-motivic-filtration
  - lem-critical-rank-representatives
  - lem-second-piece-rank-determinant
  - prop-second-projection-chern
  - lem-second-chern-additive
  - prop-chern-whitney-identities
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
  - def-motivic-chern-classes
  - def-exterior-determinant-bundles
  - prop-first-chern-determinant
  - def-vector-bundle-classes
---

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the completed filtration and Chern comparisons. Let $k$ be an algebraically closed field and let $X$ be a normal affine $k$-scheme of finite type and dimension three. Every $\alpha\in F^3_{\mathrm{mot}}K_0(X)$ can be written
$$\alpha=[P]-[\mathcal O_X^3]$$
for a rank-three vector bundle $P$ with $c_1(P)=0$, $c_2(P)=0$, and $\det P\cong\mathcal O_X$.

A vector bundle is a finite locally free $\mathcal O_X$-module, and rank three means that it is locally isomorphic to $\mathcal O_X^3$. Its determinant is the line bundle $\bigwedge^3P$. Normal means that every local ring is an integrally closed domain; finite type means that the affine coordinate ring is a finitely generated $k$-algebra. Dimension is the supremum of lengths of strict chains of irreducible closed subsets. Here $K_0(X)=\pi_0K(X)$ for the specified nonconnective K-theory spectrum of perfect complexes, and $[P]$ denotes the class of $P$ concentrated in degree zero. The subgroup $F^i_{\mathrm{mot}}K_0(X)$ is the image of the zeroth homotopy group of the $i$th motivic filtration stage in $K_0(X)$. The bundle Chern classes $c_i(P)$ lie in $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ and are the classes defined by the supplied motivic projective-bundle relation. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes of the cited comparisons.

## Facts & Assumptions

**Given:** $k$, $X$, $\alpha$, Choice, and the site and universe bounds as stated.

**Goal:** Construct a rank-three representative and prove the two Chern-class vanishings and determinant triviality.

[F1] The motivic image filtration is decreasing: $F^3_{\mathrm{mot}}K_0(X)\subseteq F^2_{\mathrm{mot}}K_0(X)$. [[def-motivic-filtration]]

[F2] Every class in the second image piece has pointwise rank zero and first perfect Chern class zero. If it is a difference of two bundle classes, the two bundles have isomorphic determinants. [[lem-second-piece-rank-determinant]]

[F3] Under Choice as in [[math:def-axiom-of-choice]] and suitable universes, every pointwise rank-zero perfect K-zero class on a nonempty affine finite-type field-scheme of dimension three has the form $[P]-[\mathcal O_X^3]$ with $P$ of constant rank three. [[lem-critical-rank-representatives]]

[F4] On the second image piece, the actual second projection $p_2$ is minus the actual perfect second Chern operation, and its kernel is the third image piece. No injectivity of the third stage into K-zero is required. [[prop-second-projection-chern]]

[F5] For a bundle difference $[V]-[W]$ in the second image piece, the actual perfect operation satisfies $c_2([V]-[W])=c_2(V)-c_2(W)$. [[lem-second-chern-additive]]

[F6] The total bundle Chern class is multiplicative on direct sums, and a line bundle has no Chern classes above degree one. [[prop-chern-whitney-identities]]

[F7] The actual projective-relation first Chern class of a bundle $E$ is $c_1(E)=\gamma_X([\det E])$, where $\gamma_X:\operatorname{Pic}(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ is the actual weight-one group isomorphism. The Picard group consists of line-bundle isomorphism classes under tensor product, with the trivial line as zero, so $\gamma_X([\mathcal O_X])=0$. This agrees with the perfect first Chern operation and with the bundle classes used here. [[prop-first-chern-determinant]]

[F8] An affine scheme is a locally ringed space isomorphic to $\operatorname{Spec}A$ with its structure sheaf; a $k$-scheme has a specified structure morphism to $\operatorname{Spec}k$. Algebraic closedness means that every nonconstant polynomial over $k$ has a root in $k$. Under the stated Choice premise every affine scheme is quasi-compact, and every affine scheme is quasi-separated. Thus the given $X$ is qcqs, as required by the filtration and Chern suppliers. Quasi-compact means every open cover has a finite subcover; quasi-separated means intersections of affine opens are quasi-compact. In the dimension convention of the Statement, an irreducible closed subset is nonempty and is not a union of two proper closed subsets; chain length counts strict inclusions. [[math:def-affine-scheme]] [[math:def-scheme-over-base]] [[math:def-algebraically-closed-field]] [[math:cor-affine-scheme-quasi-compact]] [[math:thm-affine-schemes-quasi-separated]]

[F9] Exterior powers of finite locally free sheaves are defined and are locally free with their increasing-wedge bases. In particular $\det E=\bigwedge^r E$ for a constant-rank-$r$ bundle, and the wedge of the standard basis identifies $\det(\mathcal O_X^r)$ with $\mathcal O_X$. [[def-exterior-determinant-bundles]]

[F10] Integral motivic cohomology is $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(b)_{\mathrm{mot}}(X))$ for the specified motivic complex. The bundle Chern classes in this item are the unique coefficients of its oriented quotient-projective-bundle relation; their total polynomial is $c_t(E)=\sum_{i\geq0}c_i(E)t^i$ with $c_0(E)=1$. Here $t$ is a formal variable. These definitions fix exactly the bundle classes and targets in [F5]–[F7], not an unrelated choice of Chern operations. [[def-motivic-cohomology]] [[def-motivic-chern-classes]]

[F11] The specified perfect K-theory has $K_0(X)=\pi_0K(X)$. A bundle $E$ defines the perfect complex $E[0]$ concentrated in degree zero and its object class $[E]\in K_0(X)$; this is distinct from its bundle isomorphism class. The same interface defines finite locally free bundles, constant rank, and their finite trivial direct sums. [[def-vector-bundle-classes]]

[A1] Use the assumed Choice in the representative, affine quasi-compactness, filtration and Chern suppliers. Fix compatible Grothendieck universes satisfying the closure convention of the declared definition, large enough for the sites and constructions used here, with $\omega$ in the data universe as required by the second-Chern supplier. Universe existence and the inherited site-size bounds are separate assumptions from Choice. No simultaneous selection of representatives is used. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

## Proof

**Proof technique:** Represent the rank-zero class at the critical rank, then apply the actual filtration projections and bundle comparison.

1.1 By [F8], $X$ is qcqs, so the normal qcqs comparison suppliers apply under [A1]. Since $X$ has dimension three it is nonempty: an empty space has no nonempty irreducible closed subsets and hence no chains of length three. By [F1], $\alpha$ lies in the second image piece, so [F2] gives pointwise rank zero. Applying [F3], with the spectral bundle classes of [F11], yields a rank-three vector bundle $P$ with $\alpha=[P]-[\mathcal O_X^3]$. [A1, F1, F2, F3, F8, F11, given]

2.1 The bundle-difference assertion of [F2], applied to the expression in step 1.1, gives $\det P\cong\det(\mathcal O_X^3)$. By [F9], the wedge $e_1\wedge e_2\wedge e_3$ of its standard basis trivializes the latter determinant, so $\det P\cong\mathcal O_X$. By [F7], the projective-relation first Chern class of [F10] is therefore $c_1(P)=\gamma_X([\det P])=\gamma_X([\mathcal O_X])=0$. This also agrees with the first perfect class and bundle-difference comparison. [A1, F2, F7, F9, F10, step 1.1]

2.2 Since $\alpha$ belongs to the third image piece, [F4] gives $p_2(\alpha)=0$, hence $c_2(\alpha)=0$. By [F5] and step 1.1, $c_2(\alpha)=c_2(P)-c_2(\mathcal O_X^3)$. The latter trivial bundle is a direct sum of three trivial lines. Each has total Chern polynomial $1$: its first class is zero by [F7] and [F9], its higher classes vanish by [F6], and its zeroth class is $1$ by [F10]. By [F6], multiplying the three polynomials gives $c_t(\mathcal O_X^3)=1$. Thus $c_2(\mathcal O_X^3)=0$, and consequently $c_2(P)=0$. [A1, F4, F5, F6, F7, F9, F10, step 1.1]

3.1 Steps 1.1 through 2.2 prove all the stated assertions. [step 1.1, step 2.1, step 2.2] ∎

## External input

Reference 0 supplies the article formulation of the rank-three representative with two vanishing Chern classes. The determinant conclusion and the argument above are locally derived from [F1]–[F11] under [A1]; the whole result is not recorded as an imported proof. The substantial constructions are used only through the named supplier contracts.
