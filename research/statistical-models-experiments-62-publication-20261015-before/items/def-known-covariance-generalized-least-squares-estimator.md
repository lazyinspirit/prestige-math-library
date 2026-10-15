---
id: def-known-covariance-generalized-least-squares-estimator
kind: definition
title: "Generalized least-squares estimator for known covariance"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-fixed-design-linear-regression-model
  - def-statistic-and-estimator
  - def-estimand-on-a-statistical-model
  - def-moments-variance-and-covariance
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
justified_by:
  - lem-gls-information-matrix-is-positive-definite
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
    - title: "Fan Li, STA610 Lecture 2: Two Solutions—GLS and Cluster-Robust Standard Errors, PDF pp. 1–2"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture2_GLS_and_ClusterRobustSE.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.5.1"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
---

## Definition

Let $X\in\mathbb R^{n\times p}$ have full column rank in a fixed-design first-moment regression model, so $\mathbb E_\beta Y=X\beta$ under each law $P_\beta$ ([[def-fixed-design-linear-regression-model]]). Suppose the same known symmetric positive-definite matrix $V$ is the covariance of $Y$ under every $P_\beta$. Put
$$C=(X^T V^{-1}X)^{-1} \quad\text{and}\quad \widehat\beta_{\mathrm{GLS}}:=CX^T V^{-1}Y.$$
This is a statistic and estimator of the identity target $\beta$ under [[def-statistic-and-estimator]] and [[def-estimand-on-a-statistical-model]]: for fixed $X$ and $V$, the displayed expression is a linear, hence Borel-measurable, function of the response. The positive definiteness of $X^TV^{-1}X$ and existence of its inverse are established by [[lem-gls-information-matrix-is-positive-definite]].

This definition uses the true covariance as known. Replacing $V$ by an estimate defines a plug-in procedure; the theorem below does not assign that procedure the same exact covariance or BLUE guarantee.

## Remarks

The marginal-covariance lemma later identifies $V=ZGZ^T+R$ for the mixed model. The GLS definition itself applies to any fixed-design first-moment model with the stated common covariance.
