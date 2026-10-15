---
id: def-type-ii-marginal-likelihood-and-empirical-bayes-posterior
kind: definition
title: "Type-II maximum marginal likelihood and empirical-Bayes plug-in posterior"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-hierarchical-bayesian-model
  - def-measure-kernel-and-probability-kernel
  - def-marginal-likelihood-and-bayes-factor
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
justified_by: []
proof_strategy: definition
axiom_use: "No new axiom is asserted. The referenced hierarchical posterior theorem carries only its stated hypotheses."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §§5.1, 5.3–5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §§5.1, 5.3–5.4, printed pp. 102–118: estimating prior hyperparameters, the joint hyperposterior, integrating over hyperparameter uncertainty, and the point-estimate plug-in comparison."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16, §§16.3–16.4"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Full official chapter inspected, §§16.3–16.4: the within-group, between-group, and global-prior layers and posterior distributions for group and global parameters."
---

## Definition

Assume a finite-group hierarchy as in
[[def-hierarchical-bayesian-model]], with hyperparameter $\eta\in H$, group
parameters $\theta_1,\ldots,\theta_m$, conditional probability kernel
$G_\eta$ ([[def-measure-kernel-and-probability-kernel]]) on the group-parameter
space, and specified jointly measurable
likelihood density
$$L_y(\theta_{1:m})=\prod_{j=1}^m f_j(\theta_j,y_j)$$
against the common product data measure. For fixed $\eta$, define its
**marginal likelihood**
$$m(y\mid\eta):=\int_{\Theta^m}L_y(\theta_{1:m})\,G_\eta^{\otimes m}(d\theta_{1:m})\in[0,\infty].$$
Where the function $\eta\mapsto m(y\mid\eta)$ is finite-valued and attains a
positive finite maximum, a **Type-II maximum marginal likelihood choice** is
any
$$\widehat\eta(y)\in\operatorname*{arg\,max}_{\eta\in H}m(y\mid\eta).$$
This definition does not assert that a maximum exists. A data-indexed choice
requires a selected measurable maximizer on its domain.

Only when $0<m(y\mid\widehat\eta(y))<\infty$ define the corresponding
**empirical-Bayes plug-in posterior** on a measurable
$A\subseteq\Theta^m$ by
$$\Pi_{\widehat\eta(y),y}(A):=\frac{\int_A L_y(\theta_{1:m})\,G_{\widehat\eta(y)}^{\otimes m}(d\theta_{1:m})}{m(y\mid\widehat\eta(y))}.$$
The finite-positive condition makes this a probability update by
[[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

Under a proper hyperprior $H_0$, at a data fiber with finite positive joint evidence
$0<Z(y):=\int_Hm(y\mid\eta)H_0(d\eta)<\infty$, full Bayes instead retains the posterior law of
$\eta$ jointly with the group parameters, as in
[[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]].
Integrating over a shared uncertain hyperparameter can induce dependence
between group parameters, while a plug-in update fixes that hyperparameter at
one selected value; special cases can leave the groups independent. This
definition asserts no generic empirical-Bayes risk, consistency, dominance,
or credible-coverage guarantee.
