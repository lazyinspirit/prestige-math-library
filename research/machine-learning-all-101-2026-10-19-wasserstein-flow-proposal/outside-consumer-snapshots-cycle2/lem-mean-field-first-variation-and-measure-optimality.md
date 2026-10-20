---
id: lem-mean-field-first-variation-and-measure-optimality
kind: lemma
title: First variation and optimality over nonnegative measures
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
proof_strategy: direct
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

Let $\mathcal H$ be a real Hilbert space, let $\Omega$ be the feature domain, and let $F(\mu)=R(\int_\Omega\Phi\,d\mu)+\int_\Omega V\,d\mu$ be finite on a finite nonnegative Borel measure $\mu$, with $R$ differentiable and convex. Define $G_\mu(u)=dR_{m_\mu}[\Phi(u)]+V(u)$, where $m_\mu=\int_\Omega\Phi\,d\mu$. Then $\mu$ minimizes $F$ over all finite nonnegative Borel measures if and only if $G_\mu(u)\ge0$ for every $u\in\Omega$ and $G_\mu(u)=0$ for $\mu$-almost every $u$.

## Statement references

[[def-feature-measure-energy]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[Chizat and Bach, Proposition 3.1 and Appendix C.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The feature-measure energy, a finite nonnegative measure $\mu$, and a differentiable convex risk $R$. For the necessity direction assume $\mu$ is a minimizer; for sufficiency assume $G_\mu\ge0$ everywhere and $G_\mu=0$ $\mu$-almost everywhere.

[F1] For a finite nonnegative Borel measure $\mu$ on $\mathbb R^d$, set $F(\mu)=R(\int_\Omega\Phi(u)\,d\mu(u))+\int_\Omega V(u)\,d\mu(u)$ when $\mu$ is concentrated on $\Omega$, the Bochner integral exists, and the scalar integral is finite; set $F(\mu)=+\infty$ otherwise. [[def-feature-measure-energy]]

[F2] A bounded linear map commutes with Bochner integration on every measurable set: $T(\int_E f\,d\mu)=\int_E Tf\,d\mu$. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** $\mu,R,\Phi,V$ as in the Statement.

1.1 Fix $u\in\Omega$. For $t\ge0$, the measure $\mu+t\delta_u$ is nonnegative and $F(\mu+t\delta_u)$ is finite for sufficiently small $t$. Its right derivative at $t=0$ is $dR_{m_\mu}[\Phi(u)]+V(u)=G_\mu(u)$. If $\mu$ minimizes $F$, this derivative is nonnegative. Since $u$ was arbitrary, $G_\mu\ge0$ everywhere. [given, F1, choose]

1.2 For $t$ in a neighborhood of $0$ with $1+t>0$, the measure $(1+t)\mu$ is admissible. Differentiating $F((1+t)\mu)$ at $0$ gives $dR_{m_\mu}[m_\mu]+\int V\,d\mu=\int G_\mu\,d\mu$ by [F2]. A minimum at the interior parameter $t=0$ forces this derivative to be zero. Since $G_\mu$ is nonnegative and integrable, $\int G_\mu d\mu=0$ implies $G_\mu=0$ $\mu$-almost everywhere. [given, F1, F2, algebra]

2.1 For any finite-energy nonnegative $\nu$, convexity of $R$ gives $R(m_\nu)\ge R(m_\mu)+dR_{m_\mu}[m_\nu-m_\mu]$. By [F2], after adding the $V$ terms this is $F(\nu)-F(\mu)\ge\int G_\mu d\nu-\int G_\mu d\mu\ge0$. Infinite-energy competitors cannot lower $F$, so $\mu$ is a global minimizer. [given, F1, F2, step 1.2, algebra] ∎
