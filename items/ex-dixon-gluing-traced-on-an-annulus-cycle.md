---
id: ex-dixon-gluing-traced-on-an-annulus-cycle
kind: example
title: "Dixon's gluing traced on the boundary cycle of an annulus"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-dixon-entire-gluing, thm-global-cauchy-integral-formula-homology, ex-index-of-the-boundary-cycle-of-a-round-annulus, def-null-homologous-and-homologous-complex-cycles, def-integration-and-index-of-complex-chain, thm-circle-integrals-of-integer-monomials, thm-winding-number-chain-laws, thm-winding-number-circle-traversed-k-times, thm-liouville-bounded-entire-function, prop-linearity-of-complex-line-integrals, thm-algebra-of-complex-derivatives, def-complex-chain-and-cycle, lem-holomorphic-difference-quotient-is-jointly-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Let $\Omega=\{z:\tfrac12<|z|<3\}$, let $C_1(t)=\exp(it)$ and $C_2(t)=2\exp(it)$
on $[0,2\pi]$, let $\Gamma=C_2-C_1$ and let $f(z)=1/z$, holomorphic on $\Omega$.
Then $\Gamma$ is a cycle with trace $\{|z|=1\}\cup\{|z|=2\}\subseteq\Omega$,
null-homologous in $\Omega$, and

$$\Omega_0=\{z\notin\Gamma^\ast:n(\Gamma,z)=0\}=\{|z|<1\}\cup\{|z|>2\},\qquad \Omega\cup\Omega_0=\mathbb C.$$

Dixon's glued function is identically zero here: the transform

$$h_1(z)=\frac1{2\pi i}\int_\Gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta$$

vanishes at every $z\in\Omega_0$, by direct computation and not only by
Liouville's theorem. At $z=\tfrac32$, which lies in $\Omega$ off the trace, both
sides of the global Cauchy formula equal $\tfrac23$.

## Facts & Assumptions

**Given:** The sets and contours above, with $f(z)=1/z$.

[L1] If $\Omega$ is open, $f$ is holomorphic on $\Omega$, and $\Gamma$ is a null-homologous cycle with trace in $\Omega$, then, with $g$ the filled difference quotient of $f$, the function equal to $(2\pi i)^{-1}\int_\Gamma g(\zeta,z)\,d\zeta$ on $\Omega$ and to $(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ on $\Omega_0$ is a well-defined entire function, bounded and tending to $0$ at infinity ([[lem-dixon-entire-gluing]]). The filled difference quotient is $(f(\zeta)-f(z))/(\zeta-z)$ off the diagonal and $f'(z)$ on it ([[lem-holomorphic-difference-quotient-is-jointly-continuous]]).

[L2] For a cycle null-homologous in an open $\Omega$ and $f$ holomorphic there, $n(\Gamma,z)f(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ for every $z\in\Omega\setminus\Gamma^\ast$ ([[thm-global-cauchy-integral-formula-homology]]).

[L3] For $p\in\mathbb C$ and $0<r_1<r_2$ the chain built from the positively oriented circles of radii $r_2$ and $r_1$ about $p$ with coefficients $+1$ and $-1$ is a cycle with trace the two circles, index $0$ for $|z-p|<r_1$, $1$ for $r_1<|z-p|<r_2$ and $0$ for $|z-p|>r_2$; it is null-homologous in $\{s_1<|z-p|<s_2\}$ whenever $0<s_1<r_1$ and $r_2<s_2$ ([[ex-index-of-the-boundary-cycle-of-a-round-annulus]]).

[L4] A cycle with trace in an open $\Omega$ is null-homologous in $\Omega$ when its index vanishes at every point outside $\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L5] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$, and for $z\notin\Gamma^\ast$ one has $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma d\zeta/(\zeta-z)$ ([[def-integration-and-index-of-complex-chain]]); a chain is a finite list of integer-weighted contours ([[def-complex-chain-and-cycle]]).

[L6] For $a\in\mathbb C$, $r>0$ and every integer $m$, the positively oriented circle $\gamma(t)=a+r\exp(it)$ on $[0,2\pi]$ satisfies $\int_\gamma(z-a)^m\,dz=2\pi i$ when $m=-1$ and $0$ otherwise ([[thm-circle-integrals-of-integer-monomials]]).

[L7] Chain integration and the index are additive in the chain and reverse with it ([[thm-winding-number-chain-laws]]); complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L8] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $a+r\exp(ikt)$ on $[0,2\pi]$ has index $k$ for $|z-a|<r$ and $0$ for $|z-a|>r$ ([[thm-winding-number-circle-traversed-k-times]]).

