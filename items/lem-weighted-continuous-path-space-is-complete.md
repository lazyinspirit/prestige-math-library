---
id: lem-weighted-continuous-path-space-is-complete
kind: lemma
title: Completeness of the weighted continuous trajectory space
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-complete-metric-space
  - def-countable-choice
  - thm-euclidean-space-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
proof_strategy: direct
axiom_use: Countable Choice selects measurable representatives of the countable sequence of equivalence classes; least-index subsequence selection is choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Assume Countable Choice. Let $(E,\mathcal A,\mu)$ be a probability space, $T>0$, and $d\ge1$. Use the Euclidean norm of [[def-euclidean-inner-product]]. Let $\mathcal X$ be the space, modulo equality $\mu$-almost everywhere, of jointly measurable maps $X:[0,T]\times E\to\mathbb R^d$ whose paths are continuous for almost every label and whose time-supremum function is measurable, and for which
$$\|X\|_{\mathcal X}:=\int_E\sup_{0\le t\le T}|X_t(z)|d\mu(z)<\infty.$$
In this formula and in $\|X-Y\|_{\mathcal X}$, take the supremum on a measurable conull set where the relevant paths are continuous and extend it by zero off that set; equality almost everywhere means equality of whole paths outside one measurable null set. The seminorm identifies maps equal almost everywhere, and the induced distance $d_{\mathcal X}(X,Y)=\|X-Y\|_{\mathcal X}$ is a metric on the quotient; it is complete.

## Facts & Assumptions

**Given:** Countable Choice, a probability space $(E,\mathcal A,\mu)$, $T>0$, and the norm and equivalence convention in the Statement.

[F1] Euclidean $\mathbb R^d$ is complete for $d\ge1$ ([[thm-euclidean-space-complete]]).

[F2] Tonelli's theorem passes a sum of nonnegative measurable functions through the integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Completeness means every Cauchy sequence converges in the metric ([[def-complete-metric-space]]).

[A1] Countable Choice permits choosing one measurable representative for each member of a countable sequence of equivalence classes ([[def-countable-choice]]).

[F4] The Euclidean norm has the triangle inequality, and the nonnegative integral preserves pointwise order and finite sums ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F5] Countable suprema and pointwise limits of measurable real-valued functions are measurable ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F6] Sections of product-measurable functions are measurable, and the Borel sigma-algebra of a finite Euclidean product is the product of the coordinate Borel sigma-algebras ([[thm-sections-of-product-measurable-functions-are-measurable]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F7] A nonnegative measurable function with finite integral is finite almost everywhere ([[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]).

## Proof
1.1 Let $(X_n)$ be Cauchy in $d_{\mathcal X}$. By [A1], choose measurable representatives and, for each representative, a measurable conull set on which its paths are continuous. Countable Choice gives these sets simultaneously; their intersection $C\in\mathcal A$ is conull. For a fixed countable dense set $D\subseteq[0,T]$, continuity on $C$ gives
$$\sup_{0\le t\le T}|X_m(t,z)-X_n(t,z)|=\sup_{q\in D}|X_m(q,z)-X_n(q,z)|\qquad(z\in C).$$
Each fixed-time section of each coordinate is measurable by [F6], since coordinate projections are continuous, and the right side is measurable by [F5]. Define it to be zero on $C^c$; this is a measurable representative of the time-supremum difference, as prescribed in the Statement. Changing the conull set or the representative does not change its integral. Symmetry and the triangle inequality follow pointwise on a common conull set, and a zero distance forces the paths to agree almost everywhere: for a nonnegative measurable supremum $g$ with zero integral, $\mu\{g>1/j\}\le j\int g=0$ for every $j\ge1$. It is integrable because on $C$ it is bounded by the sum of the two given integrable path suprema. [A1, F4, F5, F6, given, construct]

2.1 Choose increasing indices $n_k$ successively as the least indices large enough that $\|X_m-X_n\|_{\mathcal X}\le2^{-k}$ whenever $m,n\ge n_k$. Put $g_k(z)=\sup_t|X_{n_{k+1}}(t,z)-X_{n_k}(t,z)|$ on $C$ and $g_k(z)=0$ off $C$. By step 1.1 each $g_k$ is measurable and $\int_Eg_k\,d\mu\le2^{-k}$. Thus $G=\sum_{k=1}^\infty g_k$ is measurable by [F5], and Tonelli gives $\int_EG\,d\mu\le\sum_{k=1}^\infty2^{-k}<\infty$. By [F7], $A:=C\cap\{G<\infty\}$ is measurable and conull. For every $z\in A$, the paths $X_{n_k}(\cdot,z)$ are uniformly Cauchy on $[0,T]$. [A1, F2, F5, F7, step 1.1, choose]

3.1 Replace each selected representative by $\widetilde X_{n_k}(t,z)=X_{n_k}(t,z)$ on $A$ and $0$ outside $A$. These maps remain jointly measurable and represent the same equivalence classes. By [F1], for each $z\in A$ their uniform limit is a continuous path $X(\cdot,z)$; set $X(\cdot,z)=0$ off $A$. The coordinate projections of $\widetilde X_{n_k}$ are measurable, so their pointwise limits are measurable by [F5]; [F6] makes the resulting map into $\mathbb R^d$ jointly measurable. Its time-supremum function is measurable because its paths are continuous and the supremum equals the countable supremum over $D$ of measurable sections. On $A$, $\sup_t|X_t-\widetilde X_{n_k,t}|\le\sum_{j\ge k}g_j$; off $A$ this difference is zero. Hence the integrable series tail bounds $\|X-X_{n_k}\|_{\mathcal X}$ and tends to zero. Since $X_{n_k}$ has finite norm, [F4] gives $\|X\|_{\mathcal X}<\infty$. [F1, F4, F5, F6, F7, step 2.1]

4.1 Since the original sequence is Cauchy and its subsequence converges to $X$, the triangle inequality gives $\|X_n-X\|_{\mathcal X}\to0$: for any $\epsilon>0$, first take $k$ with $\|X_{n_k}-X\|<\epsilon/2$, then take $n$ beyond the Cauchy index so $\|X_n-X_{n_k}\|<\epsilon/2$. Thus every Cauchy sequence converges, which is completeness by [F3]. [F3, F4, step 3.1, algebra] ∎
