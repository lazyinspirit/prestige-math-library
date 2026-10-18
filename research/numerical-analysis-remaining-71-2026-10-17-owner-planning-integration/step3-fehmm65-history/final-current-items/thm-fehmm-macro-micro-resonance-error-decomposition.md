---
id: thm-fehmm-macro-micro-resonance-error-decomposition
kind: theorem
title: FE-HMM macro, micro, and sampling error separation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - alg-fehmm-periodic-cell-micro-macro
  - lem-fehmm-micro-cell-solves-wellposedness
  - lem-fehmm-micro-tensor-approximation-error
  - lem-fehmm-period-aligned-sampling-has-zero-resonance
  - thm-periodic-effective-tensor-symmetric-elliptic
  - def-afem-nvb-labelled-triangulation-family
  - def-matching-affine-simplicial-meshes
  - thm-matching-continuous-piecewise-polynomials-are-wkp
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - lem-unit-cube-h01-separability-and-l2-compactness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§3: discrete macro problem, sampled effective matrices, and micro/macro error terms."
verification:
  precheck: pass
---
## Statement

Let $U_H$ be the FE-HMM solution from [[alg-fehmm-periodic-cell-micro-macro]] on a matching macro triangulation of $Q=(0,1)^2$, and let $u_0\in H^1_0(Q)$ solve the homogenized equation with coefficient $A^*$. For each macro cell let $A_K^{\rm ex}$ be the exact periodic-coupling sampled tensor and $A_K^h$ its discrete micro tensor. Define
$$\Delta_{\rm micro}=\max_K\|A_K^h-A_K^{\rm ex}\|_{op},\qquad \Delta_{\rm res}=\max_K\|A_K^{\rm ex}-A^*\|_{op},\qquad \Delta=\Delta_{\rm micro}+\Delta_{\rm res},$$
and $\eta_H=\inf_{V\in V_H}\|\nabla(u_0-V)\|_{L^2(Q)}$. If $\Delta<\lambda$, then
$$\|\nabla(U_H-u_0)\|_2\le\frac{\lambda+\Lambda}{\lambda-\Delta}\,\eta_H+\frac{\Delta}{\lambda-\Delta}\,\|\nabla u_0\|_2.$$
The first term is macro best approximation; the second is explicitly split by $\Delta_{\rm micro}$ and $\Delta_{\rm res}$. By [[lem-fehmm-micro-tensor-approximation-error]], $\Delta_{\rm micro}\le\max_K\eta_K^2$. If every micro ratio is an integer, [[lem-fehmm-period-aligned-sampling-has-zero-resonance]] gives $\Delta_{\rm res}=0$. The condition $\Delta<\lambda$ is a sufficient perturbation condition; no arbitrary-scale accuracy is asserted.

## Facts & Assumptions

**Given:** A finite conforming macro mesh of the unit square, its continuous zero-boundary P1 space, positive cell weights summing to area, uniformly elliptic symmetric local micro tensors, a homogenized solution, and the exact sampled tensors.

[F1] [[alg-fehmm-periodic-cell-micro-macro]]: $B_H(U,V)=\sum_K|K|\nabla U|_K\cdot A_K^h\nabla V|_K$ and the macro equation has right side $\int_QfV$.

[F2] [[lem-fehmm-micro-cell-solves-wellposedness]]: each $A_K^h$ is symmetric and $\lambda$-elliptic; the macro system has a unique solution.

[F3] [[lem-fehmm-micro-tensor-approximation-error]]: $\|A_K^h-A_K^{\rm ex}\|_{op}\le\eta_K^2$.

[F4] [[lem-fehmm-period-aligned-sampling-has-zero-resonance]]: integer period ratios give $A_K^{\rm ex}=A^*$.

[F5] [[thm-periodic-effective-tensor-symmetric-elliptic]]: $A^*$ is symmetric with $\lambda I\le A^*\le\Lambda I$.

[F6] [[def-afem-nvb-labelled-triangulation-family]] and [[def-matching-affine-simplicial-meshes]]: the selected macro triangulation is finite, conforming, and covers $\overline Q$ with disjoint cell interiors.

[F7] [[thm-matching-continuous-piecewise-polynomials-are-wkp]] and [[thm-zero-boundary-piecewise-polynomials-in-w10p]]: $V_H\subset H^1_0(Q)$; [[lem-unit-cube-h01-separability-and-l2-compactness]] gives a norm controlled by the gradient.

## Proof



1.1 By [F2] the macro solution and all local tensors are well defined. Write $D_K=A_K^h-A^*$ and $D_0=\max_K\|D_K\|_{op}$. The triangle inequality gives $D_0\le\Delta$. For macro functions $V,W$, piecewise constancy of their P1 gradients and Cauchy--Schwarz over the finite cells imply $|B_H(V,W)-\int_QA^*\nabla V\cdot\nabla W|\le D_0\|\nabla V\|_2\|\nabla W\|_2.$ By [F5] the reference form is at least $\lambda\|\nabla V\|_2^2$, so [F1] and $D_0\le\Delta<\lambda$ also give $B_H(V,V)\ge(\lambda-\Delta)\|\nabla V\|_2^2$. [F2, F5, F1, F6, F7, algebra]

2.1 Fix any $V_H\in V_H$ and put $e_H=U_H-V_H$. Since both macro and homogenized equations have the same load, for every test in $V_H$, $B_H(e_H,e_H)=\int_QA^*\nabla(u_0-V_H)\cdot\nabla e_H+\left(\int_QA^*\nabla V_H\cdot\nabla e_H-B_H(V_H,e_H)\right).$ The right side has magnitude at most $\left(\Lambda\|\nabla(u_0-V_H)\|_2+D_0\|\nabla V_H\|_2\right)\|\nabla e_H\|_2$ by [F5] and step 1.1. Combining with coercivity in step 1.1 and $\|\nabla V_H\|_2\le\|\nabla u_0\|_2+\|\nabla(u_0-V_H)\|_2$ gives $\|\nabla(U_H-u_0)\|_2\le\frac{\lambda+\Lambda}{\lambda-D_0}\|\nabla(u_0-V_H)\|_2+\frac{D_0}{\lambda-D_0}\|\nabla u_0\|_2.$ This also holds if $e_H=0$, when division is unnecessary. [F5, step 1.1, F1, algebra]

3.1 Take a sequence $V_H$ whose approximation errors decrease to $\eta_H$; finite-dimensionality ensures the infimum is finite, and the displayed inequality passes to the limit. The two coefficient functions are increasing for $0\le D_0\le\Delta<\lambda$, so replace $D_0$ by $\Delta$ to obtain the stated estimate. Finally, the exact decomposition $A_K^h-A^*=(A_K^h-A_K^{\rm ex})+(A_K^{\rm ex}-A^*)$ gives the separate micro and resonance terms, with their micro-space and aligned-sampling interpretations from [F3]–[F4]. [F3, F4, step 2.1, algebra] ∎
