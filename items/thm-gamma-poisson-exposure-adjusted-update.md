---
id: thm-gamma-poisson-exposure-adjusted-update
kind: theorem
title: "Exposure-adjusted Gamma-Poisson conjugate update"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-gamma-distribution-shape-rate
  - lem-gamma-density-normalization
  - def-poisson-law
  - def-countable-choice
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-real-power-continuity-and-derivatives
  - thm-derivative-of-exponential
  - thm-algebra-of-continuous-functions
  - thm-continuous-preimages-of-borel-sets-are-borel
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through Gamma density normalization. No stronger choice principle is used."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §§2.1, 2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §5.2.2"
      url: "https://www.bayesrulesbook.com/chapter-5"
---

## Statement

Assume Countable Choice. Let $n\in\mathbb N_0$, $a,b>0$, and
$\lambda\sim\operatorname{Gamma}(a,b)$ in shape-rate convention. Conditional
on $\lambda$, let $Y_1,\ldots,Y_n$ be independent with
$Y_i\sim\operatorname{Pois}(e_i\lambda)$ for $i=1,\ldots,n$, where each fixed
exposure $e_i\ge0$.
The data space $\mathbb N_0^n$ has counting measure. If some $e_i=0$ but
$y_i>0$, the likelihood and evidence are zero and no posterior quotient is
defined. Otherwise put $E=\sum_i e_i$, $S=\sum_i y_i$, and
$$c(\mathbf e,\mathbf y)=\prod_{i:e_i>0}\frac{e_i^{y_i}}{y_i!},$$
with the empty product one. Then
$$m(\mathbf y)=c(\mathbf e,\mathbf y)\, \frac{b^a\Gamma(a+S)}{\Gamma(a)(b+E)^{a+S}}\in(0,\infty),$$
and the posterior is $\operatorname{Gamma}(a+S,b+E)$. This includes all-zero
exposures with zero counts, for which the posterior equals the prior.

## Facts & Assumptions

**Given:** Countable Choice, $n\in\mathbb N_0$, $a,b>0$, finite nonnegative
exposures, and a finite count vector $\mathbf y\in\mathbb N_0^n$.

[A1] Countable Choice is used by the Gamma density normalization supplier. [[def-countable-choice]].

[F1] The shape-rate Gamma density is $b^a\lambda^{a-1}e^{-b\lambda}/\Gamma(a)$ and is normalized for $a,b>0$. [[def-gamma-distribution-shape-rate]].

[F2] A zero exposure gives a point mass at zero; for positive exposure the Poisson mass is $e^{-e\lambda}(e\lambda)^y/y!$. [[def-poisson-law]].

[F3] The Gamma kernel has finite positive Lebesgue integral, and its normalized shape-rate density integrates to one. [[lem-gamma-density-normalization]].

[F4] The specified proper prior and parameter-measurable sampling probability kernel form a Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]].

[F5] Evidence is the prior integral of the likelihood section, and a quotient is defined only for finite positive evidence. [[def-posterior-evidence-normalizer-and-fiberwise-update]].

[F6] Probability normalization of the likelihood-weighted prior is equivalent to finite positive evidence. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

[F7] The dominated Bayes formula identifies the normalized density quotient as a posterior kernel. [[thm-bayes-formula-for-dominated-kernels]].

[F8] For fixed $e>0$ and $y\in\mathbb N_0$, the factors $e^{-e\lambda}$
and $(e\lambda)^y$ are continuous in $\lambda>0$; at $e=0$ the count mass is
constant in $\lambda$. Finite sums, scalar multiples and increasing limits of
measurable functions remain measurable. [[thm-real-power-continuity-and-derivatives]]
[[thm-derivative-of-exponential]] [[thm-algebra-of-continuous-functions]]
[[prop-closure-properties-of-measurable-functions-used-by-the-integral]].

[F9] Continuous maps have Borel preimages of Borel sets, and the finite product
data space has its product sigma-algebra. [[thm-continuous-preimages-of-borel-sets-are-borel]]
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]].

## Proof

**Given:** Countable Choice, the hypotheses in the Statement and observed $\mathbf y$.

1.1 For fixed $e>0$ and $y\in\mathbb N_0$, the mass $q_{e,y}(\lambda)=e^{-e\lambda}(e\lambda)^y/y!$ is continuous on $(0,\infty)$ by [F8]; for $e=0$ it is the constant $1_{\{y=0\}}$, also continuous. Conditional independence gives the data mass $\ell(\lambda,\mathbf y)=\prod_i q_{e_i,y_i}(\lambda)$, continuous in $\lambda$ for each fixed $\mathbf y$ (and equal to $1$ for the empty sample), hence Borel by [F9]. The count space is a countable union of the finite boxes $\{0,\ldots,m\}^n$ and has its discrete sigma-algebra, so $\ell$ is jointly measurable on $(0,\infty)\times\mathbb N_0^n$: for each Borel $C\subseteq[0,\infty]$, its inverse image is the countable union over $\mathbf y$ of the Borel section $\{\lambda:\ell(\lambda,\mathbf y)\in C\}\times\{\mathbf y\}$. For any data event $D\subseteq\mathbb N_0^n$, its probability under parameter $\lambda$ is $K(\lambda,D)=\sum_{\mathbf y\in D}\ell(\lambda,\mathbf y)$; the sums over $D\cap\{0,\ldots,m\}^n$ are finite and increase to this value, so $K(\cdot,D)$ is measurable by [F8]. For each $\lambda$, conditional independence and the normalized marginal Poisson laws [F2] make $K(\lambda,\cdot)$ a probability measure; the empty sample gives the point mass on its singleton data space. Thus $K$ is a probability kernel and $\ell$ is the jointly measurable density required by [F7]. If some $e_i=0$ and $y_i>0$, [F2] makes the likelihood factor zero and its evidence zero by [F5]. Otherwise $y_i=0$ whenever $e_i=0$, and multiplying the mass factors in [F2] gives $L_{\mathbf y}(\lambda)=c(\mathbf e,\mathbf y)\lambda^S e^{-E\lambda}$. The constant $c$ is finite and positive, including when there are no positive exposures; the prior [F1] and kernel $K$ give the Bayesian model [F4]. [A1, F1, F2, F4, F5, F7, F8, F9, given, cases]

2.1 Multiply the likelihood from step 1.1 by the prior density [F1]. The parameter-dependent part is $c(\mathbf e,\mathbf y)\frac{b^a}{\Gamma(a)} \lambda^{a+S-1}e^{-(b+E)\lambda}.$ Because $a+S>0$ and $b+E>0$, integrating this expression and applying [F3] with shape $a+S$ and rate $b+E$ yields the displayed evidence. Every factor is finite and strictly positive. [A1, F1, F3, step 1.1, algebra]

3.1 Dividing by that evidence leaves $(b+E)^{a+S}\lambda^{a+S-1}e^{-(b+E)\lambda}/\Gamma(a+S),$ the normalized Gamma$(a+S,b+E)$ density by [F3]. Its evidence is finite positive, so [F5] and [F6] permit the update and [F7] identifies it as the posterior kernel. When all exposures and counts vanish, $S=E=0$ and the formula is the original prior density. [A1, F1, F3, F5, F6, F7, step 2.1, cases] ∎
