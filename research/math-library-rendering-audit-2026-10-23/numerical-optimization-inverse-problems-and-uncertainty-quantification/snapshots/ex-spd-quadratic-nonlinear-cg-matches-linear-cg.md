---
id: ex-spd-quadratic-nonlinear-cg-matches-linear-cg
kind: example
title: "A two-dimensional SPD quadratic gives the same FR and linear-CG trace"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-fr-and-raw-prplus-exact-line-search-match-linear-cg
  - def-conjugate-gradient-recurrence
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
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
    date: 2026-10-17
---

## Example

Take $A=\operatorname{diag}(1,2)$, $b=(1,1)$, and
$$ f(x)=\tfrac12x^TAx-b^Tx,\qquad x_0=(0,0). $$
Use exact-SPD-quadratic mode with outer budget $K\ge2$ and
$c_1=1/10$, $c_2=1/4$. An exact-line-search FR run reaches the solution in two steps, with the same directions and steps as linear CG.

## Facts & Assumptions

**Given:** The quadratic, start point, and exact-line-search conditions in the Example.

[F1] [[thm-fr-and-raw-prplus-exact-line-search-match-linear-cg]]: on a real SPD quadratic in exact arithmetic, FR exact-line-search iterates, residuals and directions equal linear CG through the zero-residual exit.

[F2] [[def-conjugate-gradient-recurrence]]: $\alpha_k=(r_k^Tr_k)/(p_k^TAp_k)$, $r_{k+1}=r_k-\alpha_kAp_k$, $\beta_k=(r_{k+1}^Tr_{k+1})/(r_k^Tr_k)$, and $p_{k+1}=r_{k+1}+\beta_kp_k$.

## Verification

**Given:** $A=\operatorname{diag}(1,2)$, $b=(1,1)$, and $x_0=(0,0)$.

1.1 The initial residual and gradient are $r_0=(1,1)$ and $g_0=-r_0=(-1,-1)$, so $d_0=(1,1)$. By [F2], $\alpha_0=(r_0^Tr_0)/(d_0^TAd_0)=2/3$, giving $x_1=(2/3,2/3)$ and $r_1=(1/3,-1/3)$. [given, F2, algebra]

2.1 The next coefficient is $\beta_0=(r_1^Tr_1)/(r_0^Tr_0)=(2/9)/2=1/9$, hence $d_1=r_1+\beta_0d_0=(4/9,-2/9)$. Also $d_1^TAd_1=8/27$, so $\alpha_1=(2/9)/(8/27)=3/4$. [F2, step 1.1, algebra]

3.1 Therefore $x_2=x_1+\alpha_1d_1=(1,1/2)$ and $r_2=b-Ax_2=0$. By [F1], the exact-line-search FR run has these same directions, step lengths, and terminal point. [F1, step 2.1, algebra] ∎
