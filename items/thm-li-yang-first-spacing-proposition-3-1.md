---
id: thm-li-yang-first-spacing-proposition-3-1
kind: theorem
title: "Li–Yang First-Spacing Proposition 3.1"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [thm-guth-maldague-small-cap-cone-decoupling-input, thm-huxley-classical-first-spacing-q4-bound]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "§3.1–3.3, Proposition 3.1"
    - title: "Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”"
      url: "https://arxiv.org/pdf/2206.01093v2"
      locator: "Theorem 3, source input"
verification:
  precheck: n/a
---

## Statement

Let $K,L$ be positive integers and $\eta>0$ satisfy $1\le L<K\le\eta^{-1}\le KL$. Let $q$ be real with $4<q\le4.5$, and let the complex coefficients $a_{k\ell}$ satisfy $|a_{k\ell}|\le1$. Put $e(t)=\exp(2\pi i t)$,
$$B_{K,L,\eta}=\{(x_1,x_2,x_3)\in\mathbb R^3: |x_1|\le1,\ |x_2|\le1,\ |x_3|\le(\eta L\sqrt K)^{-1}\},$$
and let $\operatorname{meas}$ be Lebesgue measure on $\mathbb R^3$. Define
$$G_q= \left(\operatorname{meas}(B_{K,L,\eta})^{-1} \int_{B_{K,L,\eta}} \left|\sum_{k=K}^{2K-1}\sum_{\ell=L}^{2L-1} a_{k\ell}e(\ell x_1+k\ell x_2+\ell\sqrt{k}\,x_3)\right|^q\,dx \right)^{1/q}.$$
If $(L/K)^{(q-2)/(q-4)}\le\eta$, then for every $\varepsilon>0$ there is $C_\varepsilon>0$, independent of $K,L,\eta$ and the coefficients, such that
$$G_q\le C_\varepsilon \eta^{-\varepsilon}\eta^{(q-4)/(q(q-2))} (KL)^{1-2/q} \left(1+\eta^{2/(q-2)}K\right)^{1/q}.$$


## Statement references

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

[Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”](https://arxiv.org/pdf/2206.01093v2)

## Facts & Assumptions

**Given:** The first-spacing variables, coefficient bounds, q-range and conditions in the statement.

## Proof status

The claim is transcribed from Li–Yang Proposition 3.1 with its local coefficient, dyadic-range, box, and normalized $G_q$ conventions stated explicitly. Its proof requires the small-cap theorem and classical q=4 baseline, whose primary proof suppliers remain escalated.
