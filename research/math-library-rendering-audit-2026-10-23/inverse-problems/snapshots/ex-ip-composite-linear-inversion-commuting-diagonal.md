---
id: ex-ip-composite-linear-inversion-commuting-diagonal
kind: example
title: Commuting diagonal factors with an explicit composite estimator
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-compact-spectral-filter-and-qualification
  - def-ip-composite-double-regularization
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christina Brandt and Patrick Horn, Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems, §2.1"
      url: "https://arxiv.org/pdf/2610.13483"
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes, Chapter 6"
      url: "https://arxiv.org/pdf/2001.00617"
---

## Example

Let $X=Y=Z=\mathbb R^2$ with the Euclidean inner product, $F=\operatorname{diag}(2,1)$, $G=\operatorname{diag}(3,4)$, and $A=G\circ F$. For $\alpha,\gamma>0$, use the Tikhonov maps $R^G_\alpha=(G^*G+\alpha I)^{-1}G^*$ and $R^F_\gamma=(F^*F+\gamma I)^{-1}F^*$. Compute the two-stage estimate $R^F_\gamma R^G_\alpha z$ for arbitrary $z=(z_1,z_2)$ and its limit as $\alpha,\gamma\downarrow0$.

## Example references

[[def-ip-composite-double-regularization|Composite estimator order]]

[[def-compact-spectral-filter-and-qualification|Tikhonov spectral filter]]

[Brandt and Horn, §2.1](https://arxiv.org/pdf/2610.13483)

[Clason, Chapter 6](https://arxiv.org/pdf/2001.00617)

## Facts & Assumptions

**Given:** $X=Y=Z=\mathbb R^2$, $F=\operatorname{diag}(2,1)$, $G=\operatorname{diag}(3,4)$, $A=G\circ F$, $\alpha,\gamma>0$, and $z=(z_1,z_2)$.

[F1] [[def-ip-composite-double-regularization]]: The forward map is $A=G\circ F$, and the composite estimator applies the $G$-regularizer first and the $F$-regularizer second.

[F2] [[def-compact-spectral-filter-and-qualification]]: Tikhonov regularization for a compact operator $H$ is $R_\eta=(H^*H+\eta I)^{-1}H^*$.

[F3] [[def-moore-penrose-pseudoinverse]]: For a matrix $M$, its Moore–Penrose pseudoinverse $M^+$ satisfies $MM^+M=M$, $M^+MM^+=M^+$, and the square products $MM^+$ and $M^+M$ are self-adjoint.

[F4] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: Every finite real or complex matrix has a unique matrix satisfying those four Penrose equations.

## Verification

1.1 Since $G^*G=\operatorname{diag}(9,16)$ and $F^*F=\operatorname{diag}(4,1)$, the specified Tikhonov maps are $R^G_\alpha=\operatorname{diag}(3/(9+\alpha),4/(16+\alpha))$ and $R^F_\gamma=\operatorname{diag}(2/(4+\gamma),1/(1+\gamma))$. [given, F2, algebra]

2.1 Multiplying in the required order gives $A=\operatorname{diag}(6,4)$ and $R^F_\gamma R^G_\alpha z=\operatorname{diag}(6/((4+\gamma)(9+\alpha)),4/((1+\gamma)(16+\alpha)))z$. [given, F1, step 1.1, algebra]

3.1 As $\alpha,\gamma\downarrow0$, the diagonal coefficients tend to $1/6$ and $1/4$, so the estimate tends to $A^{-1}z$ for $A=\operatorname{diag}(6,4)$. Since $AA^{-1}=I=A^{-1}A$, we have $AA^{-1}A=A$, $A^{-1}AA^{-1}=A^{-1}$, and both square products are the self-adjoint identity; [F3]–[F4] therefore give $A^+=A^{-1}$. The same argument gives $F^+=F^{-1}$ and $G^+=G^{-1}$, and $F^{-1}G^{-1}=(GF)^{-1}=A^{-1}$. [given, step 2.1, F3, F4, algebra] ∎
