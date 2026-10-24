---
id: ex-one-dimensional-poisson-two-grid-uniform-contraction
kind: example
title: "One high-frequency mode in the finite one-dimensional Poisson two-grid cycle"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [thm-one-dimensional-poisson-two-grid-energy-contraction,
       def-galerkin-coarse-grid-correction,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-symmetric-two-grid-error-operator,
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
sources:
  references:
    - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
      url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
    - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
      url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Example

Use the four-interval mesh from the homogeneous weak Dirichlet Poisson form on
$(0,1)$ and the exact piecewise-linear coarse correction. Here
$A_h=4T_3$, where $T_3=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, and
$P=(1/2,1,1/2)^{\mathsf T}$. For the error $e=(1,0,-1)^{\mathsf T}$, the
coarse correction leaves the vector unchanged, while one Richardson sweep with
step $1/\lambda_{\max}(A_h)$ damps it by $\sqrt2-1$. The symmetric two-grid
error map therefore sends this particular mode to $(3-2\sqrt2)e$. The
level-uniform theorem bounds the full operator norm by $2/3$ for one sweep,
not merely this single mode.

The calculation uses the homogeneous weak-form convention and makes no claim
about solution existence or finite-element discretization error.

## Facts & Assumptions

**Given:** The homogeneous weak Dirichlet Poisson form on $(0,1)$, the four-interval fine mesh with $A_h=4T_3$, $T_3=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, coarse prolongation $P=(1/2,1,1/2)^{\mathsf T}$, the error $e=(1,0,-1)^{\mathsf T}$, and one Richardson sweep.

[F1] [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]: the homogeneous weak Dirichlet problem uses $u\in H^1_0(0,1)$ and the form identity against every $H^1_0$ test function; this branch assumes Countable Choice.

[F2] [[def-uniformly-elliptic-divergence-form-operator]]: for the real Poisson coefficients $a^{11}=1$, $b=c=0$, the form is $a(u,v)=\int_0^1u'v'\,dx$.

[F3] [[def-galerkin-coarse-grid-correction]]: $A_H=P^{\mathsf T}A_hP$ and $C=I-PA_H^{-1}P^{\mathsf T}A_h$ when $A_H$ is invertible.

[F4] [[def-symmetric-two-grid-error-operator]]: the symmetric cycle map is $E=S^{*_{A_h}}CS$.

[F5] [[thm-one-dimensional-poisson-two-grid-energy-contraction]]: the symmetric 1D Poisson map has $\|E\|_{A_h}\le2/(2\nu+1)$ for every $\nu\ge1$ and every even $N\ge4$.

[F6] [[lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero]]: each continuous piecewise-affine function on $[0,1]$ vanishing at $0$ and $1$ belongs to $H^1_0(0,1)$.

[A1] Assume [[def-countable-choice]] for the homogeneous Sobolev interface in [F1]. This example uses the homogeneous branch and makes no inhomogeneous trace claim.

## Verification
1.1 The fine nodal hats are continuous piecewise affine and vanish at both endpoints, so [F6] puts them in the homogeneous test space of [F1] under [A1]; [F2] then gives their form as $\int_0^1u'v'$. Direct determinant expansion gives $$\det(tI-T_3)=t^3-6t^2+10t-4=(t-2)(t^2-4t+2),$$ so $\lambda_{\max}(A_h)=4(2+\sqrt2)$, while direct multiplication gives $A_he=8e$. Thus one pre-sweep $S=I-A_h/\lambda_{\max}(A_h)$ sends $e$ to $\bigl(1-8/[4(2+\sqrt2)]\bigr)e=(\sqrt2-1)e$. [given, A1, F1, F2, F6, algebra]

2.1 Direct multiplication gives $A_hP=(0,4,0)^{\mathsf T}$ and $A_H=P^{\mathsf T}A_hP=4$. Hence $C=I-P(0,1,0)$ and $Ce=e$, since the middle component of $e$ is zero. Since $S=I-A_h/\lambda_{\max}$ is symmetric and commutes with $A_h$, its $A_h$-adjoint $A_h^{-1}S^{\mathsf T}A_h$ equals $S$. Thus [F4] gives $Ee=(\sqrt2-1)^2e=(3-2\sqrt2)e$. [F3, F4, step 1.1, algebra]

3.1 Since $3-2\sqrt2<2/3$ (equivalently $49<72$ after multiplying by positive quantities and squaring), this mode is damped by less than $2/3$. [F5] with $\nu=1$ bounds the full energy operator norm by $2/3$, including every fine-grid mode. [F4, F5, step 2.1, algebra] ∎