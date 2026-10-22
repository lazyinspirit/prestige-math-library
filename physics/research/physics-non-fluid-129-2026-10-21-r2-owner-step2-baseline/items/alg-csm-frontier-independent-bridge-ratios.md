---
id: alg-csm-frontier-independent-bridge-ratios
kind: algorithm
title: Independent finite bridge-ratio estimator
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: physics
deps:
  - thm-csm-frontier-partition-ratio-overlap
dependency_roles:
  thm-csm-frontier-partition-ratio-overlap: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 10 §10.9, Bridge, Umbrella and Path Sampling"
      url: "https://artowen.su.domains/mc/Ch-var-adv.pdf"
      locator: "Chapter 10 §10.9, printed pp. 39–45 (PDF pp. 39–45): ratios of normalizing constants, independent importance estimates, and path sampling through intermediate distributions. The local algorithm imposes exact IID draws and independent stages."
    - title: "Xiao-Li Meng and Wing Hung Wong, Simulating Ratios of Normalizing Constants via a Simple Identity: A Theoretical Exploration"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a6n43.pdf"
      locator: "§§2–3, printed pp. 834–837 (PDF pp. 4–6): bridge identities and independent-draw ratio analysis. Their ratio estimators and asymptotic calculations are not substituted for this explicit procedure."
---

## Definition

Input a finite nonempty state space $\mathsf X$, an integer $K\geq1$, positive finite weights $w_0,\ldots,w_K:\mathsf X\to(0,\infty)$, positive integers $n_0,\ldots,n_{K-1}$, and arrays of supplied random samples $X_{k,1},\ldots,X_{k,n_k}$ such that for each $k$ the samples are IID with law $\pi_k(x)=w_k(x)/Z_k$, where $Z_k=\sum_{x\in\mathsf X}w_k(x)$, and all samples across distinct stages are mutually independent. These exact IID draws are inputs, not outputs of this procedure; approximate Gibbs draws, correlated trajectories, and adaptively chosen bridges are outside its contract.

For each $k=0,\ldots,K-1$, compute $\overline R_k=n_k^{-1}\sum_{j=1}^{n_k}w_{k+1}(X_{k,j})/w_k(X_{k,j})$. Return $\widehat R=\prod_{k=0}^{K-1}\overline R_k$. The procedure evaluates only raw-weight ratios; it neither computes nor requires any $Z_k$ as a numeric input.

## Definition references

[[thm-csm-frontier-partition-ratio-overlap]]
