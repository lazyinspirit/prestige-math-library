---
id: ex-a-linear-system-and-its-fundamental-matrix
kind: example
title: "A linear system and its fundamental matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-variational-equation-along-an-ode-solution,
       lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
       prop-a-fundamental-matrix-is-invertible]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Example

Consider the linear planar system

$$x'(t)=Ax(t),\qquad A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Its solution through $(x_1^0,x_2^0)$ is
$x(t)=(e^t x_1^0,e^{-t}x_2^0)$, and a fundamental matrix is

$$\Phi(t)=\begin{pmatrix}e^t&0\\0&e^{-t}\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The constant matrix $A=\operatorname{diag}(1,-1)$.

[F1] The variational equation along a solution is a linear matrix ODE ([[def-variational-equation-along-an-ode-solution]]).

[L1] Linear matrix ODEs have unique solutions on compact intervals ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L2] A fundamental matrix is invertible at every time ([[prop-a-fundamental-matrix-is-invertible]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating the displayed formula gives [given] $x'(t)=(e^t x_1^0,-e^{-t}x_2^0)=Ax(t)$, and $x(0)=(x_1^0,x_2^0)$. So it is a solution. [given]

2.1 The matrix $\Phi$ satisfies $\Phi'(t)=A\Phi(t)$ and $\Phi(0)=I_2$, so by [F1, L1, L2, step 1.1] [F1] and [L1] it is the fundamental matrix of this system. Its determinant is $e^t e^{-t}=1$, which is consistent with [L2]. [F1, L1, L2, step 1.1]

3.1 Therefore the linear system has the stated solution operator and [step 2.1] fundamental matrix. [step 2.1] ∎
