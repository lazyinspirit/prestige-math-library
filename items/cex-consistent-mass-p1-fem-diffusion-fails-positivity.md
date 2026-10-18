---
id: cex-consistent-mass-p1-fem-diffusion-fails-positivity
kind: counterexample
title: Consistent-mass P1 diffusion can leave the nonnegative cone
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps:
  - lem-xd-finite-matrix-exponential-series
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the counterexample is a three-dimensional matrix calculation.
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
    date: 2026-10-18
---

## Statement

On the interval $[0,2h]$ with three uniform P1 nodes and homogeneous Neumann boundary conditions, the semidiscrete heat equation with consistent mass matrix,
$$
M\dot u+\nu Ku=0,\qquad \nu>0,
$$
does not preserve nodal nonnegativity: there is a nonnegative initial vector for which the first component becomes negative immediately.

## Facts & Assumptions

**Given:** The P1 nodal basis on two elements of length $h>0$, the consistent mass and Neumann stiffness matrices assembled from their defining integrals, and $\nu>0$.

[F1] [[lem-xd-finite-matrix-exponential-series]]: for a finite matrix $A$, $e^{tA}$ is differentiable with derivative $Ae^{tA}$ and $e^{0A}=I$.

[F2] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a locally Lipschitz finite-dimensional vector field has a unique local solution through each initial state.

[A1] The consistent mass entries are $M_{ij}=\int_0^{2h}\phi_i\phi_j\,dx$ and the stiffness entries are $K_{ij}=\int_0^{2h}\phi_i'\phi_j'\,dx$ for the three piecewise-linear nodal basis functions.

## Proof

1.1 On an element $[0,h]$, the two affine basis functions are $\phi_1(x)=1-x/h$ and $\phi_2(x)=x/h$. Direct integration gives $ \int_0^h\phi_1^2\,dx=\int_0^h\phi_2^2\,dx=h/3,\quad \int_0^h\phi_1\phi_2\,dx=h/6, $ and their derivatives are $-1/h$ and $1/h$, so the element stiffness entries are $1/h,-1/h,-1/h,1/h$. Assembling the two elements yields the displayed matrices: $ M=\frac h6\begin{pmatrix}2&1&0\\1&4&1\\0&1&2\end{pmatrix}, \qquad K=\frac1h\begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}. $ The Neumann condition is natural in this stiffness form and adds no boundary matrix. [A1, given, algebra]

2.1 Write $M=(h/6)B$ and $K=C/h$ for the displayed integer matrices. Direct multiplication verifies $ B^{-1}=\frac1{12}\begin{pmatrix}7&-2&1\\-2&4&-2\\1&-2&7\end{pmatrix},\qquad B^{-1}C=\frac1{12}\begin{pmatrix}9&-12&3\\-6&12&-6\\3&-12&9\end{pmatrix}. $ Thus $M^{-1}K=6B^{-1}C/h^2$, so in particular $(M^{-1}K)_{13}=3/(2h^2)$. With $e_3=(0,0,1)^T$, the ODE gives $u'(0)=-\nu M^{-1}Ke_3$, whose first component is $-3\nu/(2h^2)<0$. [step 1.1, given, algebra]

3.1 The linear field $u\mapsto-\nu M^{-1}Ku$ is globally Lipschitz. By [F1], $e^{-t\nu M^{-1}K}e_3$ solves the IVP, and [F2] makes it the unique solution. Since $u_1(0)=0$ and $u_1'(0)<0$ by step 2.1, the right difference quotient $u_1(t)/t$ is negative for all sufficiently small $t>0$. Hence the consistent-mass P1 semidiscrete diffusion is not positivity preserving, despite the nonnegative initial nodal vector. [F1, F2, step 2.1, algebra] ∎
