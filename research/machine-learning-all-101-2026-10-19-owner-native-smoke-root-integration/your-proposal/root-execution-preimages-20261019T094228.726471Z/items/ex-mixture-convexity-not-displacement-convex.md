---
id: ex-mixture-convexity-not-displacement-convex
kind: example
title: Mixture convexity does not imply displacement convexity
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-generalized-wasserstein-geodesic-and-strong-subgradient, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the generalized-geodesic transport framework; the scalar convexity and Dirac coupling calculation are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Example

Assume AC. Let $\Omega=\mathbb R$, $\mathcal H=\mathbb R$, $R(z)=z^2$, $\Phi(x)=\sin x$, and $V(x)=0$, so $F(\mu)=(\int\sin x\,d\mu(x))^2$ for every finite nonnegative Borel measure. For each $r>0$, take $Q_r=[-r,r]$ and $C_1=C_2=1$; the cutoff, boundedness, Lipschitz, and linear-growth assumptions hold. This energy is convex under linear mixtures of measures, but it is not displacement convex along $W_2$ geodesics: along the geodesic from $\delta_0$ to $\delta_\pi$, its endpoint values are zero and its midpoint value is one.

## Example references

[[def-feature-measure-energy]]

[[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

[[def-axiom-of-choice]]

[Chizat and Bach, Appendix B.2.1 and Theorem 2.6](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 9](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The feature-energy data in the Example.

[F2] The unique coupling of two Dirac probability measures is concentrated on their support-point pair, so their $W_2$ geodesic is the linear interpolation of those points. [[def-generalized-wasserstein-geodesic-and-strong-subgradient]]

## Proof


**Given:** $F$, $\mu_0,\mu_1$, and AC as in the Example.

1.1 For $a,b\in\mathbb R$ and $0\le t\le1$, expansion gives $(1-t)a^2+tb^2-((1-t)a+tb)^2=t(1-t)(a-b)^2\ge0$. Thus the real square obeys the convexity inequality, including $t=0,1$ and $a=b$, by core algebra alone. [given, algebra]

2.1 For finite nonnegative measures $\mu_0,\mu_1$, write $a=\int\sin x\,d\mu_0$ and $b=\int\sin x\,d\mu_1$. Linearity of integration gives $F((1-t)\mu_0+t\mu_1)=((1-t)a+tb)^2\le(1-t)a^2+tb^2=(1-t)F(\mu_0)+tF(\mu_1)$ by step 1.1. Thus $F$ is mixture-convex. [step 1.1, algebra]

3.1 For $\mu_0=\delta_0$ and $\mu_1=\delta_\pi$, [F2] gives the geodesic $\mu_t=\delta_{\pi t}$. Then $F(\mu_0)=F(\mu_1)=0$, whereas $F(\mu_{1/2})=\sin^2(\pi/2)=1$. The convexity inequality at $t=1/2$ would require $1\le0$, which is false. Hence mixture convexity does not imply displacement convexity. [F2, step 2.1, given] ∎
