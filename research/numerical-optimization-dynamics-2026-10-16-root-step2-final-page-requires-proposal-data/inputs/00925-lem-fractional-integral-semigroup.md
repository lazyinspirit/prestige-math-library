---
id: lem-fractional-integral-semigroup
kind: lemma
title: Semigroup law for fractional integrals
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-caputo-derivative-and-fractional-integral
  - def-real-beta-integral
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-fractional-integral-kernel-power-integral
  - thm-substitution-for-improper-integrals
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The argument uses Tonelli on a sigma-finite Lebesgue product and no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §3, Lemma 3.4
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Statement

Let $T>0$, $a,b>0$, and $g\in L^1(0,T)$. Then, almost everywhere on
$(0,T)$,

$$I^a(I^b g)=I^{a+b}g.$$

Moreover,

$$\|I^a g\|_{L^1(0,T)}\le\frac{T^a}{\Gamma(a+1)}\|g\|_{L^1(0,T)}.$$

If $g\in C([0,T])$, the semigroup identity holds at every
$t\in[0,T]$. For every $c>0$ and $t\in[0,T]$,
$$I^c\mathbf 1(t)=\frac{t^c}{\Gamma(c+1)},$$
where $\mathbf 1$ is the constant function with value $1$.

## Facts & Assumptions

**Given:** $T>0$, positive orders $a,b$, and $g\in L^1(0,T)$.

[F1] [[def-caputo-derivative-and-fractional-integral]]:
$I^c g(t)=\Gamma(c)^{-1}\int_0^t(t-s)^{c-1}g(s)\,ds$ for every $c>0$ at
almost every $t$ where the integral is finite.

[F2] [[def-real-beta-integral]]:
$B(p,q)=\int_0^1 y^{p-1}(1-y)^{q-1}dy$ for $p,q>0$.

[F3] [[thm-real-beta-gamma-identity]]: for $p,q>0$,
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$.

[F4] [[thm-real-gamma-functional-equation]]: for $x>0$,
$\Gamma(x+1)=x\Gamma(x)$.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative
product-measurable function on a product of sigma-finite measure spaces has
equal product and iterated integrals, with either iterated order permitted.

[F6] [[lem-fractional-integral-kernel-power-integral]]:
$\int_0^t x^{c-1}dx=t^c/c$ for $c,t>0$.

[F7] [[def-real-gamma-function-by-the-euler-integral]]: $\Gamma(c)>0$
for every $c>0$.

[F8] [[thm-substitution-for-improper-integrals]]: a monotone differentiable
change of variable preserves an improper integral when the transformed
integral converges.

## Proof

1.1 The integrands are measurable. Applying Tonelli [F5] to their absolute values on $0\le r\le s\le t\le T$, for each fixed $r$ set $x=t-s$ and $y=s-r$; the region lies in $[0,T]^2$, so the kernel integral is at most $\int_0^T x^{a-1}dx\int_0^T y^{b-1}dy=T^{a+b}/(ab)$ by [F6]. Hence $\int_0^T\int_0^t\int_0^s(t-s)^{a-1}(s-r)^{b-1}|g(r)|\,dr\,ds\,dt\le T^{a+b}\|g\|_1/(ab)<\infty$, so the double integral is absolutely integrable for almost every fixed $t$ and Tonelli permits swapping $r,s$. The same theorem gives $\|I^ag\|_1\le\Gamma(a)^{-1}\int_0^T|g(r)|\int_r^T(t-r)^{a-1}dt\,dr\le T^a\|g\|_1/\Gamma(a+1)$ using [F4]–[F6] and positivity [F7]. [given, F1, F4, F5, F6, F7, algebra]

2.1 After swapping the order, the inner kernel integral is $\int_r^t(t-s)^{a-1}(s-r)^{b-1}ds=(t-r)^{a+b-1}\int_0^1(1-y)^{a-1}y^{b-1}dy=(t-r)^{a+b-1}B(b,a)$ by the substitution $y=(s-r)/(t-r)$ using [F8] and the definition [F2]. This applies for almost every $t$ by step 1.1; if $g$ is continuous, Tonelli and this formula bound the nonnegative double integral for each fixed $t$ by $\|g\|_\infty B(b,a)\int_0^t(t-r)^{a+b-1}dr<\infty$ using [F5]–[F6], so Fubini applies for every $t$. [step 1.1, F2, F5, F6, F8, algebra]

3.1 Substituting [F3] into step 2.1 cancels $\Gamma(a)\Gamma(b)$ in [F1], leaving $I^a(I^bg)(t)=\Gamma(a+b)^{-1}\int_0^t(t-r)^{a+b-1}g(r)dr=I^{a+b}g(t)$ almost everywhere, and everywhere for continuous $g$. This proves the semigroup identity and the $L^1$ bound in step 1.1. [step 1.1, step 2.1, F1, F3, algebra]

4.1 For the constant function, [F1] and [F6] give $I^c\mathbf1(t)=t^c/(c\Gamma(c))$ for $t>0$. Positivity from [F7] makes the quotient well-defined, and [F4] rewrites it as $t^c/\Gamma(c+1)$; both sides vanish at $t=0$. [given, F1, F4, F6, F7, algebra] ∎