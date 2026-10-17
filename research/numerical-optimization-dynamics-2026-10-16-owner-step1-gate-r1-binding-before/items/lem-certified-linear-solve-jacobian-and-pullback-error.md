---
id: lem-certified-linear-solve-jacobian-and-pullback-error
kind: lemma
title: Certified inverse defects and primal residuals bound linear-solve Jacobian and pullback errors
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- thm-implicit-differentiation-forward-and-adjoint-formulas
- lem-rounded-linear-and-normal-residual-certificates
- thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 2
---

## Statement

For the real mathematical solve primitive $\phi(A,b)=A^{-1}b$, let $A,B\in\mathbb R^{n\times n}$, $b,\widehat x\in\mathbb R^n$, $n\ge1$, and suppose certified exact-residual bounds satisfy
$$\|I-AB\|_2\le d<1,\qquad \|b-A\widehat x\|_2\le\rho,\qquad \|B\|_2\le M,\qquad K=\frac{M}{1-d}.$$
Then $A$ is invertible; writing $x=A^{-1}b$, the fixed linear derivative approximations $\widetilde J_bh=Bh$ and $\widetilde J_AH=-BH\widehat x$ obey
$$\|\widetilde J_b-J_b\|\le\eta_b=Kd,\qquad \|\widetilde J_A-J_A\|\le\eta_A=Kd\|\widehat x\|_2+K^2\rho.$$
Use Euclidean vector norms and Frobenius matrix-input norm. Their adjoints are $B^Tc$ and $-(B^Tc)\widehat x^T$. If these adjoints are evaluated by successful length-$n$ rounded real dots and componentwise outer products, put $t=\gamma_n\|B\|_F$, assuming $nu<1$. The resulting cotangent errors are bounded by $(\eta_b+t)\|c\|_2$ and $[\eta_A+(t+u(M+t))\|\widehat x\|_2]\|c\|_2$, respectively. These are derivative approximations to the mathematical solve map, not derivatives of the rounded program.

The fixed $B$ may be assembled from stored basis-vector solves using a triangular, Cholesky or QR backend; its defect must be certified rather than inferred from a factor residual. Replay must preserve the same $\widehat x,B$ and strict graph branch. Reverse accumulation additions are excluded.

## Facts & Assumptions

**Given:** The stated exact-residual and norm certificates, with arithmetic success for any evaluated pullbacks.

[F1] [[thm-implicit-differentiation-forward-and-adjoint-formulas]] gives $J_bh=A^{-1}h$, $J_AH=-A^{-1}Hx$ by differentiating $Ax-b=0$.

[F2] [[lem-rounded-linear-and-normal-residual-certificates]] supplies explicit linear residual allowances for the primal and stored basis-column solves.

[F3] [[thm-singular-value-decomposition]] supplies finite square-matrix singular-value and invertibility criteria.

## Proof

1.1 For every $z$, $\|ABz\|\ge(1-d)\|z\|$. Thus [F3] makes $AB$, hence both square factors, invertible and gives $\|(AB)^{-1}\|\le1/(1-d)$. Since $A^{-1}=B(AB)^{-1}$, $\|A^{-1}\|\le K$. The identity $B-A^{-1}=A^{-1}(AB-I)$ gives $\|B-A^{-1}\|\le Kd$, while $\widehat x-x=A^{-1}(A\widehat x-b)$ gives $\|\widehat x-x\|\le K\rho$. The residuals in these identities are exact; [F2] explains how to certify them from rounded evaluations. [given, F2, F3, algebra]

1.2 Apply [F1] at the exact point $(A,b)$. For the matrix edge, $BH\widehat x-A^{-1}Hx=(B-A^{-1})H\widehat x+A^{-1}H(\widehat x-x)$. Since $\|H\|_2\le\|H\|_F$, step 1.1 gives $\eta_A$; the vector edge gives $\eta_b$. Taking Euclidean/Frobenius adjoints yields the stated pullbacks with the same norm discrepancies. This explicitly accounts for the perturbed primal evaluation point through $\rho$. [F1, step 1.1, algebra]

2.1 Real dot-product coefficient expansion bounds $\|\widehat\lambda-B^Tc\|_2\le t\|c\|_2$, hence $\|\widehat\lambda\|_2\le(M+t)\|c\|_2$. Each rounded outer-product entry has error at most $u|\widehat\lambda_i\widehat x_j|$, so its Frobenius error is at most $u(M+t)\|\widehat x\|_2\|c\|_2$. Combine these with step 1.2 and the contribution $t\|\widehat x\|_2\|c\|_2$ from the rounded adjoint solve. [given, step 1.2, algebra]

2.2 For each realized nonzero $c$, any cotangent error vector $z$ is the action on $c$ of the linear map $zc^T/\|c\|^2$, whose induced norm is $\|z\|/\|c\|$; vectorize the matrix cotangent for the matrix edge. When $c=0$, successful operations return exact zero. Thus the realized rounded pullbacks admit local linear-map perturbations with the displayed bounds, without asserting global linearity of rounding. The graph perturbation theorem may propagate these realized maps with exact accumulation. [step 2.1, algebra, construct] ∎
