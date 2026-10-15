---
id: alg-bias-corrected-bootstrap-interval
kind: algorithm
title: Bias-corrected bootstrap interval
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-empirical-bootstrap-sample
  - alg-lower-empirical-bootstrap-quantile
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
---

## Definition

Assume AC, as required by the standard normal law. Input observed estimate $\hat\theta$, a nonempty list of $B$ bootstrap estimates $\hat\theta_1^*,\ldots,\hat\theta_B^*$ generated under [[def-iid-empirical-bootstrap-sample]], and $0<\alpha<1$. Use the explicit midrank tie convention
$$\hat p_0=\frac{\#\{b:\hat\theta_b^*<\hat\theta\}+\tfrac12\#\{b:\hat\theta_b^*=\hat\theta\}}{B}.$$
Let $z_0=\Phi^{-1}(\hat p_0)$, where $\Phi$ is the standard normal CDF. Use the extended endpoint convention $\Phi^{-1}(0)=-\infty$ and $\Phi^{-1}(1)=+\infty$, and extend $\Phi$ to $\overline{\mathbb R}$ by $\Phi(-\infty)=0$ and $\Phi(+\infty)=1$. With $Q_B$ from [[alg-lower-empirical-bootstrap-quantile]] and $p=\alpha/2$, return
$$\left[Q_B\!\left(\Phi(2z_0+\Phi^{-1}(p))\right),\, Q_B\!\left(\Phi(2z_0+\Phi^{-1}(1-p))\right)\right].$$
On $\mathbb R$ the extended function is the usual standard-normal CDF. This is a finite-$B$ algorithm with an explicit tie rule; no coverage or higher-order accuracy claim is included.
