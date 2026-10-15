---
id: def-pattern-mixture-sensitivity-parameter
kind: definition
title: "Location-shift pattern-mixture sensitivity function"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-conditional-law-given-a-random-element
  - def-full-observed-and-missing-data
  - def-mcar-mar-and-mnar
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-standard-borel-space
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 5"
      url: "https://www.nationalacademies.org/read/12955/chapter/7"
      locator: "Printed pp. 86–94, single-outcome pattern-mixture sensitivity models and the observed-data versus missing-data distribution link."
---

## Definition

Assume AC. Let $X$ take values in a standard-Borel space $\mathcal X$, let $Y$ be real-valued, and let $R\in\{0,1\}$ indicate response in the one-outcome full/observed-data setup of [[def-full-observed-and-missing-data]]. Suppose $P(R=1)>0$, $P(R=0)>0$, and the covariate laws overlap in this direction: for every measurable $A\subseteq\mathcal X$, $P(X\in A\mid R=1)=0$ implies $P(X\in A\mid R=0)=0$. Under the respondent law $P(\cdot\mid R=1)$, choose a conditional law $K_1(x,\cdot)$ of $Y$ given $X=x$; standard-Borel disintegration supplies such a probability kernel under AC ([[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]], [[def-conditional-law-given-a-random-element]]). The overlap condition makes the respondent version relevant almost surely under the nonrespondent covariate law.

A **location-shift pattern-mixture sensitivity function** is a measurable $\Delta:\mathcal X\to\mathbb R$ for which the nonrespondent conditional law is specified by
$$K_0^\Delta(x,B)=\int_{\mathbb R}\mathbf1_B(y+\Delta(x))K_1(x,dy)$$
for every Borel set $B\subseteq\mathbb R$, on the covariate support of nonrespondents. This is the full conditional distribution restriction $Y\mid(X=x,R=0)\stackrel d=Y_1+\Delta(x)$ for $Y_1\sim K_1(x,\cdot)$, not merely a restriction on conditional means. For each $x$, $K_0^\Delta(x,\cdot)$ is the pushforward of $K_1(x,\cdot)$ under the measurable translation $y\mapsto y+\Delta(x)$, hence is a probability measure; its evaluations are measurable in $x$ by kernel integration because $(x,y)\mapsto\mathbf1_B(y+\Delta(x))$ is measurable ([[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]]). The relation specifies the missing conditional law while leaving the respondent conditional law fixed. A finite mean target additionally requires integrability under the resulting full-data law; the definition alone does not assert that moment condition.

In this specified family, $\Delta=0$ gives equality of the respondent and nonrespondent conditional laws. This does not make equality of conditional means alone equivalent to MAR in a general full-data model; equality of means need not imply equality of distributions. Values where no respondents occur are outside the definition because $K_1$ is unavailable there, and a pattern with no nonrespondents requires no sensitivity function.

The formal one-outcome MCAR/MAR/MNAR taxonomy for this pair is supplied by [[def-mcar-mar-and-mnar]]. The location-shift relation above is the selected sensitivity model within that taxonomy; it does not claim that all MNAR laws are location shifts.

## Source notes

National Research Council Chapter 5 introduces sensitivity parameters through differences between respondent and nonrespondent distributions and illustrates a mean-shift parameter. This item deliberately specifies the stronger full-distribution location-shift model shown above; the cited source supports the modeling framework, not a theorem that this particular translation restriction is empirically true.
