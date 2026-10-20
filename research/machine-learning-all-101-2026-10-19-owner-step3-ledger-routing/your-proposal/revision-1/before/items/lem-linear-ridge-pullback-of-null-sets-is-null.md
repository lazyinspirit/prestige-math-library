---
id: lem-linear-ridge-pullback-of-null-sets-is-null
kind: lemma
title: "Nonconstant affine ridge pullbacks preserve Lebesgue nullity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-regularity-for-arbitrary-subsets
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-borel-sets-are-lebesgue-measurable
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, product-measure and change-of-variables results"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, §6"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
---

## Statement

Assume Countable Choice. Let $d\ge1$, $w\in\mathbb R^d\setminus\{0\}$, $b\in\mathbb R$, and let $E\subseteq\mathbb R$ have Lebesgue outer measure zero. Then

$$\{x\in\mathbb R^d:w\cdot x+b\in E\}$$

is Lebesgue measurable and has $d$-dimensional Lebesgue measure zero. Consequently, if two Lebesgue measurable real functions on $\mathbb R$ agree outside a null set, their compositions with the same nonconstant affine form $x\mapsto w\cdot x+b$ agree almost everywhere on $\mathbb R^d$.

## Statement references

[Tao, An Introduction to Measure Theory, product measures and linear changes of variables](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, a nonzero vector $w$, a real $b$, and a null set $E\subseteq\mathbb R$.

[F1] Under Countable Choice, every null subset of $\mathbb R$ is contained in a Borel null set: outer regularity supplies open covers of arbitrarily small measure, and their countable intersection is Borel; Borel sets are Lebesgue measurable and completeness makes the resulting outer-null set measurable and null ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F2] The product of two sigma-finite measures satisfies Tonelli's theorem for nonnegative measurable functions ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel subsets of a Euclidean product ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F4] Invertible linear maps scale Lebesgue measure by the absolute determinant; in particular an orthogonal map preserves it ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F5] Translation and nonzero scalar dilation preserve Lebesgue nullity ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F6] Lebesgue measure is complete under Countable Choice, so every subset of a measurable null set is measurable and null ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F7] Under Countable Choice every Borel subset of $\mathbb R^d$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[F8] Under Countable Choice, Lebesgue measure in every positive dimension is $\sigma$-finite: $\mathbb R^m=\bigcup_{r=1}^{\infty}[-r,r]^m$, and each box has finite measure $(2r)^m$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F9] A countable union of measurable null sets is measurable and null, by the measure property in [F6] and countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]).

## Proof

1.1 Put $u=w/\lVert w\rVert_2$. For $d\ge2$, start with $u$ and inspect the standard basis vectors in their finite order; for each $e_i$, subtract its orthogonal projection onto the span of the vectors already retained, and append and normalize the residual exactly when it is nonzero. Since the standard basis spans $\mathbb R^d$, this finite Gram–Schmidt procedure produces an orthonormal basis whose first vector is $u$. Let $Q$ be the associated orthogonal coordinate map. If $d=1$, take $Qx=ux$. In either case the first coordinate of $Qx$ is $u\cdot x$, and [F4] says $Q$ preserves Lebesgue measure. [given, F4, construct]

2.1 Fix an integer $R\ge1$. Since $Q$ is a finite matrix, choose $C_R<\infty$ greater than $R$ times the largest sum of absolute entries in any row; then $Q([-R,R]^d)\subseteq[-C_R,C_R]^d$. Since $E$ has outer measure zero, [F1] makes it Lebesgue measurable and null. Thus $E_R=((E-b)/\lVert w\rVert_2)\cap[-C_R,C_R]$ is a one-dimensional measurable null set by [F5]. By [F1], choose a Borel null set $B_R\supseteq E_R$. If $d=1$, the image under $Q$ of the set in the Statement intersected with $[-R,R]$ is contained in $B_R$. If $d\ge2$, that image is contained in $B_R\times[-C_R,C_R]^{d-1}$. [step 1.1, F1, F5, A1, choose]

3.1 If $d=1$, the bounded pullback image is contained in the Borel null set $B_R$, and the inverse orthogonal map preserves nullity by [F4]. If $d\ge2$, the Borel set $B_R\times[-C_R,C_R]^{d-1}$ is Lebesgue measurable by [F7]; both Lebesgue factors are $\sigma$-finite by [F8], so Tonelli [F2] gives it product measure zero because its one-dimensional section factor $B_R$ has measure zero, and [F3] identifies that product measure with $\lambda_d$. Applying the inverse orthogonal map preserves nullity by [F4]. In either case the ridge pullback inside $[-R,R]^d$ is contained in a Borel null set. [step 2.1, F2, F3, F4, F7, F8, A1]

4.1 The full pullback is the countable union of its intersections with $[-R,R]^d$, $R\ge1$. Each intersection is a subset of the Borel null set from step 3.1, hence is measurable and null by [F6]. The full pullback is measurable by [F6] and null by countable subadditivity [F9]. If two functions differ only on $E$, their compositions differ only on this pullback, proving the consequence. [step 3.1, F6, F9, A1] ∎

