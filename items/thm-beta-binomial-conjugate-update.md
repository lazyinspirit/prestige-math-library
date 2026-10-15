---
id: thm-beta-binomial-conjugate-update
kind: theorem
title: "Beta-Binomial conjugate update"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-beta-distribution
  - lem-beta-density-normalization
  - lem-binomial-count-law
  - def-countable-choice
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
proof_strategy: direct
axiom_use: "The update algebra is choice-free. Beta normalization inherits Countable Choice from [[lem-beta-density-normalization]]."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 3, §3.1"
      url: "https://www.bayesrulesbook.com/chapter-3"
---

## Statement

Assume Countable Choice. Let $P\sim\operatorname{Beta}(\alpha,\beta)$ with $\alpha,\beta>0$, and,
conditional on $P=p$, let $Y$ have the Binomial$(n,p)$ law for
$n\in\mathbb N_0$. The data space $\{0,\ldots,n\}$ is equipped with finite
counting measure. For every observed $y\in\{0,\ldots,n\}$, the evidence is
$$m(y)=\binom ny\frac{B(\alpha+y,\beta+n-y)}{B(\alpha,\beta)} \in(0,\infty),$$
and the posterior is $\operatorname{Beta}(\alpha+y,\beta+n-y)$. The endpoints
$y=0$ and $y=n$ are included; all posterior shape parameters remain positive.

## Facts & Assumptions

**Given:** Countable Choice, positive $\alpha,\beta$, integer $n\ge0$, and observed
$y\in\{0,\ldots,n\}$.

[A1] Countable Choice is used by the Beta density normalization supplier. [[def-countable-choice]].

[F1] The Beta prior has density $p^{\alpha-1}(1-p)^{\beta-1}/B(\alpha,\beta)$ on $(0,1)$. [[def-beta-distribution]].

[F2] The Binomial$(n,p)$ mass at $y$ is $\binom ny p^y(1-p)^{n-y}$. [[lem-binomial-count-law]].

[F3] The integral of the Beta kernel with positive parameters is finite and equals $B$; this value is strictly positive. [[lem-beta-density-normalization]].

[F4] A proper prior paired with a parameter-measurable sampling probability kernel is a Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]].

[F5] The evidence is the prior integral of the specified likelihood section, and the quotient update is formed only on positive finite evidence. [[def-posterior-evidence-normalizer-and-fiberwise-update]].

[F6] A finite-positive evidence is exactly the condition for probability normalization of the likelihood-weighted prior. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

[F7] The normalized likelihood quotient for a jointly measurable dominated model is a posterior kernel on its valid fibers. [[thm-bayes-formula-for-dominated-kernels]].

## Proof

**Given:** Countable Choice, the hypotheses and observed count in the Statement.

1.1 By [F2], the likelihood section is $L_y(p)=\binom ny p^y(1-p)^{n-y}$ and the Binomial law is a probability kernel. Its dependence on $p$ is measurable, and [F1] supplies a proper prior, so [F4] gives the Bayesian model. The finite counting measure on the data space is sigma-finite, and [F5] identifies its evidence as $\int_0^1L_y(p)f_{\alpha,\beta}(p)\,dp$. [A1, F1, F2, F4, F5, given]

2.1 Multiplying the likelihood and prior densities gives $\frac{\binom ny}{B(\alpha,\beta)} p^{\alpha+y-1}(1-p)^{\beta+n-y-1}.$ Both new shapes are positive because $y\ge0$ and $n-y\ge0$. Integrating with [F3] yields the stated evidence, which is finite and strictly positive. [A1, F1, F3, step 1.1, algebra]

3.1 Divide the product density in step 2.1 by its evidence. The coefficient becomes $1/B(\alpha+y,\beta+n-y)$, giving exactly the Beta$(\alpha+y,\beta+n-y)$ density. The evidence is in the valid domain of [F5] and [F6], so [F7] identifies this normalized law as the posterior conditional kernel. At $y=0$ or $y=n$, the unchanged positive shape on one side and the increased positive shape on the other keep the same proof valid. [A1, F1, F5, F6, F7, step 2.1, given, algebra] ∎