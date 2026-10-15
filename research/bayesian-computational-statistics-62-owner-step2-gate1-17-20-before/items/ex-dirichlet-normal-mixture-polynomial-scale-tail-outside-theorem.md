---
id: ex-dirichlet-normal-mixture-polynomial-scale-tail-outside-theorem
kind: example
title: "A polynomial scale tail is outside the stated theorem"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 10
deps:
  - thm-dirichlet-normal-mixture-posterior-contraction
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, discussion following Theorem 1"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Example

Let $G$ be the mixture with weight $1/2$ on $\operatorname{Unif}[1,2]$ and
weight $1/2$ on the Pareto law with density $2s^{-2}\mathbf1_{[2,\infty)}(s)$.
This scale law has a polynomial upper tail.

## Facts & Assumptions

**Given:** The scale law $G$ just defined and the upper-tail premise in [[thm-dirichlet-normal-mixture-posterior-contraction]].

[F1] [[thm-dirichlet-normal-mixture-posterior-contraction]]: the theorem requires $1-G(s)\lesssim e^{-\beta s^\gamma}$ for some $\beta>0$, $\gamma>1$ as $s\to\infty$.

## Verification

1.1 The Pareto density integrates to one because $\int_2^\infty2s^{-2}ds=1$, so $G$ is a probability measure. For $s<1$, $G(s)=0$, which satisfies every required lower-tail upper bound near zero. [given, algebra]

1.2 For $s\ge2$, the uniform component has no mass above $s$ and the Pareto survival function is $2/s$; the mixture weight $1/2$ therefore gives $1-G(s)=1/s$. [given, algebra]

2.1 For any $\beta>0$ and $\gamma>1$, $e^{\beta s^\gamma}/s\to\infty$, so $1/s$ is not bounded above by a constant multiple of $e^{-\beta s^\gamma}$. Thus this prior is outside the theorem's upper-tail hypotheses. This example says nothing about whether its posterior contracts or is inconsistent. [F1, step 1.2, given, algebra] ∎