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
       thm-beta-gamma-identity]
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

## Proof

**Proof technique:** direct.

1.1 First assume $\operatorname{Re}z>0$. By [L2] and the functional equation inside [L1], $$\frac{n!\,n^z}{z(z+1)\cdots(z+n)} =n^z\int_0^1 t^{z-1}(1-t)^n\,dt =\int_0^n u^{z-1}\left(1-\frac{u}{n}\right)^n du.$$ [L1, L2, given, algebra]

2.1 For each fixed $u\ge0$, $(1-u/n)^n\to e^{-u}$, and on compact right-half-plane strips the integrands from step 1.1 are dominated by an integrable majorant. Therefore the integrals in step 1.1 converge locally uniformly to $\int_0^\infty u^{z-1}e^{-u}\,du=\Gamma(z)$. Hence the displayed limit formula holds on $\operatorname{Re}z>0$. [step 1.1, algebra]

3.1 For $n\ge1$, write $$F_n(z):=\frac{n!\,n^z}{z(z+1)\cdots(z+n)}.$$ Let $K\subseteq\mathbb C\setminus\{0,-1,-2,\dots\}$ be compact. Choose $m\ge0$ so that $K+m+1:=\{z+m+1:z\in K\}$ lies in the right half-plane. Repeatedly using $$F_n(z)=\frac{z+n+1}{nz}F_n(z+1)$$ gives $$F_n(z)=\left(\prod_{j=0}^{m}\frac{z+n+j+1}{n(z+j)}\right)F_n(z+m+1).$$ On $K$, the prefactor converges uniformly to $1/(z(z+1)\cdots(z+m))$, while step 2.1 applied on $K+m+1$ gives $F_n(z+m+1)\to\Gamma(z+m+1)$ uniformly there. By [L1], $$\Gamma(z)=\frac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m)}$$ on $K$, so $F_n\to\Gamma$ uniformly on $K$. Since $K$ was arbitrary, the limit formula holds locally uniformly on the whole pole-free set. [step 2.1, L1, algebra] ∎

## Remarks

The harmonic-number asymptotic from [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]] reappears in the next theorem when the limit formula is reorganized into the reciprocal-Gamma product.
