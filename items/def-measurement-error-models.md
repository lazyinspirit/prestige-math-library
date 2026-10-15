---
id: def-measurement-error-models
kind: definition
title: "Additive measurement error and categorical misclassification models"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-moments-variance-and-covariance
  - def-independent-random-elements
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
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 9"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "§§9.1–9.2 and Technical Point 9.1, printed pp. 125–127"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§§2.1–2.2"
---

## Definition

Let $X,W,U$ be real random variables on one probability space, meaning
measurable maps into $(\mathbb R,\mathcal B(\mathbb R))$
([[def-random-element-and-real-random-variable]]). The variable $X$ is the
**latent true value**, $W$ is its **measured value**, and $U$ is an
**error term**. We use the following two additive models:

- **Classical additive error:** $W=X+U$, with $\mathbb E[U]=0$ and $U$
  independent of $X$ in the sense of
  [[def-independent-random-elements]].
- **Berkson additive error:** $X=W+U$, with $\mathbb E[U]=0$ and $U$
  independent of $W$ in that same sense.

The equations have opposite directions and their independence conditions
refer to different variables. They are distinct model assumptions.

For nonempty finite sets $\mathcal X$ and $\mathcal W$, a **categorical
misclassification mechanism** is a row-stochastic matrix
$K(w\mid x)\in[0,1]$, indexed by $x\in\mathcal X$ and $w\in\mathcal W$:
for every $x$, $\sum_{w\in\mathcal W}K(w\mid x)=1$. When categorical random
variables $X,W$ have $\mathbb P(X=x)>0$, the entry represents
$$K(w\mid x)=\frac{\mathbb P(W=w,\ X=x)}{\mathbb P(X=x)}.$$
If $\mathbb P(X=x)=0$, the observed joint law determines no conditional row
at that $x$; any row there is an additional part of a specified model, not an
empirical consequence.

The matrix $K(w\mid x)$ describes the conditional law given $X$ alone. If an
outcome or covariate is also named, whether the error is nondifferential must
be stated relative to those variables; the marginal matrix alone does not
settle that question.

## Remarks

Validation data that observe $X$ alongside $W$, replicate measurements, and a
known error law supply different additional information. Any correction using
such information needs its own design and model assumptions; none follows from
the observed marginal law of $W$ alone.
