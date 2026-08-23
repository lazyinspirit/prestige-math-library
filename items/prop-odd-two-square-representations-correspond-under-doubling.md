---
id: prop-odd-two-square-representations-correspond-under-doubling
kind: proposition
title: "Representations of an odd integer correspond to representations of twice that integer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, def-common-divisor-and-gcd, lem-every-integer-above-one-has-a-prime-divisor, thm-euclids-lemma]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II, Exercise 2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $m$ be a positive odd integer. The map

$$\Phi(x,y)=(x+y,x-y)$$

is a bijection from the ordered signed two-square representations of $m$ to those of $2m$, with inverse

$$\Psi(u,v)=\left(\frac{u+v}{2},\frac{u-v}{2}\right).$$

The same maps restrict to a bijection between the primitive representations ([[def-sum-of-two-squares-representation]]).

## Facts & Assumptions

**Given:** A positive odd integer $m$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[F2] An integer $d$ is a common divisor of $a$ and $b$ when $d\mid a$ and $d\mid b$ ([[def-common-divisor-and-gcd]]).

[L1] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L2] If a prime $p$ divides a product $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 If $x^2+y^2=m$, oddness of $m$ makes $x,y$ have opposite parity, so $x+y$ and $x-y$ are odd; moreover $(x+y)^2+(x-y)^2=2m$, so $\Phi$ sends representations of $m$ to representations of $2m$. [given, F1, algebra, construct]

1.2 If $u^2+v^2=2m$, reduction modulo $4$ shows that $u$ and $v$ are both odd: their squares cannot both be even because $2m\equiv2\pmod4$, and they cannot have opposite parity because their square sum would be odd. Thus $\Psi(u,v)$ has integer coordinates, and their squared sum is $(u^2+v^2)/2=m$. [given, F1, algebra]

2.1 Direct substitution gives $\Psi(\Phi(x,y))=(x,y)$ and $\Phi(\Psi(u,v))=(u,v)$. [step 1.1, step 1.2, algebra]

2.2 Suppose $(x,y)$ is primitive and a common divisor greater than $1$ divides both coordinates of $\Phi(x,y)$. By [L1] it has a prime divisor $\ell$. Since $x+y$ and $x-y$ are odd, $\ell$ is odd; because $\ell$ divides $2x$ and $2y$, [L2] gives $\ell\mid x$ and $\ell\mid y$, contradicting primitivity. Hence $\Phi(x,y)$ is primitive. [step 1.1, F2, L1, L2, algebra]

2.3 Suppose $(u,v)$ is primitive and a common divisor greater than $1$ divides both coordinates of $\Psi(u,v)$. A prime divisor $\ell$ supplied by [L1] then divides their sum $u$ and difference $v$, contradicting primitivity. Hence $\Psi(u,v)$ is primitive. [step 1.2, F2, L1, algebra]

3.1 The mutually inverse maps of step 2.1 give the first bijection, and steps 2.2 and 2.3 show that they restrict to mutually inverse maps on primitive representations. [step 2.1, step 2.2, step 2.3, F1] ∎
