---
id: ex-ctrl1-single-versus-multiple-shooting-two-intervals
kind: example
title: "Two-interval single and multiple shooting for x-prime equals u"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [def-ctrl1-control-mesh-and-piecewise-constant-parameterization, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.2"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–239: single shooting eliminates state variables and multiple shooting retains continuity-constrained nodes."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.4"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 20–22: finite-dimensional control parameterization and shooting states."
---

## Example

For $\dot x=u$, $x(0)=0$, and mesh $0,1/2,1$, take the compact control set $U_c=[-1,1]$ and let the two constant controls satisfy $v_0,v_1\in U_c$. Since the dynamics are constant on each interval, every consistent explicit RK tableau with $\sum_i b_i=1$ and stage abscissae $c_i\in[0,1]$ gives the exact interval updates on this mesh. Single shooting yields $x_1=v_0/2$ and $x_2=(v_0+v_1)/2$. Multiple shooting retains $x_1,x_2$ and imposes $x_1-v_0/2=0$, $x_2-x_1-v_1/2=0$. The shared objective $\frac14(v_0^2+v_1^2)+\frac12(x_2-1)^2$ therefore has the same reduced value in both formulations.

## Facts & Assumptions

**Given:** The two-cell mesh, compact control set $U_c=[-1,1]$, constant controls $v_0,v_1\in U_c$, exact real arithmetic, and a consistent explicit tableau with $\sum_i b_i=1$ and $c_i\in[0,1]$.

[F1] Piecewise-constant controls assign one control value per mesh cell ([[def-ctrl1-control-mesh-and-piecewise-constant-parameterization]]).

[F2] The single and multiple shooting recursions use the same deterministic interval maps ([[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]).

[F3] Their feasible control sets and reduced objectives agree by projection ([[lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent]]).

[A1] The explicit tableau is consistent, meaning $\sum_i b_i=1$; all arithmetic shown is exact.

## Verification

1.1 On the first cell every stage slope equals $v_0$, so its endpoint increment is $\frac12v_0\sum_i b_i=\frac12v_0$. The second cell adds $\frac12v_1\sum_i b_i=\frac12v_1$. Thus single shooting gives the stated $x_1$ and $x_2$. [F1, A1, given, algebra]

2.1 The multiple-shooting continuity equations uniquely impose $x_1=\frac12v_0$ and $x_2=x_1+\frac12v_1=\frac12(v_0+v_1)$. Substitution into its objective gives exactly the single-shooting objective. This is the concrete bijection and reduced-objective identity stated in [F3]. [F2, F3, step 1.1, algebra] ∎
