---
id: ex-revised-simplex-phase-one-infeasible
kind: example
title: "An infeasible Phase I problem and its Farkas certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-revised-simplex-phase-one
  - thm-revised-simplex-phase-one-extraction-and-farkas
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 7
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.5 and §4.6"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.5"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Example

Consider $x_1=1$, $x_2=1$, and $-x_1-x_2+x_3=-3$ with $x_1,x_2,x_3\ge0$. The equality matrix has full row rank.

## Facts & Assumptions

**Given:** $A=\begin{bmatrix}1&0&0\\0&1&0\\-1&-1&1\end{bmatrix}$, $b=(1,1,-3)^{\mathsf T}$, and $x\ge0$.

[F1] [[alg-revised-simplex-phase-one]]: Add artificial variables $u\in\mathbb R^m$ and solve the Phase I problem $\min\mathbf1^{\mathsf T}u$ subject to $\widetilde A x+u=\widetilde b$, $x,u\ge0$, starting at $x=0,u=\widetilde b$ with artificial basis $I_m$.

[F2] [[thm-revised-simplex-phase-one-extraction-and-farkas]]: If its minimum artificial-variable sum is positive, its returned vector yields a Farkas certificate $A^{\mathsf T}q\ge0$, $b^{\mathsf T}q<0$, so the original system is infeasible.

## Verification


1.1 The third right-hand side is negative, so $D=\operatorname{diag}(1,1,-1)$ gives $\widetilde A=DA=\begin{bmatrix}1&0&0\\0&1&0\\1&1&-1\end{bmatrix}$ and $\widetilde b=Db=(1,1,3)^{\mathsf T}$. The Phase I point $x=(1,1,0)$, $u=(0,0,1)$ satisfies $\widetilde A x+u=\widetilde b$ and has objective $1$. [given, F1, algebra]

1.2 The Phase I dual vector $y=(-1,-1,1)$ satisfies $\widetilde A^{\mathsf T}y=(0,0,-1)^{\mathsf T}\le0$ and $\widetilde b^{\mathsf T}y=1$. For any Phase I feasible $(x,u)$, its objective $\mathbf1^{\mathsf T}u$ is at least $\widetilde b^{\mathsf T}y=1$ by multiplying the constraints by $y$ and using $\widetilde A^{\mathsf T}y\le0$, $u\ge0$, and $y\le\mathbf1$. Thus the displayed feasible point attains the Phase I optimum $1>0$. [given, F1, algebra]

2.1 The original Farkas vector is $q=-D^{\mathsf T}y=(1,1,1)$. Direct calculation gives $A^{\mathsf T}q=(0,0,1)^{\mathsf T}\ge0$ and $b^{\mathsf T}q=1+1-3=-1<0$. Hence no $x\ge0$ can satisfy $Ax=b$, as also follows from [F2]. [F2, step 1.1, step 1.2, algebra] ∎
