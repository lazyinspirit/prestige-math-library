---
id: thm-sqp-second-order-correction-residual-order
kind: theorem
title: "Second-order correction reduces the active constraint residual to cubic order"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-sqp-second-order-correction
  - def-sqp-linearized-quadratic-subproblem
  - cor-second-order-taylor-expansion-with-the-hessian
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.11, printed pp. 568–569 / PDF pp. 586–587; correction residual order and merit decrease near a solution."
---

## Statement

Let $c_A:U\to\mathbb R^r$ with $r\ge1$ be $C^2$ on a convex ball about $x$, and assume
$\|D^2c_A(z)[u,v]\|_2\le M\|u\|_2\|v\|_2$ throughout that ball. Let
$A=Dc_A(x)$ have smallest singular value at least $s_0>0$, and let $p$ be
small enough that $x+p$ and the correction segment stay in the ball. If
$c_A(x)+Ap=0$ and $w$ is the correction of
[[alg-sqp-second-order-correction]], then
$$\|w\|_2\le\frac{M}{2s_0}\|p\|_2^2, \qquad \|c_A(x+p+w)\|_2=O(\|p\|_2^3)\quad(p\to0).$$
The correction is the unique minimum-norm vector satisfying
$Aw=-c_A(x+p)$.

## Facts & Assumptions

**Given:** The $C^2$ active constraint map, bounded second derivative,
uniform row rank, and a step satisfying the linearized active equations.

[F1] [[alg-sqp-second-order-correction]] sets
$w=-A^T(AA^T)^{-1}c_A(x+p)$ and proves it is the minimum-norm solution of
$Aw=-c_A(x+p)$.

[F2] [[cor-second-order-taylor-expansion-with-the-hessian]] gives the
second-order Taylor expansion with a remainder $o(\|p\|_2^2)$ for $C^2$
maps, componentwise.

[A1] The smallest singular value of $A$ is at least $s_0>0$, the second
derivative bound is $M$, and the trial and correction segments lie in the
convex ball.

## Proof

1.1 Taylor's formula along $x+tp$ and the bound on $D^2c_A$ give $$c_A(x+p)=c_A(x)+Ap+R_p=R_p,\qquad \|R_p\|_2\le\frac M2\|p\|_2^2.$$ Since $\|A^T(AA^T)^{-1}\|_2=1/s_{\min}(A)\le1/s_0$, [F1] yields $\|w\|_2\le M\|p\|_2^2/(2s_0)$ and $c_A(x+p)+Aw=0$. [given, F1, F2, algebra]

2.1 Put $y=x+p$. Taylor expansion at $y$ gives $$c_A(y+w)=c_A(y)+Dc_A(y)w+R_w =\bigl(Dc_A(y)-A\bigr)w+R_w,$$ where $\|Dc_A(y)-A\|_2\le M\|p\|_2$ and $\|R_w\|_2\le M\|w\|_2^2/2$. Therefore $$\|c_A(y+w)\|_2\le M\|p\|_2\|w\|_2+\tfrac M2\|w\|_2^2 \le \frac{M^2}{2s_0}\|p\|_2^3+\frac{M^3}{8s_0^2}\|p\|_2^4,$$ which is $O(\|p\|_2^3)$ for small $p$. The minimum-norm assertion is [F1]. [given, F1, step 1.1, algebra] ∎
