---
id: def-ip-operator-and-prior-mismatch
kind: definition
title: Operator, noise-law, and prior-support mismatch
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-metric-space
  - def-measurable-space
  - def-probability-measure
  - def-statistical-experiment
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Youngsoo Baek, Wilkins Aquino, and Sayan Mukherjee, Generalized Bayes Approach to Inverse Problems with Model Misspecification"
      url: "https://arxiv.org/pdf/2210.06921"
      locator: "§1 and §§2.2–2.3, PDF pp. 1–6"
    - title: "Nada Cvetković, Han Cheng Lie, Harshit Bansal, and Karen Veroy, Choosing Observation Operators to Mitigate Model Error in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2301.04863"
      locator: "Abstract, §1 and §2.1, PDF pp. 1–5"
    - title: "Masoumeh Dashti and Andrew M. Stuart, The Bayesian Approach to Inverse Problems"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§1.1 and §3.2, PDF pp. 3–4 and 29–30"
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences"
      url: "https://arxiv.org/pdf/2503.11043"
      locator: "Full 29-page paper; scope caution from §§4.3–5 and Appendix C"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $(X,d_X)$ and $(\mathsf Y,d_Y)$ be metric spaces, let $U\subseteq X$ be a nonempty class of admissible truths, and let $q:U\to Q$ assign each truth its recovery target in a metric space $(Q,d_Q)$. Let $\mathfrak A$ index forward maps $F_A:U\to\mathsf Y$; in this definition an **operator** means such a forward map, and linearity is not assumed. A specified set $\mathcal C\subseteq U\times\mathfrak A$ records which truth/operator pairs are admissible; no full-product assumption is made. Equip $\mathsf Y$ with a sigma-algebra $\mathcal Y$ and an addition operation such that every translation $\tau_z(e)=z+e$ is measurable. A **noise law** is a probability measure $\nu$ on $(\mathsf Y,\mathcal Y)$. For each admissible pair $(x,A)\in\mathcal C$, the observation random element on the probability space $(\mathsf Y,\mathcal Y,\nu)$ is $e\mapsto F_A(x)+e$, and its sampling law is
$$P_{x,A,\nu}(B)=\nu\bigl(\{e\in\mathsf Y:F_A(x)+e\in B\}\bigr),\qquad B\in\mathcal Y.$$
The translation measurability assumption makes this law a probability measure.

For a true specification $(x_\star,A_\star,\nu_\star)$ with $(x_\star,A_\star)\in\mathcal C$ and a specified working operator $\widetilde A\in\mathfrak A$ and noise law $\widetilde\nu$, there is **operator mismatch at the truth** when $F_{A_\star}(x_\star)\ne F_{\widetilde A}(x_\star)$, and there is **noise-law mismatch** when $\nu_\star\ne\widetilde\nu$. A **working statistical model** is a metric index space $(\Xi,d_\Xi)$, a family $(Q_\xi)_{\xi\in\Xi}$ of sampling laws on the same data space, and a prior probability measure $\Pi$ on a sigma-algebra containing every open metric ball. The statistical model is **misspecified** for true observation law $P_\star=P_{x_\star,A_\star,\nu_\star}$ when $P_\star\notin\{Q_\xi:\xi\in\Xi\}$. If a true model index $\xi_\star\in\Xi$ is specified, there is a **prior-support mismatch** at $\xi_\star$ when some open ball $B_\Xi(\xi_\star,r)$, $r>0$, has $\Pi(B_\Xi(\xi_\star,r))=0$. These are distinct properties; an operator or noise-law mismatch need not by itself make the statistical model misspecified or exclude the true index from the prior's support. This definition makes no assertion about posterior existence or convergence.

## Definition references

[[def-ip-forward-map-and-solution-classes|Metric parameter and data spaces, admissible truths, forward maps, and metric recovery targets]]

[[def-metric-space|Metric spaces and metric balls]]

[[def-measurable-space|Measurable data and index spaces]]

[[def-probability-measure|Noise laws and priors as probability measures]]

[[def-statistical-experiment|Sampling laws indexed by parameters]]

[[def-measurable-function-between-measurable-spaces|Measurable translations]]

[[def-random-element-and-real-random-variable|An observation random element is a measurable map]]

[[def-law-or-distribution-of-a-random-element|The law of a random element]]

[[lem-law-of-a-random-element-is-a-probability-measure|The law is a probability measure]]

[Baek, Aquino, and Mukherjee, *Generalized Bayes Approach to Inverse Problems with Model Misspecification*](https://arxiv.org/pdf/2210.06921)

[Cvetković et al., *Choosing Observation Operators to Mitigate Model Error in Bayesian Inverse Problems*](https://arxiv.org/pdf/2301.04863)

[Dashti and Stuart, *The Bayesian Approach to Inverse Problems*](https://arxiv.org/pdf/1302.6989)

## Remarks

InverseBench's reported algorithm comparisons and prior-shift observations are empirical for its selected tasks, datasets, and tuning. Its reported setup assumes exact forward models and lists robustness to forward-model mismatch as future work; these observations do not establish a general robustness theorem.

## Remarks references

[Zheng et al., *InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences*, full 29-page paper](https://arxiv.org/pdf/2503.11043)
