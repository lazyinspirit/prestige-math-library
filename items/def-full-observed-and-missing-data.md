---
id: def-full-observed-and-missing-data
kind: definition
title: "Full and observed data under a missingness pattern"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
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
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §§1.1–1.2"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 47–51"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space and let
$W=(W_1,\ldots,W_k)$, for a finite $k\ge1$, be a random element of the product
measurable space $\mathcal W=\prod_{j=1}^k\mathcal W_j$
([[def-random-element-and-real-random-variable]],
[[def-measurable-space]]). The law of $W$ is the pushforward probability
measure defined in [[def-law-or-distribution-of-a-random-element]]. Let
$\mathcal R$ be a nonempty finite set of observation patterns with its
discrete sigma-algebra, and let $R:\Omega\to\mathcal R$ be a random element.

For each $r\in\mathcal R$, specify the recorded coordinate set
$I_r\subseteq\{1,\ldots,k\}$ and its complement
$J_r=\{1,\ldots,k\}\setminus I_r$. The **observed projection**
$W_{\mathrm{obs}}(r)$ is the coordinate projection into
$\mathcal W_{\mathrm{obs}}(r):=\prod_{j\in I_r}\mathcal W_j$, and the
**missing projection** $W_{\mathrm{mis}}(r)$ is the projection into
$\mathcal W_{\mathrm{mis}}(r):=\prod_{j\in J_r}\mathcal W_j$. An empty
coordinate tuple takes values in a one-point measurable space. The **observed
record** is $O=(R,W_{\mathrm{obs}}(R))$ in the disjoint union
$\bigsqcup_{r\in\mathcal R}(\{r\}\times\mathcal W_{\mathrm{obs}}(r))$,
where a set in the disjoint-union sigma-algebra is measurable exactly when
each pattern section is measurable. The pattern records which coordinates are
available; it does not replace an unrecorded full-data value by zero.
