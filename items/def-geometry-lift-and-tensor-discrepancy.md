---
id: def-geometry-lift-and-tensor-discrepancy
kind: definition
title: Geometry lift and transformed elliptic tensor
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-variational-crime-error-framework, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chain-rule-for-total-derivatives, def-countable-choice, thm-holder-inequality-for-integrals]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Definition

Assume Countable Choice. Let $\Omega_h,\Omega\subseteq\mathbb R^d$ be open, and let $\Phi_h:\Omega_h\to\Omega$ be a $C^1$ diffeomorphism. Write $J_h(y):=|\det D\Phi_h(y)|>0$. Let $A:\Omega\to\mathbb R^{d\times d}$ be Lebesgue measurable, real symmetric almost everywhere, and satisfy $\lambda I\preceq A(x)\preceq\Lambda I$ almost everywhere, for constants $0<\lambda\le\Lambda<\infty$. The physical exact form on real-valued functions with square-integrable gradients is $a(U,W):=\int_\Omega\nabla U(x)^TA(x)\nabla W(x)\,dx$. The pulled-back exact tensor and form are

$$B_h(y):=J_h(y)D\Phi_h(y)^{-1}A(\Phi_h(y))D\Phi_h(y)^{-T},\qquad a_h^{\mathrm{lift}}(v,w):=\int_{\Omega_h}\nabla v(y)^T B_h(y)\nabla w(y)\,dy.$$

The lifted form is defined for real-valued $v,w$ with measurable gradients and finite pulled-back energies $\int_{\Omega_h}\nabla v^TB_h\nabla v<\infty$ and $\int_{\Omega_h}\nabla w^TB_h\nabla w<\infty$. The pointwise Cauchy–Schwarz inequality for the positive tensor $B_h$ bounds the absolute cross density by the product of the square roots of these energy densities, which is integrable by [[thm-holder-inequality-for-integrals]]. Square-integrability of $\nabla v,\nabla w$ alone does not guarantee these energy conditions for an arbitrary diffeomorphism.

The **geometry tensor discrepancy** of an implemented tensor $\widetilde B_h$ on a cell $K\subset\Omega_h$ is $\eta_{G,K}:=\|B_h-\widetilde B_h\|_{L^\infty(K;\mathrm{op})}$, where $\|\cdot\|_{\mathrm{op}}$ is the Euclidean operator norm. The **geometry-lifted form defect** is the difference between $a_h^{\mathrm{lift}}$ and the form using $\widetilde B_h$, on pairs for which both displayed cross densities are absolutely integrable. No meshwise approximation rate is part of this definition.
