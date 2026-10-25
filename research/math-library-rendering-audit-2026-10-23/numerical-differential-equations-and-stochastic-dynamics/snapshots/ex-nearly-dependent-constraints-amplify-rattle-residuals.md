---
id: ex-nearly-dependent-constraints-amplify-rattle-residuals
kind: example
title: Nearly dependent constraints make the multiplier solve ill conditioned
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - thm-rattle-scaled-solve-residual-error-budget
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–247"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §5.2"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Example

For $0<\epsilon\le1$, take $M=I_3$ and
$$c_\epsilon(q)=(q_3,q_3+\epsilon q_2).$$
The Jacobian has full row rank for every fixed $\epsilon>0$, but
$$A_\epsilon=J_\epsilon J_\epsilon^T=\begin{pmatrix}1&1\\1&1+\epsilon^2\end{pmatrix}$$
has smallest eigenvalue $2\epsilon^2/(2+\epsilon^2+\sqrt{4+\epsilon^4})\sim\epsilon^2/2$. Thus the inverse multiplier bound in the RATTLE residual estimate is not uniform as the constraints approach dependence. At $\epsilon=0$ the rank hypothesis fails.

## Facts & Assumptions

**Given:** The family $c_\epsilon$, $M=I_3$, and the RATTLE multiplier matrix $A_\epsilon$ in the Example.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: regularity requires full row rank of $J$ and invertibility of $A=JM^{-1}J^T$.

[F2] [[thm-rattle-scaled-solve-residual-error-budget]]: on a fixed compact phase tube, residual-to-state constants depend in particular on uniform inverse bounds for the multiplier matrices; each fixed $\epsilon>0$ is regular, but these inverse bounds are not uniform as $\epsilon\downarrow0$.

## Verification

1.1 The two rows $(0,0,1)$ and $(0,\epsilon,1)$ of $J_\epsilon$ are linearly independent exactly when $\epsilon>0$. Their Gram matrix is the displayed $A_\epsilon$, whose trace is $2+\epsilon^2$ and determinant is $\epsilon^2$. [given, F1, algebra]

2.1 The quadratic formula gives its eigenvalues $(2+\epsilon^2\pm\sqrt{4+\epsilon^4})/2$. Rationalizing the smaller one gives $2\epsilon^2/(2+\epsilon^2+\sqrt{4+\epsilon^4})$, so $\epsilon^{-2}\lambda_{\min}(A_\epsilon)\to1/2$ and $\|A_\epsilon^{-1}\|_2\to\infty$. [step 1.1, algebra]

3.1 Consequently no single residual-to-multiplier constant works for this family as $\epsilon\downarrow0$; this is consistent with [F2], whose uniform estimates assume a fixed compact chart with uniformly bounded $A^{-1}$. At $\epsilon=0$ the two rows coincide, so [F1]'s full-rank hypothesis fails. [F1, F2, step 2.1] ∎
