---
id: lem-anm-joint-density
kind: lemma
title: "Positive joint density of a finite additive-noise model"
status: draft
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
proof_strategy: direct
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
$\lambda^{\otimes p}$ for the finite product of one-dimensional Lebesgue
measure. Then the observational law of $X=(X_j)_{j\in V}$ has the strictly
positive density
$$p_X(x)=\prod_{r=1}^p q_{v_r}\!\left(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)})\right)$$
with respect to $\lambda^{\otimes p}$.

## Statement references

[[def-additive-noise-model|Finite continuous additive-noise models]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product reference measure and its rectangle formula]]

## Facts & Assumptions

**Given:** A finite causally sufficient additive-noise model with a specified topological order and positive noise densities.

[F1] In topological order each variable is a measurable function of its parents plus its own noise; the noises are mutually independent and each density $q_j$ is normalized and strictly positive. [[def-additive-noise-model]]

[F2] The joint law of a finite independent family of random elements is the finite product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F3] For a nonnegative measurable density $g$, the measure with density $g$ relative to $\mu$ is $A\mapsto\int_A g\,d\mu$. [[def-measure-with-density]]

[F4] For sigma-finite factors, the product measure exists, has the rectangle product formula, and is unique among measures with that formula. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] Nonnegative product-measurable functions can be integrated by iterated sections in any finite coordinate order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Translation by a fixed real number preserves one-dimensional Lebesgue measure. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F7] Finite sums and pointwise products of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F8] Composition of measurable maps is measurable. [[thm-composition-with-borel-functions-preserves-measurability]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 For each $j$, let $Q_j=q_j\,d\lambda$; [F1, F3] makes $Q_j$ a probability measure. The function $g(n)=\prod_{r=1}^p q_{v_r}(n_{v_r})$ is product-measurable by [F7] and [F8]. Repeated Tonelli [F5] gives $\int g\,d\lambda^{\otimes p}=\prod_j\int q_j\,d\lambda=1$ and, on every measurable rectangle, $\int_{\prod B_j}g\,d\lambda^{\otimes p}=\prod_j Q_j(B_j)$. Thus $g\,d\lambda^{\otimes p}$ and $\bigotimes_j Q_j$ have the same rectangle formula; uniqueness [F4] identifies them. By [F2], this product measure is the joint law of the noise vector. [given, F1, F2, F3, F4, F5, F7, F8]

1.2 Recursion in the stated topological order defines a Borel map $T:\mathbb R^p\to\mathbb R^p$ from the noise vector to $X$: each new coordinate is a Borel function of earlier coordinates and its own noise. The inverse is triangular, $n_j=x_j-f_j(x_{\operatorname{pa}(j)})$, so the law of $X$ is the pushforward of the noise-vector law under $T$. [given, F1, F8, construct]

2.1 Starting with the product noise density from step 1.1, process the coordinates in topological order. At stage $r$, with earlier endogenous coordinates fixed, the next coordinate is $x_{v_r}=n_{v_r}+f_{v_r}(x_{\operatorname{pa}(v_r)})$, a translation by a fixed real number. By [F6], this translation preserves Lebesgue measure and changes its density factor to $q_{v_r}(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)}))$. The shift depends only on earlier coordinates, so this is a sectionwise change in one coordinate; [F5] justifies each iterated integration for every nonnegative Borel test function. Induction over $r=1,\ldots,p$ gives the displayed product density for the pushforward law. [step 1.1, step 1.2, F5, F6, F7, F8, construct]

3.1 Every factor in the displayed density is strictly positive at its real argument by [F1], and a finite product of positive real numbers is positive. This proves strict positivity of the joint density. [given, step 2.1, F1, algebra] ∎
## References

[Peters et al., JMLR (2014), equation (6) and §3](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Tao, An Introduction to Measure Theory, Theorem 1.7.18](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf)
