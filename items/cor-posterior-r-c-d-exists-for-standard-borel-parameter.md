---
id: cor-posterior-r-c-d-exists-for-standard-borel-parameter
kind: corollary
title: Posterior RCD exists for a standard-Borel parameter
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-standard-borel-space
  - def-axiom-of-choice
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-prior-and-model-kernel-define-joint-law
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §§1.1–1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2"
      url: https://www.bayesrulesbook.com/chapter-2.html
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let a proper Bayesian model have joint prior-predictive law $J$, and let $(\Omega,\mathcal F,Q)$ be any probability space carrying parameter and data random elements $X,Y$ whose joint law is $J$ ([[def-random-element-and-real-random-variable]], [[def-law-or-distribution-of-a-random-element]]). If $(\Theta,\mathcal T)$ is standard Borel ([[def-standard-borel-space]]), then a posterior RCD of $X$ given $\sigma(Y)$ exists. The data space $(\mathsf Y,\mathcal Y)$ need only be measurable. In particular, the claim applies to the canonical product realization supplied by [[lem-prior-and-model-kernel-define-joint-law]].

## Facts & Assumptions

**Given:** A proper Bayesian model with prior-predictive joint law $J$, a probability space $(\Omega,\mathcal F,Q)$, and random elements $X,Y$ on it with joint law $J$. Assume AC and that $(\Theta,\mathcal T)$ is standard Borel.

[A1] The Axiom of Choice (AC). [[def-axiom-of-choice]]

[F1] A proper prior probability and a parameter-measurable sampling probability kernel define a joint probability $J$ on the product, with $J(A\times B)=\int_AK(\theta,B)\,\Pi(d\theta)$. [[lem-prior-and-model-kernel-define-joint-law]]

[F2] A random element is a measurable map and its law is the pushforward probability on its target. [[def-random-element-and-real-random-variable]], [[def-law-or-distribution-of-a-random-element]]

[F3] A random element into a standard-Borel target has a regular conditional distribution given any sub-sigma-algebra, under AC. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]

[F4] On any probability space carrying $X,Y$ with joint law $J$, a posterior RCD is an RCD of $X$ given $\sigma(Y)$. [[def-bayesian-posterior-as-regular-conditional-law]]

## Proof

**Given:** The model, measurable spaces, and hypotheses in the statement.

1.1 By [F1], the model's prior and sampling kernel define the joint probability $J$ on the canonical product space. The given random elements $X,Y$ have this same joint law, and [F2] supplies the random-element and pushforward-law meanings used for this realization. [given, F1, F2]

2.1 The target $(\Theta,\mathcal T)$ is standard Borel and AC is assumed. Apply [F3] to $(\Omega,\mathcal F,Q)$, the given random element $X$, and the sub-sigma-algebra $\mathcal G=\sigma(Y)$. It gives an RCD of $X$ given $\sigma(Y)$; by [F4] this is the stated posterior RCD. The RCD theorem places no standard-Borel condition on $\mathsf Y$. [given, A1, F3, F4, step 1.1, choose] ∎
