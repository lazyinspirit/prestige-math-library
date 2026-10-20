---
id: lem-partial-relaxed-objective-signwise-optimality
kind: lemma
title: Signwise first-variation conditions minimize the relaxed objective
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-feature-measure-energy, def-partial-homogeneous-relaxed-objective, def-partial-one-homogeneous-measure-projection, thm-bounded-linear-maps-commute-with-bochner-integration]
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

Let $R:\mathcal H\to[0,\infty)$ be convex and differentiable, let $\varphi:\Theta\to\mathcal H$ be bounded and strongly measurable, and let $\widetilde V:\Theta\to[0,\infty)$ be bounded and measurable. For a finite signed measure $\nu=\nu^+-\nu^-$, put $m_\nu=\int\varphi\,d\nu$, $G_+(\theta)=dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$, and $G_-(\theta)=-dR_{m_\nu}[\varphi(\theta)]+\widetilde V(\theta)$. If $G_+,G_-\ge0$ everywhere, $G_+=0$ $\nu^+$-almost everywhere, and $G_-=0$ $\nu^-$-almost everywhere, then $\nu$ globally minimizes $J(\lambda)=R(\int\varphi\,d\lambda)+\int\widetilde V\,d|\lambda|$ over all finite signed measures $\lambda$.

## Statement references

[[def-partial-homogeneous-relaxed-objective]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-feature-measure-energy]]

[Chizat and Bach, Proposition 3.1 and Appendix C.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The signed measure, convex risk, feature, penalty, and signwise conditions in the Statement.

[F1] $|\lambda|=\lambda^++\lambda^-$ is the total-variation measure of a finite signed measure, and $\lambda=\lambda^+-\lambda^-$. [[def-partial-homogeneous-relaxed-objective]]

[F2] Bounded linear maps commute with Bochner integration, so $dR_{m_\nu}[\int\varphi\,d(\lambda-\nu)]=\int dR_{m_\nu}[\varphi]d(\lambda-\nu)$. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** $\nu,\lambda$, and the assumptions in the Statement.

1.1 Convexity and differentiability of $R$ give $R(m_\lambda)\ge R(m_\nu)+dR_{m_\nu}[m_\lambda-m_\nu]$. By [F2], add the penalty difference and write each signed measure as its Jordan parts to obtain

$$J(\lambda)-J(\nu)\ge \int G_+\,d\lambda^+ +\int G_-\,d\lambda^- -\int G_+\,d\nu^+ -\int G_-\,d\nu^-.$$

The first two integrals are nonnegative because $G_\pm\ge0$ and $\lambda^\pm$ are nonnegative; the last two vanish by the assumed almost-everywhere equalities. Thus $J(\lambda)\ge J(\nu)$ for every finite signed $\lambda$, proving global minimality. [F1, F2, given, algebra] ∎
