---
id: alg-percentile-bootstrap-interval
kind: algorithm
title: Percentile bootstrap interval
status: draft
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
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Definition

Input a nonempty list of $B$ bootstrap estimates $\hat\theta_1^*,\ldots,\hat\theta_B^*$ generated under the empirical bootstrap law in [[def-iid-empirical-bootstrap-sample]], and $0<\alpha<1$. Let $Q_B$ be [[alg-lower-empirical-bootstrap-quantile]] and set $p=\alpha/2$. Return
$$[Q_B(p),\,Q_B(1-p)].$$
This finite-$B$ procedure uses the declared lower empirical-quantile convention. It defines endpoints only; it asserts no coverage guarantee.
