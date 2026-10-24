---
id: lem-weakly-singular-fractional-gronwall
kind: lemma
title: Weakly singular fractional Grönwall inequality
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-caputo-derivative-and-fractional-integral
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-functional-equation
  - def-real-power
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - cor-mean-value-theorem
  - lem-cauchy-reals-archimedean
  - thm-geometric-series
  - thm-direct-comparison-test
  - lem-fractional-integral-semigroup
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The proof is a finite iteration followed by a scalar limit and uses no choice principle.
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
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §1 and Theorem 8.2
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Statement

Let $T>0$, $0<\alpha<1$, $A,L\ge0$, and let $y\in C([0,T])$ be
nonnegative. If
$$y(t)\le A+L I^\alpha y(t)\qquad(0\le t\le T),$$
then for every $t\in[0,T]$,
$$y(t)\le A\sum_{k=0}^\infty\frac{L^k t^{k\alpha}}{\Gamma(k\alpha+1)}.$$
The $k=0$ term is $1$, including when $L=0$, and the series converges
uniformly on $[0,T]$. In particular, if $A=0$ then $y\equiv0$.

## Facts & Assumptions

**Given:** $T>0$, $0<\alpha<1$, $A,L\ge0$, $y\in C([0,T])$, $y\ge0$,
and the stated pointwise inequality.

[F1] [[def-caputo-derivative-and-fractional-integral]]: for continuous
$g$, $I^\beta g(t)=\Gamma(\beta)^{-1}\int_0^t(t-s)^{\beta-1}g(s)\,ds$;
its kernel is nonnegative for $\beta>0$.

[F2] [[lem-fractional-integral-semigroup]]: for continuous $g$,
$I^a(I^b g)=I^{a+b}g$ at every $t$, and
$I^c\mathbf 1(t)=t^c/\Gamma(c+1)$ for $a,b,c>0$.

[F3] [[def-real-gamma-function-by-the-euler-integral]] and
[[thm-real-gamma-functional-equation]]: for $x>0$,
$\Gamma(x+1)=\int_0^\infty e^{-s}s^x\,ds>0$, and $\Gamma(1)=1$.

[F4] [[def-real-power]], [[cor-exponential-reciprocal-and-positivity]],
[[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]],
and [[cor-mean-value-theorem]]: for $\alpha>0$, $x\mapsto x^\alpha$ is
strictly increasing on $(0,\infty)$ and $(x^r)^s=x^{rs}$ for positive $x$.

[F5] [[lem-cauchy-reals-archimedean]]: for every real $R$ there is a
natural number $k\ge1$ with $R<k$.

[F6] [[thm-geometric-series]] and [[thm-direct-comparison-test]]:
$\sum_{n=1}^\infty2^{-n}$ converges, and a nonnegative series dominated
termwise by a convergent nonnegative series converges.

## Proof

1.1 For $x>0$, restricting the Euler integral [F3] to $[x,x+1]$ gives $\Gamma(x+1)\ge e^{-(x+1)}x^x$, since the interval has length one and $e^{-s}s^x\ge e^{-(x+1)}x^x$ there. With $x=k\alpha$ and $k\ge1$, this yields $L^kT^{k\alpha}/\Gamma(k\alpha+1)\le e(B/k^\alpha)^k$, where $B:=LT^\alpha e^\alpha/\alpha^\alpha$. If $L=0$, every term with $k\ge1$ vanishes. Otherwise $B>0$; apply [F5] to $R=(2B)^{1/\alpha}$ to choose $k_0>R$. For $k\ge k_0$, [F4] gives $k^\alpha\ge k_0^\alpha>(2B)^{(1/\alpha)\alpha}=2B$, so $(B/k^\alpha)^k<2^{-k}$. The comparison test [F6] gives convergence of the scalar majorant tail. For any $p>q\ge k_0$ and any $t\in[0,T]$, the absolute value of the series segment from $q$ to $p$ is at most $e\sum_{k=q}^p2^{-k}$. This bound tends to zero independently of $t$, so the series is uniformly Cauchy on $[0,T]$ and hence converges uniformly there. [given, F3, F4, F5, F6, algebra]

1.2 The hypothesis is the iteration formula for $m=1$. If it holds for $m\ge1$, positivity of the kernel [F1] allows applying $L^mI^{m\alpha}$ to $y\le A+LI^\alpha y$ in its remainder, giving $L^mI^{m\alpha}y(t)\le A L^m I^{m\alpha}\mathbf1(t)+L^{m+1}I^{m\alpha}(I^\alpha y)(t)=A L^m t^{m\alpha}/\Gamma(m\alpha+1)+L^{m+1}I^{(m+1)\alpha}y(t)$ by [F2]. Substitution proves by induction that $y(t)\le A\sum_{k=0}^{m-1}L^kt^{k\alpha}/\Gamma(k\alpha+1)+L^mI^{m\alpha}y(t)$ for every $m\ge1$. [given, F1, F2, induction]

2.1 By [F1]–[F2], $0\le L^mI^{m\alpha}y(t)\le\|y\|_\infty L^mT^{m\alpha}/\Gamma(m\alpha+1)$. The last factor tends to zero as the $m$th term of the convergent series in step 1.1. Letting $m\to\infty$ in step 1.2 proves the claimed bound; if $A=0$, then $0\le y(t)\le0$ for every $t$, so $y\equiv0$. [step 1.1, step 1.2, F1, F2, algebra] ∎
