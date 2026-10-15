---
id: alg-basic-bootstrap-interval
kind: algorithm
title: Basic bootstrap interval
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
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§4 and 7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "A. C. Davison and D. V. Hinkley, Bootstrap Methods and Their Application, Chapter 5, §5.2, Basic Confidence Limit Methods"
      url: "https://www.cambridge.org/core/books/abs/bootstrap-methods-and-their-application/confidence-intervals/499FDF2036D956E7B7E7FB7F25D08B13"
      locator: "The nonparametric basic bootstrap interval reflects the upper and lower bootstrap quantiles about the observed estimate."
---

## Definition

Input the observed estimate $\hat\theta$, a nonempty list of $B$ bootstrap estimates $\hat\theta_1^*,\ldots,\hat\theta_B^*$ generated under [[def-iid-empirical-bootstrap-sample]], and $0<\alpha<1$. Let $Q_B$ be [[alg-lower-empirical-bootstrap-quantile]] and set $p=\alpha/2$. Return
$$[2\hat\theta-Q_B(1-p),\,2\hat\theta-Q_B(p)].$$
This is the reflected bootstrap-quantile interval under the declared finite-sample quantile convention. It makes no coverage claim.
