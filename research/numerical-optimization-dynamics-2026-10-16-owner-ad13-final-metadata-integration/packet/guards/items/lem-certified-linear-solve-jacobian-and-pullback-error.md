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
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- def-standard-relative-floating-point-model-and-unit-roundoff
- lem-product-of-one-plus-deltas-gives-theta-n
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
Use Euclidean vector norms and Frobenius matrix-input norm. For any stored matrix $B$ and stored cotangent $c\in\mathbb R^n$, the exact adjoints are $B^Tc$ and $-(B^Tc)\widehat x^T$. Let $u$ be the unit roundoff in [[def-standard-relative-floating-point-model-and-unit-roundoff]], and assume $nu<1$. For each $j=1,\ldots,n$, compute $\widehat\lambda_j$ by the sequential real dot rule: $p_i=\operatorname{fl}(B_{ij}c_i)$ for $i=1,\ldots,n$, $s_1=p_1$, and $s_i=\operatorname{fl}(s_{i-1}+p_i)$ for $i=2,\ldots,n$, with each product and addition rounded separately; set $\widehat\lambda_j=s_n$. Form the matrix cotangent as the componentwise rounded outer product $-\operatorname{fl}(\widehat\lambda\widehat x^T)$. Assume every operation succeeds in the operationwise model [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each exact intermediate is zero or normal and every rounded output is finite. Put $\gamma_n=nu/(1-nu)$ and $t=\gamma_n\|B\|_F$. The resulting cotangent errors are bounded by $(\eta_b+t)\|c\|_2$ and $[\eta_A+(t+u(M+t))\|\widehat x\|_2]\|c\|_2$, respectively. These are derivative approximations to the mathematical solve map, not derivatives of the rounded program.

The fixed $B$ may be assembled from stored basis-vector solves using a triangular, Cholesky or QR backend; its defect must be certified rather than inferred from a factor residual. Replay must preserve the same $\widehat x,B$ and strict graph branch. Reverse accumulation additions are excluded.

## Facts & Assumptions

**Given:** The stated exact-residual and norm certificates, with arithmetic success for any evaluated pullbacks.

[F1] [[thm-implicit-differentiation-forward-and-adjoint-formulas]] gives $J_bh=A^{-1}h$, $J_AH=-A^{-1}Hx$ by differentiating $Ax-b=0$.

[F2] [[lem-rounded-linear-and-normal-residual-certificates]] supplies explicit linear residual allowances for the primal and stored basis-column solves.

[F3] [[thm-singular-value-decomposition]] supplies finite square-matrix singular-value and invertibility criteria.

[F4] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: real products and additions are separately rounded operations, and the operationwise success condition excludes nonzero out-of-range exact intermediates.

[F5] [[def-standard-relative-floating-point-model-and-unit-roundoff]]: a successful nonzero real rounded operation has relative error at most $u$, and exact zero operations are exact.

[F6] [[lem-product-of-one-plus-deltas-gives-theta-n]]: if $|\delta_i|\le u$ for $k$ factors and $ku<1$, then $|\prod_{i=1}^k(1+\delta_i)-1|\le\gamma_k=ku/(1-ku)$.

## Proof

1.1 For every $z$, $\|ABz\|\ge(1-d)\|z\|$. Thus [F3] makes $AB$, hence both square factors, invertible and gives $\|(AB)^{-1}\|\le1/(1-d)$. Since $A^{-1}=B(AB)^{-1}$, $\|A^{-1}\|\le K$. The identity $B-A^{-1}=A^{-1}(AB-I)$ gives $\|B-A^{-1}\|\le Kd$, while $\widehat x-x=A^{-1}(A\widehat x-b)$ gives $\|\widehat x-x\|\le K\rho$. The residuals in these identities are exact; [F2] explains how to certify them from rounded evaluations. [given, F2, F3, algebra]

1.2 Apply [F1] at the exact point $(A,b)$. For the matrix edge, $BH\widehat x-A^{-1}Hx=(B-A^{-1})H\widehat x+A^{-1}H(\widehat x-x)$. Since $\|H\|_2\le\|H\|_F$, step 1.1 gives $\eta_A$; the vector edge gives $\eta_b$. Taking Euclidean/Frobenius adjoints yields the stated pullbacks with the same norm discrepancies. This explicitly accounts for the perturbed primal evaluation point through $\rho$. [F1, step 1.1, algebra]

2.1 Fix an output coordinate $j$ of $\widehat\lambda$ and put $q_i=B_{ij}c_i$. By success in [F4] and the relative bound in [F5], $p_i=q_i(1+\alpha_i)$ with $|\alpha_i|\le u$; exact-zero products have $\alpha_i=0$. For each addition $i=2,\ldots,n$, write $s_i=(s_{i-1}+p_i)(1+\beta_i)$ with $|\beta_i|\le u$, taking $\beta_i=0$ when the exact sum is zero. Expanding gives $\widehat\lambda_j=s_n=\sum_{i=1}^n q_i(1+\alpha_i)\prod_{k=\max(2,i)}^n(1+\beta_k)$, with an empty product interpreted as $1$. Each coefficient has at most $n$ factors: for $i=1$ it has one product factor and $n-1$ addition factors, while for $i\ge2$ it has one product factor and $n-i+1$ addition factors. Thus [F6], $nu<1$, and monotonicity of $ku/(1-ku)$ imply that each coefficient differs from $1$ by at most $\gamma_n$. Hence $|\widehat\lambda_j-(B^Tc)_j|\le\gamma_n\sum_i|B_{ij}||c_i|$. Stacking these bounds and applying $\||B|^T|c|\|_2\le\|B\|_F\|c\|_2$ gives $\|\widehat\lambda-B^Tc\|_2\le t\|c\|_2$ and then $\|\widehat\lambda\|_2\le(M+t)\|c\|_2$. Each rounded outer-product entry has error at most $u|\widehat\lambda_i\widehat x_j|$, so its Frobenius error is at most $u(M+t)\|\widehat x\|_2\|c\|_2$. Combining these bounds with step 1.2 gives the stated vector and matrix cotangent estimates. [given, F4, F5, F6, step 1.2, algebra]

2.2 For each realized nonzero $c$, any cotangent error vector $z$ is the action on $c$ of the linear map $zc^T/\|c\|^2$, whose induced norm is $\|z\|/\|c\|$; vectorize the matrix cotangent for the matrix edge. When $c=0$, successful operations return exact zero. Thus the realized rounded pullbacks admit local linear-map perturbations with the displayed bounds, without asserting global linearity of rounding. The graph perturbation theorem may propagate these realized maps with exact accumulation. [step 2.1, algebra, construct] ∎
