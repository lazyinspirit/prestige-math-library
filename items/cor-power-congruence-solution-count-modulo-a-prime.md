---
id: cor-power-congruence-solution-count-modulo-a-prime
kind: corollary
title: "For prime $p$ and $d\\ge1$, the congruence $x^d\\equiv1\\pmod p$ has $\\gcd(d,p-1)$ nonzero solutions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-unit-group-modulo-prime-is-cyclic, lem-order-characterisation, def-common-divisor-and-gcd, cor-gcd-quotients-coprime, lem-coprime-divides-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Proposition 2.5.5"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime and $d\ge1$. The congruence $x^d\equiv1\pmod p$ has exactly $\gcd(d,p-1)$ nonzero residue-class solutions. In particular, it has exactly $d$ solutions when $d\mid(p-1)$.

## Facts & Assumptions

**Given:** A prime $p$ and a positive integer $d$.

[L1] $(\mathbb Z/p)^\times$ is cyclic of order $p-1$ ([[cor-unit-group-modulo-prime-is-cyclic]]).

[L2] If $g$ has order $p-1$, then $g^u=1$ exactly when $(p-1)\mid u$, and its powers with exponents modulo $p-1$ are distinct ([[lem-order-characterisation]]).

[L3] The greatest common divisor $c=\gcd(d,p-1)$ divides both $d$ and $p-1$ ([[def-common-divisor-and-gcd]]).

[L4] Dividing two integers by their nonzero greatest common divisor gives coprime quotients ([[cor-gcd-quotients-coprime]]).

[L5] If two integers are coprime and one divides a product containing the other, it divides the remaining factor ([[lem-coprime-divides-product]]).

## Proof

**Proof technique:** direct.

1.1 Choose a generator $g$ from [L1]. Every nonzero class is uniquely $g^a$ with $a$ modulo $p-1$. [L1, L2, choose]

1.2 Put $c=\gcd(d,p-1)$. Since $p-1\ge1$, $c$ is nonzero; write $d=cd'$, $p-1=cm'$, and use [L4] to obtain $\gcd(d',m')=1$. [L3, L4, algebra]

2.1 By [L2], $(g^a)^d=1$ exactly when $(p-1)\mid ad$, which by step 1.2 and [L5] is equivalent to $m'\mid a$. [step 1.1, step 1.2, L2, L5]

3.1 Modulo $p-1=cm'$, precisely the $c$ classes $0,m',\ldots,(c-1)m'$ satisfy step 2.1, proving the count. If $d\mid(p-1)$ then $c=d$. [step 2.1, algebra] ∎
