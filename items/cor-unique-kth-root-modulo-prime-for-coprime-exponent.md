---
id: cor-unique-kth-root-modulo-prime-for-coprime-exponent
kind: corollary
title: "A coprime exponent gives a unique nonzero $k$-th root modulo a prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulers-criterion-for-binomial-congruences, cor-number-of-solutions-of-a-binomial-congruence, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, thm-linear-congruence-solvability-and-solution-count, thm-fermats-little-theorem, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Mascot, Legendre Symbols and Quadratic Reciprocity, Chapter 3"
      url: "https://www.maths.tcd.ie/~mascotn/teaching/2020/MAU23101/3%20Legendre.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime, let $k\ge1$, and let $a\in\mathbb Z$ satisfy $p\nmid a$ and $\gcd(k,p-1)=1$. Then $x^k\equiv a\pmod p$ has a unique nonzero solution class. If $\ell\ge0$ and

$$k\ell\equiv1\pmod{p-1},$$

then that class is $[a^\ell]_p$; the formula is independent of the chosen nonnegative representative $\ell$ of the inverse class.

## Facts & Assumptions

**Given:** A prime $p$, an integer $k\ge1$, and $a\in\mathbb Z$ with $p\nmid a$ and $\gcd(k,p-1)=1$.

[L1] If $n\ge1$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$, and $d=\gcd(m,\varphi(n))$, then $x^m\equiv a\pmod n$ is solvable if and only if $a^{\varphi(n)/d}\equiv1\pmod n$ ([[thm-eulers-criterion-for-binomial-congruences]]).

[L2] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L3] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L4] Under the hypotheses of [L1], a soluble congruence $x^m\equiv a\pmod n$ has exactly $\gcd(\varphi(n),m)$ solution classes ([[cor-number-of-solutions-of-a-binomial-congruence]]).

[L5] For $u,v\in\mathbb Z$ and $n\ge1$, the congruence $uy\equiv v\pmod n$ is soluble exactly when $\gcd(u,n)$ divides $v$, and then it has exactly $\gcd(u,n)$ solution classes ([[thm-linear-congruence-solvability-and-solution-count]]).

[L6] If $p$ is prime and $p\nmid a$, then $a^{p-1}\equiv1\pmod p$ ([[thm-fermats-little-theorem]]).

[L7] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 By [L7], $\gcd(a,p)=1$. Facts [L2] and [L3] specialise [L1] to modulus $p$, while $\gcd(k,p-1)=1$ reduces its test to $a^{p-1}\equiv1\pmod p$, which holds by [L6]. Thus the root congruence is soluble. [L1, L2, L3, L6, L7, given]

2.1 Applying [L4] with $n=p$ and $m=k$ gives exactly $\gcd(p-1,k)=1$ solution class, so the root is unique. It is nonzero because a zero root would give $x^k\equiv0\pmod p$, contrary to $p\nmid a$. [L2, L3, L4, step 1.1, given]

3.1 By [L5], the congruence $k\ell\equiv1\pmod{p-1}$ has one solution class and has nonnegative representatives. If $p=2$, every such $a^\ell$ is odd, so it represents the sole unit class and hence the unique root from step 2.1. Suppose $p$ is odd. For a nonnegative representative $\ell$, the congruence forces $\ell>0$, so $k\ell=1+t(p-1)$ with $t\ge0$; then [L6] gives $(a^\ell)^k=a^{1+t(p-1)}\equiv a\pmod p$. Two nonnegative representatives differ by a multiple of $p-1$; ordering them and applying [L6] to the nonnegative difference shows that their powers of $a$ represent the same class. [L5, L6, L7, step 2.1, algebra] ∎
