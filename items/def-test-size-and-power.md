---
id: def-test-size-and-power
kind: definition
title: "Test size and power"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-statistical-experiment
  - def-randomized-test
  - def-loss-function-and-risk
  - lem-test-zero-one-loss-risk-identities
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-probability-measure
  - def-complete-ordered-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §§13.1.1–13.1.2, PDF pp. 76–77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, USC STAT 713 Lecture 10: Tests of Hypotheses, Size, Power, and p-values, PDF pp. 2–7"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_10_slides_annotated.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]). Let
$\Theta_0,\Theta_1$ be nonempty disjoint subsets of $\Theta$, called the null
and alternative hypotheses. A hypothesis is **simple** when it is a singleton
and **composite** when it has at least two elements.

For a randomized test with test function
$\varphi:\mathcal X\to[0,1]$ ([[def-randomized-test]]), its **power function**
is
$$\beta(\theta):=E_\theta[\varphi(X)]\qquad(\theta\in\Theta).$$
Its **size** is
$$\sup_{\theta\in\Theta_0}\beta(\theta),$$
and it has **level $\alpha$** when this supremum is at most
$\alpha\in[0,1]$. The expectations exist and lie in $[0,1]$ because
$0\le\varphi\le1$ and each $P_\theta$ is a probability measure
([[def-probability-measure]],
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).
The supremum exists because $\Theta_0$ is nonempty, the values lie in
$[0,1]$, and $\mathbb R$ has the least-upper-bound property
([[def-complete-ordered-field]]).

For the binary action $a\in\{0,1\}$, where $1$ means reject, the
**zero-one error loss** is $1$ when $a=1$ and $\theta\in\Theta_0$, or when
$a=0$ and $\theta\in\Theta_1$, and is $0$ otherwise. The decision-rule risk
from [[def-loss-function-and-risk]] integrates this loss against the action
kernel and data law. For each fixed $\theta$, its section on the binary
action space is measurable. The risk identities proved in
[[lem-test-zero-one-loss-risk-identities]] show that risk equals
$\beta(\theta)$ on $\Theta_0$ and $1-\beta(\theta)$ on $\Theta_1$. Thus size
is the worst null error risk, and power is the rejection probability under
each alternative parameter.

## Remarks

The supremum need not be attained. No measurability structure on $\Theta$ or
on the subsets $\Theta_0,\Theta_1$ is required; the definition uses only the
individual laws $P_\theta$ and the pointwise supremum.
