---
id: ex-supg-grad-div-does-not-fix-pressure-kernel
kind: example
title: "Grad-div alone does not remove the Q1 checkerboard pressure kernel"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-supg-pspg-grad-div-stokes-forms, ex-supg-q1-equal-order-pressure-checkerboard]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Felipe Galarce and Douglas R. Q. Pacheco, Fully consistent lowest-order finite element methods for generalised Stokes flows with variable viscosity, arXiv:2411.02100v1"
      url: "https://arxiv.org/pdf/2411.02100"
      locator: "§3, PDF pp. 2–3: equal-order pressure instability and the role of a pressure residual term."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: stabilization and pressure control are separate from the scalar SUPG coercivity argument."
---

## Example

On the same periodic Q1/Q1 mesh and with the same checkerboard pressure from [[ex-supg-q1-equal-order-pressure-checkerboard]], add any grad-div coefficient $\gamma\ge0$ to the velocity equation but omit PSPG. The pressure mode remains a nonzero null vector for every $\gamma$.

## Facts & Assumptions

**Given:** The periodic Q1/Q1 Stokes form, grad-div parameter $\gamma\ge0$, no PSPG term, and the checkerboard pressure mode.

[F1] [[def-supg-pspg-grad-div-stokes-forms]]: grad-div adds $\gamma(\nabla\cdot u_h,\nabla\cdot v_h)$ to the velocity block; the unstabilized mixed terms are $-(p_h,\nabla\cdot v_h)+(q_h,\nabla\cdot u_h)$.

[F2] [[ex-supg-q1-equal-order-pressure-checkerboard]]: the nonzero mean-zero pressure $q_h$ satisfies $(q_h,\nabla\cdot v_h)=0$ for every Q1 velocity $v_h$.

## Verification

1.1 Set $u_h=0$ and $p_h=q_h$. Against an arbitrary velocity test $v_h$, the pressure contribution is $-(q_h,\nabla\cdot v_h)=0$ by [F2], and the grad-div term is zero because $u_h=0$. Against an arbitrary pressure test $r_h$, the continuity contribution is $(r_h,\nabla\cdot u_h)=0$. [F1, F2, given]

2.1 Thus the homogeneous mixed operator maps the nonzero pair $(0,q_h)$ to zero for every $\gamma\ge0$. This example shows that grad-div alone leaves a nonzero kernel for this equal-order pairing; it makes no pressure-uniqueness claim after adding another stabilization or changing the spaces. [step 1.1, algebra] ∎
