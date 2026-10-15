---
id: alg-bootstrap-t-interval
kind: algorithm
title: Bootstrap-t interval
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-empirical-bootstrap-sample
  - alg-lower-empirical-bootstrap-quantile
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
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§4 and 7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Definition

Input an observed estimate $\hat\theta$, an observed standard error $\hat s>0$, and $B\ge1$ pairs $(\hat\theta_b^*,\hat s_b^*)$ with finite real $\hat\theta_b^*$ and strictly positive finite $\hat s_b^*$, produced from bootstrap samples under [[def-iid-empirical-bootstrap-sample]]. If the observed or any bootstrap standard error is nonpositive or nonfinite, return **undefined**. Otherwise form
$$t_b^*=\frac{\hat\theta_b^*-\hat\theta}{\hat s_b^*},\qquad b=1,\ldots,B.$$
With $Q_B$ from [[alg-lower-empirical-bootstrap-quantile]] and $p=\alpha/2$ for a supplied $0<\alpha<1$, return
$$[\hat\theta-\hat s\,Q_B(1-p),\ \hat\theta-\hat s\,Q_B(p)].$$
The standard-error procedure is an explicit input; this algorithm alone establishes no studentized limit or coverage.
