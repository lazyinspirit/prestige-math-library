---
id: cor-two-homogeneous-wasserstein-limit-is-global-minimizer
kind: corollary
title: A W2 limit in the two-homogeneous case is globally minimizing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [thm-two-homogeneous-projected-limit-is-global-minimizer, lem-w2-convergence-implies-homogeneous-projection-convergence, def-axiom-of-choice]
justified_by: [thm-two-homogeneous-projected-limit-is-global-minimizer]
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

Assume the full two-homogeneous hypotheses and separated compact initialization in the preceding global-minimizer theorem. If the Wasserstein gradient flow $\mu_t$ converges in $W_2$ to $\mu_\infty\in\mathcal P_2(\mathbb R^d)$, then $\mu_\infty$ is a global minimizer of $F$ over finite nonnegative measures.

## Statement references

[[thm-two-homogeneous-projected-limit-is-global-minimizer]]

[[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[Chizat and Bach, Theorem 3.3](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, the assumptions in the Statement, and $W_2(\mu_t,\mu_\infty)\to0$.

[F1] W2 convergence implies weak convergence of the two-homogeneous projections. [[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[F2] Every weak two-homogeneous projection limit is a global minimizer of $F$. [[thm-two-homogeneous-projected-limit-is-global-minimizer]]

## Proof

**Given:** AC and the data in the Statement.

1.1 Apply [F1] to the W2-convergent family to obtain weak convergence $h^2(\mu_t)\rightharpoonup h^2(\mu_\infty)$. [F1, given]

2.1 Apply [F2] with projected limit $h^2(\mu_\infty)$. Its conclusion identifies the measure on the sphere, viewed as a finite nonnegative measure on $\mathbb R^d$, as a global minimizer. Since the theorem's full flow conclusion states the limit measure is a minimizer through its projected representation, $\mu_\infty$ itself is also globally minimizing: its feature and penalty integrals equal those of its projection by two-homogeneity. [F2, step 1.1] ∎
