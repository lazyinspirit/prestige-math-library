---
id: def-marginal-likelihood-and-bayes-factor
kind: definition
title: "Marginal likelihoods, proper model evidence, and Bayes factors"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - def-probability-measure
  - def-statistical-experiment
justified_by: []
proof_strategy: definition
axiom_use: "None beyond the axioms already declared by the cited measure and density interfaces."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §7.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 7, §7.4, printed pp. 182–184: model-specific marginal densities, posterior model odds, and Bayes factors."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8, §§8.2.1–8.2.2"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
      locator: "Full official chapter inspected, lines 145–188: Bayes factors as posterior odds divided by prior odds and the zero-mass issue for a point null under a continuous parameter."
---

## Definition

Let $I=\{1,\ldots,N\}$ with $N\ge2$ be a finite model index set. For each
$i\in I$, let $(\Theta_i,\mathcal T_i)$ be a measurable parameter space, let
$\Pi_i$ be a probability measure ([[def-probability-measure]]) on it, and let
$Q_i$ be a sampling kernel for a statistical experiment
([[def-statistical-experiment]]) on one common data space
$(\mathcal Y,\mathcal A)$. Assume the experiments are dominated
([[def-dominated-statistical-experiment]]) by the same supplied sigma-finite
measure $\mu$. Fix a specified likelihood density
([[def-likelihood-density]])
$f_i:\Theta_i\times\mathcal Y\to[0,\infty]$ such that
$$Q_i(\theta,B)=\int_B f_i(\theta,y)\,\mu(dy)\qquad(B\in\mathcal A).$$
Require that each $f_i$ is jointly measurable in parameter and data; separate
likelihood versions do not imply this joint measurability. Assign prior model
weights $w_i>0$ with $\sum_iw_i=1$. The **marginal likelihood**, or **model
evidence**, at $y$ is the possibly extended value
$$m_i(y):=\int_{\Theta_i} f_i(\theta,y)\,\Pi_i(d\theta)\in[0,\infty].$$
This is the BCS-02 evidence normalizer
([[def-posterior-evidence-normalizer-and-fiberwise-update]]) specialized to a
proper model prior, and is the prior-predictive density relative to the
specified common data measure. For models $i,j$ whose evidences at $y$ are both finite and positive,
the **Bayes factor for $j$ against $i$** is
$$BF_{ji}(y):=\frac{m_j(y)}{m_i(y)}.$$
The corresponding prior model odds are $w_j/w_i$. No Bayes factor is defined
here using an arbitrarily scaled improper parameter prior.

## Remarks

A Bayes factor is an odds multiplier. This page supplies no universal cutoff
that converts its numerical magnitude into a binary decision about which
model is true.
