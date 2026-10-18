---
id: ex-one-dimensional-poisson-coarse-correction-removes-linear-error
kind: example
title: "A linear error on the one-dimensional Poisson coarse space is removed exactly"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-galerkin-coarse-grid-correction,
       lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero,
       def-weak-dirichlet-solution-for-a-divergence-form-operator,
       def-uniformly-elliptic-divergence-form-operator,
       def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
      url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
    - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
      url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Example

Consider the homogeneous weak Dirichlet form for $-u''$ on $(0,1)$, in the
sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]] and
[[def-uniformly-elliptic-divergence-form-operator]], and the uniform mesh with
four fine intervals. The continuous piecewise-linear nodal basis has interior
hat functions $\phi_1,\phi_2,\phi_3$. Its stiffness matrix is

$$A_h=4\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}.$$

The coarser mesh has one interior node. Its piecewise-linear prolongation is
$P=(1/2,1,1/2)^{\mathsf T}$. The vector $e=(1,2,1)^{\mathsf T}=2P$
is represented exactly on the coarse space, so one exact Galerkin correction
removes it.

This calculation uses the homogeneous weak-form branch, whose functional-space
interface assumes Countable Choice. It establishes the finite matrix identity
without asserting solution existence for a forcing or a finite-element error
estimate, and it makes no claim about inhomogeneous trace data.

## Facts & Assumptions

**Given:** The interval $(0,1)$, its zero-boundary weak Poisson form, the four-interval uniform mesh, and its continuous piecewise-linear nodal basis.

[F1] [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]: in the homogeneous branch, a weak solution is an $H^1_0$ class satisfying $a(u,v)=F(v)$ for every test function; that branch assumes Countable Choice. Only the definition of the weak form is used here, not an existence theorem.

[F2] [[def-uniformly-elliptic-divergence-form-operator]]: with coefficient $a^{11}=1$ and $b=c=0$, the form is $a(u,v)=\int_0^1u'(x)v'(x)\,dx$ in the real case.

[F3] [[def-galerkin-coarse-grid-correction]]: $A_H=P^{\mathsf T}A_hP$ and $C=I-PA_H^{-1}P^{\mathsf T}A_h$ when $A_H$ is invertible.

[F4] [[lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero]]: each continuous piecewise-affine function on $[0,1]$ vanishing at $0$ and $1$ belongs to $H^1_0(0,1)$.

[A1] Assume [[def-countable-choice]] for the homogeneous Sobolev interface in [F1]. The finite matrix calculation uses this homogeneous branch.

## Verification
1.1 Each fine nodal hat is continuous piecewise affine and zero at both endpoints, so [F4] places it in $H^1_0(0,1)$, the test space in [F1] under [A1]. On each interval its derivative is constant. For $i=j$, the integral $\int\phi_i'\phi_i'$ receives $1/h$ from each of its two adjacent intervals, giving $2/h=8$; for adjacent indices, the shared interval contributes $-1/h=-4$; nonadjacent supports have zero derivative-product integral. Thus the matrix of $a(\cdot,\cdot)$ is the displayed $A_h$. [given, A1, F1, F2, F4, algebra]

2.1 With $h=1/4$, direct multiplication gives $A_hP=(0,4,0)^{\mathsf T}$ and $A_H=P^{\mathsf T}A_hP=4$. Therefore [F3] gives $C=I-P(0,1,0)$, which maps $(x_1,x_2,x_3)^{\mathsf T}$ to $(x_1-x_2/2,0,x_3-x_2/2)^{\mathsf T}$. [F3, step 1.1, algebra]

3.1 For $e=(1,2,1)^{\mathsf T}$, step 2.1 yields $Ce=(1-1,0,1-1)^{\mathsf T}=0$. The error is exactly the prolongation of its single coarse value $2$, so the exact coarse correction removes it. [step 2.1, algebra] ∎