---
id: cor-partial-homogeneous-wasserstein-limit-is-global-minimizer
kind: corollary
title: A W2 limit in the partial one-homogeneous case is globally minimizing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [thm-partial-homogeneous-projected-limit-is-global-minimizer, lem-w2-convergence-implies-homogeneous-projection-convergence, lem-partial-energy-continuous-under-w2, def-partial-homogeneous-relaxed-objective, def-axiom-of-choice]
justified_by: [thm-partial-homogeneous-projected-limit-is-global-minimizer]
proof_strategy: direct
axiom_use: "AC is inherited from the flow and coupling construction."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume the full partially one-homogeneous hypotheses, one of the two source boundary alternatives, and the separated bounded-box initialization in the preceding projected-limit theorem. If the Wasserstein gradient flow $\mu_t$ converges in $W_2$ to $\mu_\infty\in\mathcal P_2(\mathbb R\times\Theta)$, then $\mu_\infty$ is a global minimizer of $F$ over finite nonnegative measures.

## Statement references

[[thm-partial-homogeneous-projected-limit-is-global-minimizer]]

[[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[[lem-partial-energy-continuous-under-w2]]

[Chizat and Bach, Theorem 3.5](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, the assumptions in the Statement, and W2 convergence to $\mu_\infty$.

[F1] W2 convergence implies weak convergence of the signed $h^1$ projections. [[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[F2] The partial projected-limit theorem identifies the limiting signed projection as a minimizer of $J$ and gives convergence of the flow energies to $\inf J=\inf F$. [[thm-partial-homogeneous-projected-limit-is-global-minimizer]] [[def-partial-homogeneous-relaxed-objective]]

[F3] The partial feature energy is continuous under W2 convergence. [[lem-partial-energy-continuous-under-w2]]

## Proof

**Given:** AC and the data in the Statement.

1.1 By [F1], $h^1(\mu_t)$ converges weakly to $h^1(\mu_\infty)$. Apply [F2] to obtain $F(\mu_t)\to\inf_{\lambda\ge0}F(\lambda)$. [F1, F2, given]

2.1 By [F3], $F(\mu_t)\to F(\mu_\infty)$ along the same W2-convergent flow. Therefore $F(\mu_\infty)=\inf_{\lambda\ge0}F(\lambda)$, which is the asserted global minimality. The partial projected-limit theorem remains escalated until its signwise stationarity, escape, and penalty-convergence gaps are resolved. [F2, F3, step 1.1] ∎
