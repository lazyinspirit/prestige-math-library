---
id: thm-euler-limit-formula-for-gamma
kind: theorem
title: "Euler's limit formula for Gamma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-meromorphic-continuation,
       thm-beta-gamma-identity,
       thm-real-gamma-euler-integral-convergence,
       thm-norm-inequality-for-the-vector-valued-integral,
       thm-linearity-of-improper-integrals,
       thm-comparison-test-for-improper-integrals,
       thm-logarithm-derivative-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C\setminus\{0,-1,-2,\dots\}$,

$$\Gamma(z)=\lim_{n\to\infty}\frac{n!\,n^z}{z(z+1)\cdots(z+n)},$$

locally uniformly on compact subsets of that pole-free set.

## Facts & Assumptions

**Given:** A complex number $z$ off the nonpositive integers.

[L1] Gamma has a meromorphic continuation to $\mathbb C$ with poles only at $0,-1,-2,\dots$ ([[thm-gamma-meromorphic-continuation]]).

[L2] The Beta-Gamma identity gives $B(z,n+1)=\Gamma(z)\,n!/\Gamma(z+n+1)$ whenever $\operatorname{Re}z>0$ ([[thm-beta-gamma-identity]]).

[L3] The real improper integral $\int_0^\infty u^{c-1}e^{-u}\,du$ converges for every $c>0$ ([[thm-real-gamma-euler-integral-convergence]]).

[L4] On ordered compact intervals, the norm of a real vector integral is bounded by the integral of its norm; apply this to real and imaginary parts to obtain the complex modulus bound. Linearity and comparison pass these bounds to absolutely convergent improper integrals, componentwise ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-linearity-of-improper-integrals]], [[thm-comparison-test-for-improper-integrals]]).

[L5] For positive real arguments, $\log x=\int_1^xdt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 First assume $\operatorname{Re}z>0$. By [L2] and the functional equation inside [L1], $$\frac{n!\,n^z}{z(z+1)\cdots(z+n)} =n^z\int_0^1 t^{z-1}(1-t)^n\,dt =\int_0^n u^{z-1}\left(1-\frac{u}{n}\right)^n du.$$ [L1, L2, given, algebra]

2.1 Let $K$ be a nonempty compact subset of $\{z:\operatorname{Re}z>0\}$, and put $a=\min_{z\in K}\operatorname{Re}z>0$, $b=\max_{z\in K}\operatorname{Re}z$. For $u>0$ define $B(u)=u^{a-1}$ when $u\le1$ and $B(u)=u^{b-1}$ when $u\ge1$; then $\sup_{z\in K}|u^{z-1}|\le B(u)$ and $\int_0^\infty B(u)e^{-u}\,du<\infty$ by [L3]. Set $p_n(u)=(1-u/n)^n$ for $0\le u<n$ and $p_n(u)=0$ for $u\ge n$. By [L5], $0\le p_n(u)\le e^{-u}$. Moreover, for $0\le u\le R<n$, $$0\le-n\log(1-u/n)-u=n\int_0^{u/n}\frac{v}{1-v}\,dv\le\frac{R^2}{2n(1-R/n)}.$$ Consequently $p_n\to e^{-u}$ uniformly on every bounded $u$-interval. [L3, L5, choose, algebra]

2.2 By [L4] and step 1.1, for $0<\delta<1<R$ the difference of the two absolutely convergent integrals satisfies $$\sup_{z\in K}\left|\int_0^\infty u^{z-1}p_n(u)\,du-\Gamma(z)\right|\le\int_0^\infty B(u)|p_n(u)-e^{-u}|\,du\le\int_0^\delta B(u)e^{-u}\,du+\sup_{\delta\le u\le R}|p_n(u)-e^{-u}|\int_\delta^R B(u)\,du+\int_R^\infty B(u)e^{-u}\,du.$$ The first and last terms can be made arbitrarily small, independently of $n$, by the convergent improper integral in step 2.1. For fixed $\delta,R$ the middle term tends to zero by its compact-interval uniform convergence. Thus the supremum over $K$ tends to zero. Since $K$ was arbitrary (and the empty case is immediate), step 1.1 converges locally uniformly to Euler's Gamma integral on the right half-plane. [L3, L4, step 1.1, step 2.1, algebra]

3.1 For $n\ge1$, write $$F_n(z):=\frac{n!\,n^z}{z(z+1)\cdots(z+n)}.$$ Let $K\subseteq\mathbb C\setminus\{0,-1,-2,\dots\}$ be compact. Choose $m\ge0$ so that $K+m+1:=\{z+m+1:z\in K\}$ lies in the right half-plane. Repeatedly using $$F_n(z)=\frac{z+n+1}{nz}F_n(z+1)$$ gives $$F_n(z)=\left(\prod_{j=0}^{m}\frac{z+n+j+1}{n(z+j)}\right)F_n(z+m+1).$$ On $K$, the prefactor converges uniformly to $1/(z(z+1)\cdots(z+m))$, while step 2.2 applied on $K+m+1$ gives $F_n(z+m+1)\to\Gamma(z+m+1)$ uniformly there. By [L1], $$\Gamma(z)=\frac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m)}$$ on $K$, so $F_n\to\Gamma$ uniformly on $K$. Since $K$ was arbitrary, the limit formula holds locally uniformly on the whole pole-free set. [step 2.2, L1, algebra] ∎

## Remarks

The harmonic-number asymptotic from [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]] reappears in the next theorem when the limit formula is reorganized into the reciprocal-Gamma product.