[L9] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[L10] Nonvanishing quotients of functions complex differentiable at a point are complex differentiable there ([[thm-algebra-of-complex-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 By [L3] with $p=0$, $r_1=1$, $r_2=2$, $s_1=\tfrac12$ and $s_2=3$, the chain $\Gamma$ is a cycle with trace $\{|z|=1\}\cup\{|z|=2\}$ contained in $\Omega$, its index is $0$ for $|z|<1$, $1$ for $1<|z|<2$ and $0$ for $|z|>2$, and it is null-homologous in $\Omega$. Hence $\Omega_0=\{|z|<1\}\cup\{|z|>2\}$, and $\Omega\cup\Omega_0=\mathbb C$ because a point with $|z|\le\tfrac12$ or $|z|\ge3$ lies in $\Omega_0$. [given, L3, L4, L5]

1.2 The function $f(z)=1/z$ is holomorphic on $\Omega$ by [L10], since $0\notin\Omega$. [given, L10]

2.1 For $z\in\Omega_0$ with $z\ne0$ and $\zeta$ on either circle, the identity $\frac1{\zeta(\zeta-z)}=\frac1z\bigl(\frac1{\zeta-z}-\frac1\zeta\bigr)$ holds, and [L5], [L6] and [L8] give $\int_{C_j}\frac{d\zeta}{\zeta-z}=2\pi i\,n(C_j,z)$ and $\int_{C_j}\frac{d\zeta}{\zeta}=2\pi i$. For $|z|<1$ both indices are $1$, so each circle integral is $\frac1z(2\pi i-2\pi i)=0$; for $|z|>2$ both indices are $0$, so each is $\frac1z(0-2\pi i)=-2\pi i/z$. In both cases [L7] gives $h_1(z)=0$ as the difference of the two equal circle contributions. [step 1.1, step 1.2, L5, L6, L7, L8, algebra]

2.2 At $z=0$ the integrand is $\zeta^{-2}$, and [L6] with $m=-2$ gives $\int_{C_j}\zeta^{-2}\,d\zeta=0$ for both circles, so $h_1(0)=0$ as well. [step 1.1, L5, L6]

3.1 Steps 2.1 and 2.2 give $h_1\equiv0$ on $\Omega_0$; by [L1] the glued function agrees with $h_1$ there and is entire and bounded, so [L9] makes it the constant $0$, and the value on $\Omega$ is therefore $0$ too. [step 2.1, step 2.2, L1, L9]

4.1 Take $z=\tfrac32$, so $1<|z|<2$ and $z\in\Omega\setminus\Gamma^\ast$. The left side of [L2] is $n(\Gamma,z)f(z)=1\cdot\tfrac23=\tfrac23$ by step 1.1. For the right side, step 2.1's partial-fraction identity with $n(C_2,z)=1$ and $n(C_1,z)=0$ from [L8] gives $\int_{C_2}\frac{d\zeta}{\zeta(\zeta-z)}=\frac1z(2\pi i-2\pi i)=0$ and $\int_{C_1}\frac{d\zeta}{\zeta(\zeta-z)}=\frac1z(0-2\pi i)=-2\pi i/z$, so by [L7] the right side is $\frac1{2\pi i}\bigl(0+2\pi i/z\bigr)=\frac1z=\tfrac23$. The two sides agree. [step 1.1, step 2.1, step 3.1, L2, L6, L7, L8, algebra] ∎
