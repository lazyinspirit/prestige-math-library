---
id: lem-partial-energy-continuous-under-w2
kind: lemma
title: Partial one-homogeneous energy is continuous under W2 convergence
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, def-wasserstein-two-space-and-couplings, thm-bounded-linear-maps-commute-with-bochner-integration, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies a sequence of couplings with quadratic costs approaching the W2 infimum; the estimate after coupling selection is deterministic."
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

Assume AC. Let $\Theta\subseteq\mathbb R^q$ be closed and convex, let $\varphi:\Theta\to\mathcal H$ and $\widetilde V:\Theta\to[0,\infty)$ be bounded Lipschitz maps, and set $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. If $\mu_n,\mu\in\mathcal P_2(\mathbb R\times\Theta)$ and $W_2(\mu_n,\mu)\to0$, then $F(\mu_n)\to F(\mu)$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-two-space-and-couplings]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[Chizat and Bach, Lemma A.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The model and W2-convergent laws in the Statement.

[A1] AC supplies a sequence of couplings whose quadratic costs approach the W2 infimum. [[def-axiom-of-choice]]

[F1] W2 is the infimum of quadratic coupling costs, so couplings can be chosen with RMS displacement tending to zero. [[def-wasserstein-two-space-and-couplings]]

[F2] Bounded linear maps commute with Bochner integration, so feature integrals against either marginal are integrals of their coordinate pullbacks against a coupling. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** $\mu_n,\mu$ and [F1]–[F2].

1.1 By AC choose couplings $\pi_n$ with $\int(|w-w'|^2+|\theta-\theta'|^2)d\pi_n\to0$. Boundedness and Lipschitz continuity give $$\|w\varphi(\theta)-w'\varphi(\theta')\|\le\|\varphi\|_\infty|w-w'|+\operatorname{Lip}(\varphi)|w'|\,|\theta-\theta'|.$$ By Cauchy–Schwarz, the integral of the right side tends to zero: the first term is bounded by $\|\varphi\|_\infty(\int|w-w'|^2d\pi_n)^{1/2}$, and the second by $\operatorname{Lip}(\varphi)(\int|w'|^2d\pi_n)^{1/2}(\int|\theta-\theta'|^2d\pi_n)^{1/2}$, whose first factor stays bounded by W2 convergence. [A1, F1, F2, given, algebra]

2.1 The same estimate with scalar $\widetilde V$ in place of $\varphi$ gives $\int Vd\mu_n\to\int Vd\mu$. Step 1.1 gives convergence of feature moments in $\mathcal H$; continuity of $R$ therefore gives convergence of the risk terms. Adding the two limits proves $F(\mu_n)\to F(\mu)$. [F1, F2, step 1.1] ∎
