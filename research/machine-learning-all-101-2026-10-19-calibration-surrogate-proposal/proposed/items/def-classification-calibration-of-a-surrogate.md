---
id: def-classification-calibration-of-a-surrogate
kind: definition
title: "Binary surrogate classification risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-loss-function-and-risk
  - lem-finite-label-conditional-probability-function
  - def-measurable-function-between-measurable-spaces
  - cor-convex-functions-on-open-convex-sets-are-continuous
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 4, Section 4.7, printed pp. 75–77 (PDF pp. 92–94)"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Let $Y\in\{-1,+1\}$ be the label in a supervised prediction problem with the full power-set sigma-algebra on this binary label set, and choose the finite-label conditional probability function ordered as $(-1,+1)$; write $\eta(x)=\eta_{+1}(x)$. Let $\Phi:\mathbb R\to[0,\infty)$ be finite, convex and nondecreasing. It is continuous on $\mathbb R$; extend it to $\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}$ by its one-sided monotone limits, which may equal $+\infty$. The resulting extended function is Borel measurable. For $u\in\overline{\mathbb R}$ define the conditional margin risk
$$L_\Phi(x,u)=\eta(x)\Phi(-u)+(1-\eta(x))\Phi(u),$$
using $0\cdot(+\infty)=0$ at endpoints. A measurable extended-real conditional minimizer is a measurable $h_\Phi^*:\mathsf X\to\overline{\mathbb R}$ satisfying $L_\Phi(x,h_\Phi^*(x))\le L_\Phi(x,u)$ for every $x$ and every $u\in\overline{\mathbb R}$. For a measurable real-valued score $h$, its margin loss is $\ell_\Phi(h(x),y)=\Phi(-yh(x))$, its surrogate risk is $L_\Phi(h)=\mathbb E[\Phi(-Yh(X))]$, and its conditional-minimum risk is $L_\Phi^*=\mathbb E[L_\Phi(X,h_\Phi^*(X))]$. Under the zero-score-is-error convention, its classification risk is $R_{01}(h)=P(Yh(X)\le0)$, and the Bayes classification risk is $R_{01}^*=\mathbb E[\min\{\eta(X),1-\eta(X)\}]$. Write $h^*(x)=\eta(x)-\tfrac12$ for the centered conditional class probability.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable instance and label spaces and joint law.

[[lem-finite-label-conditional-probability-function]]: the chosen $\eta$ is a measurable version whose event integrals give the conditional label probabilities.

[[def-population-and-empirical-risk]]: population risk is an extended nonnegative integral of the loss under the joint law.

[[def-loss-function-and-risk]]: fixes the loss and risk conventions used for the margin loss.

[[def-measurable-function-between-measurable-spaces]]: a function is measurable when preimages of measurable sets are measurable.

[[cor-convex-functions-on-open-convex-sets-are-continuous]]: every finite convex function on the open convex set $\mathbb R$ is continuous.
