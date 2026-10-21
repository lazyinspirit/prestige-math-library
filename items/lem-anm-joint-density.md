---
id: lem-anm-joint-density
kind: lemma
title: "Positive joint density of a finite additive-noise model"
status: published
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-measure-with-density
  - thm-independent-random-elements-have-product-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - thm-completion-of-a-measure-space
  - def-countable-choice
proof_strategy: direct
axiom_use: "Countable Choice is used only to obtain Borel representatives of arbitrary Lebesgue densities and to form completions. The product-density conclusion for already Borel noise densities uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, JMLR 15 (2014), equation (6)"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.7.18"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Let a finite additive-noise model have topological order $v_1,\ldots,v_p$,
equations $X_j=f_j(X_{\operatorname{pa}(j)})+N_j$, and strictly positive
Lebesgue densities $q_j$ for its mutually independent noises. Write
$\rho=\lambda^{\otimes p}$ for the finite product of one-dimensional Lebesgue
measure. If all $q_j$ are Borel measurable, the observational law has the
strictly positive Borel density
$$p_X(x)=\prod_{r=1}^p q_{v_r}\!\left(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)})\right)$$
with respect to $\rho$ on Borel sets.

For arbitrary Lebesgue-measurable $q_j$, assume Countable Choice. There are
strictly positive finite Borel density versions $\bar q_j=q_j$ almost
everywhere. Their product
$$\bar p_X(x)=\prod_{r=1}^p \bar q_{v_r}\!\left(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)})\right)$$
is a strictly positive Borel density with respect to $\rho$. The original
product $p_X$ is measurable for the completion $\bar\rho$ of $\rho$, agrees
with $\bar p_X$ $\bar\rho$-almost everywhere, and is a strictly positive
density with respect to $\bar\rho$. In this Countable Choice case, on non-Borel sets these density measures
refer to the unique absolutely continuous extensions of the Borel
observational law to the indicated sigma-algebras.

## Statement references

[[def-additive-noise-model|Finite continuous additive-noise models]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product reference measure and its rectangle formula]]

[[def-countable-choice|Countable Choice for Borel representatives and completions]]

[[thm-completion-of-a-measure-space|Completion of a measure space]]

## Facts & Assumptions

**Given:** A finite causally sufficient additive-noise model with a specified topological order and positive noise densities.

[F1] In topological order each variable is a measurable function of its parents plus its own noise; the noises are mutually independent and each density $q_j$ is normalized and strictly positive. [[def-additive-noise-model]]

[F2] The joint law of a finite independent family of random elements is the finite product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F3] For a nonnegative measurable density $g$, the measure with density $g$ relative to $\mu$ is $A\mapsto\int_A g\,d\mu$. [[def-measure-with-density]]

[F4] For sigma-finite factors, the product measure exists, has the rectangle product formula, and is unique among measures with that formula. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] Nonnegative product-measurable functions can be integrated by iterated sections in any finite coordinate order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Translation by a fixed real number preserves one-dimensional Lebesgue measure. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F7] Finite sums and pointwise products of nonnegative measurable extended-real functions are measurable, using the nonnegative extended-product convention. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F8] Composition is measurable when the inner codomain sigma-algebra matches the outer domain sigma-algebra; in particular a Borel outer function can be composed with a Borel inner map. Finite products of Euclidean Borel sigma-algebras are the Euclidean Borel sigma-algebra. [[thm-composition-with-borel-functions-preserves-measurability]] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F9] Assuming Countable Choice, the Lebesgue sigma-algebra is the completion of Borel Lebesgue measure, and every completion-measurable extended-real function has a base-measurable representative almost everywhere. In particular each Lebesgue density has a Borel representative and each exceptional Lebesgue null set has a Borel null hull. [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]] [[thm-completion-measurable-functions-have-base-measurable-representatives]]

