---
id: def-support-and-compactly-supported-riemann-integral-in-rn
kind: definition
title: 'The support of a function on $\mathbb{R}^n$ and its compactly supported Riemann integral'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-interior-closure-boundary, def-metric-compactness, def-multidimensional-rectangle-and-volume, def-multidimensional-darboux-integral, thm-heine-borel-rn]
justified_by: [lem-compactly-supported-riemann-integral-is-well-defined]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §5.5"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$. For $f:\mathbb R^n\to\mathbb R$, its **support** is
$$\operatorname{supp}f:=\overline{\{x\in\mathbb R^n:f(x)\ne0\}}.$$
The function is **compactly supported** if $\operatorname{supp}f$ is compact.

A compactly supported $f$ is **compactly supported Riemann integrable** if there is a nondegenerate closed rectangle $Q$ with $\operatorname{supp}f\subseteq\operatorname{int}Q$ such that $f|_Q$ is Riemann integrable. Its integral over Euclidean space is defined by
$$\int_{\mathbb R^n}f:=\int_Qf.$$
The value is independent of $Q$ by [[lem-compactly-supported-riemann-integral-is-well-defined]]. When the support is empty, $f=0$ and the value is $0$.
