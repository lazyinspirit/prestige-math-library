---
id: lem-one-dimensional-poisson-smoothing-and-approximation
kind: lemma
title: "Level-uniform 1D Poisson smoothing and approximation bounds"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-galerkin-coarse-grid-correction,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       prop-transpose-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

Let $N=2M\ge4$, $h=1/N$, and let $A_h\in\mathbb R^{(N-1)\times(N-1)}$ have diagonal $2/h$, adjacent off-diagonal entries $-1/h$, and all other entries zero. This is the Dirichlet stiffness matrix for the uniform one-dimensional Poisson mesh. Let $P\in\mathbb R^{(N-1)\times(M-1)}$ linearly interpolate from the coarse nodes at even fine indices: set coarse endpoint values $v_0=v_M=0$, $(Pv)_{2j}=v_j$, and $(Pv)_{2j+1}=(v_j+v_{j+1})/2$ wherever these are interior fine indices. Put $A_H=P^{\mathsf T}A_hP$, $C=I-PA_H^{-1}P^{\mathsf T}A_h$, and $S=I-A_h/\lambda_{\max}(A_h)$. Then for every integer $\nu\ge1$ and every fine vector $e$,

$$\|CS^\nu e\|_{A_h}^2\le\frac{2}{2\nu+1}\|e\|_{A_h}^2.$$

The separate estimates proved below are the exact approximation bound
$\|Cw\|_{A_h}^2\le(h/2)\|A_hw\|_2^2$ and smoothing bound
$\|A_hS^\nu e\|_2^2\le4\,[h(2\nu+1)]^{-1}\|e\|_{A_h}^2$; their constants are compatible and independent of $N$.

## Facts & Assumptions

**Given:** An even number $N=2M\ge4$, the uniform Dirichlet stiffness matrix $A_h$, piecewise-linear coarse prolongation $P$, and integer $\nu\ge1$.

[F1] [[def-galerkin-coarse-grid-correction]]: $A_H=P^{\mathsf T}A_hP$ and, when $A_H$ is invertible, $C=I-PA_H^{-1}P^{\mathsf T}A_h$.

[F2] [[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]: since $A_h$ is SPD and $P$ has full column rank, $A_H$ is SPD and $C$ is the exact Galerkin projector.

[F3] [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]: $\|x\|_{A_h}^2=x^{\mathsf T}A_hx$.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has a real orthonormal eigenbasis.

[F5] [[prop-transpose-laws]]: matrix transpose is involutive and reverses matrix products.

## Proof
1.1 Extend a fine vector by $x_0=x_N=0$. Direct expansion gives $$x^{\mathsf T}A_hx=h^{-1}\sum_{i=1}^{N}(x_i-x_{i-1})^2.$$ This is positive for every nonzero $x$, since a zero sum forces all consecutive entries equal and the boundary entries are zero. The even rows of $P$ form the identity on coarse coordinates, so $P$ has full column rank. Thus [F2] ensures $A_H$ is invertible and $C$ is defined. [given, F1, F2, F3, algebra]

1.2 For any $x$, $(x_i-x_{i-1})^2\le2x_i^2+2x_{i-1}^2$ and the endpoints vanish, so $x^{\mathsf T}A_hx\le(4/h)\|x\|_2^2$. By [F4], $0<\lambda\le\lambda_{\max}(A_h)\le4/h$ for each eigenvalue. In an orthonormal eigenbasis, $S$ has eigenvalues $1-\lambda/\lambda_{\max}\in[0,1)$. For $\xi=\lambda/\lambda_{\max}\in(0,1]$, the finite geometric identity $\xi\sum_{k=0}^{2\nu}(1-\xi)^k=1-(1-\xi)^{2\nu+1}\le1$ applies. Each summand is at least $(1-\xi)^{2\nu}$, so $\xi(1-\xi)^{2\nu}\le1/(2\nu+1)$. Expanding $e$ in that eigenbasis yields $$\|A_hS^\nu e\|_2^2\le\frac{\lambda_{\max}(A_h)}{2\nu+1}\|e\|_{A_h}^2\le\frac{4}{h(2\nu+1)}\|e\|_{A_h}^2.$$ [F3, F4, algebra]

2.1 Let $J$ insert a coarse vector into the even fine indices and zero the odd indices. At an odd fine row, $A_hPv=0$ because $2(Pv)_{2j+1}=(Pv)_{2j}+(Pv)_{2j+2}$. At an even row $2j$, $$(A_hPv)_{2j}=(2h)^{-1}(2v_j-v_{j-1}-v_{j+1}),$$ with boundary values $v_0=v_M=0$. Direct multiplication gives $A_H$ diagonal entries $1/h$, adjacent entries $-1/(2h)$, and all other entries zero; hence $A_hP=JA_H$ and, by [F5], $P^{\mathsf T}A_h=A_HJ^{\mathsf T}$. Substitution in [F1] yields $C=I-PJ^{\mathsf T}$. Therefore $y=Cw$ has zero even entries. Also $A_hy=A_hw-JA_HJ^{\mathsf T}w$, so the odd entries of $A_hy$ equal those of $A_hw$. [F1, F2, F5, step 1.1, algebra]

3.1 For odd $i$, the two neighbours of $y_i$ are even and zero, so $(A_hy)_i=2y_i/h=(A_hw)_i$. Therefore $$\|Cw\|_2^2=\sum_{i\text{ odd}}y_i^2=\frac{h^2}{4}\sum_{i\text{ odd}}(A_hw)_i^2\le\frac{h^2}{4}\|A_hw\|_2^2.$$ Since each odd value is adjacent to two zero even values, the energy identity in step 1.1 gives $\|y\|_{A_h}^2=(2/h)\|y\|_2^2$. Thus $\|Cw\|_{A_h}^2\le(h/2)\|A_hw\|_2^2$. [step 1.1, step 2.1, F3, algebra]

4.1 Apply the approximation estimate of step 3.1 with $w=S^\nu e$ and then the smoothing estimate of step 1.2: $$\|CS^\nu e\|_{A_h}^2\le\frac h2\|A_hS^\nu e\|_2^2\le\frac{2}{2\nu+1}\|e\|_{A_h}^2.$$ Because $\nu\ge1$, $2/(2\nu+1)\le2/3<1$, uniformly in $N$. [step 3.1, step 1.2] ∎
