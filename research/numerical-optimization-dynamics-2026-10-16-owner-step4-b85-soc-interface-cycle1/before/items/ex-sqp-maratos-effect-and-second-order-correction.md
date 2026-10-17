---
id: ex-sqp-maratos-effect-and-second-order-correction
kind: example
title: "A full SQP step is rejected by the L1 merit test and repaired by SOC"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-sqp-linearized-quadratic-subproblem
  - def-sqp-l1-exact-penalty-merit
  - alg-sqp-merit-globalization-with-finite-budgets
  - alg-sqp-second-order-correction
  - thm-sqp-second-order-correction-residual-order
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.11, Example 18.1 and second-order correction, printed pp. 565–569 / PDF pp. 583–587."
---

## Statement

Let $h(x)=x_1^2+x_2^2-1=0$ and
$f(x)=2(x_1^2+x_2^2-1)-x_1$. At a feasible point
$x=(\cos\theta,\sin\theta)=(c,s)$, use multiplier estimate $\nu=-3/2$
and SQP Hessian model $B=I$. For nonzero sufficiently small $\theta$, the
SQP step $p=(s^2,-sc)$ has predicted decrease $D_\rho=s^2>0$, but its full
step increases the L1 merit for every $\rho>0$. The minimum-norm SOC
correction makes the full corrected step pass the Armijo test with
$\sigma=1/4$ for every fixed $\rho>0$ and all sufficiently small nonzero
$\theta$.

## Facts & Assumptions

**Given:** The equality-constrained SQP and L1 merit definitions, the SOC
formula, and $c=\cos\theta$, $s=\sin\theta$.

[F1] [[def-sqp-linearized-quadratic-subproblem]] imposes
$h(x)+Dh(x)p=0$ in the subproblem.

[F2] [[def-sqp-l1-exact-penalty-merit]] defines the merit and predicted
decrease $D_\rho$.

[F3] [[alg-sqp-second-order-correction]] sets
$w=-Dh(x)^T(Dh(x)Dh(x)^T)^{-1}h(x+p)$.

[F4] [[thm-sqp-second-order-correction-residual-order]] gives the local
quadratic correction size and cubic active-residual order under its smooth
full-rank hypotheses.

[F5] [[alg-sqp-merit-globalization-with-finite-budgets]] tests the full SOC
candidate against the Armijo threshold.

[A1] $\theta$ is sufficiently small and nonzero, $\rho>0$ is fixed,
$B=I$, the multiplier estimate is $-3/2$, and $\sigma=1/4$.

## Proof

1.1 At $x=(c,s)$, $h(x)=0$, $Dh(x)=2(c,s)$, and $\nabla f(x)=4(c,s)-(1,0)$. The unit tangent $t=(-s,c)$ satisfies $t^T\nabla f(x)=s$. The QP constraint gives $p\in\operatorname{span}(t)$; minimizing $\nabla f(x)^Tp+\tfrac12\|p\|_2^2$ on this line gives $p=-st=(s^2,-sc)$. Its QP multiplier is $-(4-c)/2$, since $p+\nabla f(x)=(4-c)(c,s)$. [given, F1, A1, algebra]

1.2 Here $Dh(x)Dh(x)^T=4$, so [F3] gives $w=(-cs^2/2,-s^3/2)$ and $\|w\|_2=s^2/2$. Direct substitution into the quadratic constraint yields $$h(x+p+w)=\frac{s^4}{4}.$$ The corrected first coordinate is $c+s^2(1-c/2)$, so the corrected objective change is $-s^2(1-c/2)+s^4/2$. Adding the penalty contribution gives $$\psi_\rho(x+p+w)-\psi_\rho(x) =-s^2(1-c/2)+s^4(1/2+\rho/4).$$ [A1, F3, algebra]

2.1 Since $x^Tp=0$ and $\|p\|_2^2=s^2$, $h(x+p)=s^2$. Also $\nabla f(x)^Tp=-s^2$, so [F2] gives $D_\rho=s^2$. The objective changes by $s^2$, while the equality violation changes from zero to $s^2$; hence the full-step merit change is $(1+\rho)s^2>0$, which fails the Armijo right side $-\sigma s^2<0$. [A1, F2, step 1.1, algebra]

3.1 Divide the corrected merit change plus $\sigma D_\rho$ by $s^2$. With $\sigma=1/4$, the result is $-1+c/2+s^2(1/2+\rho/4)+1/4$, which tends to $-1/4$ as $\theta\to0$. It is therefore negative for all sufficiently small nonzero $\theta$, proving the SOC Armijo test passes. The explicit $O(s^2)$ correction norm and $O(s^4)$ residual satisfy the quadratic-size and cubic-residual bounds of [F4]. [A1, F4, F5, step 1.2, algebra] ∎
