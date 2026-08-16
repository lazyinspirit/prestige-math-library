---
id: cor-number-of-solutions-to-quadratic-congruence-modulo-prime
kind: corollary
title: '$x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, cor-number-of-solutions-of-a-binomial-congruence, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, thm-z-mod-p-is-a-field, lem-field-is-a-commutative-ring, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Corollary 4.2.3"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd prime $p$, the congruence

$$x^2\equiv a\pmod p$$

has exactly $1+(a/p)$ solution classes modulo $p$.

## Facts & Assumptions

**Given:** An integer $a$ and an odd prime $p$.

[L1] The Legendre symbol is $0$ when $p\mid a$, $1$ when $a$ is a quadratic residue modulo $p$, and $-1$ when $a$ is a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

[L4] Under its primitive-root, coprimality, positivity, and solubility hypotheses, $x^m\equiv a\pmod n$ has exactly $\gcd(\varphi(n),m)$ solution classes ([[cor-number-of-solutions-of-a-binomial-congruence]]).

[L5] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L6] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L7] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid a$, the equation in the field [L2] is $[x]_p^2=[0]_p$. Since [L3] gives no zero divisors, $[x]_p=[0]_p$ is the unique solution. This count is $1+0$ by [L1]. [L1, L2, L3, given]

1.2 Suppose $p\nmid a$. By [L7], $\gcd(a,p)=1$. If $(a/p)=1$, the congruence is soluble by [L1], and [L4], [L5], and [L6] give exactly $\gcd(p-1,2)=2$ roots. If $(a/p)=-1$, [L1] says that no root exists. [L1, L4, L5, L6, L7, algebra]

2.1 The three possible symbol values $0,1,-1$ therefore give respectively one, two, and zero solution classes, which in every case equals $1+(a/p)$. [L1, step 1.1, step 1.2] ∎
