---
id: lem-rounded-linear-and-normal-residual-certificates
kind: lemma
title: Rounded matrix products give certified linear and normal-equation residual allowances
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- lem-product-of-one-plus-deltas-gives-theta-n
- thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 1
---

## Statement

Let $A\in\mathbb F^{m\times n}$, $x\in\mathbb F^n$, $y\in\mathbb F^m$ have stored real or complex entries, with $m,n\ge1$. Use the operationwise arithmetic model, successful sequential dot products, and $0<u<1$ with $(\max(m,n)-1)u<1$. Define
$$g_k=\frac{1+6u}{1-(k-1)u}-1,\qquad F=\|A\|_F,\quad X=\|x\|_2,\quad Y=\|y\|_2.$$
For $\widehat v=\operatorname{fl}(Ax)$ and $\widehat w=\operatorname{fl}(\widehat v-y)$, put $V=g_nFX$ and $W=V+u(\|\widehat v\|_2+Y)$. Then
$$\|\widehat w-(Ax-y)\|_2\le W.$$
For a stored real $\lambda>0$, also compute $\widehat z=\operatorname{fl}(A^*\widehat w)$, $\widehat l=\operatorname{fl}(\lambda x)$ and $\widehat r=\operatorname{fl}(\widehat z+\widehat l)$, rounding scalar multiplication componentwise. The exact intended normal residual $r=A^*(Ax-y)+\lambda x$ satisfies
$$\|\widehat r-r\|_2\le\rho:=FW+g_mF\|\widehat w\|_2+u\lambda X+u(\|\widehat z\|_2+\|\widehat l\|_2).$$
Norms in these certificates mean exact norms or certified upper bounds. Uncontrolled rounding of the certificate itself is not authorized. The linear bound applies columnwise to certify $\|I-AB\|_2\le\|I-AB\|_F$ from stored basis-solve columns $B$.

## Facts & Assumptions

**Given:** The stated stored inputs, evaluation order and successful operations; every nonzero exact intermediate is normal, and zero operations are exact.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] specifies real component operations and six-real-operation complex multiplication.

[F2] [[lem-product-of-one-plus-deltas-gives-theta-n]] bounds sequential addition coefficient errors.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for real or complex Euclidean vectors, $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$. Applying this rowwise gives $\|Mz\|_2\le\|M\|_F\|z\|_2$, also for $M=A^*$.

## Proof

1.1 For $(a+ib)(c+id)$, each rounded real product has error at most $u$ times its absolute exact value. Each final real addition contributes at most $u(1+u)$ times the two corresponding product magnitudes. The Euclidean norm of the resulting real/imaginary error is at most $2(2u+u^2)|a+ib||c+id|\le6u|a+ib||c+id|$, since $u<1$. Conjugation is exact. Real products obey this conservative bound as well. [given, F1, algebra]

2.1 In a length-$k$ dot product, each product error from step 1.1 is propagated through at most $k-1$ additions. Expansion of each real component and [F2] bound the dot discrepancy by $[6u+\gamma_{k-1}(1+6u)]\sum_i|a_i||x_i|=g_k\sum_i|a_i||x_i|$, with $\gamma_0=0$. Combining rows and applying Cauchy-Schwarz gives $\|\widehat v-Ax\|_2\le g_nFX=V$. Componentwise subtraction has vector error at most $u(\|\widehat v\|_2+Y)$, so the linear residual allowance is $W$. Zeros cause no difficulty in this expansion. [F1, F2, F3, step 1.1, algebra]

3.1 Apply step 2.1 to $A^*\widehat w$ to get $\|\widehat z-A^*\widehat w\|_2\le g_mF\|\widehat w\|_2$. Transporting the earlier error through $A^*$ adds at most $FW$. The scalar product error is at most $u\lambda X$; the last addition adds at most $u(\|\widehat z\|_2+\|\widehat l\|_2)$. Their sum proves $\rho$. For basis columns, the triangle inequality combines each computed linear residual with its allowance; summing the squared column bounds gives a Frobenius certificate for $I-AB$, which bounds its induced Euclidean norm by Cauchy-Schwarz. [F1, F3, step 2.1, algebra] ∎
