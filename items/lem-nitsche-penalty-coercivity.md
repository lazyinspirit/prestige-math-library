---
id: lem-nitsche-penalty-coercivity
kind: lemma
title: Nitsche coercivity above the inverse-trace threshold
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-nitsche-boundary-penalty-forms,
    lem-nitsche-global-boundary-flux-bound,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the hypotheses of [[def-nitsche-boundary-penalty-forms]] and [[lem-nitsche-global-boundary-flux-bound]]. Put $C_\partial$ as in the latter item and let $\theta\in\{0,1\}$. If
$$\gamma_0>\frac{(1+\theta)^2C_\partial^2}{4},$$
then for every $v_h\in V_h$,
$$a_h^\theta(v_h,v_h)\ge\lambda_\theta\|v_h\|_{E,h}^2,\qquad \lambda_\theta:=\frac{1+\gamma_0-\sqrt{(1-\gamma_0)^2+(1+\theta)^2C_\partial^2}}{2}>0.$$
Thus the sufficient threshold is $C_\partial^2/4$ for the nonsymmetric form and $C_\partial^2$ for the symmetric form. These are thresholds certified by the displayed inverse-trace bound, not asserted to be necessary for each individual mesh.

## Facts & Assumptions

**Given:** Countable Choice; a mesh, the forms and energy seminorm of [[def-nitsche-boundary-penalty-forms]]; $C_\partial$ and its boundary cross-term estimate from [[lem-nitsche-global-boundary-flux-bound]]; and $\gamma_0>(1+\theta)^2C_\partial^2/4$.

[F1] The diagonal form is $a_h^\theta(v_h,v_h)=\|\nabla v_h\|_\Omega^2-(1+\theta)\sum_F\int_F(\partial_n v_h)v_h+\gamma_0\sum_Fh_F^{-1}\|v_h\|_F^2$ ([[def-nitsche-boundary-penalty-forms]]).

[F2] The absolute boundary cross term is bounded by $C_\partial\|\nabla v_h\|_\Omega(\sum_Fh_F^{-1}\|v_h\|_F^2)^{1/2}$ ([[lem-nitsche-global-boundary-flux-bound]]).

[A1] $\gamma_0>(1+\theta)^2C_\partial^2/4$.

## Proof


**Given:** Countable Choice; $v_h\in V_h$; and [F1], [F2], [A1].



1.1 Set $x=\|\nabla v_h\|_\Omega$ and $y=(\sum_Fh_F^{-1}\|v_h\|_F^2)^{1/2}$. By [F1] and [F2], $a_h^\theta(v_h,v_h)\ge x^2-(1+\theta)C_\partial xy+\gamma_0y^2.$ This is the quadratic form of the real symmetric matrix $M_\theta=\begin{pmatrix}1&-(1+\theta)C_\partial/2\\-(1+\theta)C_\partial/2&\gamma_0\end{pmatrix}$. [F1, F2, given, algebra]

2.1 The eigenvalues of $M_\theta$ are $\frac{1+\gamma_0\pm\sqrt{(1-\gamma_0)^2+(1+\theta)^2C_\partial^2}}2$, by the quadratic formula for its characteristic polynomial. Its trace is $1+\gamma_0>0$ and its determinant is $\gamma_0-(1+\theta)^2C_\partial^2/4>0$ by [A1]; hence both eigenvalues are positive and the smaller is $\lambda_\theta$ in the Statement. Therefore $x^2-(1+\theta)C_\partial xy+\gamma_0y^2\ge\lambda_\theta(x^2+y^2)=\lambda_\theta\|v_h\|_{E,h}^2$. Combine with step 1.1. [A1, step 1.1, algebra] ∎