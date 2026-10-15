---
id: lem-normal-location-scale-mean-and-variance
kind: lemma
title: "Location-scale normal laws have their stated mean and variance"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-moments-variance-and-covariance
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-change-of-variables-for-expectation
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-dominated-convergence
  - thm-substitution
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the standard normal law and its even-moment supplier; no additional choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A Century of Excellence in Measurements, Standards, and Technology: A Chronicle of Selected NBS/NIST Publications 1901–2000, NIST SP 958, pp. 177–179 (printed pp. 164–166)"
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication958.pdf"
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), §5.3.4"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Statement

Assume AC. For $m\in\mathbb R$, $\sigma\ge0$, and a real random variable
$X$ with law $N(m,\sigma^2)$,
$$E[X]=m,\qquad \operatorname{Var}(X)=\sigma^2.$$

## Facts & Assumptions

**Given:** AC, a standard normal random variable $Z$, and $X$ with law $N(m,\sigma^2)$ for $m\in\mathbb R$ and $\sigma\ge0$.

[A1] AC is required by the standard normal probability-law definition and the Gaussian even-moment supplier. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F1] $N(0,1)$ is the law with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$, and $N(m,\sigma^2)$ is the law of $x\mapsto m+\sigma x$ under $N(0,1)$. [[def-standard-normal-and-normal-laws]]

[F2] For a standard normal $Z$, $E[Z^2]=1$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] Cauchy–Schwarz gives $E|Z|\le (E[Z^2])^{1/2}$, so the standard normal is integrable. [[cor-cauchy-schwarz-for-random-variables]]

[F4] A nonnegative measurable function of a random element has expectation equal to its integral against the law, allowing infinity; the same identity holds for a signed function once its composite is integrable. [[thm-change-of-variables-for-expectation]]

[F5] Expectation is linear, and variance is $E[(X-E[X])^2]$ for square-integrable $X$. [[cor-expectation-linearity-monotonicity-and-modulus-bound]] [[def-moments-variance-and-covariance]]

[F6] A pointwise-convergent sequence dominated by one integrable function has convergent integrals. [[thm-dominated-convergence]]

[F7] The substitution $u=-x$ is valid in the proper integral of the continuous normal density on a compact interval. [[thm-substitution]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], $E[Z^2]=1$. Since $Z$ has a probability law by [F1], $E[1^2]=1$, and Cauchy–Schwarz [F3] gives $E|Z|\le1$; hence $Z$ is integrable. For each integer $n\ge1$, $x\phi(x)$ is odd because $\phi$ is even; [F7] with $u=-x$ therefore gives $E[Z\mathbf 1_{\{|Z|\le n\}}]=\int_{-n}^{n}x\phi(x)\,dx=0$ by [F4]. [A1, F1, F2, F3, F4, F7, algebra]

2.1 As the integer $n\to\infty$, $Z\mathbf 1_{\{|Z|\le n\}}\to Z$ pointwise and $|Z\mathbf 1_{\{|Z|\le n\}}|\le|Z|$, which is integrable by step 1.1. Dominated convergence [F6] gives $E[Z]=0$. [step 1.1, F3, F6]

3.1 Put $W=m+\sigma Z$. Since $W^2\le2m^2+2\sigma^2Z^2$, [F2] gives $E[W^2]<\infty$. The nonnegative clause of [F4] and the common law in [F1] give $E[X^2]=E[W^2]<\infty$; Cauchy–Schwarz [F3] with the constant $1$ then makes both $X$ and $W$ integrable. By [F1] and [F4], $E[X]=E[m+\sigma Z]$. Linearity [F5] and step 2.1 give $E[X]=m+\sigma E[Z]=m$. Applying the same change of variables to $(X-m)^2$ gives $\operatorname{Var}(X)=E[(X-m)^2]=\sigma^2E[Z^2]=\sigma^2$ by [F2] and [F5]. When $\sigma=0$, the affine map is constant and the same equalities give variance zero. [step 2.1, F1, F2, F3, F4, F5, algebra] ∎

## Source notes

The moment calculation is supplied locally from the library's proved Gaussian even-moment result and the normal-law push-forward definition. The cited sources document the scale-as-standard-deviation convention used in the detection-limit model.
