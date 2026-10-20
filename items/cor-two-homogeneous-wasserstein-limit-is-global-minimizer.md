---
id: cor-two-homogeneous-wasserstein-limit-is-global-minimizer
kind: corollary
title: A W2 limit in the two-homogeneous case is globally minimizing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 14
deps: [thm-two-homogeneous-projected-limit-is-global-minimizer, lem-w2-convergence-implies-homogeneous-projection-convergence, def-two-homogeneous-measure-projection, lem-mean-field-projection-identities, def-axiom-of-choice, cor-weak-limits-are-unique]
proof_strategy: direct
axiom_use: "AC is assumed explicitly for the flow and coupling suppliers."
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

Assume AC, the full two-homogeneous hypotheses and separated compact initialization in the preceding global-minimizer theorem. If the Wasserstein gradient flow $\mu_t$ converges in $W_2$ to $\mu_\infty\in\mathcal P_2(\mathbb R^d)$, then $\mu_\infty$ is a global minimizer of $F$ over finite nonnegative measures.

## Statement references

[[thm-two-homogeneous-projected-limit-is-global-minimizer]]

[[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[[def-two-homogeneous-measure-projection]]

[[lem-mean-field-projection-identities]]

[Chizat and Bach, Theorem 3.3](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, the assumptions in the Statement, and $W_2(\mu_t,\mu_\infty)\to0$.

[A1] Assume the Axiom of Choice, as stated in the hypotheses and required by the flow and coupling suppliers. [[def-axiom-of-choice]]

[F1] W2 convergence implies weak convergence of the two-homogeneous projections. [[lem-w2-convergence-implies-homogeneous-projection-convergence]]

[F2] The projected-limit theorem makes its weak limit a global minimizer and states that $F(\mu_t)$ converges to the energy of that limit. [[thm-two-homogeneous-projected-limit-is-global-minimizer]]

[F3] For a positive two-homogeneous feature and regularizer, $F(\lambda)=R(\int\Phi dh^2(\lambda))+\int Vdh^2(\lambda)$ whenever $\lambda$ has finite second moment. [[lem-mean-field-projection-identities]]

[F4] Bounded continuous real tests determine Borel probability measures on any metric space. [[cor-weak-limits-are-unique]]

## Proof

**Given:** AC and the data in the Statement.

1.1 Apply [F1] to obtain weak convergence $h^2(\mu_t)\rightharpoonup h^2(\mu_\infty)$. [A1, F1, given]

2.1 The projected-limit theorem [F2] applies to this weak limit. If it denotes the limit by $\nu$, then for every continuous test on the compact sphere both $\nu$ and $\rho:=h^2(\mu_\infty)$ give the limit of the same integrals $\int fdh^2(\mu_t)$. Testing $f\equiv1$ shows that both have the same total mass $M$. If $M=0$, both finite nonnegative measures are zero. If $M>0$, then $\nu/M$ and $\rho/M$ are Borel probability measures with equal integrals against every bounded continuous test, so [F4] gives $\nu=\rho$. Viewed as a measure on $\mathbb R^d$, this limit globally minimizes $F$ over all finite nonnegative Borel measures, exactly as asserted by the theorem. [A1, F2, F4, step 1.1]

3.1 By [F3], the feature and regularizer integrals of $\mu_\infty$ equal those of its two-homogeneous projection, so $F(\mu_\infty)=F(h^2(\mu_\infty))$. By step 2.1, this equals the global minimum of $F$ over finite nonnegative Borel measures on $\mathbb R^d$, and therefore $\mu_\infty$ is itself a global minimizer. [F2, F3, step 2.1] ∎
