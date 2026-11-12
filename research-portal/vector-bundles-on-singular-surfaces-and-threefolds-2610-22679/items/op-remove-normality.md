---
id: op-remove-normality
kind: open-problem
title: Removing normality from the article results
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - def-motivic-chern-classes
  - def-smooth-point-filtration
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:def-algebra-over-a-commutative-ring
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-algebra-over-a-commutative-ring: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-motivic-cohomology: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: pp. 2–3, Theorems A, B and C, Corollary D, final introductory paragraph
        before Structure of the paper, and Notation and conventions; p. 14,
        Definition 6.5; p. 16, Remark 6.8
      reading_limits: "Read the frozen article extraction and inspected the supplied
        PDF images at pp. 2, 3, 14 and 16: Theorems A, B and C, Corollary D, the
        normality expectation, the standing conventions, Definition 6.5 and
        Remark 6.8. This checks what those passages state and that they report
        the communication only. No independent proof review of the
        classification theorems, verification of the communication,
        later-publication search, or comprehensive current-status search was
        performed. The date-limited Status below is retained; no resolution is
        asserted."
      statement: Theorems A and B assert the critical-rank Chern-class bijections on
        normal affine surfaces and threefolds; Theorem C asserts the
        degree-three smooth-point comparison on normal affine threefolds;
        Corollary D asserts rank-two Chern-class surjectivity there. The final
        introductory paragraph on p. 3 expresses the expectation that normality
        is an artifact of the proofs. Definition 6.5 defines the smooth-point
        subgroup for pure-dimensional qcqs schemes over perfect fields. Remark
        6.8 reports a communication of a different proof of the comparison
        without normality in any dimension, to appear in work in progress; this
        is a report, not a supplied proof.
      hypotheses: Theorems A, B and C and Corollary D assume normal affine schemes
        over an algebraically closed field, of dimensions two or three as
        specified. The standing conventions on p. 3 make affine schemes finite
        type over the base field. Definition 6.5 assumes qcqs X of pure
        dimension d over a perfect field. Remark 6.8 reports removal of
        normality and arbitrary dimension for the comparison; it does not supply
        a proof or a complete replacement set of hypotheses. The explicit
        nonreduced and non-pure questions and the Choice and universe
        conventions are features of this generated formulation, not additional
        proved article claims.
dependency_level: 23
formulation_deps:
  - def-vector-bundle-classes
  - def-motivic-chern-classes
  - def-smooth-point-filtration
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:def-algebra-over-a-commutative-ring
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
argument_deps:
  - math:def-axiom-of-choice
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
---

## Open problem
Assume the Axiom of Choice and the size conventions of the supplied motivic constructions. Let $k$ be an algebraically closed field. An affine $k$-scheme here means the spectrum of a finitely generated commutative $k$-algebra; its dimension is the supremum of the lengths of chains of distinct irreducible closed subsets. No normality assumption is imposed. A rank-$n$ vector bundle is a locally free $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^n$, and $\mathrm{Vect}_n(X)$ is its set of isomorphism classes. Write $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)$ for the supplied integral motivic cohomology and $c_i$ for its motivic Chern classes.

In this convention, a $k$-scheme has a specified structure morphism to $\operatorname{Spec}k$, and finite generation of its coordinate $k$-algebra means generation as a $k$-algebra by finitely many elements. Irreducible closed means nonempty and not a union of two proper closed subsets; an irreducible component is a maximal irreducible closed subset. Under the assumed Choice, every affine scheme is quasi-compact and quasi-separated. An algebraically closed field is perfect. Consequently the qcqs hypotheses of the supplied bundle, motivic cohomology, Chern-class and filtration constructions hold here, and the perfect-field hypothesis of the smooth-point subgroup holds in question 3. Suitable compatible universes are assumed separately; their existence is not deduced from Choice.

Determine whether the following extensions hold:

1. For every affine surface $X$ over $k$, meaning an affine $k$-scheme of dimension $2$, is $(c_1,c_2):\mathrm{Vect}_2(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ a bijection?
2. For every affine threefold $X$ over $k$, meaning an affine $k$-scheme of dimension $3$, is $(c_1,c_2,c_3):\mathrm{Vect}_3(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)\times H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ a bijection?
3. For every such threefold of pure dimension $3$, is $F^3_{\mathrm{mot}}K_0(X)=F^3_{\mathrm{sm}}K_0(X)$? Here $K_0(X)$ is degree zero of perfect-complex K-theory, $F^3_{\mathrm{mot}}K_0(X)$ is the image of degree zero of the third motivic filtration stage in $K_0(X)$, and $F^3_{\mathrm{sm}}K_0(X)$ is the subgroup generated by the classes of residue sheaves at closed points where $X$ is smooth over $k$. Pure dimension means that every irreducible component has dimension $3$. For threefolds without this purity hypothesis, determine the appropriate formulation and whether the comparison extends.
4. For every affine threefold $X$ over $k$, is $(c_1,c_2):\mathrm{Vect}_2(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ surjective?

The questions include schemes that are not reduced, meaning that their coordinate ring has a nonzero nilpotent element; an affirmative answer in a narrower class alone would not settle the formulations above. The purity qualification in the third question is the domain of the supplied smooth-point filtration definition.

## Open problem references

[[def-vector-bundle-classes]]

[[def-motivic-chern-classes]]

[[def-smooth-point-filtration]]

[[def-motivic-filtration]]

[[math:def-axiom-of-choice]]

[[math:cor-affine-scheme-quasi-compact]]

[[math:thm-affine-schemes-quasi-separated]]

[[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]

[[math:def-algebraically-closed-field]]

[[math:def-affine-scheme]]

[[math:def-scheme-over-base]]

[[math:def-algebra-over-a-commutative-ring]]

[[math:def-grothendieck-universe-closure-convention]]

[[def-motivic-cohomology]]

## Status
As of 2026-11-09, this status record is limited to the supplied article arXiv:2610.22679v1. No later-publication search or independent verification of the reported work in progress was performed. The article proves the corresponding results under its normality hypotheses and states on p. 3 that the authors expect normality to be an artifact of their proofs. Its Remark 6.8 reports a communicated alternative approach to the smooth-point comparison without normality and in arbitrary dimension, to appear in work in progress; the present record does not treat that communication as a proof. The questions above record the proposed extensions, including the scope of nonreduced and non-pure schemes, without claiming an independent resolution or a comprehensive current literature-status review.
