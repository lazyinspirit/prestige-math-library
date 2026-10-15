---
id: ex-diffuse-normal-prior-changes-bayes-factor
kind: example
title: "A diffuse normal prior changes the point-null Bayes factor"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-marginal-likelihood-and-bayes-factor
  - lem-normal-location-scale-density
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the library normal-law and density suppliers; the Gaussian integral calculation uses no additional choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §7.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 7, §7.4, printed pp. 183–184: replacing flat priors with proper normal priors makes model comparison sensitive to the prior variance."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8, §8.2.2"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
      locator: "Full official chapter inspected, lines 170–188: exact point hypotheses have zero probability under a purely continuous prior and require a separate model."
---

## Example

Compare $M_0:\theta=0$ with $M_1:\theta\sim N(0,\tau^2)$ and
$Y\mid\theta\sim N(\theta,\sigma^2)$, where $\tau^2,\sigma^2>0$. At the fixed
observation $y=0$, the Bayes factor for the alternative against the point null
depends on the spread $\tau^2$ of the proper alternative prior and tends to
zero as that prior becomes diffuse.

## Facts & Assumptions

**Given:** The two-model normal comparison in the Example and the observation
$y=0$.

[A1] AC is assumed for the library normal-law convention.
[[def-axiom-of-choice]]

[F1] A proper model evidence is the integral of the specified likelihood
density against its proper parameter prior; a Bayes factor is the ratio of
two finite positive evidences. [[def-marginal-likelihood-and-bayes-factor]]

[F2] For $m\in\mathbb R$ and $s>0$, $N(m,s^2)$ has Lebesgue density
$(2\pi s^2)^{-1/2}\exp(-(x-m)^2/(2s^2))$.
[[lem-normal-location-scale-density]]

## Verification

**Given:** The proper priors, normal likelihoods, and observation in the Example.

1.1 By [F2], $m_0(0)=(2\pi\sigma^2)^{-1/2}$. The alternative evidence is $m_1(0)=\int_{\mathbb R}\frac{e^{-\theta^2/(2\tau^2)}}{\sqrt{2\pi\tau^2}}\,\frac{e^{-\theta^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}\,d\theta$. The exponent coefficient is $(\tau^2+\sigma^2)/(2\tau^2\sigma^2)$; substituting $z=\theta\sqrt{(\tau^2+\sigma^2)/(\tau^2\sigma^2)}$ and using the standard normal integral gives $m_1(0)=(2\pi(\tau^2+\sigma^2))^{-1/2}$. Both evidences are finite and positive. [A1, F1, F2, given, algebra]

2.1 By [F1], the alternative-to-null Bayes factor is $BF_{10}(0)=m_1(0)/m_0(0)=\sqrt{\sigma^2/(\sigma^2+\tau^2)}$. As $\tau^2\to\infty$ with $\sigma^2$ fixed, this tends to zero. Therefore the evidence ratio changes with the proper alternative prior's spread even though the observed datum and point-null model remain fixed. [F1, step 1.1, algebra] ∎
