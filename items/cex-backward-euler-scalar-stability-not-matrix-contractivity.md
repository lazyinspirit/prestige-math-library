---
id: cex-backward-euler-scalar-stability-not-matrix-contractivity
kind: counterexample
title: "Backward Euler scalar A-stability does not imply matrix contractivity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
  - def-matrix-contractivity-and-logarithmic-norm
  - thm-backward-euler-a-and-l-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"

---
## Statement refuted

For every real matrix $A$ whose characteristic polynomial has all roots in the closed left half-plane, the backward-Euler matrix step $(I-A)^{-1}$ is contractive in the Euclidean norm.

## Facts & Assumptions

**Given:** The real matrix $A=\begin{pmatrix}-1&16\\0&-1\end{pmatrix}$ and a unit backward-Euler step $h=1$.

[F1] [[def-matrix-contractivity-and-logarithmic-norm]]: Euclidean contractivity requires the induced norm of the matrix step to be at most one; $\mu_2(A)=\sup_{x\ne0}x^\mathsf{T}Ax/\|x\|_2^2$.

[F2] [[thm-backward-euler-a-and-l-stability]]: the backward-Euler scalar stability function is $R_{\mathrm{BE}}(z)=1/(1-z)$ and is A-stable.

## Counterexample
1.1 The characteristic polynomial of $A$ is $(\nu+1)^2$, so its roots are both $-1$ and the scalar backward-Euler factor is $R_{\mathrm{BE}}(-1)=1/2$. Also $A A^\mathsf{T}\ne A^\mathsf{T}A$, so $A$ is nonnormal. [given, F2, algebra]

1.2 Direct inversion gives $(I-A)^{-1}=\begin{pmatrix}1/2&4\\0&1/2\end{pmatrix}$. For $e_2=(0,1)^\mathsf{T}$, this step gives $(4,1/2)^\mathsf{T}$, whose Euclidean norm is $\sqrt{65/4}>1=\|e_2\|_2$. Thus the matrix step is not contractive. [given, F1, algebra]

2.1 For $x=(x_1,x_2)^\mathsf{T}$, $7\|x\|_2^2-x^\mathsf{T}Ax=8(x_1-x_2)^2\ge0$, with equality at $x_1=x_2\ne0$. Hence $\mu_2(A)=7>0$, which records the nonnormal growth hidden by the negative scalar test value. The claimed implication is false. [F1, step 1.1, algebra] ∎
