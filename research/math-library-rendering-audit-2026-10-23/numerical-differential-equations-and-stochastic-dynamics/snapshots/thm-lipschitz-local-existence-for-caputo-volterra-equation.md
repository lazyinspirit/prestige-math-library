---
id: thm-lipschitz-local-existence-for-caputo-volterra-equation
kind: theorem
title: A local Lipschitz existence theorem for the Caputo Volterra equation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-caputo-derivative-and-fractional-integral
  - lem-continuous-fractional-integral-is-holder
  - lem-fractional-integral-semigroup
  - lem-weakly-singular-fractional-gronwall
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-power-continuity-and-derivatives
  - def-banach-space
  - def-complete-metric-space
  - thm-c-k-complete-in-the-sup-metric
  - thm-heine-borel-r
  - def-metric-compactness
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. Picard iterates are specified recursively from a fixed initial function; no choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §§1 and 8
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Statement

Let $T_0>0$, $u_0\in\mathbb R$, $r>0$, and $0<\alpha<1$. Suppose
$f:[0,T_0]\times[u_0-r,u_0+r]\to\mathbb R$ is continuous and is Lipschitz
in its second variable with constant $L\ge0$. Let $M\ge0$ be a finite bound
for $|f(t,y)|$ on this rectangle. Choose $T\in(0,T_0]$ such that
$$\frac{M T^\alpha}{\Gamma(\alpha+1)}\le r.$$
Then the Volterra equation
$$u(t)=u_0+I^\alpha(f(\cdot,u(\cdot)))(t),\qquad 0\le t\le T,$$
has exactly one continuous solution in the closed ball
$$\{u\in C([0,T]):\|u-u_0\|_\infty\le r\}.$$
Such a $T$ exists because $T^\alpha\to0$ as $T\downarrow0$. This is a
local existence theorem for the integral (mild) solution. It does not claim
that this continuous solution is absolutely continuous under only the stated
hypotheses.

## Facts & Assumptions

**Given:** $T_0>0$, $u_0\in\mathbb R$, $r>0$, $0<\alpha<1$, continuous
$f$ on the stated rectangle, a Lipschitz constant $L\ge0$, a finite bound
$M$ for $|f|$ there, and $T\in(0,T_0]$ satisfying the displayed bound.

[F1] [[def-caputo-derivative-and-fractional-integral]]: for continuous
$g$, $I^\alpha g(t)=\Gamma(\alpha)^{-1}\int_0^t(t-s)^{\alpha-1}g(s)\,ds$.
The kernel is nonnegative.

[F2] [[lem-continuous-fractional-integral-is-holder]]: $I^\alpha g$ is
continuous and $\|I^\alpha g\|_\infty\le
T^\alpha\|g\|_\infty/\Gamma(\alpha+1)$.

[F3] [[lem-fractional-integral-semigroup]]: for continuous $g$,
$I^a(I^b g)=I^{a+b}g$ pointwise and
$I^c\mathbf1(t)=t^c/\Gamma(c+1)$.

[F4] [[lem-weakly-singular-fractional-gronwall]]: for every $K\ge0$ the
series $\sum_{n=0}^\infty K^n t^{n\alpha}/\Gamma(n\alpha+1)$ converges
uniformly on $[0,T]$; if nonnegative continuous $y$ satisfies
$y\le K I^\alpha y$, then $y\equiv0$.

[F5] [[thm-heine-borel-r]] and [[def-metric-compactness]]: $[0,T]$ is a
compact metric space and is nonempty since it contains $0$.
[[thm-c-k-complete-in-the-sup-metric]]: $C([0,T],\mathbb R)$ is complete
for $d_\infty(v,w)=\sup_{t\in[0,T]}|v(t)-w(t)|$, which equals
$\|v-w\|_\infty$. [[def-banach-space]] and
[[def-complete-metric-space]] identify this as completeness of its norm
metric.

[F6] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(\alpha+1)>0$.

[F7] [[thm-real-power-continuity-and-derivatives]]: since $\alpha>0$,
$T^\alpha\to0$ as $T\downarrow0$.

## Proof

1.1 By [F6]–[F7], $MT^\alpha/\Gamma(\alpha+1)\to0$ as $T\downarrow0$; since $T_0>0$ and $r>0$, choose $T\in(0,T_0]$ for which the displayed bound holds. [given, F6, F7, choose]

2.1 Let $B=\{u\in C([0,T]):\|u-u_0\|_\infty\le r\}$ and define $\Phi u=u_0+I^\alpha(f(\cdot,u(\cdot)))$. For $u\in B$, $s\mapsto(s,u(s))$ and then $s\mapsto f(s,u(s))$ are continuous, with $|f(s,u(s))|\le M$; [F1]–[F2] therefore make $\Phi u$ continuous and give $\|\Phi u-u_0\|_\infty\le MT^\alpha/\Gamma(\alpha+1)\le r$. Thus $\Phi$ maps $B$ into itself. [given, F1, F2, step 1.1, construct]

3.1 Set $u^{(0)}(t)=u_0$ and recursively $u^{(n+1)}=\Phi u^{(n)}$; step 2.1 keeps every iterate in $B$. For $n\ge1$ put $d_n(t)=|u^{(n)}(t)-u^{(n-1)}(t)|$. The bound on $f$ and [F3] give $d_1(t)\le M I^\alpha\mathbf1(t)=M t^\alpha/\Gamma(\alpha+1)$. [step 2.1, given, F3, construct]

4.1 For $n\ge1$, Lipschitz continuity and the positive kernel [F1] give $d_{n+1}\le L I^\alpha d_n$. Starting with step 3.1, induction and the pointwise semigroup identity [F3] yield $d_n(t)\le M L^{n-1}I^{n\alpha}\mathbf1(t)=M L^{n-1}t^{n\alpha}/\Gamma(n\alpha+1)$ for every $n\ge1$, with the coefficient $L^0$ at $n=1$ defined to be $1$. [step 3.1, given, F1, F3, induction]

5.1 Put $K=1+L$; then $L^{n-1}\le K^n$ for $n\ge1$, so step 4.1 and the uniform series bound [F4] show $\sum_{n=1}^\infty\|d_n\|_\infty<\infty$. The iterates are uniformly Cauchy; completeness [F5] gives a uniform limit $u\in C([0,T])$, and since every iterate lies in $B$, the norm limit also lies in $B$. [step 4.1, F4, F5, algebra]

6.1 Lipschitz continuity and [F2] give $\|\Phi u^{(n)}-\Phi u\|_\infty\le (LT^\alpha/\Gamma(\alpha+1))\|u^{(n)}-u\|_\infty\to0$. Since $u^{(n+1)}=\Phi u^{(n)}$ and $u^{(n+1)}\to u$, it follows that $u=\Phi u$, proving existence in $B$. [given, F2, step 5.1, algebra]

7.1 If $u,v\in B$ are two solutions, $y=|u-v|$ is continuous and nonnegative; their equations, Lipschitz continuity, and the positive kernel [F1] give $y(t)\le L I^\alpha y(t)$ for every $t$. Applying [F4] with $A=0$ gives $y\equiv0$, hence $u=v$. [given, F1, F4, algebra] ∎
