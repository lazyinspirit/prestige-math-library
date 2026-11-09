---
title: A nontrivial rank-two bundle with trivial Chern classes on a smooth
  complex affine fourfold
status: draft
research_item: cex-stably-trivial-fourfold-bundle
dependency_level: 23
---

PDF p. 1: Introduction final paragraph, Kum85 claim before the page break; PDF p. 2: Opening paragraph, Kum85

## Prerequisites

- [thm-author-b02e51f9da03-mohan-kumar-existence-input](item-thm-author-b02e51f9da03-mohan-kumar-existence-input)
- [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)
- [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)
- [lem-author-b02e51f9da03-stable-invariants](item-lem-author-b02e51f9da03-stable-invariants)
- [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern)
- [lem-author-b02e51f9da03-whitney-vanishing](item-lem-author-b02e51f9da03-whitney-vanishing)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-stably-free-bundles](item-def-stably-free-bundles)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement refuted
Trivial Chern classes force every rank-two algebraic vector bundle on every smooth complex affine variety to be trivial. In particular, this proposed criterion would assert that a rank-two bundle with all positive integral Chow Chern classes zero on a smooth complex affine fourfold is isomorphic to the trivial rank-two bundle.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated compatible site and universe bounds. These premises are inherited by the affine perfect-class and actual motivic Whitney/trivialization suppliers in [F2]–[F5], applied in steps 2.1–4.1. They grant no new source-existence or nontriviality proof.


**Given:** AC, the fixed compatible site and universe bounds of the supplied perfect K-theory and motivic Chern constructions, and the exact imported existence input below.

**Goal:** Exhibit the stated smooth complex affine fourfold counterexample and verify vanishing using the actual Chern operations.

[F1] The exact imported Mohan Kumar existence supplies a smooth complex affine fourfold X and rank-two bundle E which is nontrivial but stably trivial. [thm-author-b02e51f9da03-mohan-kumar-existence-input](item-thm-author-b02e51f9da03-mohan-kumar-existence-input)

[F2] The actual right-invertible kernel-matrix construction and matrix-completion criterion supply an algebraic obstruction to trivialization. [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel), [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)

[F3] The stable isomorphism fixes the perfect K-zero class and determinant line. [lem-author-b02e51f9da03-stable-invariants](item-lem-author-b02e51f9da03-stable-invariants)

[F4] The trivial-bundle series and actual motivic/Chow Whitney identities give zero positive Chern coefficients for every stable trivial bundle. [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern), [lem-author-b02e51f9da03-whitney-vanishing](item-lem-author-b02e51f9da03-whitney-vanishing)

[F5] The ordinary Chow Chern classes are the quotient-projective-bundle classes on a smooth scheme; the article\'s motivic classes are the actual projective-relation classes. [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle), [def-motivic-chern-classes](item-def-motivic-chern-classes)

## Counterexample

1.1 By [F1], choose one smooth complex affine fourfold X and nontrivial rank-two E with an actual stable isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for some $N\geq1$. This is an existence witness supplied by the explicitly imported established construction, rather than a newly specified system of equations. Its base field is exactly $\mathbb C$, its algebraic dimension is four, and it is affine. [A1, F1]

2.1 For $A=\Gamma(X,\mathcal O_X)$, [F2] constructs a right-invertible matrix $q:A^{2+N}\to A^N$ with E as its kernel bundle. The imported nontriviality means exactly that this q has no completion to an invertible matrix: a completion would give a global frame of the kernel. Thus the bundle is nontrivial as an algebraic bundle even though its finite free stabilization is trivial. The no-completion assertion follows from the imported existence and local equivalence; no independent calculation of matrix entries is claimed. [A1, F1, F2, step 1.1]

3.1 By [F3], this actual stable isomorphism gives $[E]=2[\mathcal O_X]$ in perfect spectral $K_0(X)$ and $\det E\cong\mathcal O_X$. Neither equality cancels a bundle summand; E remains nontrivial by step 2.1. [A1, F3, step 1.1, step 2.1]

4.1 Apply [F4] independently to the ordinary Chow Chern operation and to the actual motivic operation fixed in [F5]. The stable isomorphism gives $c_t(E)c_t(\mathcal O_X^N)=c_t(\mathcal O_X^{2+N})$, so both trivial-bundle series being 1 implies $c_t(E)=1$. Every coefficient $c_i(E)$ for $i\geq1$ is therefore zero in ordinary integral Chow groups, and likewise for the article\'s motivic Chern classes. This deduction uses the actual Whitney identity, not an identification of maps from their targets alone. [A1, F4, F5, step 1.1, step 3.1]

5.1 The pair (X,E) consequently satisfies all the smooth complex affine fourfold and rank-two hypotheses of the proposed criterion and has all its positive Chern classes zero, while $E\not\cong\mathcal O_X^2$. It refutes that criterion and preserves the article\'s stronger stable-triviality assertion. [A1, step 1.1, step 2.1, step 4.1] ∎

## Source notes
The original assertion crosses the article page break from p. 1 to p. 2. It is retained with both locators. Mohan Kumar's 1985 construction and its original nontriviality proof were not read; the precise existence theorem is imported through Brazelton–Opie–Syed Example 6.6. The completion criterion and actual Whitney deductions are local proofs. The source's later Hermitian-K-theory discussion is not needed here. The independently assigned filtration-notation remark is omitted from this singleton patch. No proof acceptance is asserted.
