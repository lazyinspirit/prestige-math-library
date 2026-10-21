---
id: ex-separated-and-nonseparated-initialization
kind: example
title: Separated and nonseparated initial supports
status: published
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-wasserstein-gradient-flow-for-feature-energy, def-feature-measure-energy, def-support-of-a-borel-measure, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-intermediate-value]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Wasserstein-flow framework; the two separation checks use only continuity of the Euclidean norm and the intermediate value theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Ambrosio, Gigli, and Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Example

Assume AC. In $\Omega=\mathbb R^2$, let $\sigma$ be normalized arc-length probability on the unit circle $S^1=\{x:|x|=1\}$ and let $\delta_0$ be the point mass at the origin. For radii $r_a=1/2$ and $r_b=2$, the support of $\sigma$ is contained in the ball $B(0,r_b)$ and separates the two spheres $r_aS^1$ and $r_bS^1$: every continuous path from one sphere to the other meets $S^1$. In contrast, the support of $\delta_0$ is contained in $B(0,r_b)$ but does not separate those spheres. These are only checks of the topological initialization condition; neither example asserts that any flow converges or that its limit is globally minimizing.

## Example references

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-feature-measure-energy]]

[[def-support-of-a-borel-measure]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[Chizat and Bach, Theorem 3.3](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC and the two probability measures in the Example.

[F1] The support of a finite Borel measure is the closed set of points whose every open neighborhood has positive measure. [[def-support-of-a-borel-measure]]

[F2] A continuous real-valued function on an interval takes every value between its endpoint values. [[thm-intermediate-value]]

## Proof


**Given:** The measures and radii in the Example.

1.1 Every open ball centered at a point of $S^1$ intersects an arc of positive arc length, so [F1] gives $\operatorname{supp}\sigma=S^1$. Since every point of $S^1$ has norm $1<2$, the support lies in $B(0,2)$. [F1, given]

2.1 Let $\gamma:[0,1]\to\mathbb R^2$ be continuous with $|\gamma(0)|=1/2$ and $|\gamma(1)|=2$. The scalar map $t\mapsto|\gamma(t)|$ is continuous because $||x|-|y||\le|x-y|$. By [F2], it equals $1$ for some $t$, so $\gamma(t)\in S^1$ and the support separates the two spheres. [F2, step 1.1]

3.1 The support of $\delta_0$ is $\{0\}$ by [F1]. The radial segment $\gamma(t)=((1-t)/2+2t,0)$ joins $(1/2,0)$ to $(2,0)$ and has strictly positive norm throughout, so it avoids $\{0\}$. Thus this support does not separate the spheres. No conclusion about energy minimizers follows from either topological calculation. [F1, given] ∎