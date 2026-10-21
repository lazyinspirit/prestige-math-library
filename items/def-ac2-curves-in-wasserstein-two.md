---
id: "def-ac2-curves-in-wasserstein-two"
kind: definition
title: "Absolutely continuous curves of order two in Wasserstein space"
status: published
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 1.1.2 and Chapter 8"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---
## Definition

Fix $T>0$. A curve $\mu:[0,T]\to\mathcal P_2(\mathbb R^d)$ is absolutely continuous of order two, written $\mu\in AC^2([0,T];\mathcal P_2)$, if it is continuous in $W_2$ and there is a nonnegative Lebesgue-measurable $g$ with $\int_0^T g(t)^2dt<\infty$ such that $W_2(\mu_s,\mu_t)\le\int_s^t g(r)dr$ for every $0\le s\le t\le T$. At an interior time $t$ where the limit exists, the metric derivative is $|\dot\mu_t|=\lim_{h\to0}W_2(\mu_{t+h},\mu_t)/|h|$; no endpoint derivative is required.

## Definition references

[[def-wasserstein-two-space-and-couplings|def wasserstein two space and couplings]]

[Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 1.1.2 and Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)
