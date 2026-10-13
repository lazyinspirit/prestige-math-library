---
id: def-cm-statistical-test-and-size
kind: definition
title: "Statistical tests, rejection regions, power functions and size"
status: draft
origin: pipeline
domain: mathematics
deps: [def-complete-ordered-field, def-measurable-space, def-probability-measure, def-sigma-algebra]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-measurable-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-sigma-algebra: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Definition 10.1 and Section 10.1 (power, size, and rejection regions); full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.3, 'What are statistical tests?'"
      url: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc13.htm"
verification:
  precheck: n/a
---

## Definition

Let $(S,\mathcal S)$ be a measurable space, the **data space**
([[def-measurable-space]], [[def-sigma-algebra]]); let $\Theta$ be a nonempty
set, the **parameter set**; let $(\mathbb P_\theta)_{\theta\in\Theta}$ be a
family of probability measures on $(S,\mathcal S)$
([[def-probability-measure]]), the **model family**; and let $\Theta_0$ be a
nonempty subset of $\Theta$, the **null set**. A **test** of the null set
$\Theta_0$ within the family $(\mathbb P_\theta)_{\theta\in\Theta}$ is a set
$R\in\mathcal S$, the **rejection region**; the test *rejects* the null set on
the event that the datum $s\in S$ lies in $R$, and *retains* it otherwise.

The **power function** of the test is
$$\beta:\Theta\longrightarrow[0,1],\qquad \beta(\theta):=\mathbb P_\theta(R),$$
and the **size** of the test is
$$\alpha:=\sup_{\theta\in\Theta_0}\beta(\theta)\in[0,1].$$
The test has **level** $\alpha'$ when its size is at most $\alpha'$; the
smallest such $\alpha'$ is the size.

### Well-definedness and conventions

For each $\theta$ the value $\mathbb P_\theta(R)$ is defined because
$R\in\mathcal S$ and $\mathbb P_\theta$ is a measure on $\mathcal S$. The set
$\{\beta(\theta):\theta\in\Theta_0\}$ is nonempty because $\Theta_0\neq
\emptyset$, and it is bounded above by $1$; the least-upper-bound property of
the complete ordered field of reals ([[def-complete-ordered-field]]) therefore
supplies its supremum $\alpha\in[0,1]$, uniquely by [[def-complete-ordered-field]].
The size is computed from the null set alone; no alternative set
$\Theta\setminus\Theta_0$, no prior distribution on $\Theta$, and no observed
datum enter its definition.

The rejection region, the family $(\mathbb P_\theta)$ and the null set are
data of the test, not consequences of it. Changing any of them changes
$\beta$ and $\alpha$; a statement that a test has a given size is a statement
about the specified triple $(S,\mathcal S,\{\mathbb P_\theta\})$, the
specified $\Theta_0$ and the specified $R$.
