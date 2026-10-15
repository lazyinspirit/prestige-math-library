---
id: alg-bca-bootstrap-interval
kind: algorithm
title: Bias-corrected and accelerated bootstrap interval
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-iid-empirical-bootstrap-sample
  - alg-lower-empirical-bootstrap-quantile
  - alg-delete-one-jackknife-acceleration
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
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
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §3"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
---

## Definition

Assume AC. Input observed estimate $\hat\theta$, a nonempty list of $B$ bootstrap estimates, $n\ge2$ delete-one estimates, and $0<\alpha<1$. The bootstrap estimates are generated under [[def-iid-empirical-bootstrap-sample]]. Compute
$$\hat p_0=\frac{\#\{b:\hat\theta_b^*<\hat\theta\}+\tfrac12\#\{b:\hat\theta_b^*=\hat\theta\}}{B},\qquad \hat z_0=\Phi^{-1}(\hat p_0),$$
using the midrank tie rule and extended endpoint convention $\Phi^{-1}(0)=-\infty$, $\Phi^{-1}(1)=+\infty$, and compute $\hat a_J$ by [[alg-delete-one-jackknife-acceleration]].

If $\hat p_0\in\{0,1\}$ or $\hat a_J$ is undefined, return **undefined**. Otherwise, for $\gamma\in\{\alpha/2,1-\alpha/2\}$ set
$$z_\gamma=\Phi^{-1}(\gamma),\qquad p_\gamma=\Phi\!\left(z_0+\frac{z_0+z_\gamma}{1-\hat a_J(z_0+z_\gamma)}\right),$$
where $z_0=\Phi^{-1}(\hat p_0)$. If either denominator is zero or $p_{\alpha/2}\ge p_{1-\alpha/2}$, return **undefined**. Otherwise return $[Q_B(p_{\alpha/2}),Q_B(p_{1-\alpha/2})]$, using [[alg-lower-empirical-bootstrap-quantile]]. These instructions define a finite-sample procedure only; no BCa coverage theorem is asserted.
