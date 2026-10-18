---
id: ex-pe04-sbp-inflow-sat-energy-identity
kind: example
title: The SBP inflow SAT produces the boundary energy term
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-pe04-upwind-sbp-sat-transport-discretization
  - thm-pe04-upwind-sbp-sat-l2-energy-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
---

## Example

On the interval $[0,1]$, use two endpoint nodes, $H=\frac12I$, $D=\begin{pmatrix}-1&1\\-1&1\end{pmatrix}$, left and right selectors $R_L=(1,0)$ and $R_R=(0,1)$, and $B=\operatorname{diag}(-1,1)$. For $u_t+a u_x=0$ with $a>0$, inflow value $g(t)$ at $x=0$, and upwind outflow at $x=1$, the SBP-SAT ODE is
$$H\dot U+aHD\,U+a e_L(U_L-g)=0.$$

## Facts & Assumptions

**Given:** The two-node SBP data, the upwind inflow SAT sign, and the discrete energy $E=\frac12U^THU$.

[F1] [[def-pe04-upwind-sbp-sat-transport-discretization]]: the inflow SAT in the strong form is $-a e_L(g-U_L)=a e_L(U_L-g)$ and the outflow SAT is zero.

[F2] [[thm-pe04-upwind-sbp-sat-l2-energy-stability]]: the SBP identity converts the volume derivative term into the signed endpoint quadratic boundary term.

## Verification

1.1 The matrices satisfy $H D=\begin{pmatrix}-1/2&1/2\\-1/2&1/2\end{pmatrix}$ and $HD+D^TH=B$, so $U^THD U=\frac12(U_R^2-U_L^2)$. [given, F2, algebra]

2.1 Multiply the ODE in [F1] by $U^T$. The inflow penalty contributes $aU_L(U_L-g)$, and step 1.1 gives $\dot E+\frac a2U_R^2+\frac a2(U_L-g)^2=\frac a2g^2$. Thus the penalty has the sign required by the upwind energy identity. [given, F1, step 1.1, algebra] ∎
