---
id: def-integral-probability-metric
kind: definition
title: "Integral probability metrics"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-extended-reals
  - lem-extended-reals-complete
justified_by: []
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §3, equation (2), PDF pp. 5–6"
      url: "https://arxiv.org/pdf/1701.07875"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 3–7"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Definition

Let $(S,\Sigma)$ be a measurable space, let $P$ and $Q$ be probability measures on it, and let $\mathcal F$ be a nonempty class of real-valued $\Sigma$-measurable functions that are integrable under both $P$ and $Q$. The **integral probability metric** induced by $\mathcal F$ is
$$d_{\mathcal F}(P,Q):=\sup_{f\in\mathcal F}\left|\int_S f\,dP-\int_S f\,dQ\right|\in[0,+\infty].$$
It is nonnegative and symmetric, and it may equal $+\infty$; no separation property is asserted for an arbitrary class $\mathcal F$.

## Definition references

[[def-probability-measure|Probability measure]]

[[def-integrable-real-and-complex-functions-and-their-integrals|Integrable real-valued function]]

[[def-extended-reals|Extended real line]]

[[lem-extended-reals-complete|Suprema and infima in the extended real line]]
