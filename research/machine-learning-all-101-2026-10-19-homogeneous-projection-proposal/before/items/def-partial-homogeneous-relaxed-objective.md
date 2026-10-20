---
id: def-partial-homogeneous-relaxed-objective
kind: definition
title: Relaxed objective for a partially one-homogeneous projection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feature-measure-energy, def-partial-one-homogeneous-measure-projection, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Let $\Theta$ be a measurable space, $\mathcal H$ a real Hilbert space, $R:\mathcal H\to[0,\infty)$, $\varphi:\Theta\to\mathcal H$ bounded and strongly measurable, and $\widetilde V:\Theta\to[0,\infty)$ bounded and measurable. Assume the feature and potential are $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. For a finite signed measure $\nu$ on $\Theta$, define

$$J(\nu)=R\!\left(\int_\Theta\varphi\,d\nu\right)+\int_\Theta\widetilde V\,d|\nu|,$$

where $|\nu|$ is the total-variation measure. For every finite nonnegative Borel measure $\mu$ on $\mathbb R\times\Theta$ with integrable $w$ and $h^1(\mu)=\nu$, the feature moment factors through $\nu$ and

$$F(\mu)\ge J(\nu).$$

Equality is attained by the finite nonnegative lift $\mu_\nu=(\iota_+)_{\#}\nu^++(\iota_-)_{\#}\nu^-$, where $\iota_+(\theta)=(1,\theta)$ and $\iota_-(\theta)=(-1,\theta)$. Thus $J(\nu)=\inf\{F(\mu):\mu\ge0,\ h^1(\mu)=\nu\}$.

## Definition references

[[def-feature-measure-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[Chizat and Bach, Proposition A.3 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The model and signed projection in the Definition.

[F1] $h^1(\mu)=\alpha-\beta$, where $\alpha(B)=\int_{w>0,\theta\in B}w\,d\mu$ and $\beta(B)=\int_{w<0,\theta\in B}(-w)\,d\mu$ are finite nonnegative measures. [[def-partial-one-homogeneous-measure-projection]]

[F2] A bounded linear map commutes with Bochner integration, and therefore $\int w\varphi(\theta)d\mu=\int\varphi\,dh^1(\mu)$. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** $\mu$ and $\nu=h^1(\mu)$ as in the Definition.

1.1 Let $\alpha,\beta$ be the measures in [F1]. For every finite measurable partition $(B_j)$ of a measurable set $B$, $\sum_j|\nu(B_j)|=\sum_j|\alpha(B_j)-\beta(B_j)|\le\alpha(B)+\beta(B)$. Taking the supremum over partitions gives $|\nu|(B)\le(\alpha+\beta)(B)$. Since $\widetilde V\ge0$, integration yields $\int\widetilde Vd|\nu|\le\int\widetilde Vd(\alpha+\beta)=\int|w|\widetilde V(\theta)d\mu$. [F1, given, algebra]

2.1 By [F2], the feature moment of $\mu$ is $\int\varphi d\nu$. Adding the risk term to step 1.1 proves $F(\mu)\ge J(\nu)$. The lift $\mu_\nu$ is finite, has $h^1(\mu_\nu)=\nu^+-\nu^- =\nu$, and satisfies $\int|w|\widetilde Vd\mu_\nu=\int\widetilde Vd|\nu|$. Its feature moment is $\int\varphi d\nu$, so $F(\mu_\nu)=J(\nu)$. This proves the infimum identity and its attainment. [F1, F2, step 1.1] ∎
