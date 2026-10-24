---
id: def-covariance-factor-model
kind: definition
title: "Covariance factor model with diagonal residual covariance"
status: published
dependency_level: 0
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.1, printed pp. 558–560, equations (14.80)–(14.81)"
---

## Definition

Let $p,q$ be positive integers with $q<p$, let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, and let $S:\Omega\to\mathbb R^q$ and $\varepsilon:\Omega\to\mathbb R^p$ be measurable random vectors with finite second moments. For finite-second-moment random vectors $U,V$, define

$$\operatorname{Cov}(U,V)=\mathbb E[(U-\mathbb E U)(V-\mathbb E V)^T], \qquad \operatorname{Cov}(U)=\operatorname{Cov}(U,U),$$

where expectation is integration with respect to $\mathbb P$. A **covariance factor model** is a representation

$$X=AS+\varepsilon$$

with a fixed matrix $A\in\mathbb R^{p\times q}$ and assumptions

$$\mathbb E S=0, \qquad \mathbb E\varepsilon=0, \qquad \operatorname{Cov}(S)=I_q, \qquad \operatorname{Cov}(\varepsilon)=D=\operatorname{diag}(d_1,\ldots,d_p), \quad d_i>0, \qquad \operatorname{Cov}(S,\varepsilon)=0.$$

The model assumes only the stated moment and cross-covariance conditions; it does not assume that $S$ and $\varepsilon$ are independent.

## Definition references

[Hastie, Tibshirani, and Friedman, §14.7.1](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)
