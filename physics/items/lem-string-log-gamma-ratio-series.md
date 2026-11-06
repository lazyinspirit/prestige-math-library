---
id: lem-string-log-gamma-ratio-series
kind: lemma
title: Log Gamma ratio series on the unit disk
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 0
domain: mathematics
deps:
  - thm-gamma-weierstrass-product
  - def-euler-mascheroni-constant
  - def-riemann-zeta-function
dependency_roles:
  thm-gamma-weierstrass-product: mathematical-premise
  def-euler-mascheroni-constant: mathematical-premise
  def-riemann-zeta-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Eric D’Hoker and Michael B. Green, Exploring transcendentality in superstring amplitudes"
      url: "https://arxiv.org/pdf/1906.01652v3"
      locator: "§2.2, PDF pp. 7–9, expansion of the symmetric tree Gamma ratio; the locally uniform logarithmic series is proved here."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For $|w|<1$, choose the analytic logarithm equal to $0$ at $w=0$. Then
$$\log\frac{\Gamma(1-w)}{\Gamma(1+w)}=2\gamma w+2\sum_{m=1}^{\infty}\frac{\zeta(2m+1)}{2m+1}w^{2m+1}.$$
The series converges locally uniformly on the unit disk.

## Facts & Assumptions

**Given:** $w\in\mathbb C$, $|w|<1$; $\gamma$ and $\zeta(s)$ have the definitions in the cited mathematical suppliers.

[F1] [[thm-gamma-weierstrass-product]]: $1/\Gamma(1+w)=e^{\gamma w}\prod_{n\ge1}(1+w/n)e^{-w/n}$, locally uniformly, and the corresponding formula with $w$ replaced by $-w$.

[F2] [[def-euler-mascheroni-constant]] defines $\gamma$; [[def-riemann-zeta-function]] gives $\zeta(s)=\sum_{n\ge1}n^{-s}$ for $\operatorname{Re}s>1$.

## Proof

1.1 Fix $0<r<1$ and $|w|\le r$. For each $n\ge1$, the power-series logarithms at $1$ are defined because $|w/n|<1$, and
$$\log(1+w/n)-\log(1-w/n)-2w/n=2\sum_{m\ge1}\frac{w^{2m+1}}{(2m+1)n^{2m+1}}.$$
The absolute value of the right side is at most $2r^3(1-r^2)^{-1}n^{-3}$, since $2m+1\ge3$ and the geometric tail is bounded by that expression. Thus the sum over $n$ converges uniformly on $|w|\le r$. [given, F1, algebra]

2.1 Taking the quotient of the two products in [F1] and using the logarithm branch fixed at zero gives
$$\log\frac{\Gamma(1-w)}{\Gamma(1+w)}=2\gamma w+\sum_{n\ge1}\bigl(\log(1+w/n)-\log(1-w/n)-2w/n\bigr).$$
The bound in 1.1 justifies interchanging the two sums locally uniformly. Summing $n^{-(2m+1)}$ by [F2] gives the stated series. Since every compact subset of $|w|<1$ lies in some $|w|\le r<1$, the convergence is locally uniform throughout the disk. [F1, F2, step 1.1, algebra] ∎

## Remarks

The expansion is an exact local analytic identity. In an on-shell four-graviton amplitude the variables $s,t,u$ are dimensionless; the kinematic relation $s+t+u=0$ cancels the linear term after summing the three copies.