[F10] Assuming Countable Choice, the completion of a measure space is a complete extending measure on the completion sigma-algebra. [[thm-completion-of-a-measure-space]] [[def-countable-choice]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 First suppose every $q_j$ is Borel measurable. For each $j$, let $Q_j=q_j\,d\lambda$ on Borel sets; [F1, F3] makes $Q_j$ a probability measure. The function $g(n)=\prod_{r=1}^p q_{v_r}(n_{v_r})$ is Borel, hence product-measurable, by [F7, F8]. Repeated Tonelli gives $\int g\,d\rho=1$ and, on every Borel rectangle, $\int_{\prod B_j}g\,d\rho=\prod_j Q_j(B_j)$. Uniqueness of product measures identifies this Borel density measure with the joint law of the independent noises. [given, F1, F2, F3, F4, F5, F7, F8]

1.2 Recursion in topological order defines a Borel map $T:\mathbb R^p\to\mathbb R^p$ from the noise vector to $X$. Its inverse has coordinates $n_j=x_j-f_j(x_{\operatorname{pa}(j)})$, so the observational law is the Borel pushforward under $T$. [given, F1, F8, construct]

2.1 Start from step 1.1 and change one coordinate at a time in topological order. With earlier endogenous coordinates fixed, $x_{v_r}=n_{v_r}+f_{v_r}(x_{\operatorname{pa}(v_r)})$ is a fixed translation. Translation invariance changes its density factor to $q_{v_r}(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)}))$. Every intermediate integrand for a nonnegative Borel test function is product-measurable by [F7, F8], so Tonelli justifies the successive one-dimensional substitutions. The resulting identity $\mathbb E[h(X)]=\int h(x)p_X(x)\,d\rho(x)$ for every nonnegative Borel $h$ proves the density assertion on Borel sets. The product is Borel and strictly positive. No choice principle was used in this case. [step 1.1, step 1.2, F1, F5, F6, F7, F8, construct]

3.1 Now assume Countable Choice and allow arbitrary Lebesgue-measurable $q_j$. By [F9] choose Borel representatives, replace their values outside $(0,\infty)$ by $1$, and call the resulting functions $\bar q_j$. Since each original density is positive and finite almost everywhere, this changes it only on a null set and preserves its integral and noise law. Choose a Borel null hull $Z_j$ of $\{q_j\ne\bar q_j\}$. These are only finitely many applications of [F9]. Step 2.1 applied to $\bar q_j$ gives the positive Borel density $\bar p_X$ relative to $\rho$. [given, F1, F9, step 2.1, choose, construct]

4.1 For each $j$, let $E_j=\{x:x_j-f_j(x_{\operatorname{pa}(j)})\in Z_j\}$. It is Borel by [F8]. With all coordinates except $x_j$ fixed, its $x_j$-section is a translate of $Z_j$ and has measure zero by [F6]; for $p>1$, Tonelli gives $\rho(E_j)=0$, and for $p=1$ this follows directly from translation invariance. Off the finite union $E=\bigcup_jE_j$, the products $p_X$ and $\bar p_X$ agree. Completeness [F10] therefore makes $p_X$ measurable for $\bar\rho$, with the same integral on every completed measurable set as $\bar p_X$. Every original factor is positive, proving strict positivity as well. [F5, F6, F8, F10, step 3.1, construct]

5.1 In the Countable Choice case, the density measures in steps 2.1 and 4.1 extend the Borel observational law. To see uniqueness among absolutely continuous extensions, first note that every product-measurable set differs from a Borel set by a subset of a Borel $\rho$-null set: the sets with this property form a sigma-algebra under Countable Choice and contain every Lebesgue rectangle by [F9]; Borel null coordinate slabs have product measure zero by Tonelli. A product-null set has a Borel null hull by the same representation, so every $\bar\rho$-measurable set has such a representation too. Any absolutely continuous extension assigns zero to the exceptional set and is determined by the Borel core. Thus the stated extensions and both density conclusions hold. [F4, F5, F9, F10, step 2.1, step 4.1] ∎

## References

[Peters et al., JMLR (2014), equation (6) and §3](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Tao, An Introduction to Measure Theory, Theorem 1.7.18](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf)
