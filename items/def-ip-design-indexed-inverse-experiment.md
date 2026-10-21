---
id: def-ip-design-indexed-inverse-experiment
kind: definition
title: Design-indexed dominated inverse experiment
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-measurable-space
  - def-finite-cardinality
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-finite-sigma-finite-and-semifinite-measures
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - thm-bayes-formula-for-dominated-kernels
  - def-bayesian-posterior-as-regular-conditional-law
justified_by: []
forward_refs: []
axiom_use: >-
  No choice axiom is used to specify the prior, dominated probability kernels,
  predictive densities, or positive-finite-evidence posterior fibers. The
  supplied dominated-kernel Bayes formula is choice-free.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§1.2, equations (1)–(2): expected utility under the prior-predictive distribution."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§2: expected information criteria for a Bayesian model and the model-correctness qualification."
---

## Definition

Let $D$ be a finite set of design indices, let $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ be measurable spaces, let $\mu_0$ be a probability measure on $(\Theta,\mathcal T)$, and let $\nu$ be a sigma-finite measure on $(\mathsf Y,\mathcal Y)$. For each $d\in D$, let $Q_d$ be a probability kernel from $\Theta$ to $\mathsf Y$ with a specified nonnegative jointly measurable density $p_d(y\mid\theta)$ relative to $\nu$, so
$$Q_d(\theta,B)=\int_B p_d(y\mid\theta)\,\nu(dy)\qquad(\theta\in\Theta,\ B\in\mathcal Y).$$
Define the prior-predictive density $p_d(y)=\int_\Theta p_d(y\mid\theta)\,\mu_0(d\theta)$. For each datum $y$ with $0<p_d(y)<\infty$, define the posterior probability measure
$$\mu_d^y(A)=\frac{\int_A p_d(y\mid\theta)\,\mu_0(d\theta)}{p_d(y)}\qquad(A\in\mathcal T).$$
The dominated-kernel Bayes formula makes $p_d\,d\nu$ the observation law and identifies $\mu_d^y$ as a posterior version on these positive finite evidence fibers. No posterior formula is assigned on fibers with zero or infinite evidence; their prior-predictive probability is zero.

## Definition references

[[def-finite-cardinality|A finite set has a finite cardinality.]]

[[def-measurable-space|A measurable space consists of a set and a sigma-algebra.]]

[[def-probability-measure|A probability measure has total mass one.]]

[[def-finite-sigma-finite-and-semifinite-measures|Sigma-finiteness is witnessed by a countable cover with finite measure.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has measurable evaluations and probability-measure rows.]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Joint measurability is with respect to the product sigma-algebra.]]

[[def-measurable-function-between-measurable-spaces|A measurable function has measurable preimages.]]

[[thm-bayes-formula-for-dominated-kernels|A specified dominated sampling density yields the predictive density and the posterior kernel on positive finite evidence fibers.]]

[[def-bayesian-posterior-as-regular-conditional-law|A posterior is a regular conditional law of the parameter given the observations.]]

[Chaloner and Verdinelli, §1.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §2](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)
