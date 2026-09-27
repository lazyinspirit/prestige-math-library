---
id: thm-zeta-bounds-in-classical-zero-free-region
title: "Zeta bounds in classical zero free region"
kind: theorem
status: published
origin: pipeline
deps: [lem-zeta-horizontal-logarithmic-derivative-comparison, thm-riemann-zeta-classical-zero-free-region, thm-euler-product-for-riemann-zeta, thm-riemann-zeta-continuation-to-the-right-half-plane]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.7, pp.174\u2013175"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

There are $0<c_2<c_1<c_0$ and $C>0$ such that for $|t|\ge3$ and $\sigma\ge1-c_1/\log(|t|+2)$,
$$|\zeta'/\zeta(\sigma+it)|\le C\log(|t|+2)\le C\log^2(|t|+2).$$
In the narrower $c_2$ region, $|1/\zeta(s)|\le C\log(|t|+2)$. For $|t|\le3$ and $1-c_2/\log(|t|+2)\le\sigma\le2$,
$$\zeta'/\zeta(s)+1/(s-1)=O(1),\qquad 1/\zeta(s)=O(|s-1|),$$
with removable interpretations at one.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-zeta-horizontal-logarithmic-derivative-comparison]]: There are absolute $d>0,C>0$, with $d<c_0$, such that for $|t|\ge3$ and $\sigma\ge1-d/\log(|t|+2)$, $\left|\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}\right|\le C\log(|t|+2).$

[F2] [[thm-riemann-zeta-classical-zero-free-region]]: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

[F3] [[thm-euler-product-for-riemann-zeta]]: For every $s\in\mathbb C$ with $\operatorname{Re}s>1$, $\zeta(s)=\prod_p \frac{1}{1-p^{-s}},$ where the product ranges over the primes and converges absolutely and locally uniformly on $\operatorname{Re}s>1$.

[F4] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: For every complex number $s$ with $\operatorname{Re}s>0$ and $s\ne1$, $\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx,$ where $\{x\}=x-\lfloor x\rfloor$ is the fractional part. The integral defines a holomorphic function on $\operatorname{Re}s>0$, so the right-hand side is meromorphic there with a single simple pole at $s=1$ of residue $1$.

## Proof

1.1 Choose $c_1$ smaller than the constant in the horizontal comparison. This gives the stated derivative bound throughout the high-height region. [F1]

2.1 At $s_1=1+1/L+it$, $L=\log(|t|+2)$, the Euler logarithm satisfies $|\log\zeta(s_1)|\le\log\zeta(1+1/L)\le\log(1+L)$, by comparing the positive real zeta series to its integral. Integrate $\zeta'/\zeta$ from $s_1$ horizontally to $s$ for $1-c_2/L\le\sigma\le1+1/L$. The length is $O(1/L)$ and the integrand is $O(L)$, so the change in the continued logarithm is $O(1)$. Exponentiating its negative real part gives $|1/\zeta(s)|=O(L)$. For larger sigma the Euler logarithm already gives that bound. [F3, step 1.1]

3.1 On the compact low-height portion choose $c_2<c_1$ sufficiently small that $h(s)=(s-1)\zeta(s)$ is holomorphic and nonvanishing on a neighborhood, including $h(1)=1$. Then $h'/h$ and $1/h$ are bounded there. The identities $\zeta'/\zeta+1/(s-1)=h'/h$ and $1/\zeta=(s-1)/h$ prove both low-height estimates and their removable interpretations. [F2, F4] ∎
