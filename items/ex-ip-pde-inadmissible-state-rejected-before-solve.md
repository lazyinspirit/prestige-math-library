---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-pde-inadmissible-state-rejected-before-solve
kind: example
title: A negative finite-difference PDE state is rejected before solving
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-admissible-constraint-class
  - def-linear-map
justified_by: []
aliases: []
proof_strategy: verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Discretize $-u''=f$ on $(0,1)$ with $u(0)=u(1)=0$ using grid points $x_i=i/3$ for $i=0,1,2,3$ and the two interior values $u_i=u(x_i)$, $z=(u_1,u_2)$. Put $h=1/3$ and define the centered stencil at $i=1,2$ by $D_hu_i=(2u_i-u_{i-1}-u_{i+1})/h^2$, with boundary values $u_0=u_3=0$. The resulting finite-difference system is $A_hz=f_h$, where $A_h=h^{-2}\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ and $f_h=(f(x_1),f(x_2))$. Use parameter and data spaces $X=Y=\mathbb R^2$ with their Euclidean metrics, take $U=X$, and use the linear forward map $A_h|_U:U\to Y$. Impose the physical constraint $C=\{(z_1,z_2)\in\mathbb R^2:z_1\ge0,\ z_2\ge0\}$ for nonnegative nodal concentration. An input validator that checks both coordinates before invoking the linear solver rejects the candidate $z=(-1,1)$ before solving because its first coordinate is negative.

## Facts & Assumptions

**Given:** The two-node centered finite-difference model, $X=Y=\mathbb R^2$ with Euclidean metrics, $U=X$, forward map $A_h|_U$, and the nonnegative nodal constraint in the Example, with candidate state $z=(-1,1)$.

[F1] [[def-ip-admissible-constraint-class]]: a constrained truth class is a nonempty subset of the parameter space, and its forward map is the restriction to that class.

[F2] [[def-linear-map]]: a linear map satisfies $A(au+bv)=aA(u)+bA(v)$ for scalar coefficients and vectors.

## Verification

1.1 By the definition of $D_h$ in the Example and the boundary values $u_0=u_3=0$, $D_hu_1=(2u_1-u_2)/h^2$ and $D_hu_2=(2u_2-u_1)/h^2$, which gives the displayed matrix $A_h$. For any vectors $v,w\in\mathbb R^2$ and scalars $a,b$, matrix multiplication gives $A_h(av+bw)=aA_hv+bA_hw$, so $A_h$ is linear. [given, F2, algebra]

2.1 The set $C$ is nonempty because $(0,0)\in C$. The candidate has $z_1=-1<0$, so $z\notin C$ and the validator rejects it before the step that solves $A_hz=f_h$. This verifies only the stated discrete admissibility check and makes no continuum PDE or solver-convergence claim. [given, F1, algebra] ∎
