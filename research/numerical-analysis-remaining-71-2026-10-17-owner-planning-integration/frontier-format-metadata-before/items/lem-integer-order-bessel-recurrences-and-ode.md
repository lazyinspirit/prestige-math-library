---
id: lem-integer-order-bessel-recurrences-and-ode
kind: lemma
title: Bessel differential equations and order recurrences from the series
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, lem-integer-order-bessel-series-tail]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §10.25(i), modified Bessel differential equation
      url: https://dlmf.nist.gov/10.25
    - title: DLMF, §10.2(i), Bessel differential equation
      url: https://dlmf.nist.gov/10.2
    - title: DLMF, §§10.2(i), 10.6(i), and 10.25(i)
      url: https://dlmf.nist.gov/10.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For $z\ne0$, the functions in [[def-integer-order-bessel-series]] satisfy

$$z^2J_n''+zJ_n'+(z^2-n^2)J_n=0, \qquad z^2I_n''+zI_n'-(z^2+n^2)I_n=0.$$

For real or complex $z\ne0$ and integer $n\ge1$, they also satisfy

$$J_{n-1}(z)+J_{n+1}(z)=\frac{2n}{z}J_n(z), \qquad I_{n-1}(z)-I_{n+1}(z)=\frac{2n}{z}I_n(z).$$

In addition, $J_0'(z)=-J_1(z)$.

At $z=0$, the series limits are $J_0(0)=I_0(0)=1$ and
$J_n(0)=I_n(0)=0$ for $n\ge1$.

## Facts & Assumptions

**Given:** The series definitions of [[def-integer-order-bessel-series]] and
their compact-uniform convergence and termwise differentiability from
[[lem-integer-order-bessel-series-tail]].

[F1] [[def-integer-order-bessel-series]]: the coefficient of degree $2k+n$
is $(-1)^k/(2^{2k+n}k!(k+n)!)$ for $J_n$ and
$1/(2^{2k+n}k!(k+n)!)$ for $I_n$.

[F2] [[lem-integer-order-bessel-series-tail]]: the series and their first two
derivative series converge uniformly on compact disks.

## Proof
1.1 By [F2] we may differentiate termwise. For a monomial $z^{2k+n}$, $(z^2D^2+zD-n^2)z^{2k+n}=4k(k+n)z^{2k+n}$. The coefficient ratio in [F1] is $a_k/a_{k-1}=\mp1/[4k(k+n)]$ for $k\ge1$, with the minus sign for $J_n$ and plus sign for $I_n$. Thus the coefficient of each power cancels in the respective differential equation. [F1, F2, algebra]

1.2 For $J_{n-1}+J_{n+1}$, reindex the $J_{n+1}$ series so both terms have power $z^{2k+n-1}$. For $k\ge1$ their combined coefficient is $(-1)^kn/[2^{2k+n-1}k!(k+n)!]$, and for $k=0$ it is $1/[2^{n-1}(n-1)!]$. These are exactly the coefficients of $(2n/z)J_n$. For $I_{n-1}-I_{n+1}$ the same reindexing gives the same positive combined coefficient, proving the second recurrence. [F1, F2, algebra]

1.3 Differentiating the $J_0$ series termwise and reindexing $k=j+1$ gives $$J_0'(z)=\sum_{j=0}^{\infty}\frac{(-1)^{j+1}z^{2j+1}}{2^{2j+1}j!(j+1)!} =-J_1(z).$$ [F1, F2, algebra]

2.1 Setting $z=0$ in the convergent series leaves only the $k=0,n=0$ term; every term has a positive power of $z$ when $n\ge1$. Hence the stated limits hold. [F1, F2] ∎