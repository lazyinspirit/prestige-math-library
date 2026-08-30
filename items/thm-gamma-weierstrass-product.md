---
id: thm-gamma-weierstrass-product
kind: theorem
title: "The Weierstrass product for reciprocal Gamma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euler-limit-formula-for-gamma,
       thm-euler-mascheroni-constant-and-harmonic-asymptotic,
       def-euler-gamma-function,
       thm-gamma-meromorphic-continuation,
       thm-identity-theorem-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
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

For every complex number $z$,

$$\frac1{\Gamma(z)}=ze^{\gamma z}\prod_{n\ge1}\left(1+\frac{z}{n}\right)e^{-z/n}.$$

with locally uniform convergence on $\mathbb C$.

## Facts & Assumptions

**Given:** Euler's limit formula for Gamma.

[L1] Off the poles of Gamma, $\Gamma(z)=\lim_{n\to\infty}n!\,n^z/[z(z+1)\cdots(z+n)]$ ([[thm-euler-limit-formula-for-gamma]]).

[L2] Harmonic numbers satisfy $H_n=\log n+\gamma+o(1)$ ([[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]).

[L3] On the right half-plane, Gamma is given by Euler's integral
([[def-euler-gamma-function]]).

[L4] Gamma is meromorphic on $\mathbb C$ with simple poles exactly at the
nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

[L5] A holomorphic function that vanishes on a set with an accumulation point
in its domain vanishes identically
([[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Define $$F(z):=ze^{\gamma z}\prod_{k\ge1}\left(1+\frac zk\right)e^{-z/k}.$$ On a fixed compact set, after finitely many initial factors the logarithms of the remaining factors are $O(k^{-2})$ uniformly in $z$. Hence the product converges locally uniformly and defines an entire function. Its tail is zero-free, so its zeros are simple and occur exactly at $0,-1,-2,\dots$. [given, algebra]

2.1 Let $x>0$. By [L3], $\Gamma(x)$ is a positive real number. Taking reciprocals in [L1] is therefore valid at $x$, and rewriting the finite product gives $$\frac1{\Gamma(x)}=\lim_{n\to\infty}x e^{(H_n-\log n)x}\prod_{k=1}^n\left(1+\frac xk\right)e^{-x/k}=F(x),$$ where [L2] supplies $H_n-\log n\to\gamma$. [L1, L2, L3, step 1.1, algebra]

3.1 On the right half-plane, both $F$ and $\Gamma$ are holomorphic by [L4], so $F\Gamma-1$ is holomorphic there. Step 2.1 makes it vanish on the positive real axis, which has accumulation points in that half-plane. Thus [L5] gives $$F(z)\Gamma(z)=1\qquad(\operatorname{Re}z>0).$$ [L4, L5, step 2.1]

4.1 By [L4], the only poles of $\Gamma$ are simple poles at the nonpositive integers. Step 1.1 gives $F$ a simple zero at each of those points, so every possible singularity of $F\Gamma$ there is removable. The resulting entire function equals $1$ on the right half-plane by step 3.1, hence equals $1$ on all of $\mathbb C$ by [L5]. Therefore $F$ is the entire reciprocal of Gamma, which proves the displayed product formula everywhere. [L4, L5, step 1.1, step 3.1] ∎
