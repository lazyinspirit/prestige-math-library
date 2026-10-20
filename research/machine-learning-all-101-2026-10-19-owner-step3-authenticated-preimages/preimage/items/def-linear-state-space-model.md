---
id: def-linear-state-space-model
kind: definition
title: Continuous-time linear state-space model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-countable-choice, def-integrable-real-and-complex-functions-and-their-integrals, def-absolutely-continuous-function, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §2.1"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Definition

Assume the Axiom of Countable Choice, so the usual Lebesgue-measurable sets on $\mathbb R$ form a complete measure space with Lebesgue measure $\lambda$; restrict that measure to the interval $I$ when needed. Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let $I\subseteq\mathbb R$ be an interval with $t_0\in I$, and let $N,m,p\ge1$ be finite. A continuous-time linear state-space model consists of matrices $A\in\mathbb F^{N\times N}$, $B\in\mathbb F^{N\times m}$, $C\in\mathbb F^{p\times N}$, $D\in\mathbb F^{p\times m}$, an initial value $x_0\in\mathbb F^N$, and an input $u:I\to\mathbb F^m$ whose real and imaginary coordinates are Lebesgue measurable and integrable on every compact subinterval of $I$. A state trajectory is a function $x:I\to\mathbb F^N$ whose real and imaginary coordinates are absolutely continuous on every compact subinterval of $I$ (with absolute continuity defined by the $\varepsilon$–$\delta$ condition on finite families of disjoint subintervals), with $x(t_0)=x_0$ and $x'(t)=Ax(t)+Bu(t)$ outside a Lebesgue-null subset of $I$. Its output is $y(t)=Cx(t)+Du(t)$. The term $Du(t)$ is the direct input-to-output term and is separate from the state contribution $Cx(t)$.

## Definition references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §2.1](https://arxiv.org/pdf/2111.00396)

[[def-integrable-real-and-complex-functions-and-their-integrals]]

[[def-absolutely-continuous-function]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[thm-lebesgue-measure-is-a-complete-measure]]

[[def-countable-choice]]
