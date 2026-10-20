---
id: ex-du-interpolation-does-not-imply-test-fit
kind: example
title: "Empirical interpolation does not determine test predictions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-du-overparameterized-network-architectures-and-gram-kernels]
justified_by: []
proof_strategy: direct
axiom_use: "The two-function example is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Du et al., empirical training objective, equation (1)"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "University of Toronto, Theory of Deep Learning, Lecture 6, slides 31–43"
      url: "https://www.cs.toronto.edu/~rgrosse/courses/csc2541_2022/slides/lec06.pdf"
---

## Example

Take one training input $x=0$ with label $y=0$, and one test input $x_*=1$. Define $g_0(x)=0$ and $g_1(x)=x$, and define the one-point empirical quadratic loss by $L_S(g)=\frac12(g(0)-y)^2$. Both predictors have empirical loss zero, while their test predictions are $g_0(1)=0$ and $g_1(1)=1$. Therefore agreement with the training labels alone does not determine test predictions.

## Example references

[Du et al., empirical training objective, equation (1)](https://proceedings.mlr.press/v97/du19c.html)

[Toronto, Theory of Deep Learning, Lecture 6, slides 31–43, separation of training interpolation and generalization questions](https://www.cs.toronto.edu/~rgrosse/courses/csc2541_2022/slides/lec06.pdf)

[[def-du-overparameterized-network-architectures-and-gram-kernels|Empirical quadratic training loss]]

## Facts & Assumptions

**Given:** The single training example, test input, two predictors, and empirical quadratic loss.

[F1] The empirical objective is the sum of squared training residuals and does not include a test input absent from the training sample. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

## Verification

**Given:** $x=0$, $y=0$, $x_*=1$, $g_0(x)=0$, and $g_1(x)=x$.

1.1 At the training point, $g_0(0)=g_1(0)=0=y$, so both one-point empirical losses $\frac12(g_j(0)-y)^2$ are zero. [F1, given, algebra]

2.1 At the test point, $g_0(1)=0$ and $g_1(1)=1$, so the two predictors agree on the entire training sample but have different test predictions. This verifies the stated logical limitation of empirical interpolation. [given, step 1.1, algebra] ∎
