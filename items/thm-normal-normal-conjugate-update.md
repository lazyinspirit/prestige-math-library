---
id: thm-normal-normal-conjugate-update
kind: theorem
title: "Known-variance Normal-Normal conjugate update"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - lem-normal-location-scale-density
  - def-axiom-of-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-countable-choice
  - thm-of-square-roots
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - def-measure-kernel-and-probability-kernel
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-derivative-of-exponential
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-independent-random-elements-have-product-joint-law
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-measurability-of-integration-against-a-kernel
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the Gaussian-density and Lebesgue product-measure suppliers; no stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §§5.3.1–5.3.4"
      url: "https://www.bayesrulesbook.com/chapter-5"
---

## Statement

Assume AC. Let $\mu\sim N(\mu_0,\tau_0^2)$ with $\tau_0^2>0$, and, conditional
on $\mu$, let $Y_1,\ldots,Y_n$ be IID $N(\mu,\sigma^2)$ with known
$\sigma^2>0$ and $n\ge1$. The sampling data use the Borel sigma-algebra on
$\mathbb R^n$ with $n$-dimensional Lebesgue measure. For every
$y_{1:n}\in\mathbb R^n$, define
$$V_n=(\tau_0^{-2}+n\sigma^{-2})^{-1},\qquad \mu_n=V_n\left(\frac{\mu_0}{\tau_0^2} +\frac{n\bar y}{\sigma^2}\right),\qquad \bar y=\frac1n\sum_{i=1}^ny_i.$$
The evidence is finite and positive, and the posterior is $N(\mu_n,V_n)$.

## Facts & Assumptions

**Given:** AC, $\mu_0\in\mathbb R$, $\tau_0^2,\sigma^2>0$, $n\ge1$, and observed real data $y_1,\ldots,y_n$.

[A1] The Axiom of Choice is assumed by the Gaussian density normalization supplier. [[def-axiom-of-choice]].

[A2] The Axiom of Choice implies Countable Choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F1] For $m\in\mathbb R$ and scale $s>0$, $N(m,s^2)$ has density $(2\pi s^2)^{-1/2}\exp(-(x-m)^2/(2s^2))$. [[lem-normal-location-scale-density]].

[F2] This normal density integrates to one under AC. [[lem-normal-density-has-total-mass-one]].

[F3] A proper prior probability and parameter-measurable sampling probability kernel constitute a Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]].

[F4] Evidence is the prior integral of the joint likelihood section; the normalized quotient is introduced only on finite positive evidence. [[def-posterior-evidence-normalizer-and-fiberwise-update]].

[F5] The likelihood-weighted prior can be normalized to a probability exactly when evidence is finite and positive. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

[F6] The dominated Bayes formula identifies the normalized density quotient as a posterior kernel. [[thm-bayes-formula-for-dominated-kernels]].

[F7] A probability kernel has probability-measure sections and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]].

[F8] Arithmetic operations preserve measurability, and the exponential is continuous and has Borel preimages of Borel sets. [[thm-arithmetic-and-lattice-operations-preserve-measurability]] [[thm-derivative-of-exponential]] [[thm-continuous-preimages-of-borel-sets-are-borel]].

[F9] A nonnegative measurable density defines a measure; Tonelli factors its nonnegative integral on sigma-finite product spaces. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F10] Under Countable Choice, $\lambda_n$ is sigma-finite and agrees on Borel sets with the product of $n$ one-dimensional Lebesgue measures. [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]].

[F11] Independent random elements have their product law, and probability measures agreeing on a generating pi-system with a finite exhaustion agree everywhere. [[thm-independent-random-elements-have-product-joint-law]] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

[F12] Product-coordinate maps are measurable on Euclidean Borel products, and integration of a nonnegative product-measurable function against a constant uniformly sigma-finite measure kernel is measurable in its parameter. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] [[thm-measurability-of-integration-against-a-kernel]].

[F13] Every positive variance has a positive square root. [[thm-of-square-roots]].

## Proof

**Given:** The hypotheses in the Statement and observed data $y_{1:n}$.

1.1 Let $\ell(\mu,y_{1:n})=\prod_{i=1}^n(2\pi\sigma^2)^{-1/2}\exp(-(y_i-\mu)^2/(2\sigma^2))$. The coordinate maps on the parameter-data product are measurable by [F12], so [F8] makes $\ell$ product-measurable. For each fixed $\mu$, [F10] and Tonelli [F9] show that $\ell(\mu,\cdot)$ integrates to one. On every product rectangle, the density measure $\ell(\mu,\cdot)\,d\lambda_n$ has the product of the $N(\mu,\sigma^2)$ marginal probabilities by [F9] and [F10]; conditional independence gives the same rectangle values, so [F11] identifies it with the conditional sample law. Define $K(\mu,D)=\int_D\ell(\mu,y)\,d\lambda_n(y)$ for Borel $D$. By [F9] each section is a probability measure. The constant $\lambda_n$ kernel has the finite exhaustion $(-j,j]^n$ by [F10]; since $\ell(\mu,y)\mathbf1_D(y)$ is product-measurable, [F12] makes $\mu\mapsto K(\mu,D)$ measurable. Thus [F7] makes $K$ a probability kernel, and with the proper normal prior it gives the Bayesian model in [F3]. Now put $P=\tau_0^{-2}+n\sigma^{-2}>0$, $q=\mu_0\tau_0^{-2}+\sigma^{-2}\sum_i y_i$, and $r=\mu_0^2\tau_0^{-2}+\sigma^{-2}\sum_i y_i^2$. By [F1] at positive scales $\sqrt{\tau_0^2}$ and $\sqrt{\sigma^2}$, whose existence is [F13], the product of the prior and sample densities is $C\exp\{-\tfrac12(P\mu^2-2q\mu+r)\},\qquad C=(2\pi\tau_0^2)^{-1/2}(2\pi\sigma^2)^{-n/2}>0.$ [A1, A2, F1, F2, F3, F7, F8, F9, F10, F11, F12, F13, given, algebra]

2.1 Completing the square gives $P\mu^2-2q\mu+r=P(\mu-q/P)^2+\Delta$, where $\Delta=r-q^2/P\ge0$ because the left side is a sum of nonnegative weighted squares and at $\mu=q/P$ equals $\Delta$. Hence the evidence is $C e^{-\Delta/2}\sqrt{2\pi/P}.$ It is finite and strictly positive; the Gaussian integral follows by scaling the normalized density in [F1]–[F2] at scale $\sqrt{1/P}$, which exists by [F13]. [A1, F1, F2, F13, step 1.1, algebra]

3.1 Dividing the likelihood times prior in step 1.1 by the evidence computed in the preceding step gives the density $\sqrt{P/(2\pi)}\exp\{-P(\mu-q/P)^2/2\},$ which is $N(q/P,1/P)$ by [F1] at scale $\sqrt{1/P}$ from [F13]. Since $1/P=V_n$ and $q/P=\mu_n$, this is the stated posterior. Finite-positive evidence is the valid domain by [F4] and [F5], and [F6] supplies the posterior-kernel identity; [F2] normalizes the resulting Gaussian density. [A1, F1, F2, F4, F5, F6, F13, step 2.1, algebra] ∎
