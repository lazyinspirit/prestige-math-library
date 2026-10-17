---
id: ex-revised-simplex-primal-dual-trace
kind: example
title: "A one-pivot primal and dual certificate trace"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-revised-simplex-basis-dictionary
  - thm-revised-simplex-primal-pivot-objective-ray-optimality
  - thm-revised-dual-simplex-invariant-and-farkas
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 4
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1–3.2 and 4.5"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§2–3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Example

First consider $\min x_1+2x_2$ subject to $x_1+x_2=1$ and $x_1,x_2\ge0$. Start from basis $B=(2)$, so $x=(0,1)$, $y=2$, and $\bar c_1=-1$. The primal ratio test pivots $x_1$ in at $\theta=1$; the new basis is $B=(1)$ with $x=(1,0)$, $y=1$, and $\bar c_2=1$.

For the same $A$ and $c$ but right-hand side $b=-1$, the basis $B=(1)$ remains dual feasible and has basic value $x_1=-1$. The dual-simplex row has no negative nonbasic coefficient, giving a Farkas certificate.

## Facts & Assumptions

**Given:** The exact two-variable LP data in the Example and the basis definitions and pivot results below.

[F1] [[def-revised-simplex-basis-dictionary]]: The basic vector $x(B)$ is defined by $x_B(B)=A_B^{-1}b$ and $x_j(B)=0$ for $j\in N$; the basis is primal feasible, and $x(B)$ is a basic feasible solution, exactly when $A_B^{-1}b\ge0$.

[F2] [[thm-revised-simplex-primal-pivot-objective-ray-optimality]]: At a primal-feasible basis, a nonbasic $j$ with $\bar c_j<0$ and some positive entry of $d=A_B^{-1}a_j$ admits a feasible minimum-ratio pivot with objective change $\theta\bar c_j$. If all nonbasic reduced costs are nonnegative at a primal-feasible basis, its basic vector is optimal.

[F3] [[thm-revised-dual-simplex-invariant-and-farkas]]: At a dual-feasible basis, for a row $i$ with $x_{B_i}<0$, if there is no nonbasic $j$ with $d_{ij}=(A_B^{-1}a_j)_i<0$, then $q=A_B^{-\mathsf T}e_i$ satisfies $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$.

## Verification


1.1 With $B=(2)$, $A_B=1$, $x_2=1$, and $y=c_2=2$. Thus $\bar c_1=1-2=-1$, so $x_1$ is a valid entering variable. [F1, given, algebra]

1.2 For the changed right-hand side $b=-1$ and basis $B=(1)$, $x_1=-1$ while $y=1$ and $\bar c_2=1\ge0$, so the basis is dual feasible and primal infeasible. Its only nonbasic coefficient is $d_{12}=A_B^{-1}a_2=1\ge0$. [F1, given, algebra]

2.1 The direction coefficient is $d=A_B^{-1}a_1=1$ and the ratio is $x_2/d=1$. The pivot yields $x_1=1,x_2=0$ and changes cost by $1\cdot(-1)=-1$, from $2$ to $1$. [F1, F2, step 1.1, algebra]

3.1 At the new basis $B=(1)$, $y=c_1=1$ and $\bar c_2=2-1=1\ge0$. The vector is feasible, so [F2] proves it is optimal; the primal and dual objective values are both $1$. [F1, F2, step 2.1, algebra]

4.1 There is no eligible negative coefficient. The certificate from [F3] is $q=1$, for which $A^{\mathsf T}q=(1,1)\ge0$ and $b^{\mathsf T}q=-1<0$. Thus the modified system has no nonnegative feasible vector. [F3, step 1.2, algebra] ∎
