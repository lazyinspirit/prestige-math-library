---
id: thm-fermats-little-theorem
kind: theorem
title: "Fermat's little theorem: for prime $p$, $p\\nmid a$ implies $a^{p-1}\\equiv1\\pmod p$, and always $a^p\\equiv a\\pmod p$"
status: published
origin: session
deps: [thm-eulers-theorem, cor-totient-at-one-and-at-a-prime, def-prime, lem-prime-not-dividing-is-coprime, def-divides-in-z, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, def-group-power, lem-group-power-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

Let $p$ be a prime integer and $a\in\mathbb Z$. If $p\nmid a$, then

$$a^{p-1}\equiv1\pmod p.$$

For every integer $a$, without the nondivisibility hypothesis,

$$a^p\equiv a\pmod p.$$

## Facts & Assumptions

**Given:** A prime integer $p$ and an integer $a$.

[F1] A prime satisfies $p>1$, and $p\nmid a$ implies $\gcd(a,p)=1$ ([[def-prime]], [[lem-prime-not-dividing-is-coprime]]).

[L1] Euler's theorem gives $a^{\varphi(p)}\equiv1\pmod p$ when $\gcd(a,p)=1$, and $\varphi(p)=p-1$ for prime $p$ ([[thm-eulers-theorem]], [[cor-totient-at-one-and-at-a-prime]]).

[F2] Congruence is preserved by multiplication, and $p\mid x$ is equivalent to $x\equiv0\pmod p$ ([[lem-congruence-respects-integer-arithmetic]], [[def-congruence-modulo-an-integer]], [[def-divides-in-z]]).

[L2] Integer powers satisfy $a^p=a^{p-1}a$ for the positive exponent $p$ ([[def-group-power]], [[lem-group-power-laws]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that $p\nmid a$. Then $\gcd(a,p)=1$, so [L1] gives $a^{p-1}\equiv1\pmod p$. Multiplying by $a$ and using [L2] gives $a^p\equiv a\pmod p$. [assume-case nondiv, F1, L1, F2, L2]

1.2 Assume instead that $p\mid a$. Then $a\equiv0\pmod p$, so repeated multiplication gives $a^p\equiv0^p=0\equiv a\pmod p$. [assume-case div, F1, F2]

2.1 The first assertion is contained in step 1.1, and the two exhaustive cases $p\nmid a$ and $p\mid a$ give the unconditional congruence. [step 1.1, step 1.2, cases-exhaustive] ∎
