---
id: ex-low-rank-adi-residual-certificate
kind: example
title: "One low-rank ADI step gives an exact residual certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-low-rank-alternating-direction-implicit-lyapunov
  - thm-low-rank-adi-exact-residual-factor-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Let $A=-I_2$, $B=e_1=(1,0)^T$, and take the single shift $p_1=-1$. One low-rank ADI step returns $V_1=-e_1/2$, $X_1=e_1e_1^T/2$, and $R_1=0$. The returned factor residual certificate is exact.

## Facts & Assumptions

**Given:** The matrices and shift in the Example.

[F1] [[alg-low-rank-alternating-direction-implicit-lyapunov]]: $V_1=(A+p_1I)^{-1}B$, $c_1=-2\operatorname{Re}(p_1)$, $X_1=c_1V_1V_1^*$ and $R_1=B+c_1V_1$.

[F2] [[thm-low-rank-adi-exact-residual-factor-identity]]: $AX_1+X_1A^*+BB^*=R_1R_1^*$.

## Verification


1.1 $A+p_1I=-2I_2$ is invertible and $c_1=2$, so $V_1=(-2I_2)^{-1}e_1=-e_1/2$. [given, F1, algebra]

2.1 The updates in [F1] give $X_1=2(e_1e_1^T/4)=e_1e_1^T/2$ and $R_1=e_1+2(-e_1/2)=0$. [F1, step 1.1, algebra]

3.1 Consequently $R_1R_1^*=0$, and directly $AX_1+X_1A^*+BB^*=-X_1-X_1+e_1e_1^T=0$, agreeing with [F2]. [F2, step 2.1, algebra] ∎
