---
id: def-ip-expected-information-gain
kind: definition
title: Expected information gain
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - thm-kullback-leibler-is-nonnegative
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
forward_refs: []
axiom_use: >-
  AC is inherited only through the library's general Radon–Nikodym-based
  Kullback–Leibler divergence convention. The explicit dominated densities and
  the extended nonnegative integral add no stronger choice principle.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, equation (3): expected posterior-to-prior Kullback–Leibler distance as a design utility."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§2, complete expected-information derivation under the model's prior-predictive distribution."
---

## Definition

Assume the Axiom of Choice for the library's Kullback–Leibler divergence convention. For a design $d$ in a design-indexed dominated inverse experiment, let $G_d=\{y:0<p_d(y)<\infty\}$ be its positive finite evidence fibers. The **expected information gain** is
$$\operatorname{EIG}(d):=\int_{G_d}D(\mu_d^y\|\mu_0)\,p_d(y)\,\nu(dy)\in[0,+\infty],$$
where the integrand is defined to be zero outside $G_d$. Here $D(P\|Q)$ is the directional Kullback–Leibler divergence of probability measures, with natural logarithms.

This integrand is measurable. Tonelli's theorem makes $p_d$ measurable, so $G_d$ is measurable. On $G_d$, the likelihood ratio $r_d(\theta,y)=p_d(y\mid\theta)/p_d(y)$ is the $\mu_0$-density of $\mu_d^y$. Set $r_d=0$ off $G_d$ and wherever $p_d(y\mid\theta)=+\infty$; the latter set is $\mu_0$-null on each $y\in G_d$ because its integral is the finite value $p_d(y)$. Thus $r_d$ is a finite-valued product-measurable function. With $\psi(0)=0$ and $\psi(t)=t\log t$ for $t>0$, the KL definition gives $D(\mu_d^y\|\mu_0)=\int\psi(r_d(\theta,y))\,\mu_0(d\theta)$. Tonelli makes the section integrals of $\psi(r_d)^+$ and $\psi(r_d)^-$ measurable; the negative integral is finite by the KL definition. Their difference is therefore measurable and extended-valued, and KL nonnegativity makes it $[0,+\infty]$-valued. Setting it to zero off $G_d$ preserves measurability, so the displayed EIG integral is well-defined.

## Definition references

[[def-ip-design-indexed-inverse-experiment|The predictive density and posterior probability measure on positive finite evidence fibers.]]

[[def-kullback-leibler-divergence|The directional relative entropy is an extended integral with a finite negative part.]]

[[def-axiom-of-choice|The general Radon–Nikodym convention used by the library KL definition assumes AC.]]

[[thm-kullback-leibler-is-nonnegative|KL divergence between probability measures is nonnegative.]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces|Tonelli makes the predictive density and the posterior KL integrand's section integrals measurable.]]

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §2](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

## Remarks

The value $+\infty$ is permitted. Before finite numerical optimization, either use the extended objective without subtracting entropies or impose and verify integrability for every design being compared. In particular, do not form a difference of two infinite prior and posterior entropies.

## Remarks references

[[def-kullback-leibler-divergence|The library KL definition controls the negative part and defines its extended integral without an $\infty-\infty$ ambiguity.]]
