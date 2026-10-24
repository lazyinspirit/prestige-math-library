---
id: cor-holomorphic-roots-homologically-simply-connected-domains
kind: corollary
title: "A nonvanishing holomorphic function on such a domain has holomorphic roots of every positive order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holomorphic-logarithms-homologically-simply-connected-domains, def-homologically-simply-connected-complex-domain, thm-complex-exponential-addition-and-real-extension, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, thm-complex-nth-roots-and-roots-of-unity, def-complex-integer-powers, thm-induction-principle, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a homologically simply connected complex domain, let
$f:\Omega\to\mathbb C$ be holomorphic and nowhere zero, and let $m$ be a natural
number with $m\ge1$. Then there is a holomorphic, nowhere-zero
$q:\Omega\to\mathbb C$ with

$$q(z)^m=f(z)\qquad(z\in\Omega).$$

One such $q$ is $\exp(L/m)$ for any holomorphic logarithm $L$ of $f$; replacing
$L$ by another holomorphic logarithm of $f$ multiplies $q$ by an $m$th root of
unity.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega$, a holomorphic nowhere-zero $f:\Omega\to\mathbb C$, and a natural $m\ge1$.

[L1] On a homologically simply connected complex domain, a holomorphic nowhere-zero $f$ admits a holomorphic $L$ with $\exp\circ L=f$, and any two such differ by a constant in $2\pi i\mathbb Z$ ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[def-homologically-simply-connected-complex-domain]]).

[L2] $\exp(z+w)=\exp z\exp w$ for all complex $z,w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L3] The complex exponential is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L4] The composite of functions complex differentiable at the relevant points is complex differentiable, with $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]); constant multiples of complex differentiable functions are complex differentiable ([[thm-algebra-of-complex-derivatives]]).

[L5] For a natural $m\ge1$, the $m$th roots of unity are exactly the numbers $\exp(2\pi ik/m)$ for natural $k$ with $0\le k<m$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

[L6] Natural powers satisfy $z^0=1$ and $z^{j+1}=z^jz$ ([[def-complex-integer-powers]]).

[L7] If a property holds at $0$ and passes from $j$ to $j+1$, it holds for every natural number ([[thm-induction-principle]]).

[L8] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L9] $\ker(\exp)=2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] fix a holomorphic $L$ on $\Omega$ with $\exp\circ L=f$, and put $q=\exp(L/m)$, which is holomorphic on $\Omega$ by [L3] and [L4]. [given, L1, L3, L4]

1.2 The exponential never vanishes, since $|\exp v|=e^{\operatorname{Re}v}>0$ by [L8]; so $q$ is nowhere zero. [L8]

2.1 An induction on $j$ ([L7]) using [L2] and [L6] gives $\exp(v)^j=\exp(jv)$ for every complex $v$ and every natural $j$, the case $j=0$ reading $1=\exp(0)$. Taking $j=m$ and $v=L(z)/m$ gives $q(z)^m=\exp(L(z))=f(z)$. [step 1.1, L2, L6, L7]

3.1 If $L_1$ is another holomorphic logarithm of $f$ then $L_1=L+2\pi ik$ for a fixed integer $k$ by [L1] and [L9], so $\exp(L_1/m)=\exp(L/m)\exp(2\pi ik/m)$ by [L2], and $\exp(2\pi ik/m)$ is an $m$th root of unity by [L5]. [step 1.1, step 2.1, L1, L2, L5, L9] ∎
