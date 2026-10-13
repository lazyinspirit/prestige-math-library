---
id: def-cm-confidence-set-and-coverage
kind: definition
title: "Confidence sets and their coverage level"
status: published
origin: pipeline
domain: mathematics
deps: [def-complete-ordered-field, def-infimum, def-measurable-space, def-probability-measure, def-sigma-algebra, lem-sup-unique, thm-infimum-property]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-infimum: mathematical-premise
  def-measurable-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-sigma-algebra: mathematical-premise
  lem-sup-unique: mathematical-premise
  thm-infimum-property: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 6.3.2, display (6.9) and the surrounding coverage definition; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.4, 'What are confidence intervals?'"
      url: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm"
verification:
  precheck: n/a
---

## Definition

Let $(S,\mathcal S)$ be a measurable space, the **data space**
([[def-measurable-space]]), let $\Theta$ be a nonempty set, the **parameter
set**, and let $(\mathbb P_\theta)_{\theta\in\Theta}$ be a family of
probability measures on $(S,\mathcal S)$ ([[def-probability-measure]]). Write
$2^{\Theta}$ for the power set of $\Theta$. A **confidence set** for
$\Theta$ is a map
$$C:S\longrightarrow 2^{\Theta},\qquad s\longmapsto C(s),$$
such that for every $\theta\in\Theta$ the set
$$\{s\in S:\theta\in C(s)\}$$
is an element of $\mathcal S$. The **coverage of $C$ at $\theta$** is
$$\gamma(\theta):=\mathbb P_\theta\bigl(\theta\in C\bigr),$$
and, for $\alpha\in[0,1]$, $C$ has **coverage level** $1-\alpha$ when
$$\inf_{\theta\in\Theta}\gamma(\theta)\ge1-\alpha .$$

### Well-definedness and conventions

The measurability requirement is exactly what makes each $\gamma(\theta)$
defined, since $\{\theta\in C\}$ is then an event in $\mathcal S$. The family
$\{\gamma(\theta):\theta\in\Theta\}$ is nonempty and bounded below by $0$, so
its infimum exists in $\mathbb R$ by [[thm-infimum-property]], is unique by
[[lem-sup-unique]], and equals $\inf_\theta\gamma(\theta)$ as written
([[def-infimum]], [[def-complete-ordered-field]]).

The level is a property of the family $(\mathbb P_\theta)_{\theta\in\Theta}$
and of the map $C$; it is an infimum of probabilities of the events
$\theta\in C$, calculated before the datum is observed. It contains no
distribution on $\Theta$ and no conditional probability given the datum; a
data-dependent reading requires further structure that is not part of this
definition.
