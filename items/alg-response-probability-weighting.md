---
id: alg-response-probability-weighting
kind: algorithm
title: "Response-probability weighting for a sample mean"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-full-observed-and-missing-data
justified_by: []
proof_strategy: definition
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
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, updated author-hosted PDF"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "Chapter 8 §8.5, printed pp. 117–120; §12.6, printed pp. 172–173."
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
      locator: "Chapter 4, printed pp. 55–58, univariate inverse-probability weighting, positivity, and finite-sample high-weight variance."
---

## Definition

Let $(\mathcal X,\mathcal A)$ be a measurable covariate space and let $n\ge1$. In the one-outcome full/observed-data convention of [[def-full-observed-and-missing-data]], $X_i\in\mathcal X$ is observed for every unit, $R_i\in\{0,1\}$ indicates whether the real outcome $Y_i$ is observed, and the encoded input stores $Z_i=Y_i$ when $R_i=1$ and the placeholder $Z_i=0$ when $R_i=0$. The mask $R_i$ distinguishes the placeholder from an observed zero; it is not an imputation or a replacement of the missing full-data value. Let $\pi:\mathcal X\to(0,1]$ be a supplied, known, measurable response-probability function, with $\pi(x_i)>0$ for every record in the input.

**Input:** $n$, records $(x_i,r_i,z_i)_{i=1}^n$ satisfying the stated conventions, and the function $\pi$.

**Procedure:** For each record use weight $1/\pi(x_i)$ when $r_i=1$ and weight zero when $r_i=0$. Return the unnormalized Horvitz–Thompson weighted mean
$$\widehat\mu_{\mathrm{HT}}=\frac1n\sum_{i=1}^n\frac{z_i}{\pi(x_i)}.$$

The procedure takes the true known response probabilities as input. Substituting fitted probabilities is a different procedure; this definition makes no finite-sample stability or estimated-weight inference claim. The weighting convention is the one used for a single response indicator; no joint treatment/response weight is defined here.
