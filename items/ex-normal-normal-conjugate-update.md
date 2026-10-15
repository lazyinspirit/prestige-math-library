---
id: ex-normal-normal-conjugate-update
kind: example
title: "Normal precision pooling with two observations"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-normal-normal-conjugate-update
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from Gaussian density normalization; the finite precision arithmetic adds no further axiom."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §5.3"
      url: "https://www.bayesrulesbook.com/chapter-5"
---

## Statement

Assume AC. Let the prior be $\mu\sim N(0,4)$, and, conditionally on $\mu$,
observe independent $Y_1,Y_2\sim N(\mu,1)$. For data $(y_1,y_2)=(1,3)$, the
evidence is finite and positive and the posterior is $N(16/9,4/9)$.

## Facts & Assumptions

**Given:** AC, the stated Gaussian model, and observed data $(1,3)$.

[A1] The Axiom of Choice is required by the Gaussian density normalization used in the update theorem. [[def-axiom-of-choice]].

[F1] For a proper prior $N(\mu_0,\tau_0^2)$ and $n\ge1$ conditionally IID $N(\mu,\sigma^2)$ data, the evidence is finite positive and the posterior variance and mean are $V_n=(\tau_0^{-2}+n\sigma^{-2})^{-1}$ and $V_n(\mu_0/\tau_0^2+n\bar y/\sigma^2)$. [[thm-normal-normal-conjugate-update]].

## Verification

**Given:** The hypotheses and data in the Statement, with [A1] and [F1].

1.1 The sample mean is $\bar y=(1+3)/2=2$. The prior precision is $1/4$ and the two observations contribute total precision $2/1=2$, so the posterior precision is $9/4$. [given, algebra]

2.1 Thus $V_2=(9/4)^{-1}=4/9$, and the posterior mean is $V_2(0/4+2\cdot2/1)=(4/9)4=16/9$. Applying [F1] gives posterior $N(16/9,4/9)$ and finite positive evidence. [A1, F1, step 1.1, algebra] ∎