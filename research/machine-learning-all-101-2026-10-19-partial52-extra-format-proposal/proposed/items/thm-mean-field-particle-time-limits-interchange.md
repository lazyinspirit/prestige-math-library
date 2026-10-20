---
id: thm-mean-field-particle-time-limits-interchange
kind: theorem
title: Particle number and training time limits interchange qualitatively
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 13
deps: [def-feature-measure-energy, thm-finite-particle-flows-converge-in-w2, thm-localized-wasserstein-flow, lem-feature-energy-continuous-under-w2-on-a-common-cutoff, def-wasserstein-two-space-and-couplings, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the finite-particle convergence theorem and the optimal-coupling construction."
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

Assume AC and the feature-energy hypotheses. Let $\mu_t$ be a Wasserstein gradient flow from $\mu_0$ concentrated on a common cutoff $Q_{r_0}$, with $F(\mu_t)\to F^*:=\inf_{\lambda\ge0}F(\lambda)$. For each $m\ge1$, let $\mu_{m,t}$ be a finite-particle gradient flow for the same objective, with $\mu_{m,0}$ concentrated on $Q_{r_0}$ and $W_2(\mu_{m,0},\mu_0)\to0$. Assume that for every fixed $t$, $W_2(\mu_{m,t},\mu_t)\to0$ as $m\to\infty$, with both laws concentrated on a common cutoff for that finite time. Then both iterated limits exist and

$$\lim_{t\to\infty}\lim_{m\to\infty}F(\mu_{m,t})=\lim_{m\to\infty}\lim_{t\to\infty}F(\mu_{m,t})=F^*.$$

This is qualitative and gives no rate uniform in $m$ or $t$.

## Statement references

[[def-feature-measure-energy]]

[[thm-finite-particle-flows-converge-in-w2]]

[[lem-feature-energy-continuous-under-w2-on-a-common-cutoff]]

[Chizat and Bach, Lemma C.15](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the limiting flow and its energy convergence, and the particle-flow assumptions in the Statement.

[A1] AC is inherited from the finite-particle convergence theorem and the coupling construction. [[def-axiom-of-choice]]

[F1] For every fixed $t$, $W_2(\mu_{m,t},\mu_t)\to0$. [[thm-finite-particle-flows-converge-in-w2]]

[F2] Energy is continuous for W2-convergent measures on their common cutoff. [[lem-feature-energy-continuous-under-w2-on-a-common-cutoff]]

[F3] Every particle law is a finite nonnegative competitor, so $F(\mu_{m,t})\ge F^*$. [[def-feature-measure-energy]]

[F4] The measure energy identity holds along localized flows, and the finite-particle embedding realizes the atomic particle flow as such a localized flow with $F_m=F(\mu_{m,t})$. [[thm-localized-wasserstein-flow]] [[thm-finite-particle-flows-converge-in-w2]]

## Proof

**Given:** AC and the assumptions in the Statement.

1.1 Fix $t$. By [F1] and [F2], $F(\mu_{m,t})\to F(\mu_t)$ as $m\to\infty$. Taking $t\to\infty$ after this inner limit gives $F^*$ by the assumed mean-field energy convergence. [A1, F1, F2, given]

2.1 For each $m$, [F3] and [F4] show that $e_m:=\lim_{t\to\infty}F(\mu_{m,t})$ exists and satisfies $e_m\ge F^*$. Let $\epsilon>0$. Choose $t_0$ with $F(\mu_{t_0})<F^*+\epsilon/2$. By step 1.1, there is $m_0$ such that for every $m\ge m_0$, $F(\mu_{m,t_0})<F(\mu_{t_0})+\epsilon/2<F^*+\epsilon$. Monotonicity [F4] gives $e_m\le F(\mu_{m,t_0})<F^*+\epsilon$ for every $m\ge m_0$. Together with the lower bound, this proves $e_m\to F^*$. [A1, F3, F4, step 1.1, choose] ∎
