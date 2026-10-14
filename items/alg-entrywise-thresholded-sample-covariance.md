---
id: alg-entrywise-thresholded-sample-covariance
kind: algorithm
title: "Entrywise-thresholded sample covariance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-sample-covariance-and-operator-norm-loss
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
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 4, equation (28)"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Definition

Input: observations $X_1,\ldots,X_n\in\mathbb R^p$, with integers $n\ge1$, $p\ge2$, and a fixed threshold constant $\gamma_\tau>0$ determined by the directional sub-Gaussian tail parameter $\tau$.

Compute the sample-centered covariance $\widehat\Sigma^\ast$ from [[def-sample-covariance-and-operator-norm-loss]] and put $\lambda=\gamma_\tau\sqrt{\log(p)/n}$. Output the symmetric matrix $\widehat\Sigma$ defined by
$$\widehat\sigma_{jj}=\widehat\sigma^\ast_{jj},\qquad \widehat\sigma_{jk}=\widehat\sigma^\ast_{jk}\mathbf 1\{|\widehat\sigma^\ast_{jk}|\ge\lambda\}\quad(j\ne k).$$
The diagonal is unchanged; an off-diagonal entry at threshold equality is retained. This procedure is a definition and makes no risk or positive-semidefiniteness guarantee.
