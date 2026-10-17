---
id: def-matrix-contractivity-and-logarithmic-norm
kind: definition
title: "Matrix-step contractivity and the logarithmic norm in a specified inner product"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"
---

## Definition

Let $d\ge1$ be an integer and let $G\in\mathbb R^{d\times d}$ be symmetric positive definite. Define the inner product and its vector norm on $\mathbb R^d$ by

$$\langle x,y\rangle_G=x^\mathsf{T}Gy,\qquad \|x\|_G=\sqrt{x^\mathsf{T}Gx}.$$

For $M\in\mathbb R^{d\times d}$, its induced operator norm is $\|M\|_G=\sup_{x\ne0}\|Mx\|_G/\|x\|_G$. A matrix step $M$ is contractive in this specified inner product when $\|M\|_G\le1$.

For $A\in\mathbb R^{d\times d}$, its logarithmic norm in the same inner product is

$$\mu_G(A)=\sup_{x\ne0}\frac{x^\mathsf{T}GAx}{x^\mathsf{T}Gx}.$$

In the Euclidean inner product $G=I$, write $\|\cdot\|_2$ and $\mu_2$. A real matrix is normal when $AA^\mathsf{T}=A^\mathsf{T}A$ and nonnormal otherwise.

For a rational stability function $R=P/Q$, the matrix step $R(hA)$ is defined only when $Q(hA)$ is invertible; its contractivity is the separate condition $\|R(hA)\|_G\le1$.
