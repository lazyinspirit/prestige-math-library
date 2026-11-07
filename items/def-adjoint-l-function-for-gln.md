---
dependency_level: 4
id: def-adjoint-l-function-for-gln
kind: definition
title: "Adjoint L-Function of a Cuspidal GL(n) Representation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §§1.1 and 5"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0 and 8–9"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field and let $\pi$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_r(\mathbb A_F)$. The dual group $\mathrm{GL}_r(\mathbb C)$ acts on the trace-zero endomorphisms of its standard $r$-dimensional representation by conjugation; denote this representation by $\operatorname{Ad}^0$. If $(\varphi_{\pi_v},N_{\pi_v})$ is the standard local parameter used to define the standard and Rankin–Selberg factors, set

$$L_v(s,\pi_v,\operatorname{Ad})=L_v\bigl(s,(\operatorname{Ad}^0\circ\varphi_{\pi_v},d\operatorname{Ad}^0(N_{\pi_v}))\bigr).$$

At an unramified finite place with Satake parameters $\alpha_1,\ldots,\alpha_r$, this is

$$L_v(s,\pi_v,\operatorname{Ad})=(1-q_v^{-s})^{-(r-1)}\prod_{i\ne j}(1-\alpha_i\alpha_j^{-1}q_v^{-s})^{-1}.$$

In any half-plane of absolute convergence define $L(s,\pi,\operatorname{Ad})=\prod_vL_v(s,\pi_v,\operatorname{Ad})$, and define the completed function by adjoining the archimedean local factors. This item fixes the notation and parameter convention only; it asserts no global meromorphic continuation, pole order, or nonvanishing at $s=1$.

## Definition references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §§1.1 and 5](https://arxiv.org/pdf/2309.07534v2)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0 and 8–9](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Remarks

The standard-parameter assignment needed to interpret this formula at every place is subject to the unresolved standard-L interface recorded in the batch notes.
