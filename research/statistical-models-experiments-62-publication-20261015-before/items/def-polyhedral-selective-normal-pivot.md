---
id: def-polyhedral-selective-normal-pivot
kind: definition
title: Polyhedral selective normal pivot
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-polyhedral-selection-event-and-contrast-interval
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
---

## Definition

Assume AC. In the setup of [[def-polyhedral-selection-event-and-contrast-interval]], let $Y\sim N_n(\mu,\sigma^2I_n)$, where $\sigma>0$ is known ([[def-multivariate-normal-law]]). Put $\theta=\eta^T\mu$, $s=\sigma\|\eta\|$, and let $\Phi$ be the standard normal CDF from [[def-standard-normal-and-normal-laws]]. Extend it by $\Phi(-\infty)=0$ and $\Phi(+\infty)=1$. For a candidate contrast value $\vartheta\in\mathbb R$, define
$$\Delta_\vartheta(z)=\Phi\!\left(\frac{U(z)-\vartheta}{s}\right)-\Phi\!\left(\frac{L(z)-\vartheta}{s}\right).$$
When $G(z)$ holds, $L(z)<U(z)$, and $\Delta_\vartheta(z)>0$, define
$$q_\vartheta(t,z)=\frac{\Phi((t-\vartheta)/s)-\Phi((L(z)-\vartheta)/s)}{\Delta_\vartheta(z)}\qquad (L(z)\le t\le U(z)).$$
For a total statistic on $\mathbb R^n$, set $q_\vartheta(y)=0$ when $y\notin S$ or when the denominator is zero; on the remaining part of $S$, set $q_\vartheta(y)=q_\vartheta(T(y),Z(y))$. The value assigned on zero-normalizer fibers is only a measurable extension; when $P_\mu(S)>0$, the conditional law given selection gives those fibers probability zero.
