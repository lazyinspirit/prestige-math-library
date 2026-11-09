---
title: Negative coefficients of the actual EM projective-line model
status: published
research_item: lem-adjudicate-a8be8a17c858-negative-model-coefficients
dependency_level: 16
---

## Prerequisites

- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input)
- [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds. Let $S$ be a qcqs scheme over a field, and let $\mathcal E_S$ be the actual non-$\mathbb A^1$ EM projective-line spectrum in the supplied model. For every smooth qcqs $S$-scheme $Y$, every integer $a$ and every integer $b<0$, its actual coefficient group is zero:
$$\mathcal E_S^{a,b}(Y)=0.$$
Here the bidegree convention is $\mathcal E_S^{a,b}(Y)=\pi_{2b-a}\operatorname{Map}_{\mathrm{Sp}_{\mathbb P^1}(\mathrm{Sp})}(\Sigma^\infty_{\mathbb P^1}Y_+,\Sigma_{\mathbb P^1}^{b}\mathcal E_S)$, using the spectrum-valued coefficient stabilization. The pointed projective line uses its infinity section. This asserts vanishing for the represented model itself, rather than merely assigning the symbol for a negative motivic complex the value zero.

## Facts & Assumptions

**Given:** $S,Y,a,b$, Choice and size bounds as stated.

**Goal:** Compute the negative twists of the actual coefficient model at level zero.

[F1] [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) constructs an actual coefficient-valued $\Omega$-$\mathbb P^1$ spectrum whose nonnegative levels are $A_n=\mathbb Z(n)_{\mathrm{mot}}[2n]$. Its multiplication and restrictions are those of the actual EM complexes.

[F2] The actual projective-line formula of [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input) at weight zero says that pullback $A_0(Y)\to A_0(\mathbb P^1_Y)$ is an equivalence. Its composite with restriction to infinity is identity. This is an assertion about the actual nonnegative level $A_0$, not about an unspecified negative level.

[F3] [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input) gives the shift/evaluation rule for $\Omega$-$\mathbb P^1$ spectra and their spectrum-valued coefficient stabilization. Evaluation of $\Sigma_{\mathbb P^1}^{-m}\mathcal E_S$ at level zero is $\Omega_{\mathbb P^1}^{m}A_0$ for $m\geq1$. On coefficient sheaves, $(\Omega_{\mathbb P^1}A)(Y)=\operatorname{fib}(A(\mathbb P^1_Y)\to A(Y))$, with the arrow induced by infinity. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) states the inherited Choice assumption.

## Proof

1.1 By [F2], restriction $A_0(\mathbb P^1_Y)\to A_0(Y)$ is inverse to the displayed pullback equivalence. Its fiber is therefore contractible. This is natural for every $Y$ in the smooth qcqs site, so $\Omega_{\mathbb P^1}A_0=0$ as an actual sheaf of spectra. [F1, F2, F3, given]

2.1 Write $b=-m$ with $m\geq1$. By the shift/evaluation rule in [F3], the zeroth coefficient sheaf of $\Sigma_{\mathbb P^1}^{b}\mathcal E_S$ is $\Omega_{\mathbb P^1}^{m}A_0$. Iterating the reduced-loop functor on the zero sheaf in step 1.1 gives zero for this sheaf. This uses the actual negative twists of the constructed spectrum. [F1, F3, step 1.1]

3.1 The suspension/evaluation adjunction identifies the mapping spectrum from $\Sigma^\infty_{\mathbb P^1}Y_+$ to that twist with the evaluation of its zeroth coefficient sheaf on $Y$, which is zero by step 2.1. All of its homotopy groups vanish, in particular degree $2b-a$ for every $a$. This proves the assertion without any dimension or Noetherian hypothesis on $S$. [F3, step 2.1] ∎
