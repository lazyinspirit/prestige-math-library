---
id: ex-moving-features-versus-fixed-features
kind: example
title: Moving features can represent a target missed by a fixed feature
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy]
justified_by: []
proof_strategy: direct
axiom_use: "The finite-dimensional feature comparison is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Example

Let $\mathcal H=\mathbb R^2$, $y=(1,0)$, $R(z)=\tfrac12\|z-y\|^2$, $\Theta=[0,2\pi]$, $\varphi(\theta)=(\cos\theta,\sin\theta)$, and $V=0$. The one-particle measure assigning unit mass to $(a,\theta)$ represents $a\varphi(\theta)$ and can attain zero risk at $(a,\theta)=(1,0). If the feature is fixed at $\theta=\pi/2$ and only $a$ varies, the minimum risk is $1/2$. This finite-dimensional feature-energy example shows a representational distinction only; it makes no convergence claim about either training dynamics.

## Example references

[[def-feature-measure-energy]]

[Chizat and Bach, Sections 1.1 and 2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The finite-dimensional model and risk in the Example.

[F1] A one-particle measure at $(a,\theta)$ has feature moment $a\varphi(\theta)$ and objective $R(a\varphi(\theta))$. [[def-feature-measure-energy]]

## Verification

**Given:** $R$, $y$, $\varphi$, and [F1] as in the Example.

1.1 At $(a,\theta)=(1,0)$, $\varphi(0)=(1,0)=y$, so [F1] gives risk $R(y)=0$. Since $R$ is a squared norm divided by two, no objective value is negative; hence the moving model has minimum risk zero. [F1, given, algebra]

2.1 With the feature fixed at $\pi/2$, $\varphi(\pi/2)=(0,1)$ and $\|a\varphi(\pi/2)-y\|^2=a^2+1$. Therefore $R(a\varphi(\pi/2))=(a^2+1)/2\ge1/2$, with equality at $a=0$. This gives the claimed fixed-feature minimum. [F1, given, algebra] ∎
