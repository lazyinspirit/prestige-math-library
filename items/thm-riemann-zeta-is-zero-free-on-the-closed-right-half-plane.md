---
id: thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane
kind: theorem
title: "The Riemann zeta function has no zeros on the closed half-plane $\\operatorname{Re}s\\ge1$, except for its pole at $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one, thm-riemann-zeta-continuation-to-the-right-half-plane, thm-euler-product-for-riemann-zeta]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8, Theorem 5"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

The meromorphic continuation of $\zeta$ has no zeros on the closed half-plane
$\operatorname{Re}s\ge1$. Its only singularity there is the simple pole at
$s=1$.

## Facts & Assumptions

**Given:** A real number $t$.

[L1] Zeta has no zeros on $\operatorname{Re}s>1$ ([[cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one]]).

[L2] On $\operatorname{Re}s>0$, zeta is meromorphic with only a simple pole at $1$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[L3] On $\operatorname{Re}s>1$, the Euler product for zeta converges
absolutely and locally uniformly ([[thm-euler-product-for-riemann-zeta]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], only the boundary line $\operatorname{Re}s=1$ remains to be checked. Suppose $t\ne0$ and $\zeta(1+it)=0$. Since [L2] makes zeta holomorphic at $1+it$, there are $\delta>0$ and $C>0$ such that $$|\zeta(\sigma+it)|\le C(\sigma-1)\qquad(1<\sigma<1+\delta).$$ [L1, L2, given, choose, algebra]

2.1 For $\sigma>1$ and real $u$, absolute convergence in [L3] and the power series $-\log(1-z)=\sum_{m\ge1}z^m/m$ give $$\log|\zeta(\sigma+iu)|=\sum_p\sum_{m\ge1}\frac{\cos(mu\log p)}{m p^{m\sigma}}.$$ Consequently $$\log\!\left|\zeta(\sigma)^3\zeta(\sigma+it)^4\zeta(\sigma+2it)\right|=\sum_p\sum_{m\ge1}\frac{3+4\cos(mt\log p)+\cos(2mt\log p)}{m p^{m\sigma}}\ge0,$$ because $3+4\cos\theta+\cos 2\theta=2(1+\cos\theta)^2\ge0$. Exponentiating gives $$\left|\zeta(\sigma)^3\zeta(\sigma+it)^4\zeta(\sigma+2it)\right|\ge1.$$ On the other hand, [L2] gives $\zeta(\sigma)=1/(\sigma-1)+O(1)$ as $\sigma\downarrow1$, so $\zeta(\sigma)^3=O((\sigma-1)^{-3})$. The point $1+2it$ is not $1$, so [L2] also makes $\zeta(\sigma+2it)$ bounded as $\sigma\downarrow1$. Combining these bounds with step 1.1 yields $$\left|\zeta(\sigma)^3\zeta(\sigma+it)^4\zeta(\sigma+2it)\right|=O(\sigma-1)\to0,$$ contradicting the lower bound above. [step 1.1, L2, L3, algebra]

3.1 Therefore $\zeta(1+it)\ne0$ for every $t\ne0$. At $t=0$, [L2] says $s=1$ is a simple pole, not a zero. Together with [L1], this proves that zeta has no zeros on $\operatorname{Re}s\ge1$. [step 2.1, L1, L2, algebra] ∎
