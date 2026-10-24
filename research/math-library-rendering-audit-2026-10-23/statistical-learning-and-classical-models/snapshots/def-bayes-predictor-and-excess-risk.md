---
id: def-bayes-predictor-and-excess-risk
kind: definition
title: "Bayes predictors and excess risk"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-standard-borel-space
  - def-regular-conditional-distribution
  - def-axiom-of-choice
  - lem-standard-borel-label-kernel-over-arbitrary-instance-space
  - thm-measurability-of-integration-against-a-kernel
  - thm-conditional-bayes-rule-minimizes-population-risk
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §2.4.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Olav Kallenberg, Foundations of Modern Probability, 2nd ed., Theorem 6.3 (conditional distribution)"
      url: "https://djvu.online/file/t4FlvxuKFFZGW"
---

## Definition

Let $\mathcal M$ be the class of all measurable predictors from $\mathsf X$ to $\mathsf A$. The **class Bayes risk** is $R_P^*(\mathcal F):=\inf_{f\in\mathcal F}R_P(f)$, and the **unrestricted Bayes risk** is $R_P^*:=\inf_{g\in\mathcal M}R_P(g)$. A class Bayes predictor is a member of $\mathcal F$ attaining the first infimum; an unrestricted Bayes predictor, also called a Bayes predictor, is a member of $\mathcal M$ attaining the second. No attainment is asserted. If an infimum is $+\infty$, every member of its nonempty class has infinite risk and attains that extended infimum, but no finite excess risk results.

For $f\in\mathcal F$ with both terms finite, its **class excess risk** is $R_P(f)-R_P^*(\mathcal F)$. For a measurable predictor $g\in\mathcal M$ with both terms finite, its **unrestricted excess risk** is $R_P(g)-R_P^*$. These differences are left undefined if either risk is infinite.

Write $P_X(C):=P(C\times\mathsf Y)$ for the instance marginal. If a regular conditional label law $K(x,dy)$ given $x$ is supplied, its **conditional risk** is $q(x,a):=\int_{\mathsf Y}\ell(a,y)K(x,dy)$. This function is measurable when the loss is product-measurable. A **conditional Bayes rule** is a measurable predictor that attains $\inf_{a\in\mathsf A}q(x,a)$ on one measurable set of full $P_X$-measure. Such a kernel exists under AC whenever the label space is standard Borel, even if the instance space is an arbitrary measurable space; if the label space is an arbitrary measurable space, no conditional law or measurable minimizer is asserted. When both instance and label spaces are standard Borel and AC holds, the conditional Bayes theorem shows that any such rule is an unrestricted Bayes predictor.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable instance, label and action spaces, joint law, predictor class and loss.

[[def-population-and-empirical-risk]]: defines $R_P(f)$ as the extended nonnegative population risk.

[[def-standard-borel-space]]: a standard Borel space is measurably isomorphic to a Polish space.

[[def-regular-conditional-distribution]]: a regular conditional distribution is an everywhere probability kernel satisfying the conditional-event integral identities.

[[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

[[lem-standard-borel-label-kernel-over-arbitrary-instance-space]]: under AC, a joint law with standard Borel label space admits an everywhere label-given-instance probability kernel even for an arbitrary measurable instance space.

[[thm-measurability-of-integration-against-a-kernel]]: integration of a nonnegative product-measurable function against a probability kernel is measurable.

[[thm-conditional-bayes-rule-minimizes-population-risk]]: under standard-Borel and AC hypotheses, a measurable conditional minimizer is globally risk-minimizing.

[Kallenberg, *Foundations of Modern Probability*, 2nd ed., Theorem 6.3](https://djvu.online/file/t4FlvxuKFFZGW): a Borel target admits a conditional-distribution kernel from any measurable conditioning space.

