---
id: ex-phi-one-at-zero-without-division
kind: example
title: "The value phi_1(0) is obtained directly from its series"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-phi-functions-by-everywhere-convergent-series
  - thm-phi-recurrence-and-augmented-matrix-actions
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 2, Theorem 2.1, augmented matrix identity."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 2, phi-function definition, and Section 3.1, augmented matrix."
---

## Statement

For the zero $1\times1$ matrix, verify directly that $\varphi_1(0)=1$ and that the augmented exponential returns this value without evaluating $(e^z-1)/z$.

## Facts & Assumptions

**Given:** $X=[0]\in M_1(\mathbb C)$, $w=[1]\in\mathbb C$, and $k=1$.

[F1] [[def-phi-functions-by-everywhere-convergent-series]]: $\varphi_1(X)=\sum_{j\ge0}X^j/(j+1)!$, with $X^0=I_n$.

[F2] [[thm-phi-recurrence-and-augmented-matrix-actions]]: the first coordinate of $e^{B_1(X,w)}(0,1)^{\mathsf T}$ is $\varphi_1(X)w$, with no division by $X$ or a scalar.

## Proof

1.1 Since $X^0=[1]$ and $X^j=[0]$ for every $j\ge1$, the series in [F1] has only the term $1/1!=1$ nonzero. Hence $\varphi_1(X)=[1]$. [given, F1, algebra]

2.1 Here $J_1=[0]$ and $B_1(X,w)=\begin{bmatrix}0&1\\0&0\end{bmatrix}=:N$, so $N^2=0$ and $e^N=I+N$. Therefore $e^N(0,1)^{\mathsf T}=(1,1)^{\mathsf T}$; [F2] identifies its first coordinate with $\varphi_1(X)w=1$. The quotient $(e^z-1)/z$ is undefined at $z=0$, while the series and augmented action above are defined there. [given, step 1.1, F2, algebra] ∎
