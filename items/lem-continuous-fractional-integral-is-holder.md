---
id: lem-continuous-fractional-integral-is-holder
kind: lemma
title: Fractional integrals of continuous data are Hölder continuous
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-caputo-derivative-and-fractional-integral
  - thm-real-gamma-functional-equation
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - lem-fractional-integral-kernel-power-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The estimate is pointwise and choice-free.
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
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §3
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Statement

Let $T>0$, $0<\beta<1$, and $g\in C([0,T])$. Then $I^\beta g$ is continuous
on $[0,T]$, $I^\beta g(0)=0$, and

$$\|I^\beta g\|_\infty\le\frac{T^\beta}{\Gamma(\beta+1)}\|g\|_\infty,$$

$$|I^\beta g(t)-I^\beta g(s)|\le\frac{2\|g\|_\infty}{\Gamma(\beta+1)}|t-s|^\beta\qquad(s,t\in[0,T]).$$

## Facts & Assumptions

**Given:** $T>0$, $0<\beta<1$, and $g\in C([0,T])$.

[F1] [[def-caputo-derivative-and-fractional-integral]]: for $t\in[0,T]$,
$I^\beta g(t)=\Gamma(\beta)^{-1}\int_0^t(t-r)^{\beta-1}g(r)\,dr$.

[F2] [[thm-real-gamma-functional-equation]]: for $x>0$,
$\Gamma(x+1)=x\Gamma(x)$.

[F3] [[thm-real-power-continuity-and-derivatives]] and
[[cor-mean-value-theorem]]: positive powers are increasing, and a
differentiable function with negative derivative is decreasing.

[F4] [[lem-fractional-integral-kernel-power-integral]]:
$\int_0^t(t-r)^{\beta-1}dr=t^\beta/\beta$ for $t>0$.

## Proof

1.1 For each $t$, [F1] and $\beta>0$ give $|I^\beta g(t)|\le\|g\|_\infty\Gamma(\beta)^{-1}\int_0^t(t-r)^{\beta-1}dr =\|g\|_\infty t^\beta/(\beta\Gamma(\beta))$. By [F2] this is the first bound, and it also gives $I^\beta g(0)=0$. [given, F1, F2, F4, algebra]

1.2 Suppose $0\le s\le t\le T$ and put $\delta=t-s$. Since $\beta-1<0$, the kernel $(t-r)^{\beta-1}$ is no larger than $(s-r)^{\beta-1}$ for $0\le r<s$. Thus [F1] gives $$\Gamma(\beta)|I^\beta g(t)-I^\beta g(s)|\le\|g\|_\infty\left(\int_0^s\big((s-r)^{\beta-1}-(t-r)^{\beta-1}\big)dr+\int_s^t(t-r)^{\beta-1}dr\right).$$ The first integral is $(s^\beta-t^\beta+\delta^\beta)/\beta$. Its integrand is nonnegative, so the integral is nonnegative; and $t^\beta-s^\beta\ge0$ by monotonicity of positive powers in [F3], so the same formula bounds it above by $\delta^\beta/\beta$. The second integral is $\delta^\beta/\beta$. Therefore the right side is at most $2\|g\|_\infty\delta^\beta/\beta$. [given, F1, F3, F4, algebra]

2.1 Divide step 1.2 by $\Gamma(\beta)>0$ and use [F2]. This gives the stated Hölder bound when $s\le t$; interchanging $s,t$ gives it for every pair. The bound tends to zero with $|t-s|$, so $I^\beta g$ is continuous. [step 1.2, F2, algebra] ∎
