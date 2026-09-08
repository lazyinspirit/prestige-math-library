---
id: lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution
kind: lemma
title: Convergence of the Goursat majorant
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 equations (47)–(52) and Remark 19, printed p. 10.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["thm-real-analytic-inverse-and-implicit-function-theorems", "lem-analytic-ordinary-differential-systems-by-coefficient-majorants", "lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion"]
---

## Statement

For integers $d,N\ge1$ and $M,r>0$, choose $0<\rho\le1$ with $a=1-dNM\rho/r>0$ and put $b=dN\rho/r$. The equation $a q-bq^2=M/(1-y/r)-M$ has a unique analytic branch $q=g(y)$ through $(0,0)$ with nonnegative coefficients. The solution of $v^{\prime}(\sigma)=g(\sigma/\rho+Nv(\sigma))$, $v(0)=0$, is analytic with nonnegative coefficients. Setting $U_j(t,x)=v(t+\rho\sum_i x_i)$ gives a convergent majorant system solution of the preceding lemma, with $U(0,0)=D_xU(0,0)=0$. Its initial trace $U(0,x)$ is nonnegative coefficientwise but need not vanish identically.

## Facts & Assumptions

**Given:** The positive parameters M,r, the finite positive integers N,d, and the prescribed Goursat majorant equation in the statement. A convergence proof and a choice of rho are required.

[F1] A nonzero implicit derivative gives a local analytic branch. ([[thm-real-analytic-inverse-and-implicit-function-theorems]]).

[F2] An analytic ODE has a unique analytic germ and preserves nonnegative coefficients with zero initial data. ([[lem-analytic-ordinary-differential-systems-by-coefficient-majorants]]).

[F3] An analytic positive-trace majorant with zero origin jet dominates the formal zero-data solution. ([[lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion]]).

## Proof

1.1 Admissible choices exist: $\rho=\min(1,r/(2dNM))$ gives $a\ge1/2$. Fix any rho allowed by the statement, so $a>0$. The analytic function $P(y,q)=aq-bq^2-M/(1-y/r)+M$ vanishes at $(0,0)$ and has $P_q(0,0)=a>0$. F1 gives g. Writing $g=\sum_{k\ge1}c_ky^k$ yields $c_k=(b/a)\sum_{i=1}^{k-1}c_ic_{k-i}+(M/a)r^{-k}$. At k=1 the sum is empty and $c_1=M/(ar)>0$; successive coefficients are nonnegative. [given, F1, algebra]

2.1 The function $g(\sigma/\rho+Nv)$ is analytic near zero, and its power-series coefficients in sigma,v are nonnegative by the finite binomial expansion and step 1.1. F2 therefore gives an analytic v with nonnegative coefficients. Moreover $v^{\prime}(0)=g(0)=0$. Choose a positive sigma-radius small enough that $|\sigma/\rho+Nv(\sigma)|$ is inside the actual convergence radius of g and less than r, and that $|bv^{\prime}(\sigma)|<1$. These inequalities hold by continuity and their zero origin values. [step 1.1, F2]

3.1 Put $q=v^{\prime}(\sigma)$ and $y=\sigma/\rho+Nv(\sigma)$. The algebraic identity of step 1.1 is equivalent to $(q+M)(1-bq)=M/(1-y/r)$, hence $q=M/((1-y/r)(1-bq))-M$ on the neighborhood of step 2.1. With $\sigma=t+\rho\sum_i x_i$ we have $\partial_tU_j=q$, $\partial_{x_i}U_j=\rho q$, $\sum_jU_j=Nv$, and $\sum_{i,j}\partial_{x_i}U_j=dN\rho q$. Substitution gives exactly the system G of F3. [step 1.1, step 2.1, F3, algebra]

4.1 On a sufficiently small polydisc in (t,x), $|t|+\rho\sum_i|x_i|$ is smaller than the radius selected in step 2.1, so this substitution converges absolutely. The coefficients of U and of its trace are nonnegative because those of v and the linear form are nonnegative. At the origin, $U_j=v(0)=0$ and $\partial_{x_i}U_j=\rho v^{\prime}(0)=0$. Thus every hypothesis on U in F3 holds and U dominates the formal zero-data solution. [step 2.1, step 3.1, F3] ∎

## Source notes

Gantumur, §4 equations (47)–(52) and Remark 19, printed p. 10.

