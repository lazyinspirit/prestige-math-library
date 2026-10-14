---
id: alg-univariate-trimmed-mean
kind: algorithm
title: "Split-sample univariate winsorized trimmed mean"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
justified_by: [lem-univariate-trimmed-mean-total-and-measurable]
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
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §2"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 8–9; complete split-sample univariate estimator definition."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF p. 3; trimmed-mean estimator context for finite-variance means."
---

## Definition

Let $N\ge1$ be an integer, let $\eta\ge0$, $0<\delta<1$, and set
$$
\varepsilon=8\eta+\frac{12\log(4/\delta)}{N}.
$$
The procedure is admissible when $0<\varepsilon\le1/4$. Its input is two observed real samples $\widetilde X_1,\ldots,\widetilde X_N$ and $\widetilde Y_1,\ldots,\widetilde Y_N$. Sort the second sample nondecreasingly as $\widetilde Y^*_{(1)}\le\cdots\le\widetilde Y^*_{(N)}$ and define $r(u)=\lceil uN\rceil$ for $0<u\le1$. Set
$$
\alpha=\widetilde Y^*_{(r(\varepsilon))},\qquad \beta=\widetilde Y^*_{(r(1-\varepsilon))},
$$
and, for $\alpha\le\beta$, let $\phi_{\alpha,\beta}(x)=\min\{\beta,\max\{\alpha,x\}\}$. Return
$$
\widehat\mu=\frac1N\sum_{i=1}^N\phi_{\alpha,\beta}(\widetilde X_i).
$$
The operation is defined for every admissible input, including tied observations.

## Remarks

The probability guarantee is stated separately under the absolutely continuous clean-sample and sample-replacement hypotheses of [[thm-univariate-trimmed-mean-under-replacement]].
